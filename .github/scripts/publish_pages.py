"""Publish the uploaded Pages artifact without canceling slow file synchronization.

Uses the same REST/OIDC endpoints as actions/deploy-pages. No stored credentials,
new hosting, dependencies or deployment permissions. Only API status `succeed`
plus the public release stamp can complete this step successfully.
"""

import hashlib
import json
import os
from pathlib import Path
import time
import urllib.error
import urllib.parse
import urllib.request


TERMINAL_ERRORS = {
    'deployment_failed', 'deployment_content_failed',
    'deployment_cancelled', 'deployment_lost',
}
TRANSIENT_HTTP = {408, 429, 500, 502, 503, 504}


class ApiError(RuntimeError):
    def __init__(self, status):
        self.status = status
        # Never include request headers, OIDC values or raw response bodies.
        super().__init__(f'GitHub API returned HTTP {status}.')


def request_json(url, token=None, method='GET', payload=None):
    headers = {'Accept': 'application/vnd.github+json',
               'X-GitHub-Api-Version': '2022-11-28',
               'User-Agent': 'stray-kitty-pages-publisher'}
    if token:
        headers['Authorization'] = f'Bearer {token}'
    body = None
    if payload is not None:
        headers['Content-Type'] = 'application/json'
        body = json.dumps(payload).encode('utf-8')
    request = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=25) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        raise ApiError(error.code) from None
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        raise ApiError(503) from None


def find_deployment(endpoint, token):
    try:
        return request_json(endpoint, token)
    except ApiError as error:
        if error.status == 404:
            return None
        raise


def create_or_resume(endpoint, token, sha, artifact_id):
    existing = find_deployment(endpoint + '/' + sha, token)
    if existing:
        if existing.get('status') in TERMINAL_ERRORS:
            raise RuntimeError('This commit has a terminal Pages deployment. Publish a fresh '
                               'corrected revision; do not reuse a canceled deployment ID.')
        print('Resuming the existing deployment for this commit.', flush=True)
        return sha

    oidc = request_json(os.environ['ACTIONS_ID_TOKEN_REQUEST_URL'],
                        os.environ['ACTIONS_ID_TOKEN_REQUEST_TOKEN'])['value']
    # The GitHub runner consumes this command without displaying the token.
    print('::add-mask::' + oidc, flush=True)
    try:
        created = request_json(endpoint, token, method='POST', payload={
            'artifact_id': artifact_id,
            'pages_build_version': sha,
            'oidc_token': oidc,
        })
    except ApiError:
        # A lost POST response does not prove that creation failed. Recover the
        # accepted commit instead of blindly posting a duplicate deployment.
        if find_deployment(endpoint + '/' + sha, token):
            return sha
        raise
    return str(created.get('id') or sha)


def wait_for_deployment(endpoint, token, timeout_seconds=1800):
    started = time.monotonic()
    previous_status = None
    last_report = -60
    while True:
        elapsed = time.monotonic() - started
        try:
            status = request_json(endpoint, token).get('status', 'unknown_status')
        except ApiError as error:
            if error.status not in TRANSIENT_HTTP | {404}:
                raise
            status = f'temporary_api_http_{error.status}'
        if status != previous_status or elapsed - last_report >= 60:
            print(f'Pages: {status} ({int(elapsed)}s elapsed).', flush=True)
            previous_status, last_report = status, elapsed
        if status == 'succeed':
            return
        if status in TERMINAL_ERRORS:
            raise RuntimeError(f'Pages reported terminal status: {status}.')
        remaining = timeout_seconds - (time.monotonic() - started)
        if remaining <= 0:
            # Deliberately no cancel API call: do not abort a healthy publisher
            # merely because this bounded watcher finished. A rerun resumes it.
            raise RuntimeError('Pages is still pending after 30 minutes. The accepted '
                               'deployment was left running; rerun to resume checking it.')
        time.sleep(min(15, remaining))


def verify_public_release(page_url, expected, timeout_seconds=300):
    started = time.monotonic()
    attempt = 0
    while True:
        attempt += 1
        # Each propagation check uses a new key, so a cached old/404 response
        # cannot make an already-published release look stale for ten minutes.
        query = urllib.parse.urlencode({'commit': expected['commit'],
                                       'run': expected['run_id'], 'check': attempt})
        stamp_url = page_url.rstrip('/') + '/deployment.json?' + query
        try:
            published = request_json(stamp_url)
            if (str(published.get('run_id', '')).isdigit()
                    and all(published.get(key) == expected[key]
                            for key in ('commit', 'current_sha256', 'previous_sha256'))):
                for name, key in [('index.html', 'current_sha256'),
                                  ('previous/index.html', 'previous_sha256')]:
                    url = page_url.rstrip('/') + '/' + name + '?' + query
                    with urllib.request.urlopen(url, timeout=25) as response:
                        digest = hashlib.sha256(response.read()).hexdigest()
                    if digest != expected[key]:
                        raise ValueError('Public deck content has not propagated yet.')
                print('Public Current and Previous match this exact release.', flush=True)
                return
        except (ApiError, ValueError, urllib.error.URLError, TimeoutError):
            pass
        remaining = timeout_seconds - (time.monotonic() - started)
        if remaining <= 0:
            raise RuntimeError('Pages accepted the release, but public verification did not '
                               'match this commit. No success was reported; rerun to recheck.')
        time.sleep(min(10, remaining))


def main():
    token = os.environ['GH_TOKEN']
    sha = os.environ['GITHUB_SHA']
    endpoint = (os.environ['GITHUB_API_URL'].rstrip('/') + '/repos/'
                + os.environ['GITHUB_REPOSITORY'] + '/pages')
    settings = request_json(endpoint, token)
    if settings.get('build_type') != 'workflow':
        raise RuntimeError('Pages must use the existing GitHub Actions publishing source.')
    page_url = settings['html_url']
    if urllib.parse.urlsplit(page_url).scheme != 'https' or '\n' in page_url:
        raise RuntimeError('Unexpected public Pages URL.')
    deployment_id = create_or_resume(endpoint + '/deployments', token, sha,
                                     int(os.environ['ARTIFACT_ID']))
    wait_for_deployment(endpoint + '/deployments/' + deployment_id, token)
    expected = json.loads(Path('docs/deployment.json').read_text(encoding='utf-8'))
    # A resumed deployment can be from an earlier run of the same commit.
    # The verifier requires that commit and both actual deck hashes to match.
    verify_public_release(page_url, expected)
    with open(os.environ['GITHUB_OUTPUT'], 'a', encoding='utf-8') as output:
        output.write(f'page_url={page_url}\nstatus=succeed\n')


if __name__ == '__main__':
    try:
        main()
    except (ApiError, RuntimeError) as error:
        print('::error::' + str(error), flush=True)
        raise SystemExit(1)

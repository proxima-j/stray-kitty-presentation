# Pages deployment recovery — November 9, 2026

The Page 20 readability revision is `359cf6972224af8426656e61e1c887feeb409368`, marker `20261109-teamwork-focus1`. Its presentation files passed the focused local checks. Current and Previous remain the existing two decks.

## Observed failure

- [Original run 42627983420](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42627983420): build/artifact upload passed; Pages remained at `syncing_files` until its ten-minute deployment timeout and cancellation.
- A deploy-job-only retry was accepted but stayed queued with no new jobs. Both normal cancellation and force-cancellation returned HTTP 409: the re-run had not actually queued.
- A fresh Pages build was requested through `POST /repos/proxima-j/stray-kitty-presentation/pages/builds`, without a source change. [Run 42630928287](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42630928287) rebuilt successfully, reused deployment ID `359cf6972224af8426656e61e1c887feeb409368`, and immediately reported `Deployment cancelled`.
- The artifact was approximately 150 MB; the site was approximately 152 MB, below the documented 1 GB Pages limit. No artifact validation, symlink or source-code error was reported.

## Minimal recovery attempt

This documentation-only commit gives the publication a new commit/deployment revision. It does not change runtime code, media, Current/Previous organization, Pages settings, permissions, credentials or the public URL. It avoids repeatedly retrying the same cancelled deployment ID. Check the resulting run and served marker before reporting recovery.

If this fresh revision also fails, inspect that specific deployment log before changing the publishing configuration. An explicit static Pages workflow is an available next option, using GitHub's official actions and the same `docs/` source; it has not been introduced speculatively.

For future failures: preserve the last live site, inspect the failed stage, retry only the affected work where appropriate, and never force-push, rewrite history, delete the site or delete run history to clear a publishing failure.

References: [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [request a fresh Pages build](https://docs.github.com/en/rest/pages/pages#request-a-github-pages-build), [official static workflow](https://github.com/actions/starter-workflows/blob/main/pages/static.yml).

## November 10 — artifact handoff failure

[Run 42826181509](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42826181509) uploaded `github-pages` successfully (artifact `13770146786`, approximately 154 MB), but its separate deploy job reported zero artifacts nine seconds later. The run-artifact API subsequently returned that exact uploaded artifact. [Run 42825870553](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42825870553) failed at the same handoff. The live Current deck continued to return successfully; these were publishing failures rather than slide/build failures.

The repository now uses `.github/workflows/pages.yml`, following GitHub's official static-site workflow: checkout, configure, upload `docs/`, and deploy in one job. A bounded artifact-availability check precedes deployment. Runs share the `pages` concurrency group and do not cancel an in-progress deployment. Official actions are pinned to release commits. Pages must use the GitHub Actions (`workflow`) build type, retaining the existing public URL.

This recovery changes publishing and documentation only. No deck source, review composition, media, animation, Current/Previous contents or archive branch changes. Verify the new workflow's deployment and latest public review before reporting success; do not repeatedly rerun the failed generated workflow.

## November 10 — V2 interim final metadata sync

V2 structural publication [42834403627](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42834403627) and the verified runtime/handoff publication [42834887825](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42834887825) succeeded. The 21-scene V2 and outgoing 23-scene Previous were then observed/checked without changing their contents further.

The final metadata-only [run 42835501857](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42835501857) found its artifact and created deployment `8e48951f379bfa10b6ef9356c97dd246e654b957` at 14:36:27 UTC. It spent over two minutes queued, then remained at `syncing_files` when the deploy action's default ten-minute deadline expired at 14:46:44 UTC. GitHub canceled that deployment. No content-validation or artifact error was reported; the working V2 remained live.

The November 10 revision requested twenty minutes from the deploy action, with a twenty-five-minute job cap. **That request was ineffective:** the action clamps all timeout inputs to ten minutes. The November 11 correction below supersedes it. Serialization, source folder and public URL were preserved; no slide/media tests or version rotation were repeated.

## November 11 — correct the capped timeout and verify actual publication

The later review-README-only [run 42840404258](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42840404258), source `64754e47bbac663aa09ea5faedb8066f76ae5301`, uploaded successfully but again canceled at `syncing_files`. Its log explicitly warns that the supplied 1,200,000 ms timeout was reduced to 600,000 ms. The earlier claim that the action could wait twenty minutes was incorrect. The hard cap and automatic cancellation are visible in [the exact pinned deploy action source](https://github.com/actions/deploy-pages/blob/368f82528645a54fb793d4d04e342629a3f51346/src/internal/deployment.js#L23).

Current publication uses `.github/scripts/publish_pages.py` with the same GitHub Pages deployment endpoints, ephemeral workflow token, OIDC identity, repository, environment and URL. It creates or resumes a deployment for the actual commit SHA, polls for up to thirty minutes, and leaves an accepted slow deployment running if its watcher times out. It never claims success for a terminal failure, an API outage, or stale public files. A lost creation response is checked before any duplicate creation could occur. No credential or OIDC response body is logged.

The runner generates `docs/deployment.json` containing only the public commit SHA, run ID and SHA-256 hashes of Current and Previous HTML. Successful API status must be followed by a matching public stamp and actual HTML bytes before the workflow turns green. The stamp is ephemeral CI metadata, ignored by Git and not a deck/version. This avoids reporting an old working site as a successful new publication.

Artifact packaging follows GitHub's original single dereferenced tar recipe, uploaded with pinned `actions/upload-artifact@v6` on Node 24. The unused Node 20 configuration action and composite uploader were removed. The artifact availability gate, one-day retention and serialized, non-canceling concurrency policy remain. The job allows forty minutes for preparation, the bounded deployment watcher and public propagation checks.

Markdown-only pushes no longer create unnecessary full-site deployment attempts. They remain visible in GitHub source immediately and are included in the next runtime/media publication; manual workflow dispatch can explicitly publish them sooner. Publishing-script changes still trigger deployment and its focused regression checks.

Focused publisher tests cover synchronization lasting beyond ten minutes, watcher timeout without cancellation, terminal error handling, resuming a run, recovering a lost POST response, stale release stamps, and stale deck bytes. No game tests, slide changes, media changes, Current/Previous rotation, history rewrite, permission expansion or infrastructure changes are part of this correction. Existing failed runs are historical evidence and are not deleted or relabeled.

The first live API check also returned HTTP 200 with an empty deployment status for a never-submitted commit, rather than the expected 404. The publisher now treats empty/`not_found` status as missing and creates the deployment. A regression covers this case. The waiting watcher was stopped before it had submitted any Pages deployment; the live site was unaffected.

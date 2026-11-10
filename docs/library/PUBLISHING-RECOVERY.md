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

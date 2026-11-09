# Technical pages — sources and deployment evidence

The user approved the existing Architecture and Kubernetes review compositions and requested integration. Current now uses native v3 scenes 15 (`technical-architecture`) and 16 (`kubernetes-deployment`), after the already verified Dice and Adaptive scenes. No Six Systems or CI/CD page was added. Shared fonts, tokens and components are reused; technical styling is scoped in `../technical.css`. No new media or background downloads.

## Genuine evidence, November 7, 2026

- [Deployment job #29905](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/jobs/29905), `deploy_apply`, succeeded.
- [Pipeline #8015](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/pipelines/8015) succeeded for source `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`.
- The authenticated connector read the complete job trace: all three application rollouts, payment readiness and public health checks passed.
- Archived `release.json` reports `deployed`, finished `2026-11-07T15:37:11.3513682Z`; payment readiness `ready`; public health `ok`.
- Archived `preview.json` contains three application Deployments, four containers including the certificate sidecar, and three distinct PVCs. All three application image values match the archived release record.
- Exact artifact directory: `deploy/team-preview-haozhe/releases/1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e/20261107T153644662Z/` under job #29905; records `release.json` and `preview.json`.

## Screenshot and publication limitation

The real browser redirected the job URL to GitLab sign-in; no authenticated screenshot was available. Per the brief, the slide uses a clean dated textual panel with the genuine job link at bottom-right. No screenshot file exists, no log image was fabricated, and no raw release/manifest/log was published. Public copy excludes internal cluster identifiers, addresses, image digests and credentials. Publication is authorized by the user's technical integration brief and uses only the sanitized status summary.

These are dated release records, not a live inspection of current Pods. No cluster, deployment or credential changes were made. Datadog remains a separately managed component; no current health claim is implied.

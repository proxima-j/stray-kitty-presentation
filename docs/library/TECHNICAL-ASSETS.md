# Technical pages — sources and deployment evidence

The user approved the existing Architecture and Kubernetes review compositions and requested integration. Current now uses native v3 scenes 15 (`technical-architecture`) and 16 (`kubernetes-deployment`), after the already verified Dice and Adaptive scenes. No Six Systems or CI/CD page was added. Shared fonts, tokens and components are reused; technical styling is scoped in `../technical.css`. One small deployment screenshot loads only on scene entry; no inactive-scene media download.

## Historical source evidence, November 7, 2026 (no longer displayed)

- [Deployment job #29905](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/jobs/29905), `deploy_apply`, succeeded.
- [Pipeline #8015](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/pipelines/8015) succeeded for source `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`.
- The authenticated connector read the complete job trace: all three application rollouts, payment readiness and public health checks passed.
- Archived `release.json` reports `deployed`, finished `2026-11-07T15:37:11.3513682Z`; payment readiness `ready`; public health `ok`.
- Archived `preview.json` contains three application Deployments, four containers including the certificate sidecar, and three distinct PVCs. All three application image values match the archived release record.
- Exact artifact directory: `deploy/team-preview-haozhe/releases/1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e/20261107T153644662Z/` under job #29905; records `release.json` and `preview.json`.

## Displayed confirmation and authentic full pipeline — November 6 deployment

The user selected pipeline #7813 and requested the full pipeline plus matching confirmation. Both the left confirmation and right screenshot now refer to **November 6, 2026 / pipeline #7813**. All five jobs are visible: server_checks, web_checks, server_build, deploy_images and deploy_apply. The full-resolution crop opens through the existing screenshot dialog; the source link is in the left confirmation. The earlier November 7 record remains provenance history only.

- Source: [pipeline #7813](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/pipelines/7813), commit `10ab2008fd2bf758af31318ae5586946ed3352de`.
- Independently checked through authenticated GitLab connector: all five jobs succeeded, including [deploy_apply #29328](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/jobs/29328). Its dated trace confirms the November 6 rollouts and checks passed, ending in Job succeeded.
- User attachment: `codex-clipboard-2d1a7fac-a139-49a8-b4df-0f164e1a9f04.png`, 1398×775.
- Published: `../assets/pages/16/gitlab-pipeline-7813-full.png`, 1138×144 PNG, lossless rectangular crop `(30,316)–(1168,460)` only. All stages/jobs are preserved; only surrounding UI/empty space is removed. Status/text pixels are unchanged. The crop excludes author and unnecessary UI; no secrets or internal infrastructure identifiers are visible.
- Publication authorized by the user's screenshot submission for this existing public evidence panel. No fabricated log rendering or screenshot reconstruction. No raw log/release/manifest publication.

These are dated release records, not a live inspection of current Pods. No cluster, deployment or credential changes were made. Datadog remains a separately managed component; no current health claim is implied.

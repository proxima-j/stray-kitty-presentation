# Stray Kitty presentation

GitHub is the shared source for ChatGPT and Codex. The [Pages workflow](.github/workflows/pages.yml) automatically publishes `docs/` from `main`, using one serialized upload/deploy job. Use live page links for reviews instead of transferring HTML/PNG exports.

Before stamping the Pages artifact, the workflow inlines Current's startup styles and scripts into the published HTML. Edit the separate source files under `docs/` as usual. Media still loads on demand.

Publishing uses GitHub's official Node 24 artifact uploader and the Pages REST/OIDC API through [the small publisher](.github/scripts/publish_pages.py). It allows 30 minutes for an accepted deployment to finish and does not cancel file synchronization at the deploy action's hard ten-minute cap. A rerun resumes an existing nonterminal deployment for the same commit. A terminal canceled/failed deployment needs a fresh corrected revision. The job reports success only after Pages reports success and the public release stamp plus both Current/Previous HTML hashes match the uploaded source. `deployment.json` is generated only on the runner; do not commit it or treat it as a third deck.

Markdown-only changes remain immediately available on GitHub and do not trigger a redundant full-site deployment. They are included in the next presentation/media/workflow publication; use **Run workflow** on `main` when a Markdown-only Pages update is specifically needed. No new hosting, stored secrets or permissions are introduced. Historical failed runs remain an audit record; the latest run and public release stamp describe the active publication.

**Reusable template:** [Start Here — Forward Story v3](https://proxima-j.github.io/stray-kitty-presentation/templates/) · [Production workflow](docs/templates/forward-story-v3/WORKFLOW.md) · [Notion reference](https://app.notion.com/p/413e33b0423f8180bb92dabaf04af226).

## Two working versions

| Version | Preview | Verified source |
| --- | --- | --- |
| Current | https://proxima-j.github.io/stray-kitty-presentation/ | **V2 — Final Presentation**, 18 scenes, marker `20261112-v2-final-refinement` |
| Previous | https://proxima-j.github.io/stray-kitty-presentation/previous/ | Outgoing 21-scene deck `91bdebe31e6b60614a1ad51b8cf5a0ccf5f6dffd` |

Current supports `?page=01` through `?page=18`. Page 02 cues the live Chapter 5 game demo and sandbox payment flow. Page 14 cues the live Datadog demo after the four dashboard tabs. Previous retains Payment, From Gameplay to Telemetry and Detect. Alert. Recover. [Final slide order and presenter handoff](docs/library/PRESENTATION-V2-PHASE2-HANDOFF.md) · [Version metadata](docs/versions.json) · [Pages deployments](https://github.com/proxima-j/stray-kitty-presentation/actions/workflows/pages.yml).

Page 09 plays genuine cast audio on the first pass after companion selection or Activate Skills. The close-up stays open and loops muted. The Warehouse loop, Reposition and event-to-battle footage play muted. [Capture provenance](docs/library/COMBAT-PART2B-CAPTURE.json) · [Media bindings](docs/library/PRESENTATION-V2-MEDIA-SLOTS.json).

- `docs/index.html`, `docs/engine-v3.*`, `docs/presentation.css`, `docs/level-design.css`, `docs/scene-content.js`, `docs/library/`: Current source and reusable components.
- `docs/previous/`: Outgoing twenty-one-slide runtime and styles with shared asset URLs rebased.
- `docs/assets/`: One shared copy of the full opening film, poster, character, fonts/license and approved illustrations.
- `reference/forward-story-v3/script.js` and `style.css`: Untouched original animation source, rather than a third runnable sample deck.

The obsolete four-scene v3 sample page, one-file packer and demo-only screenshots/excerpt were removed from the working tree. They remain in normal Git history. Current's HTML, styles, animation code, content, film and illustrations were not changed by this cleanup.

## Permanent Version 1 archive (preserve; not a working deck)

**Version 1 — 23-page complete presentation, November 10, 2026** is frozen on the independent branch `archive/presentation-v1-2026-11-10` at original commit `0daa72fda8cd7ab9f1a8a99aed9f4eb537137461`.

- [Permanent V1 source snapshot](https://github.com/proxima-j/stray-kitty-presentation/tree/0daa72fda8cd7ab9f1a8a99aed9f4eb537137461/docs) · [Archive branch](https://github.com/proxima-j/stray-kitty-presentation/tree/archive/presentation-v1-2026-11-10)
- V1 contains **all 23 scenes**, including the original **Detect, Alert, Recover** page, and its associated committed media, scripts and styles. Its historical verified state is recorded inside the archived `docs/versions.json`.
- **Do not delete, rename, force-update, rebase, merge into, or use this archive branch for routine work.** Future presentation changes go to Current on `main` through the existing verification workflow.
- This is a **permanent historical source snapshot**, separate from the two rolling live working decks (Current and Previous). GitHub Pages still publishes `docs/` from `main`; the archive branch is recoverable/runnable source, **not currently a separate live GitHub Pages URL**. If a permanent browsable V1 is later required, publish it from this snapshot with an explicit archive-only deployment without touching the snapshot itself.
- This archival rule is intentionally an exception to “exactly two working versions”; archival history is not another working deck.

## Rolling retention policy

Keep exactly two usable decks. Do not rotate for documentation edits, housekeeping, individual slide commits or an unverified candidate.

1. Prepare and verify a new complete candidate outside the tracked/public deployment tree while keeping Current and Previous available.
2. Only after the candidate passes focused serve, assets and navigation checks, replace `docs/previous/` with the outgoing verified Current runtime and promote the candidate to Current in the same normal commit. Update `docs/versions.json` with source/deployment evidence.
3. Remove the older Previous runtime and obsolete artifacts. Inspect references in both retained decks before deleting shared assets. Keep small version-specific runtime files separate; store media once with stable relative URLs. Preserve older media if either deck uses it.
4. Verify the published Current and Previous after pushing. If deployment fails, fix or use a normal revert; never rewrite history, force-push or delete tags/releases.

## Run locally

No build or package installation is required:

```sh
python -m http.server 8080 --directory docs
```

Open `http://localhost:8080/` or `http://localhost:8080/previous/`. Right / Space advances, Left reverses, wheel scrubs, Escape finishes motion, Home / End jumps, and `?` opens optional controls. The approved default arrow beat remains 4.2 seconds; reduced-motion preferences retain the original immediate behavior. No persistent header/footer is added.

The complete 60.5-second opening film plays with sound using Play film; Skip/Continue advances manually. Current serves a 1920×1080 H.264/AAC web derivative (13.4 MB; original 65.1 MB retained). The film downloads only after Play. Current attaches image/poster/SVG URLs on scene/view entry and loads hidden dialogue states on demand; only active clips receive video sources. This avoids downloading the rest of the deck behind the visible slide. Page 02 artwork uses pixel-identical lossless WebP; screenshots use high-quality WebP previews sized for their frames, with full-resolution originals retained. Short clips use smaller H.264 fast-start copies with their original complete content, frame rate and timing. The four map clips total 1.4 MB instead of 5.9 MB. [Derivative inventory](docs/library/WEB-MEDIA.json) records sources and sizes. Full-image dialogs and Previous keep their originals. This delivery-only maintenance does not rotate decks or change the v3 engine, styles or composition. Offline-release packaging remains deferred.

## Collaboration and assets

Read the latest main and preserve unrelated changes before editing. Push without force. ChatGPT's connected GitHub tools and Codex's local Git use this same repository. Follow [docs/library/ASSET-WORKFLOW.md](docs/library/ASSET-WORKFLOW.md); register assets with consuming source in the same change. The shared manifest is [docs/library/manifest.json](docs/library/manifest.json).

Page 02 D20/cat images are user-owned, publication-approved and published in Current. [ASSET-CLEARANCE.md](ASSET-CLEARANCE.md) retains that authorization record. Faculty Glyphic is self-hosted under its included SIL OFL; Classe's exact font remains unconfirmed.

Notion remains the [existing decision history](https://app.notion.com/p/411e33b0423f81abaa12c4b5b6a75921). Do not create a dashboard, modify the game repo, or build further pages without a new instruction.

## Integrated scene interactions

Visual Novel (`?page=05`): click the authentic game image to cycle 1→2→3→1; focused Enter/Space also cycles. Arrows remain global presentation navigation.

Home Hub (`?page=06`): starts with THE HOME GROWS, using a larger two-by-two gallery and readable labels. THE HOME RESPONDS plays the three existing muted looping clips together in a larger staggered arrangement. They pause on view/scene exit and when the document is hidden, resuming when visible. Small pause/play fallbacks appear on hover/focus. The opening film retains its separate explicit Play-with-sound behavior.

Payment (`?page=07`): the same verified Xsolla Sandbox 60-tuna journey, with recorded balance 0→60. Larger label rows sit above focused screenshot viewports; click any screenshot to open its complete original (Escape closes it). Asset provenance, including the guaranteed/pity postcard draw and subtle final-home stage, remains in `docs/library/PAGES-03-07-ASSETS.md` and the manifest. Level Design follows Payment, followed by Random Events and Combat. UI/UX, Technical and Datadog follow Combat.

## Integrated Level Design

Payment → [Four Maps](https://proxima-j.github.io/stray-kitty-presentation/?page=four-maps) → [Three Connected Levels](https://proxima-j.github.io/stray-kitty-presentation/?page=vertical-design) → [Greybox](https://proxima-j.github.io/stray-kitty-presentation/?page=greybox). These are normal scenes 08–10 in the unchanged v3 registry/player. The approved 2×2 clips, tilted screenshot stack with separate C/F links and continuous traversal, and original uncropped greybox are retained. Map clips use the existing scene-aware media controller: only the active scene plays; manual pause survives exit/re-entry and document hiding. The annotated SVG is now a production asset with same-folder screenshot links. Random Events and Combat now follow these scenes; UI/UX, Technical and Datadog follow Combat.

Verified locally in Chrome at 1600×900 and 1366×768, then against published Current and Previous from [Pages build 42504857617](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42504857617). Navigation, 4.2-second pacing, original scene interactions, looping/pause behavior, screenshot layers and uncropped greybox passed. Document-hidden handling was exercised through a visibility-event simulation. The initial integration's default Chrome connection stalled on public media. Subsequent on-demand loading and smaller web copies passed a fresh published check with default Chrome transport settings: all four map clips and all four Home gallery images loaded, with no page errors. See the delivery maintenance notes above and versions.json for the latest verified build. The superseded map composition HTML/CSS/JS/SVG and notes were removed only after published verification. Approved media, the asset board and other reviews remain.

## Integrated Random Events and Combat

Greybox → [Random Events](https://proxima-j.github.io/stray-kitty-presentation/?page=random-events) → [Combat](https://proxima-j.github.io/stray-kitty-presentation/?page=combat), scenes 11–12. These use the latest approved review compositions and the unchanged v3 registry/player. Events keeps full trigger/choice/result images, genuine reward details, footer concepts and original-image enlargement. Combat keeps the battlefield/three companion profiles, click-to-play Reposition (7.6s) and Activate Skills/Shield (5.23s), and the 阿策 before/after layer. The advisor source remains Local Fallback. Native clips and all original assets stay in place; small on-demand screenshot previews preserve the loading fix. New CSS is scoped to these scenes; local controls consume their own keys and media stops on scene exit/document hiding. Previous is the outgoing optimized ten-page deck, with shared media stored once.

Published [Pages build 42507196914](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42507196914) verified Current and Previous in default Chrome, including new image loading, Events image enlargement, both Combat clips and advisor state controls. The old Events/Combat review URLs now redirect to Current; their obsolete context assembler, review-only interactions and styles were retired. UI/UX, Technical and source-media collection boards remain separate and intact.

## Integrated UI/UX

Combat → [Dice Roll Animations](https://proxima-j.github.io/stray-kitty-presentation/?page=dice-animations) → [Responsive & Translucent UI](https://proxima-j.github.io/stray-kitty-presentation/?page=adaptive-interface), scenes 13–14. Latest user-approved larger/spaced 2×2 dice clips, English colored badges and 1.5× timing are retained. Four clips play only while active and use the shared pause/visibility policy. The single-window Normal/Narrow view uses the original normal screenshot and the user-selected narrow image, at their own aspect ratios, with click-to-enlarge originals. Small screenshot previews load on demand. [UIUX-ASSETS.md](docs/library/UIUX-ASSETS.md) records genuine capture provenance and the selected pair’s limitations. New UI/UX styles/behavior are scoped in `docs/uiux.css` and `docs/uiux.js`; existing v3 globals and the twelve preceding scenes are preserved. Previous is the outgoing twelve-page deck. Technical integration is outside this task.

UI/UX publication verified in default Chrome against [Pages build 42512332800](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42512332800): four looping clips, scene-exit pause, Normal/Narrow switching, both original-image dialogs and retained twelve-page Previous. The superseded UI/UX review URLs redirect to Current; their now-unused placeholder stylesheet was removed after verification. No further Technical pages were integrated.

## Technical integration — Pages 15–16

[Technical Architecture](https://proxima-j.github.io/stray-kitty-presentation/?page=technical-architecture) → [Kubernetes Deployment](https://proxima-j.github.io/stray-kitty-presentation/?page=kubernetes-deployment) follow the established fourteen-page sequence. The approved layer/services/online-access composition and Pod–PVC diagram are preserved. No Six Systems or CI/CD page is included. The v3 engine, 4200ms transitions and first fourteen scenes are unchanged. [Evidence inventory](docs/library/TECHNICAL-ASSETS.md) records the genuine November 7 release sources and browser sign-in limitation; the supporting panel is dated text, with no current Pod health claim or fabricated screenshot.

Candidate passed focused Chrome checks at 1600×900 and 1366×768, including Combat through both technical pages and reverse. Previous is the outgoing fourteen-page deck, including its independently frozen UI/UX behavior and shared assets. Published Current and Previous passed real-browser verification. The two superseded technical HTML reviews were removed only afterward; the unrelated Six Systems review and shared review styles remain.

Page 16 evidence maintenance: the user-supplied genuine pipeline #7813 deployment-card screenshot replaces the bottom-right text fallback. It is explicitly dated November 6, 2026; the left November 7 confirmation still refers to job #29905. Screenshot pixels are cropped only, with author/internal details excluded. This asset-only slide update does not rotate Previous or change the engine/layout.

Page 16 follow-up: at the user’s request, both confirmation and screenshot now refer to pipeline #7813 / November 6, 2026. The complete five-job pipeline replaces the single deployment card; click it to inspect the full-resolution original crop. Earlier mixed-date copy is superseded. Engine, diagram and Previous are unchanged.


## Datadog integration — Pages 17–19

Kubernetes → [From Gameplay to Telemetry](https://proxima-j.github.io/stray-kitty-presentation/?page=gameplay-telemetry) → [Observability Across the Game](https://proxima-j.github.io/stray-kitty-presentation/?page=observability) → [Detect, Alert, Recover](https://proxima-j.github.io/stray-kitty-presentation/?page=detect-alert-recover).

The three approved reviews are native scenes in the original v3 player. The genuine six-second QA clip starts from the recorded green game button, muted unless the presenter enables sound; Replay and a scrollable matching CHOOSE_EVENT trace remain. Dashboard Overview keeps two screenshot columns; the other three tabs keep Option A titled chunks with click-to-inspect originals. The monitoring page uses the matched November 4 Slack notifications and Datadog runs, genuine November 9 Synthetics, and the approved phone icon/note. Recovery means automatic status detection and notification; automatic infrastructure repair was not independently verified. No slide sends live gameplay or monitoring actions.

Datadog CSS is scoped; images load on scene entry, dashboard chunks on selection, and the short response clip is prepared only when Page 17 enters view. Long dashboard notes scroll inside their frames; Page 19 uses larger aligned frames that fit its evidence and phone note without scrolling at the normal presentation viewport, clear of the authentic cat/route. The first sixteen scene blocks, existing runtime files and 4200ms engine are unchanged. Current/Previous media remains stored once. Approved partial review sources remain available for provenance; there are only two complete decks.

The nineteen-page candidate passed focused local serve, media, trace scrolling, dashboard chunk/source inspection, alert/recovery and forward/back navigation checks before rotation. The outgoing sixteen-page Current is frozen as Previous. Check `20261109-datadog-refinement7` in served HTML when confirming deployment.


Datadog follow-up maintenance: smaller Page 17 WebP/720p H.264-AAC delivery copies reduce its initial still and six-second clip transfer sizes, while all originals remain available. The genuine still stays visible during video buffering. Datadog scenes rely on the existing v3 camera perspective, removing a duplicate parent perspective boundary that could leave Page 17 blank in Chromium. Page 18 copy now focuses on game performance, correct player interactions, payments/economy/AI; sample event and AI count callouts were removed. Page 19’s payment tab updates both its endpoint heading and genuine screenshot. Previous is unchanged; no version rotation for these slide refinements.


## Teamwork & Future — Pages 20–22

The entire technical/Datadog walkthrough is followed by [Cross-Team Collaboration](https://proxima-j.github.io/stray-kitty-presentation/?page=cross-team-collaboration), [Design. Test. Rethink.](https://proxima-j.github.io/stray-kitty-presentation/?page=design-test-rethink) and [A Dynamic, Living World](https://proxima-j.github.io/stray-kitty-presentation/?page=connected-world). No Closing/Q&A scene was added.

The approved compositions are native v3 scenes, with scoped `teamwork.css` / `teamwork.js`. The four-stage walkthrough uses genuine Work Item #4 notes 8317, 8605 and 9310, and merged fix MR !80, integrated through !81. No formal MR approval is claimed. Follow-up QA covers tested major routes, not every branch; daily checks remain a workflow explanation. Click each evidence image to inspect the actual excerpt.

Iteration preserves the two 6×6 probability diagrams (10/36 → 6/36 failure outcomes) and labels AI scope as a design discussion. Future preserves four existing shared game images and bidirectional Living World connections, explicitly proposed rather than implemented. [Asset inventory](docs/library/TEAMWORK-FUTURE-ASSETS.md) and [capture provenance](docs/assets/teamwork/gitlab/provenance.json) record sources, scope and limited public-presentation clearance.

Focused local candidate checks passed at 1600×900 and 1366×768 before rotation. All original 19 scene blocks and existing runtime files are byte-identical; v3 4200ms navigation, one cat/route, opening film and existing interactions are preserved. Previous is frozen from `89e52a078d0e2ff4ad03fa1ff3250abd9d9d5155`, with asset paths rebased and no media duplication. Earlier integration sections above describe their historical checkpoints; the two-version table is authoritative.

Page 20 readability maintenance: selected source crops now show the title/status, relevant @mention and key finding at larger scale; click retains the complete original. More detail-panel space and a slightly lower Page-20-only cat/route improve legibility. No new binary assets, Page 21/22 edits, engine edits or version rotation.


## Current Page 02 — integrated horizontal poster

[Elevator Pitch, Page 02](https://proxima-j.github.io/stray-kitty-presentation/?page=02) now uses the exact approved poster composition: original unchanged pitch copy at left, uncropped user-supplied landscape poster at upper right, and approved D20 and playful-cats illustrations side by side underneath. The shared lossless poster WebP is loaded only when Page 02 is active; no new media copies, additional cat/route, scene counts or engine changes were introduced.

Integrated in `093219a80aa29fbc8e1c1208a52536a84ae0eed2`. [GitHub Pages build #42635912073](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42635912073) completed successfully. The post-deployment browser review confirmed the new poster-gallery element, loaded poster and both illustration assets, horizontal supporting artwork and unobstructed pitch/route. This was a single-slide maintenance update, so Previous remains the verified outgoing nineteen-scene deck, unchanged. The superseded composition preview was retired after publication verification. Closing Q&A review and its shared poster remain intact.


Page 22 approved interaction integration: [A Dynamic, Living World](https://proxima-j.github.io/stray-kitty-presentation/?page=connected-world) now uses the approved finite click pulse from the trial. Select a system to follow one influence through Living World to two connected systems; select it again to replay. No idle animation, moving imagery, live game requests or new media. `future-world.js` owns the local response and transform-independent connector geometry; v3 visibility stops it on exit, and Enter/Space activation stays local. “Every choice has consequences.” remains the bottom takeaway. This is scene maintenance without a version rotation.


## Reusable cinematic template and workflow

The [Forward Story v3 generic starter](docs/templates/forward-story-v3/) offers the same 4.2-second reversible route/character animation, progressive scene effects, Faculty Glyphic typography and cream/dark-green/gold layout language. [Live template demonstration](https://proxima-j.github.io/stray-kitty-presentation/templates/forward-story-v3/). The [page-by-page production workflow](docs/templates/forward-story-v3/WORKFLOW.md) documents the exact content → asset collection → isolated preview → approval → integration → focused verification → publication → cleanup method used to build the original deck, including a reusable Codex handoff. The template contains only generic assets and is independent of both Current and Previous.


## Final Q&A — V2 Page 20 (V1 Page 23)

[A Dynamic, Living World](https://proxima-j.github.io/stray-kitty-presentation/?page=connected-world) → [Q & A](https://proxima-j.github.io/stray-kitty-presentation/?page=closing-qa), the final scene (V2 Page 20). The approved composition is preserved: approximately 30/70, large Faculty Glyphic Q & A at left and the complete uncropped 3344×1882 user poster at right, warm cream background, no additional visible copy or frame. The existing single Miaomiao and continuous dotted route remain global; the v3 engine and its 4200ms beat are unchanged. The original PNG and lossless WebP remain shared assets, with the poster loaded on scene entry.

The 23-scene private candidate passed focused 1600×900 and 1366×768 layout/asset checks and Future ↔ Q&A navigation before promotion. Outgoing verified Current is frozen as the 22-scene Previous with rebased shared asset URLs and independent small runtime files. Reusable templates and unrelated reviews remain untouched. This is a complete-deck version rotation; earlier integration sections describe historical checkpoints. Public verification is recorded in `docs/versions.json`.

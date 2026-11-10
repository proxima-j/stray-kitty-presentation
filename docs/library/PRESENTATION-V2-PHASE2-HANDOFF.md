# V2 Part 2 handoff

Build marker: `20261110-v2-interim-part1`. Publication label: **V2 Interim — Media Pending**.

Part 1 integration commit: `INTEGRATION_COMMIT` (the subsequent publication-record commit records this exact content revision). The publishing workflow remains `.github/workflows/pages.yml`: serialized static `docs/` upload and deployment, no build tooling or new hosting.

## Retained versions

- Current: the verified 21-scene V2 Interim at [the permanent preview](https://proxima-j.github.io/stray-kitty-presentation/).
- Previous: outgoing verified 23-scene Current from `9e2cd416bde4268df0064eab90b09151f51e01db`, frozen under `docs/previous/`, with independent small runtime files and shared `../assets/` media. Includes Roadmap, the separate Alert scene, and final Q&A.
- Permanent V1: `archive/presentation-v1-2026-11-10` remains pinned to `0daa72fda8cd7ab9f1a8a99aed9f4eb537137461`. Do not modify/merge into/rebase this branch.
- Reviews remain under `docs/review/` as references. Do not import their camera/route/cat styles into production.
- Part 1 recorded no gameplay, changed no game source or infrastructure, and added no media binaries. The existing 4200ms v3 engine, film sound, one traveler and continuous route are preserved.

## V2 registry

| Page | Stable scene ID | Subject |
| --- | --- | --- |
| 01 | `opening-film` | Opening Film |
| 02 | `elevator-pitch` | Elevator Pitch |
| 03 | `game-flow` | Game Flow |
| 04 | `visual-novel` | Visual Novel |
| 05 | `home-hub` | Home Hub |
| 06 | `payment` | Xsolla Sandbox Payment |
| 07 | `four-maps` | Four Maps |
| 08 | `vertical-design` | Three Connected Levels |
| 09 | `greybox` | Greybox |
| 10 | `random-events` | Random Events |
| 11 | `combat` | Combat |
| 12 | `dice-animations` | Dice Roll Animations |
| 13 | `adaptive-interface` | Responsive & Translucent UI |
| 14 | `technical-architecture` | Technical Architecture |
| 15 | `kubernetes-deployment` | Kubernetes Deployment |
| 16 | `gameplay-telemetry` | From Gameplay to Telemetry |
| 17 | `observability` | Observability Across the Game |
| 18 | `cross-team-collaboration` | Cross-Team Collaboration |
| 19 | `design-test-rethink` | Design. Test. Rethink. |
| 20 | `connected-world` | A Dynamic, Living World |
| 21 | `closing-qa` | Q&A |

Use `?page=<stable-scene-id>` for durable review links. Numeric pages are now 01–21. Chapter 5 is a separately pre-opened live-game tab after Pitch, never a slide/iframe. The exact approved Pitch reminder and its art remain unchanged. Random Events is unchanged except numbering; its Fish +1/Material +1 are resource rewards, not direct battle modifiers.

## IMPLEMENTED: production ownership

- `docs/index.html`: authoritative registry, media bindings, ARIA metadata. `docs/v2-interim.css`: scoped `#home-hub`, `#combat`, `#observability` additions, including the reviewed 24% opacity Return control.
- `docs/scene-content.js`: unchanged generic lazy images, Home view switching and scene-aware muted video/pause buttons. Restoration is a hidden, empty video slot; no missing URL is requested.
- `docs/events-combat.js`: scene-local Combat controller. One selected video plus the default loop slot; only one may play. All muted, no new audio controls. Selection stops the prior demonstration; completion, close or Return restores default. Exit/tab hiding stops/reset all demonstrations; re-entry resumes default only. Buffering/failure exposes a muted Retry control while preserving a still. Default remains the authentic screenshot until a verified loop is bound.
- `docs/datadog.js`: existing four dashboards unchanged; the removed Alert scene's obsolete initialization is guarded. The Slack banner uses the existing full-image dialog, not a fifth tab or new slide.
- `docs/library/PRESENTATION-V2-MEDIA-SLOTS.json`: exact pending file targets, fallback paths, selectors and attribute names. This is a **binding inventory**, not a claim those planned files exist. No planned asset was registered in `manifest.json`.

## PENDING MEDIA: exact slots and fallbacks

All paths below are relative to `docs/`. Planned files do not exist yet.

| Slot / production binding | Planned file | Actual Part 1 fallback |
| --- | --- | --- |
| `#homeGrowth02`, `data-media-src` | `assets/v2/home/growth-02.webp` | `assets/pages/06/greenhouse-stage-02.webp`, explicitly pending historical reference |
| `#homeGrowth03`, `data-media-src` | `assets/v2/home/growth-03.webp` | `assets/pages/06/greenhouse-stage-03.webp`, explicitly pending historical reference |
| `#homeGrowth04`, `data-media-src` | `assets/v2/home/growth-04.webp` | `assets/pages/06/greenhouse-stage-04.webp`, explicitly pending historical reference |
| `#homeRestorationVideo`, `data-media-src` | `assets/v2/home/repair-animation.mp4` | Restrained RESTORATION capture-pending placeholder |
| `#v2DefaultBattleVfx`, `data-v2-default-src` | `assets/v2/combat/general-battle-vfx-muted.mp4` | `assets/pages/09/battlefield-main.webp` |
| `[data-v2-skill="rongrong"]`, `data-v2-skill-clip` | `assets/v2/combat/rongrong-skill-muted.mp4` | `assets/pages/09/caster-star-vfx.webp` |
| `[data-v2-skill="banban"]`, `data-v2-skill-clip` | `assets/v2/combat/banban-skill-muted.mp4` | `assets/pages/09/guard-shield-vfx.webp` |
| `[data-v2-skill="diandian"]`, `data-v2-skill-clip` | `assets/v2/combat/diandian-skill-muted.mp4` | `assets/pages/09/diandian-heal-vfx.webp` |
| `#v2BattleProof`, `data-v2-event-choice` | `assets/v2/events/carry-choice.webp` | Explicit linked-evidence-pending state |
| `#v2BattleProof`, `data-v2-event-state` | `assets/v2/events/carry-state.webp` | Explicit linked-evidence-pending state |
| `#v2BattleProof`, `data-v2-event-battle` | `assets/v2/events/carry-battle.mp4` | Explicit linked-evidence-pending state |

Also populate `#v2BattleProof[data-v2-event-caption]` with a short accurate source/save/build explanation. The event controller requires all three paths **and** that caption before showing linked evidence. It presents Choice, Stored effect, then the actual battle video in the same battlefield; completion returns to default. Never bind the feeder-bowl reward screenshots as proof of battle support.

Stage 01 (`#homeGrowth01`, `assets/pages/06/greenhouse-stage-01.webp`, 960×540) remains the genuine unchanged baseline with no pending treatment. Retain it.

Existing genuine Home clips stay unchanged, muted, with the same 2×2 geometry in both modes:

- Top-right INTERACTIVE: `assets/pages/06/cat-reaction-web.mp4`, H.264 960×540, 5.813 s.
- Bottom-left RANDOM REWARDS: `assets/pages/06/postcard-to-parcel-web.mp4`, H.264 960×540, 11.000 s. This is the existing guaranteed-reward QA example.
- Bottom-right CUSTOMIZATION: `assets/pages/06/furniture-drag-save-web.mp4`, H.264 960×540, 6.467 s.

Existing Combat controls remain genuine historical clips: `#repositionVideo[data-demo-src]` → `assets/pages/09/reposition-closeup.mp4` (960×540, 7.600 s), `#skillsTrigger[data-demo-src]` → `assets/pages/09/skill-activation-closeup.mp4` (720×406, 5.233 s). These do not prove the teammate's updated anticipation animation. The same `#repositionVideo` element plays selected clips to enforce single-video ownership. Advisor uses `advisor-figure.webp`, `advisor-01-before.webp`, `advisor-02-after.webp` in `assets/pages/09/`; keep the **Local Fallback** label.

Observability banner reuses `assets/datadog/page-03-alerts/slack-health-alert.png` (historical Nov 4 notification), through `data-full-image`. It says **ALERTS VIA SLACK / Phone notifications, if enabled**. Neither phone delivery nor automatic root-cause repair has been verified. No phone/emulator capture is needed for this interim deck.

## Capture acceptance and smallest Part 2 action

**Next smallest action:** ask for/identify the teammate's stable shipped VFX build/commit, then do one focused read-only check of skill activation order and one legitimate capture checkpoint. Do not repeat a codebase-wide audit. If that build is unavailable, Home growth/repair can be captured independently from a verified supported save.

For each new file record build SHA, source branch/MR, capture date/time/timezone, actual event/choice or skill, save/checkpoint and battle attempt, camera/viewport, input/phase boundaries, whether QA-staged, editing/derivative details, and publication permission. Retain high-quality local masters. Use genuine gameplay and supported inventory/repair mechanics; no added furniture in image editing or invented effects.

- Growth: same build/save progression and camera. Baseline → few genuine additions → those items plus more → richest arrangement retaining earlier items. Historical source used 1600×900, camera x=-42/y=3/scale=.528169014084507; verify before reuse or document one new common camera. Web stills 960×540 or larger preserving 16:9/full intended content.
- Repair: clear before state, real input, full actual repair and completed result; roughly 4–8 s when feasible without cutting the action.
- Three skills: enough battle context to identify the cat/input, the entire newly shipped pre-release/wind-up, full release and impact, visible result and settle. Keep original timing; roughly 5–12 s is guidance, not permission to truncate. No sound capture is required.
- General battle loop: authentic full-frame, uncropped combat VFX, typically 8–15 s if a complete readable sequence fits. Do not reuse the old Banban close-up as new full-frame VFX.
- Event chain: verify actual source event ID/choice, stored support/pressure and the subsequent battle's consumption/effect. Prefer same build/save; disclose separate staged checkpoints if necessary. Capture two readable stills and the shortest complete consequence clip, typically 4–10 s. **BLOCKED for capture until a genuine linked mechanic and stable build are identified.**
- Video delivery: native 16:9 master around 1600×900 or 1920×1080; lightweight H.264/yuv420p fast-start MP4, typically 960×540 for Home and at least 1280×720 for the full-frame battle. Preserve aspect, complete action and original timing. All gameplay playback muted; opening film retains existing separate sound. No Git LFS.

## Replacing and clearing pending states

1. Verify the media/provenance first; register only files that actually exist in `docs/library/manifest.json`, following `ASSET-WORKFLOW.md`, in the same change as their bindings. Update slot status to VERIFIED only after checks. Shared assets remain one copy.
2. Growth: replace the three `data-media-src` values, remove each historical `src` if editing a live DOM, remove `v2-growth-pending`/`v2-stage-reference` and `.v2-growth-spec`, and update alt text accurately. Keep Stage 01 unchanged.
3. Repair: bind `#homeRestorationVideo[data-media-src]` and a verified poster, remove its `hidden`, remove the placeholder content inside `#homeRestorationMedia` and `v2-asset-placeholder`, unhide its existing `.clip-toggle`. It already participates in generic `data-scene-video` lifecycle. Keep the tile/caption geometry unchanged.
4. Default loop: fill `data-v2-default-src`. The controller automatically uses muted autoplay/loop on scene entry and on reset; it changes the pending status text. Do not force `autoplay` on an off-screen video or assign eager `src` attributes.
5. Individual skills: fill each card's `data-v2-skill-clip`; remove pending wording from that card's accessible label. The controller will play that clip immediately on click, muted; it no longer shows the historical pending still. Keep portraits/VFX stills on right cards.
6. Event: fill all three event attributes plus accurate caption only after the complete linkage is verified. Until then leave every field blank and the explicit pending state visible.
7. Re-run only affected media/layout/lifecycle checks, update the handoff/inventory/versions pending lists, then use the verification-gated Current/Previous rotation only for a newly verified complete deck. Do not rotate for each asset/documentation edit.

## Verification and limits

Part 1: focused candidate checks at 1600×900 and 1366×768; exact 21-scene registry, retained scene content comparison, existing asset references and scoped runtime syntax. Home geometry/playback and pause/resume; three authentic skill-still selections, original Reposition/Activate Skills, evidence-pending bridge, Local Fallback advisor, subtle Return reset, completed-demo reset and scene exit/re-entry; four dashboard tabs and original Slack image; native Pitch ↔ Game Flow transition, opening film and final Q&A. Public deployment evidence is recorded in `docs/versions.json`.

New VFX autoplay/loop and individual updated skill playback cannot be visually certified until actual files exist. Linked event consequences remain unverified. Failure/retry handling is implemented; no deliberate network fault or fake gameplay was injected. Browser automation's element-scroll helper can nudge the cinematic scroll position; use normal coordinate clicks for media checks rather than mistaking that automation scroll for a deck layout change. No engine change was made to accommodate that helper.

Part 2 focused tests: changed media returns HTTP 200; complete video cycle and muted start; only one active Combat video; completion/Return restoration; tab/scene exit pauses and re-entry default-only; Home 2×2 geometry at both agreed sizes; pending labels removed only for verified replacements; no missing requests/console errors. Stop after the affected checks pass.

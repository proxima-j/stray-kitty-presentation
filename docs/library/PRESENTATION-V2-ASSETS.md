# Stray Kitty V2 — Composition and Asset Inventory

**2026-11-10 · REVIEW ONLY. New media is pending. Do not integrate V2 until approved.**

Canonical decisions: [Notion rehearsal handoff — Section 11](https://app.notion.com/p/414e33b0423f81649454e1a9ade5c211). Archived intact V1: [archive/presentation-v1-2026-11-10](https://github.com/proxima-j/stray-kitty-presentation/tree/archive/presentation-v1-2026-11-10), original commit 0daa72fda8cd7ab9f1a8a99aed9f4eb537137461 (23 pages, including Roadmap and Alert).

## Working V2 brief

- Target **21 pages** after deleting Roadmap (old 03) and Detect, Alert, Recover (old 19), preserving both in the permanent V1 archive.
- Chapter 5 **LIVE DEMO after Page 02**, not an additional slide: narrative → Warehouse light → briefly play combat → presenter-triggered victory shortcut → Home Hub interactions. The shortcut is intentional demonstration acceleration. Pre-open the public game tab and mute the game site separately in Chrome. Test the saved state/progression and keep a recording fallback if useful.
- The **only remaining page composition reviews** are **05 Home Hub** (old 06) and **11 Combat** (old 12). Page 02 pitch and demo-loop reminder are already published, and **Random Events stays completely unchanged** (only later automatic page renumbering). Game Flow removal remains a separate open discussion; no new media is required for Game Flow or Q&A.
- Leave surviving Technical Architecture, Kubernetes, From Gameplay to Telemetry, Observability, and the other sections intact except later agreed edits. This asset pass must not modify Current, Previous, archived V1, the v3 motion engine, or the original game repository.

## Current media vs new asset needs

| V2 page | Existing authentic media to reuse | New, pending | Composition intent |
| --- | --- | --- | --- |
| 02 Elevator Pitch | assets/closing/stray-kitty-poster.webp; assets/illustrations/d20-dungeon-master-original.webp; assets/illustrations/playful-cats-original.webp | **None** | **Locked Current layout** with original poster, story and updated **UP NEXT / LIVE GAMEPLAY · CHAPTER 5 / The Gameplay Loop in Action** text. No more composition work. |
| 05 Home Hub | assets/pages/06/greenhouse-stage-01.webp through -04.webp; cat-reaction-web.mp4; postcard-to-parcel-web.mp4; furniture-drag-save-web.mp4 | **Three updated growth screenshots (Stages 02–04)** plus **one real repair/restoration clip**; Stage 01 stays original | Original GROWS 2×2: no additions in BEGINNING, then furniture accumulates across REBUILDING, GROWING, CELEBRATION. RESPONDS same 2×2: RESTORATION top-left; CAT REACTION top-right; POSTCARD/REWARD bottom-left; CUSTOMIZATION bottom-right. |
| 10 Random Events | assets/pages/08/01-testing-view.webp; 02-event-choice.webp; 03-event-success.webp; existing Fish +1 and Material +1 reward crops | **None on this page**. Different event-to-battle proof is collected for **Combat** | **Exact existing composition and visuals**. Do not introduce a second event, new panel or trigger. Original Fish +1/Material +1 are resource rewards, not a direct battle modifier. |
| 11 Combat | assets/pages/09/battlefield-main.webp; reposition-closeup.mp4; skill-activation-closeup.mp4; companion portraits/VFX crops; advisor before/after stills | **Three individual skills with real pre-release animation/SFX; one native full-frame general VFX/SFX; a verified event→battle effect** | **Exact production geometry and original controls**. Make each existing companion profile clickable; use the existing battlefield for event proof and skill clips, and a large overlay for full-frame VFX. Retain 阿策 Local Fallback. All sound user-triggered only. |

All existing paths are under docs/. Listed V2 file targets below are suggestions **not actual assets** and must never be marked as uploaded or cleared until recorded and verified.

### Capture groups A and B — Home Hub progression + repair media (latest agreed)

**Composition locked:** Preserve the existing Home GROWS 2×2 grid, left title/tabs, frame sizes, border and caption alignment. RESPONDS must use exactly the same geometry. The user inspected the old images and observed that multiple stages are nearly identical: **do not use them as if gradual furnishing were already visible.**

#### A — Four stages, with only three NEW screenshots

| Stage / position | Capture requirement | Asset / status |
| --- | --- | --- |
| **01 BEGINNING (top-left)** | **Do not add any new furniture.** Preserve the approved original beginning image exactly as it is; this is the unchanged baseline for all later stages. | Existing `docs/assets/pages/06/greenhouse-stage-01.webp` — **READY, NO RECAPTURE NEEDED** |
| **02 REBUILDING (top-right)** | From the Beginning arrangement, add **a small number of real furniture/decor items** while retaining the baseline arrangement. Visible, modest progression from Stage 01. | Planned `docs/assets/v2/home/growth-02.webp` — **PENDING** |
| **03 GROWING (bottom-left)** | Retain Stage 02's furniture and add **more genuine items**, with an obvious richer arrangement than REBUILDING. | Planned `docs/assets/v2/home/growth-03.webp` — **PENDING** |
| **04 CELEBRATION (bottom-right)** | Keep accumulated items and add further real furniture/decor so this is **clearly the most furnished stage**; preserve the legitimate home/finale context. | Planned `docs/assets/v2/home/growth-04.webp` — **PENDING** |

**Incremental requirement:** Furniture should accumulate, not reset randomly across screenshots: **baseline → baseline + few → previous + more → richest**. Avoid claiming a screenshot is a stage-specific default arrangement when extra furnishings were prepared in an isolated QA save.

**Capture consistency:** Same actual gameplay build, camera position and scale, viewport, image framing and asset style throughout. Historical originals used 1600×900, camera x=-42, y=3, scale=0.528169014084507; reuse if still valid, otherwise document a new common camera. Capture through real supported inventory/decor mechanics or authorized staged QA state. Record stage/save IDs, placed items, build SHA, capture time, cropping and publication clearance. No Photoshop/generative additions or fictional game states.

**Review placeholder behavior:** Stage 01 shows its authentic screenshot **without a pending label**. Stages 02–04 show clearly differentiated **capture-pending placeholders** with the planned cumulative density, over their historical images only as faint references. They are not presented as the finished, increasingly furnished versions. On receiving cleared assets, swap the three image paths and remove pending treatments. No new Stage 01 asset is required.

#### B — HOME RESPONDS: Restoration first (same 2×2 frame geometry)

| Position | Media | Status |
| --- | --- | --- |
| **Top-left** | **RESTORATION** — new authentic fix/repair animation showing before → interaction → actual completed repair | **PENDING** |
| **Top-right** | **INTERACTIVE / CAT REACTION** — `docs/assets/pages/06/cat-reaction-web.mp4` | **READY** |
| **Bottom-left** | **RANDOM REWARDS / POSTCARD & PARCEL** — `docs/assets/pages/06/postcard-to-parcel-web.mp4` | **READY**, guarantee/pity QA example |
| **Bottom-right** | **CUSTOMIZATION / FURNITURE** — `docs/assets/pages/06/furniture-drag-save-web.mp4` | **READY** |

Proposed new genuine repair derivative: `docs/assets/v2/home/repair-animation.mp4` or a smaller suitable WebM/GIF. The fixing action must have a readable start, actual game action, and meaningful completion, in roughly 4–8 seconds if feasible without artificial truncation. Use a legitimate checkpoint/save and retain native pixel-art VFX and timing, source master, captured dimensions/duration, crop and attribution.

For the deck: maintain identical 16:9 tile framing, gaps and captions across both modes; no layout jump when switching tabs. Retain scene-aware/lazy media loading, pause controls and stop on scene exit/tab hide. Home clips remain muted unless an actual new audio requirement is separately approved. No new assets get registered in the manifest before the verified media exists.

### Capture group C — authentic event to combat connection: PENDING

Proposed only after confirming relevant gameplay: docs/assets/v2/events/carry-event.webp, carry-effect.webp, carry-battle.mp4.

Choose one **genuine different event** that stores an actual carried modifier, battle difficulty effect, support item or companion, with evidence of how a later battle consumes it. Verify source event ID and choice, save/progression state, battle attempt/chapter and effect. Prefer same build and save; otherwise label distinct staged QA checkpoints rather than claiming a continuous take.

**Do not claim the currently shown feeder-bowl Fish +1 and Material +1 have a direct battle effect**. They are inventory resources. Preserve the existing trigger/choice/result sequence as a separate example, and add an actual corroborated carryover example when collected.

### Capture group D — updated combat VFX with sound: PENDING TEAMMATE UPDATE

Suggested: docs/assets/v2/combat/featured-skills-with-sfx.mp4 and, only if needed, separate Rongrong Star Burst, Banban Shield, Diandian Healing Purr close-ups.

New effects must come from a genuine game build; verify the version, battle attempt, activation, sound-source provenance, timing and permission to publish. Do not add generic stock sounds and call them actual game SFX, generate imaginary gameplay or invent measured improvements. Prefer H.264/AAC fast-start derivatives and local-only source masters. Make media audible **only after a presenter Play click**; pause/reset on scene exit and ensure no overlapping audio. The previously captured Advisor answer is explicitly **Local Fallback** and must stay labelled.

## Collection and review protocol

1. Audit existing approved project assets before capturing anything; never duplicate binaries already published.
2. Use isolated authorized QA saves/checkpoints. Capture only authentic changes and linked evidence. Do not modify real player data or the game source to fake a desired state.
3. Verify game revision, source ID, original dimensions/duration, audio, permission, capture method and any transformation. Crop for legibility without reconstructing status text.
4. Publish cleared assets under docs/assets/v2/ only when genuinely collected and approved; add them to docs/library/manifest.json in the same verified change. Keep private originals outside the public repo.
5. Keep the **Home Hub and Combat production-faithful V2 previews** isolated under docs/review/ for approval; Page 02 stays on Current and Random Events stays on its unchanged original page. Existing authentic media may appear under clearly labeled pending replacement/capture slots, never as fabricated final VFX or repairs.
6. After approval, integrate native scenes, remove old Roadmap and Alert, renumber to 21, keep existing global cat/route and reversible 4.2-second movement; verify on 1600×900 and 1366×768 and publish Current/Previous normally.
7. Do not delete source review pages until live integration has been verified; preserve the permanent V1 branch and its original assets.

## Asset readiness

| Requirement | State |
| --- | --- |
| Pitch poster / illustrations / Chapter 5 cue | **READY and live** |
| BEGINNING Stage 01 original screenshot | **READY — NO CHANGES** |
| Three new Home growth captures, Stages 02–04 | **PENDING** |
| One Home restoration clip | **PENDING** |
| Different event → battle consequence proof | **PENDING: select and verify case** |
| Updated VFX and in-game SFX | **PENDING TEAMMATE UPDATE** |
| Game Flow / Q&A | **NO NEW CAPTURE** |
| Roadmap and Alert removal | **AGREED; NOT INTEGRATED** |
| 23-page V1 permanent source archive | **PRESERVED** |

This file is the **asset and composition planning register**, not an implementation-completion report.


## Live review verification — 2026-11-10

Published GitHub Pages run [42789537961](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42789537961) succeeded. The [pitch](https://proxima-j.github.io/stray-kitty-presentation/review/v2-02-pitch.html), [Home](https://proxima-j.github.io/stray-kitty-presentation/review/v2-05-home.html), [Events](https://proxima-j.github.io/stray-kitty-presentation/review/v2-10-events.html), and [Combat](https://proxima-j.github.io/stray-kitty-presentation/review/v2-11-combat.html) standalone review pages all served publicly. Their media and pending descriptions are draft/review labels, not a final asset approval.

A read-only browser smoke test confirmed Home GROWS ↔ RESPONDS tabs (four current stills versus three real video slots plus one pending repair slot), and Combat battlefield, three cat cards, Reset and advisor Local Fallback controls. **Combat Activate Skill selected the genuine existing muted video, but it did not autoplay in the test browser and displayed the built-in “Use the video player to retry” status**. This is an observed playback/buffering limitation, not proof that a new VFX/SFX capture exists or that the skill footage played successfully. Verify a click-to-play and buffering/retry flow when new media is integrated. No Current, Previous or archive presentation content was changed.


## Latest review correction — 2026-11-10 (supersedes first V2 Events/Combat drafts)

The first two exploratory compositions at docs/review/v2-10-events.html and docs/review/v2-11-combat.html changed too much. **The current production Random Events and Combat layouts are the authoritative starting compositions.** Do not integrate the split-case event design or revised "Fight Together" Combat layout.

**Random Events, V2 Page 10:** Keep the current Trigger → Choice → Result screenshot sequence, Fish +1 / Material +1 close-ups, and existing bottom Battle Support / Butterfly Effect pills. No new second evidence lane or major layout changes. The resource-reward screenshots do not directly alter battle. The demonstration of a genuine different event's carried supply/support or difficulty effect takes place on **the following Combat page**, not on Events.

**Combat, V2 Page 11:** Preserve exactly the current Real-Time Tactical Tower Defense header, left battlefield with Reposition / Build Energy / Activate Skills, right cat profiles, and separate 阿策 Local Fallback reveal. Use the existing "FROM RANDOM EVENTS → BATTLE PRESSURE + SUPPORT" bridge as a discreet clickable cue. After entering Combat, clicking the bridge should temporarily show a verified real event → carried support/penalty → next battle effect in the **existing battlefield window** and restore that window afterward. Do not autoplay or force a second slide.

**Option B approved:** Clicking each existing companion profile (Rongrong, Banban, Diandian) should select and play that cat's genuine updated ability VFX with in-game synchronized SFX in the existing left battlefield window. Keep their authentic portrait, name, role and still VFX visible and use only a subtle selected state. The current Banban skill movie is a separate, silent older recording and cannot demonstrate all three updated SFX.

**Additional general/full-screen VFX:** A separate button opens a near-full-slide 16:9 overlay for actual **uncropped battle-wide VFX with real game sound**. It is not just a magnified small ability crop; verify what real full-frame effects are available in the team's new build. Close/Escape returns to the unchanged Combat composition. This is a local interaction, not another slide or a browser Fullscreen requirement.

**Playback/keyboard requirements:** All audible video starts on an explicit presenter click. Use one active media controller: pause when selecting another clip, leaving the page, hiding the tab or closing the overlay. Retain original Reposition and Activate Skills controls until specifically approved otherwise. Provide loading/retry feedback, preserve 4.2-second global navigation, and keep keyboard focus inside an open overlay.

| New V2 evidence | Where displayed | Status |
| --- | --- | --- |
| One real supported event, corresponding carried effect and next battle consequence | Combat top bridge → left battlefield | **PENDING selected/verifiable case** |
| Rongrong updated VFX + real synchronized SFX | Click Rongrong profile | **PENDING teammate recording** |
| Banban updated VFX + real synchronized SFX | Click Banban profile | **PENDING teammate recording** |
| Diandian updated VFX + real synchronized SFX | Click Diandian profile | **PENDING teammate recording** |
| Full-frame general/battle-wide VFX with authentic SFX | Full-screen-effects 16:9 overlay | **PENDING teammate recording and effect identification** |

Reuse one genuine source capture for multiple views when possible; do not duplicate media unnecessarily. Do not claim any new footage exists until source/build and permission are verified. Existing initial V2 preview URLs remain comparisons only; next review should reproduce the actual original two-page composition before adding small interaction affordances.


## Capture readiness after teammate pre-release animation and audio update (2026-11-10)

**Decision:** Do **one focused, read-only Codex pass after the teammates' VFX/SFX changes land in the agreed capture build**, then capture and verify. There is **no need for another full architecture or repository walkthrough**. The media collection stays pending until the new implementation is accessible and functional.

### New animation requirement: keep the whole skill cycle

The teammate is adding a short **pre-release/anticipation animation** before ability release, plus **in-game sound** for the VFX. Each new individual ability recording must capture the full cause-and-effect sequence without cutting off the new beginning:

1. **Ready / initiation:** battle context, the ability becoming available, and the actual player action or visible activation trigger.
2. **Pre-release animation:** the full new anticipation/wind-up animation, including its actual duration and any associated sound.
3. **Ability release and impact:** complete genuine skill VFX and synchronized game sound (not sound added afterward and described as in-game).
4. **After-effect / settle:** enough time to see the shield, damage, heal, or other implemented result, and the battlefield return to play.

Do not trim to the flash alone. The previous silent Banban demo is a valid **historical fallback/reference** but does not prove the new pre-release animation or updated SFX.

### Focused Codex audit before collecting — one pass, no game changes

Run against the exact target teammate branch/MR or merged commit, with its new files visible:

- **Version/ownership:** identify branch, merge status, SHA, files changed, names of skill effects and available genuine SFX; confirm what actually shipped versus what is proposed. If changes are still in flux, wait for an agreed stable build; avoid recapturing provisional versions.
- **Activation order:** trace the real input → cast/pre-release animation → skill release → game-state effect → sound playback. Confirm visual/sound synchronization, input acceptance during the pre-release phase, and whether other abilities or pauses can interrupt it.
- **Capture staging:** identify the shortest legitimate QA save/checkpoint to get enough energy, activate each skill, and repeat without manually patching game logic. Verify the actual target battle and character set; avoid altering production saves or gameplay source for a presentation capture.
- **Media output:** confirm full native game frame, browser/audio recording method, music/SFX balance, clip length covering all four phases, and whether a single master can supply three skill cuts plus the separate full-frame showcase. Avoid duplicate binaries and over-cropping.
- **Presentation compatibility:** confirm the app's new ability timing does not conflict with the deck's local replay and global navigation; capture media should be user-started with sound, stop on slide exit, and retain original audio/VFX timing.
- **Observed vs planned:** give a short evidence table, capture-ready yes/no, missing assets, and exact filenames/entry points. Report blockers; do not claim the game is ready merely because source files exist.

**Special audio precaution:** The presenter plans to **mute the game website in Chrome during the live Chapter 5 demonstration**. Chrome site mute applies to that website and could silence capture if recordings are made with the same site muted. For source capture, use an explicitly **unmuted recording browser/profile**, verify actual captured system/tab audio is present and synchronized, then restore the intended live-demo mute. The presentation is hosted on a different domain and its explicitly clicked VFX clips can remain audible.

### Updated capture acceptance matrix

| Capture | Needs pre-release phase? | Genuine SFX? | Frame / playback | Status |
| --- | --- | --- | --- | --- |
| Rongrong Star Burst | **Yes, if present in updated skill implementation** | **Yes** | Native context; presented in existing left battlefield on profile click | **AWAITING STABLE BUILD AND AUDIT** |
| Banban Shield | **Yes, if present** | **Yes** | Native context; presented in existing left battlefield on profile click | **AWAITING STABLE BUILD AND AUDIT** |
| Diandian Healing Purr | **Yes, if present** | **Yes** | Native context; presented in existing left battlefield on profile click | **AWAITING STABLE BUILD AND AUDIT** |
| General/battle-wide VFX | Capture any actual preparation, release, and effect sequence that exists | **Yes** | **Uncropped native 16:9/full-gameplay frame**, large overlay, explicit Play | **EFFECT TO VERIFY IN UPDATED BUILD** |
| Event carry → subsequent battle | Depends on real chosen event/battle mechanism | Include original game audio if useful; not mandatory when evidence is static | Genuine linked event state and battle effect | **SEPARATE MECHANIC AUDIT PENDING** |

**Collection trigger:** Start capturing only after (1) the teammate confirms the target implementation is ready, (2) the focused audit identifies the exact build and clip boundaries, and (3) normal QA skill release and its actual audio work in that build. A failing capture leads to one targeted correction and retest, not a broad repeated code walkthrough.

**No presentation, game, or archive change is authorized by this planning update.** Mark any future asset READY only after its verified media file and provenance are recorded.


## 2026-11-10 acceptance update: sound starts when VFX opens

Opening an individual combat skill via its cat profile or opening the full-frame effects viewer **must start the real VFX and its synchronized in-game sound automatically as part of that one click**. No second Play click or separately triggered audio button. This is **user-gesture-initiated playback** rather than unprompted sound on slide entry. If browser playback is blocked or buffering, show an explicit retry/play fallback. Preserve the existing silence of historical clips, and never invent missing audio. The production binding stays empty until the teammate delivers a verified clip containing its authentic sound.

The current isolated Combat review includes empty slots for those genuine video URLs and a viewer that will start audio when one is assigned; until then it displays the previous real VFX stills and clearly marked pending footage. End/close/scene exit or selecting a different clip must immediately pause the prior audio. Chrome site mute during the separate live Chapter 5 demo does not apply to the GitHub Pages presentation domain.

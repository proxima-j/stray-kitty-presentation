# Stray Kitty V2 — Composition and Asset Inventory

**2026-11-10 · REVIEW ONLY. New media is pending. Do not integrate V2 until approved.**

Canonical decisions: [Notion rehearsal handoff — Section 11](https://app.notion.com/p/414e33b0423f81649454e1a9ade5c211). Archived intact V1: [archive/presentation-v1-2026-11-10](https://github.com/proxima-j/stray-kitty-presentation/tree/archive/presentation-v1-2026-11-10), original commit 0daa72fda8cd7ab9f1a8a99aed9f4eb537137461 (23 pages, including Roadmap and Alert).

## Working V2 brief

- Target **21 pages** after deleting Roadmap (old 03) and Detect, Alert, Recover (old 19), preserving both in the permanent V1 archive.
- Chapter 5 **LIVE DEMO after Page 02**, not an additional slide: narrative → Warehouse light → briefly play combat → presenter-triggered victory shortcut → Home Hub interactions. The shortcut is intentional demonstration acceleration. Pre-open the public game tab and mute the game site separately in Chrome. Test the saved state/progression and keep a recording fallback if useful.
- Four review pages: **02 Elevator Pitch**, **05 Home Hub** (old 06), **10 Random Events** (old 11), **11 Combat** (old 12). Game Flow and Q&A are optional wording-only refinements, not new capture requirements.
- Leave surviving Technical Architecture, Kubernetes, From Gameplay to Telemetry, Observability, and the other sections intact except later agreed edits. This asset pass must not modify Current, Previous, archived V1, the v3 motion engine, or the original game repository.

## Current media vs new asset needs

| V2 page | Existing authentic media to reuse | New, pending | Composition intent |
| --- | --- | --- | --- |
| 02 Elevator Pitch | assets/closing/stray-kitty-poster.webp; assets/illustrations/d20-dungeon-master-original.webp; assets/illustrations/playful-cats-original.webp | **None** | Keep the current real 16:9 poster and exact story, plus already published **UP NEXT · LIVE GAMEPLAY · CHAPTER 5** cue. Optional three-system originality framing; no crowded new cards. |
| 05 Home Hub | assets/pages/06/greenhouse-stage-01.webp through -04.webp; cat-reaction-web.mp4; postcard-to-parcel-web.mp4; furniture-drag-save-web.mp4 | **Four cumulative-furniture growth screenshots**, **one real repair/restoration clip** | Keep THE HOME GROWS and THE HOME RESPONDS. Two-by-two gallery for each mode; replace the growth photographs after verification; add Repair as the fourth authentic Home Responds clip. |
| 10 Random Events | assets/pages/08/01-testing-view.webp; 02-event-choice.webp; 03-event-success.webp; existing Fish +1 and Material +1 reward crops | **Verified second event → combat carry consequence**: 1 event screenshot, 1 saved-effect view, 1 battle impact screenshot/clip as needed | Preserve the existing resource-reward example and create an explicitly **separate** effect-carry evidence area. The feeder-bowl Fish/Material result is NOT directly a battle modifier. |
| 11 Combat | assets/pages/09/battlefield-main.webp; reposition-closeup.mp4; skill-activation-closeup.mp4; companion portraits/VFX crops; advisor before/after stills | **Latest in-game skill VFX + genuine synchronized SFX recordings** (one featured clip; optional 1–3 companion-specific clips) | Battlefield as main audiovisual proof; compact real companion roles; distinct event→battle support linkage; retain optional 阿策 local-fallback reveal. User-triggered sound only. |

All existing paths are under docs/. Listed V2 file targets below are suggestions **not actual assets** and must never be marked as uploaded or cleared until recorded and verified.

### Capture group A — home growth stages: PENDING

Proposed files: docs/assets/v2/home/growth-01.webp … growth-04.webp.

Four genuine chapter/home progression checkpoints with the **same camera, viewport, scale and framing**. Arrange visibly more furniture/decor in later stages **within actual game state**. If manually prepared with isolated QA saves, label those captures as staged QA arrangements, not automatically awarded default furniture. No image synthesis or copy/paste furniture. Compare at projected slide size for legibility and record exact game revision/checkpoints.

### Capture group B — one repair animation: PENDING

Proposed: docs/assets/v2/home/repair-animation.mp4 (or WebM/GIF when justified). Record a real fix/repair interaction, visible result, ideally ~4–8s. No secrets or UI debugging overlays. MP4/WebM may be smaller and controllable compared with GIF; silently looping is fine. Preserve source master, source date, QA checkpoint and timing conversion.

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
5. Keep four V2 composition previews isolated under docs/review/ for approval. A preview may use approved previous media as placeholders and text marked **NEW CAPTURE PENDING**, but must not present those as final features.
6. After approval, integrate native scenes, remove old Roadmap and Alert, renumber to 21, keep existing global cat/route and reversible 4.2-second movement; verify on 1600×900 and 1366×768 and publish Current/Previous normally.
7. Do not delete source review pages until live integration has been verified; preserve the permanent V1 branch and its original assets.

## Asset readiness

| Requirement | State |
| --- | --- |
| Pitch poster / illustrations / Chapter 5 cue | **READY and live** |
| Four richer Home growth views | **PENDING** |
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

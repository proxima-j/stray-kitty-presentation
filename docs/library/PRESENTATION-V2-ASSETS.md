# Stray Kitty V2 — Composition and Asset Inventory

**2026-11-11 · Home Part 2A complete; Combat media pending. Current remains the approved 20-scene V2 Interim.**

[Home capture provenance](HOME-PART2A-CAPTURE.json) records the four completed assets and staged QA method. This status supersedes historical Home pending instructions below. Combat requirements remain unresolved.

The Part 1 status below supersedes the older review-only/planning restrictions in this historical inventory. [Part 2 handoff](PRESENTATION-V2-PHASE2-HANDOFF.md) and [exact media slots](PRESENTATION-V2-MEDIA-SLOTS.json) are the current implementation references.

Canonical decisions: [Notion rehearsal handoff — Section 11](https://app.notion.com/p/414e33b0423f81649454e1a9ade5c211). Archived intact V1: [archive/presentation-v1-2026-11-10](https://github.com/proxima-j/stray-kitty-presentation/tree/archive/presentation-v1-2026-11-10), original commit 0daa72fda8cd7ab9f1a8a99aed9f4eb537137461 (23 pages, including Roadmap and Alert).

## Working V2 brief

- Target **20 pages** after deleting Roadmap (old 03), Game Flow (old 04) and Detect, Alert, Recover (old 19), preserving all three in the permanent V1 archive.
- Chapter 5 **LIVE DEMO after Page 02**, not an additional slide: narrative → Warehouse light → briefly play combat → presenter-triggered victory shortcut → Home Hub interactions. The shortcut is intentional demonstration acceleration. Pre-open the public game tab and mute the game site separately in Chrome. Test the saved state/progression and keep a recording fallback if useful.
- The **only remaining page composition reviews** are **05 Home Hub** (old 06) and **11 Combat** (old 12). Page 02 pitch and demo-loop reminder are already published, and **Random Events stays completely unchanged** (only later automatic page renumbering). Game Flow is removed by the latest user request; Visual Novel is now V2 Page 03; no new media is required for Game Flow or Q&A.
- Leave surviving Technical Architecture, Kubernetes, From Gameplay to Telemetry, Observability, and the other sections intact except later agreed edits. This asset pass must not modify Current, Previous, archived V1, the v3 motion engine, or the original game repository.

## Current media vs new asset needs

| V2 page | Existing authentic media to reuse | New, pending | Composition intent |
| --- | --- | --- | --- |
| 02 Elevator Pitch | assets/closing/stray-kitty-poster.webp; assets/illustrations/d20-dungeon-master-original.webp; assets/illustrations/playful-cats-original.webp | **None** | **Locked Current layout** with original poster, story and updated **UP NEXT / LIVE GAMEPLAY · CHAPTER 5 / The Gameplay Loop in Action** text. No more composition work. |
| 04 Home Hub | assets/pages/06/greenhouse-stage-01.webp through -04.webp; cat-reaction-web.mp4; postcard-to-parcel-web.mp4; furniture-drag-save-web.mp4 | **COMPLETE:** three cumulative stills and authentic repair; Stage01 unchanged | Original GROWS 2×2: no additions in BEGINNING, then furniture accumulates across REBUILDING, GROWING, CELEBRATION. RESPONDS same 2×2: RESTORATION top-left; CAT REACTION top-right; POSTCARD/REWARD bottom-left; CUSTOMIZATION bottom-right. |
| 09 Random Events | assets/pages/08/01-testing-view.webp; 02-event-choice.webp; 03-event-success.webp; existing Fish +1 and Material +1 reward crops | **None on this page**. Different event-to-battle proof is collected for **Combat** | **Exact existing composition and visuals**. Do not introduce a second event, new panel or trigger. Original Fish +1/Material +1 are resource rewards, not a direct battle modifier. |
| 10 Combat | assets/pages/09/battlefield-main.webp; reposition-closeup.mp4; skill-activation-closeup.mp4; companion portraits/VFX crops; advisor before/after stills | **Three individual visual skill captures with pre-release animation; one native full-frame muted general VFX loop; a verified event→battle effect** | **Exact production geometry and original controls**. Make each existing companion profile clickable; use the same battlefield for event proof and skill clips, while authentic full-frame general VFX loops muted in the battlefield by default. No additional VFX button or popup. All Combat videos, including selected companion skills, play muted. Retain 阿策 Local Fallback. |

All existing paths are under docs/. Listed V2 file targets below are suggestions **not actual assets** and must never be marked as uploaded or cleared until recorded and verified.

### Capture groups A and B — Home Hub completed (2026-11-11)

Approved two-tab2×2 composition unchanged. Original Stage01 and three existing interaction clips remain untouched. New assets are registered and bound in production:

| Asset | Binding | Verified provenance |
| --- | --- | --- |
| `assets/v2/home/growth-02.webp` | `#homeGrowth02` | Native QA editor:3 added furnishings |
| `assets/v2/home/growth-03.webp` | `#homeGrowth03` | Same earlier3 plus3, real repairs completed |
| `assets/v2/home/growth-04.webp` | `#homeGrowth04` | Same earlier6 plus3, genuine finale checkpoint with disclosed isolated-save carryover |
| `assets/v2/home/repair-animation.mp4` | `#homeRestorationVideo` | Genuine November6 skylight repair;8s continuous original-speed cut;1280×720 H.264/no audio |

Stills use exact committed game source `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`, real1600×900 captures, uncropped960×540 WebP derivatives. Camera matches retained baseline exactly. Each prior ID/position/dimension remains in the next image. Repair sourceSHA `897f4c4ca63a4cd92ca2bfb6fff0dd296317251f`; original footage/build/evidence preserved locally. One genuine poster derivative is shared with load-failure fallback. Public posting of these project-owned captures and isolated QA staging was explicitly authorized in Part2A.

Full dates, camera, QA checkpoints, furniture coordinates, source masters, encoding, permission and bindings: [HOME-PART2A-CAPTURE.json](HOME-PART2A-CAPTURE.json). High-quality local masters and private save remain outside Git. No personal/save/authentication data published. See [Part2B handoff](PRESENTATION-V2-PHASE2-HANDOFF.md) for the seven remaining Combat/event files. These older review instructions are history; do not restore pending Home treatments.

### Capture group C — authentic event to combat connection: PENDING

Proposed only after confirming relevant gameplay: docs/assets/v2/events/carry-event.webp, carry-effect.webp, carry-battle.mp4.

Choose one **genuine different event** that stores an actual carried modifier, battle difficulty effect, support item or companion, with evidence of how a later battle consumes it. Verify source event ID and choice, save/progression state, battle attempt/chapter and effect. Prefer same build and save; otherwise label distinct staged QA checkpoints rather than claiming a continuous take.

**Do not claim the currently shown feeder-bowl Fish +1 and Material +1 have a direct battle effect**. They are inventory resources. Preserve the existing trigger/choice/result sequence as a separate example, and add an actual corroborated carryover example when collected.

### Capture group D — updated combat VFX (video-only, all playback muted): PENDING TEAMMATE UPDATE

Suggested: docs/assets/v2/combat/featured-skills-muted.mp4 and, only if needed, separate Rongrong Star Burst, Banban Shield, Diandian Healing Purr close-ups.

New effects must come from a genuine game build; verify the version, battle attempt, activation, pre-release animation, visual timing and permission to publish. **No sound recording or SFX track is required.** Do not generate imaginary gameplay or invent improvements. Prefer lightweight fast-start H.264 MP4/WebM video derivatives; all presentation videos must be explicitly muted. Individual cat videos start moving on the profile click, while the general battle video loops automatically muted. Pause/reset on scene exit and never let videos compete for playback. The previously captured Advisor answer is explicitly **Local Fallback** and must stay labelled.

## Collection and review protocol

1. Audit existing approved project assets before capturing anything; never duplicate binaries already published.
2. Use isolated authorized QA saves/checkpoints. Capture only authentic changes and linked evidence. Do not modify real player data or the game source to fake a desired state.
3. Verify game revision, source ID, original dimensions/duration, visual timing, permission, capture method and any transformation. Audio recording is not required. Crop for legibility without reconstructing status text.
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
| Updated visual skill VFX, pre-release animations, general battle loop (all muted) | **PENDING TEAMMATE UPDATE** |
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

**Option B approved:** Clicking each existing companion profile (Rongrong, Banban, Diandian) should select and immediately play that cat's genuine updated ability animation **muted** in the existing left battlefield window. Keep their authentic portrait, name, role and still VFX visible and use only a subtle selected state. The current Banban skill movie is a separate, silent older recording and cannot demonstrate the three updated pre-release animations.

**General/battle-wide VFX — default battlefield:** The main left battlefield frame displays a verified full-frame real battle-effects recording **muted, automatically looping** while Combat is active. There is **no Full Battle VFX button, extra overlay, dialog or slide**. Individual demonstrations temporarily replace that loop and restore it upon completion/close. The genuine existing still remains the fallback until the updated recording is available.

**Playback/keyboard requirements:** The default general VFX loops **muted** on Combat entry, and clicking any companion starts its genuine skill video **muted**. One video at a time: switching demonstrations pauses the previous clip, then completion/close returns to the muted loop. Page/tab hiding pauses all media; returning resumes only the muted loop. Retain Reposition and Activate Skills and preserve original 4.2-second global navigation.

| New V2 evidence | Where displayed | Status |
| --- | --- | --- |
| One real supported event, corresponding carried effect and next battle consequence | Combat top bridge → left battlefield | **PENDING selected/verifiable case** |
| Rongrong visual pre-release + VFX (no audio) | Click Rongrong profile; muted playback | **PENDING teammate recording** |
| Banban visual pre-release + VFX (no audio) | Click Banban profile; muted playback | **PENDING teammate recording** |
| Diandian visual pre-release + VFX (no audio) | Click Diandian profile; muted playback | **PENDING teammate recording** |
| Authentic full-frame general/battle-wide VFX | **Original left battlefield · muted autoplay loop · NO button** | **PENDING teammate recording and effect identification** |

Reuse one genuine source capture for multiple views when possible; do not duplicate media unnecessarily. Do not claim any new footage exists until source/build and permission are verified. Existing initial V2 preview URLs remain comparisons only; next review should reproduce the actual original two-page composition before adding small interaction affordances.


## Capture readiness after teammate pre-release animation update (2026-11-10; audio excluded)

**Decision:** Do **one focused, read-only Codex pass after the teammates' VFX/SFX changes land in the agreed capture build**, then capture and verify. There is **no need for another full architecture or repository walkthrough**. The media collection stays pending until the new implementation is accessible and functional.

### New animation requirement: keep the whole skill cycle

The teammate is adding a short **pre-release/anticipation animation** before ability release. The presentation will use visual footage only: **no in-game sound capture, synchronization or SFX asset is required**. Each new individual ability recording must capture the full cause-and-effect sequence without cutting off the new beginning:

1. **Ready / initiation:** battle context, the ability becoming available, and the actual player action or visible activation trigger.
2. **Pre-release animation:** the complete genuine anticipation/wind-up animation at its original timing.
3. **Ability release and impact:** complete genuine skill VFX, legible game-state changes and original timing, **with playback muted**.
4. **After-effect / settle:** enough time to see the shield, damage, heal, or other implemented result, and the battlefield return to play.

Do not trim to the flash alone. The previous silent Banban demo is a valid **historical fallback/reference** but does not prove the updated pre-release animation.

### Focused Codex audit before collecting — one pass, no game changes

Run against the exact target teammate branch/MR or merged commit, with its new files visible:

- **Version/ownership:** identify branch, merge status, SHA, files changed, names of visual skill effects and new anticipation animations; confirm what actually shipped versus what is proposed. If changes are still in flux, wait for an agreed stable build; avoid recapturing provisional versions.
- **Activation order:** trace the real input → cast/pre-release animation → skill release → visible game-state effect. Confirm visual timing, input acceptance during anticipation, and interruption behavior; **no audio audit needed**.
- **Capture staging:** identify the shortest legitimate QA save/checkpoint to get enough energy, activate each skill, and repeat without manually patching game logic. Verify the actual target battle and character set; avoid altering production saves or gameplay source for a presentation capture.
- **Media output:** confirm native game framing, visual-only capture method, original timing and clip length covering all phases, and whether one source can supply the three skill cuts and full-frame muted default loop. Avoid duplicate binaries and over-cropping.
- **Presentation compatibility:** confirm the animation timing works in the presentation; default loops autoplay muted, selected skill clips play muted on selection, all stop on slide exit and retain original visual timing.
- **Observed vs planned:** give a short evidence table, capture-ready yes/no, missing assets, and exact filenames/entry points. Report blockers; do not claim the game is ready merely because source files exist.

**Audio scope:** No new sound capture is needed. All gameplay videos, GIF-style loops, individual Combat effects and the default battle loop in the revised presentation play **muted**. GIFs have no audio. The separately user-started opening film remains a cinematic sequence and is not affected by this gameplay-loop policy.

### Updated capture acceptance matrix

| Capture | Needs pre-release phase? | Sound requirement | Frame / playback | Status |
| --- | --- | --- | --- | --- |
| Rongrong Star Burst | **Yes, if present in updated skill implementation** | **None · muted** | Authentic clip; autoplay muted when its cat profile is clicked | **AWAITING STABLE BUILD AND AUDIT** |
| Banban Shield | **Yes, if present** | **None · muted** | Authentic clip; autoplay muted when its cat profile is clicked | **AWAITING STABLE BUILD AND AUDIT** |
| Diandian Healing Purr | **Yes, if present** | **None · muted** | Authentic clip; autoplay muted when its cat profile is clicked | **AWAITING STABLE BUILD AND AUDIT** |
| General/battle-wide VFX | Capture actual full-frame gameplay effects and original timing | **None · muted** | **Uncropped authentic full frame, auto-looping muted in existing battlefield** | **PENDING UPDATED BUILD** |
| Event carry → subsequent battle | Depends on real chosen event/battle mechanism | **None · muted if moving** | Genuine linked event state and battle effect | **SEPARATE MECHANIC AUDIT PENDING** |

**Collection trigger:** Start capturing only after (1) the teammate confirms the updated visual implementation is ready, (2) the focused audit identifies the exact build and clip boundaries, and (3) normal QA skill release and its full anticipation→release→effect sequence work in that build. A failing capture leads to one targeted correction and retest, not a broad repeated code walkthrough.

**No presentation, game, or archive change is authorized by this planning update.** Mark any future asset READY only after its verified media file and provenance are recorded.


## 2026-11-10 — Final visual-only Combat playback specification

**Latest instruction supersedes all earlier Combat SFX capture and sound-on-selection proposals. No new sound recording is needed.**

- **Default battlefield:** An authentic full-frame VFX video starts automatically **muted and looping** in the existing left battlefield frame whenever Combat becomes active. No extra Full Battle VFX button, dialog or slide. Until that real video is available, the original authentic still remains visible with a clear pending label.
- **Individual cats:** Selecting Rongrong, Banban or Diandian begins their genuine skill animation **muted** immediately, without a second Play action. Clips must preserve the short new pre-release animation, release VFX and visible result. Reposition and Activate Skills also remain muted.
- **Event Support:** Clicking the existing Combat bridge displays verified linked event→battle evidence inside the left battlefield; moving footage remains muted. The source remains pending.
- **Return behavior:** One video active at a time. A selected demo pauses the muted general loop; when it finishes or is dismissed, return to the muted loop. On slide/tab exit stop all video; on re-entry resume only the muted default. If a browser blocks playback, provide retry controls, still muted.
- **Other moving media:** Home Hub loops, dice animations, gameplay demonstrations, GIF-like effects and other in-slide motion stay muted. GIF media has no audio by design. The manually triggered opening film retains its existing separate sound.
- **No SFX deliverables:** The teammate's video can be captured without recording its game sound. Audio quality or synchronization must not block visual media collection; only visual timing, frame accuracy and game-state provenance need verification.

[Combat V2 preview](https://proxima-j.github.io/stray-kitty-presentation/review/v2-11-combat.html) · No new full-frame or updated skill media has been collected. Current production and the permanent V1 archive remain unchanged.

## 2026-11-10 — Observability alert reminder moved to the dashboard toolbar

The [Observability V2 review](https://proxima-j.github.io/stray-kitty-presentation/review/v2-observability-alert.html) now places a small **ALERTS VIA SLACK / Phone notifications, if enabled** banner beside the **04 · Business & AI** tab, rather than within the Technical Health or Gameplay panels. It is a distinct cue, **not a fifth dashboard tab** and not an extra slide. Clicking it links to the authentic November 4 Slack alert capture at `docs/assets/datadog/page-03-alerts/slack-health-alert.png`.

This supports a one-second spoken reminder that Slack notifications can reach teammates' phones **when mobile notifications are enabled**. The dated evidence shows detection/notification and a later recorded recovery; it does not establish automatic root-cause repair. No new media capture required. The public Current Observability remains unmodified until V2 native integration is separately approved.


## Part 1 — implemented production state

**INITIAL PART 1:** 21 native scenes, marker `20261110-v2-interim-part1`. Roadmap and the separate Detect, Alert, Recover scene were removed from V2. Game Flow was retained initially and then removed by the latest user request; Current now has 20 scenes. Exact registry and runtime/media bindings are in the Part 2 handoff. Chapter 5 remains a separately pre-opened game tab after the unchanged Pitch reminder, never an extra slide.

**IMPLEMENTED:** Home GROWS preserves Stage 01 and uses three explicitly labelled historical stage references. RESPONDS uses the identical 2×2 geometry: pending RESTORATION / genuine INTERACTIVE / genuine RANDOM REWARDS / genuine CUSTOMIZATION. Muted scene-aware playback and pause controls remain in the existing generic media module.

**IMPLEMENTED:** Combat preserves its original production layout, three companion profiles, Reposition/Activate Skills clips, and Local Fallback advisor. Profiles show their authentic VFX stills with pending-video labels. The bridge shows explicit linked-evidence-pending content. One active Combat video, muted throughout; completion/dismissal/Return restores default; exit resets demonstrations. The nearly invisible reviewed upper-right Return has a transparent background, 24% idle opacity and visible keyboard focus.

**IMPLEMENTED:** Observability's existing four tabs/content remain; a separate ALERTS VIA SLACK / Phone notifications, if enabled banner beside Business & AI opens the existing Nov 4 Slack capture. No fifth tab, verified phone-delivery claim or automatic-repair claim.

**PENDING MEDIA:** three cumulative home stills, one actual repair clip, one uncropped general combat VFX loop, three individual updated skill cycles with full pre-release phases, and one verified event→stored effect→battle chain (two stills plus one consequence clip). Eleven future file targets are documented in `PRESENTATION-V2-MEDIA-SLOTS.json`; none is falsely added as an existing asset to the manifest. Updated VFX capture awaits a stable teammate build; event capture awaits a verified linked mechanic. No new footage was collected in Part 1.

**VERIFICATION:** focused candidate review at 1600×900 and 1366×768; retained scene content/asset references, Home switching/playback, Combat fallback/demonstrations/reset, Observability tabs/banner, film and native navigation. The integration commit, public verification and retained-version state are recorded in the handoff and `../versions.json`. Permanent V1 is unchanged; outgoing 23-scene Current becomes Previous only after the candidate gate passes. Reviews remain as Part 2 references.


## Current numbering after Game Flow removal

**IMPLEMENTED / VERIFIED:** Current marker `20261110-v2-no-gameflow`, 20 scenes. User requested removal of Game Flow; no other scene content or media changed. Home=04, Combat=10, Observability=16, Q&A=20. Stable-ID review links and the updated Part 2 registry are authoritative; historical review filenames keep their original numbering. Previous retains 23 scenes and V1 is unchanged. No new assets or additional rotation.

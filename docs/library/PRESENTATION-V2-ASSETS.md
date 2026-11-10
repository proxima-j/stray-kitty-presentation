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

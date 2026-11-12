# V2 Part 2 handoff

Current is **18-scene V2 — Final Presentation**, marker `20261112-v2-final-refinement`. The Pages run and public `deployment.json` identify the deployed commit.

## Versions and live demos

- Previous preserves the outgoing 21-slide deck from `91bdebe31e6b60614a1ad51b8cf5a0ccf5f6dffd`, including Payment, From Gameplay to Telemetry and Detect. Alert. Recover.
- Permanent V1 is on `archive/presentation-v1-2026-11-10` at `0daa72fda8cd7ab9f1a8a99aed9f4eb537137461`.
- After Page 02, switch to the pre-opened Chapter 5 game tab for gameplay and the sandbox payment flow. Return to Page 03.
- After Page 14, switch to the pre-opened Datadog tab. Return to Page 15.

## V2 registry

| Page | Stable scene ID | Subject |
| --- | --- | --- |
| 01 | `opening-film` | Opening Film |
| 02 | `elevator-pitch` | Elevator Pitch · Chapter 5 demo cue |
| 03 | `visual-novel` | Visual Novel |
| 04 | `home-hub` | Home Hub |
| 05 | `four-maps` | Four Maps |
| 06 | `vertical-design` | Three Connected Levels |
| 07 | `greybox` | Greybox |
| 08 | `random-events` | Random Events |
| 09 | `combat` | Combat · persistent ability close-ups |
| 10 | `dice-animations` | Dice Roll Animations |
| 11 | `adaptive-interface` | Responsive & Translucent UI |
| 12 | `technical-architecture` | Technical Architecture |
| 13 | `kubernetes-deployment` | Kubernetes Deployment |
| 14 | `observability` | Observability Across the Game · live Datadog cue |
| 15 | `cross-team-collaboration` | Cross-Team Collaboration |
| 16 | `design-test-rethink` | Design. Test. Rethink. |
| 17 | `connected-world` | A Dynamic, Living World |
| 18 | `closing-qa` | Q & A |

Use `?page=<stable-scene-id>` for durable review links. Numeric pages are 01–18.

## Part 2A — Home Hub verified

[Live Home](https://proxima-j.github.io/stray-kitty-presentation/?page=home-hub). Detailed capture/source/placement records: [HOME-PART2A-CAPTURE.json](HOME-PART2A-CAPTURE.json). All four principal binaries exist and are registered in `manifest.json` and the media slots inventory.

| Binding | Published file under `docs/` | Verified content |
| --- | --- | --- |
| `#homeGrowth01` | `assets/pages/06/greenhouse-stage-01.webp` | Original BEGINNING, unchanged |
| `#homeGrowth02` | `assets/v2/home/growth-02.webp` | REBUILDING: blanket, red cushion, castle (3 added items) |
| `#homeGrowth03` | `assets/v2/home/growth-03.webp` | GROWING: same 3 plus hammock, sun lamp, snack cushion (6) |
| `#homeGrowth04` | `assets/v2/home/growth-04.webp` | CELEBRATION: same 6 plus chandelier, acorn library, clover rug (9) |
| `#homeRestorationVideo` | `assets/v2/home/repair-animation.mp4` | Genuine skylight repair, full before/input/animation/completed change; 8 s, 1280×720 H.264, 30 fps, no audio |

New stills: real 1600×900 browser captures, uncropped 960×540 WebP derivatives, exact source `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`, isolated QA save. Camera x=-42/y=3/scale=.528169014084507, zoom1, logical viewport800×450 at y15. All prior player-added IDs/coordinates/dimensions are exact subsets of subsequent captures (3→6→9). Native repair upgrades change authored stage furnishings; this is authentic game behavior, not an arrangement reset.

Stage 02 uses `greenhouse.home_2`. Stage 03 advances the same save through real skylight/floor/planting repairs. Stage 04 uses the genuine `finale.home` checkpoint; only owned furniture, saved homeLayout and placements were copied from the isolated Stage 03 save, followed by three native editor placements. **Staged QA sequence, not a claimed uninterrupted campaign.** No real player save or game rule was changed. The retained Stage 01 has the same camera/world framing; its exact historical frontend SHA was not separately recorded.

Repair reuses `R06_Greenhouse_Skylight-Repair_100pct_T01.mp4`, captured November 6 at source `897f4c4ca63a4cd92ca2bfb6fff0dd296317251f` (clean original API executable build metadata; matching fresh frontend build record). Original1920×1080/13.9s MP4 and raw14.307s WebM remain local. One continuous1.5–9.5s interval, original1.0× timing, full frame, faststart. Materials40→33, stamps10→9; camera unchanged. Genuine before-frame poster: `assets/v2/home/repair-poster.webp` (960×540). No reconstructed imagery.

RESPONDS retains its approved 2×2 positions and the three original files unchanged: `assets/pages/06/cat-reaction-web.mp4` (5.813s), `postcard-to-parcel-web.mp4` (11s, guaranteed-reward QA example), `furniture-drag-save-web.mp4` (6.467s). The existing generic scene player owns all four muted loops and pause controls. Home-only error feedback retains each genuine poster and retries through the existing Play control. No independent player was added.

Focused verification: both galleries have equal bounding boxes at1600×900 (960.104×626.521) and1366×768 (819.688×539.375); all images decode, four clips advance muted, manual pause works, hidden tab/scene pauses, re-entry resumes normally, no Home pending overlay remains. Native forward/back scene navigation works; single cat/route and20-scene registry retained. Stage01/three existing clips/film/engine/Previous/V1 unchanged. One private missing-clip probe also retained the genuine poster and exposed the existing Play retry with an honest unavailable label; no fault was injected into the game or infrastructure. Publication requires the public Home check; use Actions and deployment stamp, not historical failed runs.

## Part 2B — Combat captures verified

[Live Combat](https://proxima-j.github.io/stray-kitty-presentation/?page=combat) · [Exact build, attempts, crops and encoding](COMBAT-PART2B-CAPTURE.json). Game build `41ff1459beecc0acfc89d3d5b3fb22997c9ec874` includes [MR !205](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/merge_requests/205), merge `f6f260b5c6d90cf38ea0d0e7ee88aaf7d0365dea`. Recordings use normal gameplay in isolated QA, at the native ×1 speed.

| Production binding | Verified file under `docs/` | Captured evidence |
| --- | --- | --- |
| `#v2DefaultBattleVfx[data-v2-default-src]` | `assets/v2/combat/warehouse-team-burst-muted.mp4` | 9.07 s, uncropped Warehouse finale with overlapping boss sweep, team shield and claw attack |
| Rongrong `data-v2-skill-clip` | `assets/v2/combat/rongrong-skill-sfx.mp4` | Rainy Alley, 100 energy, D8, cross VFX and Star Burst cue |
| Banban `data-v2-skill-clip` and Activate Skills | `assets/v2/combat/banban-skill-sfx.mp4` | Midnight Market, 100 energy, shield and expiry with cast cue |
| Diandian `data-v2-skill-clip` | `assets/v2/combat/diandian-skill-sfx.mp4` | Underground Tunnel, full cast, audible Healing Purr and ally HP recovery |
| `#v2BattleProof[data-v2-event-choice]` | `assets/v2/events/carry-choice.webp` | Genuine crate search selection |
| `#v2BattleProof[data-v2-event-state]` | `assets/v2/events/carry-state.webp` | Actual 3 + 4 = 7 partial result, Shadow Pressure +1 |
| `#v2BattleProof[data-v2-event-battle]` | `assets/v2/events/carry-battle.mp4` | 9 s, actual start and first wave of the same rescue attempt; boss starts at 3,120 HP |

**Timing distinction:** In the inspected build, the engine applies the effect when it accepts the cast. The viewport then emits the 2.2-second cast banner and board feedback. These clips show the whole shipped cast sequence; a separate pre-release wind-up is not implemented in this revision. If a different wind-up build becomes available, verify that revision before replacing the skill captures.

The dice-based node encounter `crate_event`, choice `search`, stores `shadowPressure: 1` after an unforced roll of 7. The next `alley_rescue` attempt in the same save uses high pressure (1.2× HP), producing the recorded 3,120 starting boss HP versus the 2,600 normal configuration. Material +2 is a separate inventory reward; the feeder-bowl example and its Random Events page remain unchanged.

The controller starts the selected clip on the presenter’s activation and plays one clip at a time. Companion casts and Activate Skills play game audio once and repeat muted while the selected close-up stays open. Warehouse, Reposition and event-to-battle clips play muted. Return and Escape restore the default loop. Unzoomed clips also return when they end. Scene exit and tab hiding reset playback. The recordings come from game main `1b7e5fba3ce2c93d5abf9c1325a70970c23d6b17`, which includes the cast cues from `0c2ac3b57f62a1400b66629ce8b46529589ecc1b` and follow-up SFX from `122459dc6e04b2c9a0eef42d79152af7cf495322`.

The archived Alert scene and its evidence remain in Previous and permanent V1. Current Page 14 presents the four existing dashboard tabs and cues the live Datadog demo.

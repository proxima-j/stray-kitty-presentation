# V2 Part 2 handoff

Current: **20-scene V2 — Home and Combat captures verified**, marker `20261110-v2-no-gameflow`. Home is Page 04 (`home-hub`); Combat is Page 10 (`combat`). The existing serialized GitHub Pages workflow publishes `docs/`; the successful Actions run and matching public `deployment.json` identify the deployed commit.

## Retained versions and scope

- Current remains the default deck; no rotation for this focused media update.
- Previous remains the frozen 23-scene source from `9e2cd416bde4268df0064eab90b09151f51e01db`, under `docs/previous/`, sharing existing assets once.
- Permanent V1 branch `archive/presentation-v1-2026-11-10` stays at `0daa72fda8cd7ab9f1a8a99aed9f4eb537137461`.
- Game Flow, Roadmap and standalone Alert remain removed from Current. No other page, game source, monitoring or infrastructure was modified by Part 2A.
- Original 4200ms reversible engine, single Miaomiao/continuous route, full opening film and its user-started sound are unchanged.
- Historical Part 1 integration: `e0dabbbf7a82272b3f45c846169dabe9da973fbf`; targeted Combat playback correction: `0f764237fe13540f547d3b1f9ae66202c0a4c422`; page-removal base: `2f5b7321c3bfb11e205b256a64fa21596a0715e6`.

## V2 registry

| Page | Stable scene ID | Subject |
| --- | --- | --- |
| 01 | `opening-film` | Opening Film |
| 02 | `elevator-pitch` | Elevator Pitch |
| 03 | `visual-novel` | Visual Novel |
| 04 | `home-hub` | Home Hub |
| 05 | `payment` | Xsolla Sandbox Payment |
| 06 | `four-maps` | Four Maps |
| 07 | `vertical-design` | Three Connected Levels |
| 08 | `greybox` | Greybox |
| 09 | `random-events` | Random Events |
| 10 | `combat` | Combat |
| 11 | `dice-animations` | Dice Roll Animations |
| 12 | `adaptive-interface` | Responsive & Translucent UI |
| 13 | `technical-architecture` | Technical Architecture |
| 14 | `kubernetes-deployment` | Kubernetes Deployment |
| 15 | `gameplay-telemetry` | From Gameplay to Telemetry |
| 16 | `observability` | Observability Across the Game |
| 17 | `cross-team-collaboration` | Cross-Team Collaboration |
| 18 | `design-test-rethink` | Design. Test. Rethink. |
| 19 | `connected-world` | A Dynamic, Living World |
| 20 | `closing-qa` | Q&A |

Use `?page=<stable-scene-id>` for durable review links. Numeric pages are now 01–20. Game Flow was removed after the initial Part 1 release; return from the separate Chapter 5 demo to Visual Novel, now Page 03. Chapter 5 is a separately pre-opened live-game tab after Pitch, never a slide/iframe. The exact approved Pitch reminder and its art remain unchanged. Random Events is unchanged except numbering; its Fish +1/Material +1 are resource rewards, not direct battle modifiers.

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
| Rongrong `data-v2-skill-clip` | `assets/v2/combat/rongrong-skill-muted.mp4` | 6.53 s, 100 energy, targeting, banner, cross damage and settle |
| Banban `data-v2-skill-clip` | `assets/v2/combat/banban-skill-muted.mp4` | 10.57 s, 100 energy, banner, shield and expiry |
| Diandian `data-v2-skill-clip` | `assets/v2/combat/diandian-tunnel-healing-muted.mp4` | 6 s in the Underground Tunnel, full cast and visible ally HP recovery. Rongrong uses Rainy Alley and Banban uses Midnight Market. |
| `#v2BattleProof[data-v2-event-choice]` | `assets/v2/events/carry-choice.webp` | Genuine crate search selection |
| `#v2BattleProof[data-v2-event-state]` | `assets/v2/events/carry-state.webp` | Actual 3 + 4 = 7 partial result, Shadow Pressure +1 |
| `#v2BattleProof[data-v2-event-battle]` | `assets/v2/events/carry-battle.mp4` | 9 s, actual start and first wave of the same rescue attempt; boss starts at 3,120 HP |

**Timing distinction:** In the inspected build, the engine applies the effect when it accepts the cast. The viewport then emits the 2.2-second cast banner and board feedback. These clips show the whole shipped cast sequence; a separate pre-release wind-up is not implemented in this revision. If a different wind-up build becomes available, verify that revision before replacing the skill captures.

The dice-based node encounter `crate_event`, choice `search`, stores `shadowPressure: 1` after an unforced roll of 7. The next `alley_rescue` attempt in the same save uses high pressure (1.2× HP), producing the recorded 3,120 starting boss HP versus the 2,600 normal configuration. Material +2 is a separate inventory reward; the feeder-bowl example and its Random Events page remain unchanged.

The existing controller plays only one muted battlefield video, resumes the default loop on completion or Return, and resets on scene exit. The authentic still covers loading or playback failure. Existing Reposition and Activate Skills clips, profiles, Local Fallback advisor and 24% Return styling remain intact. Focused checks at 1600×900 and 1366×768 covered the seven bindings, replay, event proof, each Return path, keyboard focus and forward/back lifecycle. No changes to Home, film, engine, Previous or V1.

Observability's four tabs and Slack evidence banner remain untouched. Historical Slack capture does not verify mobile delivery or automatic root-cause repair. No phone/emulator recording is needed.

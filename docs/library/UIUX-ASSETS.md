# UI/UX — approved and integrated

User approval: the local four-loop Dice and single-window Adaptive previews were reviewed and revised in chat on 2026-11-09. The user selected a replacement narrow screenshot, requested English labels, larger/spaced dice framing and four outcome colors, then explicitly requested integration into the public shared deck. These latest versions are scenes 13–14, following Combat. Current/Previous use one shared assets directory.

## Curated public inventory

| Asset ID | File under docs/assets/uiux/ | Pixels / duration | Source and method |
|---|---|---|---|
| uiux.dice.crit | dice/dice-crit-1p5x.mp4 | 560×400, 2.8667s, 1.5×, silent | Actual source renderer, normal server 6+6 critical resolution |
| uiux.dice.success | dice/dice-success-1p5x.mp4 | 560×400, 2.8667s, 1.5×, silent | Actual source renderer, normal server 4+6 success resolution |
| uiux.dice.partial | dice/dice-partial-1p5x.mp4 | 560×400, 2.8667s, 1.5×, silent | Actual source renderer, normal server 4+4 partial resolution |
| uiux.dice.fail | dice/dice-fail-1p5x.mp4 | 560×400, 2.8667s, 1.5×, silent | Actual source renderer, normal server 3+1 failure resolution |
| uiux.adaptive.normal | adaptive/normal-1600x900.png | 1600×900, DPR 1 | Actual Midnight Market, isolated market.explore QA save |
| uiux.adaptive.narrow | adaptive/narrow-user-selected.png | 565×616 image | Exact user-supplied selected game screenshot; original capture details unknown |

The two PNG originals are retained for the existing enlarged-image dialog. Matching lightweight WebP previews are served on slide (1280×720 normal; 565×616 narrow), loaded only when needed. The four small H.264/yuv420p fast-start MP4s are already presentation-ready; no further retiming or transcoding was performed for integration. Raw recordings, fixture, private saves/session tokens and diagnostic screenshots remain outside the repository and are not published.

## Dice provenance and limitations

Source game: main@1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e, including two pre-existing unrelated local changes preserved throughout collection. Game source and production/public saves were not modified. Existing event:alley:feeder_bowl_event QA fixture, ordinary carry_back choices, no Push, RNG override or probability/rule patch. Four tiers appeared in 22 normal rolls. Their genuine resolution objects were replayed through the unchanged DiceRollOverlay.tsx, dice-overlay.css and real CSS/3D dice in an isolated component fixture over a plain review backdrop. These are source-component QA captures, not four uninterrupted natural gameplay recordings.

The larger-framing fixture uses an 800×400 viewport. A consistent x=120,y=0,560×400 crop retains the full 540px-wide ceremony stage and vertical viewport; outer wind streak tails travel beyond the frame naturally. The complete native 2300ms toss + 1900ms reveal/VFX is retained, with a short lead-in, accelerated uniformly to 1.5×. Only the later Chinese compact result-card hold is excluded; English captions identify each outcome. The English labels are presentation translations of the source tiers: Critical Success (crit), Success (success), Success with a Cost (partial), Failure — Situation Advances (fail).

Visible authentic effects: critical rainbow ribbons/gold glints; success sun/halo/rays and glints; partial pixel clouds/wind; failure storm/lightning/blue-grey rain/shake. The source also creates emoji particle elements, but their glyphs do not render in the captured Chrome build: content:var(--e) receives an unquoted emoji value and computed pseudo-content is none. The captures preserve the actual render; no invented/repaired effect is claimed.

Latest layout: centered wide 2×2 grid with more breathing room, larger dice framing and gold/green/purple/rust outcome badges. Scoped scene styles reserve the existing v3 cat/route band. Only the active scene plays its muted loops; manual pause and document hiding use the shared media controller. The encoded speed is already 1.5×; browser playbackRate remains 1.

## Adaptive view provenance and limitations

Normal is the authentic 1600×900 desktop capture (DPR 1) of Midnight Market and its native translucent interaction labels. The selected Narrow image is an untouched user attachment with an open event result card; its 565×616 dimensions are image pixels, not verified viewport measurements. The pair shows different interaction states and is not controlled same-save/same-panel proof of resize behavior.

The earlier isolated implementation check confirmed native desktop UI scaling/letterboxing, and glass labels using rgba(17,44,57,0.24) with blur(5px) saturate(1.1) at both checked widths. Narrowing did not activate transparency. Functional modal panels retain their existing paper skin. The approved page switches authentic stills at their own aspect ratios inside one centered game window, with Normal/Narrow controls and the shared original-image dialog. No separate detail panel, simulated transparent overlay, resize recording or additional gallery is added. General phone/orientation support is not established by these images.

## Integration boundary

Existing twelve scene blocks, engine-v3.js, engine-v3.css, presentation.css, level-design.css, events-combat.css/js and shared interactions are preserved. New styling/behavior is isolated in uiux.css/js. No global navigation framework, permanent header/footer or second cat/route is introduced. The outgoing optimized twelve-page runtime becomes Previous only after local candidate verification. UI/UX source assets remain shared once. Technical reviews stay independent.

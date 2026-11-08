# Random Events — approved asset collection

Approved for public GitHub upload in chat on 2026-11-08. Assets only; Current, Previous, review-page HTML and the approved v3 engine are unchanged. Page 08 is a working label.

[View asset review board](../assets/pages/08/review-contact-sheet.png)

## Inventory

| Asset | File | Resolution |
| --- | --- | --- |
| `events.trigger.testing` | [01-testing-view.png](../assets/pages/08/01-testing-view.png) | 1500×1780 |
| `events.choice.feeder-bowl` | [02-event-choice.png](../assets/pages/08/02-event-choice.png) | 1200×1410 |
| `events.result.feeder-bowl` | [03-event-success.png](../assets/pages/08/03-event-success.png) | 1200×1270 |
| `events.reward.fish` | [04-reward-fish-closeup.png](../assets/pages/08/04-reward-fish-closeup.png) | 680×480 |
| `events.reward.material` | [05-reward-material-closeup.png](../assets/pages/08/05-reward-material-closeup.png) | 704×480 |
| `events.review.contact-sheet` | [review-contact-sheet.png](../assets/pages/08/review-contact-sheet.png) | 3000×2240 |

## Presentation direction

Retain the approved footer pills **Battle Support → Combat** and **Butterfly Effect → Future Encounters**. They replace the local review board’s explanatory caveat banner. No alternative-event capture or final page integration was requested in this upload.

## Capture provenance

- Game: existing local `main`, commit `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`, captured 2026-11-08. The frontend retained pre-existing changes to `tests/rainy-alley-map.test.ts` and `web/src/modules/rainyAlley/runtimeGeometry.ts`; the latter changes a wall collision contour, not random-zone geometry. No game files were edited for capture or upload.
- Separate loopback API/Vite services, new private guest save and browser. Original screenshots 3840×2160, 1920×1080 CSS viewport at 2× device scale. Original captures, unsuccessful attempts, logs, saves and helper scripts remain local.
- Testing view: official `alley.explore` QA checkpoint. Zone `rainy_random_west` is read directly from `level_design/rainy_alley/source/level_objects.json`: center (170,487), radius 23. Existing development debug circle painter was isolated in browser memory, with only that configured circle and TESTING VIEW label shown. No geometry or gameplay changed. This independent location capture does not claim the selected card was naturally drawn there.
- Choice/result: official `event:alley:feeder_bowl_event` QA checkpoint stages the authentic card and prerequisites. The recorded fourth interaction selected `carry_back` / 叼一些回去给伙伴们 and rolled **5+5=10, success**. Prior ordinary attempts: 5+3, 1+4, 2+3, all partial. No RNG injection, encouragement dice, probability or reward changes.
- Genuine outcome text: 叼回了一份数量可观的口粮。 Rewards **鱼干 +1 / 材料 +1** match both the current authored catalog and runtime resolution.

## Exact crop traceability

Coordinates below are left, top, right, bottom in the original 3840×2160 screenshots. No image synthesis or rewritten UI text.

| Published file | Original source capture | Crop | Enlargement |
| --- | --- | --- | --- |
| 01-testing-view.png | 01-testing-view-full.png | (300,160,1800,1940) | none |
| 02-event-choice.png | 02-event-choice-attempt-04.png | (1320,380,2520,1790) | none |
| 03-event-success.png | 03-event-success-full.png | (1320,450,2520,1720) | none |
| 04-reward-fish-closeup.png | 03-event-success-full.png | (1430,1150,1600,1270) | 4× from 170×120 |
| 05-reward-material-closeup.png | 03-event-success-full.png | (1602,1150,1778,1270) | 4× from 176×120 |

Both reward details are from the same successful-result PNG. Enlargements disclose their native source resolution and add no captured detail.

## Verified mechanics for narration

- **Zones:** exploration phase, authored map/floor/entry conditions, then the normal 550/1000 (55%) trigger gate and eligible event selection. Current integrated Rainy Alley, Market, Tunnel and Warehouse exploration use spatial zones. Market and Warehouse validate coordinates/floor server-side; Alley and Tunnel validate allowed IDs with client-side geometry. Tunnel additionally requires the false-kitten-trap discovery. Greenhouse has no supported zone command.
- **Distance:** backend REPORT_MOVE accepts positive reports up to 300 units and checks accumulated distance at 150-unit intervals. Its danger-level trigger chances are 3%,12%,16%,28%; **150 is an interval, not probability**. A random event resets the accumulator to −600, requiring another 750 accepted units before the next threshold. Backend ignores Alley/Warehouse reports; current specialized Alley/Tunnel/Warehouse frontend paths bypass the generic reporter and Market is explicitly excluded. Do not describe distance rolls as currently active on all maps.
- **Selection:** map/category/prerequisite eligibility, no replacement per map for ordinary cards, 333/1000 admission for each repeatable echo card. Separate danger-based risk shares 20%,40%,60%,80%, then uniform choice within category. Empty selected pools fall back to opportunities only. Therefore the trigger gate is not a guarantee in every pool state.
- **Choice/outcome:** normal 2d6 tiers: 2–4 fail, 5–8 partial, 9–11 success, 12 critical. The selected authored outcome adds fish to food inventory and material to material inventory. Material supports actual home repairs/crafting. This outcome gives no carry item or direct battle modifier.
- **Butterfly effect:** real saved-choice prerequisites enable later encounters, for example rats_truce → rats_gift_event / rat_pipeline_event and sack_cat_freed → wall_kitten_event. No later event in the current catalog requires this sample’s feeder_bowl_found state; the broader footer must not imply that extra outcome.

Verified against `server/internal/service/{random,events,game,warehouse,qa,renovation,home_decor}.go`, `web/content/events/{events,balance}.json`, `web/src/examples/demo/scene.ts`, Rainy Alley/Tunnel/Warehouse movement implementations and `web/src/ui/EventResult.tsx`.

## Scope and verification

Five curated PNGs plus one review board, this inventory and the existing asset manifest only. PNG decoding, manifest references and board footer are checked; commit/published-asset confirmation accompanies the upload. No full-frame source duplicates, private runtime data, new presentation pages, Combat modifications or deck rotation.

# Design-review capture checklist — new order

**Scope:** Review previews only. Pages 01–02 remain the existing opening film and elevator pitch; these drafts follow them. This checklist should be used only when Codex receives approval to implement the next presentation phase.

| Page | Composition | Actual assets Codex must collect after design approval |
| --- | --- | --- |
| 03 | Roadmap: **Part 01 · The Game** / **Part 02 · Technical Walkthrough** | None (text only) |
| 04 | Game Flow, renumbered from the existing Page 03 | No new assets; reuse the existing approved oval loop SVG and Home Hub design |
| 05 | **Visual Novel**; one large in-game friends scene; click **anywhere on the game frame** to advance | Three consecutive authentic screenshots of one dialogue scene with friends, using exact authored lines, same camera framing |
| 06 | **Home Hub**; growth overview + interactive moments in the same page | Four real home/greenhouse progression screenshots; three short silent clips with posters: touch cat→reaction, postcard draw/send→parcel→reward (randomized collectible furniture), drag/place/save furniture |
| 07 | **Payment**; Recharge → Xsolla Checkout → Confirmation | Three real screenshots: in-game pack choice, Xsolla sandbox checkout, *verified post-webhook credited balance* |

## Paths for eventual Codex implementation

| ID | Asset target |
| --- | --- |
| narrative.friends | `docs/assets/pages/05/friends-dialogue-01.png` through `-03.png` |
| home.growth.01–04 | `docs/assets/pages/06/greenhouse-stage-01.png` through `-04.png` |
| home.interaction.cats | `docs/assets/pages/06/cat-reaction.mp4` plus poster |
| home.interaction.postcard | `docs/assets/pages/06/postcard-to-parcel.mp4` plus poster |
| home.interaction.furniture | `docs/assets/pages/06/furniture-drag-save.mp4` plus poster |
| payment.recharge | `docs/assets/pages/07/1-recharge.png` |
| payment.checkout | `docs/assets/pages/07/2-checkout.png` |
| payment.return | `docs/assets/pages/07/3-confirmation.png` |

## Design interaction and content rules

- Page 03: the **only visible content** is the two part labels and their two large headings. Use generous whitespace and the approved cream/gold palette.
- Page 04: preserve the four-node oval loop and separately connected Home Hub without adding explanatory slide text.
- Page 05: display the headline **Visual Novel**. No second headline or floating dialogue control bar. Click anywhere **within the original in-game screenshot** to cycle the real captured dialogue frames; arrow keys remain reserved for navigation between presentation pages.
- Page 06: first show four growth stages side by side, then switch to the three actual interaction clips. Keep **INTERACTIVE / RANDOM REWARDS / CUSTOMIZATION** labels. In the collection example, emphasize randomized furniture as a reason to continue collecting. Avoid autoplaying three clips simultaneously.
- Page 07: heading **Payment**. Show three genuine player-facing Xsolla sandbox screenshots; do not claim successful credit unless it is verified after webhook/ledger settlement. Payment technical internals belong in the later technical walkthrough.
- No fabricated dialogue, generated screenshots, imaginary reward results or payment transactions. Capture only real existing gameplay. Video previews are out of scope for this design pass.

## Preview lifecycle

These files live only under `docs/review/`. **Current** and **Previous** remain independent, editable working presentation versions. Do not automatically insert previews into either deck or rotate versions during design review.

After the review is approved, Codex should gather assets and build the agreed pages into Current, verify the result minimally, **then delete the temporary review previews as part of the same completed integration phase**. Do not delete them before the verified build. No routine hashes or broad testing.

# Codex asset-collection brief — Pages 03–07

**Status:** Compositions approved for asset collection. Temporary previews remain in `docs/review/` and are **not** part of Current or Previous. **Collect actual assets and submit an inventory; do not integrate pages or delete reviews during this collection-only pass.**

## Source of truth and no-work pages

- Existing presentation: `docs/index.html` (Current) and `docs/previous/index.html` (Previous). Both remain editable and untouched by this pass.
- Review compositions: [Page 03 Roadmap](page-03.html), [Page 04 Game Flow](page-04.html), [Page 05 Visual Novel](page-05.html), [Page 06 Home Hub](page-06.html), [Page 07 Payment](page-07.html).
- **Page 03** needs **no media**: only PART 01 / The Game and PART 02 / Technical Walkthrough.
- **Page 04** needs **no media**: reuse the four-node oval and separate Home Hub loop already implemented in Current's original Page 03.
- **Pages 05–07** require the actual captures below.

## Exact asset requirements

| ID | Page | Required capture | GitHub target |
| --- | --- | --- | --- |
| `narrative.friends.01–03` | 05 | **Three consecutive actual visual-novel dialogue frames** showing Miaomiao and friends. Exact original dialogue/UI, one coherent scene and consistent framing; wait until text has finished rendering in each capture. | `docs/assets/pages/05/friends-dialogue-01.png` to `friends-dialogue-03.png` |
| `home.growth.01` | 06 | Beginning / early greenhouse shelter; actual first available game stage. | `docs/assets/pages/06/greenhouse-stage-01.png` |
| `home.growth.02` | 06 | Early repair/progression state, visibly different from Stage 01. | `docs/assets/pages/06/greenhouse-stage-02.png` |
| `home.growth.03` | 06 | More developed/lived-in state, visibly different from Stage 02. | `docs/assets/pages/06/greenhouse-stage-03.png` |
| `home.growth.04` | 06 | Best available late/final shared-home state, ideally endgame/celebration if actually present. | `docs/assets/pages/06/greenhouse-stage-04.png` |
| `home.interaction.cats` | 06 | Short real **touch/pet cat → visible reaction** capture. | `docs/assets/pages/06/cat-reaction.mp4` |
| `home.interaction.postcard` | 06 | Real **draw/prepare postcard → send → package/reward reveal**, illustrating repeatable randomized furniture collection. | `docs/assets/pages/06/postcard-to-parcel.mp4` |
| `home.interaction.furniture` | 06 | Real **drag furniture → place → save/arrangement persists** capture. | `docs/assets/pages/06/furniture-drag-save.mp4` |
| `payment.recharge` | 07 | In-game recharge window with an actual item/pack selection. | `docs/assets/pages/07/1-recharge.png` |
| `payment.checkout` | 07 | Actual **Xsolla sandbox** checkout page from this user journey. | `docs/assets/pages/07/2-checkout.png` |
| `payment.return` | 07 | Return to game **after** the asynchronous webhook/ledger has confirmed credit; show the verified updated balance, not only a return message. | `docs/assets/pages/07/3-confirmation.png` |

**Total baseline:** 10 PNG screenshots (3 narrative + 4 greenhouse + 3 payment) and **3 short MP4 interaction clips**. No separate poster images need to be collected. No new media for Pages 03–04. One **optional** extra screenshot of a different real postcard reward may strengthen the *Random Rewards* emphasis, if already easy to obtain; don't spend time grinding extra draws.

## Capture and selection standards

### Page 05 — Visual Novel

**Design:** Headline `Visual Novel`; game frame fills most of the review page. **Click anywhere inside the game frame advances the entire authentic screenshot** to the next dialogue frame. No fabricated overlay dialogue, external dialogue control bar or second headline. Arrow keys belong to global presentation navigation.

**First selection task:** Find a genuine scene with Miaomiao and **multiple friends**, where the dialogue itself explains friendship, the shared journey or home. Prefer an already available screenshot/recording; otherwise inspect authored story content and obtain a safe local/dev scene capture. The user's phrase “the one with friends” does not identify a verified chapter/scene ID in the sources reviewed here. Do not guess a filename or put fictional dialogue in the asset. Record the chapter/scene ID and the exact three dialogue lines separately in the small capture index.

If several credible scenes exist, provide **up to two candidates** (one thumbnail/description each) and recommend one. Avoid capturing multiple full branches or creating a new choice round if one clearly meets the criteria.

### Page 06 — Home Hub

**Four-stage comparison:** Use four *real* implemented progression states, cropped/framed consistently where possible, showing growth in the same greenhouse from poor shelter to developed shared home. Prefer existing saves or existing screenshots; do not redraw a stage, manually move furniture to fake a historical stage, or invent a fourth state. The labels Beginning / Rebuilding / Growing / Celebration are **editorial headings**, not verified exact game-state names. If only two or three authentic stages can be reproduced, collect those and record the limitation.

**Three interactions:** Record one focused, understandable action per clip:
- Cat reaction: ideally **4–8 seconds**, include pointer action and reaction.
- Postcard: **8–18 seconds** if needed for the whole actual sequence, include the parcel reveal; cut only idle waits, preserving real causal order. The random-reward mechanic should be apparent through the actual result or the real reward interface. An additional distinct genuine reward screenshot is optional if immediately available.
- Furniture: **5–10 seconds**, including drag, placement and a visible save or restored state.

Create three compact silent H.264 MP4s with readable UI; preserve original aspect ratio, consistent capture viewport and sufficient pixel-art sharpness. **Do not capture or export separate poster PNGs.** During later integration, show each clip's first paused frame or automatically derive a thumbnail from that same clip only if necessary for reliable browser display. **Do not export GIFs or autoplay all three clips simultaneously.** The final deck will play one clip only when selected.

### Page 07 — Payment

Capture the **player-facing Xsolla sandbox sequence**, ideally from one consistent test session: choose recharge pack → provider checkout → return with verified credit. Prior successful sandbox tests are documented, but their record alone is not a screenshot of this exact journey. Reuse valid existing screenshots/evidence first.

**Never publish** card numbers, account IDs, email addresses, transaction tokens, developer secrets, or other sensitive information; crop/redact as needed. Explicitly mark checkout as sandbox. Do **not** execute a new real-money charge or modify production/payment infrastructure. If a new sandbox transaction is needed and not already authorized for the capture, first identify that blocker; do not claim a return screen proves credited currency. If only two steps can be genuinely verified, keep the third pending.

## Efficient execution workflow

1. **Find before recording.** Search existing project-owned screenshots, clips, local game resources, existing save states, and prior demonstrations for the specific required files. Do not run unnecessary full-project audits.
2. **Collect only missing authentic captures.** If an unavailable stage depends on a time-consuming game replay or unsupported dev setup, record the blocker instead of modifying game logic just to fabricate a capture.
3. **Review candidates briefly.** One focused inspection per selected image/clip for cropping, readability, real interaction and no exposed sensitive data. Keep the same 16:9 presentation viewport where practical; don't stretch portrait images or crop away text.
4. **Publish collected, authorized assets in the presentation repo** at the canonical paths above and register their source, page and `CAPTURED_PENDING_APPROVAL` (or `UNAVAILABLE`) status in `docs/library/manifest.json`. This asset-collection pass is intentionally separate from the *later approved page integration*; **do not change** the working Current or Previous HTML/JS/CSS.
5. **Provide a concise inventory:** asset ID → repository path → source/chapter or state → `READY / NEEDS_SELECTION / UNAVAILABLE`; include only unresolved issues that affect the final composition.
6. Keep `docs/review/` intact. **After** the user approves the selected actual assets and Codex builds/verifies the new pages in Current, delete `docs/review/` during that same integration phase. Never delete previews during collection.
7. Only necessary verification: files readable, intended commit pushed, GitHub paths accessible, and one focused media review. **No broad test suite, unnecessary repeated hashes, game deploy, video work on Page 01, offline packaging, performance profiling or new dashboard.**

## Open decisions and safe defaults

1. **Friends scene:** exact chapter/interaction is not yet specified. Default: choose the clearest actual scene with Miaomiao and multiple companions and three consecutive meaningful dialogue lines; expose at most two candidates only if both are viable.
2. **Four greenhouse states:** exact checkpoint IDs have not been specified. Default: earliest, two visibly distinct intermediates, latest implemented. Do not promise four if the game has fewer real states.
3. **Randomized reward demonstration:** the audience should understand replayable chance-based collecting. Default: show one authentic postcard→parcel reward clip, with a second *different* real reward still only if readily available.
4. **Payment evidence:** default to a sandbox sequence with verified credited game balance, not just checkout redirect/success UI. Declare missing evidence rather than reconstructing it.

No other choices block preparing this list or gathering available media. New full-video optimization and final offline export remain deferred until final-release work.

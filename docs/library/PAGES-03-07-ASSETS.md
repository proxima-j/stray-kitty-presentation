# Pages 03–07 — collected gameplay assets

Collected 2026-11-08. **10 PNGs + 3 silent H.264 MP4s.** All captured files are `CAPTURED_PENDING_APPROVAL`; READY below means technically ready for editorial review, not already approved.

Pages 03 and 04 need no new media. Current, Previous, the v3 engine and all review compositions remain untouched. No integration or version rotation performed.

| Asset ID | Repository path | Source / state | Review |
| --- | --- | --- | --- |
| `narrative.friends.01` | `docs/assets/pages/05/friends-dialogue-01.png` | Game checkpoint finale.celebration; authored node finale_intro_7; 旁白. Full typewriter text completed before capture. | READY |
| `narrative.friends.02` | `docs/assets/pages/05/friends-dialogue-02.png` | Game checkpoint finale.celebration; authored node finale_intro_8; 团子. Full typewriter text completed before capture. | READY |
| `narrative.friends.03` | `docs/assets/pages/05/friends-dialogue-03.png` | Game checkpoint finale.celebration; authored node finale_intro_9; 喵喵. Full typewriter text completed before capture. | READY |
| `home.growth.01` | `docs/assets/pages/06/greenhouse-stage-01.png` | Existing server-authored QA checkpoint greenhouse.home_1; matching default home camera, 1600×900 viewport; no manual stage/decor edits. | READY |
| `home.growth.02` | `docs/assets/pages/06/greenhouse-stage-02.png` | Existing server-authored QA checkpoint greenhouse.home_2; matching default home camera, 1600×900 viewport; no manual stage/decor edits. | READY |
| `home.growth.03` | `docs/assets/pages/06/greenhouse-stage-03.png` | Existing server-authored QA checkpoint greenhouse.home_3; matching default home camera, 1600×900 viewport; no manual stage/decor edits. | READY |
| `home.growth.04` | `docs/assets/pages/06/greenhouse-stage-04.png` | Existing server-authored QA checkpoint finale.home; matching default home camera, 1600×900 viewport; no manual stage/decor edits. | NEEDS_SELECTION |
| `home.interaction.cats` | `docs/assets/pages/06/cat-reaction.mp4` | Fresh local capture at official finale.home checkpoint. Native pointer click on Tuanzi; actual happy reaction, heart and authored pet-response bubble; petPressure 0→1 verified read-only. | READY |
| `home.interaction.postcard` | `docs/assets/pages/06/postcard-to-parcel.mp4` | Existing project recording output/trailer-originals-2026-11-06-takes/premiere/C08_Greenhouse_Heart-Parcel-Stool-Placement_T01.mp4, source 0.5–17.0s. Real prepare/draw heart → send → parcel → seedling-stool reveal. | READY |
| `home.interaction.furniture` | `docs/assets/pages/06/furniture-drag-save.mp4` | Existing project recording output/trailer-retakes-2026-11-06-190143/premiere/R07_Greenhouse_Seedling-Stool-Place-Save_T01.mp4, source 1.8–11.5s. Actual inventory selection, drag/place seedling stool, save and visible saved arrangement. Existing isolated owned-stool QA setup. | READY |
| `payment.recharge` | `docs/assets/pages/07/1-recharge.png` | Same fresh guest sandbox journey: public game starry-kitty.duckdns.org, Xsolla sandbox config verified; pack_small selected, ¥6 for 60 tuna; initial balance 0. | READY |
| `payment.checkout` | `docs/assets/pages/07/2-checkout.png` | Corresponding real sandbox-secure.xsolla.com checkout; 60-tuna item and ¥6 total visible, explicit sandbox banner; captured before entering official test-card details. | READY |
| `payment.return` | `docs/assets/pages/07/3-confirmation.png` | Same guest returned via provider Return to Game after sandbox success. Server payment history verified exactly one confirmed Xsolla pack_small entry, amount 600 CNY minor units, same player; authenticated game state tuna balance 0→60. Screenshot shows balance 60 and successful Xsolla sandbox ledger row. | READY |

## Selection and evidence notes

- Recommended friends scene: the three consecutive shared-home farewell nodes below. This is a meaningful Miaomiao-and-friends scene, but reveals the ending.
- Four implemented home stages were captured with identical camera parameters: x=-42, y=3, scale=0.528169014084507; viewport 1600×900. Stage 4 is authentic, but visually close to stage 3. Recommend retaining it as the final shared-home state only if subtle lighting progression suits the comparison; do not add decor to manufacture a larger difference.
- Postcard footage is an existing guaranteed/pity reward QA capture (draw 18), with a seedling stool reveal. Keep this qualification when describing randomness; this single clip does not establish reward probabilities or multiple outcomes.
- Payment sequence is now complete after explicit authorization for one new sandbox transaction: select the 60-tuna/¥6 pack → actual Xsolla sandbox checkout → return with confirmed credit. Exactly one confirmed Xsolla ledger entry matched the guest and pack; authenticated game state increased from 0 to 60 tuna. The final screenshot keeps the balance and successful sandbox history row readable. Published images contain no player/account IDs, emails, card details or tokens. No production configuration changes or real-money charge.

## Exact consecutive dialogue

### `finale_intro_7` — 旁白

清晨的第一缕朝阳洒在废弃花房上。曾经漏雨破损的温室，如今被猫咪们用纸箱搭起了坚固的攀爬城堡，窗边悬挂着暖黄串灯与毛毯，花草重获生机。附近的街坊也悄悄在门外放下了干净的清水盆、毛毯与香喷喷的猫粮——属于流浪猫们的“流浪猫王国”正式落成！

### `finale_intro_8` — 团子

（轻轻碰了碰喵喵的额头，望向院墙外的寻猫启事）喵喵，你看！那是找你的启事，还有那个熟悉的人影……你的主人一直在找你呢，你该回家啦。

### `finale_intro_9` — 喵喵

（眼中泛起感动的泪花，扑进带着蓝色饭碗与金枪鱼的熟悉怀抱，随后转过身，向墨墨、团子和点点骄傲地挥舞小爪子）明天见！本咪每天都会回来，和大家一起守护属于我们的流浪猫王国！

## Media metadata

Petting Tuanzi plays at 1.25× its original captured speed (37.5 fps). The postcard and furniture clips remain at 1.5× (45 fps). Full sequences and every source frame are retained; resolution, framing, silence and stable filenames are unchanged.

| Asset | Format | Duration |
| --- | --- | --- |
| `narrative.friends.01` | 1600×900 PNG | — |
| `narrative.friends.02` | 1600×900 PNG | — |
| `narrative.friends.03` | 1600×900 PNG | — |
| `home.growth.01` | 1600×900 PNG | — |
| `home.growth.02` | 1600×900 PNG | — |
| `home.growth.03` | 1600×900 PNG | — |
| `home.growth.04` | 1600×900 PNG | — |
| `home.interaction.cats` | 1600×900 H.264 MP4, silent | 5.813s |
| `home.interaction.postcard` | 1600×900 H.264 MP4, silent | 11.0s |
| `home.interaction.furniture` | 1600×900 H.264 MP4, silent | 6.467s |
| `payment.recharge` | 1600×900 PNG | — |
| `payment.checkout` | 1600×900 PNG | — |
| `payment.return` | 1600×900 PNG | — |

## Minimum verification

One focused visual inspection per selected capture; PNGs decoded and MP4 H.264/silent metadata verified. All media retains 16:9 framing. No full deck/game tests, benchmarks, poster images or GIFs. Git/public-path verification is reported with the upload commit.

# Page 09 — approved combat asset collection

**Approved for GitHub publication on 2026-11-08.** This is an asset upload only; Page 09 is not integrated into Current or Previous. The review HTML and approved v3 engine remain unchanged.

[View approved contact sheet](../assets/pages/09/review-contact-sheet.png) · [Play repositioning close-up](../assets/pages/09/reposition-closeup.mp4)

## Inventory

10 PNG assets + 1 silent H.264 MP4, plus one PNG contact sheet. Original source captures, full-frame recording, isolated saves and helper scripts remain outside this repository. No duplicate full-frame VFX/card screenshots or retired reposition stills uploaded.

| Asset ID | Repository path | Resolution / duration |
| --- | --- | --- |
| `combat.battlefield.main` | [docs/assets/pages/09/battlefield-main.png](../assets/pages/09/battlefield-main.png) | 1920×1080 |
| `combat.reposition.closeup` | [docs/assets/pages/09/reposition-closeup.mp4](../assets/pages/09/reposition-closeup.mp4) | 1600×900, 7.6s, 1× |
| `combat.companion.caster.figure` | [docs/assets/pages/09/caster-figure.png](../assets/pages/09/caster-figure.png) | 128×128 |
| `combat.companion.caster.vfx` | [docs/assets/pages/09/caster-star-vfx.png](../assets/pages/09/caster-star-vfx.png) | 825×470 |
| `combat.companion.guard.figure` | [docs/assets/pages/09/guard-figure.png](../assets/pages/09/guard-figure.png) | 128×128 |
| `combat.companion.guard.vfx` | [docs/assets/pages/09/guard-shield-vfx.png](../assets/pages/09/guard-shield-vfx.png) | 191×190 |
| `combat.companion.diandian.figure` | [docs/assets/pages/09/diandian-figure.png](../assets/pages/09/diandian-figure.png) | 128×128 |
| `combat.companion.diandian.vfx` | [docs/assets/pages/09/diandian-heal-vfx.png](../assets/pages/09/diandian-heal-vfx.png) | 600×440 |
| `combat.advisor.figure` | [docs/assets/pages/09/advisor-figure.png](../assets/pages/09/advisor-figure.png) | 128×128 |
| `combat.advisor.before` | [docs/assets/pages/09/advisor-01-before.png](../assets/pages/09/advisor-01-before.png) | 724×406 |
| `combat.advisor.after` | [docs/assets/pages/09/advisor-02-after.png](../assets/pages/09/advisor-02-after.png) | 724×694 |
| `combat.review.contact-sheet` | [docs/assets/pages/09/review-contact-sheet.png](../assets/pages/09/review-contact-sheet.png) | 3200×4390 |

## Provenance

- Game: local `main` at `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`, captured 2026-11-08; fresh Go API/Vite build, private local save and isolated browser.
- Main battlefield, all three VFX sources and the two advice cards belong to one authentic Midnight Market attempt. Skill energy accumulated through the normal simulation.
- Close-up video is a new authentic attempt at the same `market.battle` checkpoint, with the same build/stage/layout. One continuous native pointer action moves Banban B5→B6; no retiming. Crop: x=600, y=300, width=960, height=540 from 1920×1080, enlarged to 1600×900 with nearest-neighbor sampling.
- Character figures are transparent exports from the game’s own code-native renderer: `web/src/modules/battle/market/painter.ts::drawMarketCat`, `chapter/painter.ts::drawChapterCat`, `l00/painter.ts::drawCat`; advisor uses the same renderer as `shared/AdvisorPortrait.tsx`.
- VFX and cards are pure crops of original gameplay screenshots. Source crop rectangles are recorded below. Authored game text and VFX are unchanged.

| File | Crop: left, top, right, bottom in 1920×1080 source |
| --- | --- |
| `guard-shield-vfx.png` | `[1074, 350, 1265, 540]` |
| `caster-star-vfx.png` | `[675, 340, 1500, 810]` |
| `diandian-heal-vfx.png` | `[650, 370, 1250, 810]` |
| `advisor-01-before.png` | `[248, 651, 972, 1057]` |
| `advisor-02-after.png` | `[248, 363, 972, 1057]` |

## Companion abilities

Verified against `web/src/modules/battle/market/config.ts` and accepted skill-release variants in the UI.

| Companion | Active ability |
| --- | --- |
| 绒绒 / Rongrong | 星绒绽放: five traversable cells in a cross; 45 damage per enemy; 100 energy. |
| 斑斑 / Banban | 罐盖护盾: self-shield 60 for 8 seconds; does not heal or stack; 100 energy. |
| 点点 / Diandian | 安心呼噜: heal active allies by up to 80 HP, capped at max; cannot revive retired cats; 100 energy. |

The heal still contains fading earlier star effects from the uninterrupted real fight; its named green release remains identifiable. Battlefield context is preserved behind all three VFX crops.

## 阿策 — explicit source classification

**LOCAL FALLBACK, not model-backed.** Actual `/api/v1/advisor` request returned HTTP 200, `source=local`, `reason=not_configured`. Model/provider configuration was not changed. Before and after use the same actual interaction at paused battle time 47.6s. The before card shows the typed question before submission.

Question: 现在有谁受伤，应该怎样治疗？

Answer: 斑斑 152 / 240，团子 216 / 220。点点当前 4 / 100 能量，蓄满后手动使用安心呼噜，恢复仍在场全队 80 体力。没有治疗道具，护盾不恢复血量。

## Verification and scope

The revised crops/contact sheet were inspected, the native drag was accepted and the 7.60-second MP4 played to completion in Chrome. Copied PNGs decode; MP4 remains silent H.264. Only approved curated media, this inventory and the existing asset manifest are included in the upload. Current, Previous, review compositions, game code, deployed game and v3 engine are unchanged. No deck rotation or additional presentation development.

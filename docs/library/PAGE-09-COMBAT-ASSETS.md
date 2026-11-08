# Page 09 — approved combat asset collection

**Integrated 2026-11-09:** Current scene 12 (`combat`) now integrates the latest approved composition, both native-speed demo buttons and the 阿策 Local Fallback before/after reveal. Original collection/review notes below are historical; source paths retain their collection-era 09 labels.

**Original collection approved for GitHub publication on 2026-11-08.** The 2026-11-09 playback update below adds the requested skill clip and review controls. Combat is not integrated into Current or Previous; the approved v3 engine remains unchanged.

[View approved contact sheet](../assets/pages/09/review-contact-sheet.png) · [Play repositioning close-up](../assets/pages/09/reposition-closeup.mp4)

## Inventory

10 PNG assets + 2 silent H.264 MP4s, plus one historical PNG contact sheet. Original source captures, full-frame recordings, isolated saves and helper scripts remain outside this repository. No duplicate full-frame VFX/card screenshots or retired reposition stills uploaded.

| Asset ID | Repository path | Resolution / duration |
| --- | --- | --- |
| `combat.battlefield.main` | [docs/assets/pages/09/battlefield-main.png](../assets/pages/09/battlefield-main.png) | 1920×1080 |
| `combat.reposition.closeup` | [docs/assets/pages/09/reposition-closeup.mp4](../assets/pages/09/reposition-closeup.mp4) | 960×540, 7.6s, 1×; 418,587 bytes |
| `combat.skill.activation.closeup` | [docs/assets/pages/09/skill-activation-closeup.mp4](../assets/pages/09/skill-activation-closeup.mp4) | 720×406, 5.23s, native timing |
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

### Playback and skill clip update — 2026-11-09

The user requested diagnosis of the stationary-looking battlefield and a short clickable skill demonstration. The battlefield starts as a still; the mechanic buttons start their clips. On the tested public connection, the old video stayed at time 0 / readyState 0 with waiting/stalled events and no decoder error. Its public response was HTTP 200, `video/mp4`, with byte-range support; its MP4 already had a leading `moov` atom. This is evidence of media delivery/buffering on that connection, not evidence of an animation-engine failure. The old interaction also hid errors without feedback.

The repositioning file now uses its original native 960×540 crop directly from the unchanged local full-frame WebM master. Full 7.6-second action, 1× timing, H.264/yuv420p and fast-start are retained; no crop-content or action changes. File size falls from 2,787,735 to 418,587 bytes (~85% reduction). The previous enlarged 1600×900 high-quality master remains in the local Combat collection; it is not duplicated publicly. Historical contact-sheet metadata describes that original enlarged derivative.

The new **Activate Skills** clip records Banban's actual `罐盖护盾 / Shield` release in another isolated `market.battle` / `market_boss` attempt, existing game `main` at `1eecfabb5d8524ad10fc4654547a0ede6c9b2a4e`, on 2026-11-09. Separate loopback services and a new private save; normal energy charging, no game-source, energy or rule patches. The native skill button reads energy 100/100 before the click; it falls to 3.5 by the next sampled frame, with the genuine cyan release visible. Capture starts with the real menu, records the native click, and holds the real effect. Original 1920×1080 continuous WebM → crop x=900,y=300,width=720,height=406; no editorial retiming or invented cursor. The game's own menu inspection temporarily slows simulation to ×0.5; activation returns to the normal base ×1. The outcome is the implemented self-shield (60 for 8s), not healing. Private full-frame source and evidence stay local.

Both review buttons use one player inside the existing battlefield frame. Loading/buffering and retry states are visible; ended clips return to the still. Same-stage separate takes remain identified. Current, Previous, game code and the v3 engine remain unchanged.

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

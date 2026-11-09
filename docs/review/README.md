# Remaining composition reviews

## Datadog dashboard composition comparison

Selected on November 9: [main Datadog dashboard review](datadog-02-player-journey.html?tab=performance) now uses Option A for the three detail tabs. Overview remains side by side. The comparison links below are retained for reference; Current is unchanged.

- [A — Titled section stack](datadog-02-composition-review.html?layout=stacked&tab=performance): stacked section headers reveal one complete authentic dashboard chunk at a time.
- [B — Two consecutive screenshot columns](datadog-02-composition-review.html?layout=spread&tab=performance): the same selected source sections appear together in two columns.
- Both preserve Overview / Player Experience / Gameplay Events / Business & AI. Overview is locked side by side in both options. Each image opens its original section at full size.
- [Source sections and capture provenance](../assets/datadog/composition-review/provenance.json). Shared PNGs are reused across both options. No reconstructed widgets, duplicated binaries between layouts, or private player/session log crops.
- Composition review only: the existing approved Datadog previews, Current, Previous and v3 runtime remain unchanged. The Overview snapshot and the fixed November 2–9 detail views have separately recorded time windows and widget overrides.

Roadmap, Game Flow, Visual Novel, Home Hub and Payment are integrated and verified in Current. Their five superseded HTML previews and completed collection brief have been removed after successful publication.

- [Roadmap — Page 03](../?page=03)
- [Game Flow — Page 04](../?page=04)
- [Visual Novel — Page 05](../?page=05)
- [Home Hub — Page 06](../?page=06)
- [Payment — Page 07](../?page=07)
- [Integrated asset provenance](../library/PAGES-03-07-ASSETS.md)

Level Design, Random Events, Combat and UI/UX are integrated and verified in Current. Technical reviews remain independent of Current and Previous. Shared review styles/scripts remain because these pages depend on them. Remove each remaining review only after its own integration is published and verified.

## Approved Level Design asset collection

[Open the approved media board](level-design-assets.html) · [Asset provenance and inventory](../library/LEVEL-DESIGN-ASSETS.md).

This retained source-media collection contains the four map clips, actual Chapter 2 screenshot stack and traversal, floor artworks and the single development graybox. It uses stable section-based paths under `docs/assets/level-design/`. The same media now appears in Current scenes 08–10.

## Integrated Level Design

- [Page 08 — Four Maps](../?page=four-maps)
- [Page 09 — Three Connected Levels](../?page=vertical-design)
- [Page 10 — Greybox](../?page=greybox)

The approved compositions are normal scenes in Current's unchanged v3 player, after Payment. Outgoing optimized ten-page Current is retained as Previous following Events/Combat integration. The four native-speed muted map loops, continuous 7.30-second traversal, exact paired ↔ headings, original uncropped Greybox and annotated screenshot stack were verified locally and publicly. The C/F-annotated SVG now lives in the production asset directory with its three relative screenshot links updated. Superseded map composition previews and their dedicated styles, script, review SVG and notes were removed after publication; source media and this asset board remain.

## Integrated Random Events and Combat

- [Page 11 — Random Events](../?page=random-events): the latest approved trigger/choice/result composition, genuine reward details, footer concepts and original-image dialog. [Capture and mechanics notes](../library/RANDOM-EVENT-ASSETS.md).
- [Page 12 — Combat + 阿策](../?page=combat): the latest approved battlefield/three-profile composition, **Reposition** (7.6s) and **Activate Skills / Shield** (5.23s) buttons, plus the 阿策 before/after reveal. Both muted native-speed clips return to the battlefield still. Advisor arrows stay local and Escape closes it; the source remains **Local Fallback**. [Capture notes](../library/PAGE-09-COMBAT-ASSETS.md).
- [Begin with the three Level Design pages](../?page=four-maps): Four Maps → Three Connected Levels → Greybox → Random Events → Combat, with the original single cat/traced route and unchanged 4200ms reversible v3 player.

Verified locally at 1600×900 and 1366×768, then on published Current and Previous in default Chrome. On-demand small previews preserve the approved composition and loading fix. Original PNGs and both native video files remain in place. The two old review URLs redirect to Current; their obsolete context-assembly script, review-only interaction script and stylesheet were removed only after published verification. UI/UX and Technical remain separate.

## Integrated UI/UX

- [Page 13 — Dice Roll Animations](../?page=dice-animations): latest approved larger/spaced 2×2 composition, four muted 1.5× loops, English captions and distinct gold/green/purple/rust badges. Native game renderer and genuine QA resolutions; no invented animation. Media pauses on scene exit/document hiding, with the shared manual pause behavior.
- [Page 14 — Responsive & Translucent UI](../?page=adaptive-interface): one centered game window and Normal/Narrow toggle. Normal uses the verified original capture; Narrow uses the user's selected screenshot, with the event result card. Both retain their own aspect ratios and click-to-enlarge originals. No separate detail panel or responsive gallery.
- [Begin at Combat](../?page=combat): Combat → Dice → Adaptive, inside the original 4200ms v3 player with one cat/route.
- [Public asset inventory and provenance](../library/UIUX-ASSETS.md).

Current contains fourteen pages; Previous retains the outgoing optimized twelve-page deck. Local checks at 1600×900 and 1366×768, followed by actual published Current/Previous checks, passed. The two old UI/UX review URLs now redirect to Current and the unused placeholder stylesheet was removed after verification. Technical reviews and shared review.css remain intact.

The selected normal/narrow images show different interaction states; their pairing is not controlled same-save/same-panel proof of resize behavior. Native emoji glyphs do not render in the captured dice source build; visible genuine weather/particle effects are preserved. Capture limitations are recorded in the inventory.


## Integrated Technical Walkthrough — Pages 15–16

- [Page 15 — Technical Architecture](../?page=technical-architecture): approved Browser / Go API / JSON State layers, connected services and online-access deployment card.
- [Page 16 — Kubernetes Deployment](../?page=kubernetes-deployment): approved three Deployment / Pod / distinct PVC structure, separately managed Datadog and dated November 7 deployment evidence.
- [Deployment evidence and provenance](../library/TECHNICAL-ASSETS.md): genuine job #29905 / pipeline #8015 and archived release record. Browser authentication prevented a real screenshot; the bottom-right panel uses clean dated text and the source link. No fabricated screenshot or current Pod health claim.

Current contains sixteen scenes; Previous retains the outgoing verified fourteen-page deck. Local 1600×900 / 1366×768 checks and published Current/Previous browser checks passed, including reversible v3 navigation, the original cat/route and Previous's selected original-image link. After publication verification, `tech-01-architecture.html` and `tech-03-kubernetes.html` were removed. `tech-02-six-systems.html`, shared `review.css`, unrelated active reviews and all existing media remain untouched. No Six Systems scene was integrated.

Page 16 now uses the user-supplied authentic deployment-card screenshot from pipeline #7813 (November 6), separately labelled from the left November 7 record. See TECHNICAL-ASSETS.md for crop and verified source; no new review or scene was created.

The latest Page 16 update aligns both confirmation and image to November 6 / pipeline #7813 and shows all five successful jobs, with full-resolution enlargement. This supersedes the earlier mixed-date description. Published panel and image dialog verified.

## Integrated Teamwork, Iteration & Future — Pages 20–22

- [Page 20 — Cross-Team Collaboration](../?page=cross-team-collaboration): four local stages and genuine GitLab Work Item #4 / merged !80 via !81 / focused follow-up QA. Distinct coordination and delivery tracks; daily alignment; inspectable original evidence.
- [Page 21 — Design. Test. Rethink.](../?page=design-test-rethink): approved iteration loop, both ordinary-2d6 matrices and the AI design-scope comparison.
- [Page 22 — A Dynamic, Living World](../?page=connected-world): four existing game images around Living World, with bidirectional connections and explicit future-direction labels.

The 22-scene candidate passed local checks at 1600×900 and 1366×768, then the published Current and outgoing 19-scene Previous were checked. The three superseded Teamwork review HTML pages and their four now-unused dedicated CSS/JS files were removed only after public verification. Shared review dependencies and unrelated reviews remain.

[Canonical inventory and source scope](../library/TEAMWORK-FUTURE-ASSETS.md) · [Exact capture provenance](../assets/teamwork/gitlab/provenance.json). Original approved compositions remain in normal Git history. No Closing/Q&A scene was created.


## Closing Q&A — standalone composition review

[Closing Q&A preview](closing-qa.html) uses the exact user-supplied horizontal poster, preserved as `assets/closing/stray-kitty-poster.png`. A pixel-identical lossless WebP is used when beneficial for delivery. The minimalist 16:9 composition keeps large Faculty Glyphic “Q & A” at left and the complete uncropped poster at right, in approximately 30/70 regions. Static authentic Miaomiao/route echoes reserve composition space; no independent animation or deck controls are added. This review is not integrated into Current/Previous, and no version rotation has occurred. Intended future position: final scene after the Teamwork/Future section, using the single existing v3 cat/route and 4200ms engine after integration approval.


## Integrated Future influence — Page 22

[A Dynamic, Living World](../?page=connected-world) includes the approved finite click response inside the native v3 scene. The former [trial URL](future-click.html) now redirects to that scene. Select a system to send one influence through Living World to two related systems; click again to replay. Images remain still and the response settles after about 1.1 seconds. Enter/Space stays local, effects stop on scene exit, and reduced-motion preferences use static highlights. The title and “Every choice has consequences.” bottom takeaway are retained. The review-only stylesheet was removed after public verification; `docs/future-world.js` is the single production interaction/geometry implementation. The shared v3 engine, one cat/route, frozen Previous and standalone Q&A remain unchanged; no version rotation.


## Integrated Page 02 — horizontal poster

[View Current Elevator Pitch](../?page=02): the exact approved 16:9 composition is integrated into Current. Unchanged text at left; complete horizontal poster at upper right with original D20 and playful-cats illustrations beneath. Published Pages build #42635912073 verified the media and composition after commit `093219a`. The superseded standalone Page 02 review was removed after this verification. Previous and other active reviews—including Closing Q&A—remain unchanged.

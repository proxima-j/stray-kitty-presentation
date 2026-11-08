# Remaining composition reviews

Roadmap, Game Flow, Visual Novel, Home Hub and Payment are integrated and verified in Current. Their five superseded HTML previews and completed collection brief have been removed after successful publication.

- [Roadmap — Page 03](../?page=03)
- [Game Flow — Page 04](../?page=04)
- [Visual Novel — Page 05](../?page=05)
- [Home Hub — Page 06](../?page=06)
- [Payment — Page 07](../?page=07)
- [Integrated asset provenance](../library/PAGES-03-07-ASSETS.md)

Level Design is also integrated and verified in Current. Events, Combat, UI/UX and Technical reviews remain independent of Current and Previous. Shared review styles/scripts remain because these pages depend on them. Remove each remaining review only after its own integration is published and verified.

## Approved Level Design asset collection

[Open the approved media board](level-design-assets.html) · [Asset provenance and inventory](../library/LEVEL-DESIGN-ASSETS.md).

This retained source-media collection contains the four map clips, actual Chapter 2 screenshot stack and traversal, floor artworks and the single development graybox. It uses stable section-based paths under `docs/assets/level-design/`. The same media now appears in Current scenes 08–10.

## Integrated Level Design

- [Page 08 — Four Maps](../?page=four-maps)
- [Page 09 — Three Connected Levels](../?page=vertical-design)
- [Page 10 — Greybox](../?page=greybox)

The approved compositions are normal scenes in Current's unchanged v3 player, after Payment. Outgoing seven-page Current is retained as Previous. The four native-speed muted map loops, continuous 7.30-second traversal, exact paired ↔ headings, original uncropped Greybox and annotated screenshot stack were verified locally and publicly. The C/F-annotated SVG now lives in the production asset directory with its three relative screenshot links updated. Superseded map composition previews and their dedicated styles, script, review SVG and notes were removed after publication; source media and this asset board remain.

## Events and Combat — animated context review

- [Start with three preceding slides](events-01-random.html?page=05): **Visual Novel → Home Hub → Payment → Random Events → Combat**. The user selected the narrative part as the temporary lead-in while the intended preceding Map section is unfinished. This is review context, not the final order.
- [Direct Random Events review](events-01-random.html?page=random-events): full uncropped testing/choice/result screenshots and two genuine reward crops, with larger English labels. Click an image to use the deck's existing original-image dialog. The separate testing view illustrates spatial triggering, not one uninterrupted naturally drawn encounter. These are resources; the footer concepts describe the broader system. [Capture and mechanics notes](../library/RANDOM-EVENT-ASSETS.md).
- [Direct Combat + 阿策 review](combat-02-friends-ai.html?page=combat): one battlefield and three companion profiles with separate text and uncropped VFX. **Reposition** plays the 7.6-second muted 1× clip inside the battlefield frame and returns to the still; the clip is a separate take. **+ And one more friend…** reveals 阿策; click the question, **Show answer**, or Right to show the captured response. Left returns to the question; close or Escape dismisses the layer. The source remains **Local Fallback**, not model inference. [Combat capture notes](../library/PAGE-09-COMBAT-ASSETS.md).

**Activate Skills** is also a play button: it shows a genuine 5.23-second Banban Shield click/release close-up in the same battlefield area. Both demos stay muted and return to the still when finished. A small play marker distinguishes clickable mechanics; loading/buffering and retry feedback prevent a pending download from looking like a frozen still. Repositioning now uses the native 960×540 web derivative (~85% smaller), with its full original action and timing preserved.

Both existing URLs assemble the same limited five-scene review at runtime. `showcase-context.js` reads the three lead-in scenes directly from Current's `index.html` and the two existing review templates; media is referenced in place. It loads the **unchanged** shared `engine-v3.js`, `engine-v3.css`, tokens, components, presentation styles and scene interactions. There is one original walking cat and the same progressively traced SVG route, with 4200ms reversible arrow-key pacing. No copied engine, second navigation framework, opening-film download, duplicated media or third complete deck is created. Arrow/Space advances; Left reverses; Escape finishes travel. Local image/advisor controls consume their own keys.

Checked in Chrome at 1600×900 and 1366×768: three lead-in transitions (~4.2 seconds each), forward/reverse Events–Combat travel, intact screenshot/VFX fitting, original-image dialog, 1× muted clip completion and advice states without accidentally advancing the scene. Current, Previous, the approved engine and all other reviews remain unchanged. This is not final deck integration and does not rotate versions.

## UI/UX — two isolated composition previews

- [UX 01 — Four Dice Animations](uiux-01-dice.html): matched 2×2 frames for all four actual outcome animations, with shared size/crop; final game labels and clips pending.
- [UX 02 — Responsive & Translucent UI](uiux-02-adaptive.html): click **Normal** or **Narrow** to inspect the intended size-change composition; a detail crop highlights the translucent UI. These panels are **illustrative placeholders**, not proof of responsive game behavior.

Both are design-review pages only. Their working UX labels do not fix final slide numbers. They do not change Current or Previous. Replace placeholders with verified real game captures only after asset collection and approval; do not claim unverified narrow-window support.

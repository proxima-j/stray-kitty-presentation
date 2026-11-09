# Architecture — stable contracts

The template intentionally separates the global animation system from authored page content. **Blank Canvas and Example Mode share one engine**: `blank.html` is an alternate minimal entry document, while `index.html` contains five composition examples.

~~~text
index.html
 ├─ #scrollSpace > #stage > #world
 │   ├─ #roadDrawing (single SVG dotted route)
 │   └─ section.scene (ordered pages, each with one .scene-camera)
 ├─ #heroCat (one generic traveling marker for the entire deck)
 └─ help/pace controls

blank.html             Optional two-page Blank Canvas entry (replaces index.html in NEW project)
styles/blank.css        Blank Canvas palette and visual visibility settings
styles/tokens.css       Palette and licensed display font
styles/core.css         Global player shell, route, marker and help UI
styles/layouts.css      Page layout primitives and example compositions
scripts/story-engine.js Same v3 camera, 4.2s player, wheel follower and reveals
scripts/media.js        Scene-entry image loading and scene-visible muted video
scripts/interactions.js Local before/after buttons
assets/manifest.json    Asset rights and source-of-truth inventory
~~~

**Global engine owns:** scene positions and scroll range; path geometry and sampled route height; synchronized marker/path motion; 4.2-second reversible camera travel; reveal animation based on data-build and data-at; keyboard, wheel and reduced-motion behavior; page query synchronization; inert off-screen scenes; presentation:viewchange events.

**Pages own:** unique IDs, ordered content, copy, per-page CSS, approved media, small local user interactions and factual evidence. Do not add a second route, page manager, animation player or marker inside a slide.

Required DOM IDs in index.html: scrollSpace, stage, world, roadDrawing, routeGhost, routeInk, routeReveal, heroCat, helpButton, helpPanel, helpClose, paceSelect.

The template runtime is adapted from the approved Stray Kitty docs/engine-v3.js. The only application-specific changes are replacing the hard-coded project title with a presentation-title meta tag and generalizing Home Hub's optional lower-caption clearance to data-route-clearance. The motion calculations and arrival behavior remain intact.

The five-page example and the two-page Blank Canvas both use the same automatic scene count. Their content is completely replaceable as new pages are planned.

## Blank Canvas configuration (no engine fork)

In `blank.html` (or the copied project's `index.html`), set:

~~~html
<body data-route="off" data-traveler="off" data-visual-preset="neutral">
~~~

- Set `data-route="on"` to show the shared dotted route; `off` visually hides it.
- Set `data-traveler="on"` to show the shared pixel traveler; `off` hides it.
- Change `data-visual-preset` to `original` for the original palette, or leave `neutral` and edit `styles/blank.css` CSS variables for another identity. Font choices can also be changed in the copied project's stylesheet.
- These CSS switches **only change visibility and styling**. The original engine still calculates route geometry for camera travel. Keep the `#roadDrawing`, `#routeGhost`, `#routeInk`, `#routeReveal` and `#heroCat` nodes in place even when hidden; never `display:none` them.
- Preserve `data-build="text|rise|line"` plus `data-at` and the `.scene-camera` wrapper to retain the current element-entry language.
- Content layouts, page numbers, text, media, arrangement, and page-local interactions are **new-project decisions**, not dictated by either starting mode.

## Limits

The template's images are explicitly **illustrative placeholders**, not project evidence. Its generic pixel marker is original sample artwork, not the Stray Kitty character. Faculty Glyphic is shipped with its SIL Open Font License. No production GitLab, Datadog, payment, game-state or private audience data is included.

This is a reusable source-code starter, not a Google Slides/PPTX document or a drag-and-drop visual editor. Its transitions require a browser to execute JavaScript.

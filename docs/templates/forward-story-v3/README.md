# Forward Story v3 — reusable presentation template

A runnable, content-neutral presentation starter derived from the **approved Forward Story v3 motion system** used for Stray Kitty. The original scene-travel algorithm is reused and generalized, rather than imitated with a new animation library.

**[START HERE — template, source, workflow and Codex prompt](https://proxima-j.github.io/stray-kitty-presentation/templates/)**

**Live starter:** https://proxima-j.github.io/stray-kitty-presentation/templates/forward-story-v3/

## What is retained

- **4.2-second reversible** arrow-key transitions, plus wheel/trackpad scrubbing.
- One connected dotted route and a single walking pixel marker across all scenes.
- Camera travel with subtle 3D perspective and progressive text, card and line reveals.
- Warm cream (#F4E6C7), dark green (#34453E), gold and muted rust; Faculty Glyphic display font under the bundled OFL.
- Deep links by stable scene ID or numbered page; help controls and reduced-motion support.
- Local click interactions and scene-triggered image loading; inactive clips must pause.

The five included scenes are **generic examples**: cinematic cover, editorial pitch with artwork, architecture/process flow, before/after interactive evidence, and landscape-image Q&A closing. No Stray Kitty character, game-specific image, payment data or telemetry has been copied into this template.

## Start a new project

Copy the entire contents of this folder (not only index.html) to a new project or repository.

Windows PowerShell:

~~~powershell
Copy-Item -Recurse .\docs\templates\forward-story-v3 C:\path\to\my-presentation
cd C:\path\to\my-presentation
python -m http.server 8080
~~~

Then visit http://localhost:8080/ . Use an HTTP server, not a file:// URL.

The starter has no npm installation, external API, build system or required cloud service.

### Controls

| Control | Effect |
| --- | --- |
| → / Space / PageDown | Advance one scene |
| ← / PageUp | Go back one scene |
| Wheel / trackpad | Scrub the route |
| Escape | Finish active transition, or close help |
| Home / End | Jump to the first / last scene |
| ? | Show help and choose pacing (3, **4.2**, 5.5 seconds) |
| Focused Before / After buttons | Change only the current slide; Space stays local |

## Main files

| File | What it owns |
| --- | --- |
| index.html | Content and ordered scene registry |
| styles/tokens.css | Colors, Faculty Glyphic, borders and spacing tokens |
| styles/core.css | Route, stage, marker and help scaffolding |
| styles/layouts.css | Editorial layouts and project-specific page composition |
| scripts/story-engine.js | Original v3-inspired engine: camera, route, 4.2s pacing and reveals |
| scripts/media.js | On-demand images and scene-visible muted videos |
| scripts/interactions.js | Example local Before / After control |
| assets/manifest.json | Ownership, origin and approval of every media asset |
| scripts/check-template.mjs | Fast structural check for new scenes and assets |

The code behind story-engine.js is a minimally generalized copy of the project's working engine-v3.js: the deck title is configurable through a presentation-title meta tag, and any slide can request extra route clearance with data-route-clearance. Otherwise the animation and navigation logic remains intact. No need to edit the engine just to add or reorder pages.

## Add the next page

1. Write a **one-sentence audience takeaway**, then agree on the exact information and visual hierarchy.
2. Identify project-owned screenshots/clips, capture missing material and record source/permission in assets/manifest.json.
3. Create an **isolated composition preview** and get approval before touching the integrated deck.
4. Copy approved page content into a new section.scene in index.html. Use unique ID, consecutive zero-based data-scene and two-digit data-page, and one .scene-camera.
5. Add page-specific styles to styles/layouts.css and local interactions to scripts/interactions.js. Never duplicate the global cat or route.
6. Run node scripts/check-template.mjs, then perform focused browser checks at 1600×900 and 1366×768.
7. Publish normally, verify the live URL, and retire the single superseded preview **only after** verification.

See **[WORKFLOW.md](WORKFLOW.md)** for the complete asset-to-publish method (including Codex handoffs), **[SCENE-RECIPES.md](SCENE-RECIPES.md)** for markup/media/interactivity examples, and **[ARCHITECTURE.md](ARCHITECTURE.md)** for invariant engine contracts.

## Scope of reuse

The self-contained sample is designed for the user's future presentations. The included generic marker and placeholder are examples, **not actual product evidence**. Replace them with your own approved assets. Faculty Glyphic is under the included SIL Open Font License at assets/fonts/OFL.txt. The template does not grant permission to republish other projects' original content.

This starter is separate from the production Stray Kitty deck. Its existence **does not rotate or replace** the verified Current and Previous versions.

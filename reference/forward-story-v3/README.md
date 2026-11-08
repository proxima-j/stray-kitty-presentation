# Stray Kitty — Forward Story v3 (cinematic pacing)

A small interaction study continuing v2. This prototype is **not** the final presentation.

## How to try it

Simplest: open `Stray-Kitty-Forward-Story-v3-Smooth.html` in Chrome or Edge. All media is embedded; no install, server or network required.

Alternatively, for editable source: from this directory run `python -m http.server 5183`, then open `http://127.0.0.1:5183/index.html`.

## Controls

- **Right Arrow / Space** — play one full scene transition at a consistent default pace of **4.2 seconds**. Repeated presses during a transition are ignored, so assets cannot be skipped accidentally.
- **Left Arrow** — play the previous transition in reverse at a comparable pace.
- **Wheel / trackpad** — true scroll-scrub with damped rendering and a controlled maximum catch-up speed to reduce abrupt changes.
- **Esc** — finish the current keyboard transition immediately (or close the help panel).
- **Home / End** — jump directly to first / last stable moment.
- **?** (or **Shift+H**) — open temporary controls panel. Adjust arrow-key pace: 3.0, **4.2** (default) or 5.5 seconds. No fixed chrome in the presentation.

Each keyboard beat has two overlapping stages: forward camera travel in its first ~72%, then content builds and settles during the remainder. Earlier text and images start assembling during travel; later items get time to finish instead of appearing in a flash. Reduced-motion users receive immediate scene changes.

## What changed since v2

- Replaced native `scrollTo({behavior:'smooth'})` which often completes too quickly to show asset entrances.
- Introduced deterministic `requestAnimationFrame` timeline driven by elapsed time, for even keyboard pacing.
- Content build no longer shares the identical progress curve as camera travel.
- Added wheel-position smoothing with a speed cap. Scroll remains reversible.
- Prevented held or repeated arrow keys from skipping scene transitions.
- Stopped cat walk cycle when camera actually stops, including mid-scroll pause.
- Precalculated path samples on resize rather than repeatedly querying SVG path geometry during animation.
- Added one small optional speed selector inside the existing hidden help panel.

## Evidence

Focused headless Chromium checks were made using the standalone HTML inserted directly into the browser page (file:// and localhost navigation were blocked in the execution sandbox). Verified:
- Four-second arrow navigation progresses through intermediate positions, arrives and settles on the pitch page.
- A second Right Arrow opens the level-design scene; Left Arrow returns correctly.
- Rapid repeated presses during animation do not skip a scene.
- Esc completes the current sequence.
- Large wheel deltas are visually damped rather than applied instantly.
- Help opens/closes, pace setting responds, no page JavaScript errors observed.

This is not a live projector or physical trackpad test. Actual perceived smoothness still depends on the presenting laptop/browser/display.

## Source

`index.html`, `style.css`, `script.js` and `assets/` are the editable originals. `pack.py` generates the separate portable one-file HTML. Media files under `assets/` are copied from the prior v2 prototype and its project references without new footage or art production.

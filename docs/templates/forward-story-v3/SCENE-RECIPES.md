# Scene recipes

## 0. Start from a blank scene (recommended for new projects)

Use [Blank Canvas](blank.html) for a page-by-page design process. Copy the **complete** `forward-story-v3/` directory to the new project and copy `blank.html` over the new `index.html`; keep all shared `styles/`, `scripts/` and `assets/` files. The initial two scene shells carry no required composition: discuss each page's central idea, layout, supporting evidence and interaction before replacing the construction guides.

The default blank entry enables only the original **camera transitions and reveal primitives**. The route and traveler are hidden by CSS but their DOM elements are retained for geometry. Change `data-route` or `data-traveler` individually to `on` when those visuals fit the project. Change CSS variables in `styles/blank.css` to customize theme/typography.

The five-page [Example Mode](index.html) is available when ready-made layouts help. Neither mode imposes its opening, diagram, before/after or closing composition on the other.

Everything inside one presentation page goes in a single section.scene nested directly under #world. The global route and pixel traveler stay outside the scenes.

## 1. New scene

~~~html
<section class="scene" id="my-topic" data-scene="5" data-page="06"
  data-title="My Topic" aria-label="Page 06 — My Topic">
  <div class="scene-camera">
    <div class="page-shell">
      <div class="section-label" data-build="text" data-at=".06">
        <span class="number-pill">06</span>SECTION / TOPIC
      </div>
      <h2 data-build="text" data-at=".17">One clear claim.</h2>
      <div class="deck-card" data-build="rise" data-at=".45">
        Real evidence belongs here.
      </div>
    </div>
  </div>
</section>
~~~

Scenes must be in order. data-scene starts at zero; data-page starts at 01 and remains two digits. An ID such as my-topic supports a direct deep link (?page=my-topic). The engine automatically sets world width and scroll length.

## 2. Three reveal primitives

~~~html
<h2 data-build="text" data-at=".08">Headline</h2>
<div data-build="rise" data-at=".36">Image or meaningful card</div>
<hr data-build="line" data-at=".7">
~~~

text slides upward gently; rise uses perspective and vertical masking; line expands horizontally. data-at controls entry ordering, not separate animation timers. Use original engine motion wherever possible.

## 3. Authentic image or video

~~~html
<div class="media-frame">
  <img data-media-src="assets/my-cleared-image.webp" width="1600" height="900"
    alt="Actual recorded source with verified provenance">
</div>
~~~

Add an asset/approval entry to assets/manifest.json and keep a true original. The generic media loader attaches images on scene entry.

A muted scene-visible short clip:

~~~html
<video data-scene-video data-media-src="assets/my-cleared-clip.mp4"
  muted loop playsinline preload="none" aria-label="Genuine recorded clip">
</video>
~~~

scripts/media.js starts this only when its scene is visibly active and pauses it when hidden. For audible response clips, start playback after the presenter's click and ensure it stops on scene exit.

## 4. Local interaction: before/after

~~~html
<div role="group" aria-label="Evidence states">
  <button type="button" data-local-space data-example-view="before"
    aria-pressed="true">Before</button>
  <button type="button" data-local-space data-example-view="after"
    aria-pressed="false">After</button>
</div>
<div data-example-panel="before">Real before image</div>
<div data-example-panel="after" hidden>Real after image</div>
~~~

scripts/interactions.js demonstrates the listener and synchronized aria-pressed/hidden state. Focused Space/Enter operates the local button; global left/right arrow navigation remains available. The buttons are example identifiers and should be renamed for each independent interaction component.

## 5. Recorded interaction synchronized to monitoring

Use a single genuine recorded user action:

1. A real idle game loop or still shows the actual on-screen button.
2. A precisely aligned transparent or pixel-faithful HTML click target captures one press.
3. The recorded genuine response plays with original sound after a user gesture.
4. The matching before/after monitoring screenshots are revealed in sync with the replay.
5. Replay resets both. Keep trace/request IDs and QA classification in a manifest.

A presentation-layer click **does not** send a real backend request; it reconstructs timing from a previously verified action. Never construct synthetic log messages or pair two unrelated actions as a causal trace.

## 6. Ending and poster

One large Q & A on the left and a landscape image on the right is a reliable minimalist closing page. Keep its image uncropped and leave room near the bottom route. Add data-route-clearance on any scene that needs extra bottom room while the traveler arrives.

## 7. Project-independent conventions

Keep new page copy and media distinct from the example placeholder. Avoid putting API tokens, secrets, unredacted private logs or unrelated project art in public assets. No build system or third-party library is needed for these patterns.

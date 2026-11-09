# Page-by-page production workflow

This workflow is the reusable process developed for the Stray Kitty presentation. It separates **content approval**, **evidence collection**, **composition preview**, **runtime integration** and **publication verification** so different contributors or agents can work concurrently without overwriting one another.

## Phase 0 — Choose Blank Canvas or Examples, then lock the overall direction

**Blank Canvas is the default starting mode.** Copy the full template folder to a NEW project and copy `blank.html` over its `index.html`. Use the existing engine and two minimal placeholder scenes while deciding what each page should contain; do not infer the page order, layout or art style from the five-scene sample. Example Mode is optional if a project explicitly wants ready-made compositions. Both modes share the same `scripts/story-engine.js`, media handling and reveal primitives.

Write down the audience, available presentation time, speaker, constraints, and one-sentence story arc.

Select the sections and expected amount of technical depth. Decide which pages need a video, which can be authentic static screenshots, and which are truly interactive. Favor recordings where live connectivity or demo reliability is uncertain.

Choose a consistent visual language for the new project. Cream paper, green text, Faculty Glyphic, pill shapes and dotted route/traveler are **original example choices**, not requirements for Blank Canvas. In Blank Canvas, edit `styles/blank.css` and the body `data-route`, `data-traveler`, `data-visual-preset` attributes. The route and traveler can be hidden or shown independently; retain their DOM nodes because the shared engine uses the underlying geometry. The engine, not individual scenes, owns the 4.2-second movement, reversible navigation and `data-build`/`data-at` arrivals.

## Phase 1 — Each page starts with a content contract

Use this small contract rather than immediately writing HTML:

~~~text
Page / stable ID:
Section:
Single audience takeaway:
Speaker explanation (15–90 seconds):
Approved heading and exact copy:
Primary visual:
Supporting proof and source:
Interaction or reveal sequence:
Asset list and publication permissions:
What must not be implied (QA, date, limitations):
Other pages or transitions this touches:
Status: DRAFT / DESIGN_APPROVED / ASSETS_CLEARED / INTEGRATED / VERIFIED
~~~

A page should explain an engineering decision, actual result, gameplay behavior or clear narrative point. Avoid six disconnected technology labels when a simple diagram with meaningful arrows would be better. Avoid decorative widgets without a real point.

## Phase 2 — Discuss composition before integration

1. Select the main information hierarchy: title, one focal visual, then supporting details.
2. Agree on layout: text+image, diagram, single full-screen recording, overview→details, or interactive before/after.
3. Set any local click behavior. Choose staged effects only when they clarify the evidence; default route/arrival animation is usually enough.
4. Produce a **standalone review page** using the same design tokens. Its route/marker may appear as a static composition echo, but never as a second live slideshow engine.
5. Share a stable review URL. Make targeted revisions when feedback names one issue.
6. Obtain explicit design/content approval before integrating with Current.

Keep the **Current** deck and **Previous** verified snapshot unchanged during review work. Multiple active reviews can exist; they are not complete deck versions.

## Phase 3 — Asset-first collection (parallel with previews)

Make a short asset inventory per page, with exact source and format:

| Asset | Source / identifier | Format | Clearance | Intended page |
| --- | --- | --- | --- | --- |
| Screen capture | Game/application build, commit or session | PNG/WebP | Approved/pending | Page ID |
| Video | One genuine interaction, original duration and sound | H.264 MP4 | Approved/pending | Page ID |
| Before/after | Same verified request, ID or user action | PNG | Approved/pending | Page ID |
| Poster / artwork | User-owned or appropriately licensed original | PNG/WebP/SVG | Approved/pending | Page ID |

**Collection sequence:** search existing project assets → define the minimum missing capture → record a real action once → preserve the source → crop only relevant details → verify claims/trace/request ID → remove sensitive fields → record provenance → publish cleared derivative.

For simulated presentation clicks, **timing may be reproduced but evidence may not be fabricated**. Real event footage and its Datadog trace must describe the same action, not merely similar timestamps. Label QA recordings and dated historical evidence accurately.

Keep private screenshots, tokens, raw logs and account identifiers outside public repos. Register actual project assets in assets/manifest.json and reuse rather than duplicate binaries. Avoid unnecessary repeated encodes and hashes.

## Phase 4 — Preview implementation and review

Use the approved exact copy and genuine cleared media. Apply these constraints:

- Preserve source aspect ratios, use object-fit:contain by default. Unapproved crop or visual reconstruction can distort the meaning of evidence.
- Typography should read from the back of a room; reduce text before shrinking all fonts.
- Use data-build="text", "rise" or "line" plus data-at for ordered entrances.
- Short videos should be muted unless sound is essential; audio starts on an explicit user gesture.
- Any local hotspot must align with the real visible UI button at varying presentation sizes; the press must not accidentally advance the deck.
- One-click demos can show a real idle loop → recorded action → matching before/after screenshot, with a Replay control.
- For screenshots with data, confirm dates, filters, sample size, QA exclusion and limitations. A pass/OK label is not proof of all gameplay paths.

Track **evidence approval** separately from **visual approval**. A completed composition with pending evidence stays a preview.

## Phase 5 — Native scene integration

Only after approval:

1. Fetch latest main before editing, preserving simultaneous work.
2. Copy the approved layout into one native section.scene with a unique ID; use data-scene 0,1,2… and data-page 01,02,03…
3. Add one .scene-camera. Page CSS should be scoped to its scene ID/class.
4. **Remove any preview-only static traveler/route echoes**. The shell keeps one route and one traveler DOM element even if Blank Canvas hides them; do not add duplicates.
5. Use data-media-src to delay image loads; do not preload the whole deck behind the first page.
6. Local controls use data-local-space and run only when the scene is active. Pause videos when leaving or hiding the page.
7. Keep engine source untouched unless there is a demonstrable global bug.
8. Confirm direct ?page=NN and ?page=stable-id URLs and arrival transitions.

Do not create a separate per-slide React app, second motion controller, iframe to the preview, or copied full deck to integrate one page.

## Phase 6 — Minimal targeted verification

- **Static:** node scripts/check-template.mjs and JS syntax checks for changed scripts.
- **Browser:** serve locally over HTTP, check 1600×900 and 1366×768.
- **Navigation:** changed page and neighbors forward/reverse at the default 4.2-second beat.
- **Interaction:** one focused smoke test for new buttons/tabs, Escape and Space ownership.
- **Media:** actual source resolves, aspect ratio/crop correct, inactive media stopped.
- **Live publication:** push normal non-force Git, check the Pages/deployment job, then the *actual published* page. A git commit or successful build by itself is insufficient visual proof.

When evidence contradicts the expected UI, inspect the real runtime and use evidence from the same run. Do not repeat extensive validation when focused checks pass.

## Phase 7 — Working versions and cleanup

For collaborative production decks, retain **Current** and **Previous** as the two working versions.

- A major new candidate is prepared and tested outside the public working tree before rotating.
- Only after verification, preserve the outgoing Current as Previous, promote the new Current in one coordinated commit and record revision evidence.
- Do **not** rotate versions for a single page's verified maintenance or documentation edit.
- Remove **only** the superseded composition preview after the integrated, published page is verified.
- Do not delete active reviews, media used by Previous, or the shared visual system.

## Phase 8 — Checkpoint and reuse

Store exact page decisions, accepted wording, preview/asset links, known limitations, and verified commit/build in a concise Notion checkpoint. **GitHub remains the source of truth for executable pages, assets and workflow documents**.

A migration entry should include: **selected starting mode (Blank Canvas or Examples)**; route/traveler visibility and visual identity choice; agreed section order; approved vs pending pages; latest Current/Previous; asset provenance and evidence bounds; dropped alternatives; the next smallest action.

## Reusable Codex/agent handoff

~~~text
Use Forward Story v3 in a NEW project, beginning with the Blank Canvas mode unless explicitly asked for examples. Copy the complete template folder, replacing only the NEW project's index.html with blank.html. Read README.md, WORKFLOW.md, SCENE-RECIPES.md, ARCHITECTURE.md and the asset manifest. Keep the existing story-engine.js camera/route math and data-build/data-at reveals. Decide each page's content, layout and visual identity by discussion; do not impose the five demonstration compositions. Route/traveler are optional visual settings.
Work on [PAGE ID and one-sentence goal].
Approved composition/copy: [EXACT LINK OR SPEC].
Use only [CLEARED ASSETS and source/version/date]. Collect missing real evidence
efficiently and record provenance; don't invent media or claims.
Create/edit only an isolated review preview first. Preserve the original repository's Current and Previous, keep the shared route/traveler nodes (visible only if chosen), and keep the 4.2s reversible v3 engine.
After approval, integrate as a native scene, reuse on-demand media handling,
verify at 1600x900 and 1366x768 plus one forward/reverse and interaction test.
Publish without force, verify the real result, and remove only this page's
superseded preview. Report exact commit, URL, assets and any blockers.
~~~

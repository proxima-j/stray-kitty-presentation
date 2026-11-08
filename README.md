# Stray Kitty presentation

GitHub is the shared source for ChatGPT and Codex. GitHub Pages automatically publishes `main:/docs`. Use live page links for reviews instead of transferring HTML/PNG exports.

## Two working versions

| Version | Preview | Verified source |
| --- | --- | --- |
| Current | https://proxima-j.github.io/stray-kitty-presentation/ | Twelve-page runtime `cd76ba7dc5044eff4f49cadd11ae670889e7f7e8`; published and verified |
| Previous | https://proxima-j.github.io/stray-kitty-presentation/previous/ | Outgoing ten-page runtime `e6b94ba56ce6f7d9588f67eb4859c659934517f9`; published and verified |

Current supports direct `?page=01` through `?page=12` links. Previous retains `?page=01` through `?page=10`. Stable Current IDs also work as direct links: `roadmap`, `game-flow`, `visual-novel`, `home-hub`, `payment`, `four-maps`, `vertical-design`, `greybox`, `random-events`, `combat`. [docs/versions.json](docs/versions.json) records verified runtime origins; documentation and asset-only commits do not rotate decks.

- `docs/index.html`, `docs/engine-v3.*`, `docs/presentation.css`, `docs/level-design.css`, `docs/scene-content.js`, `docs/library/`: Current source and reusable components.
- `docs/previous/`: Outgoing ten-page HTML, styles and scripts. Asset URLs are rebased; player script preloads, deferred film source restoration and inactive-clip preload settings prevent off-screen media competing with the active scene. Its content and animation engine are preserved; small runtime files remain independent of future Current edits and large media is shared.
- `docs/assets/`: One shared copy of the full opening film, poster, character, fonts/license and approved illustrations.
- `reference/forward-story-v3/script.js` and `style.css`: Untouched original animation source, rather than a third runnable sample deck.

The obsolete four-scene v3 sample page, one-file packer and demo-only screenshots/excerpt were removed from the working tree. They remain in normal Git history. Current's HTML, styles, animation code, content, film and illustrations were not changed by this cleanup.

## Rolling retention policy

Keep exactly two usable decks. Do not rotate for documentation edits, housekeeping, individual slide commits or an unverified candidate.

1. Prepare and verify a new complete candidate outside the tracked/public deployment tree while keeping Current and Previous available.
2. Only after the candidate passes focused serve, assets and navigation checks, replace `docs/previous/` with the outgoing verified Current runtime and promote the candidate to Current in the same normal commit. Update `docs/versions.json` with source/deployment evidence.
3. Remove the older Previous runtime and obsolete artifacts. Inspect references in both retained decks before deleting shared assets. Keep small version-specific runtime files separate; store media once with stable relative URLs. Preserve older media if either deck uses it.
4. Verify the published Current and Previous after pushing. If deployment fails, fix or use a normal revert; never rewrite history, force-push or delete tags/releases.

## Run locally

No build or package installation is required:

```sh
python -m http.server 8080 --directory docs
```

Open `http://localhost:8080/` or `http://localhost:8080/previous/`. Right / Space advances, Left reverses, wheel scrubs, Escape finishes motion, Home / End jumps, and `?` opens optional controls. The approved default arrow beat remains 4.2 seconds; reduced-motion preferences retain the original immediate behavior. No persistent header/footer is added.

The complete 60.5-second opening film plays with sound using Play film; Skip/Continue advances manually. Current serves a 1920×1080 H.264/AAC web derivative (13.4 MB; original 65.1 MB retained). The film downloads only after Play. Current attaches image/poster/SVG URLs on scene/view entry and loads hidden dialogue states on demand; only active clips receive video sources. This avoids downloading the rest of the deck behind the visible slide. Page 02 artwork uses pixel-identical lossless WebP; screenshots use high-quality WebP previews sized for their frames, with full-resolution originals retained. Short clips use smaller H.264 fast-start copies with their original complete content, frame rate and timing. The four map clips total 1.4 MB instead of 5.9 MB. [Derivative inventory](docs/library/WEB-MEDIA.json) records sources and sizes. Full-image dialogs and Previous keep their originals. This delivery-only maintenance does not rotate decks or change the v3 engine, styles or composition. Offline-release packaging remains deferred.

## Collaboration and assets

Read the latest main and preserve unrelated changes before editing. Push without force. ChatGPT's connected GitHub tools and Codex's local Git use this same repository. Follow [docs/library/ASSET-WORKFLOW.md](docs/library/ASSET-WORKFLOW.md); register assets with consuming source in the same change. The shared manifest is [docs/library/manifest.json](docs/library/manifest.json).

Page 02 D20/cat images are user-owned, publication-approved and published in Current. [ASSET-CLEARANCE.md](ASSET-CLEARANCE.md) retains that authorization record. Faculty Glyphic is self-hosted under its included SIL OFL; Classe's exact font remains unconfirmed.

Notion remains the [existing decision history](https://app.notion.com/p/411e33b0423f81abaa12c4b5b6a75921). Do not create a dashboard, modify the game repo, or build further pages without a new instruction.

## Integrated scene interactions

Visual Novel (`?page=05`): click the authentic game image to cycle 1→2→3→1; focused Enter/Space also cycles. Arrows remain global presentation navigation.

Home Hub (`?page=06`): starts with THE HOME GROWS, using a larger two-by-two gallery and readable labels. THE HOME RESPONDS plays the three existing muted looping clips together in a larger staggered arrangement. They pause on view/scene exit and when the document is hidden, resuming when visible. Small pause/play fallbacks appear on hover/focus. The opening film retains its separate explicit Play-with-sound behavior.

Payment (`?page=07`): the same verified Xsolla Sandbox 60-tuna journey, with recorded balance 0→60. Larger label rows sit above focused screenshot viewports; click any screenshot to open its complete original (Escape closes it). Asset provenance, including the guaranteed/pity postcard draw and subtle final-home stage, remains in `docs/library/PAGES-03-07-ASSETS.md` and the manifest. Level Design follows Payment, followed by Random Events and Combat. UI/UX and Technical reviews remain separate.

## Integrated Level Design

Payment → [Four Maps](https://proxima-j.github.io/stray-kitty-presentation/?page=four-maps) → [Three Connected Levels](https://proxima-j.github.io/stray-kitty-presentation/?page=vertical-design) → [Greybox](https://proxima-j.github.io/stray-kitty-presentation/?page=greybox). These are normal scenes 08–10 in the unchanged v3 registry/player. The approved 2×2 clips, tilted screenshot stack with separate C/F links and continuous traversal, and original uncropped greybox are retained. Map clips use the existing scene-aware media controller: only the active scene plays; manual pause survives exit/re-entry and document hiding. The annotated SVG is now a production asset with same-folder screenshot links. Random Events and Combat now follow these scenes; UI/UX and Technical remain separate.

Verified locally in Chrome at 1600×900 and 1366×768, then against published Current and Previous from [Pages build 42504857617](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42504857617). Navigation, 4.2-second pacing, original scene interactions, looping/pause behavior, screenshot layers and uncropped greybox passed. Document-hidden handling was exercised through a visibility-event simulation. The initial integration's default Chrome connection stalled on public media. Subsequent on-demand loading and smaller web copies passed a fresh published check with default Chrome transport settings: all four map clips and all four Home gallery images loaded, with no page errors. See the delivery maintenance notes above and versions.json for the latest verified build. The superseded map composition HTML/CSS/JS/SVG and notes were removed only after published verification. Approved media, the asset board and other reviews remain.

## Integrated Random Events and Combat

Greybox → [Random Events](https://proxima-j.github.io/stray-kitty-presentation/?page=random-events) → [Combat](https://proxima-j.github.io/stray-kitty-presentation/?page=combat), scenes 11–12. These use the latest approved review compositions and the unchanged v3 registry/player. Events keeps full trigger/choice/result images, genuine reward details, footer concepts and original-image enlargement. Combat keeps the battlefield/three companion profiles, click-to-play Reposition (7.6s) and Activate Skills/Shield (5.23s), and the 阿策 before/after layer. The advisor source remains Local Fallback. Native clips and all original assets stay in place; small on-demand screenshot previews preserve the loading fix. New CSS is scoped to these scenes; local controls consume their own keys and media stops on scene exit/document hiding. Previous is the outgoing optimized ten-page deck, with shared media stored once.

Published [Pages build 42507196914](https://github.com/proxima-j/stray-kitty-presentation/actions/runs/42507196914) verified Current and Previous in default Chrome, including new image loading, Events image enlargement, both Combat clips and advisor state controls. The old Events/Combat review URLs now redirect to Current; their obsolete context assembler, review-only interactions and styles were retired. UI/UX, Technical and source-media collection boards remain separate and intact.

# Stray Kitty presentation

GitHub is the shared source for ChatGPT and Codex. GitHub Pages automatically publishes `main:/docs`. Use live page links for reviews instead of transferring HTML/PNG exports.

## Two working versions

| Version | Preview | Verified source |
| --- | --- | --- |
| Current | https://proxima-j.github.io/stray-kitty-presentation/ | Seven-page integration; local candidate verified, publication evidence in `docs/versions.json` |
| Previous | https://proxima-j.github.io/stray-kitty-presentation/previous/ | `2c1fc278732287a6607666e958622dce9a850cb6` — outgoing verified three-page deck with enlarged original illustrations |

Current supports direct `?page=01` through `?page=07` links. Previous retains `?page=01` through `?page=03`. Stable Current IDs also work as direct links: `roadmap`, `game-flow`, `visual-novel`, `home-hub`, `payment`. [docs/versions.json](docs/versions.json) records verified runtime origins; documentation and asset-only commits do not rotate decks.

- `docs/index.html`, `docs/engine-v3.*`, `docs/presentation.css`, `docs/scene-content.js`, `docs/library/`: Current source and reusable components.
- `docs/previous/`: Previous's HTML, styles and script recovered from its deployed commit. Only relative asset URLs were adjusted. Its runtime and small style-library copies remain independent of future Current code edits; large media is shared.
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

The complete 60.5-second, 1920×1080 H.264/AAC opening film remains unchanged. Start it with sound using Play film; Skip/Continue advances manually. Video optimization, caching and final offline-release packaging remain deferred.

## Collaboration and assets

Read the latest main and preserve unrelated changes before editing. Push without force. ChatGPT's connected GitHub tools and Codex's local Git use this same repository. Follow [docs/library/ASSET-WORKFLOW.md](docs/library/ASSET-WORKFLOW.md); register assets with consuming source in the same change. The shared manifest is [docs/library/manifest.json](docs/library/manifest.json).

Page 02 D20/cat images are user-owned, publication-approved and published in Current. [ASSET-CLEARANCE.md](ASSET-CLEARANCE.md) retains that authorization record. Faculty Glyphic is self-hosted under its included SIL OFL; Classe's exact font remains unconfirmed.

Notion remains the [existing decision history](https://app.notion.com/p/411e33b0423f81abaa12c4b5b6a75921). Do not create a dashboard, modify the game repo, or start Page 04 without a new instruction.

## Integrated scene interactions

Visual Novel (`?page=05`): click the authentic game image to cycle 1→2→3→1; focused Enter/Space also cycles. Arrows remain global presentation navigation.

Home Hub (`?page=06`): starts with THE HOME GROWS. THE HOME RESPONDS plays the three existing muted looping clips together. They pause on view/scene exit and when the document is hidden, resuming when visible. Small pause/play fallbacks appear on hover/focus. The opening film retains its separate explicit Play-with-sound behavior.

Payment (`?page=07`): the same verified Xsolla Sandbox 60-tuna journey, with recorded balance 0→60. Asset provenance, including the guaranteed/pity postcard draw and subtle final-home stage, remains in `docs/library/PAGES-03-07-ASSETS.md` and the manifest. Level Design, Events, Combat and UI/UX previews remain separate until their own integration.

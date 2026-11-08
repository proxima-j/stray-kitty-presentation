# Stray Kitty presentation

GitHub is the shared source for ChatGPT and Codex. GitHub Pages automatically publishes `main:/docs`. Use live page links for reviews instead of transferring HTML/PNG exports.

## Two working versions

| Version | Preview | Verified source |
| --- | --- | --- |
| Current | https://proxima-j.github.io/stray-kitty-presentation/ | `204390d479d0e968d9ce74d6b21c047fb80c3196` — complete Pages 01–03 with restored Page 02 illustrations |
| Previous | https://proxima-j.github.io/stray-kitty-presentation/previous/ | `8a1b886555f79a096ce458dde5d7bfd55f2da328` — immediately preceding successful Pages build; Page 02 retains its original placeholders |

Both have direct `?page=01`, `?page=02`, and `?page=03` links. Their successful deployment records are 2026-11-08 at 11:38:46Z and 11:31:09Z respectively. [docs/versions.json](docs/versions.json) records these origins. Documentation/housekeeping commits do not create new deck versions.

- `docs/index.html`, `docs/engine-v3.*`, `docs/presentation.css`, `docs/library/`: Current source and reusable components.
- `docs/previous/`: Previous's HTML, styles and script recovered from its deployed commit. Only relative asset URLs were adjusted. Its runtime remains independent of future Current code edits.
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

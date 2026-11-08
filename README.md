# Stray Kitty presentation

Shared source for ChatGPT and Codex. Review the hosted presentation instead of downloading HTML or PNG revisions.

- Live entry: https://proxima-j.github.io/stray-kitty-presentation/
- Page 02: https://proxima-j.github.io/stray-kitty-presentation/?page=02
- Page 03: https://proxima-j.github.io/stray-kitty-presentation/?page=03
- Component library: [docs/library](docs/library), with a machine-readable [manifest](docs/library/manifest.json).
- Decision history: [existing Notion checkpoint](https://app.notion.com/p/411e33b0423f81abaa12c4b5b6a75921).

## Work together

Both connected GitHub and local Git were verified as `proxima-j` during setup. Local access has admin/push permission. ChatGPT can read and update files using its connected GitHub tools; Codex can use normal Git. Read the latest `main` before changing files. Scope revisions to the page under review, commit them to this repository, and review the same direct URL after deployment. In connector updates, read the current blob SHA before replacing a file. In Git, pull before editing and push without force. GitHub Pages automatically publishes `main:/docs`.

Only Pages 02–03 are implemented. The root URL starts at Page 02; arrows move between the two pages. Both remain in design review until Jenny approves the live result.

## Run locally / offline

No package installation or build is required. All published assets, including the licensed font, are local.

```sh
python -m http.server 8080 --directory docs
```

Open `http://localhost:8080/?page=02` or `?page=03`. `docs/index.html` can also be opened directly offline. Controls: Right / Space forward, Left backward, wheel to scrub, Escape to finish, Home / End to jump, `?` for optional controls. Default arrow beat remains 4.2 seconds. Reduced-motion preferences retain the original immediate-transition behavior.

## Preserve the foundation

`reference/forward-story-v3/` is the untouched source archive extraction, including its original sample scenes. It is excluded from the Pages publication root. `reference/BASELINE.json` records each original file's SHA-256; `reference/SOURCE.sha256` identifies the downloaded archive. `reference/INTEGRATION.diff` records the narrow adaptation: two configurable stops, optional opening video, direct review URLs, and off-screen accessibility. The v3 requestAnimationFrame player, 4200ms beat, 72% camera travel, reveal primitives, damped reversible scrolling and cat/route geometry are retained. `docs/engine-v3.css` is byte-identical to the original stylesheet; visual adjustments are separate overrides.

## Sources and publication rights

- Original project character: `docs/assets/miaomiao.svg`, from approved v3.
- Faculty Glyphic is self-hosted from the official Google Fonts repository; its SIL Open Font License is included in `docs/assets/fonts/OFL.txt`. Classe's exact computed font was not conclusively identified. Faculty Glyphic is the checkpoint's agreed display-font option, rather than a claim about Classe's proprietary typography.
- D20/Dungeon Master and playful cat illustrations have unverified redistribution rights. Both retain their upper-right/lower-right frame positions with explicit labeled placeholders. No original third-party illustrations or Classe site code are published.
- The latest ChatGPT runtime `/mnt/data/stray-kitty-classe-design-review/` sources were unavailable in this local environment. Integration uses the available approved Page 02 HTML composition and the latest checkpoint's precise four-node, upper-left-hub and Classe component directions. Typography/frame corrections are independent CSS/SVG implementations.
- Background is warm cream. Home Hub uses a brighter gold-yellow accent within the agreed trailer-inspired palette; this is a design token, not a claim of an exact colorimetric trailer match.

Original reference materials are preserved for this presentation project; no license to unrelated third-party content is granted. Do not add cleared images until their publication rights are confirmed.
Shared Stray Kitty presentation source and live page reviews.

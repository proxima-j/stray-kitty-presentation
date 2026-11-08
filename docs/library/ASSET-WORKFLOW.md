# Asset-first presentation workflow

The shared GitHub repository and GitHub Pages preview are the default working surface for **both** ChatGPT and Codex. Avoid using ChatGPT file downloads, Windows-only paths, or separate HTML/PNG exports as the normal handoff mechanism.

## For each new or revised page

1. **Identify the assets** needed by the approved content and design. Prefer project-owned artwork, actual gameplay captures and appropriately licensed sources.
2. **Register the assets before or in the same guarded commit as the page implementation.** Save approved, publishable originals or web-optimized derivatives under `docs/assets/`, using stable descriptive names. Shared reusable elements belong under `docs/assets/shared/`; page-specific media belong under `docs/assets/pages/NN/`. Avoid duplicate binaries.
3. **Record provenance in `docs/library/manifest.json`:** stable asset ID, relative source path, source/creator, intended page, approval status, license or explicit publication permission, and optional hash (do not calculate on every iteration; Git already hashes file contents). If the asset has a master outside the repository, record its source path separately; do not commit secrets or personal source data.
4. **Wire the real asset path directly into the HTML/CSS** in that same change. Don't publish a placeholder when an approved, cleared image is already available.
5. **One focused review:** confirm the pushed commit, published Pages build, and the actual visual on the changed page; verify asset responses only if an image fails. No duplicate renders, unnecessary full-site checks, or unrelated game testing.
6. **Approval boundary:** the page is `DESIGN_APPROVED` when its copy/composition is accepted and `LOCKED` only when the browser implementation is accepted. Do not replace an approved asset or rewrite a locked page without a change request.

## Public preview and rights

This is a **public** GitHub repository and Pages site. A picture appearing in a chat, being downloaded locally, or being used for private design review does not by itself establish permission to redistribute it. If copyright/license provenance is unknown, use a clearly marked placeholder on the public site and keep the recovered original off the public repo; record exact pending files and the approval requirement. Do not upload private or unlicensed media merely to make it accessible between agents. Once permission is established, upload the exact intended image and update its manifest status.

## Existing Page 02 illustrations

Both originals are published in Current under `docs/assets/illustrations/` and registered in the manifest. User confirmed ownership/public-use permission on 2026-11-08. ASSET-CLEARANCE.md is the historical authorization record. Previous retains its original placeholders. Historical hashes require no routine recalculation.

## Video and file size

The selected opening movie is already present under `docs/assets/`; do not re-export or upload it on every page edit. Prefer direct static assets with compatible codecs for GitHub Pages; no Git LFS for publicly served website media. Keep the approved v3 movement engine unchanged unless a specific change is authorized.

The original complete opening movie remains shared and unchanged. On 2026-11-09 the user authorized a minimal loading fix: Current now uses a smaller full-length 1080p web copy and lightweight short-clip derivatives; images use pixel-identical lossless WebP. Source/size/codec records are in [WEB-MEDIA.json](WEB-MEDIA.json). Preserve originals used by Previous and full-image dialogs. Attach scene image/SVG/poster URLs only on scene/view entry, attach clip sources only when active, and fetch the film only after explicit Play. Do not restore eager off-screen asset requests. Offline-release packaging remains deferred.

## Collaboration mechanics

- Always read the latest `main` before editing.
- ChatGPT connected GitHub editing and Codex local Git pushes must use the same repository and non-force updates.
- Preserve original v3 script.js and style.css under `reference/forward-story-v3/`; retired demo builds stay in Git history.
- Keep only Current and Previous under the verified rolling policy in README.md. Inspect both versions before deleting shared assets. Do not duplicate media.
- Report the public direct review link for each changed page and the commit SHA.
- Notion is the checkpoint/history; don't create a duplicate asset catalog there.

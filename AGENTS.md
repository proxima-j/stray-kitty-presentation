# Presentation scope

Work only in this separate presentation repository. Never modify the Stray Kitty game repository as part of presentation updates.

Preserve `reference/forward-story-v3/` byte-for-byte. Keep the approved v3 animation player and default 4200ms arrow beat. Avoid framework migrations or unrelated refactoring.

Publish only `docs/` through GitHub Pages. Keep relative asset URLs. Page review links are `?page=01`, `?page=02` and `?page=03`; update only the page being reviewed. Do not create additional pages without user instruction.

Read the latest main branch before edits. Keep GitHub as shared source and the existing Notion page as history. Do not create a replacement dashboard.

Do not publish unrelated unlicensed imagery or fonts. The user has now confirmed ownership of the two original Page 02 D20/cat illustrations; they are approved to publish. The placeholders remain only until Codex copies the already-recovered original files to docs/assets/ and updates the two frame references.

Verification: static serve, intended remote commit, successful Pages deployment, one normal-viewport visual smoke check of Pages 02/03, and one forward/backward transition. Stop when those pass. Do not run game tests, broad suites, benchmarks, repeated browser checks or extra recordings.

Asset handoff: follow [docs/library/ASSET-WORKFLOW.md](docs/library/ASSET-WORKFLOW.md). For every approved, publishable image/video, commit the asset together with its consuming page and register its source/license/path in the manifest. Do not rely on local Windows paths or chat attachments as canonical dependencies. Do not publish unknown-rights third-party illustrations; however Page 02 D20/cat ownership and public-use permission were confirmed by the user on 2026-11-08. See ASSET-CLEARANCE.md. Their originals are already recovered on the user's Windows computer. Routine re-hashing is not required.

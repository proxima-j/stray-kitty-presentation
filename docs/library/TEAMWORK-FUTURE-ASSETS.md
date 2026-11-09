# Teamwork & Future — asset inventory and integration brief

**Recorded 2026-11-09 · Status: REVIEW COMPOSITIONS APPROVED FOR COLLECTION/INTEGRATION; new GitLab evidence not yet collected or publication-cleared.** This inventory is the canonical asset checklist for the next Codex pass. The section is three slides, placed **after the complete Technical/Datadog walkthrough and before the closing playable-game/Q&A page**, with final page numbers determined from current `main`.

## Approved compositions

| Scene | Review source | Final intended behavior |
| --- | --- | --- |
| **TW 01 — Cross-Team Collaboration** | [teamwork-01-collaboration.html](../review/teamwork-01-collaboration.html) + `teamwork-walkthrough.js` + `teamwork-revision.css` | One interactive **four-stage** GitLab walkthrough. The **Work Item/Ticket coordination track** and **Branch/MR delivery track** are visually separate but connected by agreed action, daily checks, and result verification. Click stages/Next to highlight the process and update matching text/evidence. No top row of team names. |
| **TW 02 — Design. Test. Rethink.** | [teamwork-02-iteration.html](../review/teamwork-02-iteration.html) + `teamwork-diagram-preview.css` | Preserve the approved repeating **Initial Design → Playtesting & QA → Iterate** diagram and **two visual before/after comparisons**: ordinary 2d6 failure threshold and AI scope. Do not convert into text cards. |
| **TW 03 — A More Connected World** | [teamwork-03-future.html](../review/teamwork-03-future.html) + `teamwork-revision.css` | A future-vision architecture. **Exploration/Events, Combat, Cats/Home, Story/World** connect bidirectionally to a central Living World. Real game imagery illustrates existing modules; all proposed *new* cross-system effects are explicitly future possibilities. |

These sources are review-only; do not point the production runtime at `docs/review/` files that will later be removed.

## Asset checklist

### TW 01 — New genuine GitLab screenshots/crops (four priority assets)

| Asset ID | Intended curated path under `docs/assets/teamwork/gitlab/` | Where/what to capture | Status |
| --- | --- | --- | --- |
| `teamwork.gitlab.ticket` | `workitem-ticket.webp` | A genuine **role-owner Work Item with a submitted cross-team ticket or QA report**, preferably Combat Work Item #4 and [note 8317](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/4#note_8317). Preserve visible Work Item identity, issue/reproduction summary and context. | **REQUIRED · PENDING** |
| `teamwork.gitlab.discussion` | `workitem-resolution.webp` | A real clarification / decision / owner response linked to that same problem, preferably [note 8605](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/4#note_8605). | **REQUIRED · PENDING** |
| `teamwork.gitlab.merge-request` | `branch-mr.webp` | One real GitLab MR with source branch, target branch, description, reviewed status and/or merge evidence. **Find/verify the actual MR ID and relationship to the specific case**; if no direct link can be established, label it **“Representative project MR (separate example)”**, not the fix MR for Work Item #4. | **REQUIRED · ID UNVERIFIED** |
| `teamwork.gitlab.recheck` | `followup-qa.webp` | Genuine post-fix player-path verification / peer recheck, preferably [note 9310](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/4#note_9310), with the narrow verified test scope retained. | **REQUIRED · PENDING** |

- Capture legible tightly cropped proof, not an entire 4K GitLab page shrunk onto a slide. A consistent 16:9-ish evidence viewport is preferred where feasible; preserve actual source UI, no fabricated GitLab chrome/text. PNG source masters can stay local; publish small legible WebP derivatives only if permission and privacy checks pass.
- **Optional**, only if a genuine clear source exists and materially strengthens the composition: one daily check-in screenshot. Otherwise “Daily checks” stays an explanatory workflow ribbon and **must not be implied to come from note 8605**.
- Source access: the connected GitLab integration previously returned **404 Project Not Found**. Codex should inspect the local authorized browser/GitLab session or other already-configured approved access first. Never assume an unavailable note or MR has been opened or verified.
- **PUBLICATION GATE:** School GitLab can contain private material. Before placing screenshots in the **public** GitHub Pages repo, verify they are authorized for public presentation and remove private account/session data, student IDs, authentication details and irrelevant personal discussion. If clearance is uncertain, **do not upload**; keep source locally and preserve an accurate source-linked text evidence fallback without claiming screenshots exist.

### TW 02 — Existing authentic/derived evidence (no newly required binary assets)

| Asset ID | Source to carry forward | Status / interpretation |
| --- | --- | --- |
| `teamwork.iteration.dice-comparison` | Existing inline, code-authored 6×6 2d6 outcome grids in `docs/review/teamwork-02-iteration.html` | **READY, reusable inline diagram**. Earlier ordinary failure 2–5 = 10/36 = **27.78%**; current failure 2–4 = 6/36 = **16.67%**. A calculated probability change, **not** an observed improvement in satisfaction or the random-event trigger chance. |
| `teamwork.iteration.ai-scope` | Existing inline before/after AI entry-point diagram in the same review | **READY, reusable inline diagram**. Exploration/event AI **considered**; Combat + Home Hub chat selected, with authored exploration hints. This was a **design/integration discussion**, **not a proven playtest finding**. |
| `teamwork.iteration.source-evidence` | Optional, if readable: [event feedback note 8466](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/2#note_8466), [balance decision note 8874](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/2#note_8874), [AI map scope note 9290](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/3#note_9290), [AI scope follow-up note 9301](https://school-gitlab.xsolla.dev/haozhe_wang/stray-kitty/-/work_items/3#note_9301) | **OPTIONAL** source links or at most two unobtrusive screenshots if they genuinely improve comprehension. Keep the existing clear comparisons as primary visuals. Publication gate as for TW 01. |

### TW 03 — Already-published and reusable game visuals (zero new captures)

| Asset ID | Existing `docs/` path | Role in future vision |
| --- | --- | --- |
| `teamwork.future.exploration` | `assets/level-design/chapter2/view-L0.jpg` | Current exploration/world screenshot |
| `teamwork.future.combat` | `assets/pages/09/battlefield-main.webp` | Current battle board |
| `teamwork.future.home` | `assets/pages/06/greenhouse-stage-04.webp` | Current Home Hub |
| `teamwork.future.story` | `assets/pages/05/friends-dialogue-01.webp` | Current story/dialogue |
| `teamwork.future.architecture` | Inline SVG/connectors and scoped CSS from `teamwork-03-future.html` and `teamwork-revision.css` | Four nodes connected bidirectionally to “Living World”; preserve future-state labels |

- **No new media required for TW 03.** Do not fabricate gameplay or animate simulated new interactions as if they exist.
- The proposed future is a **dynamic, interconnected world**: choices/event consequences affect combat, cat condition, home growth and story; random events may also occur during tower-defense stages; cats have distinct personalities/animation/strategic roles; richer side stories and combat narratives. The diagrams communicate direction, not completed features.
- Images are existing project media; keep original URLs stable and avoid extra copies.

## Integration / runtime constraints

1. Read `README.md`, `docs/versions.json`, `docs/index.html`, scene-specific CSS and JS, `docs/library/ASSET-WORKFLOW.md`, and **latest remote main** before editing. Current was **16 pages** at this inventory's creation; that is context, **not a hard-coded final count**. Datadog and other Technical slides may be integrated concurrently.
2. Place **TW 01 → TW 02 → TW 03 after all technical walkthrough/Datadog scenes and before final Closing/Q&A**. If technical scenes are not yet integrated, add after the existing current Technical section and keep ordering flexible for later insertion of Datadog **before** teamwork.
3. Adapt approved compositions into ordinary scenes in the **existing v3 scroll/cat/route system**. Keep 4.2s transition, backward wheel and keyboard navigation, single cat and traced path, shared global look, media lazy loading and content reveals. Make TW 01 stage clicks local and prevent interference with global navigation.
4. Do **not** paste standalone review CSS/JS globally. Scope new styles to page IDs; keep any interactive behavior page-local, accessible and responsive. Keep TW 02's diagrams (including correct 6×6 highlighted combinations), and TW 03's readable bidirectional arrows, not a generic card list.
5. Add only verified, cleared newly published GitLab screenshots to `docs/assets/teamwork/gitlab/` and corresponding entries in `docs/library/manifest.json`. Do not mark planned paths as present, cleared or verified until actual capture and approval. Reused existing game images need no copied binaries.
6. Follow Current/Previous rolling retention **after** focused local candidate verification and a published build check. Never force push, modify the game repo, change Datadog assets, or delete review files until the approved integration is publicly verified.
7. Record final asset capture methods, source URLs/IDs, provenance, public-clearance status, stage mappings and any fallback/missing evidence in this file when Codex completes.

## Focused verification and expected report

- Verify **TW 01** four click stages, highlighted nodes, source links/screenshots, truthful Work Item↔MR relationship, Previous/Next, no accidental scene navigation, and visible daily coordination.
- Verify **TW 02** 2d6 counts/percentages, AI design-discussion label, before/after readability, and no unsupported playtest claim.
- Verify **TW 03** all four real images, directional connections, and clear future/proposed labeling.
- Check 1600×900 and 1366×768; old scene interactions, original film, v3 forward/back, and Current/Previous published views; avoid redundant broad tests.
- Deliver live three page links, final order, commit SHA, source/evidence inventory, privacy/publication classification and any blocked assets.

**Current state:** planned screenshot entries, not collected asset claims. Use `docs/library/manifest.json` only when a new binary is actually published.

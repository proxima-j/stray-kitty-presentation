# Review-stage asset checklist — Pages 04–06

**Status: DESIGN PREVIEWS ONLY.** These assets have not been recorded or selected. This document is a temporary capture handoff for later Codex implementation, not an approved shared asset manifest.

**Do not capture during preview stage.** After the user approves the design, Codex should use current game source and existing recordings first; capture only missing materials and update the working presentation in a single integration phase.

| Review page | Asset ID | Target after implementation | What Codex must verify / collect |
| --- | --- | --- | --- |
| 04 | narrative.friends | docs/assets/pages/04/friends-dialogue-01.png through -03.png | One real scene featuring friends, three **consecutive** actual dialogue states, exact authored lines and matching frame |
| 05 | home.growth.01–04 | docs/assets/pages/05/greenhouse-stage-01.png through -04.png | Four *genuine* greenhouse development states, same camera/zoom where possible; if fewer states exist, report rather than invent |
| 05 | home.interaction.cats | docs/assets/pages/05/cat-reaction.mp4 + poster | Actual petting/touching cat and visible reaction |
| 05 | home.interaction.postcard | docs/assets/pages/05/postcard-to-parcel.mp4 + poster | Draw postcard → send → parcel arrival → open and furniture reward |
| 05 | home.interaction.furniture | docs/assets/pages/05/furniture-drag-save.mp4 + poster | Actual drag/place furniture and save resulting arrangement |
| 06 | payment.recharge | docs/assets/pages/06/1-recharge.png | Real game recharge/pack-selection screen |
| 06 | payment.checkout | docs/assets/pages/06/2-checkout.png | Actual Xsolla sandbox provider checkout from related session, with sensitive data hidden |
| 06 | payment.return | docs/assets/pages/06/3-return.png | Actual return plus **verified** credited game balance; return alone is not proof of successful webhook credit |

Preferred videos: short silent H.264 MP4 plus poster, rather than multiple concurrent GIFs. Do not autoplay all three; one click should activate one clip. Maintain provenance in the canonical manifest once implemented.

**Publication and lifecycle:** For the design review, use labelled placeholders only. These three static HTML pages are accessible at `/review/page-04.html`, `page-05.html` and `page-06.html`. Current and Previous are untouched, remain independent working versions, and may receive refinements later. Keep preview files until the next approved phase has been built and verified by Codex. Then remove `docs/review/` in that **same integration/cleanup phase**. Do not delete previews early or promote them automatically into Current.

**Verification:** One Pages response/visual glance per draft when necessary. Don't test game systems or run capture workflows for placeholders.

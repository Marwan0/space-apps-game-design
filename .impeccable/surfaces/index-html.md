---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: workshop deck (index.html)

Scope: the 28-slide projected deck for the 2-hour workshop. Mode: Experience (the audience sits inside the work; the presenter drives it live).

Audience: first-time hackathon students in a lit Cairo workshop room, reading a projector from up to 15 m away. Job: leave with a finished one-minute MVP spec per team. Keep: 7 sections / 120 min, live demos (dashboard-vs-sim, core-loop sandbox, constraint simulator, Dust Storm Dispatch rover game; replaced the Lunar Lander 2026-10-29 at the user's request because a reflex game doesn't show choice), MVP template with copy, sprint clock. Dropped: HyperFrames video clips (user choice). Winner facts only as verified in PRODUCT.md.

Memorable moment: the room watches a Mars dashboard turn into a decision, then votes a rover through a dust storm together.

## Direction contract

THESIS: Every slide is a hand-painted Cairo shop sign: one message, painted big enough to read from across the street. Refuses the category default of dark space HUD panels with glowing cyan chrome, and the white corporate bullet slide.

OWN-WORLD: White enamel ground; whole regions in flat sign paint (shop red #d7261e, chrome yellow #ffd100, bottle green #0a7d3b, cobalt #1846a3, sign black #111). No tints, gradients or glow. Panels carry a painted pinstripe inset border. Lalezar display caps with a solid painted drop-shade; Readex Pro for all reading text. Small Arabic lines only where they are true translations.

STORY: Students see that a game is a choice with consequences, learn the loop, see Egyptian teams won with exactly this, get a scope-safe recipe, watch it built, then make their own spec.

FIRST VIEWPORT: Title slide at 1920x1080: a red fascia across the top 55% holds the title in cream-white Lalezar at ~150px with black drop-shade, Arabic title beneath; below, a yellow board with the one promise "Leave with a playable spec" at ~84px, and a blue host board; the white enamel rail along the bottom holds slide count, section and the section clock.

FORM: Cairo Sign-Painter, candidate 7 of 7 on the ordered list. seed:28b0d788bf520b16
Raises kept: pose and answer (claim panel paired with live demo panel across one seam); ink budget (six paints, nothing else); sources on every real-winner fact, synthetic labels on demo numbers; fixed frame (border and rail never move); label strip lives in the rail, never above headings.
Signature interaction: on every interactive slide, a choice repaints a panel to a new colour state (green safe, yellow warning, red failure), like a sign being repainted, in one 220 ms wipe.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

---
name: Game & Simulation Design for Space Apps
description: A projected workshop deck painted like a Cairo shop sign — one message per board, readable from the back row.
colors:
  shop-red: "#d7261e"
  chrome-yellow: "#ffd100"
  bottle-green: "#0a7d3b"
  cobalt: "#1846a3"
  sign-black: "#111111"
  enamel: "#fafaf7"
typography:
  display:
    fontFamily: "Lalezar, Readex Pro, sans-serif"
    fontSize: "136px"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Lalezar, Readex Pro, sans-serif"
    fontSize: "92px"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.01em"
  title:
    fontFamily: "Lalezar, Readex Pro, sans-serif"
    fontSize: "64px"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.01em"
  body:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "42px"
    fontWeight: 400
    lineHeight: 1.28
  label:
    fontFamily: "Readex Pro, system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.3
rounded:
  none: "0px"
spacing:
  board-gap: "20px"
  grid-gap: "28px"
  slide-gap: "32px"
  board-pad: "44px 52px"
  slide-pad: "56px 72px 48px"
components:
  board-red:
    backgroundColor: "{colors.shop-red}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  board-yellow:
    backgroundColor: "{colors.chrome-yellow}"
    textColor: "{colors.sign-black}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  board-white:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.sign-black}"
    rounded: "{rounded.none}"
    padding: "{spacing.board-pad}"
  paint-button:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.sign-black}"
    rounded: "{rounded.none}"
    padding: "22px 30px 18px"
  paint-button-hover:
    backgroundColor: "{colors.chrome-yellow}"
  paint-button-solid:
    backgroundColor: "{colors.sign-black}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.none}"
    padding: "22px 30px 18px"
  paint-button-solid-hover:
    backgroundColor: "{colors.shop-red}"
  rail:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.sign-black}"
    typography: "{typography.label}"
    height: "76px"
---

# Design System: Game & Simulation Design for Space Apps

## Overview

**Creative North Star: "The Cairo Sign-Painter"**

Every slide is a hand-painted shop sign on a white enamel ground. Each one carries one message, painted big enough to read from across a street, or from the back row of a lit workshop room through a weak projector. Whole regions are flat sign paint: six colours, no tints, gradients or glow. Lettering is bold display caps with a solid painted drop-shade. Reading text is a calm, wide sans.

The sign frame never moves. A black border and a white rail along the bottom stay fixed, and only the slide inside changes. Content sits at the top of each board, and boards end where their content ends. That leaves the enamel ground showing below, as on a real sign, instead of half-empty coloured panels. Interaction belongs to the same world: a choice "repaints" a board to its new state in one quick wipe.

The deck rejects the category default of dark space HUDs with glowing cyan chrome, and the white corporate bullet slide.

**Key Characteristics:**
- Six flat paints on white enamel, nothing else.
- Lalezar uppercase lettering with a hard painted drop-shade.
- Painted pinstripe inset on every board.
- Fixed 1920×1080 frame, scaled to fit any projector.
- One message per board, top-aligned.

## Colors

A sign-shop paint set: saturated primaries plus black on enamel, every one used as a solid field.

### Primary
- **Shop Red** (`shop-red`): the loudest paint. Used for the title fascia, failure states, warning boards, the default drop-shade on enamel, and the solid button's hover.

### Secondary
- **Chrome Yellow** (`chrome-yellow`): the promise and the takeaway. Used for "steal this" boards, the main rule on a slide, hover and selection, the focus ring, and the slider thumb. It always takes black lettering with a red shade.

### Tertiary
- **Bottle Green** (`bottle-green`): safe or success states, the recommended option (for example "3 variables"), and meter fills when healthy.
- **Cobalt** (`cobalt`): the host and identity boards, and winner name panels. It is the calm paint.

### Neutral
- **Sign Black** (`sign-black`): frame, seams, borders, body text on light paint, and the shade under light lettering.
- **Enamel** (`enamel`): the ground of every slide, the rail, white boards and lettering on dark paint.

### Named Rules
**The Ink Budget Rule.** Six paints, nothing else. No tints, opacity washes, gradients or glow. A new state is a different paint, never a lighter one.

**The Shade Contrast Rule.** Drop-shades are only red or black: red under black lettering, black under light lettering, red under light lettering on black paint. Never shade with enamel or yellow; on a projector it disappears.

## Typography

**Display Font:** Lalezar (fallback Readex Pro, sans-serif), self-hosted from `vendor/fonts/`
**Body Font:** Readex Pro, variable 160–700 (fallback system-ui, sans-serif), self-hosted

**Character:** Lalezar is a heavy Arabic-Latin display face cut like sign lettering. Readex Pro is a wide, open sans that stays legible at projection distance. Both cover Arabic, so the short Arabic title line stays in the same voice.

### Hierarchy
- **Display** (title slide only): the workshop title on the red fascia.
- **Headline**: one per slide, the sign line at the top. Larger steps for single-number boards (116px, e.g. "2 of 20") and winner names (100px). Smaller steps: the promise (84px), board signs (64px) and a closing line (48px).
- **Title**: board heads. 74px in three-column rows, 76px in the core loop, 56px in four-column rows, 54px in dense pairs.
- **Body**: board copy at 42px (48px in three-column rows). Slide body is 38px, the lead line 46px/500, and small notes 28px.
- **Label**: the rail, and 24px source lines. The rail's section name switches to display caps at 32px.

### Named Rules
**The Painted Caps Rule.** All display lettering is uppercase Lalezar with `letter-spacing: .01em`, balanced line breaks, and a solid drop-shade offset `.045em` down and right. Reading text is never uppercase.

**The Back-Row Rule.** No reading text below 24px at 1920×1080, and that size is kept for source lines and labels. Board copy starts at 34px.

## Layout

The deck is a fixed 1920×1080 stage with a 14px black frame. It scales by `min(innerWidth/1920, innerHeight/1080)`, so 16:9, 16:10 and 4:3 projectors show the whole sign, letterboxed on black. Each slide is a CSS grid with 56/72/48px padding and a 32px gap above a fixed 76px rail.

Recurring compositions:
- **Sign over boards:** a headline, then a row of 2–4 equal boards (28px gap; 24px for four). The row sizes itself to its tallest board, and the enamel shows below.
- **Pose and answer:** claim board and demo board split by a 14px black seam, with 48px of air on each side.
- **Fascia:** a full-bleed painted region with no slide padding, used on the title and golden-rule slides.

Content inside a board is top-aligned with a 20px gap. Nothing is vertically centred in a board unless the board is the whole slide.

## Elevation & Depth

Flat. There are no box shadows, blur or layering. Depth comes only from paint: the pinstripe inset (a 4px outline in the lettering colour, inset 18px), solid black borders on white boards (6px), and the hard drop-shade on display lettering. The one box-shadow in the build is the focus ring's black halo, which is there for accessibility, not depth.

### Named Rules
**The Flat Paint Rule.** If it looks lifted, it is wrong. Separation comes from a different paint, a black seam, or the pinstripe. Never a shadow.

## Shapes

Square everywhere: no radius on boards, buttons, inputs, meters or chips. Borders are thick, solid black (4–6px). Every painted board carries a pinstripe border inset from its edge, thinner (3px, inset 12–14px) on small boards. Bullets are small painted squares. Scope-trap icons are drawn as red no-signs in inline SVG.

## Components

### Boards
Painted panels that carry one message each.
- **Corner Style:** square (`{rounded.none}`).
- **Background:** any one of the six paints. White boards add a 6px black border.
- **Inset:** a 4px pinstripe in the text colour, inset 18px.
- **Internal Padding:** 44px 52px; dense pairs use 36px 44px.
- **Content:** a heading (title role), then body copy or a square-bullet list, all top-aligned.

### Buttons (paint buttons)
Lettered like the signs, pressed like a real key.
- **Shape:** square, 5px black border.
- **Default:** enamel with black Lalezar at 40px. The solid variant is black with enamel lettering.
- **Hover / Active:** default turns chrome yellow; solid turns shop red. Active presses down 3px over 120ms.
- **Disabled:** 45% opacity on enamel, not-allowed cursor.
- **Focus:** a 5px yellow outline with a 9px black halo, so it reads on any paint.

### Inputs (sliders)
- **Style:** a 14px black track and a 44px square yellow thumb with a 5px black border. A bold tabular readout sits to the right.

### Meters
- **Style:** 44px-tall enamel track with a 5px black border. The fill is green when healthy and repaints to yellow (warning) or red (failure), easing over 220ms. Values are tabular.

### Navigation (the rail)
- **Style:** a fixed 76px enamel strip with a 6px black top border. Left: presenter and event. Centre: a square section-colour chip plus the section name and minutes in display caps. Right: the talk clock and slide count, tabular.
- **Overlays:** speaker notes slide over the rail's top edge in black with a yellow rule. The slide grid is enamel with square black-bordered tiles that turn yellow on hover or for the current slide.

### Repaint wipe (signature)
A choice repaints a board to its new state colour (green safe, yellow warning, red failure). The new paint wipes in from the left, using a clip-path on a pseudo-element, in 220ms `cubic-bezier(.16,1,.3,1)`. Under reduced motion the change is immediate.

## Do's and Don'ts

### Do:
- **Do** give every slide one headline sign and at most four boards.
- **Do** top-align board content and let the row end at its tallest board.
- **Do** use the six paints as solid fields, with state colours fixed: green safe, yellow warning, red failure.
- **Do** put a source line (24px) under every real-world fact, and label demo numbers as teaching numbers.
- **Do** keep the frame and rail fixed; only the slide inside changes.
- **Do** self-host fonts and assets; the deck runs offline.

### Don't:
- **Don't** add tints, gradients, glows, blur or box shadows.
- **Don't** shade lettering with enamel or yellow.
- **Don't** place kickers or eyebrow labels above headings. Section labels live in the rail.
- **Don't** round corners.
- **Don't** vertically centre text inside a board that shares a row with others.
- **Don't** use emoji or icon-font glyphs; draw icons as painted inline SVG.

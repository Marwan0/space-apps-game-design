# Game & Simulation Design for Space Apps

Marwan Ayyad's 2-hour workshop deck for NASA Space Apps Cairo 2026. 28 slides, 7 sections, 120 minutes.

## On the day

Online copy: https://marwan0.github.io/space-apps-game-design/ (repo: github.com/Marwan0/space-apps-game-design). Push to `main` to update it.

Open `index.html` in Chrome or Edge. No internet and no install needed; fonts, three.js and the QR code ship in `vendor/`.

| Key | Does |
| :-- | :-- |
| → ↓ Space PageDown | Next slide |
| ← ↑ PageUp Backspace | Previous slide |
| Home / End | First / last slide |
| F | Fullscreen |
| N | Speaker notes on the projected screen |
| P | Presenter window: notes, next slide, talk clock. Put it on your laptop screen and the deck on the projector |
| G | Slide grid, jump anywhere |
| Esc | Close notes or grid |

On slide 10 (Core loop sandbox), drag the entry angle and press **Commit**. The capsule either skips back to space, burns up, or lands under its parachute, with heat shield and g-load bars on the way down. **M** mutes the sound. Drag the scene to turn it.

On slide 13 (Too heavy to fly?), set the three sliders and press **Launch** or **L**. The rocket either sits on the pad, falls back and explodes, or reaches orbit with 1 to 3 stars. **M** mutes the sound. Drag the scene to turn it.

On slide 24 (Dust Storm Dispatch), the room votes each sol and you press **1** drive, **2** sample, **3** clean panels, or **R** to restart. Arrows and Space still change slides. Random events (dust devils, soft sand) make each game different.

The talk clock in the bottom rail starts on your first slide change.

## Plan

| Section | Slides | Minutes |
| :-- | :-- | :-- |
| I · Why games | 1–5 | 10 |
| II · The core loop | 6–14 | 20 |
| III · Past winners | 15–19 | 15 |
| IV · 48-hour playbook | 20–22 | 15 |
| V · Live demo | 23–24 | 15 |
| VI · Hands-on | 25–27 | 35 |
| VII · Wrap-up | 28 | 10 |

Speaker notes live on each slide (`data-notes` in `index.html`), so editing a slide edits its notes.

## Facts

Past-winner slides only state what NASA's 2024 and 2025 global-winner announcements say. Sources are listed in `PRODUCT.md`. Numbers in the Mars, re-entry and rocket demos are teaching numbers and are labeled as such on screen.

## Files

- `index.html`: the deck
- `vendor/fonts/`: Lalezar and Readex Pro (SIL Open Font License, licenses alongside)
- `vendor/three.min.js`: three.js r149 for the slide 10 and 13 scenes (MIT, license alongside)
- `vendor/qr-links.svg`: QR code for https://marwan0.github.io (slide 28)
- `links/`: source of that links page, its own git repo pushed to github.com/Marwan0/Marwan0.github.io. Edit, commit and push there; GitHub Pages republishes in about a minute
- `script-ar.md`: what to say on each slide, in Egyptian Arabic
- `PRODUCT.md`: audience, purpose, verified facts
- `DESIGN.md`: the visual system (paints, lettering, boards, rules) for adding slides on-style
- `workshop_outline.html`: original session outline
- `_old/`: the previous deck, kept for reference (local only, not in the repo)

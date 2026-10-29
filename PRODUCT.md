# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, offline. One `index.html` plus local `vendor/` files (fonts, three.js r149, QR code), opened from the presenter's laptop with no internet and no build step. No video: the user dropped the HyperFrames clips in the 2026-10-29 rebuild.

## Users

Primary: university students at NASA Space Apps Cairo 2026, many at their first hackathon, with little or no game-development experience. They watch a projected screen in a workshop room, then work in teams during the hands-on block.

Secondary: Marwan Ayyad, the presenter, who drives the deck live for 2 hours and needs his cues (notes, timings) without breaking the flow.

## Product Purpose

A 2-hour keynote and hands-on workshop, "Game & Simulation Design for Space Apps". It teaches first-timers to turn a NASA challenge dataset into a playable, choice-driven simulation they can ship in a 48-hour hackathon. Success: teams leave with a one-minute MVP spec (goal, 3 variables, 2 decisions, rule table, end state) and avoid the scope traps that sink weekend projects.

## Positioning

Taught by a game designer, not a data-viz person: the claim is that a dashboard shows data while a simulation lets players make choices with consequences driven by that data. Every concept is shown working live in the deck itself (playable sandbox, constraint simulator, Dust Storm Dispatch rover game) rather than described.

## Operating Context

- Projected in a workshop room; projector aspect ratio unknown (must handle 16:9, 16:10, 4:3).
- Presenter laptop, keyboard-driven; venue Wi-Fi not trusted, so every demo runs offline in the page itself (no network, no video).
- Fixed time budget of 120 minutes across 7 sections (intro 10, essentials 20, past winners 15, playbook 15, live demo 15, hands-on 35, wrap-up 10).
- Hands-on block: 20-minute design sprint, 10-minute playtest swap between teams, 5-minute revision. A template is projected and copied into teams' shared docs.

## Capabilities and Constraints

- Keyboard navigation, slide overview grid, speaker-notes drawer, fullscreen.
- Interactive pieces: Mars dashboard-vs-simulation, three.js re-entry core-loop sandbox (one entry-angle dial; outcomes are skip, burn-up, or parachute splashdown; heat shield and g-load bars, radio blackout, synthesized sound), "Too heavy to fly?" three.js launch game (satellite, fuel and engine push trade off; outcomes are stuck on the pad, fall back, or orbit with 1 to 3 stars; synthesized sound), Dust Storm Dispatch (a room-voted Mars rover game, balanced by simulation so early panel cleaning wins), copyable MVP template, sprint timer. Presenter window (P) syncs notes to a second screen.
- Content constraints from earlier review: no pop-neuroscience ("dopamine") claims; no project-management tool lists (one rule instead: track variables in a shared doc); no raw phone number on public slides.
- Past-winner case studies may only state what NASA's official global-winner pages say (verified 2026-10-29, see Evidence on Hand). "Henry's Farm Adventures" could not be verified anywhere and is dropped.

## Brand Commitments

- Event: NASA Space Apps Challenge, Cairo local event, 2026. The deck is the presenter's own workshop at the event, not an official NASA publication.
- Presenter: Marwan Ayyad. Contact via QR code to https://marwan0.github.io (LinkedIn, YouTube, Facebook, email in one page), not a phone number.
- Golden rule wording: "If the player has no meaningful choice, it's not a game — it's just a chore."

## Evidence on Hand

- `workshop_outline.html`: the original session outline (source of truth for structure).
- `README.md`: previous build notes and the review fixes listed above.
- No photos, testimonials, or official NASA assets are on hand; none may be invented.
- Verified global winners (source: nasa.gov 2024 and 2025 global-winner announcements):
  - **Zumorroda-X** — Egypt, 2025, Art & Technology Award, challenge "NASA Farm Navigators". Mini games where players step into the shoes of a farmer on a journey around the world, learning how farmers adapt to heat waves, flooding and other environmental challenges.
  - **TerraTales** — Cairo, Egypt, 2024, Best Storytelling Award. An interactive game that encourages eco-friendly choices; secondary press adds that it shows climate outcomes of human action vs inaction.
  - **Innovisionaries (Eco-Metropolis)** — Sharjah, UAE, 2024, Most Inspirational Award. A city-building game where players make urban-planning and resource-management decisions.
  - **PureFlow** — Brazil, 2025, Best Mission Concept Award. An interactive systems-engineering platform to design, model in 3D and validate space habitats, tested against space-weather threats such as solar storms.
  - **Connected Earth Museum** — Campinas, Brazil, 2024, Art & Technology Award. An immersive virtual museum on Earth's changing climate with an AI host and 3D/2D visualizations (interactive, not a game).
- Mars rover facts used in the demo notes (NASA/JPL): wind gusts and dust devils repeatedly cleaned Spirit's and Opportunity's solar panels; Opportunity lost contact during the 2018 planet-encircling dust storm. Game numbers are teaching numbers, labeled on screen.
- Event scale (nasa.gov): 2024 had 9,996 project submissions from 163 countries and territories; 2025 winners were chosen from 18,860 teams.
- Winner counts (nasa.gov announcements): 10 global winners in 2024 and 10 in 2025 (one per award), so 20 across both years. Two of the 20 were Egyptian game teams: TerraTales (2024) and Zumorroda-X (2025).

## Product Principles

1. Show, don't tell: every core idea gets a live, interactive moment on screen.
2. Readable from the back row: projected first-timers, not designers at a desk.
3. Nothing breaks on stage: offline, keyboard-proof, no live dependency on the network.
4. Respect the clock: the deck enforces the 120-minute budget.
5. Real science, simple rules: claims about NASA data and past winners must be verifiable.

## Accessibility & Inclusion

Projected for a mixed room: high contrast, large type, no meaning carried by color alone. English-language deck for an Egyptian audience; avoid idioms that don't translate.

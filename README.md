# MysteryStream 🩸

Welcome to **MysteryStream**, a premium, interactive, dark-themed murder mystery streaming platform. Designed to mimic the UI/UX of popular streaming services like Netflix, this platform replaces passive video watching with active, branching-narrative psychological thriller games!

This platform features exactly 15 fully playable games heavily inspired by the masterworks of three incredible authors:
- **Alice Feeney** (Psychological Thrillers)
- **Freida McFadden** (Domestic Nightmares)
- **Tess Gerritsen** (Medical Autopsies)

## 🎮 Features

- **True Branching Narratives**: Every single game operates on a complex JSON-based state machine. Choices matter. 
- **Fatal Mistakes**: Depending on your choices, you may experience terrifying "Death" nodes. If you die, the game resets and you must carry the trauma of your failure into your next attempt.
- **Dynamic 30-Stage Depth Engine**: Games track your progression dynamically up to 30 stages.
- **My List Capability**: Heart a game on the dashboard, and it gets saved immediately and persistently to your 'My List' via LocalStorage.
- **Premium UI/UX**: Dark mode by default (`#0A0A0A`), smooth hover animations, pure vanilla CSS flex/grid layouts, and zero-dependency routing.

## 🛠️ Tech Stack

MysteryStream was explicitly built with **Zero Dependencies**.

- **HTML5**: Semantic tags and dynamic overlays.
- **CSS3**: Vanilla CSS with custom properties (CSS variables), Flexbox, Grid, and micro-animations.
- **Vanilla JavaScript (ES6)**: 
  - Graph-based JSON navigation engine.
  - Event delegation.
  - LocalStorage state management.

## 🚀 How to Play

Since this is purely built in Vanilla JS/HTML/CSS, you don't even need a server to run it!

1. Clone the repository:
   ```bash
   git clone https://github.com/berramiynat-debug/mystery-stream.git
   ```
2. Open `index.html` in *any* modern web browser.
3. Select a game. Try not to die.

## 📂 Architecture Overview

- `index.html`: The core dashboard UI and interactive game overlay container.
- `style.css`: The styling system enforcing the premium dark-mode aesthetic.
- `app.js`: The central Brain. It handles DOM manipulation, routing, the branching game state engine, and saving your liked games.
- `data/feeney.js`, `mcfadden.js`, `gerritsen.js`: The massive JSON datasets containing hundreds of unique story nodes, narrative arcs, choices, and consequences.

## ⚠️ Content Warning
This application contains heavily text-based narrative depictions of violence, psychological terror, and murder mysteries. Viewer discretion is advised.

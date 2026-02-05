# 🏛️ Greek Memory Card Matching Game

A web-based **Memory Card Matching Game** built using **HTML, CSS, and Vanilla JavaScript**, inspired by Greek aesthetics and symbols. The game challenges players to match pairs of Greek alphabet cards while managing a score, using hints strategically, and selecting difficulty levels.  
No frameworks. No libraries. Just clean front-end fundamentals.

---

## 🎮 Game Overview

The objective of the game is to **match all pairs of Greek alphabet cards** before the score reaches zero. Each incorrect match reduces the score, while correct matches permanently lock cards in place.

The game ends when:
- ✅ All cards are successfully matched (Win)
- ❌ Score reaches 0 (Game Over)

---

## ✨ Features

### 🧠 Core Gameplay
- Greek alphabet symbols (α, β, γ, δ, ε, etc.)
- Each symbol appears **exactly twice**
- Cards are **shuffled randomly** on every game start
- Prevents flipping more than **two cards at once**
- Matched cards are disabled permanently

---

### 🧮 Scoring System
- Initial score: **100**
- Wrong match penalty depends on difficulty
- Hint usage deducts additional points
- Real-time score display

---

### 🧩 Difficulty Levels

| Level  | Grid Size | Wrong Match Penalty |
|------|----------|---------------------|
| Easy | 4 × 4    | −2 points           |
| Medium | 5 × 4  | −4 points           |
| Hard | 6 × 5    | −6 points           |

Difficulty dynamically changes:
- Grid layout
- Number of cards
- Penalty logic

---

### 🧠 Hint System
- **3 hints per game**
- Reveals **all cards for 2 seconds**
- Each hint deducts **5 points**
- Disabled automatically after hints are exhausted

---

### ✨ UI / UX Enhancements
- Greek-inspired background
- Clean, minimal layout
- **Smooth 3D flip animation** using CSS perspective
- Front and back card faces
- Visual feedback for matched cards
- Restart game functionality

---

## 🖥️ Tech Stack

- **HTML5** – Structure
- **CSS3** – Styling, Grid Layout, 3D Animations
- **JavaScript (ES6)** – Game logic, state management

No external libraries or frameworks used.

---

## 📁 Project Structure

Memory-card-game/
│
├── index.html # Game layout and controls
├── style.css # Greek theme, grid, 3D animations
└── script.js # Game logic, scoring, hints, difficulty

## 📁 Project Structure


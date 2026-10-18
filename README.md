# BLANKA — Indie Gamer & Creative Enthusiast Portfolio

A visually distinctive, immersive single-page portfolio website built with semantic **HTML5**, **Vanilla CSS3**, and modular **Vanilla JavaScript**.

---

## 🎮 Features & Design Highlights

- **Signature Brand Identity:** Atmospheric dark palette (`#0B0E0C`), deep forest green (`#10251A`), and neon green accents (`#A3FF12`).
- **Typography:** Modern display typeface [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for headings and clean [Inter](https://fonts.google.com/specimen/Inter) for readable body text.
- **Atmospheric Gaming Hero:** Dynamic gaming HUD frame with custom generated indie game key art, telemetry readouts, status indicators, and subtle parallax on desktop.
- **Featured Work Showcase:** Responsive project cards driven by a simple JavaScript array in `script.js` with an interactive project inspection modal dialog.
- **About Blanka Section:** Two-column profile composition highlighting core creative interests (Worldbuilding, Interactive Experiences, Indie Game Culture) and an artistic profile card.
- **Signal / Contact Hub:** Direct email CTA, one-click "Copy Email" with instant toast feedback, and configurable social & gaming profile badges (itch.io, Steam, GitHub, LinkedIn).
- **Accessibility & Performance:** WCAG AAA contrast ratio, visible `:focus-visible` indicators, keyboard trap handling, skip links, and full `prefers-reduced-motion` compliance.

---

## 📁 File Structure

```text
simple website/
├── index.html              # Main HTML5 semantic page structure
├── style.css               # Vanilla CSS design tokens, components, and animations
├── script.js               # Projects data, modal, navigation & interaction logic
├── README.md               # Documentation & customization guide
└── assets/
    ├── images/             # High-resolution gaming artwork & profile assets
    │   ├── hero.jpg        # Hero atmospheric game landscape
    │   ├── project-1.jpg   # Project 01: Game Discovery
    │   ├── project-2.jpg   # Project 02: Interactive Experiments
    │   ├── project-3.jpg   # Project 03: My Gaming Universe
    │   └── about.jpg       # About: Blanka portrait composition
    └── icons/              # Clean SVG icons
        ├── itchio.svg
        ├── steam.svg
        ├── github.svg
        ├── linkedin.svg
        ├── gamepad.svg
        ├── compass.svg
        └── arrow-up-right.svg
```

*(A mirrored copy is also saved in `blanka-portfolio/` if you prefer deploying from a dedicated folder).*

---

## 🚀 How to Run Locally

You can run the portfolio in any browser using any of these simple methods:

### Option 1: Direct File Open
Simply double-click `index.html` in your file explorer, or right-click and choose **Open with > Chrome / Firefox / Edge / Safari**.

### Option 2: Using Python (Local Web Server)
Open terminal in the project directory and run:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option 3: Using Node.js / npx
```bash
npx serve .
```

---

## ✏️ How Blanka Can Customize Her Portfolio

All customizable content is organized and cleanly labeled:

### 1. Updating Projects
Open [script.js](file:///d:/Product%20Engineering/simple%20website/script.js) and locate the `PROJECTS_DATA` array:
```javascript
const PROJECTS_DATA = [
  {
    id: 1,
    number: '01',
    title: 'Game Discovery',
    category: 'Gaming / Exploration',
    badge: 'CONCEPT ARCHIVE',
    image: 'assets/images/project-1.jpg',
    description: 'Short card summary...',
    extendedDescription: 'Full breakdown shown in the preview modal...',
    tags: ['World Exploration', 'Level Analysis'],
    projectUrl: 'https://your-playable-demo.com' // <-- Replace with your real link
  },
  // Add new projects by copying this block!
];
```

### 2. Updating Contact Email & Social Profiles
In [script.js](file:///d:/Product%20Engineering/simple%20website/script.js), edit `PROFILE_CONFIG`:
```javascript
const PROFILE_CONFIG = {
  name: 'BLANKA',
  role: 'Indie Gamer & Creative Enthusiast',
  status: 'CURRENT STATUS: EXPLORING NEW WORLDS',
  email: 'your.real.email@domain.com', // <-- Replace with your actual email
  socials: [
    { name: 'itch.io', url: 'https://yourname.itch.io' },
    { name: 'Steam', url: 'https://steamcommunity.com/id/yourhandle' },
    { name: 'GitHub', url: 'https://github.com/yourhandle' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourhandle' }
  ]
};
```
Also update the `mailto:` link and visible text in [index.html](file:///d:/Product%20Engineering/simple%20website/index.html#L340-L360).

### 3. Replacing Artwork & Images
Drop your own images into `assets/images/` with the same names (`hero.jpg`, `about.jpg`, `project-1.jpg`, etc.) or update the image paths in `index.html` and `script.js`.

# Itzfizz Motion UI - Scroll-Driven Hero Assignment

A modern, highly interactive hero section featuring smooth, scroll-driven animations built to demonstrate advanced frontend motion capabilities. This project serves as a frontend assignment for Itzfizz, focusing on performance, smooth UI behavior, and premium design aesthetics.

## 🚀 Features

- **Premium Design Aesthetic:** Deep colors, stark contrasts, and sophisticated typography using Inter and Space Grotesk.
- **Initial Load Sequence:** Smooth staggered reveal of headlines, statistics, and main visuals orchestrated by GSAP timelines.
- **Scroll-Driven Horizontal Scrubbing:** The hero viewport pins in place while the primary visual element (car) drives horizontally across the screen mapped precisely to your scroll position.
- **Dynamic Interactions:** Text elements glow and statistics stagger into view at specific scroll milestones (25%, 50%, 100%), creating a fluid 3D-like depth effect.
- **High Performance:** Exclusively uses CSS transforms and opacity for animations, avoiding expensive layout reflows on the main thread.

## 💻 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4
- **Animation Engine:** GSAP (GreenSock Animation Platform) & GSAP ScrollTrigger
- **Language:** JavaScript

## 🛠️ Local Setup & Configuration

Follow these steps to run the project locally on your machine:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-github-repo-url>
   cd itzfizz-motion-ui
   ```

2. **Install dependencies**:
   Ensure you have Node.js installed (v18+ recommended), then run:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment (GitHub Pages)

This project has been configured for a static export, making it perfect for free hosting on GitHub Pages.

1. Generate the static export:
   ```bash
   npm run build
   ```
   This will output the static files into the `out/` directory.

2. You can use packages like `gh-pages` to deploy the `out/` directory directly to your `gh-pages` branch, or configure GitHub Actions to deploy Next.js static exports automatically.

## 📁 Architecture Overview

- `src/components/Hero.js`: The master component orchestrating the GSAP load and scroll timelines.
- `src/components/Headline.js`: Contains the letter-spaced typography.
- `src/components/Statistics.js`: Renders the impact metrics.
- `src/components/ScrollVisual.js`: Contains the Next.js optimized `<Image>` that responds to the scroll position.
- `project Details/`: Contains the initial planning documents (PRD, rules, tasks, etc.).

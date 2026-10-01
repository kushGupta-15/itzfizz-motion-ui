# Architecture

## High Level Architecture
The application is a frontend-only single-page experience built with Next.js (React). It will leverage a component-based architecture where the Hero section is the primary focal point. Animations will be orchestrated using GSAP (GreenSock Animation Platform) and its ScrollTrigger plugin to handle initial load sequences and scroll-driven events (pinning the viewport, scrubbing a horizontal timeline, staggering components) efficiently. This avoids relying on heavy React state updates for every scroll tick, thereby ensuring high performance.

## Technology Stack
- **Framework**: Next.js / React.js
- **Styling**: Tailwind CSS (with potential Vanilla CSS additions for specific custom animations)
- **Markup**: HTML5 (via JSX)
- **Logic**: JavaScript
- **Animation Engine**: GSAP (GreenSock Animation Platform)

## Folder Structure
```text
/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/                # Next.js App Router (or pages/)
│   │   ├── layout.js       # Root layout
│   │   └── page.js         # Main entry point (contains Hero section)
│   ├── components/         # Reusable React components
│   │   ├── Hero.js         # Main hero section component
│   │   ├── Headline.js     # Animated headline component
│   │   ├── Statistics.js   # Animated metrics component
│   │   └── ScrollVisual.js # The moving element responding to scroll
│   ├── styles/             # Global CSS and Tailwind directives
│   └── utils/              # Helper functions, GSAP animation configs
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

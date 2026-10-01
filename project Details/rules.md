# Rules & Guidelines

## General Principles
- **Motion First**: Animations and interactions should feel intentional, smooth, and premium.
- **Performance Focused**: Do not block the main thread. Avoid expensive layout recalculations (reflows) on scroll.
- **Clean Code**: Adhere to DRY principles and maintain clean, readable code with descriptive variable/component names.

## Technology & Coding Standards
- **Framework**: Use Next.js (App Router) and functional React components.
- **Styling**: Use Tailwind CSS for utility-first styling.
- **Animations**: Use GSAP strictly for complex timelines and scroll-driven animations (ScrollTrigger). Rely exclusively on `transform` (`translate`, `scale`, `rotate`) and `opacity` properties for high-performance motion.
- **Formatting**: Maintain consistent code formatting (Prettier/ESLint standard).

## Project Structure Rules
- Components must be isolated and handle their own animation logic (using refs to target DOM nodes).
- Global animation configurations (easing curves, duration constants) should be abstracted to utility files to maintain consistency.
- Asset imports (images, SVGs) should be optimized.

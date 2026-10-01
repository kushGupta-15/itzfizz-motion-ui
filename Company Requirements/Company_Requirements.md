# Assignment: Scroll-Driven Hero Section Animation

## Objective
The goal of this assignment is to evaluate your understanding of frontend animations, scroll-based interactions, and smooth UI behavior using vanilla web technologies. You are required to recreate the hero section animation inspired by the given reference, focusing on motion quality, smoothness, and interaction logic.

## Reference
**Live Demo:** [https://paraschaturvedi.github.io/car-scroll-animation](https://paraschaturvedi.github.io/car-scroll-animation)

## Functional Requirements

### 1. Hero Section Layout
- The hero section should occupy the first screen (above the fold).
- Display a letter-spaced headline similar to: `W E L C O M E I T Z F I Z Z`
- Below the headline, show impact metrics / statistics (percentages with short descriptions).

### 2. Initial Load Animation
**On page load:**
- The headline should appear smoothly (fade + slight movement or staggered reveal).
- The statistics should animate in one by one with a subtle delay.
- Animations must feel smooth and premium, not abrupt.

### 3. Scroll-Based Animation (Core Feature)
The hero section should respond to page scroll. **As the user scrolls:**
- The main visual element (image/object) should move smoothly based on scroll position.
- Animation should be tied to scroll progress (not time-based autoplay).
- Use easing/interpolation so motion feels natural and fluid.
- Animations must be smooth and performant.
- Prefer transform properties (`translate`, `scale`, `rotate`) for animations.
- Avoid heavy calculations or layout reflows on every scroll event.

## Tech Stack
### Mandatory
- HTML
- CSS
- JavaScript
- GSAP (for smoother scroll or intro animations)
- Next.js / React.js
- Tailwind CSS

### Plus Points (Optional)
- Bootstrap (for layout help)
- WordPress (if implemented as a theme or template)

## Submission Instructions
- Host the project on a free platform (GitHub Pages preferred).
- Code should be clean, readable, and well-structured.

### Requirements:
- Link to the live webpage.
- Link to your GitHub repository.

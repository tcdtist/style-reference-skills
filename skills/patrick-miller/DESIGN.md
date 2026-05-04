---
version: alpha
name: Patrick Miller
description: Patrick Miller is a visually striking, editorial-style interface designed around large, impactful typography and high-contrast color blocks. Its visual system prioritizes stark simplicity, using a limited palette of bold, often desaturated background colors paired with pure black or white text. Photography is presented as large, immersive sections, punctuated by subtle navigation and minimal, almost invisible controls. The overall impression is direct, art-focused, and spatially generous.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  pewter-mist: "#a4b1b3"
  steel-green: "#4c564b"
  ocean-blue: "#004b82"
  warm-peach: "#fd9b65"
  rosewood-red: "#6f2c30"
  alabaster-creme: "#f8f5d1"
  blush-sand: "#e9d1c7"
  sage-green: "#9ac8ae"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
    letterSpacing: 0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 331px
    lineHeight: 0.8
    letterSpacing: -6.62px
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-text-link:
    role: Navigation and informational links.
  navigation-arrow-button:
    role: Pagination and content progression.
  primary-action-button:
    role: Main call-to-action for print editions.
  title-block:
    role: Large, artistic page titles.
  overlay-contact-link:
    role: Fixed position utility link.
  content-section:
    role: Primary content containers.
---

## Overview

**North Star:** Editorial photography portfolio.

Patrick Miller is a visually striking, editorial-style interface designed around large, impactful typography and high-contrast color blocks. Its visual system prioritizes stark simplicity, using a limited palette of bold, often desaturated background colors paired with pure black or white text. Photography is presented as large, immersive sections, punctuated by subtle navigation and minimal, almost invisible controls. The overall impression is direct, art-focused, and spatially generous.

### Do's

- Prioritize MlrStandard for all textual elements; use system fonts only as fallback or for subtle utility details at weight 200.
- Use 0px for all border-radius values across buttons, cards, and interactive elements to maintain a sharp, editorial aesthetic.
- Employ full-bleed background colors for sectioning; alternate between Canvas White, Pewter Mist, and accent colors like Warm Peach or Rosewood Red.
- Maintain a high contrast ratio between text and background, typically Midnight Ink on Canvas White or Canvas White on accent colors.
- Apply generous padding, specifically 72px for significant interactive elements and 29px-32px padding for vertical content stacking.
- Headline typography should use MlrStandard with negative letter-spacing for impact, like -0.0200em for large sizes.

### Don'ts

- Do not use any curved or rounded elements; all corners should be sharp 0px radius.
- Avoid using drop shadows or elevation effects; the design relies on color and spacing for hierarchy.
- Do not introduce gradients unless explicitly defined; the color system relies on solid, flat blocks of color.
- Do not create complex layouts with multiple overlapping elements; maintain a clean, spacious, and grid-like arrangement.
- Refrain from using heavily saturated colors for primary text or utility elements; save vivid tones for large background blocks.
- Do not use traditional button styles with solid backgrounds; interactive elements are largely ghosted or outlined, except for distinct calls to action like 'Explore Print Editions'.

### Layout

The page model is full-bleed, with content sections spanning the entire viewport width. The hero section often features extremely large, centered typography like '© Patrick Miller ↓' over a solid color background. The section rhythm is characterized by alternating full-bleed background colors, creating distinct visual blocks with seamless vertical transitions rather than dividers. Content arrangement is primarily centered or split into two large, equal-width columns. There's no explicit grid for cards; content is presented in large, impactful blocks. The density is spacious, with significant padding especially around interactive buttons. Navigation is minimal, often appearing as subtle, small links in the corner or arrow buttons for progression.

### Imagery

Photography is the core of this system, presented as large, full-bleed images or immersive blocks. The treatment is raw with sharp edges, prioritizing the image itself with minimal UI overlay. Product photography (e.g., artwork) is often tightly cropped. There's no use of illustrations or 3D renders. Icons are minimal, sharp, and outlined (e.g., arrows), using the inverse of the text color. The imagery density is very high, often dominating entire screen sections, serving a primary role as content showcase and atmospheric element.

---
version: alpha
name: GRU Space
description: GRU Space presents a 'cosmic minimalist' aesthetic, leveraging deep blacks and stark whites to evoke the vastness of space and the precision of engineering. The combination of two distinct custom typefaces — one a contemporary sans-serif, the other a more traditional serif for display — creates a tension between futuristic ambition and foundational elegance. Minimalist border-only buttons, coupled with a complete absence of shadows, emphasize a flat, high-contrast digital environment, akin to looking at a star chart.
colors:
  void-black: "#080808"
  lunar-white: "#ffffff"
  slate-gray: "#9c9c9c"
  obsidian-grey: "#191919"
  meteorite-gray: "#393939"
  moon-rock: "#b4b7b8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.1
    letterSpacing: -0.51px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
    letterSpacing: -0.59px
spacing:
  cardRadius: 6px
  buttonRadius: 1440px
  sectionGap: 80px
components:
  primary-ghost-button-group:
    role: 
  featured-in-press-article-cards:
    role: 
  hero-headline-cta-block:
    role: 
  primary-ghost-button:
    role: Call to action button for primary actions
  header-navigation-link:
    role: Navigation items in the header
  featured-article-card:
    role: Displays news articles or similar content
  badge-with-moon-rock-background:
    role: Category tags or specific status indicators
  dark-overlay-card:
    role: Informational cards with slight background emphasis
  text-input-field:
    role: User input for forms
---

## Overview

**North Star:** Star Chart Blueprint: High-contrast, sharp, and focused on pure form against a dark void.

GRU Space presents a 'cosmic minimalist' aesthetic, leveraging deep blacks and stark whites to evoke the vastness of space and the precision of engineering. The combination of two distinct custom typefaces — one a contemporary sans-serif, the other a more traditional serif for display — creates a tension between futuristic ambition and foundational elegance. Minimalist border-only buttons, coupled with a complete absence of shadows, emphasize a flat, high-contrast digital environment, akin to looking at a star chart.

### Do's

- Use Overused Grotesk (or Inter) for all body copy and UI elements, prioritizing readability with Lunar White #ffffff on Void Black #080808.
- Employ PP Mondwest (or Playfair Display) exclusively for large, impactful headlines at sizes 51px and 54px to convey brand authority.
- Maintain a fully dark theme with 'Void Black' #080808 as the pervasive background color.
- Apply a 1440px border-radius to all buttons for a distinctive pill shape, ensuring a soft touch within the otherwise sharp interface.
- Utilize 'Lunar White' #ffffff for all interactive element borders and primary text to ensure maximum contrast and visual guidance.
- Use letter-spacing as specified for PP Mondwest headlines (-0.011em at largest size) to ensure a high-end, tight typographic presentation.

### Don'ts

- Do not use shadows for elevation; rely solely on color contrast and background changes for layering and hierarchy.
- Avoid using chromatic colors; the palette is strictly achromatic with very subtle dark and light grays.
- Do not introduce new fonts; restrict typography to Overused Grotesk and PP Mondwest to maintain distinct roles.
- Do not deviate from the specified border-radii; especially the 1440px pill shape for buttons and 0px for inputs.
- Do not use generic button styles; all buttons are primarily ghost buttons with a visible border, not solid fills.
- Avoid excessive imagery; the aesthetic is text and UI-dominant, with imagery used sparingly and powerfully (e.g., full-bleed backgrounds).

### Layout

The page employs a full-bleed layout, where background imagery and dark gradients extend to the edges of the viewport, creating a vast, immersive experience. Content is primarily centered within a flexible max-width container that isn't strictly defined but provides comfortable reading lines. The hero section features a full-viewport visual (dynamic video/image) with a centered headline and navigation pinned to the top. Subsequent sections maintain consistent vertical spacing (sectionGap of 80px) and often utilize a single-column stacked content arrangement, with text-heavy blocks contrasting against the dark backgrounds. There's no distinct grid for cards or features, rather content flows linearly. Navigation is a sticky top bar with minimal links and a prominent 'Reserve a Spot' ghost button.

### Imagery

The visual language is characterized by realistic, high-resolution photography of celestial bodies (planets, stars, sun flares) used full-bleed as background elements, creating an immersive, atmospheric context. These images are often dark and moody, serving as subtle backdrops rather than focal points. Product-specific visuals are minimal, with abstract UI graphics represented through high-contrast grid lines (+ shapes) on dark surfaces. Icons are typically monochromatic white outlines. The density is image-heavy in the hero but otherwise text-dominant, with imagery functioning decoratively to establish mood and theme.

### Elevation

The design intentionally avoids all shadows. Elevation is conveyed purely through high-contrast text and border treatments against a deep, dark background. Surface changes, when present, are achieved by slight variations in background color (e.g., Moon Rock #b4b7b8 for cards) rather than dimensional effects, reinforcing a flat, almost blueprint-like aesthetic.

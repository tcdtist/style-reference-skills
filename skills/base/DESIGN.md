---
version: alpha
name: Base
description: Base projects a precise, technical elegance with a high-contrast achromatic canvas punctuated by a single vibrant violet accent. Typography is dominant, employing a stark sans-serif for headlines and a more functional family for body text, creating a strong editorial feel. UI elements are compact, utilizing ghost buttons and minimal borders to maintain a lightweight, ethereal presence while the branding color provides clear, unambiguous interactive states. The overall impression is digital, modular, and performance-oriented.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  haze-gray: "#f2f2f2"
  twilight-graphite: "#323232"
  muted-ash: "#999999"
  slate-mist: "#b1b7c3"
  vivid-cobalt: "#0000ff"
  subtle-granite: "#717886"
  emerald-green: "#098551"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.14
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.14
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.14
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.14
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.14
  heading:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 110px
    lineHeight: 1.14
spacing:
  elementGap: 4px
  sectionGap: 48px
components:
  ghost-navigation-item:
    role: Primary navigation links in the sidebar
  filled-primary-button:
    role: Main call-to-action button
  outlined-secondary-button:
    role: Secondary or alternative actions
  informational-card:
    role: Cards displaying product features or statistics
---

## Overview

**North Star:** Digital blueprint, on-chain precision.

Base projects a precise, technical elegance with a high-contrast achromatic canvas punctuated by a single vibrant violet accent. Typography is dominant, employing a stark sans-serif for headlines and a more functional family for body text, creating a strong editorial feel. UI elements are compact, utilizing ghost buttons and minimal borders to maintain a lightweight, ethereal presence while the branding color provides clear, unambiguous interactive states. The overall impression is digital, modular, and performance-oriented.

### Do's

- Prioritize Ink Black (#000000) for all primary body text and headings.
- Use Haze Gray (#f2f2f2) sparingly for subtle background separation in navigation or soft dividers.
- Apply Vivid Cobalt (#0000ff) exclusively for interactive elements like buttons, active states, and links to maintain its impact.
- Maintain a compact button padding strategy: 4px vertical, 12px horizontal for filled buttons; 10px all-around for ghost/outlined buttons.
- Employ an 8px border radius for all interactive elements and informational cards, with an optional 2px radius for very small elements.
- Use 'doto' for display headlines requiring maximal visual impact, applying the specified negative letter-spacing for density.
- Ensure the page-level content is contained within a max-width of 1128px.

### Don'ts

- Do not introduce new chromatic colors outside of Vivid Cobalt (#0000ff) and Emerald Green (#098551) to avoid diluting the brand palette.
- Avoid heavy shadows or gradients, preserving the lightweight and flat aesthetic of surfaces.
- Do not use `coinbaseDisplay` for body copy; reserve it for clear, focused text blocks.
- Do not deviate from the established letter-spacing values for display and heading typography; these are critical for visual identity.
- Avoid complex, multi-layered backgrounds; keep canvas and card surfaces clean and monochromatic.
- Do not use generic button styles; stick to the Ghost, Outlined, and Filled variants with their predefined color and radius tokens.
- Do not use base unit multiples other than 4px for spacing decisions.

### Layout

The page maintains a centered max-width of 1128px for most content. The hero section features a large, stark headline centered over an abstract, faintly visible background graphic. Content sections alternate between full-width and centered text blocks. A prominent left-aligned sticky navigation bar features ghost links. Product features are presented in a 2x2 grid of informational cards that use the same abstract graphic style. Vertical rhythm is established by consistent 48px section gaps and compact element spacing within blocks.

### Imagery

The site uses abstract, geometric 3D renders with a wireframe or voxelated style. These graphics are primarily brand-colored (Vivid Cobalt, Emerald Green, Subtle Granite) against achromatic backgrounds, serving decorative and explanatory roles for product features. They are contained within their own sections, not full-bleed, and generally appear as symbolic representations rather than literal product screenshots. Icons are minimalist, outlined, and monochromatic, used sparsely to accompany text or data.

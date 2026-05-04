---
version: alpha
name: Freitag
description: Freitag's design system uses a utilitarian, recycled canvas aesthetic: dominant light gray surfaces, stark black typography, and highly functional component treatments. The visual style emphasizes content clarity and product-focused imagery, punctuated by vibrant, raw material colors within the product compositions themselves. The layout maintains a controlled maximum width, creating a structured, gallery-like experience for showcasing unique items.
colors:
  ink: "#000000"
  silver-foam: "#cacaca"
  canvas-white: "#ffffff"
  graphite-outline: "#404040"
  light-gray: "#f1f1f1"
  muted-ash: "#616161"
  iron-oxide: "#1a1b1e"
  shadow-tint: "#969696"
  swiper-blue: "#007aff"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.28
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.28
    letterSpacing: -0.005px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.28
    letterSpacing: -0.01px
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 64px
components:
  pill-button-canvas-fill:
    role: Primary action button
  pill-button-light-gray-fill:
    role: Secondary action button
  ghost-button:
    role: Subtle action button
  square-button:
    role: Action button in contained spaces
  product-display-card:
    role: Showcasing individual products or categories
  floating-action-button:
    role: Persistent, elevated action
---

## Overview

**North Star:** Recycled canvas gallery

Freitag's design system uses a utilitarian, recycled canvas aesthetic: dominant light gray surfaces, stark black typography, and highly functional component treatments. The visual style emphasizes content clarity and product-focused imagery, punctuated by vibrant, raw material colors within the product compositions themselves. The layout maintains a controlled maximum width, creating a structured, gallery-like experience for showcasing unique items.

### Do's

- Use Silver Foam (#cacaca) as the primary page background color for all main content areas.
- Apply Ink (#000000) for all primary body text, headings, and interactive elements to maintain high contrast with light backgrounds.
- Ensure all buttons utilize a 9999px border-radius to achieve a consistent pill shape for interactive elements.
- Maintain high stroke contrast (1px Ink #000000 or Graphite Outline #404040) for borders on all primary UI elements and interactive components.
- Implement AkkStdRg for all headings at appropriate scale sizes and FRg for small, functional text like button labels, ensuring distinct typographic roles.
- Structure page content within a 1200px pageMaxWidth, centered, to provide a structured, gallery-like presentation.
- Utilize a 22px margin or padding around sections and a 12px margin for elements to define clear content separation.

### Don'ts

- Avoid chromatic colors for primary UI elements like backgrounds or main text; reserve them for product imagery and accents.
- Do not introduce new border-radii values; strictly adhere to 0px, 4px, 12px, 16px, or 9999px as defined.
- Never use soft, low-contrast shadows; only apply the defined 2px 2px 10px 0px rgba(0, 0, 0, 0.12) shadow to specific elevated actions.
- Do not deviate from the specified font families and their respective letter-spacing values to preserve the brand's typographic tone.
- Avoid full-bleed layouts; always respect the 1200px content constraint to maintain visual discipline.
- Do not use generic system fonts for branding or impactful headlines; AkkStdRg and FRg are crucial for brand identity.

### Layout

The site employs a contained layout with a maximum content width of approximately 1200px, creating defined visual columns. The hero section often uses a split-screen approach with engaging product photography and bold, off-grid typography. Sections maintain a consistent vertical rhythm with sectionGap of 64px, alternating between product displays, descriptive text blocks, and card grids. Product display sections leverage a grid of items, typically a 3-column layout. The overall density is comfortable, providing sufficient white space around elements, avoiding an overly dense or claustrophobic feel. Navigation is a sticky top bar with minimal branding, focused links, and utility icons.

### Imagery

This site features product-focused photography and lifestyle imagery, often presented as split-screen hero banners. Photography is usually full-bleed within its container, showcasing products in context or as focused, clean shots. Treatment is raw and authentic, reflecting the 'upcycled' nature of the products, with no excessive retouching or stylized filters. Icons are minimalist, outlined, and monochromatic (Ink #000000). The role of imagery is both decorative and explanatory, providing context for the products and an atmosphere of rugged utility, while keeping a dominant focus on the unique visuals of each item.

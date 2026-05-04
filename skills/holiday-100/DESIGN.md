---
version: alpha
name: Holiday 100
description: Holiday 100 features a dark, spacious aesthetic with a focus on product showcase. Generous negative space and subtle card treatments ensure content breathes, while selective use of vibrant accent colors for key messages and interactive elements adds visual interest without overpowering the rich product imagery. Typography combines a classic serif for headlines with a clean sans-serif for body text, creating a modern yet approachable feel. The system prioritizes clarity and directness over heavy adornment.
colors:
  midnight-ink: "#202124"
  ash-gray: "#e8e8e8"
  pale-gray: "#e8f0fe"
  steel-gray: "#9e9e9e"
  charcoal-surface: "#333438"
  sky-link: "#99c3ff"
  grape-glow: "#c58af9"
  crimson-alert: "#980b0b"
  cerulean-insight: "#113979"
  mint-whisper: "#a8dab5"
  goldenrod-hue: "#ffedb8"
  arctic-mist: "#d2e3fc"
  forest-dew: "#073618"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.14
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.91
    letterSpacing: -3.2px
spacing:
  cardRadius: 20px
  buttonRadius: 20px
  elementGap: 6px
  sectionGap: 36px
components:
  pill-button:
    role: Primary Call to Action
  ghost-link:
    role: Secondary Action / Navigation
  product-card:
    role: Information Display / Product Listing
  accent-product-card:
    role: Highlight / Themed Product Listing
---

## Overview

**North Star:** Midnight product showcase

Holiday 100 features a dark, spacious aesthetic with a focus on product showcase. Generous negative space and subtle card treatments ensure content breathes, while selective use of vibrant accent colors for key messages and interactive elements adds visual interest without overpowering the rich product imagery. Typography combines a classic serif for headlines with a clean sans-serif for body text, creating a modern yet approachable feel. The system prioritizes clarity and directness over heavy adornment.

### Do's

- Use Midnight Ink (`#202124`) as the default background for sections and cards to maintain a consistent dark theme.
- Employ Ash Gray (`#e8e8e8`) for all primary text elements, ensuring strong readability against dark surfaces.
- Apply a `20px` border-radius to all cards and primary buttons to maintain a soft, approachable aesthetic.
- Utilize Sky Link (`#99c3ff`) for interactive elements like links and outlined button borders, providing a clear and consistent interactive cue.
- Maintain a comfortable rhythm with `36px` spacing between major sections and `6px` element gaps for tighter UI components.
- Pair Crimson Pro (weight 200) for hero headlines at large sizes with Google Sans (weight 400-500) for section headings to balance elegance with modern clarity.
- Use specific accent card backgrounds (e.g., Crimson Alert `#980b0b` or Cerulean Insight `#113979`) only for curated product groups or messages requiring visual emphasis, reserving them for distinct categories.

### Don'ts

- Do not introduce light backgrounds for entire sections or pages; the theme is predominantly dark.
- Avoid blocky or sharp corners; all significant UI elements should leverage the `20px` border-radius.
- Do not use highly saturated colors for large surface areas unless it's one of the pre-defined accent card backgrounds and serves a clear thematic purpose.
- Avoid heavy drop shadows or glows; the design relies on subtle background color shifts for surface distinction.
- Do not use generic system fonts when Google Sans or Crimson Pro are available for headings and subheadings; Arial is reserved for body text.
- Do not use letter-spacing outside the specified values for Google Sans and Crimson Pro; maintain the precise tracking for these fonts.
- Avoid dense UI elements with minimal padding; prioritize comfortable spacing, using `24px` for card padding and `14px` for button vertical padding.

### Layout

The page structure is a full-bleed layout with content sections that maintain a comfortable horizontal max-width, typically centered. The hero section often features a large image or video with centered text overlays. Section rhythm is organized by full-width dark backgrounds, with alternating content blocks that can range from full-width cards to multi-column grids. Content is generally arranged in visually balanced blocks, often with a clear visual hierarchy. Navigation is a sticky top bar with minimal elements.

### Imagery

This system primarily uses high-quality product photography and occasional lifestyle imagery. Products are often tightly cropped and presented against neutral or brand-colored backgrounds, with an emphasis on showcasing the item itself. Illustrations are minimal, seen mostly in small, outlined icon styles for categories. Imagery serves to directly showcase products or create anaspirational mood rather than purely decorative purposes. The density is moderate, balancing large hero images with smaller product grids, always allowing ample breathing room around visuals.

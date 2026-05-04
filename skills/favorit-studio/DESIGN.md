---
version: alpha
name: Favorit Studio
description: Favorit Studio employs a stark and confident editorial aesthetic, blending classic serif headlines with a modern sans-serif for body text and navigation. The design emphasizes high contrast monochrome surfaces with minimal visual embellishment, allowing crisp typography and bold photography to dominate. Interactive elements are subtle, relying on text and slight border changes rather than color fills, creating an atmosphere of understated luxury and directness.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  swiper-accent: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: -0.39px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.2
    letterSpacing: -1.1px
  heading:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1.2
    letterSpacing: -1.375px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 135px
    lineHeight: 1
    letterSpacing: -3.375px
  display:
    fontFamily: "system-ui"
    fontSize: 179px
    lineHeight: 1
    letterSpacing: -4.475px
spacing:
  elementGap: 21px
  sectionGap: 46px
components:
  ghost-button-light-bg:
    role: Primary Call to Action, Navigation Item
  ghost-button-dark-bg:
    role: Primary Call to Action, Navigation Item
  main-navigation-item:
    role: Top-level navigation links
  headline-display:
    role: Hero Section Headlines, Major Section Titles
  body-text-block:
    role: Paragraphs, Detailed descriptions
---

## Overview

**North Star:** High-contrast editorial canvas – bold, no-nonsense.

Favorit Studio employs a stark and confident editorial aesthetic, blending classic serif headlines with a modern sans-serif for body text and navigation. The design emphasizes high contrast monochrome surfaces with minimal visual embellishment, allowing crisp typography and bold photography to dominate. Interactive elements are subtle, relying on text and slight border changes rather than color fills, creating an atmosphere of understated luxury and directness.

### Do's

- Prioritize high contrast between text and background using only Midnight Ink (#000000) and Canvas White (#ffffff).
- Use TWKLausanne for all body text, navigation elements, and secondary headlines at weight 400.
- Employ Favorit Times at weight 400 exclusively for large, impactful display headlines.
- Apply a 0px border-radius consistently across all interactive elements and containers.
- Utilize specific letter-spacing values from TWKLausanne (-0.0250em, -0.0170em, -0.0100em) and Favorit Times (-0.0250em) to maintain typographic precision.
- Maintain comfortable density for sections by using a section gap of 46px and element gaps of 21px.
- Accentuate interactive elements and active states through border changes or the 'Swiper Accent' color (#007aff) within designated components.

### Don'ts

- Do not introduce soft shadows or complex elevation schemes; rely on hard visual breaks and direct contrast.
- Avoid using multiple colors for text or backgrounds; the palette is strictly monochrome with a single accent.
- Do not use rounded corners on any elements; all corners should be sharp 0px radius.
- Do not use generic padding values; adhere to the established spacing tokens like 16px for card-like elements and 21px for element gaps.
- Do not use gradients or complex background patterns; backgrounds should be flat Canvas White (#ffffff) or Midnight Ink (#000000).
- Avoid decorative icons or illustrations that are not strictly black and white; visual content should align with the stark aesthetic.

### Layout

The page primarily uses a max-width contained layout, though specific hero sections may appear full-bleed. The hero pattern features large, imposing typography (Favorit Times) often layered directly over or immediately adjacent to minimalist photography. Section rhythm is driven by strong vertical separation and high-contrast typography, creating distinct content blocks without explicit dividers. Content arrangement leans towards large, singular visual statements combined with textual hierarchy, using implicit grid structures for text blocks and navigation where elements are well-spaced and distinct. Navigation is minimal, typically a sticky header with a simple menu icon that expands to a full-screen overlay.

### Imagery

Photography is central, featuring a stark, minimalist aesthetic. It typically focuses on a single subject, often a person, shot against a plain, light background with neutral or achromatic color palettes. The treatment is full-bleed or large contained blocks, with sharp edges and no overlap. Imagery serves purely decorative and atmospheric purposes, creating a mood rather than conveying specific information. There are no illustrations or complex graphical elements; the focus is on clean photography and typography.

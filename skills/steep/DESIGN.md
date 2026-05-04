---
version: alpha
name: Steep
description: Steep captures a 'white canvas with depth' aesthetic: crisp backgrounds, carefully chosen neutrals, and a warm, inviting accent. The overall impression is one of restrained elegance and confident clarity, suitable for an analytics platform. Typography plays a central role with a high-contrast serif for display elements paired with a clean sans-serif for UI, creating both gravitas and legibility. Subtle shadows provide gentle elevation, preventing the interface from feeling flat.
colors:
  canvas: "#ffffff"
  ink: "#17191c"
  graphite: "#000000"
  warm-mist: "#fbe1d1"
  terracotta: "#5d2a1a"
  fog: "#f7f7f8"
  muted-stone: "#4c4c4c"
  light-steel: "#777b86"
  hint-of-grey: "#a3a6af"
  dusk-link: "#8b8c8d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.18
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1
    letterSpacing: -0.23px
  display:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.66px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -0.96px
spacing:
  cardRadius: 24px
  buttonRadius: 1.67772e+07px
  elementGap: 8px
  sectionGap: 80px
components:
  filled-primary-button:
    role: Main call-to-action
  ghost-button-dark-text:
    role: Secondary action or link
  ghost-button-light-text:
    role: Secondary action on dark backgrounds
  text-link-button:
    role: Inline actions or navigational links
  default-card:
    role: Content container
  subtle-background-card:
    role: Secondary content container or data visualization background
  accent-background-card:
    role: Decorative or featured content container
  input-field:
    role: User input element
---

## Overview

**North Star:** Warm, Crisp Canvas

Steep captures a 'white canvas with depth' aesthetic: crisp backgrounds, carefully chosen neutrals, and a warm, inviting accent. The overall impression is one of restrained elegance and confident clarity, suitable for an analytics platform. Typography plays a central role with a high-contrast serif for display elements paired with a clean sans-serif for UI, creating both gravitas and legibility. Subtle shadows provide gentle elevation, preventing the interface from feeling flat.

### Do's

- Use 'Ink' (#17191c) for primary text and filled buttons to ensure strong contrast and clear calls to action.
- Apply 'Canvas' (#ffffff) as the default background for most page sections and card surfaces, creating a bright and airy feel.
- Pair the 'Signifier' font at large sizes for headlines with 'Sohne' for all body text and UI elements to leverage their distinct roles.
- Utilize a 24px border-radius for cards and main content blocks to maintain a soft, approachable aesthetic.
- Ensure generous spacing, with `elementGap` of 8px and `sectionGap` of 80px, to support content readability and perceived quality.
- Implement the full shadow stack (rgba(4, 23, 43, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px) for elevated cards to provide subtle depth without heaviness.
- Use 'Warm Mist' (#fbe1d1) sparingly as a background accent to introduce a subtle warmth and highlight featured content.

### Don'ts

- Avoid using highly saturated colors; the palette favors muted neutrals with a single warm accent.
- Do not use 'Signifier' for body text, UI labels, or buttons; its distinctive character is reserved for large display headings.
- Refrain from sharp, 0px border-radii for interactive elements or containers; maintain the consistent rounded aesthetic.
- Do not introduce heavy, opaque shadows; elevation should be subtle and air-like, not dense or dark.
- Avoid tight spacing between elements; maintain adequate `elementGap` and `sectionGap` values to preserve visual order and reduce cognitive load.
- Do not use dark backgrounds for primary page sections; the system is built around a light, high-contrast canvas.
- Resist using multiple font families beyond 'Sohne' and 'Signifier'; maintain typographic consistency.

### Layout

The page model alternates between a full-bleed hero and a max-width 1280px contained layout for content sections. The initial hero features a centered headline over a soft, almost imperceptible gradient background, accompanied by floating UI elements. Subsequent sections typically follow a consistent vertical rhythm with minimal visual dividers, emphasizing a seamless flow of information. Content is primarily arranged in grid-like patterns, often with asymmetric compositions or alternating text-left/image-right (or UI element) sections. Card grids are frequently used for features and data visualization. The layout maintains a spacious density, with ample breathing room around elements. Navigation consists of a sticky top bar with clearly delineated product and action buttons.

### Imagery

This site prominently uses clean, abstract 3D elements and UI screenshots to convey complex data with a sense of clarity and modern polish. Photography is absent. Illustrations are minimalistic, focusing on geometric shapes and soft gradients that complement the palette. Icons are outlined, lightweight, and mono-color, typically rendered in 'Ink' (#17191c) or 'Muted Stone' (#4c4c4c). Imagery serves an explanatory and product showcase role rather than decorative. Visuals are carefully contained within rounded cards or sections, maintaining the spacious, organized feel, making the design feels image-heavy in its content sections rather than text-dominant.

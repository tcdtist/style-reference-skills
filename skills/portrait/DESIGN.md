---
version: alpha
name: Portrait
description: Portrait evokes a generative canvas feel with a bright, spacious theme featuring softly textured cards and borders. A vibrant, multi-hued color spectrum appears as a playful accent, punctuating an otherwise clean, achromatic UI. Typography is confident and dense, using precise tracking to maintain presence. Elements avoid hard edges, preferring generous radii and subtle, layered shadows that lend depth without heaviness.
colors:
  canvas-white: "#ffffff"
  ink-black: "#353535"
  charcoal: "#000000"
  cloud-gray: "#eeeeee"
  stone-gray: "#797979"
  pale-blue-mist: "#e8f1ff"
  ocean-blue: "#08304c"
  sky-blue: "#084e72"
  rainbow-glow: "#26c0ff"
  success-green: "#00cc3d"
  interactive-violet: "#8e51ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.45
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.45
    letterSpacing: -0.23px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.08
    letterSpacing: -1.25px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.08
    letterSpacing: -1.48px
  display:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 1.04
    letterSpacing: -4.26px
spacing:
  cardRadius: 24px
  buttonRadius: 28px
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-button:
    role: Secondary action control
  outlined-button:
    role: Primary action button
  rainbow-input-field:
    role: Interactive text input
  basic-card:
    role: Content container
  elevated-tooltip-card:
    role: Informational overlay
  image-gallery-item:
    role: Visual content display
  notification-tag:
    role: Ephemeral status indicator
---

## Overview

**North Star:** Generative digital canvas

Portrait evokes a generative canvas feel with a bright, spacious theme featuring softly textured cards and borders. A vibrant, multi-hued color spectrum appears as a playful accent, punctuating an otherwise clean, achromatic UI. Typography is confident and dense, using precise tracking to maintain presence. Elements avoid hard edges, preferring generous radii and subtle, layered shadows that lend depth without heaviness.

### Do's

- Prioritize Canvas White (#ffffff) for all main backgrounds and elevated surfaces, ensuring a bright, expansive feel.
- Use Ink Black (#353535) for primary headings and body text, maintaining high contrast for readability.
- Apply a 24px border-radius to all major content cards and images to ensure a consistent soft, rounded aesthetic.
- Incorporate the 'Rainbow Glow' gradient on interactive elements or borders to introduce branded playfulness and visual pop.
- Use Basier Circle for headlines with precise, tight letter-spacing (-0.056em at 76px) to create a compact, confident visual presence.
- Apply layered, subtle shadow stacks to cards and navigation elements for depth, avoiding stark or heavy elevation.
- Maintain a clear visual hierarchy by using Ocean Blue (#08304c) for critical functional icons and active states, drawing attention without being overtly strong.

### Don'ts

- Avoid using hard, sharp corners; always apply border-radii of 8px or higher to all UI elements.
- Do not introduce strong, solid background colors that conflict with the Canvas White theme, except for accent components.
- Avoid overly dense text blocks; use Switzer with generous line heights and element gaps to ensure comfortable readability.
- Do not use generic system shadows; leverage the multi-directional, low-opacity shadow stacks for consistent brand elevation.
- Refrain from using saturated colors for large paragraph text or backgrounds where they might compete with the vibrant accent colors.
- Do not use letter-spacing values less than -0.013em for body text; tight tracking is reserved for display typography only.
- Avoid placing text directly on top of the 'Rainbow Glow' gradient; reserve the gradient for borders or decorative fills.

### Layout

The page primarily uses a max-width contained layout, centered at around 1200px. The hero section is full-bleed with a luminous, gradient background and centered headline. Content sections follow a rhythm of spacious vertical separation (48px section gap). Content is arranged in alternating text-left/image-right patterns and multi-column card grids, emphasizing visual balance and comfortable readability. Navigation is a sticky top bar with minimal elements.

### Imagery

Imagery on Portrait is primarily photographic, featuring warm, high-key lifestyle shots often presented within contained, rounded-corner cards. Product screenshots are clean and direct, focused on displaying the UI without additional context. Decorative illustrations are used minimally, often as small, colorful accents to complement the vibrant gradients. Icons are generally outlined, matching the lightness of the UI, with strokes in Ocean Blue or Ink Black.

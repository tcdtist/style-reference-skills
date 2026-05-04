---
version: alpha
name: reboot
description: This design system evokes the precision of an architectural blueprint, meticulously rendered against stark white. Clarity is paramount, achieved through high contrast and an almost clinical absence of chromatic color. The unique use of near-invisible, outline-only components creates an airy lightness, making every element feel deliberately placed while maintaining a clean, spacious aesthetic.
colors:
  canvas-white: "#ffffff"
  type-ink: "#000000"
  subtle-gray: "#232323"
  whisper-gray: "#a7a7a7"
  outline-ash: "#e5e7eb"
  frost: "#c8c8c8"
  oceanic-blue-gradient: "#00c8fb"
  sunset-fire-gradient: "#a4341"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.8
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
components:
  hiring-badge-navigation-pill:
    role: 
  hero-text-block:
    role: 
  cta-block-with-see-work-button:
    role: 
  outline-pill-button:
    role: Primary Call to Action for secondary actions
  ghost-header-button:
    role: Navigation items and subtle actions in the header
  information-card-with-shadow:
    role: Used for featured content blocks or structured information display.
---

## Overview

**North Star:** Architectural blueprint on white marble.

This design system evokes the precision of an architectural blueprint, meticulously rendered against stark white. Clarity is paramount, achieved through high contrast and an almost clinical absence of chromatic color. The unique use of near-invisible, outline-only components creates an airy lightness, making every element feel deliberately placed while maintaining a clean, spacious aesthetic.

### Do's

- Prioritize Inter font at weights 400, 500, and 600 for all text elements to maintain a unified typographic voice.
- Utilize Type Ink (#000000) for primary text and Canvas White (#ffffff) for backgrounds to ensure AAA contrast ratios.
- Apply 9999px border-radius to all buttons and tags to consistently achieve a soft, pill-like shape.
- Employ Outline Ash (#e5e7eb) for all borders, creating a subtle, almost invisible visual separation.
- Maintain generous spacing, with section gaps and large paddings often aligning to 32px or 40px, for an airy and comfortable density.
- Use Subtle Gray (#232323) or Whisper Gray (#a7a7a7) for secondary content to create clear visual hierarchy without harshness.

### Don'ts

- Avoid strong, saturated chromatic colors in the UI; vibrant gradients are reserved only for illustrative, non-interactive elements.
- Do not use heavy, solid backgrounds for interactive components; instead, leverage transparent fills and subtle borders.
- Refrain from deviating from the Inter font family or its specified weights (400, 500, 600) for any content.
- Do not introduce sharp corners; the soft 16px or 9999px radii are a defining characteristic.
- Avoid excessive use of borders or visual dividers beyond the subtle Outline Ash, as it compromises the minimalist aesthetic.
- Do not reduce primary body text below 16px (Inter 400, 16px, 1.5 lineHeight) to ensure readability.

### Layout

The pages conform to a maximum content width, centered on a Canvas White background, creating a structured canvas. The hero section features a prominent, centered headline with a subtext below, allowing ample white space. Content sections typically alternate between left-aligned text blocks and right-aligned abstract graphics or key feature callouts. There's a consistent vertical rhythm of comfortable section gaps (often 32px or 40px). Navigation is a minimal top bar with ghost buttons, suggesting a more app-like or single-page experience.

### Imagery

This design primarily relies on abstract, illustrative graphics featuring vibrant gradients (Oceanic Blue Gradient, Sunset Fire Gradient) and occasional subtle, almost iconic imagery. There is a strong absence of photography and realistic illustrations. Icons, when present, are light and feature minimal, often outlined forms, or are simple SVG shapes. The imagery serves a decorative or conceptual role, adding splashes of visual interest without competing with the textual content, maintaining a text-dominant density.

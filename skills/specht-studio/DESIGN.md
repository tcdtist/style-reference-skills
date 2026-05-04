---
version: alpha
name: Specht Studio
description: Specht Studio employs a stark, high-contrast visual language reminiscent of a curated gallery wall. The primary interaction is through image-heavy blocks, framed by thin borders and text in a sparse, functional sans-serif. The design emphasizes content arrangement and bold typographic treatments, with color sparsely used and predominantly achromatic for navigation and core information, allowing the rich, varied artwork to provide visual interest and chromatic depth.
colors:
  black-ink: "#000000"
  midtone-gray: "#666666"
  canvas-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.3
spacing:
  elementGap: 10px
  sectionGap: 67px
components:
  navigation-link:
    role: Primary site navigation items.
  image-grid-item:
    role: Display individual portfolio pieces or art.
  project-title-link:
    role: Headline for individual project entries on the grid.
---

## Overview

**North Star:** Gallery Grid Monochrome

Specht Studio employs a stark, high-contrast visual language reminiscent of a curated gallery wall. The primary interaction is through image-heavy blocks, framed by thin borders and text in a sparse, functional sans-serif. The design emphasizes content arrangement and bold typographic treatments, with color sparsely used and predominantly achromatic for navigation and core information, allowing the rich, varied artwork to provide visual interest and chromatic depth.

### Do's

- Prioritize Canvas White (#ffffff) for all background surfaces to maintain a clean, gallery-like aesthetic.
- Use Black Ink (#000000) for all primary text, headings, and active navigation states.
- Frame interactive blocks and images with subtle 1px solid borders using Midtone Gray (#666666) or Black Ink (#000000).
- Apply normal letter-spacing for all Helvetica Neue type, avoiding condensed or expanded tracking.
- Maintain a clear visual hierarchy using spacing; utilize 10px as the default element separation and 67px for section breaks.
- Keep brand accent colors confined to embedded imagery or content rather than UI elements.

### Don'ts

- Do not use saturated colors for UI elements; chromaticity should primarily come from background content.
- Avoid heavy shadows or gradients on any UI component; elevation is achieved through framing, not depth effects.
- Do not introduce additional font families or weights beyond Helvetica Neue 400.
- Refrain from large, contrasting background blocks that break the predominantly light theme, except where content specifically dictates.
- Do not introduce complex UI elements or decorative flourishes; maintain a functional, content-focused approach.

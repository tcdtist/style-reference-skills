---
version: alpha
name: Marylou Faure
description: Marylou Faure's design system embraces a vibrant, playful energy through a stark white canvas punctuated by bold, flat blocks of color. Typography is functional and direct, primarily in black, grounding the energetic visuals. The system relies on prominent imagery, often full-bleed, to convey its character-rich, graphic-heavy style, with UI elements remaining minimal and secondary to the artwork.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal-gray: "#737373"
  illustrative-red: "#ff0000"
  playful-pink: "#ffbbff"
  sky-blue: "#72c2f2"
  blush-pink: "#f7b2de"
  vivid-pink: "#ffa3fe"
  lime-green: "#32c24d"
  cyan-blue: "#96d6ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.042px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.031px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: 0.023px
spacing:
  buttonRadius: 8px
  elementGap: 15px
  sectionGap: 33px
components:
  primary-action-button:
    role: Interactive element for key calls to action.
  ghost-circular-icon-button:
    role: Minimal interactive element, typically for navigation or utility icons.
  client-logo-grid-item:
    role: Display individual client logos.
  project-thumbnail-card:
    role: Visually rich preview for portfolio projects.
  top-navigation-link:
    role: Primary navigation items in the header.
---

## Overview

**North Star:** Vibrant canvas, graphic stories

Marylou Faure's design system embraces a vibrant, playful energy through a stark white canvas punctuated by bold, flat blocks of color. Typography is functional and direct, primarily in black, grounding the energetic visuals. The system relies on prominent imagery, often full-bleed, to convey its character-rich, graphic-heavy style, with UI elements remaining minimal and secondary to the artwork.

### Do's

- Prioritize vibrant, full-bleed imagery and color blocks for main content areas.
- Use Canvas White (#ffffff) as the dominant page background to ensure art stands out.
- Apply Ink Black (#000000) for all primary text and calls to action for high legibility.
- Maintain a clear hierarchy with Helvetica Now; use lighter weights for body, heavier for titles.
- Keep interactive elements like buttons and navigation visually minimal to not detract from artwork.
- Use 8px border-radius for all interactive buttons for a consistent, soft touch.
- Employ a base unit of 8px for all spacing measurements, defaulting to 15px for element and card gaps, and 33px for section breaks.

### Don'ts

- Do not introduce gradients or complex shadows; maintain a flat, graphic aesthetic.
- Avoid decorative borders on content elements or cards; let color blocks define sections.
- Do not use subtle color variations for background elements; embrace bold, distinct color blocks.
- Refrain from using more than two font families; Helvetica Now and GTStandard-M cover all typographic needs.
- Do not add excessive padding to images; allow them to fill their containers for visual impact.
- Avoid using additional system blues/reds/greens; stick to the established brand palette for accent colors.

### Layout

The page primarily uses a max-width contained layout for text-heavy sections, but extensively leverages full-bleed, edge-to-edge imagery and color blocks for portfolio items. The hero section introduces the brand with a text block and small artwork, followed by a grid of client logos. Subsequent sections are visually driven, presenting large, alternating full-width image blocks. Vertical rhythm is consistent with substantial section gaps (33px), creating clear visual separation between content blocks. Navigation is a minimal top bar, featuring brand name and simple textual links.

### Imagery

The visual language is dominantly illustration-based, featuring bold, organic character designs with strong outlines and flat fills. Photography, when present (e.g., product shots), is tightly cropped and focused on vibrant objects, often with a stark, single-color background or simple ice texture. Icons are filled with a medium stroke weight. Imagery plays a central role in conveying content and atmosphere, often occupying large, full-bleed areas, demonstrating a high density of visuals relative to text.

### Elevation

The design intentionally avoids shadows. Surfaces are defined by stark color blocks and crisp edges, relying on high contrast and distinct background colors to separate elements rather than depth. This flat aesthetic supports the graphic, illustrative nature of the brand.

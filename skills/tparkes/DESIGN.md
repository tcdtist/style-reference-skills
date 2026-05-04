---
version: alpha
name: Tparkes
description: Tparkes employs a stark, high-contrast digital canvas aesthetic. Typography, driven by a custom sans-serif, plays a central role, using a deliberate interplay of heavy weights and large sizes for impact, balanced by subdued text colors. Surfaces remain monochromatic, relying on deep gray and pure white for definition. The overall impression is one of directness and clarity, with UI details kept minimal to let content speak.
colors:
  canvas-white: "#ffffff"
  carbon-text: "#333333"
  smoke-gray: "#b3b3b3"
  midnight-black: "#000000"
  mist-border: "#d6d6d6"
  silver-link: "#808080"
  accent-yellow: "#f5ffbe"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 12
    letterSpacing: -0.35px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 20
    letterSpacing: -2.996px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 20
    letterSpacing: -0.595px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 26
    letterSpacing: -0.77px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 28
    letterSpacing: -0.84px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 103
    letterSpacing: -3.01px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 20px
  sectionGap: 120px
components:
  text-accent-card:
    role: Highlights specific content blocks or portfolio entries.
  header-navigation-link:
    role: Primary navigation elements in the page header.
  ghost-action-link:
    role: Interactive elements, typically for navigation or calls to explore.
  profile-avatar:
    role: User or brand identifier.
  project-preview-image:
    role: Visual representation of projects or work.
---

## Overview

**North Star:** High-contrast digital canvas.

Tparkes employs a stark, high-contrast digital canvas aesthetic. Typography, driven by a custom sans-serif, plays a central role, using a deliberate interplay of heavy weights and large sizes for impact, balanced by subdued text colors. Surfaces remain monochromatic, relying on deep gray and pure white for definition. The overall impression is one of directness and clarity, with UI details kept minimal to let content speak.

### Do's

- Use Instrumentsans ExtraBold (weight 700) for all main headings and prominent texts to convey directness.
- Maintain a clear distinction between Carbon Text (#333333) for primary content and Smoke Gray (#b3b3b3) for secondary or muted descriptions.
- Apply 12px border-radius consistently to all card-like containers, and 16px to larger image blocks.
- Ensure section gaps are consistently 120px to create ample visual breathing room between content blocks.
- Utilize Canvas White (#ffffff) as the dominant background color to maintain a bright, high-contrast appearance.
- Implement Accent Yellow (#f5ffbe) sparingly and only for card backgrounds where a distinct, soft highlight is needed.
- Use 1px solid Mist Border (#d6d6d6) for subtle dividers or outlines, avoiding heavy strokes.

### Don'ts

- Do not introduce additional background colors; maintain the primary Canvas White and occasional Accent Yellow for cards.
- Avoid using multiple font sizes for body text; stick to the defined Arial 14px for consistency.
- Do not use letter-spacing values other than the specified -0.0350em for Instrumentsans and -0.2140em for Arial.
- Do not apply shadows or complex elevation to elements; surfaces are largely flat.
- Do not use saturated or bright accent colors beyond the subtle Accent Yellow; maintain a monochrome primary palette.
- Avoid decorative gradients; surfaces should be solid colors.
- Do not deviate from the established radius values: 12px for cards, 16px for images, 8px for smaller interactive elements.

### Layout

The page primarily uses a full-bleed layout, where content sections often span the full width of the viewport. The hero section features a large, centered text block. Subsequent sections typically alternate between full-width visuals (like product screenshots) and text-dominant areas. Content within these full-width sections is not strictly constrained by a max-width, maintaining a spacious, open feel. Vertical rhythm is governed by a consistent 120px section gap, creating strong visual separation. Navigation is a simple top-right bar with minimal text links. A multi-column grid is used for displaying case studies or visual feeds, suggesting modular content blocks. The overall density is comfortable, with generous white space around elements.

### Imagery

This system features a mix of high-fidelity product screenshots, abstract geometric illustrations, and occasional outlined icons. Product screenshots are typically dark-themed, providing a stark contrast against the light UI, often full-width or large blocks, and are precisely cropped with rounded 16px corners to eliminate any extraneous context. Illustrations are flat, geometric, and monochrome, often using a distinct single brand color or dark gray on a white background, serving as decorative accents or visual metaphors. Icons are outlined, with a moderate stroke weight, and monochromatic – predominantly black or gray. Imagery serves both as decorative atmosphere and direct product showcases, maintaining a balance between aesthetic appeal and informational density.

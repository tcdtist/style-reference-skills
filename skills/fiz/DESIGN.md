---
version: alpha
name: Fiz
description: Fiz's visual identity balances stark minimalism with subtle material warmth, drawing heavily on a monochrome palette of near-black text on a muted, almost concrete-like light gray canvas. The design prioritizes readability and directness through compact typography and a deliberate lack of decorative elements. Interaction is framed by crisp, thin strokes and a single contrasting brand accent when an action is taken, focusing attention without visual clutter. The overall effect is one of quiet efficiency and grounded sophistication.
colors:
  canvas-gray: "#d1cfce"
  pure-white: "#ffffff"
  midnight-ink: "#18100c"
  muted-gray: "#696867"
  brand-black: "#000000"
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-navigation-link:
    role: Text link for primary navigation items.
  category-listing-item:
    role: Numbered link items for project categories.
  ghost-button:
    role: Secondary interactive elements, such as 'Menu' and 'Visit' buttons.
  filled-action-button:
    role: Primary call to action.
  main-logo-text:
    role: Site identifier, primary brand mark.
---

## Overview

**North Star:** architectural blueprint on concrete

Fiz's visual identity balances stark minimalism with subtle material warmth, drawing heavily on a monochrome palette of near-black text on a muted, almost concrete-like light gray canvas. The design prioritizes readability and directness through compact typography and a deliberate lack of decorative elements. Interaction is framed by crisp, thin strokes and a single contrasting brand accent when an action is taken, focusing attention without visual clutter. The overall effect is one of quiet efficiency and grounded sophistication.

### Do's

- Use Canvas Gray (#d1cfce) as the dominant page background.
- Apply Midnight Ink (#18100c) for all primary text and link text to ensure high contrast.
- Maintain a strict 0px border-radius for all interactive elements and containers, reflecting the sharp, geometric aesthetic.
- Structure all content with a base unit of 8px for element spacing and padding.
- Utilize a 1px solid border in Midnight Ink (#18100c) for 'ghost' button styles to define interactive areas without adding heavy fills.
- Implement Brand Black (#000000) solely for primary action buttons, ensuring they stand out by color and fill.
- Adhere to a compact line height of 1.2 for both Neue Haas Unica W 1 G and Inter fonts, maximizing information density.

### Don'ts

- Avoid using border-radius values other than 0px; the system is built on sharp corners.
- Do not introduce highly saturated colors for functional UI elements; color is used sparingly and deliberately.
- Do not use drop shadows or complex elevation; surfaces are flat and defined by color shifts and borders.
- Avoid large, decorative typography features in headlines or section titles; maintain the compact type scale.
- Do not use generic, unbranded text links; always ensure links either use Midnight Ink (#18100c) and are subtly distinguished.
- Do not use images or visual elements that break outside the content frame or use overly organic shapes; maintain a composed, structured layout.
- Avoid varying letter-spacing; all text should use 'normal' letter-spacing except where explicitly defined by the font itself.

### Layout

The page exhibits a contained, centered layout, where content is presented within a defined horizontal maximum width, but the background appears to expand fully. The hero section features a prominent, large visual filling a significant portion of the screen, with minimal UI elements overlaid. The overall section rhythm is consistent vertical spacing, often with strong visual separations created by distinct content blocks or imagery. Content is mostly arranged in stacked, centered blocks or text-heavy lists. Navigation is minimal, limited to a simple left-aligned text list and a few compact buttons, emphasizing content over complex site structure.

### Imagery

This site features primarily photography, often presented as large, central visual anchors. The treatment is full-bleed within a contained area, with sharp, unmasked edges, emphasizing the raw, unedited nature of the image. The photography style appears to be product-focused or process-oriented, with high-detail focus and natural lighting. Imagery serves primarily as a decorative atmosphere and content showcase, with a high visual density relative to text in the hero area, establishing a visual gravity.

### Elevation

The design system intentionally avoids shadows. Surfaces are distinguished by contrasting background colors (Canvas Gray, Pure White) and crisp 1px borders, creating a flat, architectural layering effect that prioritizes clarity over perceived depth.

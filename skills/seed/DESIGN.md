---
version: alpha
name: Seed
description: Seed's visual system evokes a natural science aesthetic: a dominant muted forest green paired with clean snow white surfaces. Typography is compact and precise, maintaining authority without visual bulk. Rounded 'pill' shapes for interactive elements soften the visual language, contrasting with the scientific rigor suggested by its content. Subtle variations in green and near-white surface colors create depth, while crisp typography and minimal embellishments keep the focus on product clarity and scientific integrity.
colors:
  forest-green: "#1c3a13"
  snow-white: "#fcfcf7"
  pale-green: "#d3fa99"
  frosted-glass: "#c4c7c4"
  warm-gray: "#eeeee9"
  charcoal-text: "#000000"
  muted-product-green: "#757c5d"
  muted-product-yellow: "#9f995b"
  muted-product-teal: "#698e79"
  ghost-button-gray: "#b3b3b3"
  dark-overlay: "#666666"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.05px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.9
    letterSpacing: -1.44px
spacing:
  cardRadius: 16px
  buttonRadius: 1584px
  elementGap: 8px
  sectionGap: 32px
components:
  primary-action-button:
    role: Main call to action
  ghost-action-button:
    role: Secondary action or link
  ghost-pill-button:
    role: Interactive navigation or filter
  nav-pill-button:
    role: Interactive navigation or filter on light backgrounds
  product-card:
    role: Displaying product information
  product-card-with-background:
    role: Featured product display
  frosted-input-field:
    role: User text input
  bestseller-badge:
    role: Product differentiator
---

## Overview

**North Star:** Forest & Snow Laboratory

Seed's visual system evokes a natural science aesthetic: a dominant muted forest green paired with clean snow white surfaces. Typography is compact and precise, maintaining authority without visual bulk. Rounded 'pill' shapes for interactive elements soften the visual language, contrasting with the scientific rigor suggested by its content. Subtle variations in green and near-white surface colors create depth, while crisp typography and minimal embellishments keep the focus on product clarity and scientific integrity.

### Do's

- Prioritize Forest Green (#1c3a13) for primary actions and key brand elements against light backgrounds.
- Use Snow White (#fcfcf7) for all primary page backgrounds and text on dark UI sections.
- Employ the 1584px border-radius for all primary buttons and interactive pill-shaped elements.
- Apply Seed Sans with appropriate letter-spacing: tighter for headlines (e.g., -1.44px at 48px), looser for body text (e.g., -0.05px at 16px).
- Maintain high contrast (minimum 7:1) for all text against its background to ensure readability.
- Use the 8px base unit for all spacing between elements, creating a comfortable density.
- Feature product imagery with a monochromatic or muted color palette to align with the brand's natural aesthetic.

### Don'ts

- Avoid using bright or overly saturated colors unless specifically for a 'Bestseller' badge or similar subtle accent.
- Do not deviate from the rounded 'pill' shape for primary interactive elements; avoid sharp corners for buttons.
- Do not introduce strong shadows or heavy elevation, as the design relies on flat or slightly frosted surfaces.
- Do not use generic system fonts; always use Seed Sans for primary text and Seed Sans Mono for technical details.
- Do not clutter layouts; maintain generous white space and an element gap of 8px to ensure visual calm.
- Do not use gradients unless explicitly defined and approved; the system relies on solid colors and subtle transparency.
- Avoid decorative imagery that clashes with the scientific, nature-inspired product focus.

### Layout

The page primarily uses a contained layout with a comfortable maximum width. The hero section often features a full-bleed visual element with text overlaid or alongside. Section rhythm is structured and alternating, with clear vertical spacing and distinct background colors (Snow White and Warm Gray). Content is arranged in alternating text-left/image-right or centered stacks. Product grids are typically 4-column structures, with cards maintaining consistent padding and radius. The navigation is a fixed top bar, often featuring pill-shaped buttons and a centered logo, contributing to a clean and accessible interface.

### Imagery

The visual language focuses on clear product photography, often with soft lighting and muted, natural color palettes. Products are typically shown contained, with minimal backgrounds, emphasizing their form and texture. Icons are largely semantic, outlined or filled, and monochrome. Imagery serves an explanatory or product showcase role, rather than decorative atmosphere. The density is balanced, allowing product visuals to breathe within a text-dominant layout.

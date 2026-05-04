---
version: alpha
name: Xandraalvarezallende
description: Xandra Álvarez Allende's visual system evokes a raw, direct artistic portfolio presentation. Bold, oversized typography dominates the canvas, creating visual tension and immediate impact. The aesthetic is stark: high-contrast black text on a pure white background, with imagery integrated as key focal points rather than decorative elements. There are no soft shadows or gradients, just direct visual statements with minimal component styling.
colors:
  canvas-white: "#fcfcfc"
  inkwell-black: "#1f1f1f"
  lavender-mist: "#c5c6f9"
  soft-graphite: "#666"
  smoke-gray: "#999"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: -0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1.1
    letterSpacing: -3.5px
  display:
    fontFamily: "system-ui"
    fontSize: 133px
    lineHeight: 1
    letterSpacing: -6.65px
spacing:
  elementGap: 20px
  sectionGap: 90px
components:
  bare-card:
    role: Container for content, particularly images or text blocks.
  call-to-action-link:
    role: Interactive text links for navigation or contact information.
---

## Overview

**North Star:** Type-driven Gallery Wall

Xandra Álvarez Allende's visual system evokes a raw, direct artistic portfolio presentation. Bold, oversized typography dominates the canvas, creating visual tension and immediate impact. The aesthetic is stark: high-contrast black text on a pure white background, with imagery integrated as key focal points rather than decorative elements. There are no soft shadows or gradients, just direct visual statements with minimal component styling.

### Do's

- Prioritize ObjectSans for all main headings and titles, using its tight letter-spacing (-0.05em) and bold weights (400, 700) to create immediate impact.
- Maintain a stark, high-contrast palette: use Inkwell Black (#1f1f1f) for all primary text and Canvas White (#fcfcfc) for backgrounds.
- Apply 0px border-radius universally to maintain sharp, unadorned edges for all components and images.
- Use a base unit of 20px for horizontal padding within content blocks and for spacing between main elements.
- Introduce clear section breaks with a 90px vertical gap between distinct content groups.
- Reserved colorful emojis (e.g., 🤠, 👀) should be used judiciously within headlines or key phrases, adding personality directly into the typographic system.
- Border images and list items with a 1px solid Inkwell Black (#1f1f1f) stroke to subtly define their edges.

### Don'ts

- Avoid using decorative shadows or gradients; the design relies on flat surfaces and high contrast.
- Do not introduce rounded corners; maintain 0px radius for all elements.
- Do not deviate from the core color palette; avoid introducing additional saturated or muted tones for UI elements.
- Avoid excessive use of imagery that distracts from the core content; imagery should be integrated directly into the layout as focal points.
- Do not use generic system fonts for display text; 'ObjectSans' is fundamental to the brand's visual identity.
- Do not overcrowd the layout; maintain significant white space and use defined spacing tokens to create breathing room.
- Avoid adding unnecessary dividers or visual embellishments; let typography and imagery speak for themselves.

### Layout

The page employs a full-bleed layout without a fixed maximum width, allowing content to stretch across the viewport. The hero section features oversized, centered headlines against a white background, creating immediate visual dominance. Content is arranged in large, asymmetric blocks, often with a dominant text block on one side and an accompanying image on the other. Vertical rhythm is established through generous 90px section gaps. The grid usage is implicit, with large content areas defining their own boundaries rather than adhering to a strict column grid. The navigation is minimal, likely restricted to a footer or implied by the direct content flow.

### Imagery

The visual language is photographic, featuring candid or art-directed shots of people. Images are treated as embedded content blocks, bordered by a thin Inkwell Black (#1f1f1f) stroke rather than blending into the background, and have sharp, unrounded edges. They serve as direct visual statements, often showcasing human emotion or interaction, and occupy significant visual space relative to the text. The treatment is naturalistic; there are no heavy filters or overt stylistic manipulations, allowing the intrinsic mood of the photography to convey atmosphere.

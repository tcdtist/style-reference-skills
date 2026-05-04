---
version: alpha
name: Bee Home
description: Bee Home's design system evokes a handcrafted blueprint aesthetic, combining structured layouts with an organic, tactile feel. Predominantly monochrome with subtle creams and charcoal grays, the visual system suggests natural materials and understated functionality. Typography uses a single confident, yet friendly, sans-serif, often in outlined states for interactive elements. Components prioritize soft edges and a light touch, focusing on content over heavy decoration.
colors:
  inkwell-black: "#2a2920"
  canvas-cream: "#e9e9e1"
  linen-white: "#ffffff"
  stone-gray: "#d3d3ce"
  text-secondary-dim: "#2a29208a"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
spacing:
  cardRadius: 22px
  buttonRadius: 38px
  elementGap: 6px
  sectionGap: 40px
components:
  pill-ghost-button-inkwell-text:
    role: Primary Call to Action
  pill-ghost-button-canvas-text:
    role: Secondary Call to Action, Navigation
  underlined-text-button:
    role: Tertiary Action, Inline Navigation
  content-card-linen-white:
    role: Categorized Content Display
  content-card-canvas-cream:
    role: Categorized Content Display
  content-card-stone-gray:
    role: Categorized Content Display
---

## Overview

**North Star:** natural blueprint, organic craft

Bee Home's design system evokes a handcrafted blueprint aesthetic, combining structured layouts with an organic, tactile feel. Predominantly monochrome with subtle creams and charcoal grays, the visual system suggests natural materials and understated functionality. Typography uses a single confident, yet friendly, sans-serif, often in outlined states for interactive elements. Components prioritize soft edges and a light touch, focusing on content over heavy decoration.

### Do's

- Use Neue Haas Unica W1G weight 400 for all text, maintaining a consistent brand voice without font variation.
- Prioritize Canvas Cream (#e9e9e1) and Inkwell Black (#2a2920) for ghost button borders and primary text to highlight interactive elements.
- Apply a 38px border-radius to all interactive buttons and navigation items for a distinct pill shape.
- Use 22px border-radius for cards, applied only to the top corners, to create a consistent grounded element.
- Employ a 2px solid border for all strokes, borders, and outlined elements to maintain the handcrafted aesthetic.
- Maintain a compact spacing rhythm, with element gaps typically around 6px and card padding at 20px.
- Utilize Inkwell Black for primary text and headings, providing strong legibility against cream and white backgrounds.

### Don'ts

- Avoid using box-shadows or significant elevation; maintain a flat, natural surface aesthetic.
- Do not introduce additional font weights or families; Neue Haas Unica W1G 400 is the only typographic choice.
- Steer clear of vivid or vibrant colors; the palette is strictly monochrome with muted, natural tones.
- Do not use sharp 0px radii for cards or buttons, unless it explicitly represents an underlined text link.
- Avoid large empty spaces; maintain a compact information density across layouts.
- Do not add gradients or complex background fills; surfaces should be solid, single colors.

### Layout

The page primarily uses a max-width contained layout, though the hero section is full-bleed. The hero features a centered headline over a background image of the product. Subsequent sections alternate between full-width typographic elements and a grid-based content consumption. A common pattern is a 2-column layout for text and image; images are often treated as cards with specific radii. Vertical spacing is consistent but compact, creating a flowing, unified experience. Navigation is a top-bar sticky header with ghost buttons, converting to a hamburger menu on smaller screens or specific interactions. A consistent feature is the use of large, stylized typographic elements acting as visual dividers or section headlines.

### Imagery

The imagery is split between stylized product photography and lifestyle photography. Product shots feature the bee home modules as wooden architectural models, precisely lit against a warm, neutral background, emphasizing craftsmanship and material. Lifestyle photography features people engaged in creative or natural activities. All images are contained within rounded (22px) card frames, or integrated seamlessly as background textures for hero sections. Icons are minimal, outlined, and monochromatic, matching the overall subdued aesthetic. Imagery serves both decorative atmosphere and explanatory content, often pairing human activity with the product ethos.

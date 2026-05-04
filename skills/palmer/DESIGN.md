---
version: alpha
name: Palmer
description: Palmer embraces a tactile, gallery-like aesthetic, presenting dinnerware as curated art objects on an expansive, warm off-white canvas. The visual system is anchored by deep, earthy neutrals that provide a grounded contrast to the product photography. Typography is delicate yet authoritative, using generous letter-spacing to emphasize its custom font. Interaction elements are subtle and demure, blending into the background through ghosted styles and soft, rounded edges, allowing the product to remain the sole focal point.
colors:
  canvas-creme: "#f5f6ee"
  inkwell: "#222222"
  chalk-white: "#ffffff"
  shadow-grey: "#a1a19c"
  deep-licorice: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: -0.44px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.42px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.9
    letterSpacing: -4.8px
spacing:
  cardRadius: 9px
  buttonRadius: 0px
  elementGap: 12px
  sectionGap: 80px
components:
  ghost-button:
    role: Default interactive element, secondary actions
  dark-overlay-button:
    role: Navigation and primary controls
  product-card:
    role: Displaying individual dinnerware pieces
  circular-tag:
    role: Filters and categorization
---

## Overview

**North Star:** Warm gallery space

Palmer embraces a tactile, gallery-like aesthetic, presenting dinnerware as curated art objects on an expansive, warm off-white canvas. The visual system is anchored by deep, earthy neutrals that provide a grounded contrast to the product photography. Typography is delicate yet authoritative, using generous letter-spacing to emphasize its custom font. Interaction elements are subtle and demure, blending into the background through ghosted styles and soft, rounded edges, allowing the product to remain the sole focal point.

### Do's

- Prioritize Canvas Creme (#f5f6ee) as the primary background for all content, creating an airy, gallery-like feel.
- Use Inkwell (#222222) for all primary body text, headings, and interactive element borders.
- Apply TWK Lausanne with generous letter-spacing (-0.0200em to -0.0400em) to all textual elements, emphasizing its custom, refined character.
- Employ ghosted button styles for most interactive elements, using `background-color: transparent` and a thin Inkwell (#222222) border.
- Maintain a clear elementGap of 12px for spacing between most UI elements, supporting a comfortable density.
- Utilize a 9px border-radius for softer contained elements, otherwise prefer 0px for sharp, clean edges as seen on some cards and buttons.
- For top-level navigation, use Deep Licorice (#000000) as background for strong visual anchors. They should be compact with 7px padding and a 3px border radius.

### Don'ts

- Avoid strong, saturated colors for UI elements; color should primarily come from product photography.
- Do not use heavy shadows or distinct background colors for product cards; let the product imagery and its built-in shadows define elevation.
- Resist using tight letter-spacing on any font; the ample spacing of TWK Lausanne is a core part of the brand identity.
- Do not introduce complex gradients or textures into UI backgrounds or components; surfaces should remain flat and monochromatic.
- Refrain from using bold type weights for emphasis in body copy; weight 300-500 should dominate to maintain the delicate aesthetic.

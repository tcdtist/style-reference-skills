---
version: alpha
name: Mother Design
description: Mother Design operates with a high-contrast, starkly typographic visual system, channeling the precision of an architectural drawing onto a white canvas. Its deliberate use of un-styled text as clickable elements, minimal decorative elements, and strong grid lines defines a no-frills, functional aesthetic. Typography carries the primary visual weight, with large, confident headlines and tightly tracked text emphasizing clarity and directness. The overall feeling is one of structural rigor and intentional simplicity, where content and interaction are prioritized over visual embellishment.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  smoke-grey: "#f4f4f4"
  muted-stone: "#808080"
  divider-line: "#262626"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.01px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 110px
    lineHeight: 1
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 226px
    lineHeight: 1
    letterSpacing: -0.04px
spacing:
  elementGap: 20px
  sectionGap: 200px
components:
  navigation-link:
    role: Text-based navigation item in header
  subtle-accent-button:
    role: Button with background but no visible border or padding beyond text.
  ghost-bordered-button:
    role: Transparent button with 1px black border. Used for generic interactive elements.
  muted-ghost-button:
    role: Transparent button with grey text and border, indicating a less prominent action or disabled state.
  input-field:
    role: Standard text input field
  project-card:
    role: Container for portfolio items or content blocks
---

## Overview

**North Star:** Architectural blueprint on white marble

Mother Design operates with a high-contrast, starkly typographic visual system, channeling the precision of an architectural drawing onto a white canvas. Its deliberate use of un-styled text as clickable elements, minimal decorative elements, and strong grid lines defines a no-frills, functional aesthetic. Typography carries the primary visual weight, with large, confident headlines and tightly tracked text emphasizing clarity and directness. The overall feeling is one of structural rigor and intentional simplicity, where content and interaction are prioritized over visual embellishment.

### Do's

- Prioritize Ink Black text (#000000) on Canvas White (#ffffff) backgrounds for maximum contrast and essential information.
- Use Basis font for all textual content, adjusting weights and letter-spacing for hierarchy as defined in the typography section.
- Define interactive areas primarily through 1px Ink Black (#000000) borders and text-based links, rather than strong background fills.
- Maintain a default border-radius of 0px across all components to reinforce the sharp, precise aesthetic.
- Employ Smoke Grey (#f4f4f4) sparingly for subtle section breaks or secondary surface differentiation, always contrasting with Ink Black text.
- Use Muted Stone (#808080) for helper text, disabled states, or less prominent links.
- Implement the 20px elementGap consistently for horizontal and vertical spacing between most elements.

### Don'ts

- Avoid using gradients or shadows; the design relies on flat, high-contrast surfaces and sharp edges.
- Do not use background colors on primary buttons; rely on borders and text color for interaction cues.
- Refrain from introducing decorative imagery that deviates from the grid-like, monochromatic aesthetic.
- Do not use rounded corners on any elements; all corners should be sharp 0px radius.
- Avoid excessive use of color; the system is built on a neutral palette with minimal accentuation.
- Do not vary line-height significantly from the defined values in the typography section; maintain tight leading.
- Avoid large internal padding on interactive elements; content should often sit close to implied borders.

### Layout

The page adheres to a full-bleed layout, where content stretches to the viewport edges, creating a continuous canvas. The hero section is characterized by large, impactful typography that extends across the full width. Section rhythm is driven by sharp, 1px Ink Black (#000000) horizontal and vertical dividing lines, creating a visual grid system often with large whitespace blocks. Content is arranged in alternating patterns, frequently split into two main columns, with text-heavy blocks contrasting with image or embedded video blocks. The layout emphasizes strong vertical alignment and horizontal flow, with extensive use of 1px borders to define content areas. Navigation is a minimalist top-bar, fixed and sticky, composed of text links and ghost buttons. Density varies, with large headlines and ample whitespace on some sections, while others present information in more compact, grid-based arrangements.

### Imagery

The site uses a mix of high-quality product photography and occasionally vibrant, conceptual illustrations within its portfolio pieces, but these are largely contained within defined content blocks. UI-wise, imagery is minimal and serves a functional or demonstrative purpose. Photography is typically clean, with subjects clearly delineated; illustrations lean towards bold, often abstract forms within a specific brand's palette. Icons are outlined, Ink Black (#000000) on Canvas White (#ffffff), maintaining the high-contrast aesthetic with a very fine stroke weight. Imagery is contained, often within implicit 0px radius cards, and does not overlap elements. The density is relatively high, with images and text often occupying equal visual space in a balanced, grid-like manner.

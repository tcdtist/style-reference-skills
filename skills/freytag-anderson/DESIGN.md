---
version: alpha
name: Freytag Anderson
description: Freytag Anderson employs a minimalist, high-contrast aesthetic, building a visual language of quiet authority. Its dark-mode foundation with stark white typography creates dramatic legibility, while purposeful negative space and a constrained color palette emphasize content and text as primary visual elements. Interactions are subtle, relying on hover states and minimal accents rather than overt visual cues, conveying a sense of understated confidence.
colors:
  canvas-dark: "#000000"
  canvas-light: "#fafafa"
  elevated-dark: "#1c1c1c"
  subtle-dark: "#141109"
  muted-ui-gray: "#dcdcdc"
  warm-hint-gray: "#c2b5ae"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 41px
    lineHeight: 1.2
spacing:
  cardRadius: 0px
  buttonRadius: 300px
  elementGap: 17px
  sectionGap: 43px
components:
  primary-filled-button:
    role: Main call-to-action button, conveying prominence through fill.
  ghost-button:
    role: Secondary action or navigation element, minimal visual weight.
  feature-card:
    role: Group related content without adding visual noise.
  text-link:
    role: Interactive text for navigation or references.
---

## Overview

**North Star:** Black canvas, stark typography

Freytag Anderson employs a minimalist, high-contrast aesthetic, building a visual language of quiet authority. Its dark-mode foundation with stark white typography creates dramatic legibility, while purposeful negative space and a constrained color palette emphasize content and text as primary visual elements. Interactions are subtle, relying on hover states and minimal accents rather than overt visual cues, conveying a sense of understated confidence.

### Do's

- Prioritize text content and layout over decorative elements.
- Use Canvas Dark (#000000) for all main backgrounds and Canvas Light (#fafafa) for primary text in reversed contexts.
- Maintain high contrast ratios for all text elements.
- Apply 0px radius for all general containers and cards to maintain a sharp, deliberate edge.
- Use FAVORIT font for all body text and headings in varying sizes and weights, leveraging its clean, versatile character.
- Ensure generous negative space around all content blocks, using 17px as a base element gap.
- Employ the 300px radius for all interactive buttons and tags, creating a distinctive pill shape.

### Don'ts

- Do not introduce strong accent colors; maintain the achromatic palette.
- Avoid using drop shadows or complex gradients; rely on flat surfaces and high contrast for visual hierarchy.
- Do not deviate from the specified font families; avoid generic system fonts.
- Do not add unnecessary borders or dividers; rely on spacing and typography for content separation.
- Avoid large imagery or elaborate illustrations; focus on text and minimal UI elements.
- Do not use generic button shapes; ensure all buttons adhere to the pill-shaped 300px radius.
- Avoid horizontal padding on cards; keep card content flush unless explicitly specified.

### Layout

The page maintains a full-bleed layout, taking advantage of the dark background. The hero section features large, centered headlines over a dynamic, dark motion background. Content sections flow vertically with consistent, spacious internal padding, often featuring large, centered text blocks or a more traditional left-aligned text approach within the dark canvas. There are no clear card grids on the main page, reinforcing the text-heavy, spacious feel. Navigation is minimal, typically a subtle right-aligned menu icon leading to an overlay.

### Imagery

The site primarily uses photography, often treated with a dark, moody filter and motion blur, conveying a dynamic atmosphere rather than static content. When clear, imagery appears as full-bleed background elements under text. Product imagery, if present, would likely be integrated subtly or presented with minimal adornment. Icons are minimal, represented by simple geometric shapes (e.g., a hamburger menu icon). The density is text-dominant, with imagery serving as an atmospheric backdrop.

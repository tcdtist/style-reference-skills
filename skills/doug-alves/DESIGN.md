---
version: alpha
name: Doug–Alves
description: Doug–Alves presents a stark, high-contrast digital portfolio. Its design language is driven by highly structured, compact typography that carves out information on a dark plane, occasionally giving way to white canvases. The interaction design emphasizes functional clarity over ornamental flourishes, using subtle transitions and strong typographic scale to create visual rhythm.
colors:
  ink: "#282828"
  canvas: "#ffffff"
  deep-space: "#000000"
  charcoal: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
    letterSpacing: -0.003px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.04
    letterSpacing: -0.014px
  heading:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.29
    letterSpacing: -0.021px
  display:
    fontFamily: "system-ui"
    fontSize: 197px
    lineHeight: 1
    letterSpacing: -0.033px
spacing:
  elementGap: 24px
  sectionGap: 64px
components:
  information-card-group:
    role: Container for related text and links, often appearing in horizontal grids.
  text-link:
    role: Interactive text elements.
  header-title:
    role: Prominent page titles and section headers.
---

## Overview

**North Star:** Type-driven architectural blueprint

Doug–Alves presents a stark, high-contrast digital portfolio. Its design language is driven by highly structured, compact typography that carves out information on a dark plane, occasionally giving way to white canvases. The interaction design emphasizes functional clarity over ornamental flourishes, using subtle transitions and strong typographic scale to create visual rhythm.

### Do's

- Prioritize wtqc font family for all primary headings, leveraging its strong letter-spacing and weight variations for visual impact.
- Maintain a strict color palette of Ink (#282828) for most text and dark backgrounds, and Canvas (#ffffff) for light canvases and contrasting text.
- Use 0px border-radius for informational cards and sections, allowing typography and internal spacing to define boundaries.
- Apply precise letter-spacing values to wtqc typography at all sizes, especially for large headings, to preserve its distinctive crispness.
- Employ the compact Inter font for body text to maintain density and readability within content blocks.

### Don'ts

- Avoid decorative gradients or vivid colors; the system relies on high contrast and typographic hierarchy.
- Do not introduce box-shadows on cards or standard interface elements; maintain a flat, architectural surface aesthetic.
- Refrain from using common rounded button styles; interactive elements are primarily text-based or minimal-border outlines.
- Do not deviate from the defined letter-spacing values for wtqc; this is a signature characteristic of the branding.
- Avoid excessive whitespace; the design is compact, leveraging density to present information efficiently.

### Layout

The page structure balances full-bleed dark sections with contained, maximal-width light sections. The initial hero pattern features a monumental, centered headline against a dark background. Content sections flow with a consistent vertical rhythm, lacking overt visual dividers between logically grouped information blocks. Content arrangement often appears in a grid-like or tabular structure, particularly for biographical and experience details. There is no rigid max-width for the entire page; some elements stretch edge-to-edge while others are implicitly contained by text width. Navigation is minimal and integrated into the footer-like areas, with links existing as part of information groups rather than a distinct, persistent header.

### Imagery

This design system primarily relies on crisp, functional UI elements rather than prominent imagery. When visuals are present, they are either abstract and minimal (like the image of a binder with text) or highly focused product-like shots. Imagery serves an explanatory or showcase role, not decorative atmosphere. Photography is high-key, product-focused, and tightly cropped. Icons are not explicitly defined in the data but can be inferred as minimal and functional, likely monochromatic to match the system's overall restraint. The density is text-dominant with visuals supporting the content, not dictating the layout.

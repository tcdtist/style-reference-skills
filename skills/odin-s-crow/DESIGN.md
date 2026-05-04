---
version: alpha
name: Odin's Crow
description: Odin's Crow embodies a stark, architectural minimalism, using an off-white canvas and deep charcoal typography to establish a sophisticated, almost ledger-like aesthetic. The design relies heavily on strong typographic expressions and precise, thin linear elements to define structure and create rhythm rather than relying on heavy panels or shadows. Visual interest is achieved through scale and exact letter-spacing, with a complete absence of vibrant color in the primary interface to maintain a focused, no-nonsense atmosphere.
colors:
  canvas-bone: "#e5e7eb"
  carbon-ink: "#2b2b2b"
  faded-stone: "#e5d5c3"
  pale-driftwood: "#cdc0b1"
  cloud-gray: "#c9c8c9"
  muted-ash: "#afa7a2"
  graphite-line: "#535251"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.11
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.08
    letterSpacing: -0.85px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1
    letterSpacing: -1.05px
  display:
    fontFamily: "system-ui"
    fontSize: 190px
    lineHeight: 1
    letterSpacing: -4.75px
spacing:
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-button:
    role: Interactive element
  underlined-input-field:
    role: Form input
  minimal-badge:
    role: Decorative/Informational Tag
---

## Overview

**North Star:** Minimalist ledger, sharp lines

Odin's Crow embodies a stark, architectural minimalism, using an off-white canvas and deep charcoal typography to establish a sophisticated, almost ledger-like aesthetic. The design relies heavily on strong typographic expressions and precise, thin linear elements to define structure and create rhythm rather than relying on heavy panels or shadows. Visual interest is achieved through scale and exact letter-spacing, with a complete absence of vibrant color in the primary interface to maintain a focused, no-nonsense atmosphere.

### Do's

- Prioritize Canvas Bone (#e5e7eb) as the dominant background color for all primary page surfaces.
- Use Carbon Ink (#2b2b2b) for all primary text, ensuring high contrast and a consistent dark typography.
- Employ the 'Plain' typeface exclusively for all text, manipulating size, weight, and letter-spacing to establish hierarchy.
- Utilize 0px border-radius for all UI elements to maintain a sharp, angular aesthetic.
- Define section boundaries and information blocks using subtle background color shifts (Faded Stone #e5d5c3, Pale Driftwood #cdc0b1) or thin Graphine Line (#535251) borders, not heavy outlines or shadows.
- Apply precise letter-spacing from the token list (-0.0500em to -0.0250em) to larger text sizes for brand consistency.
- Maintain generous vertical spacing between content blocks (40px sectionGap) and elements (20px elementGap) to create a sparse, comfortable density.

### Don'ts

- Do not introduce vibrant or saturated colors into the main UI; reserve them purely for semantic states if necessary, or illustrative purposes.
- Avoid using any drop shadows or heavy elevation styles; the design relies on flat surfaces and line work for depth.
- Do not use border-radius values other than 0px for any interactive or display elements.
- Refrain from using any additional typefaces; the 'Plain' font is fundamental to the brand's typographic identity.
- Do not create complex backgrounds or textures; the visual system is based on clean, uniform color fields.
- Avoid tight, information-dense layouts; the design prioritizes breathing room and a minimalist presentation.
- Do not use generic, unstyled buttons; all interactive elements should conform to ghost or underlined styles.

### Layout

The page structure is fundamentally a centered, contained layout, although a specific max-width is not defined for the overall page, implying content may stretch across the viewport for certain elements like text. The hero section appears as a full-bleed block with a dominant, oversized centered headline and linear decorative elements. Sections follow a consistent vertical rhythm, primarily relying on significant vertical white space (40px section gap) and subtle background color changes between blocks rather than explicit dividers. Content arrangement leans towards centered stacks of text with prominent headlines and thin lines used as visual separators or accents. Navigation is minimal, likely a top-left logo and functional links, emphasizing a clear, no-distraction user journey. The density is spacious, reflecting a deliberate choice for clarity over information overload.

### Imagery

This design system uses imagery extremely sparingly, if at all, prioritizing a text-dominant and stark UI. If photography or graphics are used, they should likely be monochromatic or heavily desaturated, maintaining the understated, authoritative tone. Icons, if present, would be minimalist, outlined, and in Carbon Ink, serving purely functional roles without decorative embellishment. The density of imagery is extremely low, focusing on pure UI.

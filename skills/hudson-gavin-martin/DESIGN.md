---
version: alpha
name: Hudson Gavin Martin
description: Hudson Gavin Martin uses a structured, grid-based layout with strong black borders defining content areas. A minimal, formal typography set is contrasted by occasional bursts of subtle, tinted surface colors, creating a sense of organized professionalism with approachable accents. The overall feel is that of an architectural blueprint, where clean lines and precise boundaries dictate visual flow and hierarchy.
colors:
  ink-black: "#000000"
  cloud-white: "#ffffff"
  carbon-gray: "#333333"
  ash-gray: "#797979"
  sky-tint: "#ecf1fb"
  rose-tint: "#fff3f5"
  mint-tint: "#f1fbf6"
  forest-green: "#00ac38"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: 0.033px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.75
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.11
    letterSpacing: -0.018px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
    letterSpacing: -0.018px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.24
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1.08
    letterSpacing: -0.018px
spacing:
  elementGap: 6px
  sectionGap: 40px
components:
  ghost-button:
    role: Primary action button for key calls to action.
  thematic-content-card:
    role: Categorized content blocks with distinct background tints.
  standard-content-card:
    role: General content blocks that fit into the grid.
  text-link-with-arrow:
    role: Navigational links within content, guiding users to deeper information.
  header-navigation-link:
    role: Main site navigation.
---

## Overview

**North Star:** Architectural blueprint on white canvas.

Hudson Gavin Martin uses a structured, grid-based layout with strong black borders defining content areas. A minimal, formal typography set is contrasted by occasional bursts of subtle, tinted surface colors, creating a sense of organized professionalism with approachable accents. The overall feel is that of an architectural blueprint, where clean lines and precise boundaries dictate visual flow and hierarchy.

### Do's

- Always define vertical and horizontal content separation with 1px solid Ink Black (#000000) borders.
- Use Tiempos Headline Web (400, 50px, normal letter-spacing, 1.24 lineHeight) for primary page-level headings to convey authority.
- Apply specific background tints (Sky Tint #ecf1fb, Rose Tint #fff3f5, Mint Tint #f1fbf6) to content cards to delineate thematic sections within the main grid.
- Ensure all interactive elements, including buttons and card links, have a border radius of 0px to maintain the sharp, architectural aesthetic.
- Employ Helvetica Neue LT Pro (400, 12px, 0.040em letter-spacing) for all compact labels and button text for legibility at small sizes.
- Maintain 6px as the default `elementGap` between small, inline elements to preserve density and visual grouping.

### Don'ts

- Avoid using rounded corners; the system strongly relies on a 0px border-radius across all components for its structured feel.
- Do not use drop shadows or elevation effects; the design emphasizes flat surfaces and defined borders for depth.
- Do not introduce new vibrant colors outside of the defined thematic accent and very limited brand green; the palette is intentionally restrained.
- Do not use generic system fonts when custom fonts are specified; font choices are critical to establishing the brand's formal yet modern tone.
- Avoid overly spacious layouts; the design prioritizes a comfortable but contained density, particularly with `elementGap` at 6px and `cardPadding` at 30px.
- Do not use filled buttons for primary actions; the system prefers ghost buttons with strong borders to maintain visual lightness and structure.

### Layout

The page adheres to a strong, box-model layout with both full-bleed and max-width sections typically framed by prominent Ink Black borders. The hero section often features a split layout: conceptual imagery on one side and a prominent headline stack with a ghost button on the other. Subsequent sections are highly grid-based, using 2- or 3-column arrangements for content cards and thematic blocks. Vertical rhythm is established through consistent section gaps and strong horizontal dividers. Navigation is minimal, typically a 'MENU' button in the top right that likely triggers an off-canvas or full-screen overlay.

### Imagery

The site utilizes product-focused photography and graphic elements that emphasize conceptual clarity. Photography primarily features hands in symbolic gestures, often isolated against a clean white background, treated minimally without heavy effects. This imagery serves as conceptual metaphors rather than decorative elements. Icons are typically single-color (Ink Black) outlined, reflecting the overall minimalist and structured aesthetic. The density of imagery is balanced, providing visual breaks but remaining subservient to the strict grid and typographic hierarchy.

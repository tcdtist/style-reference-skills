---
version: alpha
name: Numbered
description: Numbered employs a deep, high-contrast visual system, where stark black canvases provide a dramatic backdrop for crisp white typography and subtle, refined interactions. The design uses spacious layouts and minimal ornamentation, allowing large-scale imagery and bold headlines to dominate. Interactive elements are understated, relying on elegant hover states rather than overt visual cues, contributing to a premium, editorial aesthetic.
colors:
  canvas-black: "#111111"
  ghost-white: "#ffffff"
  muted-ash: "#4f4f4f"
  desert-sand: "#bc9873"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1.3
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 20px
  sectionGap: 99px
components:
  ghost-border-button:
    role: Call to action or navigation links.
  content-card:
    role: Displaying featured work or case studies.
  navigation-link:
    role: Top-level navigation items or footer links.
---

## Overview

**North Star:** Shadowy Gallery Canvas

Numbered employs a deep, high-contrast visual system, where stark black canvases provide a dramatic backdrop for crisp white typography and subtle, refined interactions. The design uses spacious layouts and minimal ornamentation, allowing large-scale imagery and bold headlines to dominate. Interactive elements are understated, relying on elegant hover states rather than overt visual cues, contributing to a premium, editorial aesthetic.

### Do's

- Prioritize Canvas Black (#111111) as the default background for all sections to maintain a high-contrast dark theme.
- Use Ghost White (#ffffff) for all primary text, headlines, and interactive element outlines.
- Apply aktiv-web (or Inter) font at various sizes, ensuring body text remains legible on the dark background.
- Maintain a spacious layout with a section gap of 99px to emphasize content separation and visual breathing room.
- Utilize 0px border-radius for all elements, including buttons and cards, to enforce the sharp, modern aesthetic.
- Employ minimal borders of 1px solid Ghost White (#ffffff) for interactive elements, focusing on subtle visual cues.
- Leverage large-scale, striking imagery as primary visual content within sections, allowing them to bleed to the edges.

### Don'ts

- Do not introduce overt border-radius on any components; adhere to the sharp, angular aesthetic with 0px radius.
- Avoid using drop shadows or heavy box-shadows, as the design relies on flat surfaces and high contrast.
- Refrain from adding vibrant or numerous accent colors; the system is built on a restrained, monochromatic palette with minimal accentuation.
- Do not use generic system fonts when aktiv-web (or Inter) is available, as the specific font style contributes significantly to brand identity.
- Avoid tight spacing; maintain the generous sectionGap of 99px and general spaciousness.
- Do not add filled button variants; interactive elements should primarily be ghosted outlines or text links.
- Do not introduce unnecessary dividers or heavy visual separators between content blocks; rely on background color changes and generous spacing.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections and large image blocks, filling the entire viewport horizontally. Content within sections, when not full-bleed imagery, is typically constrained by a maximum width and centered, allowing for visual breathing room on the sides. The hero pattern often involves large, striking photography with white, often serif, text overlaid, creating an editorial masthead feel. Sections generally flow vertically with consistent, generous spacing (99px section gap), providing a clean rhythm. Content arrangement frequently alternates between large visual blocks and stacked text sections, sometimes with implied two-column structures for text-heavy areas. There is no explicit grid for cards but content blocks are large and distinct. Navigation is a minimal top-right 'Contact' button, with a full-page menu invoked for comprehensive navigation.

### Imagery

The site features high-quality, large-format photography and product shots, often full-bleed or occupying significant visual space. Imagery is treated realistically, focusing on natural light and candid moments for lifestyle shots, or clean, well-lit product focus for case studies. There are no overt graphic treatments like duotones or heavy filters; images maintain their natural color and detail. The role of imagery is primarily decorative atmosphere and showcasing client work, rather than explanatory diagrams or abstract graphics. Density is image-heavy, with full-screen visuals interspersed with text.

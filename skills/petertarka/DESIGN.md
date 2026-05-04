---
version: alpha
name: Petertarka
description: Petertarka's visual system evokes a gallery of abstract works: a muted, almost achromatic canvas where individual 'art pieces' (product showcases) are presented in their own vibrantly colored, often 3D-rendered, contexts. The UI itself is minimalist, relying on precise typography and stark line borders rather than heavy shadows or complex gradients. The spacious layout creates a sense of gravitas and focuses attention on the central visual content, punctuated by crisp, interactive elements.
colors:
  phantom-ink: "#000000"
  fog-bound: "#d8d8d8"
  canvas-gray: "#f0f0f0"
  paper-white: "#ffffff"
  sky-gradient: "#77c1e5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.32
  body-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.32
  body:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.3
spacing:
  elementGap: 6px
components:
  main-navigation-button:
    role: Hamburger menu button for main navigation
  project-card:
    role: Container for individual project showcases
  project-card-transparent:
    role: Alternative container for specific project showcases, overlays visual content
---

## Overview

**North Star:** Gray canvas, vivid art

Petertarka's visual system evokes a gallery of abstract works: a muted, almost achromatic canvas where individual 'art pieces' (product showcases) are presented in their own vibrantly colored, often 3D-rendered, contexts. The UI itself is minimalist, relying on precise typography and stark line borders rather than heavy shadows or complex gradients. The spacious layout creates a sense of gravitas and focuses attention on the central visual content, punctuated by crisp, interactive elements.

### Do's

- Employ GT America for all typographic elements, prioritizing weights 200-400 for a precise feel.
- Maintain a strict 0px border-radius for all UI elements to uphold the stark, architectural aesthetic.
- Use #000000 for primary text and critical interactive borders.
- Utilize #f0f0f0 for all background surfaces of content blocks and cards.
- Ensure generous padding of 45px within card-like components to frame content effectively.
- Construct layouts with substantial vertical separation, mirroring the ~720px section gaps found between project articles.
- Favor ghost-style interactive elements with stark #000000 borders and transparent backgrounds.

### Don'ts

- Avoid using curved borders or any border-radius greater than 0px.
- Do not introduce shadows or elevation effects; maintain a flat, layered appearance.
- Refrain from adding additional accent colors outside of the contextual usage within embedded content; the UI should remain achromatic.
- Do not use subtle variations of gray for text; stick to #000000 for all primary text content.
- Avoid dense or compact layouts; maintain ample whitespace for a gallery-like presentation.

### Layout

The page adheres to a full-bleed grid layout, where content sections (project cards) span the full width of the viewport. There is no central max-width container, giving a sense of expansive space. The hero section is characterized by a prominent visual taking up a large portion of the initial viewport. Sections stack vertically with significant and consistent spacing, presenting a rhythmic, almost modular progression. Content within sections is often implicitly split into visual and textual areas, but the overall structure emphasizes the contained visual artwork. Navigation is minimal, typically a top-right hamburger menu. The layout feels like a vertical gallery, with each 'artwork' given ample room to breathe.

### Imagery

This site prominently features highly stylized, often surreal 3D illustrations and renders as its core content. These visuals are typically contained within the 0px-radius project cards, occupying significant visual space. The imagery is diverse in color and composition, ranging from vibrant, cartoonish scenes to more abstract, textured pieces, with a strong emphasis on clean digital rendering. Product screenshots or photography are minimal, and when present, are integrated seamlessly into the rendered scenes. Icons are minimal, appearing only for UI elements (like the hamburger menu) in a simple, outlined style.

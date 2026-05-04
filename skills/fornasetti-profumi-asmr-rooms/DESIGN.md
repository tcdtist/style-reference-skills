---
version: alpha
name: Fornasetti Profumi ASMR Rooms
description: Fornasetti Profumi ASMR creates a deeply immersive, almost reverent atmosphere through its use of a pure black canvas and delicate, antique-inspired typography. The UI is exceptionally sparse, relying on subtle outlined interactive elements and minimal text to guide the user. The aesthetic is one of quiet luxury and focused attention, where UI elements are barely-there whispers rather than prominent features.
colors:
  midnight-canvas: "#000000"
  antique-ivory: "#ffffff"
  shadowed-slate: "#4d4d4d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.3
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.3
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
spacing:
  elementGap: 8px
components:
  ghost-circular-action-button:
    role: Primary interactive elements
  introductory-text-block:
    role: Hero and section introductions
  navigation-link:
    role: Accessing different 'rooms' or sections
  body-copy-text:
    role: Detailed descriptions
  muted-footer-text:
    role: Legal or experience guidance text
---

## Overview

**North Star:** velvet darkness, whispered elegance

Fornasetti Profumi ASMR creates a deeply immersive, almost reverent atmosphere through its use of a pure black canvas and delicate, antique-inspired typography. The UI is exceptionally sparse, relying on subtle outlined interactive elements and minimal text to guide the user. The aesthetic is one of quiet luxury and focused attention, where UI elements are barely-there whispers rather than prominent features.

### Do's

- Ground all designs in Midnight Canvas (#000000) for backgrounds and primary surfaces.
- Use Antique Ivory (#ffffff) sparingly for primary text and subtle UI outlines to create luminous contrast.
- Employ Quadrant Text Mono (IBM Plex Mono) with -0.15em letter-spacing for the majority of UI text to maintain the ethereal, spaced-out feel.
- Limit interactive elements to pure outlines or text-only, avoiding solid filled backgrounds for buttons unless explicitly necessary.
- Maintain a clear sense of visual spaciousness, especially around interactive elements where 48px horizontal padding is typical.
- Utilize Fornasetti Text (Playfair Display) for key headlines or titles, leveraging its classic serif appearance at 16px 400 weight with 0.03em letter-spacing.
- Ensure all components have a 0px border radius, contributing to a sharp, uncluttered aesthetic.

### Don'ts

- Do not introduce highly saturated colors; the palette is strictly achromatic and relies on subtle contrast for visual interest.
- Avoid heavy shadows or gradients; elevation should be achieved through subtle borders or implied depth via content placement.
- Do not use generic sans-serif fonts; the distinct monospaced and serif typefaces are fundamental to the brand's atmosphere.
- Avoid dense, information-heavy layouts; prioritize generous white space and minimal content presentation.
- Do not deviate from the 0px border radius; rounded corners would disrupt the precise, antique quality of the design.
- Do not animate elements with fast, jarring transitions; motion should be smooth and subtle (circa 0.5s ease).
- Do not overload screens with interactive elements; the UI is meant to be sparse and meditative.

### Layout

The layout is primarily a full-bleed dark canvas with content constrained to a max-width of 900px and centered. The hero section features a centered headline and subtext over the Midnight Canvas. Subsequent sections also follow a centered, single-column content stack, each section appearing to be a distinct 'room' without strong visual dividers between them. The rhythm is slow and deliberate, with a focus on individual content blocks that fade into the dominant darkness. The navigation is minimal and appears as discreet, widely spaced text links or subtle outlined interactive elements.

### Imagery

The site primarily features a lack of overt imagery, creating a stark, UI-dominant experience. When 'imagery' is present, it is represented by conceptual, almost abstract interactive candle elements, consisting of simple white outlines on the black canvas. These outlined 'candles' serve as functional interaction points that reveal content rather than decorative graphics. Icons, if present, are minimal simple outlines. The visual language emphasizes emptiness and suggestion over overt visual content, allowing the focus to remain on the poetic text and implied sensory experience.

### Elevation

The design intentionally avoids any visible elevation, shadows, or gradients. All visual depth is achieved through stark foreground/background contrast and the ethereal nature of outlined elements. Elements are presented as if floating on, or emerging from, a pure black void, emphasizing a flat, almost two-dimensional, paper-like quality against the deep black.

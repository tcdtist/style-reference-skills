---
version: alpha
name: Chantlings
description: Chantlings uses a nocturnal, atmospheric design language, evoking a digital instrument in a dark, quiet room. The canvas is deep black, allowing subtle gradients and glowing elements to emerge. Typography is highly refined, with an elegant serif for headlines that whispers rather than shouts. Interactive elements are minimal, often ghosted, with one vivid orange accent color for fills, giving a sense of warmth and focused interactivity.
colors:
  midnight-noir: "#000000"
  ghostly-gray: "#333333"
  canvas-white: "#ffffff"
  shadow-tint: "#222222"
  active-fire: "#ff8800"
  subtle-glow: "#ffaa20"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.42
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.06
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 0.8
    letterSpacing: 0px
spacing:
  buttonRadius: 50px
  elementGap: 10px
  sectionGap: 100px
components:
  ghost-navigation-button:
    role: Header navigation, secondary actions
  primary-action-button:
    role: Main calls to action
  outlined-accent-link:
    role: Secondary links with visual emphasis
  app-store-download-button:
    role: Directing users to download the app
---

## Overview

**North Star:** Moonlit Forest Floor: glowing forms in the deep dark

Chantlings uses a nocturnal, atmospheric design language, evoking a digital instrument in a dark, quiet room. The canvas is deep black, allowing subtle gradients and glowing elements to emerge. Typography is highly refined, with an elegant serif for headlines that whispers rather than shouts. Interactive elements are minimal, often ghosted, with one vivid orange accent color for fills, giving a sense of warmth and focused interactivity.

### Do's

- Prioritize deep Midnight Noir (#000000) for all main backgrounds to maintain the dark, atmospheric tone.
- Use Mija webfont weight 300 for all headlines and significant text at larger sizes (24px, 32px) to convey understated elegance.
- Apply a 50px border-radius to all primary action buttons for a consistent pill-shaped aesthetic.
- Use Active Fire (#ff8800) exclusively for filled primary calls to action to ensure visual hierarchy and warmth.
- Maintain generous sectionGap of 100px between major content blocks to create ample breathing room in the dark layout.
- Use Canvas White (#ffffff) for primary text and Ghostly Gray (#333333) for muted text and subtle UI elements, ensuring readability against the dark background.

### Don'ts

- Avoid using bright or light backgrounds for main content sections; the system relies on a dark theme.
- Do not introduce sharp, angular shapes for interactive elements; prefer soft curves or pill shapes for buttons.
- Refrain from heavy drop shadows or excessive elevation; the design system favors a flat, subtle luminescence.
- Do not clutter layouts; aim for comfortable density with 100px section gaps and clear, isolated element placement.
- Avoid generic sans-serif fonts; Mija's distinct serif style is central to the brand's sophisticated visual identity.
- Do not use multiple accent colors; concentrate on the Active Fire (#ff8800) and Subtle Glow (#ffaa20) palette for all interactive highlights.

### Layout

The page uses a full-bleed, dark layout without a fixed max-width, allowing background elements to extend edge-to-edge. The hero section features a centered headline and description over a dark, atmospheric visual. Content sections maintain consistent vertical spacing of 100px, although specific internal content structures are minimal, mainly focusing on centered text blocks and a single mobile device visual. Navigation is handled by a minimal top-left logo and a hamburger menu icon on the top right, with no visible sticky header.

### Imagery

This site uses minimal, abstract, and stylized 3D graphics that seem to pulsate with a soft internal glow. The 'Chantlings' themselves appear as dark, bulbous, vaguely organic shapes with glowing orange internal elements, contained within a dark, almost sculptural environment. Imagery serves an atmospheric and symbolic role rather than explanatory content, blending seamlessly into the dark UI without sharp edges or heavy outlines. The iconography focuses on simple, outlined white forms against the dark background, maintaining a light footprint.

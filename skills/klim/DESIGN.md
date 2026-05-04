---
version: alpha
name: Klim
description: Klim Type Foundry utilizes a 'digital minimalist' approach, establishing authority through stark contrasts and precise typography on an almost entirely dark canvas. A restrained palette of bold, single-hue accents punctuates the monochromatic UI, guiding attention without visual clutter. Components prioritize clarity and function, often appearing as subtle outlines or ghost elements, reinforcing the typography's central role. The overall impression is one of meticulous craft and intentional restraint, where every visual element serves a purpose.
colors:
  pitch-black: "#000000"
  ghost-gray: "#555555"
  input-dark: "#1c1c1c"
  text-white: "#ffffff"
  ocean-blue: "#24a7f2"
  forest-green: "#3c585f"
  fire-orange: "#d33c03"
  vivid-red: "#e90702"
  neon-teal: "#93ffe6"
  muted-peach: "#ffe6d9"
  lemon-yellow: "#ffff79"
spacing:
  cardRadius: 0px
  buttonRadius: 2px
  elementGap: 10px
  sectionGap: 69px
components:
  filled-primary-button:
    role: Call-to-action button for initiating primary actions.
  outlined-secondary-button:
    role: Secondary action button, providing a less prominent interactive element.
  navigation-link-button:
    role: Interactive text link within navigation areas.
  text-input-field:
    role: Form input for user text entry.
  transparent-card:
    role: Content container that blends into the background, often for lists of items.
---

## Overview

**North Star:** Type specimen on black velvet

Klim Type Foundry utilizes a 'digital minimalist' approach, establishing authority through stark contrasts and precise typography on an almost entirely dark canvas. A restrained palette of bold, single-hue accents punctuates the monochromatic UI, guiding attention without visual clutter. Components prioritize clarity and function, often appearing as subtle outlines or ghost elements, reinforcing the typography's central role. The overall impression is one of meticulous craft and intentional restraint, where every visual element serves a purpose.

### Do's

- Prioritize high contrast between text and background, especially for readability on dark surfaces.
- Use Pitch Black (#000000) as the dominant background color for most sections to maintain the dark theme.
- Apply Text White (#ffffff) for all primary text and important UI borders against dark backgrounds.
- Reserve vibrant accent colors (Ocean Blue, Forest Green, Fire Orange) for intentional highlighting of interactive elements or key information, using them sparingly.
- Apply a consistent 2px border radius to all interactive elements (buttons, inputs) for subtle softening without losing sharpness.
- Maintain a compact element gap of 10px where precision and visual density are desired.
- Use SOEHNE, weight 700, for section headings and primary navigation items to establish strong hierarchy.

### Don'ts

- Avoid introducing additional saturated colors beyond the defined accent palette to prevent visual chaos.
- Do not use soft, low-contrast text on dark backgrounds; ensure sufficient contrast with Text White (#ffffff).
- Do not vary border radius values across interactive elements; strictly adhere to 2px for all button-like components.
- Avoid large, soft shadows or heavy elevation treatments; the design relies on flat surfaces and clean lines.
- Do not use generic system fonts; always specify SOEHNE for all text elements.
- Refrain from excessive internal padding on cards or list items, maintaining a compact aesthetic with 0px padding on card surfaces.
- Do not mix line heights arbitrarily; follow the defined line-height ratios for SOEHNE to preserve typographic rhythm.

### Layout

The page employs a full-bleed and contained layout model, alternating between completely full-width visual sections and content blocks constrained by a maximum width. Hero sections often feature full-viewport imagery or stark, text-only displays on Pitch Black. Section rhythm is driven by alternating dark and slightly lighter neutral backgrounds, creating distinct visual bands for content grouping. Content arrangement varies, from centered stacks of text on feature sections to grid-like displays for font families. There's a strong emphasis on consistent vertical padding between major sections. Navigation is a minimal top bar, with a persistent header that appears fixed, featuring the brand logo on the left and a hamburger menu on the right.

### Imagery

The imagery on Klim Type Foundry is highly varied and serves a decorative, artistic purpose rather than being purely functional or explanatory. It features abstract product renders (like the orange crate), highly stylized and conceptual photography (like the bacon flag), and direct product showcases (typography demonstrations). The treatment is typically full-bleed or large-format, often against a black background, allowing images to dominate the visual space. Photography is often high-key or dramatically lit, emphasizing texture and form. Illustrations are absent; the focus is on photographic or rendered realism. Icons, if present, appear to be minimal and outline-based, serving as functional UI elements rather than decorative art. Imagery is dense, often occupying entire screen real estate and driving page sections.

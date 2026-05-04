---
version: alpha
name: MindMarket
description: MindMarket utilizes a playful and inviting aesthetic, combining a calm, earthy neutral palette with vibrant, illustrative accents. The design system emphasizes approachable typography, generous spacing, and organic, rounded shapes to convey a friendly yet authoritative presence. Color is used sparingly for functional highlights and to punctuate sections with energetic, brand-aligned hues. Components feel lightweight, with emphasis on soft, large radii and minimal borders.
colors:
  greige-canvas: "#f5f1e4"
  midnight-graphite: "#2c2e2a"
  clean-white: "#ffffff"
  muted-stone: "#e0dbce"
  darkest-night: "#000000"
  ash-whisper: "#80827f"
  light-steel: "#d5d5d4"
  market-green: "#8ed462"
  vibrant-yellow: "#f5e211"
  insight-blue: "#2ba0ff"
  action-red: "#ff705d"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.25
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 81px
    lineHeight: 1.15
    letterSpacing: -0.06px
  display:
    fontFamily: "system-ui"
    fontSize: 140px
    lineHeight: 0.95
    letterSpacing: -0.06px
spacing:
  cardRadius: 63.75px
  buttonRadius: 50px
  elementGap: 21px
  sectionGap: 85px
components:
  primary-ghost-button:
    role: Interactive element
  quote-button:
    role: Call to action
  navigation-menu-button:
    role: UI control
  rounded-info-card:
    role: Content container
  section-highlight-card:
    role: Content container
  feature-badge:
    role: Informational label
---

## Overview

**North Star:** Organic illustrations on calm canvas

MindMarket utilizes a playful and inviting aesthetic, combining a calm, earthy neutral palette with vibrant, illustrative accents. The design system emphasizes approachable typography, generous spacing, and organic, rounded shapes to convey a friendly yet authoritative presence. Color is used sparingly for functional highlights and to punctuate sections with energetic, brand-aligned hues. Components feel lightweight, with emphasis on soft, large radii and minimal borders.

### Do's

- Use Inter for all typography, maintaining a consistent brand voice across all content and UI elements.
- Prioritize Greige Canvas (#f5f1e4) and Clean White (#ffffff) for backgrounds and surfaces to maintain a light, airy feel.
- Apply a large border-radius of 63.75px to main content cards and 50px to buttons and badges for a soft, organic aesthetic.
- Utilize Midnight Graphite (#2c2e2a) for primary text and headings, ensuring high contrast against light backgrounds.
- Introduce brand colors—Market Green (#8ed462), Vibrant Yellow (#f5e211), Insight Blue (#2ba0ff), and Action Red (#ff705d)—as accents for borders, iconography, and illustrative elements, not as full background fills.
- Maintain generous padding of 21px for card content and a consistent 21px element gap to ensure comfortable readability and visual breathing room.
- Employ a subtle negative letter-spacing for larger headlines (e.g., -0.0600em at 144px, -0.0400em at 53px) to prevent them from feeling too open.

### Don'ts

- Avoid using harsh, saturated primary colors for large background areas; reserve them for accents and highlights.
- Do not use sharp corners or small border radii; maintain the soft, rounded aesthetic with values like 63.75px or 50px.
- Refrain from dense layouts; utilize the prescribed section (85px) and element (21px) gaps to ensure ample whitespace.
- Do not introduce new typefaces; rely solely on Inter to keep the typographic system cohesive.
- Avoid heavy shadows or gradients; the design emphasizes a flat and clean aesthetic, with only subtle borders and color shifts for depth.
- Do not use small, precise adjustments in spacing; stick to the established 4px grid and defined spacing tokens.
- Resist using a truly black background; opt for the deep Midnight Graphite (#2c2e2a) for dark elements to maintain softness.

### Layout

The page maintains a centered, contained layout with no explicit `pageMaxWidth` but generally respecting clear content boundaries, often surrounded by the Greige Canvas background. The hero section features a full-bleed Market Green (#8ed462) background with a large, centered headline and a supporting illustrative element. Sections alternate visually, often featuring different background colors or large illustrative elements that provide organic, curvilinear dividers between content blocks rather than sharp lines. Content is primarily arranged in two-column text and image layouts or centered stacks for stronger statements. Card grids for features are common, featuring large rounded cards. Navigation is a sticky top bar, providing persistent access to links and actions.

### Imagery

The visual language relies heavily on playful, organic illustrations featuring diverse, stylized characters in dynamic poses. These illustrations are dimensional, using a mix of solid brand colors (Market Green, Vibrant Yellow, Insight Blue, Action Red) and neutrals, often with organic, cloud-like elements or abstract shapes around them. Product context is minimal; the imagery serves to create a friendly, human-centric atmosphere rather than showcase specific tools. Icons are minimal, either outlined or filled in Midnight Graphite (#2c2e2a) or Clean White (#ffffff), maintaining a soft stroke weight. The imagery density is moderate, used strategically to break up text sections and add visual interest, often appearing partially off-screen.

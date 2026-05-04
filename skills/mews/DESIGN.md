---
version: alpha
name: Mews
description: Mews employs a 'digital ledger' aesthetic: a pristine white canvas combined with clear, dark typography creates an impression of precision and order. Components are often outlined or utilize subtle shadow work to define interactive zones rather than heavy fills. A specific vivid pink provides a digital accent for primary actions and highlights, contrasting with the otherwise monochromatic UI background.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  cloud-gray: "#f4f5f9"
  steel-gray: "#333333"
  charcoal-black: "#161616"
  dusty-gray: "#8c8c8c"
  outline-gray: "#cccccc"
  digital-pink: "#ffc5ee"
  soft-lilac: "#f7e1f7"
  sky-tint: "#d2f4ff"
  neon-pop: "#ff83da"
  chartreuse-glow: "#e8ff5b"
  cool-stone: "#c4c9dd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.35
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.03
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
    letterSpacing: -2.4px
spacing:
  cardRadius: 6px
  buttonRadius: 8px
  elementGap: 10px
  sectionGap: 80px
components:
  hero-dark-card:
    role: Prominent information display
  primary-action-button:
    role: Call to action
  ghost-pill-button:
    role: Secondary action or tag
  subtle-background-button:
    role: Informational button or filter
  feature-grid-card:
    role: Display individual features or services
  dark-overlay-promo-card:
    role: Specialized content highlight
  accordion-item:
    role: Collapsible content area
---

## Overview

**North Star:** Digital Ledger Precision

Mews employs a 'digital ledger' aesthetic: a pristine white canvas combined with clear, dark typography creates an impression of precision and order. Components are often outlined or utilize subtle shadow work to define interactive zones rather than heavy fills. A specific vivid pink provides a digital accent for primary actions and highlights, contrasting with the otherwise monochromatic UI background.

### Do's

- Prioritize Canvas White (#ffffff) as the primary background for all page sections unless an intentional dark contrast is required.
- Use Midnight Ink (#000000) for all primary text elements and critical borders to maintain high contrast and clarity.
- Apply Digital Pink (#ffc5ee) specifically for primary calls to action, ensuring it stands out against neutral backgrounds.
- Incorporate 6px border-radius for all cards and container elements to maintain a consistent subtle softening.
- Maintain an 'elementGap' of 10px where distinct elements require separation in horizontal or vertical stacks.
- Use the soehne typeface with specific negative letter-spacing for headlines (e.g., -0.025em at 96px) to achieve a modern, condensed feel.
- Ensure generous vertical section spacing of 80px between major content blocks to create a comfortable rhythm.

### Don'ts

- Do not introduce new vibrant colors unless they serve a specific brand or semantic function; maintain the predominantly achromatic palette with precise accent usage.
- Avoid heavy drop shadows or intrusive gradients; surfaces should primarily be flat or have minimal depth created by a single solid border.
- Do not use generic system fonts; always specify soehne or its recommended substitute with defined weights and line heights.
- Refrain from using small radius values (e.g., 2px) on cards or buttons; maintain 6px for cards and 8px for buttons, with 9999px for pill-shaped elements.
- Do not break content beyond the 1278px pageMaxWidth; all main content should be horizontally centered within these bounds.
- Avoid unnecessary visual clutter. The system thrives on clear visual hierarchy and ample whitespace.
- Do not use plain, neutral grays for interactive states; interactive elements should leverage Digital Pink (#ffc5ee) or a distinct visual change.

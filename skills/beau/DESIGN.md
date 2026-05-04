---
version: alpha
name: Beau
description: Beau employs a crisp, structured aesthetic with a high-contrast monochrome palette. The design emphasizes clear information hierarchy through distinct text sizing and weight, creating a feeling of efficient precision. Components are lightweight and purposeful, relying on shape and direct color contrast rather than heavy ornamentation or shadows. A striking multi-color gradient introduces vibrancy in specific sections, acting as an energetic backdrop for otherwise stark content.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  subtle-gray: "#999999"
  whisper-gray: "#666666"
  silver-mist: "#b3b3b3"
  electric-gradient: "#ff8308"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.4
    letterSpacing: -0.17px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.28px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.15
    letterSpacing: -0.33px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.4px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -1.12px
spacing:
  cardRadius: 6px
  buttonRadius: 200px
  elementGap: 24px
  sectionGap: 72px
components:
  primary-action-button:
    role: Main call to action button.
  ghost-action-button:
    role: Secondary action button, or for navigation.
  white-card:
    role: Content container for features or information.
  dark-card:
    role: Container for content in dark mode sections.
  compact-tag-badge:
    role: Informational tags or status indicators.
---

## Overview

**North Star:** monochrome precision, vibrant core

Beau employs a crisp, structured aesthetic with a high-contrast monochrome palette. The design emphasizes clear information hierarchy through distinct text sizing and weight, creating a feeling of efficient precision. Components are lightweight and purposeful, relying on shape and direct color contrast rather than heavy ornamentation or shadows. A striking multi-color gradient introduces vibrancy in specific sections, acting as an energetic backdrop for otherwise stark content.

### Do's

- Prioritize high-contrast pairing of Midnight Ink (#000000) and Canvas White (#ffffff) for primary content and actions.
- Use Geist at weight 400 for body text and 500 for headlines, ensuring the specified letter-spacing for optimal legibility.
- Apply a 200px border-radius to all buttons for a consistent, soft pill shape, and 6px to cards for subtle corner rounding.
- Use a base unit of 6px for all spacing decisions, translating to common elements gaps of 24px and section gaps of 72px.
- Introduce the Electric Gradient (linear-gradient(135deg, rgb(255, 131, 8), rgb(255, 80, 67) 50%, rgb(57, 43, 213))) sparingly as a background for impactful, energetic sections only.
- When using cards, default to Canvas White (#ffffff) with a soft shadow (rgba(0,0,0,0.06) 0px 2px 6px 0px) to indicate elevated content.

### Don'ts

- Avoid using saturated colors other than Electric Gradient; maintain a strict monochrome palette for all other UI elements.
- Do not use heavy, complex shadows; only apply the subtle rgba(0,0,0,0.06) 0px 2px 6px 0px shadow for elevated cards.
- Do not vary border radii significantly; stick to 200px for buttons/pills and 6px for cards/containers.
- Do not use generic system fonts; always utilize Geist with its specific weights and font feature settings for brand consistency.
- Avoid excessive use of the Electric Gradient; it should act as a highlight, not a dominant background for all sections.
- Do not create complex multi-layered backgrounds; surfaces should primarily be Canvas White or Midnight Ink for clarity.

### Layout

The typical page layout is a max-width 1428px centered container, with full-width sections that internally constrain content. The hero section often features a centered headline over a white background. Sections establish rhythm through consistent 72px vertical spacing. Content is arranged in alternating patterns, such as text on one side and a product UI screenshot/illustration on the other. Feature sections utilize grids of cards, and prominent information is often presented in centered, stacked blocks for clarity.

### Imagery

Imagery primarily consists of product screenshots and abstract UI representations, often presented on dark backgrounds or within contained sections. These are treated with soft 6px rounded corners, matching the card aesthetic. There are no full-bleed photographs or lifestyle imagery. Icons appear to be outlined, monochrome (black or white, depending on background), with a medium stroke weight, serving an explanatory and decorative role at a medium density.

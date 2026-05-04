---
version: alpha
name: Wispr Flow
description: Wispr Flow embraces a serene, almost academic aesthetic, blending a warm, muted palette with classic serif typography for large displays and a modern sans-serif for functional text. The design is characterized by generous spacing and soft, rounded elements that create a friendly and approachable feel. Dark, rich greens and deep grays are used to anchor sections, while a soft lavender provides a playful, yet restrained, accent for interactive elements.
colors:
  parchment: "#ffffeb"
  ink: "#1a1a1a"
  forest-canopy: "#034f46"
  pale-lavender: "#f0d7ff"
  stone: "#e4e4d0"
  charcoal-text: "#222222"
  muted-ash: "#8a8a80"
  white: "#ffffff"
  sunburst: "#ffa946"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  subheading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.95
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.85
    letterSpacing: -0.48px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.85
    letterSpacing: -0.48px
spacing:
  cardRadius: 32px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-action-button:
    role: Interactive element
  outline-ghost-button:
    role: Interactive element
  branded-action-button:
    role: Interactive element
  soft-card:
    role: Content container
  dark-content-card:
    role: Content container
  subtle-badge:
    role: Categorization/status
  branded-badge:
    role: Categorization/status
---

## Overview

**North Star:** Warm parchment sophistication

Wispr Flow embraces a serene, almost academic aesthetic, blending a warm, muted palette with classic serif typography for large displays and a modern sans-serif for functional text. The design is characterized by generous spacing and soft, rounded elements that create a friendly and approachable feel. Dark, rich greens and deep grays are used to anchor sections, while a soft lavender provides a playful, yet restrained, accent for interactive elements.

### Do's

- Use Parchment (#ffffeb) as the dominant background color for light sections and Ink (#1a1a1a) for dark sections to maintain visual rhythm.
- Apply EB Garamond for all display and large body headings to convey an academic, sophisticated tone, incorporating its specific letter-spacing values.
- Utilize Pale Lavender (#f0d7ff) exclusively for primary call-to-action buttons to ensure consistent highlight for interactive elements.
- Apply a 12px border-radius to all buttons and a 32px border-radius to cards, creating a consistent soft-edged aesthetic.
- Maintain a comfortable density with generous spacing: 64px for section gaps, 32px for card padding, and an 8px base unit for element gaps.
- Offset large typeface headlines with a subtle underline using Pale Lavender (#f0d7ff) to draw attention without excessive weight.

### Don'ts

- Avoid using harsh, bright whites or pure blacks that would disrupt the soft, muted color palette.
- Do not deviate from the specified border-radii; sharp corners will undermine the friendly, approachable aesthetic.
- Refrain from heavy drop shadows or excessive elevation, as the design system prioritizes a flat, surface-level presentation.
- Do not introduce additional font families; Figtree and EB Garamond provide the necessary range for both functional and expressive text.
- Avoid overusing saturated colors; limit Sunburst (#ffa946) and Forest Canopy (#034f46) to functional accents and key sections.
- Do not use generic button styles; ensure all interactive elements conform to the Primary, Outline Ghost, or Branded Action Button variants.

---
version: alpha
name: Blok
description: Blok's design system uses a bright, energetic palette grounded in high-contrast monochromes. A vivid teal accent color provides functional punctuation for primary actions, while secondary interaction is highlighted with a striking blue. Typography is confident and direct, predominantly sans-serif, establishing clear hierarchy. Components are lightweight with minimal use of shadows, favoring crisp borders and rounded edges for interactive elements.
colors:
  midnight-ink: "#0a0d0f"
  canvas-white: "#ffffff"
  charcoal-haze: "#2e3438"
  pure-black: "#000000"
  whisper-gray: "#f7f7f7"
  footer-gray: "#efefef"
  border-ash: "#d5d6d7"
  muted-stone: "#656565"
  aqua-thrill: "#1dd8e1"
  electric-blue: "#2c75d4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.09px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
  body-lg:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0.09px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.37
    letterSpacing: 0.09px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: 0.09px
spacing:
  buttonRadius: 100px
  elementGap: 10px
  sectionGap: 50px
components:
  solid-aqua-button:
    role: Primary Call to Action
  pill-ghost-button:
    role: Secondary action/Filter
  text-link-button:
    role: Minimal action
  circular-pagination-button:
    role: Navigation Control
  block-input-field:
    role: Text Input
  white-border-input-field:
    role: Text Input (Alternative)
  simple-badge:
    role: Informational Status
  outline-status-badge:
    role: Informational Status
---

## Overview

**North Star:** energetic timepiece on a clean canvas

Blok's design system uses a bright, energetic palette grounded in high-contrast monochromes. A vivid teal accent color provides functional punctuation for primary actions, while secondary interaction is highlighted with a striking blue. Typography is confident and direct, predominantly sans-serif, establishing clear hierarchy. Components are lightweight with minimal use of shadows, favoring crisp borders and rounded edges for interactive elements.

### Do's

- Prioritize 'Midnight Ink' (#0a0d0f) for primary text and 'Canvas White' (#ffffff) for page backgrounds.
- Use 'Aqua Thrill' (#1dd8e1) exclusively for primary call-to-action buttons and prominent interactive elements.
- Apply a 100px border-radius for all pill-shaped buttons and tags to maintain a consistent interactive element style.
- Ensure all headings use a wide letter spacing of 0.0900em as defined in the Cabin and Jost typography tokens.
- Maintain a clear vertical rhythm between sections using a 'sectionGap' of '50px'.
- Use Cabin (500, 600) or Jost (700) for all headings to create distinct visual hierarchy.
- Apply 'Border Ash' (#d5d6d7) for input field outlines and subtle dividers.

### Don'ts

- Do not use saturated colors other than 'Aqua Thrill' (#1dd8e1) and 'Electric Blue' (#2c75d4) for interactive elements.
- Avoid deep shadows or overly dimensional effects on components; prefer crisp borders and flat surfaces.
- Do not deviate from the specified letter spacing values for headings; consistent tracking is key to brand typography.
- Do not use 'Pure Black' (#000000) for general body text; reserve it for high-contrast headings or specific elements.
- Avoid non-standard border-radii for primary buttons; stick to 0px for solid actions and 100px for pill-shaped secondary actions.
- Do not introduce new typefaces; adhere strictly to Poppins, Cabin, Jost, and GTStandard-M.
- Do not use 'Charcoal Haze' (#2e3438) for large headlines; it is reserved for secondary text and muted elements.

### Layout

The page primarily uses a max-width contained model at 1200px, creating defined content areas. The hero section is a full-bleed visual experience with a dominant product image and centered textual call-to-action. Subsequent sections often feature a stacked, centered content arrangement (headline, subtext) followed by a grid of product cards. Vertical rhythm is established through consistent section gaps, with clear separation between content blocks. Navigation is a minimal top bar with discreet icons for menu and cart.

### Imagery

The visual language for imagery focuses on high-quality product photography. Watches are presented as hero objects, often in clean, full-bleed compositions against a dark, atmospheric background (as seen in the first hero). Product shots are contained within neutral frames with crisp edges when displayed in grids, emphasizing the product itself. The site employs an 'icons-only' approach for certain UI elements like navigation for a minimalist feel. Imagery density is moderate, balancing product showcases with textual information.

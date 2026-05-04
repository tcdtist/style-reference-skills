---
version: alpha
name: Vanmoof
description: VanMoof's design system relies on a stark, contemporary aesthetic, leveraging a predominantly monochrome palette to emphasize product visuals. Components are lightweight and often outlined, with minimal elevation, creating a sense of understated sophistication. Typography is precise and utilitarian, giving an authoritative yet accessible feel. The overall presentation prioritizes directness and clarity, allowing product design and functional accents to take center stage.
colors:
  canvas-white: "#ffffff"
  ghost-gray: "#e5e7eb"
  carbon-black: "#222222"
  inkwell: "#000000"
  deep-slate: "#313131"
  light-gray: "#e0e0e0"
  ignition-red: "#ff0000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
  display-sm:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 280px
    lineHeight: 1
spacing:
  cardRadius: 8px
  elementGap: 8px
  sectionGap: 24px
components:
  ghost-outline-button-light:
    role: Secondary action button
  ghost-outline-button-dark:
    role: Secondary action button on dark sections
  primary-filled-button:
    role: Primary action button
  product-feature-card:
    role: Informational display
  navigation-link:
    role: Primary navigation item
  mobile-navbar-item-toggle:
    role: Mobile menu button
  mini-select-country-button:
    role: Header utility action
---

## Overview

**North Star:** monochrome canvas, functional red accents

VanMoof's design system relies on a stark, contemporary aesthetic, leveraging a predominantly monochrome palette to emphasize product visuals. Components are lightweight and often outlined, with minimal elevation, creating a sense of understated sophistication. Typography is precise and utilitarian, giving an authoritative yet accessible feel. The overall presentation prioritizes directness and clarity, allowing product design and functional accents to take center stage.

### Do's

- Use '#222222' for all primary text and button backgrounds against light canvases.
- Apply '#e5e7eb' as the default border color for all ghost buttons and subtle UI dividers.
- Maintain a clear hierarchical order in typography, using the Unica77LLWeb family for headings (e.g., 280px, 80px) and body text (e.g., 14px, 16px).
- Ensure all interactive elements and cards use a 2px or 8px border-radius, prioritizing 2px for smaller interactive elements like buttons.
- Utilize 'Ignition Red' (#ff0000) only for specific, high-impact product accents or critical status indicators, never for general UI.
- Structure page sections with a '24px' vertical gap between major content blocks to ensure breathing room.
- Employ a base spacing unit of '8px' for padding and gaps between smaller elements within components.

### Don'ts

- Avoid using multiple chromatic colors; limit color accents strictly to 'Ignition Red' for product highlights.
- Do not introduce complex shadows; maintain a flat or minimally elevated visual style.
- Refrain from using decorative gradients on UI elements; the system prefers solid colors and clean outlines.
- Do not deviate from the specified Unica77LLWeb and Unica77Mono font families; no system fonts are permitted.
- Avoid excessive imagery; when present, it should be high-contrast and product-focused, complementing the monochrome UI.
- Do not use generic button styles; always adhere to the Ghost Outline (Light/Dark) or Primary Filled button specifications.
- Never use radii other than 2px or 8px; custom or interpolated corner rounding is not permitted.

### Layout

The page primarily uses a max-width contained layout for most content sections, though hero sections often extend full-bleed with product imagery. The hero pattern frequently features a large, dramatic product shot with expansive typography (e.g., 'S6', 'A5') and overlaid, constrained text blocks and ghost buttons. Section rhythm is marked by consistent vertical spacing (24px `sectionGap`) and often alternates between full-bleed dark product showcases and lighter, contained content blocks. Content is arranged in flexible patterns, including centered stacks for app features and multi-column grids for testimonials or support information. Navigation is a minimalist sticky header with a prominent brand logo, hamburger menu, and cart icon, emphasizing a distraction-free browsing experience.

### Imagery

Product photography dominates, featuring tight crops of e-bikes against deep, contrasting monochrome backgrounds (often dark gray/black or white). The imagery is highly stylized, showcasing specific design details and technological features. There is a strong emphasis on the product itself, with minimal lifestyle context. Icons are outlined, minimal, and monochromatic, matching the overall UI's clean aesthetic. Imagery functions primarily as product showcase and explanatory content, occupying significant visual space in hero sections but contained in feature blocks.

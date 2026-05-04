---
version: alpha
name: Elektron
description: This design system evokes a high-fidelity control panel, where functional elements are precisely rendered against a deep, uniform darkness. The visual atmosphere is serious and technical, achieved through minimal color and sharp contrasts between almost-black backgrounds and near-white text. This stark aesthetic prioritizes clarity within a complex interface, using a restricted palette to focus attention on interactive elements and critical information, allowing for subtle visual depth through varied text weights and button styles.
colors:
  absolute-zero: "#000000"
  control-panel-black: "#151515"
  deep-graphite: "#222222"
  input-surface-gray: "#333337"
  icon-gray: "#6a6a6"
  input-text-gray: "#b4b4b8"
  off-white-text: "#eeeef2"
  white-glow: "#ffffff"
  amber-indicator: "#ffcc00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: -0.013px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.017px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.026px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.033px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.33
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.95
    letterSpacing: -0.04px
spacing:
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 100-140px
components:
  cta-button-group:
    role: 
  product-accessory-cards:
    role: 
  search-input-field:
    role: 
  call-to-action-button:
    role: Primary user interaction.
  default-input-field:
    role: User data entry.
  search-input-field:
    role: Site search functionality.
  navigation-badge:
    role: Informational marker for navigation or categories.
---

## Overview

**North Star:** Digital console in midnight. A world of precise, glowing information contained within a dark, structured shell.

This design system evokes a high-fidelity control panel, where functional elements are precisely rendered against a deep, uniform darkness. The visual atmosphere is serious and technical, achieved through minimal color and sharp contrasts between almost-black backgrounds and near-white text. This stark aesthetic prioritizes clarity within a complex interface, using a restricted palette to focus attention on interactive elements and critical information, allowing for subtle visual depth through varied text weights and button styles.

### Do's

- Use Absolute Zero (#000000) for page backgrounds to establish the deep, dark canvas.
- Apply Control Panel Black (#151515) for main interactive surfaces like cards and elevated sections to create subtle depth.
- Prioritize Off White Text (#eeeef2) for body text and navigation elements against dark backgrounds for optimal readability.
- Employ White Glow (#ffffff) sparingly for critical headlines and active states that demand immediate attention.
- Maintain 0px border-radius for most elements like buttons, reinforcing the sharp, technical aesthetic.
- Utilize Neue Haas Grotesk Text Pro for body text at various sizes (11px-35px) with specific negative letter spacing to achieve a modern, dense textual presentation.
- Use specific digital fonts (digi one v2, Analog One V2.) for any element requiring a retro-tech or numerical display, preserving the unique brand character.

### Don'ts

- Avoid using bright or overly saturated colors, except for the defined 'Amber Indicator' accent, to maintain the control panel aesthetic.
- Do not introduce rounded corners beyond the 7px radius for specific input fields; maintain sharp edges elsewhere.
- Steer clear of gradients or soft shadows that would soften the hard-edged, precise visual identity.
- Do not use generic system fonts for headlines or special numbers; Neue Haas Grotesk Display Pro and the unique digital fonts are integral to brand recognition.
- Avoid large, airy padding or excessive white space between elements where information density is intended, as the system favors a compact layout.
- Do not break the dark theme with light sections unless specifically defined by brand guidelines, as the overall mood is consistently dark.

### Layout

The site uses a full-bleed dark background for the entire page, creating a unified canvas. Content is generally displayed within sections that stack vertically with consistent large gaps (implied 100-140px). Hero sections often feature a full-width image with subtle overlays or prominent typography. Content within sections tends to be left-aligned, often featuring a headline followed by text or interactive elements. There are instances of implied 2-column or 3-column grids for presenting accessories, but the overall presentation is sequential and block-based rather than complex grid layouts. Navigation is a persistent top bar with minimal links and icons, sitting above the full-bleed content.

### Imagery

The visual language focuses on close-up product photography with a strong engineering aesthetic, occasionally featuring a digital display element (e.g. blue waveforms on black screens). Images are often dark, moody, and serve primarily to showcase product details or technical interfaces rather than lifestyle. They are contained, typically not full-bleed, and integrated with the dark theme through color and lighting, reinforcing the high-tech, precision instrument feel. Icons are monochrome, generally filled, with a consistent stroke weight, and have a function-first role for navigation and utility.

---
version: alpha
name: Lamborghini.com
description: This design system evokes the controlled power of a luxury performance vehicle, balancing industrial precision with subtle opulence. A stark black and white foundation, accented by a deep, authoritative yellow, creates immediate visual impact. The absence of rounded corners and a consistent, generous letter-spacing in the custom typeface reinforces a feeling of engineered clarity and unyielding directness.
colors:
  carbon-black: "#000000"
  ghost-white: "#ffffff"
  concrete-gray: "#f5f5f5"
  graphite: "#202020"
  dark-metal: "#181818"
  engine-yellow: "#917300"
  speed-yellow: "#ffc000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.56
    letterSpacing: 0.23px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
    letterSpacing: 0.368px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.15
    letterSpacing: 0.414px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.13
    letterSpacing: 0.621px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.19
    letterSpacing: 0.736px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: 1.84px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.92
    letterSpacing: 2.76px
spacing:
  elementGap: 24px
  sectionGap: 80px
components:
  cta-button-group:
    role: 
  event-announcement-banner:
    role: 
  news-article-card:
    role: 
  primary-action-button-engine-yellow:
    role: Call to action
  secondary-action-button-speed-yellow:
    role: Call to action (more urgent)
  outline-neutral-button:
    role: Navigation, secondary actions
  outline-black-button:
    role: Navigation, secondary actions for light background
  transparent-card:
    role: Content grouping
  navigation-badge-filter:
    role: Informational
---

## Overview

**North Star:** Precision-engineered black steel with yellow accents. Every edge is sharp, every surface polished, reflecting light with purpose.

This design system evokes the controlled power of a luxury performance vehicle, balancing industrial precision with subtle opulence. A stark black and white foundation, accented by a deep, authoritative yellow, creates immediate visual impact. The absence of rounded corners and a consistent, generous letter-spacing in the custom typeface reinforces a feeling of engineered clarity and unyielding directness.

### Do's

- Use `LamboType` for all text elements to maintain a consistent brand voice.
- Apply `0.0230em` letter-spacing consistently to `LamboType` for titles and body alike.
- Employ `Engine Yellow (#917300)` for primary interactive elements against dark backgrounds.
- Utilize `Speed Yellow (#ffc000)` sparingly for high-emphasis calls to action on light backgrounds to maximize impact.
- Maintain `0px` border-radius across all components for a sharp, angular aesthetic.
- Structure vertical spacing with multiples of `24px`: `24px`, `48px`, `80px` for consistent content flow.
- Use `Carbon Black (#000000)` and `Ghost White (#ffffff)` as the foundational palette, with `Graphite (#202020)` for general text on light backgrounds.

### Don'ts

- Do not introduce rounded corners; curves are reserved for product imagery, not UI elements.
- Avoid shadows or complex elevation schemes; depth is achieved primarily through color contrast and layered full-bleed sections.
- Do not use `Open Sans` for primary-level text; reserve it for minor, descriptive content only.
- Refrain from using desaturated color accents outside the designated `Engine Yellow` and `Speed Yellow`.
- Do not vary `LamboType` weights; 400 is the only specified weight, contributing to the consistent, precise feel.

### Layout

The layout is a dynamic mix of full-bleed sections and contained content, emphasizing visual impact. The hero section often features full-viewport imagery with centered or left-aligned headlines, creating an immersive experience. Subsequent sections alternate between dark and light backgrounds, often with generous `80px` vertical spacing. Content within sections frequently utilizes `24px` and `48px` spacing units. The overall feel is a centered, high-contrast presentation for maximum visual punch, driven by large imagery and bold typography, rather than a rigid grid system.

### Imagery

This site features highly curated, dramatic product photography, primarily of cars in dynamic, often low-light or studio-lit environments. Imagery is full-bleed, sharp-edged, and serves as primary content, often with large text overlays. There are also detail shots of technical components and branded materials. Visuals are typically desaturated or have a specific color grade to emphasize the form and material of the vehicles and products, occasionally contrasted with vibrant accents like headlights. The focus is always on the product, presented with a sense of awe and aspiration.

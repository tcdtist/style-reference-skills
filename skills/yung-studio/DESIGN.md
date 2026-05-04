---
version: alpha
name: Yung Studio
description: This design system presents a stark, high-contrast aesthetic, mimicking a digital command console. Its core identity is built on pure black and white, creating immediate visual impact. The generous negative space and tight letter-spacing in headlines maintain an air of intentional precision, while the signature 9999px pill-shaped buttons introduce a single, playful soft edge.
colors:
  midnight-void: "#000000"
  ghost-white: "#ffffff"
  accent-violet: "#c692ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.35
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.01
    letterSpacing: -0.28px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.9
    letterSpacing: -1.2px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 160px
    lineHeight: 0.9
    letterSpacing: -3.2px
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 20-24px
  sectionGap: 60-124px
components:
  primary-action-button-group:
    role: 
  stat-metric-block:
    role: 
  service-feature-cards:
    role: 
  primary-action-button:
    role: Interactive element
  naked-content-card:
    role: Content container
  text-link:
    role: Navigation/Internal link
  header-logo:
    role: Brand identity
---

## Overview

**North Star:** Monochromatic Command Center. Pure black canvas where sharp white elements punctuate with precision and ample negative space.

This design system presents a stark, high-contrast aesthetic, mimicking a digital command console. Its core identity is built on pure black and white, creating immediate visual impact. The generous negative space and tight letter-spacing in headlines maintain an air of intentional precision, while the signature 9999px pill-shaped buttons introduce a single, playful soft edge.

### Do's

- Maintain a strict achromatic palette, using only `Midnight Void` (#000000) for backgrounds and `Ghost White` (#ffffff) for primary foreground elements.
- Apply `9999px` border-radius to all interactive element buttons for a consistent pill shape.
- Utilize PolySans-Neutral with -0.0200em letter-spacing for all significant headings to create a dense, impactful typographic appearance.
- Implement `--obe` (#c692ff) sparingly as the sole chromatic accent, allowing it to highlight specific backgrounds or subtle contextual elements.
- Ensure generous `50px` horizontal padding for content sections and `20-24px` vertical spacing between elements to preserve ample negative space.
- Employ PolySans-Slim as the default font for all body copy and most secondary text at weight 400, ensuring clear readability across sizes.

### Don'ts

- Avoid introducing any additional saturated colors beyond the designated `--ube` (#c692ff) to prevent diluting the distinct monochrome aesthetic.
- Do not use box-shadows or drop shadows; depth is implied solely through stark contrast and generous negative space.
- Refrain from deviating from the specified PolySans typefaces; custom fonts are a core identifier, and system defaults would undermine the brand.
- Do not add borders or background colors to content cards; they should appear as seamless blocks of text on the `Midnight Void` background.
- Avoid using radii other than `0px` for content containers and `9999px` for buttons, to maintain precision and the signature rounded forms.
- Do not clutter content sections; maintain the spacious `50px` horizontal padding and ample vertical element gaps to preserve legibility and impact.

### Imagery

This site features a clean visual language predominantly based on illustration and graphic elements, with minimal and direct application. The hero section displays large, custom, playful illustrations in pure white on a black background, with a hand-drawn, almost explosive quality, acting as a direct visual representation of the 'Yung' brand. The overall impression is that imagery serves a decorative, brand-identity building purpose rather than explanatory content, with a high visual density only in a dedicated hero area, transitioning to text-dominant content. Icons are minimal, represented by the white hamburger menu, suggesting a clean, outlined style. No photography is visible, reinforcing a graphic-first approach.

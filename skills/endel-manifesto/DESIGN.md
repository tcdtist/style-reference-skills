---
version: alpha
name: Endel Manifesto
description: Endel Manifesto presents a stark, almost monastic dark mode experience, prioritizing content over visual flourish. The design employs a monochrome palette with abundant black space, utilizing white text and subtle gray accents to guide focus. Typography is minimal and direct, ensuring clarity against the deep background, while interactive elements are sparingly introduced with soft, rounded edges to avoid disruption.
colors:
  midnight-void: "#000000"
  ghost-white: "#ffffff"
  steel-gray: "#636363"
  muted-ash: "#4d4d4d"
  soft-fog: "#6f6f6f"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.13
spacing:
  buttonRadius: 10px
  elementGap: 8px
  sectionGap: 40px
components:
  manifesto-button:
    role: Primary Call to Action
  ghost-link:
    role: Navigation and Ancillary Links
  primary-headline:
    role: Main page titles and key statements
  secondary-headline:
    role: Sub-headings or descriptive text related to main titles
---

## Overview

**North Star:** Minimalist Dark Canvas

Endel Manifesto presents a stark, almost monastic dark mode experience, prioritizing content over visual flourish. The design employs a monochrome palette with abundant black space, utilizing white text and subtle gray accents to guide focus. Typography is minimal and direct, ensuring clarity against the deep background, while interactive elements are sparingly introduced with soft, rounded edges to avoid disruption.

### Do's

- Always use 'Midnight Void' (#000000) for primary page and section backgrounds.
- Utilize 'Ghost White' (#ffffff) for all primary text content and logo elements.
- Apply 'Muted Ash' (#4d4d4d) as the background color for all primary action buttons, combined with 'Ghost White' (#ffffff) text.
- Ensure all primary button elements incorporate a 10px border-radius.
- Maintain a default letter-spacing for all typography, regardless of size or role, to preserve textual clarity.
- Employ 40px vertical spacing for significant content breaks between sections to ensure comfortable density.
- Use 8px as the base unit for inter-element spacing and small horizontal gaps.

### Don'ts

- Avoid introducing additional font families or weights beyond Roboto weight 400.
- Do not use saturated or vivid colors; adhere strictly to the achromatic palette with 'Midnight Void' and shades of gray and white.
- Refrain from using complex shadow effects or strong elevations; rely on subtle background color shifts for surface distinction.
- Do not deviate from the default 10px border-radius for buttons or the 16px radius for other prominent elements.
- Avoid left-aligning headings; all key textual content should be centered.
- Do not use gradients; the design relies on solid colors and minimalist flat surfaces.
- Do not use images as prominent page backgrounds; stick to solid 'Midnight Void'.

### Layout

The page uses a full-bleed layout, dominated by a 'Midnight Void' background. All content is centrally aligned horizontally. The hero section features the logo, brand name, and primary headline centered on a black canvas, followed by a centered 'Manifesto Button'. Sections are visually delineated by consistent vertical spacing of 40px, but no hard dividers or alternating background colors. Information is presented in single-column text blocks, creating a focused, linear reading experience. Navigation links are minimal, presented as 'Ghost Link' text elements.

### Imagery

This design largely eschews traditional imagery in favor of a pure UI aesthetic. The primary visual elements are the Endel logo, which is a minimalist white outline on a black background. When present, graphics are abstract, using simple lines and shapes in white or steel gray to provide subtle visual interest without distracting from text. The density is extremely low, with imagery serving purely decorative or iconic roles, never as content or product showcases. There is no photography or complex illustration present.

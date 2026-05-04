---
version: alpha
name: Transmissions
description: Transmissions employs a stark, high-fashion editorial aesthetic, characterized by extreme typographic scale shifts and a monochromatic palette. Visual emphasis is achieved through oversized headlines that dominate the canvas, often overlapping imagery, while interactive elements like navigation remain small and subtle. The design relies on high contrast and minimal ornamentation, creating a sense of sophisticated restraint and focus.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  phantom-black: "#010101"
  ghost-gray: "#f5f5f5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.95
spacing:
  elementGap: 12px
  sectionGap: 134px
components:
  header-navigation-link:
    role: Top-level navigation items and brand identifier.
  menu-trigger:
    role: Opens the main site navigation.
  hero-headline:
    role: Dominant, attention-grabbing titles for key sections.
  subtle-helper-text:
    role: Captions and secondary information.
---

## Overview

**North Star:** Monochromatic editorial canvas

Transmissions employs a stark, high-fashion editorial aesthetic, characterized by extreme typographic scale shifts and a monochromatic palette. Visual emphasis is achieved through oversized headlines that dominate the canvas, often overlapping imagery, while interactive elements like navigation remain small and subtle. The design relies on high contrast and minimal ornamentation, creating a sense of sophisticated restraint and focus.

### Do's

- Prioritize Canvas White (#ffffff) and Ink Black (#000000) for high-contrast primary content and backgrounds.
- Use Neue Haas Grotesk Display 64px, lineHeight 0.95, for primary headlines, allowing it to overlap imagery.
- Implement small, minimal textual navigation links (14px Neue Haas Grotesk Display) rather than large buttons or icons.
- Maintain generous vertical spacing between content blocks, with section gaps often at 134px.
- Use Ghost Gray (#f5f5f5) sparingly for subtle background changes or very minimal borders on interactive elements.
- Apply all text in uppercase for headlines and navigation to maintain a stark, editorial tone.

### Don'ts

- Avoid using saturated or chromatic colors; stick strictly to the achromatic palette beyond imagery.
- Do not introduce complex components with multiple styles, shadows, or gradients.
- Refrain from using bold typefaces or heavy weights; 400 and 500 are the heaviest allowed.
- Do not deviate from the tight line heights (0.95-1.00) specified for headlines and 1.20 for body text.
- Do not add any explicit border radii to UI elements; all corners should remain sharp.
- Avoid large primary action buttons; all interactive elements should remain text-based and understated.

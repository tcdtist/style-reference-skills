---
version: alpha
name: Gawker
description: Gawker presents a stark, high-contrast visual system built on black text on a white canvas, reminiscent of traditional newsprint. The design prioritizes readability and directness with minimal embellishment—borders are thin and rectangular, and color is used sparingly, primarily as an electrifying blue accent for interactive elements. Typography is robust and sans-serif, anchoring the content without distraction while a bold, custom headline font injects personality. The overall tone is functional and no-nonsense, with clear visual separation for content blocks.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  faded-silver: "#e5e7eb"
  electric-blue: "#2563eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.6
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.85
spacing:
  elementGap: 16px
  sectionGap: 86px
components:
  navigation-login-button-filled:
    role: Primary call to action in the navigation.
  ghost-action-button:
    role: Secondary action button within content areas.
  outlined-action-button:
    role: Prominent, interactive action that uses brand color for emphasis.
  article-card:
    role: Container for article previews or featured content.
  legal-footer-link:
    role: Informational links in the footer.
---

## Overview

**North Star:** monochromatic newsprint, stark and direct

Gawker presents a stark, high-contrast visual system built on black text on a white canvas, reminiscent of traditional newsprint. The design prioritizes readability and directness with minimal embellishment—borders are thin and rectangular, and color is used sparingly, primarily as an electrifying blue accent for interactive elements. Typography is robust and sans-serif, anchoring the content without distraction while a bold, custom headline font injects personality. The overall tone is functional and no-nonsense, with clear visual separation for content blocks.

### Do's

- Use Midnight Ink (#000000) for all primary text and headlines to maintain high contrast and readability.
- Apply Canvas White (#ffffff) as the primary background for all page sections and content cards.
- Utilize Electric Blue (#2563eb) exclusively for primary interactive elements, such as filled buttons or distinct action borders.
- Employ Faded Silver (#e5e7eb) for subtle separation, such as card borders or thin dividers, keeping the visual hierarchy clear without heavy lines.
- Maintain a consistent 0px border-radius for all interactive components and content blocks to preserve the sharp, direct aesthetic.
- Use 'etna-x-condensed' for impactful display headlines (40px, weight 400) and 'Inter' for all body text and general UI (16px, weight 400).
- Employ `sectionGap` of `86px` for vertical separation between major content blocks.

### Don'ts

- Do not introduce additional saturated colors beyond Electric Blue (#2563eb) for interactive states or accents; maintain a primarily achromatic palette.
- Avoid decorative shadows or complex gradients; the system relies on flat surfaces and clean lines.
- Do not use rounded corners beyond the specified 6px radius for general elements inside the card, if any, or any component for which the radius is specified to be 0px.
- Refrain from using more than two font families; 'Inter', 'Arial', and 'etna-x-condensed' are sufficient for all typographic needs.
- Do not vary line-height inconsistently; adhere to the specified values for each text size to ensure consistent vertical rhythm.
- Avoid placing text directly on top of images or complex backgrounds; content should always reside on clear white or solid surfaces.
- Do not implement extensive iconography; use minimal, functional icons that are single-color if needed.

### Layout

The page adheres to a centered, max-width contained layout for core content. The hero area is currently text-based with a large headline. Sections are defined by generous vertical spacing (86px `sectionGap`) and often feature a card-like structure with distinct borders. Content is primarily stacked vertically, with some grid-like arrangements for interactive elements such (seen in the two-column buttons inside the article card). The navigation is a top-bar with a simple 'Login' button. The overall density is comfortable, with ample whitespace.

### Imagery

This site predominantly features UI elements and typography over imagery. When images or graphics are present, they are either product-focused screenshots or abstract representations, fitting within the stark, direct interface. Icons are likely minimal and monochromatic, serving functional rather than decorative roles. The density is text-dominant.

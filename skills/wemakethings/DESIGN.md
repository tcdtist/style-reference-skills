---
version: alpha
name: Wemakethings
description: Wemakethings uses a high-contrast, stark contemporary language, built on a pure black-and-white canvas that functions both as background and prominent border. Type is central to the identity, featuring two custom display fonts for impact and a contemporary sans-serif for content. The design relies on bold outlines, large-scale typography, and tight visual compositions to convey presence without relying on color or complex layouts.
colors:
  canvas-white: "#ffffff"
  headline-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 2.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.11
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1.11
  hero:
    fontFamily: "system-ui"
    fontSize: 864px
    lineHeight: 0.83
spacing:
  elementGap: 20px
  sectionGap: 60px
components:
  navigation-link:
    role: Primary navigation element
  outlined-button:
    role: Call to action for external links
  scroll-indicator:
    role: Visual cue for more content
---

## Overview

**North Star:** monochrome architectural blueprint

Wemakethings uses a high-contrast, stark contemporary language, built on a pure black-and-white canvas that functions both as background and prominent border. Type is central to the identity, featuring two custom display fonts for impact and a contemporary sans-serif for content. The design relies on bold outlines, large-scale typography, and tight visual compositions to convey presence without relying on color or complex layouts.

### Do's

- Maintain a strict black and white color palette (#000000 and #ffffff) for all UI elements.
- Use Maison Neue for all functional text elements, varying weights (400, 500) and sizes to create hierarchy.
- Incorporate large BASEBLOOM outlines as background graphic motifs, as seen in the hero section, to reinforce brand identity.
- Ensure all interactive elements, such as buttons and links, use strong 1px borders of Headline Black (#000000).
- Utilize a rigid 0px border-radius for all rectilinear components like buttons and containers.
- Apply 20px of padding regularly around elements and inside cards to maintain comfortable density.
- Arrange content with clear visual separation, often framed by the implicit 1px borders or explicit blank space around elements.

### Don'ts

- Avoid introducing any additional colors beyond the pure black and white palette.
- Do not use rounded corners or soft edges on any UI elements; maintain sharp, angular forms.
- Refrain from using drop shadows or complex elevation techniques; rely on borders and spatial separation for visual hierarchy.
- Do not use generic system fonts; always specify Maison Neue, Unzyale, or BASEBLOOM for their distinct characteristics.
- Avoid decorative images or illustrations; the primary visual language is driven by typography and structure.
- Do not use subtle color changes for interactive states; rely on underlines, border changes, or text weight adjustments.
- Do not break the high-contrast aesthetic with low-contrast text-to-background combinations.

### Layout

The page primarily uses a full-bleed model, allowing content and large typographic elements to stretch across the viewport, rather than conforming to a strict max-width container. The hero features a large, horizontally stretching headline and subtext, with a massive outlined typography graphic ('BASEBLOOM') in the background, anchoring the visual style. Sections divide content vertically with consistent spacing (e.g., 60px section gap) and often feature large-scale text as a dominant visual. Content arrangement is primarily stacked centrally or in simple 2-column structures, with a notable exception being the 'Brands' section which uses a 10-column, vertically oriented title card grid, each flanked by a narrow outline. Navigation is a minimalist top bar, fixed to the top of the viewport, with textual links and a subtle arrow icon.

### Imagery

The site uses no traditional imagery (photography, illustration, or product shots). Instead, large-scale, outlines of custom typography, specifically 'BASEBLOOM WE MAKE', serve as the primary visual elements. These typographic 'images' are full-bleed (or near full-bleed), integrated into the background structure of sections, providing a strong, graphic, and highly branded visual identity. Icons, when present, are minimal and outlined, like the arrow scroll indicator, keeping true to the monochrome, high-contrast aesthetic.

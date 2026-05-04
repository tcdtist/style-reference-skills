---
version: alpha
name: Grafik
description: Grafik employs a stark, high-contrast visual language reminiscent of a curated exhibition space. The design centers on a minimal, off-white canvas punctuated by absolute black typography, creating a powerful, almost brutalist aesthetic. Content is presented in framed, distinct blocks, often showcasing embedded digital interfaces within a larger grid. There's a deliberate lack of decorative elements, focusing instead on sharp edges, precise layout, and the interplay of negative space.
colors:
  absolute-black: "#000000"
  canvas-parchment: "#f0eeeb"
  interaction-white: "#ffffff"
  hyperlink-blue: "#454ade"
  dark-granite: "#959697"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.11
    letterSpacing: -0.38px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.2px
spacing:
  elementGap: 12px
components:
  navigation-link:
    role: Primary navigation elements in the header and footer.
  content-block-frame:
    role: Container for all visual and text content sections.
  project-metadata-text:
    role: Descriptive text accompanying project visuals, often small and positioned within content blocks.
  time-location-text:
    role: Small, informational text like current time and location in the header.
---

## Overview

**North Star:** Gallery Grid, high contrast.

Grafik employs a stark, high-contrast visual language reminiscent of a curated exhibition space. The design centers on a minimal, off-white canvas punctuated by absolute black typography, creating a powerful, almost brutalist aesthetic. Content is presented in framed, distinct blocks, often showcasing embedded digital interfaces within a larger grid. There's a deliberate lack of decorative elements, focusing instead on sharp edges, precise layout, and the interplay of negative space.

### Do's

- Prioritize high contrast between text and background, using Absolute Black (#000000) on Canvas Parchment (#f0eeeb) predominantly.
- Frame all content elements with crisp, 1px Absolute Black (#000000) borders to create distinct visual blocks.
- Employ Grotesk font at weight 400 for all textual content, ensuring consistent visual tone and applying tight letter-spacing as specified.
- Maintain a clear visual hierarchy by utilizing the full-width grid for content alignment and section breaks, emphasizing negative space.
- Use Canvas Parchment (#f0eeeb) as the primary page background to provide a neutral, gallery-like setting.
- Apply a generous sectionGap of 225px to separate major content blocks vertically, enhancing the sense of space and visual quiet.
- Incorporate `dlig` font feature settings for all Grotesk text to maintain brand typographic distinctiveness.

### Don'ts

- Avoid using curved edges or soft shadows; the design relies on sharp angles and flat surfaces.
- Do not introduce gradients or complex color palettes; limit color use strictly to the defined monochrome scale with minimal accent.
- Refrain from using varied font weights or families; Grotesk 400 is the singular typographic voice.
- Do not break away from the content block framing; every significant piece of content should reside within an implied or explicit container with defined borders.
- Avoid decorative imagery or large background visuals; the focus is on content within a structured, minimal interface.
- Do not use generic button styles; interactive elements should be minimal, often text-based or outlined with the core monochrome palette.
- Do not vary line-height based on individual preference; adhere to the specified line-heights of 1.0, 1.11, and 1.2 for the respective font sizes.

### Layout

The page follows a full-bleed, almost grid-like structure without a fixed max-width container, allowing content to stretch across the viewport. The hero section often features large, impactful imagery or an inverted color scheme with Absolute Black background and white text. Sections are clearly delineated by substantial vertical spacing (sectionGap of 225px) and a strong implied grid system. Content is arranged in a dynamic, sometimes asymmetric pattern of text and visual blocks, often appearing as framed modules. The navigation is minimal, with a fixed header containing brief text links, and a rich, interactive footer.

### Imagery

The site uses a mix of high-fidelity product screenshots of digital interfaces and impactful, often edgy, black and white artistic photography. Product screenshots are typically rendered within device frames, demonstrating the work in context. Photography is raw, portrait-oriented, and high-contrast, contributing to a strong, independent aesthetic. All imagery is contained within explicit content blocks, often framed by borders, and serves to showcase portfolio work rather than purely decorative purposes. The density is medium, with images being key content, occupying significant visual space in a grid layout.

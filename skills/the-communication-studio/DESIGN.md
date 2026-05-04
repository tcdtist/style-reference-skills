---
version: alpha
name: The Communication Studio
description: The Communication Studio employs a refined, subdued aesthetic reminiscent of gallery curation. Projects are presented as a grid of art pieces, framed with subtle borders and minimal text overlays. The palette is predominantly achromatic, allowing the richly colored photography to take center stage. Typography is clean and functional, supporting the visual content without distraction, creating a calm and contemplative browsing experience centered on visual storytelling.
colors:
  canvas-fog: "#dad5cf"
  border-ash: "#e5e7eb"
  type-ink: "#000000"
  text-ghost: "#ffffff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.15
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.13
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
spacing:
  cardRadius: 0px
  elementGap: 10px
components:
  project-gallery-card:
    role: Displays individual project entries within a grid.
  image-overlay-text-project-title:
    role: Provides context and title for project images.
---

## Overview

**North Star:** Gallery Grid on Canvas

The Communication Studio employs a refined, subdued aesthetic reminiscent of gallery curation. Projects are presented as a grid of art pieces, framed with subtle borders and minimal text overlays. The palette is predominantly achromatic, allowing the richly colored photography to take center stage. Typography is clean and functional, supporting the visual content without distraction, creating a calm and contemplative browsing experience centered on visual storytelling.

### Do's

- Prioritize image content: allow rich photography to dominate the visual space, framing them without heavy UI elements.
- Maintain an achromatic canvas: use Canvas Fog (#dad5cf) for primary backgrounds and Border Ash (#e5e7eb) for subtle structural borders, ensuring photography is the main source of color.
- Uncluttered navigation: implement minimalist navigation with Text Ghost (#ffffff) against dark headers and Type Ink (#000000) against lighter sections.
- Use Helvetica Neue weight 400 for all text: create hierarchy solely through font size (15px, 20px, 36px) and line height, not varying weights.
- Employ square, sharp-edged imagery: all imagery and cards should have a 0px border-radius, emphasizing a gallery-like presentation.
- Structure content in tight, borderless grids for projects: rely on the natural boundaries of images rather than explicit card borders or heavy padding.
- Use Type Ink (#000000) for all main body and heading text for strong contrast against backgrounds.

### Don'ts

- Do not introduce strong accent colors: color should primarily come from project photography, not UI elements.
- Avoid decorative shadows or complex elevation: maintain a flat, clean aesthetic with no box shadows for cards or images.
- Do not vary font weights: stick strictly to Helvetica Neue weight 400 as the only text weight to uphold consistency and subtlety.
- Refrain from using heavily padded or bordered components: keep elements visually lightweight and seamless.
- Do not use rounded corners: all visual elements, especially images and content blocks, must retain sharp, 0px corners.
- Avoid excessive whitespace between project grid items: maintain a comfortable 10px element gap for a cohesive gallery feel.
- Do not add any explicit CTA background colors: user interaction is indicated by text color changes and subtle hover effects, not filled buttons.

### Layout

The page employs a full-width and contained model; while the main content is within a horizontal flow, the header elements are distributed across the full width. The hero section is characterized by a prominent background image that defines the initial visual impact. Content is arranged in a dense, uniform grid of three columns, creating a gallery-like presentation for projects. Sections flow seamlessly with consistent vertical spacing (18px section gap), lacking explicit dividers, allowing images to define the visual rhythm. Navigation is minimal, limited to a sticky header with a few links.

### Imagery

This site predominantly uses high-quality, product-focused, and event photography. Images are presented full-bleed within their grid containers, with crisp, sharp edges (0px border-radius). The photography covers a range of lighting from high-key product shots to moodier event scenes, often with rich, saturated colors that stand out against the achromatic UI. Imagery serves as both atmospheric and explanatory content, showcasing projects and experiences. The visual density is image-heavy, with text serving as minimal overlay or supportive captions.

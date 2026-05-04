---
version: alpha
name: Minimalissimo
description: Minimalissimo embodies a restrained, almost stark aesthetic where content is paramount. It utilizes an achromatic palette with crisp contrasts, creating an open and airy feel. Typography is compact and precise, driving hierarchy and focus without visual flourish. Components maintain a ghost-like presence, subtly hinting at interaction rather than demanding attention, ensuring images and text are the primary visual experience.
colors:
  inkwell: "#000000"
  canvas: "#f5f5f5"
  sterling: "#999999"
  porcelain: "#ffffff"
  pale-ash: "#e0e0e0"
  storm-gray: "#a1a1a1"
  whisper-white: "#efefef"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 96px
components:
  ghost-button:
    role: Minimalist interactive element
  subtle-filled-button:
    role: Call to action or form submission
  text-link-item:
    role: Navigation and content linking
  minimal-input-field:
    role: User input for forms
  image-grid-card:
    role: Displaying content previews in a grid
---

## Overview

**North Star:** White gallery canvas.

Minimalissimo embodies a restrained, almost stark aesthetic where content is paramount. It utilizes an achromatic palette with crisp contrasts, creating an open and airy feel. Typography is compact and precise, driving hierarchy and focus without visual flourish. Components maintain a ghost-like presence, subtly hinting at interaction rather than demanding attention, ensuring images and text are the primary visual experience.

### Do's

- Use GeistSans 400 for all typographic elements, varying only size for hierarchy.
- Maintain high contrast text with Inkwell (#000000) on Canvas (#f5f5f5) or Porcelain (#ffffff) backgrounds.
- Apply a 4px border-radius to all interactive elements like buttons and input fields.
- When a button is not a primary action, render it as text-only with Inkwell (#000000) for a ghost-like appearance.
- Utilize Whisper White (#efefef) sparingly, primarily for subtle input backgrounds or very soft button fills.
- Separate content sections with ample vertical spacing, defaulting to sectionGap (96px) where appropriate.
- Prioritize photography and crisp typography as primary visual elements, minimizing decorative UI.

### Don'ts

- Avoid using any chromatic colors; maintain a purely achromatic palette.
- Do not introduce heavy borders, drop shadows, or strong gradients that would detract from the content.
- Refrain from using multiple font families or font weights other than 400 for GeistSans.
- Do not clutter layouts with excessive UI elements; focus on functional minimalism.
- Avoid large, attention-grabbing primary action buttons; keep interactive elements understated.
- Do not apply padding or visible backgrounds to image grid items; let them float on the Canvas background.
- Do not use underlines for links unless absolutely necessary for clarity in dense text blocks.

### Layout

The site uses a full-bleed layout for its main content carousels and image galleries, allowing visuals to dominate the viewport. The page content itself is largely max-width constrained in some sections, with a centered composition for text blocks. The hero section often presents a large visual or a collection of content cards. Section rhythm is driven by substantial vertical gaps, creating clear visual breaks without explicit dividers. Content arrangement frequently uses large, impactful images or image grids where elements are often isolated. Navigation is minimal, likely restricted to a top bar menu.

### Imagery

The imagery leans heavily on high-quality product photography and architectural shots, often featuring single, isolated subjects against a clean, white, or light gray background. There's a strong emphasis on form, texture, and object design. Photography is typically high-key, well-lit, and product-focused, with minimal lifestyle context. Illustrations are non-existent. Iconography is minimalist, using simple outlines or solid fills in Inkwell to blend with the text, serving purely functional roles without decorative flair. Imagery is dense, often occupying large portions of the screen, acting as content rather than mere decoration.

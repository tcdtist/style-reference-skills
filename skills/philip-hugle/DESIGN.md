---
version: alpha
name: Philip Hugle
description: Philip Hugle's visual system evokes the precision of a printed book combined with a stark, no-frills digital portfolio. It uses a strictly monochrome palette, with an emphasis on crisp black text against a white background, punctuated by thin black borders. Typography leans towards the classic and readable, while the layout maintains a high contrast, almost architectural feel with generous whitespace and a clear, linear flow.
colors:
  inkwell-black: "#000000"
  canvas-white: "#ffffff"
  project-background: "#eeeeee"
spacing:
  elementGap: 16px
  sectionGap: 64px
components:
  project-card:
    role: Displays individual project previews.
  outlined-link:
    role: Interactive text link, sometimes with a border.
---

## Overview

**North Star:** Monochrome Architectural Print

Philip Hugle's visual system evokes the precision of a printed book combined with a stark, no-frills digital portfolio. It uses a strictly monochrome palette, with an emphasis on crisp black text against a white background, punctuated by thin black borders. Typography leans towards the classic and readable, while the layout maintains a high contrast, almost architectural feel with generous whitespace and a clear, linear flow.

### Do's

- Prioritize readability with Georgia font set to 16px for all textual content.
- Maintain a clear visual hierarchy using Inkwell Black for all text against Canvas White or Project Background surfaces.
- Use 0px for all border-radius values, eliminating soft edges and maintaining a sharp, architectural aesthetic.
- Employ thin, 1px Inkwell Black borders for interactive elements requiring emphasis, such as links or calls to action.
- Apply 16px of padding consistently around content blocks and within components like Project Cards.
- Ensure generous vertical spacing between sections, aiming for a minimum of 64px to create an airy, uncrowded feel.
- Center all page content within a maximum width of 705px, except for full-bleed background sections, to maintain content focus.

### Don'ts

- Avoid using any colors outside of the defined monochrome palette of Inkwell Black, Canvas White, and Project Background.
- Do not introduce shadows or any form of elevation; the design relies on flat surfaces and minimal depth.
- Refrain from using varied font sizes or weights; Georgia 400 at 16px defines the entire typographic scale.
- Do not add any decorative elements or gradients; the aesthetic is strictly functional and content-focused.
- Avoid variable letter-spacing; all text uses normal letter-spacing, contributing to a print-like consistency.
- Do not use subtle tints or shades to create different surface levels; rely explicitly on Canvas White and Project Background.
- Never use rounded corners on any UI element; all shapes are strictly rectilinear.

### Layout

The page primarily uses a fixed-width, centered layout with a maximum content width of 705px, surrounded by generous whitespace. The hero section introduces a simple, stacked arrangement of a heading and paragraphs, followed by a linear presentation of projects. Project listings feature alternating `Project Background` sections, giving a subtle visual rhythm without hard dividers. Each project presents a screenshot alongside minimal descriptive text, maintaining a clean, editorial structure. Navigation is minimal, likely restricted to a footer with utility links.

### Imagery

The visual language is dominantly product screenshots or photographs, presented in a raw and contained manner, without any cropping or masking effects. The images are typically embedded within neutral grey backgrounds, suggesting a digital interface context. Photography appears to be varied, ranging from product-focused to environmental, with no consistent color treatment (some color, some grayscale). Icons are not prominently featured, suggesting a focus on content and typography over pictorial navigation or symbolism. Imagery serves as direct demonstration of work, not decorative atmosphere, keeping the content density moderate.

---
version: alpha
name: Bareis + Nicolaus
description: Bareis + Nicolaus employs a high-contrast, starkly monochrome aesthetic defined by a dominant black canvas and pure white typography. The visual focus is on precise typographic hierarchy and minimal, utilitarian components. Interactivity is signaled through inverted color states or simple bordering, maintaining a graphic, almost print-like presentation with deep, comfortable spacing that allows elements to breathe.
colors:
  canvas-black: "#000000"
  arctic-white: "#ffffff"
  subtle-gray: "#a9a9a9"
spacing:
  elementGap: 13px
  sectionGap: 29px
components:
  pill-button-dark-filled:
    role: Primary action, navigation items
  pill-button-light-filled:
    role: Active state or selected filter
  pill-button-ghost:
    role: Secondary actions, filters, navigation
  content-card-default:
    role: Project showcase, content containers
  footer-link:
    role: Informational links in the footer
---

## Overview

**North Star:** Graphic Monochrome Canvas: crisp, high-contrast, typographic art.

Bareis + Nicolaus employs a high-contrast, starkly monochrome aesthetic defined by a dominant black canvas and pure white typography. The visual focus is on precise typographic hierarchy and minimal, utilitarian components. Interactivity is signaled through inverted color states or simple bordering, maintaining a graphic, almost print-like presentation with deep, comfortable spacing that allows elements to breathe.

### Do's

- Prioritize Canvas Black (#000000) as the dominant background color for all primary surfaces.
- Use Arctic White (#ffffff) exclusively for primary text, borders, and active states to maintain high contrast.
- Apply a 120px border radius to all interactive elements like buttons and navigation items for a consistent 'pill' shape.
- Maintain a 2px stroke width for all borders, particularly for ghost buttons and interactive links (e.g., Arctic White on Canvas Black).
- Employ the Lausanne font for all navigational text, headings, and body copy to ensure brand consistency.
- Utilize 13px as the primary 'elementGap' between interactive components and internal card padding.

### Don'ts

- Avoid using saturated colors; the system relies strictly on a monochrome palette of Canvas Black, Arctic White, and Subtle Gray.
- Do not introduce shadows or elevation; surfaces are flat and blend seamlessly into the background.
- Never deviate from the 2px border width for interactive elements, as this is a core stylistic cue.
- Do not use highly decorative gradients or background images in primary UI components; the focus is on typography and clean interaction.
- Avoid arbitrary changes in border radius; the 120px value is a signature design element for interactive components.
- Do not use font weights other than 400 for any of the typefaces, as weight variation is not part of the system's expressive range.

### Layout

The page structure is a split layout: a dominant left-hand navigation and content area, set against a dynamic, image-heavy right column that showcases projects in a full-bleed manner. The left column maintains a contained max-width of 721px. Sections are visually separated by deep vertical spacing provided by a 29px section gap. The hero section is characterized by large, bold typography on the left and a prominent, full-bleed image on the right. Content within the left column is often a centered stack of typographic elements and pill-shaped filters. Navigation is a sticky top bar within the left column.

### Imagery

This system features a dynamic mix of product photography and lifestyle imagery, often cropped and presented within a full-bleed grid pattern that contrasts sharply with the typographic UI. Photography is typically vibrant and detailed, often showing close-ups or action shots. The imagery acts as the visual counterpoint to the stark, minimal UI, providing bursts of detailed, contextual information. Images are generally contained within their own visual blocks, without overlapping, and often appear as part of a two-column grid. Icons are simple, outlined, and monochromatic, matching the overall UI aesthetic.

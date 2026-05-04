---
version: alpha
name: Dul Zorigoo
description: Dul Zorigoo's design system evokes an organized, understated workspace with strong typographic presence. It uses a near-monochromatic palette where all interface elements exist within a narrow range of grays, allowing content to take visual precedence. Interactions are subtle, marked by soft borders and minimal spatial shifts rather than vivid color, creating a quiet, focused user experience.
colors:
  canvas: "#ffffff"
  tarmac: "#252525"
  fog: "#ebebeb"
  asphalt: "#a8a8a8"
  pebble: "#8e8e8e"
  midnight: "#000000"
  ivory: "#fbfbfb"
spacing:
  buttonRadius: 8px
  elementGap: 6px
  sectionGap: 32px
components:
  ghost-filter-button:
    role: Used for navigation and filtering categories
  pill-filter-button:
    role: Used for navigation and filtering categories
  active-pill-button:
    role: Indicates the currently selected filter or category.
  thumbnail-card:
    role: Displays content previews, typically an image with a text label below.
  subtle-link:
    role: Standard inline links and navigation items within sidebars.
---

## Overview

**North Star:** Monochrome, text-first workbench.

Dul Zorigoo's design system evokes an organized, understated workspace with strong typographic presence. It uses a near-monochromatic palette where all interface elements exist within a narrow range of grays, allowing content to take visual precedence. Interactions are subtle, marked by soft borders and minimal spatial shifts rather than vivid color, creating a quiet, focused user experience.

### Do's

- Prioritize Tarmac (#252525) for all primary text and headings.
- Use Canvas (#ffffff) for all main backgrounds and surface elements.
- Define separation with Fog (#ebebeb) for subtle borders and dividers.
- Apply an 8px border-radius to all interactive elements like buttons and links.
- Use Midnight (#000000) and Ivory (#fbfbfb) exclusively for primary active button states.
- Maintain a conservative use of spacing, adhering to 6px for element gaps and 32px for section separation.

### Don'ts

- Avoid using saturated or vivid colors; the palette is strictly achromatic with very limited exceptions.
- Do not introduce strong shadows or excessive elevation; the design relies on flat surfaces and subtle borders.
- Do not use multiple font families; all typography should adhere to the singular, strong typographic voice.
- Avoid large, decorative headings; headlines are typically concise and integrated into the content flow.
- Do not apply padding or margins that significantly deviate from the established 4px base unit or token values.
- Do not use `0px` border-radius for interactive elements unless it's a specific ghost button variant.

### Layout

The page uses a maximum content width of 1137px, centrally aligned. The hero section is subtle, starting with text on the left and evolving into a grid of content. Content is arranged predominantly in a multi-column grid, often 2 or 3 columns, where visual elements (photos/screenshots) are paired with text labels below. Vertical rhythm is established through consistent 32px section gaps and smaller 6px element gaps. Navigation is sidebar-based, with current status highlighted by small borders, complemented by horizontal filter buttons above content areas.

### Imagery

This system primarily uses static photography and product UI screenshots. Photography ranges from evocative black & white landscapes to slightly desaturated color images, often cropped tightly or presented within contained frames. UI screenshots are functional and explanatory, blending seamlessly into the monochromatic design. Imagery serves a decorative and illustrative role, providing context and visual interest without overwhelming the clean interface. Icons, where present, are minimal, outlined, and monochromatic, typically in Tarmac (#252525).

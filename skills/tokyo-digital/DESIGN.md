---
version: alpha
name: Tokyo Digital
description: Tokyo Digital evokes a 'midnight command center' aesthetic, designed around a stark black canvas and crisp white typography. The system emphasizes clear information delivery through strong typographic hierarchy and minimal UI embellishments. Interactive elements are subtly delineated by outlines or slight opacity shifts, maintaining a low-key, professional atmosphere. Visual interest is primarily driven by dynamic hero content and the interplay of negative space.
colors:
  absolute-zero: "#000000"
  canvas-white: "#ffffff"
  ghost-gray: "#808080"
  muted-action: "#999999"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 1.1
spacing:
  buttonRadius: 8px
  elementGap: 4px
  sectionGap: 120px
components:
  primary-filled-button-circular:
    role: Interactive element, often seen with zero padding for large click areas or icons.
  text-input-field:
    role: Standard form input for collecting user data.
  client-logo-grid-item:
    role: Displaying brand partners, often in a grid.
---

## Overview

**North Star:** midnight command center

Tokyo Digital evokes a 'midnight command center' aesthetic, designed around a stark black canvas and crisp white typography. The system emphasizes clear information delivery through strong typographic hierarchy and minimal UI embellishments. Interactive elements are subtly delineated by outlines or slight opacity shifts, maintaining a low-key, professional atmosphere. Visual interest is primarily driven by dynamic hero content and the interplay of negative space.

### Do's

- Maintain a predominantly black background using #000000 for canvas and main surfaces.
- Use #ffffff for primary text content against dark backgrounds to ensure high contrast.
- Apply Aeonik at weight 400 for body text and 300 for headings to create an airy, authoritative feel.
- Use 8px border-radius generously for interactive elements like buttons and input fields.
- Delimit input fields with a subtle rgba(255,255,255,0.5) border for a 'ghost' UI effect.
- Employ sections with 120px vertical padding for clear content separation.

### Don'ts

- Avoid using strong, saturated colors for UI elements; stick to the achromatic palette with minimal accent.
- Do not introduce heavy box shadows or elevation effects; the design relies on flatness and sharp contrast.
- Do not compromise on the high contrast between text and background; low contrast text is not part of this system.
- Avoid decorative borders on card elements; instead, use spacing to define content blocks.
- Do not vary line-height significantly from the defined font profiles, especially for headings, to preserve typographic rhythm.
- Do not apply padding to cards or grid items unless specifically requested; design expects zero-padded elements by default.

### Imagery

This system features a mix of dynamic, full-bleed 3D rendered scenes (like the initial car interior) and abstract, colorful visuals for the hero section, contrasted with clean, product-focused logos for client showcases. Imagery is primarily decorative and atmospheric, acting as a backdrop or visual metaphor. Icons, if present, are minimal and likely outlined. The density is high in hero sections, with imagery dominating, while content sections are text-dominant with client logos serving as visual points. Photography is largely absent; the emphasis is on digital-native graphical elements.

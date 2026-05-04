---
version: alpha
name: Diogo Akio
description: Diogo Akio's design system evokes a minimalist gallery experience. It operates on a dark canvas, providing a stark backdrop for high-contrast white typography and isolated portfolio pieces. The aesthetic prioritizes clarity and directness through generous spacing and a strong typographic focus, with minimal use of color or elaborate components. The system is designed to showcase content without visual distraction, relying on subtle interactions and precise spatial relationships.
colors:
  pitch-black: "#000000"
  slate-canvas: "#151515"
  deep-plum: "#1c2763"
  canvas-white: "#ffffff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.2
    letterSpacing: -0.31px
spacing:
  elementGap: 19px
  sectionGap: 30px
components:
  ghost-header-cta-button:
    role: Primary call to action in the header.
  project-card:
    role: Showcases individual portfolio projects.
  footer-detail-list:
    role: Provides secondary navigation and information at the page bottom.
---

## Overview

**North Star:** Shadowbox gallery display

Diogo Akio's design system evokes a minimalist gallery experience. It operates on a dark canvas, providing a stark backdrop for high-contrast white typography and isolated portfolio pieces. The aesthetic prioritizes clarity and directness through generous spacing and a strong typographic focus, with minimal use of color or elaborate components. The system is designed to showcase content without visual distraction, relying on subtle interactions and precise spatial relationships.

### Do's

- Prioritize Pitch Black, Slate Canvas, and Canvas White as the core color palette; avoid introducing additional saturated colors.
- Use Helvetica Neue LT Pro Roman at 16px (line height 1.4, letter spacing 0.02em) for all body text and small UI elements.
- Apply Pitch Black as the default background for all primary sections to maintain a consistent dark theme.
- Utilize 30px for vertical gaps between major sections to ensure generous content separation.
- Define interactive elements with Canvas White text and a 1px Canvas White border or outline against dark backgrounds.
- Employ consistent 0px border-radius across all UI elements for a sharp, rectilinear aesthetic.
- Maintain an element gap of 19px for consistent horizontal and vertical spacing between most UI components.

### Don'ts

- Do not introduce complex shadows or gradients; rely on color contrast and spatial arrangement for visual hierarchy.
- Avoid using multiple font families or excessive font weights; Helvetica Neue LT Pro Roman 400 is the only typeface.
- Do not use small, dense text blocks; leverage 16px as the minimum text size and ample line-height for readability.
- Refrain from adding decorative iconography or illustrations that deviate from the stark, functional aesthetic.
- Do not break the dark theme with large, light-colored sections; maintain the dominant Pitch Black canvas.
- Avoid inconsistent spacing, as precise and generous spacing is critical to the system's minimalist identity.
- Do not use rounded corners on any UI elements; all shapes should be rectilinear and sharp.

### Layout

The page employs a full-bleed layout for its main content, with a centered max-width constraint for text elements like the header and footer. The hero section is characterized by a prominent centered headline over a dark background. Content areas for portfolio pieces are presented as large, often full-width image blocks. The overall rhythm is established by consistent vertical spacing (30px section gaps) and horizontal consistency in text elements. Navigation is minimal, limited to text links and a ghost 'menu' indicator in the top right. The layout is spacious, giving visual elements ample room to breathe against the dark canvas.

### Imagery

The site's imagery consists of high-quality product design visuals and atmospheric architectural photography. These images are large, often full-bleed within their respective containers, and act as primary visual anchors. They are rendered with realistic textures and lighting, presenting content as a focal point. There is no consistent icon style revealed, but the '+' icon in the header suggests a minimal, outlined approach for functional iconography. Imagery serves to showcase portfolio work and establish visual atmosphere rather than being purely decorative.

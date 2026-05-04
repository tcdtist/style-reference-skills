---
version: alpha
name: Nornorm
description: Nornorm presents a stark, almost architectural aesthetic: clean white surfaces and deep, commanding dark typography with a single, highly saturated violet acting as a functional highlight for interactive elements and brand accents. The design emphasizes content clarity and a sense of gravity, achieved through generous negative space and a reserved use of color. Component styles are minimal, often borderless or using subtle outlines, allowing the strong typographic voice and the violet accent to direct focus.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  storm-gray: "#6a6a6a"
  light-ash: "#f1efe9"
  frost: "#ececec"
  command-violet: "#1e37a0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
    letterSpacing: -0.03px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
    letterSpacing: -0.03px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.03px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: -0.03px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.03px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.03px
spacing:
  buttonRadius: 1440px
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-navigation-button:
    role: Primary navigation links and interactive textual buttons that blend into the background.
  subtle-gray-button:
    role: Secondary action buttons with a soft visual emphasis.
  command-violet-filled-button:
    role: Primary call-to-action buttons, indicating strongest interactive focus.
  feature-card:
    role: Informational cards presenting key selling points or content blocks.
  header-navigation-item:
    role: Top-level navigation links.
---

## Overview

**North Star:** Architectural Blueprint on White

Nornorm presents a stark, almost architectural aesthetic: clean white surfaces and deep, commanding dark typography with a single, highly saturated violet acting as a functional highlight for interactive elements and brand accents. The design emphasizes content clarity and a sense of gravity, achieved through generous negative space and a reserved use of color. Component styles are minimal, often borderless or using subtle outlines, allowing the strong typographic voice and the violet accent to direct focus.

### Do's

- Prioritize a white (#ffffff) or light ash (#f1efe9) background for main content areas.
- Use Midnight Ink (#000000) for all primary body text and significant headings.
- Apply Command Violet (#1e37a0) exclusively for primary interactive elements, brand accents, and decorative borders on textual elements.
- Maintain tight letter-spacing (-0.03em) across all Lunar typography to ensure a compact and serious tone.
- Implement the large 1440px border-radius for 'pill' shaped buttons and a consistent 8px radius for container-like elements such as links and potentially filled buttons.
- Ensure generous vertical spacing between sections, adhering to a 48px section gap, allowing content to breathe.
- Use Storm Gray (#6a6a6a) for all secondary, supporting text and subtle UI borders.

### Don'ts

- Avoid using highly saturated colors other than Command Violet (#1e37a0) in the primary UI.
- Do not introduce heavy shadows or gradients, as the system relies on flat surfaces and high contrast.
- Do not deviate from the strict letter-spacing values; even slight changes will undermine the typographic identity.
- Avoid using multiple border styles or thicknesses, sticking to minimal or no borders for most elements except for specific accents.
- Do not use small, playful, or highly decorative typography; maintain the serious and professional character of Lunar.
- Avoid dense UIs; prioritize clear information hierarchy with ample negative space.
- Do not apply a border-radius of 0px to interactive surface-level buttons or links except for specific 'ghost' button variants.

### Layout

The page generally follows a max-width contained model, ensuring content is centered and readable, although the hero section appears full-bleed. The hero pattern consists of a large, commanding centered headline overlaid on a rich, textural image, accompanied by ghost and subtle gray buttons. Section rhythm is primarily defined by alternating subtle background colors (white and light ash) and consistent vertical spacing (48px section gap), creating distinct content blocks. Content arrangement frequently uses 2-column or 4-column grids for feature lists and imagery, with a strong preference for centered text stacks for main headings and descriptive paragraphs. A sticky header provides persistent navigation.

### Imagery

The visual language predominantly features high-key, product-focused photography and abstract 3D renders with a monochromatic or desaturated color palette, often featuring clean lines and precise arrangements. Photography focuses on office environments and furniture, presented in a minimalist, often uncropped or full-bleed manner. Illustrations appear as flat, geometric, and monochromatic representations of concepts, primarily used for explanatory purposes within content cards. Icons are subtle, leveraging the primary text color, typically outlined. Imagery serves to showcase products and explain concepts, maintaining a clean and professional aesthetic with a medium density, allowing UI elements and text to dominate.

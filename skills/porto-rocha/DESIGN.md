---
version: alpha
name: PORTO ROCHA
description: PORTO ROCHA's visual system evokes a meticulous, editorial aesthetic, balancing dense information display with distinct graphic elements. Typography drives hierarchy, utilizing a subtle letter-spacing for large text and monochromatic backgrounds that let content and occasional vibrant imagery take center stage. Components are understated, opting for soft corners and ghosted forms, providing a sophisticated framework without visual clutter. The overall impression is one of grounded, professional clarity with precise, almost architectural spacing.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  storm-gray: "#808080"
  card-wash: "#0000000A"
  accent-blue: "#007aff"
spacing:
  elementGap: 8px
  sectionGap: 40px
components:
  ghost-button:
    role: Interactive element
  pill-button:
    role: Interactive element
  feature-card-ghost:
    role: Content display
  project-preview-card:
    role: Interactive content preview
  navigation-item:
    role: Navigation element
---

## Overview

**North Star:** Editorial Grid on Canvas White

PORTO ROCHA's visual system evokes a meticulous, editorial aesthetic, balancing dense information display with distinct graphic elements. Typography drives hierarchy, utilizing a subtle letter-spacing for large text and monochromatic backgrounds that let content and occasional vibrant imagery take center stage. Components are understated, opting for soft corners and ghosted forms, providing a sophisticated framework without visual clutter. The overall impression is one of grounded, professional clarity with precise, almost architectural spacing.

### Do's

- Use 'Canvas White' (#ffffff) as the default background for all page sections and primary content areas.
- Apply 'Midnight Ink' (#000000) for all primary text, main headings, and significant borders to maintain sharp contrast.
- Employ sf-pro-text, weight 400, with a size of 14px and lineHeight 1.25 for all body copy and standard interface labels.
- Utilize sf-pro-display, weight 400, with a size of 23px, lineHeight 1.17, and letter-spacing `0.0200em` for prominent headlines.
- Implement an 8px radius ('default') for all cards, buttons, and navigation elements.
- Separate content blocks with a consistent 20px marginTop between cards to ensure comfortable density.
- Utilize 'Storm Gray' (#808080) for secondary details, helper text, and subtle visual distinctions.

### Don'ts

- Avoid using multiple chromatic colors; 'Accent Blue' (#007aff) is reserved for very specific, isolated highlights.
- Do not introduce heavy shadows or thick borders; design relies on subtle elevation and clean separation.
- Do not deviate from the specified font families; custom typefaces are integral to the brand's editorial feel.
- Avoid arbitrary padding values; adhere to the 8px base unit and specified component paddings (e.g., 16px horizontal for buttons).
- Do not use dark backgrounds for primary content sections; the system is designed around a light theme.
- Avoid making text small or condensed; the type system prioritizes readability with moderate sizes and generous line heights.

### Layout

The page model is a two-column structure with a fixed-width left navigation/sidebar and a flexible, scrolling main content area. The hero section within the main content is often full-width relative to its container, featuring prominent imagery or editorial layouts. Section rhythm is consistent, primarily using a vertical flow with a comfortable amount of space between content blocks. Content is arranged in flexible card grids and editorial-style image-and-text pairings, often with images dictating flow. The primary navigation is a static sidebar, while content navigation includes scrollable horizontal carousels and vertical lists of cards.

### Imagery

The visual language is characterized by realistic, often textural or architectural photography and product-focused imagery. Photography varies between full-bleed, vibrant, editorial-style shots with strong compositions (like the 'Program 2025' image) and monochromatic, structured images of buildings or objects. Imagery is used decoratively to set atmosphere and explanatory content, often contained within cards or grid elements. There is a strong absence of illustrations; the focus is on tangible, real-world art and design. Icons are minimal, appearing as solid fills (e.g., brand logos) rather than outlined.

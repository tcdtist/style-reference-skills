---
version: alpha
name: mostlikely
description: The mostlikely design system presents a stark, high-contrast aesthetic reminiscent of architectural blueprints. It uses a minimal palette of pure black and white, creating a dense, graphical quality. Typography is custom and compact, lending a utilitarian yet refined feel. Components are defined by sharp lines and simple forms, emphasizing structure and clarity over elaborate ornamentation. The overall impression is one of directness and essentialism, where every visual element serves a clear functional purpose.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
spacing:
  elementGap: 10px
  sectionGap: 70px
components:
  primary-navigation-link:
    role: Top navigation items
  header-bar:
    role: Persistent top-level navigation and branding container
  interactive-box-with-border:
    role: Interactive elements, image containers, or content blocks
---

## Overview

**North Star:** Architectural blueprint on white marble

The mostlikely design system presents a stark, high-contrast aesthetic reminiscent of architectural blueprints. It uses a minimal palette of pure black and white, creating a dense, graphical quality. Typography is custom and compact, lending a utilitarian yet refined feel. Components are defined by sharp lines and simple forms, emphasizing structure and clarity over elaborate ornamentation. The overall impression is one of directness and essentialism, where every visual element serves a clear functional purpose.

### Do's

- Use Canvas White (#ffffff) as the default background for all page sections and elevated content.
- Apply Ink Black (#000000) for all primary text, borders, and significant structural lines.
- Maintain a consistent 1px solid Ink Black border for all interactive elements, navigation markers, and content dividers.
- Employ the Rondelle typeface at weight 400 for all textual content, prioritizing clarity and directness.
- Utilize 5px vertical padding and 20px horizontal padding for navigation items to create a spacious, balanced feel.
- Ensure all elements maintain sharp, 0px border-radii; rounded corners are not part of this visual system.
- Structure UI with generous horizontal spacing, using 70px padding on the left and right for main content areas.

### Don'ts

- Avoid introducing any colors beyond Canvas White and Ink Black, as the system relies on a strictly monochrome palette.
- Refrain from using shadows or elevation effects; the design emphasizes flatness and clean lines.
- Do not apply rounded corners to any UI elements; all corners should be sharp and right-angled.
- Avoid decorative gradients or complex backgrounds; stick to solid color fills.
- Do not use generic system fonts; always specify 'Rondelle' for text.
- Do not use letter-spacing adjustments unless explicitly defined for a specific text style; default to normal.
- Avoid overly dense information layouts; prioritize comfortable spacing and clear segmentation of content.

### Layout

The page uses a maximum-width contained layout, with a prominent header that is full-width but visually contains elements. The hero section, as implied by the large black shapes, appears to break out of this containment, using full-bleed graphical elements. Content is arranged in a fluid manner, with clear vertical spacing between implied sections. The primary navigation is a horizontal bar at the top, emphasizing a clear, linear flow. The overall density feels open, with significant white space surrounding content.

### Imagery

The site employs a combination of abstract, granular black shapes and minimal iconography. There is no photography or complex illustrations. Graphics appear as large, sometimes masked, black forms with a textured, noisy fill, contrasting sharply with the white canvas. Icons are strictly outlined and monochrome, matching the overall stark aesthetic. Imagery serves a decorative and atmospheric role, adding a raw, tactile quality without distracting from the UI.

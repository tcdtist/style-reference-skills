---
version: alpha
name: Schema
description: Schema by Figma employs a bold, graphic language, reminiscent of abstract art on an interactive canvas. Its foundation is a stark black and white palette, punctuated by large, flat blocks of vivid and muted chromatic colors that act as dividers and background accents. Typography is primarily functional, featuring custom sans-serifs that maintain clarity even at large display sizes, often against contrasting backgrounds. The layout is structured yet playfully asymmetric, utilizing full-width sections that transition between solid colors and complex, overlapping geometric patterns, often making strong use of negative space.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  pale-mist: "#e2e2e2"
  charcoal-text: "#0f0f0f"
  jade-accent: "#24cb71"
  aqua-wash: "#c7f8fb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.22
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1.12px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.44px
spacing:
  buttonRadius: 20px
  elementGap: 24px
  sectionGap: 60px
components:
  ghost-button:
    role: Primary interactive element for event registration or key actions.
  navigation-link:
    role: Top-level navigation items.
  section-divider-accent:
    role: Visual separator for content blocks, creating graphic interest.
  speaker-card:
    role: Display individual speaker profiles.
---

## Overview

**North Star:** Abstract art playground

Schema by Figma employs a bold, graphic language, reminiscent of abstract art on an interactive canvas. Its foundation is a stark black and white palette, punctuated by large, flat blocks of vivid and muted chromatic colors that act as dividers and background accents. Typography is primarily functional, featuring custom sans-serifs that maintain clarity even at large display sizes, often against contrasting backgrounds. The layout is structured yet playfully asymmetric, utilizing full-width sections that transition between solid colors and complex, overlapping geometric patterns, often making strong use of negative space.

### Do's

- Prioritize #000000 and #ffffff as primary text and background colors respectively, establishing a high-contrast foundation.
- Use Figma Sans Display for all major headings and prominent text elements, leveraging its varied sizes and tight line heights for impact.
- Apply -0.02em letter-spacing to Figma Sans Display at larger sizes (56px and up) to maintain visual density.
- Utilize Jade Accent (#24cb71) and Aqua Wash (#c7f8fb) as large, flat background color blocks to define sections and provide strong visual breaks.
- Maintain a clear element gap of 24px between distinct interface elements for spaciousness.
- Incorporate 1px solid #000000 borders for subtle delineation of interactive states or containers where a delicate definition is needed.

### Don'ts

- Avoid using soft shadows or gradients for elevation; surfaces should primarily be flat and distinct through color blocks or sharp outlines.
- Do not introduce additional sans-serif fonts; restrict typography to the specified Figma Sans Text, Figma Sans Display, and Source Sans Pro for consistency.
- Refrain from small, intricate patterns; favor large, bold geometric shapes and solid color fields for graphical elements.
- Do not introduce more than two distinct chromatic accent colors per page to maintain the graphic rigor.
- Avoid standard button styles with fills and explicit borders for primary actions; use ghost button treatments or text links within defined areas.
- Do not use smaller spacing units (e.g., 4px, 8px) for large section separation; reserve 60px for section gaps and 24px for component-level spacing.

### Layout

The page primarily uses a full-bleed layout, where sections extend across the full width of the viewport, with content often centered or left-aligned within. The hero section features a stark black background with a large, centered headline. Subsequent sections alternate between solid color backgrounds and more complex, abstract graphic patterns. Content often uses a centered stacking approach or a 2-column layout (text left, image right) within these full-width bands. A 4-column grid is evident for speaker profiles. Vertical spacing is consistent between sections, often using the 60px section gap. Navigation is a minimal top bar, fixed to the top, with simple text links.

### Imagery

The imagery is a blend of abstract geometric compositions and tightly cropped, high-contrast monochrome photography. Abstract graphics feature overlapping circles, squares, and polygonal shapes in a vibrant, unpredictable palette, often used as full-bleed backgrounds or section dividers. Photography consists of black and white headshots with high contrast, often set against a single, bold background color (like Jade Accent or Aqua Wash), giving a graphic, almost poster-like quality. Icons are minimal, outlined, and monochromatic, with a fine stroke weight, serving primarily as functional UI elements rather than elaborate decoration. The approach is graphic-heavy, with imagery functioning decoratively and to provide strong visual anchors.

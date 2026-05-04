---
version: alpha
name: Postevand
description: Postevand presents a stark, almost architectural aesthetic using monochrome tones, precise typography, and a grid-based layout. The primary canvas is bright white, often overlaid with fine black lines, creating a blueprint-like impression. Components are flat and boxy, emphasizing content and function over decorative elements, with a notable absence of shadows or rounded corners. The visual system feels grounded and serious, utilizing strong contrast and clear visual hierarchy for a direct and impactful user experience.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  whisper-gray: "#f0f1ef"
  ash-slate: "#333333"
  border-silver: "#d7d7d7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
    letterSpacing: -0.56px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.2
    letterSpacing: -0.8px
spacing:
  elementGap: 20px
  sectionGap: 60px
components:
  primary-filled-button:
    role: Submit actions, main calls to action.
  ghost-header-button:
    role: Header links and navigation elements.
  text-link-button:
    role: Inline actions and secondary navigation at the bottom of sections.
  default-card:
    role: Content grouping without visual emphasis.
  subtle-section-card:
    role: Grouping related content with a slight background distinction.
  elevated-content-card:
    role: Promising focused content or interactive elements, visually separating from the background.
  form-input-field:
    role: User input fields.
  newsletter-modal:
    role: Interstitials for user engagement.
---

## Overview

**North Star:** Architectural blueprint on stark white canvas

Postevand presents a stark, almost architectural aesthetic using monochrome tones, precise typography, and a grid-based layout. The primary canvas is bright white, often overlaid with fine black lines, creating a blueprint-like impression. Components are flat and boxy, emphasizing content and function over decorative elements, with a notable absence of shadows or rounded corners. The visual system feels grounded and serious, utilizing strong contrast and clear visual hierarchy for a direct and impactful user experience.

### Do's

- Maintain a strict 0px border-radius across all components to preserve the rectilinear aesthetic.
- Use Midnight Ink (#000000) for all primary text, headings, and borders to ensure strong contrast on Canvas White (#ffffff) backgrounds.
- Utilize Whisper Gray (#f0f1ef) sparingly for subtle background differentiation in secondary content areas, not as a primary accent color.
- Apply 1px borders using Midnight Ink (#000000) for grid lines and key navigation separators, emphasizing structure.
- Prioritize text and button padding of 12px vertical and 20px horizontal to maintain consistent information density.
- Employ Nimbus Sans D OT for all prominent text elements and maintain Helvetica for functional input fields.
- Ensure all interactive elements have a clear visual state (e.g., color change on hover/focus) as elevation is absent.

### Don'ts

- Do not introduce any rounded corners; maintain hard edges for all elements.
- Avoid using drop shadows or complex elevation techniques; rely on stark borders and background color changes for visual hierarchy.
- Do not introduce additional vibrant colors; stick to the monochrome palette with minimal semantic color usage.
- Never use less than a 20px element gap between major content blocks to preserve a sense of comfortable density.
- Do not use generic system borders for inputs; always specify a Border Silver (#d7d7d7) 1px border at the top.
- Avoid decorative imagery that competes with the strict grid and monochrome aesthetic; imagery should be contained or stark.

### Layout

The page structure follows a max-width contained model, centered on the screen, though the hero section can be full-bleed. The hero pattern often involves a large visual (photography) with minimal text overlaid or positioned clearly. Sections maintain a consistent vertical rhythm, primarily using a 60px section gap. Content is arranged in alternating patterns, such as text on one side and imagery/product on the other, or stacked centered blocks. A strong underlying grid is evident through the use of fine 1px Midnight Ink borders, which sometimes define content areas or act as visual dividers. The navigation is a minimalist top bar, likely sticky, with simple text links and a 'Bag' indicator. The overall density is comfortable, with ample white space.

### Imagery

This site predominantly features high-contrast product photography, often tightly cropped or floating against a white background or atmospheric sky. Product images showcase the packaging itself with clean lines and minimal distractions. There are also abstract background images (like blue sky with clouds) used as hero elements, providing atmospheric context. Icons, where present, appear to be outlined and monochromatic (Midnight Ink). Imagery serves to illustrate product details and create a restrained, clean atmosphere, rather than providing extensive lifestyle context.

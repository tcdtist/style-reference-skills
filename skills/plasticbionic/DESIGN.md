---
version: alpha
name: plasticbionic
description: plasticbionic employs a stark, minimalist aesthetic with an extreme contrast between pure black and white surfaces. Typography is the primary visual element, often very large and spaced out, creating a deliberate, unhurried rhythm. The system prioritizes quiet backgrounds and delicate boundary lines, allowing content blocks to define themselves through negative space and subtle shifts in background color. Interactions are marked by thin, almost invisible borders and transitions.
colors:
  midnight-void: "#000000"
  canvas-white: "#ffffff"
  stonewash-gray: "#c5c1c0"
  warm-mist: "#e8e1d9"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: 0.14px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -0.027px
  display:
    fontFamily: "system-ui"
    fontSize: 150px
    lineHeight: 0.78
    letterSpacing: -0.027px
spacing:
  elementGap: 10px
  sectionGap: 90px
components:
  navigation-link:
    role: Interactive text link in the top navigation or content filtering.
  large-display-headline:
    role: Prominent headings for showcasing project names.
  subtle-section-divider:
    role: Separates content sections or UI elements with a delicate line.
  actionable-text-label:
    role: Labels for interactive actions like 'Change View'.
  project-overview-tag:
    role: Tags for project categories (e.g., 'Ai, Art Direction').
---

## Overview

**North Star:** Monochrome Gallery Canvas – a stark, high-contrast canvas where art is king.

plasticbionic employs a stark, minimalist aesthetic with an extreme contrast between pure black and white surfaces. Typography is the primary visual element, often very large and spaced out, creating a deliberate, unhurried rhythm. The system prioritizes quiet backgrounds and delicate boundary lines, allowing content blocks to define themselves through negative space and subtle shifts in background color. Interactions are marked by thin, almost invisible borders and transitions.

### Do's

- Use Midnight Void (#000000) as the default text color on Canvas White (#ffffff) backgrounds, ensuring maximum contrast.
- Apply Lausanne-Regular at 150px with a letter-spacing of -0.027em for primary page headings to create a signature large, spaced-out typographic style.
- Utilize a 1px border of Midnight Void (#000000) or Canvas White (#ffffff) for all interactive element boundaries and visual dividers.
- Divide content sections primarily using background color changes between Canvas White (#ffffff), Stonewash Gray (#c5c1c0), and Warm Mist (#e8e1d9).
- Maintain a default padding of 15px for content surrounding interactive elements to ensure comfortable spacing.
- Implement a generous 90px vertical gap between major content sections to enhance the sense of space and visual quiet.
- Employ the 9px Lausanne-Regular with 0.14em letter-spacing for all secondary labels and tags, ensuring a consistent micro-typography style.

### Don'ts

- Avoid using drop shadows or heavy box shadows; rely on background color changes and thin borders for visual hierarchy.
- Do not introduce additional color beyond the established achromatic palette; color should be absent to maintain focus on content and form.
- Refrain from using varied font families; Lausanne-Regular is the sole typeface for all content.
- Do not use generic padding values; adhere to 15px for horizontal component padding and 10px for vertical element spacing.
- Avoid adding corner radii to cards or containers; all elements should have sharp, square edges.
- Do not use different letter-spacing values from those defined for Lausanne-Regular at specific sizes (0.14em for small text, -0.027em for large text).
- Do not use highly saturated brand colors for interactive elements; all interactivity cues should be expressed through the monochrome palette and subtle borders.

### Layout

The page structure is full-bleed horizontally, but content is often visually centered within a clear vertical rhythm. The hero section is dominated by a large, centered project title against a pure black background. Subsequent sections feature large, distinct project showcases, each occupying a significant vertical slice of the screen. Navigation is a minimalist top bar, with thin separators or subtle hover states. The grid usage is implicit, with projects acting as large, self-contained blocks rather than a dense, repeating grid.

### Imagery

The visual language is characterized by direct, centered product or project showcases. Imagery is large-scale, often full-width, focusing on the output of creative work. There's no use of photography in the traditional sense, but rather high-quality product visuals or digital art. When present, images are treated as contained blocks within the expansive monochrome canvas, without overlapping or complex masking. Icons are minimal, likely outlined and monochromatic where needed, such as the '+' sign for expansion.

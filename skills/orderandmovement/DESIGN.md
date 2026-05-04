---
version: alpha
name: Orderandmovement
description: Orderandmovement adopts a stark, high-contrast, minimalist aesthetic, evoking a gallery or exhibition space. The design relies heavily on monochromatic tones, primarily black text and lines on a white canvas, creating a clear and direct presentation. Typography is a focal point, using a unique serif font for subtle sophistication and a custom sans-serif for functional elements. Spacing is generous, creating breathing room around elements, emphasizing content through isolation.
colors:
  canvas-white: "#ffffff"
  gallery-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
spacing:
  elementGap: 5px
  sectionGap: 72px
components:
  ghost-button:
    role: Interactive elements, often for navigation or secondary actions, maintaining the minimalist aesthetic.
  text-input:
    role: Form fields for user input.
---

## Overview

**North Star:** Monochromatic gallery exhibit.

Orderandmovement adopts a stark, high-contrast, minimalist aesthetic, evoking a gallery or exhibition space. The design relies heavily on monochromatic tones, primarily black text and lines on a white canvas, creating a clear and direct presentation. Typography is a focal point, using a unique serif font for subtle sophistication and a custom sans-serif for functional elements. Spacing is generous, creating breathing room around elements, emphasizing content through isolation.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background color for all main sections and content areas.
- Use Gallery Black (#000000) for all primary text, borders, and interactive element outlines.
- Apply 'Suisse Intl' 400 with a 0.5000em letter-spacing for all navigation items, body text, and links.
- Employ generously wide padding for sections, with 72px for vertical separation and 144px for horizontal content margins in 'other' contexts.
- Maintain a strict 0px border-radius across all components to reinforce the sharp, angular aesthetic.
- Limit interactive feedback animations to color, opacity, or transform, using an 'ease' timing function for a moderate feel.

### Don'ts

- Avoid using any colored backgrounds or accent colors; restrict the palette to #000000 and #ffffff.
- Do not introduce shadows or elevation effects; surfaces should remain flat against the canvas.
- Never use rounded corners on any element; all borders and containers must be sharp 0px radius.
- Do not deviate from the specified Suisse Intl letter-spacing of 0.5000em for main UI text; tighter tracking conflicts with brand identity.
- Avoid dense information blocks; use generous spacing (72px section gaps, 144px side padding) to create visual calm.
- Do not use generic system fonts for primary text; 'Suisse Intl' and 'Times New Roman' are integral to the brand's typographic hierarchy and feel.

### Layout

The page primarily uses a max-width contained layout of 900px, centered on the screen. The hero section is characterized by large, centered headlines using 'Times New Roman' against a white background. Sections are delineated by generous vertical spacing (72px) rather than explicit dividers, creating a seamless flow. Content frequently appears in two-column structures or as centered text blocks. Navigation is typically thin and minimal, appearing at the top or side, often as flat lists of links.

### Imagery

No imagery is used as content; the design system is purely UI-focused. The aesthetic conveys information through stark typography and negative space, similar to a museum label or a minimalist art catalog.

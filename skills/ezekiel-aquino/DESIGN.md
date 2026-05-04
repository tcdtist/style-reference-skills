---
version: alpha
name: Ezekiel Aquino
description: Ezekiel Aquino's design system evokes an academic, minimalist aesthetic, reminiscent of a printed score on paper. The core visual identity is built on high-contrast monochrome with extensive negative space, making typography the primary visual element. The interplay of classic serif and modern sans-serif fonts, coupled with an almost entirely achromatic palette, creates a refined and intellectual atmosphere. Visual interest is primarily driven by artful arrangement of text and the graphic use of musical notation, rather than decorative UI elements or vibrant color.
colors:
  note-black: "#000000"
  canvas-white: "#f4f4f4"
  ghost-white: "#ffffff"
spacing:
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-navigation-button:
    role: Primary interactive element for navigation. It's a visually subtle, text-only button with no background or border, relying on text color for subtle visibility.
---

## Overview

**North Star:** Monochromatic Score Sheet — text as structure, notation as art, on a silent white canvas.

Ezekiel Aquino's design system evokes an academic, minimalist aesthetic, reminiscent of a printed score on paper. The core visual identity is built on high-contrast monochrome with extensive negative space, making typography the primary visual element. The interplay of classic serif and modern sans-serif fonts, coupled with an almost entirely achromatic palette, creates a refined and intellectual atmosphere. Visual interest is primarily driven by artful arrangement of text and the graphic use of musical notation, rather than decorative UI elements or vibrant color.

### Do's

- Prioritize a monochrome palette using Note Black (#000000) for primary text and Canvas White (#f4f4f4) for backgrounds.
- Use Ghost White (#ffffff) for subtle interactive text elements.
- Employ Basel Grotesk for most functional text and Neue Haas Unica W01 Regular for main headings, maintaining a consistent 32px size for prominent titles.
- Introduce Ogg Regular Italic specifically for artistic or 'presents' statements, emphasizing its elegant italicized form with a tight 0.92 line height.
- Maintain a sense of generous negative space; do not crowd elements.
- Apply hard-edged, 0px border radius for all interactive elements and containers.
- Ensure all interactive buttons are styled as ghost buttons with no background or border, using Ghost White (#ffffff) for text against the Canvas White background for a minimalist interaction point.

### Don'ts

- Avoid the use of any bright or saturated colors; the system is strictly achromatic.
- Do not add shadows, gradients, or heavy borders to any UI elements.
- Refrain from using varied padding or rounded corners on buttons or cards; maintain a crisp, flat aesthetic.
- Do not introduce decorative elements that distract from the typography or the central generative graphic.
- Do not use generic system fonts for prominent headings or artistic text; rely on the specific font choices (Basel Grotesk, Neue Haas Unica, Ogg Italic) to convey brand identity.
- Avoid dense UIs; prioritize clear separation and ample whitespace between content blocks.
- Do not use a default button style with a solid background; all interactive elements should appear as text links.

---
version: alpha
name: Dries Bos
description: Dries Bos presents a 'digital architect' aesthetic, combining a minimalist, achromatic canvas with precise, almost wireframe-like detailing. The system maintains a low-contrast, muted palette, focusing on structure through fine lines and ample negative space. Typography is compact and precise, anchoring content within a strict grid, while interactive elements are subtly delineated, relying on hover states to reveal activity rather than bold colors or heavy fills. The overall impression is one of meticulous order and understated functionality.
colors:
  canvas-parchment: "#e8e7e3"
  ink-jot: "#050200"
  ash-outline: "#747472"
  pure-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.45
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 79px
components:
  naked-table-row-button:
    role: Interactive row element within lists and tables, serving as a primary navigation trigger.
  outlined-category-tag:
    role: Small, informational tags for categorization or status.
  subtle-pill-tag:
    role: Discrete labels for content details, like 'startup' or 'mobile'.
  underlined-input-field:
    role: Text input areas with a subtle bottom border.
---

## Overview

**North Star:** Wireframe on parchment

Dries Bos presents a 'digital architect' aesthetic, combining a minimalist, achromatic canvas with precise, almost wireframe-like detailing. The system maintains a low-contrast, muted palette, focusing on structure through fine lines and ample negative space. Typography is compact and precise, anchoring content within a strict grid, while interactive elements are subtly delineated, relying on hover states to reveal activity rather than bold colors or heavy fills. The overall impression is one of meticulous order and understated functionality.

### Do's

- Prioritize 'Canvas Parchment' (#e8e7e3) for all significant background surfaces to maintain a consistent light theme.
- Use 'Ink Jot' (#050200) for all primary text, borders, and interactive element outlines.
- Apply a 0px border-radius consistently to all card-like containers, buttons, and input fields to maintain a sharp, angular aesthetic.
- Employ a strict 25px padding horizontally and vertically for most interactive block elements like table rows and list items.
- Maintain a spacious rhythm with section gaps of 79px to delineate major content blocks.
- Use 'Ash Outline' (#747472) for secondary text, placeholder elements, and subtle icon strokes where a slightly less dominant presence is desired.
- Leverage the 'myFont' for tabular headings or specific data points where precise, compact text is required, otherwise default to 'Sohne Buch'.

### Don'ts

- Avoid using bold or highly chromatic accent colors; the system relies on a strictly achromatic palette.
- Do not use explicit box-shadows or heavy elevation; surfaces should appear flat and delineated by borders.
- Do not introduce rounded corners on primary UI elements such as buttons, cards, or inputs, as this contradicts the system's sharp geometry.
- Do not deviate from the defined primary typography; avoid using system fonts or other sans-serifs that might break the visual consistency of 'Sohne Buch'.
- Refrain from complex background gradients or imagery; the design relies on solid, monochromatic surfaces.
- Do not vary line-height significantly for 'Sohne Buch' text; maintain 1.45 to ensure a consistent reading rhythm.
- Do not use letter-spacing other than normal, as it could disrupt the precise textual alignment established by the custom fonts.

### Layout

The page adheres to a maximal width of 1150px, with content centered. The hero section features a unique, abstract window-frame graphic in 'Ink Jot' line art, with primary information presented as a compact text block. Below the hero, content is structured as a series of vertically stacked, full-width sections. Information is often presented in a list or table-like format, using thin 'Ink Jot' horizontal dividers that create a clear, rigid grid. The visual rhythm is largely consistent, with the 'sectionGap' of 79px providing generous, uniform spacing between logical content groups.

### Imagery

The site employs a primarily icon-based visual language, alongside abstract line art for decorative elements. Icons are either 'Ink Jot' (#050200) or 'Pure Black', typically filled or outlined with a fine stroke, often acting as functional pointers or status indicators (e.g., arrows, external link icons, search icon). Abstract graphics, like the illustrative window frame, are minimal, line-based, and monochromatic, serving as subtle atmospheric cues rather than prominent content. There is a strong absence of photography, colorful illustrations, or product screenshots, underscoring the site's focus on pure UI and information.

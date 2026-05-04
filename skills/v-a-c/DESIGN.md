---
version: alpha
name: V–A–C
description: V–A–C embraces a highly structured, almost architectural aesthetic, presenting content within a minimalist, monochrome grid. Information is delivered with an academic rigor: thin lines, expansive white space, and stark black typography create a sense of directness without embellishment. The design prioritizes visual organization and content discovery through a precise, fixed-width layout and sparse use of interactive elements, giving the impression of an expertly curated digital catalog.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  accent-gray: "#999999"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 0.9
spacing:
  elementGap: 5px
  sectionGap: 150px
components:
  ghost-text-button-dark-text:
    role: Primary interactions and navigation links
  ghost-text-button-light-text:
    role: Interactive elements on dark sections, such as language toggles
  minimal-card:
    role: Displaying informational blocks like event listings
  line-input:
    role: Form inputs for search or data entry
---

## Overview

**North Star:** Architectural grid on white

V–A–C embraces a highly structured, almost architectural aesthetic, presenting content within a minimalist, monochrome grid. Information is delivered with an academic rigor: thin lines, expansive white space, and stark black typography create a sense of directness without embellishment. The design prioritizes visual organization and content discovery through a precise, fixed-width layout and sparse use of interactive elements, giving the impression of an expertly curated digital catalog.

### Do's

- Use 'Ink Black' (#000000) for all text color, borders, and interactive elements where contrast is paramount.
- Maintain a strict '0px' border-radius for all interactive and display elements, adhering to the sharp, angular aesthetic.
- Employ 'Diagramatika Text' (400) for all body copy and most UI labels, prioritizing clarity over decoration.
- Employ 'Diagramatika Display' (400) for headlines and major navigational elements, with sizes 24px, 34px, or 35px.
- Ensure ample whitespace between sections using '150px' vertical spacing (`sectionGap`).
- Design all interactive elements, such as buttons and links, as transparent backgrounds with only text and a border where necessary.
- Utilize 'Accent Gray' (#999999) sparingly for subtle decorative strokes, not for primary UI elements.

### Don'ts

- Avoid using any colors other than Canvas White, Ink Black, and Accent Gray for primary UI elements and text.
- Do not introduce any border-radius greater than '0px' on any component or surface.
- Never apply box-shadows or elevation effects; the design system relies on flat surfaces and lines.
- Do not introduce any explicit background colors for cards; they should appear as content directly on the canvas.
- Avoid decorative imagery that breaks the monochrome, grid-based aesthetic, unless it is content within a card.
- Do not use letter-spacing adjustments; all typography should maintain 'normal' letter-spacing.
- Refrain from using any gradient fills; surfaces should be solid colors.

### Layout

The page operates on a full-bleed model horizontally, with content contained within a flexible-width, vertically oriented grid. The hero section often features a clean line and heading (like 'GES-2', 'V', 'A', 'C') at the top, acting as a navigational anchor. Section rhythm is dictated by a consistent '150px' vertical gap between content blocks. Content is arranged primarily in a two-column grid where text and imagery flow in a linear, timeline-like sequence down the page without alternating patterns. Navigation is minimal, consisting of text links in the header and alongside sections, with a fixed position vertical navigation bar with rotated text. The design is compact in its element spacing but generous in its section spacing.

### Imagery

Imagery largely consists of contained, unedited photographs and occasionally product/installation shots, serving as direct content rather than decorative elements. They are displayed within minimalist card containers without rounded corners or shadows, sitting directly on the white canvas. The treatment is raw, with no specific color filters beyond the original photo's intent. Icons (like the arrow for events) are minimal, outlined, and monochromatic, using 'Ink Black' (#000000). Imagery functions as explanatory content or event showcases, allowing the text to provide context.

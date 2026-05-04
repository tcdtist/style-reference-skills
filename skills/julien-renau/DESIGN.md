---
version: alpha
name: Julien Renau
description: Julien Renau's site establishes a stark, monochrome aesthetic with a strong emphasis on precise spacing and subtle typography. Content is presented in an architectural grid, using strong horizontal and vertical lines as visual dividers. The design relies on achromatic colors for all elements, creating a highly structured and understated presentation. Typography is compact and confidently spaced, maintaining clarity amidst the dense layout.
colors:
  canvas-white: "#ffffff"
  charcoal-text: "#272727"
  graphite-black: "#000000"
  fog-gray: "#ebebeb"
  muted-ash: "#979797"
  soft-gray: "#898989"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.3
spacing:
  elementGap: 20px
  sectionGap: 100px
components:
  section-divider-thin:
    role: Visual separator for content sections.
  project-card-outlined:
    role: Container for individual project descriptions.
  ghost-button-link:
    role: Interactive text link with hover state emphasis.
  inline-badge:
    role: Small, informational tags appearing within content.
  header-navigation-link:
    role: Primary navigation item.
---

## Overview

**North Star:** Architectural Blueprint Grid: Pure white canvas delineated by ultra-fine graphite lines, creating a structured, content-rich display.

Julien Renau's site establishes a stark, monochrome aesthetic with a strong emphasis on precise spacing and subtle typography. Content is presented in an architectural grid, using strong horizontal and vertical lines as visual dividers. The design relies on achromatic colors for all elements, creating a highly structured and understated presentation. Typography is compact and confidently spaced, maintaining clarity amidst the dense layout.

### Do's

- Use Canvas White (#ffffff) as the default page background.
- Apply Charcoal Text (#272727) for all primary headings and body text.
- Utilize 1px solid borders in Charcoal Text (#272727) or Graphite Black (#000000) for all content dividers and structural elements.
- Maintain a consistent 0px border-radius for all elements, prioritizing sharpness and a structured aesthetic.
- Employ Founders Grotesk for all primary textual content, leveraging its various weights for hierarchy.
- Ensure generous horizontal padding, with at least 46px on the left and right for main content blocks.
- Space elements using a base unit of 20px, specifically for `elementGap` between components.

### Don'ts

- Avoid using any chromatic colors; the system is strictly achromatic.
- Do not introduce rounded corners; all elements must maintain sharp, geometric edges.
- Refrain from using shadows or elevation effects; the design relies on flat surfaces and line dividers.
- Do not deviate from the specified font families or their letter-spacing values.
- Do not use background colors on buttons or badges; interactivity is indicated by borders and text color changes only.
- Avoid decorative imagery; content is communicated primarily through text and structured layout.
- Do not break the strict grid alignment; all elements should adhere to vertical and horizontal precision.

### Layout

The page primarily uses a max-width contained layout, though specific section width is not explicitly fixed, it suggests a contained model. The hero section displays the name 'Julien Renau' as a large, centered text block. The section rhythm is consistent, separated by thin horizontal lines. Content is frequently presented in a stacked, centered fashion, or in two-column layouts featuring text-heavy blocks. There's a strong vertical alignment with minimal white space between dense content sections, emphasizing information density. Navigation is implied through discreet text links and likely a sticky top bar or simplified menu, not fully visible but implied by the content flow.

### Imagery

The site uses no explicit decorative imagery or photography. The visual language is entirely functional, relying on plain text, lines, and subtle achromatic fills. Icons, when present, are minimalistic and line-drawn, without color. The overall impression is text-dominant and stark, focusing purely on content and structure.

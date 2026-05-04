---
version: alpha
name: Usesammy
description: The Usesammy design system presents a purely functional, no-frills interface with a strong emphasis on content legibility and direct interaction. Its aesthetic is that of a system-level utility, characterized by a minimal achromatic palette, default browser typography, and a single vivid blue accent color primarily for active links and borders. The layout is direct and unadorned, providing a clear window into its underlying data, prioritizing information display over visual embellishment.
colors:
  canvas-ice: "#edeff0"
  text-primary: "#000000"
  text-secondary: "#555555"
  text-muted: "#666666"
  border-subtle: "#808080"
  action-blue: "#0047ab"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  elementGap: 21px
  sectionGap: 32px
components:
  table-header-row:
    role: Table header for content listings.
  table-data-row:
    role: Individual data entries within a table.
  page-heading:
    role: Main title of the page.
  info-text-link:
    role: Informational text with embedded links.
---

## Overview

**North Star:** Bare-metal System Console

The Usesammy design system presents a purely functional, no-frills interface with a strong emphasis on content legibility and direct interaction. Its aesthetic is that of a system-level utility, characterized by a minimal achromatic palette, default browser typography, and a single vivid blue accent color primarily for active links and borders. The layout is direct and unadorned, providing a clear window into its underlying data, prioritizing information display over visual embellishment.

### Do's

- Use Canvas Ice (#edeff0) as the primary page background color.
- Apply Text Primary (#000000) for general body text and strong accents, ensuring AAA contrast.
- Utilize Action Blue (#0047ab) exclusively for interactive elements like links and key borders to denote functionality.
- Structure information primarily using tables, demarcating cells with 1px solid Border Subtle (#808080).
- Maintain a default border-radius of 0px for all UI elements, reflecting a sharp, unadorned aesthetic.
- Employ Lato font across all textual content, adjusting weights between 400 and 700 to establish basic hierarchy.
- Apply 9px vertical padding and 10px horizontal padding within table cells for a compact data display.

### Don'ts

- Avoid using any chromatic colors other than Action Blue (#0047ab) to maintain the minimalist, functional palette.
- Do not introduce rounded corners; all elements should maintain sharp, 0px border-radii.
- Refrain from using shadows or any form of elevation to keep the interface flat and direct.
- Do not use gradients; all colors should be solid fills.
- Avoid decorative imagery; content is delivered through data and typography.
- Do not vary line-height from the default 1.2 across different font sizes, to preserve density.
- Do not treat Text Primary (#000000) as an interactive color; its role is purely for static text.

### Layout

The page uses a maximum content width that appears to be unconstrained, presenting content flush with the left edge. The hero section displays a centered heading. Content is predominantly organized in a single-column, list-like format, specifically a data table. Sections are loosely separated by vertical spacing, without explicit visual dividers or alternating background bands. The layout is compact and dense, with minimal whitespace between text blocks and within table structures. Navigation is implied through internal links rather than a dedicated bar.

### Imagery

No imagery or graphical elements are present. The visual language is entirely functional, focusing on text and table structures with minimal UI ornamentation. Icons, when present, are monochrome and directly integrated into textual elements.

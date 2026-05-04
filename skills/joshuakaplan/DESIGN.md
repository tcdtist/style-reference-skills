---
version: alpha
name: Joshuakaplan
description: The Joshuakaplan site presents information with the stark clarity of a spreadsheet, prioritizing scannable data visualization over decorative elements. A monochromatic palette defines the structure, with thin borders carving out fields and text-heavy data dominant. The only chromatic accent, a bright green, acts as a functional marker, drawing immediate attention to 'acquired' or 'active' statuses, injecting a singular note of vibrant confirmation into an otherwise rigorous grid.
colors:
  canvas-white: "#ffffff"
  data-ink: "#000000"
  field-border: "#404040"
  row-text: "#333333"
  subtle-line: "#4d4d4d"
  status-acquired: "#cdff8b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
spacing:
  elementGap: 8px
  sectionGap: 73px
components:
  status-badge-acquired:
    role: Functional indicator, highlighting active or acquired status
  data-table-row:
    role: Displays structured information in a list or table format
  header-navigation-link:
    role: Top-level navigation within the page
---

## Overview

**North Star:** Rigorous data ledger

The Joshuakaplan site presents information with the stark clarity of a spreadsheet, prioritizing scannable data visualization over decorative elements. A monochromatic palette defines the structure, with thin borders carving out fields and text-heavy data dominant. The only chromatic accent, a bright green, acts as a functional marker, drawing immediate attention to 'acquired' or 'active' statuses, injecting a singular note of vibrant confirmation into an otherwise rigorous grid.

### Do's

- Prioritize information density and readability within a table-like structure.
- Use `Canvas White` (#ffffff) as the default background for all primary content areas.
- Employ `Data Ink` (#000000) for all primary text and critical structural borders.
- Utilize `Status Acquired` (#cdff8b) exclusively for positive status indicators like badges, and never for primary actions or decorative elements.
- Maintain a clear visual hierarchy using `1px` borders, preferring `Data Ink` (#000000) for strong dividers and `Field Border` (#404040) for subtler separations.
- Apply a `20px` radius only to badges; all other elements should maintain sharp, rectilinear corners.

### Don'ts

- Avoid decorative images, illustrations, or complex graphical elements; imagery is secondary to data.
- Do not introduce additional color accents; `Status Acquired` (#cdff8b) is the only allowed chromatic color.
- Refrain from using shadows or gradients; rely on borders and background colors for depth and separation.
- Do not deviate from the `Arial` typeface; its consistent use is key to the system's aesthetic.
- Avoid large, editorial typography; text should remain compact and functional.
- Do not use radius values other than `20px` (for badges) or `0px` (for most elements).

### Layout

The site uses a full-bleed, max-width layout, centered with no strong page margins. The hero section is simply a continuation of the data table, presenting personal information in a similar grid. Sections are defined by dense data tables, separated by `73px` vertical spacing. Content is arranged in columns, creating a dense, scannable data grid with clear `1px` borders. Global navigation is a minimalist top bar, integrating seamlessly into the grid structure.

### Imagery

This design system uses no imagery beyond functional icons or small status indicators. Product presentation is handled entirely through structured data and text. The aesthetic is purely UI-driven, focusing on a minimalist, spreadsheet-like display of information.

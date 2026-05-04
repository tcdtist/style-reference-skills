---
version: alpha
name: Myrch Club
description: Myrch Club employs a stark, archival aesthetic, where content is displayed on clean white or near-white surfaces, punctuated by crisp black typography. A single vibrant red is used sparingly as a striking, almost disruptive brand accent. The system favors spacious layouts, minimal ornamentation, and clear visual separation of elements, evoking a catalog or museum exhibition feel.
colors:
  canvas-white: "#ffffff"
  pale-gray-surface: "#f9f9f9"
  text-black: "#000000"
  ink-detail: "#111111"
  muted-gray-text: "#cfcfcf"
  dark-gray-text: "#888888"
  archive-red: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.33
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 20px
  sectionGap: 40px
components:
  navigation-button:
    role: Ghost interactive element
  active-navigation-button:
    role: Filled interactive element
  product-card:
    role: Display individual merchandise items
  minimal-badge:
    role: Informational label
---

## Overview

**North Star:** Archival white space

Myrch Club employs a stark, archival aesthetic, where content is displayed on clean white or near-white surfaces, punctuated by crisp black typography. A single vibrant red is used sparingly as a striking, almost disruptive brand accent. The system favors spacious layouts, minimal ornamentation, and clear visual separation of elements, evoking a catalog or museum exhibition feel.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background color for most page content, ensuring ample negative space.
- Use Text Black (#000000) for primary textual content and Ink Detail (#111111) for interactive elements and stronger outlines.
- Maintain a clear visual hierarchy with Arial Narrow as the primary display and body font, reserving Times for secondary roles.
- Apply 10px border-radius consistently to all interactive components like buttons and cards for a softened but contained feel.
- Utilize Archive Red (#ff0000) strictly as a decorative brand accent, primarily in large-scale graphical elements or SVGs, avoiding its use for interactive states or general UI.
- Implement a spacious layout rhythm, maintaining at least 20px gap between elements and 30px padding within cards.
- Employ the light shadow rgba(17, 17, 17, 0.3) 0px 0px 20px 0px sparingly, specifically for prominent, interactive elements as a subtle elevation cue.

### Don'ts

- Do not use Archive Red (#ff0000) for interactive elements like buttons, links, or alerts; it is a decorative brand element only.
- Avoid introducing additional chromatic colors; the system is designed around a monochrome base with one vivid red accent.
- Do not vary the border-radius from 10px for standard UI components like buttons and cards, unless for specific, deliberate exceptions like the 23px radius noted for distinct elements.
- Refrain from using bold typefaces or excessively large font sizes for body text, maintaining an understated and efficient textual presentation.
- Do not clutter page sections; adhere to the spacious density by using 40px section gaps and 20px element gaps.
- Avoid heavy drop shadows or vibrant background gradients; the visual identity relies on flatness and subtle elevation.

### Layout

The page operates on a contained max-width model, with content centered on a dominant Canvas White (#ffffff) background. The hero section features a large, decorative Archive Red (#ff0000) graphic or wordmark, with core text overlaid, establishing the brand's graphic identity immediately. Content sections below are primarily grids of Product Cards on a Pale Gray Surface (#f9f9f9) or Canvas White (#ffffff), maintaining consistent 30px padding and 20px element gaps. The overall rhythm is spacious and orderly, prioritizing clear visual separation and uncrowded presentation of items, reminiscent of a gallery or archive display.

### Imagery

The site's imagery primarily consists of high-quality product photography: items isolated on pure white backgrounds, often centered, treated with soft, even lighting to showcase detail. There's an absence of lifestyle photography or complex compositions. Icons are minimal, mostly text-based (All caps, no fill, 1px stroke for 'All' or 'Other' text). The visual emphasis is on the object itself, presented in a clean, catalog-like manner, without extraneous decorative elements or busy backdrops.

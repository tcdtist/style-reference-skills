---
version: alpha
name: Emma Backman
description: Emma Backman's visual system evokes a raw, direct archival feel: a stark dark canvas with text as the primary visual element. The layout prioritizes clear, unembellished information display, relying on consistent dark backgrounds and subtle text-based interactions. Typography is the hero, serving as both content and navigation, with a singular, restrained text color for all elements.
colors:
  midnight-void: "#000000"
  ghost-gray: "#666666"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.29
spacing:
  elementGap: 12px
  sectionGap: 48px
components:
  main-navigation-link:
    role: Interactive text link
  content-list-item:
    role: Informational list entry
  year-filter-list:
    role: Navigational/filtering list
  footer-info-link:
    role: Small informational link
---

## Overview

**North Star:** Minimalist digital archive; stark canvas, monochrome text

Emma Backman's visual system evokes a raw, direct archival feel: a stark dark canvas with text as the primary visual element. The layout prioritizes clear, unembellished information display, relying on consistent dark backgrounds and subtle text-based interactions. Typography is the hero, serving as both content and navigation, with a singular, restrained text color for all elements.

### Do's

- Prioritize text as the primary visual element; minimize decorative graphics or imagery.
- Use Midnight Void (#000000) as the universal page background.
- Apply Ghost Gray (#666666) for all instances of text, including headings, body copy, and interactive links.
- Maintain a default Soehne 400 font for all text elements.
- Utilize 12px as the standard horizontal padding for content sections and the vertical spacing between most elements.
- Set the primary section gap to 48px for clear content separation.

### Don'ts

- Do not introduce strong accent colors; rely solely on the monochrome palette.
- Avoid using distinct background colors for cards or elevated surfaces; maintain a flat, unified background.
- Do not vary font weights for emphasis or hierarchy; manage hierarchy through size or implicit structure only.
- Do not apply `border-radius` to any elements; everything should have sharp, implied corners.
- Do not use explicit buttons or strong visual calls to action; all interaction should be text-based with minimal visual cues.

### Layout

The page employs a full-bleed, max-width layout with content organized into distinct, left-aligned columns. The hero section is characterized by a prominent heading at the top-left, followed by stacked text-based navigation. Content is presented in multiple vertical columns of text lists. Sections are distinct through consistent vertical spacing (48px section gap). The rhythm is defined by a dense, vertically stacked textual information display, with a simple footer link at the very bottom. The page does not use a centered or alternating content arrangement.

### Imagery

No imagery or graphical elements are present. The visual language is entirely text-based, using typography as the sole means of communication and visual structure. Icons are absent.

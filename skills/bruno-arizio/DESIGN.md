---
version: alpha
name: Bruno Arizio
description: Bruno Arizio’s visual identity is a minimalist stage for its content: a high-contrast aesthetic with deep black surfaces serving as a canvas for finely tuned typography. The overall impression is one of stark elegance, where design elements recede to emphasize the work itself. Text and interactive elements are rendered in a precise, almost monochromatic palette, relying on subtle variations in gray and highly specific typographic choices to convey hierarchy and interaction. The design prioritizes content visibility and a clean, unobtrusive user experience.
colors:
  canvas-black: "#000000"
  muted-ash: "#a6a6a6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
    letterSpacing: -0.22px
spacing:
  elementGap: 18px
  sectionGap: 45px
components:
  navigation-link:
    role: Top-level menu items and secondary navigation links.
  ghost-button:
    role: Interactive elements that do not require a filled background, for a minimal and understated action.
  primary-link:
    role: Prominent clickable text links, such as contact information.
  body-text-block:
    role: Rich text content blocks like descriptions and info sections.
---

## Overview

**North Star:** Black canvas, precise type

Bruno Arizio’s visual identity is a minimalist stage for its content: a high-contrast aesthetic with deep black surfaces serving as a canvas for finely tuned typography. The overall impression is one of stark elegance, where design elements recede to emphasize the work itself. Text and interactive elements are rendered in a precise, almost monochromatic palette, relying on subtle variations in gray and highly specific typographic choices to convey hierarchy and interaction. The design prioritizes content visibility and a clean, unobtrusive user experience.

### Do's

- Use Canvas Black (#000000) as the foundational background for most content areas, establishing a high-contrast stage.
- Employ Helvetica Now Text at weight 400 for all typographic elements, leveraging its consistent visual presence.
- Apply -0.02em letter-spacing universally to Helvetica Now Text, maintaining its characteristic tight tracking.
- Utilize Muted Ash (#a6a6a6) exclusively for secondary text and subtle borders, reserving Canvas Black for primary text and interactive elements.
- Keep all interactive elements, including buttons and links, visually minimal with transparent backgrounds and 0px border-radius.
- Maintain generous vertical spacing between content sections, using 45px padding top and bottom to create breathing room.
- Center content panels where possible, and allow full-bleed background elements to anchor major sections.

### Don'ts

- Avoid chromatic colors for any UI elements; the system relies on a strictly achromatic palette.
- Do not introduce rounded corners; maintain a sharp, geometric aesthetic with 0px border-radius throughout.
- Do not use box-shadows or other elevation techniques; surfaces should appear flat and flush with the background.
- Refrain from using varied font weights; all text should primarily use Helvetica Now Text at weight 400.
- Do not add unnecessary padding to buttons or interactive links; let their text content define their visual footprint.
- Avoid large, attention-grabbing interactive components; actions should be subtle and integrated into the content flow.
- Do not use dense, compact layouts; prioritize spaciousness and white/black space to frame content.

### Layout

The page primarily features a full-bleed layout establishing a dark canvas. The hero section often consists of a large, embedded visual (image or video) centered within this dark space. Content sections below the hero exhibit a pattern of alternating visual elements (like large imagery) with descriptive text blocks. Navigation at the top is a minimal, right-aligned horizontal list of text links. Content appears centered within a flexible columnar flow rather than a rigid grid, with generous vertical spacing separating thematic blocks.

### Imagery

This site predominantly uses large, full-bleed photography and embedded video for content showcase. Images often serve as the main attraction, sometimes with minimal overlaid text. There are also small, square thumbnail images, often monochromatic or with desaturated palettes, used for navigation previews. The style prioritizes the artwork itself, with little to no branding or decorative overlays on the images. Icons are minimalist, outlined, and monochromatic, used sparingly for utility actions like time display.

---
version: alpha
name: Gustav Nordebrink
description: Gustav Nordebrink's design system embodies a stark, high-contrast digital resume aesthetic. It prioritizes clarity and directness through a monochromatic palette, compact typography, and a distinct lack of decorative elements. The visual signature is an "inverted" dark mode, employing black text on an off-white canvas, with accents appearing as subtle hovers and thin underlines rather than bold colors. The system projects a sense of understated authority and meticulous organization.
colors:
  midnight-ink: "#000000"
  white-canvas: "#f0f0f0"
  ghost-gray: "#949494"
  iron-link: "#333333"
spacing:
  elementGap: 16px
  sectionGap: 120px
components:
  navigation-link:
    role: Primary navigation elements and general inline links.
  body-text-block:
    role: Main content paragraphs and descriptions.
  experience-item:
    role: Row-based display of resume entries (dates, roles, companies).
  header-branding:
    role: Site title and section indicator.
  muted-label:
    role: Category labels for resume sections (e.g., 'Current', 'Past experience').
---

## Overview

**North Star:** monochromatic curriculum vitae

Gustav Nordebrink's design system embodies a stark, high-contrast digital resume aesthetic. It prioritizes clarity and directness through a monochromatic palette, compact typography, and a distinct lack of decorative elements. The visual signature is an "inverted" dark mode, employing black text on an off-white canvas, with accents appearing as subtle hovers and thin underlines rather than bold colors. The system projects a sense of understated authority and meticulous organization.

### Do's

- Always use a Midnight Ink (#000000) text on White Canvas (#f0f0f0) background for maximum contrast and readability.
- Maintain minimal spacing between inline text elements; rely on line height rather than vertical padding for internal text rhythm.
- Employ the 1px solid Midnight Ink (#000000) border as a primary interactive indicator for hovered or active text links.
- Use Ghost Gray (#949494) exclusively for secondary, non-critical text such as labels or sub-information to soften hierarchy.
- Ensure all text, regardless of role, adheres to the Univers Next Pro font family at weight 400 for stylistic consistency.
- Utilize 1px solid Iron Link (#f0f0f0) borders as subtle horizontal dividers for lists or structured content, not for visual separation of large sections.

### Don'ts

- Do not introduce any color outside the defined neutral palette; chroma is reserved for content, not UI.
- Avoid using multiple font weights or sizes; stick to the single defined style for all text.
- Do not use box-shadows or drop shadows; the design system relies on flat surfaces and high contrast for visual separation.
- Do not deviate from the high-contrast text-on-background model by using low-contrast text colors on the White Canvas.
- Avoid decorative icons or illustrations; the visual language is purely typographic and structural.
- Do not add rounded corners to any UI element; all shapes should be strictly rectangular.

### Layout

The page operates on a fixed-width, single-column model within a White Canvas (#f0f0f0) background, with content primarily left-aligned. The hero section is a simple, fixed header with the brand name and 'Resume' link. Content sections are composed of tightly-packed, left-aligned text blocks, with large vertical section gaps (120px) to delineate major areas like 'Current', 'Past experience', and 'Education'. Lists or structured content, such as job entries, are presented as clean, horizontally segmented rows with subtle 1px dividers. The overall density is comfortable, balancing information with ample negative space around major content blocks.

### Imagery

The site is imagery-free, relying solely on typography and layout for visual communication. Icons are minimal, represented by simple arrows in Midnight Ink (#000000), serving purely functional navigation purposes (e.g., indicating expansion or external links). This approach emphasizes content and structure over decorative visuals.

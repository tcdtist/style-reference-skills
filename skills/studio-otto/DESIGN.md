---
version: alpha
name: Studio Otto
description: Studio Otto's visual system evokes a raw, editorial blueprint aesthetic. Dominated by stark black-on-white, the design emphasizes content through rigid grid structures and minimal visual embellishment. Thin borders define content blocks, and the absence of decorative color or rounded corners creates a severe, almost academic clarity. Typography acts as the primary visual hierarchy, with no supporting graphical elements to soften the angular presentation.
colors:
  midnight-ink: "#010101"
  canvas-white: "#FFFFFF"
spacing:
  elementGap: 8px
  sectionGap: 40px
components:
  editorial-text-block:
    role: Content display
  navigation-link:
    role: Global navigation
  image-card:
    role: Portfolio showcase
---

## Overview

**North Star:** Editorial blueprint on stark white

Studio Otto's visual system evokes a raw, editorial blueprint aesthetic. Dominated by stark black-on-white, the design emphasizes content through rigid grid structures and minimal visual embellishment. Thin borders define content blocks, and the absence of decorative color or rounded corners creates a severe, almost academic clarity. Typography acts as the primary visual hierarchy, with no supporting graphical elements to soften the angular presentation.

### Do's

- Maintain a strict achromatic palette, using only #010101 for text and borders, and #FFFFFF for backgrounds.
- Utilize a 1px solid #010101 border to define and separate content sections and elements.
- Prioritize text as the primary means of conveying information and hierarchy, avoiding expressive imagery or decorative graphics.
- Implement a base element gap of 8px for vertical rhythm between related items.
- Keep all corners sharp (0px border-radius) across all interface elements.
- Ensure generous top and bottom padding around content, especially headings, to provide visual breathing room.
- Place navigation discreetly at the top or bottom edges of the viewport, using only text (e.g., 'ABOUT', '0', '4').

### Don'ts

- Do not introduce any color beyond black and white into the interface.
- Avoid using rounded corners for any UI element; all shapes must be angular and sharp.
- Do not use elevation or shadows; maintain a completely flat visual plane.
- Do not use gradients for backgrounds or any graphical elements.
- Do not center-align blocks of body text; left-alignment is preferred for content areas.
- Avoid large hero sections with prominent imagery; content should start near the top of the viewport with minimal visual fanfare.
- Do not use custom icons or illustrations; rely on typography and simple layout to communicate.

### Layout

The page adheres to a maximal-width, full-bleed model, with content spanning the entire viewport width. The hero section is essentially absent, replaced by a simple header with navigation elements and a date. Content is arranged in a staggered, multi-column grid, featuring alternating text-left/image-right or image-left/text-right patterns. Vertical rhythm is established through consistent spacing between content blocks and the use of thin horizontal dividers. Navigation is minimal, consisting of small text links pinned to the top corners of the page.

### Imagery

Imagery primarily consists of photography, presented in tight crops within a rigid grid. Images are treated as raw content blocks, with full sharp edges and no masking. They serve a functional role as portfolio showcases, and are high-key with natural color saturation, with no specific filters or treatments applied. Visual density is moderate, with images typically paired closely with descriptive text blocks. Icons are not a present feature, reinforcing the typographic focus.

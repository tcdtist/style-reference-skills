---
version: alpha
name: Design
description: Cash App's design system navigates between stark order and vibrant expression, built on a dark theme that leverages high contrast and precise typographic control. The core palette is achromatic, allowing saturated brand colors to serve as energetic accents within a highly structured environment. Typography is prominent, employing large, confident sizes and distinctive letter-spacing. UI elements are rendered with minimal visual embellishment, emphasizing function and content, with interaction indicated by subtle borders and color shifts.
colors:
  midnight-black: "#000000"
  canvas-white: "#ffffff"
  ghost-border: "#e5e7eb"
  subtle-gray: "#858585"
  hinting-gray: "#b3b3b3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 117px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 122px
    lineHeight: 1.3
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 12px
  sectionGap: 64px
components:
  ghost-navigation-button:
    role: Navigation items and secondary actions without visual hierarchy
  plain-card:
    role: Container for content; appears as a content block within the page structure
  image-with-rounded-corners:
    role: Visual content container with minimal styling aside from radius
---

## Overview

**North Star:** Dark mode precision, neon punctuation

Cash App's design system navigates between stark order and vibrant expression, built on a dark theme that leverages high contrast and precise typographic control. The core palette is achromatic, allowing saturated brand colors to serve as energetic accents within a highly structured environment. Typography is prominent, employing large, confident sizes and distinctive letter-spacing. UI elements are rendered with minimal visual embellishment, emphasizing function and content, with interaction indicated by subtle borders and color shifts.

### Do's

- Prioritize high contrast using Midnight Black and Canvas White for text and backgrounds.
- Use Ghost Border (#e5e7eb) for subtle structural elements like dividers and non-primary button outlines, not for solid fills.
- Apply Cash Lime (#00d533) sparingly as a functional accent for interactive states or key brand moments.
- Employ the CashSans font family at specified weights and sizes, ensuring the global -0.0150em letter-spacing is applied.
- Maintain 0px border-radius for buttons and cards, preserving a structured and sharp aesthetic.
- Utilize 12px as the standard element gap for horizontal and vertical spacing between most UI elements.
- Set section gaps at 64px to create clear visual separation between major content blocks.

### Don'ts

- Avoid using saturated colors other than Cash Lime, unless explicitly defined as semantic status colors.
- Do not introduce heavy box shadows or gradient overlays, as the system relies on flat surfaces and minimal elevation.
- Refrain from deviating from the 0px border-radius for interactive components like buttons and cards.
- Do not use generic system fonts; always default to CashSans for brand consistency.
- Avoid excessive padding within card components, as they are designed to be content-forward without ornate frames.
- Do not allow text to have low contrast; ensure sufficient contrast ratios for readability, especially for Subtle Gray and Hinting Gray.
- Do not use multiple font families; restrict typography to CashSans only.

### Layout

The page primarily uses a full-bleed structure without a defined `pageMaxWidth`, suggesting content can span the full viewport. However, content elements and sections appear to be intentionally spaced using a `64px` section gap. The hero pattern is not explicitly visible but the overall feel suggests a dark canvas with strong typographic elements. Content arrangement appears to be linear, with distinct sections vertically stacked and internally structured by strong use of borders and whitespace. Navigation elements are likely a top bar or side panel given the structured nature, with minimal visual emphasis allowing content to dominate.

### Imagery

Imagery use is minimal, with the provided screenshot indicating image blocks with rounded corners. If photography or illustration is introduced, it should be contained within these structured blocks. The primary visual language seems to be UI-focused, leaning towards text and simple icons/shapes rather than rich graphical elements. Icons are likely filled or outlined, inheriting color from the parent text context, and contribute to the structured typographic field.

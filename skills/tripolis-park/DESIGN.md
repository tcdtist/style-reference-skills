---
version: alpha
name: Tripolis-Park™
description: Tripolis-Park embodies a confident-minimalist design language, characterized by a predominantly achromatic palette with only subtle background shifts. Typography is the primary conveyor of hierarchy and brand attitude, employing a mix of strong, impactful display fonts and versatile body text. Components are lightweight, often ghosted or outlined, emphasizing content and space rather than heavy ornamentation. The visual system prioritizes clarity and directness, letting information and subtle background textures speak for themselves.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  medium-gray: "#808080"
  light-stroke: "#e2e2e2"
  subtle-stroke: "#cccccc"
  desert-white: "#f0edea"
  tripolis-violet: "#ab8ff2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 47px
    lineHeight: 1.08
    letterSpacing: -0.48px
spacing:
  elementGap: 5px
  sectionGap: 64px
components:
  ghost-button-light:
    role: Navigation and secondary actions on dark backgrounds.
  ghost-button-dark:
    role: Navigation and secondary actions on light backgrounds.
  circular-play-button:
    role: Primary action button, typically for media playback.
  section-heading-ivarheadline:
    role: Main content section titles.
  body-text-matter-regular:
    role: General paragraph text and descriptive content.
  navigation-link:
    role: Primary navigation items.
  interactive-link-arrow:
    role: Contextual links with directional arrows for actions like 'Learn more'.
---

## Overview

**North Star:** Architectural grid on frosted glass

Tripolis-Park embodies a confident-minimalist design language, characterized by a predominantly achromatic palette with only subtle background shifts. Typography is the primary conveyor of hierarchy and brand attitude, employing a mix of strong, impactful display fonts and versatile body text. Components are lightweight, often ghosted or outlined, emphasizing content and space rather than heavy ornamentation. The visual system prioritizes clarity and directness, letting information and subtle background textures speak for themselves.

### Do's

- Use Midnight Ink (#000000) for all primary text, headings, and distinct borders.
- Maintain Canvas White (#ffffff) as the dominant background color for most page sections, and for ghost button text/borders on dark backgrounds.
- Apply Matter-Regular (400) for body text and interactive elements, ensuring 'tnum' font feature settings are enabled for numerical consistency.
- Reserve IvarHeadline-Medium (400) at 47px for main section headings, with letter-spacing of -0.0150em or -0.0100em to establish a strong, but restrained, visual hierarchy.
- Employ a 0px border-radius for most UI elements like buttons, adhering to a sharp, modern aesthetic, unless explicitly defined as circular (50%).
- Separate content blocks and sections with a consistent 64px vertical gap where content transitions are visually distinct.
- Ensure all interactive text and ghost buttons have transparent backgrounds, with their color and border adapting to the underlying section's lightness.

### Don'ts

- Do not introduce strong chromatic colors for backgrounds or primary UI elements outside of the hero gradient.
- Avoid using heavy shadows or distinct elevation styles; prefer subtle background color shifts or thin borders for visual separation.
- Do not deviate from the Matter and IvarHeadline font families; these are central to the brand's typographic identity.
- Do not use generic button styles; stick to the ghosted/outlined or circularly-bordered variants seen in the components section.
- Do not apply padding directly to button elements; allow the content and context to define its interactive area, or refer to button component variants.
- Avoid inconsistent horizontal spacing; adhere to the established element gaps like 5px, 10px, 18px where present.
- Do not use letter-spacing on Matter-Regular body text; it should generally use 'normal'.

### Layout

The page primarily uses a max-width contained layout of 900px, centered on the screen, creating a focused content experience. The hero section, however, is full-bleed, using a dynamic violet gradient background with centered text, setting an immersive tone. Subsequent sections maintain a consistent vertical rhythm with a 64px section gap, creating a structured flow. Content often appears in stacked blocks or simple two-column arrangements, with strong headings and accompanying body text. Navigation is a sticky top bar, minimal and functional, adapting its color to the background.

### Imagery

This site features abstract graphics and gradients as primary visual elements, particularly in hero sections. When photography or detailed imagery is used, it appears to be tightly cropped or isolated, without busy backgrounds or lifestyle context, focusing on the essence of the subject matter. Iconography, when present, is minimalist, likely outlined or filled in achromatic tones, serving functional rather than decorative roles. The overall density of imagery is low, with visuals serving to enhance specific content sections rather than dominating the layout, creating a text-dominant feel.

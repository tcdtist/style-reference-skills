---
version: alpha
name: CINDERBLOC
description: CINDERBLOC embodies a minimalist, high-contrast aesthetic, building a visual language around robust black typography on a stark white canvas. Information is communicated directly through strong typographic forms and subtle gray accents. The design emphasizes solid borders and compact layouts, creating an impression of precision and clarity. Color is used sparingly, primarily for functional text contrast and subtle visual organization.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#939598"
  charcoal-gray: "#595959"
  fog: "#eeeded"
  deep-teal: "#062e37"
  sunbeam-yellow: "#f5d452"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.29
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.29
  body:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.29
spacing:
  elementGap: 3-18px
components:
  primary-heading-with-border:
    role: Section titles and portfolio item names.
  navigation-link:
    role: Site navigation and sub-navigation items.
  horizontal-divider:
    role: Visual separation between content blocks or navigational elements.
---

## Overview

**North Star:** Type-driven architectural blueprint. Bold, stacked type on a crisp field, structured by precise lines.

CINDERBLOC embodies a minimalist, high-contrast aesthetic, building a visual language around robust black typography on a stark white canvas. Information is communicated directly through strong typographic forms and subtle gray accents. The design emphasizes solid borders and compact layouts, creating an impression of precision and clarity. Color is used sparingly, primarily for functional text contrast and subtle visual organization.

### Do's

- Use AkkuratLLWeb family for all text elements, maintaining 0.08em letter-spacing throughout.
- Prioritize Ink Black (#000000) for primary text and strong visual elements against Canvas White (#ffffff).
- Employ Ash Gray (#939598) for secondary text and subtle, structural borders.
- Maintain a compact density, allowing typography to dictate primary rhythm rather than large empty spaces.
- Implement a 3px border for interactive elements using Ash Gray (#939598) to indicate clickable areas without using background fills.
- When a border radius is needed, use 100px on all elements to create pill-shaped or fully rounded corners.

### Don'ts

- Avoid using multiple font families; AkkuratLLWeb is the sole typographic voice.
- Do not introduce strong accent colors from the `--alias-primary` or `--alias-secondary` unless explicitly for functional, interactive states or defined brand accents.
- Refrain from heavy shadow usage; the design relies on contrast and borders for depth.
- Do not use generic border radii; 100px should be the default for any rounded elements.
- Avoid large, image-heavy sections; the layout supports text-dominant communication.
- Do not deviate from the high-contrast pairing of Ink Black text on Canvas White backgrounds for primary content.

### Layout

The page exhibits a max-width, center-aligned container for content. The hero section is characterized by large, stacked, and often left-aligned black typography on a white background. Sections are separated by distinct horizontal borders and clear vertical stacking, suggesting a clean, almost grid-like structure for presenting information. The navigation is implied to be minimal and text-based, likely a sticky top bar or off-canvas menu due to the lack of visible primary navigation.

### Imagery

No imagery or graphics are present in the provided context, suggesting a purely typographic and UI-driven visual system. If imagery were to be introduced, it should likely be high-contrast, black and white photography or minimalist abstract graphics to align with the stark aesthetic. Icons, if used, would be outlined and monochrome.

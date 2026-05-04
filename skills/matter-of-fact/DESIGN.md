---
version: alpha
name: Matter of Fact
description: Matter of Fact operates on a stark, high-contrast visual system: pure black text on a clean white canvas. Typography, primarily large and commanding, is the dominant visual element, with minimal use of color or complex components. The design maintains an austere, type-driven aesthetic, emphasizing direct communication and clarity through its monochrome palette.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 202px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  elementGap: 6px
  sectionGap: 84px
components:
  minimal-navigation-link:
    role: Interactive text link within navigation
  headline-display-text:
    role: Dominant page headlines
---

## Overview

**North Star:** Monochrome typographic canvas

Matter of Fact operates on a stark, high-contrast visual system: pure black text on a clean white canvas. Typography, primarily large and commanding, is the dominant visual element, with minimal use of color or complex components. The design maintains an austere, type-driven aesthetic, emphasizing direct communication and clarity through its monochrome palette.

### Do's

- Prioritize text as the primary visual element; minimize other decorative components.
- Maintain a strict achromatic color palette using only Canvas White (#ffffff) for backgrounds and Midnight Ink (#000000) for foreground elements.
- Use FreeSans weight 400 for all typography, ensuring a consistent and direct tone.
- Apply 84px vertical spacing between major page sections to create clear visual breaks.
- Ensure all interactive elements are defined by Midnight Ink (#000000) borders or text, with no background fills.

### Don'ts

- Do not introduce any chromatic colors; the palette is strictly monochrome.
- Avoid decorative images or illustrations that would distract from the typography.
- Do not use multiple font weights or families; FreeSans 400 is the only typeface.
- Refrain from using shadows or gradients; rely on contrast and typography for visual hierarchy.
- Do not break the 900px max-width constraint for main content areas.

### Layout

The page model is contained, with a max-width of 900px and content generally centered. The hero pattern is a massive, attention-grabbing centered headline over a pure white background. Sections maintain a consistent vertical rhythm with 84px spacing. Content is arranged in simple, centered stacks, with no apparent grid usage for features or cards. The navigation is a top bar, minimal and text-based, likely sticky given the interactive elements.

### Imagery

The site uses no imagery or embedded graphics, focusing entirely on a pure typographic and monochrome UI. The visual language is defined by the stark absence of visuals, making text itself the primary graphic element.

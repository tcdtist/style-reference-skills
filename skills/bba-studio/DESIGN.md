---
version: alpha
name: BBA Studio
description: BBA Studio presents a stark, almost monochromatic design system built on a foundation of neutral tones. The visual language relies heavily on spaciousness and precise typography rather than vibrant color. Interactions are subtle, often indicated by a faint border change or a ghost button. The overall impression is one of restraint and architectural clarity, with content taking center stage on a light, unadorned canvas.
colors:
  canvas-white: "#ffffff"
  lead-text: "#000000"
  ghost-border: "#e5e7eb"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
spacing:
  buttonRadius: 9999px
  elementGap: 20px
  sectionGap: 112px
components:
  ghost-navigation-link:
    role: Navigation, interactive elements
  circular-ghost-button:
    role: Primary interactive element, typically for calls to action or navigation.
  list-item-with-border:
    role: Structured content lists or navigation menus.
---

## Overview

**North Star:** Architectural Gray Canvas

BBA Studio presents a stark, almost monochromatic design system built on a foundation of neutral tones. The visual language relies heavily on spaciousness and precise typography rather than vibrant color. Interactions are subtle, often indicated by a faint border change or a ghost button. The overall impression is one of restraint and architectural clarity, with content taking center stage on a light, unadorned canvas.

### Do's

- Prioritize Canvas White (#ffffff) for all primary backgrounds to maintain the light, expansive canvas.
- Use Lead Text (#000000) for all textual content to ensure high contrast against light backgrounds.
- Implement Ghost Border (#e5e7eb) for all subtle dividers, card outlines, and interactive element states.
- Apply a 9999px border-radius to all buttons for a highly rounded, distinct shape.
- Maintain a clear elementGap of 20px between interactive elements and content blocks.
- Utilize ABCROM 14px, 400 weight for all typography, embracing a uniform and disciplined textual hierarchy.
- Emphasize large sectionGap of 112px to create significant visual breathing room between major content blocks.

### Don'ts

- Avoid introducing new chromatic colors; the palette is strictly neutral-focused.
- Do not use heavy shadows or gradients; rely on discreet borders and spacing for visual separation.
- Do not deviate from the ABCROM typeface or its singular observed weight and size.
- Avoid tight spacing; maintain the open and airy feel established by the 20px element gap and 112px section gap.
- Do not use square or minimally rounded corners for interactive elements; the 9999px radius is a signature visual cue.

### Elevation

The design intentionally avoids shadows for elevation. Instead, visual depth and separation are achieved through subtle Ghost Borders (#e5e7eb) and generous spacing, allowing elements to exist distinctly on the flat Canvas White (#ffffff).

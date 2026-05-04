---
version: alpha
name: Bryn Taylor
description: Bryn Taylor's design system is a monochrome, content-first experience, akin to a meticulous architect's portfolio. Its character emerges from sharp typographic forms against subtle, almost imperceptible greys. Interactivity is defined by a deep ink-black paired with crisp white, creating a high-contrast focal point for user actions. The visual system prioritizes clarity and directness, using minimal adornment and robust typography to convey expertise.
colors:
  midnight-ink: "#000000"
  canvas-white: "#eff0fc"
  surface-frost: "#ffffff"
  muted-ash: "#575757"
  ghost-tint: "#0000000a"
  faint-grey: "#00000014"
  line-grey: "#0000001f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.001px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: 0.001px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: 0.006px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.35
    letterSpacing: 0.015px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: 0.015px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: 0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.05
    letterSpacing: 0.03px
spacing:
  cardRadius: 12px
  buttonRadius: 1.67772e+07px
  elementGap: 16px
  sectionGap: 32px
components:
  filled-primary-button:
    role: Call to action button for primary actions.
  ghost-secondary-button:
    role: Secondary action button, providing a subtle interactive element.
  card-accent-background:
    role: Background for feature blocks or highlighted content sections.
  card-white-background:
    role: Standard content card, used within sections.
  input-field:
    role: Text input areas for forms.
  badge:
    role: Small informational tags or labels.
  menu-item-highlight:
    role: Indicator for active navigation items.
---

## Overview

**North Star:** Architectural blueprint on white marble.

Bryn Taylor's design system is a monochrome, content-first experience, akin to a meticulous architect's portfolio. Its character emerges from sharp typographic forms against subtle, almost imperceptible greys. Interactivity is defined by a deep ink-black paired with crisp white, creating a high-contrast focal point for user actions. The visual system prioritizes clarity and directness, using minimal adornment and robust typography to convey expertise.

### Do's

- Prioritize Neue Montreal for all text content; do not introduce other typefaces.
- Utilize Midnight Ink (#000000) for all primary text, headings, and active elements to maintain strong contrast.
- Apply Canvas White (#eff0fc) as the default background for most content sections.
- Use pill-shaped radii (1.67772e+07px) for all primary and secondary buttons, and 12px for cards and badges.
- Maintain a comfortable density with element gaps of 16px and section gaps of 32px between major content blocks.
- Employ the subtle inset shadow `rgba(0, 0, 0, 0.08) 0px -2px 0px 0px` for active navigation items.
- Introduce Surface Frost (#ffffff) as background for interactive components like inputs and cards, providing a hierarchical distinction from Canvas White.

### Don'ts

- Avoid using highly saturated colors; the palette is almost entirely achromatic with subtle tints.
- Do not deviate from the specified 'Neue Montreal' typeface, weights, and letter-spacing values.
- Do not use heavy box shadows; elevation is primarily achieved through subtle background color changes or faint inset shadows.
- Avoid large hero imagery; the layout prioritizes text and clean UI elements.
- Do not introduce complex gradient fills; the system relies on solid colors and subtle color differences for depth.
- Do not use generic border radii; adhere to 1.67772e+07px for buttons and 12px for cards/badges.
- Do not use different fonts for headings and body text; the same family with varying sizes and weights is the established pattern.

---
version: alpha
name: Vita Architecture
description: Vita Architecture presents a restrained, high-contrast aesthetic favoring stark monochrome with precise typographic forms. Headlines use a unique custom serif, creating an impression of classic elegance, while body text uses a clean sans-serif for legibility. The primary identity relies on black borders and text against various shades of white and very light gray, punctuated subtly by a single vivid violet for select decorative elements. The overall feel is one of considered simplicity and architectural clarity.
colors:
  ink: "#000000"
  canvas: "#fafafa"
  light-linen: "#eeeeee"
  horizon-violet: "#5e8cff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.14px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.18
    letterSpacing: -0.12px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.32px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.14px
  display:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1.32
    letterSpacing: -0.16px
spacing:
  elementGap: 15px
  sectionGap: 140px
components:
  ghost-button:
    role: Primary Call to Action
  subtle-background-button:
    role: Secondary Action
  navigation-link:
    role: Navigation Item
---

## Overview

**North Star:** blueprint on vellum

Vita Architecture presents a restrained, high-contrast aesthetic favoring stark monochrome with precise typographic forms. Headlines use a unique custom serif, creating an impression of classic elegance, while body text uses a clean sans-serif for legibility. The primary identity relies on black borders and text against various shades of white and very light gray, punctuated subtly by a single vivid violet for select decorative elements. The overall feel is one of considered simplicity and architectural clarity.

### Do's

- Prioritize Ink (#000000) for all functional text and borders to maintain high contrast and definition.
- Use Hatton Regular for display and main headings, varying sizes according to the type scale from 48px to 125px with letter-spacing ranging -0.003em to -0.001em.
- Apply CircularStd for all body text, navigation, and secondary headings, ensuring precise letter-spacing between -0.010em and -0.005em.
- Maintain hard edges and sharp corners by consistently using a 0px border-radius for all interactive elements and containers.
- Leverage Light Linen (#eeeeee) on Canvas (#fafafa) as a subtle background shift for sections or secondary interactive elements like buttons.
- Use Horizon Violet (#5e8cff) sparingly as a decorative and highlighting accent on select heading elements only.

### Don'ts

- Do not introduce additional saturated colors beyond Horizon Violet (#5e8cff); maintain a monochrome base for all UI.
- Avoid using drop shadows or complex elevation; the design relies on flat surfaces and high contrast for definition.
- Do not deviate from the specified light letter-spacing for CircularStd and Hatton; precise tracking is fundamental to the typographic identity.
- Do not add rounded corners to any UI elements; the geometric precision of 0px radius is a core tenet.
- Refrain from using heavily decorative background patterns or aggressive visual noise; the system emphasizes clarity and minimalist composition.
- Do not use Horizon Violet (#5e8cff) as a primary action background or border; its role is decorative accent on text.

### Elevation

This design system intentionally avoids elevation through shadows. Hierarchy and depth are established solely through high-contrast text, borders, and subtle background color shifts.

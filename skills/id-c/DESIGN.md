---
version: alpha
name: ID—C
description: ID-C employs an architectural blueprint aesthetic, utilizing a monochromatic palette defined by stark black and white with a spectrum of grays. Typography is precise and understated, favoring a custom sans-serif with subtle letter-spacing for headlines to convey authority through restraint. The layout emphasizes clean lines, ample negative space, and modular content blocks, creating a sense of order and sophisticated simplicity. Interaction is indicated through subtle border changes rather than bold color shifts.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  dividing-ash: "#ededed"
  muted-stone: "#adadad"
  caption-gray: "#767676"
  red-dot-accent: "#ee3026"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.65
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.45
    letterSpacing: -0.54px
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.96px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.17
    letterSpacing: -2.02px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.07
    letterSpacing: -3.3px
spacing:
  elementGap: 16px
  sectionGap: 200px
components:
  navigation-link:
    role: Primary navigation items.
  work-entry-card:
    role: Displays individual work portfolio pieces with associated metadata.
  badge-information-tag:
    role: Categorizes and describes work entries.
  ghost-border-button:
    role: Secondary action or 'View All' links.
---

## Overview

**North Star:** Architectural Blueprint Precision

ID-C employs an architectural blueprint aesthetic, utilizing a monochromatic palette defined by stark black and white with a spectrum of grays. Typography is precise and understated, favoring a custom sans-serif with subtle letter-spacing for headlines to convey authority through restraint. The layout emphasizes clean lines, ample negative space, and modular content blocks, creating a sense of order and sophisticated simplicity. Interaction is indicated through subtle border changes rather than bold color shifts.

### Do's

- Prioritize Ink Black (#000000) for all primary text, headings, and significant borders to maintain high contrast and visual weight.
- Use Canvas White (#ffffff) as the overarching background for all primary surfaces to enforce a clean, spacious aesthetic.
- Employ universnextpro with specific, subtle letter-spacing values to control visual density, especially for headings at larger sizes.
- Define interactive states primarily through border changes, using Ink Black (#000000) for active borders and Muted Stone (#adadad) for subtle hints.
- Apply 8px border-radius to all structural elements like cards and image containers for a consistent, soft edge.
- Utilize Dividing Ash (#ededed) for hairline borders that provide visual separation without adding significant weight.
- Maintain a comfortable density with an element gap of 16px and allow for larger section gaps of 200px to emphasize spaciousness.

### Don'ts

- Avoid using highly saturated colors for functional UI elements; reserve high chroma for designated decorative accents like the Red Dot accent.
- Do not introduce strong drop shadows or complex gradients; the system relies on flat surfaces and clean lines.
- Do not deviate from the universnextpro font family or its specified weights and letter-spacing values.
- Avoid dense, information-packed sections without sufficient white space; prioritize spaciousness and clarity.
- Do not use ad-hoc spacing values; adhere to the 8px base unit with defined gaps (16px elementGap, 200px sectionGap).
- Do not use different radius values for cards and buttons; ensure all rounded elements use 8px.
- Do not use #0000ee (browser default link blue); all links should conform to Ink Black or Muted Stone.

### Layout

The page maintains a centered, fluid-width model that appears to breath within implied vertical constraints, though no explicit max-width is globally enforced, content sections are contained. The hero section features a prominent, centered headline with supporting text positioned below. A consistent rhythm is established by alternating blocks of content, often with a large vertical gap (200px) acting as a strong section divider. Content is frequently arranged in a grid-like fashion, showcasing work in 3-column card layouts. Navigation is a simple, fixed top bar, often with subtle border changes on hover.

### Imagery

The site uses a mix of tightly cropped product photography and illustrative product renders, usually against stark white or light gray backgrounds. Images are contained within rectangular frames, often with a 1px black border, and do not overlap. There's a notable absence of lifestyle photography or complex scenic visuals. Icons appear minimal, primarily outlined or filled in monochromatic tones matching the text, serving a functional rather than decorative role.

---
version: alpha
name: Block
description: Block's design system embodies unadorned clarity: a stark white canvas serves as the backdrop for precise, centered typography. The visual language centers on minimal distraction, prioritizing content with a clean, almost ascetic aesthetic. Interaction is subtle, with elements distinguished primarily through typography and placement rather than color or elaborate surfacing.
colors:
  canvas-white: "#ffffff"
  absolute-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.26
    letterSpacing: 0.996px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.112px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.4
    letterSpacing: 0px
spacing:
  elementGap: 30-35px
components:
  navigation-link:
    role: Top and bottom navigation items.
  centred-brand-headline:
    role: Central page headline for brand messaging.
---

## Overview

**North Star:** monochromatic minimalist canvas

Block's design system embodies unadorned clarity: a stark white canvas serves as the backdrop for precise, centered typography. The visual language centers on minimal distraction, prioritizing content with a clean, almost ascetic aesthetic. Interaction is subtle, with elements distinguished primarily through typography and placement rather than color or elaborate surfacing.

### Do's

- Use Canvas White (#ffffff) for all primary backgrounds and surfaces.
- Apply Absolute Black (#000000) for all text, icons, and borders.
- Prioritize Cash Sans for all headings and UI text content.
- Center-align primary headlines and section content where appropriate to reinforce the focused aesthetic.
- Maintain generous vertical spacing between sections, following the 215-675px range.
- Ensure navigation links use 17px horizontal padding with no background or border.
- Avoid any border-radius; elements should have sharp, rectangular edges.

### Don'ts

- Do not introduce any additional colors for UI elements; strictly adhere to the white and black palette.
- Avoid decorative gradients or shadows; the design relies on flatness and strong contrast.
- Do not use Times for prominent headings or UI elements; restrict its use to specific body text instances.
- Do not vary font weights; Cash Sans and Times should consistently use weight 400.
- Avoid dense, packed layouts; embrace generous negative space around elements.
- Do not use border-radius for any component; all corners should be 0px.

### Layout

The page maintains a full-bleed layout with a centered content approach rather than a fixed max-width container, especially for the main content areas. The hero features a large, centered headline accompanied by a simple icon, dominating the initial view. Sections are vertically distinct with significant spacing (215-675px), creating a calm rhythm. Content is primarily stacked and centered, with a clear hierarchy driven by font size and placement. Navigation is handled by a minimal top bar and a similar footer, both text-based and centered to the content axis.

### Imagery

This site uses no visible imagery on the main page. The visual system is purely typographic and layout-driven, relying on a content-first, minimalist approach that directs full attention to the text.

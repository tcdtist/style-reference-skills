---
version: alpha
name: NCDA
description: NCDA projects an architectural blueprint on white marble aesthetic: a minimalist, high-contrast system built on stark black and white surfaces. Typography is the primary visual element, meticulously spaced and sized to create a sense of expansive calm. Subtle visual hierarchy is achieved through variations in text color and the generous use of whitespace, rather than heavy borders or shadows. Components are understated, relying on inherent typographic weight and precise positioning.
colors:
  canvas-white: "#ffffff"
  ncda-black: "#191919"
  absolute-zero: "#000000"
  ghost-gray: "#808080"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.35
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.35
  body:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.35
  body-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1.3
spacing:
  elementGap: 15px
  sectionGap: 64px
components:
  navigation-link:
    role: Primary navigation item
  menu-link:
    role: Menu trigger and secondary navigation
  body-text-block:
    role: Standard paragraph content
  section-heading:
    role: Major content section titles
  monospace-time-display:
    role: Displaying time or highly precise data
---

## Overview

**North Star:** Architectural blueprint on white marble

NCDA projects an architectural blueprint on white marble aesthetic: a minimalist, high-contrast system built on stark black and white surfaces. Typography is the primary visual element, meticulously spaced and sized to create a sense of expansive calm. Subtle visual hierarchy is achieved through variations in text color and the generous use of whitespace, rather than heavy borders or shadows. Components are understated, relying on inherent typographic weight and precise positioning.

### Do's

- Prioritize typography as the primary driver of visual hierarchy, leveraging TWK Everett's weight 400 for both headings and body text.
- Use Canvas White (#ffffff) for all large background planes to maintain a spacious and luminous feel.
- Define interactive states and section breaks with subtle borders using NCDA Black (#191919) or Ghost Gray (#808080), avoiding filled backgrounds for navigation.
- Apply generous vertical spacing between sections, adhering to the 150px marginBottom and 28px/53px padding and margins to create a sense of calm.
- Employ the negative letter-spacing values (-0.0500em at 62px, -0.0100em at 21px) for headings and specific elements to enhance legibility and unique character.
- Use Absolute Zero (#000000) for high-impact text or fills, and Ghost Gray (#808080) for de-emphasized elements, always against Canvas White.
- Ensure all components have a radius of 0px for sharp, architectural edges.

### Don'ts

- Avoid using drop shadows or complex elevation schemes; the design relies on flat surfaces and high contrast.
- Do not introduce new colors; adhere strictly to the established black, white, and gray palette.
- Refrain from using heavily decorative elements or ornate graphics; the focus is on content and clean structure.
- Do not use letter-spacing outside the defined values (0.0400em, -0.0100em, -0.0500em) as it is a core aspect of the brand's typographic identity.
- Do not use background colors for interactive elements; opt for text color changes or subtle border treatments instead.
- Avoid crowded layouts or tight spacing; maintain the spacious, minimalist aesthetic with ample whitespace.
- Do not apply rounded corners to any UI elements; all shapes should be sharp and rectilinear.

### Layout

The page structure is full-bleed horizontally, but content feels contained and centered within implied columns. The hero section is characterized by a very large, prominent typographic logo (NCDA) taking up significant vertical space, offset by smaller, concise branding text. Subsequent sections alternate between large, impactful headings and sparse body copy, with consistent wide vertical gaps. The layout avoids complex grids for content, favoring a single-column flow or simple two-column splits (text-left/image-right or vice versa if imagery existed) that emphasize whitespace. Navigation is minimal, consisting of a sticky top bar with time displays and a 'Menu' trigger, suggesting an off-canvas or overlay menu system.

### Imagery

The site's visual language is characterized by an absence of photography or complex illustrations. Instead, it relies on pure typography and a stark, almost architectural, grid system. If any imagery (beyond project showcases) were to be introduced, it would likely be technical diagrams or abstract geometric shapes, treated with high contrast and minimal color, serving as explanatory content rather than decorative atmosphere. Icons (e.g., the 'Menu' hamburger) are minimal, outlined, monochromatic (Absolute Zero), and blend seamlessly with the typographic focus.

---
version: alpha
name: Artem Militonian
description: This design system presents a stark, high-contrast digital Brutalism. The aesthetic relies on an absolute black-and-white palette, sharp typographic treatment, and a complete absence of soft edges or shadows. Visual interest is generated through oversized, tightly-tracked headlines and navigational elements, paired with a subtle, technical background graphic. The system maintains a utilitarian, almost 'command-line' feel.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  deep-graphite: "#282828"
  muted-gray: "#a1a1a1"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.03
    letterSpacing: -1.49px
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.03
    letterSpacing: -3px
  display:
    fontFamily: "system-ui"
    fontSize: 157px
    lineHeight: 1.13
    letterSpacing: -13.82px
spacing:
  elementGap: 1px
  sectionGap: 64px
components:
  navigation-link:
    role: Primary interactive navigation and inline text links.
  information-card-transparent:
    role: Container for content where a visual boundary is not desired but logical grouping is implied.
  utility-text-label:
    role: Small, secondary metadata labels or copyright information.
---

## Overview

**North Star:** Monochrome Grid Blueprint

This design system presents a stark, high-contrast digital Brutalism. The aesthetic relies on an absolute black-and-white palette, sharp typographic treatment, and a complete absence of soft edges or shadows. Visual interest is generated through oversized, tightly-tracked headlines and navigational elements, paired with a subtle, technical background graphic. The system maintains a utilitarian, almost 'command-line' feel.

### Do's

- Use no radius (0px) for all elements, maintaining a sharp, angular aesthetic.
- Employ the high-contrast pairing of Ink Black (#000000) text on Canvas White (#ffffff) backgrounds for primary content.
- Utilize custom_87914 font with specific negative letter-spacing for all headlines and navigation to create a dense, impactful textual presence.
- Apply 1px Ink Black (#000000) underlines for interactive elements to signal interactivity without color.
- Maintain minimal vertical spacing between related text elements, contributing to the compact feel.
- Incorporate subtle background graphics using Deep Graphite (#282828) lines on Canvas White (#ffffff) to add texture without color.

### Don'ts

- Do not introduce any chromatic colors; the palette is strictly achromatic.
- Avoid soft shadows or any form of elevation — the design is intentionally flat.
- Do not use rounded corners; all shapes and containers should be rectilinear.
- Refrain from large padding on structural elements like cards or sections; aim for a compact layout.
- Do not use generic system fonts for headlines or navigation; always prefer custom_87914 with its distinct tracking.
- Do not use gradients or color overlays; maintain the pure monochrome aesthetic.

### Layout

The page adheres to a full-bleed layout without a fixed max-width, allowing content to stretch across the browser window. The hero section features a prominent headline centered over a monochrome, abstract background graphic. Sections are primarily composed of stacked, centered content blocks, with liberal vertical spacing between major elements. Navigation is explicitly listed as an 'index' with underlined text links, reinforcing a command-line interface feel. The rhythm is not defined by alternating bands but by direct content progression, with a strong emphasis on typographic hierarchy and sparse graphical elements.

### Imagery

The visual language focuses on black-and-white, highly stylized or processed photography. Imagery is often central, presented without rounded corners, and can contain line graphics or glitch-like effects that integrate into the background. The dominant image is a full-body shot, treated with a grayscale, possibly inverted, filter, occupying significant vertical space. Imagery serves more of a decorative and atmospheric role than a strictly explanatory one, contributing to the overall stark, almost dystopian, high-tech mood. Icons are minimal, represented by sharp, outlined shapes with a filled background for certain states, maintaining the monochrome rule.

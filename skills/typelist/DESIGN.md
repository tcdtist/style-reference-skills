---
version: alpha
name: TypeList
description: TypeList adopts a vibrant, playful design language built on an entirely white canvas punctuated by large, brightly colored interactive blocks. Typography is classic and understated, serving as an anchor to the dynamic color palette. The entire system feels like an interactive art exhibit, where color reveals content through large, expressive swatches rather than subtle accents.
colors:
  canvas-white: "#ffffff"
  ink-black: "#15181e"
  pure-black: "#000000"
  textured-gray: "#e3e3d5"
  light-gray: "#dcdcdc"
  soft-greenish-gray: "#b9d4cd"
  regal-violet: "#8d7fc8"
  sunshine-yellow: "#fff731"
  sky-blue: "#9dc4f2"
  electric-blue: "#2772ff"
  lime-green: "#dffe5a"
  flame-red: "#f9423b"
  crimson-red: "#c81103"
  golden-ochre: "#d39f43"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.36
  body-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
spacing:
  elementGap: 30px
  sectionGap: 48px
components:
  ghost-navigation-button:
    role: Header navigation item, typically for informational links.
  interactive-color-block-link:
    role: Large, full-width interactive sections that serve as primary navigation or content categories.
---

## Overview

**North Star:** Chromatic interactive blocks

TypeList adopts a vibrant, playful design language built on an entirely white canvas punctuated by large, brightly colored interactive blocks. Typography is classic and understated, serving as an anchor to the dynamic color palette. The entire system feels like an interactive art exhibit, where color reveals content through large, expressive swatches rather than subtle accents.

### Do's

- Prioritize Canvas White (#ffffff) as the primary page background.
- Use Ink Black (#15181e) for all primary text and headings.
- Employ the vibrant brand colors (e.g., Regal Violet #8d7fc8, Sunshine Yellow #fff731) exclusively for large interactive block backgrounds.
- Maintain a consistent 0px border-radius across all interactive elements and sections.
- Use Untitled Sans for all general UI text at 16px, 22px, or 24px, with normal letterSpacing.
- Ensure interactive color blocks have at least 20px vertical padding (padding-top and padding-bottom) for comfortable interaction.

### Don'ts

- Do not introduce shadows or elevation; the system relies on flat planes of color.
- Avoid using the vibrant brand colors for small accents or text; reserve them for interactive block backgrounds.
- Do not use rounded corners on any elements; all shapes should be clean and rectilinear.
- Do not use gradients; the color palette is intentionally flat and solid.
- Avoid using more than one font family in very close proximity; Untitled Sans and Untitled Serif have distinct functional roles.
- Do not clutter the layout; maintain generous whitespace around header elements and between main content blocks.

### Layout

The page primarily uses a full-bleed layout, allowing color blocks to extend edge-to-edge. The hero features a centered headline against the white canvas. Content sections are composed of alternating large, full-width color blocks, each representing a distinct content category, creating a strong vertical rhythm. Navigation is minimal, limited to a header bar with sparse, right-aligned text links. The information density is low, emphasizing visual impact and interaction over extensive text.

### Imagery

The site's imagery strategy is pure UI, focusing on large, solid blocks of color rather than photography or complex illustrations. The 'rainbow' motif from the screenshot suggests a visual system built around contrasting, bold color fields. Icons are minimal, likely mono-color and outline-based, serving a functional rather than decorative role.

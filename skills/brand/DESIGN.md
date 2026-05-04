---
version: alpha
name: Brand
description: Dropbox's brand guidelines site employs a playful, almost kaleidoscopic visual system built on a vibrant and highly chromatic color palette. The layout uses a grid-based approach with large, color-blocked sections that shift dynamically, giving a sense of movement and modularity. Typography is clean and modern, providing clear information against the lively backgrounds. The design prioritizes distinctive branding through color and flexible, responsive layout rather than heavy shadows or complex gradients.
colors:
  canvas-white: "#ffffff"
  primary-text: "#1e1919"
  subtle-text: "#736c64"
  ocean-blue: "#0061fe"
  sky-blue: "#5f9dff"
  coral-red: "#ffafa5"
  spice-orange: "#6d2e09"
  teal-ink: "#055463"
  goldenrod: "#684505"
  indigo-magenta: "#682760"
  powder-blue: "#b4c8e1"
  crimson-mocha: "#4e0119"
  forest-green: "#175641"
  canary-yellow: "#fad24b"
  deep-plum: "#892055"
  aqua-glow: "#3dd3ee"
  papaya-orange: "#ff8c19"
  misty-violet: "#c8aff0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.57
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.67
  subheading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 0.8
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.2
    letterSpacing: -0.68px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.72px
spacing:
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-primary-button:
    role: Outline button for primary actions
---

## Overview

**North Star:** Shifting color block canvas

Dropbox's brand guidelines site employs a playful, almost kaleidoscopic visual system built on a vibrant and highly chromatic color palette. The layout uses a grid-based approach with large, color-blocked sections that shift dynamically, giving a sense of movement and modularity. Typography is clean and modern, providing clear information against the lively backgrounds. The design prioritizes distinctive branding through color and flexible, responsive layout rather than heavy shadows or complex gradients.

### Do's

- Prioritize vibrant, saturated color blocks, drawing from the accent color palette to define distinct sections.
- Utilize Atlasgrotesk Web (or Inter) for all body copy and UI elements with a default of weight 400 and Canvas White (#ffffff) text on dark backgrounds, or Primary Text (#1e1919) on light.
- Apply Dbsharpgroteskvariable Vf (or Inter) at weights 500 or 700 for all headlines, maintaining the tight letter-spacing of -0.0200em.
- Employ Ocean Blue (#0061fe) as the primary indicator for interactive elements, including links and outlined buttons.
- Use a base radius of 0px for all buttons and interactive elements, favoring sharp, angular shapes over rounded corners.
- Implement the detected spacing tokens (e.g., 23px padding for content blocks, 16px element gaps) for consistent rhythm.
- When creating interactive elements, use distinct color accents (#0061fe, #5f9dff) as borders or text colors to indicate interactivity, avoiding solid fills for primary actions.

### Don'ts

- Avoid using drop shadows or complex elevation effects; the design relies on color and sharp edges for visual hierarchy.
- Do not introduce gradients unless they are simple color-to-color transitions that mimic the color-block aesthetic.
- Do not use highly rounded corners (e.g., >8px) for buttons or primary components, as the system favors sharp, defined shapes.
- Refrain from using generic gray scales for backgrounds; instead, use the vibrant accent colors to define distinct content areas.
- Do not deviate from the specified font families or their respective letter-spacing values, as these are critical to brand identity.
- Avoid overly dense layouts; maintain a comfortable density with ample padding and element gaps, consistent with the base unit of 4px.
- Do not use dark backgrounds for significant body text; ensure high contrast with light background colors like Canvas White (#ffffff).

### Layout

The page structure is dominated by a flexible, full-bleed grid layout where content sections are defined by large, shifting color blocks. There is no fixed pageMaxWidth, allowing sections to extend to the full viewport width. The hero section often features a centered headline or impactful text over a background color block. Content is arranged across these dynamic blocks, often centered within them when text-heavy. Navigation appears to be a sticky top bar or an aside that floats, adapting to the grid. Section rhythm is driven by the alternating and sometimes overlapping nature of the color blocks, creating a dynamic, non-linear flow. Density is kept comfortable, with significant white space (or colored space) around content blocks.

### Imagery

This design system uses a minimal, largely UI-focused imagery approach. The primary visual elements are the color blocks themselves, forming a dynamic grid system. Icons, like the Dropbox logo, are crisp, filled, and monochromatic (using Ocean Blue or Canvas White), serving as functional brand markers. Photography, illustrations, or product screenshots are not a dominant feature of this system; the visual language is created through color, typography, and clean arrangement of interface elements. Imagery, if present, is expected to be simple, abstract, or purely functional within the color-block context.

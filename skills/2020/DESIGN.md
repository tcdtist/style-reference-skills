---
version: alpha
name: 2020
description: Album Colors functions as a dynamically colored digital poster, where the entire canvas shifts hue to celebrate album art. Its visual language relies on bold, all-caps typography set against a monochrome but interchangeable background. Interaction elements are ghosted, defined by stark borders rather than fills, reinforcing a sense of understated presence. The structure prioritizes a clear, grid-like presentation of content within a constantly re-colored frame.
colors:
  canvas: "#e4822e"
  slate-text: "#4f503e"
  white-contrast: "#ffffff"
  black-accent: "#000000"
  dark-overlay: "#081618"
  deep-red: "#b13225"
  deep-orange: "#c97f40"
  pale-green: "#99aa91"
  pale-pink: "#feccc0"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: -0.8px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: -1.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 0.8
    letterSpacing: -3.75px
  display:
    fontFamily: "system-ui"
    fontSize: 137px
    lineHeight: 0.79
    letterSpacing: -6.85px
spacing:
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-button:
    role: Interactive element for navigation or actions
  content-wrapper:
    role: Container for album art and related text
  main-heading:
    role: Primary page title
  subheading:
    role: Secondary page title or description
  body-text:
    role: Descriptive text
---

## Overview

**North Star:** Shifting monochrome poster

Album Colors functions as a dynamically colored digital poster, where the entire canvas shifts hue to celebrate album art. Its visual language relies on bold, all-caps typography set against a monochrome but interchangeable background. Interaction elements are ghosted, defined by stark borders rather than fills, reinforcing a sense of understated presence. The structure prioritizes a clear, grid-like presentation of content within a constantly re-colored frame.

### Do's

- Use Slate Text (#4f503e) for all text and ghost button borders against the dynamic canvas.
- Apply 0px border-radius consistently for all interactive elements and containers.
- Utilize Helvetica LT Pro (or Helvetica Neue) with a letter-spacing of -0.05em for headlines and body text to maintain the condensed, poster-like aesthetic.
- Implement the dynamic page background using any of the brand-colored hexes (#e4822, #b13225, #c97f40, #99aa91, #feccc0) as the primary Canvas.
- Maintain a comfortable density with 20px of padding consistently around content blocks.
- Employ the ghost button style (text color + border color, no fill) for all primary interactive elements.
- Prioritize stark visual contrast between text and background, typically Slate Text (#4f503e) on a vivid brand color or White Contrast (#ffffff) on Dark Overlay (#081618).

### Don'ts

- Avoid using filled buttons; all actions should be ghosted with borders.
- Do not introduce rounded corners; maintain sharp, rectilinear shapes for all elements.
- Do not deviate from the defined Helvetica font families or their specified letter-spacing.
- Refrain from using shadow effects for elevation; elevation is achieved through color contrast and direct placement.
- Do not use generic system fonts unless specified for a component; prioritize Helvetica LT Pro for brand consistency.
- Avoid adding extraneous decorations or complex gradients on surfaces.
- Do not use subtle variations of neutrals if a clear contrast is available; keep the palette stark.

### Layout

The page primarily uses a full-bleed layout, where the dynamically colored Canvas extends edge-to-edge. Content appears to be centered within this broad frame. The hero section features a large, stacked headline and subheading against the colored background. Below this, album covers are presented in a grid-like fashion, often accompanied by artist and title in a secondary typeface. Vertical spacing between sections is consistent, employing a simple stacked arrangement. There is no visible complex grid, sidebars, or mega-menus; navigation is minimal, characterized by ghosted textual links.

### Imagery

The site's primary imagery consists of prominent album cover art, dynamically displayed within a clean editorial context. These are treated as contained, rectangular elements without rounded corners or complex masking. There are no lifestyle photos or abstract illustrations; the visual focus remains on the album art itself, presented directly to showcase its colors and design. Icons, if present, are minimal and functional, depicted with sharp, clean lines and inheriting the main text color. The density is image-heavy, with large album covers dominating sections, balanced by concise, impactful typography.

---
version: alpha
name: Arthursimonini
description: Arthur Simonini's website embodies a stark, high-contrast dark mode aesthetic, where elegant serif typography takes center stage on a pure black canvas. The design prioritizes visual drama and readability through extreme contrast and minimal UI elements. All interactive elements are presented in white, creating a luminous, ghost-like appearance that ensures focus on content.
colors:
  midnight-canvas: "#000000"
  ghost-white: "#ffffff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 0.9
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 167px
    lineHeight: 0.73
    letterSpacing: 0px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 15px
  sectionGap: 40px
components:
  navigation-link:
    role: Primary site navigation
  tracklist-item:
    role: Displays music tracks with duration
  media-grid-card:
    role: Displays album or movie covers in a grid layout
  hero-headline:
    role: Dominant page title
---

## Overview

**North Star:** Dramatic typographic stage

Arthur Simonini's website embodies a stark, high-contrast dark mode aesthetic, where elegant serif typography takes center stage on a pure black canvas. The design prioritizes visual drama and readability through extreme contrast and minimal UI elements. All interactive elements are presented in white, creating a luminous, ghost-like appearance that ensures focus on content.

### Do's

- Prioritize extreme contrast: Ghost White (#ffffff) text and elements must always appear on Midnight Canvas (#000000) backgrounds.
- Use RomieLigatures-Regular (weight 400, 'kern', 'dlig' features enabled) for all dominant headlines and titles to maintain the signature artistic feel.
- Apply LifeLTStd-Roman (weight 400) for body copy, navigation, and secondary text, ensuring consistent classic readability.
- Maintain strict adherence to 0px border-radius across all components, conveying a sharp, uncompromising aesthetic.
- Employ 1px solid Ghost White (#ffffff) borders as subtle dividers for lists and separating textual content.
- Utilize 15px as the primary elementGap and cardPadding, creating a comfortable yet contained density.
- Embrace the absence of drop shadows or elevation; surfaces are flat against the Midnight Canvas (#000000) background.

### Don'ts

- Do not introduce any saturated colors; the palette is strictly monochrome Ghost White (#ffffff) and Midnight Canvas (#000000).
- Avoid rounded corners or any soft shapes; all visual components should be sharp and rectilinear.
- Do not use any font weights other than 400 for both primary font families.
- Never introduce drop shadows or other forms of elevation; surfaces must remain flat against the background.
- Avoid excessive padding or large gaps between interactive elements; maintain a comfortable, not expansive, density.

### Layout

The page uses a full-bleed layout on Midnight Canvas, with content centered but extending edge-to-edge for media grids. The hero section features a large, centered headline in RomieLigatures-Regular. Sections are distinguished by consistent vertical spacing of 40px and sometimes by a 1px Ghost White divider. Content is arranged either as single-column text blocks or compact, tightly packed media grids. Navigation is a simple top bar with Ghost White links. The overall density is comfortable, with ample breathing room around text but dense information display in image grids.

### Imagery

The visual language is dominated by black-and-white photography and movie/album covers, often presented as tight crops or full-bleed. Imagery is presented with sharp, raw edges, typically contained within grid structures with no explicit spacing, creating a dense, mosaic-like appearance. Color imagery is desaturated to grayscale, maintaining the monochrome aesthetic. The role of imagery is primarily content showcase and decorative atmosphere, reflecting the artist's work.

### Elevation

This design intentionally avoids all shadows and elevation effects. All interface elements exist on a single plane, contrasting directly with the Midnight Canvas background. This flatness reinforces the stark, high-contrast aesthetic and keeps the focus purely on content and typography.

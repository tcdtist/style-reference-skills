---
version: alpha
name: San Rita
description: San Rita balances rugged outdoor aesthetics with refined, almost architectural typography. The visual language evokes adventure and groundedness through a dominant muted green (#84907f) and a 'radio-signal' chartreuse accent (#e2ffcc) against a deep forest green background. Oversized, condensed custom typography for headlines grounds the design, while the monospace text adds a technical, almost archival feel, reminiscent of field notes in a wilderness expedition.
colors:
  forest-canopy: "#161b13"
  terrain-shadow: "#2d3329"
  paper-white: "#dde2e4"
  earth-gray: "#84907f"
  adventure-chartreuse: "#e2ffcc"
  headline-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
    letterSpacing: -0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.16px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 0.9
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 366px
    lineHeight: 0.9
spacing:
  elementGap: 12px
  sectionGap: 40px
components:
  navigation-button:
    role: 
  origin-stat-block:
    role: 
  photo-scrapbook-cards:
    role: 
  navigation-button:
    role: Primary Call to Action in header
  inline-link:
    role: Interactive text link
  hero-headline:
    role: Main heading on hero section
  footer-text-block:
    role: Descriptive text in footer
  map-overlay-icon:
    role: Interactive icon on map background
---

## Overview

**North Star:** Field Notes & Radio Signals — a minimalist topographic map combined with stark, technical typography.

San Rita balances rugged outdoor aesthetics with refined, almost architectural typography. The visual language evokes adventure and groundedness through a dominant muted green (#84907f) and a 'radio-signal' chartreuse accent (#e2ffcc) against a deep forest green background. Oversized, condensed custom typography for headlines grounds the design, while the monospace text adds a technical, almost archival feel, reminiscent of field notes in a wilderness expedition.

### Do's

- Use 'Adventure Chartreuse' (#e2ffcc) for all primary interactive elements and key headings to maintain brand energy.
- Pair 'F37stout' for display text with 'mono' for body text to create the signature technical-meets-monumental typography.
- Employ consistent 12px or 24px spacing for element gaps and margins, extending to 40px for larger structural gaps.
- Maintain a clear visual hierarchy by limiting 'Times' font usage to specific, less prominent links or references.
- Incorporate 'Earth Gray' (#84907f) subtly within illustrations or as a background hue to add an organic, geological feel.

### Don'ts

- Avoid using 'Times' font for large headings or core UI elements, as it dilutes the brand's typographic identity.
- Do not introduce new color palettes; stick rigidly to 'Forest Canopy', 'Terrain Shadow', 'Paper White', 'Earth Gray', 'Adventure Chartreuse', and 'Headline Black'.
- Borders or explicit drop shadows are not part of this system; achieve depth through contrasting background colors or layering of content blocks.
- Do not deviate from the specified letter-spacing for 'mono' (-0.01em) as it contributes significantly to its technical character.
- Avoid generic imagery or illustrations; focus on topographic maps, abstract outdoor elements, or tightly cropped, art-directed photography.

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections and embedded background imagery. Content is contained within invisible horizontal bounds, with generous left/right margins (67px, 70px, 190px). The hero section features a dominant fullscreen background image with oversized, centered typography. Sections alternate between full-bleed imagery and solid color backgrounds, establishing visual rhythm. Content often appears in centered stacks or simple two-column arrangements, always prioritizing generous breathing room defined by large spacing tokens. Navigation consists of a clear top bar with minimal elements.

### Imagery

Visuals are a mix of abstract topographic map imagery as large background elements, and candid, somewhat gritty photography depicting individuals in outdoor settings. The map imagery is full-bleed and dominant, providing context and atmosphere rather than direct information. Photography uses natural light, appears unprocessed, and is presented as overlapping, slightly rotated rectangles, creating a scrapbook-like or 'field journal' aesthetic. Icons are simple, outlined SVGs, typically 'Paper White' against dark backgrounds, acting as minimal navigational cues or location markers. The overall density is heavy in imagery, allowing large visuals to define sections and convey mood.

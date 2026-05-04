---
version: alpha
name: Telescope
description: Telescope embraces a warm, organic minimalism with off-white canvases and rich, dark typography. The design feels grounded through a single vibrant green accent used sparingly for active states and highlights. A sense of relaxed, curated discovery is conveyed by the loose typographic arrangements and the overall spaciousness. Imagery, when present, is small, floating, and acts as visual anchors in a predominantly airy layout.
colors:
  soft-vanilla: "#f4f3f0"
  deep-graphite: "#1a1915"
  spring-bud: "#e3f794"
  white-canvas: "#ffffff"
  ash-gray: "#82868e"
  pure-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
    letterSpacing: 0.36px
  body:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.15
    letterSpacing: -0.38px
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.15
    letterSpacing: -0.39px
  heading:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1.05
    letterSpacing: -0.38px
  display:
    fontFamily: "system-ui"
    fontSize: 250px
    lineHeight: 1
    letterSpacing: -0.5px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 135px
components:
  ghost-button:
    role: Secondary action button
  accent-filled-button:
    role: Primary action button
  information-badge:
    role: Informational tag
  floating-content-card:
    role: Visual content container
---

## Overview

**North Star:** Warm parchment, scattered Polaroids

Telescope embraces a warm, organic minimalism with off-white canvases and rich, dark typography. The design feels grounded through a single vibrant green accent used sparingly for active states and highlights. A sense of relaxed, curated discovery is conveyed by the loose typographic arrangements and the overall spaciousness. Imagery, when present, is small, floating, and acts as visual anchors in a predominantly airy layout.

### Do's

- Prioritize Deep Graphite (#1a1915) for all primary text and headers to maintain a grounded aesthetic.
- Use Soft Vanilla (#f4f3f0) as the default background for most page sections and card surfaces.
- Apply Spring Bud (#e3f794) sparingly for action indicators, accent fills, and highlights to provide a focused point of interest.
- Maintain 0px border radius for all buttons and content cards, promoting a sharp, clean edge.
- Utilize a 135px vertical section gap to ensure abundant breathing room between distinct content blocks.
- Set the letter-spacing for display typography (250px CM Geom) to -0.0020em to achieve a refined, tight fit.
- Employ DM Mono at 12px with 0.0300em letter spacing for small functional text like captions and badges.

### Don'ts

- Avoid using harsh white backgrounds directly adjacent to type; prefer the softer Soft Vanilla (#f4f3f0).
- Do not introduce additional saturated colors; the Spring Bud (#e3f794) is the singular chromatic accent.
- Refrain from using shadows or elevation on cards; content should feel flat and unburdened.
- Do not deviate from 0px border radius for primary UI elements like buttons and cards, as rounded corners are not part of this visual system.
- Avoid dense, stacked content; prioritize whitespace and generous element gaps (10px minimum).
- Do not use overly bold or heavy weights for headings; maintain the Beausite 400 weight for a refined feel.

### Elevation

This design system intentionally avoids shadows. UI elements exist on a flat plane, with visual hierarchy established through spaciousness, color contrast, and typography rather than z-axis differentiation.

---
version: alpha
name: Danny Garcia
description: Danny Garcia's portfolio uses a dark, atmospheric canvas with subtle surface variations and vibrant, ethereal gradients. Typography is confident and substantial on dark backdrops, using a limited color palette featuring a warm gray for primary text and a distinct golden-beige for interactive elements. The aesthetic combines a sense of digital craftsmanship with a touch of modern artistry, allowing gradients to provide visual interest and surface hierarchy rather than heavy shadows or borders.
colors:
  ebon-night: "#10120d"
  deep-forest: "#161912"
  ash-gray: "#c8c8c8"
  warm-parchment: "#d1c5ad"
  twilight-gradient: "#30263f"
  chromatic-orb-gradient-1: "#2a5482"
  chromatic-orb-gradient-2: "#40e4f7"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.8
  display:
    fontFamily: "system-ui"
    fontSize: 104px
    lineHeight: 0.8
spacing:
  cardRadius: 96px 96px 96px 96px
  elementGap: 24px
  sectionGap: 48px
components:
  card-with-gradient-backdrop:
    role: Content container with an ethereal gradient background.
  text-link:
    role: Interactive text elements.
  section-heading:
    role: Title for content sections.
  main-hero-headline:
    role: Prominent display text for the hero section.
  primary-body-text:
    role: Main narrative content.
---

## Overview

**North Star:** Midnight gradient canvas

Danny Garcia's portfolio uses a dark, atmospheric canvas with subtle surface variations and vibrant, ethereal gradients. Typography is confident and substantial on dark backdrops, using a limited color palette featuring a warm gray for primary text and a distinct golden-beige for interactive elements. The aesthetic combines a sense of digital craftsmanship with a touch of modern artistry, allowing gradients to provide visual interest and surface hierarchy rather than heavy shadows or borders.

### Do's

- Prioritize Ebon Night (#10120d) for page backgrounds and Deep Forest (#161912) for subtly elevated card surfaces.
- Use Ash Gray (#c8c8c8) for all primary static text, ensuring high contrast and readability on dark backgrounds.
- Apply Warm Parchment (#d1c5ad) exclusively for interactive links and explicit action borders, using an outlined style.
- Utilize Avenir Next for all typography, adjusting weights (400, 600, 700) and sizes (16-104px) to establish hierarchy.
- Maintain generous section and card spacing, with 48px for `cardPadding` and `sectionGap`, and 24px for `elementGap`.
- Incorporate the gradient backdrops and blurred orb accents to add diffuse color and depth, especially behind cards and hero content.
- Apply asymmetric border-radius (e.g., 0px 0px 96px 96px) to cards where visual distinction is desired, otherwise use 0px.

### Don'ts

- Avoid using harsh, solid colors for backgrounds; lean into soft, dark neutrals and gradients for visual depth.
- Do not introduce sharp shadows or overly defined borders, as the system relies on gradients and slight color shifts for depth.
- Refrain from using Warm Parchment (#d1c5ad) as a solid background fill for buttons; it's reserved for outlined actions and links.
- Do not deviate from the Avenir Next typeface; maintain its distinct character and range of weights.
- Avoid tight spacing; maintain the spacious and breathable layout with minimum 24px between elements and 48px for larger sections.
- Do not use highly saturated, non-gradient colors for large blocks; vivid hues are for subtle accents and blurred effects.
- Do not use generic, symmetrical radii on cards, except for explicit no-radius cases; embrace the distinctive larger asymmetric radii for character.

### Layout

The page primarily uses a full-bleed layout, allowing background gradients and blurred orb effects to extend across the width. Content sections maintain consistent vertical spacing of 48px, with alternating text-left/text-right arrangements and centered stacks for headings and short descriptions. There's a strong emphasis on spaciousness, with ample negative space around content blocks. Navigation is minimal, likely integrated into the overall flow or accessed via implicit interactive elements, rather than a fixed header bar. The hero section features a prominent, centered headline over abstract, full-bleed gradient graphics.

### Imagery

This site features abstract, vibrant 3D orbs and diffused gradient effects that provide visual interest and depth against the dark background. The orbs are multi-colored (e.g., from #2a5482 to #f74577, or #40e4f7 to #db1885) and appear as blurred, textural elements that break the monotony of the dark canvas without being distracting. These graphics serve a decorative and atmospheric role, adding a sense of modern artistry and dynamism. Imagery is medium density, often supporting textual content rather than dominating it, with a focus on color and abstract form.

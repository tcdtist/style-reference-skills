---
version: alpha
name: Netflix Spain
description: The visual system wraps content in a cinematic deep dark mode, prioritizing immersive media consumption. A near-black canvas and layered dark grays (#000000 to #2d2d2d) create a backdrop that highlights vivid content. The primary brand red (#E50914) acts as a high-contrast beacon for interaction. Rounded corners (8px for cards, 4px for buttons) soften the UI, while bespoke typography reinforces a distinct brand identity.
colors:
  absolute-zero: "#000000"
  ghost-gray: "#0f0f0f"
  charcoal-black: "#232323"
  slate-shadow: "#2d2d2d"
  ash-gray: "#323232"
  stone-gray: "#393939"
  medium-gray: "#414141"
  silver-mist: "#5a5a5a"
  dove-gray: "#808080"
  cloud-white: "#ffffff"
  crimson-blaze: "#e50914"
  misty-silver: "#b3b3b3"
  indigo-nebula-gradient: "#192247"
  scarlet-halo-gradient: "#461518"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.17
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 12px
  sectionGap: 64px
components:
  primary-action-button:
    role: Button
  secondary-action-button:
    role: Button
  ghost-button-white-border:
    role: Button
  muted-action-button:
    role: Button
  media-carousel-card:
    role: Card
  feature-highlight-card:
    role: Card
  email-input-field:
    role: Input
  brand-logo-button:
    role: Button
---

## Overview

**North Star:** Cinematic Dark Canvas – a deep, rich dark mode experience designed to make content pop like a spotlight on a stage.

The visual system wraps content in a cinematic deep dark mode, prioritizing immersive media consumption. A near-black canvas and layered dark grays (#000000 to #2d2d2d) create a backdrop that highlights vivid content. The primary brand red (#E50914) acts as a high-contrast beacon for interaction. Rounded corners (8px for cards, 4px for buttons) soften the UI, while bespoke typography reinforces a distinct brand identity.

### Do's

- Use 'Crimson Blaze' (#E50914) exclusively for primary calls-to-action to signify a conclusive action.
- Layer dark subtle grays from 'Absolute Zero' (#000000) through 'Slate Shadow' (#2d2d2d) for different surface levels to create depth without relying on shadows.
- Apply Netflix Sans weight 900 at 100px with a 1.00 line height for prominent hero screen headlines.
- Maintain 8px border-radius for all cards and 4px for most interactive buttons to keep a consistent soft-edged feel.
- Employ 'Cloud White' (#FFFFFF) for all primary text and iconography against dark backgrounds to ensure high contrast and legibility.
- Utilize 12px for `elementGap` to maintain a comfortable visual rhythm between content blocks.

### Don'ts

- Do not introduce gradients with colors outside the defined accent palette to maintain brand consistency.
- Avoid using multiple colors for text hierarchy; rely on Netflix Sans weights (400, 500, 700) and sizes instead.
- Refrain from adding box shadows to elements; depth is created through background color layering.
- Do not use border-radius values other than 8px for cards, 4px for buttons, and 2px for links.
- Do not use 'Crimson Blaze' (#E50914) for decorative elements or non-actionable text to preserve its impact as a CTA.
- Avoid using a pageMaxWidth; content should stretch full-bleed horizontally when possible, with internal padding controlling text width.

### Layout

The page uses a full-bleed model, with content stretching across the entire viewport width, particularly in the hero section which often features a background video or large image. Max-width constraints appear to be handled by internal padding on textual content rather than a fixed container. The hero features a centered headline and CTA over a dark, immersive background. Sections are often separated by consistent vertical spacing (64px) and alternating dark background colors (e.g., 'Absolute Zero' to 'Slate Shadow'). Content is arranged in fluid grids for media carousels and multi-column layouts for feature sections (e.g., 4-column feature cards). Navigation consists of a sticky top bar.

### Imagery

The visual language is media-centric, showcasing large, full-bleed product artwork (movie/show posters) as both background elements and primary content. Posters are often contained within 8px rounded cards. Icons are subtle, monochromatic, and use the 'Cloud White' (#FFFFFF) against dark surfaces or 'Absolute Zero' (#000000) against lighter surfaces, serving explanatory rather than decorative roles. Imagery is image-heavy, dominating significant portions of screen real estate, especially in hero sections and carousels, serving as direct content showcase.

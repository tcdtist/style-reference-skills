---
version: alpha
name: Lattice
description: Lattice presents a vibrant, modular productivity system: a predominantly clean white canvas punctuated by distinct gradient-filled containers and brightly colored brand accents. Typography is compact and confident, primarily in a single sans-serif weight, ensuring clarity. Functional elements like buttons and badges embrace rounded forms and an array of muted yet distinct brand hues, creating a visually organized and accessible experience.
colors:
  canvas-white: "#ffffff"
  matter-black: "#001f1f"
  sandstone: "#f7f6f2"
  ash-gray: "#6a7878"
  slate-gray: "#455252"
  pale-green: "#cdface"
  forest-green: "#366625"
  teal-ink: "#006666"
  oceanic-teal: "#003d3d"
  moss-green: "#515c0b"
  deep-jade: "#2a4e1c"
  magenta-bloom: "#7a2251"
  golden-ochre: "#a36a14"
  violet-echo: "#624ee5"
  sky-mist: "#e4f7f9"
  lime-spritz-gradient: "#67e2eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.3
    letterSpacing: 0.88px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.43px
  heading:
    fontFamily: "system-ui"
    fontSize: 47px
    lineHeight: 1.1
    letterSpacing: -1.13px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.9
    letterSpacing: -1.73px
spacing:
  cardRadius: 21.6576px
  buttonRadius: 28.8768px
  elementGap: 7px
  sectionGap: 72px
components:
  primary-filled-button:
    role: Call to Action
  ghost-button:
    role: Secondary Action
  navigation-link-button:
    role: Navigation Item
  accent-gradient-hero-card:
    role: Showcase Card
  testimonial-card:
    role: Content Showcase
  informational-badge:
    role: Categorization/Meta
---

## Overview

**North Star:** Gradient-kissed productivity palette: an orderly white canvas brought to life by vibrant, organic color washes and structured forms.

Lattice presents a vibrant, modular productivity system: a predominantly clean white canvas punctuated by distinct gradient-filled containers and brightly colored brand accents. Typography is compact and confident, primarily in a single sans-serif weight, ensuring clarity. Functional elements like buttons and badges embrace rounded forms and an array of muted yet distinct brand hues, creating a visually organized and accessible experience.

### Do's

- Use 'Matter Black' (#001f1f) for all primary headings and body text, ensuring strong readability.
- Apply a border-radius of 28.8768px for all primary action buttons for a consistent soft, approachable feel.
- Employ 'Canvas White' (#ffffff) as the default background for most page sections and card surfaces.
- Utilize 'Pale Green' (#cdface) as the background for primary call-to-action buttons, accompanied by 'Forest Green' (#366625) text.
- Provide ample vertical separation between major page sections with a default `sectionGap` of 72px.
- Maintain a compact button style with `elementGap` of 7px for tight UI element alignments.
- Apply `Matter` font at 500 weight for headings for confident visual hierarchy.

### Don'ts

- Avoid using harsh, saturated colors for large background areas; reserve them for small accents or carefully crafted gradients.
- Do not deviate from the Matter typeface; maintain its consistent use across all text elements.
- Refrain from using square corners on interactive elements; apply radii of at least 11.5507px for a softer, more inviting touch.
- Do not introduce new shadow styles beyond the defined subtle stack for elevated cards; maintain visual lightness.
- Avoid using multiple font weights within a single text block to preserve the confident and direct typographic voice.
- Do not overuse bold text; rely on size and context for emphasis rather than increased visual weight.
- Do not combine multiple colored gradients arbitrarily; use them purposefully for distinct sections, following the established 'Lime Spritz Gradient' pattern.

### Layout

The page primarily uses a max-width contained layout of 1299px, centered within the viewport. The hero section is a full-bleed gradient background ('Lime Spritz Gradient') with a prominent centered headline and two call-to-action buttons. Following the hero, sections alternate between white and 'Sandstone' (#f7f6f2) backgrounds, creating a clear vertical rhythm. Content is arranged in alternating two-column layouts (text beside imagery/card) and three-column card grids for features and testimonials. The layout density is spacious, ensuring readability and visual breathing room between content blocks. A persistent top navigation bar provides access to key sections.

### Imagery

This site features a mix of conceptual illustrations and product screenshots. Illustrations are often abstract and geometric, using brand gradient colors to create a sense of dynamism and modernism. Product screenshots are typically presented as contained elements within card-like structures, sometimes with a subtle backdrop blur or shadow, emphasizing the software's functionality over realistic context. Icons are outlined, mono-color, and functional. Imagery generally plays an explanatory and decorative role, balancing an image-dominant hero section with text-dominant content sections later on.

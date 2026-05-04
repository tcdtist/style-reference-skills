---
version: alpha
name: Axiom
description: Axiom's design evokes a high-tech data interface, offering clarity and focus within a rich, dark environment. The foundational black (#000000) coupled with various shades of dark gray creates a deep, layered surface system without relying on heavy shadows. A single vivid orange (#DA5C2C) serves as the primary accent, providing clear calls to action and visual emphasis against the monochromatic backdrop. The minimal use of rounded corners (primarily 2px) maintains an industrial, precise feel, only softened by 9999px pill shapes for very specific interactive elements.
colors:
  midnight-ink: "#000000"
  deep-graphite: "#111111"
  charcoal-surface: "#191919"
  dark-slate: "#202020"
  medium-gray: "#3a3a3a"
  stone-accent: "#606060"
  light-steel: "#b4b4b4"
  almost-white: "#eeeeee"
  highlight-orange: "#DA5C2C"
typography:
  caption:
    fontFamily: "BerkeleyMono"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "BerkeleyMono"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
  heading:
    fontFamily: "BerkeleyMono"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.4
  heading-lg:
    fontFamily: "BerkeleyMono"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.33
  display:
    fontFamily: "BerkeleyMono"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.25
spacing:
  elementGap: 8px
  sectionGap: 40px
components:
  hero-cta-button-group:
    role: 
  announcement-banner:
    role: 
  testimonial-cards:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  outlined-button:
    role: Interactive element
  ghost-navigation-button:
    role: Interactive navigation element
  feature-card:
    role: Content display
  input-field:
    role: Form element
---

## Overview

**North Star:** Dark Matter Console — a vast, organized digital workspace with critical data highlighted by a vibrant, focused glow.

Axiom's design evokes a high-tech data interface, offering clarity and focus within a rich, dark environment. The foundational black (#000000) coupled with various shades of dark gray creates a deep, layered surface system without relying on heavy shadows. A single vivid orange (#DA5C2C) serves as the primary accent, providing clear calls to action and visual emphasis against the monochromatic backdrop. The minimal use of rounded corners (primarily 2px) maintains an industrial, precise feel, only softened by 9999px pill shapes for very specific interactive elements.

### Do's

- Use `Midnight Ink` (#000000) for page backgrounds and `Deep Graphite` (#111111) for primary UI surfaces like headers and footers.
- Apply `Highlight Orange` (#DA5C2C) exclusively for primary calls to action and active states, ensuring high visibility.
- Maintain a `2px` border-radius for all interactive elements and content cards to preserve the precise, defined aesthetic.
- Utilize `BerkeleyMono` for headlines and key information at various weights and sizes from `12px` to `32px` to convey a technical, authoritative tone.
- Provide ample internal padding of `32px` for feature cards and other content blocks to prevent a cramped feel within dark surfaces.
- Use `b4b4b4` as primary body text color on dark backgrounds for optimal readability and a consistent soft contrast.

### Don'ts

- Avoid using `Highlight Orange` (#DA5C2C) for decorative purposes or non-interactive elements, as it dilutes its impact as a CTA.
- Do not introduce additional vibrant colors; rely solely on the defined color palette to maintain visual discipline.
- Refrain from using strong, diffuse shadows; subtle box shadows like `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` are acceptable only for hints of elevation.
- Do not deviate from the `2px` border-radius for most elements; reserve `9999px` for specific pill-shaped components only.
- Avoid large variations in letter spacing; stick to 'normal' for both `BerkeleyMono` and `Inter` unless explicitly called for in a specific component.
- Do not use generic gray values for borders; default to `Medium Gray` (#3a3a3a) or `Dark Slate` (#202020) for consistency.

### Layout

The site uses a full-bleed page model, where the dark background extends to the edges of the viewport. Content within sections is centrally aligned with generous horizontal padding, suggesting a maximum content width though not strictly constrained. The hero section features a full-bleed dark background with a large, centered headline and calls to action. Sections alternate between solid dark backgrounds for content and black backgrounds for separating larger blocks. Content is arranged in stacked blocks, occasionally using two-column layouts for text-plus-callout or feature cards. A prominent 3-column grid is used for customer testimonials/features. Spacing between sections is consistent at `40px` or `64px`, providing ample breathing room. The navigation is a sticky top bar.

### Imagery

This design primarily relies on UI elements and data visualizations, rather than traditional imagery. Product screenshots of the Axiom observability dashboard are integrated directly into the layout, often with a dark theme consistent with the site's overall aesthetic. These are contained, not full-bleed, and serve an explanatory rather than decorative role. Iconography is simple, line-based, and monochromatic, typically rendered in `Light Steel` (#b4b4b4) or `Medium Gray` (#3a3a3a). There are no photographs or complex illustrations, emphasizing a practical, data-focused experience.

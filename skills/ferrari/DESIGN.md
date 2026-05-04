---
version: alpha
name: Ferrari
description: This design system evokes precision engineering and focused luxury through a high-contrast, almost entirely achromatic palette. Deep blacks and stark whites create a dramatic stage for the content, focusing attention on high-performance imagery. Subtle gray variations provide surface differentiation, akin to different finishes on precision metal, rather than relying on chromatic accents for visual hierarchy. The custom typography, characterized by its wide letter-spacing, projects a sense of deliberate pacing and exclusivity, ensuring every word commands attention.
colors:
  obsidian-black: "#000000"
  polar-white: "#ffffff"
  shadow-graphite: "#181818"
  steel-gray: "#303030"
  ash-mist: "#8f8f8f"
  rosso-corsa: "#FF0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.78
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.78
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.78
spacing:
  elementGap: 10px
  sectionGap: 48px
components:
  hero-slide-indicator-cta:
    role: 
  news-feature-card:
    role: 
  navigation-link-group-carousel-pagination:
    role: 
  ghost-navigation-link:
    role: Primary navigation item
  hero-action-arrow-button:
    role: Call to action in hero section
  minimal-pill-indicator:
    role: Carousel/slider pagination
  feature-card-headline:
    role: Editorial content headline
  body-text-paragraph:
    role: Standard informational text
  footer-link:
    role: Secondary navigation and informational links
---

## Overview

**North Star:** Precision engineered machinery. Like the interior of a sleek, high-performance engine, where every component is black or silver, and only critical indicators glow red.

This design system evokes precision engineering and focused luxury through a high-contrast, almost entirely achromatic palette. Deep blacks and stark whites create a dramatic stage for the content, focusing attention on high-performance imagery. Subtle gray variations provide surface differentiation, akin to different finishes on precision metal, rather than relying on chromatic accents for visual hierarchy. The custom typography, characterized by its wide letter-spacing, projects a sense of deliberate pacing and exclusivity, ensuring every word commands attention.

### Do's

- Do utilize a high-contrast palette of `Obsidian Black` (#000000) and `Polar White` (#ffffff) as the primary background and text colors to maintain a dramatic and luxurious feel.
- Do apply `Rosso Corsa` (#FF0000) as the sole accent color, reserving it exclusively for interactive elements and key indicators to command attention.
- Do apply custom `Body-Font` with generous letter-spacing (e.g., 0.0830em for navigation) for headlines and navigation to emphasize precision and exclusivity.
- Do use a 'comfortably spaced' rhythm with `elementGap` of `10px` and `cardPadding` of `20px` to maintain order and focus.
- Do maintain sharp, `0px` radius on all interactive elements and containers to reinforce the engineered aesthetic.
- Do use the `Shadow Graphite` (#181818) and `Steel Gray` (#303030) as subtle surface variations rather than relying on drop shadows for depth.

### Don'ts

- Don't introduce additional chromatic colors; the system is built on a black-and-white foundation with a single `Rosso Corsa` accent.
- Don't use rounded corners or soft edges on any components; the design demands sharp, precise lines (`0px` radius).
- Don't use drop shadows for elevation; rely on shifts in neutral background colors (`#000000`, `#181818`, `#ffffff`) to create hierarchy and depth.
- Don't use tight letter-spacing; the custom `Body-Font`'s inherent wide spacing is a core part of the brand's typographic identity.
- Don't embed images with external context; use tightly cropped, abstract, or studio-shot product imagery that isolates the subject.
- Don't deviate from the `Body-Font` for text elements; the system relies on this single typeface for typographic consistency and brand identity.

### Layout

The page exhibits a mixed layout: the hero is a full-bleed dark video/image with centered text and call to action. Subsequent sections alternate between dark and light backgrounds, using a flexible, full-width model. Content is primarily arranged in two-column layouts, often with text on one side and a large, impactful image on the other. Vertical spacing between logical sections is consistent, around `48px`. The overall impression is information-rich but carefully composed, guiding the eye through high-impact visuals and concise text blocks.

### Imagery

Photography focuses almost exclusively on high-performance vehicles, often in dramatic, dark studio settings with stark lighting (e.g., single spotlight revealing lines). Images are full-bleed within sections or large, contained blocks, presented with sharp, unmasked edges (0px radius). They serve a dual role: showcasing product and creating an aspirational, atmospheric mood. The visual density is high, with images frequently dominating sections and often carrying the primary visual weight over text.

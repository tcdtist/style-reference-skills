---
version: alpha
name: Stripe Press
description: Stripe Press evokes the gravitas of a classic library reinterpreted for a digital age. Dominant dark surfaces create a hushed atmosphere, where content is spotlighted with precision. The color palette, rather than being unified, exists as a series of rich, distinct individual 'book spines' — each book module presenting a unique thematic combination of subdued background and a singular, vibrant accent. This creates a compelling visual tension between the system's austere background and the vivid yet controlled bursts of color on each item, giving each publication its own distinct visual identity within a consistent framework.
colors:
  deep-slate: "#222222"
  rich-mocha: "#201819"
  ink-black: "#000000"
  digital-white: "#ffffff"
  ash-gray: "#d0d1d4"
  pale-stone: "#dbdbdb"
  amber-parchment: "#dfc78"
  indigo-ink: "#18185"
  rose-bloom: "#ebadcb"
  cerulean-haze: "#dee6ff"
  terra-cotta: "#e48244"
  crimson-blaze: "#ff4445"
  midnight-violet: "#0b1743"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.3
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.3
spacing:
  elementGap: 4-24px
  sectionGap: 20-30px
components:
  book-spine-cards-stack:
    role: 
  stripe-press-header-logo-tagline:
    role: 
  scroll-progress-indicator:
    role: 
  book-card-generic:
    role: Informational display
  header-navigation-link:
    role: Primary navigation
  scroll-indicator:
    role: Global navigation/progress
  newsletter-subscribe-input:
    role: Form Element
  subtle-text-link-footer:
    role: Secondary navigation/information
---

## Overview

**North Star:** Library of Curated Volumes — each radiating its own quiet brilliance.

Stripe Press evokes the gravitas of a classic library reinterpreted for a digital age. Dominant dark surfaces create a hushed atmosphere, where content is spotlighted with precision. The color palette, rather than being unified, exists as a series of rich, distinct individual 'book spines' — each book module presenting a unique thematic combination of subdued background and a singular, vibrant accent. This creates a compelling visual tension between the system's austere background and the vivid yet controlled bursts of color on each item, giving each publication its own distinct visual identity within a consistent framework.

### Do's

- Prioritize `Deep Slate` (#222222) as the default page background for a consistent dark theme.
- Use `Digital White` (#ffffff) for all primary text against dark backgrounds, maintaining high contrast.
- Apply `Ivar Headline` at 15px weight 400 with `letter-spacing: 0.015em` for all navigation and prominent headers.
- Ensure all interactive elements (like book cards) have a distinct accent color for their text and a contrasting background, drawing from the `brand` group.
- Maintain a 0px border radius for most elements and a sharp 2px for subtle interactive components like scroll indicators, preserving the precise, angular aesthetic.

### Don'ts

- Avoid generic button styles with borders or solid background colors, as buttons are primarily represented by the 'book' aesthetic.
- Do not introduce strong drop shadows, as the system relies on distinct background colors for depth and separation.
- Do not deviate from the `Ivar Headline` and `Ivar Text` fonts; custom typography is a core identity element.
- Refrain from using gradients on surfaces or text; this design relies on solid, distinct color blocks.
- Avoid highly rounded corners; the dominant shape is rectangular, with minimal 2px radii for specific components.

### Layout

The page primarily uses a full-bleed dark background, creating an expansive, immersive environment. The main content area is centered and appears to stack individual 'book' modules vertically with minimal vertical spacing, creating the impression of an endlessly scrolling library shelf. The hero introduces the brand with a clear, left-aligned logo and title. A distinctive vertical scroll indicator is fixed to the left edge, reinforcing the sequential, scroll-driven interaction model. There is no strong grid structure for primary content beyond vertical stacking, as each 'book' object is a self-contained visual unit that fills its horizontal allocation. The subtle footer elements suggest a conventional two-column bottom alignment for supplementary links and information against a lighter background section.

### Imagery

The visual language is primarily product-focused, showcasing each 'book' as a distinct three-dimensional object, akin to physical book spines. These renders are highly detailed, featuring different textures, material properties (matte, metallic sheen, paper), and unique graphic design tailored to each publication. There is no photography of people or lifestyle; the focus is entirely on the artifacts. Imagery acts as the primary content differentiator and visual anchor, occupying significant space and presented in a stacked, sequential manner. Icons (e.g., the menu and scroll indicator) are minimal, monochromatic, and outline-based, serving purely functional roles without decorative embellishment.

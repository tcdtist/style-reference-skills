---
version: alpha
name: Aesop
description: The design evokes a scholarly apothecary's formulary, where every element is presented with meticulous precision. It operates on a starkly limited palette of warm off-white and charcoal, creating a high-contrast, text-forward environment. A rigid, architectural layout with sharp 0px corners dominates, reinforcing a sense of order and clinical quality. The system's signature is the typographic tension between the humanist serif 'Zapf-Humanist' for expressive headlines and the neutral sans-serif 'SuisseIntl' for all functional text, lending an air of classicism to a modern digital interface.
colors:
  parchment: "#fffef2"
  charcoal: "#333333"
  ink-black: "#000000"
  carbon: "#252525"
  stone: "#666666"
  slate: "#d6d5cc"
  alabaster: "#ffffff"
  umber: "#945c26"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.7
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8-16px
  sectionGap: 96-128px
components:
  product-card-animal:
    role: 
  product-carousel-section-new-and-notable:
    role: 
  hero-cta-banner:
    role: 
  dark-action-button:
    role: Primary call-to-action, such as 'Add to Cart'.
  outline-navigation-button:
    role: Secondary header actions like 'Email sign up' or 'Search'.
  text-link:
    role: Inline navigation or tertiary actions.
  hero-outline-button:
    role: Main CTA within the hero section.
  text-input-select:
    role: Form fields for user input or selection.
  informational-badge:
    role: Small text labels above product titles, e.g., 'New addition'.
  circular-arrow-button:
    role: Carousel navigation controls.
---

## Overview

**North Star:** NGLORA - Apothecary's Formulary. A meticulously organized space where typography and product photography are treated with scientific precision.

The design evokes a scholarly apothecary's formulary, where every element is presented with meticulous precision. It operates on a starkly limited palette of warm off-white and charcoal, creating a high-contrast, text-forward environment. A rigid, architectural layout with sharp 0px corners dominates, reinforcing a sense of order and clinical quality. The system's signature is the typographic tension between the humanist serif 'Zapf-Humanist' for expressive headlines and the neutral sans-serif 'SuisseIntl' for all functional text, lending an air of classicism to a modern digital interface.

### Do's

- Use Zapf-Humanist exclusively for large, emotive headlines, otherwise default to SuisseIntl.
- Maintain sharp 0px corners on all rectangular UI elements like cards, buttons, and inputs.
- Rely on generous whitespace (96px+ between sections) for separation, not dividers or shadows.
- Center-align text and imagery within product cards and feature blocks.
- Use the Parchment (#fffef2) and Charcoal (#333333) combination for primary content.
- Keep layouts simple: centered stacks or balanced multi-column grids.
- Use the Dark Action Button for all primary purchasing actions.

### Don'ts

- Do not use rounded corners on any element other than circular icon buttons.
- Do not use drop shadows or any other 3D-effect for elevation.
- Do not introduce new colors; the palette is intentionally restricted.
- Do not use gradients.
- Do not place text over complex parts of images; ensure high contrast.
- Do not use lifestyle photography that shows models or hands using products.
- Do not create complex, overlapping, or asymmetrical layouts.

### Layout

The page follows a highly structured, architectural model with a generous max-width of around 1600px, within which content is neatly centered. The structure is a vertical stack of full-width bands, often alternating between the Parchment background and full-bleed imagery or video in the hero. Vertical rhythm is defined by expansive gaps (96px+) between sections. Content is arranged in simple, centered stacks or rigid 3-column grids for product carousels. This methodical, spacious, and grid-based approach reinforces the brand's precision and focus.

### Imagery

The visual language for imagery is stark and artifact-like. Product photography features items isolated and centrally framed against the Parchment (#fffef2) background, akin to specimens in a lab or objects in a gallery. There is a deliberate absence of lifestyle context, models, or hands. The focus is purely on the product's form, amber glass, and typographic labels. Hero sections may use moody, atmospheric video focusing on texture and sensation (e.g., fur, water) rather than direct product use, providing a sensory counterpoint to the clinical product shots.

### Elevation

This system actively avoids shadows for elevation. Depth and hierarchy are achieved through typographic scale, stark color contrast between Parchment (#fffef2) and Charcoal (#333333), and generous whitespace, not through layered surfaces or drop shadows. This creates a flat, graphic, and print-inspired aesthetic.

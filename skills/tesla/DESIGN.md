---
version: alpha
name: Tesla
description: The design operates like a premium automotive showroom translated to the screen. Every section is a full-bleed, cinematic product photograph, with UI elements acting as minimal, functional plaques. The palette is starkly achromatic, save for a single, electric Tesla Blue (#3e6ae1) reserved exclusively for primary calls-to-action, functioning like an ignition button. Typography is neutral and technical, serving information without asserting its own personality. This systematic subordination of UI to imagery ensures the product—the car, the solar panel—is always the undisrupted hero.
colors:
  tesla-blue: "#3e6ae1"
  pure-white: "#ffffff"
  off-white: "#eeeeee"
  parchment: "#e5e3df"
  light-border: "#cccccc"
  subtle-gray: "#8e8e8"
  steel: "#5c5e62"
  charcoal: "#393c41"
  onyx: "#171a20"
  carbon: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.29
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 8-16px
components:
  region-selector-modal:
    role: 
  offer-cards-current-offers-american-heroes:
    role: 
  bottom-action-bar-ask-a-question-schedule-a-drive:
    role: 
  primary-cta-button:
    role: The main action button for ordering or engaging.
  secondary-ghost-button:
    role: Secondary action like 'Learn More' or 'Demo'.
  modal-button-white:
    role: Secondary option within a modal or pop-up.
  header-navigation-link:
    role: Main site navigation.
  footer-navigation-link:
    role: Tertiary links in the site footer.
  product-hero-section:
    role: Full-screen container showcasing a single product.
---

## Overview

**North Star:** Automotive Showroom on Screen. High-fidelity product visuals dominate, framed by a minimal, functional interface that gets out of the way.

The design operates like a premium automotive showroom translated to the screen. Every section is a full-bleed, cinematic product photograph, with UI elements acting as minimal, functional plaques. The palette is starkly achromatic, save for a single, electric Tesla Blue (#3e6ae1) reserved exclusively for primary calls-to-action, functioning like an ignition button. Typography is neutral and technical, serving information without asserting its own personality. This systematic subordination of UI to imagery ensures the product—the car, the solar panel—is always the undisrupted hero.

### Do's

- Always lead with a full-bleed, high-quality product image for every major section.
- Center-align text and CTAs over background images.
- Use Tesla Blue (#3e6ae1) exclusively for primary, high-priority actions like 'Order Now'.
- Pair a filled primary CTA with a white or ghost secondary CTA.
- Maintain a strict achromatic palette (white, grays, black) for all UI outside of the primary CTA.
- Use the 4px base unit for all padding, margins, and radii (e.g., 4px, 8px, 16px, 24px).
- Keep UI chrome, like headers and footers, visually minimal and unobtrusive.

### Don'ts

- Don't use Tesla Blue (#3e6ae1) for text, headlines, or decorative elements.
- Don't introduce any other saturated colors into the UI palette.
- Don't use complex components; prefer simple, stacked text and button layouts.
- Don't use large shadows, gradients, or heavy visual effects on UI elements.
- Don't create layouts where text dominates over imagery.
- Don't use border radii larger than 8px.
- Don't use serif or expressive display fonts; maintain a neutral, technical typographic voice.

### Layout

The page structure is a vertical series of full-screen, edge-to-edge content blocks, creating a 'scrolling presentation' experience. The dominant pattern is a centered stack: a large headline, supporting subtext, and action buttons overlaid directly onto a full-bleed background image. There is no visible page container; the browser viewport is the frame. Navigation is confined to a thin, non-sticky header bar at the very top, preserving maximum screen real estate for product visuals. Section transitions are seamless, with no visible gaps or dividers.

### Imagery

The visual language is defined by cinematic, high-fidelity product photography. Every image is treated as a hero shot, typically full-bleed, occupying the entire viewport. The photography style is sharp, clean, and often aspirational, showing products in ideal contexts (a car on an open road, solar panels on a modern home). Color grading is natural and vibrant to make the product pop against the neutral UI. The density is image-dominant; text and UI exist only to support the visual narrative established by the photos.

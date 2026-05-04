---
version: alpha
name: Tailark Pro
description: Tailark Pro presents an airy, contemporary aesthetic that feels like an interactive museum exhibition of digital components. It achieves this with an almost entirely achromatic palette, punctuated by carefully selected, vibrant accents on interactive elements or illustrative details. The use of multiple shades of near-white for backgrounds and surfaces, combined with subtle, layered box-shadows, creates depth and structure without heavy lines or strong color contrasts. Typography is primarily utilitarian sans-serif, anchoring the UI, while a mono-spaced font adds a technical, precision-engineered feel to code-like elements. Asymmetric and varied border radii on cards create a dynamic, modern presentation.
colors:
  ink-black: "#09090b"
  ghost-white: "#ffffff"
  silver-gray: "#e4e4e7"
  dim-gray: "#52525c"
  charcoal-black: "#404040"
  steel-gray: "#5f5f61"
  light-pearl: "#848485"
  cloud-gray: "#d4d4d8"
  pebble-gray: "#c2c2c2"
  dusty-gray: "#a6a6a6"
  dark-granite: "#474748"
  slate-blue: "#71717b"
  violet-glow: "#615fff"
  teal-burst: "#64debe"
  lavender-mist: "#b0afff"
  sunstone: "#e17100"
  emerald-spark: "#00d492"
  sky-blue: "#2b7fff"
  tangerine: "#fe9a00"
  forest-green: "#00bc7d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 48px
components:
  invoice-card:
    role: 
  file-type-badge-grid:
    role: 
  chat-notification-cards:
    role: 
  default-button:
    role: Interactive element
  white-text-button:
    role: Secondary action
  small-button:
    role: Compact action
  rounded-small-button:
    role: Compact action with softer edges
  illustration-card:
    role: Displaying illustration or feature previews
  elevated-card-top-rounded:
    role: Container for content, elevated off the surface
  standard-elevated-card:
    role: General content container with elevation
  dynamic-elevated-card-top-rounded:
    role: Feature card with distinct top visual
  interactive-input:
    role: Single-line text input field
---

## Overview

**North Star:** Gallery of Digital Artifacts — like a minimalist gallery showcasing pixel-perfect UI elements on subtly textured white walls.

Tailark Pro presents an airy, contemporary aesthetic that feels like an interactive museum exhibition of digital components. It achieves this with an almost entirely achromatic palette, punctuated by carefully selected, vibrant accents on interactive elements or illustrative details. The use of multiple shades of near-white for backgrounds and surfaces, combined with subtle, layered box-shadows, creates depth and structure without heavy lines or strong color contrasts. Typography is primarily utilitarian sans-serif, anchoring the UI, while a mono-spaced font adds a technical, precision-engineered feel to code-like elements. Asymmetric and varied border radii on cards create a dynamic, modern presentation.

### Do's

- Prioritize `Ghost White` (#ffffff) for page backgrounds and large surface areas to maintain an open, minimalist feel.
- Use `Ink Black` (#09090b) for primary text and headings, ensuring high contrast against light backgrounds.
- Apply `Violet Glow` (#615fff) exclusively for primary interactive elements like buttons and active states to guide user attention.
- Construct depth through subtle, layered box-shadows (e.g., `oklab(0 0 0 / 0.075) 0px 0px 0px 1px, oklab(0 0 0 / 0.065) 0px 10px 15px -3px, oklab(0 0 0 / 0.065) 0px 4px 6px -4px`) rather than hard borders for cards and elevated components.
- Vary card corner radii, including asymmetric options (e.g., `40px` top-rounded, `0px` bottom) to create a dynamic and modern grid layout.
- Use `ui-sans-serif` at weight 400 for all body text to ensure optimal readability and neutrality across the UI.
- Adhere to an `8px` element gap for consistent and compact spacing between most UI components.

### Don'ts

- Avoid using multiple vibrant chromatic colors concurrently; reserve them for specific interactive elements or within illustrations.
- Do not introduce strong, opaque borders on cards or sections; rely on subtle `Silver Gray` (#e4e4e7) or transparent outlines.
- Refrain from using heavy shadows that obscure content; elevation should be perceived as subtle lifts, not dark depths.
- Do not use generic sans-serif fonts where `Geist Mono` is intended for a technical or code-like context.
- Avoid large negative spacing or white space beyond `48px` between main sections; maintain a compact information density.
- Do not default to uniform `6px` radius for all elements; strategically apply `16px`, `32px`, or `40px` radii to cards for visual rhythm.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px, centered horizontally. The hero section is full-width with a dark gradient background, centrally aligning its headline. Content sections below often feature alternating `Ghost White` and very subtle `Silver Gray` or `Translucent Elevated Card` backgrounds, creating a soft band rhythm. Content is arranged in modular grids, particularly prominent in the illustration gallery with a consistent `8px` element gap. A notable pattern is the use of 2-column or 3-column card grids, with cards featuring varied corner radii for visual interest. The header is sticky, compact, and contains primary navigation and action buttons.

### Imagery

The site uses a mix of highly stylized illustrations and product-like UI mockups. Illustrations are dimensional and often represent digital artifacts, documents, or data visualizations, set against white or subtly tinted backgrounds. They often feature brand accent colors like `Violet Glow` or `Emerald Spark`. UI mockups are clean, sharp, and focused on showcasing product interfaces. Icons are monochromatic or duo-toned with `Ink Black` and an accent color, frequently outlined with a small stroke weight, and have a modern, geometric style. Imagery acts as both decorative atmosphere and explanatory content, creating a gallery-like feel where every visual element is a curated piece.

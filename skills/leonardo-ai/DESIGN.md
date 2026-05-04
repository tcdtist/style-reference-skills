---
version: alpha
name: Leonardo.ai
description: Leonardo.Ai evokes a luminous digital void, where vibrant hues punch through deep darkness. Typography is bold and oversized, often warping or stacked for dramatic effect, suggesting a world of limitless creation. Interface elements are primarily ghosted or outlined, allowing the rich generative imagery and expressive text to dominate, with solid accents used sparingly for key interactions. The system maintains a high contrast, dark-mode default, relying on the interplay of black canvas, bright white text, and a focused palette of vivid, single-color accents for points of interest.
colors:
  midnight-void: "#000000"
  ghostly-gray: "#e5e5e5"
  off-black-text: "#0a0a0a"
  pure-white: "#ffffff"
  subtle-surface: "#353535"
  muted-ash: "#999999"
  luminous-green: "#03e65b"
  deep-violet: "#6e60ee"
  electric-yellow: "#ffc533"
  vivid-crimson: "#ff3386"
  sunset-red: "#ff5d4b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 0.8
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 0.9
    letterSpacing: -0.78px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 59px
    lineHeight: 0.85
    letterSpacing: -1.18px
  display:
    fontFamily: "system-ui"
    fontSize: 165px
    lineHeight: 0.8
    letterSpacing: -3.3px
spacing:
  cardRadius: 8.4375px
  buttonRadius: 60px
  elementGap: 7-10px
  sectionGap: 34-37px
components:
  ghost-pill-button:
    role: Secondary action button for navigation or tertiary interactions.
  filled-pill-button-light:
    role: Primary action button, high contrast.
  icon-only-button:
    role: Navigation or small interactive elements where size is minimal.
  horizontal-tab-button:
    role: Segmented control for filtering or switching views.
  basic-content-card:
    role: Container for secondary content like descriptions or detailed information.
  accent-product-card:
    role: Visually distinct card for showcasing featured items or categories.
  content-badge:
    role: Label or tag for categorization.
---

## Overview

**North Star:** Luminous Digital Void: vibrant hues punching through deep darkness.

Leonardo.Ai evokes a luminous digital void, where vibrant hues punch through deep darkness. Typography is bold and oversized, often warping or stacked for dramatic effect, suggesting a world of limitless creation. Interface elements are primarily ghosted or outlined, allowing the rich generative imagery and expressive text to dominate, with solid accents used sparingly for key interactions. The system maintains a high contrast, dark-mode default, relying on the interplay of black canvas, bright white text, and a focused palette of vivid, single-color accents for points of interest.

### Do's

- Always use Midnight Void (#000000) for page backgrounds to maintain the deep, dark aesthetic.
- Utilize Pure White (#ffffff) as the primary text color on dark backgrounds for legibility and visual pop.
- Apply LeoSans for all headlines and display text, using extensive letter-spacing adjustments (e.g., -0.0200em for large sizes) to achieve its distinct, compressed look.
- Employ Ghostly Gray (#e5e5e5) for all non-interactive borders, including ghost buttons and dividers, to maintain a subtle structure against dark surfaces.
- Reserve Luminous Green (#03e65b) and Deep Violet (#6e60ee) for distinct accent roles like active states, critical highlights, and brand iconography.
- Use 60px border radius for interactive elements like buttons to achieve a strong pill-like, accessible shape.
- Implement the linear-gradient(rgb(10, 10, 10) 0%, rgba(37, 37, 37, 0.65) 100%) for contained sections that need a softer, slightly varied background from the pure black canvas.

### Don'ts

- Avoid using multiple accent colors in close proximity; instead, let a single accent color make its statement.
- Do not introduce light gray backgrounds for content sections; maintain the dark theme by using Subtle Surface (#353535) for elevated cards.
- Refrain from using default browser link styles; ensure all links use canvaSans and either Pure White (#ffffff) or Muted Ash (#999999) with appropriate hover states.
- Do not use subtle shadows for elevation; the system relies on solid background color shifts for hierarchy.
- Never use `canvaSans` for headlines; its purpose is functional readability, not expressive display.
- Avoid generic rectangular buttons; all prominent buttons should adopt the distinct 60px pill radius.
- Do not introduce large amounts of whitespace around tightly tracked headlines; they are designed to command dense visual space.

### Layout

The page primarily employs a full-bleed layout, where the dark background extends to the viewport edges. The hero section is characterized by oversized, warped typographic elements laid out in 3D perspective, making a bold statement. Content sections below often feature a centered stack text block followed by image-heavy layouts – frequently a grid of cards or alternating text+visual sections. Vertical rhythm is governed by distinct section gaps, creating clear breaks. Navigation is a minimalist top bar, sticky at some breakpoints, with ghosted menu items and prominent 'Log in' and 'Tutorial' buttons.

### Imagery

The imagery leans heavily on highly creative, often abstract or fantastical AI-generated art, product imagery, and stylized photography. These visuals are typically contained within cards with sharp or slightly rounded corners, presented as showcases rather than integrated into the background. The treatment is direct: full-color, high-impact visuals without heavy masking or complex overlaps. Icons are generally minimalist, outlined, and monochromatic, with the occasional full-color brand icon, acting as functional elements that don't compete with the generative art.

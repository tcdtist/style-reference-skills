---
version: alpha
name: Dyotanya
description: Dyotanya's visual system evokes a playful, hand-drawn blueprint aesthetic. It combines elegant serif typography with a stark, compact sans-serif, all set against a canvas of near-white. A single muted blue creates soft accents and interactive elements, often appearing as subtle borders. Dynamic, offset shadows add a touch of whimsy and depth to cards and elements, disrupting the otherwise flat surfaces.
colors:
  canvas-white: "#f5f5f3"
  ink-black: "#000000"
  deep-charcoal: "#333333"
  cloud-white: "#ffffff"
  sky-blueprint: "#81aed9"
  sunset-orange: "#ff8562"
  vivid-blue: "#55a1ea"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.54
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  cardRadius: 20px
  buttonRadius: 50px
  elementGap: 10px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Call to action.
  outline-card-with-shadow:
    role: Feature cards, portfolio items.
  accent-card:
    role: Highlighting specific content.
  round-input-field:
    role: User input.
  thin-border-card:
    role: Secondary content containers, subtle grouping.
  hamburger-menu-icon:
    role: Navigation toggle.
---

## Overview

**North Star:** Playful blueprint on textured paper.

Dyotanya's visual system evokes a playful, hand-drawn blueprint aesthetic. It combines elegant serif typography with a stark, compact sans-serif, all set against a canvas of near-white. A single muted blue creates soft accents and interactive elements, often appearing as subtle borders. Dynamic, offset shadows add a touch of whimsy and depth to cards and elements, disrupting the otherwise flat surfaces.

### Do's

- Use Sky Blueprint (#81aed9) as the primary accent color for all main interactive elements and borders.
- Apply Simeiz font for all heading and display text, prioritizing weights 300 and 400 at larger sizes for an elegant feel.
- Utilize an offset box-shadow of 5px -5px 0px 0px with Deep Charcoal (#333333) for elevated card elements to create a distinctive visual pop.
- Implement a default border-radius of 50px for primary action buttons to achieve a soft, pill-like appearance.
- Maintain a compact visual density, using 10px as a common element gap and 48px for internal card padding for a contained feel.
- Ensure primary text uses Ink Black (#000000) for maximum contrast against Canvas White (#f5f5f3) backgrounds.
- Introduce Sunset Orange (#ff8562) only for critical inline links, creating visual warmth and hierarchy.

### Don'ts

- Avoid using multiple chromatic colors; stick primarily to Sky Blueprint as the main brand accent and Sunset Orange specifically for links.
- Do not use heavy, dark backgrounds for sections; maintain Canvas White (#f5f5f3) or Cloud White (#ffffff) as dominant surfaces.
- Refrain from using strong, block-like shadows; the distinctive offset shadow is key to the brand's playful elevation.
- Do not deviate from the established border radii; roundness is a key identifier for buttons (50px), inputs (30px), and cards (20px/30px).
- Avoid excessive spacing between elements or sections; the design favors a 'compact' density, so larger gaps should be deliberate and functional.
- Do not use bold weights for Simeiz font; the brand's heading style relies on the lighter 300 or 400 weights for its restrained elegance.
- Do not apply text decoration (underline) on non-link text to avoid confusion; links are primarily identified by Sunset Orange (#ff8562).

### Layout

The page adopts a max-width contained layout, allowing generous external padding that is bordered by a Sky Blueprint frame. The hero section features large, expressive Simeiz typography, dynamically arranged and sometimes overlapping with subtle graphical elements like the decorative curly line. Further sections alternate between white and muted backgrounds (though not explicitly shown in data, implied by general design contrast). Content is arranged in alternating text-left/image-right or vertical stacks. Card grids are prominent for portfolio items, featuring distinct offset shadows. The layout emphasizes ample whitespace and visual hierarchy, with a clear focus on typography in the hero area and organized content blocks below. Navigation is minimal, featuring a discreet hamburger menu in the top right.

### Imagery

The imagery style is minimalist and strategic, primarily featuring product shots or abstract elements contained within rounded shapes. Photography, where present (like the portrait or client work examples), uses a clean, high-key treatment, often desaturated or monochrome, allowing the colorful UI elements to stand out. Icons are simple, outlined, and monochromatic (Ink Black), complementing the hand-drawn aesthetic. Animated curly lines act as decorative dividers, adding to the 'blueprint' feel. Imagery serves to showcase work or add subtle visual interest rather than being a dominant content driver, maintaining a text-dominant hierarchy.

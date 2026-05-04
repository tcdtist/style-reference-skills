---
version: alpha
name: Sometimes Always
description: Sometimes Always cultivates a retro-modern, boutique aesthetic with a warm, desaturated yellow canvas that feels like aged paper. Typography is compact and confident, juxtaposing mid-century sans-serifs with unexpected light-weight display fonts. Interactive elements feature soft pill shapes and an earthy, vivid yellow accent, while product cards remain minimal, allowing the imagery to stand out against the warm background. The overall impression is one of curated, approachable sophistication.
colors:
  canvas-parchment: "#ffecbd"
  amber-glow: "#eba900"
  rich-ink: "#000000"
  surface-frost: "#ffffff"
  horizon-haze: "#eeeeee"
  deep-graphite: "#232323"
  muted-stone: "#333333"
  accent-orange: "#f37121"
  paper-white: "#ffecdb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2.14
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.21
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.18
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.9
spacing:
  cardRadius: 15px
  buttonRadius: 40px
  elementGap: 20px
  sectionGap: 40px
components:
  pill-ghost-button:
    role: Navigational and secondary actions, unobtrusive yet interactive.
  text-link-button:
    role: Inline actions or minimal calls to action where visual weight needs to be low.
  pill-solid-amber-button:
    role: Primary calls to action, standing out with brand color.
  product-card:
    role: Displaying product listings.
  rounded-input:
    role: Form fields for user input, designed with soft corners.
  pill-badge:
    role: Categorization and metadata display for products.
---

## Overview

**North Star:** Boutique bodega postcard

Sometimes Always cultivates a retro-modern, boutique aesthetic with a warm, desaturated yellow canvas that feels like aged paper. Typography is compact and confident, juxtaposing mid-century sans-serifs with unexpected light-weight display fonts. Interactive elements feature soft pill shapes and an earthy, vivid yellow accent, while product cards remain minimal, allowing the imagery to stand out against the warm background. The overall impression is one of curated, approachable sophistication.

### Do's

- Always use 'Canvas Parchment' (#ffecbd) as the base background for product listings and most content sections to maintain the warm, aged paper aesthetic.
- Apply 'Amber Glow' (#eba900) exclusively for primary action buttons, focus states, and key interactive highlights, ensuring a consistent brand accent.
- Utilize 'Rich Ink' (#000000) for all primary text, headings, and critical borders to ensure high contrast and legibility against the light backgrounds.
- Ensure interactive elements like buttons and inputs adopt a 40px `radius` for a consistent pill shape, unless specifically a text link.
- Pair Founders Grotesk for body text and Founders Grotesk Medium for headings to maintain a compact, confident typographic rhythm.
- Incorporate Sunset Serial Light (#000000, 44px, 1.2lh) for prominent marketing headlines to introduce a distinctive elegant signature.
- Use 20px as the default `elementGap` for horizontal spacing between elements and internal card padding.

### Don'ts

- Do not introduce sharp corners on interactive components; maintain a minimum `radius` of 40px for buttons and inputs, and 100px for badges.
- Avoid using highly saturated, cool-toned colors; stick to the warm, earthy palette with 'Amber Glow' as the primary accent.
- Do not use heavy box-shadows or significant elevation; prioritize flat interfaces and rely on subtle background variations or minimal borders for depth.
- Do not deviate from the Founders Grotesk family for general UI text; alternative fonts should be reserved for specific decorative elements.
- Avoid excessive spacing; adhere to a 'comfortable' density with 20px for element gaps and 40px for section breaks, rather than sprawling layouts.
- Do not use black as a background color for any primary content sections; it appears only as text or border on this light-themed site.
- Refrain from using gradients on surfaces or as backgrounds for interactive elements; the visual system is predominantly flat with solid color fills.

### Layout

The page employs a max-width contained layout, with content typically centered on the warm 'Canvas Parchment' (#ffecbd) background. The hero section is full-bleed, using a styled image that integrates the brand font directly. Section rhythm is primarily driven by vertical spacing and consistent card grids (often 4-column), rather than alternating background colors, creating a continuous flow. Navigation is a sticky top bar, minimizing visual clutter. Content blocks often feature alternating text-left/image-right patterns, providing visual interest within the structured grid.

### Imagery

Photography is product-focused, featuring bottles styled with organic elements (fruit, ice) or in lifestyle contexts, often with a slight retro or warm filter. Images are generally contained within grid layouts or as hero visuals, contributing to the boutique feel. Icons are minimal, sans-serif, and typically 'Rich Ink' (#000000), acting as functional accents rather than decorative elements. The overall density of imagery is balanced with text, providing atmospheric context and showcasing products without overwhelming the UI.

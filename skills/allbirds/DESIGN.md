---
version: alpha
name: Allbirds
description: Allbirds presents a natural, approachable e-commerce experience. Soft neutrals and muted chromatic colors provide a calming backdrop for product-focused layouts. The combination of a friendly sans-serif with a distinctive serif for headlines creates a balance of modern utility and understated elegance. Key elements like buttons and inputs feature large, almost pill-like border radii, contributing to an overall soft and inviting touch.
colors:
  black-ink: "#000000"
  white-linen: "#ffffff"
  charcoal-slate: "#212121"
  warm-mist: "#e0dacf"
  storm-gray: "#525252"
  muted-olive: "#222519"
  desert-clay: "#a57e75"
  sky-dust: "#879aab"
  sandstone-tan: "#d1b0a4"
  sunlit-ochre: "#9e8949"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.05px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.025px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
spacing:
  cardRadius: 16px
  buttonRadius: 1.67772e+07px
  elementGap: 4px
  sectionGap: 42-90px
components:
  announcement-banner-button-group:
    role: 
  category-navigation-cards:
    role: 
  new-arrivals-product-cards-with-utility-chips:
    role: 
  primary-filled-button:
    role: Call to action.
  secondary-filled-button:
    role: Alternative call to action.
  secondary-outlined-button-light:
    role: Subtle action on light backgrounds.
  secondary-outlined-button-dark:
    role: Subtle action on dark backgrounds.
  pill-input-field:
    role: Form input.
  product-display-card:
    role: Showcasing individual products.
  header-navigation-link:
    role: Primary navigation.
  utility-chip:
    role: Informational tag like 'NEW ARRIVALS'.
---

## Overview

**North Star:** Soft Natural Palette. Like hand-woven textiles and smoothed river stones.

Allbirds presents a natural, approachable e-commerce experience. Soft neutrals and muted chromatic colors provide a calming backdrop for product-focused layouts. The combination of a friendly sans-serif with a distinctive serif for headlines creates a balance of modern utility and understated elegance. Key elements like buttons and inputs feature large, almost pill-like border radii, contributing to an overall soft and inviting touch.

### Do's

- Prioritize Geograph for all body text, navigation, and button labels at its specified weights and sizes to maintain UI consistency.
- Use Self Modern 400 for all marketing headlines and display text to express brand elegance.
- Apply 1.67772e+07px radius to all interactive buttons and inputs for a soft, approachable feel, effectively making them pill-shaped.
- Utilize the color progression from White Linen (#ffffff) background to Charcoal Slate (#212121) buttons for clear contrast and hierarchy.
- Maintain a clear product focus by centering product imagery on clean backgrounds (White Linen, Muted Olive, or other Brand swatch colors).

### Don'ts

- Avoid using box-shadows extensively; elevation is primarily achieved through background color shifts and subtle borders.
- Do not introduce sharp corners on primary interactive elements like buttons or input fields, as the pill-like radius is a signature brand element.
- Refrain from highly saturated or vibrant accent colors; the brand palette relies on muted, earthy tones and achromatic neutrals.
- Do not deviate from the established font families; Geograph and Self Modern provide a distinct dual-personality to the typography.
- Avoid using thin line-heights on body text; ensure readability with line-heights of 1.4 to 1.5 for optimal comfort.

### Layout

The page primarily uses a max-width contained layout, though some hero sections extend full-bleed. The hero pattern varies: some feature large full-width product arrangements with text overlay, while others adopt a split layout with a lifestyle image on one side and a headline/CTA on the other. Sections generally feature consistent vertical spacing (sectionGap 42-90px) and often employ 2-column or multi-column grids for presenting products or content blocks. Product listings are presented in responsive card grids. The content flow is primarily linear, with distinct sections visually separated by background color changes or clear vertical spacing. Navigation is a prominent top bar, typically fixed, with a clean, centered logo and right-aligned utility icons.

### Imagery

This site features product-focused photography and lifestyle shots. Product imagery consists of tight crops of footwear on clean, solid-colored backgrounds (often White Linen or muted brand swatches) presented as isolated objects. Lifestyle photography captures models in natural settings (e.g., outdoors, against natural textures), often from a distance, with a focus on conveying a sense of ease and connection to nature. Images are typically full-bleed within sections or contained within cards with rounded corners (16px radius). The overall treatment is natural, not overly contrasty or filtered, emphasizing the authentic appearance of the products and environments. Icons, such as shopping cart and search, are simple, monochromatic fills matching the text color.

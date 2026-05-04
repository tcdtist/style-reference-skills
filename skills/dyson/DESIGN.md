---
version: alpha
name: Dyson
description: This Dyson design system exudes an aura of understated, high-tech precision, much like the engineering of its products. It achieves this through a largely monochromatic palette of distinct dark grays and crisp whites, punctuated by a vibrant green for primary calls to action. The strong focus on clear product imagery is supported by a clean, geometric typeface, ensuring a direct and unembellished presentation of technology.
colors:
  dyson-ink: "#333333"
  ghost-gray: "#999999"
  canvas-white: "#ffffff"
  deep-graphite: "#000000"
  aluminum: "#919191"
  medium-gray: "#555555"
  light-silver: "#ebebeb"
  warm-paper: "#fff8e6"
  steel-gray: "#dadada"
  success-green: "#79b928"
  dyson-blue: "#0066cc"
  azure-link: "#149ecc"
  product-highlight-orange: "#ac5d00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.22
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.29
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 48px
components:
  product-card-destacados:
    role: 
  promotion-banner:
    role: 
  button-group-cta-variants:
    role: 
  primary-cta-button:
    role: Main call to action
  text-only-button:
    role: Secondary action in dark contexts
  light-text-only-button:
    role: Secondary action in light contexts
  product-card:
    role: Displays product information
  main-navigation-link:
    role: Primary site navigation
  search-input-field:
    role: Site search functionality
  new-badge:
    role: Highlights new products
  promotion-badge:
    role: Highlights special promotions
  footer-link:
    role: Secondary navigational links in footer
---

## Overview

**North Star:** engineered precision, clean displays

This Dyson design system exudes an aura of understated, high-tech precision, much like the engineering of its products. It achieves this through a largely monochromatic palette of distinct dark grays and crisp whites, punctuated by a vibrant green for primary calls to action. The strong focus on clear product imagery is supported by a clean, geometric typeface, ensuring a direct and unembellished presentation of technology.

### Do's

- Use Success Green (#79b928) exclusively for primary call-to-action buttons.
- Prioritize Dyson Ink (#333333) for all primary body text and most headings to maintain brand consistency.
- Ensure headings utilize DysonFutura at a heavier weight (500) and larger sizes (24px, 28px, 32px, 36px) to create a clear visual hierarchy.
- Apply 0px border-radius to all buttons and cards, maintaining a sharp, engineered aesthetic.
- Embed images within Canvas White (#ffffff) or Warm Paper (#fff8e6) backgrounds when presented in product grids.
- Maintain a clear page section separation using Canvas White (#ffffff) and Deep Graphite (#000000) for distinct visual blocks.

### Don'ts

- Do not use saturated colors other than Success Green (#79b928) or Dyson Blue (#0066cc) for interactive elements.
- Avoid using shadows or excessive gradients; rely on color contrast and spacing for visual depth.
- Do not introduce rounded corners larger than 8px, which are reserved for specific product images, to avoid softening the brand's sharp identity.
- Refrain from using thin weights for body text; maintain DysonFutura weight 400 for optimal readability.
- Do not use light text on light backgrounds; ensure a minimum contrast ratio of 7:1 for text readability (e.g., Dyson Ink on Canvas White).

### Layout

The layout follows a primarily max-width contained model, but with a full-bleed blue banner appearing at the very top. The hero section often presents a split layout: a compelling headline on the left alongside a product grid with individual product images on the right, frequently featuring abstract or subtly tinted backgrounds. Sections are clearly delineated by consistent vertical spacing of 48px and alternating background colors (Canvas White vs. Deep Graphite, or Canvas White vs. Warm Paper). Product grids typically use a 3-column layout. The overall arrangement emphasizes clarity and directness, with content stacked centrally or in alternating text-image blocks. The navigation is a sticky top bar, providing persistent access to search and main categories.

### Imagery

The site uses a mix of high-key product photography and lifestyle imagery, with a strong emphasis on clean, isolated product shots on either pure white or subtly colored (Warm Paper #fff8e6) backgrounds. Photography is frequently cropped tightly to showcase product details. Lifestyle shots tend to feature models with a natural, unposed aesthetic. Imagery is always contained, often within rectangular frames with 8px radius, contributing to a structured and precise feel. Icons are monochrome, often Deep Graphite (#000000) or Canvas White (#ffffff), and are outlined, with a consistent stroke weight, serving primarily as functional UI elements rather than decorative ones.

---
version: alpha
name: mishmash®
description: Mishmash projects a playful, product-centric aesthetic through a stark monochrome UI punctuated by an array of vibrant product photography. The design features a light theme with crisp, neutral surfaces, allowing the colorful stationery products to be the focal point. Typography is compact and precise, conveying information efficiently, while rounded elements add a touch of softness to an otherwise structured layout. This system prioritizes visual clarity and product showcase over decorative complexity.
colors:
  midnight-ink: "#171717"
  cloud-canvas: "#ffffff"
  fog-gray: "#f2f2f2"
  whisper-white: "#e3e3e3"
  ash-gray: "#858585"
  slate-gray: "#919191"
  silver-mist: "#a1a1a1"
  parchment-yellow: "#f4debb"
  sunset-gold: "#f9cb86"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.04
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.12
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.12
  display:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.04
spacing:
  cardRadius: 16px
  buttonRadius: 12px
  elementGap: 16px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Call to action.
  ghost-button:
    role: Secondary action or navigation.
  outlined-button:
    role: Tertiary action.
  product-card:
    role: Displays product information in a grid.
  promotional-card:
    role: Highlights special offers or collections.
  sale-badge:
    role: Indicates products on discount.
  text-input:
    role: Form fields for user input.
---

## Overview

**North Star:** Stationery storefront on paper

Mishmash projects a playful, product-centric aesthetic through a stark monochrome UI punctuated by an array of vibrant product photography. The design features a light theme with crisp, neutral surfaces, allowing the colorful stationery products to be the focal point. Typography is compact and precise, conveying information efficiently, while rounded elements add a touch of softness to an otherwise structured layout. This system prioritizes visual clarity and product showcase over decorative complexity.

### Do's

- Always use Circular for all typographic elements to maintain brand consistency.
- Utilize Midnight Ink (#171717) for primary text and critical UI elements to ensure high contrast and legibility.
- Apply Cloud Canvas (#ffffff) and Fog Gray (#f2f2f2) as dominant background colors to support the light theme and provide visual hierarchy.
- Employ a 12px border radius for interactive elements like buttons and an 16px radius for cards to add softness.
- Restrict padding to values from the spacing scale (2px, 4px, 6px, 8px, 12px, 14px, 16px, 20px, 24px, 32px, 40px, 48px) for consistent rhythm.
- Feature product photography prominently, using vibrant, full-color images against neutral UI elements.
- Use Sunset Gold (#f9cb86) sparingly for promotional badges or discrete CTA fills, contrasting with the dominant neutrals.

### Don'ts

- Avoid introducing additional saturated colors unless they are part of product photography, maintaining a neutral UI palette.
- Do not use heavy shadows or gradients on UI elements; the system prioritizes flat modern surfaces.
- Refrain from altering the letter-spacing of the Circular typeface, it is inherently normal for this brand.
- Do not use dark backgrounds for main content sections; this system operates strictly on a light theme.
- Avoid decorative strokes or borders around cards unless for a specific interaction state; cards should generally be ghosted or have solid light backgrounds.
- Do not use overly large or decorative display fonts; maintain the compact, functional nature of Circular.

### Layout

The page primarily uses a max-width contained layout of 1536px, with content centered. The hero section often features a full-bleed vibrant image or a split layout with a prominent visual on one side and concise text/CTA on the other. Sections maintain a consistent vertical rhythm with 48px gaps, often alternating between visual content blocks and product grids. Content arrangement leans towards two-column layouts for featured sections (text and visual side-by-side) and multi-column card grids (typically 4-column) for product listings. Navigation is a sticky top bar with a search and cart icon, keeping the interface minimal and focused.

### Imagery

The visual language is dominated by high-quality product photography, specifically stationery items. Images are typically close-up, sharp, and vibrant, showcasing the product in full color against plain white or light backgrounds. In some instances, products are artfully arranged in abstract compositions or captured in hands for a lifestyle touch, always with clear focus on the item itself. Graphics are minimal, predominantly iconography with a filled style and moderate stroke weight, or simple brand accents. Imagery serves a dual role: both as decorative atmosphere (hero shots) and explanatory content (product grids), dominating visual space in product listings.

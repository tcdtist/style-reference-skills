---
version: alpha
name: Shopify Supply
description: Shopify Supply is a digital storefront with a distinct glitch-art, anti-establishment attitude. It combines bold, highly-tracked typography and a dark, almost gritty background with unexpected neon green and yellow accents. The visual system prioritizes sharp contrasts and unconventional styling, using minimal rounded corners and pervasive grid-like textures to evoke a raw, early-internet aesthetic meeting modern streetwear design. Components are largely borderless or subtly outlined, creating a sense of weightlessness on a dense dark canvas.
colors:
  canvas-black: "#000000"
  ghostly-gray: "#e5e7eb"
  text-gray: "#ababab"
  input-gray: "#999999"
  accent-green: "#6fc992"
  vivid-green: "#d0f224"
  surface-dark-gray: "#1e2939"
  header-divider: "#3d3f40"
  background-grid-light-green: "#a4d06b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.18
    letterSpacing: -0.22px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.17
    letterSpacing: -0.36px
spacing:
  elementGap: 16px
  sectionGap: 64px
components:
  ghost-navigation-link:
    role: Primary navigation and subtle interactive elements.
  pill-ghost-button:
    role: Secondary action button for interactive elements.
  pill-faded-button:
    role: Tertiary action with reduced visual emphasis.
  shop-now-button:
    role: Prominent call-to-action button within hero sections or product displays.
  product-card:
    role: Container for showcasing products, designed to be visually clean.
  text-input-dark:
    role: User input fields on dark backgrounds.
---

## Overview

**North Star:** Pixelated streetwear on raw concrete

Shopify Supply is a digital storefront with a distinct glitch-art, anti-establishment attitude. It combines bold, highly-tracked typography and a dark, almost gritty background with unexpected neon green and yellow accents. The visual system prioritizes sharp contrasts and unconventional styling, using minimal rounded corners and pervasive grid-like textures to evoke a raw, early-internet aesthetic meeting modern streetwear design. Components are largely borderless or subtly outlined, creating a sense of weightlessness on a dense dark canvas.

### Do's

- Prioritize Canvas Black (#000000) for all main page and section backgrounds.
- Use Accent Green (#6fc992) for interactive links and subtle product description accents.
- Employ the linear gradient `linear-gradient(to top, rgb(164, 208, 107), rgb(206, 220, 46), rgb(201, 243, 0))` for hero sections and full-bleed brand statements.
- Apply Inter-Variable as the primary typeface for all textual content, adjusting weights and letter-spacing as per the type scale.
- Construct call-to-action buttons with a stark #FFFFFF background and #000000 text, using 0px border-radius.
- Maintain a grid-like visual texture with thin #e5e7eb or #3d3f40 dividers for content separation, especially on dark surfaces.
- Utilize 0px border-radius across most components for a sharp, angular aesthetic.

### Don'ts

- Avoid generic drop shadows; use them only as explicitly specified for interactive elements like the button shadow `rgba(0, 0, 0, 0.1) 0px 0px 8px 0px`.
- Do not introduce soft bezier curves or organic shapes; maintain a geometric and angular sensibility.
- Refrain from using pastel or desaturated color palettes; lean into high contrast and vivid color pops.
- Do not add extra padding or spacing around product cards; they should appear flush with surrounding content.
- Avoid applying excessive rounded corners; the default is 0px for most elements.
- Do not deviate from the specified Inter-Variable letter-spacing values, particularly the negative tracking at larger sizes.
- Do not use generic system fonts; always map to one of the specified brand typefaces (Inter-Variable, Grtsk-Bold-Tera, Fraktion).

### Layout

The page primarily uses a max-width contained layout of 1245px, centered on a Canvas Black background. The hero section is often a full-bleed gradient with a large centered headline and prominent call-to-action. Content sections typically alternate between a continuous dark background and sections that use the Surface Dark Gray with light text. There's a strong emphasis on grid-like compositions, with product cards arranged in multiple columns. Vertical spacing is consistent with the `sectionGap` (64px) providing clear breaks. Navigation is a sticky top bar with minimal links and iconic search/account/cart actions.

### Imagery

The visual language is a blend of product photography and pixel art. Photography features tightly cropped product shots often against white or neutral backgrounds, focusing on the item itself rather than lifestyle context. Some images incorporate a raw, almost deconstructed feel. Illustrations are exclusively pixel art, often brand characters or small decorative elements, lending a retro, glitch-art aesthetic. Icons are simple, outlined, and monochromatic, matching the overall starkness. Imagery serves both decorative atmosphere (pixel art) and direct product showcasing (photography), existing in a relatively text-dominant layout but with key hero sections featuring large-scale graphics or gradient backgrounds.

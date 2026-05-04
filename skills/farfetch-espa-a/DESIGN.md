---
version: alpha
name: FARFETCH España
description: This design system projects an image of understated luxury and clarity, functioning as a high-end catalogue. Its visual identity is defined by a rigorous absence of ornamentation: no rounded corners, no shadows, and a near-monochromatic palette. The stark black and white contrast ensures maximum legibility for product names and prices, while a generous use of negative space around imagery elevates each item. Functionality and navigation are prioritized through minimal but distinct interactive elements, allowing the curated product visuals to dominate the user's attention. The uniform straight edges and deliberate lack of visual flair ensure content takes center stage, like a gallery.
colors:
  raven-black: "#222222"
  polar-white: "#ffffff"
  cloud-gray: "#e6e6e6"
  ash-gray: "#b6b6b6"
  ghost-white: "#f5f5f5"
  steel-gray: "#727272"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.33
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.31
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.27
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
spacing:
  elementGap: 10px
  sectionGap: 48px
components:
  announcement-banner-search-bar:
    role: 
  section-category-cards-elige-una-secci-n:
    role: 
  fashion-category-grid-moda-para-mujer:
    role: 
  invisible-action-button:
    role: Navigation, product links, and interactive text elements.
  outline-accent-button:
    role: Secondary calls to action, filtering, or options with less emphasis.
  solid-primary-button:
    role: Main calls to action like 'Suscríbete'.
  product-image-card-default:
    role: Displaying product images without additional visual context.
  product-info-card-padded:
    role: Displaying products or categories with associated text information.
  text-input-underlined:
    role: Search bars and general text inputs.
  text-input-boxed:
    role: Less common inputs, potentially in forms or settings.
---

## Overview

**North Star:** Gallery Wall of Luxury — crisp white walls, perfect lighting, and all attention drawn to the curated pieces within.

This design system projects an image of understated luxury and clarity, functioning as a high-end catalogue. Its visual identity is defined by a rigorous absence of ornamentation: no rounded corners, no shadows, and a near-monochromatic palette. The stark black and white contrast ensures maximum legibility for product names and prices, while a generous use of negative space around imagery elevates each item. Functionality and navigation are prioritized through minimal but distinct interactive elements, allowing the curated product visuals to dominate the user's attention. The uniform straight edges and deliberate lack of visual flair ensure content takes center stage, like a gallery.

### Do's

- Prioritize `Polar White` (#ffffff) backgrounds with `Raven Black` (#222222) text for maximum contrast and legibility.
- Use `Farfetch Basis` font at weight 400 for all body copy and weight 700 for headings, maintaining a consistent typographic voice.
- Apply `0px` border-radius to all interactive elements, cards, and containers to reinforce the sharp, precise aesthetic.
- Utilize `16px` padding for internal content within cards and `48px` vertical spacing between major sections for comfortable density.
- Maintain a monochromatic palette, using `Ash Gray` (#b6b6b6) only for secondary text or disabled states, never as an accent.

### Don'ts

- Do not introduce shadows or any form of elevation (box-shadow) on any component; depth is created through content hierarchy and color contrast.
- Avoid using any colors outside of the defined neutral palette; no brand or accent colors are present, maintaining a strict, minimalist approach.
- Do not use `border-radius` values greater than `0px` on any element, as this clashes with the sharp, rectilinear visual style.
- Refrain from varying letter-spacing; all text uses `normal` letter-spacing.
- Do not use gradients; the design relies on solid colors and sharp transitions.

### Layout

The page exhibits a max-width, centered layout with side margins on screens larger than the content. The hero section, if present, is a simple row of category image cards. The overall page model is a consistent grid-based structure, prominently featuring image-dominant cards. Section rhythm is uniform, with generous vertical spacing (around `48px` to `72px`) between content blocks, ensuring a spacious and uncrowded feel. Content is arranged primarily in multi-column grids (like 3-column for categories and sub-categories, 4-column for products) with alternating image and text blocks, facilitating browsing. The navigation is a sticky top bar, containing essential links and search, consistently minimal.

### Imagery

Imagery is the focal point, consisting primarily of high-quality product photography and model shots. Photos are tightly cropped, often on neutral grey or white backgrounds, or within minimal architectural settings, emphasizing the product or fashion item. Treatment is typically full-bleed within their card containers, with sharp, raw edges, implying a 'cut-out' aesthetic that prioritizes the subject. The style is aspirational; models are posed in a natural, yet poised manner, often with a muted color palette to keep focus on the clothing. Density is image-heavy, driving navigation and product discovery, with text serving as concise supporting information.

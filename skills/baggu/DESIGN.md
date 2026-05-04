---
version: alpha
name: Baggu
description: Baggu presents a playful, utilitarian aesthetic with a grounded, earthy color palette and a strong geometric type identity. The design emphasizes clear, highly contrasted text against muted backgrounds, allowing product photography to introduce most of the vibrancy. Components are minimal, relying on strong typography and subtle borders for structure rather than heavy shadows or complex gradients. The overall density is compact yet breathable, making product information accessible without feeling crowded.
colors:
  canvas-parchment: "#f6f4ee"
  night-ink: "#000000"
  faded-stone: "#7b7a77"
  vivid-green: "#298018"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.025px
spacing:
  buttonRadius: 24px
  elementGap: 4px
  sectionGap: 64px
components:
  navigation-link:
    role: Top navigation menu items and info links.
  primary-ghost-button:
    role: Interactive elements with a minimal visual footprint, such as 'Shop' or product info actions.
  product-thumbnail-card:
    role: Displays product images in a grid layout.
  product-grid-item:
    role: Contains product image, name, and price.
  accent-filled-button:
    role: Call-to-action button, e.g., 'SUBSCRIBE'.
  text-input-field:
    role: Standard text input for forms, e.g., email subscription.
---

## Overview

**North Star:** Earthy utilitarian canvas

Baggu presents a playful, utilitarian aesthetic with a grounded, earthy color palette and a strong geometric type identity. The design emphasizes clear, highly contrasted text against muted backgrounds, allowing product photography to introduce most of the vibrancy. Components are minimal, relying on strong typography and subtle borders for structure rather than heavy shadows or complex gradients. The overall density is compact yet breathable, making product information accessible without feeling crowded.

### Do's

- Prioritize Canvas Parchment (#f6f4ee) as the dominant background for body and surface elements to maintain a light, airy feel.
- Use Night Ink (#000000) for all primary text, headings, and essential UI elements to guarantee maximum contrast and readability.
- Employ studioPro at various weights and sizes as the sole typeface to maintain a consistent geometric and modern typographic voice.
- Apply 24px border-radius for high-impact buttons to create a soft, pill-like shape, distinguishing them from other UI elements.
- Utilize Vivid Green (#298018) sparingly as an accent for critical links or semantic indicators, ensuring it stands out against the neutral palette.
- Maintain a compact elementGap of 4px to keep related content visually grouped and optimize information density.
- Construct interaction prompts and buttons with minimal styling, defaulting to text-based links or ghost buttons unless a strong call to action requires a filled background.

### Don'ts

- Avoid using multiple typefaces; studioPro is the singular brand voice.
- Do not introduce strong drop shadows; the design relies on flat surfaces and subtle borders for depth.
- Refrain from complex background gradients; the aesthetic is grounded in solid, earthy colors.
- Do not deviate from the 4px base unit for spacing, as it dictates the compact density of the layout.
- Avoid arbitrary color usage; decorative elements should integrate with the existing neutral and single-brand accent palette.
- Do not use generic button shapes; buttons should be either 0px radius for ghost actions or 24px radius for prominent filled actions.
- Do not introduce heavy panels or strong visual separators for cards; rely on natural content grouping and Canvas Parchment for surfaces.

### Layout

The page employs a max-width contained layout, not overtly full-bleed, typically centered on the screen. The hero section frequently showcases a split with a central product image or a curated visual, with navigation elements positioned at the top edge. Sections are distinct, often using consistent vertical spacing, creating a clean flow. Content is arranged in flexible grids, particularly for product displays, which show multiple items per row (e.g., 3-column product grids). Text content often appears below images in a stacked format. The primary navigation is a compact, minimal top bar, with functional icons for search and cart.

### Imagery

The imagery predominantly features product photography, often against plain, uniform light gray or white backgrounds. Products are isolated and well-lit, with occasional styled shots that introduce human elements (hands, legs) to showcase scale and usage without distracting from the item itself. The photography has a clean, editorial look, emphasizing the product's texture and form. Icons are minimal, utilizing the brand's primary text color (#000000) and an outlined style. Imagery is heavy, particularly in product grids, dominating visual space while text plays a supporting role.

---
version: alpha
name: Faire ES
description: Faire presents a warm, artisanal marketplace aesthetic, balancing utility with a handcrafted feel. Predominantly light surfaces provide a clean backdrop for product showcases, punctuated by a soft, moderate yellow that adds a unique brand signature. Typography combines a sturdy sans-serif for functional text with a distinct serif for headlines, creating an approachable yet authoritative voice. Component shapes exhibit soft, approachable corners, reinforcing the friendly marketplace identity.
colors:
  canvas-white: "#fbf8f6"
  surface-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#333333"
  fog-gray: "#dadada"
  storm-gray: "#6c6a6a"
  market-yellow: "#f1f29f"
  toastify-light-text: "#757575"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 48px
components:
  navigation-link:
    role: Navigational elements in headers and footers.
  text-button:
    role: Low-prominence actions, often inline or secondary.
  default-button:
    role: General purpose buttons.
  primary-action-button:
    role: Prominent calls to action, typically for sign-up or purchase.
  pill-button:
    role: Category filters or tags.
  search-input-field:
    role: Allows users to search for content.
  product-card:
    role: Displaying product items in grids.
  category-tag:
    role: Labeling and filtering content categories.
---

## Overview

**North Star:** Warm artisanal marketplace.

Faire presents a warm, artisanal marketplace aesthetic, balancing utility with a handcrafted feel. Predominantly light surfaces provide a clean backdrop for product showcases, punctuated by a soft, moderate yellow that adds a unique brand signature. Typography combines a sturdy sans-serif for functional text with a distinct serif for headlines, creating an approachable yet authoritative voice. Component shapes exhibit soft, approachable corners, reinforcing the friendly marketplace identity.

### Do's

- Use Market Yellow (#f1f29f) sparingly for illustrative highlights or soft decorative elements, not for interactive states.
- Apply Graphik weight 400 for all body text and UI labels, ensuring consistent readability across the interface.
- Reserve the nantes typeface exclusively for prominent headlines (22px to 52px), leveraging its distinctive serif character.
- Maintain a default border-radius of 4px for all cards, buttons, and visual containers, providing a subtle softness.
- Utilize Ink Black (#000000) for primary CTAs to create a strong, clear intention, paired with Surface White (#ffffff) text.
- Employ Canvas White (#fbf8f6) as the base page background, providing a subtle, warm off-white canvas.
- Ensure button padding consistently uses horizontal values of 23-24px and no vertical padding, maintaining a compact appearance.

### Don'ts

- Do not use Market Yellow (#f1f29f) for actionable elements like buttons or links; it is a decorative accent.
- Avoid using multiple font weights within a single text element; stick to the defined weights for Graphik (100, 400) and nantes (400).
- Do not apply sharp 0px corners to interactive elements; maintain a minimum 4px radius for a consistent, approachable feel.
- Never use full-width sections without horizontal padding; ensure a minimum 48px left and right padding on large screens.
- Avoid using a border on product images unless it serves a specific functional purpose; let the image content stand out clearly.
- Do not apply excessive box-shadows or elevation. The system favors subtle borders and flat surfaces for depth.
- Refrain from using saturated colors other than Market Yellow; the palette is predominantly neutral with functional semantic color sparingly applied.

### Layout

The page adheres to a max-width contained layout, with content centered. The hero section often features a split layout with text on the left and a prominent visual on the right, or a centered headline over a background image. Sections are vertically stacked with consistent 48px section gaps. Content is typically arranged in alternating left/right text-image blocks or in multi-column card grids, particularly for product displays, maintaining a clean, breathable information hierarchy. A sticky top header with a prominent search bar ensures constant navigation access.

### Imagery

The site heavily relies on high-quality editorial photography, capturing product arrangements or models interacting with products in natural, often studio-like settings. Imagery is contained within cards or banners, rarely full-bleed, and often has a subtle 4px corner radius. The aesthetic is bright and clear, showcasing the product directly or in a relevant lifestyle context without heavy filters or abstract compositions. Icons are simple, outlined, and monochromatic, typically in Ink Black (#000000).

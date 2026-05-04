---
version: alpha
name: Glossier
description: Glossier's visual style is a 'modern classic' — grounded in a stark, high-contrast black and white palette, then infused with bursts of vibrant, youthful color. The interplay of minimalist typography and photography, punctuated by a signature vivid yellow, creates an aspirational yet approachable feel. Sharp rectangular forms dominate the layout, establishing a sense of order, softened slightly by the inviting warmth of the product imagery.
colors:
  ink: "#000000"
  snow: "#ffffff"
  ash: "#666666"
  fog: "#e8e8e8"
  whisper: "#f7f7f7"
  lemon-zest: "#fff116"
  twilight-indigo: "#0600ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.24px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.42px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.23
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.09
spacing:
  elementGap: 8px
  sectionGap: 40-80px
components:
  product-cards-with-new-badge:
    role: 
  promo-announcement-banner:
    role: 
  hero-promo-card-with-cta:
    role: 
  primary-action-button:
    role: Main call-to-action
  secondary-action-button:
    role: Supporting call-to-action
  outlined-product-card-button:
    role: Product interaction button on cards
  search-input-field:
    role: Collecting user input for search
  new-badge:
    role: Highlighting new products or features
  info-message-badge:
    role: General information badge
---

## Overview

**North Star:** Photographic vibrancy on crisp white canvas. Imagine a brightly lit product shot, vibrant and rich, placed on a pristine white gallery wall.

Glossier's visual style is a 'modern classic' — grounded in a stark, high-contrast black and white palette, then infused with bursts of vibrant, youthful color. The interplay of minimalist typography and photography, punctuated by a signature vivid yellow, creates an aspirational yet approachable feel. Sharp rectangular forms dominate the layout, establishing a sense of order, softened slightly by the inviting warmth of the product imagery.

### Do's

- Maintain a primary color palette of Ink (#000000) for text and Snow (#FFFFFF) for backgrounds to ensure high contrast and readability.
- Utilize Apercu for all text elements; vary weights (400, 500, 700) and sizes (12px, 14px, 16px, 20px, 32px) to establish clear hierarchy.
- Apply precise letter-spacing adjustments to Apercu typography: 0.002em at 12px, 0.003em at 14px, and 0.04em at 16px for optimal visual balance.
- Reserve Lemon Zest (#fff116) strictly for primary call-to-action buttons and brand accents to maximize its impact and recognition.
- Implement a consistent 0px border-radius across all buttons, cards, and input fields to uphold the sharp, modern aesthetic.
- Use 8px for element spacing by default, increasing to 14px for more significant separations between related content blocks.

### Don'ts

- Avoid introducing gradients or shadows; the aesthetic relies on flat colors and crisp edges to define elements.
- Do not use highly saturated colors other than Lemon Zest (#fff116) or Twilight Indigo (#0600ff) in prominent UI elements, as this dilutes brand identity.
- Refrain from varying border-radius values; all UI elements should consistently use 0px radius.
- Do not deviate from Apercu as the primary brand font; alternative fonts like Apercu Mono or GTStandard-M have highly specific and limited use cases.
- Avoid organic or highly decorative imagery; favor clean, product-focused photography or abstract visuals.
- Do not dilute the Lemon Zest (#fff116) accent by applying it to secondary actions or informational text.

### Layout

The page primarily uses a max-width contained model for most content, centered on the page, with some full-bleed hero sections. The hero banner often features a large image with an overlaying text block or brand element, creating visual drama. Section rhythm is fluid, with consistent vertical spacing but alternating content arrangements—sometimes a large hero, then a two-column grid, followed by a multi-column product display. Content is arranged in alternating text-left/image-right or centered stacks. Product grids utilize a 4-column layout. Spacing between sections is comfortable, allowing elements to breathe. Navigation consists of a sticky top bar with clear product categories and utility icons.

### Imagery

The visual language is characterized by high-key, product-focused photography and clean UI. Photography is typically full-bleed or large, emphasizing product details, often with strong directional light and rich but natural color saturation. Images are contained within sharp, rectangular forms, with no visible masking or overlapping. Illustrations, if present (not clearly visible in screenshots), adhere to a flat, clean aesthetic. Icons are simple, outlined, and monochromatic (Ink #000000). The imagery's primary role is to showcase products and evoke an aspirational, lifestyle mood without being overtly staged, balancing product focus with atmospheric context. Imagery dominates hero sections and category blocks, giving the site a visually rich yet uncluttered feel.

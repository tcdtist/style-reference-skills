---
version: alpha
name: Fruitful
description: Fruitful projects a calm, approachable financial tech image through a clean white canvas, softened neutrals, and a prominent, vibrant green brand accent. Typography is modern and unembellished, emphasizing clarity and directness. Components are lightweight with generous rounded corners, conveying a friendly and trustworthy feel, while subtle shadows add minimal depth without heaviness. The overall impression is one of ease and quiet confidence in managing personal finance.
colors:
  canvas-white: "#ffffff"
  rich-black: "#000000"
  subtle-ash: "#eceff4"
  cool-gray: "#5b616b"
  deep-fern-green: "#0b7443"
  leafy-green: "#61bc76"
  muted-sage: "#d1fadf"
  melon-tint: "#fee9d1"
  terra-cotta: "#715039"
  sky-mist: "#c7e0f8"
  light-peach: "#ffdcb4"
  mint-green-glow: "#e1fdea"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.32
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.32
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.32
  body-lg:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.32
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.32
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 49px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 91px
    lineHeight: 1.3
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Main call to action button.
  ghost-outline-button:
    role: Secondary action or alternative call to action.
  muted-neutral-button:
    role: Tertiary action or filter controls.
  feature-card-peach:
    role: Highlighting key features or interactive elements.
  plain-content-card:
    role: Standard content containers, often for text or simple UI groups.
  elevated-marketing-card:
    role: Promotional or high-impact content block requiring subtle depth.
  attribute-badge-white:
    role: Metadata tags for categorizing or describing items.
---

## Overview

**North Star:** Calm Financial Clarity

Fruitful projects a calm, approachable financial tech image through a clean white canvas, softened neutrals, and a prominent, vibrant green brand accent. Typography is modern and unembellished, emphasizing clarity and directness. Components are lightweight with generous rounded corners, conveying a friendly and trustworthy feel, while subtle shadows add minimal depth without heaviness. The overall impression is one of ease and quiet confidence in managing personal finance.

### Do's

- Prioritize Canvas White (#ffffff) for primary backgrounds to maintain an expansive, clean feel.
- Use Deep Fern Green (#0b7443) exclusively for primary calls to action and critical brand accents.
- Reserve Rich Black (#000000) for all primary text and display headings, ensuring strong contrast.
- Apply 12px border radius for all interactive elements like buttons, cards, and images to ensure visual consistency.
- Maintain a comfortable information density using an 8px base unit, evidenced by frequent element gaps.
- Differentiate content blocks with subtle background tints like Subtle Ash (#eceff4) or Melon Tint (#fee9d1) rather than strong borders.

### Don'ts

- Avoid using multiple vivid colors; restrict the palette to the primary green and selected muted accents.
- Do not introduce strong, dark backgrounds unless clearly for a full-bleed hero section, as the theme is predominantly light.
- Do not use sharp corners; a minimum 12px radius should be present on most significant UI elements.
- Refrain from heavy, intense shadows; employ the light, layered shadow of the 'Elevated Marketing Card' for subtle depth only.
- Avoid generic system fonts; PP Neue Montreal is key to the brand's distinct typographic voice.
- Do not use dark text on dark backgrounds; ensure sufficient contrast (at least 7:1 for body text, 4.5:1 for large text) for all text elements.

### Layout

The page structure is max-width contained, with content centered. The hero section is full-width with a prominent, centered headline over a white background, followed by a video element with rounded corners. Subsequent sections alternate between white and subtle tinted backgrounds (e.g., Melon Tint, Subtle Ash), creating a rhythmic vertical flow. Content is often arranged in a two-column layout with text on one side and imagery/cards on the other, or in feature grids with a comfortable column count. Navigation is a sticky top bar with a clear primary action button on the right.

### Imagery

Minimal imagery focused primarily on product-related visuals and authentic human portraits. Photography of individuals (guides) is candid, well-lit, and appears within soft-edged card containers, usually with muted background colors like Melon Tint (#fee9d1). Visuals serve to explain services or introduce team members, not for decorative atmosphere. Icons are simple, outlined, and occasionally filled with brand colors like Leafy Green (#61bc76), maintaining a clean UI aesthetic. Visual density is low, making imagery feel deliberate and impactful when present.

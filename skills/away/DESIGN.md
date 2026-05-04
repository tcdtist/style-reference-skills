---
version: alpha
name: Away
description: This system evokes the precise, understated elegance of luxury travel goods, balancing functionality with a subtle hint of aspirational lifestyle. A near-monochromatic palette built on deep charcoal (#111111) and crisp white (#FFFFFF) defines the surfaces, accented by muted, earthy tones in photography. Typography leans into a custom sans-serif for headlines, providing a distinctive voice without being overly loud, reinforced by a tightly tracked, all-caps presentation for key navigation elements. The design prioritizes clear information hierarchy and a clean, almost modular aesthetic, avoiding excessive ornamentation or bold primary colors.
colors:
  midnight-charcoal: "#111111"
  canvas-white: "#FFFFFF"
  pale-earth: "#f7f4f1"
  border-fog: "#e5e7eb"
  muted-gray: "#6b7280"
  faded-red: "#d31b3b"
  muted-terracotta: "#722519"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.48px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.62px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -1.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: -1.28px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.85
    letterSpacing: -1.57px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 48px
components:
  cookie-consent-modal:
    role: 
  shop-by-category-cards:
    role: 
  product-card-with-badge-cta:
    role: 
  primary-navigation-link:
    role: Top-level navigation items
  outline-cta-button:
    role: Secondary calls to action
  solid-cta-button:
    role: Primary calls to action
  cookie-consent-modal-button-solid:
    role: Confirmation or primary actions within modals
  cookie-consent-modal-button-outline:
    role: Secondary actions within modals
  form-input-field:
    role: User input fields
  product-highlight-badge-light:
    role: Product features or promotions
  product-highlight-badge-sale:
    role: Discount indicators
---

## Overview

**North Star:** Luxury travel catalogue

This system evokes the precise, understated elegance of luxury travel goods, balancing functionality with a subtle hint of aspirational lifestyle. A near-monochromatic palette built on deep charcoal (#111111) and crisp white (#FFFFFF) defines the surfaces, accented by muted, earthy tones in photography. Typography leans into a custom sans-serif for headlines, providing a distinctive voice without being overly loud, reinforced by a tightly tracked, all-caps presentation for key navigation elements. The design prioritizes clear information hierarchy and a clean, almost modular aesthetic, avoiding excessive ornamentation or bold primary colors.

### Do's

- Use Graphik for all primary text, headlines, and navigation. Apply `letterSpacing: -0.0400em` for headings 32px and above for a distinctive, tight feel.
- Maintain a strict achromatic base: Midnight Charcoal (#111111) for foregrounds and Canvas White (#FFFFFF) or Pale Earth (#f7f4f1) for backgrounds.
- Reserve Faded Red (#d31b3b) strictly for sale indicators, badges, or crucial error states, never for general interaction.
- Keep all button, input, and card radii at 0px to maintain a sharp, deliberate aesthetic.
- Employ the Pale Earth (#f7f4f1) background for input fields to create a subtle textural difference within forms.
- Implement the 1px solid Midnight Charcoal border for outline buttons and input fields for high contrast and definition.

### Don'ts

- Do not introduce new primary colors; maintain the brand's subdued, achromatic palette with limited accent colors.
- Avoid soft shadows or gradients; elevation is achieved through distinct color blocking and borders, not subtle shading.
- Do not round corners on any major UI elements (buttons, cards, inputs); the design relies on sharp, clean edges.
- Do not vary font families excessively; Graphik is the workhorse, with Lyon Display as a subtle counterpoint for specific text blocks.
- Avoid generic icon libraries; maintain the simple, outlined icon style seen throughout the system.
- Do not use overly expressive or decorative typography; readability and precision are paramount.

### Layout

The site uses a contained width layout, primarily centered, with a `pageMaxWidth` of approximately 1200px. The hero section often features a full-width image with text overlaid, creating an immersive initial impression. Content sections generally alternate between large imagery and descriptive text, often in horizontal pairs or grids. Clear vertical section gaps (e.g., 48px) create breathable rhythm between content blocks. Navigation is a prominent top bar, sticky on scroll, with a clean and clear structure. The overall impression is one of spaciousness and deliberate content presentation.

### Imagery

Photography is product-focused and lifestyle-oriented, showcasing travel items in aspirational, muted environments (e.g., luggage by a dock, backpacks in natural settings). Images are typically full-bleed or large-format product shots with a natural, slightly desaturated color treatment, emphasizing the product's design and utility within a broader, sophisticated travel narrative. There's a clear emphasis on the product's visual appeal and integration into a stylish, curated experience rather than raw, vivid imagery. Icons are minimal, subtle, and outlined, primarily serving functional purposes within the UI.

---
version: alpha
name: Faccia Brutto Spirits
description: Faccia Brutto Spirits uses a rustic artisan aesthetic, blending a limited monochromatic palette with earthy tones and a single bold action color. Typography is condensed and authoritative, with strong uppercase headlines. Surfaces are clean and unembellished, relying on subtle textural nuances instead of gradients or heavy shadows. Components emphasize functionality with minimal styling, echoing a handcrafted yet direct approach.
colors:
  ink: "#181313"
  stone-gray: "#4c4c4c"
  canvas: "#fefefe"
  mist: "#c5c3c3"
  ash: "#b2b2b2"
  charcoal: "#333333"
  parchment: "#d4d4d4"
  terra-cotta: "#e53d22"
  ocean-blue: "#357fbd"
  sage-bloom: "#a3a96f"
  indigo: "#2858d5"
  cream: "#dddeba"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2
    letterSpacing: 0.042px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: 0.018px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0.01px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.15
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1
    letterSpacing: -0.01px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-button:
    role: Navigation, secondary actions, and inline links that require minimal visual weight.
  primary-action-button:
    role: Main call to actions, such as 'Start Shopping'.
  secondary-action-button:
    role: Alternative or less prominent actions.
  subscription-button:
    role: Specific call to action for subscription forms, like in pop-up modals.
  product-card:
    role: Displaying individual product items on catalog pages.
  modal-card:
    role: Pop-up content like subscription forms or notifications.
  pill-input-field:
    role: Search bars or simple text inputs that need a soft, rounded appearance.
  standard-input-field:
    role: General form inputs.
---

## Overview

**North Star:** Rustic Artisan Distillery – a raw, unfussy aesthetic of dark glass bottles and earthy craft paper

Faccia Brutto Spirits uses a rustic artisan aesthetic, blending a limited monochromatic palette with earthy tones and a single bold action color. Typography is condensed and authoritative, with strong uppercase headlines. Surfaces are clean and unembellished, relying on subtle textural nuances instead of gradients or heavy shadows. Components emphasize functionality with minimal styling, echoing a handcrafted yet direct approach.

### Do's

- Use Ink (#181313) for all primary text, headings, and most clickable elements to maintain visual depth and contrast.
- Prioritize Ano font at various weights and sizes for all textual content, ensuring consistency in typographic voice.
- Employ Sage Bloom (#a3a96f) exclusively for primary calls to action on product-related pages, conveying a natural, inviting prompt.
- Limit component radii to 0px for most elements, 4px for inputs and specific buttons, and 8px for cards to maintain the crisp, no-frills aesthetic.
- Use a comfortable density with element gaps of 20px and section gaps of 40px to give content breathing room without feeling sparse.
- Apply the single modal shadow `rgba(0, 0, 0, 0.3) 0px 10px 40px 0px` only to modals or overlay cards to provide distinct elevation.
- Implement Canvas (#fefefe) as the primary background for content areas, contrasting with Ink (#181313) text for high readability.

### Don'ts

- Avoid using gradients or complex inner shadows, as the system relies on flat surfaces and subtle material changes.
- Do not introduce new vibrant or saturated colors outside of the defined accent palette; color should be used sparingly for impact.
- Refrain from using heavily rounded corners on primary elements; most components should retain a sharp, unyielding edge.
- Do not deviate from the Ano font family; its specific character is integral to the brand's identity.
- Avoid excessive use of uppercase for body text; reserve it for headlines and specific navigational elements to maintain impact.
- Do not use transparent backgrounds for action buttons unless explicitly defined as a ghost button, to prevent visual ambiguity.
- Never add unnecessary borders or decorative elements that detract from the functional, handcrafted feel.

### Layout

The page primarily uses a full-bleed structure for hero sections and product photography, alternating with content sections that appear to be constrained to an unstated max-width. The hero features large product imagery with centered, strong headlines. Section rhythm is guided by background color changes, such as the terracotta band visible in the screenshot. Content is often presented in centered stacks or simple grid arrangements, with ample vertical spacing between blocks. Navigation is a simple, fixed top bar.

### Imagery

The site uses product photography featuring bottles in either crisp, high-key isolation against white or dark, moody settings for atmosphere. These images are typically full-bleed or large focal points. Graphics are predominantly typographical, using the Ano font for strong, brand-reinforcing statements. Icons, when present, are simple, monochromatic outlines, maintaining a minimalist and functional aesthetic. Imagery's role is primarily atmospheric and product showcase.

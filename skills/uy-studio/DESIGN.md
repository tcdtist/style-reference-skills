---
version: alpha
name: UY Studio
description: UY Studio employs a stark, gallery-like aesthetic, using high-contrast neutrals and minimal design elements. The visual system features large type for impactful statements, discreet navigation, and a strong emphasis on product presentation. Borders and typography create structural rhythm, avoiding heavy backgrounds or decorative gradients to foreground content. Components feel austere and understated, relying on subtle line work and precise spacing for definition.
colors:
  carbon: "#24241f"
  fog-canvas: "#d1d3cf"
  ghost-white: "#e5e5e5"
  obsidian: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.77
    letterSpacing: 0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.38
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -0.96px
spacing:
  elementGap: 13px
  sectionGap: 143px
components:
  ghost-header-button:
    role: Navigation and secondary actions in the header
  filled-action-button:
    role: Primary call to action button
  product-input-field:
    role: Standard text input field
  footer-input-field:
    role: Input field in the footer for subscribing
  search-input-field:
    role: Search or filter input field within product listings
  product-badge:
    role: Small informational label or tag
---

## Overview

**North Star:** Gallery Canvas, Monochromatic Depth

UY Studio employs a stark, gallery-like aesthetic, using high-contrast neutrals and minimal design elements. The visual system features large type for impactful statements, discreet navigation, and a strong emphasis on product presentation. Borders and typography create structural rhythm, avoiding heavy backgrounds or decorative gradients to foreground content. Components feel austere and understated, relying on subtle line work and precise spacing for definition.

### Do's

- Use Carbon (#24241f) for all primary text elements, ensuring strong contrast against lighter backgrounds.
- Apply Fog Canvas (#d1d3cf) as the default page and light surface background color.
- Employ the GP typeface at 48px with 1.13 line height and -0.96px letter-spacing for prominent headings to create a declarative statement.
- Define interactive elements such as navigation links with Carbon (#24241f) text and a transparent background, using no padding or borders.
- Apply 0px border-radius to most layout-level components like cards and buttons to maintain a structured, stark aesthetic, except for input fields which use 3px radius.
- Use 1px borders in the primary text color (Carbon, #24241f) or background color (Fog Canvas, #d1d3cf) for subtle delineation of sections and interactive states.
- Maintain a comfortable density with element gaps typically around 13px, creating visual breathing room without appearing sparse.

### Don'ts

- Avoid using highly saturated or chromatic colors; strict adherence to the neutral palette (Carbon, Fog Canvas, Ghost White, Obsidian) is key.
- Do not introduce complex shadow effects or gradients; the design relies on flat surfaces and high contrast for depth.
- Refrain from using border-radius values other than 0px for most primary UI elements, or 3px for inputs, to maintain the architectural precision.
- Do not animate elements with durations outside of the established moderate timing (0.15s, 0.25s, 0.3s) or easing curves.
- Avoid decorative imagery that competes with product photography or overwhelms the minimalist UI; imagery should be contained and functional.
- Do not deviate from the specified GP and GTStandard-M typography families, as they are central to the brand's voice.
- Do not add unnecessary padding or decorative flourishes to buttons; they should remain stark and functional.

### Layout

The page primarily uses a full-bleed layout, particularly in the hero section, with content often centered or spanning the full width. The hero features a large product image with a centrally placed, large-type headline. Subsequent sections often employ a grid system for product display, with columns of equal width and height, maintaining consistent vertical rhythm. There's a minimal use of padding for these product grids, creating a dense, organized presentation. The overall layout balances content density for product listings with generous white space around key marketing messages, such as the footer invitation to 'NEVER MISS A DROP'. Navigation is a sticky top bar, providing persistent access across the site.

### Imagery

The imagery is product-focused photography, presenting items in a clean, staged, and often minimal setting. Products are typically isolated or sparsely arranged on simple surfaces like white tables or concrete, highlighting textures and forms without elaborate backdrops. The color treatment is subdued, natural, and consistent with the achromatic UI, allowing the product's natural hues to emerge. This creates a gallery-like atmosphere, emphasizing product materiality and craftsmanship. Icons, when present, are simple, outlined, and monochromatic, matching the overall UI's understated elegance. Imagery is a primary content driver, occupying significant visual space to showcase products directly.

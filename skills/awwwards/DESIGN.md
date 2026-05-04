---
version: alpha
name: Awwwards
description: This design system feels like a hyper-organized digital archive, presenting information with stark contrast and deliberate typography. A heavy reliance on achromatic tones (#222222, #e9e9e9, #ffffff) creates a crisp, no-nonsense canvas. The custom Inter Tight typeface with its wide range of weights and tight line heights defines a distinctive, modern editorial voice. Small, deliberate rounded corners and minimal visual decoration ensure focus remains squarely on core content, like a precise technical schematic.
colors:
  midnight-graphite: "#222222"
  arctic-white: "#ffffff"
  pale-ash: "#e9e9e9"
  deep-pewter: "#808080"
  silver-mist: "#dedede"
  sunset-orange: "#fa5d29"
  lemon-zest: "#fff083"
spacing:
  elementGap: 4px
  sectionGap: 40px
components:
  site-of-the-day-header-card:
    role: 
  bottom-navigation-tab-bar:
    role: 
  search-input-field:
    role: 
  primary-ghost-button:
    role: Navigation, secondary actions
  solid-dark-button:
    role: Call-to-action, primary action
  secondary-solid-button:
    role: Affirmative actions, less prominent CTAs
  interactive-card-with-round-corners:
    role: Clickable content blocks, featured items
  standard-content-card:
    role: Informational blocks, list items
  search-input-field:
    role: Site search, form entries
  badge-with-background:
    role: Categorization, short labels
  padded-detail-badge:
    role: Specific score or data labels
---

## Overview

**North Star:** Monochrome Grid Blueprint

This design system feels like a hyper-organized digital archive, presenting information with stark contrast and deliberate typography. A heavy reliance on achromatic tones (#222222, #e9e9e9, #ffffff) creates a crisp, no-nonsense canvas. The custom Inter Tight typeface with its wide range of weights and tight line heights defines a distinctive, modern editorial voice. Small, deliberate rounded corners and minimal visual decoration ensure focus remains squarely on core content, like a precise technical schematic.

### Do's

- Always use Inter Tight across all text elements, maintaining consistent font identity.
- Prioritize Midnight Graphite (#222222) for all primary text and Arctic White (#ffffff) for backgrounds to ensure AAA contrast.
- Apply 8px border-radius for interactive elements like buttons and general cards, for a consistent soft-edge feel.
- Utilize Pale Ash (#e9e9e9) for subtle background differentiation, such as secondary button states or layered content blocks.
- Ensure horizontal element spacing for text-based components is a multiple of 4px, seen in 6px and 8px common values.
- Reserve Sunset Orange (#fa5d29) for key interactive elements or critical alerts, leveraging its vividness sparingly.

### Don'ts

- Avoid introducing additional typefaces; Inter Tight is the singular typographic voice.
- Do not use strong drop shadows; the system relies on background color shifts and borders for depth.
- Do not vary from the established border radii for interactive elements; 8px and 4px radii are key to the visual language.
- Avoid excessive color; maintain the dominant achromatic palette, using accent colors only for designated functional purposes.
- Do not use generic padding values; adhere to the 4px base unit or derived token values for consistent density.
- Avoid design elements that introduce significant visual clutter; simplicity and directness are paramount.

### Layout

The layout primarily follows a max-width contained model for navigational elements and most content, but the hero section often utilizes full-bleed imagery. The overall structure is centered. The hero pattern is a large visual with overlaid text, capturing immediate attention. Section rhythm is generally consistent with substantial vertical spacing (approximately 40px, inferred from section gaps), creating a breathable, spacious feel. Content arrangement frequently uses large, single columns for prominent headlines and text, transitioning to more traditional article-like layouts further down the page. The information density is 'comfortable', balancing white space with impactful content blocks. Navigation is a prominent sticky top bar with clearly defined interactive elements.

### Imagery

The site's imagery strategy is a mix of high-quality lifestyle photography and occasional abstract graphics. Photography featuring people often has a muted, desaturated color palette, focusing on natural light and an unposed, candid feel. Products, when present, appear within these lifestyle contexts rather than isolated. The images are typically full-bleed or large masked areas, often serving as background elements behind overlaid text. They are raw-edged, without explicit rounded corners, contrasting with the rounded UI elements. Text overlays are common, creating a magazine-like editorial presentation where visuals provide atmospheric context rather than direct product showcase.

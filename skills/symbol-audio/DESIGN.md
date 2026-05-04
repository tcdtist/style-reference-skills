---
version: alpha
name: Symbol Audio
description: Symbol Audio embodies a sophisticated industrial aesthetic, pairing a dominant forest green canvas with stark white typography and neutral product cards. Typography is a critical brand differentiator, utilizing custom display typefaces with extreme letter-spacing and substantial size to create an impactful, sculptural presence. Components are generally borderless and unadorned, relying on color contrast and the precision of typography to define elements. The overall feel is one of deliberate craftsmanship, reflecting the brand's focus on custom audio furniture.
colors:
  forest-canvas: "#1c3c27"
  arctic-mist: "#dfe2e5"
  ink: "#000000"
  polar-white: "#fffffd"
  mellow-yellow: "#fffcda"
  link-blue: "#447cf0"
  alert-red: "#c72a00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.33
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.26
    letterSpacing: -0.68px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.13
    letterSpacing: -1.04px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -1.6px
spacing:
  buttonRadius: 0px
  elementGap: 20px
  sectionGap: 40px
components:
  bare-text-button:
    role: Navigation and functional buttons
  outlined-text-button:
    role: Secondary navigation and ghost actions
  product-card:
    role: Display individual product listings
  minimal-input-field:
    role: Search and data entry fields
  product-tag:
    role: Labels for product features or categories
---

## Overview

**North Star:** Sculptural Typography on Forest Canvas: Letterforms as architecture, anchored by a deep green backdrop.

Symbol Audio embodies a sophisticated industrial aesthetic, pairing a dominant forest green canvas with stark white typography and neutral product cards. Typography is a critical brand differentiator, utilizing custom display typefaces with extreme letter-spacing and substantial size to create an impactful, sculptural presence. Components are generally borderless and unadorned, relying on color contrast and the precision of typography to define elements. The overall feel is one of deliberate craftsmanship, reflecting the brand's focus on custom audio furniture.

### Do's

- Prioritize SupremeLL-Bold for all major headings and display text, applying a tight letter-spacing of -0.0200em to maintain its distinctive, condensed feel.
- Use Forest Canvas (#1c3c27) as the primary background for most sections, creating a consistent, deep, and immersive brand experience.
- Employ Arctic Mist (#dfe2e5) for all primary body text, link text, and button text, ensuring legibility against the dark Forest Canvas.
- Keep all corners sharp with a 0px border-radius for product cards, input fields, and most structural components, reflecting a clean, unadorned aesthetic.
- Use Polar White (#fffffd) sparingly as a background for content cards where product presentation requires a bright, contrasting stage.
- Define interactive elements primarily through text color and subtle borders using Forest Canvas (#1c3c27) rather than filled backgrounds.
- Maintain a comfortable information density, using a base element gap of 20px to separate components and allow visual breathing room.

### Don'ts

- Avoid using drop shadows or complex elevation schemes; rely on color contrast and typographic hierarchy to establish visual organization.
- Do not introduce new saturated accent colors outside of Link Blue (#447cf0) and Alert Red (#c72a00) to preserve the muted and sophisticated palette.
- Refrain from using heavily styled, filled buttons; all primary interactions should be text-based or rely on subtle outlined appearances.
- Do not deviate from the established 0px border-radius for main content blocks or 9999px for tags; rounded corners are not part of the core brand identity.
- Avoid generic stock photography; all imagery should focus on high-quality product shots, lifestyle imagery should be minimal or absent.
- Do not center text within large content blocks unless it is a primary headline or hero element; prefer left-aligned text for readability.
- Avoid dense, information-heavy sections; ensure generous spacing around text and components to maintain a premium feel.

### Layout

The page primarily utilizes a full-bleed layout, where the Forest Canvas background extends edge-to-edge. Content within sections adheres to implied maximum widths, but the background color often fills the entire viewport width. The hero section is characterized by a full-bleed image or solid background with large, often sculptural, centered text overlay. Sections maintain a consistent vertical rhythm, often separated by the continuous Forest Canvas background. Content arrangement alternates between large centered headlines, and structured grids, such as 3-column product cards. The navigation is a classic top bar, appearing sticky at the top.

### Imagery

This site prominently features high-quality, professional product photography. Images are consistently full-bleed or tightly cropped product shots on pure white backgrounds, emphasizing the object without distracting context. There's an absence of lifestyle photography. Visuals are contained within sharp, 0px-radius boundaries. Icons, where present, are monochromatic and outlined, mirroring the minimalist interface style. Imagery primarily serves to showcase products, acting as direct content rather than decorative atmosphere. The density is image-heavy in product grids, with text playing a supporting role.

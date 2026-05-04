---
version: alpha
name: Leif Products
description: Leif Products embodies a refined, minimal aesthetic, utilizing a stark black and white palette punctuated by the natural hues of product photography. Typography is compact and precise, maintaining a high information density within a spacious layout. Components are presented with a lightweight touch, often appearing as outlines or subtle containers, allowing the product imagery to dominate the visual field.
colors:
  ink: "#000000"
  paper-white: "#fafaf9"
  pebble-gray: "#e5e2dc"
  alabaster: "#edede7"
  shadow-tone: "#595959"
  stone-line: "#d6d1c7"
typography:
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
    letterSpacing: 0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1
    letterSpacing: -0.51px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: -0.78px
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1
    letterSpacing: -1.12px
spacing:
  buttonRadius: 6px
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-navigation-link:
    role: Primary navigation links and text-based buttons.
  primary-filled-button:
    role: Call-to-action buttons for key interactions.
  outlined-text-button:
    role: Secondary action buttons with a visual emphasis without filling.
  product-display-card:
    role: Container for individual product listings.
  transparent-input-field:
    role: Form input elements.
  info-badge:
    role: Highlight specific product attributes or offers.
---

## Overview

**North Star:** Black script on white canvas

Leif Products embodies a refined, minimal aesthetic, utilizing a stark black and white palette punctuated by the natural hues of product photography. Typography is compact and precise, maintaining a high information density within a spacious layout. Components are presented with a lightweight touch, often appearing as outlines or subtle containers, allowing the product imagery to dominate the visual field.

### Do's

- Prioritize Ink (#000000) for all primary text and interactive elements to maintain visual strength.
- Use Paper White (#fafaf9) as the canvas for all major page sections and card backgrounds, ensuring visual spaciousness.
- Apply subtle borders with Pebble Gray (#e5e2dc) or Stone Line (#d6d1c7) for non-essential dividers and input fields.
- Employ PP Right Grotesk with weight 200 for large headings (like 75px or 52px) to convey understated elegance.
- Maintain tight letter-spacing for display typography and slightly wider spacing for Söhne Mono to create distinct typographic textures.
- Utilize 6px border-radius consistently for all buttons and interactive link elements.
- Incorporate 20px as the default elementGap for horizontal and vertical spacing between most components.

### Don'ts

- Avoid using highly saturated or vibrant colors; strictly adhere to the monochromatic palette with natural product images as the only color accents.
- Do not introduce heavy box-shadows or gradients; maintain a flat and minimal surface treatment to preserve the clean aesthetic.
- Never use generic system fonts; always specify Söhne, Söhne Mono, or PP Right Grotesk to maintain brand consistency.
- Do not vary border-radius arbitrarily; stick to 6px for interactive elements and 3px for subtle body text containers.
- Avoid dense, stacked layouts without sufficient breathing room; ensure generous use of vertical and horizontal spacing like 40px sectionGap.
- Do not apply excessive padding to text-based items; allow typography to breathe naturally without becoming overly spaced out.
- Do not use Alabaster (#edede7) for primary text where strong contrast is needed; reserve it for secondary information or light backgrounds.

### Layout

The page structure is full-bleed, with content centered within an implied maximum width. The hero section often features a dominant, large-scale product image on one side, paired with a concise headline and description on the other, creating a split-panel composition. Section rhythm is driven by generous, consistent vertical spacing, creating an airy feel. Feature sections frequently employ a 3-column card grid or alternating text-left/image-right patterns for product presentation. Navigation is handled by a minimal top bar, featuring ghost links and functional icons, maintaining a low visual profile to emphasize content.

### Imagery

Imagery on Leif Products is central to its identity, featuring high-quality, product-focused photography. Photos are typically tightly cropped, showcasing products in isolation or with minimal, often human, interaction (hands holding products). There’s a preference for neutral or natural backgrounds that highlight the product's texture and form, rather than providing an elaborate lifestyle context. The visual treatment is raw and authentic, with natural lighting. Imagery is contained within defined areas, often with soft negative space around them, and serves both decorative atmosphere and direct product showcase roles. Icons are minimalist, outlined, and monochromatic, with a moderate stroke weight, serving purely functional purposes.

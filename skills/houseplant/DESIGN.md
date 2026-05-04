---
version: alpha
name: HOUSEPLANT
description: HOUSEPLANT's visual system evokes a collectible-driven, high-end artisanal aesthetic. It features a stark contrast between a dominant, warm off-white canvas and deep, earthy neutrals, lending a sophisticated yet grounded feel. Typography is paramount, leveraging a distinctive custom serif for headlines and strong sans-serifs for body text, creating an almost editorial quality. Components are minimal, often borderless or with subtle shadows, allowing the rich product imagery and bold type to command attention.
colors:
  canvas-parchment: "#f4f1e0"
  houseplant-deep-bark: "#321e1e"
  text-carbon: "#464545"
  surface-shadow: "#bdb498"
  button-shadow: "#463938"
  pure-black: "#000000"
  pure-white-text: "#f4f4f4"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
    letterSpacing: -0.021px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
    letterSpacing: -0.021px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
    letterSpacing: -0.021px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.02px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.15
    letterSpacing: -0.047px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -0.05px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1
    letterSpacing: -0.047px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 20px
components:
  filled-brand-button:
    role: Primary call to action.
  circular-icon-button:
    role: Utility actions like cart or user profile.
  ghost-header-navigation-link:
    role: Top-level navigation items.
  ghost-footer-nav-link:
    role: Footer navigation and secondary links.
  shop-now-button-product-card:
    role: Secondary action within product cards.
  elevated-product-card:
    role: Displaying product items with subtle depth.
  horizontal-divider:
    role: Separating content blocks or list items.
  minimal-badge:
    role: Informational labels.
  outlined-cta-button-dark-background:
    role: Secondary call to action on dark backgrounds.
---

## Overview

**North Star:** Artisanal Collector's Canvas

HOUSEPLANT's visual system evokes a collectible-driven, high-end artisanal aesthetic. It features a stark contrast between a dominant, warm off-white canvas and deep, earthy neutrals, lending a sophisticated yet grounded feel. Typography is paramount, leveraging a distinctive custom serif for headlines and strong sans-serifs for body text, creating an almost editorial quality. Components are minimal, often borderless or with subtle shadows, allowing the rich product imagery and bold type to command attention.

### Do's

- Prioritize Canvas Parchment (#f4f1e0) as the dominant background for light sections to maintain the warm, aged base.
- Use Houseplant Deep Bark (#321e1e) for primary text and critical interactive elements, ensuring strong contrast.
- Apply the Houseplant typeface with negative letter-spacing for all primary headings and product names to emphasize brand identity.
- Utilize a border-radius of 4px for interactive buttons and 8px for prominent cards to provide consistent component shaping.
- Employ subtle box shadows (rgba(0, 0, 0, 0.1) 0px 2px 8px 0px) for cards and buttons for gentle elevation, avoiding harsh overlays.
- Maintain a comfortable element gap of 20px between distinct UI components for visual breathing room.
- Contrast Houseplant Deep Bark (#321e1e) against Canvas Parchment (#f4f1e0) for optimal readability and brand impact in text.

### Don'ts

- Avoid using bright, saturated colors for backgrounds or large areas; color should predominantly come from product imagery or small accents.
- Do not introduce sharp, angular shapes or radii beyond the defined 4px and 8px, as this deviates from the soft, artisanal feel.
- Refrain from heavy, multi-layered shadows; elevation should be minimal and understated.
- Do not use generic system fonts for headlines or prominent text; the custom Houseplant typeface is essential to brand identity.
- Avoid dense, tightly packed layouts; the design system values comfortable spacing and a focused presentation.
- Do not use highly reflective or glossy textures; the aesthetic leans towards matte, tactile surfaces.
- Do not dilute the contrast between text and background with mid-tone grays; rely on the established dark neutrals on light backgrounds.

### Layout

The page uses a maximum-width contained layout rather than full-bleed, with content centered. The hero section often features a split-layout with bold graphic elements or photography on one side and a prominent headline with a call to action on the other, sometimes against a full-width background. Sections maintain a consistent vertical rhythm, primarily defined by explicit section gaps, frequently alternating between the Canvas Parchment background and a darker content block (#463938). Content is arranged in flexible grid patterns for product listings (e.g., 3-column carousel of product cards) and alternating text-left / image-right or centered stacks for feature descriptions. Navigation is a sticky top bar with minimal links and iconic utility buttons.

### Imagery

Imagery primarily consists of tight product photography or styled product shots, often isolated on neutral backgrounds or within artistic, curated settings. Photography is high-key with soft lighting, minimizing harsh shadows, and focusing on the material and form of the objects. Illustrations (as seen in the 'Italian Collection' hero) are geometric, bold, and utilize brand colors to create impactful, graphic patterns rather than detailed scenes. Icons are minimal, outlined, and monochromatic, primarily serving functional roles. The visual system is image-heavy, showcasing the products as the hero, balancing aesthetic appeal with clear product visibility.

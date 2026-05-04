---
version: alpha
name: Peak Design
description: This system embodies a utilitarian elegance, pairing stark black and white sections with subdued neutrals to frame product photography. Typography is the primary expressive element, with a high-contrast serif font for arresting headlines that feel established yet contemporary. Subtle button treatments and precise spacing prioritize content clarity and direct interaction, creating a refined, almost stoic, e-commerce experience.
colors:
  absolute-zero: "#000000"
  cloud-white: "#ffffff"
  forest-black: "#1a211"
  ash-gray: "#eef1f0"
  charcoal-black: "#0c0c0c"
  graphite: "#606562"
  slate-border: "#cccfcd"
  badge-gray: "#4e4e4"
  alert-red: "#cc2e39"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 21
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 24
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 26.4
    letterSpacing: 0.91px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 35.2
    letterSpacing: 1.22px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 44
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 52.8
    letterSpacing: -1px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 88
    letterSpacing: -2px
spacing:
  cardRadius: 8px
  buttonRadius: 4px, 32px
  elementGap: 4px
  sectionGap: 72px
components:
  category-tab-bar-with-product-cards:
    role: 
  announcement-banner-button-group:
    role: 
  search-input-new-arrivals-promo-card:
    role: 
  primary-ghost-button:
    role: Primary action button on dark backgrounds
  solid-standard-button:
    role: Standard action button on light backgrounds
  pill-accent-button:
    role: Special accent or navigation button
  neutral-filled-button:
    role: Secondary action button for subtle interactions
  search-input-header:
    role: Top navigation search bar
  search-input-block:
    role: Larger search input field
  new-badge:
    role: Highlighting new arrivals
---

## Overview

**North Star:** Photographic gallery on architectural black and white. Product precision through high-contrast typography.

This system embodies a utilitarian elegance, pairing stark black and white sections with subdued neutrals to frame product photography. Typography is the primary expressive element, with a high-contrast serif font for arresting headlines that feel established yet contemporary. Subtle button treatments and precise spacing prioritize content clarity and direct interaction, creating a refined, almost stoic, e-commerce experience.

### Do's

- Prioritize Absolute Zero (#000000) or Cloud White (#ffffff) for hero section backgrounds to create high-contrast statements.
- Use Exposure-10 (substitute Playfair Display) for all display and large heading text to convey craftsmanship and gravitas.
- Apply a 4px border-radius for all interactive elements like buttons and input fields for a subtle softening.
- Reserve bryant font with its characteristic letter-spacing (e.g., 0.61px at 16px) for uppercase action-oriented text and badges.
- Maintain a clear product-focused visual hierarchy by placing product images within cards that have 0px internal padding.
- Utilize Ash Gray (#eef1f0) as a divider or background for secondary UI elements to differentiate without interrupting the high-contrast main scheme.
- Ensure all body and informational text uses Geist (substitute Inter) at 14px or 16px for optimal legibility.

### Don'ts

- Do not use saturated colors for large background areas; maintain the primary black, white, and neutral palette.
- Avoid generic button styling; ensure clear differentiation between ghost, solid, and accent button variants.
- Do not introduce additional serif fonts; Exposure-10 is the singular serif. Do not use generic sans-serifs — stick to Geist and bryant.
- Avoid complex shadows; prefer flat UI elements or subtle border definitions for depth.
- Do not break the rigid grid layout with overlapping content or free-form elements; content should be contained and aligned.
- Do not use decorative elements that distract from the product imagery or strong typography.
- Do not use bold weights of Geist for normal paragraph text; reserve it for specific UI elements or semantic emphasis.

### Layout

The page uses a maximum-width contained layout, though specific hero sections extend full-bleed. The hero pattern frequently employs a split-screen approach with a stark black background on one side (containing large, high-contrast serif headlines) and either white space or aspirational lifestyle photography on the other. Sections follow a consistent vertical spacing, often alternating between dark content blocks and light product grids. Content arrangement leans towards clear, centered headline stacks or alternating text-left/image-right compositions. Product display utilizes responsive card grids (e.g., 4-column) with ample padding between items. Navigation is a persistent top bar featuring a minimal logo, functional links, and a search input.

### Imagery

The visual language is characterized by high-quality product photography, often isolated on neutral backgrounds (white or light gray) for clarity, sometimes set against a stark black backdrop in hero sections. Treatment is crisp, unmasked, and contained within a structured grid. There are lifestyle photography elements, showing products in use, but these are secondary to the primary product-focused shots which emphasize the item itself rather than a narrative. Icons are typically outlined and monochromatic, blending seamlessly with the minimalist aesthetic. Imagery's role is primarily to showcase product details and functionality, acting as explanatory content rather than purely decorative.

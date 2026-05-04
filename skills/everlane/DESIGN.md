---
version: alpha
name: Everlane
description: The Everlane design system evokes refined simplicity through a largely achromatic palette, allowing product imagery and subtle accents to take center stage. Its characteristic look is defined by a rigorous focus on typography, utilizing custom sans-serif fonts at precise weights and letter-spacing for hierarchical messaging, paired with generous white space. The overall impression is one of calm, deliberate presentation, where visual noise is actively suppressed to highlight content purity.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  slate-gray: "#4c4c4c"
  cement-gray: "#737373"
  ash-gray: "#9b9b9b"
  forest-green: "#d9e9bb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0.64px
spacing:
  elementGap: 4-16px
  sectionGap: 48-80px
components:
  promotional-banner:
    role: 
  product-grid:
    role: 
  editorial-content-block:
    role: 
  navigation-link:
    role: Interactive text link within navigation menus.
  primary-action-button-text:
    role: Main call-to-action on promotional sections or product details.
  standard-input-field:
    role: User input for forms and search.
  product-grid-item:
    role: Displaying individual products in a catalog.
---

## Overview

**North Star:** Raw linen and exposed grain. This design feels like natural fibers and honest construction, prioritizing unadorned function and understated elegance.

The Everlane design system evokes refined simplicity through a largely achromatic palette, allowing product imagery and subtle accents to take center stage. Its characteristic look is defined by a rigorous focus on typography, utilizing custom sans-serif fonts at precise weights and letter-spacing for hierarchical messaging, paired with generous white space. The overall impression is one of calm, deliberate presentation, where visual noise is actively suppressed to highlight content purity.

### Do's

- Use Midnight Ink (#000000) for all primary text and critical interactive elements to maintain high contrast and clarity.
- Maintain a clear visual hierarchy using Maison Neue Book, varying weight (400 for body, 700 for strong emphasis) and size (12px for body, 32px for display) with precise letter spacing.
- Employ Canvas White (#ffffff) as the dominant background color to create a spacious, clean aesthetic.
- Apply 0px border-radius consistently across all elements (buttons, inputs, cards) to preserve a sharp, angular aesthetic.
- Utilize Forest Green (#d9e9bb) sparingly for promotional banners or specific accent areas to introduce color without overwhelming the neutral palette.
- Ensure generous line-height for all text, particularly body text (Maison Neue Book 15px @ 1.6 line-height), to enhance readability in text-heavy sections.

### Don'ts

- Avoid using bright or overly saturated colors, as they will clash with the muted, natural palette.
- Do not introduce rounded corners; maintain the established sharp, 0px radius for all design elements.
- Refrain from using drop shadows or complex elevation; depth is created through color contrast and thoughtful spacing, not layered effects. If any box-shadow, keep it very subtle and tight.
- Do not deviate from Maison Neue Book for primary text; introduction of other fonts will break the consistent typographic brand.
- Avoid dense information blocks; use ample line-heights and minimal letter-spacing to ensure content feels open and digestible.

### Layout

The page maintains a centered, max-width layout for most content, but hero sections frequently utilize full-bleed photography. The hero pattern is typically a large, evocative image with minimal, left-aligned text overlays. Sections are generally separated by consistent vertical spacing (implied 48-80px), creating a breathable rhythm. Content is arranged in flexible patterns, including large full-width image sections, side-by-side text and imagery, and multi-column product grids (e.g., 4-column for product displays). Navigation is a sticky top bar with clearly segmented links.

### Imagery

Photography is paramount, featuring professional models in a mix of lifestyle and studio settings. The treatment is often desaturated or subtly muted, focusing on showing the clothing on real people in aspirational, yet understated, environments. Images are primarily full-bleed in hero sections or clean, contained product shots on white/light backgrounds. No decorative graphics or illustrations; the visual language is entirely photographic, focusing on product and brand aesthetic. Sparse, simple iconography is used for UI actions.

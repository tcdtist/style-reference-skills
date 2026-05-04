---
version: alpha
name: Porsche
description: This system projects an image of controlled power and exclusivity, reflecting the Porsche brand. The primary visual tension arises from the interplay of stark black and white surfaces, punctuated by crisp, minimal typography. Design decisions lean towards functional elegance, conveying luxury through restraint and precise spacing rather than overt embellishment, often employing photography within geometric containers.
colors:
  obsidian: "#000000"
  ghost-white: "#ffffff"
  charcoal-accent: "#0e0e12"
  slate-text: "#535457"
  deep-black-text: "#010205"
  input-placeholder: "#949598"
spacing:
  cardRadius: 8px
  buttonRadius: 12px
components:
  countdown-teaser-banner:
    role: 
  model-cards-grid:
    role: 
  footer-scroll-indicator-section-title:
    role: 
  hero-headline:
    role: Primary visual weight on section introductions.
  transparent-border-button:
    role: Secondary call to action.
  dark-overlay-card:
    role: Content container for showcasing product categories.
  standard-input-field:
    role: User data entry.
  ghost-badge:
    role: Category labels or navigation items.
  footer-scroll-indicator:
    role: Navigation cue for returning to top.
---

## Overview

**North Star:** Precision engineered sleekness – every element is a calculated, high-contrast decision on a clean canvas.

This system projects an image of controlled power and exclusivity, reflecting the Porsche brand. The primary visual tension arises from the interplay of stark black and white surfaces, punctuated by crisp, minimal typography. Design decisions lean towards functional elegance, conveying luxury through restraint and precise spacing rather than overt embellishment, often employing photography within geometric containers.

### Do's

- Use Obsidian (#000000) for all primary body text and most UI elements on light backgrounds.
- Maintain a clear visual hierarchy with Porsche Next, reserving larger sizes (73px, 95px) for hero headlines and smaller sizes (14px, 16px) for details and navigation.
- Apply 8px radius consistently to all content cards and larger visual containers.
- Employ the 12px radius for interactive elements like buttons, creating a subtle contrast with card radii.
- Prioritize generous vertical section gaps of 63px or 81px to ensure a spacious and premium feel.
- Leverage the pure contrast of #000000 and #ffffff for text and background pairings to achieve maximum readability and a bold aesthetic.

### Don'ts

- Avoid using multiple font families; adhere strictly to Porsche Next for all typography.
- Do not introduce decorative shadows; the design relies on flat, high-contrast surfaces and careful spacing for depth.
- Refrain from using saturated accent colors; the palette is strictly achromatic to maintain sophistication.
- Do not deviate from the established radii of 8px (cards), 12px (buttons), and 4px (inputs/badges); consistent subtle shaping is key.
- Avoid dense information blocks; use spacious layouts with ample white (or black) space around content.
- Do not use gradients; the system employs flat colors for a crisp, unambiguous presentation.

### Layout

The layout combines full-bleed visual sections with contained content blocks. The hero features a large, dark, full-viewport image with white, left-aligned typography. Subsequent sections alternate between full-width black backgrounds and pure white content areas. Content frequently uses a two-column distribution with text on one side and an image or card on the other, or grids of product cards. A consistent pageMaxWidth is not imposed, with elements adapting to fill available space or aligning to a logical content core. Vertical spacing is generous, creating distinct visual breaks between sections.

### Imagery

Photography is paramount, featuring product (cars) either tightly cropped and pristine, often under a dark veil to hint at new releases, or in epic, dynamic landscape settings. Images are mostly full-bleed within sections or large product cards, with sharp, unmasked edges. No illustrations or abstract graphics are present; the visual focus is entirely on the vehicles themselves and their aspirational context. The icons are universally outlined and achromatic, blending seamlessly into the UI.

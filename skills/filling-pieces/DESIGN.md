---
version: alpha
name: Filling Pieces
description: Filling Pieces establishes a confident, minimalist e-commerce aesthetic with a strong emphasis on product presentation. The system uses a limited, high-contrast achromatic palette, allowing product imagery to carry the visual weight. Typography is compact and precise, maintaining overall lightness. Components are structured and refined, relying on subtle borders and uniform radii rather than heavy elevation, contributing to an uncluttered and direct user experience.
colors:
  canvas-ice: "#e5e7eb"
  pure-white: "#ffffff"
  ink-black: "#000000"
  fog-gray: "#efefef"
  steel-gray: "#6b7280"
typography:
  button-label:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
    letterSpacing: -0.44px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: -0.56px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
    letterSpacing: -1.4px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 0.9
    letterSpacing: -2px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.9
    letterSpacing: -4px
spacing:
  elementGap: 16px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Main call to action
  ghost-button:
    role: Secondary action or discrete navigation
  surface-button:
    role: Navigational elements or filters within a light context
  text-input-default:
    role: Standard form field for user input
  text-input-light-background:
    role: Standard form field for user input on white surfaces
  card-modal-container:
    role: Content grouping, dialogs, product listings
  product-grid-item:
    role: Displaying product images and details
---

## Overview

**North Star:** monochromatic gallery, precise typography

Filling Pieces establishes a confident, minimalist e-commerce aesthetic with a strong emphasis on product presentation. The system uses a limited, high-contrast achromatic palette, allowing product imagery to carry the visual weight. Typography is compact and precise, maintaining overall lightness. Components are structured and refined, relying on subtle borders and uniform radii rather than heavy elevation, contributing to an uncluttered and direct user experience.

### Do's

- Prioritize product imagery: UI elements should be achromatic to allow product visuals to dominate the canvas.
- Maintain high contrast: Use Ink Black (#000000) for all primary text and calls to action against Pure White (#ffffff) or Canvas Ice (#e5e7eb) backgrounds.
- Apply consistent border-radius: All interactive elements like buttons and inputs, and structural components like cards and modals, must use an 8px border-radius.
- Utilize tight letter-spacing: Implement a consistent -0.04em letter-spacing for all Favorit text to maintain a compact, precise typographic presence.
- Employ the 4px base unit: Ensure all spacing (padding, margins, gaps) is a multiple of 4px to maintain rhythm and consistency.
- Use distinct surface levels: Differentiate main page content (Canvas Ice #e5e7eb) from component backgrounds (Pure White #ffffff) and secondary sections (Fog Gray #efefef) to create visual hierarchy.
- Favor ghosting for secondary actions: Outline buttons with Ink Black when a less assertive action is required, reserving solid Ink Black fills for primary conversion points.

### Don'ts

- Avoid color in functional UI: Refrain from introducing vibrant or chromatic colors into standard interface elements like buttons, inputs, or navigation, save for specific branded accents if introduced.
- Do not use generic typography: Stick to the Favorit typeface with its specified weights and letter-spacing for all text to preserve brand identity.
- Do not vary border-radius: Deviations from the 8px radius will clash with the established component styling and soften the overall sharp aesthetic.
- Do not introduce heavy shadows or elevation: The design relies on flat surfaces and subtle borders; prominent shadows conflict with this minimalist approach.
- Avoid arbitrary text sizes or line heights: Adhere strictly to the defined type scale to maintain typographic rhythm and readability.
- Do not use spacing values outside the 4px grid: Inconsistent spacing will create visual disorder and disrupt the clean layout.
- Do not add decorative gradients to UI elements: The system emphasizes flat, high-contrast surfaces.

### Layout

The page primarily uses a max-width contained layout, though the hero section often features full-bleed photography. The hero establishes an immersive visual, with large, centered headlines layered over background imagery, often accompanied by a prominent 'Discover Now' button. Section rhythm is predominantly defined by alternating distinct background colors (Canvas Ice, Fog Gray) or large photographic blocks. Content is arranged in flexible grids, including two-column layouts pairing text with visuals and multi-column product grids. Navigation is a consistent sticky top bar with minimal, text-based links and functional icons.

### Imagery

Imagery is centered on high-quality editorial photography, often full-bleed or large format, showcasing products in aspirational and lifestyle contexts. When not lifestyle, individual products are presented cleanly on a light background. Illustrations are absent. Icons are typically solid Ink Black, minimal, and functional. Imagery is critical for conveying the brand's fashion-forward identity, dominating visual space while UI elements remain unobtrusive.

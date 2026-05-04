---
version: alpha
name: Passionfroot
description: Passionfroot embodies a light and energetic aesthetic, juxtaposing highly structured grids and data visualizations against whimsical, vibrant accent colors and playful 3D illustrations. The system balances professional clarity with an approachable, almost fantastical user experience. Surfaces are primarily crisp white, providing a clean canvas for sharp, purposeful typography and a spectrum of vivid hues that punctuate the interface with a soft, inviting pop.
colors:
  ink-black: "#1d1d1c"
  canvas-white: "#ffffff"
  surface-frost: "#f8f7f2"
  ash-gray: "#43423e"
  subtle-stone: "#d8d6ce"
  lilac-dream: "#b26bf5"
  cherry-blossom: "#f788d2"
  sunset-orange: "#ff9147"
  sky-teal: "#4ad5e8"
  ocean-blue: "#51b1fb"
  sunbeam-yellow: "#ffe747"
  velvet-violet: "#b977f8"
  candy-red: "#ee5968"
  emerald-green: "#58df8c"
  deep-sea-blue: "#2c91af"
  royal-purple: "#8200db"
  soft-indigo: "#dab2ff"
  pale-lavender: "#f3e8ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.11px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.15px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.35
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.4px
spacing:
  elementGap: 8px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Call to action, primary interaction.
  ghost-button-header:
    role: Secondary actions in navigation.
  text-button:
    role: Tertiary actions, inline links within controls.
  pill-button:
    role: Categorization, filters, small contextual actions.
  feature-card-achromatic:
    role: Content presentation, informational blocks.
  feature-card-playful-color:
    role: Visually distinct content blocks, often for charts or vibrant data.
  trust-bar-logo-card:
    role: Showcasing partnerships or integrations.
  input-field:
    role: User input for forms and queries.
  navigation-link:
    role: Top-level navigation items.
  floating-action-buttons-mini:
    role: Small, embedded contextual actions within components.
---

## Overview

**North Star:** Whimsical data observatory

Passionfroot embodies a light and energetic aesthetic, juxtaposing highly structured grids and data visualizations against whimsical, vibrant accent colors and playful 3D illustrations. The system balances professional clarity with an approachable, almost fantastical user experience. Surfaces are primarily crisp white, providing a clean canvas for sharp, purposeful typography and a spectrum of vivid hues that punctuate the interface with a soft, inviting pop.

### Do's

- Use new-kansas for all headings and large display text, ensuring its unique character anchors key messages.
- Prioritize Canvas White (#ffffff) as the primary surface color for all interactive components to maintain clarity and contrast.
- Employ the full palette of vibrant accent colors (Lilac Dream, Cherry Blossom, Sunset Orange, Sky Teal) as full card backgrounds or prominent data visualizations to create playful segmentation.
- Apply all shadows with the rgb(237, 234, 228) 0px 0px 0px 1px, oklch(0.23 0.002 98 / 0.04) 0px 1px 1px -0.5px, oklch(0.23 0.002 98 / 0.04) 0px 3px 3px -1.5px, oklch(0.23 0.002 98 / 0.04) 0px 6px 6px -3px, oklch(0.23 0.002 98 / 0.02) 0px 12px 12px -6px stack for elevated UI elements.
- Maintain a default border-radius of 12px for most cards, buttons, and larger interface elements, reserving 9999px for pill-shaped elements.
- Utilize 8px as the default elementGap for tight-knit UI compositions, scaling up to 24px sectionGap for content separation.
- Use Nunito Sans with weights 400-700 and its specified letter spacing for all body copy and functional text to ensure readability.
- Align all page content to a max-width container, letting the hero stretch full-bleed as a visual anchor.
- Use Deep Sea Blue (#2c91af) and Royal Purple (#8200db) for interactive icon accents and highlighted text to guide user action.
- Employ Subtle Stone (#d8d6ce) for all hairline borders and input field outlines to maintain a light, unobtrusive visual structure.
- Incorporate Emerald Green (#58df8c) or Candy Red (#ee5968) as background fills for cards that convey semantic success or error states.

### Don'ts

- Avoid using purely decorative, highly saturated background gradients on general UI components; reserve color for solid blocks and purposeful data visualization.
- Do not deviate from the specified Nunito Sans and new-kansas font families; do not introduce additional typefaces.
- Do not use dark backgrounds for primary content areas; the system is designed around a light-themed canvas.
- Refrain from using hard, angular corners; all components should adopt the characteristic 12px or 9999px border radii.
- Do not introduce heavy, opaque drop shadows; stick to the light, multi-layered shadows specified for subtle elevation.
- Avoid arbitrary color usage; every use of a chromatic color should have a clear purpose—either decorative accent, semantic indicator, or data visualization.
- Do not implement excessively sparse layouts. The system favors a compact density with intentional spacing for clarity, not emptiness.

### Layout

The page model alternates between full-bleed, content-rich hero sections and max-width contained sections. The hero showcases expansive, illustrative backgrounds with centered headlines and calls to action. Subsequent sections often use a consistent vertical rhythm of 24px, with content arranged in alternating text-left/image-right or centered stacked patterns. Card grids are prominent for feature display, making frequent use of the 8px element gap for compact arrangements. Navigation is a sticky top bar, minimally styled with text links and a ghost button, staying out of the way of the content.

### Imagery

This design system heavily features playful, soft 3D illustrations, often personified characters, set against dreamy, fantastical backgrounds (like cloudscapes or starry skies). These illustrations are the primary visual content, serving a decorative and atmospheric role rather than showcasing product features directly. They are full-width or large hero elements, not contained by card borders, and feature soft, rounded forms. Iconography is minimalist and linear, complementing the clean UI without competing with the vivid illustrations. The imagery creates a sense of wonder and accessibility, making complex AI concepts feel approachable.

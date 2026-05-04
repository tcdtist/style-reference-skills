---
version: alpha
name: Mihan Aromatics ™
description: Mihan Aromatics ™ operates on a high-contrast minimalist aesthetic, emphasizing stark black and white with subtle gray accents. Typography is compact and precise, maintaining a refined elegance. Surfaces are predominantly flat, and component weights are light, prioritizing content and product imagery. The overall impression is one of considered simplicity and understated luxury, with structure revealed through fine borders and purposeful spacing rather than heavy visual elements.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  ash-gray: "#878787"
  charcoal: "#333333"
  shadow-tint: "#4d4d4d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0.036px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1
    letterSpacing: 0.023px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: 0.02px
spacing:
  elementGap: 8px
  sectionGap: 64px
components:
  ghost-button-minimal:
    role: Subtle call to action for secondary actions or navigation.
  filled-button-white:
    role: Primary Call to Action, stands out against darker backgrounds.
  ghost-button-white-transparent:
    role: Call to action used on hero images, designed for high contrast against diverse media.
  feature-card:
    role: Content container for showcasing features or product details.
  text-input-underlined:
    role: Standard input field for user data.
  navigation-badge:
    role: Categorization or informational tags within menus or lists.
---

## Overview

**North Star:** monochrome canvas, refined contrast

Mihan Aromatics ™ operates on a high-contrast minimalist aesthetic, emphasizing stark black and white with subtle gray accents. Typography is compact and precise, maintaining a refined elegance. Surfaces are predominantly flat, and component weights are light, prioritizing content and product imagery. The overall impression is one of considered simplicity and understated luxury, with structure revealed through fine borders and purposeful spacing rather than heavy visual elements.

### Do's

- Prioritize Canvas White (#ffffff) for backgrounds and Midnight Ink (#000000) for text and interactive borders to maintain high contrast and clarity.
- Use Mihan typeface at weight 300 for all large headlines (32px and above) to convey authority through restraint.
- Apply 0px border-radius consistently across all UI elements, including buttons, cards, and inputs, for a sharp, angular aesthetic.
- Employ ghost buttons with 1px borders in the primary text color (Midnight Ink #000000) for secondary actions or where a lightweight interaction is desired.
- Maintain a clear vertical rhythm using 64px for section gaps and 32px for inner card padding, creating breathing room within the compact layout.
- Use -0.01em letter-spacing for display typography and 0.05em for caption-sized text to optimize readability at each scale.
- Ensure all interactive elements, even if ghost-style, have a visible border or clear text color in Midnight Ink (#000000) against Canvas White (#ffffff).

### Don'ts

- Avoid chromatic colors for primary calls to action; stick to the black and white palette for core interactive elements.
- Do not introduce rounded corners; all elements must adhere to the strict 0px border-radius.
- Refrain from using heavy shadows or complex gradients; rely on contrast, fine borders, and spacing for visual hierarchy.
- Do not vary text letter-spacing randomly; apply specific values based on the type scale to maintain precision.
- Avoid using multiple font families or weights outside of the specified Mihan family and its defined weights.
- Do not use overly verbose or decorative language in component descriptions or labels; maintain compact and precise text.
- Do not use more than 1px for borders on interactive elements or separators unless for specific semantic purposes (e.g., error states).

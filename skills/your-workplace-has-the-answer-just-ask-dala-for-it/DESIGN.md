---
version: alpha
name: Your workplace has the answer. Just ask Dala for it.
description: Dala adopts a deep space digital aesthetic: a completely dark canvas punctuated by holographic, energetic typography and interactive elements. Its visual identity relies on vibrant, glowing accents against achromatic backgrounds. Components are lightweight and often border-driven, emphasizing digital dimensionality over physical presence. The overall mood is futuristic and intelligent, with strong visual hierarchy created through size and color contrast.
colors:
  midnight-void: "#000000"
  holo-white: "#ffffff"
  stardust-gray: "#bdbdbd"
  ghost-gray: "#9a9a9a"
  cosmic-violet: "#8052ff"
  sunflare-yellow: "#ffb829"
  quantum-teal: "#15846e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.025px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.025px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 78px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 113px
    lineHeight: 0.81
    letterSpacing: -0.04px
spacing:
  cardRadius: 24px
  buttonRadius: 24px
  elementGap: 6px
  sectionGap: 60px
components:
  primary-action-button:
    role: Main call-to-action
  ghost-navigation-button:
    role: Secondary navigation or text-based actions
  naked-link:
    role: Inline text links
  main-header:
    role: Site-wide sticky header
---

## Overview

**North Star:** Deep space digital holo-deck

Dala adopts a deep space digital aesthetic: a completely dark canvas punctuated by holographic, energetic typography and interactive elements. Its visual identity relies on vibrant, glowing accents against achromatic backgrounds. Components are lightweight and often border-driven, emphasizing digital dimensionality over physical presence. The overall mood is futuristic and intelligent, with strong visual hierarchy created through size and color contrast.

### Do's

- Prioritize Cosmic Violet (#8052ff) for all primary interactive elements.
- Use Holo White (#ffffff) for main headings and key UI text against Midnight Void (#000000) backgrounds to ensure high contrast and readability.
- Apply a 24px border-radius consistently to all interactive elements such as buttons and navigation items, and for card-like structures.
- Maintain a clear visual hierarchy by utilizing the large headline type sizes (48px, 78px, 113px) with reduced letter-spacing for impactful statements.
- Employ Ghost Gray (#9a9a9a) for subtle secondary navigation and text, ensuring it recedes while remaining legible.
- Use Sunflare Yellow (#ffb829) sparingly as an accent for highlighted text or decorative borders to draw attention.

### Don'ts

- Avoid using flat, opaque background colors unless for specific branded components, preserving the dark, spacious canvas.
- Do not introduce new color palettes; stick to the defined chromatically vivid or achromatic colors.
- Do not use generic system fonts; always utilize Acronym or its designated substitutes.
- Avoid heavy drop shadows or physical metaphors; embrace the flat, digital aesthetic with strong color contrast.
- Do not add conflicting border-radii; adhere strictly to the 24px value for UI elements and cards.
- Resist dense layouts; use the established elementGap and sectionGap for comfortable content separation and a sense of depth.

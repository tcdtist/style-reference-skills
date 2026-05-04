---
version: alpha
name: CHAIBOY
description: CHAIBOY presents a stark, high-contrast dark mode aesthetic, emphasizing minimalism and bold, clean typography. The visual language centers on a monochromatic palette of black, white, and various grays, creating a sophisticated and understated environment. Thin line accents found in borders and ghost buttons provide delicate structure against dark surfaces. The overall impression is one of controlled elegance, using visual sparseness to draw attention to refined products and content.
colors:
  midnight-ink: "#000000"
  frost-gray: "#afafaf"
  arctic-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.29
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.11
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.27
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 0.89
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 5px
  sectionGap: 60px
components:
  ghost-border-button-frost:
    role: Secondary action button
  underlined-input-frost:
    role: Standard text input field
  underlined-input-arctic:
    role: Prominent text input field
  header-navigation-link:
    role: Primary navigation item
  footer-action-link-muted:
    role: Footer utility links
---

## Overview

**North Star:** Monochromatic minimalist canvas.

CHAIBOY presents a stark, high-contrast dark mode aesthetic, emphasizing minimalism and bold, clean typography. The visual language centers on a monochromatic palette of black, white, and various grays, creating a sophisticated and understated environment. Thin line accents found in borders and ghost buttons provide delicate structure against dark surfaces. The overall impression is one of controlled elegance, using visual sparseness to draw attention to refined products and content.

### Do's

- Use Midnight Ink (#000000) as the primary background color for all main sections and footers.
- Apply NeueHaasGroteskTP55R weight 400 across all typographic elements, prioritizing its unique 'case' font feature for uppercase styling.
- Emphasize content through high-contrast typography, pairing Arctic White (#ffffff) text on Midnight Ink (#000000) backgrounds.
- Implement Frost Gray (#afafaf) for all secondary text, inactive states, and subtle UI lines, ensuring a visual hierarchy without color.
- Maintain a uniform border-radius of 4px for all interactive elements like buttons and cards, contributing to a consistent, subtle softness.
- Structure information using a compact spacing philosophy, with an elementGap of 5px and sectionGap of 60px.
- Utilize 1px borders in Frost Gray (#afafaf) or Arctic White (#ffffff) for inputs and ghost buttons to define interactive areas subtly.

### Don'ts

- Avoid using any saturated colors unless specifically introduced as a functional accent; the system is strictly monochromatic.
- Do not deviate from the NeueHaasGroteskTP55R font family or weight 400; font consistency is a core brand identifier.
- Refrain from heavy shadows or pronounced elevation; the design relies on flat surfaces and thin borders for depth.
- Do not introduce strong visual gradients; the aesthetic is built on solid color blocks and clear contrasts.
- Avoid large, image-dominant layouts unless the imagery itself is monochromatic and stark, maintaining visual continuity.
- Do not break the 4px border-radius standard; it is a critical micro-design element across interactive components.
- Do not use generic system fonts or default link styling; always apply brand-specific typography and color.

### Layout

The page uses a full-bleed, dark background that extends edge-to-edge. Content appears to be horizontally centered within a maximal width, creating clear boundaries for readability within the expansive dark canvas. The hero section is characterized by a prominent visual element (a large black and white photograph) flanked by the stark black background. Navigation is minimal and positioned at the top, a simple, horizontal list of text links. Sections maintain consistent vertical spacing, creating a calm, unhurried rhythm.

### Imagery

Imagery is high-contrast, black and white photography, often featuring product or model shots with a stark, artistic feel. Images are primarily contained within content areas, without overlapping elements, and contribute to the overall minimalist and sophisticated mood. Icons are minimal, likely outlined, and monochromatic, integrated seamlessly into the high-contrast UI.

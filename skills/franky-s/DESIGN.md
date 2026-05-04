---
version: alpha
name: FRANKY'S
description: Franky's employs an 8-bit arcade aesthetic, reminiscent of retro computing interfaces and early video games. The UI features a dominant dark mode with soft, paper-like neutral surfaces and vibrant, purposeful chromatic accents. A distinct pixelated font defines all typography, reinforcing a digital-native, nostalgic feel. Elements are framed with thin, sometimes dashed borders, and rounded corners provide a subtle organic counterpoint to the pixel grid.
colors:
  midnight-screen: "#000000"
  paper-canvas: "#f3e5df"
  off-white-border: "#e5e7eb"
  subtle-charcoal: "#333333"
  ghostly-gray: "#737373"
  marigold-gold: "#faa21f"
  action-green: "#128e44"
  midnight-gradient-blue: "#2b4893"
  sunset-gradient-orange: "#cf4308"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.56
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 4px
  sectionGap: 44px
components:
  ghost-button-thin-border:
    role: Secondary action control
  ghost-button-subtle-border:
    role: Tertiary action control
  ghost-button-rounded-subtle-border:
    role: Tertiary action control with soft corners
  pill-button-left-rounded:
    role: Segmented control left segment
  primary-action-button:
    role: Main call to action
  product-card:
    role: Display individual products and details
  status-indicator-button:
    role: Informative button, non-interactive (e.g. 'Out of Stock')
---

## Overview

**North Star:** Retro Pixelated Arcade

Franky's employs an 8-bit arcade aesthetic, reminiscent of retro computing interfaces and early video games. The UI features a dominant dark mode with soft, paper-like neutral surfaces and vibrant, purposeful chromatic accents. A distinct pixelated font defines all typography, reinforcing a digital-native, nostalgic feel. Elements are framed with thin, sometimes dashed borders, and rounded corners provide a subtle organic counterpoint to the pixel grid.

### Do's

- Retain the dominant dark theme foregrounded by Paper Canvas (#f3e5df) elements and Midnight Screen (#000000) text for content.
- Utilize the Arcade font exclusively for all text elements to maintain the pixelated retro aesthetic.
- Frame all interactive and content containers with a 1px solid Off-White Border (#e5e7eb) to define UI boundaries.
- Apply a 12px border-radius to all card-like components and a 6px border-radius to smaller interactive elements like buttons.
- Employ Action Green (#128e44) solely for primary call-to-action buttons like 'Add to Cart'.
- Use Marigold Gold (#faa21f) as a vibrant, distinct accent for top-level promotions or specific highlight features.
- Maintain a compact density for elements, primarily using 4px and 12px for padding and gaps, reserving larger values for section separation.

### Don'ts

- Avoid using bright white backgrounds; always use Paper Canvas (#f3e5df) for lighter surfaces to maintain the aged paper aesthetic.
- Do not introduce any additional font families or weights beyond the defined Arcade font to preserve the distinctive typography.
- Refrain from using strong, modern drop shadows; prioritize the subtle inset button shadow rgb(243, 229, 223) 0px 1px 0px 0px or flat designs.
- Do not deviate from the specified border-radius values (12px for cards, 6px for buttons) as they contribute to the system's character.
- Never use Action Green (#128e44) for decorative purposes or secondary text; it is strictly reserved for primary actions.
- Avoid introducing new primary accent colors; limit the palette to the defined Marigold Gold (#faa21f) and Action Green (#128e44).
- Do not add gradients arbitrarily; use them sparingly and only with the defined color combinations and directions where appropriate for decorative elements.

### Layout

The page uses a contained, centered layout, appearing within a distinct browser-like frame. The hero section features a full-width interactive product view (3D/AR) alongside a dynamic checkerboard background. Below this, content is arranged in a fluid grid of product cards, breaking into a two-column layout on larger screens. Navigation is a minimalist top bar within the browser-like frame, with subtle text links for secondary actions. The layout maintains consistent vertical spacing between sections, creating a compact but clear presentation.

### Imagery

The site uses product photography paired with stylized graphics. Product images are flat, illustrative representations of hats. The main product display section features a large, dynamic 3D render of a hat against a checkerboard pattern. Icons are minimal, outlined, and monochromatic, matching the pixelated aesthetic. Imagery serves primarily as product showcase and decorative atmosphere, contributing to the retro digital theme.

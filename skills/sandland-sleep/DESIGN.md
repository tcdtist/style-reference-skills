---
version: alpha
name: Sandland Sleep
description: Sandland Sleep uses a calm, naturalistic visual language designed to evoke tranquility and trust, combining soft, muted backgrounds with clear, legible typography. A dominant dark navy provides a sense of depth and authority, contrasted by a sunny yellow for key calls to action, creating gentle visual punctuation. Surfaces are largely soft-edged cards with subtle elevation, promoting a friendly and approachable feel while maintaining a clean, digital aesthetic. The overall theme is understated and clean, minimizing distractions to focus on clarity and product presentation.
colors:
  midnight-ink: "#1a365d"
  amber-glow: "#fae467"
  scarlet-flash: "#a42325"
  deepest-night: "#000000"
  canvas-white: "#ffffff"
  ghost-fog: "#f2ede8"
  subtle-ash: "#e6e6e6"
  stone-gray: "#666666"
  pale-pebble: "#faf8f6"
  slate-border: "#726f6d"
  dark-umbra: "#3d3d3d"
  light-concrete: "#cbd5e0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.45px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.3px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.3px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.3px
spacing:
  cardRadius: 10px
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 44px
components:
  primary-action-button:
    role: Call to action
  ghost-outline-button:
    role: Secondary action
  neutral-button:
    role: Tertiary action
  default-card:
    role: Content container
  elevated-content-card:
    role: Prominent content display
  dark-product-card:
    role: Product information display
  input-field:
    role: User input
  bestseller-badge:
    role: Highlight label
---

## Overview

**North Star:** Calm twilight, soft edges

Sandland Sleep uses a calm, naturalistic visual language designed to evoke tranquility and trust, combining soft, muted backgrounds with clear, legible typography. A dominant dark navy provides a sense of depth and authority, contrasted by a sunny yellow for key calls to action, creating gentle visual punctuation. Surfaces are largely soft-edged cards with subtle elevation, promoting a friendly and approachable feel while maintaining a clean, digital aesthetic. The overall theme is understated and clean, minimizing distractions to focus on clarity and product presentation.

### Do's

- Use Ghost Fog (#f2ede8) as the canvas background for most page sections, occasionally using dark backgrounds like Midnight Ink (#1a365d) for hero or feature areas.
- Apply Deepest Night (#000000) for all primary text elements, ensuring high contrast and legibility.
- Utilize Sandland-550 for all typographic elements, leveraging its weight and letter-spacing variations for hierarchy rather than introducing new font families.
- Wrap interactive elements like buttons and badges in a 20px or 10px border radius, respectively, or 999px for pill-shaped elements.
- Make primary calls to action with a filled Amber Glow (#fae467) button, employing Deepest Night (#000000) for text.
- Maintain a comfortable density with an element gap of 8px and card padding of 30px, ensuring visual breathing room. Section gaps should be 44px.
- Use Subtle Ash (#e6e6e6) for hairline borders and separators to define content zones lightly.

### Don'ts

- Avoid using highly saturated colors outside of the Amber Glow (#fae467) accent for primary actions; keep the rest of the palette muted or neutral.
- Do not introduce additional font families beyond Sandland-550, Inter, and GTStandard-M; maintain typographic consistency.
- Refrain from using strong, opaque box shadows; stick to the light, soft shadows defined for cards.
- Do not deviate from the established border radii for components; maintain the consistent level of softness.
- Avoid arbitrary color variations for text or background elements; each color should serve a distinct semantic purpose.
- Do not create layouts that extend beyond the 1200px page max width, ensuring a contained and balanced presentation.

### Layout

The page maintains a max-width of 1200px, centered for readability and focus. The hero section features a full-width background with a centered, prominent headline and a Call-to-Action button over softly rendered product imagery. Content sections typically follow a consistent vertical rhythm with alternating background colors (Ghost Fog #f2ede8 and Canvas White #ffffff where cards overlay) and are separated by a section gap of 44px. Information is frequently arranged in a grid of 3-column cards, presenting products or features. Section headers are often centered and descriptive. Navigation is a sticky top bar with a left-aligned brand logo and right-aligned actions and links.

### Imagery

Imagery largely consists of tight product photography featuring sleep aid boxes, typically isolated on clean backgrounds or presented diagonally for a dynamic feel. Some illustrations are present, characterized by organic, flat shapes and brand-colored accents (like the blue sheep). Icons are generally outlined or filled with a moderate stroke weight, appearing as line art or simple glyphs, used functionally. The overall density of imagery is balanced, serving both decorative-atmospheric roles (hero section) and explanatory purposes (product display).

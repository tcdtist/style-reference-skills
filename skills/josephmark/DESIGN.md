---
version: alpha
name: Josephmark
description: Josephmark evokes a commanding, minimalist aesthetic where stark contrasts and purposeful typography convey authority. The design system is built on an achromatic palette, predominantly black and white, creating an expansive canvas that recedes to highlight content. Type is a core visual element, with custom grotesk forms carrying a substantial portion of the brand identity through precise letter-spacing and varying weights. Interaction is subtle, relying on ghost elements and border changes rather than bold color accents.
colors:
  midnight: "#000000"
  canvas-white: "#ffffff"
  platinum-mist: "#e5e7eb"
  cloud-gray: "#f4f5ef"
  granite: "#666666"
  stone: "#a9a498"
  carbon: "#4e5449"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.19px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.4
    letterSpacing: -0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
    letterSpacing: -0.76px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -1.08px
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1.1
    letterSpacing: -2.45px
spacing:
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 64-96px
components:
  ghost-primary-button:
    role: Interactive element for main calls to action, appearing as a transparent pill with a white border.
  outlined-card-button:
    role: Secondary action or category filter within content sections, offering structure through a subtle border.
  text-input-underlined:
    role: Form element for user data entry, with a minimal, focus-driven border.
  navigation-link:
    role: Interactive text link for site navigation and inline content, maintaining high contrast on all backgrounds.
---

## Overview

**North Star:** monochromatic gallery space

Josephmark evokes a commanding, minimalist aesthetic where stark contrasts and purposeful typography convey authority. The design system is built on an achromatic palette, predominantly black and white, creating an expansive canvas that recedes to highlight content. Type is a core visual element, with custom grotesk forms carrying a substantial portion of the brand identity through precise letter-spacing and varying weights. Interaction is subtle, relying on ghost elements and border changes rather than bold color accents.

### Do's

- Prioritize high contrast between text and background, typically Midnight (#000000) on Canvas White (#ffffff) or vice-versa.
- Use Scto Grotesk A typeface with precise letter-spacing as defined by the type scale for all text elements.
- Apply a 9999px border-radius for all primary buttons to achieve a soft, pill-like shape.
- Utilize Platinum Mist (#e5e7eb) for subtle, hairline borders and dividers to maintain visual lightness without stark separation.
- Maintain generous vertical spacing between content sections, using 64px or 96px for `sectionGap` to create ample breathing room.
- Implement `_elementGap` at 16px to ensure a consistent, comfortable distance between adjacent UI elements.
- Design interactive elements as 'ghost' components using borders, favoring transparency in backgrounds to emphasize content.
- Use the predefined motion durations (0.3s) and `ease` timing functions for all UI transitions to create a responsive, fluid feel.

### Don'ts

- Avoid using saturated or vivid chromatic colors; the palette is strictly achromatic with subtle gray variations.
- Do not introduce strong drop shadows; the design system avoids elevation through shadows and relies on stark background shifts for depth.
- Do not use generic system fonts; Scto Grotesk A is fundamental to the brand's typographic identity.
- Refrain from tight, cramped layouts; the design system emphasizes spaciousness and clear visual hierarchy through generous padding and margins.
- Do not use square or hard-edged buttons for primary actions; all prominent buttons should use the 9999px radius.
- Avoid using underlines for default link states; interaction should be indicated by hover effects or contextual cues.
- Do not feature imagery with busy backgrounds or conflicting color palettes; all visuals should either be monochromatic or have controlled color palettes that align with the brand's aesthetic.

### Elevation

The design intentionally avoids traditional shadows, instead creating depth and hierarchy through stark background color changes, such as the immediate shift from Canvas White to Midnight. This approach reinforces the minimalist, anti-skeuomorphic aesthetic.

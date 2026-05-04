---
version: alpha
name: Legend
description: Legend employs a stark, almost architectural interface, leveraging precise typography and a highly restrained achromatic color palette. A single vivid violet provides a 'switched-on' accent, pulling focus to key data points or interactive elements without overwhelming the clean surfaces. Components are lightweight and subtly defined, often through borders or slight shifts in gray rather than heavy fills, creating an experience that feels understated yet highly functional.
colors:
  canvas-white: "#ededed"
  ink-black: "#000000"
  deep-gray: "#131313"
  medium-gray: "#949494"
  light-gray: "#b2b2b2"
  muted-gray: "#6c6c6c"
  outline-gray: "#474747"
  button-gray: "#2d2d2d"
  background-gray: "#dedddc"
  accent-violet: "#8931c4"
  muted-forest-gradient: "#9c9991"
  charcoal-dawn-gradient: "#655c5b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
    letterSpacing: 0.66px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.22px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.44px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.4
    letterSpacing: -0.56px
spacing:
  cardRadius: 32px
  buttonRadius: 4px
  elementGap: 20px
  sectionGap: 68px
components:
  navigation-item:
    role: Text link within the primary navigation bar.
  primary-ghost-button:
    role: Text-only button with a transparent background.
  secondary-filled-button:
    role: Contained button for secondary actions.
  navigation-utility-button:
    role: Button within the utility navigation area (e.g. download button, menu icon).
  product-display-card:
    role: Showcases key data or features, like a phone screen rendering.
  expandable-content-header:
    role: Header for an accordion-style content section.
---

## Overview

**North Star:** Architectural blueprint on white marble

Legend employs a stark, almost architectural interface, leveraging precise typography and a highly restrained achromatic color palette. A single vivid violet provides a 'switched-on' accent, pulling focus to key data points or interactive elements without overwhelming the clean surfaces. Components are lightweight and subtly defined, often through borders or slight shifts in gray rather than heavy fills, creating an experience that feels understated yet highly functional.

### Do's

- Use Canvas White (#ededed) as the default page background to maintain a bright, expansive canvas.
- Apply Deep Gray (#131313) for cards or elevated content blocks to create subtle visual layering.
- Reserve Accent Violet (#8931c4) exclusively for key headlines, interactive states, and essential data points.
- Utilize knapp font family with its defined weights and line heights for all primary text content.
- Employ diatypeMono font for coordinates, technical details, or any data requiring a fixed-width presentation.
- Ensure buttons and interactive elements use either 4px or 8px border radius, as defined by their type (e.g., 4px for action buttons, 8px for nav buttons).
- Maintain a consistent 20px elementGap to structure content with comfortable breathing room.

### Don'ts

- Do not introduce new saturated colors; the palette is intentionally monochromatic with a single accent.
- Avoid heavy drop shadows or excessive elevation; the system relies on subtle borders and background shifts for depth.
- Do not use generic font sizes; always refer to the established type scale (e.g., 56px for display, 16px for body).
- Never embed branding or illustrative elements that clash with the crisp, technical aesthetic.
- Do not use letter-spacing values other than the ones defined for knapp and diatypeMono.
- Avoid arbitrary border radii; adhere strictly to 4px, 8px, 12px, and 32px for specific components.
- Do not introduce gradients unless they are the Muted Forest Gradient or Charcoal Dawn Gradient, and only in defined background contexts.

### Layout

The page adheres to a max-width of 1416px, content is horizontally centered. The hero section uses a full-bleed background often incorporating subtle gradients and misty landscapes, with primary headlines stacked centrally. Subsequent sections alternate between full-width informational blocks and symmetrical two-column layouts featuring text on one side and a product screenshot or visual on the other. Vertical rhythm is established with a consistent section gap, creating a spacious and composed feel. Navigation is a fixed top bar on larger screens, highly utilitarian with minimal styling.

### Imagery

Imagery is predominantly product screenshots of a mobile application, presented in a clean, isolated style with very soft, diffused backgrounds that sometimes feature muted, out-of-focus naturalistic elements like hills or mist, often with a slight violet tint from the brand's accent color. Graphics are minimal, typically monochromatic icons or subtle geometric shapes, featuring fine outlines and filled states. The overall density of imagery is balanced, serving to exemplify product features rather than purely decorative atmospheric elements.

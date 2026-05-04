---
version: alpha
name: Super
description: This system projects an image of focused utility and quiet confidence, using a stark black-on-white text, highlighted by a single vibrant yellow accent. The design leans into sharp contrasts and subtle textural variations in its neutral palette, allowing content to take center stage without visual noise. Generous padding around elements creates a sense of airiness, emphasizing the digital-first nature of the product.
colors:
  amber-glow: "#ffbe3c"
  obsidian: "#111111"
  charcoal-black: "#262a2"
  warm-gray: "#37352f"
  cool-stone: "#4d545c"
  dusk-gray: "#66707a"
  pale-ash: "#808c99"
  light-mist: "#ccd1d6"
  frosted-linen: "#f9f9f8"
  pure-white: "#ffffff"
  midnight-void: "#090909"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.52px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: -0.75px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.13
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -2.5px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 4-16px
  sectionGap: 45-96px
components:
  cta-button-group:
    role: 
  trusted-by-logos-banner:
    role: 
  how-it-works-dark-feature-cards:
    role: 
  primary-action-button:
    role: Calls to action
  outline-ghost-button:
    role: Secondary actions
  subtle-link-button:
    role: Tertiary actions, inline links acting as buttons
  dark-mode-button:
    role: Actions within dark sections
  feature-card-light:
    role: Showcasing product features or benefits in a grid
  feature-card-dark:
    role: Showcasing product features or benefits in a grid within dark sections
  circular-badge:
    role: Small informational labels or status indicators
---

## Overview

**North Star:** Black text on parchment-white, illuminated by a single amber light.

This system projects an image of focused utility and quiet confidence, using a stark black-on-white text, highlighted by a single vibrant yellow accent. The design leans into sharp contrasts and subtle textural variations in its neutral palette, allowing content to take center stage without visual noise. Generous padding around elements creates a sense of airiness, emphasizing the digital-first nature of the product.

### Do's

- Prioritize Charcoal Black (#262a2e) for all primary body text, ensuring high contrast on light backgrounds.
- Use Amber Glow (#ffbe3c) exclusively for primary call-to-action buttons and active state indicators.
- Apply 8px corner radius consistently to all cards and buttons, promoting a unified soft-edged appearance.
- Maintain a clear visual hierarchy by utilizing Beausite's varied weights and sizes, especially -0.0390em letter spacing for 64px headlines.
- Implement the card shadow `rgba(0, 0, 0, 0.02) 58px 88px 57px 0px` for all elevated content cards to provide subtle depth.
- Employ Frosted Linen (#f9f9f8) or Pure White (#ffffff) as the dominant background colors for all light-themed content sections.

### Don'ts

- Do not introduce new saturated colors; maintain Amber Glow (#ffbe3c) as the sole accent.
- Avoid using flat shadows; instead, apply the multi-layer progressive shadow for all elevated components.
- Do not deviate from the specified padding for buttons (e.g., 13px top, 16px horizontal, 14px bottom) to maintain consistent click targets.
- Do not use letter spacing greater than 0; the inherent negative letter-spacing for larger type sizes is a brand characteristic.
- Do not use default browser link colors like #0000EE for styled elements; map to an appropriate brand or neutral color if links are intended to be interactive secondary elements.

### Layout

The layout primarily adheres to a centered maximum width (implied, not explicit in data for pageMaxWidth but evident in visual alignment). The hero section is full-width, utilizing a soft, abstract background while anchoring content centrally. Sections alternate between light (Frosted Linen / Pure White) and dark (Midnight Void / Charcoal Black) backgrounds, creating a clear vertical rhythm and delineation of content blocks. Elements within sections often adopt multi-column layouts, such as two-column text-and-image, or grid-based card displays for features. Ample vertical spacing is used between sections, ensuring breathability and reducing perceived density. Navigation is a sticky top bar with a primary CTA.

### Imagery

The site uses a combination of abstract, subtle background graphics in the hero that appear almost like frosted glass, and prominent product screenshots. Product screenshots are contained within device mockups or card-like structures, showcasing the UI in a practical context. Logos for 'Trusted by teams at' are monochrome (Obsidian or Charcoal Black) ensuring they integrate seamlessly. Icons are minimal, likely filled, and black, maintaining functional clarity. The overall impression is content-heavy but balanced with clear visual examples, focusing on product function rather than decorative imagery.

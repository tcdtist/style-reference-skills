---
version: alpha
name: SwimClub
description: SwimClub projects authority through a deliberate contrast of quiet, near-monochromatic UI with a singular vivid orange accent, and a blend of modern grotesk typography with a distinctive pixelated display font for key statistics. The design feels grounded and scientific, utilizing strong visual hierarchy and a comfortable density. Subtle gradients add depth to backgrounds, while component treatments remain lightweight, emphasizing content over heavy decoration.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  atlantic-fog: "#d2dce1"
  mid-gray: "#666666"
  silver-dust: "#b3b3b3"
  sunset-orange: "#ff9e00"
  oceanic-gradient: "#417390"
  subtle-surface-gradient: "#d2dce0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.7
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.7
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 37px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.05
  display:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1.05
spacing:
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 120px
components:
  primary-ghost-button:
    role: Interactive element, calls to action
  filled-white-button:
    role: Interactive element, calls to action
  subtle-accent-button:
    role: Secondary interactive element, filtering, categorization
  muted-border-button:
    role: Tertiary interactive element, inactive states
  text-input-default:
    role: Form element
  info-card:
    role: Content container, feature display
  highlight-section:
    role: Prominent information display
---

## Overview

**North Star:** Scientific precision, stark contrast

SwimClub projects authority through a deliberate contrast of quiet, near-monochromatic UI with a singular vivid orange accent, and a blend of modern grotesk typography with a distinctive pixelated display font for key statistics. The design feels grounded and scientific, utilizing strong visual hierarchy and a comfortable density. Subtle gradients add depth to backgrounds, while component treatments remain lightweight, emphasizing content over heavy decoration.

### Do's

- Prioritize Px Grotesk for all body and heading text, reserving Apercu Mono Pro for technical details and Swimclub for large numerical displays.
- Use Midnight Ink (#000000) for primary text on light backgrounds and Canvas White (#ffffff) for text on dark or Sunset Orange (#ff9e00) backgrounds to maintain contrast.
- Employ Atlantic Fog (#d2dce1) as the default background for general page sections, creating a subtle visual distinction from pure white content blocks.
- Maintain a strict 0px border-radius for all interactive elements and containers, emphasizing a sharp, precise brand aesthetic.
- Utilize liberal padding, especially '32px' for cards and buttons, and '120px' for vertical section gaps, to create a comfortable, spacious layout.
- Employ the Oceanic Gradient as a background for hero sections or prominent visual blocks to introduce subtle depth and visual interest.
- Use Sunset Orange (#ff9e00) sparingly as an accent color for highlight sections or critical information, ensuring it stands out against the neutral palette.

### Don'ts

- Avoid using rounded corners; the system's aesthetic is defined by sharp, precise edges.
- Do not introduce additional vibrant colors; Sunset Orange (#ff9e00) is the only chromatic accent.
- Refrain from using heavy shadows or complex elevation; components should feel grounded and part of the surface.
- Do not deviate from the specified typography families, weights, or the intentional use of Apercu Mono Pro for data and Swimclub for large numbers.
- Avoid tight spacing; maintain the comfortable density with `120px` section gaps and `32px` card/button padding.
- Do not use gradients as primary fills for interactive elements; they are reserved for background depth.
- Introduce no new border styles beyond solid 1px lines; the system relies on clean, unambiguous divisions.

---
version: alpha
name: Shopify
description: Shopify's visual design embodies a 'midnight command center' aesthetic, contrasting deep, near-black surfaces with crisp, luminous text. The use of a vivid, slightly desaturated green as the primary accent color injects a dynamic energy against the dark backdrop, appearing precisely where interactivity or emphasis is needed. Typography, featuring a custom variable font 'NeueHaasGrotesk', maintains clarity and a subtle technical feel, further enhanced by precise letter-spacing. Shadows are subtle but add discernible depth, creating a refined, multi-layered dark interface.
colors:
  pitch-black: "#000000"
  deep-ocean: "#02090a"
  charcoal-grey: "#061a1c"
  steel-gaze: "#1e2c31"
  twilight-indigo: "#000a10"
  abyssal-violet: "#010624"
  dark-forest: "#072720"
  snowdrift: "#ffffff"
  ash-grey: "#a1a1aa"
  cloud-mist: "#e5e7eb"
  jade-glow: "#36f4a4"
  muted-sage: "#99b3ad"
  aurora-blue: "#1260ff"
  mystic-teal: "#157076"
  synthwave-sunset: "#5fd5b6"
  deep-sea-gradient: "#244749"
  dark-inlet-gradient: "#0a2c30"
  chromatic-orb-gradient: "#3e4646"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.072px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.015px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0.04px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.28
    letterSpacing: -0.42px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.16
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.96
    letterSpacing: -1.44px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Interactive element
  ghost-button-subtle:
    role: Interactive element
  ghost-button-outlined:
    role: Interactive element
  hero-card-dark-elevated:
    role: Information display
  interactive-card-light-border:
    role: Interactive element
  content-card-minimal:
    role: Content container
  overlay-card-light:
    role: Information display
---

## Overview

**North Star:** Midnight Command Center: A sophisticated dark interface, both precise and dynamically lit.

Shopify's visual design embodies a 'midnight command center' aesthetic, contrasting deep, near-black surfaces with crisp, luminous text. The use of a vivid, slightly desaturated green as the primary accent color injects a dynamic energy against the dark backdrop, appearing precisely where interactivity or emphasis is needed. Typography, featuring a custom variable font 'NeueHaasGrotesk', maintains clarity and a subtle technical feel, further enhanced by precise letter-spacing. Shadows are subtle but add discernible depth, creating a refined, multi-layered dark interface.

### Do's

- Use `Deep Ocean` (#02090a) as the default canvas background for most sections to maintain a consistent dark theme.
- Accent interactive elements with `Jade Glow` (#36f4a4) for emphasis, such as active navigation items or highlighted links.
- Apply a `9999px` border-radius from the 'radius' token for all primary and ghost buttons to achieve a consistent pill shape.
- Employ `NeueHaasGrotesk` with `weight 330` for large display headings (e.g., 70px, 96px) to create a sophisticated, restrained presence, rather than strong visual shouting.
- Utilize `Snowdrift` (#ffffff) for primary text on dark backgrounds and for backgrounds of filled buttons.
- For cards and elevated surfaces, use `Charcoal Grey` (#061a1c) with the specified card shadow to delineate distinct content blocks.
- Set text color to `Ash Grey` (#a1a1aa) for secondary information, muted links, or disabled states to indicate diminished priority.

### Don'ts

- Avoid using bright, saturated colors for full sections or large background areas; reserve these for accents and dynamic elements.
- Do not deviate from the `9999px` pill shape for buttons or `12px` for cards, as these radii are central to the brand's identity.
- Refrain from heavy, intense shadows on `Deep Ocean` backgrounds, as the system relies on subtle shadow progressions and background color shifts for depth.
- Do not use `Pitch Black` (#000000) for primary canvas backgrounds; it is intended for the footer and specific text elements to achieve high contrast.
- Avoid using `Inter-Variable` for large display headings; its optimized legibility is for functional, smaller text sizes below 20px.
- Never use `Snowdrift` (#ffffff) as the primary background for full page sections, as it is mainly for text, buttons, and specific elevated overlays.
- Do not introduce additional accent colors; stick to `Jade Glow` (#36f4a4) for emphasis against the dark background.

### Layout

The layout is primarily a max-width contained structure, with some full-bleed sections, particularly for hero banners and background visuals. The hero section features a full-bleed dark background with a centered, prominent headline and calls to action. Section rhythm is driven by consistent vertical spacing and alternating background colors (dark canvas vs. slightly darker cards or gradient sections), creating visual breaks. Content is arranged in alternating text-left/image-right or centered stacks, with card grids appearing for feature showcases. The site is text-dominant in informational blocks but uses large hero images for visual impact. A sticky top navigation bar provides consistent access.

### Imagery

This design primarily uses photography within contained card elements or as large, immersive background elements often overlaid with dark gradients. Product photography is typically lifestyle-oriented, showcasing human interaction or aspirational scenes, often desaturated or subtly tinted to blend with the dark interface. Illustrations are minimal, hinted at by abstract graphic patterns in background gradients. Icons are typically mono-color, in `Snowdrift` or `Jade Glow`, outlining essential functions. Images serve both decorative atmosphere and explanatory content roles, creating an engaging visual narrative without overwhelming the UI.

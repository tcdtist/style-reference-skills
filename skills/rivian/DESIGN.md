---
version: alpha
name: Rivian
description: This system evokes a sense of understated power and refined utility, much like the vehicles it represents. It balances a strong, nearly achromatic palette with crisp typography and subtle interactive accents. The aesthetic is anchored by deep blacks and bright whites, creating high contrast that feels purposeful rather than stark, while carefully articulated letter-spacing at larger type sizes adds a layer of precision. Rounded corners are reserved almost exclusively for interactive elements, softening points of engagement within an otherwise clean, angular visual language.
colors:
  midnight-ink: "#000000"
  arctic-white: "#ffffff"
  slate-gray: "#151515"
  cloud-drifter: "#f2f2f2"
  ash-concrete: "#e5e7eb"
  dark-asphalt: "#212121"
  chrome-accent: "#cfd0d0"
  sunbeam-yellow: "#ffac00"
  forest-green: "#629b5c"
  desert-orange: "#e84826"
  ocean-blue: "#77afd8"
  sapphire-glow: "#0066ff"
  vivid-green: "#7af400"
  dark-forrest-gradient: "#252826"
  horizon-fade-gradient: "#f2f2f2"
  abyss-blue-gradient: "#000000"
  success: "#4a8231"
  error: "#dc3127"
  warning: "#d58103"
  info: "#005e7d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.55
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: -0.672px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
    letterSpacing: -0.9px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.13
    letterSpacing: -1.364px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.11
    letterSpacing: -2.016px
  display-3xl:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.09
    letterSpacing: -3.024px
  display-4xl:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1.07
    letterSpacing: -5.4px
spacing:
  buttonRadius: 40px
  elementGap: 4-28px
  sectionGap: 24-48px
components:
  hero-promo-banner-with-cta-buttons:
    role: 
  vehicle-info-card-r1s:
    role: 
  location-selector-dropdown:
    role: 
  primary-filled-button-arctic-white:
    role: Primary Call-to-Action
  primary-filled-button-midnight-ink:
    role: Inverted Primary Call-to-Action
  ghost-button-arctic-white:
    role: Secondary Call-to-Action
  ghost-button-midnight-ink:
    role: Secondary Call-to-Action on light backgrounds
  link-button:
    role: Tertiary Call-to-Action
  default-card:
    role: Content Grouping
  login-input-field:
    role: Data Entry
---

## Overview

**North Star:** Subtle Power, Precision Engineering.

This system evokes a sense of understated power and refined utility, much like the vehicles it represents. It balances a strong, nearly achromatic palette with crisp typography and subtle interactive accents. The aesthetic is anchored by deep blacks and bright whites, creating high contrast that feels purposeful rather than stark, while carefully articulated letter-spacing at larger type sizes adds a layer of precision. Rounded corners are reserved almost exclusively for interactive elements, softening points of engagement within an otherwise clean, angular visual language.

### Do's

- Prioritize 'Adventure' font for all text, applying specific letter-spacing for display sizes 20px and above, ensuring a precise, technical feel.
- Use `Midnight Ink` (#000000) for primary text on `Arctic White` (#ffffff) backgrounds, and `Arctic White` (#ffffff) text on `Midnight Ink` (#000000) backgrounds for maximum contrast and readability.
- Apply a 40px border radius to all primary and secondary buttons, crafting an approachable, modern form factor.
- Employ the `Sunbeam Yellow` (#ffac00) as the high-visibility accent color for primary call-to-action buttons, creating a deliberate focal point.
- Maintain minimal padding within cards (0px), allowing content to define its own space and emphasizing a clean, unadorned aesthetic.
- Utilize dark backgrounds like `Dark Forrest Gradient` or `Abyss Blue Gradient` for hero sections to create a premium, immersive brand introduction.
- Incorporate subtle, desaturated background colors like `Ash Concrete` (#e5e7eb) and `Cloud Drifter` (#f2f2f2) for section separation while maintaining visual lightness.

### Don'ts

- Do not use box-shadows for elevation; rely on color shifts between surfaces to indicate depth, maintaining a flat, modern impression.
- Avoid generic border radii; use the specified 40px for buttons and 4px for inputs, reserving other radii sparingly for specific elements.
- Do not introduce additional vibrant hues beyond the established accent colors (`Sunbeam Yellow`, `Forest Green`, `Desert Orange`, `Ocean Blue`), maintaining the sophisticated monochromatic base.
- Refrain from heavy text ornamentation like underlines or excessive bolding; the type scale and precise letter-spacing are sufficient for visual hierarchy.
- Do not use generic system fonts; 'Adventure' is critical for brand identity, with 'Liga' for monumental statements and 'Sohne' for microcopy.
- Do not use static header navigation on lighter body content; ensure it appears on a dark background or with an appropriate transparent overlay to match the brand aesthetic.
- Avoid cluttering card or section backgrounds with gradients – use them strategically for dramatic full-width hero or major content blocks only.

### Layout

The page primarily uses a max-width contained layout, approximately 1200-1400px, centered on the screen. Hero sections are exceptions, often full-bleed with dramatic photography or large typography over gradient backgrounds, serving as impactful entry points. Content is typically arranged in balanced two-column layouts featuring text alongside visuals (vehicles), or stacked centered content blocks. Sections are clearly delineated by varied backgrounds (light gray, white, or dark gradients), often creating a subtle alternating rhythm down the page. Navigation is a sticky top bar with clear, minimalist links and distinct accent buttons.

### Imagery

Photography is the dominant visual medium, featuring vehicles in both studio settings (tight product crops on white/gray gradients) and natural, outdoor environments (mountain roads, urban landscapes). The treatment emphasizes the vehicle as the primary subject, often full-bleed or large-scale, conveying capability and lifestyle without explicit human interaction. Photography is high-key in outdoor shots, showcasing clarity and detail, while studio shots lean towards dramatic lighting. Icons are minimal, outlined, and monochromatic, integrated subtly into the UI rather than serving as prominent visual elements.

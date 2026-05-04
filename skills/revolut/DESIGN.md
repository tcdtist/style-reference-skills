---
version: alpha
name: Revolut
description: The design feels like viewing an epic, cinematic world through the clean, clear interface of a premium device. Full-bleed, aspirational photography in hero sections sets a global, adventurous tone, suggesting the life the product enables. This cinematic feel is grounded by an incredibly strict, almost entirely achromatic color palette, where stark white content blocks sit against pure black or photo backgrounds. The display font, Aeonik Pro, is used with tight negative letter-spacing, giving headlines a precise, architectural quality. This tension between expansive human imagery and minimalist, geometric typography defines the system's identity: aspirational but controlled, powerful but simple.
colors:
  revolut-black: "#191c1f"
  cloud-white: "#f4f4f4"
  pure-white: "#ffffff"
  onyx-black: "#000000"
  slate-gray: "#8d969"
  ash: "#505a63"
  pebble: "#c9c9cd"
  light-tint: "#ebebf0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
    letterSpacing: -0.07px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.19
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.17
    letterSpacing: -1.22px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 89px
    lineHeight: 1
    letterSpacing: -2.05px
spacing:
  cardRadius: 20px
  buttonRadius: 9999px
  sectionGap: 96px
components:
  button-group-primary-dark-primary-light-ghost:
    role: 
  social-proof-stats-awards-block:
    role: 
  savings-feature-card-interest-rate-cta:
    role: 
  primary-cta-button-light:
    role: The main sign-up and affirmative action button.
  primary-cta-button-dark:
    role: The main action button for use on dark or photographic backgrounds.
  ghost-button-on-dark:
    role: Secondary action on dark or photographic backgrounds, like 'Explore'.
  navigation-link-button:
    role: Top-level navigation items in the header.
  language-selector-button:
    role: Small utility button for selecting country/region.
  app-ui-frame:
    role: A container that visually represents the mobile app screen.
  award-logo-card:
    role: Container for displaying third-party award and partner logos.
---

## Overview

**North Star:** financial passport to the world

The design feels like viewing an epic, cinematic world through the clean, clear interface of a premium device. Full-bleed, aspirational photography in hero sections sets a global, adventurous tone, suggesting the life the product enables. This cinematic feel is grounded by an incredibly strict, almost entirely achromatic color palette, where stark white content blocks sit against pure black or photo backgrounds. The display font, Aeonik Pro, is used with tight negative letter-spacing, giving headlines a precise, architectural quality. This tension between expansive human imagery and minimalist, geometric typography defines the system's identity: aspirational but controlled, powerful but simple.

### Do's

- Use Aeonik Pro with significant negative letter-spacing for all display and headline text.
- Restrict the palette almost exclusively to white (#ffffff), off-white (#f4f4f4), black (#000000), and near-black (#191c1f).
- Employ full-bleed, cinematic photography for all hero sections.
- Always use 9999px radius pill-shaped buttons for primary and secondary actions.
- Center-align all headline and sub-headline text blocks within their sections.
- Juxtapose full-bleed photo sections with stark, solid #ffffff background sections.
- Maintain generous vertical whitespace (96px+) between major page sections.

### Don'ts

- Do not introduce any saturated brand or accent colors. The photos provide the only color.
- Do not use box-shadows for elevation. The design is intentionally flat.
- Do not use traditional, sharp-cornered (e.g., 4px-8px radius) buttons.
- Do not use system fonts like Arial or Helvetica for headlines; it will break the brand identity.
- Do not left-align hero content. The centered stack is a core pattern.
- Do not use complex card layouts. Keep content blocks simple and direct.
- Do not make content containers full-width; use the 1200px max-width for readability.

### Layout

The page structure is a series of stacked, centered blocks. Hero sections are full-bleed, using the entire viewport width with large, centered typography. Subsequent content sections are constrained within a 1200px maximum width, also with centered content. This creates a strong vertical rhythm, moving from an immersive photographic experience to a focused, readable content block on a solid white background. Grids are simple and reserved for utilitarian purposes like displaying partner logos. There is a strong preference for generous negative space between sections.

### Imagery

Photography is the primary visual language, serving as an aspirational backdrop rather than direct product showcase. Images are high-quality, cinematic, and depict people in expansive, natural landscapes (mountains, skies). This 'human adventure' theme is consistently used in full-bleed hero sections, often with a subtle dark overlay to ensure text legibility. App UI mockups are frequently superimposed directly onto this photography, creating a direct link between the user's life and the digital tool. The style is never product-in-hand; it's always life-first, with the product as an invisible enabler.

### Elevation

The design is intentionally flat, avoiding box-shadows entirely. Depth and hierarchy are created through color (light on dark), scale (large typography), and layout (generous spacing), not simulated elevation. This reinforces the clean, graphic, and modern aesthetic.

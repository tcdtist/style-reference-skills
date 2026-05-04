---
version: alpha
name: Pally
description: Pally presents a dark-mode interface, creating a contained, focused experience. UI surfaces are predominantly deep charcoal, accented by a subtle, almost ethereal gradient for hero elements and interactive components. Typography is crisp and minimal, embracing negative tracking to maintain sophistication even at larger display sizes. Components are lightweight with large border radii, suggesting a friendly yet refined digital identity.
colors:
  midnight-slate: "#161e29"
  ghost-white: "#fefcfb"
  off-white-canvas: "#eae5dd"
  carbon-text: "#1e1d1d"
  faded-steel: "#b8b9bc"
  light-steel: "#d0d0d1"
  cosmic-gradient: "#e9b3f2"
  deep-space-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: -0.56px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.92px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.9
    letterSpacing: -3.84px
spacing:
  cardRadius: 12px
  buttonRadius: 100px
  elementGap: 10px
  sectionGap: 80px
components:
  primary-waitlist-button:
    role: Button
  dark-mode-card:
    role: Card
  light-mode-feature-card:
    role: Card
  navigation-link:
    role: Link
---

## Overview

**North Star:** Deep space command center

Pally presents a dark-mode interface, creating a contained, focused experience. UI surfaces are predominantly deep charcoal, accented by a subtle, almost ethereal gradient for hero elements and interactive components. Typography is crisp and minimal, embracing negative tracking to maintain sophistication even at larger display sizes. Components are lightweight with large border radii, suggesting a friendly yet refined digital identity.

### Do's

- Prioritize Midnight Slate (#161e29) for all primary background surfaces to maintain the deep, dark aesthetic.
- Apply negative letter-spacing from the Test Untitled Sans font to all headlines and display text, specifically -0.0600em for 64px and -0.0400em at 48px, for a sophisticated feel.
- Use a 100px border-radius for all interactive buttons and form fields to create a consistent soft, pill-shaped UI element.
- Employ the Cosmic Gradient (linear-gradient rgb(233, 179, 242) 22%, rgb(152, 104, 204) 74%, rgb(95, 77, 189) 100%) for impactful hero sections and subtle brand highlights.
- Maintain a clear visual hierarchy using Ghost White (#fefcfb) for primary text and Midnight Slate (#161e29) for primary backgrounds in dark mode, ensuring strong contrast (16.4:1 ratio).

### Don'ts

- Avoid using bright, saturated colors for large UI elements; color should serve as subtle accent or dynamic interactive effects, not primary surface color.
- Do not deviate from the established large border radii (100px for buttons, 12px for cards); sharp corners conflict with the brand's soft, modern aesthetic.
- Do not use generic, default sans-serif fonts; custom font 'Test Untitled Sans' with its specific tracking is crucial for brand identity.
- Avoid adding heavy shadows or excessive elevation; the design relies on subtle gradients and distinct surface colors for depth.
- Do not use small, dense line heights for body text; ensure adequate line-height for readability, especially with the negative letter-spacing.

### Layout

The page primarily uses a full-bleed layout for the main background (Midnight Slate), which is then overlaid with a contained max-width content area for text and components. The hero section features a centered headline and subtext, often against an atmospheric gradient background. Content sections flow vertically with consistent 80px section gaps. There's a subtle use of a two-panel layout for feature explanations, alternating content left/right. The header is sticky, compact, and centrally aligned, providing essential navigation.

### Imagery

This design system uses abstract, blurred organic shapes for atmosphere, often with gradients (Cosmic Gradient). Product screenshots are integrated directly, appearing as floating UI elements on the dark background, maintaining the dark mode aesthetic within the product visuals themselves. Icons, when present, are subtly glowing or outlined. Imagery is used to set a mood and illustrate product functionality in a non-literal, atmospheric way rather than showing direct product-in-use photography. The density of imagery is balanced, with a few key visuals commanding attention against otherwise minimalist UI.

---
version: alpha
name: Bento
description: Linktree employs a vibrant, high-contrast visual system built around playful, oversized typography and boldly colored, flat surfaces. The design makes liberal use of curved shapes, particularly extreme pill-like radii, creating a soft yet dynamic feel. Color functions primarily as an energetic accent, rotating through vivid primary and secondary hues to delineate sections and highlight interactive elements, while core content remains anchored by highly legible black text on clean white or near-white backgrounds. Components are lightweight with minimal elevation, emphasizing color and shape over heavy borders or shadows.
colors:
  ink: "#1e2330"
  pure-white: "#ffffff"
  marble-fog: "#f3f3f1"
  ash-concrete: "#676b5f"
  charcoal-grey: "#222222"
  chartreuse-kick: "#d2e823"
  hydrangea-bold: "#2665d6"
  lavender-pop: "#e9c0e9"
  iris-deep: "#061492"
  dahlia-grape: "#502274"
  crimson-currant: "#780016"
  forest-green: "#254f1a"
  marigold-gold: "#d6a337"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.19px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.31
    letterSpacing: -0.58px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.56px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.06
    letterSpacing: -2.2px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -1.6px
spacing:
  cardRadius: 32px
  buttonRadius: 99px
  elementGap: 10px
  sectionGap: 48px
components:
  pill-accent-button:
    role: Primary calls to action
  filled-square-button:
    role: Secondary action buttons, form submission
  ghost-text-button:
    role: Tertiary actions, navigation links
  navigation-link:
    role: Top navigation items
  hero-section-card:
    role: Decorative content containers
  colored-feature-card:
    role: Highlighting key features or statistics
  input-field:
    role: User data entry
---

## Overview

**North Star:** Vibrant, playful canvases

Linktree employs a vibrant, high-contrast visual system built around playful, oversized typography and boldly colored, flat surfaces. The design makes liberal use of curved shapes, particularly extreme pill-like radii, creating a soft yet dynamic feel. Color functions primarily as an energetic accent, rotating through vivid primary and secondary hues to delineate sections and highlight interactive elements, while core content remains anchored by highly legible black text on clean white or near-white backgrounds. Components are lightweight with minimal elevation, emphasizing color and shape over heavy borders or shadows.

### Do's

- Use Chartreuse Kick (#d2e823) for primary call-to-action buttons, ensuring a 99px border-radius and Ink (#1e2330) text.
- Apply extreme large border radii (64px, 1000px) to decorative cards and feature blocks to maintain a playful aesthetic.
- Prioritize Linksans Linksansvf or Linksans for all headings and subheadings, adjusting letter-spacing according to the specified type scale for visual cohesion.
- Maintain a clear visual hierarchy by using Pure White (#ffffff) or Marble Fog (#f3f3f1) as background for most content areas, contrasted with Ink (#1e2330) text.
- Employ the specified brand colors – Chartreuse Kick, Hydrangea Bold, Lavender Pop, Iris Deep, Dahlia Grape, Crimson Currant, Forest Green, Marigold Gold – as vibrant, full-block section backgrounds on a rotating basis.
- Use Arial for standard body text at 16px to ensure optimal readability for longer passages.
- Apply 10px as the default elementGap for consistency in vertical spacing between discrete UI elements.

### Don'ts

- Avoid using drop shadows on cards or buttons; the design system relies on color, shape, and bold typography for visual differentiation.
- Do not introduce new color hues; strictly adhere to the defined brand and neutral palettes to maintain brand consistency.
- Do not deviate from the specified border-radii; the curved aesthetic is a core part of the brand identity making specific values critical.
- Avoid using subtle grays for interactive elements; actions should be clearly distinguished with vibrant brand colors.
- Do not use generic system fonts for display or heading text; it dilutes the distinctive typographic voice.
- Do not apply padding or margins that break the established elementGap (10px) and sectionGap (48px) rhythm.
- Do not use less than 20px vertical padding on primary buttons; the generous padding is integral to their confident presence.

### Layout

The page uses a maximum content width of 1504px, with content centered. The hero section is full-bleed, aggressively using a brand color as its background (e.g., Chartreuse Kick or Hydrangea Bold) with large, bold, centered typography. Subsequent sections alternate between vibrant solid color backgrounds and Pure White or Marble Fog, creating clear visual segmentation. Content arrangement frequently features large, centered headlines followed by a button, or alternating text-left / visual-right layouts. Card grids are used for features, showcasing product benefits within a collection of creatively shaped and colored containers. The layout is spacious with distinct vertical section spacing, lending an open and friendly feel. A sticky top navigation bar provides consistent access to key sections.

### Imagery

Linktree primarily uses product screenshots and contained lifestyle photography for branding, often with a unique treatment. Product-focused imagery is presented full-bleed or within cards, frequently tinted or placed on brand-colored backgrounds, with rounded corners of varying degrees (from 8px to extreme 1000px pills and 64px large radii). Photography is high-key, vibrant, and features people interacting with digital products or engaging in creative activities. Illustrations are simple, filled, geometric, and often utilize the brand's vibrant color palette, serving decorative and explanatory roles. Icons are filled and monochromatic, complementing the flat UI. Visual density is moderate, allowing imagery to break up text-heavy sections and act as visual anchors.

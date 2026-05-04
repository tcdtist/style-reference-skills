---
version: alpha
name: Zapier
description: This design system prioritizes a muted, approachable aesthetic with a core palette centered around a soft, almost 'parchment' white and black. Accents of vivid orange provide directional guidance and visual energy without overwhelming the understated neutrals. The use of custom typefaces at distinct weights lends a sophisticated, editorial feel to headlines, counterbalancing the otherwise utilitarian Inter for body copy. The overall effect is one of quiet efficiency, welcoming users with soft tones and clear hierarchies.
colors:
  parchment-white: "#fffefb"
  ember-orange: "#ff4f00"
  ink-black: "#201515"
  slate-gray: "#36342"
  ash-gray: "#413735"
  stone-taupe: "#c5c0b1"
  soft-off-white: "#f8f4f0"
  cool-steel: "#2d2e2"
  google-red: "#ea4335"
  google-green: "#34a853"
  google-blue: "#4285f4"
  google-yellow: "#fbbc05"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: 0.33px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -1.6px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: 1.68px
spacing:
  buttonRadius: 4px
  elementGap: 4-16px
  sectionGap: 48-80px
components:
  cta-button-group:
    role: 
  ai-template-cards:
    role: 
  banner-notification-badge-pills:
    role: 
  primary-action-button:
    role: Call to action
  secondary-ghost-button:
    role: Secondary action
  navigation-button:
    role: Navigation item
  google-auth-button:
    role: Authentication
  standard-card:
    role: Content grouping
  input-field:
    role: User input
  banner-notification:
    role: Announcements
  utility-grid-card:
    role: UI element wrapper
---

## Overview

**North Star:** Warm parchment paper, gently lit.

This design system prioritizes a muted, approachable aesthetic with a core palette centered around a soft, almost 'parchment' white and black. Accents of vivid orange provide directional guidance and visual energy without overwhelming the understated neutrals. The use of custom typefaces at distinct weights lends a sophisticated, editorial feel to headlines, counterbalancing the otherwise utilitarian Inter for body copy. The overall effect is one of quiet efficiency, welcoming users with soft tones and clear hierarchies.

### Do's

- Prioritize Ember Orange (#ff4f00) for all primary calls to action to ensure consistent visual hierarchy and actionability.
- Use Parchment White (#fffefb) as the dominant background, ensuring visual lightness and breathability across all content.
- Apply GT Alpina (weights 250, 300, letter-spacing -0.0400em) exclusively for main page headlines to achieve an understated, sophisticated impact.
- Employ a 4px border-radius for interactive elements like buttons and cards, creating a consistent, subtly rounded aesthetic.
- Maintain a clear contrast ratio by using Ink Black (#201515) for main body text against Parchment White (#fffefb) backgrounds.
- Utilize the 12px vertical and 24px horizontal padding for primary buttons to ensure a comfortable tap target and visual prominence.

### Don'ts

- Avoid using highly saturated colors other than Ember Orange or Google brand accents, to preserve the system's muted aesthetic.
- Do not introduce strong drop shadows; rely on background color changes or subtle borders for element separation.
- Refrain from using GT Alpina for body text or navigation; its delicate weights are reserved for high-impact headlines only.
- Do not deviate from the 4px or 0px border-radius for core interactive components; other radii are for specific functional exceptions.
- Avoid tight line spacing for body text; use Inter's default line heights (e.g., 1.5 for 16px) for optimal readability.
- Do not use generic system fonts when custom fonts are specified; Degular Display and GT Alpina are critical for brand identity.

### Layout

The page model is primarily max-width contained, with a centered content area on a Parchment White background, giving ample whitespace on the margins. The hero section features a centered headline and CTA over the Parchment White background, paired with a prominent abstract 3D graphic. Section rhythm is managed through consistent vertical spacing (large `sectionGap` likely 48-80px), occasionally punctuated by a subtle background color change to Soft Off-White for visual breaks. Content is often arranged in a split-layout (text-left/image-right or vice versa) or stacked, centered blocks. There's clear usage of 3-column card grids for feature showcases, maintaining consistent internal padding and radii. The navigation is a sticky top bar with a logo, left-aligned standard dropdowns, and right-aligned action buttons.

### Imagery

The visual language for imagery is a mix of abstract 3D renderings and contained product screenshots. Abstract graphics feature organic, almost volumetric shapes in desaturated tones with Ember Orange accents, often appearing to 'flow' or 'connect' as a metaphor for automation, sometimes with a subtle rough texture. Product screenshots are typically tightly cropped and displayed within a contained UI frame (like a browser window), focusing on specific workflows or features rather than a full product interface. There's no use of lifestyle photography or raw edge images; all visuals are either conceptual or explanatory, contributing to a sense of sophisticated, technical utility. Icons are primarily monochromatic outlines contrasting with the background, with occasional filled brand-colored icons for Google-related services.

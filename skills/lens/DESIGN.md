---
version: alpha
name: Lens
description: Lens employs a bright, airy canvas with subtle surface treatments and an almost-monochrome palette. A vivid teal and soft, playful gradients provide functional accents without overpowering the clean structure. Typography is precise and airy, creating a sense of clarity and modern efficiency. Components are lightweight with generous padding and soft, rounded edges, emphasizing user-friendliness and approachability within a sophisticated technical context.
colors:
  lens-teal: "#00caa0"
  mint-green: "#00d743"
  charcoal-black: "#2c2d30"
  cool-gray: "#afafaf"
  white-canvas: "#ffffff"
  slate-subtle: "#808183"
  light-steel: "#c0c0c1"
  subtle-card-bkg: "#fbfcff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.24px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.35
    letterSpacing: 0.315px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
    letterSpacing: 0.39px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: 0.42px
  display:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.2
    letterSpacing: 0.69px
spacing:
  cardRadius: 16px
  buttonRadius: 50px
  elementGap: 16px
  sectionGap: 48px
components:
  ghost-nav-link:
    role: Navigation button, text-only
  primary-action-button:
    role: Call to action button
  developer-action-button:
    role: Secondary action button (ghost style)
  informative-card:
    role: Content container for features or details
  feature-highlight-card:
    role: Highlighted content container with iconography
  circular-icon-wrapper:
    role: Decorative background for icons
---

## Overview

**North Star:** Cloud-white digital canvas

Lens employs a bright, airy canvas with subtle surface treatments and an almost-monochrome palette. A vivid teal and soft, playful gradients provide functional accents without overpowering the clean structure. Typography is precise and airy, creating a sense of clarity and modern efficiency. Components are lightweight with generous padding and soft, rounded edges, emphasizing user-friendliness and approachability within a sophisticated technical context.

### Do's

- Prioritize Charcoal Black (#2c2d30) for all primary text and headings against White Canvas (#ffffff), achieving AAA contrast.
- Use Lens Teal (#00caa0) exclusively for primary interactive elements, brand accents, and active states. Do not use it for passive text or large backgrounds.
- Apply a 50px border-radius to all primary action buttons for a soft, approachable feel.
- Maintain generous internal padding on cards and buttons, using 24px for card content padding and 11px vertical padding for buttons, aligning with a comfortable density.
- Employ the 'saans' font for all headings, leveraging its unique 'ss01' feature and positive letter spacing (0.015em).
- Use subtle, soft shadows (rgba(0,0,0,0.05) 0px 0px 0px 1px) only for interactive elements, not for static cards or surfaces.

### Don'ts

- Do not use dark backgrounds for full sections; maintain the light theme with White Canvas (#ffffff) as the dominant background.
- Avoid generic system fonts; always utilize 'saans' for headings and 'Inter' for body text with their specified font features and letter spacing.
- Do not introduce strong, opaque borders on cards or primary layout elements; rely on subtle background differences or soft washes.
- Refrain from using multiple accent colors; Lens Teal (#00caa0) and Mint Green (#00d743) are the only acceptable chromatic accents.
- Do not use a narrow page width; layout should be full-bleed or extend to edge-to-edge, with content typically centered.
- Avoid heavy drop shadows or multiple shadow layers, as the design uses minimal, single-layer outlines.

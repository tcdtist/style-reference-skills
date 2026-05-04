---
version: alpha
name: Popcorn
description: Popcorn employs a modern, calm, and spacious aesthetic built on a largely monochrome palette. Light, soft surfaces and ample white space define the visual canvas. Typography is characteristically bold yet airy for headlines, conveying information with subtle authority, while body text remains minimal and legible. Small, rounded components with soft shadows and transparent accents give an impression of lightness and approachability.
colors:
  midnight-graphite: "#393737"
  canvas-white: "#f7f7f7"
  snow-drift: "#ffffff"
  slate-mist: "#888787"
  pale-cloud: "#e9eff6"
  gradient-aura: "#e7f3ee"
  skylight-fade: "#dae8f5"
typography:
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.4
    letterSpacing: -0.38px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.2
    letterSpacing: -1.74px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.2
    letterSpacing: -2.64px
spacing:
  cardRadius: 12px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-ghost-button:
    role: Action button for primary calls to action, maintaining lightness and integrating into the design.
  elevated-feature-card:
    role: Highlights key features or testimonials, using soft elevation to draw attention.
  base-feature-card:
    role: Standard card for displaying information without strong visual hierarchy.
  badge-pill:
    role: Categorization or status indicator.
  hero-pill-badge:
    role: Prominent status indicator within hero sections.
  navigation-link:
    role: Primary navigation elements.
---

## Overview

**North Star:** Monochrome canvas, silent authority

Popcorn employs a modern, calm, and spacious aesthetic built on a largely monochrome palette. Light, soft surfaces and ample white space define the visual canvas. Typography is characteristically bold yet airy for headlines, conveying information with subtle authority, while body text remains minimal and legible. Small, rounded components with soft shadows and transparent accents give an impression of lightness and approachability.

### Do's

- Use Midnight Graphite (#393737) for all primary text and main headlines.
- Apply Canvas White (#f7f7f7) for the main page background and soft button fills.
- Ensure all primary interactive elements like buttons and badges use a 100px border radius for a continuous pill shape.
- Implement the soft shadow rgba(0, 0, 0, 0.05) 0px 4px 20px 0px for all elevated cards to maintain a light visual weight.
- Reserve Untitled Serif for headlines and subheadings at larger sizes (40px and above) to distinguish them from UI text.
- Maintain a comfortable vertical rhythm with a default element gap of 16px and section gap of 64px.

### Don'ts

- Avoid using highly saturated, vivid colors; the palette is intentionally subtle and achromatic.
- Do not introduce sharp corners or small radii; the system favors soft, rounded edges at 12px for cards and 100px for buttons.
- Do not use heavy, opaque drop shadows; stick to the light, ethereal shadow for elevation.
- Do not use generic system fonts; always specify Messina Sans for UI and body text, and Untitled Serif for display headings.
- Avoid tightly packed content; maintain ample spacing and allow sufficient whitespace around elements.

### Layout

The page uses a maximum width of 1200px, centered on the screen, creating a contained and focused experience. The hero section features a large, centered headline over a subtle gradient background, setting a calm, spacious tone. Content sections generally follow a pattern of generous vertical spacing, with testimonials in a 3-column card grid and feature lists presented as centered blocks. Navigation is a sticky top bar with left-aligned branding and right-aligned links and a sign-up button. The overall density is spacious, ensuring ample breathing room between elements and sections.

### Imagery

The visual language for imagery is minimal and functional, primarily consisting of product showcases and abstract atmospheric elements. Product screenshots of mobile devices are shown with realistic interfaces, rendered on white backgrounds with soft shadows for elevation. Icons are outlined, lightweight, and mono-color, serving as subtle decorative or explanatory elements. Backgrounds feature large, abstract, multi-color conic gradients, providing a soft, almost ethereal atmosphere without disrupting the clean UI. Imagery serves a decorative and illustrative role rather than being critical content.

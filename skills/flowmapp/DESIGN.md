---
version: alpha
name: Flowmapp
description: This design evokes a feeling of structured clarity and playful dynamism, balancing functional utility with a touch of modern vibrancy. The primarily white-bodied interface provides a blank canvas, punctuated by a deep blue accent (#0080ff) that guides interaction. Organic, blurred background shapes add a soft, futuristic atmosphere, while the crisp black typography and rounded components (#1600px, #12px) create a friendly yet precise tool.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  steel-gray: "#8c9baa"
  highlight-blue: "#0080ff"
  subtle-blue: "#c5e0fb"
  gradient-violet: "#0050ff"
  pebble-gray: "#dee0e4"
  charcoal-text: "#222222"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.09
    letterSpacing: -0.48px
spacing:
  cardRadius: 12px
  buttonRadius: 1600px
  elementGap: 8px
  sectionGap: 48-80px
components:
  cta-button-group:
    role: 
  feature-cards-grid:
    role: 
  social-proof-company-logos-bar:
    role: 
  secondary-button-dark-fill:
    role: Secondary Action
  secondary-button-light-fill:
    role: Secondary Action
  ghost-button-blue-accent:
    role: Tertiary Action
  standard-card:
    role: Content Container
  accent-border-card:
    role: Highlight Container
  page-header-navigation:
    role: Global Navigation
  callout-icon-card:
    role: Feature Highlight
---

## Overview

**North Star:** Architectural blueprint on white marble, accented with soft, glowing energy.

This design evokes a feeling of structured clarity and playful dynamism, balancing functional utility with a touch of modern vibrancy. The primarily white-bodied interface provides a blank canvas, punctuated by a deep blue accent (#0080ff) that guides interaction. Organic, blurred background shapes add a soft, futuristic atmosphere, while the crisp black typography and rounded components (#1600px, #12px) create a friendly yet precise tool.

### Do's

- Use Highlight Blue (#0080ff) exclusively for primary calls-to-action and critical interactive feedback.
- Apply 1600px radius for all primary buttons and interactive elements to maintain the 'pill' aesthetic.
- Maintain a clear visual hierarchy by using Ink Black (#000000) for main headings and Canvas White (#ffffff) for card/page backgrounds.
- Utilize the Inter font family across all typographic elements, leveraging its full range of weights (400-700) for distinct hierarchy.
- Ensure consistent internal padding of 24px for all `Standard Card` and `Accent Border Card` components.
- Implement the Steel Gray (#8c9baa) for secondary text and subtle navigational elements to soften visual noise.

### Don'ts

- Do not introduce new color tones; stick to the defined palette of blues, grays, black, and white.
- Avoid using sharp corners; all significant UI elements like buttons and cards must use a defined border-radius (12px, 20px, 32px, or 1600px).
- Do not apply drop shadows to cards or primary UI elements; visual depth is created through background blur gradients and borders.
- Refrain from using color to denote semantic states (e.g., red for error, green for success) unless explicitly defined within the system; use established brand colors instead.
- Do not deviate from the Inter typeface; avoid introducing any additional font families.
- Avoid excessive use of bold typography; reserve font weight 700 for headlines, and 600 for important subheadings or call-to-action text.

### Layout

The page operates on a max-width contained model of 1560px, maintaining a centered content block throughout. The hero section is full-bleed with a large, centered headline and a prominent primary CTA, visually supported by abstract, blurred gradient shapes that hint at depth and dynamism without direct interaction. Section rhythm is consistent, with clear vertical spacing and sections primarily occupying a single column stack for headlines followed by multi-column arrangements (e.g., 2-column text+icon features, 3-column card grids for features). There's no alternating light/dark banding; the design maintains a mostly white background. Navigation is a sticky top bar with a focused left-aligned logo and right-aligned interactive elements including the primary CTA.

### Imagery

The site uses a mix of light, playful illustrations and product screenshots, with abstract, organic gradient shapes (#98cafc, #3298fe, #82bffc) creating a vibrant background. Illustrations are simple, two-dimensional, often depicting tiny, functional elements or user interface snippets. Product screenshots are contained within rounded frames, showcasing the application's UI on mobile devices or in flow diagrams. Icons are primarily filled, black, and utilize the rounded aesthetic present throughout the UI. The overall density is balanced, allowing significant whitespace around visual elements, making the images feel airy and decorative rather than information-heavy.

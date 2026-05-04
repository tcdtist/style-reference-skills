---
version: alpha
name: Quo (formerly OpenPhone)
description: Quo adopts a stark, high-contrast digital workspace aesthetic: a spacious white canvas punctuated by bold black typography and strategic use of a single vivid lime accent. The design feels direct and functional, leveraging strong visual hierarchy created by heavy black text and subtle, almost invisible UI elements. Components are lightweight with minimal borders, emphasizing content over chrome, and utilizing soft gray backgrounds for subtle differentiation.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  surface-gray: "#f7f6f5"
  supporting-text-grey: "#4d4d4d"
  subtle-border-gray: "#cccccc"
  dark-charcoal: "#0a0a0c"
  lime-accent: "#edfc47"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.9
    letterSpacing: -1.12px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 0.9
    letterSpacing: -1.76px
spacing:
  cardRadius: 10px
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Call to action
  ghost-button:
    role: Secondary action / navigation link
  soft-filled-button:
    role: Light background action / tag
  default-card:
    role: Content container
  surface-accent-card:
    role: Information display
  elevated-tooltip-card:
    role: Ephemeral information
  navigation-link:
    role: Header navigation
  subtle-badge:
    role: Highlight label
---

## Overview

**North Star:** High-contrast digital workspace.

Quo adopts a stark, high-contrast digital workspace aesthetic: a spacious white canvas punctuated by bold black typography and strategic use of a single vivid lime accent. The design feels direct and functional, leveraging strong visual hierarchy created by heavy black text and subtle, almost invisible UI elements. Components are lightweight with minimal borders, emphasizing content over chrome, and utilizing soft gray backgrounds for subtle differentiation.

### Do's

- Prioritize Ink Black (#000000) for primary text and calls to action against Canvas White (#ffffff).
- Use Roobert 500 with tight letter-spacing for all headlines and impactful text, emphasizing confidence.
- Apply Surface Gray (#f7f6f5) for subtle background differentiation on cards and soft buttons, maintaining a muted base.
- Incorporate Lime Accent (#edfc47) sparingly for interactive elements, highlights, and decorative touches to provide energetic punctuation.
- Ensure generous internal padding of 32px for main content cards to create a spacious feel.
- Maintain a clear visual hierarchy with strong contrast between text and background, adhering to AAA accessibility standards where possible.
- Utilize 10px border radii for most containers and 6px for buttons, with 100px for pill-shaped elements like tags.

### Don'ts

- Avoid using multiple accent colors; rely on Lime Accent (#edfc47) as the sole chromatic highlight.
- Do not use heavy shadows or gradients; components should generally remain flat or subtly elevated with minimal box-shadows.
- Do not introduce complex background patterns; maintain large areas of Canvas White (#ffffff) or Surface Gray (#f7f6f5).
- Do not use generic system fonts for headlines; always default to Roobert 500 for brand consistency.
- Avoid excessive use of borders; elements should primarily rely on background color to define their boundaries.
- Do not use rounded corners larger than 10px for cards or smaller than 6px for active buttons.
- Do not clutter layouts; aim for comfortable density and clear visual separation with generous spacing.

### Layout

The page adheres to a max-width of 1200px, with content centrally aligned. The hero section is full-width, featuring a prominent centered headline over a white background, occasionally with large, simple illustrative elements. The section rhythm is primarily continuous white space, occasionally broken by soft Surface Gray (#f7f6f5) background bands that seamlessly transition into the next feature block. Content is arranged in alternating text-left/image-right or text-right/image-left patterns, often within multi-column card grids (e.g., 2-column or 3-column feature setups). The layout is spacious with clear vertical separation between sections. Navigation consists of a simple top bar with primary links and prominent 'Log in' and 'Try for free' ghost and filled buttons.

### Imagery

The visual language for imagery is minimal and functional, primarily using product screenshots and software interface depictions. These are often flat, contained within subtle card-like structures with 10px rounded corners, or occasionally full-bleed to showcase the UI. Photography is absent. Illustrations are rare, but when present, they appear as simple, almost outlined or filled icons with a flat, geometric style (e.g., illustrated money stacks in the hero). Icons are typically outlined and monochrome, carrying a consistent stroke weight. Imagery serves an explanatory or product showcase role, focusing on functionality rather than atmosphere or branding, leading to a text-dominant layout with imagery providing visual anchors.

### Elevation

This design system purposefully avoids heavy, pronounced shadows. The single detected shadow (rgba(0, 0, 0, 0.1) 0px 11px 17px -10px) is minimal and primarily used for ephemeral or overlay components like tooltips or modals. This choice reinforces a flat, direct, and efficient UI philosophy, where elements are differentiated by background color and strong typographic hierarchy rather than simulated depth, making interactions feel fast and unburdened.

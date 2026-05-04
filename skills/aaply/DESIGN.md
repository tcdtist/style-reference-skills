---
version: alpha
name: Aaply
description: Aaply's design feels like an energetic, vibrant whiteboard brainstorming session. The stark contrast between a near-achromatic gray background and bold, highly saturated colors creates a dynamic, youthful energy. Playful, varied border radii across elements disrupt uniformity, while the strategic use of black, not dark gray, for headlines and body text grounds the otherwise light interface with a strong visual presence. This system intentionally uses a high key, vibrant color palette for interaction over subtle cues.
colors:
  whiteboard-background: "#f2f2f2"
  canvas: "#ffffff"
  onyx-ink: "#000000"
  fog: "#e6e6e6"
  pebble: "#cccccc"
  lemon-zest: "#e6e51"
  playful-burst-orange: "#ff8562"
  bubblegum-red: "#f34646"
  electric-violet: "#466cf3"
  sunshine-yellow: "#f5bd50"
  neon-yellow: "#fff705"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.44
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.55
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.33
    letterSpacing: -0.513px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.56
    letterSpacing: -0.682px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.05
    letterSpacing: -0.988px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1.05
    letterSpacing: -1.026px
spacing:
  cardRadius: 30px
  buttonRadius: 30px
  elementGap: 16px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  tooltip-badge-components:
    role: 
  feature-stat-cards:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  secondary-outline-button:
    role: Interactive element
  navigation-link:
    role: Interactive element
  header-login-button:
    role: Interactive element
  header-sign-up-button:
    role: Interactive element
  tooltip-bubblegum-red:
    role: Informational / contextual
---

## Overview

**North Star:** Vibrant whiteboard sketch. Bright digital ink on a muted gray canvas, with playful, organic shapes.

Aaply's design feels like an energetic, vibrant whiteboard brainstorming session. The stark contrast between a near-achromatic gray background and bold, highly saturated colors creates a dynamic, youthful energy. Playful, varied border radii across elements disrupt uniformity, while the strategic use of black, not dark gray, for headlines and body text grounds the otherwise light interface with a strong visual presence. This system intentionally uses a high key, vibrant color palette for interaction over subtle cues.

### Do's

- Prioritize Onyx Ink (#000000) for all body text and headlines to maintain high contrast on Whiteboard Background (#f2f2f2) and Canvas (#ffffff).
- Use Lemon Zest (#e6e51e) exclusively for primary calls-to-action, distinguishing them as the highest priority interaction.
- Apply Poppins for all major headings (52px, 57px) with tight negative letter-spacing for brand distinction.
- Maintain a 30px border-radius for all primary buttons and card elements to reinforce branding.
- Utilize a mix of playful radii (30px, 36px, 40px, 50px) for non-standard elements or decorative components to add visual interest.
- Employ the rgba(0, 0, 0, 0.2) 0px 10px 10px -5px shadow sparingly, primarily for elevated cards or modals.

### Don'ts

- Avoid using any desaturated or low-contrast colors for interactive elements; stick to the vivid brand palette for engagement.
- Do not use generic gray text for headlines or body copy; maintain the strong presence of Onyx Ink (#000000).
- Do not introduce new serif fonts beyond the decorative Times; maintain a clean sans-serif primary text hierarchy.
- Avoid blocky, sharp-cornered elements; lean into the rounded aesthetic with a variety of radii.
- Do not use subtle shadows for most UI elements; the design emphasizes flat surfaces with distinct color accents.
- Do not vary line-height significantly from specified values on Inter and Poppins, as this can disrupt the intended typographic rhythm.

### Layout

The page primarily uses a max-width centered layout (implied 1200px based on component width) with generous sectionGap (64px) for comfortable density. The hero section features a centered headline over the Whiteboard Background (#f2f2f2) without a full-bleed visual. Content sections largely follow a stacked, centered pattern, or a basic two-column arrangement (text and image/illustration). The rhythm is consistent: light gray background with content blocks, followed by another light gray, creating a sense of spaciousness. Navigation is a fixed top bar with a left-aligned logo and right-aligned main navigation and action buttons.

### Imagery

The visual language focuses heavily on stylized product mockups and illustrations. Product screenshots are contained within rounded frames, often featuring the brand's Lemon Zest (#e6e51e) yellow for UI elements. Illustrations are flat, geometric, and often whimsical, using the full vibrant accent palette (Bubblegum Red, Electric Violet, Playful Burst Orange). Icons are typically filled and black on light backgrounds, or white on vibrant colored elements. Imagery is not purely decorative; it serves to explain features and visualize the product's UX flow, often overlapping with the UI. The density is moderate, balancing descriptive text with illustrative examples.

---
version: alpha
name: Stark
description: Stark employs a clean, purposeful aesthetic built around a vivid purple accent against a largely achromatic backdrop. Its visual language prioritizes clear communication through robust typography and generous spacing, allowing functional elements to stand out. Component surfaces are light, with subtle shadow usage, focusing on content over heavy decoration. The overall impression is one of efficiency and directness, with the purple acting as a focused 'activate' signal.
colors:
  midnight-ink: "#10284b"
  stark-violet: "#381fd1"
  seafoam-mint: "#99d6cc"
  stark-gold: "#fedb63"
  lavender-mist: "#e5e0ff"
  linen-canvas: "#faf5ff"
  cloud-white: "#ffffff"
  outline-gray: "#e5e7eb"
  carbon-black: "#000000"
  bone-white: "#f6f6eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
    letterSpacing: 1.04px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.43
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -0.56px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-action-button:
    role: Filled button for primary calls to action.
  secondary-action-button:
    role: Filled button for secondary calls to action.
  ghost-internal-link-button:
    role: Minimal button for internal navigation links, often in headers or footers.
  information-card-button:
    role: Larger area button used for descriptive information, often within a card layout.
  feature-card-teal:
    role: Informational card highlighted with a distinct background.
  feature-card-lavender:
    role: Informational card with a soft background.
  nested-ui-card:
    role: Card used for encapsulating UI elements or content, often found within other sections.
---

## Overview

**North Star:** Vivid Purple Actuator

Stark employs a clean, purposeful aesthetic built around a vivid purple accent against a largely achromatic backdrop. Its visual language prioritizes clear communication through robust typography and generous spacing, allowing functional elements to stand out. Component surfaces are light, with subtle shadow usage, focusing on content over heavy decoration. The overall impression is one of efficiency and directness, with the purple acting as a focused 'activate' signal.

### Do's

- Use Stark Violet (#381fd1) exclusively for primary interactive actions or key brand accents to ensure focus.
- Apply ArminGrotesk weight 900 for all main headings (display, heading-lg) to convey impact.
- Maintain a clear visual hierarchy by utilizing Midnight Ink (#10284b) for primary text and Carbon Black (#000000) for secondary or supporting text.
- Employ Outline Gray (#e5e7eb) for all hairline borders and dividers to maintain a light, open aesthetic.
- Use a consistent border-radius of 6px for interactive buttons and 12px for content cards, reserving 40px for larger, decorative cards.
- Ensure generous spacing around content with sections separated by 48px and card content padded by 24px.
- Pair Stark Gold (#fedb63) with Midnight Ink (#10284b) text for secondary call-to-action buttons, creating a vibrant contrast.

### Don'ts

- Do not use saturated colors for large background areas unless it is the hero section utilizing Stark Violet (#381fd1).
- Avoid arbitrary use of shadows; most cards and surfaces should remain flat or use very subtle elevation, as indicated by the absence of explicit shadow tokens.
- Do not introduce new typefaces; rely solely on ArminGrotesk and RobotoMono for all typographic needs.
- Refrain from using more than two distinct accent colors on a single screen to prevent visual clutter and maintain focus on Stark Violet.
- Do not break the established spacing rhythm; for example, avoid small, inconsistent element gaps other than the default 8px.
- Do not use generic gray tones when specific neutral tints like Linen Canvas (#faf5ff) or Bone White (#f6f6eb) are available for surfaces and muted text.
- Avoid applying strong gradients unless they are the specific linear-gradient patterns using Stark Gold or Stark Violet against transparent backgrounds for decorative purposes.

### Layout

The page primarily uses a max-width contained layout for content sections, set against full-bleed backgrounds that alternate between Cloud White and Linen Canvas. The hero section is full-bleed Stark Violet with a large, centered white headline and supporting body text. Content beyond the hero typically follows a two-column distribution, often alternating text-left/image-right. Feature sections sometimes employ a 4-column card grid. Vertical spacing is generous and consistent, with sections clearly delineated by background changes and a typical section gap of 48px. The navigation is a sticky top bar with a logo, text links, and two distinct action buttons.

### Imagery

This system primarily uses product screenshots that are full-bleed or strategically placed on light backgrounds, often with a slight perspective to reveal multiple application windows. Illustrations, when present, are flat, outlined, geometric, and use a limited brand-color palette (Stark Violet, Stark Gold, and muted blues/greens) to explain concepts rather than merely decorate. Icons are outlined, mono-color (usually Carbon Black or Stark Violet), with a medium stroke weight. Imagery is present but the UI remains text-dominant, with visuals serving to explain or showcase the product rather than create atmosphere.

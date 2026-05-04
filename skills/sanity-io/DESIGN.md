---
version: alpha
name: Sanity.io
description: Sanity.io's design system feels like a high-performance data visualization interface, where structure and precision meet dynamic, glowing content. A strong black-on-white foundation is punctuated by a spectrum of vivid, almost neon, colors that appear as focal points, indicating interactivity or highlighting data points within a clean, monospaced programming-like aesthetic. The interplay of crisp typography and tightly integrated elements creates a sense of efficiency and controlled power, reflecting its role as a content operating system.
colors:
  absolute-black: "#0b0b0b"
  canvas-white: "#ffffff"
  graphite: "#212121"
  medium-gray: "#b9b9b9"
  silver-mist: "#797979"
  pumpkin-spill: "#ff4100"
  electric-blue: "#0052ef"
  neon-green: "#45ff00"
  terminal-green: "#19d600"
  future-violet: "#f500ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.7
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.3
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.24
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.13
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.05
    letterSpacing: -0.035px
  display:
    fontFamily: "system-ui"
    fontSize: 112px
    lineHeight: 0.8
    letterSpacing: -0.04px
spacing:
  cardRadius: 12px
  buttonRadius: 99999px
  elementGap: 12px
  sectionGap: 48px
components:
  button-group:
    role: 
  feature-tab-selector:
    role: 
  announcement-banner-stats-block:
    role: 
  primary-ghost-button-dark:
    role: Primary calls to action on dark backgrounds
  pill-ghost-button-dark:
    role: Secondary actions on dark backgrounds, navigation elements
  pill-ghost-button-light:
    role: Secondary actions on light backgrounds, navigation elements
  square-ghost-button-light:
    role: General utility buttons, often for non-primary actions on light surfaces
  underlined-input-dark:
    role: Minimalist text input fields on dark surfaces
  minimal-input-light:
    role: Subtle input fields on light surfaces
  filled-input-dark:
    role: Standard input fields on dark surfaces, with a distinct background
  plain-input-light:
    role: Simple text input on light backgrounds, minimal styling
---

## Overview

**North Star:** Data grid, pulsing with neon light. A clean terminal-like layout where vibrant color accents pinpoint critical information within structured data.

Sanity.io's design system feels like a high-performance data visualization interface, where structure and precision meet dynamic, glowing content. A strong black-on-white foundation is punctuated by a spectrum of vivid, almost neon, colors that appear as focal points, indicating interactivity or highlighting data points within a clean, monospaced programming-like aesthetic. The interplay of crisp typography and tightly integrated elements creates a sense of efficiency and controlled power, reflecting its role as a content operating system.

### Do's

- Use Waldenburg Normal for all marketing headlines and body text to leverage its distinctive tight letter-spacing and varied weights.
- Apply IBM Plex Mono for all code examples, technical labels, and data displays (e.g., in tables or pseudo-terminal interfaces) to maintain a developer-centric aesthetic.
- Prioritize Pumpkin Spill (#ff4100) or Electric Blue (#0052ef) for all primary interactive elements to clearly signpost user actions.
- Employ `border-radius: 99999px` for all interactive button shapes when a pill style is desired.
- Maintain a clear visual hierarchy: use Absolute Black (#0b0b0b) for primary text, Medium Gray (#b9b9b9) for secondary, and Silver Mist (#797979) for tertiary information.
- Ensure generous spacing: sections should have at least `48px` vertical padding, and content elements `12px` horizontal and vertical gaps.
- Utilize Neon Green (#45ff00) or Future Violet (#f500ff) sparingly for specific content highlights or data visualizations to maximize their visual impact as accents.

### Don'ts

- Do not use generic sans-serif fonts for code or technical content; always use IBM Plex Mono.
- Avoid applying brand or accent colors to non-interactive elements or large blocks of text; they are reserved for emphasis and action.
- Do not introduce complex shadows or depth effects; the system relies on flat backgrounds and borders for element separation.
- Do not use highly rounded corners outside of intended button/pill shapes; maintain `0px` or `3px` for structural elements and inputs.
- Do not use the tight letter-spacing for IBM Plex Mono; it should remain `normal` to preserve code readability.
- Avoid using a cluttered layout; maintain comfortable element gaps of `12px` and `24px` to ensure visual breathing room.
- Do not introduce additional bold, saturated colors beyond the defined brand and accent palette; they would dilute the visual identity.

### Layout

The layout is predominantly a max-width, center-aligned container system, although the initial hero section can be full-bleed with a prominent visual background. Sections alternate between dark (black) and light (white) backgrounds, creating a clear visual rhythm and demarcation of content blocks. The hero section often features a large, centrally-aligned headline with supporting text and calls to action. Content arrangement frequently employs a dual-column structure for features, where text (often a numbered list or descriptive paragraph) is paired with a corresponding image or graphic, alternating left/right alignment. Information density progresses from spacious, impact-driven hero sections to more compact, data-rich product feature displays. Navigation is a sticky top bar, transforming colors based on the underlying section, featuring prominent CTA buttons at the far right. The overall impression is one of structured modularity and precise alignment.

### Imagery

Imagery at Sanity.io is a blend of abstract, generative art, and product-focused UI screenshots with a technical overlay. The abstract graphics often feature intense, vibrant colors (like the hero's multi-hued vortex) that provide a dynamic backdrop or visual metaphor for 'structure' and 'intelligence'. Product UI screenshots are usually presented on dark surfaces, displaying code editors or content management interfaces, sometimes with specific elements pixilated or highlighted by a vivid accent color. There's a strong emphasis on showing the *system* rather than lifestyle; visuals are contained or masked into geometric shapes, occasionally overlapping to suggest layering and complexity. Iconography appears as outlined or filled, using muted greens and grays, maintaining functional clarity over decorative flourish. The density is moderate, with images serving an explanatory or atmospheric role alongside significant blocks of text.

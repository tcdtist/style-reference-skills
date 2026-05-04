---
version: alpha
name: Aurora
description: Aurora presents a high-tech, industrial aesthetic, blending a mostly achromatic canvas with stark blues for critical actions and highlight elements. The design prioritizes clear information hierarchy through distinct text color variations and generous spacing. Components are generally flat and functional, with subtle rounded corners indicating interactive elements or content containers, suggesting precision and reliability.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#001733"
  aurora-blue: "#006aed"
  distant-gray: "#f3f4f8"
  ash-mist: "#e6e9f0"
  slate-text: "#68748d"
  steel-text: "#464e5d"
  subtle-gray: "#d1d6e0"
  deep-space: "#000000"
  vivid-aqua: "#18dcdc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.528px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.9
    letterSpacing: -3.6px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 4px
  sectionGap: 24px
components:
  primary-call-to-action-button:
    role: Filled button indicating primary actions.
  ghost-navigation-button:
    role: Navigation links or secondary actions presented without a fill.
  pill-accent-button:
    role: Decorative or small navigational buttons, often for page navigation within a component.
  content-card-default:
    role: Containers for information without visual emphasis.
  content-card-subtle-background:
    role: Containers for grouped information, providing a soft background separation.
  info-badge:
    role: Small informational labels for status or categorization.
---

## Overview

**North Star:** Industrial precision on frosted glass

Aurora presents a high-tech, industrial aesthetic, blending a mostly achromatic canvas with stark blues for critical actions and highlight elements. The design prioritizes clear information hierarchy through distinct text color variations and generous spacing. Components are generally flat and functional, with subtle rounded corners indicating interactive elements or content containers, suggesting precision and reliability.

### Do's

- Prioritize Midnight Ink (#001733) for all primary text content for strong contrast and readability.
- Use Aurora Blue (#006aed) exclusively for primary interactive elements and key brand highlights to ensure visual consistency.
- Apply 8px border-radius to all buttons, cards, and interactive elements to maintain a consistent subtle softening.
- Employ the Inter font family with judicious letter spacing adjustments (-0.03em to -0.04em for larger text) to enhance typographic precision.
- Ensure sufficient vertical rhythm by utilizing section gaps primarily at 24px and element gaps at 4px.
- Leverage Distant Gray (#f3f4f8) for secondary background surfaces to provide hierarchy without harsh contrast.
- Always use Canvas White (#ffffff) as the main page and card background for a clean, expansive feel.

### Don'ts

- Avoid using multiple accent colors; confine brand emphasis to Aurora Blue (#006aed).
- Do not introduce sharp corners; maintain the consistent 8px or 4px border-radius to preserve the system's friendly yet precise aesthetic.
- Refrain from heavy shadows or complex gradients unless explicitly defined in the system; surfaces should generally remain flat.
- Do not deviate from the Inter font family unless specifically for code snippets; extraneous typefaces dilute brand identity.
- Avoid visual clutter by limiting decorative elements and focusing on functional UI decisions.
- Do not use generic gray values; use the defined neutral scale (Ash Mist, Slate Text, Steel Text, Subtle Gray) for consistent tone.
- Do not use unstyled links; all interactive text should either adopt Aurora Blue (#006aed) or be part of a defined component interaction.

### Layout

The page uses a maximum width of 1200px, centered on the screen, creating a contained and structured feel. Hero sections feature full-bleed background videos or imagery with large, centered or left-aligned headlines. Section rhythm is characterized by consistent vertical spacing, often with seamless transitions rather than overt visual dividers. Content is frequently arranged in horizontal splits (text-left/image-right or vice-versa) or stacked vertical blocks. Card grids, particularly 3-column layouts, are used for features or news sections. The layout promotes a comfortable density, allowing breathing room between elements while maintaining clear information hierarchy, supporting a top bar navigation that can become sticky.

### Imagery

The visual language predominantly features high-quality product photography (trucks, Aurora Driver components) or real-world driving footage as background elements. Photography is often full-bleed or tightly cropped, emphasizing the product itself with minimal lifestyle context. Illustrations are rare, but icons, when present, are typically filled and monochromatic with a default stroke weight. Imagery serves an explanatory and product-showcasing role, integrated into hero sections or alongside textual content to illustrate capabilities. There's a balance between imagery and text, with text-dominant sections punctuated by relevant visuals.

---
version: alpha
name: Fey
description: Fey uses a commanding dark mode palette, leveraging deep blacks and subtle gradients as a backdrop for high-fidelity financial data. White and muted grays provide essential text hierarchy and UI structure, while sparse, vivid chromatic accents draw attention to critical insights and interactive elements. The system emphasizes clarity and data density through compact typography and minimal component padding, offering a direct and focused user experience. Transparency and blurred surfaces create a sense of depth without resorting to heavy shadows.
colors:
  absolute-zero: "#000000"
  charcoal-black: "#0b0b0b"
  ghost-gray: "#131313"
  muted-ash: "#191919"
  faded-steel: "#333333"
  dark-slate: "#525252"
  cadet-gray: "#828282"
  storm-gray: "#868f97"
  light-asphalt: "#999999"
  silver-mist: "#cccccc"
  smoke-white: "#e6e6e6"
  canvas-white: "#ffffff"
  sky-surge: "#479ffa"
  tangelo-flame: "#ffa16c"
  zenith-green: "#4ebe96"
  aurora-yellow: "#fffd00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.58
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  display-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
    letterSpacing: -1.08px
spacing:
  cardRadius: 16px
  buttonRadius: 99px
  elementGap: 24px
  sectionGap: 24px
components:
  primary-action-button:
    role: Filled button indicating primary action.
  ghost-navigation-button:
    role: Subtle, non-filled button for navigation or secondary actions.
  subtle-pill-button:
    role: Discreet interactive elements or tags.
  data-card:
    role: Container for financial data visualizations and text.
  elevated-tooltip-card:
    role: Floating informational panels.
  header-bar:
    role: Sticky site header.
---

## Overview

**North Star:** Midnight Command Center: high-definition data on frosted glass.

Fey uses a commanding dark mode palette, leveraging deep blacks and subtle gradients as a backdrop for high-fidelity financial data. White and muted grays provide essential text hierarchy and UI structure, while sparse, vivid chromatic accents draw attention to critical insights and interactive elements. The system emphasizes clarity and data density through compact typography and minimal component padding, offering a direct and focused user experience. Transparency and blurred surfaces create a sense of depth without resorting to heavy shadows.

### Do's

- Prioritize Calibre font for all text. Utilize its full range of weights to establish hierarchy, maintaining the crisp, data-centric feel.
- Use Absolute Zero (#000000) for base page backgrounds, Charcoal Black (#0b0b0b) for primary card surfaces, and Ghost Gray (#131313) for subtle layering.
- Apply a 99px border-radius for all primary action buttons, ensuring a consistent, friendly pill shape.
- Introduce Sky Surge (#479ffa) or Tangelo Flame (#ffa16c) sparingly as functional highlights for navigation or critical information, never for large areas.
- Maintain tight letter-spacing for headings (e.g., -0.0800em at 54px) to ensure a compact, controlled visual appearance.
- Employ transparency and backdrop filters (e.g., blur(10px)) for floating elements or overlays to create depth without heavy drop shadows.
- Use 1px solid rgba(255, 255, 255, 0.1) hair-thin borders for subtle separation between elements within cards or lists.

### Don'ts

- Avoid using multiple font families; Calibre is the sole typeface for branding and content.
- Refrain from large, visually dominating images; focus on product screenshots, data visualizations, or minimal abstract elements.
- Do not use generic box-shadows. Shadows should be subtle, usually with dark hues or inset, as defined in component descriptions.
- Never use highly saturated colors for backgrounds or large text blocks; reserve vivid hues for small, functional accents.
- Avoid excessive padding within components; Fey emphasizes information density and a compact layout.
- Do not introduce strong color gradients across full sections or cards; gradients are reserved for subtle accents or interactive element highlights only.
- Do not use generic system icon sets. Icons should align with the defined outline style and minimal appearance.

### Layout

The page primarily uses a max-width contained layout of 1220px, with some full-bleed sections, particularly at the top hero and for background elements. The hero features a large, dark visual element with centered text overlays and a sticky top navigation. Sections flow vertically with consistent spacing (24px element and section gap) and often feature two-column arrangements of text on the left and a product screenshot or data visualization on the right. Content blocks are information-dense, often using card grids (likely 3-column judging by visual patterns) for feature showcases. The overall rhythm is structured yet fluid, avoiding stark visual dividers in favor of subtle background shifts and card separation.

### Imagery

The site uses high-fidelity product screenshots of the Fey interface, often presented in mockups of devices. These are typically contained within cards or display areas, sometimes featuring subtle atmospheric blur effects or partial transparency. Photography is absent. Icons are minimalist, outlined, and monochromatic, primarily in white or light gray. Visual density is high, with imagery serving to demonstrate product functionality and data visualization rather than decorative atmosphere. Abstract graphics, when present, are subtle gradients or blurred shapes, contributing to depth.

---
version: alpha
name: Octaevo
description: Octaevo embodies a serene, heirloom-quality aesthetic: a light cream canvas punctuated by rich, classic serifs and structured sans-serifs. Surfaces are matte and uncluttered, relying on subtle shifts in background tone for differentiation rather than heavy borders or shadows. Interactive elements are understated, often presented as ghost buttons with fine hairline borders, maintaining a sense of refined quietude. The overall impression is one of timeless craftsmanship and elegant restraint.
colors:
  canvas-cream: "#f8eeee"
  buttermilk-overlay: "#fdf8eb"
  ash-accent: "#f3f3f3"
  carbon-ink: "#313131"
  midnight-core: "#000000"
  faded-stone: "#cfcfc7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.67
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.47
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.26
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.11
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.47
    letterSpacing: 0px
spacing:
  elementGap: 17px
  sectionGap: 50px
components:
  ghost-button-default:
    role: Primary Call-to-action, secondary actions
  circular-ghost-button:
    role: Navigation arrows, close buttons, action icons
  text-link-button:
    role: Inline actions, understated calls to action
  standard-input-field:
    role: Form inputs
  muted-input-field:
    role: Secondary form inputs, disabled states
  pill-input-field:
    role: Email capture inputs
  plain-badge-tag:
    role: Informational tags, categories
---

## Overview

**North Star:** Mediterranean sun-drenched linen

Octaevo embodies a serene, heirloom-quality aesthetic: a light cream canvas punctuated by rich, classic serifs and structured sans-serifs. Surfaces are matte and uncluttered, relying on subtle shifts in background tone for differentiation rather than heavy borders or shadows. Interactive elements are understated, often presented as ghost buttons with fine hairline borders, maintaining a sense of refined quietude. The overall impression is one of timeless craftsmanship and elegant restraint.

### Do's

- Prioritize 'Canvas Cream' (#f8eeee) for main backgrounds to establish a light, airy foundation.
- Use 'Carbon Ink' (#313131) as the default color for most text, ensuring high contrast against light backgrounds.
- Distinguish interactive elements like buttons and links with 1px borders in 'Carbon Ink' (#313131) for a subtle, ghosted appearance.
- Apply 'Domaine' font for all headings and large display text, retaining its specific weights and letter spacing for brand recognition.
- Structure content with ample 17px element gaps, promoting visual breathing room and a comfortable density.
- Embrace the 'sharp' (0px) border radius for most functional components and 'circular' (2880px) for distinct pill shapes, avoiding intermediate roundness.
- Utilize 'Buttermilk Overlay' (#fdf8eb) for cards and modals to create a soft, slightly elevated surface above the main canvas without shadows.

### Don'ts

- Avoid using strong, saturated colors for UI elements; stick to the curated neutral palette for interface components.
- Do not introduce heavy shadows or gradients; rely on color temperature shifts and border definitions for visual hierarchy.
- Do not use font weights outside of those specified for 'Domaine' (400) and 'Moderat' (400, 500) to maintain typographic consistency.
- Avoid tight spacing; maintain the comfortable 17px element gap to prevent a dense or claustrophobic feel.
- Do not use mid-range border radii; stick to sharp 0px or fully circular 2880px to preserve the distinct shape language.
- Refrain from using solid background colors for primary action buttons; ghosted outlines are preferred.
- Do not deviate from the established type scale; maintain the precise sizes and line heights for each semantic role.

### Layout

The site uses a max-width contained layout, likely around 1200px, creating a structured feel with generous side margins. The hero section often presents a split layout with photography on one side and a concise headline and call to action on the other, or a centered headline over a background image. Section rhythm is visually distinct through consistent vertical spacing and subtle shifts in background tone (Canvas Cream vs Buttermilk Overlay). Content generally arranges in a clean, often symmetrical manner, with alternating two-column text and image blocks and consistent card grids for product listings. Navigation is a sticky top bar with minimal links.

### Imagery

The visual language focuses on high-key product photography, often featuring tight crops of objects against pure white or very light, textured backgrounds. Lifestyle elements are minimal, appearing only as hands interacting with products, making the object the primary focus. Imagery is contained, never full-bleed, and often incorporates subtle framing or archival aesthetics. Icons are monochrome, outlined, and minimal, appearing small and functional. The overall role of imagery is to showcase product as art objects, emphasizing craftsmanship and clean presentation rather than narrative or dramatic atmosphere.

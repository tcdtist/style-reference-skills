---
version: alpha
name: Cosmos
description: Cosmos presents as a serene, minimalist canvas, allowing diverse content to take center stage. Its light, monochromatic base with soft neutrals like Fossil and Paper White creates a calming emptiness, like an art gallery with perfectly lit displays. The unexpected custom `cosmosOracle` font at varied weights and subtle micro-interactions introduces a playful, human touch, contrasting with the otherwise stark layout. The design feels like a curator's precise arrangement, where every element has space to breathe, yet dynamic content fills the carefully defined frames.
colors:
  midnight-ink: "#0D0D0D"
  paper-white: "#FFFFFF"
  fossil: "#F7F5F3"
  dusty-ash: "#6E6A69"
  pewter: "#9A9796"
  terracotta: "#D1543"
  harvest-gold: "#EAC7A0"
  cardinal-red: "#BC361B"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.08
    letterSpacing: -0.418px
  display:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 0.8
    letterSpacing: -0.74px
spacing:
  buttonRadius: 1.67772e+07px
  elementGap: 4px
  sectionGap: 100-180px
components:
  cta-button-group:
    role: 
  search-bar:
    role: 
  ai-content-tooltip-card:
    role: 
  ghost-button:
    role: Secondary action
  subtle-link-button:
    role: Tertiary action
  content-card:
    role: Content container
  ai-content-tag:
    role: Contextual alert
  ai-content-action-button:
    role: Interaction within tag
---

## Overview

**North Star:** Gallery Wall on White Marble. Content is framed by generous whitespace against a pristine, quiet backdrop, emphasizing individual elements.

Cosmos presents as a serene, minimalist canvas, allowing diverse content to take center stage. Its light, monochromatic base with soft neutrals like Fossil and Paper White creates a calming emptiness, like an art gallery with perfectly lit displays. The unexpected custom `cosmosOracle` font at varied weights and subtle micro-interactions introduces a playful, human touch, contrasting with the otherwise stark layout. The design feels like a curator's precise arrangement, where every element has space to breathe, yet dynamic content fills the carefully defined frames.

### Do's

- Use Midnight Ink (#0D0D0D) for all primary text and active interactive elements to maintain high contrast and sophistication.
- Apply Fossil (#F7F5F3) for secondary backgrounds and card surfaces to introduce subtle visual hierarchy without jarring shifts.
- Utilize the `cosmosOracle` font for all text elements, carefully applying its varied weights (350, 400, 500) and specific letter spacing to achieve the intended visual impact.
- Employ a pill-shaped radius (1.67772e+07px) for all primary buttons and form fields, contrasting with the more subtle 16px radius for content cards.
- Maintain ample whitespace; use 24px as a common base padding unit for content blocks and elements to ensure comfortable density.
- Integrate playful, 'cosmosOracle' font sizes like 58px, 66px, and 74px for primary headlines, with tight line heights (0.8-1.1), for a distinct visual voice.

### Don'ts

- Avoid introducing additional saturated colors beyond the specified accents, as the system relies on a neutral palette with minimal, intentional color pops.
- Do not use sharp corners; the soft 16px and pill-shaped radii are fundamental to the inviting yet refined aesthetic.
- Refrain from heavy drop shadows or abrupt gradients; the design achieves depth through subtle background color shifts and carefully composed content.
- Do not overcrowd sections; stick to the specified padding and element gaps to preserve the comfortable, spacious density.
- Avoid generic system fonts; the custom `cosmosOracle` with its specific letter spacing is a core brand identifier that must be used consistently.

### Layout

The page uses a centered, max-width contained layout for most content, contrasted with a full-bleed hero that features a scattering of abstract, rounded-corner elements around a central headline and call-to-action. Sections primarily follow a spacious, single-column design, occasionally breaking into two or three columns for content cards or feature showcases. There's a consistent vertical rhythm, with generous section spacing around 100-180px, creating a breathable visual flow. Content arrangement is often headline-then-grid, or alternating text-left/image-right, always respecting the ample whitespace. Navigation is a sticky top bar with minimal elements, maintaining focus on the page content.

### Imagery

Imagery is the primary content vehicle, presented as tightly cropped, often vibrantly colored photographs or illustrations within rounded-corner (16px) frames. These images are typically isolated against the neutral background, acting as individual art pieces on a gallery wall. There's a mix of abstract conceptual art, product shots, and cinematic stills (e.g., film preview), all treated with a consistent, contained aesthetic. Icons are minimal, outlined, and monochromatic, serving purely functional roles without distracting from the main content visuals. The density is image-heavy, with visuals often dominating sections and acting as direct points of user interaction.

### Elevation

This design intentionally shies away from traditional heavy shadows to preserve its airy, minimalist aesthetic. Instead, it achieves subtle depth primarily through the use of distinct, light background colors (Paper White vs. Fossil) for different surface levels. Where elevation is implied (e.g., elements floating over content), it's achieved via a very soft, diffuse shade, typically rgba(0, 0, 0, 0.05) or similar, which mimics a slight lift without creating a heavy visual anchor. The emphasis is on content breathing space rather than layered interfaces.

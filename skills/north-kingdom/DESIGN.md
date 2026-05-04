---
version: alpha
name: North Kingdom
description: North Kingdom presents a dark, cinematic brand experience that marries deep, dark backgrounds with sharp, white typography. The design emphasizes content through dramatic scaling of text and minimal UI elements, creating a focused, immersive feel. Surface treatments are largely flat with subtle layering, relying on bold text and large visuals to convey impact rather than intricate component styling. Typography carries significant weight in establishing brand presence, particularly in prominent headlines.
colors:
  midnight-ink: "#050311"
  ghost-white: "#ffffff"
  pitch-black: "#000000"
  dusty-slate: "#9b9aa0"
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 10px
  sectionGap: 80px
components:
  ghost-border-button:
    role: Interactive element (e.g. video controls)
  circular-play-button:
    role: Video player control
  muted-ghost-button:
    role: Tertiary interactive state
  feature-card:
    role: Content display
  text-input:
    role: Form entry
  badge-label:
    role: Categorization or decorative text
---

## Overview

**North Star:** Cinematic Night Canvas

North Kingdom presents a dark, cinematic brand experience that marries deep, dark backgrounds with sharp, white typography. The design emphasizes content through dramatic scaling of text and minimal UI elements, creating a focused, immersive feel. Surface treatments are largely flat with subtle layering, relying on bold text and large visuals to convey impact rather than intricate component styling. Typography carries significant weight in establishing brand presence, particularly in prominent headlines.

### Do's

- Use Midnight Ink (#050311) as the default background for most page sections.
- Prioritize Ghost White (#ffffff) for all primary text, headlines, and active interactive elements to ensure high contrast against dark backgrounds.
- Apply 8px border-radius consistently to all cards and significant image containers.
- Enclose all buttons with a 4px border-radius, even when the button implicitly forms a circle.
- Ensure large headlines leverage the FKGroteskNeue font to maintain the distinct heavy yet precise typographic style.
- Maintain a compact element spacing of 10px between minor UI elements to keep information dense.
- Outline all interactive buttons with a Ghost White (#ffffff) border if not using a solid fill.

### Don'ts

- Avoid using highly saturated accent colors that deviate from the dark, monochrome palette.
- Do not introduce strong shadows or excessive elevation; maintain a generally flat and layered UI aesthetic.
- Do not use generic system fonts for prominent headlines; utilize FKGroteskNeue for brand consistency.
- Avoid large gaps between closely related UI elements; maintain a compact, dense arrangement where appropriate.
- Do not use highly rounded corners for general elements; reserve 26px radius for specific inputs and 4-8px for cards/buttons.
- Do not use standard paragraph spacing for headlines; large headlines are expected to have tight line heights and letter-spacing.
- Avoid full-width content blocks without internal padding; use the specified 140px horizontal padding for content within major sections.

### Imagery

This design system primarily uses captivating, often game-related, conceptual 3D renders or stylized illustrations, frequently presented within hexagonal or irregularly masked cutouts. Images are typically large, serving as focal points rather than decorative backdrops. When photography is used, it often maintains a dark, moody atmosphere with a focus on product or conceptual scenes. Icons are simple, filled, and monochromatic (white against dark), embodying a functional, minimal style. The visual density heavily leans towards large imagery dominating sections, with text supporting the visual impact.

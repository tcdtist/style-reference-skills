---
version: alpha
name: Custo
description: Custo presents a restrained, product-focused aesthetic, blending industrial-grade minimalism with an approachable comfort. The visual system uses achromatic tones, allowing product imagery to take center stage. Typography is clean and assertive, providing clear information without unnecessary ornamentation. Components are subtly interactive with ghosted borders and generous padding, creating an experience that feels understated yet responsive.
colors:
  midnight-graphite: "#000000"
  canvas-white: "#ffffff"
  platinum-gray: "#d8d8d8"
  hero-ash: "#9ea29f"
  muted-steel: "#8e9194"
  lightest-slate: "#a7aaad"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.62
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.42
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.15
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1.05
    letterSpacing: 0px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 110px
components:
  outline-accent-button:
    role: Primary Call to Action
  contained-small-button:
    role: Secondary Call to Action
  input-field:
    role: Standard Data Entry
  compact-input-field:
    role: Header Search/Small Field
---

## Overview

**North Star:** Industrial product showcase, matte gray

Custo presents a restrained, product-focused aesthetic, blending industrial-grade minimalism with an approachable comfort. The visual system uses achromatic tones, allowing product imagery to take center stage. Typography is clean and assertive, providing clear information without unnecessary ornamentation. Components are subtly interactive with ghosted borders and generous padding, creating an experience that feels understated yet responsive.

### Do's

- Prioritize achromatic colors (Midnight Graphite, Canvas White, Platinum Gray) for all UI elements to maintain a neutral, product-focused aesthetic.
- Utilize PP Neue Montreal Medium (weight 400) consistently for all text, relying on size and line-height for hierarchy rather than varied weights.
- Maintain generous vertical spacing between sections, using the 110px section gap to prevent visual clutter.
- Apply an 8px border-radius to all interactive elements like buttons and input fields to convey a soft, modern touch.
- Use 'Midnight Graphite' for primary text and 'Muted Steel' for secondary or helper text to establish clear content hierarchy.
- Frame primary call-to-action buttons as ghost buttons with contrasting borders and text, rather than solid fills, to integrate with the minimalist aesthetic.

### Don'ts

- Avoid introducing any additional saturated colors beyond the existing achromatic palette; color should be restricted to product imagery.
- Do not use varied font weights; all typography should use PP Neue Montreal Medium at weight 400.
- Refrain from heavy drop shadows or significant elevation; components should generally remain flat or have minimal depth.
- Do not use overly complex or decorative backgrounds; stick to solid achromatic tones or large product photography.
- Avoid tight, condensed layouts; ensure comfortable padding using the 20px card padding and 24px element gap.
- Never use solid-fill primary buttons; all primary interaction should use the ghosted border style.

### Layout

The page structure favors a full-bleed layout for hero sections, while subsequent content is often implicitly contained without explicit max-width settings, achieving a sense of spaciousness. The hero features a large product image with a contrasting achromatic background (Hero Ash), overlaid with a prominent headline. Content sections alternate between visually distinct blocks, often presenting a large headline followed by a ghosted call-to-action, or a two-column layout with product imagery on one side and text on the other. Navigation is a minimalist top bar, disappearing against the white canvas or black header, with ghosted menu items and a subtly outlined 'Order now' button. Vertical rhythm is consistent, with generous spacing between major sections.

### Imagery

The visual language is split between high-key, tightly cropped product photography on neutral backgrounds (Hero Ash or Canvas White) and aspirational lifestyle imagery featuring people interacting with the product in real-world settings. Product shots are typically isolated, highlighting the device as the hero. Icons are simple, outlined, monochromatic, and used functionally for navigation or feature explanation, appearing as thin strokes aligning with the minimal component style. Imagery primarily serves to showcase the product and its benefits, rather than just decorative atmosphere, occupying significant visual space in alternating sections.

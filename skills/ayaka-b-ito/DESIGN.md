---
version: alpha
name: Ayaka B. Ito
description: Ayaka B. Ito's design system creates a soft, refined, and editorial feel through its use of muted, vintage-inspired color palettes that shift gracefully between sections. Typography is highly distinctive, featuring a delicate custom serif with generous tracking and unique ligatures, paired with a legible sans-serif for functional text. Components are minimal and ghost-like, prioritizing content and visual artistry over heavy UI elements. The overall presentation is that of a curated portfolio, where every detail contributes to an atmosphere of understated elegance and artistic craft.
colors:
  soft-umber: "#a65d4d"
  pale-rose-quartz: "#ddbad0"
  charcoal-ink: "#000000"
  paper-white: "#ffffff"
  dusty-sage: "#576041"
  forest-moss: "#495116"
  misty-blue: "#9cb8d3"
  deep-teal: "#167070"
  cerulean-mist: "#9ec5d6"
  stone-grey: "#c7afac"
  faded-coral: "#d7b5bf"
  vivid-orange: "#f75929"
  golden-ochre: "#cda04f"
  dark-forest-teal: "#507f70"
  glacial-grey: "#6b969f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 2
    letterSpacing: 1px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
    letterSpacing: 0.015px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.82
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: -0.41px
spacing:
  buttonRadius: 120px
  elementGap: 10px
  sectionGap: 30px
components:
  ghost-button:
    role: Primary interaction button
  outlined-input-field:
    role: Text input areas
  navigation-item:
    role: Primary navigation links
  editorial-header:
    role: Section titles and prominent text blocks
---

## Overview

**North Star:** Shifting Editorial Canvas

Ayaka B. Ito's design system creates a soft, refined, and editorial feel through its use of muted, vintage-inspired color palettes that shift gracefully between sections. Typography is highly distinctive, featuring a delicate custom serif with generous tracking and unique ligatures, paired with a legible sans-serif for functional text. Components are minimal and ghost-like, prioritizing content and visual artistry over heavy UI elements. The overall presentation is that of a curated portfolio, where every detail contributes to an atmosphere of understated elegance and artistic craft.

### Do's

- Prioritize Hanae Regular for all headlines and artistic text to establish the brand's unique editorial voice, embracing its wide letter-spacing and ligatures.
- Use Open Sans only for functional text like navigation, body copy, and captions to ensure legibility and structural integrity.
- Apply the Pale Rose Quartz (#ddbad0) 1px border to all ghost buttons and input fields, paired with the extreme 120px/140px radius for a consistently soft, pill-like interactive element.
- Use the shifting color palette for section backgrounds and major typography, rather than strict section dividers, to create a fluid, magazine-like scrolling experience.
- Maintain a spacious density with section gaps of 30px and significant card/element padding to allow content and imagery to breathe and command attention.
- Always apply Hanae Regular's font feature settings ('"dlig", "liga", "swsh"') including when using Open Sans, for a subtle consistency in typographic refinement.
- Employ Soft Umber (#a65d4d) as a warm, anchoring background for prominent or introductory sections, complementing the cooler accent tones.

### Don'ts

- Avoid solid, filled background buttons for primary actions; instead, prefer ghost buttons with Pale Rose Quartz outlines to maintain the system's delicate aesthetic.
- Do not use dark, heavy shadows or strong elevation effects; the design relies on color shifts and spatial separation for hierarchy, not depth.
- Refrain from introducing new sans-serif fonts; Open Sans handles all legible text needs without needing additional variety.
- Do not use highly saturated or primary colors outside of the defined accent palette; such colors would conflict with the system's muted, vintage-inspired tone.
- Avoid tight letter-spacing for Hanae Regular, especially at larger sizes, as its character is built upon its open, airy presentation.
- Do not break the established pattern of highly rounded corners for interactive elements; maintaining 120px+ radii ensures brand consistency.
- Avoid dense, compact text blocks; spacing and generous line heights are crucial for the editorial layout.

### Layout

The page structure heavily uses full-width sections that can shift background colors, creating a 'shifting editorial canvas' effect. Layout is primarily max-width contained for text and UI elements, but often allows large-format imagery or color blocks to bleed to the edges. The hero section is characterized by a full-bleed color background (e.g., Soft Umber) with centered, prominent text. Content sections alternate between these distinct background schemes, often employing a two-column layout with text on one side and a large visual on the other, or full-width blocks for showcasing typography. Vertical spacing between sections is generous, contributing to the spacious density. Navigation is a minimalist top bar with ghost-like links, maintaining a light footprint.

### Imagery

This system features a mix of high-fidelity photography, often focusing on editorial layouts and product shots (magazines, type specimens). Illustrations are highly stylized, often incorporating custom typography as intrinsic design elements. Imagery serves a decorative, inspirational, and explanatory role, showcasing the designer's craft rather than generic stock photography. Photography is typically high-key or features controlled studio lighting, emphasizing texture and detail. Icons, if present, are minimal and likely outlined, consistent with the delicate aesthetic. Imagery is occasionally full-bleed or large-scale, dominating sections, while at other times it is integrated seamlessly with text.

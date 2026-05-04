---
version: alpha
name: Channel Studio
description: Channel Studio embraces a dark, conceptual aesthetic where form follows function with minimalist precision. Visual weight is carried by large, unadorned typography and selective use of subtle gradients and textures on otherwise stark backgrounds. The brand accent is a vivid red, reserved for highlighting interactive elements and key headings. The overall impression is one of stark, intellectual clarity, prioritizing content legibility within a controlled, sophisticated environment.
colors:
  midnight-void: "#000000"
  ghost-gray: "#cacaca"
  faded-stone: "#727272"
  vanguard-red: "#ff7777"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.19
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 0.95
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 0.9
    letterSpacing: -0.03px
spacing:
  elementGap: 10px
  sectionGap: 40px
components:
  ghost-navigation-link:
    role: Primary navigation links and interactive textual elements.
  zero-padding-card:
    role: Content containers that use the background as their surface.
  underlined-input-field:
    role: Input fields for data entry.
  highlighted-project-title:
    role: Prominent headings for project names or content sections.
---

## Overview

**North Star:** Stark intellectual minimalism.

Channel Studio embraces a dark, conceptual aesthetic where form follows function with minimalist precision. Visual weight is carried by large, unadorned typography and selective use of subtle gradients and textures on otherwise stark backgrounds. The brand accent is a vivid red, reserved for highlighting interactive elements and key headings. The overall impression is one of stark, intellectual clarity, prioritizing content legibility within a controlled, sophisticated environment.

### Do's

- Prioritize stark visual clarity by using Midnight Void (#000000) for all backgrounds to establish a consistent dark theme.
- Use Ghost Gray (#cacaca) for all primary text and critical interface elements to ensure readability against dark backgrounds.
- Apply Vanguard Red (#ff7777) sparingly and intentionally for headings, active states, and crucial interactive elements to create focal points.
- Maintain a tight, composed typographic aesthetic with Lausanne (or Inter) at weight 400 across all text, varying size for hierarchy.
- Implement negative letter-spacing for large headlines and display text elements (up to -0.0300em) to enhance visual density and impact.
- Emphasize content through spacious vertical separation between sections, using a base section gap of 40px.
- Utilize 0px border-radius for all elements, including cards and inputs, to reinforce the sharp, precise design language.

### Don'ts

- Avoid using saturated colors other than Vanguard Red (#ff7777) for UI elements; maintain a near-achromatic palette otherwise.
- Do not introduce decorative borders or shadows on cards or containers; they should blend seamlessly with the background.
- Refrain from using varied font weights; Lausanne (400) is the sole weight to ensure typographic consistency.
- Do not add internal padding to cards; they should act as zero-padding content wrappers.
- Avoid using curved elements or soft shapes; the design language relies on straight lines and sharp angles.
- Do not use generic system fonts or introduce additional font families; Lausanne (or Inter) is the only approved typeface.
- Do not use wide letter-spacing; all text should be either normal or tightly tracked.

### Layout

The page uses a full-bleed layout with content primarily aligned to the left, but effectively contained within a wide, implied max-width. The hero section is full-bleed with a background abstract gradient and centered large text. Subsequent sections alternate between large, impactful typography on a black background and visual showcases with full-width abstract renders or product shots. Content arrangement often features large headlines followed by supporting text or visuals, with a clear vertical rhythm. There's an absence of traditional grids for features, instead relying on prominent, stacked elements and fluid text-image combinations. Navigation is minimal, consisting of a top-left logo and ghost links, which become sticky on scroll. The overall density feels open, allowing key content to breathe.

### Imagery

The site predominantly uses abstract, textural imagery and product-focused 3D renders with a monochromatic or desaturated color palette. Photography of physical artwork/sculptures is presented full-bleed with highly reflective surfaces, creating a dynamic yet contained visual. Icons are minimal, outlined, and monochromatic, primarily serving functional rather than decorative roles. Imagery density varies; the hero section uses a large, full-bleed abstract graphic, while project showcases feature prominent, detailed visuals. The overall role of imagery is to evoke a conceptual, high-tech, and artistic atmosphere, supporting the brand's identity as an innovation company.

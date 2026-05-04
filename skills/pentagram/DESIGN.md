---
version: alpha
name: Pentagram
description: Pentagram employs a rigorous, authoritative visual aesthetic characterized by high contrast neutrals and a precise typographic hierarchy. The design emphasizes clarity through stark monochromatic palettes, sharp edges, and minimal ornamentation. Components are typically unstyled or outlined, maintaining a lightweight feel, with subtle interactive states. This approach projects a serious, intellectual, and focused brand presence.
colors:
  midnight-ink: "#1a1a1a"
  canvas-white: "#ffffff"
  stone-gray: "#8c8c8c"
  pitch-black: "#000000"
  charcoal: "#222222"
  silver-mist: "#e3e4e5"
  deep-graphite: "#333333"
  soft-stone: "#767676"
  pentagram-blue: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.32
    letterSpacing: -0.26px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
    letterSpacing: -0.19px
  heading:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.19
    letterSpacing: -0.54px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.05
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: -1.04px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 96px
components:
  ghost-button-inverse:
    role: Interactive elements for secondary actions or navigation.
  pill-button-inverse:
    role: Small, contained labels or filters.
  soft-tag-button:
    role: Categorization or filter tags with a subtle background.
  filled-action-button:
    role: Primary calls to action with high visual weight.
  clear-card:
    role: Container for content where the background is part of the overall page design.
  project-detail-card:
    role: Structured content blocks for individual projects.
  dark-input-field:
    role: User input fields on darker backgrounds.
---

## Overview

**North Star:** Architectural Drafting on Blueprint

Pentagram employs a rigorous, authoritative visual aesthetic characterized by high contrast neutrals and a precise typographic hierarchy. The design emphasizes clarity through stark monochromatic palettes, sharp edges, and minimal ornamentation. Components are typically unstyled or outlined, maintaining a lightweight feel, with subtle interactive states. This approach projects a serious, intellectual, and focused brand presence.

### Do's

- Prioritize high contrast between text and background using only Midnight Ink (#1a1a1a) on Canvas White (#ffffff) or Canvas White (#ffffff) on Pitch Black (#000000).
- Maintain geometric precision by using 0px radius for primary containers and text boundaries, reserving 4px and 8px for specific button and card elements.
- Use Plain typeface with 'kern' and 'case' font features for all typography to ensure visual consistency and tight letter-spacing.
- Apply Pitch Black (#000000) for hero sections and full-width content blocks to create strong visual anchors and differentiate sections.
- Use a default padding of 8px around most elements to maintain a sense of order and density.
- Employ the Pill Button Inverse (9999px radius) sparingly for distinctive, small, content-agnostic labels or filters.
- Ensure all interactive elements have a clear hover/active state, even if implied by color change or subtle border adjustment, not just an accent color.

### Don'ts

- Avoid decorative shadows or complex gradients; the design relies on flat surfaces and direct contrast.
- Do not introduce new color hues; strictly adhere to the monochromatic palette with the limited accent of Pentagram Blue (#007aff) for highly interactive components.
- Do not use generic system fonts; always utilize 'Plain' with its specific letter spacing and font features.
- Do not deviate from the established border radii; avoid rounded corners on elements not explicitly defined (buttons, cards).
- Avoid sparse layouts with excessive whitespace; the density is 'compact', implying efficient use of space.
- Do not create filled buttons in colors other than Pitch Black (#000000); other buttons are ghost or soft-background.
- Do not use type tracking wider than the defined values; the system leans into tight letter-spacing to reinforce its precise aesthetic.

### Layout

The page structure employs a max-width contained layout at 1728px, fostering a focused content experience within generous margins. The hero section is full-bleed, often featuring large-scale photography with overlaid minimal text. Section rhythm is driven by alternating Pitch Black (#000000) and Canvas White (#ffffff) backgrounds, creating clear visual segmentation without explicit dividers. Content is largely arranged in a grid system, ranging from 2-column text/image layouts to dense 3-column card grids for project features, maintaining consistent 24px gutters. The layout can switch to full-width horizontal scrolling display for certain content blocks (not shown in screenshots but implied by component usage). Navigation is a sticky top bar, minimal and unadorned, providing essential links.

### Imagery

The imagery features high-quality photography as visual showcases for projects, often full-bleed or contained within structured blocks. Product shots and architectural photography are common, meticulously framed and lit, often revealing textures and built environments. There's an absence of lifestyle photography, focusing instead on the visual output of design work itself. Icons, when present, are minimal, outlined, and monochromatic, seamlessly integrating with the UI without adding color. Imagery is primarily explanatory, showcasing project outcomes rather than decorative atmosphere, often presented framed within distinct cards or sections to isolate one project from another.

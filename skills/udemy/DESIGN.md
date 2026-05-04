---
version: alpha
name: Udemy
description: Udemy's design system portrays a confident, organized learning platform. It uses a predominantly light theme with stark, dark gray typography for high contrast, ensuring readability for educational content. The visual signature comes from the judicious use of a vibrant violet accent for interaction and brand elements, creating moments of activation against the otherwise neutral canvas. Components are structured and purposeful, featuring soft-cornered cards, pill-shaped buttons, and a clear visual hierarchy that guides the user through course content.
colors:
  canvas-background: "#e9eaf2"
  surface-white: "#ffffff"
  deep-graphite: "#2a2b3f"
  dark-overlay: "#202230"
  dusty-blue: "#b7b9cd"
  medium-gray: "#9194ac"
  muted-indigo: "#3d4055"
  steel-gray: "#595c73"
  subtle-dark-background: "#33364a"
  regal-violet: "#6d28d2"
  success-orange: "#c4710d"
  subtle-violet-link: "#c0c4fc"
  skeleton-shine: "#d1d2e0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  cardRadius: 8px
  buttonRadius: 1000px
  elementGap: 16px
  sectionGap: 24px
components:
  solid-button:
    role: Primary action button, often for categories or filters.
  pill-button:
    role: Filter or tag button, indicating selectable options without high emphasis.
  ghost-button-text-primary:
    role: Secondary action or link-style button, often within cards or content areas.
  ghost-button-text-accent:
    role: Subtle interactive element, typically used for navigation or in-context links.
  quote-card:
    role: Testimonial or review card.
  topic-card-neutral-background:
    role: Category or topic display card in a light section.
  topic-card-dark-background:
    role: Category or topic display card in a dark section.
  search-input:
    role: Primary search field.
---

## Overview

**North Star:** Ordered campus noticeboard.

Udemy's design system portrays a confident, organized learning platform. It uses a predominantly light theme with stark, dark gray typography for high contrast, ensuring readability for educational content. The visual signature comes from the judicious use of a vibrant violet accent for interaction and brand elements, creating moments of activation against the otherwise neutral canvas. Components are structured and purposeful, featuring soft-cornered cards, pill-shaped buttons, and a clear visual hierarchy that guides the user through course content.

### Do's

- Use Deep Graphite (#2a2b3f) for primary text and main headings to ensure high contrast and readability on light backgrounds.
- Apply Regal Violet (#6d28d2) for all interactive link text and primary UI element accents, always maintaining a consistent visual cue for action.
- Round corners of most cards and content blocks to 8px for a soft and approachable aesthetic.
- Prioritize Canvas Background (#e9eaf2) for general page backgrounds and Surface White (#ffffff) for elevated or interactive card surfaces.
- Implement pill-shaped buttons (1000px radius) for filter and tag elements, paired with Deep Graphite text on Surface White.
- Utilize a 16px element gap for consistent vertical rhythm between distinct UI components such as cards and text blocks.
- Apply elevation shadows of oklch(0.6295 0.0204 306.5 / 0.08) 0px 2px 8px 0px, oklch(0.6295 0.0204 306.5 / 0.12) 0px 4px 16px 0px only for truly elevated or interactive elements, like focused buttons.

### Don'ts

- Avoid using highly saturated colors for large background areas; maintain the integrity of the neutral canvas.
- Do not deviate from the established typography hierarchy; avoid using 'Udemy Sans' at unapproved sizes or weights for headings or body copy.
- Refrain from introducing custom shadows or border radii. All elevation and shape properties must adhere to the defined tokens.
- Do not use black or pure white for text or backgrounds unless explicitly specified; opt for the richer neutral shades like Deep Graphite or Canvas Background.
- Avoid excessive use of borders; let surface color and subtle spacing define boundaries between content sections.
- Do not create new interaction colors; Regal Violet is the primary interactive accent, and Success Orange is reserved for semantic feedback.
- Avoid decorative imagery that competes with the UI; visuals should support the content without overwhelming it.

### Layout

The page layout is primarily section-based, featuring a max-width contained grid for most content, though the exact max-width is not strictly fixed but generally spacious. The hero section is often a full-bleed dark block with a prominent, centered headline and descriptive text. Subsequent sections alternate between Canvas Background (#e9eaf2) and Surface White (#ffffff) or occasionally Dark Overlay (#202230). Content is typically arranged in 2 or 3-column card grids, or alternating text-left / image-right patterns. Vertical spacing between sections is generous, around 24px, creating a comfortable rhythm. Navigation is handled by a sticky top bar with a search input.

### Imagery

The visual language on Udemy combines realistic 3D rendered illustrations with clean product-focused imagery. Illustrations are geometric and dimensional, often depicting abstract concepts related to learning and technology in energetic compositions with brand colors. Product imagery consists of tight crops of objects or devices, presented without lifestyle context and sometimes featuring duotone effects. Icons are simple, outlined, and monochromatic, primarily in Deep Graphite, serving as functional UI elements rather than decoration. The overall density is balanced, with imagery often confined to hero sections or distinct content blocks, supporting the text-heavy educational nature of the site.

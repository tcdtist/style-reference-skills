---
version: alpha
name: Koichi Takada Architects
description: Koichi Takada Architects employs an architectural blueprint aesthetic: stark black and white canvases for maximum contrast, punctuated by a singular muted green accent. Typography is a central design element, utilized heroically with oversized, unadorned type to create strong visual statements. Grids and precise negative space define the layout, favoring an open, contemplative feel over dense information displays. Components are reduced to their minimalist essence, often appearing as subtle borders or ghost elements.
colors:
  midnight: "#000000"
  canvas-white: "#ffffff"
  cloud-gray: "#595b60"
  ash-gray: "#888888"
  stone-slate: "#808080"
  forest-whisper: "#7c8d66"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.13
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 170px
    lineHeight: 0.9
spacing:
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-text-button:
    role: Minimalist navigation and action buttons.
  outlined-text-button:
    role: Decorative or secondary calls to action.
  text-input:
    role: Form fields for data entry.
  hero-headline:
    role: Dominant textual elements for page sections.
  nav-link:
    role: Primary navigation items.
---

## Overview

**North Star:** Minimalist architectural blueprint. High contrast and precise typography on a stark black canvas define this elevated brand.

Koichi Takada Architects employs an architectural blueprint aesthetic: stark black and white canvases for maximum contrast, punctuated by a singular muted green accent. Typography is a central design element, utilized heroically with oversized, unadorned type to create strong visual statements. Grids and precise negative space define the layout, favoring an open, contemplative feel over dense information displays. Components are reduced to their minimalist essence, often appearing as subtle borders or ghost elements.

### Do's

- Prioritize high contrast using Midnight (#000000) backgrounds with Canvas White (#ffffff) text, or vice versa, as the primary color pairing.
- Use Monument Grotesk at exaggerated sizes (e.g., 170px for display, 40px for headlines) with tight line heights (e.g., 0.9 for display) to create strong visual impact.
- Incorporate Forest Whisper (#7c8d66) sparingly as an accent for outline buttons, specific links, or subtle decorative elements.
- Apply 0px border-radius to all components, maintaining a sharp, angular aesthetic throughout the design.
- Maintain generous spacing between sections (40px) and elements (20px) to enhance the feeling of spaciousness and minimal clutter.
- Utilize ghost or outlined button styles without background fills to preserve the minimalist aesthetic; use color for borders to convey interaction or brand accent.

### Don'ts

- Avoid using saturated or multiple chromatic colors; the visual system is almost exclusively monochromatic with one brand accent.
- Do not introduce rounded corners or soft edges; all design elements should be sharp and rectilinear.
- Refrain from using drop shadows or heavy box-shadows on components, as the system relies on flat surfaces and high contrast for definition.
- Do not deviate from the Monument Grotesk typeface; it defines the brand's typographic identity.
- Avoid dense blocks of text or crowded layouts; prioritize significant negative space and clear hierarchy over information density.
- Do not use dark backgrounds with dark text or light backgrounds with light text; always ensure strong contrast (AAA wherever possible) for readability.

### Layout

The page primarily uses a full-bleed layout for background elements, but content within these sections adheres to a max-width of 1440px and is centered. The hero section features a full-viewport, dark background with oversized, centered typography and a subtle animated graphic. Sections maintain a consistent vertical rhythm with 40px gaps, creating a spacious feel. Content arrangement often utilizes two-column layouts, with text and visual elements aligned precisely. Navigation is a minimalist top bar, likely sticky, with subtle text links. The overall density is spacious, emphasizing large typography and negative space.

### Imagery

This design system relies heavily on stark UI elements and typography rather than extensive imagery. When visuals are present, they are either abstract graphic elements (like the rotating circle in the hero) or tightly cropped product imagery. Photography is minimal, focusing on architectural structures in a clean, often monochromatic, context. Icons are outlined, simple, and typically monochromatic, using primary text or muted gray colors with a thin stroke weight. Imagery serves more as a decorative atmosphere or product showcase, often integrated seamlessly into the high-contrast layout, rather than being a primary content driver.

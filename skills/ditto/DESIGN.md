---
version: alpha
name: Ditto
description: Ditto uses an 'architectural blueprint on white marble' visual language, combining a refined, nearly monochromatic canvas with precise geometric typography and a vibrant, playful accent color for highlights and interactive elements. Surfaces are clean and untextured, serving as a bright foundation for highly legible black text. Strategic splashes of saturated color are used for emphasis, badges, or outlined elements, creating an energetic yet organized feel. Components are lightweight and often feature large border-radii, giving a soft, approachable edge to the otherwise crisp design.
colors:
  midnight-ink: "#000000"
  canvas-white: "#f7f5f3"
  graphite: "#6a6559"
  warm-gray: "#e2e2e2"
  pure-white: "#ffffff"
  harvest-gold: "#ffdd33"
  power-red: "#ff6137"
  royal-blue: "#0097e6"
  fresh-green: "#3e6b15"
  rich-violet: "#b26dc2"
  mustard-seed: "#bbb809"
  blush-pink: "#f5c4cc"
  electric-blue: "#1345eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.43
    letterSpacing: 0.01px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: 0.008px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: -0.011px
  heading:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.2
    letterSpacing: -0.014px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.05
    letterSpacing: -0.022px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.88
    letterSpacing: -0.023px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 108px
    lineHeight: 0.89
    letterSpacing: -0.04px
spacing:
  cardRadius: 1000px
  buttonRadius: 100px
  elementGap: 20px
  sectionGap: 60px
components:
  primary-filled-button:
    role: Main call to action button.
  ghost-outline-button:
    role: Secondary call to action, less prominent than primary.
  ghost-border-button-pill:
    role: Tertiary action or navigational elements requiring minimal visual weight.
  badge-with-background:
    role: Highlighting status or keyword.
  success-status-badge:
    role: Indicating a positive status.
  circular-card-highlight:
    role: Decorative element or visual accent.
  text-input-field:
    role: User input for forms.
---

## Overview

**North Star:** Architectural blueprint on white marble

Ditto uses an 'architectural blueprint on white marble' visual language, combining a refined, nearly monochromatic canvas with precise geometric typography and a vibrant, playful accent color for highlights and interactive elements. Surfaces are clean and untextured, serving as a bright foundation for highly legible black text. Strategic splashes of saturated color are used for emphasis, badges, or outlined elements, creating an energetic yet organized feel. Components are lightweight and often feature large border-radii, giving a soft, approachable edge to the otherwise crisp design.

### Do's

- Use Midnight Ink (#000000) for all primary text and important headings to ensure high legibility against the light canvas.
- Apply Canvas White (#f7f5f3) as the default background for all page sections and elevated surfaces.
- Utilize 1000px border-radius for all primary buttons and large decorative elements to create a soft, pill-shaped aesthetic.
- Employ Harvest Gold (#ffdd33) and Power Red (#ff6137) strategically and sparingly for emphasis, such as badges, outlined boxes, or text highlights, never as primary UI colors.
- Maintain a clear visual hierarchy using ABC Social for body text (16-18px), ABC Social Extended for major headlines (43-86px), and ABC Social Condensed for specific emphasized text like badges.
- Structure content with a consistent 20px element gap and 60px section gap for a comfortable, organized layout.
- Use ABC Social weights 300 and 400 for most text, reserving 700 for strong emphasis within body copy or bold components.

### Don'ts

- Avoid using multiple accent colors in close proximity; stick to one or two per view to maintain visual clarity.
- Do not introduce heavy shadows or gradients on surfaces; components should remain flat and minimal.
- Never use the accent colors for full background sections, as they are intended for highlights, not foundational colors.
- Avoid using default system fonts. Always use ABC Social variants or their specified substitutes.
- Do not deviate from the established border radii; maintain 1000px for pills, 100px for secondary buttons, and 28px for inputs.
- Resist adding additional padding or margins that break the 4px grid and established spacing tokens.
- Do not use dark backgrounds for large content areas; the system is designed for a light theme with dark text.

### Layout

The page primarily uses a max-width contained layout, with content segments often centered or adopting clean two-column text-left/image-right (or vice-versa) arrangements. The hero section establishes a clear centered headline over a subtle background. Sections alternate between a base Canvas White and occasional Harvest Gold backgrounds for emphasis, creating a clear visual rhythm. Vertical spacing between sections is generous, contributing to a comfortable density. Navigation is a sticky top bar with clearly defined links and primary/secondary call-to-action buttons.

### Imagery

This site prominently features highly stylized, abstract graphic elements and product screenshots. The graphics are often playful and dimensional, using the accent color palette to create visual interest rather than realistic representations. Overlapping, torn-paper, or distressed effects are common for accent shapes, giving a handcrafted feel. Product screenshots are clean, high-fidelity, and typically contained within a well-defined UI, focusing on clarity over extensive context. Icons are simple, outlined, and monochromatic, used for navigation or feature delineation, prioritizing function without visual distraction.

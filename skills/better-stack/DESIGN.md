---
version: alpha
name: Better Stack
description: Better Stack employs a 'deep space console' aesthetic, built on a dark, near-black canvas layered with subtly differentiated dark gray surfaces. Typography is compact and precise, maintaining excellent contrast. A single vivid violet hue provides functional accents for interactive elements and brand highlights, creating moments of focus within the muted interface. Components are lightweight with large border radii, suggesting touch-friendly forms on a data-dense, technical interface.
colors:
  midnight-abyss: "#0f101a"
  graphite-panel: "#151621"
  steel-overlay: "#1f2433"
  faded-steel: "#262935"
  muted-ash: "#646e87"
  ash-text: "#939db8"
  cloud-whisper: "#c9d3ee"
  pure-white: "#ffffff"
  zero-black: "#000000"
  focus-violet: "#98a4f7"
  blue-violet-gradient: "#5b63d3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.55
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.17
    letterSpacing: -0.28px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.08
    letterSpacing: -0.53px
spacing:
  cardRadius: 16px
  buttonRadius: 9999px
  elementGap: 20px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Button
  ghost-button:
    role: Button
  small-pill-button:
    role: Button
  accent-outlined-button:
    role: Button
  informative-card:
    role: Card
  input-field:
    role: Input
---

## Overview

**North Star:** Deep space console

Better Stack employs a 'deep space console' aesthetic, built on a dark, near-black canvas layered with subtly differentiated dark gray surfaces. Typography is compact and precise, maintaining excellent contrast. A single vivid violet hue provides functional accents for interactive elements and brand highlights, creating moments of focus within the muted interface. Components are lightweight with large border radii, suggesting touch-friendly forms on a data-dense, technical interface.

### Do's

- Maintain a clear visual hierarchy by layering neutral background colors: Midnight Abyss (#0f101a) for base, Graphite Panel (#151621) for cards, and Steel Overlay (#1f2433) for borders.
- Use Focus Violet (#98a4f7) sparingly and strategically for brand accents, links, and active states to guide user attention within the dark UI.
- Adopt the rounded, pill-shaped '9999px' border radius for all actionable buttons to ensure a consistent, friendly form.
- Apply Helvetica Now Text font with a -0.01em letter-spacing consistently across all body and UI elements for a compact, technical feel.
- Center-align primary headlines and section titles, especially in full-width hero sections, to create a strong focal point.
- Utilize a base spacing unit of 4px to maintain consistent density and alignment across all components and layouts.
- Implement the linear blue-violet gradient (linear-gradient(353deg, rgb(91, 99, 211) 17.51%, rgb(124, 135, 247) 183.08%)) only for major decorative elements like hero backgrounds or section separators to prevent visual noise.

### Don'ts

- Avoid using saturated chromatic colors other than Focus Violet (#98a4f7) unless those colors are explicitly for semantic status indicators.
- Do not introduce strong drop shadows; rely on subtle inset shadows (rgba(255, 255, 255, 0.25) 0px 1px 3px 0px inset) or border differences for elevation.
- Do not deviate from the established type scale; maintain the precise letter-spacing and line heights for a consistent typographic rhythm.
- Do not use sharp 0px border radii on interactive elements or cards; the system prioritizes soft, rounded shapes.
- Avoid large, impactful photos or illustrations that break the product's dark, UI-focused aesthetic; prioritize product screenshots and abstract visuals.
- Do not use generic, default blue link colors; ensure all links are styled with Focus Violet (#98a4f7) or Cloud Whisper (#c9d3ee) for consistent branding.
- Refrain from using complex, multi-color decorative gradients casually; reserve them for impactful moments where their presence enhances, not distracts.

### Layout

The page maintains a max-width of 1320px, with content consistently centered. The hero section is full-bleed with a dark background, featuring a prominent, centered headline and a call to action immediately below. Subsequent sections typically follow a 2-column or text-left/image-right alternating pattern. Vertical rhythm is established by consistent section gaps, with elements frequently grouped into cards that receive 20px of padding. Navigation is a persistent top bar, sticky on scroll, with clear text links.

### Imagery

Imagery is functional and product-focused, primarily consisting of dark-themed UI screenshots that showcase the Better Stack platform. These embeds are contained within cards or placed alongside text. Iconography is minimalist, often monochrome or in Cloud Whisper (#c9d3ee), with clear, outlined styles, appearing at a small to medium stroke weight. No full-bleed photography or complex illustrations are present. The density of imagery is low, with visuals serving explanatory roles rather than decorative atmosphere, letting the UI and typography dominate.

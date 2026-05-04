---
version: alpha
name: Superlocal
description: This design system evokes a sense of archival warmth meeting modern-day nostalgia, like hand-printed posters in an old design studio. The dominant 'Pueblo Spice' brown against near-white 'Parchment' creates a soft, inviting contrast, making the content feel discovered rather than presented. The extensive use of 'RST Reactor' font with its strong, almost monospaced character, lends an industrial, handcrafted feel, reinforced by the vibrant 'Electric Blue' and 'Sunburst Orange' accents that punctuate this subdued palette.
colors:
  electric-blue: "#1673ff"
  pueblo-spice: "#3d2800"
  warm-button: "#604106"
  sunburst-orange: "#ff7b02"
  harvest-glow: "#ffae45"
  fuchsia-flush: "#e045ff"
  parchment: "#fbf5e7"
  onyx: "#000000"
  canvas-white: "#ffffff"
  light-gray-divider: "#c4c4c4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 2
    letterSpacing: 0.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.9
    letterSpacing: -3.2px
  display:
    fontFamily: "system-ui"
    fontSize: 172px
    lineHeight: 1
    letterSpacing: -10.32px
spacing:
  cardRadius: 30px
  buttonRadius: 99px
  elementGap: 10-24px
  sectionGap: 48-78px
components:
  cta-banner-with-reserve-button:
    role: 
  cronograma-section-header:
    role: 
  partner-card-grid:
    role: 
  primary-navigation-link:
    role: Top navigation items
  pueblo-spice-pill-button:
    role: Call to action button
  warm-button-pill-button:
    role: Secondary action button
  outline-pill-button:
    role: Ghost button with rounded corners
  card-grid-item:
    role: Partner/logo display
  footer-link-with-arrow:
    role: Call to action link in footer
---

## Overview

**North Star:** Warm Ink on Aged Paper — a hand-crafted, tactile aesthetic for a design conference.

This design system evokes a sense of archival warmth meeting modern-day nostalgia, like hand-printed posters in an old design studio. The dominant 'Pueblo Spice' brown against near-white 'Parchment' creates a soft, inviting contrast, making the content feel discovered rather than presented. The extensive use of 'RST Reactor' font with its strong, almost monospaced character, lends an industrial, handcrafted feel, reinforced by the vibrant 'Electric Blue' and 'Sunburst Orange' accents that punctuate this subdued palette.

### Do's

- Use 'Pueblo Spice' (#3d2800) for primary text and significant UI elements to maintain the aged paper aesthetic.
- Prioritize 'RST Reactor' for all headlines and most body text; leverage its precise letter-spacing rules including -0.06em at 172px and -0.05em at 64px.
- Apply a 99px border radius consistently to all primary and secondary action buttons, and 50px for ghost buttons.
- Use 'Parchment' (#fbf5e7) as the default background for all page sections and cards, creating a consistent warm base.
- Incorporate 'Electric Blue' (#1673ff) sparingly for interactive elements or prominent sections to create clear focal points.
- Maintain a clear visual hierarchy by contrasting 'Pueblo Spice' (#3d2800) for main actions with 'Warm Button' (#604106) for secondary actions.

### Don'ts

- Avoid using stark white backgrounds directly adjacent to 'Pueblo Spice' unless for explicit high-contrast elements.
- Do not deviate from the specified letter-spacing for 'RST Reactor' typefaces; it's a critical branding element.
- Refrain from using generic box shadows; the design relies on flat layers and strong color contrasts for depth.
- Do not introduce new typefaces outside of 'RST Reactor', 'Inter', and system sans-serif.
- Avoid over-saturating the palette; restrict additional colors to the defined 'Sunburst Orange', 'Harvest Glow', and 'Fuchsia Flush' accents as per their established roles.

### Layout

The layout primarily uses a contained, centered structure with significant margins, giving content room to breathe. The hero section is full-width, featuring a dominant graphic on an 'Electric Blue' background, immediately setting a unique and playful tone while the header remains a max-width centered element. Subsequent sections often feature alternating background colors (e.g., 'Parchment' then 'Pueblo Spice') creating a distinct rhythm. Content is arranged in stacked blocks or grid formations, such as the 3-column partner logo grid, with consistent vertical spacing between sections. Navigation is a minimalist top-right menu.

### Imagery

The site uses a highly stylized, brand-specific illustration style characterized by precise, geometric forms and vivid coloring. The dominant image is a large, flat flower illustration with concentric patterns, utilizing 'Parchment' for petals, 'Sunburst Orange' for inner radiating lines, and 'Pueblo Spice' for core details. This illustration style is decorative and creates a strong visual identity rather than conveying complex information. There's also a use of partner logos, rendered in monochrome (often 'Pueblo Spice' or 'Onyx') within 'Parchment' colored card grids, maintaining aesthetic consistency. Icons are minimalist and line-based, rendered in 'Onyx'.

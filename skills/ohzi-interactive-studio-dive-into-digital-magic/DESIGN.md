---
version: alpha
name: OHZI Interactive Studio / Dive into digital magic.
description: OHZI Interactive Studio employs a deep-space digital canvas aesthetic, characterized by a predominantly dark background punctuated by sharp, high-contrast white typography and subtle gray accents. The interface relies on spacious layouts and minimal ornamentation, allowing the bold typographic statements to command attention. Components are lightweight and ghost-like, integrating seamlessly into the dark ambient environment with delicate borders and text-based interactions.
colors:
  midnight-void: "#111111"
  supernova-white: "#ffffff"
  digital-shadow: "#000000"
  star-dust: "#f5f5f7"
  nebula-gray: "#cfcfcf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 0.938px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 1.136px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 1.998px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: 2.875px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: 5.64px
  display:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.2
    letterSpacing: 7.144px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-navigation-link:
    role: Primary navigation item in header
  hero-action-button:
    role: Primary call to action in hero section
  body-text-link:
    role: Informational link within body copy or footer
  hamburger-menu-icon:
    role: Mobile navigation toggle
---

## Overview

**North Star:** Deep-space digital canvas

OHZI Interactive Studio employs a deep-space digital canvas aesthetic, characterized by a predominantly dark background punctuated by sharp, high-contrast white typography and subtle gray accents. The interface relies on spacious layouts and minimal ornamentation, allowing the bold typographic statements to command attention. Components are lightweight and ghost-like, integrating seamlessly into the dark ambient environment with delicate borders and text-based interactions.

### Do's

- Prioritize Midnight Void (#111111) for all backgrounds and surface fills, ensuring a dark, immersive canvas.
- Use Supernova White (#ffffff) exclusively for primary text, active states, and critical UI elements where high contrast is necessary.
- Apply Unbounded typeface with its characteristic tight letter-spacing across all text, carefully mapping explicit letter-spacing values like 0.188em for display text and 0.071em for body text.
- Maintain consistently high contrast ratios for all textual content against the dark backgrounds, ensuring AAA accessibility with colors like Star Dust (#f5f5f7) for large headings.
- Implement ghost button styles with 1px Supernova White (#ffffff) borders and no background fill for interactive elements to blend seamlessly into the dark theme.
- Employ a base spacing unit of 4px and a default element gap of 20px for consistent visual rhythm and density.

### Don'ts

- Avoid using saturated accent colors for UI elements; chromatic interventions should be reserved for specific content or visual assets if introduced.
- Do not use visible border-radius values; maintain sharp, crisp 0px corners for all UI components.
- Refrain from using drop shadows or complex elevation; the design system emphasizes a flat, depth-free aesthetic.
- Do not introduce unnecessary visual dividers or heavy borders between sections; rely on spacing and typography for content separation.
- Avoid generic system fonts; the custom Unbounded typeface is central to the visual identity.

### Layout

The page maintains a full-bleed dark background (Midnight Void) across all sections, creating an expansive, borderless feel. The hero section features a large, centered headline and subtext over an ambient 3D graphic. Content is primarily centered and vertically stacked, with generous section spacing. Navigation consists of a minimal top bar with left-aligned branding and a right-aligned hamburger menu icon.

### Imagery

The site uses a 'no imagery, pure UI' approach for its functional interface elements, relying heavily on a dark, almost black background with abstract, emissive 3D graphics as hero and background elements. These graphics are typically dark, with subtle glows and reflections, reinforcing the digital magic theme. Icons are minimal, outlined, and monochromatic, primarily in Supernova White.

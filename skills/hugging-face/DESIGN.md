---
version: alpha
name: Hugging Face
description: Hugging Face presents a UI that feels like a meticulously organized, high-performance data console under bright, even lighting. The visual identity hinges on a subtle interplay of dark grays and bright whites, using minimal accent colors to highlight interactive elements and status. The crisp typography and sharp corners create an atmosphere of precision and utility, while soft shadows add subtle layers of hierarchy without heavy visual weight, making complex data structures feel approachable.
colors:
  canvas-white: "#ffffff"
  fog-gray: "#e5e7eb"
  ash-gray: "#f3f4f6"
  jet-black: "#000000"
  carbon: "#101828"
  slate-blue: "#4a5565"
  azure-link: "#155dfc"
  crimson-accent: "#ff3939"
  electric-blue: "#2b7fff"
  sunset-orange: "#ff6900"
  grape-violet: "#8e51ff"
  lime-green: "#7ccf00"
  goldenrod: "#fe9a00"
  fuchsia-pink: "#f6339a"
  nebula-blue-gradient: "#30404a"
  warm-sunset-gradient: "#e79321"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  cardRadius: 8px
  buttonRadius: 8px, 25.6px
  elementGap: 8px
  sectionGap: 64px
components:
  trending-models-spaces-cards:
    role: 
  spaces-cards-colorful-gradient-cards:
    role: 
  search-bar-filter-tab-bar:
    role: 
  primary-button-dark:
    role: Call to action
  secondary-button-ghost:
    role: Secondary action
  large-rounded-button:
    role: Hero CTA
  input-field:
    role: Data entry
  content-card-subtle-shadow:
    role: Grouped content, data list item
  content-card-no-shadow-border:
    role: Pure content block
  navigation-link-active:
    role: Current page indicator
  pill-badge-category:
    role: Categorization, meta-data
---

## Overview

**North Star:** High-contrast data console. A brightly lit control panel with precise readouts and subtle depth.

Hugging Face presents a UI that feels like a meticulously organized, high-performance data console under bright, even lighting. The visual identity hinges on a subtle interplay of dark grays and bright whites, using minimal accent colors to highlight interactive elements and status. The crisp typography and sharp corners create an atmosphere of precision and utility, while soft shadows add subtle layers of hierarchy without heavy visual weight, making complex data structures feel approachable.

### Do's

- Prioritize Source Sans Pro for all text, using Jet Black (#000000) on light backgrounds for maximum legibility.
- Use 8px border-radius as the default for interactive elements like buttons, input fields, and cards.
- Implement subtle shadows `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` for cards and interactive components to indicate elevation without heavy visual weight.
- Employ Fog Gray (#e5e7eb) for subtle borders and dividers, ensuring visual separation without creating harsh lines.
- Utilize Azure Link (#155dfc) exclusively for interactive text links and primary accents, maintaining its impact through limited use.
- Maintain an element gap of 8px to 16px between elements to ensure a compact yet readable layout.
- Align content to a maximum width of 1280px, with responsive padding, except for full-bleed hero sections.
- Use IBM Plex Mono for all programmatic or technical headings to explicitly differentiate them.

### Don'ts

- Avoid using highly saturated, non-brand colors for large background areas or primary UI elements; reserve them for small accents and badges only.
- Do not introduce strong, dark shadows; stick to the light, single-axis shadow that provides subtle depth.
- Avoid excessive variation in border radii; adhere to the 8px default for most elements and 25.6px for specific large CTAs.
- Do not use gradients as primary backgrounds for content sections; use them only for small, contained feature blocks or decorative elements.
- Never use pure black backgrounds with pure white text on every element, use Carbon (#101828) for dark sections to soften the visual contrast slightly.
- Do not use generic system fonts; always specify Source Sans Pro or IBM Plex Mono.
- Avoid random padding values; stick to multiples of 4px and 8px for vertical and horizontal spacing.

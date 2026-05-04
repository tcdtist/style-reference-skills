---
version: alpha
name: Lazy
description: Lazy operates with a 'stealth dark mode' aesthetic, prioritizing content through deep, muted surfaces and delicate typography. A subtle play of light against dark is achieved through soft, localized gradients and sharp, clean borders. The overall impression is one of quiet efficiency and focused productivity, where UI elements recede until interaction, brought to life by crisp text and carefully applied elevation.
colors:
  midnight-ink: "#0a0a0a"
  carbon-gray: "#26272c"
  slate-surface: "#1a1b1f"
  ash-gray: "#3b3c3e"
  ghost-border: "#8a8c93"
  whisper-gray: "#62646a"
  muted-text: "#535355"
  callout-text: "#e0e0e0"
  pure-white: "#ffffff"
  cloud-burst-gradient-primary: "#b8b8b8"
  deep-space-gradient: "#6c6d77"
  graphite-gradient: "#8c8c93"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: -0.004px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.031px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.23
    letterSpacing: -0.036px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.09
    letterSpacing: 0.048px
spacing:
  cardRadius: 8px
  buttonRadius: 4px
  elementGap: 14px
  sectionGap: 40px
components:
  input-field:
    role: Primary interactive input element
  elevated-tool-card:
    role: Interactive content container with distinction
  primary-ghost-button:
    role: Call to action or navigation link
  product-feature-card:
    role: Neutral content display card
  pill-badge:
    role: Categorization or short label
  navigation-link:
    role: Header navigation item
---

## Overview

**North Star:** Subdued command center

Lazy operates with a 'stealth dark mode' aesthetic, prioritizing content through deep, muted surfaces and delicate typography. A subtle play of light against dark is achieved through soft, localized gradients and sharp, clean borders. The overall impression is one of quiet efficiency and focused productivity, where UI elements recede until interaction, brought to life by crisp text and carefully applied elevation.

### Do's

- Use Carbon Gray (#26272c) as the default background for all new sections.
- Apply Ghost Border (#8a8c93) for hairline separation and subtle element distinction.
- Headlines should leverage Migra 500 for high impact, with letter-spacing 0.048em at 58px and 0.026em at 21px.
- All interactive elements like buttons and inputs should have a border-radius of 4px.
- For card backgrounds, use Slate Surface (#1a1b1f) or Ash Gray (#3b3c3e) and apply a 1px solid #8a8c93 border.
- Text hierarchy should progress from Pure White (#ffffff) for primary headers to Callout Text (#e0e0e0) for body, and Whisper Gray (#62646a) or Muted Text (#535355) for secondary/helper text.
- Ensure large headlines and display text receive negative letter-spacing from Inter, e.g., -0.045em at 55px, for visual density.

### Don'ts

- Do not introduce highly saturated colors for functional UI elements; reserve them for subtle decorative gradients or brand accents.
- Avoid heavy drop shadows or strong visual separation between elements; prefer thin borders and subtle background shifts.
- Do not use generic system fonts; Inter and Migra are critical for the brand's typographic identity.
- Do not use a default padding or margin of less than 6px for interactive elements; elementGap should be at least 14px.
- Do not use solid backgrounds for primary CTA buttons; they should rely on text, outlined borders, or subtle gradients.
- Avoid large blocks of plain, uncommented text; text should be broken up with clear headings and thoughtful spacing.
- Do not use bright white as a general text color on dark backgrounds without specific contrast considerations; Callout Text (#e0e0e0) is preferred for most body content.

### Layout

The page primarily employs a max-width 1200px contained layout, centered on a dark background. The hero section is full-bleed, featuring a grand centered headline over an atmospheric radial gradient. Subsequent sections maintain a consistent vertical rhythm with Carbon Gray (#26272c) backgrounds, interspersed with subtle gradients or slightly lighter surface treatments. Content sections often feature centered typographic stacks for headlines and subheadings, followed by a product screenshot or input simulation. Navigation is a minimal top bar, sticky at scroll, with primary links and a subtle login/signup action.

### Imagery

The imagery is sparse, focusing on abstract graphic elements like blurred, light-emitting circles and radial gradients that give a sense of depth and focus, akin to a lens flare or spotlight. Product screenshots, when present, are tightly cropped, presented with a slight perspective, and encased within UI elements, never full-bleed. Icons are minimal, outlined, and monochromatic, maintaining a subtle presence. The visual language emphasizes UI over decorative graphics, with any non-UI visuals serving to enhance atmosphere rather than convey explicit information.

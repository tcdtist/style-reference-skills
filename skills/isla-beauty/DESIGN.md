---
version: alpha
name: Isla Beauty
description: Isla Beauty presents a clinical-minimal aesthetic: clean white and cream surfaces, precise typography pairing classic serifs with modern sans-serifs, and a bold, singular red accent. Content is structured with a comfortable density, relying on generous spacing and subtle surface variations rather than heavy dividers. The overall impression is one of trusted efficacy and understated luxury.
colors:
  isla-red: "#e4263d"
  pure-black: "#000000"
  ink-grey: "#1a1a1a"
  cream-canvas: "#f8f6f3"
  white-surface: "#ffffff"
  deep-grey: "#2e2e2e"
  warm-grey-border: "#e4dfd9"
  muted-text-grey: "#6f6f6f"
  stone-grey: "#8a8580"
  minimal-border-grey: "#212121"
  soft-peach: "#f5e7df"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.55
    letterSpacing: 0.04px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
    letterSpacing: 0.005px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.05
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: -0.03px
spacing:
  cardRadius: 3px
  buttonRadius: 3px
  elementGap: 10px
  sectionGap: 50px
components:
  primary-action-button:
    role: Primary Call to Action
  ghost-button:
    role: Secondary Action, Navigation
  subtle-link-button:
    role: Tertiary Action, Inline Navigation
  product-card:
    role: Display individual products or features.
  cream-information-card:
    role: Informational panels or content blocks.
  standard-input-field:
    role: User input for forms.
  minimal-badge:
    role: Categorization or lightweight labels.
  highlight-badge:
    role: Emphasized categories or informational tags.
---

## Overview

**North Star:** Clinical purity on a canvas.

Isla Beauty presents a clinical-minimal aesthetic: clean white and cream surfaces, precise typography pairing classic serifs with modern sans-serifs, and a bold, singular red accent. Content is structured with a comfortable density, relying on generous spacing and subtle surface variations rather than heavy dividers. The overall impression is one of trusted efficacy and understated luxury.

### Do's

- Use Cream Canvas (#f8f6f3) as the default background for large content areas to establish the light, clinical tone.
- Apply Isla Red (#e4263d) exclusively for primary action buttons, critical links, and subtle brand accents, ensuring its impact is reserved and clear.
- Pair Nimbus Sans with tight letter spacing for headlines and product titles, applying values like -0.0300em at 68px, to achieve a modern, efficient look.
- Maintain a comfortable density with elementGap of 10px and cardPadding of 15px, providing breathing room between content without feeling sparse.
- Round all interactive elements and cards with a 3px border-radius, subtly softening edges for a consistent, precise feel.
- Use Pure Black (#000000) for primary text and critical borders to ensure high contrast and readability on light backgrounds.
- For emphasized body copy or quotes, use Garamond Italic at weight 400 with a slight positive letter spacing of 0.0050em for legibility at small sizes.

### Don'ts

- Do not use Isla Red (#e4263d) for non-interactive elements or large background areas; its impact should be limited to actions and key highlights.
- Avoid strong shadows or heavy borders on cards and components; rely on background color variations and generous spacing for visual separation.
- Do not introduce additional vibrant colors beyond Isla Red; maintain the largely neutral palette to preserve the clinical, understated aesthetic.
- Steer clear of open, generous letter spacing for headlines; the tighter tracking is a signature element that makes headlines feel concise and impactful.
- Do not use a border-radius value other than 3px for interactive elements and cards, or 999px for pill-shaped elements, as this will disrupt the system's geometric consistency.
- Avoid using multiple different sans-serif families that conflict with Soehne or Nimbus Sans; these two families dictate the modern typographic voice.
- Do not use a strong background image or pattern that competes with the clean surfaces; imagery should be contained and product-focused.

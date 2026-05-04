---
version: alpha
name: Peloton
description: Peloton's design system exudes a premium, focused energy through a dark, high-contrast palette and precise typography. The deep charcoal surfaces with stark white text create an immersive, yet highly legible experience. A vibrant, singular red accent provides crucial points of interaction and brand identity, while large, rounded buttons soften the overall intensity, making the powerful machinery feel approachable.
colors:
  peloton-red: "#df1c2f"
  charcoal-black: "#181a1d"
  pure-white: "#ffffff"
  cool-gray: "#65666a"
  light-pearl: "#f7f7f7"
  silver-mist: "#e4e6e7"
  stone-gray: "#a8acb1"
  concrete-gray: "#888b93"
  shadow-gradient: "#a8acb1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.38
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.39
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.39
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  display-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.07
    letterSpacing: -0.48px
spacing:
  cardRadius: 0px
  buttonRadius: 28px
  elementGap: 8px
  sectionGap: 48-80px
components:
  cta-button-group:
    role: 
  product-lineup-cards:
    role: 
  promo-announcement-banner:
    role: 
  primary-filled-button:
    role: Primary Call to Action
  text-link-button-invisible:
    role: Navigation and subtle interactions
  rounded-icon-button-ghost:
    role: Interactive icons, secondary actions
  rounded-icon-button-subtle-fill:
    role: Interactive icons with subtle visual emphasis
  product-card:
    role: Displaying product items
  standard-input-field:
    role: User data entry
---

## Overview

**North Star:** Dark Studio, Focused Power. Like a high-end fitness studio dimmed for an intense session, with performance data brightly illuminated.

Peloton's design system exudes a premium, focused energy through a dark, high-contrast palette and precise typography. The deep charcoal surfaces with stark white text create an immersive, yet highly legible experience. A vibrant, singular red accent provides crucial points of interaction and brand identity, while large, rounded buttons soften the overall intensity, making the powerful machinery feel approachable.

### Do's

- Use Peloton Red (#df1c2f) exclusively for primary CTAs and critical interactive elements to maintain its high impact.
- Maintain high contrast by pairing Pure White text (#ffffff) with Charcoal Black (#181a1d) backgrounds for maximum legibility.
- Apply 28px border-radius to all primary buttons for a consistent, soft-edged, pill-like appearance.
- Use Inter font family for all text elements, leveraging weights (300-700) and specific letter-spacing (-0.008em to 0.025em) to differentiate hierarchy.
- Employ Charcoal Black (#181a1d) as the primary page and section background to establish a premium, dark aesthetic.
- Utilize 0px border-radius for product cards, allowing internal elements to contain their own radii for visual interest.
- Ensure input fields have a 2px border-radius and Concrete Gray (#888b93) border to visually distinguish them from other interactive elements.

### Don'ts

- Do not introduce additional accent colors; Peloton Red is the single chromatic accent.
- Avoid using box-shadows for elevation; rely on color temperature and surface changes (e.g., translucent fills, gradients) to indicate depth.
- Do not deviate from Inter font family; achieve variety through weights and letter-spacing instead.
- Do not use generic, unrounded buttons; all primary interactive buttons should have the signature 28px radius.
- Avoid excessive spacing between elements; use the base unit of 8px for element gaps to maintain a comfortable density.
- Do not use highly saturated images; imagery should blend with the dark aesthetic, often appearing desaturated or dark-toned.

### Layout

The layout follows a centered, max-width contained model (though no explicit max-width is indicated, content appears centered). The hero section is full-bleed, using a dark background with centered, prominent typography and action buttons. Sections generally feature consistent vertical spacing, creating clear divisions without harsh lines. Content is often stacked centrally or arranged in simple column structures. Card grids are used for product lineups, presenting items with minimal visual boundaries. Navigation is a top-bar sticky header, complemented by a persistent chat button.

### Imagery

Imagery primarily consists of product photography, featuring Peloton equipment in dark, studio-like environments. Products are often showcased in tight crops or isolated with subtle ambient lighting, emphasizing their form and function. There's an absence of lifestyle photography or complex scenic backgrounds. Icons are monochrome, often integrated into buttons or navigation, reinforcing the clean, functional aesthetic. Abstract gradients are used sparingly as subtle background elements to add depth, replacing traditional shadows.

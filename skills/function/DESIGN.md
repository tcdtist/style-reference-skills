---
version: alpha
name: Function
description: Function Health uses a soft, organic health-science aesthetic: light, airy surfaces, grounded typography, and an earthy orange accent. The design feels approachable and trustworthy, balancing scientific rigor with human comfort. Typography mixes a robust sans-serif for functional text with an elegant serif for display headlines, establishing a clear hierarchy. Components are lightweight with generous radii, often featuring subtle background tints to differentiate sections.
colors:
  amber-glow: "#b05a36"
  night-sky: "#2a2b2f"
  charcoal-grey: "#333333"
  faded-stone: "#515151"
  parchment-white: "#fef9ef"
  cream-canvas: "#f5eee1"
  warm-mist: "#d1c9bf"
  slate-border: "#808988"
  off-white: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.322px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.368px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.46px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.552px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.15
    letterSpacing: 0px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.11
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: 0px
spacing:
  cardRadius: 12px
  buttonRadius: 40px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button for primary calls to action.
  ghost-button:
    role: Outlined button for secondary actions, or when less visual prominence is desired.
  text-link-button:
    role: Minimal button styled as a text link.
  feature-card:
    role: Card for showcasing key features or information blocks.
  elevated-content-card:
    role: Card with subtle shadow for emphasized content blocks.
  input-field:
    role: Standard input field for user data entry.
  circular-badge:
    role: Small, decorative circular badge.
---

## Overview

**North Star:** organic science lab

Function Health uses a soft, organic health-science aesthetic: light, airy surfaces, grounded typography, and an earthy orange accent. The design feels approachable and trustworthy, balancing scientific rigor with human comfort. Typography mixes a robust sans-serif for functional text with an elegant serif for display headlines, establishing a clear hierarchy. Components are lightweight with generous radii, often featuring subtle background tints to differentiate sections.

### Do's

- Use Ftbase for all body text, navigation, and functional headings at Ftbase weight 400 for optimal readability.
- Apply Amber Glow (#b05a36) exclusively for primary interactive elements, brand iconography, and accents, ensuring it is a consistent focal point.
- Maintain a generous border radius of 40px for all interactive buttons and 12px for cards to convey a soft, friendly aesthetic.
- Employ Parchment White (#fef9ef) as the primary background for all page sections, reserving Cream Canvas (#f5eee1) and Warm Mist (#d1c9bf) for subtle content differentiation.
- Utilize Financier Display for all major headings above 34px, emphasizing its lighter weights (300, 400) for an elegant and inviting feel.
- Ensure input fields have a 1440px border-radius, creating a distinct pill shape, with a Slate Border (#808988).
- Space elements with multiples of 8px, using 16px for `elementGap` and 25px for `cardPadding` to maintain a comfortable visual rhythm.

### Don'ts

- Do not introduce new vivid colors; Amber Glow (#b05a36) is the sole saturated accent color.
- Avoid heavy shadows; use rgba(42, 43, 47, 0.1) 12px 32px 80px 0px sparingly for only the most elevated content.
- Do not use dark backgrounds that contrast sharply with the established light theme; maintain the soft, airy feel.
- Do not use Ftbase for large display headings; reserve Financier Display for these to preserve typographic hierarchy.
- Avoid tight spacing; maintain the comfortable density established by 16px element gaps and 25px card padding.
- Do not use sharp corners; all interactive elements and most containers should use generous border radii (40px or 12px).

### Layout

The page primarily uses a max-width contained layout of 1434px, with content centered. The hero section, however, is full-bleed, featuring a large background image with centered, overlaid text and a call to action. Subsequent sections alternate between two dominant patterns: a centered stack of content (like 'Testing is easy' cards) or alternating two-column layouts featuring text on one side and a visual element on the other. Vertical rhythm is maintained by consistent section gaps. Navigation is a sticky top bar, lightweight with minimal branding and a clear primary action button.

### Imagery

The site uses diverse imagery. The hero section features a desaturated, slightly hazy photographic background of a figure running, conveying a sense of aspiration and nature-infused health. Other sections utilize minimal, clean product-illustration style graphics depicting simple data visualizations (like a line graph) and an abstract calendar. Icons are generally outlined with a medium stroke weight. The overall feel is a balance of soft, aspirational photography and clear, illustrative explanations. Imagery is generally contained within sections or cards, with the hero being a full-width background element.

---
version: alpha
name: Shelby
description: Shelby presents as a bold, almost playful take on enterprise software, fusing a deep, rich cacao-brown with a vibrant, energetic hot pink. This highly chromatic palette creates a high-contrast experience, where text and key elements pop dramatically. The use of custom, strong sans-serif typography paired with a monospaced font reinforces a technical yet approachable identity, while sharp corners are softened by occasional, deliberate slight rounding, hinting at precision within expressiveness.
colors:
  shelby-cacao: "#322312"
  shelby-rose-dust: "#FFDFEF"
  shelby-hibiscus-pink: "#FF77C9"
  shelby-plum: "#470B64"
  shelby-mauve: "#FFC2E1"
  shelby-lavender-mist: "#EEE2FF"
  shelby-deep-rose: "#481D2A"
  shelby-steel-grey: "#5B4F41"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.15
    letterSpacing: -0.42px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 59px
    lineHeight: 0.95
    letterSpacing: -0.47px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 95px
    lineHeight: 0.9
    letterSpacing: -0.76px
spacing:
  cardRadius: 9.89583px
  buttonRadius: 3.95833px
  elementGap: 15px
  sectionGap: 40px
components:
  ghost-button-hot-pink:
    role: Primary Call to Action
  outline-button-rounded-hot-pink:
    role: Secondary Call to Action
  filled-button-plum:
    role: Alternative Call to Action on Dark Backgrounds
  card-hot-pink:
    role: Highlight Card
  card-muted-pink:
    role: Information Card
  card-vivid-violet:
    role: Accent Card
  badge-transparent-dark:
    role: Category Tag
  badge-transparent-light:
    role: Highlighted Tag
  navigation-link:
    role: Primary Navigation Element
---

## Overview

**North Star:** Cacao and neon pink. A dark, rich canvas illuminated by electric, playful accents.

Shelby presents as a bold, almost playful take on enterprise software, fusing a deep, rich cacao-brown with a vibrant, energetic hot pink. This highly chromatic palette creates a high-contrast experience, where text and key elements pop dramatically. The use of custom, strong sans-serif typography paired with a monospaced font reinforces a technical yet approachable identity, while sharp corners are softened by occasional, deliberate slight rounding, hinting at precision within expressiveness.

### Do's

- Use Shelby Hibiscus Pink (#FF77C9) exclusively for primary interactive elements and key brand accents to maximize impact.
- Maintain high contrast between text and backgrounds, pairing Shelby Cacao (#322312) with Shelby Rose Dust (#FFDFEF) or Shelby Hibiscus Pink (#FF77C9).
- Apply GT-Planar for all headings and substantial body text to leverage its distinctive weight variations and letter spacing.
- Employ the 3.95833px border-radius for buttons and badges, reserving the larger 9.89583px for cards to differentiate components.
- Ensure horizontal padding consistency with elementGap: 15px for most UI elements and cardPadding: 15px for internal card content.
- Transition `color`, `background-color`, and `filter` over 0.3s with `ease` timing for all interactive state changes.

### Don'ts

- Do not introduce new saturated colors outside of the defined brand and neutral palette to avoid visual clutter.
- Do not use generic system fonts; stick to GT-Planar, SuisseIntl, and ABCReproMono for all typography to maintain brand identity.
- Avoid using drop shadows for elevation; rely instead on background color changes to denote hierarchy and depth.
- Do not use letter-spacing values other than -0.0400em or -0.0200em for GT-Planar, and normal for other fonts.
- Do not vary border radii arbitrarily; adhere strictly to 3.95833px for small components and 9.89583px for cards.
- Do not use solid borders unless explicitly defined in a component variant (e.g., 1px bottom border for ghost buttons).

### Imagery

The site employs a mix of abstract graphics and illustrative elements, rather than photography or detailed product screenshots. These graphics feature blocky, geometric shapes, sometimes layered or angled, often using the brand's core colors (Shelby Hibiscus Pink, Shelby Cacao, Shelby Mauve). Icons are simple, outlined, and monochromatic, primarily used for functional clarity. Overall, imagery serves as decorative atmosphere or to subtly break up text, consistent with the abstract, technical yet bold brand identity. Density is moderate, supporting the text rather than dominating the visual space.

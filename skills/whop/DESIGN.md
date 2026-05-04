---
version: alpha
name: Whop
description: Whop presents a confident, high-contrast digital canvas with a striking orange accent. Typography is central, using large, tightly tracked sans-serif headlines for impactful statements and a comfortable mono-spaced font for technical details. Surfaces are predominantly white, creating a crisp backdrop for the energetic primary orange, grounded by a subtle shadow effect that adds minimal depth. Interactivity is clearly defined through the bold orange for primary actions and soft, rounded ghost buttons for secondary choices, balancing directness with approachability.
colors:
  canvas-white: "#ffffff"
  dark-graphite: "#202020"
  medium-gray: "#646464"
  light-gray: "#838383"
  border-silver: "#bbbbbb"
  very-light-gray: "#e1e4e8"
  dark-surface: "#0a0a0a"
  whop-orange: "#fa4616"
  orange-shadow: "#b62600"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.013px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.011px
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 1
    letterSpacing: -0.03px
spacing:
  cardRadius: 24px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 64px
components:
  primary-action-button:
    role: Main call-to-action
  ghost-secondary-button:
    role: Alternative action, navigation
  tab-button:
    role: Category filtering, sub-navigation
  feature-card:
    role: Information display, product showcases
  subtle-background-card:
    role: Grouped content section
---

## Overview

**North Star:** Clean, bold, and energetic.

Whop presents a confident, high-contrast digital canvas with a striking orange accent. Typography is central, using large, tightly tracked sans-serif headlines for impactful statements and a comfortable mono-spaced font for technical details. Surfaces are predominantly white, creating a crisp backdrop for the energetic primary orange, grounded by a subtle shadow effect that adds minimal depth. Interactivity is clearly defined through the bold orange for primary actions and soft, rounded ghost buttons for secondary choices, balancing directness with approachability.

### Do's

- Prioritize acidGroteskFont for any headline larger than 48px, always with letter-spacing -0.0300em and `Dark Graphite` text.
- Use `Whop Orange` (#fa4616) exclusively for primary interactive elements, brand iconography, and meaningful accents, never for decorative backgrounds.
- Apply an 8px border-radius consistently to all buttons, input fields, and small interactive elements.
- Maintain a clear visual hierarchy by limiting shadows primarily to the `Orange Shadow` (#b62600) on buttons, avoiding complex elevation stacks.
- Employ `Geist Mono` for all code-style text, ensuring fixed width and 1.5 lineHeight.
- Ensure `Canvas White` (#ffffff) is the dominant page background, reserving `Dark Surface` (#0a0a0a) for specific, clearly delineated card or container elements.
- Utilize 24px as a standard vertical and horizontal gap between major content sections and card grids.

### Don'ts

- Do not deviate from the specified type scale and letter spacing values for headlines; the tight tracking is a signature element.
- Avoid using multiple chromatic colors; `Whop Orange` is the sole brand accent and color should primarily be achromatic.
- Do not apply drop shadows to elements other than the Primary Action Button, as distinct elevation is kept minimal.
- Never use arbitrary gray shades; adhere strictly to `Dark Graphite`, `Medium Gray`, `Light Gray`, and `Border Silver` for all neutral text and border needs.
- Do not create rounded corners on cards that are not either 24px or 12px, as these are the established card radius values.
- Avoid background patterns or gradients unless they are an integral part of explicit primary calls-to-action and aligned with `Whop Orange`.
- Do not use `Whop Orange` text on `Canvas White` for body copy, as it is reserved for higher-impact accents.

### Layout

The page maintains a centered, max-width layout, approximately 1200px wide, framed by a full-bleed `Canvas White` background, creating a spacious feel. The hero section features a prominent, centered headline with a primary call-to-action. Content sections typically alternate between full-width centered text blocks and multi-column grids, notably a 5-column layout for showcasing product categories with individual mobile app previews. Vertical rhythm is established with generous `64px` section gaps, ensuring clear separation and comfortable reading. A sticky top navigation bar provides consistent access to key links.

### Imagery

The site uses product screenshots of mobile apps, meticulously framed within device mockups, sometimes on slightly varied gray backgrounds. These are mainly explanatory, showcasing the core product functionality with a direct, focused approach. Iconography is minimal, primarily leveraging outlined or filled monochrome icons (`Dark Graphite` or `Medium Gray`). The design avoids lifestyle photography or abstract illustrations, opting for a functional, product-centric visual language.

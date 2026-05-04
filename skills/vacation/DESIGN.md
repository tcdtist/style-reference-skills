---
version: alpha
name: Vacation®
description: Vacation® embraces a nostalgic, playful aesthetic, evoking mid-century leisure with a modern e-commerce functional layer. Its visual language balances warm, sun-kissed neutrals with a single prominent yellow-gold accent for primary interactions. Typography is a key differentiator, combining a variety of custom serif and sans-serif fonts to create a distinct, editorial feel. Components are generally soft and rounded, with subtle shadow details that nod to physical objects rather than stark digital interfaces.
colors:
  midday-sand: "#f1d27a"
  ocean-blue: "#23659f"
  coral-sunset: "#d1796d"
  breezy-teal: "#39aaa7"
  electric-violet: "#0048ff"
  graphite: "#333333"
  parchment-white: "#e5e7eb"
  cloud-cover: "#ffffff"
  faded-cinder: "#6a6966"
  pale-ash: "#dddddd"
  slate-cloud: "#778899"
  sky-haze: "#b0c4de"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
    letterSpacing: 0.4px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.256px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.32px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.9
    letterSpacing: -0.972px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.8
    letterSpacing: -1.44px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 0.86
    letterSpacing: -9.6px
spacing:
  cardRadius: 5px
  buttonRadius: 9999px
  elementGap: 20px
  sectionGap: 30px
components:
  pill-button-midday-sand:
    role: Primary call to action button.
  ghost-button-light-text:
    role: Secondary navigation or subtle actions on dark backgrounds.
  coupon-card:
    role: Promotional modal or featured content display.
  text-input-light:
    role: Form text input field on light backgrounds.
  text-input-dark:
    role: Form text input field on dark backgrounds.
  circular-electric-violet-button:
    role: Small, distinct interactive element, potentially for accessibility or unique actions.
  underlined-navigation-button:
    role: Header or footer navigation items.
---

## Overview

**North Star:** Sun-kissed retro comfort

Vacation® embraces a nostalgic, playful aesthetic, evoking mid-century leisure with a modern e-commerce functional layer. Its visual language balances warm, sun-kissed neutrals with a single prominent yellow-gold accent for primary interactions. Typography is a key differentiator, combining a variety of custom serif and sans-serif fonts to create a distinct, editorial feel. Components are generally soft and rounded, with subtle shadow details that nod to physical objects rather than stark digital interfaces.

### Do's

- Use Midday Sand (#f1d27a) for all primary interactive elements, including button backgrounds and accent borders.
- Apply ITCGaramondStd-LtCond for display-level text to maintain the editorial, nostalgic feel, varying weights and letter-spacing as per type scale.
- Utilize a 9999px border-radius for all primary buttons and tags to create soft, pill-shaped components.
- Implement the -2px -2px 0px 0px inset shadow on elements requiring a 'physical' or 'coupon-like' visual edge.
- Maintain a comfortable density with element gaps of 20px and card padding of 27px, ensuring visual breathing room.
- For subtle accents, use Ocean Blue (#23659f) and Coral Sunset (#d1796d) as border colors for ghost buttons or link underlines.
- Prioritize Graphite (#333333) for all primary text content to ensure high contrast and readability on light backgrounds.

### Don'ts

- Avoid using stark white backgrounds (#ffffff) unless for specific input fields or elevated surfaces; prefer Parchment White (#e5e7eb) for general canvas.
- Do not use highly saturated, modern gradients; the system relies on solid colors and subtle vintage-inspired effects.
- Refrain from sharp, angular corners; components should generally feature rounded corners (5px for cards, 9999px for buttons).
- Do not choose system default fonts for headings or body text; always use the specified custom font families.
- Avoid heavy drop shadows for general elevation; use the subtle inset shadows or the specific rgba(0,0,0,0.75) 0px 1.5px 1.5px 0px shadow for buttons.
- Do not introduce new vibrant colors outside the defined accent palette; color should be used sparingly for specific functional or nostalgic emphasis.

### Layout

The page primarily utilizes a fluid, full-bleed layout rather than a fixed maximum width. The hero section often features large, impactful imagery or typography, sometimes with elements extending to the edges. Content sections tend to have consistent vertical spacing, often with alternating light/dark background bands that create a clear visual rhythm. Content arrangement frequently uses centered stacks for headlines and calls to action, or occasionally a text-left/image-right alternating pattern within sections. Navigation is a minimalist top bar with 'Menu' and 'Bag' links, avoiding dropdowns or complex mega-menus.

### Imagery

This site uses an eclectic mix of vintage-inspired photography and product shots, often with a golden-hour, sun-drenched aesthetic. Product photography is clean, typically showing items in isolated vignettes. Illustrations lean into a playful retro style, sometimes mimicking graphic elements from the 60s-80s (e.g., the coupon's barcode and dashed border). Icons are primarily simple, outlined, and monochromatic, matching the surrounding text. Imagery serves both decorative and explanatory roles, evoking a sense of nostalgia and aspiration for leisure.

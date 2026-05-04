---
version: alpha
name: Icam inox s.r.l.
description: The Icam visual system is a study in stark monochrome contrast and material precision. It pairs crisp, confident typography with expansive white and deep black surfaces, creating a sense of technical authority. Subtle, large radius rounded corners soften rigid forms, while minimal borders and generous spacing maintain an airy, professional feel. The design emphasizes content through direct visual hierarchy rather than ornamental complexity.
colors:
  absolute-black: "#000000"
  heavy-graphite: "#090909"
  deep-shadow: "#0f0f0f"
  charcoal-text: "#333333"
  medium-gray: "#535353"
  silver-link: "#aaaaaa"
  near-white: "#f3f3f3"
  pure-white: "#ffffff"
  decorative-gray-blue: "#a0a9b9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.17
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.17
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.17
  body-lg:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.17
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.17
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
  display-sm:
    fontFamily: "system-ui"
    fontSize: 259px
    lineHeight: 1.17
spacing:
  cardRadius: 20px
  buttonRadius: 20px
  elementGap: 10px
components:
  primary-filled-button:
    role: Call to action button for prominent actions.
  outlined-ghost-button:
    role: Secondary action button, typically for navigation or less critical actions.
  feature-card:
    role: Used for showcasing distinct features or categories.
  text-link:
    role: Navigational links and inline text links.
---

## Overview

**North Star:** Monochrome industrial precision

The Icam visual system is a study in stark monochrome contrast and material precision. It pairs crisp, confident typography with expansive white and deep black surfaces, creating a sense of technical authority. Subtle, large radius rounded corners soften rigid forms, while minimal borders and generous spacing maintain an airy, professional feel. The design emphasizes content through direct visual hierarchy rather than ornamental complexity.

### Do's

- Use Inter for all typography, leveraging its multiple weights to define hierarchy from display to body text.
- Apply Absolute Black (#000000) for primary headlines and Pure White (#ffffff) for light section backgrounds, establishing high contrast.
- Maintain a comfortable density with 10px element gaps for most inline elements and 64px or 71px vertical section spacing.
- Form all buttons and cards with a 20px border-radius to consistently introduce a soft, rounded aesthetic.
- Utilize Near White (#f3f3f3) for card backgrounds and secondary light surfaces to distinguish them from the main Pure White (#ffffff) canvas.
- Employ tightly tracked letter-spacing for large display text, such as -0.0720em for 259px, to achieve a condensed, impactful visual.

### Don'ts

- Do not introduce additional color beyond the established monochrome palette, including new accent or brand colors.
- Avoid box shadows or gradients; rely on contrasting surfaces, typography, and borders for visual hierarchy.
- Do not use letter-spacing on body text; keep it at normal for optimal readability.
- Do not deviate from the 20px border-radius for buttons and cards; sharp or smaller radii will break the visual consistency.
- Do not add unnecessary decorative elements; the design emphasizes functional clarity through direct presentation.
- Avoid dense information blocks; maintain generous spacing between elements and sections to preserve an airy, open feel.

### Layout

The page primarily uses a full-bleed layout, particularly for the hero section which can be a stark black canvas with prominent white typography. Content sections below often alternate between full-width black and white backgrounds, creating strong vertical rhythm. Within these sections, content appears to be structured in a max-width, center-aligned manner for readability over extensive line lengths, though a specific `pageMaxWidth` is not enforced globally. Feature sections utilize a grid of cards, likely 3-column. The navigation sits in a fixed header with minimal elements, usually a logo, language switcher, and a hamburger menu icon.

### Imagery

The visual language predominantly features high-contrast, product-focused photography of stainless steel and industrial components. Images are typically tightly cropped, showcasing the material and form directly without extraneous context or lifestyle elements. They are contained within card-like structures or used as backgrounds. The sparse use of icons is limited to outlined, monochrome symbols, primarily for navigation or utility. The overall impression is one of material honesty and technical precision, using imagery to illustrate product rather than decorate.

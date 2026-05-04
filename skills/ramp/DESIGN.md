---
version: alpha
name: Ramp
description: The Ramp design system evokes the precision and quiet authority of a financial control panel operating in a deep ocean environment. Its foundation is a dark theme, utilizing a rich `#0c0a08` background and surfaces that progressively lighten to reveal hierarchy, like submerged objects reflecting distant light. Typography, primarily Lausanne, sets a technical yet approachable tone with its clean geometry and a prominent use of 'ss01' font feature, ensuring figures and characters align perfectly. Vibrant yellow accents (`#e4f222`) serve as critical interaction indicators, cutting through the deep blue and near-black neutrals like sonar beacons, guiding the user through complex financial interfaces.
colors:
  deep-space-black: "#0c0a08"
  pure-white: "#ffffff"
  ash-gray: "#1a1919"
  charcoal-black: "#000000"
  ivory-white: "#f4f2f0"
  slate-gray: "#999ba3"
  iron-gray: "#4d505d"
  midnight-ink: "#010412"
  ocean-abyss: "#0b0d1b"
  silver-mist: "#d2cecb"
  sunbeam-yellow: "#e4f222"
  emerald-green: "#00d638"
  deep-sea-blue: "#5683d2"
  electric-blue: "#0066ff"
  blaze-orange: "#ff492c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.17
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.05
spacing:
  cardRadius: 12px
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-call-to-action-button:
    role: Interactive
  secondary-ghost-button:
    role: Interactive
  text-link-button:
    role: Interactive
  dark-filled-button:
    role: Interactive
  product-feature-card:
    role: Display
  dark-marketing-card:
    role: Display
  testimonial-card:
    role: Display
  outline-card:
    role: Display
  input-field-dark-background:
    role: Interactive
  input-field-light-background:
    role: Interactive
  input-field-focused-active:
    role: Interactive
---

## Overview

**North Star:** Deep Ocean Command Center – a stark, high-contrast control panel set against an endless dark expanse.

The Ramp design system evokes the precision and quiet authority of a financial control panel operating in a deep ocean environment. Its foundation is a dark theme, utilizing a rich `#0c0a08` background and surfaces that progressively lighten to reveal hierarchy, like submerged objects reflecting distant light. Typography, primarily Lausanne, sets a technical yet approachable tone with its clean geometry and a prominent use of 'ss01' font feature, ensuring figures and characters align perfectly. Vibrant yellow accents (`#e4f222`) serve as critical interaction indicators, cutting through the deep blue and near-black neutrals like sonar beacons, guiding the user through complex financial interfaces.

### Do's

- Prioritize text legibility by using Pure White (`#ffffff`) for primary text on Deep Space Black (`#0c0a08`) or Ocean Abyss (`#0b0d1b`) backgrounds.
- Use Sunbeam Yellow (`#e4f222`) exclusively for primary call-to-action buttons and active navigation states to clearly signal interaction points.
- Apply 12px border-radius to all cards and larger container elements for a consistent soft-edged feel.
- Maintain a clear visual hierarchy by utilizing the surface progression: Deep Space Black (`#0c0a08`) for canvas, Ash Gray (`#1a1919`) for elevated cards, and Ocean Abyss (`#0b0d1b`) for interactive elements on dark backgrounds.
- Ensure headings use the 'lausanne' font with its 'ss01' font feature for precise number and character alignment, crucial for financial data.
- Use 8px as the default `elementGap` for consistent spacing between UI elements, reserving smaller increments for fine-tuning dense interfaces.
- For all navigation and buttons, apply a 4px border-radius to create a distinct, slightly softer interaction target.

### Don'ts

- Do not use Sunbeam Yellow (`#e4f222`) for decorative purposes or non-interactive elements, as it dilutes its primary CTA role.
- Avoid arbitrary color choices; every color must map to a defined role within the palette to maintain cohesion.
- Do not introduce new shadow styles; adhere to the subtle inset white shadow (`rgba(255, 255, 255, 0.6) 0px 0px 2px 0px inset`) for nav and the default no shadows for cards.
- Do not use generic system fonts for primary UI text; always prefer 'lausanne' with its 'ss01' feature for brand consistency and precision.
- Avoid varying component padding; stick to the specified padding for buttons (e.g., 10px vertical, 20px horizontal) and cards (e.g., 24px for outlined cards) to maintain rhythmic spacing.
- Do not use pure black (`#000000`) for extensive text; reserve it for illustrative elements or very specific, high-contrast contexts.

### Imagery

The site heavily relies on product screenshots and 3D renders. Product screenshots are typically high-fidelity UI captures, often shown on modern devices (laptops, phones) with a clean, focused presentation. 3D renders feature abstract shapes or physical representations of credit cards, using monochromatic or deep-toned palettes that align with the dark theme. Photography is present in customer testimonial sections, showing professionals in office environments, often within a card-like container with rounded corners and muted or natural lighting. Iconography is generally outlined, monochromatic (white on dark, dark on light), with a consistent stroke weight, and serves primarily to explain features rather than purely decorate. The overall density of imagery is balanced, with large hero visuals and then smaller, contained images within feature sections.

### Elevation

The design system minimizes overt use of shadows, primarily relying on changing background colors of surfaces (Deep Space Black to Ash Gray to Ocean Abyss) and subtle borders to create depth. When shadows are present, they are either an almost imperceptible inset white line on the nav bar or implicitly soft, almost uncolored `box-shadow` values like `Midnight Ink` (`#010412`) to hint at elevation without heavy visual weight.

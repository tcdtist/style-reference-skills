---
version: alpha
name: Fluz
description: Fluz employs a vibrant, energetic visual style, characterized by bold, condensed typography on gradients with floating illustrative elements. The UI balances strong, dark text against light or gradient backgrounds, emphasizing action and impact. Components are designed with soft, rounded edges and prioritize clear calls to action, maintaining a playful yet assertive tone.
colors:
  money-max-black: "#1a0000"
  sky-blue: "#98bbf4"
  forest-noir: "#11190c"
  canvas-white: "#ffffff"
  mist-gray: "#f2f2f2"
  light-cloud: "#ededec"
  iron-slate: "#3a3a3a"
  onyx-shadow: "#221919"
  subtle-ash: "#514f4c"
  pebble-gray: "#aeaea6"
  hero-gradient-green-to-blue: "#82befe"
  hero-gradient-vertical: "#7db4f4"
  dark-gradient-background: "#262221"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.016px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.15
    letterSpacing: -0.025px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.91
    letterSpacing: -0.025px
spacing:
  cardRadius: 20px
  buttonRadius: 100px
  elementGap: 5px
  sectionGap: 40px
components:
  primary-action-button:
    role: High-impact call to action
  outline-ghost-button:
    role: Secondary or tertiary action
  light-muted-button:
    role: Informational or inactive states
  floating-content-card:
    role: Showcasing features or content blocks
  product-display-card:
    role: Presenting product visuals
  hero-section-callout-card:
    role: Primary informational sections requiring visual distinction
---

## Overview

**North Star:** Vivid gradient playground

Fluz employs a vibrant, energetic visual style, characterized by bold, condensed typography on gradients with floating illustrative elements. The UI balances strong, dark text against light or gradient backgrounds, emphasizing action and impact. Components are designed with soft, rounded edges and prioritize clear calls to action, maintaining a playful yet assertive tone.

### Do's

- Use Greed Condensed SemiBold 700 with letter spacing from -0.030em to -0.005em for all prominent headings to maintain high impact.
- Apply 200px border-radius to all primary action buttons for a consistent pill-shaped appearance.
- Utilize the Hero Gradient Green to Blue for primary hero sections, ensuring a dynamic and brand-aligned background.
- Structure major page sections with a 40px section gap for comfortable breathing room.
- Employ Money Max Black (#1a0000) for all primary text elements to ensure strong contrast and brand recognition.
- Use a Light Cloud (#ededec) background for ghost buttons and subtle interactive elements.
- Maintain a 1750px pageMaxWidth for horizontal content containment, creating a wide but controlled layout experience.

### Don'ts

- Avoid sharp corners; ensure all containers, cards, and buttons use a minimum 20px radius unless specifically constrained by imagery.
- Do not use generic system fonts for display headings; always prioritize Greed Condensed SemiBold or its substitutes for brand consistency.
- Refrain from using overly high-contrast borders on cards; prefer soft or transparent backgrounds with subtle elevation for depth.
- Do not introduce new primary action colors; stick to Money Max Black (#1a0000) for filled buttons and Forest Noir (#11190c) for outlined buttons.
- Avoid dense packing of elements; maintain at least 5px for element gaps to preserve readability and visual comfort.
- Do not use subtle, muted colors for primary calls to action; these should always be bold and clear using Money Max Black.
- Do not alter the tight letter spacing of Greed Condensed SemiBold for headlines; it is integral to its visual impact.

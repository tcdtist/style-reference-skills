---
version: alpha
name: Learn UX Design
description: Uxcel employs a crisp, professional learning platform aesthetic: a bright white canvas framed by subtle gray surface cards. A vibrant violet accent color is precisely delivered as active states and primary calls-to-action, contrasting sharply with the otherwise monochrome palette. Typography is tightly tracked, creating a dense, information-rich feel, while generous border-radii on all interactive elements soften the overall impression, balancing seriousness with approachability.
colors:
  ink-black: "#05060f"
  virtual-violet: "#513deb"
  cloud-white: "#ffffff"
  whisper-gray: "#f8f8f8"
  stone-gray: "#696a6f"
  platinum-gray: "#d7d7d9"
  interaction-violet: "#9282fa"
  dark-violet-text: "#452dbd"
  success-green: "#269432"
  muted-violet-background: "#ede8ff"
  light-success-green: "#d4fcd8"
  info-blue: "#2571cc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.7
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.7
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.12
    letterSpacing: -1.45px
spacing:
  cardRadius: 20px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-action-button:
    role: Call-to-action for 'Get started'
  ghost-primary-action-button:
    role: Subtle alternative primary action, often paired with filled button
  category-tag-button:
    role: Interactive filter or category label
  badge-success:
    role: Indicates positive status or achievement
  badge-info-violet:
    role: Labels categories or provides informational tags
  card-content-overview:
    role: Container for feature blocks or course descriptions
  card-minimal:
    role: Lightweight container for lists or simple groups
  pill-filter:
    role: Small, rounded interactive filter buttons
  navigation-link:
    role: Primary site navigation items
---

## Overview

**North Star:** whiteboard and violet ink. A stark white teaching surface, annotated with confident, vivid purple markings to guide and activate.

Uxcel employs a crisp, professional learning platform aesthetic: a bright white canvas framed by subtle gray surface cards. A vibrant violet accent color is precisely delivered as active states and primary calls-to-action, contrasting sharply with the otherwise monochrome palette. Typography is tightly tracked, creating a dense, information-rich feel, while generous border-radii on all interactive elements soften the overall impression, balancing seriousness with approachability.

### Do's

- Prioritize a bright, spacious feel: use Cloud White (#ffffff) for primary backgrounds and Whisper Gray (#f8f8f8) for secondary section backgrounds.
- Use Virtual Violet (#513deb) exclusively for critical calls-to-action and active interactive states to maintain its impact.
- Apply Inter typeface with precise letter-spacing; use tight tracking (e.g., -1.45px for display, -0.96px for display-sm) for headlines to create a sharp, modern feel.
- Employ generous border-radii: 20px for cards, buttons, and contained elements, and 100px for all pill-shaped buttons and interactive tags.
- Define interactive elements with subtle borders like 1px Platinum Gray (#d7d7d9) or 10% opacity Ink Black (#05060f) when not using a filled background.
- Utilize elevation only for prominent cards, applying the shadow rgba(0, 19, 41, 0.01) 0px 10px 32px 0px, rgba(0, 19, 41, 0.02) 0px 2px 0px 0px, rgba(0, 19, 41, 0.02) 0px 0px 24px 0px.

### Don'ts

- Do not use saturated colors other than Virtual Violet (#513deb) for primary interactive elements; reserve other chromatic colors for semantic badges.
- Avoid heavy shadows or gradients on anything but the most important elevated cards; keep surfaces flat and bright.
- Do not introduce additional font families or vary letter-spacing for Inter beyond the defined tight values.
- Never use Cloud White (#ffffff) as text on any light background; always ensure a minimum contrast ratio of 7:1 against main content backgrounds.
- Refrain from altering the default 20px border-radius for cards or 100px for buttons, as these are signature elements.
- Do not place multiple primary call-to-action buttons side-by-side; use one filled Virtual Violet (#513deb) button and a ghost alternative.

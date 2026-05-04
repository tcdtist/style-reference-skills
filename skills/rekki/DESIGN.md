---
version: alpha
name: REKKI
description: REKKI embodies a 'night vision command center' aesthetic, utilizing a predominantly dark theme with sharp, almost glowing typography, and carefully chosen pops of vivid blue for primary actions. The interface balances information density with generous padding within components, creating distinct content blocks that stand out against the deep night-mode background. Surface treatments are subtle, relying on slight tonal shifts for hierarchy, almost no shadows, and rounded corners which soften the otherwise assertive, utilitarian design.
colors:
  absolute-zero: "#000000"
  deep-space: "#040910"
  charcoal-grey: "#0d0d0d"
  input-charcoal: "#1f1f1f"
  dark-card: "#2b2c2e"
  cloud-white: "#ffffff"
  steel-gray: "#858585"
  light-steel: "#8c8c8c"
  blue-neon: "#0063e1"
  mid-grey: "#979797"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0.48px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.126px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.648px
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.25
    letterSpacing: -2.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -3.024px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1
    letterSpacing: -5.504px
spacing:
  cardRadius: 8px
  buttonRadius: 59px
  elementGap: 20px
  sectionGap: 56px
components:
  primary-action-button:
    role: Call to action
  secondary-action-button:
    role: Alternative call to action
  ghost-text-button:
    role: Subtle UI interaction
  dark-base-card:
    role: Content container
  semi-transparent-card:
    role: Overlay content, context cards
  top-rounded-input-card:
    role: Dialog or input grouping
  input-field:
    role: Data entry
---

## Overview

**North Star:** Midnight Command Center

REKKI embodies a 'night vision command center' aesthetic, utilizing a predominantly dark theme with sharp, almost glowing typography, and carefully chosen pops of vivid blue for primary actions. The interface balances information density with generous padding within components, creating distinct content blocks that stand out against the deep night-mode background. Surface treatments are subtle, relying on slight tonal shifts for hierarchy, almost no shadows, and rounded corners which soften the otherwise assertive, utilitarian design.

### Do's

- Prioritize 'Absolute Zero' (#000000) as the canvas background for most page sections, ensuring a dark theme is consistently applied.
- Use 'Blue Neon' (#0063e1) exclusively for primary calls-to-action, active navigation states, and key interactive elements to create focus.
- Apply a 59px border-radius to all primary and secondary action buttons, providing a distinct pill shape.
- Utilize 'Diatype REKKI Medium' for all main headlines (56px, 72px, 86px) with precise negative letter-spacing values to emphasize its sharp, technical feel.
- Employ the 8px border-radius for general content cards and the more extreme 100px radius for input fields to differentiate element types.
- Use 'Cloud White' (#ffffff) for primary text on dark backgrounds and 'Steel Gray' (#858585) for muted or secondary text.
- Maintain an 'elementGap' of 20px and 'cardPadding' of 32px to ensure a comfortable density and clear separation within components and content blocks.

### Don'ts

- Do not introduce new saturated accent colors beyond 'Blue Neon' (#0063e1); maintain the dark/monochromatic base with a single color highlight.
- Avoid heavy drop shadows; elevation is primarily achieved through subtle background color shifts between 'Absolute Zero' and 'Dark Card' or 'Deep Space'.
- Do not deviate from the specified extreme border-radii for interactive elements; the 59px (buttons) and 100px (inputs) radius are signature elements.
- Refrain from using 'sans-serif' system font for primary UI text; always use the specific 'Diatype REKKI' fonts to maintain brand typography.
- Do not use generic padding values; adhere to the base unit of 4px and derived component padding (e.g., 32px for cards, 24px for inputs).
- Avoid full-bleed section backgrounds that are not 'Absolute Zero' or a very dark neutral; sections should either be contained or maintain the dark theme.
- Do not use highly textured or photographic backgrounds within core UI components; keep surfaces clean, flat, and dark.

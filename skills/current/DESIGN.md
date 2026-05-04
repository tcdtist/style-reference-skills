---
version: alpha
name: Current
description: Current uses a crisp, high-contrast visual system built on a bright white canvas. Typography is the primary means of conveying hierarchy, with precise letter-spacing and varying weights providing clarity. Functional elements are often minimalist, relying on strong outlines or simple fills, and the brand accent color appears as a subtle, unexpected gradient in specific interactive contexts, avoiding overt saturation for a sophisticated feel. The overall impression is direct and confident.
colors:
  storm-anthracite: "#000000"
  cloud-white: "#ffffff"
  skyline-gray: "#737582"
  faded-steel: "#dfe5ec"
  ghost-fill: "#ebeff2"
  deep-space: "#4e525e"
  current-gradient: "#f4cb45"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.31px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1
    letterSpacing: -3.6px
spacing:
  cardRadius: 30px
  buttonRadius: 9999px
  elementGap: 24px
  sectionGap: 80px
components:
  filled-primary-button:
    role: Action button with dark background.
  outlined-secondary-button:
    role: Secondary action button with light background.
  ghost-action-button:
    role: Minimalist interactive element, often for 'Learn More' or informational actions.
  mobile-number-input-field:
    role: User input for contact information.
  information-icon-button:
    role: Small, interactive icon for tooltips or additional context.
  minimal-navigation-link:
    role: Navigation links in header/footer.
  callout-card:
    role: Feature showcase elements with text and an image.
---

## Overview

**North Star:** White Canvas Precision

Current uses a crisp, high-contrast visual system built on a bright white canvas. Typography is the primary means of conveying hierarchy, with precise letter-spacing and varying weights providing clarity. Functional elements are often minimalist, relying on strong outlines or simple fills, and the brand accent color appears as a subtle, unexpected gradient in specific interactive contexts, avoiding overt saturation for a sophisticated feel. The overall impression is direct and confident.

### Do's

- Prioritize `soehne` weight 300 for large display headings (48px and above) to achieve a whisper-like authority.
- Use Storm Anthracite (#000000) for primary text and Cloud White (#ffffff) for backgrounds to maintain high contrast.
- Apply a 9999px border-radius to all buttons for a friendly, approachable aesthetic.
- Maintain high typographic precision by using specified letter-spacing for `soehne` headlines: -0.96px at 48px, -3.6px at 90px.
- Use Skyline Gray (#737582) exclusively for secondary text and ghost button borders, not for primary text or filled elements.
- Ensure all interactive elements, especially primary buttons, receive the defined elevation shadow for subtle depth.
- Employ Ghost Fill (#ebeff2) for subtle background accents specifically on input fields or contained background zones.

### Don'ts

- Do not use highly saturated colors for large areas or backgrounds; reserve them for small, functional accents like the Current Gradient.
- Avoid generic border-radii; adhere strictly to 9999px for buttons, 30px for cards, and 0px for inputs and layout elements.
- Do not vary typography by changing font families too often; `soehne` and `proxima-nova` are the only approved typefaces.
- Do not introduce heavy, opaque shadows; utilize the light, multi-layered elevation shadow for buttons to ensure a subtle effect.
- Avoid cluttering the layout; maintain generous section gaps of 80px and comfortable element gaps of 24px.
- Do not use chromatic colors for text unless they are part of a clearly defined brand element (e.g., within a logo or a specific icon).
- Never use `soehne` with a weight below 400 for body text; reserve lighter weights for headings only.

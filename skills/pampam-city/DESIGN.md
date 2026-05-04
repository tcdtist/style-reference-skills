---
version: alpha
name: pampam.city
description: PamPam uses a bright, inviting canvas with clean, minimalist typography and subtle accents. The interface prioritizes clarity and a light, spacious feel, with elements appearing on a slightly off-white background. The design is subtly playful yet functional, using rounded corners and muted chromatic touches for interactive elements and brand differentiation. Overall, the visual style supports a product that is approachable and easy to use.
colors:
  canvas-white: "#ffffff"
  buttermilk: "#faf2ec"
  ash-gray: "#e5e5e5"
  ink-black: "#000000"
  charcoal: "#1b1917"
  cool-gray: "#8f8f8f"
  slate-blue: "#9894a8"
  field-green: "#2b3ea7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.56
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.08
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.08
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.08
spacing:
  cardRadius: 12px
  buttonRadius: 16px
  elementGap: 12px
  sectionGap: 64px
components:
  standard-button:
    role: Primary interaction button
  outlined-muted-button:
    role: Secondary interaction or ghost button
  feature-card:
    role: Content container for features or examples
  standard-input-field:
    role: Form input elements
---

## Overview

**North Star:** Soft Canvas Typography

PamPam uses a bright, inviting canvas with clean, minimalist typography and subtle accents. The interface prioritizes clarity and a light, spacious feel, with elements appearing on a slightly off-white background. The design is subtly playful yet functional, using rounded corners and muted chromatic touches for interactive elements and brand differentiation. Overall, the visual style supports a product that is approachable and easy to use.

### Do's

- Use Buttermilk (#faf2ec) as the default background for most content sections and cards to maintain visual lightness.
- Apply a 12px border-radius to all cards and images for a consistent soft-edged aesthetic.
- Reserve the 'nineties' font for display-level headlines (48px, 80px) using Charcoal (#1b1917) for strong visual impact.
- Utilize Ink Black (#000000) for primary body text and as a strong border color for key interactive elements.
- Maintain comfortable density by using 12px for `elementGap` between most UI components.
- Prioritize the `Standard Button` with a Buttermilk (#faf2ec) background and Ink Black (#000000) text for main calls to action.
- Employ Slate Blue (#9894a8) for subtle interactive text and outlined button borders for less prominent actions immediately adjacent to content.

### Don'ts

- Avoid using harsh, saturated colors as primary backgrounds; adhere to the neutral palette for canvas and surfaces.
- Do not deviate from the specified border-radius values (e.g., 12px for cards, 16px for buttons) to preserve the design's rounded character.
- Refrain from using the 'nineties' font for body copy or small text, as it is intended for display purposes only.
- Do not introduce strong, intrusive shadows; existing shadows are subtle and provide minimal depth.
- Avoid excessive use of outlines; apply the `Outlined Muted Button` sparingly for secondary actions.
- Do not reduce content padding within cards; maintain the spacious feel with the default 12px card padding.
- Resist using bold font weights for body text; rely on the '-apple-system' and 'inter' fonts at their specified weights for readability.

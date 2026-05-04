---
version: alpha
name: Aboard
description: Aboard projects a playful, human-centered HR experience through its soft, pastel color palette and friendly, rounded interfaces. The system combines crisp, dark typography with a clean, light canvas, punctuated by cheerful accent colors and varied card backgrounds. Components are lightweight with generous padding and prominent border radii, creating an approachable and inviting visual environment. The overall design feels like a thoughtful, organized space that prioritizes user comfort and visual delight.
colors:
  canvas-white: "#fafafa"
  graphite-black: "#000000"
  ink-gray: "#262626"
  muted-ash: "#757577"
  light-shadow: "#cdcdcd"
  sky-blue: "#e0f2fe"
  cotton-candy-pink: "#fbcfe8"
  misty-lavender: "#e6dafd"
  aquamarine-tint: "#b6edee"
  powder-blue: "#afe4ff"
  buttercup-yellow: "#ffe77a"
  vivid-violet: "#975aff"
  warm-orange: "#ff6800"
  bright-teal: "#00babf"
  deep-blue: "#008ae8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.15px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.162px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.44px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.56px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.64px
spacing:
  cardRadius: 24px
  buttonRadius: 99px
  elementGap: 10px
  sectionGap: 48px
components:
  outline-pill-button:
    role: Primary action, navigation items
  light-blue-pill-button:
    role: Secondary action, call to action
  hero-section-card:
    role: Content container, information display
  feature-card-playful:
    role: Feature showcase, data visualization
---

## Overview

**North Star:** Joyful pastel workspace

Aboard projects a playful, human-centered HR experience through its soft, pastel color palette and friendly, rounded interfaces. The system combines crisp, dark typography with a clean, light canvas, punctuated by cheerful accent colors and varied card backgrounds. Components are lightweight with generous padding and prominent border radii, creating an approachable and inviting visual environment. The overall design feels like a thoughtful, organized space that prioritizes user comfort and visual delight.

### Do's

- Use Graphite Black (#000000) for all main headings and primary body text to maintain visual clarity and contrast.
- Apply a 99px border radius to all interactive buttons and tags to consistently convey an approachable, friendly aesthetic.
- Utilize Canvas White (#fafafa) as the dominant background for all main page content and primary cards.
- Incorporate the accent colors (Cotton Candy Pink, Misty Lavender, Aquamarine Tint, Powder Blue, Buttercup Yellow) primarily for distinct card backgrounds and decorative sections.
- Maintain a comfortable density with an element gap of 10px and card padding of 32px to ensure readability and spaciousness.
- Headers and page titles should use system-ui at appropriate sizes from the type scale with negative letter-spacing for a refined look.
- Use Deep Blue (#008ae8) exclusively for interactive link text and button borders to clearly signal interactivity.

### Don'ts

- Avoid using the accent pastel colors for text or borders; they are reserved for background washes and decorative surfaces.
- Do not introduce sharp corners or small radii (less than 24px) for cards or larger containers; consistency in rounded shapes is key.
- Refrain from using strong, dark shadows. The system relies on light-colored borders and background variations for element separation.
- Do not apply the Gradient Aura to small UI elements or text; it is intended for large, impactful background sections only.
- Avoid deviating from the defined system-ui and sans-serif fonts; no custom fonts should be introduced.
- Do not use generic gray tones for interactive elements; leverage Deep Blue (#008ae8) for all actionable states.
- Do not clutter layouts; prioritize comfortable spacing with 10px element gaps and 32px card padding.

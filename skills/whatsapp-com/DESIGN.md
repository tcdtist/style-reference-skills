---
version: alpha
name: WhatsApp.com
description: WhatsApp's visual system evokes a friendly, secure communication platform. It builds upon a soft, warm neutral base with a consistent, vibrant green acting as the core accent for primary calls to action. Rounded forms are prevalent, especially in buttons and imagery, contributing to a welcoming, approachable feel. Typography is direct and legible, maintaining clarity within a spacious layout. The overall impression is one of calm competence.
colors:
  forest-green: "#25d366"
  link-blue: "#0373e9"
  midnight-graphite: "#1c1e21"
  dark-forest: "#111b21"
  warm-canvas: "#fcf5eb"
  pure-white: "#ffffff"
  stone-gray: "#5e5e5e"
  light-fog: "#f0f4f9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.34
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.39
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  buttonRadius: 50px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button for main calls to action
  secondary-ghost-button:
    role: Outlined button for less prominent actions, often paired with primary
  white-background-button:
    role: Alternative interaction button against darker backgrounds
  navigation-link:
    role: Text link within the main navigation bar
  card-surface:
    role: Content containers
  rounded-image-container:
    role: Visual media display
  input-field:
    role: Form entry
---

## Overview

**North Star:** Warm, secure communication.

WhatsApp's visual system evokes a friendly, secure communication platform. It builds upon a soft, warm neutral base with a consistent, vibrant green acting as the core accent for primary calls to action. Rounded forms are prevalent, especially in buttons and imagery, contributing to a welcoming, approachable feel. Typography is direct and legible, maintaining clarity within a spacious layout. The overall impression is one of calm competence.

### Do's

- Use Forest Green (#25d366) exclusively for primary action button backgrounds and critical active states. Do not use it for text or borders (unless outlined button).
- Apply a 50px border-radius to all buttons and input fields to maintain the soft, rounded aesthetic.
- Utilize Warm Canvas (#fcf5eb) as the default page background for sections, creating a consistent light foundation.
- Pair Midnight Graphite (#1c1e21) for primary text and headings against lighter backgrounds like Warm Canvas (#fcf5eb) or Pure White (#ffffff).
- Maintain generous padding of 16px vertically and 28px/32px horizontally for buttons to ensure clear touch targets and visual comfort.
- Structure primary content areas with a default vertical spacing of 64px between sections.
- Use WhatsApp Sans Var for all text hierarchy, with weights 400 for body and 700 for high-impact headlines and calls to action.

### Don'ts

- Avoid using bright, saturated colors for decorative elements; stick to the defined accent and brand colors for functional highlights only.
- Do not introduce sharp, angular corners; all interactive elements and image containers should adhere to 25px or 50px radii.
- Do not add drop shadows to cards or primary elements; the design relies on flat surfaces and clear visual separation through background colors and spacing.
- Refrain from using thin, light fonts larger than body text; important headings should be WhatsApp Sans Var weight 700.
- Do not use multiple font families; WhatsApp Sans Var is the single typeface for all UI elements.
- Avoid tight element spacing; ensure a minimum of 16px gap between interactive elements and content blocks.
- Do not use dark backgrounds indiscriminately; reserve Dark Forest (#111b21) for specific footer or input contexts.

### Layout

The page primarily uses a contained layout, centering content within a flexible max-width, though the hero section often employs a full-bleed visual element with contained text. The hero pattern is typically a split text-left, image-right composition, featuring a large headline paired with primary and secondary call-to-action buttons. Sections alternate between visual-heavy presentations (like the hero and 'Say what you feel' image) and text-dominant content blocks. Vertical rhythm is established through consistent section gaps (around 64px). The layout largely avoids complex grids, preferring clear, stacked content blocks or simple two-column arrangements for feature explanations. Navigation is a sticky top bar with a logo and clear calls to action, maintaining brand presence and accessibility.

### Imagery

The imagery predominantly features candid, natural-looking photography of diverse individuals using mobile devices, often smiling or engaged with their screens. These photos are contained within softly rounded shapes (25px radius) rather than hard-edged rectangles. Some sections also utilize stylized product screens with subtle chat bubbles appearing in a generative, playful manner, hinting at app functionality without being overly prescriptive. Icons are minimalist, outlined, and primarily monochromatic, using the Forest Green accent for interactive states or brand markers. Imagery serves to convey genuine human connection and product-in-use scenarios, creating an empathetic and aspirational tone.

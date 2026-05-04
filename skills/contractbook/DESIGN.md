---
version: alpha
name: Contractbook
description: Contractbook uses a playful, confident aesthetic with bold primary colors punctuating a clean, spacious light background. The system prioritizes readability and clear interaction points, leveraging vibrant yellow for primary actions and strong blue for statements. Typography is robust and direct, complementing the slightly soft, geometric shapes used throughout components and illustrations. Visual hierarchy is established through strategic color blocking and generous whitespace, rather than relying on complex elevation.
colors:
  washed-black: "#1a1a1a"
  pure-white: "#ffffff"
  pearl: "#f7f7f3"
  beige: "#f0f0ec"
  ink-black: "#000000"
  concrete: "#d4d4d0"
  dim-grey: "#6d6868"
  silver-mist: "#b3b3b3"
  royal-blue: "#1009f6"
  energy-gold: "#ffba09"
  sky-blue: "#add3e5"
  deep-moss: "#304801"
  thistle-bloom: "#e3c7de"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.25
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  cardRadius: 24px
  buttonRadius: 999px
  elementGap: 14px
  sectionGap: 60px
components:
  primary-action-button:
    role: Call to action
  secondary-ghost-button-dark-text:
    role: Secondary action
  secondary-ghost-button-light-text:
    role: Secondary action
  accent-card-royal-blue:
    role: Content container
  accent-card-beige:
    role: Content container
  accent-card-energy-gold:
    role: Content container
  base-card-rounded:
    role: Content container
  simple-input-field:
    role: Data entry
---

## Overview

**North Star:** Playful professionalism, high-contrast clarity.

Contractbook uses a playful, confident aesthetic with bold primary colors punctuating a clean, spacious light background. The system prioritizes readability and clear interaction points, leveraging vibrant yellow for primary actions and strong blue for statements. Typography is robust and direct, complementing the slightly soft, geometric shapes used throughout components and illustrations. Visual hierarchy is established through strategic color blocking and generous whitespace, rather than relying on complex elevation.

### Do's

- Prioritize Energy Gold (#ffba09) for all primary calls to action, ensuring immediate visual recognition.
- Use Abcwhyte font for all text content, maintaining consistency across headings, body, and UI elements.
- Apply 999px border-radius to all buttons and form fields to achieve a consistent pill-like or softly rounded appearance.
- Employ Washed Black (#1a1a1a) for primary text on light backgrounds to maximize readability.
- Leverage Royal Blue (#1009f6) and Energy Gold (#ffba09) as prominent accent colors for key content blocks or interactive states.
- Maintain generous section gaps of 60px to provide ample breathing room between content blocks and improve content scanning.
- Utilize Pure White (#ffffff) and Pearl (#f7f7f3) as primary and secondary background surfaces to create a clean, light canvas.

### Don'ts

- Avoid using multiple font families; Abcwhyte is the sole typeface for this system.
- Do not introduce strong drop shadows; rely on color blocking and border radii for visual separation and distinction.
- Refrain from complex gradients or textures on primary UI elements; maintain clean, solid color fills.
- Do not use highly saturated colors for large areas of text to avoid strain; reserve vibrant colors for accents and actionable elements.
- Avoid arbitrary border-radii; adhere to the established radii of 24px, 40px, 999px, and 4.375px.
- Do not overcrowd sections; ensure comfortable element gaps of 14px and robust card padding for readability.
- Avoid using any non-system greys; stick to the defined neutral palette for consistency and accessibility.

### Layout

The site uses a max-width contained layout, approximately 1200px, centered on the screen. The hero section is full-width with a bold, centered headline and calls to action over a playful illustrated background. Content sections follow a rhythm of consistent vertical spacing, often featuring alternating light (Pure White) and Pearl (#f7f7f3) bands. Content is arranged predominantly in two-column text-left/visual-right patterns or centered stacks. Card grids are used for features or testimonials. The navigation is a sticky top bar with a clear brand logo and primary actions.

### Imagery

Imagery primarily consists of playful, hand-drawn vector illustrations with thick outlines and geometric shapes, often filled with brand accent colors like Sky Blue, Thistle Bloom, and Energy Gold. These illustrations provide decorative atmosphere and explanatory content, often presented in contained, rounded areas with large 40px radii. Product screenshots are minimal, focusing on UI snippets. The style is light-hearted and approachable, balancing the professional nature of the contract management software.

---
version: alpha
name: Buzz Usborne
description: Buzz Usborne's design system presents as a clean, spacious canvas with a playful, yet strong typographic voice. The visual identity relies on a dominant dark gray for text and primary interactive elements, accented by a single vivid violet for subtle button detailing, creating a sense of understated vibrancy. Component surfaces and backgrounds are kept pristine white, emphasizing content and a lightweight feel. Overall, the system projects an approachable, content-focused atmosphere, leaning on personality in typography rather than complex color schemes or heavy ornamentation.
colors:
  canvas-white: "#ffffff"
  graphite-ink: "#2a394e"
  muted-midnight: "#14243c"
  vivid-violet: "#4700d8"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.87
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.15
spacing:
  buttonRadius: 30px
  elementGap: 10px
  sectionGap: 50px
components:
  primary-filled-button:
    role: Call to action button
  ghost-header-button:
    role: Navigation menu button
---

## Overview

**North Star:** Clean slate, playful voice

Buzz Usborne's design system presents as a clean, spacious canvas with a playful, yet strong typographic voice. The visual identity relies on a dominant dark gray for text and primary interactive elements, accented by a single vivid violet for subtle button detailing, creating a sense of understated vibrancy. Component surfaces and backgrounds are kept pristine white, emphasizing content and a lightweight feel. Overall, the system projects an approachable, content-focused atmosphere, leaning on personality in typography rather than complex color schemes or heavy ornamentation.

### Do's

- Prioritize Canvas White (#ffffff) for all large background areas and card surfaces, creating a clean base.
- Use Graphite Ink (#2a394e) for all primary headline and body text, establishing a strong, readable dark neutral.
- Apply Poetsen One at 52px, weight 400, for section headlines or hero text to introduce branding personality.
- For interactive elements, use the 30px border-radius, creating a consistent pill shape for buttons.
- Maintain a spacious environment, utilizing 50px as the primary vertical separation between major sections.
- For primary call-to-action buttons, use a Graphite Ink (#2a394e) fill with Muted Midnight (#14243c) text, with 15px vertical and 25px horizontal padding, and 30px radius.

### Don'ts

- Avoid using multiple vibrant chromatic colors; restrict accent colors primarily to Vivid Violet (#4700d8) for subtle highlights.
- Do not deviate from Roboto for body text and functional UI elements where immediate readability is key.
- Avoid tight element groupings; ensure a minimum of 10px spacing between elements to preserve visual breathability.
- Do not introduce complex shadows or excessive borders; surfaces should feel lightweight and minimally elevated.
- Refrain from using strong background patterns or textures; surfaces are intended to be clean and understated.

### Layout

The page maintains a centered max-width layout, approximately 950-1000px wide, creating clear content boundaries on a Canvas White background. The hero section is a centered stack of a playful headline over a contained product image. Vertical rhythm is established through consistent 50px section gaps and ample side padding of 150px or more on text blocks. Content often appears in single-column stacks, emphasizing direct communication rather than complex multi-column grids or visual fragmentation. Navigation is minimal, consisting of a sticky top header with a brand logo and a simple 'Menu' button.

### Imagery

This system primarily uses product screenshots and illustrative emojis rather than traditional photography. Product screenshots are contained within soft-rectangular cards with 20px radius. Emojis are used directly within heading text, adding a playful, approachable, and personalized tone to the communication. Icons are minimal, likely linear or mono-color, serving purely functional roles like the 'Menu' button.

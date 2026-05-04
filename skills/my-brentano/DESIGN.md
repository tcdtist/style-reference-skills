---
version: alpha
name: My Brentano
description: My Brentano embraces a refined, organic aesthetic creating a calm, content-forward experience. Neutral, earthy tones combined with a strong, custom sans-serif typeface define its signature. The layout emphasizes clear structural organization with subtle borders and minimal use of color, allowing product imagery and text to take precedence. Components are lightweight and understated, integrating seamlessly into the canvas rather than standing out as distinct elements.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal-text: "#212529"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.67
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.67
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
    letterSpacing: 0px
spacing:
  elementGap: 10px
  sectionGap: 30px
components:
  circular-ghost-button:
    role: Decorative or iconic buttons, cart badge.
  rectangular-outlined-button:
    role: Primary action buttons for purchasing or navigation.
  ghost-navigation-link:
    role: Subtle navigation elements.
  basic-input:
    role: Form fields for user entry.
  header-navigation-item:
    role: Interactive clickable item in the main site navigation.
---

## Overview

**North Star:** Earthy botanical canvas

My Brentano embraces a refined, organic aesthetic creating a calm, content-forward experience. Neutral, earthy tones combined with a strong, custom sans-serif typeface define its signature. The layout emphasizes clear structural organization with subtle borders and minimal use of color, allowing product imagery and text to take precedence. Components are lightweight and understated, integrating seamlessly into the canvas rather than standing out as distinct elements.

### Do's

- Prioritize Studio Feixen Sans Writer Book 400 for all body text and general interface elements, ensuring consistent legibility.
- Use Charcoal Text (#212529) for standard body text and structural borders to maintain a slightly softer contrast, reserving Ink Black (#000000) for high-impact text and outlines.
- Maintain a clear visual hierarchy with borders over shadows; use 1px solid Ink Black (#000000) borders for distinct elements like inputs and buttons.
- Implement a 10px element gap for most horizontal and vertical spacing between small interactive components, such as list items or buttons inside a container.
- Utilize 0px border radius for most container elements and buttons to maintain a sharp, clean aesthetic, with the exception of specific circular elements using 100% radius.

### Don'ts

- Avoid introducing additional accent colors; stick to the neutral palette for all functional UI elements.
- Do not use drop shadows for elevation; rely exclusively on borders and background color changes to define element depth.
- Refrain from using overly decorative or image-heavy backgrounds; surfaces should remain Canvas White (#ffffff) to keep focus on content and products.
- Avoid excessive padding within elements; maintain a compact density with 5px or 10px padding for most components.
- Do not deviate from the custom font families; system fonts should not be used as a substitute.

### Layout

The page employs a contained, centered layout, allowing content to breathe within a defined maximum width. The hero section features a prominent, centered headline over a background that combines full-bleed abstract imagery with product photography. Content sections alternate between visually engaging abstract images and clear textual blocks, often structured in single or implied two-column arrangements. Vertical rhythm is established through consistent section gaps, creating a clean flow. Navigation is a minimal top bar, featuring text links and subtle iconic elements, maintaining a compact header area.

### Imagery

The imagery focuses on close-up product photography and abstract, organic macro shots of natural ingredients. Product shots are typically clean, isolated crops on neutral or slightly textured backgrounds, emphasizing the product itself with minimal lifestyle context. Abstract macro photography provides atmospheric backdrops, often with soft focus and muted, natural color palettes. Icons are minimalist, outlined, and monochrome, integrating seamlessly into the UI for functional cues rather than decorative accents. The overall density is balanced, allowing significant whitespace to frame both text and imagery.

---
version: alpha
name: Poly
description: Poly's visual system evokes a smart, understated productivity environment. It employs a near-monochromatic palette for structural elements, allowing a single vibrant orange-red gradient to serve as a focused accent for branding and calls to action. Typography balances a clean sans-serif for body text with distinctive custom display fonts for impact, featuring subtle letter-spacing for refined text blocks. Components are clean and minimal with soft rounded corners and a focus on clarity through considered use of shadows for depth.
colors:
  canvas-white: "#f4f4f4"
  ink-black: "#000000"
  steel-gray: "#292930"
  shadow-tint: "#cccccc"
  poly-gradient: "#f4824d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.24px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.3px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.1
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 53px
    lineHeight: 1.1
    letterSpacing: -1.06px
spacing:
  elementGap: 12px
  sectionGap: 48px
components:
  primary-call-to-action-button:
    role: Interactive element
  secondary-ghost-button:
    role: Interactive element
  navigation-link:
    role: Interactive element
  info-badge:
    role: Informative label
---

## Overview

**North Star:** Subtle Depth, Focused Accent

Poly's visual system evokes a smart, understated productivity environment. It employs a near-monochromatic palette for structural elements, allowing a single vibrant orange-red gradient to serve as a focused accent for branding and calls to action. Typography balances a clean sans-serif for body text with distinctive custom display fonts for impact, featuring subtle letter-spacing for refined text blocks. Components are clean and minimal with soft rounded corners and a focus on clarity through considered use of shadows for depth.

### Do's

- Use 'Canvas White' #f4f4f4 as the primary background for most sections to maintain a bright, open feel.
- Apply 'Ink Black' #000000 for all primary text and critical UI elements to ensure high contrast and readability.
- Reserve the 'Poly Gradient' (linear-gradient(134.77deg, rgb(244, 130, 77) 25.1%, rgb(244, 41, 25) 74.9%)) exclusively for primary calls to action and brand accents.
- Employ an 8px border-radius for all interactive elements like buttons and any card-like containers to establish a consistent soft edge.
- Maintain a clear visual hierarchy by using 'Inter' for body and functional text, and 'Haffer Variable' or 'Bogue' for headings as appropriate.
- Utilize 12px for 'elementGap' to define comfortable spacing between interactive elements and components.
- Introduce subtle elevation using rgba(0, 0, 0, 0.2) 2px 2px 5px 0px for interactive elements on hover, giving them a slight lift off the surface.

### Don'ts

- Do not use saturated colors other than the 'Poly Gradient' for interactive elements or brand accents.
- Avoid arbitrary border-radius values; stick to the standard 8px for a cohesive look.
- Do not use the 'Poly Gradient' or any significant chromatic colors for body text or secondary UI elements.
- Do not exceed a page max-width of 1280px for core content, allowing for a contained reading experience.
- Refrain from using strong, opaque shadows; leverage the subtle inset/offset shadow style for visual depth.
- Do not use more than two distinct font families on any single screen to avoid visual clutter.
- Avoid dense information blocks; instead, use 'sectionGap' of 48px to create comfortable visual breaks between major content areas.

### Layout

The page primarily uses a contained layout within a 1280px max-width, centrally aligned. The hero section is full-bleed with the atmospheric photography, featuring centered main headlines and calls to action. Below the hero, content generally follows a clean, spacious vertical rhythm with a section gap of 48px. Specific content arrangements are not fully discernible from the provided data but suggest a focus on clear, stacked information blocks, likely with a single column. Navigation is a minimal top bar, featuring discrete 'Login' and 'Join waitlist' links.

### Imagery

The visual language for imagery is primarily functional and contextual, with product screenshots (like a laptop screen showing UI) or atmospheric photography setting a scene. The prominent hero image uses muted, desaturated, high-key photography of a desk setup, serving as a background for UI elements. There are no illustrations or highly stylized graphics, emphasizing a realistic and grounded aesthetic. Icons (e.g., play button triangle, download arrow) are minimal, filled, and monochromatic, integrated seamlessly into buttons. Imagery serves to establish a professional, productive atmosphere and demonstrate product interaction, rather than purely decorative or abstract concepts.

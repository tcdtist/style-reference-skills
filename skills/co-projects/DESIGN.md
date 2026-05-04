---
version: alpha
name: Co Projects
description: This design system presents as austere and deliberate, focusing on bold typography and stark contrasts. It feels like a gallery wall or architectural display, emphasizing content through scale and negative space rather than decorative elements. The interplay between massive, graphic text and minimal UI elements creates a contemplative, almost academic atmosphere, highlighting the conceptual nature of the content. A singular borderline gray provides subtle structural division.
colors:
  canvas-white: "#ffffff"
  coal-black: "#000000"
  borderline-gray: "#e5e7eb"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.1
  subheading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  elementGap: 4px
  sectionGap: 96px
components:
  navigation-bar:
    role: 
  display-logo-mark-co-graphic:
    role: 
  project-card-bordered-content-block:
    role: 
  body-text:
    role: General content text
  bordered-element:
    role: Implicit container or divider
---

## Overview

**North Star:** Gallery Wall Typography - Massive typographic elements dominate minimal structure, creating visual weight and focus.

This design system presents as austere and deliberate, focusing on bold typography and stark contrasts. It feels like a gallery wall or architectural display, emphasizing content through scale and negative space rather than decorative elements. The interplay between massive, graphic text and minimal UI elements creates a contemplative, almost academic atmosphere, highlighting the conceptual nature of the content. A singular borderline gray provides subtle structural division.

### Do's

- Prioritize `Alpha` font at 60px/1.0 lh for major display text to create graphic impact.
- Use `Coal Black` (#000000) for all text and primary graphic elements.
- Maintain `Canvas White` (#ffffff) as the dominant background color for an expansive, clean feel.
- Apply `Borderline Gray` (#e5e7eb) for subtle structural divisions and borders, never as a primary background.
- Utilize 0px for all border-radius values, reinforcing a stark and precise aesthetic.

### Don'ts

- Avoid using multiple font weights; stick to 400 for both `Alpha` and `Takt`.
- Do not introduce any additional chromatic colors; maintain the achromatic palette.
- Do not use box-shadows or any form of elevation; depth is created through negative space and color contrast.
- Avoid decorative elements like icons, unless they are purely functional and monochromatic.
- Do not vary line-heights excessively; adhere to specified values (1.0 for large Alpha, 1.1/1.11 for Takt/smaller Alpha) for consistent visual rhythm.

### Layout

The site features a full-bleed page model, allowing large graphic elements to extend to the viewport edges. The hero section is dominated by oversized, centered graphic typography, creating an immediate, impactful visual statement. Content arrangement appears to be a mix of centered stacks and implied grid structures through repetition and alignment, all within a compact information density. There are distinct vertical divisions indicated by subtle borders or section breaks hinted by the `Borderline Gray`. Navigation is a minimalist top bar.

### Imagery

The site uses no explicit photography or complex illustrations. Instead, the 'imagery' is formed by massive, stark, black geometric shapes (the 'co' motif). These abstract graphics are full-bleed and serve as both decorative and branding elements, leveraging extreme scale and high contrast. The visual language is entirely contained within the UI and typographic structures, showcasing a pure, unadorned approach to visual identity.

---
version: alpha
name: Sougen
description: Sougen presents a digital-futuristic aesthetic through a high-contrast, mostly achromatic palette punctuated by a singular, vivid teal accent. Typography is a blend of structured geometric sans-serifs, emphasizing clean lines and generous letter spacing that hints at digital interfaces. Components are lightweight, often outlined, and favor rounded forms for interactive elements, reinforcing an approachable yet modern digital presence. The visual system balances stark, almost monochrome backgrounds with vivid, glowing accents to draw attention to interactive elements and brand identity.
colors:
  canvas-white: "#ffffff"
  surface-frost: "#f9f9f9"
  border-fog: "#e5e7eb"
  text-graphite: "#242424"
  pitch-black: "#000000"
  system-teal: "#16ebeb"
  teal-glow: "#6df8f8"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.23
    letterSpacing: -1.61px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.07
    letterSpacing: -3.5px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
    letterSpacing: -7px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 116px
    lineHeight: 0.98
    letterSpacing: -8.12px
spacing:
  buttonRadius: 999px
  elementGap: 15px
  sectionGap: 90px
components:
  hero-outline-button:
    role: Primary call to action in hero sections.
  accent-ghost-button:
    role: Secondary call to action or interactive element.
  filled-dark-button:
    role: High-contrast action button.
  footer-nav-link:
    role: Navigation links in the footer.
  subtle-dividers:
    role: Visual separation between content blocks.
---

## Overview

**North Star:** monochromatic starkness with glowing teal

Sougen presents a digital-futuristic aesthetic through a high-contrast, mostly achromatic palette punctuated by a singular, vivid teal accent. Typography is a blend of structured geometric sans-serifs, emphasizing clean lines and generous letter spacing that hints at digital interfaces. Components are lightweight, often outlined, and favor rounded forms for interactive elements, reinforcing an approachable yet modern digital presence. The visual system balances stark, almost monochrome backgrounds with vivid, glowing accents to draw attention to interactive elements and brand identity.

### Do's

- Prioritize a System Teal accent for all interactive elements, active states, and small brand details, like button borders or icon fills for calls to action.
- Use Text Graphite (#242424) for primary body text and most headings, transitioning to Pitch Black (#000000) only for highest contrast where context allows.
- Employ Rubik for most major headings and display text, leveraging its geometric character. For maximal impact, use Akrobat for the largest, most significant titles.
- Ensure all interactive buttons and tags utilize a 999px border-radius, creating an approachable, pill-shaped aesthetic.
- Maintain high contrast between text and backgrounds; primarily use Canvas White (#ffffff) or Surface Frost (#f9f9f9) for backgrounds against dark text.
- Apply Open Sans (#400) for all body copy and descriptive text, ensuring readability across varying text densities.
- Introduce a subtle 1px Border Fog (#e5e7eb) for dividers, outlines, and inactive states to maintain visual structure without heaviness.

### Don'ts

- Avoid introducing additional chromatic colors; the System Teal (#16ebeb) is the sole brand accent.
- Do not use heavy, filled background cards or sections; prefer transparent or subtly differentiated Surface Frost (#f9f9f9) and Canvas White (#ffffff) backgrounds.
- Do not use standard rectangular buttons; all buttons and tags should adhere to the 999px rounded-corner aesthetic.
- Avoid mixing font families arbitrarily; stick to Rubik for headings/display, Akrobat for impactful titles, and Open Sans for body text.
- Do not use dark backgrounds extensively; the site is predominantly light-themed, with dark elements serving as strong contrast points.
- Do not rely on subtle visual cues for interactive elements; the System Teal should clearly indicate clickable or active states.
- Avoid complex shadow effects; stick to the subtle glow of rgba(109, 248, 248, 0.6) 0px 0px 4px 1px for accent glow or rgba(0, 0, 0, 0.05) 5px 5px 15px 5px for soft elevation.

### Layout

The page employs a full-bleed layout for the hero section with a centered, high-contrast headline and supporting text. Subsequent sections appear to follow a max-width contained pattern, with content likely centered. Vertical spacing between sections is generous, contributing to a comfortable density. Content arrangement often features a centered stack for textual information, transitioning to a split-section for features or ecosystem details. The navigation consists of a minimal top bar with social icons and a 'Scroll Down' indicator for primary interaction guidance.

### Imagery

The visual language is characterized by 3D rendered, stylized characters and abstract architectural forms, primarily in achromatic tones (white, black, gray). The core imagery is a character in a white hooded cloak with glowing System Teal accents, symbolizing technological advancement. Graphics are clean, often outlined, and minimal, contributing to a futuristic, digital aesthetic. Imagery serves an explanatory and atmospheric role, showcasing product concepts rather than real-world applications. The density is moderate, with imagery occupying dominant visual space in the hero section and complementing text in content blocks.

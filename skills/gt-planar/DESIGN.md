---
version: alpha
name: Gt-planar
description: GT Planar channels 'cyberpunk utility': a deep dark canvas with vibrant, almost neon, monochromatic accents of electric violet and glowing green. Typography is hyper-controlled and precise, often uppercase, with distinct pixel-perfect white borders defining interactive elements. This creates a high-fidelity, command-line interface aesthetic where every visual element serves a clear, functional purpose in a deeply contrasted, high-tech environment.
colors:
  void-black: "#000000"
  screen-white: "#ffffff"
  input-dark: "#1a0014"
  subtle-gray: "#949494"
  border-gray: "#606060"
  electric-violet: "#6100ff"
  fluorescent-green: "#00ff85"
  deep-space-violet: "#29006c"
  safety-yellow: "#fcff76"
  alert-red: "#ff003d"
  indicator-orange: "#ff8a00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.43
    letterSpacing: 0.05px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.17
    letterSpacing: 0.015px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
    letterSpacing: 0.011px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.1
    letterSpacing: 0.008px
  heading:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.95
    letterSpacing: -0.005px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 0.9
    letterSpacing: -0.01px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 146px
    lineHeight: 0.8
    letterSpacing: -0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 274px
    lineHeight: 0.8
    letterSpacing: -0.2px
spacing:
  buttonRadius: 9999px
  elementGap: 5px
  sectionGap: 25px
components:
  primary-action-button-violet-fill:
    role: Main interactive element for actions.
  outlined-button-violet-border:
    role: Secondary action or ghost button.
  dark-elevated-button-violet-border:
    role: Tertiary action or grouped controls.
  fluorescent-action-button:
    role: Prominent, high-contrast call to action.
  text-input:
    role: Data entry fields.
  navigation-link-outlined-red:
    role: Accentuated navigation item for warnings/promotions.
  navigation-link-outlined-yellow:
    role: Accentuated navigation item for warnings/promotions.
---

## Overview

**North Star:** Midnight mainframe with glowing terminals.

GT Planar channels 'cyberpunk utility': a deep dark canvas with vibrant, almost neon, monochromatic accents of electric violet and glowing green. Typography is hyper-controlled and precise, often uppercase, with distinct pixel-perfect white borders defining interactive elements. This creates a high-fidelity, command-line interface aesthetic where every visual element serves a clear, functional purpose in a deeply contrasted, high-tech environment.

### Do's

- Prioritize Void Black (#000000) as the dominant background color for most sections to maintain a dark, immersive theme.
- Use Electric Violet (#6100ff) only for primary interactive elements, active states, and critical information to maximize its impact.
- Employ the GT Planar typeface exclusively, varying weight and size meticulously to establish hierarchy rather than mixing font families.
- Define interactive elements with stark 1px Screen White (#ffffff) or accent-colored borders (Electric Violet #6100ff, Alert Red #ff003d, Safety Yellow #fcff76) and 0px border-radius for a precise, angular look.
- Apply negative letter-spacing for large display text and positive letter-spacing for smaller, utilitarian text to enhance the precise, engineered feel.
- Use 0px border-radius for most UI elements like buttons, inputs, and cards, reserving 9999px for small, tag-like elements.
- Construct layouts with clear, often horizontal, divisions and compact spacing to pack information densely without feeling cluttered.

### Don'ts

- Avoid using soft shadows or gradients that suggest depth or realism, as the system relies on stark contrasts and flat surfaces.
- Do not introduce additional font families; GT Planar is the sole typographic voice.
- Refrain from using pastel or desaturated colors; all accent colors must be vivid and highly saturated.
- Never add rounded corners to primary buttons, inputs, or cards; maintain the hard-edged aesthetic except for very specific tag-like elements.
- Do not use more than two accent colors prominently in a single view to maintain focus and prevent visual noise.
- Avoid large, unbordered blocks of color unless they serve as a full-bleed hero, instead opting for precise borders around elements.
- Do not use generic spacing values; adhere to the 4px base unit and derived tokens for compact, consistent rhythm.

### Layout

The page model is full-bleed but features tightly controlled maximum width content areas. The hero section often utilizes a full-viewport, dynamically generated visual background with centered, stark headlines. Section rhythm is primarily seamless, with content blocks often flowing directly into one another or defined by subtle internal dividers rather than alternating background bands. Content arrangement varies from centered stacks of text to more complex, grid-based interactive elements where text and functional UI are integrated directly into the visual experience. The overall density is compact, even within the full-bleed canvas, ensuring information is readily accessible. Navigation is handled via a fixed top bar with minimal, bordered text links.

### Imagery

This design system uses no traditional imagery like photography or illustration. Instead, visual elements are generated dynamically, resembling wireframes or high-speed light trails, contributing to a sense of data visualization and kinetic energy. The focus is entirely on UI elements and stark typography. Icons, where present, are monochromatic outlines with sharp angles and thin strokes.

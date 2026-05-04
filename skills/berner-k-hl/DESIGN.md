---
version: alpha
name: Berner Kühl
description: Berner Kühl employs a refined, almost austere visual system, echoing the minimalist aesthetic of high fashion. The design relies on a stark monochrome palette, using deep black typography and thin borders against a pristine white canvas. Absence of color, strong typographic presence with a custom serif font, and precise, measured spacing create an atmosphere of understated luxury and exclusivity, rather than an interactive, feature-rich interface.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#c8c8c7"
  stone-gray: "#767676"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
spacing:
  elementGap: 8px
  sectionGap: 64px
components:
  ghost-button:
    role: Minimalist interactive element
  primary-sign-up-button:
    role: Conversion action
  text-input-field:
    role: User data entry
  product-grid-item:
    role: Product display
---

## Overview

**North Star:** monochrome editorial canvas

Berner Kühl employs a refined, almost austere visual system, echoing the minimalist aesthetic of high fashion. The design relies on a stark monochrome palette, using deep black typography and thin borders against a pristine white canvas. Absence of color, strong typographic presence with a custom serif font, and precise, measured spacing create an atmosphere of understated luxury and exclusivity, rather than an interactive, feature-rich interface.

### Do's

- Prioritize Ink Black (#000000) for all textual content and critical UI borders.
- Maintain a pristine Canvas White (#ffffff) as the dominant background color for all primary surfaces.
- Use Gerstner Programm FSL at 400 weight for all typography, leveraging its consistent character.
- Apply 0px border-radius universally to maintain sharp, unrounded geometric forms.
- Separate major sections with a 64px vertical gap to create a spacious, deliberate rhythm.
- Utilize 1px thin borders in Ash Gray (#c8c8c7) or Ink Black (#000000) for subtle content division, rather than background differentiation.
- All interactive elements should be visually lightweight, either as text links or ghost buttons with minimal visual adornment.

### Don'ts

- Avoid chromatic colors; maintain an exclusively achromatic palette unless explicitly defined for a specific, rare accent.
- Do not use shadows or elevation effects; surfaces should remain flat against the Canvas White background.
- Do not apply rounded corners to any UI elements; all corners must be sharp and angular (0px radius).
- Refrain from using varied font weights; all text should consistently use the 400 weight for Gerstner Programm FSL.
- Do not introduce complex background patterns or textures; surfaces should remain solid white.
- Avoid dense information blocks; use generous spacing and sparse content to convey exclusivity.
- Do not auto-generate hover/active states that introduce background fills or significant color changes; interaction should be subtle.

### Layout

The page employs a full-bleed, unconstrained layout for its primary content, allowing photography to extend edge-to-edge. The hero section establishes this with a large split layout of editorial photography. Content then follows a grid-based pattern, primarily with product images forming a highly structured, dense array, often with a 3-column layout. Vertical rhythm is established through consistent 64px section gaps. Navigation is a minimal top bar, with text links and a discrete utility icon. The overall impression is an expansive, gallery-like experience.

### Imagery

The site primarily uses photography, featuring a mix of styled portraiture for brand mood and clean e-commerce product shots. Photography is often full-bleed or large-format, often in black and white or desaturated tones, enhancing the monochrome aesthetic. Product images are typically isolated against a plain background, focusing solely on the garment itself without lifestyle context. Icons are minimal, with a very thin stroke weight, reinforcing the understated feel. Imagery serves both to convey atmosphere and to showcase products directly, dominating visual space.

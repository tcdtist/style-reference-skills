---
version: alpha
name: Superlative
description: Superlative employs a dark, high-contrast aesthetic that feels like a precision instrument's interface—sharp, functional, and minimal. White and various shades of dark gray define the palette, highlighted by a stark orange accent used for critical indicators. Typography is condensed and uppercase, contributing to a technical, almost industrial feel. Components are stripped down: ghost buttons with thin borders and minimal padding, and tight, disciplined spacing create a sense of focused control.
colors:
  superlative-black: "#141414"
  instrument-gray: "#232323"
  panel-gray: "#8c8c8c"
  signal-orange: "#e66f27"
  ghost-white: "#ffffff"
  surface-white: "#f6f4f2"
  divider-gray: "#e4e3e2"
  absolute-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1
    letterSpacing: 0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.33
    letterSpacing: 0.08px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1
spacing:
  buttonRadius: 3px
  elementGap: 15px
  sectionGap: 60px
components:
  ghost-primary-button:
    role: Main call to action, outlining key interactive elements.
  ghost-secondary-button:
    role: Secondary calls to action, maintaining visual weight with interaction.
  input-field:
    role: User input areas for forms.
  new-badge:
    role: Highlighting new features or products.
---

## Overview

**North Star:** Precision instrument interface—white text glowing on a matte gray panel.

Superlative employs a dark, high-contrast aesthetic that feels like a precision instrument's interface—sharp, functional, and minimal. White and various shades of dark gray define the palette, highlighted by a stark orange accent used for critical indicators. Typography is condensed and uppercase, contributing to a technical, almost industrial feel. Components are stripped down: ghost buttons with thin borders and minimal padding, and tight, disciplined spacing create a sense of focused control.

### Do's

- Use Superlative Black (#141414) as the default background for most sections.
- Employ Ghost White (#ffffff) text for primary content on dark backgrounds.
- Borders for interactive components should be 1px solid using Superlative Black (#000000) or Panel Gray (#8c8c8c).
- Apply Signal Orange (#e66f27) sparingly, strictly for functional highlights and indicators, not for primary actions.
- Maintain a tight layout with an element gap of 15px for most UI elements.
- Utilize SL-Regular-Condensed with 0.0800em letter-spacing for all headlines and button text.
- Apply a 15px border radius to badges and a 3px radius to outlined buttons, with 0px for Ghost Buttons.

### Don'ts

- Avoid using Signal Orange (#e66f27) for actionable button backgrounds or primary calls to action.
- Do not introduce heavy shadows or excessive elevation; maintain a generally flat and minimalist appearance.
- Refrain from using color gradients, as the system relies on solid colors and strong contrast.
- Never use serif fonts; stick to the sans-serif SL typefaces for a consistent technical aesthetic.
- Do not deviate from the specified tight letter-spacing for condensed fonts or normal spacing for regular fonts.
- Avoid complex or ornamental visual elements; simplicity and utility are paramount.
- Do not use large, soft paddings; maintain compact and disciplined spacing around components.

### Layout

The page uses a full-bleed layout for its hero section, with primary content layered over a large product image. Subsequent sections maintain this dark, full-width canvas. Content is often centered and stacked, or uses implicit grid-like arrangements where text overlays parts of the background imagery. There isn't a strict max-width container, allowing for immersive full-bleed imagery, but internal text blocks respect generous margins. Vertical rhythm is established through consistent section gaps of 60px. Navigation is minimal, located at the top-left and top-right corners, rather than a heavy header.

### Imagery

This system features prominent, angled product photography of electronic musical instruments, often filling the background without explicit framing. Imagery is focused on the product itself, showcasing its controls and details rather than lifestyle contexts, emphasizing the technical nature of the brand. There are no illustrations; the visual language is strictly photographic or iconographic. Icons are minimal, outlined, and monochromatic, aligning with the precision instrument aesthetic. Imagery serves as atmospheric branding and product showcase, dominating visual space while overlaid with text.

---
version: alpha
name: 10X HUB
description: This design system is a bold, high-contrast exploration of dark and light, creating a dynamic visual experience. The core aesthetic is defined by striking red accents against stark black and white backgrounds, evoking a sense of urgency and directness. The interplay of oversized, widely tracked display typography with minimalist body text establishes a hierarchy that feels both dominant and precise.
colors:
  pitch-black: "#000000"
  pure-white: "#ffffff"
  scarlet-flash: "#ff1841"
  crimson-link: "#7b0016"
  input-gray: "#e8e6e6"
  accent-gray: "#949494"
  icon-gray: "#757575"
  indicator-blue: "#5e97ff"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 187px
    lineHeight: 1.2
    letterSpacing: -0.064px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 298px
    lineHeight: 1
spacing:
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 40px
components:
  submit-resource-cta-button:
    role: 
  submit-resource-form:
    role: 
  toggle-switch-header-controls:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  ghost-header-button:
    role: Interactive element
  large-primary-input:
    role: Form element
  upload-file-button:
    role: Interactive element
  toggle-switch:
    role: Interactive element
---

## Overview

**North Star:** High-contrast dynamic ledger. Stark black and white pages punctuated by sharp red markers.

This design system is a bold, high-contrast exploration of dark and light, creating a dynamic visual experience. The core aesthetic is defined by striking red accents against stark black and white backgrounds, evoking a sense of urgency and directness. The interplay of oversized, widely tracked display typography with minimalist body text establishes a hierarchy that feels both dominant and precise.

### Do's

- Do use Pitch Black (#000000) and Pure White (#ffffff) as primary background and text colors to maintain high contrast.
- Do apply Scarlet Flash (#ff1841) exclusively for primary calls to action and critical interactive elements.
- Do use a 999px border radius for all high-emphasis buttons, creating a pill shape.
- Do employ Helvetica Neue at size 18px and line-height 1.4 for clear, readable body text.
- Do reserve the large, negatively tracked Inter font for impactful display headlines only.
- Do use 0px border radius with a bottom border for all form inputs to maintain a stark, functional aesthetic.
- Do ensure a generous 40px vertical spacing between major sections to provide visual breathing room.

### Don'ts

- Don't dilute Scarlet Flash (#ff1841) by using it on non-interactive or purely decorative elements.
- Don't use gradients or soft shadows; the design relies on flat colors and stark contrasts.
- Don't introduce additional font families; restrict usage to Arial, Helvetica Neue, Roboto Mono, and Inter.
- Don't round the corners of input fields; they should remain sharply rectilinear at 0px radius.
- Don't use subtle or low-contrast text colors; maintain high contrast ratios for readability.
- Don't apply more than 3px of padding to form inputs, keeping them visually lean.
- Don't clutter the layout; utilize generous negative space around headlines and sections.

### Layout

The layout primarily alternates between full-bleed black and vibrant red sections, contrasted with periods of white. The initial hero section is a full-bleed black canvas with a dramatically oversized, centered headline. Content generally adheres to a centered maximum-width model, except for the hero. Sections are delineated by stark color changes rather than overt spacing. Form layouts are often multi-column grids or stacked text inputs, maintaining consistent minimal padding for elements like input fields.

### Imagery

The site's visual language is almost entirely UI and typography-driven; it avoids traditional photography or complex illustrations. When present, graphics are minimal, such as a simple grid icon for toggling view or basic 'upload file' icons. The imagery's role is purely functional and supportive of the text. There's a notable absence of decorative visuals, amplifying the direct, tool-like feel of the platform.

---
version: alpha
name: pluto.app
description: GoDaddy's Pluto.app page uses a direct, functional interface language on a bright canvas. Dark surfaces and robust typography provide clarity, anchored by a single vibrant teal accent for key interactive elements. Content is structured within clear, card-like containers, employing subtle elevation to distinguish interactive panels without heavy ornamentation, prioritizing straightforward information presentation.
colors:
  midnight-ink: "#111111"
  canvas-white: "#ffffff"
  subtle-gray: "#d4dbe0"
  pure-black: "#000000"
  muted-gray: "#767676"
  deep-gray: "#444444"
  action-teal: "#00a4a6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.22
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.71
spacing:
  cardRadius: 6px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-action-button:
    role: Main call-to-action
  teal-call-to-action-button:
    role: Secondary, accent call-to-action
  ghost-button:
    role: Supportive, low-emphasis action
  outlined-button:
    role: Alternative interaction, explicit selection
  information-card:
    role: Content grouping, interactive panel
  form-input-field:
    role: User data entry
---

## Overview

**North Star:** Bright canvas, dark contrast

GoDaddy's Pluto.app page uses a direct, functional interface language on a bright canvas. Dark surfaces and robust typography provide clarity, anchored by a single vibrant teal accent for key interactive elements. Content is structured within clear, card-like containers, employing subtle elevation to distinguish interactive panels without heavy ornamentation, prioritizing straightforward information presentation.

### Do's

- Use Midnight Ink (#111111) for primary text and dark backgrounds and Canvas White (#ffffff) for light backgrounds and main surfaces, adhering to robust contrast.
- Apply Action Teal (#00a4a6) exclusively for primary interactive elements, critical links, and distinct accents to guide user attention.
- Standardize on 6px border-radius for cards and buttons to provide a consistent soft-edged feel.
- Maintain a clear visual hierarchy using gdsherpa at various weights and sizes, reserving larger, bolder text for key headlines.
- Structure content with a default element gap of 8px and card padding of 16px for comfortable density and readability.
- Employ the subtle card shadow `rgba(0, 0, 0, 0.1) 0px 5px 10px 0px` for interactive panels to provide a soft lift without heavy elevation.

### Don'ts

- Do not introduce new saturated accent colors beyond Action Teal (#00a4a6) to maintain focus and brand consistency.
- Avoid strong, multi-layered shadows; elevation should be subtle, not a dominant visual feature.
- Do not use highly decorative or script fonts; stick to the gdsherpa family for all text to preserve the clean, direct tone.
- Refrain from varying border-radius values excessively; maintain 6px for most interactive elements and cards for visual harmony.
- Do not center-align large blocks of body text; left-alignment is preferred for readability within content sections.
- Avoid full-bleed, uncontained element layouts outside of hero sections; use max-width containers and consistent spacing for content.

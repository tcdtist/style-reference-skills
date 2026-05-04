---
version: alpha
name: Grok
description: Grok employs a stark, minimalist aesthetic with a dominant achromatic palette, creating a quiet backdrop for AI interaction. The design emphasizes speed and clarity through compact typography and high-contrast elements. Surfaces are primarily clean white with subtle gray accents, while interactive elements are defined by their form and subtle border treatments rather than bold colors. The overall impression is one of crisp efficiency and focused utility.
colors:
  absolute-zero: "#ffffff"
  deep-space: "#050505"
  shadowstone: "#636363"
  outline-gray: "#1d1d1d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
spacing:
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 36px
components:
  ghost-button:
    role: Secondary actions and navigation items
  outlined-button:
    role: Tertiary actions or subtle interactive elements
  filled-primary-button:
    role: Primary calls to action
  minimal-input-field:
    role: User input for search or queries
---

## Overview

**North Star:** Monochrome AI canvas

Grok employs a stark, minimalist aesthetic with a dominant achromatic palette, creating a quiet backdrop for AI interaction. The design emphasizes speed and clarity through compact typography and high-contrast elements. Surfaces are primarily clean white with subtle gray accents, while interactive elements are defined by their form and subtle border treatments rather than bold colors. The overall impression is one of crisp efficiency and focused utility.

### Do's

- Prioritize Deep Space (#050505) for all primary text and interactive elements to maintain high contrast against Absolute Zero (#ffffff) backgrounds.
- Utilize 9999px border-radius for all buttons and interactive input fields to support the soft, accessible aesthetic.
- Implement the Universal Sans font family with precise letter-spacing adjustments: -0.0080em for larger text (16px), -0.0070em for medium (14px), and -0.0060em for smaller text (13px).
- Maintain a clear functional hierarchy for buttons: transparent for ghost, subtle border for outlined secondary, and Deep Space (#050505) background for primary actions.
- Apply 8px as the default `elementGap` between internal components within an input or button group to ensure clear separation without excessive whitespace.
- Use Shadowstone (#636363) only for muted, secondary, or placeholder text, never for primary content or calls to action.
- Ensure all interactive elements have 8px vertical and 16px horizontal padding, adapting to the full-round radius.

### Don'ts

- Do not introduce vibrant or highly saturated colors; the system is strictly achromatic.
- Avoid sharp corners; all interactive elements and contained components should use the specified large border radii.
- Do not use heavy shadows or gradients; elevation is subtly conveyed through borders or background tints, not complex visual effects.
- Refrain from using varied font families; Universal Sans is the sole typeface for all content.
- Do not apply excessive line height or loose letter spacing; the typography is compact and designed for efficiency.
- Avoid varying input field border styles; all should consistently use the 1px Outline Gray (#1d1d1d) border.
- Do not use `pageMaxWidth` as the layout is full-bleed, centering content without explicit max-width containment.

### Layout

The page exhibits a full-bleed layout, with content centered horizontally without a fixed maximum width. The hero section features the brand logo and primary input field centrally stacked on a clean white background. Navigation is handled by a minimal top bar with ghost and filled buttons. Section rhythm is sparse, emphasizing a clear, uncluttered 'canvas' for interaction, marked by generous vertical spacing between the main query input and footer. The overall density is low, prioritizing breathing room around key interactive elements.

### Imagery

This design system primarily relies on simple, monochromatic icons with a clean, outlined style. No photography, complex illustrations, or significant graphical elements are present. Imagery serves a purely functional role, such as the Grok logo and UI icons, maintaining a low visual density and supporting the text-dominant interface.

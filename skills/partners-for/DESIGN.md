---
version: alpha
name: Partners for
description: Sofinnova Partners operates on a stark, high-contrast monochrome aesthetic where bold black elements punctuate an expansive white canvas. Typography is the primary visual driver, with large, confident headings and precise letter-spacing establishing a sense of authority and clarity. Minimal use of color ensures that interactive elements stand out instantly. Layouts are clean and highly structured, relying on generous spacing to create visual hierarchy rather than shadows or complex component treatments.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.45
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 59px
    lineHeight: 1.1
    letterSpacing: -0.472px
  display:
    fontFamily: "system-ui"
    fontSize: 188px
    lineHeight: 1
    letterSpacing: -1.504px
spacing:
  buttonRadius: 34.6354px
  elementGap: 18px
  sectionGap: 59px
components:
  filled-action-button:
    role: Primary calls to action and submission buttons.
  text-link-button:
    role: Navigation items and secondary actions.
  cookie-consent-panel:
    role: Persistent banner for user consent.
  floating-action-icon:
    role: Search or utility icons in the header.
---

## Overview

**North Star:** Monochrome Grid Authority: a high-contrast, text-driven system conveying precision and gravitas through sharp lines and ample white space.

Sofinnova Partners operates on a stark, high-contrast monochrome aesthetic where bold black elements punctuate an expansive white canvas. Typography is the primary visual driver, with large, confident headings and precise letter-spacing establishing a sense of authority and clarity. Minimal use of color ensures that interactive elements stand out instantly. Layouts are clean and highly structured, relying on generous spacing to create visual hierarchy rather than shadows or complex component treatments.

### Do's

- Prioritize SuisseIntl typography as the primary driver of visual hierarchy and expression, using weights 400, 600, or 700.
- Use Midnight Ink (#000000) for all semantic text and primary interactive elements, contrasting it directly against Canvas White (#ffffff) backgrounds.
- Apply a border-radius of 34.6354px to all primary buttons and 49.4792px for circular icon buttons, defining the soft, yet precise corner treatment.
- Maintain generous spacing, using 'elementGap' (18px) for internal component spacing and 'sectionGap' (59px) for vertical separation between major content blocks.
- Design elements with a focus on high contrast, utilizing the #000000 and #ffffff palette for all UI components.
- Employ precise letter-spacing like -0.0400em or -0.0200em for display and specific body text to enhance legibility and visual tightness.

### Don'ts

- Do not introduce new colors; restrict the palette strictly to Canvas White (#ffffff) and Midnight Ink (#000000) for all UI elements.
- Avoid using shadows or excessive elevation; rely on bold typography and high contrast for visual weight and hierarchy.
- Do not use generic border-radius values; always apply 34.6354px for rectangular buttons and 49.4792px for circular elements.
- Do not use highly saturated or chromatic colors for interactive states or accents; maintain the monochrome identity.
- Do not vary line-height arbitrarily; adhere to the specified line-heights (1.00, 1.10, 1.20, 1.40, 1.45, 1.55) from the typography scale.

### Imagery

The site primarily uses abstract, subtle graphic patterns (like the dashed-line field in the hero) for decorative purposes rather than overt imagery. When present, imagery is minimal and functional, focusing on UI elements or simple icons. The overall density is text-dominant, with generous white space; visual elements serve to break up content or provide concise functional indicators.

---
version: alpha
name: Offten
description: Offten's design system evokes a glitch-art, digital-native aesthetic, intentionally breaking common UI conventions. It features a stark monochromatic palette of black and white, punctuated by vivid green for interactive elements and deep orange for decorative accents. Typography is heavily tracked and often letter-spaced, creating a distinct, fragmented visual rhythm. Surfaces are minimal, relying on subtle backgrounds and borders rather than strong elevation to define elements. The overall feel is raw and experimental, prioritizing visual impact over traditional interface smoothness.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  signal-green: "#00db00"
  sunset-orange: "#d53f09"
  mango-pop: "#f77647"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.15
    letterSpacing: 0.36px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.15
    letterSpacing: 0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.15
    letterSpacing: 0.49px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.15
    letterSpacing: 0.67px
  display:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 2.5
    letterSpacing: 1.07px
spacing:
  cardRadius: 22.5px
  elementGap: 6px
  sectionGap: 48-64px
components:
  ghost-button:
    role: Interactive element, navigation links
  outline-accent-button:
    role: Primary interactive element, call to action
  subtle-frosted-card:
    role: Content container, information grouping
  monochromatic-badge:
    role: Descriptive tag, category label
---

## Overview

**North Star:** Pixelated monochrome glitch

Offten's design system evokes a glitch-art, digital-native aesthetic, intentionally breaking common UI conventions. It features a stark monochromatic palette of black and white, punctuated by vivid green for interactive elements and deep orange for decorative accents. Typography is heavily tracked and often letter-spaced, creating a distinct, fragmented visual rhythm. Surfaces are minimal, relying on subtle backgrounds and borders rather than strong elevation to define elements. The overall feel is raw and experimental, prioritizing visual impact over traditional interface smoothness.

### Do's

- Prioritize Midnight Ink for all primary text and UI outlines to maintain a stark monochromatic core.
- Use Signal Green exclusively for outlined interactive elements and critical icons to ensure visual emphasis.
- Apply nh font with its distinct letter-spacing for all text elements; ensure tracking is consistent across sizes.
- Implement the 22.5px border-radius consistently for card-like surfaces to create a uniform soft edge.
- Employ a base unit of 6px for all spacing decisions, especially for micro-padding and element gaps.
- Utilize Translucent Smoke (rgba(0,0,0,0.1)) subtly for card backgrounds, avoiding strong, opaque surface differences.
- Ensure headings use increased letter-spacing to enhance the signature 'fragmented' typographic style.

### Don'ts

- Avoid using drop shadows or heavy elevation; surfaces should remain flat or rely on subtle background tints.
- Do not introduce additional background or accent colors beyond Canvas White, Midnight Ink, Signal Green, and the orange tones.
- Do not use standard sans-serif fonts; the unique nh typeface is fundamental to the brand's identity.
- Do not deviate from the specified letter-spacing values, as they are integral to the typographic impression.
- Avoid using large, filled buttons; all primary actions should be represented by the outlined Signal Green variant.
- Do not round corners excessively on elements other than cards; buttons and badges should mostly be sharp or pill-shaped.
- Avoid generic imagery or illustrations; instead, favor abstract, glitch-like, or heavily processed visuals.

### Layout

The page structure often uses a full-bleed model, especially for hero sections, which can feature centered headlines over abstract backgrounds. Content sections tend to display a comfortable density with strong vertical rhythm, but specific section gaps can vary. There isn't a rigid grid system for content, rather a flowing arrangement of text and card-like elements. Navigation is minimal, often appearing as highly stylized text links or outlined buttons in the header/footer. Elements exhibit a sense of being intentionally 'broken' or out of place, such as widely spaced text within a minimal layout, contributing to the glitch aesthetic.

### Imagery

The visual language of imagery is abstract and graphic, leaning heavily into stylized, almost glitch-art effects. There are no traditional photographs or realistic illustrations. Instead, visuals feature abstract shapes and patterns, often with a raw, distressed, or pixelated aesthetic. The prominent use of orange and its variations (#f77647, #d53f09) suggests these are decorative, brand-specific elements, possibly serving as background textures or visual noise rather than conveying literal meaning. Icons, when present, are simple outlines or solid fills, often in Signal Green or Midnight Ink, contributing to the stark, functional yet experimental UI.

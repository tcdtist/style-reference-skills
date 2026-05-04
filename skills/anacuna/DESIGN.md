---
version: alpha
name: Anacuna
description: Anacuna embodies a striking 'digital Brutalism' aesthetic: stark contrast of black text on a generous white canvas, punctuated by ultra-minimalist interaction elements. Typography is primary, dominating the visual field with large, bold characters and precise tracking. Subtle borders and a single playful accent color soften the edges of this otherwise stark, information-dense interface, creating an experience that is both direct and distinctively artistic.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  flamingo-pink: "#ffc8c8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.11
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.11
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 94px
    lineHeight: 1
    letterSpacing: 0px
spacing:
  buttonRadius: 27.4285px
  elementGap: 7px
components:
  navigation-button:
    role: Secondary navigation and utility buttons
  brand-tag:
    role: Primary brand identifier button in the header
  section-separator:
    role: Visual division between list items and main content sections
  headline-link-with-tag:
    role: Main content items combining a large headline with an associated descriptive tag
---

## Overview

**North Star:** Type-first stark canvas

Anacuna embodies a striking 'digital Brutalism' aesthetic: stark contrast of black text on a generous white canvas, punctuated by ultra-minimalist interaction elements. Typography is primary, dominating the visual field with large, bold characters and precise tracking. Subtle borders and a single playful accent color soften the edges of this otherwise stark, information-dense interface, creating an experience that is both direct and distinctively artistic.

### Do's

- Always use ABCMonumentGrotesk-Regular for all text elements.
- Apply Ink Black (#000000) for all text color and border strokes.
- Ensure backgrounds are Canvas White (#ffffff) unless explicitly a Flamingo Pink (#ffc8c8) brand tag.
- Use 27.4285px border radius for all interactive elements like buttons and tags.
- Separate major content sections using a 1px solid Ink Black (#000000) horizontal rule.
- Maintain a minimum of 7px elementGap for horizontal spacing between inline elements.
- Pad interactive tags and buttons with 7.71px vertical and 13.71px horizontal padding.

### Don'ts

- Do not introduce additional color beyond Canvas White, Ink Black, and Flamingo Pink.
- Avoid using drop shadows or complex elevation; maintain a flat, border-driven aesthetic.
- Do not vary font weights; all text should be ABCMonumentGrotesk-Regular at weight 400.
- Refrain from using color to indicate primary or secondary actions; instead, use composition and border styles.
- Do not use internal padding within content blocks; rely on the universal horizontal rule for separation.
- Avoid introducing additional fonts or typographic styles; maintain the single, consistent typeface.
- Do not deviate from the specified border radius; its unusual value is a core brand identifier.

### Layout

The page uses a full-bleed layout without a max-width container, allowing the main content to span the entire viewport. The hero consists of simple header navigation with a brand tag. The primary content area features large, stacked headlines, each acting as a link, separated by thin horizontal Ink Black rules. Most content is left-aligned, creating a dynamic, newspaper-like column. Navigation is a minimal top-right bar with ghost buttons, consistent across sections.

### Imagery

The site uses no traditional imagery beyond text-based logos or tiny decorative icons within specific link contexts. Visuals are entirely driven by typography, layout, and the stark black-and-white contrast. When small graphics are present (e.g., brand logos within tags), they are monochrome and treated as inline text elements.

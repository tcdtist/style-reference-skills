---
version: alpha
name: Charlie Phipps
description: Charlie Phipps' design system evokes a digital architect's blueprint, utilizing a stark, high-contrast monochrome palette. The interface relies on precise typographical interplay of a clean sans-serif and a classic serif to establish hierarchy and character. Layouts are spacious, with ample negative space emphasizing content blocks through strict alignment and subtle borders rather than heavy visual containers, creating an atmosphere of considered precision amidst a dark canvas.
colors:
  midnight-canvas: "#101011"
  cloud-white: "#ffffff"
  obsidian-text: "#000000"
  ash-panel: "#ededed"
  whisper-grey: "#bab7b2"
  charcoal-detail: "#888888"
  dark-granite-border: "#262627"
  deep-space-accent: "#080809"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 162px
    lineHeight: 1
spacing:
  elementGap: 6px
  sectionGap: 41px
components:
  navigation-link:
    role: Top and bottom navigation items.
  text-card:
    role: Container for textual content or project summaries.
  interactive-text-box:
    role: Visually distinct blocks of text that might respond to interaction.
  page-header-nav:
    role: Persistent top-level navigation.
---

## Overview

**North Star:** Midnight Command Center: precise lines on a deep, expansive canvas, guided by stark textual contrasts.

Charlie Phipps' design system evokes a digital architect's blueprint, utilizing a stark, high-contrast monochrome palette. The interface relies on precise typographical interplay of a clean sans-serif and a classic serif to establish hierarchy and character. Layouts are spacious, with ample negative space emphasizing content blocks through strict alignment and subtle borders rather than heavy visual containers, creating an atmosphere of considered precision amidst a dark canvas.

### Do's

- Prioritize Cloud White (#ffffff) text on midnight Canvas (#101011) whenever possible to leverage the primary brand contrast.
- Use Helvetica Neue for all primary textual content and headings to maintain the sharp, modern tone.
- Reserve the Times typeface for subtle meta-information, captions, or contextual details at 13px size.
- Employ 13px global padding on cards and content blocks for a comfortable density.
- Utilize 0px border-radius across all elements to enforce a precise, architectural aesthetic.
- Apply precise negative letter-spacing from the Helvetica Neue typography profile for all headings to achieve tight, impactful text blocks.
- Use Charcoal Detail (#888888) for all secondary interactive elements like borders and muted links to prevent visual clutter.

### Don'ts

- Avoid using saturated or chromatic colors; the palette is strictly achromatic to maintain a stark, sophisticated feel.
- Do not introduce rounded corners; all elements should adhere to sharp, squared edges (0px radius).
- Do not use box-shadows or elevation effects; the design relies on flat layers and precise lines for depth.
- Avoid generic system fonts when Helvetica Neue or Times are specified; utilize the provided typefaces for brand consistency.
- Do not deviate from the defined letter-spacing values, especially for headlines, as it’s critical to brand identity.
- Do not use heavy panel backgrounds; instead, use transparent backgrounds or subtle Ash Panel (#ededed) for content separation.

### Layout

The page exhibits a full-bleed, left-aligned layout, with content primarily flowing top-to-bottom. The hero section features an expansive background image and a large, centered headline that bleeds off the edges. Subsequent sections maintain a generous vertical rhythm, often alternating between large text blocks and image groupings, with a flexible column structure. The navigation is a split top-bar, with a minimal left-aligned brand mark and right-aligned links. There's no strict grid observed for large content blocks; rather, an organic arrangement emphasizing large visual and textual elements within ample negative space. The overall density is comfortable, giving significant breathing room to each content segment.

### Imagery

This system features a blend of product photography and contextual imagery. Photography appears as full-bleed, unmasked backgrounds for hero sections, specifically urban landscapes with architectural elements or public transport. Product images within the portfolio are contained, often occupying clean, minimal frames. There's an absence of traditional icons, instead using typographic arrows (e.g., '︎︎︎') for interaction cues. Imagery serves both decorative atmosphere in heroes and explanatory content within the portfolio sections, with a generally high density of visual content.

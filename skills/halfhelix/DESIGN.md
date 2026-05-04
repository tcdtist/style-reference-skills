---
version: alpha
name: Halfhelix
description: Halfhelix employs a contemporary, slightly austere visual language characterized by high-contrast monochrome UI accented by a singular vivid violet. Text is used as a primary structural element, with generous leadings creating rhythm. Components are lightweight with minimal adornment, favoring subtle outlines and dark overlays for hierarchy in a compact layout. The system balances a dark, high-contrast hero with a predominantly light content theme, creating a dynamic progression from attention-grabbing to informative.
colors:
  ink: "#000000"
  canvas: "#ffffff"
  lead: "#484a4c"
  fog: "#ededed"
  stone: "#808080"
  platinum: "#dbdbdb"
  charcoal: "#262626"
  steel: "#686c6d"
  silver: "#a5a7a8"
  violet-impulse: "#2749ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
    letterSpacing: -0.12px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.1
    letterSpacing: -0.14px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.92px
spacing:
  elementGap: 5px
  sectionGap: 60px
components:
  primary-dark-button:
    role: Call-to-action button for dark contexts.
  ghost-dark-button:
    role: Secondary action button for dark contexts.
  neutral-light-button:
    role: Default action button for light contexts.
  neutral-disabled-button:
    role: Disabled or less prominent action button for light contexts.
  image-card:
    role: Displaying project images or content teasers.
  information-card:
    role: Cards containing functional information or contextual content.
  overlay-card:
    role: Elevated cards for interactive elements, like cookie consents.
  search-input:
    role: Text input areas with a subtle dark background.
  light-badge:
    role: Categorization or status indicator on light backgrounds.
  dark-badge:
    role: Categorization or status indicator on dark backgrounds.
---

## Overview

**North Star:** High-contrast monochrome, violet punctuation

Halfhelix employs a contemporary, slightly austere visual language characterized by high-contrast monochrome UI accented by a singular vivid violet. Text is used as a primary structural element, with generous leadings creating rhythm. Components are lightweight with minimal adornment, favoring subtle outlines and dark overlays for hierarchy in a compact layout. The system balances a dark, high-contrast hero with a predominantly light content theme, creating a dynamic progression from attention-grabbing to informative.

### Do's

- Use Suisse Intl (or Inter as substitute) weight 400 for all text, manipulating size and letter-spacing for hierarchy, not weight.
- Apply #000000 (Ink) as primary text color against light backgrounds, and #ffffff (Canvas) against dark backgrounds.
- Utilize 'Violet Impulse' (#2749ff) strictly for branding accents, functional highlights, or decorative background fills, never for primary text.
- Maintain a default border-radius of 3px for all interactive elements like buttons, badges, and inputs, and for informational cards.
- Employ #ededed (Fog) for secondary background surfaces or passive component states in light themes.
- Structure interactive elements like buttons with explicit background colors or borders, avoiding ambiguous ghost states with no visual definition.
- Favor white (`#ffffff`) as the dominant page canvas, with distinct darker sections for hero and footer areas to create contrast.

### Don'ts

- Avoid using multiple font weights or families; adhere exclusively to Suisse Intl (Inter) weight 400.
- Do not introduce new vibrant colors into the palette; stick to the defined achromatic scale and the single violet accent.
- Refrain from heavy drop shadows or elaborate gradients; surfaces should remain flat or use subtle 3px radius.
- Do not use #2749ff (Violet Impulse) for large blocks of text or as a background for primary functional elements outside of specific brand contexts.
- Avoid creating elevation through stacked box shadows; the design relies on clear background/border differences and minimal radius.
- Do not treat every section of the page as full-bleed; content areas should be contained within clear vertical rhythm.
- Do not embed information within images without providing equivalent accessible text, as imagery is highly decorative and often cropped.

### Layout

The page primarily employs a max-width contained layout, typically with content centered, though specific sections can lean full-bleed for visual impact. The hero section is full-bleed and dark, featuring a large, centered headline against illustrative or ambient video backgrounds. Sectional rhythm alternates between these full-bleed visual statements and tighter, text-dominant sections on white canvas. Content arrangement frequently uses a multi-column grid for showcasing projects, with implicit visual dividers through background shifts. Overall density is balanced, with generous vertical spacing between major sections but compact text blocks. Navigation includes a sticky header with a minimal logo and primary links, along with an overlay search.

### Imagery

The imagery consists predominantly of tightly cropped, high-quality product photography or selective detail shots that blur into the background. The treatment is often raw-edged, occasionally masked into a full-bleed presentation, but primarily contained within grid-like structures. There's an absence of lifestyle photography, focusing instead on the texture, material, and form of objects. Icons are minimalist, outlined, and monochromatic, taking on the surrounding text color. Images serve a decorative and evocative role, hinting at the brands they represent rather than explicitly showcasing product features, with a high density, often dominating entire sections.

---
version: alpha
name: Tobias Ahlin
description: The design system for Tobias Ahlin is a stark, high-contrast exploration of typography and structured negative space. It combines large, confident black sans-serif headlines with a minimalist canvas, often featuring a subtle off-white background. The visual identity is strongly tied to line-art graphics and geometric shapes, with a single muted orange hue serving as a delicate accent. Components are borderless and box-shadow-free, relying on distinct background colors and ample padding for definition. The overall feeling is precise, unornamented, and direct.
colors:
  canvas-oyster: "#fefbf5"
  text-ink: "#000000"
  surface-frost: "#ffffff"
  muted-ash: "#9ba5b6"
  slate-gray: "#2b2f3c"
  warm-clay: "#d67a60"
  ocean-deep: "#26555d"
  cerulean-ink: "#1f4954"
  purple-haze: "#8e5ea2"
  moss-green: "#3bab87"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.9
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.9
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.9
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.9
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 73px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 160px
    lineHeight: 1.3
spacing:
  elementGap: 20px
  sectionGap: 60px
components:
  ghost-button:
    role: Outlined button for secondary actions or navigation links
  primary-action-cta:
    role: Filled button for main calls to action
  monochrome-container-card:
    role: Informational card with a distinct background
  text-block-card:
    role: Basic content container, often with a subtle background
  branded-callout-card-purple:
    role: A distinct, colored card to highlight specific content or actions
  branded-callout-card-green:
    role: A distinct, colored card to highlight specific content or actions
---

## Overview

**North Star:** High-contrast typographic canvas

The design system for Tobias Ahlin is a stark, high-contrast exploration of typography and structured negative space. It combines large, confident black sans-serif headlines with a minimalist canvas, often featuring a subtle off-white background. The visual identity is strongly tied to line-art graphics and geometric shapes, with a single muted orange hue serving as a delicate accent. Components are borderless and box-shadow-free, relying on distinct background colors and ample padding for definition. The overall feeling is precise, unornamented, and direct.

### Do's

- Prioritize bold, black Inter typography with high contrast against light or subtly colored backgrounds.
- Use 0px (sharp corners) for all component edges unless explicitly specified as 2px for small elements.
- Define separation between elements and sections primarily through generous spacing (20px, 60px) and distinct background colors, not borders or shadows.
- Apply Warm Clay (#d67a60) exclusively for decorative, geometric line-art elements or subtle accents, never for functional text or backgrounds.
- Use distinct, saturated background colors (Cerulean Ink, Purple Haze, Moss Green) for primary actions and highlighted content blocks, ensuring white text for legibility.
- Maintain a spacious density across all layouts, utilizing sectionGap (60px) for vertical rhythm and cardPadding (40px) for internal content spacing.
- Favor white (#ffffff) or Canvas Oyster (#fefbf5) as primary surface colors, grounding the design in a light theme.

### Don'ts

- Avoid using multiple border radii values; stick to 0px or 2px.
- Do not introduce drop shadows or other elevation cues; the visual system is entirely flat.
- Do not clutter layouts; keep information organized in clear, separate blocks with ample negative space.
- Refrain from using Warm Clay (#d67a60) for text or interactive elements; its role is purely decorative.
- Do not use subtle variations of neutral colors right next to each other. Rely on strong contrast or generous spacing for distinction.
- Do not apply borders to cards or main content blocks; boundaries are defined by background color and spacing.
- Avoid generic system fonts if Inter is available; Inter's distinct weights and condensed tracking are key to the brand's typographic voice.

### Layout

The page primarily employs a full-bleed layout for sections, but content within these sections often appears to be contained and centered. The hero section features a large, horizontally sprawling typographic logo with an abstract line-art graphic, framed by centered text. Section rhythm is achieved through alternating background colors, moving between Canvas Oyster and various muted-blue or colored blocks. Content blocks frequently feature a two-column layout with text and a visual element, or stacked, wide cards. Layout density is spacious, ensuring significant breathing room around all elements. Navigation is a simple, high-contrast black text menu at the top, along with a 'hamburger' icon for mobile or secondary navigation.

### Imagery

The visual language focuses on geometric line-art illustrations, often in a muted orange hue (Warm Clay), serving a purely decorative and atmospheric role. These graphics are abstract, not metaphorical, creating a sense of precision and structure without literal representation. There is no photography or product photography. Icons are minimal, outlined, and high-contrast, typically Text Ink on light backgrounds. The imagery is sparse, allowing text and strong layouts to dominate, emphasizing content and UI rather than illustrative storytelling.

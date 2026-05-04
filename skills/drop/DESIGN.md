---
version: alpha
name: Drop
description: Drop's visual system evokes a stark, high-contrast, digital command center aesthetic. It pairs deep, almost black canvases with crisp white text and a limited palette of saturated, functional accents. Typography is a key differentiator, employing a wide range of sizes and extreme negative letter-spacing for headlines and display text, creating a visually dense but impactful presence. Components favor minimal backgrounds, outlined borders, and a signature hyper-rounded radius, suggesting a refined, modern utility.
colors:
  absolute-zero: "#101010"
  cloud-canvas: "#ffffff"
  nightfall: "#1a1a1a"
  parchment: "#e5ede4"
  whisper-gray: "#9b9b9b"
  soft-lilac: "#b8afda"
  mint-glaze: "#c7d8c5"
  ignite-orange: "#eb652b"
  electric-yellow: "#f6f361"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.35
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.19px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.2
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.15
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 66px
    lineHeight: 0.95
    letterSpacing: -1.98px
  display:
    fontFamily: "system-ui"
    fontSize: 177px
    lineHeight: 0.78
    letterSpacing: -7.26px
spacing:
  cardRadius: 24.48px
  elementGap: 5px
  sectionGap: 40px
components:
  ghost-button-dark:
    role: Secondary action button for dark backgrounds.
  ghost-button-light:
    role: Secondary action button for light backgrounds.
  filled-button:
    role: Primary action button.
  default-card:
    role: Standard content container.
  rounded-card:
    role: Rounded content container.
  dark-rounded-card:
    role: Elevated and subtly distinct content container.
  absolute-zero-panel:
    role: Prominent surface for featured content, often displaying embedded UI.
  soft-lilac-panel:
    role: Prominent surface for featured content, often displaying embedded UI.
---

## Overview

**North Star:** High-contrast digital command center.

Drop's visual system evokes a stark, high-contrast, digital command center aesthetic. It pairs deep, almost black canvases with crisp white text and a limited palette of saturated, functional accents. Typography is a key differentiator, employing a wide range of sizes and extreme negative letter-spacing for headlines and display text, creating a visually dense but impactful presence. Components favor minimal backgrounds, outlined borders, and a signature hyper-rounded radius, suggesting a refined, modern utility.

### Do's

- Prioritize Absolute Zero (#101010) for primary text on Cloud Canvas (#ffffff) backgrounds, achieving AAA contrast.
- Use a 1440px border-radius for all interactive elements and prominent containers, creating a distinct pill shape.
- Employ ABC Normal (all weights) for general UI and body copy, but reserve Ivar Display (weight 400) specifically for impactful, oversized display headlines.
- Apply significant negative letter-spacing for large text sizes, particularly for Ivar Display, to create a dense, visually striking appearance.
- Use Ghost Buttons for most actions, with a transparent background and a 1px solid border matching the text color (Cloud Canvas on dark, Absolute Zero on light).
- Integrate Soft Lilac (#b8afda) and Mint Glaze (#c7d8c5) as graphic fill accents on otherwise monochrome UI elements.
- Maintain a compact spacing unit of `5px` for elements within components and `40px` for vertical section gaps to control content density.

### Don'ts

- Avoid using multiple accent colors beyond Ignite Orange (#eb652b) and Electric Yellow (#f6f361) to maintain the limited, functional palette.
- Do not use box-shadows for elevation; rely on background color changes or border definitions to create surface hierarchy.
- Refrain from using traditional square or softly rounded (e.g., 4-8px) corners; the hyper-rounded `1440px` radius or distinct `24.48px` is a signature.
- Do not deviate from the specified font families; custom typefaces ABC Normal and Ivar Display are critical to brand identity.
- Avoid creating filled buttons with strong brand colors as primary actions; ghost and outlined buttons are the preferred interactive style.
- Do not use generic gray for helper text; instead, use Whisper Gray (#9b9b9b) for a more integrated, branded feel.
- Do not introduce gradients unless explicitly defined; the system relies on solid color blocks and sharp contrasts.

### Layout

The page employs a full-bleed top section that transitions into a largely full-width layout with internal content often centered and implicitly constrained by padding rather than an explicit `pageMaxWidth`. The hero section features a centered, oversized headline, immediately followed by two large, distinct panels acting as embedded UI examples, showcasing the product in context. Sections typically switch between dark backgrounds (Absolute Zero, similar to a 'dark mode' block) and lighter, parchment-like backgrounds, creating an alternating rhythm. Content is generally arranged in contrasting blocks, often with a large visual element dominating one side against textual content, or centered stacks for key messaging. There's an absence of traditional grids explicitly stated, but content within these large blocks often aligns logically. The navigation is a subtle top bar, featuring right-aligned 'Login' and 'Request a Demo' buttons against a white background, contrasting with the dark hero section.

### Imagery

Imagery on Drop's site is sparse and highly conceptual, focusing on product UI simulations rather than photography or explicit illustrations. Product UI elements are presented within large, rounded, solid-colored panels (Absolute Zero or Soft Lilac), mimicking device screens. These embedded UIs are clean, showcasing typical social media interfaces. There are abstract, geometric shapes (circles) used to convey data or concepts, often with solid fills or outlined. The icons are mostly simple, filled black or white glyphs, maintaining the high-contrast aesthetic. Overall, imagery functions as explanatory content or product showcases, maintaining a text-dominant layout with visual accents.

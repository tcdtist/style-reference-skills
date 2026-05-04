---
version: alpha
name: Circle
description: Circle utilizes a dark canvas with bright, soft UI elements to project an approachable, yet professional, digital community space. Typography is compact and precise, maintaining clarity against gradients and dark backgrounds. Components are fluid and often feature subtle shadows or blurred backdrops, giving them depth without harshness. The system leverages a rich, cool-toned gradient palette for a vibrant, modern feel, reserving pure white for interactive surfaces to highlight action.
colors:
  midnight-eclipse: "#0a0a0a"
  canvas-white: "#ffffff"
  slate-border: "#e4e7eb"
  dark-knight: "#191b1f"
  silver-whisper: "#737373"
  deep-indigo: "#3e1bc9"
  sky-burst: "#408fed"
  periwinkle-mist: "#e0eafc"
  lavender-haze: "#f2dbf5"
  peach-cream: "#fff0d8"
  rose-blush: "#ffe0e2"
  ocean-mint: "#e4f6f4"
  focus-blue: "#539cf2"
  crimson-alert: "#ef4444"
  dark-crimson-alert: "#b91c1c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.5px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
    letterSpacing: -0.42px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.58px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.28
    letterSpacing: -0.74px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.92px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.21
    letterSpacing: -1.24px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
    letterSpacing: -1.45px
  headline:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -1.6px
spacing:
  cardRadius: 24px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 93px
components:
  ghost-navigation-button:
    role: Primary navigation and secondary actions in headers and footers.
  accent-filled-button:
    role: Calls to action or categorical filters.
  product-feature-card:
    role: Displaying product features or content blocks.
  translucent-highlight-card:
    role: Elevated, semi-transparent content areas within contrasting backgrounds.
  input-field:
    role: Standard text input for forms.
  category-tab-button:
    role: Segmenting content or filtering categories within a section.
  dark-themed-feature-card:
    role: Presenting features or testimonials on dark background sections.
---

## Overview

**North Star:** Galactic UI with soft glow.

Circle utilizes a dark canvas with bright, soft UI elements to project an approachable, yet professional, digital community space. Typography is compact and precise, maintaining clarity against gradients and dark backgrounds. Components are fluid and often feature subtle shadows or blurred backdrops, giving them depth without harshness. The system leverages a rich, cool-toned gradient palette for a vibrant, modern feel, reserving pure white for interactive surfaces to highlight action.

### Do's

- Use Inter for all typography, adjusting weight and letter-spacing according to semantic role and size.
- Apply 9999px border-radius to all interactive elements like buttons and input fields for a consistent soft-edged feel.
- Reserve Canvas White (#ffffff) for primary content surfaces and interactive elements to maintain high contrast and clarity.
- Employ the Deep Indigo to Sky Burst linear gradient as a primary background for hero sections and expressive areas, creating a sense of depth.
- Use Slate Border (#e4e7eb) for subtle dividers, non-essential borders, and outlines to avoid visual clutter.
- Maintain a clear visual hierarchy with Midnight Eclipse (#0a0a0a) for primary text and Silver Whisper (#737373) for secondary/helper text.
- Use an 8px element gap for comfortable spacing between most inline and block elements to ensure readability and comfortable density.

### Don'ts

- Avoid using harsh, saturated colors as backgrounds to maintain the site's soft, futuristic aesthetic.
- Do not deviate from the Inter typeface; alternative fonts will disrupt the precise typographic harmony.
- Do not use square or sharp-cornered elements; all significant UI components should leverage the established border-radius values.
- Refrain from heavy, opaque shadows; utilize the transparent, diffused rgba(169, 169, 169, 0.08) 0px 4px 8px 0px for subtle elevation.
- Do not introduce new primary action colors; the design system favors accent-tinted light buttons for calls to action.
- Avoid excessive spacing or overly wide line lengths; keep text compact and content focused on the 1376px max-width constraint.
- Do not use plain solid backgrounds for large content blocks where a gradient or blurred backdrop could provide more visual interest and depth.

### Layout

The page primarily uses a max-width contained layout of 1376px, centered on the screen. The hero section is full-bleed, leveraging a dark, gradient background with a centered, prominent headline and a Call to Action block. Sections below often alternate between light (#ffffff) and darker gradient or tinted backgrounds, creating a clear vertical rhythm with consistent ~93px section gaps. Content is arranged using flexible column grids, commonly alternating text-left/image-right patterns, centered stacked content blocks, and 3-column card grids for features. The navigation is a sticky top bar, minimal and semi-transparent, evolving to a solid background on scroll.

### Imagery

The site favors illustrative, abstract graphics with soft glows and gradients, particularly in hero sections and background patterns. Product screenshots are clean, showcasing UI within contained, slightly rounded frames, often with a subtle shadow or translucent background. Photography, when used, tends to be professional portraits of individuals (e.g., testimonials) presented similarly to cards. Icons are typically outlined or filled, maintaining a consistent stroke weight, and monochrome to integrate seamlessly with the minimal UI.

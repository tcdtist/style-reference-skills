---
version: alpha
name: A-WARE
description: A-WARE cultivates a natural and premium aesthetic through a minimal, high-contrast monochrome palette punctuated by a single warm golden accent. Typography is a deliberate interplay of bold, expanded sans-serifs and a refined serif, creating a distinct brand voice. Surfaces are predominantly light and matte, achieving depth through subtle off-white tones rather than shadows, reinforcing a sense of clean, unadulterated quality. Layouts are spacious and structured, guiding the eye with generous negative space.
colors:
  midnight-ink: "#000000"
  alabaster-white: "#ffffff"
  greige-canvas: "#f7f5ee"
  stone-whisper: "#ece9df"
  subtle-ash: "#888783"
  harvest-gold: "#a77a41"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.45
  subheading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.2
    letterSpacing: -7.98px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1
    letterSpacing: -17.6px
spacing:
  cardRadius: 12px
  buttonRadius: 32px
  elementGap: 24px
components:
  ghost-outline-button-light-text:
    role: Primary Call to Action on dark backgrounds.
  ghost-outline-button-dark-text:
    role: Secondary Call to Action, active state for navigation.
  pill-button-filled:
    role: Primary Call to Action on light backgrounds.
  product-card:
    role: Displaying product information and features.
  text-input-field:
    role: Collecting user input.
  tag-badge-light-text:
    role: Categorization and metadata on dark backgrounds.
  tag-badge-dark-text:
    role: Categorization and metadata on light backgrounds.
---

## Overview

**North Star:** Minimalist alpine clean

A-WARE cultivates a natural and premium aesthetic through a minimal, high-contrast monochrome palette punctuated by a single warm golden accent. Typography is a deliberate interplay of bold, expanded sans-serifs and a refined serif, creating a distinct brand voice. Surfaces are predominantly light and matte, achieving depth through subtle off-white tones rather than shadows, reinforcing a sense of clean, unadulterated quality. Layouts are spacious and structured, guiding the eye with generous negative space.

### Do's

- Use Midnight Ink (#000000) for all primary text and major headlines to maintain high contrast and legibility.
- Apply Alabaster White (#ffffff) for primary canvas backgrounds and text on dark elements, supporting the clean aesthetic.
- Introduce warmth and subtle hierarchy on light surfaces by using Greige Canvas (#f7f5ee) for cards and secondary content blocks.
- Prioritize the 'practice' font for all interactive elements, navigation, and most body text, using its variable weights and letter-spacing to control emphasis.
- Reserve the 'plantin' font with aggressive negative letter-spacing for impactful, large display headlines to create a distinctive brand presence.
- Employ the Harvest Gold (#a77a41) accent color extremely sparingly, primarily for functional highlights like input borders or specific, small informational text.
- Maintain generous spacing around elements and within content blocks, using 72px padding for cards and a comfortable 24px element gap to enhance readability and the sense of premium quality.

### Don'ts

- Avoid using multiple accent colors; stick to Harvest Gold for all chromatic emphasis.
- Do not introduce heavy shadows or gradients; rely on color temperature and subtle background shifts (e.g., from Alabaster White to Greige Canvas) for depth.
- Do not use generic system fonts; always specify 'practice', 'plantin', or 'lab-mono' to preserve brand identity.
- Refrain from tight, cramped layouts; ensure ample whitespace, especially around components like cards and headings, to support the spacious and natural feel.
- Do not deviate from the specified border radii (e.g., 32px for pill buttons, 12px for cards, 8px for inputs) to maintain design consistency.
- Avoid using Harvest Gold for large text blocks or backgrounds; its impact is derived from its scarcity.
- Do not use highly saturated or neon colors; the palette is deliberately muted and natural, with Harvest Gold being the only chromatic exception.

### Layout

The page uses a full-bleed model with content centered within an implied maximum width, creating a spacious and structured feel. The hero section is often full-viewport, featuring a striking photographic background with large, centered, and overlaying typography. Sections maintain a consistent vertical rhythm, often alternating between a clean Alabaster White background and a slightly warmer Greige Canvas for cards and content blocks. Content arrangement frequently uses a centered stack for textual elements and 2-column or 3-column grids for product displays or feature lists, maintaining clear divisions. Navigation is a sticky top bar with minimal links and icons, emphasizing a clean header area.

### Imagery

The visual language predominantly features clean, product-focused photography and lifestyle images of athletes in natural settings. Photography is high-key and bright, often with tight crops on products against light backgrounds or individuals engaged in activities in well-lit natural environments. Product images are typically isolated or presented minimally. There are no heavy illustrations or abstract graphics. Icons are minimal, outlined (e.g., shopping cart, search) or filled, presenting a simple, functional aesthetic primarily in Midnight Ink or Alabaster White. Imagery serves both decorative atmosphere and product showcase roles, with a medium density, balancing visual interest with text-dominant content sections.

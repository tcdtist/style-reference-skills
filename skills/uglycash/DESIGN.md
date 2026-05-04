---
version: alpha
name: UGLYCASH
description: UGLYCASH embraces a stark, high-contrast digital-first aesthetic with deeply saturated accent colors that pop against a near-white canvas and stark black typography. The visual style is bold, with large, confident headlines and playful, oversized rounded corners for interactive elements and content cards. Imagery is integrated directly into the UI as product showcases rather than decorative backdrops. The system balances aggressive typography with a comfortable, open layout.
colors:
  canvas-ice: "#f2f2f2"
  ghost-gray: "#e6e4e4"
  polar-white: "#ffffff"
  carbon-black: "#000000"
  deep-graphite: "#3a3a3a"
  muted-stone: "#6e6e6e"
  soft-stone: "#888888"
  cream-card: "#e7e3bf"
  power-pink: "#fa00ff"
  sky-blue: "#02bbff"
  lime-pop: "#adff02"
  metal-gradient-light: "#817d72"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: -0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.28px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
    letterSpacing: -0.36px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.17
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.94
    letterSpacing: -2.11px
  display:
    fontFamily: "system-ui"
    fontSize: 164px
    lineHeight: 0.85
    letterSpacing: -5.41px
spacing:
  elementGap: 10px
  sectionGap: 96px
components:
  ghost-button-inverse:
    role: Minimal interactive element for secondary actions or navigation.
  pill-accent-button:
    role: Primary Call to Action, visually distinct and inviting interaction.
  rounded-accent-button:
    role: Secondary action or featured link, with a soft background.
  white-information-card:
    role: Standard container for content blocks and feature explanations.
  cream-accent-card:
    role: Highlight card for special features, uses a distinct neutral background.
  dark-graphic-card:
    role: Visual cards that integrate product imagery or bold graphics.
---

## Overview

**North Star:** High-contrast digital pop: Bold black text on bright canvas, punctuated by vivid neons.

UGLYCASH embraces a stark, high-contrast digital-first aesthetic with deeply saturated accent colors that pop against a near-white canvas and stark black typography. The visual style is bold, with large, confident headlines and playful, oversized rounded corners for interactive elements and content cards. Imagery is integrated directly into the UI as product showcases rather than decorative backdrops. The system balances aggressive typography with a comfortable, open layout.

### Do's

- Use Canvas Ice (#f2f2f2) for the primary page background to maintain the light theme.
- Employ Helvetica Now Display Cn Bold with a letter-spacing of -0.033em for all major headlines to convey impact and density.
- Apply 10px elementGap for most interactive and content grouping, providing comfortable visual separation.
- Utilize 16px border-radius for standard cards, images, and links to maintain a consistent soft containment.
- Ensure all body text uses Inter font with a letter-spacing of -0.02em to support readability while retaining a modern feel.
- Use Power Pink (#fa00ff), Sky Blue (#02bbff), and Lime Pop (#adff02) as vivid accents against predominantly achromatic surfaces.
- Implement 96px for sectionGap to provide ample vertical whitespace between major content blocks.

### Don'ts

- Avoid using light, subtle headlines; all significant text should be in Carbon Black (#000000) for maximum contrast.
- Do not introduce new border-radius values; stick to 16px, 46px, 43px, 38px from the defined system.
- Refrain from adding drop shadows; the design relies on stark contrast and distinct colorful accents, not depth perception.
- Do not use generic button styles; always apply either the Ghost Button Inverse, Pill Accent Button, or Rounded Accent Button tokens.
- Avoid breaking the high-contrast principle; never use a low-contrast color pairing for fundamental text or interactive elements.
- Do not use generic sans-serif for body text; always prefer Inter for its distinct visual rhythm and letter-spacing.

### Layout

The page primarily uses a full-bleed layout, allowing content to stretch across the full width, though some sections appear to have an implicit centered content area. The hero pattern features a dominant, center-aligned headline over a soft background, often followed by product visuals. Sections are separated by comfortable `sectionGap` (96px) and maintain a spacious vertical rhythm, avoiding dense information blocks. Content arrangement often alternates between large headlines, centered product showcases, and multi-column grids for features, typically 3 columns. Navigation is handled by a minimal top bar with social links and a 'Get the APP' action button.

### Imagery

Imagery primarily consists of clean, isolated product screenshots of the UGLYCASH app or abstract graphics with a highly saturated, neon color palette. These visuals are often integrated directly into cards, appearing as contained elements rather than full-bleed backgrounds. The app screenshots are sharp, showcasing UI details clearly without excessive styling or context. Icons are simple, outlined or filled, and primarily mono-color, often in Carbon Black or one of the vivid accent colors. The role of imagery is primarily explanatory content and product showcase, with a moderate density.

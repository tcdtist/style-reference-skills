---
version: alpha
name: Balsa
description: Balsa employs a modern, structured aesthetic, blending a pristine white canvas with soft, elevated cards to organize content. Typography is deliberately dense and confident, using strong impactful headlines and compact body text to convey information efficiently. A vibrant yellow and deep violet act as functional highlights, drawing attention to calls-to-action and important information within a predominantly achromatic interface. The overall impression is one of clarity, precision, and productivity.
colors:
  canvas-ice: "#f7f7f7"
  surface-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#313131"
  storm-gray: "#686868"
  silver-mist: "#bbbbbb"
  purple-haze: "#914db2"
  goldenrod: "#ffb700"
  midnight-ink-blue: "#003399"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.73
    letterSpacing: -0.11px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -1.13px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.99px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -2.26px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 60px
components:
  primary-filled-button:
    role: Main call-to-action
  outline-accent-button-midnight-ink-blue:
    role: Secondary call-to-action or informational link
  base-card-no-shadow:
    role: Content grouping, pricing tiers in neutral state
  elevated-content-card:
    role: Prominent content blocks, feature descriptions
  callout-card-goldenrod:
    role: Highlighting key information, warnings, or tips
  callout-card-purple-haze:
    role: Highlighting secondary key information or status updates
---

## Overview

**North Star:** Architectural blueprint on white marble

Balsa employs a modern, structured aesthetic, blending a pristine white canvas with soft, elevated cards to organize content. Typography is deliberately dense and confident, using strong impactful headlines and compact body text to convey information efficiently. A vibrant yellow and deep violet act as functional highlights, drawing attention to calls-to-action and important information within a predominantly achromatic interface. The overall impression is one of clarity, precision, and productivity.

### Do's

- Always use Canvas Ice (#f7f7f7) as the base page background.
- Apply Surface White (#ffffff) for all elevated cards and primary UI elements that require a clean, bright backdrop.
- Prioritize Ink Black (#000000) for all primary text and bold headlines to ensure high contrast and readability.
- Reserve Goldenrod (#ffb700) and Purple Haze (#914db2) exclusively for accent cards, callouts, or small functional indicators, never for large background areas or primary text.
- Maintain a clear visual hierarchy by utilizing Van Condensed Pro Bold for main headings and Inter for all body text, with Inter's various weights for subheadings and emphasis.
- Use 12px border-radius for all cards and container elements to maintain the consistent soft, modern feel.
- Ensure generous vertical spacing between sections, using the defined sectionGap of 60px to provide breathing room.

### Don'ts

- Avoid using multiple different accent colors on a single screen; limit to Goldenrod or Purple Haze for focused attention.
- Do not use dark backgrounds for main content areas; maintain the light theme with Canvas Ice and Surface White providing the primary surfaces.
- Refrain from using strong, opaque shadows; instead, apply the subtle, tiered shadow stacks seen on Elevated Content Cards for a soft lift.
- Do not vary border radius arbitrarily; adhere to 12px for cards and 6px for buttons and interactive elements.
- Avoid decorative imagery that competes with UI elements; imagery should be contained, product-focused, or purely illustrative.
- Do not introduce new typefaces outside of Van Condensed Pro Bold, Inter, Roboto Mono, Noto Sans Mono, or the system sans-serif fallback.
- Exclude heavy gradients or complex background patterns, maintaining the flat and clean aesthetic of the primary surfaces.

### Layout

The page model is primarily centered content within a contained width, though the hero section spans full-bleed. The hero presents a centered headline and subtext, followed by a product screenshot on a clean Canvas Ice background. Sections follow a consistent vertical rhythm, with `sectionGap` (60px) providing ample separation. Content is often arranged in simple, centered stacks, or in 3-column card grids for features and pricing. Navigation is a minimal top-right 'Log in' link.

### Imagery

This site uses product screenshots and contained graphical elements. Product screenshots are typically clean, isolated views of the Balsa interface, often shown within a browser frame on a white background, highlighting specific features or workflows. Illustrations are flat, geometric, and follow brand colors, primarily used for decorative accents or simple icons. Iconography is generally outlined or filled, with varying stroke weights, maintaining a functional purpose rather than being purely ornamental. Imagery serves to explain product features and add visual interest in a contained, text-dominant layout.

---
version: alpha
name: Samara
description: The design feels like an architectural plan rendered on warm, premium paper. It establishes authority through restraint, using vast negative space and a whisper-thin display font (Regola Light) for headlines, making them feel expansive and considered rather than loud. The palette is strictly controlled: a warm off-white (#fdfdf7) background, black ink for text, and a single, vibrant Sky Blue (#0096f7) for all primary actions. This creates a calm, focused environment where the product—modern, livable spaces—is the hero. Soft 12px radii on cards and buttons provide a touch of organic friendliness to the otherwise precise, geometric typography.
colors:
  sky-blue: "#0096f7"
  signal-orange: "#ff4000"
  ink: "#000000"
  pure-white: "#ffffff"
  parchment: "#fdfdf7"
  warm-sand: "#f5f2de"
  driftwood: "#e7e3e1"
  ash: "#d3d3d3"
  stone: "#999999"
  graphite: "#666666"
  evergreen: "#375033"
typography:
  caption-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.48px
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.56px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.49
    letterSpacing: -0.22px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.18px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.25
    letterSpacing: -0.46px
  subheading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.14
    letterSpacing: -0.9px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
    letterSpacing: -0.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.3px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 0.96
    letterSpacing: -2.46px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
    letterSpacing: -4.51px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
components:
  alert-banner:
    role: 
  button-group:
    role: 
  model-feature-card:
    role: 
  primary-button:
    role: The main call-to-action button.
  urgent-cta-button:
    role: A high-contrast call-to-action for dark headers.
  pill-ghost-button:
    role: A subtle, secondary action link styled as a button.
  standard-card:
    role: Default content container for features or testimonials.
  warm-sand-card:
    role: A warmer, more prominent card variant.
  text-input-field:
    role: Standard user input field.
  hero-banner:
    role: The top-of-page introduction, transitioning on scroll.
  inline-render-headline:
    role: A signature component mixing large text with small 3D product renders.
---

## Overview

**North Star:** Sunlit architectural model. The design combines the precision of a blueprint with the warmth and airiness of natural light.

The design feels like an architectural plan rendered on warm, premium paper. It establishes authority through restraint, using vast negative space and a whisper-thin display font (Regola Light) for headlines, making them feel expansive and considered rather than loud. The palette is strictly controlled: a warm off-white (#fdfdf7) background, black ink for text, and a single, vibrant Sky Blue (#0096f7) for all primary actions. This creates a calm, focused environment where the product—modern, livable spaces—is the hero. Soft 12px radii on cards and buttons provide a touch of organic friendliness to the otherwise precise, geometric typography.

### Do's

- Use `regola-light` with tight negative letter-spacing for all headlines above 30px.
- Set the primary page background to #fdfdf7 (Parchment), never pure #ffffff.
- Reserve the vibrant #0096f7 (Sky Blue) for primary interactive elements like CTAs and links.
- Apply a consistent 12px border-radius to almost all buttons, inputs, and cards.
- Employ generous whitespace (96px-120px) between major content sections.
- Use subtle, short shadows like `rgba(0, 0, 0, 0.12) 0px 0.5px 2px 0px` to gently lift elements.
- Mix large, airy typography with high-quality product photography and clean 3D renders.

### Don'ts

- Don't use pure white (#ffffff) for large background areas.
- Don't use bold or heavy font weights for headlines; use size and light weight instead.
- Don't use sharp 0px corners on primary UI components like buttons and cards.
- Don't use a busy color palette; stick to the core Parchment/Ink/Sky Blue system.
- Don't use strong, deep, or colored shadows.
- Don't neglect typography details; specific letter-spacing and line-height values are critical.
- Don't place elements close together; the design relies on spaciousness.

### Layout

The layout is built on a centered, max-width container of approximately 1280px, creating generous white space on either side. The page begins with a full-bleed hero image or a dark banner with overlaid text, transitioning to a vertical stack of content sections on the warm Parchment background. Section breaks are defined by large vertical gaps (96-120px) rather than visual dividers, creating a calm, unhurried rhythm. Content is arranged in simple, centered 1-column stacks for narrative and 2- or 3-column grids for feature breakdowns.

### Imagery

The visual language is a dichotomy of warm aspiration and clean objectivity. Product photography is dominant, featuring the homes in bright, natural, sunlit environments, often surrounded by nature to evoke a feeling of peaceful, premium living. This is contrasted with clean, isolated 3D product renders embedded directly within text blocks, which serve to explain features with technical clarity. All imagery is contained within sharp-edged containers or cards with a soft 12px radius; there are no abstract or decorative graphics.

---
version: alpha
name: Hume AI
description: This design system evokes a sense of gentle authority and advanced scientific inquiry, presenting complex AI research with an approachable, almost pastel-like palette. The primary typefaces, Fellix and PP Fraktion Mono, contrast a bespoke humanist sans-serif with a technical monospaced font, establishing a duality of user-friendliness and precision. Subtle, muted chromatic backgrounds create distinct section breaks and highlight content, preventing visual fatigue, while the prominent use of rounded forms offers visual softness in a technology-focused context.
colors:
  pale-ivory: "#fff9f3"
  graphite: "#222222"
  bright-white: "#ffffff"
  light-mauve: "#fce0ee"
  soft-lilac: "#e6d1ed"
  mint-cream: "#cef1e1"
  sky-mist: "#ccdff1"
  muted-apricot: "#ffdfb8"
  dusty-peach: "#fcd4bd"
  deep-plum: "#c094e4"
  golden-glow: "#ffb760"
  blush-pink: "#f7bbe6"
  ocean-dream: "#7fb8ef"
  jade-mist: "#85e4c5"
  sunset-coral: "#f89d6b"
  wavy-gradient: "#c094e4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.3px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: -0.35px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.45px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.2px
spacing:
  cardRadius: 8px
  buttonRadius: 1.67772e+07px
  elementGap: 12px
  sectionGap: 64px
components:
  stat-block-research-metrics:
    role: 
  tab-bar-data-bar-chart:
    role: 
  dataset-composition-card-feature-cards:
    role: 
  navigation-link:
    role: Navigation element
  pill-button:
    role: Segmented control or tag
  ghost-button-white-text:
    role: Secondary action on dark backgrounds
  text-input:
    role: User data entry
  feature-card-with-muted-background:
    role: Showcasing features or data points
  data-bar-chart-segment-vivid-violet:
    role: Visualizing quantitative data
---

## Overview

**North Star:** Warm pastel research lab. Soft, rounded elements meet crisp technical details within a muted, inviting color scheme.

This design system evokes a sense of gentle authority and advanced scientific inquiry, presenting complex AI research with an approachable, almost pastel-like palette. The primary typefaces, Fellix and PP Fraktion Mono, contrast a bespoke humanist sans-serif with a technical monospaced font, establishing a duality of user-friendliness and precision. Subtle, muted chromatic backgrounds create distinct section breaks and highlight content, preventing visual fatigue, while the prominent use of rounded forms offers visual softness in a technology-focused context.

### Do's

- Use Pale Ivory (#fff9f3) as the default page background to establish a warm, inviting tone.
- Apply Graphite (#222222) for all primary body text, headlines, and main interactive element backgrounds to ensure strong contrast and readability.
- Employ the fully rounded 1.67772e+07px radius for all buttons and text input fields to maintain a soft, approachable aesthetic.
- Reserve Deep Plum (#c094e4) for key interactive elements, headlines that need emphasis, and prominent data visualizations.
- Utilize Fellix for all general UI text and headings, adjusting letter-spacing to -0.6px where larger font sizes are used.
- Alternate section backgrounds between Pale Ivory (#fff9f3) and muted chromatic tints like Light Mauve (#fce0ee) or Soft Lilac (#e6d1ed) to create visual separation.
- Maintain a clear element gap of 12px and card padding of 24px within components for consistent internal spacing.

### Don'ts

- Avoid using harsh, saturated colors for backgrounds; stick to the muted pastel range provided for secondary content areas.
- Do not introduce sharp corners on interactive elements or cards; the aesthetic relies on a consistent soft radius (8px to 1.67772e+07px).
- Refrain from using bold or heavy font weights for headlines; the Fellix typeface in weights 400 and 520 provides sufficient hierarchy without being assertive.
- Do not deviate from the established letter-spacing values; the tight -0.025em for Fellix and expanded 0.025em for PP Fraktion Mono are integral to the typographic identity.
- Avoid excessive use of drop shadows; depth is primarily achieved through background color shifts and subtle elevation.
- Do not use PP Fraktion Mono for general body text; its monospaced nature is intended for data and technical contexts only.
- Never use generic blue for links; active links should employ Deep Plum (#c094e4) to align with brand accents.

### Layout

The page maintains a centered, max-width content container (likely around 1200-1400px, though not explicitly defined) against full-bleed backgrounds. The hero section often features a large, centered headline over a Pale Ivory background, sometimes accompanied by a prominent abstract visual. Sections alternate their background colors (Pale Ivory and various muted pastels) creating a distinct visual rhythm. Content arrangement is primarily centered text blocks, often followed by a 2-column or 3-column grid for features or data points, ensuring a balanced and spacious presentation. Navigation is a clear top bar with discrete 'Log In' and 'Get Started' buttons. Vertical spacing between main sections is generous, typically 64px or more, contributing to an airy feel.

### Imagery

Imagery is predominantly abstract, featuring organic wave-like gradients that symbolize intelligence and data flow, rendered with a soft, pastel color scheme (e.g., Wavy Gradient). When product-related, visuals lean towards data visualizations within soft, muted containers. Icons are minimalist, outline-based, and adopt the brand's accent colors, often contained within fully rounded shapes. The overall impression is one of sophisticated, abstract representation rather than literal photography or complex illustrations, keeping the focus on the data and technology.

---
version: alpha
name: Vizcom
description: Vizcom presents a dark, high-contrast digital workbench aesthetic, inspired by traditional drawing and industrial design. The layout features stark monochrome surfaces punctuated by a single vivid blue for primary actions and interactive elements. Thin borders and subtle elevation define components, prioritizing functionality and a focused user experience. Textures of paper, charcoal, and engineering blueprints provide an underlying tactile quality to the otherwise digital interface.
colors:
  ink-black: "#191919"
  canvas-white: "#f8f4f1"
  blueprint-navy: "#1145a0"
  input-blue: "#4c4cef"
  ideation-blue: "#4586da"
  paper-grey: "#e8e3dd"
  dots-black: "#242425"
  deep-space: "#131313"
  slate-border: "#3c3c3e"
  faded-grey: "#5c5b5a"
  dark-card: "#2f2f31"
  subtle-gray-border: "#8d8a88"
  button-outline: "#b5b2b0"
  brick-red: "#c94b3c"
  prototype-purple: "#974069"
  lighter-lime: "#cdea9d"
  work-olive: "#c2ba43"
  clay-orange: "#ee855a"
  dream-pink: "#cb83d1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.3
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 265px
    lineHeight: 1.3
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 90px
components:
  primary-action-button:
    role: Call-to-action
  ghost-button:
    role: Secondary action or navigation
  pill-button:
    role: Tertiary action or filter
  standard-card:
    role: Content container
  padded-card:
    role: Content container with integrated spacing
  elevated-panel-card:
    role: Prominent content container
  text-input-dark-theme:
    role: User input field
  status-badge:
    role: Categorization or status indicator
---

## Overview

**North Star:** digital workbench, blueprint sketch

Vizcom presents a dark, high-contrast digital workbench aesthetic, inspired by traditional drawing and industrial design. The layout features stark monochrome surfaces punctuated by a single vivid blue for primary actions and interactive elements. Thin borders and subtle elevation define components, prioritizing functionality and a focused user experience. Textures of paper, charcoal, and engineering blueprints provide an underlying tactile quality to the otherwise digital interface.

### Do's

- Prioritize 'Ink Black' (#191919) as the default background for most content and 'Canvas White' (#f8f4f1) for primary text to maintain high contrast.
- Use 'Ideation Blue' (#4586da) exclusively for primary call-to-action buttons and active interactive states, providing a clear visual cue for engagement.
- Apply 'Matter' for all UI text, varying weights (400, 500) and sizes according to the type scale. Maintain tight letter spacing, especially at larger sizes.
- Reserve 'Tomboy LP' (weight 700) for large, impactful section headlines to inject a raw, sketched aesthetic.
- Use 'Dots Black' (#242425) or 'Dark Card' (#2f2f31) for card backgrounds and secondary surfaces to create subtle layering against the main 'Ink Black' background.
- Implement 8px border-radius as the default for most interactive elements (icons, buttons, inputs, badges), reserving 12px or 16px for larger cards and 1440px for pill-shaped elements.
- Define element spacing using multiples of 8px and 12px for `elementGap` and `cardPadding` respectively, with a `sectionGap` of 90px to ensure comfortable density.

### Don'ts

- Do not introduce new chromatic colors outside of the defined accent palette; use the existing vivid blues for UI differentiation.
- Avoid generic large drop shadows; elevation should be subtle and primarily driven by background color changes rather than heavy shadows.
- Do not use 'Tomboy LP' for body text, navigation, or any functional UI text; its expressive nature is intended for display purposes only.
- Avoid using bold or heavily saturated colors for secondary UI text or disabled states; use 'Faded Grey' (#5c5b5a) or 'Paper Grey' (#e8e3dd) for such cases.
- Do not use generic border-radii; adhere strictly to the 8px, 12px, 16px, or 1440px values provided for specific component types.
- Do not deviate from the established spacing hierarchy; maintain the `elementGap` of 8px and `sectionGap` of 90px for consistent visual rhythm.
- Avoid using multiple font families beyond 'Matter' and 'Tomboy LP'; maintain typographic consistency.

### Layout

The page follows a max-width contained model, ensuring content readability on larger screens, rather than full-bleed. The hero section is distinct: a full-bleed, dark background with a large, central 'Tomboy LP' headline and illustrated elements, drawing immediate attention. Subsequent sections alternate between dark and light backgrounds for visual rhythm, employing a responsive two-column text+image pattern that often reverses direction. Feature grids are organized in compact, card-based layouts. Navigation is a sticky top bar with a left-aligned logo and right-aligned links and calls-to-action.

### Imagery

Imagery primarily features product design sketches and photorealistic 3D renders, emphasizing the core functionality of the AI tool. The treatment is a mix of hand-drawn, often wireframe-like sketches (like the hero car or jacket) and clean, focused 3D product shots (like the copper car). Photography, when present, shows a clean, studio-like environment (e.g., the workspace shot) with minimal lifestyle context, focusing on the tools and output. Icons are minimal, outlined, and monochromatic, with a fine stroke weight, often adopting the 'Canvas White' or 'Faded Grey' color. The density is moderate; imagery serves to illustrate and explain product features rather than purely decorate, with a balance between visual elements and descriptive text.

---
version: alpha
name: Ui
description: This design system feels like a finely tuned machine, presenting a clean and precise interface with a stark black-and-white aesthetic. The visual mood is serious and functional, achieved through a dominant achromatic palette and very subtle elevation. Geometric balance is created by mixing hard 10-14px radii for cards and inputs with highly rounded (near-pill) buttons and badges, suggesting both structure and approachability. The use of a custom sans-serif font across all elements with meticulous letter-spacing creates a unified, crisp typographic voice.
colors:
  canvas-white: "#ffffff"
  ghost-gray: "#f2f2f2"
  subtle-ash: "#e5e5e5"
  midtone-gray: "#737373"
  rich-black: "#0a0a0a"
  deep-black: "#000000"
  callout-red: "#c22b10"
  success-green: "#10c22b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.45px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -2.4px
spacing:
  cardRadius: 14px
  buttonRadius: 10px
  elementGap: 8px
  sectionGap: 83px
components:
  primary-action-button:
    role: Call to action.
  ghost-button:
    role: Secondary or tertiary actions, often within groups.
  split-button-left:
    role: Left segment of a grouped button control.
  split-button-right:
    role: Right segment of a grouped button control.
  elevated-card:
    role: Containers for distinct content blocks, forms, or data.
  plain-input-field:
    role: Standard text input.
  segmented-input-left:
    role: Left segment of a grouped input control.
  inverse-tag-badge:
    role: Highlighting status or category, with high contrast.
  neutral-tag-badge:
    role: Subtle categorization or status.
  outline-tag-badge:
    role: Very subtle categorization or option.
---

## Overview

**North Star:** Monochromatic architectural blueprint – precise, functional forms on a stark, bright canvas.

This design system feels like a finely tuned machine, presenting a clean and precise interface with a stark black-and-white aesthetic. The visual mood is serious and functional, achieved through a dominant achromatic palette and very subtle elevation. Geometric balance is created by mixing hard 10-14px radii for cards and inputs with highly rounded (near-pill) buttons and badges, suggesting both structure and approachability. The use of a custom sans-serif font across all elements with meticulous letter-spacing creates a unified, crisp typographic voice.

### Do's

- Use Deep Black (#000000) for primary headings and active states to command attention.
- Apply Subtle Ash (#e5e5e5) for all primary borders and dividers to maintain a subtle visual separation.
- Ensure input fields and cards consistently use a 10px or 14px border-radius, respectively, for geometric stability.
- Employ Geist font universally, leveraging its 400, 500, and 600 weights to establish clear hierarchy without introducing new typefaces.
- Maintain a default element gap of 8px, but use 16px for card inner padding to create adequate breathing room for content.
- Utilize 9999px or 26px border-radius for all interactive buttons and badges to create a soft, approachable pill shape.

### Don'ts

- Avoid using highly saturated colors; stick to the achromatic scale and the two semantic reds and greens.
- Do not introduce additional font families; the current choices are sufficient for all typographic needs.
- Refrain from using strong, multi-directional shadows; rely on minimal 1px shadows or simple borders for elevation.
- Do not deviate from the established border-radius values; the mix of sharp 0px (in split elements), 10px, 14px, and 9999px is intentional.
- Don't add excessive padding or margin; the design favors a compact density with specific, calculated spacing.
- Avoid decorative gradients; the brand's aesthetic is built on flat colors and subtle depth.

### Layout

The page maintains a centered, contained layout with a maximum visible width, creating a focused content area. The hero section features a prominent, centered headline and subtext over the Canvas White background, followed by centrally aligned CTA buttons. Sections below are arranged in a multi-column grid, showcasing various UI components (forms, cards, controls). The rhythm is consistent vertical spacing, creating an organized, information-dense display. Navigation is a sticky top-bar with compact links and utility actions.

### Imagery

The visual language is purely utilitarian and functional. No photography or complex illustrations are present. Icons are monochromatic, typically black stroke or fill on white backgrounds, aligning with the stark aesthetic. Product components are presented directly, with an emphasis on UI elements rather than lifestyle or marketing visuals. Imagery's role is explanatory (via icons) or for showcasing UI components, maintaining a text-dominant layout. There are no decorative visuals.

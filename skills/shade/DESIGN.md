---
version: alpha
name: Shade
description: Shade employs a stark, high-contrast visual language with a focus on functional typography and precise spacing. The design uses a dominant neutral palette relieved by a single vibrant violet accent. Components feature sharp edges or large, bold radii, often with strong box shadows for emphasis, conveying a sense of directness and polished utility. Surfaces are generally flat, with subtle elevation coming from shadows rather than color shifts.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  coal-black: "#131315"
  light-fog: "#f1f1f1"
  steel-gray: "#717173"
  stone-gray: "#a0a0a0"
  warm-gray: "#d0d0d0"
  deep-gray: "#444444"
  dark-gray: "#333333"
  digital-violet-light: "#dacefd"
  digital-violet-bold: "#6941c6"
  digital-violet-vivid: "#855cf8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.29
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -1.68px
spacing:
  cardRadius: 14px
  buttonRadius: 20px
  elementGap: 10px
  sectionGap: 100px
components:
  primary-filled-button:
    role: Main call-to-action button for initiating key flows.
  secondary-outlined-button:
    role: Secondary call-to-action, less prominent than the filled primary.
  ghost-accent-button:
    role: Minimal impact button, often for navigation or secondary actions, using brand accent.
  ghost-neutral-button:
    role: Minimal impact button, for subtle interactive elements or navigation.
  search-navigation-tab:
    role: Interactive tabs for filtering or navigating content sections.
  product-feature-card:
    role: Displaying product features or content blocks.
  default-input-field:
    role: Standard text input element.
  small-pill-button:
    role: Compact interactive element or tag, typically for meta-information or minor actions.
---

## Overview

**North Star:** High-contrast utility with violet accent. A clean white canvas underpins sharp black text and functional components, highlighted by a single, vivid violet.

Shade employs a stark, high-contrast visual language with a focus on functional typography and precise spacing. The design uses a dominant neutral palette relieved by a single vibrant violet accent. Components feature sharp edges or large, bold radii, often with strong box shadows for emphasis, conveying a sense of directness and polished utility. Surfaces are generally flat, with subtle elevation coming from shadows rather than color shifts.

### Do's

- Prioritize Canvas White (#ffffff) for primary backgrounds and Coal Black (#131315) or Midnight Ink (#000000) for primary text to maintain high contrast.
- Use Inter Display for all headings, leveraging its full range of sizes and letter-spacing for visual impact and hierarchy.
- Apply a 20px border-radius for primary buttons and 14px for cards, ensuring consistent application of these distinct rounded corners.
- Emphasize interactive elements and call-to-actions with Digital Violet Bold (#6941c6) for borders or text, or Coal Black (#131315) for filled backgrounds.
- Maintain a clear elementGap of 10px for vertical rhythm between individual UI components.
- Employ the hard 8px 8px 0px 0px F1F1F1 shadow for buttons to give them a distinct, almost debossed appearance.
- Use Ghost Neutral buttons (transparent background, Midnight Ink border and text) for less prominent actions, reserving filled or accented buttons for key interactions.

### Don'ts

- Avoid using multiple chromatic colors; restrict accents primarily to the Digital Violet palette.
- Do not introduce soft or subtle shadows where a hard, offset shadow is expected; adhere to the distinct shadow style on buttons.
- Refrain from using generic font families or weights when Inter Display or Aux Mono Regular are available for specific roles.
- Do not deviate from the established border radii of 0px for some interactive elements and 14px/20px/35px for others, as these are signature elements.
- Avoid introducing background gradients outside of the specified conic-gradient for special accent areas.
- Do not use generic gray scales for text when Steel Gray (#717173), Deep Gray (#444444), or Dark Gray (#333333) are available for semantic text roles.
- Do not use transparent or blurry backgrounds when solid color surfaces are the default. Sharp contrasts are key.

### Layout

The page primarily uses a max-width contained model, with a consistent vertical rhythm. The hero section often features a centered headline over a white background with a secondary subheading and two action buttons (one filled, one outlined). Sections alternate between simple centered stacks of text, and two-column layouts featuring text on one side and a visual element (like a product screenshot or video frame) on the other. A notable element is a horizontal tab navigation using ghost buttons. Feature grids, if present, are likely simple 3-column structures. Ample white space creates a comfortable, airy density between content blocks. Navigation is a sticky top bar with a left-aligned logo and right-aligned links and buttons.

### Imagery

This design system uses a blend of tightly cropped product screenshots and high-quality photography, often with a subtle film grain or warm color grade, alongside a highly functional icon set. Lifestyle photography is present but primarily contained, never full-bleed, depicting people using technology or interacting in studio environments. Illustrations are minimal to none. Icons are typically outlined or filled, mostly monochrome (Midnight Ink or Canvas White), with a consistent stroke weight. Imagery serves mostly an explanatory or product showcase role, occasionally decorative for atmosphere, but never heavily stylized or abstract. The density is balanced, with imagery breaking up text-dominant sections, but not overwhelming the page.

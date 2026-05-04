---
version: alpha
name: Palette Supply
description: Palette Supply presents a soft, matte aesthetic with a dominant off-white canvas, accented by a diverse and playful array of muted and vivid brand colors. Typography is crisp and precise, with a custom monospaced font adding a distinctive product feel. Surfaces are light and clean, with minimal shadows, allowing the varied color palette to define visual interest and hierarchy. Components are rounded, prioritizing a friendly, approachable user experience.
colors:
  canvas: "#f2f0e9"
  paper-white: "#ffffff"
  graphite: "#141212"
  ink-black: "#000000"
  ash-gray: "#a1a0a0"
  sage-mist: "#d7d7c8"
  deep-forest: "#3f593d"
  indigo-punch: "#3051a8"
  desert-rose: "#e0b9b1"
  terracotta: "#863a29"
  harvest-gold: "#e4b357"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.54
  heading:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.94
    letterSpacing: -1.92px
spacing:
  cardRadius: 12px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 72px
components:
  ghost-button-dark:
    role: Secondary action control
  ghost-button-light:
    role: Secondary action control for dark backgrounds
  primary-filled-button-indigo-punch:
    role: Primary call to action
  soft-filled-button-off-white-background:
    role: Tertiary action or decorative button
  content-card-deep-forest:
    role: Container for featured content
  content-card-sage-mist:
    role: Container for detailed information
  text-input-default:
    role: User data entry
---

## Overview

**North Star:** Warm, creative toolkit

Palette Supply presents a soft, matte aesthetic with a dominant off-white canvas, accented by a diverse and playful array of muted and vivid brand colors. Typography is crisp and precise, with a custom monospaced font adding a distinctive product feel. Surfaces are light and clean, with minimal shadows, allowing the varied color palette to define visual interest and hierarchy. Components are rounded, prioritizing a friendly, approachable user experience.

### Do's

- Prioritize Canvas (#f2f0e9) as the default background, using Paper White (#ffffff) for card and elevated surfaces to create a subtle depth.
- Apply a 100px border radius to all buttons and input fields for a consistent, soft, and approachable aesthetic.
- Use primary text in Graphite (#141212) or Ink Black (#000000) for maximal contrast against light backgrounds.
- Reserve Indigo Punch (#3051a8) exclusively for primary call-to-action buttons, active states, and critical interactive icons.
- Utilize PPSupply custom font for all body text, headings, and interactive elements, leveraging its specific weights and letter spacing for brand consistency.
- Employ the esbuild font for all display-level headings (64px) with its tight -0.03em letter spacing to establish strong visual presence.
- Maintain a comfortable density with an 8px element gap and 72px vertical section spacing.

### Don'ts

- Avoid using multiple vivid accent colors juxtaposed unless they are part of a curated palette block.
- Do not use sharp corners or radii smaller than 5px for interactive elements; the brand favors soft, rounded shapes.
- Never replace the custom PPSupply fonts with system defaults for any primary UI text.
- Do not introduce strong drop shadows; the design relies on subtle elevation changes through color and border.
- Avoid arbitrary color choices for buttons; stick to the defined ghost, primary, and decorative color variants.
- Do not use default link blue; all links should use Graphite (#141212) or Paper White (#ffffff) text unless specifically an Indigo Punch accent.

### Layout

The page primarily uses a full-bleed structure without a fixed `pageMaxWidth`. The hero section is characterized by centered text typography over abstract background color blocks. Sections typically follow a consistent vertical rhythm with 72px gaps. Content is arranged in alternating visual blocks or simple centered stacks. There is evidence of multi-column layouts for features (e.g., card grids) but no explicit grid system is visible. The overall density is comfortable, with generous breathing room between elements and sections. Navigation is not detailed in the provided data beyond generic links.

### Imagery

This site features abstract, geometric blocks of color with rounded corners as its primary visual language. There are no photographs or complex illustrations. Iconography is minimalist, likely outlined or filled in a monochromatic style, functioning as simple decorative or functional glyphs rather than complex imagery. Imagery serves primarily as decorative atmosphere and brand accent, rather than explanatory content. The density is moderate, allowing ample white space.

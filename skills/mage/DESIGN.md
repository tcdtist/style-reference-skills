---
version: alpha
name: Mage
description: Mage.ai presents a clear, functional interface resembling an architectural blueprint on a light canvas. The visual style prioritizes information and direct interaction through subtle surface variations and a single primary blue accent color. Typography is precise and organized, creating clear hierarchy without excessive embellishment. Components are lightweight with defined edges and moderate rounded corners, contributing to an overall structured and modern feel.
colors:
  canvas-white: "#ffffff"
  greige-canvas: "#f7f7f1"
  ink-black: "#000000"
  storm-gray: "#2b2b2b"
  silver-mist: "#b0b0b0"
  ocean-blue: "#244cff"
  sky-tint: "#e8f8ff"
  pale-aqua: "#d6f2ff"
  lavender-haze: "#c3aeff"
  soft-yellow: "#ffffbd"
  bright-cyan-gradient: "#e3e8ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.3
spacing:
  cardRadius: 6px
  buttonRadius: 17px
  elementGap: 10px
  sectionGap: 40px
components:
  primary-action-button:
    role: Call-to-action button for initiating key user flows.
  ghost-secondary-button:
    role: Secondary action button, providing a less prominent option.
  default-content-card:
    role: General purpose card for grouping content and features.
  compact-info-card:
    role: Smaller card for lists or minor content blocks.
  highlight-card:
    role: Card with a subtle accent colored background.
  feature-card-with-mixed-backgrounds:
    role: Modular cards for distinctive feature presentation, using various accent colors.
---

## Overview

**North Star:** Architectural blueprint on white marble

Mage.ai presents a clear, functional interface resembling an architectural blueprint on a light canvas. The visual style prioritizes information and direct interaction through subtle surface variations and a single primary blue accent color. Typography is precise and organized, creating clear hierarchy without excessive embellishment. Components are lightweight with defined edges and moderate rounded corners, contributing to an overall structured and modern feel.

### Do's

- Always use `Ink Black` (#000000) for primary headlines and body text to ensure maximum readability and brand consistency.
- Utilize `Greige Canvas` (#f7f7f1) for alternating section backgrounds and `Canvas White` (#ffffff) for primary page backgrounds and cards to create clear visual separation.
- Reserve `Ocean Blue` (#244cff) exclusively for primary call-to-action button backgrounds and active states to guide user interaction.
- Apply `6px` border radius for generic cards and content containers, `17px` for buttons, and `100px` for pill-shaped elements.
- Employ `10px` as the default `elementGap` for horizontal and vertical spacing between small UI elements, establishing a comfortable density.
- Maintain `40px` padding within cards and for major section gaps to give content adequate breathing room.
- Use `Inter Variable` at larger sizes for headings to leverage its precise shaping and expressive range.

### Don'ts

- Do not use `Ocean Blue` (#244cff) for decorative elements or non-interactive text; its purpose is strictly functional for actions.
- Avoid arbitrary color choices for backgrounds; stick to `Canvas White`, `Greige Canvas`, `Sky Tint`, or `Pale Aqua` for content surfaces.
- Do not use letter-spacing on body text or standard links; maintain `normal` letter-spacing for these elements.
- Do not introduce sharp corners or excessively large radii; adhere to the `6px`, `17px`, and `100px` radii for a consistent, approachable feel.
- Avoid cluttering the layout; maintain `40px` section gaps and `10px` element gaps for comfortable content presentation.
- Do not use generic system fonts for critical UI elements if `Inter` or `Geist` are available, as they define the brand's typographic tone.
- Do not deviate from the established type scale; respect predefined `size` and `lineHeight` for each text role to maintain hierarchy.

### Layout

The layout is primarily a contained, centered `max-width` structure with `Greige Canvas` (#f7f7f1) as the dominant background for body content, interspersed with `Canvas White` (#ffffff) sections. The hero features a split design: prominent centered headline and body text left, and a large, colorful, organic illustration on the right. Content sections generally alternate between `Canvas White` and `Greige Canvas` backgrounds, with consistent vertical `40px` section gaps. Text-heavy blocks often appear alongside product screenshots in a two-column `text-left/image-right` arrangement. Navigation is a sticky top bar with `Ink Black` text and a `Ghost Secondary Button` alongside a `Primary Action Button` for key actions. A grid of company logos is utilized for social proof, maintaining the centered content structure.

### Imagery

The site uses a mix of flat, slightly dimensional illustrations and high-fidelity product screenshots. Illustrations feature organic shapes, often depicting stylized characters working with abstract data elements, using bright, moderate accent colors like `Lavender Haze`. Product screenshots are dark-themed UI captures, placed within rounded-corner device mocks, acting as literal content anchors. Imagery is contained within cards or defined sections, never full-bleed, and serves both decorative and explanatory roles. Icons are predominantly filled and monochromatic, consistent with the `Ink Black` or `Silver Mist` palette, indicating a functional approach.

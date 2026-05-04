---
version: alpha
name: Flecto
description: Flecto employs a high-contrast dark green canvas accented by a vibrant, energetic lighter green for key interactive elements. Rounded corners are ubiquitous, creating a soft, approachable aesthetic for sections and components. Typography is crisp and modern, featuring custom sans-serif fonts with subtle letter-spacing variations to enhance legibility and visual rhythm. The overall impression is one of structured friendliness, with clear visual hierarchy driven by color and shape rather than complex elevation.
colors:
  emerald-canvas: "#004737"
  mint-accent: "#56f09f"
  paper-white: "#fffbec"
  off-black: "#032019"
  soft-mint: "#d4ffe8"
  muted-sage: "#99b5af"
  cream-card: "#faf2d5"
  deep-violet: "#8f37ff"
  true-black: "#000000"
  pure-white: "#ffffff"
  dark-wolf: "#222222"
  grey-shadow: "#ccdad7"
  stone-grey: "#939393"
  light-moss: "#afc5c0"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.14
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -0.2px
  display:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1
    letterSpacing: -0.43px
spacing:
  buttonRadius: 10px
  elementGap: 10px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action button for primary actions
  ghost-button:
    role: Secondary action or navigation link
  outlined-button-emerald:
    role: Call to action with brand emphasis, but not filled.
  outlined-button-soft-mint:
    role: Call to action with subtle brand emphasis, typically on dark backgrounds.
  pill-button-text:
    role: Small, rounded control or category tag.
  basic-card:
    role: Content container on Paper White backgrounds.
  highlight-card-mint:
    role: Prominent information card or feature highlight.
  dark-card-emerald:
    role: Content card on light backgrounds, creating strong contrast.
  plain-card:
    role: Simple content grouping without visual emphasis.
---

## Overview

**North Star:** Rounded emerald portal

Flecto employs a high-contrast dark green canvas accented by a vibrant, energetic lighter green for key interactive elements. Rounded corners are ubiquitous, creating a soft, approachable aesthetic for sections and components. Typography is crisp and modern, featuring custom sans-serif fonts with subtle letter-spacing variations to enhance legibility and visual rhythm. The overall impression is one of structured friendliness, with clear visual hierarchy driven by color and shape rather than complex elevation.

### Do's

- Prioritize Emerald Canvas (#004737) as the dominant background color for full-bleed sections to establish brand identity.
- Use Mint Accent (#56f09f) exclusively for primary calls to action, active indicators, and key highlights to maintain its impact.
- Apply a default border-radius of 19px for most card-like elements and content containers for a consistently soft appearance.
- Use the Aeonik font with varied letter-spacing as outlined in the typography section for all headings and prominent text.
- Ensure interactive components primarily use rounded shapes, with specific radii like 10px for buttons and 40px for larger section containers.
- Design for a 'compact' density, using 10px as the default element gap to group related items closely.
- Prefer outlined buttons using brand colors (Emerald Canvas or Soft Mint) over filled neutral buttons for secondary actions or links.

### Don'ts

- Avoid using multiple vivid accent colors; restrict strong chromatic accents to Mint Accent (#56f09f).
- Do not break the established rounding pattern; avoid sharp corners for interactive elements or cards unless explicitly part of a decorative shape.
- Do not use generic system fonts for headings; always use Aeonik for brand consistency and its distinct letter-spacing.
- Avoid excessive use of shadows; stick to the rgba(0, 0, 0, 0.04) 0px 3px 2px 0px for discrete card elevation only.
- Do not introduce large, open whitespace between elements; maintain the 'compact' density for optimal information display.
- Avoid using Cream Card (#faf2d5) as a primary background; reserve it for specific card surfaces to provide subtle variation.
- Do not use Emerald Canvas (#004737) for body text on light backgrounds; use Dark Wolf (#222222) instead for readability.

### Layout

The page primarily uses a contained layout with a maximum width of 174px for content blocks, centered within the browser. The hero section features a full-bleed Emerald Canvas (#004737) background with a large, centered headline and a graphic. Sections often alternate between full-bleed brand color (Emerald Canvas) and a contained Paper White (#fffbec) or Pure White (#ffffff) background. Vertical section rhythm is consistent, with clear visual breaks between blocks. Content is often arranged in visually distinct blocks that occasionally feature rounded cutouts and overlays. Navigation is a simple top bar with a sticky header and minimal links.

### Imagery

This site features abstract, geometric visual elements, particularly a key-like graphic constructed from pixelated blocks. There are no photographs or complex illustrations. Icons are outlined, mono-color, and minimal, matching the clean UI aesthetic. Visual space is dominated by UI elements and typography, with graphics serving primarily as decorative atmosphere and brand representation rather than explanatory content. Image density is low.

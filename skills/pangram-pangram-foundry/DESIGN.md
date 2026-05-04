---
version: alpha
name: Pangram Pangram Foundry
description: Pangram Pangram champions a stark, high-contrast aesthetic with functional color accents. The UI features a bright, almost white canvas, broken by dark header sections and image-heavy content blocks. Typography is the primary visual element, bold and expansive, with interactions generally expressed through subtle changes in neutral buttons or vivid, distinct status badges. Surfaces are largely flat with soft, large corner radii, avoiding heavy shadows.
colors:
  ink: "#000000"
  canvas: "#fafafa"
  paper: "#ededed"
  slate: "#666666"
  alert-red: "#ff2f00"
  update-yellow: "#ffb700"
  early-access-blue: "#bfe0ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
  display-sm:
    fontFamily: "system-ui"
    fontSize: 121px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 145px
    lineHeight: 1
spacing:
  cardRadius: 20px
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 92px
components:
  filled-button-dark:
    role: Primary action button.
  filled-button-light:
    role: Secondary action button.
  outlined-button-light:
    role: Tertiary action button or alternative action.
  outlined-button-accent:
    role: Call-to-action with strong visual emphasis.
  font-showcase-card-filled:
    role: Displays font information within a contained content block.
  font-showcase-card-transparent:
    role: Showcases font information directly on a contrasting background, usually within a themed section.
  text-input:
    role: Form input field.
  status-badge-alert-red:
    role: Indicates 'New' status or a primary highlight.
  status-badge-update-yellow:
    role: Indicates 'Update' status.
  status-badge-early-access-blue:
    role: Indicates 'Early Access' status.
---

## Overview

**North Star:** Type foundry's bold canvas: white pages, dark headers, expressive typography, and soft, rounded containers.

Pangram Pangram champions a stark, high-contrast aesthetic with functional color accents. The UI features a bright, almost white canvas, broken by dark header sections and image-heavy content blocks. Typography is the primary visual element, bold and expansive, with interactions generally expressed through subtle changes in neutral buttons or vivid, distinct status badges. Surfaces are largely flat with soft, large corner radii, avoiding heavy shadows.

### Do's

- Use Neue Montreal for all textual content, adjusting weights and sizes from the defined typescale for hierarchy.
- Apply a 20px border radius to all interactive elements like buttons and input fields, and all elevated cards.
- Utilize Alert Red (#ff2f00) solely for accenting new features, primary calls-to-action, or important status indicators.
- Maintain a clear distinction between backgrounds: use Canvas (#fafafa) for general pages and Paper (#ededed) for subtly differentiated card surfaces.
- Ensure headings use Ink (#000000) for high contrast against light backgrounds, emphasizing typographic expression.
- Prioritize text and button padding of 7.65px vertical and 22.95px horizontal for a consistent comfortable density.
- Employ the 999px radius for all badges to achieve a distinct pill-shaped visual for status indicators.

### Don'ts

- Do not use shadows; rely on background color changes, borders, and rounded corners for visual separation and depth.
- Avoid using Alert Red (#ff2f00) for general body text or non-actionable elements, reserving its impact for specific functions.
- Do not deviate from the defined 20px or 999px border radii; inconsistent rounding undermines the soft, approachable aesthetic.
- Do not introduce additional chromatic colors beyond Alert Red, Update Yellow, and Early Access Blue for UI elements.
- Avoid dense, information-heavy blocks of text without ample vertical spacing, as readability is key with the expansive type.
- Do not use very thin strokes for borders; a 1px solid stroke in Ink (#000000) or Canvas (#fafafa) is typical for emphasis or separation.
- Do not use letter-spacing values other than 'normal' for Neue Montreal, as this typeface relies on its natural spacing.

### Layout

The page primarily uses a full-bleed layout for hero sections and large image blocks, with content centered within these expansive areas. Subsequent sections typically maintain a maximum content width, creating a spacious, readable flow. The hero pattern features large, centered headlines and calls-to-action over an image background. Vertical rhythm is established by section gaps around 92px. Content often alternates between large textual displays and visual blocks. There are instances of 4-column card grids for features, particularly for font showcases. Navigation is a sticky top bar, minimalist and un-intrusive.

### Imagery

The visual language for imagery varies: hero sections feature large, atmospheric photography or blurred, abstract product shots, often with a dark overlay to provide contrast for white text. Other sections use product-focused imagery (e.g., food items relevant to font names) which are often full-bleed or large-scale background elements. Icons are minimal, typically outlined and black on light backgrounds, or white on dark sections, keeping focus on typography. Imagery serves as evocative atmosphere or direct content showcase rather than decorative flourishes.

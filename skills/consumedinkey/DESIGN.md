---
version: alpha
name: Consumedinkey
description: Consumedinkey's design system emanates a stark, minimalist severity, prioritizing content with an absolute monochrome palette. Typography, the primary visual element, is rendered in high-contrast against expansive, unblemished surfaces. The visual language is ascetic, focusing on direct communication and an almost complete absence of decorative components or background textures.
colors:
  canvas-white: "#ffffff"
  pitch-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
    letterSpacing: 0.56px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0.64px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: 1.6px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: 2.56px
spacing:
  elementGap: 16px
  sectionGap: 72px
components:
  ghost-link-button:
    role: Interactive navigation and calls-to-action.
  primary-headline:
    role: Section titles and prominent textual emphasis.
  body-text:
    role: General content and explanatory paragraphs.
---

## Overview

**North Star:** Monochrome starkness; an uncompromising canvas of text and light.

Consumedinkey's design system emanates a stark, minimalist severity, prioritizing content with an absolute monochrome palette. Typography, the primary visual element, is rendered in high-contrast against expansive, unblemished surfaces. The visual language is ascetic, focusing on direct communication and an almost complete absence of decorative components or background textures.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background color for most sections, establishing a high-contrast foundation.
- Use Pitch Black (#000000) for all text and as the background for inverted sections (e.g., hero section).
- Implement Helvetica LT, weight 400, for all typographic needs, varying only the font size to create hierarchy.
- Apply a consistent letter-spacing of 0.0400em to all Helvetica LT text to maintain its defined character.
- Maintain a default border-radius of 0px for all elements, reinforcing the sharp, unadorned aesthetic.
- Utilize 72px as the standard vertical spacing between major page sections.
- Define interactive elements such as links and buttons with a transparent background, white text, and a 1px white border on interaction states to preserve the minimalist presentation.

### Don'ts

- Avoid the introduction of any chromatic colors; the palette is strictly monochrome.
- Do not use any shadows or gradients for elevation or decorative purposes.
- Refrain from using border-radius values other than 0px.
- Do not introduce additional font families or weights beyond Helvetica LT 400.
- Avoid using decorative imagery or complex graphic elements; visual focus should remain on typography and direct contrast.
- Do not add any padding to interactive link or button elements for a minimal, integrated appearance.

### Layout

The page adheres to a full-bleed layout, horizontally extending content to the viewport edges without a dedicated `pageMaxWidth`. Sections are delineated by shifts in background color (either Canvas White or Pitch Black) and a generous vertical `sectionGap` of 72px. The hero section often features oversized, centered typography. Content arrangement is primarily composed of large, single-column text blocks or simple two-column layouts, usually text-dominant. The navigation consists of discreet, non-intrusive `Ghost Link Buttons` positioned at the top corners of the page, blending into the background until hovered.

### Imagery

This site features a complete absence of conventional imagery. Instead, it relies on typography and the stark contrast of its monochrome palette to convey information and mood. The presence of a prominent black vertical bar (like a text cursor) in the hero section acts as a minimalist, abstract visual anchor. Icons are not present on the site, reinforcing its text-dominant, utilitarian approach. Density is extremely low, with ample negative space.

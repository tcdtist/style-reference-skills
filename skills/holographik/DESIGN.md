---
version: alpha
name: Holographik
description: Holographik uses a high-contrast, stark visual language built on an uncompromising black and white palette. Typography is large, bold, and tightly tracked for maximum impact, creating a sense of directness. Components are entirely UI-driven, with no decorative elements, relying on sharp edges and a single, extreme radius for interaction cues. The overall impression is one of confident, unornamented clarity.
colors:
  absolute-black: "#000000"
  pure-white: "#ffffff"
  ash-gray: "#aaaaaa"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1
    letterSpacing: -0.52px
spacing:
  buttonRadius: 160px
  elementGap: 10px
  sectionGap: 200px
components:
  navigation-link:
    role: Top-bar navigation and footer links
  accent-bordered-element-ghost-outlined:
    role: Interactive elements, likely buttons/links
  text-block:
    role: Descriptive paragraphs and content sections
  hero-headline:
    role: Main page headline
---

## Overview

**North Star:** High-contrast monochrome blueprint

Holographik uses a high-contrast, stark visual language built on an uncompromising black and white palette. Typography is large, bold, and tightly tracked for maximum impact, creating a sense of directness. Components are entirely UI-driven, with no decorative elements, relying on sharp edges and a single, extreme radius for interaction cues. The overall impression is one of confident, unornamented clarity.

### Do's

- Maintain a strict monochrome palette, leveraging Absolute Black (#000000) and Pure White (#ffffff) for primary contrast and Ash Gray (#aaaaaa) for subtle variations.
- Apply the extreme 160px border-radius to all interactive components and card-like elements to establish a distinct pill or circular visual cue.
- Use Helvetica Neue (or Arial as substitute) exclusively for all text, maintaining weight 400 and a consistent -0.0200em letter-spacing across all sizes.
- Utilize 200px for vertical section separation to ensure generous breathing room between content blocks.
- Prioritize high contrast pairings of #000000 text on #ffffff backgrounds or vice-versa for all content to maximize readability and visual impact.
- Employ 24px internal padding for card-like elements and similar content containers, with smaller 5px or 10px padding for tighter internal element spacing.

### Don'ts

- Avoid introducing any additional chromatic colors; limit the palette to black, white, and a single gray.
- Do not use subtle or moderate border radii, as the system mandates an extreme 160px radius for specific components.
- Do not vary font weights beyond 400 for Helvetica Neue; all typography should maintain its consistent visual weight.
- Do not introduce shadows or elevation effects; the design relies on flat, high-contrast surfaces.
- Avoid intricate layout grids or complex component architectures; maintain a direct, block-based composition.
- Do not use generic system link styles; links should be Pure White or Absolute Black text without explicit underlines unless contextualized.

### Layout

The page primarily uses a full-bleed layout on an Absolute Black background, creating a vast, immersive canvas. The hero section features large, layered graphic elements and bold typography, breaking traditional content structures. Content below the hero appears to be organized in stacked, high-contrast blocks, potentially alternating between full-bleed black and contained white sections. Vertical rhythm is established by significant section gaps (200px). The overall layout emphasizes density and visual impact in key areas, suggesting a minimal navigation structure (top-header links only). There's no evident constrained max-width for the main content.

### Imagery

This site features a heavy use of conceptual, abstract graphics composed of tightly cropped, monochromatic or desaturated photography combined with grid patterns and distorted typographic elements. Imagery often appears as overlapping, raw-edged layers without rounded corners, creating a visual collage effect. The role of imagery is primarily decorative atmosphere and brand expression, rather than explanatory content or product showcase. The density is image-heavy in the hero, becoming more text-dominant downwards. Icons are not a prominent feature, with the visual weight carried by the typographic and photographic elements.

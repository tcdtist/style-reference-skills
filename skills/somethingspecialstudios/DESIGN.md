---
version: alpha
name: Somethingspecialstudios
description: The Something Special Studios design system projects a refined, minimalist aesthetic with a canvas of near-white. Strong typographic hierarchy is established through a single, antique-inspired serif font, primarily in dark charcoal for high contrast. Interactivity is subtle, often indicated by a slight border change rather than bold color fills, maintaining a quiet, confident presence. The overall impression is one of tasteful restraint, where typography and subtle shifts in dark tones carry the visual weight.
colors:
  canvas-parchment: "#fffdf1"
  deep-charcoal: "#141414"
  absolute-black: "#000000"
  ghost-gray: "#e6e6e6"
  muted-ash: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1.1
spacing:
  elementGap: 10px
components:
  outlined-text-link:
    role: Navigation links and inline text links.
  navigation-link:
    role: Top-level navigation items.
---

## Overview

**North Star:** Minimalist canvas, typographic theatre.

The Something Special Studios design system projects a refined, minimalist aesthetic with a canvas of near-white. Strong typographic hierarchy is established through a single, antique-inspired serif font, primarily in dark charcoal for high contrast. Interactivity is subtle, often indicated by a slight border change rather than bold color fills, maintaining a quiet, confident presence. The overall impression is one of tasteful restraint, where typography and subtle shifts in dark tones carry the visual weight.

### Do's

- Prioritize Deep Charcoal (#141414) for all primary text elements to ensure strong contrast against Canvas Parchment (#fffdf1).
- Utilize AntiqueLegacy at its various sizes and line heights to establish clear typographic hierarchy without introducing additional typefaces.
- Implement Canvas Parchment (#fffdf1) as the default background for all page sections and card surfaces.
- Employ 10px as the standard padding around internal elements within components, and as the general element gap.
- Use 0px for all border-radius values, maintaining the sharp, rectilinear aesthetic.
- Indicate interactive states primarily through subtle border interactions (1px Deep Charcoal #141414) rather than background color changes.
- Rely on line height adjustments to control reading density and visual weight, especially for headlines (0.80) and body text (1.50).

### Don'ts

- Avoid using saturated colors for UI elements; chromatic color is not part of this system's functional palette.
- Do not introduce additional font families or weights beyond AntiqueLegacy 400.
- Refrain from applying significant elevation or shadows; the design relies on flat surfaces and high contrast.
- Do not use rounded corners unless explicitly specified for a specific graphic element.
- Avoid large padded sections or excessive white space between elements; the system tends towards a compact density.
- Do not use filled buttons for calls to action; action items are typically outlined or text-based.
- Completely avoid all forms of decorative gradients; surfaces are uniformly flat colors.

### Layout

The page layout operates on a full-bleed model with content centered. The hero pattern features large, centered headlines against the primary Canvas Parchment background. Section rhythm is consistent, maintaining tight vertical spacing with implied separation through content grouping and typographic changes rather than strong visual dividers or alternating bands. Content is arranged primarily as centered stacks or simple text blocks. There is no visible usage of complex grids for features or pricing, lending itself to a more editorial, linear flow. Navigation is a minimalist top bar.

### Imagery

The visual language for imagery is minimal, focusing entirely on UI-driven content rather than decorative graphics. No photography, 3D renders, or complex illustrations are used. Icons, if present, should be outlined, monochrome (Deep Charcoal or Absolute Black), and used sparingly for functional clarity rather than aesthetic embellishment. Imagery density is extremely low, with text dominating the visual space.

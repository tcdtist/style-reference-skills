---
version: alpha
name: WRDLSS
description: WRDLSS employs a stark, monospaced ASCII-art aesthetic, reminiscent of early terminal interfaces. The design system prioritizes textual information over graphical elements, creating a dense, almost cryptographic visual texture for content. Interaction thrives on pure contrast and minimal UI elements. The overall impression is one of rigorous, almost ascetic functionality.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ghost-border: "#e5e7eb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
spacing:
  cardRadius: 16px
  elementGap: 4px
components:
  content-card:
    role: Surface for organized content blocks.
---

## Overview

**North Star:** Terminal ASCII Canvas

WRDLSS employs a stark, monospaced ASCII-art aesthetic, reminiscent of early terminal interfaces. The design system prioritizes textual information over graphical elements, creating a dense, almost cryptographic visual texture for content. Interaction thrives on pure contrast and minimal UI elements. The overall impression is one of rigorous, almost ascetic functionality.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background for all major content areas.
- Use Ink Black (#000000) for all primary text and link states to ensure maximum contrast.
- Apply Ghost Border (#e5e7eb) for subtle separation lines around content, lists, and headings.
- Maintain IBM Plex Mono as the sole typeface, utilizing its various weights for hierarchy.
- Use 16px border-radius for cards and 8px for smaller body-level elements.
- Implement 4px spacing between elements for compact, dense information presentation.
- Ensure all textual content is presented with a 1.15 line-height to maintain consistent vertical rhythm.

### Don'ts

- Avoid using any saturated colors; limit the palette strictly to the defined neutrals.
- Do not introduce any drop shadows or elevation effects, as the system relies on flat surfaces.
- Do not deviate from IBM Plex Mono; decorative or serif fonts are antithetical to the brand.
- Avoid large empty spaces; maintain a compact information density.
- Do not use gradients; the system is based on flat, solid color fields.
- Do not apply padding to Content Cards, as they are designed for unconstrained content flow.

### Layout

The page primarily uses a full-bleed layout without a fixed max-width, allowing content, especially the ASCII art, to extend across the entire viewport. The hero section displays centered text and interface metadata over a full-bleed ASCII background. Section rhythm is continuous, with content flowing seamlessly without distinct visual dividers or alternating bands. Content arrangement is typically centered or left-aligned, stacked vertically, giving prominence to the monospaced text blocks. There are no traditional grid layouts for cards or features; content is an uninterrupted stream. Overall density is compact, maximizing information within the screen space, with minimal white space.

### Imagery

The site primarily uses abstract ASCII-art graphics created from hyphens, slashes, and dots. These graphics serve a decorative and atmospheric role, forming patterns that evoke a glitchy, digital landscape. There is no photography, traditional illustration, or product screenshots. Icons are minimal, represented by monochromatic dots like `[•]`. The density of these graphics is very high, often forming large, textured backgrounds and almost all content is represented by typography and these abstract elements.

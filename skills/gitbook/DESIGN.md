---
version: alpha
name: Gitbook
description: GitBook employs a crisp, structured aesthetic with a focus on product documentation. The visual system features abundant negative space, subtle surface differentiation, and a single vibrant orange accent color. Typography is precise and highly tracked, guiding the eye through dense information without visual clutter. Components favor soft curves and gentle elevation, projecting an approachable yet authoritative tone through careful restraint rather than overt decoration.
colors:
  canvas: "#ffffff"
  ink: "#1c1917"
  ash: "#57534d"
  stone: "#79716b"
  parchment: "#fafaf9"
  whisper-gray: "#efeeed"
  outline-gray: "#e5e5e5"
  obsidian: "#000000"
  sunset-orange: "#fe551b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.18
    letterSpacing: -0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.4
    letterSpacing: -1.35px
  display:
    fontFamily: "system-ui"
    fontSize: 55px
    lineHeight: 1
    letterSpacing: -2.2px
spacing:
  cardRadius: 16px
  buttonRadius: 99px
  elementGap: 10px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action
  ghost-button:
    role: Secondary action
  text-link-button:
    role: Tertiary action, inline link
  text-link-button-transparent:
    role: Inline navigation, minimal action
  feature-card-parchment:
    role: Informational display
  feature-card-canvas:
    role: Prominent information display
  screenshot-display-card:
    role: Visual content container
  subtle-elevated-card:
    role: Minor elevated content
---

## Overview

**North Star:** Architectural blueprint on bright white

GitBook employs a crisp, structured aesthetic with a focus on product documentation. The visual system features abundant negative space, subtle surface differentiation, and a single vibrant orange accent color. Typography is precise and highly tracked, guiding the eye through dense information without visual clutter. Components favor soft curves and gentle elevation, projecting an approachable yet authoritative tone through careful restraint rather than overt decoration.

### Do's

- Prioritize Ink (#1c1917) for primary headings and Canvas (#ffffff) for backgrounds to maintain a clean contrast.
- Use 99px border-radius for all interactive buttons and tags to ensure a consistent pill shape (e.g., 'Start for free').
- Apply General Sans Variable, weight 700 with aggressive negative letter-spacing for all display and large heading text.
- Utilize Parchment (#fafaf9) or Whisper Gray (#efeeed) for secondary card backgrounds, creating subtle layered surfaces.
- Maintain a clear element gap of 10px for vertical stacking of UI elements and 8px for smaller interactive elements.
- Ensure textual contrast: Ink (#1c1917) on Canvas (#ffffff) surfaces, and Canvas (#ffffff) text on Ink (#1c1917) button backgrounds.
- Reserve Sunset Orange (#fe551b) primarily for decorative accents, illustrations, or as a background wash to avoid competition with functional UI.

### Don'ts

- Avoid using Sunset Orange (#fe551b) for primary calls to action or essential text; its role is decorative accent, not functional interface element.
- Do not introduce heavy drop shadows; prefer subtle 1px shadows or no shadows to maintain the light, modern aesthetic.
- Refrain from using strong, saturated colors beyond Sunset Orange; the palette is intentionally restrained to highlight content.
- Do not deviate from the specified General Sans, Inter, Geist Mono, and system sans-serif fonts; no additional typefaces should be introduced.
- Avoid tight spacing for body text; ensure adequate line-height and letter-spacing are respected to preserve readability.
- Do not apply rounded corners to full-bleed sections or backgrounds; surfaces should adhere to the specified radii of 8px, 16px, or 99px for components.
- Do not use black #000000 for body text; reserve it for large, impactful headlines where maximum contrast is desired.

---
version: alpha
name: Compound
description: Compound's design system evokes an architectural blueprint on a white canvas, emphasizing structured clarity and subtle premium detailing. The aesthetic focuses on minimal contrast and an almost monochromatic palette, allowing information and sophisticated typography to dominate. Surfaces typically feature generous radii and extremely light, diffused shadows, creating a sense of quiet elevation rather than stark separation. Interactivity is signaled through nuanced grays and the distinctive use of a nearly black fill for primary actions, providing a sharp, confident anchor within the otherwise restrained visual hierarchy.
colors:
  canvas-white: "#ffffff"
  graphite: "#171717"
  ash-gray: "#e5e7eb"
  smoke: "#7e7e7e"
  boulder: "#6f6f6f"
  cloud-gray: "#f3f3f3"
  stone-gray: "#8f8f8f"
  platinum: "#a0a0a0"
  warm-gold: "#ffc838"
  deep-black: "#000000"
  steel-gray-gradient: "#c7c7c7"
  dark-charcoal-gradient: "#505050"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.11
spacing:
  cardRadius: 20px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 64px
components:
  text-only-button:
    role: Link-style buttons for navigation and secondary actions.
  pill-primary-button:
    role: Main calls to action.
  pill-inverted-button:
    role: Secondary action or prominent ghost button.
  elevated-content-card:
    role: Container for featured information or interactive content blocks.
  dark-embed-card:
    role: Embedded content blocks, often product screenshots or code examples.
  subtle-highlight-card:
    role: Highlighting related or suggested content with minimal visual weight.
  announcement-banner:
    role: Top-level informational alerts or promotions.
---

## Overview

**North Star:** Architectural blueprint on white marble.

Compound's design system evokes an architectural blueprint on a white canvas, emphasizing structured clarity and subtle premium detailing. The aesthetic focuses on minimal contrast and an almost monochromatic palette, allowing information and sophisticated typography to dominate. Surfaces typically feature generous radii and extremely light, diffused shadows, creating a sense of quiet elevation rather than stark separation. Interactivity is signaled through nuanced grays and the distinctive use of a nearly black fill for primary actions, providing a sharp, confident anchor within the otherwise restrained visual hierarchy.

### Do's

- Use Monument Grotesk 400 for all text elements, ranging from 12px for captions to 72px for display headings.
- Apply Canvas White (#ffffff) as the primary page background and for elevated card surfaces, ensuring a clean, bright canvas.
- Employ Graphite (#171717) for all primary text and main calls to action, providing strong focal points and clear hierarchy.
- Utilize Ash Gray (#e5e7eb) for subtle borders and ghost button outlines to delineate elements without harsh lines.
- Round corners with a 9999px radius for all buttons and icons to create a consistent pill-like or circular shape.
- Apply a 20px border-radius to all primary content cards, softening their appearance and suggesting approachability.
- Always use diffuse, light shadows like rgba(207, 207, 207, 0.01) for elevated cards, maintaining a floating rather than heavy aesthetic.

### Don'ts

- Avoid using saturated colors other than Warm Gold (#ffc838) for accents; the system is built on a near-monochromatic palette.
- Do not deviate from the single 400 weight for Monument Grotesk; visual hierarchy is established through size and color, not varied weight.
- Do not use hard, high-contrast shadows; the system favors soft, barely-there elevation effects.
- Avoid introducing additional border colors that aren't Ash Gray (#e5e7eb) or Graphite (#171717) to maintain visual consistency.
- Do not use sharp 0px border-radii for interactive elements or cards; all prominent components should have rounded corners.
- Refrain from bolding text for emphasis; use different font sizes or the Graphite (#171717) color for distinction.
- Do not break the established 4px element gap and 24px card padding; these values maintain the comfortable density.

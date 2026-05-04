---
version: alpha
name: Palantir IR
description: Palantir Investor Relations embodies a 'data-driven dark academia' aesthetic, presenting information within a clean, monochromatic environment. The design prioritizes content with high contrast typography against dark surfaces, using subtle geometric patterns and delicate borders instead of bold colors or heavy embellishments. Interaction is minimal, with an emphasis on direct navigation and clear data presentation, maintaining a serious and authoritative tone.
colors:
  midnight-ink: "#15161a"
  storm-gray: "#1f2426"
  ghost-white: "#f6f6f6"
  subtle-gray-gradient: "#e3e3e3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.12
    letterSpacing: 0.3px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.19
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.22
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1.22
    letterSpacing: -0.96px
spacing:
  cardRadius: 6px
  elementGap: 10px
  sectionGap: 55px
components:
  hero-headline:
    role: Primary page title
  navigation-link:
    role: Top-level site navigation
  ghost-button:
    role: Navigation and secondary calls to action
  information-card:
    role: Content segmentation and presentation
  minimal-card:
    role: Secondary content cards
---

## Overview

**North Star:** Midnight data console

Palantir Investor Relations embodies a 'data-driven dark academia' aesthetic, presenting information within a clean, monochromatic environment. The design prioritizes content with high contrast typography against dark surfaces, using subtle geometric patterns and delicate borders instead of bold colors or heavy embellishments. Interaction is minimal, with an emphasis on direct navigation and clear data presentation, maintaining a serious and authoritative tone.

### Do's

- Use Midnight Ink (#15161a) for primary background surfaces and Storm Gray (#1f2426) for secondary UI elements to establish clear visual hierarchy.
- Apply Alliance No.2 font consistently across all text elements; utilize its specific letter-spacing values: -0.03em for display sizes (96px) and 0.03em for smaller text (10px-12px).
- Maintain a monochrome palette with Ghost White (#f6f6f6) for all primary text and interaction states.
- Employ 6px `radius` for all cards and panel-like containers, avoiding sharper or more rounded corners.
- Structure layouts with a `sectionGap` of 55px and an `elementGap` of 10px to create spacious, organized content blocks.
- Utilize a 1px Storm Gray (`#1f2426`) border for interactive elements and subtle content dividers, as seen in navigation links and card outlines.
- Incorporate subtle geometric overlays or abstract gradients, such as the Subtle Gray Gradient, as decorative elements within dark backgrounds, rather than colorful imagery.

### Don'ts

- Avoid introducing additional vivid or saturated colors outside of the established monochrome palette and subtle accent gradients.
- Do not use heavy shadows or strong elevation effects; rely on subtle background variations and borders for depth.
- Refrain from using bold type weights; Alliance No.2 weight 400 is the standard for all text, conveying authority through clarity, not volume.
- Do not use generic button styles; interactive elements should be minimal, often text-based with subtle underlines or thin borders.
- Avoid decorative imagery with lifestyle photography or human elements; focus on abstract, geometric, or product-screenshot-like visuals.
- Do not vary border-radius significantly; stick to 6px for all rounded elements.
- Avoid dense, information-packed sections with minimal whitespace; maintain generous `sectionGap` and `elementGap` for readability.

### Layout

The page primarily uses a full-bleed dark background for its canvas. The hero section is full-bleed, showcasing a centered headline with large typography over a dark background enriched with subtle geometric patterns. Content sections often alternate between different shades of dark gray backgrounds, with consistent vertical spacing (55px `sectionGap`). Content is frequently arranged in multi-column grids (like the two-column card layout), with an emphasis on centered textual content or text-adjacent visual blocks. The navigation is a minimalist sticky top bar with text links and a subtle separator.

### Imagery

Imagery is minimal and abstract, prioritizing geometric patterns (circles, hexagons) and subtly faded gradients over photography or illustrations. Illustrations are linear, outlined, and monochromatic, used sparsely to enrich background areas or complement text. Icons are outlined, simple, and white, matching the overall stark, technical aesthetic. The few visuals serve an atmospheric or explanatory role, never dominating the content and always maintaining a low-key presence.

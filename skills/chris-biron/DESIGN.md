---
version: alpha
name: Chris Biron
description: Chris Biron presents a dark, minimalist aesthetic with a strong focus on high-contrast typography and subtle interactive elements. The design system emphasizes spacious layouts and a sense of calm, with large areas of negative space allowing content and imagery to breathe. Typography carries significant weight in conveying messages, often in all-caps, with a striking interplay between a classical serif and a modern sans-serif. Visual transitions are smooth and expressive, complementing the refined but raw interaction style.
colors:
  midnight-void: "#000000"
  arctic-mist: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.1
spacing:
  elementGap: 5px
  sectionGap: 50px
components:
  primary-navigation-link:
    role: Top-level navigation items
  body-text-block:
    role: Main narrative content
  section-heading:
    role: Major content section titles
  footer-description:
    role: Site-wide descriptive text
---

## Overview

**North Star:** High-contrast typographic canvas

Chris Biron presents a dark, minimalist aesthetic with a strong focus on high-contrast typography and subtle interactive elements. The design system emphasizes spacious layouts and a sense of calm, with large areas of negative space allowing content and imagery to breathe. Typography carries significant weight in conveying messages, often in all-caps, with a striking interplay between a classical serif and a modern sans-serif. Visual transitions are smooth and expressive, complementing the refined but raw interaction style.

### Do's

- Prioritize Midnight Void (#000000) for all main backgrounds to maintain the dark theme.
- Use Arctic Mist (#ffffff) for all primary text and interactive elements on dark backgrounds.
- Apply the `editorial` font for all major headings and expressive textual content, leveraging its classical aesthetic.
- Use the `goodsans` font for all functional elements like navigation, labels, and small informational text.
- Maintain generous spacing: `50px` for vertical section gaps and `22px` for internal content padding.
- Enforce all-caps for headlines using the `editorial` font to maximize impact.
- Utilize border-only interactive states for buttons and links, using Midnight Void (#000000) for borders on light elements, and Arctic Mist (#ffffff) for borders on dark elements.

### Don'ts

- Avoid introducing any saturated colors; the palette is strictly achromatic.
- Do not use small line heights for `goodsans` text; maintain ample leading for readability in compact areas.
- Do not add any drop shadows or complex elevation; the design relies on flat, high-contrast surfaces.
- Do not add non-functional ornamentation; every visual element should serve a clear purpose.
- Avoid using `goodsans` for large, dominant headlines; reserve `editorial` for that role to preserve typographic hierarchy.
- Do not deviate from the established spacing values; consistency is key to the spacious feel.
- Avoid generic icon libraries; icons should be minimalist and align with the sharp, clean aesthetic, likely using pure white strokes.

### Layout

The page adheres to a full-bleed layout, maximizing the dark canvas, with content often centered vertically and horizontally within large sections. The hero section frequently features a full-viewport visual (image or render) with minimal, centered textual overlay. Section rhythm is marked by distinct, generously spaced content blocks rather than explicit visual dividers, featuring alternating arrangements of text and visuals. Content frequently stacks centrally or uses a 2-column layout for text and images or product mockups. The navigation is a minimalist top bar, likely sticky, with 'INDEX' and 'INFO' links positioned at the top left and right corners, serving as a subtle framing element.

### Imagery

The visual language is characterized by bold, full-bleed product photography within simulated digital interfaces (like phone mockups) or artistic 3D renders of physical products. Imagery is typically self-contained, presented with raw edges and little to no masking. When photography is used, it often features tight crops and a sense of candid immediacy, with high contrast. The role of imagery is to showcase product design and provide contextual examples of the designer's work, rather than decorative atmosphere. The overall density is image-heavy in showcased project sections, balanced by text-dominant areas for descriptions.

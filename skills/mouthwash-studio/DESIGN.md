---
version: alpha
name: MOUTHWASH Studio
description: Mouthwash Studio employs a stark, monochromatic aesthetic, creating a high-contrast experience with unapologetic black text and elements against a crisp, near-white background. The design emphasizes content through bold typography and clear spatial separation, with minimal visual embellishments. Components are sharp-edged and lightweight, supporting a direct, unmediated presentation of work and information.
colors:
  midnight-ink: "#000000"
  ghost-gray: "#767773"
  muted-silver: "#9b9c96"
  canvas-white: "#f1f1f1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 0.9
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 0.9
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 0.9
  body-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 0.9
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 0.9
spacing:
  elementGap: 10px
  sectionGap: 60px
components:
  ghost-navigation-link:
    role: Primary navigation and subtle header links.
  hover-link-background:
    role: Interactive link background.
  project-card:
    role: Visual container for featured work.
  project-tag:
    role: Categorical tags for project cards.
  contact-button:
    role: Call to action in the header.
---

## Overview

**North Star:** High-contrast minimalist canvas.

Mouthwash Studio employs a stark, monochromatic aesthetic, creating a high-contrast experience with unapologetic black text and elements against a crisp, near-white background. The design emphasizes content through bold typography and clear spatial separation, with minimal visual embellishments. Components are sharp-edged and lightweight, supporting a direct, unmediated presentation of work and information.

### Do's

- Prioritize Midnight Ink (#000000) for all primary text elements to ensure maximum impact and hierarchy.
- Maintain a clear visual hierarchy by limiting color usage to the provided neutral palette and using grayscale tones for secondary information.
- Use Suisse BP Intl 400 with its precise letter-spacing and compact line-heights consistently across all typographic elements.
- Apply a minimal 2px border-radius universally to any interactive or contained element that requires slight softening.
- Utilize a base spacing unit of 6px and derived tokens (e.g., 10px elementGap, 60px sectionGap) to control vertical and horizontal rhythm.
- Rely on transparent backgrounds and implicit spacing for cards and containers, avoiding explicit borders or shadows unless for an active state.
- Design with a compact density, allowing elements to sit closer together horizontally, especially in navigation and content lists.

### Don'ts

- Avoid using highly saturated or chromatic colors; the visual system is strictly monochromatic.
- Do not introduce heavy shadows or significant elevation; maintain a flat, content-forward aesthetic.
- Do not deviate from the defined letter-spacing values for Suisse BP Intl, as they are crucial to the brand's typographic signature.
- Avoid large, rounded corners; limit corner radii to the subtle 2px provided.
- Do not use generic system fonts; Suisse BP Intl is critical for brand recognition.
- Do not use large, expansive internal padding on cards or components; they should feel dense and content-focused.
- Do not use multiple text weights; the system relies on a single weight of Suisse BP Intl for all typography.

### Imagery

The imagery features lifestyle product photography and dynamic, candid shots of individuals, often interacting with products or instruments. The treatment is full-bleed within card containers with sharp edges, contributing to a modern, direct aesthetic. Photography ranges from high-key product crops on white/light backgrounds to darker, moodier compositions with controlled lighting, sometimes with a desaturated or subtly color-treated feel. The images primarily serve to showcase work and product, with a moderate density on the page, balanced by significant textual areas. Icons, when present, appear to be minimal, outlined, or monochromatic.

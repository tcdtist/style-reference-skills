---
version: alpha
name: Rubenwyttenbach
description: Rubenwyttenbach expresses a minimalist, high-contrast aesthetic where imagery reigns supreme. The design relies on expansive black canvases and crisp white typography, creating a gallery-like experience. Text is sparse, acting as precise labels or subtle navigation, while large initial letters hint at an editorial, artistic sensibility. Elements are subtly framed or bordered, emphasizing clean lines and negative space.
colors:
  canvas-black: "#0a0a0a"
  paper-white: "#ffffff"
  text-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 98px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 173px
    lineHeight: 1
spacing:
  elementGap: 6px
  sectionGap: 118px
components:
  framed-image-area:
    role: Visual content container with hover effect
  navigation-link:
    role: Main navigation and content links
  descriptive-text-label:
    role: Auxiliary and contextual text
  large-initial-letter-display:
    role: Decorative and navigational large-scale typography
  circular-focus-dot:
    role: Visual indicator for active states or markers
---

## Overview

**North Star:** Gallery canvas, framed silence

Rubenwyttenbach expresses a minimalist, high-contrast aesthetic where imagery reigns supreme. The design relies on expansive black canvases and crisp white typography, creating a gallery-like experience. Text is sparse, acting as precise labels or subtle navigation, while large initial letters hint at an editorial, artistic sensibility. Elements are subtly framed or bordered, emphasizing clean lines and negative space.

### Do's

- Use Canvas Black (#0a0a0a) for most page backgrounds and Text Black (#000000) only for small accent details like dots and icons.
- Set typography in Kern-Regular (or Arial as substitute) at weight 400 for all text, varying size and letter-spacing to establish hierarchy.
- Apply `Paper White` (#ffffff) for all main textual content to ensure strong contrast against the dark `Canvas Black` backgrounds.
- Employ a 1px border using `Canvas Black` or `Paper White` to create framing around interactive elements, images, or text on hover/active states.
- Establish horizontal rhythm using 118px `marginLeft` and `marginRight` for content blocks, providing significant negative space.
- Leverage large initial characters (98px or 173px) with negative letter-spacing for editorial or section headings, making them prominent visual elements.
- Maintain a compact element spacing of 6px for immediate proximity between related items, contrasting with larger section gaps.

### Don'ts

- Avoid using multiple font weights or families; the system relies on a single consistent font at one weight.
- Do not introduce highly chromatic colors; the palette is strictly achromatic, with black, white, and near-black dominating.
- Refrain from using strong shadows or gradients; the design aesthetic is flat, emphasizing clean lines and stark contrasts.
- Do not fill buttons with solid colors; interactive elements should primarily use outlined or ghost styles, often with 1px borders.
- Avoid decorative imagery that competes with primary content; graphics should be minimal icon-like objects (e.g., dots) or photography presented without heavy manipulation.
- Do not break the visual rhythm with inconsistent component padding; adhere to 11px general padding, sometimes extended at the bottom to 173px for specific elements.
- Do not use generic border-radii; adhere to the specific 2px for general elements and 50px for perfectly circular small elements.

### Layout

The page adheres to a full-bleed model, not confined by a `pageMaxWidth`. The hero section features large, artful initial letters (`R`, `W`) acting as both branding and navigation. Content is arranged with significant vertical `sectionGap` (118px) creating breathing room. A common pattern involves alternating blocks of content and imagery, with a strong vertical rhythm established by explicit spacing choices. Navigation is minimal, likely a top-bar or overlay, with sparse text links. Content sections appear to float on the dark canvas, sometimes subtly framed by borders when interactive.

### Imagery

This design system primarily uses photography presented with minimal framing. Images lack rounded corners or complex masking; they are presented as raw edges against the `Canvas Black` background. The treatment is focused on showcasing the photography itself, with a tendency towards tight crops or interior shots, rather than lifestyle imagery or abstract graphics. Icons are minimal, represented by small `Text Black` dots.

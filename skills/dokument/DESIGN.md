---
version: alpha
name: Dokument
description: Dokument presents a stark, minimalist aesthetic operating on a canvas of near-white. Typography is the primary visual driver, featuring precise letter-spacing and a carefully controlled hierarchy of an industrial, mono-like custom font and a refined sans-serif. The interface avoids complex UI elements, relying instead on ghosted or subtly-bordered components that provide functionality without visual weight. A single vivid blue serves as an accent, disrupting the monochrome with a sharp, digital punctuation for specific linked or action states, rather than broad splashes of color. The overall impression is one of restrained precision and quiet authority, where content takes absolute precedence.
colors:
  canvas: "#f6f6f4"
  ink-black: "#000000"
  slate-gray: "#383734"
  faded-stone: "#7a7874"
  digital-blue: "#2c7ef8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
    letterSpacing: 0.2px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.006px
spacing:
  buttonRadius: 4px
  elementGap: 8px
  sectionGap: 24px
components:
  avatar-button:
    role: Interactive action button with an avatar image, commonly used for user profiles or small interactive elements.
  work-archive-button:
    role: Primary ghost action button for navigation or important secondary actions.
  navigation-link:
    role: Subtle, functional text links primarily for navigation or supplementary information.
---

## Overview

**North Star:** Architectural blueprint on parchment

Dokument presents a stark, minimalist aesthetic operating on a canvas of near-white. Typography is the primary visual driver, featuring precise letter-spacing and a carefully controlled hierarchy of an industrial, mono-like custom font and a refined sans-serif. The interface avoids complex UI elements, relying instead on ghosted or subtly-bordered components that provide functionality without visual weight. A single vivid blue serves as an accent, disrupting the monochrome with a sharp, digital punctuation for specific linked or action states, rather than broad splashes of color. The overall impression is one of restrained precision and quiet authority, where content takes absolute precedence.

### Do's

- Prioritize Canvas (#f6f6f4) for all background surfaces to maintain the foundational lightness.
- Use Ink Black (#000000) for primary headlines and core content to establish strong contrast.
- Apply Söhne Mono Kräftig 12px with 0.2em letter-spacing for all tertiary links and utility text.
- Utilize 600px border-radius for avatars and small profile-like buttons, creating a circular or pill shape.
- Implement Digital Blue (#2c7ef8) exclusively as an accent for interactive states (hover/active on text links or ghost buttons), never as a solid background color for major elements.
- Maintain maximum vertical separation using 24px section gaps between major content blocks.
- Frame textual blocks (like the introductory text) with 16px of vertical padding to provide breathing room.

### Don'ts

- Avoid using saturated background colors; all surfaces should remain within the neutral palette.
- Do not use heavy shadows or gradients; the design system emphasizes flatness and minimal elevation.
- Refrain from using common rounded corner values (e.g. 8px or 12px) on buttons or cards; instead, use 4px or 600px for specific shapes.
- Do not introduce new typefaces; adhere strictly to Söhne Buch, Söhne Mono Kräftig, Söhne Kräftig, and a system sans-serif.
- Avoid large imagery; visual elements should be highly contained and functional.
- Do not use full-width banners or hero components that break the central content column's composition.
- Never treat the browser's default blue link color as a brand color; always use Digital Blue (#2c7ef8).

### Layout

The page adheres to a centered maximum-width layout, with content primarily confined to a central column, although no explicit max-width is provided in the data. The hero section is minimal, featuring centered textual content in the unique brand typography, rather than large visuals or complex arrangements. Sections are defined by consistent vertical spacing (24px) rather than distinct background color bands or dividers, creating a seamless flow. Content tends to be stacked vertically or in simple grid-like arrangements for functional elements like buttons. The navigation is minimal, appearing as a top-right cluster of ghost buttons. The footer is also minimal, using finely tracked monospaced text.

### Imagery

The site largely avoids traditional imagery. Instead, it features monochrome, functional icons with apparent stroke lines, leveraging a clean, graphical approach. There is one instance of small circular avatar images for person-specific buttons, which are tightly cropped and contained, serving as functional identifiers rather than decorative elements. The overall impression is text-dominant, with visual elements acting as subtle accents or clear functional indicators. Graphics are highly stylized, precise, and serve to support the minimalist UI rather than to add atmospheric or illustrative content.

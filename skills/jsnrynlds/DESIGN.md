---
version: alpha
name: Jsnrynlds
description: Jsnrynlds employs a sophisticated dark-mode aesthetic with a minimalist footprint. Content is presented on dark charcoal backgrounds with accents of off-white text and subtle cool-toned greens.  Components are lightweight, favoring ghost styles and thin borders over heavy fills, creating a sense of understated elegance. The overall impression is one of clarity and focused information delivery.
colors:
  deep-midnight: "#181818"
  cloud-whisper: "#eeeeee"
  steel-gaze: "#696969"
  pale-ash: "#898989"
  deep-sea-teal: "#225757"
spacing:
  cardRadius: 12px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 72px
components:
  ghost-button:
    role: Interactive elements for secondary actions.
  dark-surface-card:
    role: Container for content, particularly portfolio items.
  accent-surface-card:
    role: Highlighted content container or thematic grouping.
  main-heading:
    role: Primary labels for sections and key information.
  body-text:
    role: Standard textual content.
  muted-body-text:
    role: Secondary and less prominent textual content.
---

## Overview

**North Star:** architectural blueprint on dark slate

Jsnrynlds employs a sophisticated dark-mode aesthetic with a minimalist footprint. Content is presented on dark charcoal backgrounds with accents of off-white text and subtle cool-toned greens.  Components are lightweight, favoring ghost styles and thin borders over heavy fills, creating a sense of understated elegance. The overall impression is one of clarity and focused information delivery.

### Do's

- Prioritize Deep Midnight (#181818) for all primary background surfaces.
- Use Cloud Whisper (#eeeeee) exclusively for primary text and significant UI elements.
- Apply a 999px border-radius to all interactive buttons for a pill-like shape.
- Maintain a compact element spacing of 8px around most interactive and informational elements.
- Utilize 12px border-radius for all cards and container elements.
- Employ ghost button styling (transparent background, #eeeeee text, subtle top border) for all secondary actions.
- Use Suisse Intl Book and Suisse Intl consistently, adhering to specified weights and letter-spacing for each role.

### Don'ts

- Avoid using heavy shadows or strong elevation effects; surfaces should remain flat.
- Do not introduce bright, saturated colors unless for a very specific, isolated accent like Deep Sea Teal (#225757).
- Do not use generic system fonts; stick to Suisse Intl variants to maintain brand consistency.
- Avoid large, prominent filled buttons; prefer ghost or text-only interactive elements.
- Do not deviate from the established spacing scale for element and component gaps.
- Avoid applying padding directly inside cards; contained elements manage their own spacing.
- Do not use highly contrasting or vibrant brand colors in the core UI; keep the palette muted and dark-centric.

### Layout

The page uses a contained layout with a dark, full-bleed background for the main canvas. The hero section presents a two-column split with text on the left and a dense block of content cards on the right. Content sections generally follow a grid pattern, showcasing cards within a largely monochrome environment. Vertical rhythm is established through consistent 72px section gaps. Navigation is minimal, consisting of embedded links within the main content flow and a utility navigation in the footer. The layout feels compact yet breathable, making efficient use of space.

### Imagery

Imagery primarily consists of contained, often square or rectangular product shots and headshots, frequently presented in grayscale or with desaturated tones. There are also abstract, painterly textures used as background elements within cards. Images are typically isolated, without overlapping elements, and use a 12px border-radius on cards, and 8px for smaller interactive elements. The overall density is balanced, allowing imagery to break up text blocks without dominating the layout.

### Elevation

This design system intentionally avoids traditional drop shadows. Surfaces are distinguished by background color alone, providing a flat, modern aesthetic that emphasizes content over perceived depth.

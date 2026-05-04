---
version: alpha
name: Superr
description: Superr opts for a youthful, playful aesthetic, resembling a child's notebook brought to life. A warm, off-white canvas sets a friendly, approachable tone, punctuated by vibrant, primary-school-inspired colors for text highlights and playful borders. Typography leans into a handwritten, slightly uneven feel for headings, offset by a clean sans-serif for body copy. Components are light, favoring subtle shadows and rounded corners to maintain a soft, tactile presence, echoing the physical world of a notebook.
colors:
  canvas-parchment: "#fdfbf9"
  deep-graphite: "#171717"
  soft-black: "#2b1a07"
  jet-black: "#000000"
  warm-gray-shadow: "#bebcbb"
  cheeky-orange: "#ff6f1e"
  playful-red: "#ce500a"
  sky-blue: "#3b82f6"
  bubblegum-pink: "#ff66cf"
  grass-green: "#22c55e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 104px
    lineHeight: 1.08
    letterSpacing: 0px
spacing:
  cardRadius: 12px
  buttonRadius: 20px
  elementGap: 12px
  sectionGap: 64px
components:
  ghost-button:
    role: Interactive element, secondary action
  pill-ghost-button:
    role: Call to action, primary interaction
  elevated-card:
    role: Content container, feature display
  navigation-link:
    role: Primary navigation item
---

## Overview

**North Star:** Child's Animated Sketchbook. This system feels like looking into a favorite, well-loved school notebook where every element has personality.

Superr opts for a youthful, playful aesthetic, resembling a child's notebook brought to life. A warm, off-white canvas sets a friendly, approachable tone, punctuated by vibrant, primary-school-inspired colors for text highlights and playful borders. Typography leans into a handwritten, slightly uneven feel for headings, offset by a clean sans-serif for body copy. Components are light, favoring subtle shadows and rounded corners to maintain a soft, tactile presence, echoing the physical world of a notebook.

### Do's

- Use Canvas Parchment (#fdfbf9) as the dominant background color for all page sections and elevated surfaces.
- Apply the gelica font for all headings and prominent UI text (e.g., call to action buttons), embracing its playful, handwritten character.
- Employ rounded corners with a 12px radius for cards and containers, and a 20px radius for interactive elements like buttons.
- Introduce color selectively for emphasis, using Playful Red (#ce500a), Sky Blue (#3b82f6), Bubblegum Pink (#ff66cf), or Grass Green (#22c55e) for highlight text or decorative borders, never as primary backgrounds.
- Maintain comfortable spacing: 12px for small element gaps, 32px for card padding, and 64px for vertical section separation.
- Use a subtle soft shadow (rgba(0,0,0,0.06) 0px 2px 20px 0px) to give cards a gentle lift, avoiding heavy or stark elevation.
- For primary calls to action, use the Pill Ghost Button style with a Deep Graphite (#171717) stroke and text on the Canvas Parchment background.

### Don'ts

- Avoid using highly saturated brand colors as large background fills; they are intended for accents and highlights.
- Do not use sharp 0px corners on any UI elements; all corners should have some degree of rounding (minimum 2px).
- Refrain from heavy, multi-layered shadows; the design embraces a light, gentle elevation with a single, soft shadow.
- Do not use generic system fonts; always prioritize gelica for display and Geist for functional text.
- Avoid dense, information-heavy layouts; maintain ample white space and comfortable element spacing.
- Do not introduce strong, solid border colors unless they are part of a deliberate accent or interactive state (e.g. outline buttons).

### Layout

The page uses a full-bleed layout, allowing elements to span the entire viewport width, but content is often contained within an implicit central column, especially for text blocks. The hero section features a large, product illustration on the right, balanced by a significant headline and subtext on the left, creating an asymmetric but balanced composition. Sections follow a consistent vertical rhythm, often alternating between a main content block and a full-bleed decorative element (like the notebooks). Content is typically arranged in left-aligned stacks or two-column text-left/image-right patterns. There is no explicit grid for cards on the initial screen, but subsequent sections imply a flexible grid for features. Navigation is a minimal top-bar, sticky header design with a single interactive icon and a ghost button.

### Imagery

Imagery primarily features stylized 3D product renders of SuperrBook notebooks with playful, illustrated stickers. The product shots are often cropped tightly or presented from an angle, showcasing the physical object with a sense of tactility. Illustrations are flat, geometric, and brand-colored, often appearing as small, whimsical floating elements or in sticker form on the product. Icons are mostly outlined, with a moderate stroke weight, carrying the brand's cheerful persona. The overall role of imagery is to be decorative and atmospheric, highlighting the product in an imaginative, content-rich way without overwhelming the UI, maintaining a text-dominant density.

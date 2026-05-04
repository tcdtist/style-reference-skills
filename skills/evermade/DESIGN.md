---
version: alpha
name: Evermade
description: Evermade employs a confident, art-inspired visual language that merges stark elegance with playful, vivid accents. The primary palette is a dark, warm burgundy grounded by soft, humanistic neutrals, creating a refined backdrop. Typography features a strong contrast between classic serif display fonts and clean geometric sans-serifs, communicating authority and approachability. Components are lightweight with distinctive full rounded corners, emphasizing an open, modern aesthetic rather than heavy panels or complex shadows.
colors:
  white-canvas: "#ffffff"
  rich-burgundy: "#2d070b"
  vivid-pink: "#ff0389"
  blush-sand: "#fef0e6"
  pale-rose: "#ffdce2"
  ash-black: "#000000"
  hint-of-rose: "#ffc7de"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0.44px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.13px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.18px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
    letterSpacing: -0.22px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 1.1
    letterSpacing: -1.28px
spacing:
  elementGap: 4px
  sectionGap: 178px
components:
  outlined-button-primary:
    role: Primary Call to Action
  outlined-button-secondary:
    role: Secondary Call to Action, larger variant
  pill-tag:
    role: Categorization and filter tags
  content-card-default:
    role: Standalone content block
  content-card-with-soft-corners:
    role: Elevated content block for articles/insights
---

## Overview

**North Star:** Burgundy Canvas, Vivid Pink Accents

Evermade employs a confident, art-inspired visual language that merges stark elegance with playful, vivid accents. The primary palette is a dark, warm burgundy grounded by soft, humanistic neutrals, creating a refined backdrop. Typography features a strong contrast between classic serif display fonts and clean geometric sans-serifs, communicating authority and approachability. Components are lightweight with distinctive full rounded corners, emphasizing an open, modern aesthetic rather than heavy panels or complex shadows.

### Do's

- Use Rich Burgundy (#2d070b) as the primary text and section background for gravitas.
- Apply Vivid Pink (#ff0389) exclusively for interactive elements like links, buttons, and active states to guide user attention.
- Set display headlines with Instrument Serif (weight 400) at generous sizes like 48px or 128px for artistic impact with -0.010em letter spacing.
- Utilize Manrope (weight 400) for all body text at 18px with -0.010em letter spacing for clear, modern readability.
- Employ DM Mono at 11-14px for all captions, tags, and meta-information, using its distinct letter spacings (e.g., 0.040em at 11px) for a technical touch.
- Ensure all buttons and small interactive tags have a 9999px border-radius for a distinct pill-shaped appearance.
- Maintain a comfortable density with an element gap of 4px and a card padding of 12px to allow content to breathe.

### Don'ts

- Do not use Vivid Pink (#ff0389) as a background for large sections or containers; reserve it for small, functional accents.
- Avoid using drop shadows on cards; the system relies on background color shifts and borders for visual separation.
- Do not vary typography for non-hierarchical emphasis; rely on color accents or DM Mono for distinct information types.
- Do not introduce sharp corners (0px radius) for interactive elements; all buttons and tags must use 9999px radius.
- Do not stack multiple background colors directly adjacent without an intervening content block; use Blush Sand (#fef0e6) and Pale Rose (#ffdce2) for distinct section shifts.
- Avoid using too many font weights; stick to the defined weights for each font family (e.g., Manrope 400, Instrument Serif 400, DM Mono 300, 400, 500).

### Layout

The page structure employs a mixed full-bleed and contained pattern. Hero sections are typically full-bleed with large, dramatic imagery and centered, oversized typography. Subsequent content sections alternate background colors (White Canvas, Blush Sand, Rich Burgundy) with consistent vertical spacing akin to the sectionGap. Content is arranged in alternating text-left/image-right or centered stacks. Card grids are prominent for displaying articles and insights, suggesting a responsive, column-based layout. Navigation is minimal, likely a top-bar or slide-out, as the focus is on large, expressive content blocks.

### Imagery

Imagery primarily utilizes full-bleed, high-contrast photography or stylized product screenshots often with a desaturated or tinted overlay, creating a dramatic, art-directed atmosphere. These are frequently masked or partially obscured when in the background. Illustrations are minimal and typically flat, serving as decorative elements or supporting icons. Icons themselves are outlined, thin-stroke, and monochrome, often in Ash Black or Vivid Pink, maintaining a lightweight and precise feel. Imagery serves to establish mood and brand identity rather than detailed informational content, often featuring abstract compositions or product-in-use shots.

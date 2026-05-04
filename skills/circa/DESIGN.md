---
version: alpha
name: Circa
description: Circa employs a bold, dark minimalism softened by whimsical 3D illustrations. The interface is primarily achromatic, establishing a stark backdrop for content and interaction. Typography is understated yet precise, relying on subtle weight differences and careful letter-spacing for hierarchy. Components are lightweight, favoring ghost elements and soft, contained surfaces with subtle elevation for critical information.
colors:
  ink-black: "#000000"
  charcoal: "#171717"
  stone-gray: "#737373"
  frost-white: "#ffffff"
  silver-mist: "#e6e6e6"
  deep-graphite: "#111111"
  laurent-lime: "#AFFF2C"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
spacing:
  cardRadius: 12px
  buttonRadius: 4px
  elementGap: 12px
  sectionGap: 40px
components:
  ghost-button:
    role: Secondary actions, navigation links
  pill-accent-button:
    role: Small, informational labels or brand identifiers
  dialog-card:
    role: Modal dialogs, cookie settings, important notifications
  default-action-button:
    role: Primary calls to action within a dialog
  muted-action-button:
    role: Secondary actions within a dialog
---

## Overview

**North Star:** Minimal dark canvas, playful 3D forms

Circa employs a bold, dark minimalism softened by whimsical 3D illustrations. The interface is primarily achromatic, establishing a stark backdrop for content and interaction. Typography is understated yet precise, relying on subtle weight differences and careful letter-spacing for hierarchy. Components are lightweight, favoring ghost elements and soft, contained surfaces with subtle elevation for critical information.

### Do's

- Prioritize Ink Black (#000000) as the dominant page background.
- Use Frost White (#ffffff) for primary text and Charcoal (#171717) or Stone Gray (#737373) for muted text and secondary information.
- Apply Geist font with a 500 weight for all hero-level headings, ensuring -0.6px letter-spacing.
- Maintain a 4px border-radius for interactive buttons and 12px for cards.
- Elevate critical UI elements like dialogs with soft shadows and a 12px border-radius.
- Utilize 12px as the standard element gap for arranging content within sections.
- Incorporate the Laurent Lime (#AFFF2C) only as a distinct brand accent for highlighted active states or illustrations.

### Don'ts

- Avoid using saturated colors for backgrounds or large content blocks; reserve them strictly for accents.
- Do not introduce strong, hard shadows; elevation should be subtle and blended.
- Refrain from heavy borders on components; use hairline #e6e6e6 borders where necessary for separation instead of framing.
- Do not deviate from the specified Inter font for body text or button labels.
- Avoid decorative gradients on UI components — keep surfaces flat and monochromatic.
- Do not use varied letter-spacing on body text; keep it at 'normal' for readability.
- Do not use dark backgrounds for cards or dialogs; these remain Frost White (#ffffff) against the Ink Black (#000000) canvas.

### Layout

The page uses a full-bleed layout with content centered horizontally. The hero section features animated 3D illustrations as its focal point, with centered text overlays. Content is primarily stacked vertically, demonstrating a strong emphasis on comfortable vertical spacing. Navigation is minimal, indicated by a single 'Made with Circa' label at the bottom right. The overall impression is one of spaciousness, letting the central illustration command attention.

### Imagery

Abstract, playful 3D illustrations serve as the primary visual element, depicting whimsical characters and architectural structures. These are full-bleed against the dark background, providing decorative atmosphere and brand personality. Icons are minimal, either outlined or filled, with a consistent stroke weight, often in Charcoal or Frost White to blend with the UI. The density is image-heavy in the hero area, with illustrations acting as the main point of engagement, while other visuals are purely functional icons.

---
version: alpha
name: Coco
description: Coco employs a vibrant, playful aesthetic with a strong emphasis on card-based layouts and bold accent colors. The design system layers bright, saturated hues onto a clean, spacious light background, creating an energetic and approachable feel. Typography is assertive and compact, reinforcing a sense of efficiency, while generously rounded corners on components soften the overall impression.
colors:
  sky-blue: "#23c4f7"
  vivid-orchid: "#da4dfd"
  fresh-mint: "#00d797"
  canvas-white: "#ffffff"
  slate-gray: "#636363"
  ink-black: "#000000"
  medium-gray: "#808080"
  light-ash: "#aaadb0"
  ghost-gray: "#ebebeb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.17
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.28px
spacing:
  cardRadius: 24px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-action-button:
    role: Call to action
  secondary-ghost-button:
    role: Supporting action
  informational-card:
    role: Content container
  sky-blue-feature-card:
    role: Prominent feature display
  orchid-feature-card:
    role: Alternate feature display
  mint-feature-card:
    role: Alternate feature display
---

## Overview

**North Star:** Playful, energetic cards

Coco employs a vibrant, playful aesthetic with a strong emphasis on card-based layouts and bold accent colors. The design system layers bright, saturated hues onto a clean, spacious light background, creating an energetic and approachable feel. Typography is assertive and compact, reinforcing a sense of efficiency, while generously rounded corners on components soften the overall impression.

### Do's

- Prioritize Sky Blue (#23c4f7) for primary calls to action, maintaining its vividness against neutral backgrounds.
- Use 24px border-radius consistently for all card-like containers to reinforce the soft, approachable aesthetic.
- Employ GT America 700 (bold) for all main headings (32px, 64px) using Ink Black (#000000) or Canvas White (#ffffff) for strong contrast.
- Apply -0.0200em letter-spacing to display text (64px) and -0.0100em to subheading (24px) and heading (32px) text to ensure a compact, controlled typographic rhythm.
- Maintain generous 40px or 48px internal padding for cards to provide ample breathing room for content.
- Incorporate Vivid Orchid (#da4dfd) and Fresh Mint (#00d797) as accent backgrounds for cards to create visual variety and playful energy, ensuring text contrast remains legible.

### Don'ts

- Do not introduce new border-radius values; stick to 24px for cards, 100px for buttons, 32px for images, and 3px for links.
- Avoid using multiple font families; all text should be GT America or its substitute.
- Do not add drop shadows to cards; the design relies on bold background colors and flat surfaces for visual hierarchy.
- Do not use dark backgrounds for entire sections, except when explicitly required for accent or specific content blocks; the theme is predominantly light.
- Avoid small, subtle text for calls to action; ensure action text uses GT America 500 and high contrast colors like Canvas White (#ffffff) on Sky Blue (#23c4f7).

### Layout

The page model is content-constrained, with sections centered and significant horizontal margins, but the exact `pageMaxWidth` value is not provided. The hero section features a prominent, full-width section with a dark header (branding + navigation) and a large, centered headline followed by subtext, and a central app-like illustration. Subsequent sections alternate between white and colored card backgrounds (Sky Blue, Vivid Orchid, Fresh Mint), typically presenting information in two-column text + image or illustration layouts. Vertical spacing between sections is generous and consistent, creating a spacious feel. Navigation is a simple top bar with branding on the left and primary actions (buttons) on the right.

### Imagery

The site uses a mix of abstract, geometric illustrations with vibrant, saturated colors (Vivid Orchid, Fresh Mint, Sky Blue) and product screenshots featuring app interfaces. Illustrations are flat, bold, and organic, often combining large colored shapes. Photography is minimal, focusing on app or social media screenshots. Icons are solid, simple, and monochrome, usually in Ink Black. Imagery serves primarily as decorative atmosphere and explanatory content, occupying significant visual space in card-like containers without overflowing.

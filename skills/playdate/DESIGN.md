---
version: alpha
name: Playdate
description: This design system is a cheerful, high-contrast playground. It marries a distinctive vivid yellow with deep, grounded neutrals and a playful violet, creating an energetic yet sturdy aesthetic. The use of a single, custom typeface (Roobert) across all textual elements unifies the brand's voice, while varied weights and sizes carve out hierarchy. The system intentionally avoids complex shadows and layers, favoring bold color blocks and a crisp, almost physical, presentation.
colors:
  playdate-yellow: "#ffc500"
  crank-violet: "#7700ff"
  seafoam-teal: "#21c6a9"
  deep-teal: "#127866"
  charcoal-text: "#312f27"
  pure-white: "#ffffff"
  midnight-absolute: "#000000"
  default-gray: "#788086"
  paper-white: "#efefef"
  ink-wash: "#212223"
  parchment: "#e9e4d9"
  stone-gray: "#b1afa7"
  order-now-gradient: "#9400ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.3
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: -0.48px
spacing:
  cardRadius: 0px
  buttonRadius: 6px
  elementGap: 3-19px
  sectionGap: 68px
components:
  pill-cta-button-group:
    role: 
  game-season-info-card:
    role: 
  game-grid-preview:
    role: 
  pill-cta-button-violet-gradient:
    role: Primary call to action
  basic-button-white:
    role: Secondary action or general button
  wait-button-playdate-yellow:
    role: Informational or subtle action button
  input-field:
    role: User data entry
  feature-card-image-grid:
    role: Displays game titles or features in a grid
  small-feature-card-rounded-image-grid:
    role: Displays smaller game titles or features in a grid with subtle rounding
  navigation-link:
    role: Top navigation item
---

## Overview

**North Star:** Lemon Drop Arcade. Bright, blocky, and instantly recognizable, like a classic handheld console that makes a statement.

This design system is a cheerful, high-contrast playground. It marries a distinctive vivid yellow with deep, grounded neutrals and a playful violet, creating an energetic yet sturdy aesthetic. The use of a single, custom typeface (Roobert) across all textual elements unifies the brand's voice, while varied weights and sizes carve out hierarchy. The system intentionally avoids complex shadows and layers, favoring bold color blocks and a crisp, almost physical, presentation.

### Do's

- Prioritize `Roobert` font for all text elements; variations in weight and size, not font family, should create hierarchy.
- Use `Playdate Yellow` (#ffc500) for section backgrounds and major highlights to emphasize key content.
- Employ `Crank Violet` (#7700ff) or its gradient variant for primary call-to-action buttons to ensure high visibility and playful urgency.
- Maintain high contrast pairings like `Charcoal Text` (#312f27) on `Pure White` (#ffffff) or `Playdate Yellow` for optimal readability.
- Apply `152.19px` radius for primary CTA buttons to achieve the signature pill shape; use `6px` for general buttons and input fields.
- Utilize `3px` and `11px` as the core `elementGap` values for consistent vertical rhythm and spacing between small elements.
- In sections with neutral backgrounds, use `Charcoal Text` (#312f27) for headings and `Pure White` (#ffffff) for subtle highlights on interactive elements.

### Don'ts

- Avoid introducing additional font families; `Roobert` is the sole typographic voice.
- Refrain from using complex `box-shadow` effects; the design relies on direct color blocking and shape for visual depth.
- Do not deviate from the core color palette; unexpected hues will clash with the brand's vivid but defined identity.
- Do not use generic button shapes; prefer `152.19px` (pill) or `6px` radius for specific button types.
- Avoid overly tight vertical spacing; ensure a `68px` `sectionGap` between major content blocks to provide breathing room.
- Do not use `Midnight Absolute` (#000000) for body text; reserve it for outlines, shadows, or very bold statements, preferring `Charcoal Text` (#312f27) for readability.

### Layout

The site uses a primarily full-bleed layout alternating with sections contained within a maximum width. The hero section is full-width with a dramatic, centrally placed 3D product render. Subsequent sections alternate between full-bleed `Playdate Yellow` background blocks and sections with `Default Gray` or `Charcoal Text` backgrounds that often contain text and image elements. Content is generally centered within its allocated width, with clear vertical spacing between major sections. A prominent 3-column game grid showcases visual content, with each item clearly isolated. Navigation features a sticky top bar, while the footer is a more traditional multi-column link structure.

### Imagery

The site uses a mix of high-quality product photography (dominant), custom illustrations, and game screenshots. Product shots are typically clean, well-lit, and focus on the device itself against neutral or brand-colored backgrounds. The Playdate device is often rendered in 3D, showcasing its form and features, sometimes with a subtle shadow but no complex environment. Illustrations are stylized, often black-and-white or limited-palette, evoking a retro-console aesthetic for game previews. Game screenshots are presented as compact, self-contained units with a consistent border. The overall role is to showcase the product's unique design and the distinct visual style of its game library, rather than abstract concepts or lifestyle.

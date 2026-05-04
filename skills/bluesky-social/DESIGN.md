---
version: alpha
name: Bluesky Social
description: Bluesky Social presents as a polished, no-nonsense social platform with a quiet confidence. The dominant achromatic palette of crisp whites and deep blacks, accented by a singular, bright blue, conveys focus on content rather than interface flourish. Consistent tight spacing and subtle border treatments maintain a sense of order while allowing user-generated content to take center stage.
colors:
  canvas-white: "#ffffff"
  ebony-text: "#000000"
  sky-blue: "#006aff"
  horizon-gray: "#dce2ea"
  cloud-cover: "#f9fafb"
  ghost-button-background: "#eff2f6"
  slate-text: "#405168"
  steel-icon: "#667b99"
  icon-gray: "#8798b0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.25
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
spacing:
  cardRadius: 12px
  buttonRadius: 999px
  elementGap: 4px
  sectionGap: 24px
components:
  post-card:
    role: 
  trending-sidebar-card:
    role: 
  auth-panel-with-tab-bar:
    role: 
  primary-navigation-button:
    role: Primary Call to Action
  secondary-navigation-button:
    role: Secondary Action
  interactive-icon-button:
    role: Icon-only interaction
  reply-like-count-button:
    role: Text and Icon interaction
  search-input:
    role: Site-wide search
  post-card:
    role: Individual content unit
  trending-card:
    role: Sidebar information display
  avatar-display:
    role: User identification
  hash-tag-link:
    role: Categorization and navigation
---

## Overview

**North Star:** Crisp white canvas, quiet blue accent. The layout feels like a well-organized corkboard of fleeting thoughts and visual snippets, neatly pinned and easily digestible.

Bluesky Social presents as a polished, no-nonsense social platform with a quiet confidence. The dominant achromatic palette of crisp whites and deep blacks, accented by a singular, bright blue, conveys focus on content rather than interface flourish. Consistent tight spacing and subtle border treatments maintain a sense of order while allowing user-generated content to take center stage.

### Do's

- Prioritize `Ebony Text` (#000000) on `Canvas White` (#ffffff) or `Cloud Cover` (#f9fafb) for all primary text content to ensure maximum readability.
- Use `Sky Blue` (#006aff) exclusively for interactive elements like links, buttons, and active states to provide clear affordances and maintain brand identity.
- Apply `999px` border-radius to all primary and secondary buttons, as well as avatar images, to create a consistent soft, approachable aesthetic.
- Maintain a clear visual hierarchy using `Slate Text` (#405168) or `Steel Icon` (#667b99) for secondary information, metadata, and non-actionable icons.
- Utilize `Horizon Gray` (#dce2ea) for subtle dividers and borders to separate content sections without introducing heavy visual elements, supporting the light aesthetic.
- Employ the `InterVariable` typeface consistently across all text elements, leveraging its weights (400, 500, 600, 700) to establish type hierarchy and emphasis.

### Don'ts

- Do not introduce additional vibrant colors; rely solely on `Sky Blue` (#006aff) as the primary accent color.
- Avoid hard-edged rectangular containers for interactive elements; favour the `999px` pill shape for buttons and avatars.
- Do not use shadows for elevation or depth; rely on background color changes (e.g., `Canvas White` on `Cloud Cover`) and explicit borders (`Horizon Gray`) for differentiation.
- Avoid excessive padding around embedded interactive elements like reply/like counts; use a minimal `4px` element gap for a compact interface.
- Do not use custom fonts other than `InterVariable`; this maintains the consistent, modern typographic voice.
- Never use dark backgrounds for main content areas; maintain the light theme with `Canvas White` (#ffffff) as the dominant background color.

### Imagery

Imagery predominantly consists of user-generated content: photography and digital art, which are displayed as unmasked, raw-edged squares or rectangles within post cards. There's no consistent 'brand' photography or illustration style imposed on user content. Icons are outline-style, `Steel Icon` (#667b99) by default, and `Ebony Text` (#000000) or `Sky Blue` (#006aff) for active states. These icons are functional, minimal, and visually consistent, serving purely interface purposes rather than decorative ones. The overall impression is image-heavy due to user posts, but the platform's own UI is image-minimal.

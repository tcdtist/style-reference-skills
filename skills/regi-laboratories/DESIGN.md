---
version: alpha
name: REGI Laboratories
description: The REGI Laboratories design system employs a refined, almost minimalist aesthetic with a dominant white canvas subtly tinted by a soft, ethereal gradient. Typography takes center stage, featuring a classic serif for headlines that conveys heritage and authority, contrasted with a modern sans-serif for body text. Interaction elements are ghost-like and understated, relying on subtle borders and text color changes rather than bold fills, maintaining an open and airy feel. Whitespace is generous, allowing content to breathe and emphasizing the delicate visual balance.
colors:
  canvas-white: "#ffffff"
  surface-frost: "#f5f7f8"
  ink-black: "#000000"
  graphite-text: "#0f0f0f"
  muted-grey: "#454545"
  sky-haze-gradient: "#4571ea"
  swiper-blue: "#007aff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.97
spacing:
  cardRadius: 50%
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 76px
components:
  ghost-button:
    role: Primary action, navigation items
  circular-card:
    role: Decorative or illustrative containers
  navigation-link:
    role: Header and footer navigation
  main-heading:
    role: Hero section titles, major content blocks
---

## Overview

**North Star:** Ethereal canvas with typographic whisper

The REGI Laboratories design system employs a refined, almost minimalist aesthetic with a dominant white canvas subtly tinted by a soft, ethereal gradient. Typography takes center stage, featuring a classic serif for headlines that conveys heritage and authority, contrasted with a modern sans-serif for body text. Interaction elements are ghost-like and understated, relying on subtle borders and text color changes rather than bold fills, maintaining an open and airy feel. Whitespace is generous, allowing content to breathe and emphasizing the delicate visual balance.

### Do's

- Use PP Woodland for all headings and large display text, ensuring line-height is 0.97 for sizes above 30px.
- Prioritize Ink Black (#000000) for primary text and borders, with Graphite Text (#0f0f0f) for links and Muted Grey (#454545) for secondary text.
- Implement lightweight, ghost-style buttons with Muted Grey (#454545) text and Ink Black (#000000) bottom borders for interactive elements.
- Maintain a clear separation between the Canvas White (#ffffff) background and Surface Frost (#f5f7f8) for card elements.
- Apply a 50% border radius to any background boxes that function as cards or decorative elements.
- Emphasize whitespace, using 'elementGap' of 16px and 'sectionGap' of 76px to create natural breaks and visual breathing room.
- Integrate the 'Sky Haze Gradient' as a subtle, background atmospheric effect rather than a prominent UI component.

### Don'ts

- Avoid solid background colors for interactive elements, favoring ghost buttons with borders as the primary action style.
- Do not introduce strong, saturated colors for backgrounds or large sections; maintain the achromatic base palette.
- Refrain from using prominent box-shadows or heavy elevation effects; surfaces should remain flat or with minimal visual depth.
- Do not deviate from the PP Woodland and Roboto font families; avoid system defaults or other decorative fonts.
- Avoid large contiguous blocks of text without sufficient line-height (1.5 for Roboto) or padding.
- Do not use generic square corners for cards or prominent containers; rely on the subtle radius for cards and zero radius for buttons.
- Never use the Swiper Blue (#007aff) directly in UI elements unless it's an underlying framework component.

### Layout

The page maintains a centered, maximal-width layout, with content contained within a comfortable reading measure that is not explicitly fixed but appears consistently aligned. The hero section makes use of the full viewport, featuring large centered headlines against the ephemeral radial gradient background. Section rhythm is open and spacious, with implied vertical sections rather than overt dividers. Content arrangement is primarily centered or implicitly balanced through typography and sparse elements, suggesting a focus on showcasing text-based information. Navigation consists of a minimal top bar with ghost-like links and a hamburger menu icon. The footer is also minimal, containing legal links and 'coming soon' placeholders.

### Imagery

This design system favors an imagery-light approach, with the focus remaining on typography and subtle background gradients. Any graphical elements are primarily functional icons or abstract, decorative arrows, maintaining a clean and uncluttered presentation. Where imagery would typically appear, it is either absent or implied through abstract visual textures, allowing the information and brand voice to lead. Icons appear as minimal outlines, rendered in Ink Black.

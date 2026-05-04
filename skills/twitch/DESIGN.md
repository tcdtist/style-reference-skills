---
version: alpha
name: Twitch
description: Twitch presents a vibrant, high-energy streaming platform built on a light canvas. Its visual identity balances functional clarity with dynamic accents. The dominant bright purple, used for primary CTAs and key highlights, injects brand personality into an otherwise neutral interface. A subtle use of layered grays and crisp typography ensures content remains the focal point, while bold status indicators ('LIVE' badge) cut through the visual noise.
colors:
  cloud-canvas: "#efeff1"
  ghost-white: "#ffffff"
  nightfall-text: "#0e0e10"
  slate-echo: "#3b3b44"
  ash-gray: "#636363"
  iron-border: "#dddde2"
  airtight-black: "#000000"
  twitch-purple: "#5c16c5"
  deep-twitch-purple: "#330c6"
  rich-twitch-purple: "#451093"
  call-to-action-purple: "#9147ff"
  live-red: "#eb0400"
  highlight-pink: "#ff75e6"
  stream-yellow: "#ffd000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
spacing:
  cardRadius: 4px
  buttonRadius: 9000px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-navigation-link:
    role: Interactive element
  pill-button-text-only:
    role: Secondary action button
  pill-button-ghost-white-text:
    role: Prominent action button on dark backgrounds
  pill-button-muted-background:
    role: Subtle action button
  video-preview-card:
    role: Content display
  video-player-card:
    role: Interactive content display
  video-overlay-label:
    role: Informative overlay
  channel-avatar-circular:
    role: User identification
  live-indicator-badge:
    role: Status indicator
  search-input-field:
    role: User input
  promotional-footer-banner:
    role: Marketing banner
---

## Overview

**North Star:** Gaming stage in neon light - white-grey backdrop bathed in purple glow, with urgent red accents.

Twitch presents a vibrant, high-energy streaming platform built on a light canvas. Its visual identity balances functional clarity with dynamic accents. The dominant bright purple, used for primary CTAs and key highlights, injects brand personality into an otherwise neutral interface. A subtle use of layered grays and crisp typography ensures content remains the focal point, while bold status indicators ('LIVE' badge) cut through the visual noise.

### Do's

- Use Nightfall Text (#0e0e10) for all primary text elements on Cloud Canvas (#efeff1) or Ghost White (#ffffff) backgrounds.
- Apply Twitch Purple (#5c16c5) or Call-to-Action Purple (#9147ff) exclusively to primary interactive elements, active states, and brand signifiers.
- Employ the 9000px border-radius for all interactive buttons, user avatars, and categorical tags to create a consistent soft, approachable feel.
- Use a Live Red (#eb0400) background combined with Ghost White (#ffffff) text for any 'LIVE' status indicators to ensure immediate visual recognition.
- Maintain a default elementGap of 8px (or multiples thereof like 16px) for consistent vertical and horizontal spacing between discrete UI elements.
- Utilize Roobert font with -0.01em letter-spacing for prominent headings and key links to leverage its distinct, compact character.
- Structure information using a subtle Ghost White (#ffffff) background for primary content cards and Cloud Canvas (#efeff1) for general page areas to create clear visual separation.

### Don'ts

- Do not use highly saturated colors for large background areas or extensive text blocks, except for designated brand banners.
- Avoid using drop shadows on most UI elements; instead, rely on variations in background color for surface differentiation.
- Do not introduce additional font families or weights beyond Inter (400, 600) and Roobert (400, 500, 600) to maintain typographic consistency.
- Never apply a border-radius of less than 4px, except for the 2px on specific video overlay labels, as most UI elements use 4px or 9000px.
- Do not use red or other semantic colors for primary CTA buttons, as this is exclusively reserved for the Live Red status indicator.
- Avoid large, impactful hero sections that dominate the viewport; prioritize content visibility through dense, card-based layouts.
- Do not use dark backgrounds for the main canvas; the design system operates predominantly on a light theme with specific dark content sections.

### Layout

The page uses a maximum content width for its central content, flanked by a fixed-width left sidebar (`Live Channels`) and dynamic main content. The hero section is characterized by a central, elevated video player with supporting contextual information, visually stacked on top of other content. Main content sections ('Live on Twitch') are arranged in a multi-column grid of video cards. Vertical rhythm is established by consistent section gaps. Navigation is a persistent top bar and a fixed sidebar. The overall layout is dense with information, prioritizing content display through a clear grid structure and minimal whitespace between content blocks.

### Imagery

The site primarily uses product screenshots (video thumbnails) and user avatars. Video thumbnails are presented as raw, unmasked rectangles, often with semi-transparent overlays for 'LIVE' indicators or viewer counts. User avatars are uniformly circular. There's minimal decorative imagery beyond these content-driven visuals. Icons are outlined, monochromatic, and typically a single weight, using Nightfall Text (#0e0e10) unless interactive, where they adopt Twitch Purple (#5c16c5). The density is image-heavy due to video content being central, but the imagery serves an explanatory and content-showcasing role rather than purely decorative.

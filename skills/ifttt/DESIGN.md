---
version: alpha
name: IFTTT
description: IFTTT's design system is a high-contrast, functionally colorful environment where dark surfaces meet crisp white text and vivid branded modules. The aesthetic emphasizes a clear, almost utilitarian presentation of information and service connections. Visual hierarchy is achieved through a mix of typography and distinct color blocks rather than extensive use of elevation or soft gradients. Components are well-defined, often with generous padding and prominent rounded corners, facilitating clear interaction in a dense ecosystem.
colors:
  midnight-ink: "#222222"
  canvas-white: "#ffffff"
  deep-graphite: "#333333"
  muted-ash: "#666666"
  light-ghost: "#eeeeee"
  ocean-blue: "#0099ff"
  vivid-green: "#2cbe60"
  electric-violet: "#2c6efc"
  royal-blue: "#23448b"
  fire-red: "#e44332"
  forest-green: "#1d9a59"
  warm-orange: "#ec7505"
  pure-red: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.18
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
spacing:
  cardRadius: 8px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 24px
components:
  primary-pillar-button:
    role: Main call to action button for high-impact interactions.
  ghost-pillar-button:
    role: Alternative call to action, offering similar prominence to the Primary Pillar Button but with inverted colors for secondary intent.
  category-filter-button:
    role: Small, contained button for filtering content or selecting categories.
  standard-input-field:
    role: Interactive text input for search or data entry.
  full-color-applet-card:
    role: Prominent display block for showcasing automated 'Applets' with distinct brand colors.
  grey-background-applet-card:
    role: An Applet card with a neutral background for less emphasis or general categories.
  monochrome-service-card:
    role: Small squares representing integrated services, often in a grid.
  compact-info-badge:
    role: Small informational tag that appears on cards.
---

## Overview

**North Star:** Midnight Grid Command Center

IFTTT's design system is a high-contrast, functionally colorful environment where dark surfaces meet crisp white text and vivid branded modules. The aesthetic emphasizes a clear, almost utilitarian presentation of information and service connections. Visual hierarchy is achieved through a mix of typography and distinct color blocks rather than extensive use of elevation or soft gradients. Components are well-defined, often with generous padding and prominent rounded corners, facilitating clear interaction in a dense ecosystem.

### Do's

- Prioritize high contrast between text and background, typically #ffffff on #222222 or #333333, and vice-versa, for all primary content.
- Use Avenir Next across all text, carefully selecting from its weights to establish hierarchy and tone, with consistent '0.0200em' letter-spacing.
- Apply 100px border-radius for primary action buttons to achieve a distinct 'pill' shape, indicating interactive elements.
- Utilize the diverse palette of saturated brand colors (#0099ff, #2cbe60, #2c6efc, etc.) as solid background fills for service cards and functional blocks, promoting immediate recognition.
- Maintain an 8px border-radius for all cards, input fields, and category filter buttons to ensure a consistent, approachable geometry for non-primary interactive elements.
- Employ a base unit of 8px for all spacing decisions, including padding, margins, and gaps, for harmonious scaling and alignment.
- Emphasize the dark theme by setting section backgrounds to Midnight Ink (#222222) or Deep Graphite (#333333), using Canvas White (#ffffff) for foreground elements and text.

### Don'ts

- Avoid using soft shadows or subtle gradients for elevation; rely instead on solid color blocks and sharp contrast for visual layering.
- Do not deviate from Avenir Next as the primary typeface; introducing other fonts will break the established typographic rhythm.
- Refrain from using achromatic colors for brand accents; all visual branding should leverage the vibrant, saturated palette.
- Do not introduce complex border styles; all borders should be simple solid lines, usually in neutral tones like rgba(255, 255, 255, 0.3) or #eeeeee.
- Avoid excessive whitespace; the design system leans towards a comfortable density, ensuring elements are clearly delineated but not overly spaced.
- Do not use subtle tonal variations for states (e.g., hover, active); instead, use distinct color shifts or outline changes from the defined color palette.
- Avoid blurring or masking imagery; visuals should typically be presented within clear, defined card or section boundaries.

### Layout

The typical page structure is a hybrid: a full-width dark hero section at the top, centered text-heavy headlines, and a prominent 'pill' action button. Following the hero, content often transitions to a mixed layout, using a max-width container. Sections alternate between dark (Midnight Ink or Deep Graphite) and light (Canvas White) backgrounds, creating a clear vertical rhythm. Content is frequently arranged in card grids (e.g., 2-column or 4-column) for features and services, or simple centered stacks for informational blocks. Navigation is a sticky top bar, containing a prominent logo, search input, and right-aligned text links leading to a ghost 'Get started' button.

### Imagery

The imagery predominantly features app icons and service logos, often rendered against solid, vibrant brand-colored backgrounds or contained within monochrome cards. Product screenshots are rare, with a focus on abstract visual representations of connections or functional icons. When present, images are contained within defined boundaries (cards/sections), not full-bleed or overlapping. Iconography is clean, solid-filled, and uses the full color palette or high-contrast monochromatics, serving both decorative and explanatory roles. The system is text-dominant, with imagery acting as clear, concise visual cues rather than elaborate showcases.

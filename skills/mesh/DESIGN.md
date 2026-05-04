---
version: alpha
name: Mesh
description: Mesh invokes a dark, intimate digital rolodex feel, where muted neutrals create a command center for relationships. The visual system combines compact, precise typography with subtle background textures and a warm, low-saturation amber accent. Components recede into the dark canvas, using fine borders and soft internal glows rather than heavy shadows or distinct background fills. The overall impression is one of restrained sophistication and digital calm.
colors:
  deep-night: "#0f0f10"
  graphite: "#1d1d1f"
  moonless-ink: "#000000"
  silver-whisper: "#b3b3b3"
  ash-gray: "#666666"
  cloud-white: "#fefef7"
  warm-mist: "#868f97"
  pale-stone: "#86868b"
  amber-glow: "#f2b98b"
  sunset-blush: "#ffaf7c"
  golden-horizon: "#d49065"
typography:
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: 0.14px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
    letterSpacing: 0.14px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.55
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: 0.67px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: 0.89px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 10px
  sectionGap: 24px
components:
  ghost-navigation-button:
    role: Header navigation and secondary actions
  outline-action-button:
    role: Primary calls to action with an understated, interactive glow.
  floating-card:
    role: Content groupings that gently rise above the dark background.
  subtle-badge:
    role: Informational tags or status indicators within content.
  elevated-badge:
    role: Highlighted tags or active filters
---

## Overview

**North Star:** Midnight archive behind frosted glass

Mesh invokes a dark, intimate digital rolodex feel, where muted neutrals create a command center for relationships. The visual system combines compact, precise typography with subtle background textures and a warm, low-saturation amber accent. Components recede into the dark canvas, using fine borders and soft internal glows rather than heavy shadows or distinct background fills. The overall impression is one of restrained sophistication and digital calm.

### Do's

- Prioritize 'Deep Night' (#0f0f10) as the base background for most sections to maintain a consistent dark atmosphere.
- Use 'Silver Whisper' (#b3b3b3) for general body text and 'Cloud White' (#fefef7) for high-impact headings and active states, ensuring clear hierarchy in dark UI.
- Employ the Verlag font family for all primary text content to leverage its compact character and precise spacing.
- When an action requires emphasis, use an outlined button with 'Amber Glow' (#f2b98b) as the border color, ensuring interactive elements have a distinct, warm highlight.
- Maintain a compact information density using `elementGap` of '10px' and `cardPadding` of '24px' to organize content tightly but legibly.
- Apply `border-radius` values from the system: '16px' for cards and '6px' for buttons, to ensure consistent surface treatment.
- Utilize `Ghost Navigation Button` for all header navigation items to minimize visual distraction and keep the focus on content.

### Don'ts

- Avoid using bright, saturated colors for large UI areas; color should primarily act as functional highlights or subtle accents, not dominant backgrounds.
- Do not introduce strong, heavy shadows or distinct background fills beyond those specified for Floating Cards; maintain a lightweight, ethereal surface treatment.
- Do not deviate from the specified Verlag and VerlagCondensed font families for headings and body text; system fonts should be reserved for specific utilitarian contexts.
- Do not use generic circular or square radii; adhere to the system's `border-radius` values of '16px' for cards, '6px' for buttons, and '12px' for badges.
- Do not use opaque white as a primary background; the system relies on deep neutrals and subtle transparencies for its dark theme.
- Avoid excessive use of 'Moonless Ink' (#000000) for body text; reserve it for high-contrast elements or specific icon fills.
- Do not introduce new type scales or line-heights; adhere to the discrete values provided to maintain typographic rhythm and density.

### Layout

The page layout is primarily full-bleed, extending content and atmospheric backgrounds across the viewport. The hero section is characterized by a centered headline on a deep, dark background, often subtly animated with abstract light. Content sections then shift to a mixed model: central content is constrained within a maximum width, while background elements may remain full-bleed. Vertical rhythm is established through consistent section gaps, creating distinct content blocks. Navigation is a minimalist top bar, with ghost links or an outlined button for primary actions against the dark canvas.

### Imagery

This system primarily uses abstract, atmospheric visuals with sparkling light effects and subtle linear patterns that evoke digital networks or constellations. Photography or detailed illustrations are absent. Icons are minimal, outlined, or filled in a mono-color style, often using 'Amber Glow' for emphasis. The imagery serves a decorative, mood-setting role rather than explanatory content, creating a sense of digital mystique and depth. Density is text-dominant, with imagery relegated to background elements.

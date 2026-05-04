---
version: alpha
name: ToDesktop
description: ToDesktop employs a 'digital engineering lab' aesthetic, characterized by a dominant dark, cool blue background contrasting with crisp white and light gray interfaces. Subtle internal shadows create a sense of depth on surfaces, while a vivid Electric Blue serves as the primary accent for interactive elements and brand highlights. Typography is precise and utilitarian, fostering a high-tech, functional atmosphere. The design balances a serious, technical tone with moments of vibrant clarity.
colors:
  midnight-void: "#05061b"
  canvas-white: "#ffffff"
  silver-mist: "#e5e7eb"
  ink-black: "#000000"
  graphite: "#141414"
  cloud-gray: "#656565"
  faded-white: "#e6fff7"
  light-steel: "#c2c2c9"
  polar-mist: "#d6d6db"
  electric-blue: "#0036ff"
  sky-blue: "#0093ff"
  ash-code: "#384642"
  clean-white-gradient: "#f7f7f7"
  deep-blue-gradient: "#0f071d"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.04px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.78
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.22
    letterSpacing: -0.54px
  display:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1.08
    letterSpacing: -1.11px
spacing:
  cardRadius: 24px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 64px
components:
  primary-action-button:
    role: Filled button indicating primary calls to action.
  ghost-button:
    role: Secondary action button, visually lighter.
  pill-outline-button:
    role: Outlined button with a distinct pill shape.
  navigation-link-button:
    role: Small, subtly interactive navigation button.
  hero-card-dark-elevated:
    role: Prominent card for key product features, elevated in background.
  feature-card-white-frosted:
    role: Card for light-themed features, with a frosted glass effect.
  info-badge-sky-blue-text:
    role: Small informational tag with blue text.
  ghost-badge-dark-background:
    role: Subtle badge for categorization or status in dark areas.
---

## Overview

**North Star:** Digital engineering lab

ToDesktop employs a 'digital engineering lab' aesthetic, characterized by a dominant dark, cool blue background contrasting with crisp white and light gray interfaces. Subtle internal shadows create a sense of depth on surfaces, while a vivid Electric Blue serves as the primary accent for interactive elements and brand highlights. Typography is precise and utilitarian, fostering a high-tech, functional atmosphere. The design balances a serious, technical tone with moments of vibrant clarity.

### Do's

- Prioritize Electric Blue (#0036ff) exclusively for primary calls-to-action and essential interactive states.
- Use a 999px border-radius for all primary buttons and badges to achieve a distinctly rounded, 'pill' aesthetic.
- Apply the Midnight Void (#05061b) for hero sections and dark mode cards to ground the interface in deep, cool tones.
- Employ Aeonik Pro with font-feature-settings 'ss02', 'ss05', 'ss10', 'ss11' for all main headlines to maintain its unique character.
- Ensure all body text and UI elements consistently use the Inter typeface with appropriate weight and size from the defined scale.
- Use Silver Mist (#e5e7eb) for all hairline borders and subtle dividers, maintaining visual separation without heavy lines.
- Whenever displaying code or terminal-like content, use Geist Mono with 0.03em letter-spacing at smaller sizes for legibility.

### Don'ts

- Do not introduce new saturated colors; adhere strictly to Electric Blue and Sky Blue for chromatic accents.
- Avoid using harsh, opaque black shadows; prefer soft, multi-layered, often slightly tinted shadows from the defined list.
- Do not deviate from the specified border radii; mixing different radius styles will undermine component consistency.
- Never use primary text colors (#000000, #141414) on pure white (#ffffff) backgrounds in code or terminal UI components.
- Do not apply bold or black backgrounds to ghost buttons; they are defined by a transparent background with a neutral border.
- Avoid generic system fonts; always map text to Inter, Aeonik Pro, or Geist Mono as appropriate.
- Do not use white as a dominant background color in the hero section; it's reserved for light-themed feature sections.

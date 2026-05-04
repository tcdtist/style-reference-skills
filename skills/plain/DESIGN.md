---
version: alpha
name: Plain
description: Plain's design system evokes a digital workbench aesthetic: a clean white canvas overlaid with distinct, slightly textured surfaces. The typography is precise and functional, favoring mono-spaced and geometric sans-serifs. A single vibrant green serves as the primary accent, activating interactive elements and key information against an otherwise subdued, near-monochromatic palette. Components are lightweight with subtle shadow work, emphasizing information over heavy ornamentation.
colors:
  canvas-white: "#ffffff"
  ghost-fog: "#f3fbe9"
  vanilla-cream: "#f9f6f1"
  ash-graphite: "#0a2414"
  deep-forest: "#283a2e"
  sage-green: "#607166"
  system-black: "#000000"
  plain-green: "#1ad379"
  plain-green-muted: "#17b267"
  alert-red: "#360003"
  warm-pink: "#ffbac3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.17
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.04
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.95
    letterSpacing: -1.6px
spacing:
  cardRadius: 9px
  buttonRadius: 6px
  elementGap: 24px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call-to-action
  outlined-accent-button:
    role: Secondary action button
  light-content-card:
    role: Neutral information container
  dark-themed-card:
    role: Emphasized or themed content container
  alert-card:
    role: Indicator for critical or urgent information
  text-link-active:
    role: Interactive text link
  ghost-navigation-button:
    role: Top navigation item
---

## Overview

**North Star:** Crisp digital workbench

Plain's design system evokes a digital workbench aesthetic: a clean white canvas overlaid with distinct, slightly textured surfaces. The typography is precise and functional, favoring mono-spaced and geometric sans-serifs. A single vibrant green serves as the primary accent, activating interactive elements and key information against an otherwise subdued, near-monochromatic palette. Components are lightweight with subtle shadow work, emphasizing information over heavy ornamentation.

### Do's

- Use ABC Favorit for all primary text content. Opt for weight 400 for body and 500 for headlines to establish clear hierarchy.
- Apply Plain Green (#1ad379) strictly for primary calls to action, active states, and small, functional brand accents.
- Maintain a clear visual hierarchy using the surface progression: Canvas White (#ffffff) as base, Ghost Fog (#f3fbe9) for secondary blocks, and Vanilla Cream (#f9f6f1) for cards.
- Ensure all buttons and interactive elements utilize a 6px border-radius for a consistent, subtle rounding.
- Implement 24px as the standard element gap for moderate spacing between distinct UI components.
- Use Geist Mono (#13px, weight 500) for all code snippets, timestamps, and interface labels requiring a technical, structured feel, applying specialized font features 'ss02' and 'ss06'.
- Employ System Black (#000000) for hard lines and borders to create sharp, deliberate divisions and structure without relying on heavy shadows.

### Don'ts

- Do not introduce new saturated accent colors outside of Plain Green; rely on the established brand green for all chromatic interactions.
- Avoid heavy box-shadows or complex elevation styles; prefer clean, flat surfaces or subtle background color changes for depth.
- Do not use generic system fonts for prominent headings or body copy; ABC Favorit and Geist Mono are essential to the brand's typographic identity.
- Do not deviate from the specified border-radii of 6px for interactive elements and 9px for cards; inconsistent rounding undermines the visual precision.
- Do not use color for purely decorative purposes, apply it functionally to highlight interactions, status, or brand identity.
- Avoid wide, full-bleed content sections; maintain a comfortable maximum content width and centered layout for readability.
- Do not overuse bold weights in text; the system relies on subtle weight shifts and specific font choices to convey hierarchy and distinction.

### Layout

The page operates on a contained width model with no explicit maximum width detected, suggesting a fluid-responsive approach that favors readability within a comfortable range. The hero section prominently features a centered headline over a white background, immediately followed by the main call-to-action buttons. Content sections typically flow with consistent vertical spacing (defaulting to 40px), alternating between text-heavy blocks and product screenshots often presented as centered elements or within cards. Navigation is a sticky top bar with ghost buttons and distinct accent buttons for calls to action.

### Imagery

The site predominantly uses product screenshots and abstract, data-driven visualizations to explain concepts. Photography is minimal, appearing as contained, often masked elements that avoid full-bleed or overlapping treatments. Icons are outlined, lightweight, and mono-color, typically using Ash Graphite or Plain Green, serving as functional indicators rather than decorative elements. The overall density of imagery is balanced, visually supporting text-dominant sections without overwhelming them.

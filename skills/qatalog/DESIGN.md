---
version: alpha
name: Qatalog
description: ClickUp's design system, as seen on the Qatalog acquisition page, emphasizes a bold yet understated aesthetic. High-contrast typography in deep, near-black neutrals anchors the content on a pristine white canvas. A single vivid violet serves as a functional accent, drawing the eye to interactive elements and brand highlights. The visual language balances sharp, confident headlines with approachable body text, creating a system that feels modern and efficient without visual clutter.
colors:
  canvas-white: "#ffffff"
  graphite-black: "#000000"
  ink-black: "#202020"
  slate-gray: "#292d34"
  subtle-gray: "#646464"
  ash-gray: "#838383"
  whisper-white: "#f0f0f0"
  cloud-gray: "#e8e8e8"
  deep-violet: "#514b81"
  electric-violet: "#7b68ee"
  rainbow-gradient-overlay: "#0091ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.14px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.21px
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.15
    letterSpacing: -1.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -1.4px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -1.44px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
    letterSpacing: -2.12px
spacing:
  cardRadius: 18px
  buttonRadius: 9px
  elementGap: 5px
  sectionGap: 133px
components:
  text-link-button:
    role: Navigation, secondary actions
  outlined-neutral-button:
    role: Secondary calls to action, filtering
  muted-outlined-button:
    role: Tertiary actions, less prominent links
  filled-primary-button:
    role: Main call to action
  light-header-button:
    role: Navigation login actions
  gradient-border-button:
    role: Specialized or featured actions
  feature-card:
    role: Showcasing product features or benefits
  dark-content-card:
    role: Containing rich media or contextual information
  muted-badge:
    role: Informational labels, status indicators
---

## Overview

**North Star:** Crisp Monochrome Control Panel

ClickUp's design system, as seen on the Qatalog acquisition page, emphasizes a bold yet understated aesthetic. High-contrast typography in deep, near-black neutrals anchors the content on a pristine white canvas. A single vivid violet serves as a functional accent, drawing the eye to interactive elements and brand highlights. The visual language balances sharp, confident headlines with approachable body text, creating a system that feels modern and efficient without visual clutter.

### Do's

- Use `Canvas White` (#ffffff) as the primary page background for all content outside of dedicated dark sections.
- Apply `Ink Black` (#202020) for all primary headings (display-lg, display, heading-lg, heading) to ensure visual impact.
- Ensure interactive links and bordered buttons use `Electric Violet` (#7b68ee) for their text or border color, never for backgrounds.
- Maintain a tight visual rhythm for headings by consistently applying letter spacing: -1.4px at 40px, -1.44px at 48px, and -2.12px at 60px (`Plus Jakarta Sans`).
- Employ a 9px border radius (`spacing.radius.buttons` or `spacing.radius.general`) for all functional UI elements like buttons, nav links, and tags.
- Utilize 10px (`spacing.cardPadding`) as the primary internal padding for card components and similar container elements.
- For primary call-to-action buttons, use the `Ink Black` (#202020) fill with `Canvas White` (#ffffff) text and an 8px border radius.

### Don'ts

- Do not use `Electric Violet` (#7b68ee) as a background fill for any button or primary UI element; reserve it for borders, text, and interactive highlights.
- Avoid applying heavy drop shadows; cards should use `Canvas White` at 50% opacity or be solid `Graphite Black` with no shadow.
- Do not introduce new typefaces; rely solely on `Plus Jakarta Sans`, `Inter`, and `Sometype Mono` for all typographic needs.
- Never use full-bleed imagery without a subtle overlay, especially when paired with the `Rainbow Gradient Overlay`.
- Do not use arbitrary spacing values; always refer to the defined `spacing` tokens like 4px, 5px, 8px, 10px, 12px, for consistent rhythm.
- Avoid deep, dark backgrounds on content cards unless it's a specific 'Dark Content Card' component using `Graphite Black` (#000000).
- Do not use highly saturated colors for body text; `Slate Gray` (#292d34) or `Subtle Gray` (#646464) are preferred for readability and brand adherence.

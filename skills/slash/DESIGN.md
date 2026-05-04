---
version: alpha
name: Slash
description: Slash adopts a high-contrast dark mode aesthetic for business finance: black canvases, subtly layered dark gray surfaces, and a striking white primary text. Inter typography provides utilitarian clarity, while Ivy Presto adds a touch of classic sophistication to display headlines. The system minimizes color, primarily using off-white for interaction and a warm, golden gradient for subtle accents and visual depth on elevated elements.
colors:
  midnight-ink: "#000000"
  obsidian-surface: "#030304"
  charcoal-canvas: "#08080a"
  pewter-accent: "#121317"
  slate-gray: "#1c1d22"
  ash-text: "#5e616e"
  stone-text: "#777a88"
  silver-text: "#acafb9"
  porcelain-text: "#cdcdcd"
  white-frost: "#e2e3e9"
  pure-white: "#ffffff"
  golden-gradient: "#cc9166"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.007px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.013px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.38
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.022px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.025px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1
    letterSpacing: 0.01px
spacing:
  elementGap: 6px
  sectionGap: 160px
components:
  ghost-navigation-link:
    role: Navigation links and subtle interactive text.
  pill-primary-button:
    role: Main call-to-action buttons.
  pill-ghost-button:
    role: Secondary action buttons, less prominent than primary.
  sharp-ghost-text-button:
    role: Minimal interactive elements without strong visual weight.
  card-standard:
    role: Container for content sections.
  pill-input-field:
    role: Form input fields.
---

## Overview

**North Star:** Midnight Ledger, Obsidian Surfaces

Slash adopts a high-contrast dark mode aesthetic for business finance: black canvases, subtly layered dark gray surfaces, and a striking white primary text. Inter typography provides utilitarian clarity, while Ivy Presto adds a touch of classic sophistication to display headlines. The system minimizes color, primarily using off-white for interaction and a warm, golden gradient for subtle accents and visual depth on elevated elements.

### Do's

- Use Midnight Ink (#000000) as the base background for most pages to establish the dark theme.
- Prioritize Inter for all functional text: body, navigation, buttons, and forms, ensuring high legibility.
- Apply Ivy Presto for large headlines (above 32px) to introduce a classic, authoritative counterpoint to Inter.
- Maintain a compact density using 6px for elementGap and 16px as a multiplier for internal component spacing.
- Incorporate subtle Golden Gradient (#cc9166) on hover states or as a background for elevated, interactive elements, never as a solid background color.
- Use Pure White (#ffffff) for primary text and active states to ensure strong contrast and draw attention.
- Round corners with a 10px radius for cards and general content blocks, and 9999px for pill-shaped buttons and inputs.

### Don'ts

- Avoid using bright, saturated colors for backgrounds or large areas, as the system relies on subtle tonal differences.
- Do not use Ivy Presto for body text or small UI elements; reserve it for large display headings.
- Do not break the dark canvas and dark surface hierarchy by introducing light-mode components.
- Refrain from heavy shadows or strong outlines; elevate elements through subtle background shifts and internal padding.
- Do not introduce additional font families or decorative elements that disrupt the high-contrast, professional aesthetic.
- Avoid arbitrary uses of Pure White (#ffffff) for backgrounds; reserve it for primary text and calls to action.
- Do not use gradients for body text or small icons; they are reserved for decorative accents and elevated visuals.

### Layout

The page adheres to a max-width of 1216px, primarily featuring a centered content model. The hero section often presents a centered headline (Ivy Presto) over a dark, full-bleed background, with a prominent product screenshot or abstract graphic. Sections are demarcated by consistent vertical spacing of 160px, maintaining a spacious rhythm. Content often alternates between text-dominant blocks and graphical elements, including 2-column layouts for text-plus-visuals, and 3-column card grids for features. Navigation is a sticky top bar with a left-aligned logo and right-aligned actions.

### Imagery

This system primarily uses product screenshots and abstract, ethereal graphics. Product screenshots are typically contained within dark, rounded cards, sometimes with a soft blur. Abstract graphics often feature metallic or translucent elements with soft, golden gradients and refractions, creating depth and a premium feel. Icons are monochrome, generally outlined or filled in White Frost. Imagery serves both decorative atmosphere (abstracts) and explanatory content (product UI examples). The density is balanced, with imagery often integrated into information blocks rather than dominating the page.

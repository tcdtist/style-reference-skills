---
version: alpha
name: Public
description: Public's design system evokes a confident, editorial demeanor, balancing sharp, sophisticated typography with subtle, functional use of color. The primary palette is a clean, high-contrast monochrome, serving as a neutral canvas for data and product interfaces. Visual accents are delivered through a singular, vivid violet for interactive elements and an electric blue for subtle highlights, creating focal points without visual clutter. Surfaces are predominantly light and spacious, grounded by slim borders and minimal shadow, suggesting precision and clarity in financial tooling.
colors:
  ink: "#000000"
  canvas: "#ffffff"
  smoke: "#e9edf3"
  graphite: "#262626"
  ash: "#dce2ea"
  jet: "#1b2128"
  slate: "#516880"
  cloud: "#a8b4bf"
  ultramarine: "#0027b3"
  azure-glow: "#95d0ff"
  lilac-mist: "#fff0fe"
  sky-veil: "#cdf3ff"
  ocean-deep: "#00379a"
  nav-blue: "#566e8c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.28
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.11
    letterSpacing: 0px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.13
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-ghost-button:
    role: Call to action
  filled-action-button:
    role: Call to action
  section-card:
    role: Content container
  monochrome-elevated-card:
    role: Accent / Elevated content.
  informational-badge:
    role: Metadata / Status
  feature-link-card:
    role: Navigation / Feature overview
---

## Overview

**North Star:** Crisp Editorial Clarity: a high-contrast financial journal on a pristine, structured page.

Public's design system evokes a confident, editorial demeanor, balancing sharp, sophisticated typography with subtle, functional use of color. The primary palette is a clean, high-contrast monochrome, serving as a neutral canvas for data and product interfaces. Visual accents are delivered through a singular, vivid violet for interactive elements and an electric blue for subtle highlights, creating focal points without visual clutter. Surfaces are predominantly light and spacious, grounded by slim borders and minimal shadow, suggesting precision and clarity in financial tooling.

### Do's

- Prioritize Ink (#000000) for all primary text and critical headlines to maintain high contrast and legibility.
- Use Ultramarine (#0027b3) exclusively for interactive elements like links and button borders, ensuring functional color remains a distinct accent.
- Apply Denton at Weight 300 for all large headings (48px and above) to convey a sense of understated authority.
- Maintain a default border-radius of 4px for most UI elements, reserving 100px for buttons and 16px for prominent cards.
- Employ Smoke (#e9edf3) for hairline borders and subtle dividers to structure content without heavy visual lines.
- Ensure generous spacing with an 8px element gap and 16px card padding to maintain a spacious, uncluttered layout.
- Use Invest Pro for secondary titles and emphasized text, ensuring it complements Denton without competing for attention.
- Leverage the dual-tinted shadow (rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px) for highly interactive ghost buttons to add distinct visual depth.

### Don'ts

- Avoid using highly saturated colors outside of the defined Ultramarine (#0027b3) and Azure Glow (#95d0ff) accents.
- Do not introduce heavy drop shadows or decorative gradients on surfaces, as the design maintains minimal elevation.
- Refrain from mixing font families randomly; adhere strictly to Inter for body text, Invest Pro for structured text, and Denton for display headings.
- Do not use border-radius values other than 1px, 4px, 8px, 12px, 16px, 100px, or 999px.
- Do not use #0000ee (browser default link blue) for any link states; use Ultramarine (#0027b3) instead.
- Do not use an element gap smaller than 8px for vertical or horizontal spacing between related items.
- Avoid excessive use of uppercase text; reserve it only for specific, highly constrained labels or navigation items where it's explicitly observed.

### Layout

The page primarily uses a contained layout with elements centered within a maximum width, though the hero section can be full-bleed. The hero features a large, light-weighted headline centered over a background that integrates product imagery. Sections exhibit a consistent vertical rhythm, often alternating between centered stacks of text, or two-column layouts pairing text with a visual. Content is arranged with a sense of order and precision, frequently utilizing visual separations for clarity. Navigation is a sticky top bar with clearly delineated links and distinct login/signup buttons.

### Imagery

The visual language for imagery is primarily product-focused and functional. It features clean product screenshots of UI interfaces, often displayed within device mockups. These are presented without heavy filters or dramatic lighting, maintaining a sense of realism and direct utility. Imagery primarily serves an explanatory role, showcasing the product's functionality rather than purely decorative atmosphere. The density is moderate; images are used to break up text-heavy sections and illustrate concepts, but the layout remains text-dominant.

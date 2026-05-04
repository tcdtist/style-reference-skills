---
version: alpha
name: Wonder
description: Wonder is a dark-themed design system evoking a 'code editor' aesthetic with deep, muted purple backgrounds and high-contrast white text. It balances stark UI elements – sharp borders, minimal elevation – with a single vivid fuchsia accent that serves as a functional highlight. Typography is precise and utilitarian, hinting at a developer-tool context, while transparent and ghost elements create a sense of depth and interactivity within the dark canvas.
colors:
  midnight-plum: "#0f0217"
  ghost-ink: "#0b0211"
  off-black: "#111111"
  bright-snow: "#ffffff"
  silver-mist: "#e1e4e8"
  border-violet: "#44374a"
  muted-ash: "#6f6774"
  charcoal-grey: "#737373"
  fuchsia-burst: "#d262ff"
  deep-orchid: "#6a1791"
  dark-magenta: "#2d063a"
  sunset-orange: "#d97757"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.5px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.08px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.45
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.12
    letterSpacing: -0.95px
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.1
    letterSpacing: -2.5px
spacing:
  cardRadius: 14px
  buttonRadius: 8px
  elementGap: 12px
  sectionGap: 40px
components:
  primary-action-button:
    role: Filled action button
  ghost-outline-button:
    role: Secondary action button
  navigation-link:
    role: Navigation links and subtle interactive text
  transparent-card:
    role: Informational display card
  elevated-content-card:
    role: Important content display card
  input-field:
    role: Text input areas
  round-badge:
    role: Categorization or tag element
  product-hunt-badge:
    role: Prominent external link indicator
---

## Overview

**North Star:** Deep canvas, fuchsia accent

Wonder is a dark-themed design system evoking a 'code editor' aesthetic with deep, muted purple backgrounds and high-contrast white text. It balances stark UI elements – sharp borders, minimal elevation – with a single vivid fuchsia accent that serves as a functional highlight. Typography is precise and utilitarian, hinting at a developer-tool context, while transparent and ghost elements create a sense of depth and interactivity within the dark canvas.

### Do's

- Always use Midnight Plum (#0f0217) as the base background for main page sections to maintain the dark theme.
- Apply Fuchsia Burst (#d262ff) for primary call-to-action buttons and key interactive elements.
- Utilize Bright Snow (#ffffff) for all primary text content against dark backgrounds to ensure high contrast.
- Reinforce interactive elements with a distinct 8px border-radius for buttons and navigation items, or a 9999px (pill-shape) for badges and inputs.
- Employ Border Violet (#44374a) for subtle borders and dividers between UI elements, creating clear but not harsh separation.
- Use Uncut Sans Variable for headlines (50px, weight 400, letter-spacing -0.0500em) to communicate authority with a unique, modern feel.
- Ensure input fields have a semi-transparent background (`rgba(255, 255, 255, 0.08)`) and Border Violet outline for a cohesive dark UI appearance.

### Don'ts

- Avoid using highly saturated colors other than Fuchsia Burst (#d262ff) for functional interface elements; reserve other bright colors for imagery or specific, non-interactive highlights.
- Do not introduce sharp, angular cards; all cards should have a consistent 14px border-radius.
- Do not use heavy, opaque drop shadows for elevation; rely on the subtle elevation provided by `oklab(0 0 0 / 0.08) 0px 0px 0px 1px` and similar lightweight shadows.
- Do not deviate from the specified typefaces; Uncut Sans Variable, Inter, and Martian Mono are the only approved font families.
- Avoid full-bleed content sections that break the overall maximum width pattern, except for intentional heroic visual elements.
- Do not use dark text on dark backgrounds; maintain high contrast with Bright Snow (#ffffff) for readability.
- Do not use solid borders on ghost buttons; utilize the Border Violet (#44374a) for a delicate outline effect.

### Layout

The page uses a maximum-width contained layout, typically centered, suggesting a focus on content within defined boundaries. The hero section is full-bleed with a dark background, featuring a centered headline and a call-to-action. Subsequent sections alternate between dark and light backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column layouts, often with text on one side and product visuals or abstract graphics on the other. A subtle footer contains sponsor logos, also on a dark background. The navigation is a sticky top bar, providing persistent access.

### Imagery

The site's imagery primarily consists of product screenshots and abstract, ethereal graphics. Product screenshots are contained within card-like UI elements, often with soft transparency or subtle backgrounds, demonstrating the tool's interface directly. Abstract graphics, when present, use gradients of purples and pinks, often appearing as background elements that merge with the dark theme. Icons are typically monolinear, utilizing Bright Snow (#ffffff) for their stroke against dark backgrounds, maintaining a clean yet technical appearance. Imagery serves to explain product functionality and add atmospheric depth rather than decorative flair, and is used sparingly to maintain a text-dominant, information-focused tone.

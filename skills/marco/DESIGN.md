---
version: alpha
name: Marco
description: Macro.fyi presents a functional white-canvas aesthetic, emphasizing content organization within distinct, softly shadowed containers. The system balances readability with a dense information display, utilizing a largely achromatic palette punctuated by a sole vivid violet for actionable elements and subtle gradient accents for dynamic cards.
colors:
  canvas-white: "#ffffff"
  card-frost: "#f7f7f9"
  whisper-gray: "#f2f2f2"
  cloud-tint: "#eff0ff"
  warm-paper: "#fff9ed"
  text-primary: "#333333"
  text-secondary: "#707070"
  text-dim: "#949494"
  divider-gray: "#cccccf"
  outline-blue: "#1685c7"
  interactive-violet: "#6366f1"
  gradient-sunset: "#ff4d79"
  alarm-red: "#e92f48"
  blush-shadow: "#f8c1c8"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0.009px
  heading:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.25
    letterSpacing: -0.403px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.67
spacing:
  cardRadius: 32px
  buttonRadius: 230px
  elementGap: 8px
  sectionGap: 24px
components:
  pill-navigation-button:
    role: Top-level navigation and filter controls.
  outline-action-button:
    role: Secondary calls-to-action or subtle interactive elements.
  default-content-card:
    role: Container for primary content blocks.
  layered-detail-card:
    role: Elevated information or interactive listings within larger content areas.
  ghost-card:
    role: Purely structural grouping without visual adornment.
  gradient-action-card:
    role: Prominent interactive elements or special offers.
  input-field:
    role: User input for forms.
  selected-link-badge:
    role: Indicates active or selected items in a list.
---

## Overview

**North Star:** organized content on frosted glass

Macro.fyi presents a functional white-canvas aesthetic, emphasizing content organization within distinct, softly shadowed containers. The system balances readability with a dense information display, utilizing a largely achromatic palette punctuated by a sole vivid violet for actionable elements and subtle gradient accents for dynamic cards.

### Do's

- Use `Text Primary` (#333333) for all main content and headings.
- Apply `Card Frost` (#f7f7f9) as the default background for content cards, reserving `Canvas White` (#ffffff) for the page background.
- Utilize `32px` border-radius for main content cards and larger organizational blocks.
- Employ `Outline Blue` (#1685c7) for borders of interactive elements when a filled background is not desired.
- Ensure generous `32px` padding within all `Default Content Card` elements.
- Differentiate interactive elements using `Interactive Violet` (#6366f1) for borders on focus or active states.
- Maintain a clear visual hierarchy by limiting prominent box shadows to `Layered Detail Card` elements, and keep them subtle.

### Don'ts

- Do not use highly saturated colors for large background areas; maintain the overall achromatic canvas.
- Avoid using multiple distinct colors for primary call-to-action buttons; the system emphasizes outlined chromatic actions.
- Do not use generic border-radii; adhere to the specified `32px` for cards, `230px` for pill buttons, and `8px` for inputs.
- Avoid deep, dark shadows; elevation is achieved through subtle, light box-shadows or subtle colored tints.
- Do not use large, decorative imagery; product screenshots and UI examples should be contained within cards.
- Refrain from drastically altering default typography letter-spacing for body text; rely on the defined values for each font family.
- Do not introduce new border styles; primarily use 1-4px solid borders with neutral or accent colors.

### Layout

The page uses a maximum width of 1400px but primarily feels constrained and organized, reminiscent of a desktop application. The hero section often features a centered headline over a subtle background. Content is arranged within distinct rectangular cards, leading to a grid-like or stacked flow with consistent vertical `24px` section gaps. Many sections feature side-by-side card arrangements, creating visual pairs. The overall density is compact but not crowded, with content clearly delineated by card boundaries and subtle shadows. Navigation is a simple top bar with pill-shaped ghost buttons.

### Imagery

This site predominantly uses clean, contained product screenshots and carefully cropped UI examples, often within cards with rounded corners. Photography is minimal, focusing on atmospheric shots when present. Icons are primarily outlined or filled charcoal gray, with a consistent stroke weight, serving functional rather than decorative roles. The visual focus is on clarity and the presentation of work and tools, making the imagery explanatory and showcasing rather than atmospheric.

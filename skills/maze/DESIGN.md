---
version: alpha
name: Maze
description: Maze implements a focused, professional workspace aesthetic with a predominantly achromatic palette, accented sparingly by a vivid lime green and a forest green. Large, confident typography provides strong hierarchy against a light, airy canvas. Components are lightweight with subtle card treatments and soft rounded corners, emphasizing content clarity and swift interaction without heavy ornamentation. The overall layout balances information density with generous breathing room, creating an experience that feels both powerful and approachable.
colors:
  canvas: "#f5f4f0"
  surface-white: "#ffffff"
  ink-black: "#000000"
  granite-text: "#1c1c1c"
  stone-gray-border: "#d2cec6"
  ash-button: "#eae6e1"
  muted-text-gray: "#706f6c"
  slate-input-border: "#9e9b94"
  forest-green: "#4b5b0a"
  lime-highlight: "#dbf570"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.36px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
    letterSpacing: -0.66px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: -1.12px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.05
    letterSpacing: -2.3px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.05
    letterSpacing: -3.48px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1
    letterSpacing: -6.3px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 130px
    lineHeight: 1
    letterSpacing: -11.7px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 48-64px
components:
  primary-dark-button:
    role: Call-to-action button for primary actions.
  outline-ghost-button:
    role: Secondary call-to-action or navigational options.
  pill-ghost-button:
    role: Small, less prominent actions or filters.
  default-card:
    role: Content containers for features, data, or product previews.
  hero-card:
    role: Prominent display cards for key product features or testimonials.
  input-field:
    role: User input elements.
  lime-badge:
    role: Small informational labels, typically for 'New' features.
  dark-top-banner:
    role: Promotional banner across the top of the page.
---

## Overview

**North Star:** Whiteboard clarity, green highlight

Maze implements a focused, professional workspace aesthetic with a predominantly achromatic palette, accented sparingly by a vivid lime green and a forest green. Large, confident typography provides strong hierarchy against a light, airy canvas. Components are lightweight with subtle card treatments and soft rounded corners, emphasizing content clarity and swift interaction without heavy ornamentation. The overall layout balances information density with generous breathing room, creating an experience that feels both powerful and approachable.

### Do's

- Use Canvas (#f5f4f0) as the primary page background for all sections, providing a warm, neutral base.
- Apply Phonic font with its light weights (300, 400) and specific letter-spacing variations for all headings to create an expansive, modern feel.
- Maintain a clear functional hierarchy for buttons using Primary Dark Button for main actions and Outline Ghost Button for secondary actions.
- Implement an 8px border radius consistently across all buttons, input fields, and most cards, establishing a soft, approachable feel.
- Utilize Forest Green (#4b5b0a) sparingly, primarily for functional links and subtle decorative strokes, to act as a focused brand accent.
- Employ Lime Highlight (#dbf570) exclusively for small, vivid elements like badges or critical highlights, ensuring its impact is maximized.
- Use Ink Black (#000000) for all primary, high-contrast text elements, especially navigation and call-to-action labels.

### Don'ts

- Do not introduce new saturated primary colors; adhere to the existing Forest Green (#4b5b0a) and Lime Highlight (#dbf570) as the only chromatic accents.
- Avoid heavy shadows or gradients on UI components; maintain the flat, clean aesthetic with minimal elevation.
- Do not use letter-spacing on ui-sans-serif text sizes; it should remain normal unless explicitly specified on Phonic headings.
- Do not deviate from the established 8px border radius for interactive elements and cards; inconsistent rounding will break the visual cohesion.
- Do not use dark backgrounds for main content sections; the system is built on a light canvas with dark text for optimal readability.
- Avoid overly dense layouts; maintain comfortable element (8px) and card (16px) padding, and generous section spacing (48-64px) to preserve visual breathing room.
- Do not use full-width background colors that are saturated or stark; stick to the Canvas (#f5f4f0) and Surface White (#ffffff) for large background areas.

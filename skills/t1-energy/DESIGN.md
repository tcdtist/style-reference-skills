---
version: alpha
name: T1 Energy
description: T1 Energy employs a sophisticated industrial blueprint aesthetic. It uses a restricted, monochromatic palette of deep charcoals, muted grays, and pure white to create a serious, high-tech atmosphere. Typography is precise and confident, often appearing in subtle weights or as a functional overlay. Elements feel lightweight with soft, large radius surfaces and minimal elevation, avoiding heavy borders or decorative flourishes, giving the impression of advanced machinery on a white canvas.
colors:
  nightfall-onyx: "#0f0e12"
  platinum-white: "#ffffff"
  technical-carbon: "#322d2a"
  cloud-chalk: "#f0efe9"
  steel-gray: "#8b8b8b"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.3
spacing:
  cardRadius: 80px
  buttonRadius: 16px
  elementGap: 8px
  sectionGap: 48px
components:
  ghost-header-button:
    role: Primary navigation and action button within the hero overlay.
  pill-ghost-button:
    role: Compact action button, often for secondary navigation or small interactive elements.
  transparent-card:
    role: Displaying informational content without a distinct visual border or background, creating a light, airy feel.
  rounded-informational-card:
    role: Content container with a distinctly large rounded corner, providing a softer boundary.
  learn-more-button:
    role: Secondary action button for deeper content exploration.
---

## Overview

**North Star:** Industrial Blueprint on White Marble

T1 Energy employs a sophisticated industrial blueprint aesthetic. It uses a restricted, monochromatic palette of deep charcoals, muted grays, and pure white to create a serious, high-tech atmosphere. Typography is precise and confident, often appearing in subtle weights or as a functional overlay. Elements feel lightweight with soft, large radius surfaces and minimal elevation, avoiding heavy borders or decorative flourishes, giving the impression of advanced machinery on a white canvas.

### Do's

- Prioritize Cloud Chalk (#f0efe9) and Platinum White (#ffffff) as dominant background colors to support the light theme.
- Use Nightfall Onyx (#0f0e12) or Technical Carbon (#322d2a) for all primary and secondary text for maximum readability.
- Apply T1 Sans consistently, leveraging weight 300 for a lighter touch on larger headlines and weight 400 for body text.
- Utilize 80px border-radius for large surface elements like cards and images to establish the signature soft, rounded aesthetic.
- For interactive elements such as buttons and navigation, prefer semi-transparent Steel Gray (#8b8b8b) backgrounds with Platinum White (#ffffff) text to maintain the clean, technical overlay appearance.
- Employ consistent section gaps of 48px to create a comfortable, structured vertical rhythm across pages.
- Use a base unit of 4px for all spacing decisions to maintain proportional consistency.

### Don'ts

- Avoid introducing vibrant, saturated colors outside of purely decorative image content; the system relies on a near-monochromatic palette.
- Do not use harsh, sharp-cornered elements on larger components; prioritize the 80px and 16px radii for their characteristic softness.
- Refrain from using strong drop shadows or complex elevation; the design system prefers minimal visual depth.
- Do not deviate from T1 Sans as the primary typeface; maintain its subtle weights and consistent letter spacing.
- Avoid small, tight letter spacing for body text; a uniform 0.0100em should be maintained.
- Do not overuse borders; when present, they should be subtle (#322d2a or #ffffff at 1px) to avoid a heavy appearance.
- Do not introduce strong visual gradients or complex background textures; the aesthetic leans towards clean, flat surfaces.

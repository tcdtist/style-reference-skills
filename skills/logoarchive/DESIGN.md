---
version: alpha
name: LogoArchive
description: LogoArchive presents a commanding dark-mode experience, reminiscent of a digital archive or library. Its aesthetic is dominated by deep, muted neutrals, creating a profound backdrop for content. Typography favors compact, confident sans-serifs, reserving a single, vivid yellow for functional accents. Components are lightweight with subtle border treatments and generous curves, balancing utility with a soft, approachable feel against the dark canvas.
colors:
  midnight-ink: "#000000"
  carbon: "#18181b"
  steel-gray: "#27272a"
  ash-gray: "#343538"
  sky-haze: "#a8afb7"
  stone: "#8c8c8d"
  porcelain: "#ffffff"
  polar-mist: "#dadee4"
  amber-glow: "#fde533"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.75
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.75
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.75
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.75
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.9
spacing:
  cardRadius: 28px
  buttonRadius: 20px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-action-button:
    role: Call to action
  ghost-secondary-button:
    role: Secondary action
  subtle-secondary-button:
    role: Secondary action on dark backgrounds
  standard-content-card:
    role: Content grouping
  elevated-content-card:
    role: Content grouping, slightly more prominent
  minimal-card:
    role: Basic container
  pill-tag:
    role: Informational tag or filter
---

## Overview

**North Star:** Deep Digital Archive.

LogoArchive presents a commanding dark-mode experience, reminiscent of a digital archive or library. Its aesthetic is dominated by deep, muted neutrals, creating a profound backdrop for content. Typography favors compact, confident sans-serifs, reserving a single, vivid yellow for functional accents. Components are lightweight with subtle border treatments and generous curves, balancing utility with a soft, approachable feel against the dark canvas.

### Do's

- Use Midnight Ink (#000000) for all primary page backgrounds and main text on Amber Glow surfaces.
- Apply Suisse International for all type, adjusting weight and size to create hierarchy, except for specific large hero headlines.
- Employ Steel Gray (#27272a) for default card backgrounds and subtle interactive elements.
- Prioritize a 28px border radius for most content cards and a 20px radius for buttons.
- Use Amber Glow (#fde533) exclusively for primary calls to action, tags, and small functional highlights.
- Maintain a compact element spacing with 8px as the default gap between components where possible.
- Ensure primary text is Porcelain (#ffffff) on dark backgrounds for optimal contrast.

### Don'ts

- Avoid using multiple chromatic colors; Amber Glow (#fde533) is the primary accent.
- Do not use box shadows for elevation; rely on background color differences and subtle borders instead.
- Refrain from using thin weights of type on dark backgrounds where legibility could be compromised.
- Do not introduce square or minimally rounded corners; all interface elements should embrace significant corner radii.
- Avoid large empty spaces beyond the pageMaxWidth; the layout should feel dense yet organized.
- Do not use generic system fonts; Suisse International and Suisse Works Book define the brand's typographic voice.
- Do not use generic grey for interactive states; utilize the Amber Glow (#fde533) for hover/active where appropriate for primary actions.

### Layout

The page maintains a centered, max-width contained layout rather than full-bleed, creating a focused experience within the surrounding Midnight Ink canvas. The hero section features large, centered headlines over the dark background, often incorporating a single graphic element. Section rhythm is built on consistent vertical spacing, often with content blocks stacking vertically or arranging in multi-column grids (like the pricing cards). There are no overt visual dividers; sections flow into each other via background changes. Navigation is a minimal top bar with simple text links.

### Imagery

This site prominently features product screenshots and abstract graphics. Product screenshots are typically close-cropped UI elements or full interface views presented on the deep dark background, often showcasing geometric logo arrays. Imagery is contained, never full-bleed, and integrates seamlessly with the surrounding UI. Icons are simple, outlined or filled in monochromatic tones (Porcelain, Carbon), maintaining a clean, utilitarian aesthetic. The focus is on visual content as explanatory rather than decorative, showcasing the product directly.

### Elevation

This design system intentionally avoids direct box-shadows. Instead, elevation and visual separation are achieved through distinct background color differences between surfaces (Midnight Ink, Steel Gray, Ash Gray) combined with generous border radii and subtle border treatments (#ffffff). This creates a flat, yet layered, visual hierarchy that feels substantial without relying on drop shadows for depth.

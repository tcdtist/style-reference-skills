---
version: alpha
name: Readymag
description: This design system is a dynamic canvas, blending stark, high-contrast typography with an unpredictable, vibrant color palette. It feels like a digital art gallery, designed for maximal visual impact where each content block is an independent exhibit. The deliberate clash of intense, vivid colors with a predominantly achromatic base creates a playful yet assertive atmosphere, eschewing traditional corporate polish for expressive, almost rebellious, visual communication.
colors:
  canvas-white: "#ffffff"
  type-black: "#000000"
  charcoal-text: "#282828"
  surface-gray: "#f4f4f4"
  light-gray: "#e7e7e7"
  ui-gray: "#808080"
  accent-grape: "#8800ff"
  electric-violet: "#2c0fb1"
  sunset-orange: "#ec520b"
  warning-orange: "#ff5000"
  vivid-yellow: "#ffcc00"
  forest-green: "#b2cc00"
  deep-teal: "#00362b"
  warning-red: "#ff0000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2.7
    letterSpacing: -0.25px
  detail:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 2.67
    letterSpacing: -0.378px
  body-alt:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 2
    letterSpacing: -0.048px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.83
    letterSpacing: -0.252px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1
    letterSpacing: -1.59px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.43
    letterSpacing: -1.408px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -2.68px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -4px
spacing:
  buttonRadius: 200px
  elementGap: 6px
components:
  call-to-action-hero-headline-block:
    role: 
  feature-cards-row-attract-streamline:
    role: 
  navigation-pill-bar:
    role: 
  primary-call-to-action-button:
    role: Critical user actions to advance through the site.
  pill-navigation-button:
    role: Main navigation and secondary actions in headers.
  ghost-navigation-link:
    role: Minimalist interactive text links.
  unstyled-card:
    role: Content containers that rely on background color for differentiation.
  hero-headline:
    role: Prominent, attention-grabbing titles.
  interactive-block-headline:
    role: Headlines within interactive cards or sections.
---

## Overview

**North Star:** Vibrant digital gallery. Each content block is a self-contained, high-contrast visual statement.

This design system is a dynamic canvas, blending stark, high-contrast typography with an unpredictable, vibrant color palette. It feels like a digital art gallery, designed for maximal visual impact where each content block is an independent exhibit. The deliberate clash of intense, vivid colors with a predominantly achromatic base creates a playful yet assertive atmosphere, eschewing traditional corporate polish for expressive, almost rebellious, visual communication.

### Do's

- Always use `200px` border-radius for primary and secondary action buttons to maintain the pill shape.
- Utilize `custom_37866` with its distinctive tight letter spacing (e.g., `-0.050em` at `80px`) for all major headlines to create an impactful typographic statement.
- Employ the vivid brand and accent colors (e.g., `Accent Grape #8800ff`, `Vivid Yellow #ffcc00`, `Deep Teal #00362b`) as full-bleed section backgrounds to delineate content blocks.
- Prioritize `Sunset Orange (#ec520b)` for all high-priority call-to-action buttons.
- Maintain high contrast text on backgrounds: `Type Black (#000000)` on `Canvas White (#ffffff)` and `Canvas White (#ffffff)` on any vivid background color.
- Use `0px` padding on card components, allowing internal content to define its own layout and spacing.

### Don'ts

- Never use soft, muted accent colors; the palette is defined by high-chroma, vivid hues.
- Avoid generic box-shadows for elevation; rely on stark shifts in background color between sections for visual depth.
- Do not use subtle letter-spacing for headlines; the aggressive negative letter spacing of `custom_37866` is a signature of this system.
- Do not constrain content to a fixed page width globally; sections should alternate between full-bleed and contained elements.
- Avoid excessive use of `-apple-system` for headlines; reserve it for body text where neutrality is desired.
- Do not use subtle border-radius values below `10px` for UI components; the system favors either sharp 0px corners or distinctly rounded forms like `10px`, `16px`, `20px` or `200px`.

### Layout

The page exhibits a highly dynamic and sectioned layout, alternating between full-bleed background sections and content blocks with varying implicit maximum widths. The hero section often features a centered headline over a visually dense, collage-like background. Sections are delineated by dramatic shifts in background color, providing visual breaks rather than relying on consistent vertical spacing. Content arrangement frequently uses a mix of centered stacks, text blocks, and full-width banners. There is no rigid grid system explicitly visible, rather a fluid arrangement of diverse content types. Navigation is a sticky top bar, minimal for core actions. A floating '5' interactive element suggests strong spatial interaction.

### Imagery

Imagery is highly abstract and often serves as a backdrop or decorative element rather than a direct content focus. Product screenshots are minimal, focusing on UI elements in isolation. There is a strong emphasis on stark, geometric shapes and typographic art as visual content. Photography, when present, is often part of a collage or a design sample within the product showcase, not lifestyle imagery. Icons are minimal, mostly `Type Black (#000000)` filled, with a blocky, bold outline. The visual density of images varies, with some sections being very image-heavy and others completely text-dominant, creating a dynamic rhythm.

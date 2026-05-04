---
version: alpha
name: Shupatto
description: Shupatto's design system is a study in minimalist elegance, prioritizing abundant negative space and a clean, typographic hierarchy. Its muted palette features primary charcoal and white, punctuated by a single vivid violet for functional highlights. This creates a serene, almost art-book like experience, where compact, widely tracked typography carries primary emphasis, allowing products to breathe and take center stage without visual clutter. Components are understated, often borderless, and integrate seamlessly into the expansive white canvas.
colors:
  canvas-white: "#ffffff"
  charcoal-text: "#2d2d2d"
  deepest-ink: "#000000"
  slate-gray: "#878887"
  highlight-violet: "#738ae5"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
    letterSpacing: 0.071px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
    letterSpacing: 0.072px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.33
    letterSpacing: 0.095px
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1
    letterSpacing: 0.071px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 10px
  sectionGap: 56px
components:
  ghost-navigation-link:
    role: Interactive element for global navigation and secondary calls-to-action.
  highlight-badge:
    role: Small, informative labels indicating status or new content.
  monochrome-badge:
    role: Neutral, understated label often used for categories or tags.
---

## Overview

**North Star:** Gallery Wall Typography

Shupatto's design system is a study in minimalist elegance, prioritizing abundant negative space and a clean, typographic hierarchy. Its muted palette features primary charcoal and white, punctuated by a single vivid violet for functional highlights. This creates a serene, almost art-book like experience, where compact, widely tracked typography carries primary emphasis, allowing products to breathe and take center stage without visual clutter. Components are understated, often borderless, and integrate seamlessly into the expansive white canvas.

### Do's

- Prioritize Canvas White (#ffffff) for backgrounds to maintain an open, minimalist aesthetic.
- Use Charcoal Text (#2d2d2d) for primary text and Deepest Ink (#000000) for strong emphasis, employing Slate Gray (#878887) for secondary content.
- Apply wide letter-spacing (`0.071em` to `0.180em`) consistently across all typography to reinforce the brand's spacious, editorial feel.
- Utilize Highlight Violet (#738ae5) exclusively for functional accents such as active navigation items, badges, or subtle hover states.
- Maintain `0px` border-radius for buttons, badges, and most UI elements, reserving `3px` for very specific, minor 'other' elements as detected.
- Employ Gill Sans Nova Book (weight 500) for core body content and Gill Sans Nova Semibold (weight 800) for all headings and prominent labels, ensuring visual harmony across different hierarchical levels.
- Keep components visually lightweight, often using transparent backgrounds or minimal borders, allowing the typography and spacing to define them.

### Don'ts

- Avoid using saturated colors other than Highlight Violet (#738ae5); all other hues should be achieved through tints and shades of neutral colors.
- Do not introduce heavy shadows or gradients; rely on contrasting typography, spacing, and subtle border lines for hierarchy.
- Refrain from using tight letter-spacing; the brand identity is built on generous character spacing that feels artistic.
- Do not use generic button styles; buttons should be either ghost-like (text-only) or monochromatic text with subtle box model cues, never fully filled with a neutral color as a primary actionable.
- Avoid content-packed layouts; ensure ample negative space around every element to maintain the site's airy and premium feel.
- Do not use highly decorative imagery or illustrations; imagery should be minimal and complement the clean UI, often product-focused or abstract.
- Do not deviate from the specified font families; their distinctive widespread tracking and weights are critical to the brand's typographic identity.

### Layout

The page model is largely full-bleed, but with content often centered and implicitly constrained by wide margins, suggesting a strong content-width discipline. The hero pattern is a simple, expansive white canvas with a centered, minimalist headline in widely tracked text. Section rhythms are defined by consistent vertical spacing and the clear demarcation of content blocks against the white background, rarely using visual dividers but instead relying on typographic shifts and element grouping. Content arrangement is primarily composed of centered text blocks or simple linear arrangements, emphasizing clarity and breathability. There are no prominent card grids or complex column layouts evident, favoring a more editorial, single-flow presentation. The navigation is a minimalist top bar, likely sticky, with widely tracked text links.

### Imagery

This site predominantly uses minimal, product-focused imagery. Visuals are often cropped tightly or isolated against white backgrounds, emphasizing the product's form and function, similar to an art exhibit. There is an absence of lifestyle photography or complex illustrations. Icons, when present, are simple, monochromatic, and outline-based, maintaining the clean, unobtrusive aesthetic. Imagery serves purely to showcase or subtly explain, acting as content anchors without contributing visual noise. The overall density is text-dominant, allowing images to serve as deliberate pauses or highlights.

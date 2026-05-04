---
version: alpha
name: Base Design
description: Base Design uses a high-contrast, minimalist aesthetic that champions clarity and boldness. The visual style is dominated by stark black-on-white typography with generous negative space, creating a sense of understated authority. Large-scale branding elements are interspersed with functional text and navigation, all rendered with a consistent, precise typographic hierarchy. The overall impression is one of directness and sophisticated simplicity.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  ash-gray: "#ababab"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.33
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1.15
spacing:
  buttonRadius: 54px
  elementGap: 7px
  sectionGap: 40px
components:
  pill-ghost-button:
    role: Secondary action button
  contrast-fill-button:
    role: Primary action button, often for content blocks
  text-link-button:
    role: Minimal interactive element, typically for navigation or inline actions
---

## Overview

**North Star:** Minimalist canvas, bold typography.

Base Design uses a high-contrast, minimalist aesthetic that champions clarity and boldness. The visual style is dominated by stark black-on-white typography with generous negative space, creating a sense of understated authority. Large-scale branding elements are interspersed with functional text and navigation, all rendered with a consistent, precise typographic hierarchy. The overall impression is one of directness and sophisticated simplicity.

### Do's

- Prioritize Canvas White (#ffffff) for all main backgrounds and Midnight Ink (#000000) for all text and borders.
- Use BaseGrotesk across all typographic elements, leveraging its consistent letter-spacing of 0.0100em.
- Apply a 54px border-radius to pill-shaped buttons to maintain a soft, distinct interaction style.
- Maintain generous negative space around content blocks and sections to emphasize clarity and scale.
- Ensure all interactive elements, particularly text links, are distinctly underlined on hover if not already by default.
- Use Ash Gray (#ababab) sparingly for subordinate text or subtle dividing lines, never for primary content.
- All navigation and primary branding elements should feature BaseGrotesk, respecting the established type scale.

### Don'ts

- Avoid using multiple typefaces; BaseGrotesk is the only sanctioned font.
- Do not introduce new color hues; strictly adhere to the monochromatic palette of Canvas White, Midnight Ink, and Ash Gray.
- Refrain from using sharp, square corners on interactive elements where a rounded alternative exists.
- Do not overcrowd sections; maintain a spacious layout with a section gap of 40px.
- Avoid decorative elements or excessive imagery that could detract from the bold, minimal aesthetic.
- Do not use subtle elevation; the design system relies on stark color contrast and white space for hierarchy.
- Never deviate from the specified padding for interactive elements; for example, pill buttons must have 8px vertical and 22px horizontal padding.

### Layout

The page primarily uses a full-bleed layout, where content elements stretch across the full width of the viewport, particularly for large brand statements and hero sections. There is no explicit `pageMaxWidth` constraint. Sections are visually distinct through large blocks of content often featuring oversized typography or video embeds. Vertical rhythm is established through significant white space, with a section gap of 40px. The hero section often features oversized, bold typography that integrates with or overlays background motion imagery. Content arrangement tends towards simple, centered stacks or large single elements dominating the screen, reinforcing the minimalist and direct communication style. Navigation is a persistent top bar, minimalistic and unobtrusive against the predominantly white canvas.

### Imagery

Imagery follows a clean, often raw and authentic style, featuring documentary-like video stills, unpolished photography, or bold, large-scale black and white typographic elements. No ornamental graphics or heavy illustrations are present. When photography is used, it often shows people in natural, creative work environments, implying a focus on process and real-world impact rather than aspirational perfection. Imagery is either full-bleed or contained within large, unadorned blocks, maintaining a high-contrast relationship with the surrounding whitespace or black backgrounds.

### Elevation

This design system intentionally avoids shadows. Hierarchy and depth are achieved exclusively through stark black-and-white contrast, typographic scale, and generous use of negative space, reinforcing a flat, direct, and minimalist aesthetic.

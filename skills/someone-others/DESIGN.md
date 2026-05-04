---
version: alpha
name: Someone & Others
description: Someone & Others employs a minimalist, high-contrast aesthetic with a subtle, frosted glass surface treatment. Typography is bold and dominant, paired with a restricted achromatic palette where only minimal, vibrant gradients provide visual energy. Interactive elements are softened through larger radii and a distinct blurred background, creating a sense of refined polish against the clean canvas.
colors:
  ink-black: "#0a0a0a"
  pure-white: "#ffffff"
  muted-gray: "#333333"
  cloud-white: "#f4f4f4"
  pebble-gray: "#dddddd"
  ash-gray: "#ababab"
  slate-gray: "#555555"
  recognition-gold: "#ffd700"
  conversation-glow: "#FFB005"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.7
    letterSpacing: 0.27px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.23px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.12
    letterSpacing: -0.3px
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1
    letterSpacing: -0.35px
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 40px
components:
  ghost-circular-button:
    role: Navigation and subtle actions
  pill-button-neutral:
    role: Secondary calls to action or category filters.
  pill-button-gradient-glow:
    role: Primary call to action.
  solid-information-card:
    role: Structured content display, typically for work examples.
  outline-tag-badge:
    role: Categorization and metadata.
  award-badge:
    role: Highlighting achievements or awards.
  featured-project-card:
    role: Highlighting key projects with a subtle rounded aesthetic.
---

## Overview

**North Star:** Frosted glass on crisp canvas

Someone & Others employs a minimalist, high-contrast aesthetic with a subtle, frosted glass surface treatment. Typography is bold and dominant, paired with a restricted achromatic palette where only minimal, vibrant gradients provide visual energy. Interactive elements are softened through larger radii and a distinct blurred background, creating a sense of refined polish against the clean canvas.

### Do's

- Always use SuisseIntl for all text, varying weights (300, 400, 500) to establish hierarchy.
- Apply negative letter-spacing defined in typography tokens for all headlines and larger text sizes to create a distinctive, impactful look.
- Prioritize a clean, achromatic palette (#0a0a0a, #ffffff, various grays) for primary UI elements, reserving color for functional accents.
- Use a generous 100px border-radius for all interactive elements like buttons and badges to create a soft, approachable feel.
- Introduce visual interest and hierarchy through large, bold typography and subtle background gradients on interactive elements.
- Maintain high contrast (minimum 15:1) between text and background for all content, primarily using #0a0a0a on light surfaces.
- Use backdrop-filter: blur(12px) saturate(1.8) brightness(1.08) on interactive containers to create a frosted glass effect behind actions.

### Don'ts

- Avoid using solid, saturated colors for large interface areas or primary backgrounds; keep them neutral and understated.
- Do not introduce hard, sharp corners; all functional UI elements should use 100px, 16px, or 12px border radii.
- Refrain from using strong, opaque drop shadows; prefer subtle inset shadows or blur effects for elevation.
- Do not clutter layouts; maintain generous section gaps (40px) and element gaps (16px) to ensure breathing room.
- Avoid generic icon styles; use custom, illustrative icons like the '&' character for unique brand identity.
- Do not rely on outline or ghost buttons for primary calls to action; always use the gradient glow button for high-impact actions.

### Layout

The page adheres to a centered max-width 1200px content area. The hero section is full-bleed, featuring a dominant, centered headline over a subtle light background with a pronounced blur effect. Content sections follow a consistent vertical rhythm with 40px gaps, primarily using a single-column stack for large text or alternating text-left/image-right two-column layouts. Navigation is a sticky top bar, minimal and unobtrusive, contrasting with the expansive main content. Density is comfortable, with ample white space around elements, contributing to a sense of clarity and focus.

### Imagery

The site uses a combination of abstract, dynamic illustrations and tightly cropped product photography. Illustrations are often geometric, whimsical, and serve as decorative elements or brand mascots (e.g., the '&' character). Product photography focuses on hands holding or showcasing items, often against a plain white or soft, solid color background, emphasizing the product itself over lifestyle context. Icons are minimal, outlined, and monochromatic when functional, with occasional illustrative brand elements. Imagery density is moderate, used to break up large blocks of text and add visual personality, rather than dominating the page.

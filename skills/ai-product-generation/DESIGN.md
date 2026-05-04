---
version: alpha
name: AI Product Generation
description: Fourmula.ai presents a visually striking design built on a stark white canvas, where elements like cards and interactive components float with a distinct sense of elevation facilitated by crisp, contained shadows. Typography is precise and impactful, using strong contrast against backgrounds. The overall impression is one of efficiency and directness, punctuated by vibrant, warm color accents that highlight key interactions and sections, creating a dynamic yet focused user experience.
colors:
  midnight-coal: "#020108"
  cloud-white: "#ffffff"
  ash-grey: "#333333"
  canvas-fog: "#f7f7f7"
  stone-whisper: "#d7d7d6"
  muted-slate: "#818084"
  deep-plum: "#5d5c61"
  ink-black: "#000000"
  sunset-orange: "#f94a00"
  desert-gold: "#fd7b03"
  sky-blue: "#48a3d1"
  rich-amethyst: "#3a54ff"
  deep-crimson: "#9a0101"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.39
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.013px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.15
    letterSpacing: -0.015px
  heading:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.05
    letterSpacing: -0.02px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 73px
    lineHeight: 1
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 0.94
    letterSpacing: -0.031px
spacing:
  buttonRadius: 1317.53px
  elementGap: 20px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action button for key interactions.
  outline-ghost-button:
    role: Secondary call to action, less prominent than filled.
  default-content-card:
    role: Container for content blocks.
  accent-content-card-large-radius:
    role: Prominent content container, drawing more attention.
  product-image-card:
    role: Container for product images or visual assets.
  minimal-badge:
    role: Non-interactive informational label.
  light-informational-badge:
    role: Subtle informational label, often static.
---

## Overview

**North Star:** White canvas, sharp shadows, and a burst of sunset.

Fourmula.ai presents a visually striking design built on a stark white canvas, where elements like cards and interactive components float with a distinct sense of elevation facilitated by crisp, contained shadows. Typography is precise and impactful, using strong contrast against backgrounds. The overall impression is one of efficiency and directness, punctuated by vibrant, warm color accents that highlight key interactions and sections, creating a dynamic yet focused user experience.

### Do's

- Use Cloud White (#ffffff) as the primary canvas for most new sections.
- Apply Midnight Coal (#020108) for high-contrast text and interactive backgrounds.
- Ensure all interactive elements, especially buttons, use the extreme 1317.53px radius for a pill-shaped appearance.
- Utilize SF Pro Display with its defined letter-spacing for all textual content to maintain the precise, compact aesthetic.
- Employ Canvas Fog (#f7f7f7) for background elements that need to subtly differentiate from the main page while remaining light.
- Incorporate the Sunset Orange gradient (linear-gradient(rgb(249, 74, 0), rgb(253, 123, 3))) selectively to highlight key headlines or calls to value.
- Organize content into distinct cards, using either the 6.65px (Default Content Card) or 19.96px (Product Image Card) corner radii for appropriate visual hierarchy.

### Don'ts

- Avoid using harsh, saturated colors outside of the defined accent gradients or Sunset Orange specific text accents.
- Do not introduce complex drop shadows; rely on the crisp contrast and defined borders for visual depth.
- Refrain from using generic rectangular shapes; embrace the pill-shaped buttons and varied card radii.
- Do not deviate from the specified negative letter-spacing values for SF Pro Display, as it is crucial to the typographic identity.
- Avoid dense, text-heavy blocks without visual breaks or clear hierarchy; keep information scannable.
- Do not use subtle, low-contrast text on light backgrounds; always ensure strong readability with Ash Grey (#333333) or Midnight Coal (#020108).
- Avoid gradients for non-decorative elements; reserve them for impactful headlines and illustrative sections.

### Layout

The page layout is primarily a max-width contained model (defaulting to a breakpoint that allows the main content to breathe without truly full-bleed, except for certain hero elements). The hero section often features a centered headline over a background, or a split text-and-visual arrangement. Section rhythm is marked by consistent, comfortable vertical spacing, creating an airy feel. Content sections frequently alternate between text-left/image-right compositions and horizontally scrolling UI demonstrations within cards. Card grids are used for features, demonstrating the tool's output. The navigation is a minimalist top bar, staying clean and unobtrusive.

### Imagery

This design system primarily uses product-focused imagery and UI screenshots. Photography is typically high-key, product-centric, with tight crops and clear lighting, often on clean backdrops or within a UI context. The product is always the hero, without lifestyle elements. UI screenshots are presented contained within cards, often with rounded corners, and demonstrate the software's functionality directly. Icons, where present, are minimal and vector-based, typically filled or strong outlines in Ink Black or Cloud White for high contrast. Imagery's role is explanatory, showcasing product capabilities and quality, maintaining a clear, functional aesthetic.

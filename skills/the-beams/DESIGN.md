---
version: alpha
name: The Beams
description: The Beams presents a stark, high-contrast visual system, built upon a monochrome palette and large-scale typography. It leverages raw, industrial aesthetics by minimizing decorative elements, relying instead on bold, unadorned text on clean white surfaces. Interaction is signaled through subtle borders and text-only links, avoiding visually heavy components to maintain an austere, content-forward focus.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  terra-cotta: "#a05b38"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.95
    letterSpacing: -0.57px
  body:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.95
    letterSpacing: -0.87px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.1
    letterSpacing: -1.14px
  heading:
    fontFamily: "system-ui"
    fontSize: 95px
    lineHeight: 0.9
    letterSpacing: -2.85px
  display:
    fontFamily: "system-ui"
    fontSize: 160px
    lineHeight: 0.9
    letterSpacing: -4.8px
spacing:
  elementGap: 19px
  sectionGap: 46px
components:
  text-outline-button-light:
    role: Secondary action button or navigation element.
  text-outline-button-dark:
    role: Secondary action button or navigation element on dark backgrounds.
  text-input:
    role: Standard text input field for forms.
  header-navigation-link:
    role: Top-level navigation items.
---

## Overview

**North Star:** Industrial monochrome canvas

The Beams presents a stark, high-contrast visual system, built upon a monochrome palette and large-scale typography. It leverages raw, industrial aesthetics by minimizing decorative elements, relying instead on bold, unadorned text on clean white surfaces. Interaction is signaled through subtle borders and text-only links, avoiding visually heavy components to maintain an austere, content-forward focus.

### Do's

- Prioritize Ink Black text (#000000) on Canvas White (#ffffff) backgrounds for all primary content, ensuring maximum legibility.
- Use NeueHaas-web font family consistently across all text elements, leveraging its singular weight (400) and varying sizes for hierarchy.
- Apply a letter-spacing of -0.0300em (approx. -0.9px at 30px up to -4.8px at 160px) to all text for a compact, editorial feel.
- Maintain a strict 0px border-radius system; all corners must be sharp and unrounded.
- Utilize Ink Black (#000000) bottom borders as the primary visual indicator for interactive elements like buttons and input fields.
- Ensure generous vertical spacing with a base unit of 6px, creating a comfortable density where sections and elements breathe.

### Don'ts

- Avoid using any colors outside of the monochrome Ink Black and Canvas White, except for the Terra Cotta gradient for distinct hero or atmospheric sections.
- Do not introduce shadows or any form of elevation (e.g., box-shadow) for interactive elements or containers.
- Do not use heavily filled or overtly styled buttons; actions should be communicated primarily through text and minimal borders.
- Do not introduce decorative icons or illustrations that deviate from the stark, high-contrast aesthetic.
- Avoid mixed letter-spacing values across different text roles; `NeueHaas-web`'s inherent -0.0300em is a cornerstone.
- Do not vary line-height aggressively at smaller text sizes; stick to the specified values which are often condensed for headlines.

### Layout

The page maintains a maximum-width contained layout rather than being full-bleed. The hero section often features a full-viewport image or gradient with centered headline text. Section rhythm is often defined by large, distinct blocks, sometimes alternating between text-heavy and image-heavy, but always with consistent vertical spacing. Content arrangement leans towards centered stacks for headlines and body text, with occasional two-column layouts for descriptive paragraphs that alternate text and potentially inferred imagery from the layout. Navigation is a minimal top bar with left-aligned brand and centered primary links.

### Imagery

The site primarily uses photography, featuring wide-angle, low-key, industrial shots often with a warm, somewhat desaturated filter. Imagery acts as a decorative atmosphere rather than containing explicit content, often blurring into an abstract pattern, such as the Terra Cotta gradient with light streaks. It is typically full-bleed or large background elements, creating immersive sections. Icons appear minimal, outlined, and monochromatic, integrated subtly into the UI.

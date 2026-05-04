---
version: alpha
name: Concrete Club Studio
description: This design system evokes a raw, almost deconstructed gallery experience, where content is paramount and design elements serve as subtle frames. The stark contrast between graphic Tangerine Flash and deep neutrals, combined with the unexpected juxtaposition of a classic serif with a minimalist sans-serif, creates a tension that is both playful and sophisticated. The heavy reliance on large, almost architectural typography and minimal component styling puts the focus entirely on the message and visual art direction, creating a distinctive aesthetic that feels both rebellious and highly curated.
colors:
  midnight-ink: "#000000"
  onyx-canvas: "#212121"
  frost-canvas: "#f5f6f5"
  gallery-white: "#ffffff"
  tangerine-flash: "#d9462b"
  rose-bloom: "#e296bb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.17
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.19
    letterSpacing: -0.42px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.19
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.15
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 112px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 300px
    lineHeight: 1.14
    letterSpacing: -9px
spacing:
components:
  hero-display-text-block:
    role: 
  dark-story-section-block:
    role: 
  ghost-navigation-header:
    role: 
  ghost-navigation-link:
    role: Primary navigation elements
  hero-display-text:
    role: Main page headline
  section-heading:
    role: Secondary section titles
  informational-text-block:
    role: Contextual details and metadata
---

## Overview

**North Star:** Gallery Wall Typography

This design system evokes a raw, almost deconstructed gallery experience, where content is paramount and design elements serve as subtle frames. The stark contrast between graphic Tangerine Flash and deep neutrals, combined with the unexpected juxtaposition of a classic serif with a minimalist sans-serif, creates a tension that is both playful and sophisticated. The heavy reliance on large, almost architectural typography and minimal component styling puts the focus entirely on the message and visual art direction, creating a distinctive aesthetic that feels both rebellious and highly curated.

### Do's

- Prioritize TRJN DaVinci for all headlines and brand-critical text, ensuring its unique character defines the typography.
- Use Tangerine Flash (#d9462b) sparingly as a high-impact accent, primarily for interactive elements or key brand statements.
- Maintain raw, unpadded button styles with `padding: 0px` and `borderRadius: 0px` for a minimalist, boundary-pushing feel.
- Employ Frost Canvas (#f5f6f5) or Gallery White (#ffffff) as dominant background surfaces to provide a crisp, gallery-like setting for content.
- Utilize large spacing values like `230px` for `sectionGap` to break content and create significant visual breathing room between major sections.

### Don'ts

- Avoid using generic button styles or heavy paddings; interaction cues are minimal and baked into the content itself.
- Do not introduce additional border radii; the design relies on sharp edges (`0px`) for its distinctive aesthetic.
- Refrain from adding elevation or shadows to components; the system relies on stark color contrast and inherent typography for hierarchy.
- Do not introduce additional font families or weights beyond the defined HelveticaNeue-Light, TRJN DaVinci, and Neue Montreal.
- Avoid over-saturating the layout with Tangerine Flash (#d9462b); its impact comes from its scarcity.

### Layout

The page model is full-bleed, using the entire viewport width, with content often centered but without a strict max-width container, allowing for vast negative space. The hero sections are typically monoscape, dominated by large, centered typography or a single graphic element against a solid color background. Sections often create a distinct rhythm by alternating between light (Frost Canvas) and dark (Onyx Canvas) backgrounds. Content arrangement is typically centered or uses a simple, stark block layout, with abundant `sectionGap` (230px) creating significant vertical separation. The navigation is a minimalist top-right cluster of text links, appearing as 'ghost' elements. The overall density is very spacious, emphasizing individual elements rather than dense information.

### Imagery

The visual language is characterized by sparse, line-art or sketch-style illustrations that are organic and slightly whimsical, appearing mostly in white on dark backgrounds or as outlines. They function as decorative accents or subtle contextual hints rather than central content. Photography is absent, replaced by abstract, graphic elements such as colored backgrounds (e.g., Rose Bloom) or playful, deconstructed textual compositions. The imagery is highly stylized, never realistic, and always serves to complement the strong typographic statements, often with a raw, unfinished quality. Icons, if present, align with the line-art aesthetic.

---
version: alpha
name: Giga
description: Giga's design system evokes a sense of deep, expansive calm, contrasting vast dark landscapes with focused, luminous information. Typography is understated and elegant, prioritizing legibility and a sense of gravitas. Interactive elements offer subtle feedback, and surfaces vary from transparent overlays to opaque dark canvases, creating depth and dimension without heavy use of shadows. The overall aesthetic is one of quiet power and precision, mirroring complex AI capabilities with a refined visual language.
colors:
  obsidian: "#000000"
  ghost: "#ffffff"
  graphite: "#cccccc"
  shadow: "#4d4d4d"
  pebble-gray: "#969696"
  night-sky: "#161717"
  steel-gray: "#808080"
  cosmic-dust: "#8a8f98"
  ember-glow: "#fe2c02"
  growth-green: "#49de80"
  subtle-violet-gradient: "#ff9aea"
  soft-mint-gradient: "#c3eaca"
  sky-blue-gradient: "#88bbf5"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 0.86
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.44px
spacing:
  cardRadius: 16px
  buttonRadius: 1000px
  elementGap: 10px
  sectionGap: 48px
components:
  ghost-pill-button:
    role: Secondary action or navigation with minimal visual weight.
  primary-filled-pill-button:
    role: Main call to action, standing out with a solid background.
  dark-filled-pill-button:
    role: Call to action on lighter backgrounds, inverted version of the primary.
  small-decorative-pill-button:
    role: Informational or tag-like elements with a subtle, dark background.
  transparent-card:
    role: Content container with a very subtle, almost ghost-like presence.
  subtle-inset-card:
    role: Small, nested content area or decorative container.
  standard-card:
    role: Primary content grouping container.
---

## Overview

**North Star:** Deep night, mountain vista – a cosmic, digital calm.

Giga's design system evokes a sense of deep, expansive calm, contrasting vast dark landscapes with focused, luminous information. Typography is understated and elegant, prioritizing legibility and a sense of gravitas. Interactive elements offer subtle feedback, and surfaces vary from transparent overlays to opaque dark canvases, creating depth and dimension without heavy use of shadows. The overall aesthetic is one of quiet power and precision, mirroring complex AI capabilities with a refined visual language.

### Do's

- Use Obsidian (#000000) for primary headlines and body text to establish a strong, contrasted foundation.
- Apply Emilio Light font with negative letter-spacing for large headlines (e.g., 48px, weight 300, ls = -0.0300em) to create an elegant, restrained presence.
- Utilize Ghost Pill Button (background: rgba(255, 255, 255, 0.05), text: Obsidian, 1000px radius) for secondary actions or subtle navigational elements.
- Implement a 10px elementGap for consistent tight spacing between most inline and block elements.
- Apply a 1000px border-radius to all buttons for a distinctly pill-shaped, soft appearance.
- Employ Graphite (#cccccc) for card backgrounds and subtle dividers to introduce hierarchical breaks without harsh lines.
- Use Ember Glow (#fe2c02) sparingly as a vivid accent for critical links or calls to attention, ensuring high impact.

### Don'ts

- Avoid using harsh, opaque borders; prefer subtle transparency or no border at all for containers.
- Do not introduce strong, colored backgrounds for full sections; rely on the subtle neutral palette for depth.
- Refrain from using heavily tracked body text; the Inter font with its specific letter-spacing adjustments should be applied as specified.
- Do not deviate from the pill-shaped radius (1000px) for buttons; it's a signature visual cue.
- Avoid standard box shadows; for elevation, use subtle, diffused shadows like rgba(0, 0, 0, 0.7) 0px 12px 32px -16px.
- Do not use highly saturated colors for large text blocks or backgrounds; reserve them for small, impactful accents.
- Resist using bold font weights for large headlines; the light weight of Emilio Light is key to the system's character.

### Layout

The page maintains a centered content model with an implied max-width, while hero sections can be full-bleed with panoramic imagery. The initial hero features a full-viewport, dark, landscape photograph with a centered headline stack and a prominent call-to-action. Subsequent sections often alternate between dark backgrounds (#000000) and slightly lighter, more textured dark surfaces (like rgba(0,0,0,0.2) or #cccccc). Content is typically arranged in left-aligned stacks or a two-column layout with text to the left and product visuals/cards to the right. Vertical rhythm is maintained with consistent section gaps of approximately 48px, creating a spacious but deliberate flow. Navigation is primarily a top sticky header with minimal links and a pill-shaped 'Talk to us' button.

### Imagery

This system primarily uses atmospheric, wide-angle photography featuring natural landscapes, often mountains or abstract patterns, with a dark, moody overlay. Imagery is used as a full-bleed background for hero sections, setting a grand, serene tone. When product interfaces are shown, they are clean, contained rectangles with sharp edges against photographic backdrops. Icons are minimal, outlined (Obsidian outline on dark backgrounds, Ghost on light), suggesting a focus on clarity rather than heavy decoration. The overall impression is image-heavy in hero sections, with imagery serving decorative atmosphere and product showcase, usually contained within a content area on darker backgrounds.

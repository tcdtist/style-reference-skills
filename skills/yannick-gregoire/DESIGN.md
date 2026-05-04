---
version: alpha
name: Yannick Gregoire
description: Yannick Gregoire uses a stark, high-contrast aesthetic reminiscent of early digital art or command-line interfaces. Its visual identity relies on pure black text on a white canvas, punctuated by a single vibrant green highlight. Typography utilizes a monospaced font, giving a structured, code-like feel. Components are minimal, often border-only or ghosted, emphasizing content over decorative elements.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  terminal-green: "#00ffa8"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 37px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 74px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 148px
    lineHeight: 1
spacing:
  elementGap: 9px
  sectionGap: 45px
components:
  ghost-button-light:
    role: Interactive element
  ghost-button-dark:
    role: Interactive element
  minimal-card:
    role: Content container
---

## Overview

**North Star:** monospaced command console

Yannick Gregoire uses a stark, high-contrast aesthetic reminiscent of early digital art or command-line interfaces. Its visual identity relies on pure black text on a white canvas, punctuated by a single vibrant green highlight. Typography utilizes a monospaced font, giving a structured, code-like feel. Components are minimal, often border-only or ghosted, emphasizing content over decorative elements.

### Do's

- Use LT Terminal Mono exclusively for all typography at weight 400 (`LT Terminal Mono`, `400`).
- Maintain a strict achromatic base palette of Canvas White (`#ffffff`) and Ink Black (`#000000`) for backgrounds and text, introducing Terminal Green (`#00ffa8`) sparingly as an accent.
- Apply 0px border-radius consistently to all UI elements, including buttons, cards, and interactive components.
- Utilize ghost button styles for most interactive elements, where text color matches background and a 1px border inversely matches the background.
- Employ the 4px base unit for all incremental spacing, with major vertical section breaks at 45px and smaller element gaps at 9px.
- Design with a grid-like precision, leveraging hard edges and high contrast for visual clarity.
- Implement motion with `ease` timing for quick, responsive transitions, defaulting to 0.5s duration.

### Don'ts

- Avoid using any colors outside of Canvas White (`#ffffff`), Ink Black (`#000000`), and Terminal Green (`#00ffa8`).
- Do not introduce rounded corners or soft shadows, as this would contradict the sharp, digital aesthetic.
- Refrain from using varied font families, weights, or styles, as the system relies on the singular monospace expression.
- Do not use internal padding for buttons; they should remain text-based or rely on external spacing for definition.
- Avoid decorative gradients or complex visual effects; keep surfaces flat and colors solid.
- Do not center-align body text; maintain left-aligned blocks for a structured, code-like flow.
- Do not use complex drop shadows for elevation; rely on color contrast and minimal borders for visual separation.

### Layout

The page maintains a full-bleed layout, not constrained by a max-width. The hero section often presents a centered headline over a dark background. Content sections follow a consistent vertical rhythm, often alternating between Canvas White and Ink Black backgrounds. Content arrangement leans towards centered stacks or clear left-aligned blocks, favoring a sequential, almost terminal-like information flow rather than complex grid structures. Navigation is minimal, likely a fixed header or an off-canvas menu, emphasizing direct interaction without heavy visual adornment.

### Imagery

The site predominantly uses stark UI elements over rich imagery. When visuals are present, they are either abstract patterns or embedded media (videos), appearing without framing or rounded corners. Icons, typically monochrome, are minimal and functional. The overall density is text-dominant, with visual elements serving as direct content or functional accents rather than decorative embellishments.

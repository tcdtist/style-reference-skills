---
version: alpha
name: Tech Barcelona
description: Tech Barcelona uses a bold and graphic black-and-white canvas, punctuated by a single vibrant blue accent. The typography is compact and confident, primarily utilizing a light-weight sans-serif for both headings and body text, establishing an authoritative yet accessible tone. Components are sharp and unfussy, favoring crisp borders and minimal elevation over elaborate styling, with a strong emphasis on a clear, almost monochromatic visual hierarchy that directs attention to key information and interactive elements.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  ink-text: "#212529"
  light-gray-divider: "#cccccc"
  headline-black: "#090707"
  ice-blue-accent: "#0075ff"
  shadow-white: "#eeeeee"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.9px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.08px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.14
    letterSpacing: -0.01px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.045px
spacing:
  elementGap: 4px
  sectionGap: 50px
components:
  primary-action-button:
    role: Filled button for main calls to action.
  ghost-bordered-button:
    role: Secondary action button with a border and transparent background.
  text-link-button:
    role: Tertiary action or navigational link styled as a button.
  white-text-link-button:
    role: Text link for navigation or small actions on dark backgrounds.
  muted-card:
    role: Container for content, particularly news items.
---

## Overview

**North Star:** High-contrast geometric blueprint

Tech Barcelona uses a bold and graphic black-and-white canvas, punctuated by a single vibrant blue accent. The typography is compact and confident, primarily utilizing a light-weight sans-serif for both headings and body text, establishing an authoritative yet accessible tone. Components are sharp and unfussy, favoring crisp borders and minimal elevation over elaborate styling, with a strong emphasis on a clear, almost monochromatic visual hierarchy that directs attention to key information and interactive elements.

### Do's

- Prioritize high-contrast combinations using Midnight Ink (#000000), Canvas White (#ffffff), and Ink Text (#212529) for all textual content to maintain strong legibility.
- Utilize Ice Blue Accent (#0075ff) exclusively for primary calls to action or key interactive states, ensuring it remains a distinct highlight.
- Maintain sharp, 0px border radii for all components, including buttons and cards, to reinforce the geometric and precise aesthetic.
- Employ FavoritPro-Light (weight 400) for all typography, adjusting font size instead of weight for hierarchy, following the established type scale.
- Apply the subtle Shadow White (#eeeeee) box shadow (1px 1px 0px 0px) to interactive elements like buttons to provide slight depth without heavy elevation.
- Use Light Gray Divider (#cccccc) for hairline borders and subtle separations, offering visual breaks without introducing strong contrast.

### Don'ts

- Avoid using multiple accent colors; Ice Blue Accent (#0075ff) is the sole chromatic highlight.
- Do not introduce rounded corners; all elements should adhere to the 0px border-radius.
- Refrain from using bold or heavy font weights for emphasis; leverage letter spacing and size from the type scale instead.
- Do not apply drop shadows to cards or general surfaces; reserve soft shadows for interactive elements as defined.
- Avoid decorative gradients or complex backgrounds; maintain a flat, high-contrast, black-and-white base.
- Do not use padding less than 10px for button content, unless it is a purely text-based link button.

### Layout

The page primarily uses a max-width contained layout, though the hero section can be full-bleed with a large, centered headline against a dark background or with an architectural image. Sections exhibit strong vertical rhythm with consistent spacing, often alternating between dark (Midnight Ink) and light (Canvas White) backgrounds. Content is organized in clear, stacked blocks and implicit two-column layouts where text and visuals interact. Navigation is confined to a persistent top bar featuring minimal links and a high-contrast 'Join Us' button.

### Imagery

This design system uses a minimalist approach to imagery, primarily employing the brand's geometric, QR-code-like logo as a decorative background element or prominent identifier. Photography is used sparingly and appears to be real-world architectural shots, acting as contextual backdrops rather than focal points. Icons are monochrome, simple, and functional, likely either filled or outlined with a fine stroke, adhering to the stark black-and-white aesthetic. Imagery serves primarily as atmospheric context or brand reinforcement, with a very high textual density across the site.

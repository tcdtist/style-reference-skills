---
version: alpha
name: Exhibition Magazine
description: Exhibition Magazine embraces a high-contrast editorial aesthetic: stark black and white punctuated by strong photographic imagery. Content is presented on clean, unadorned surfaces with minimal elevation, emphasizing typography and photography. Subtle linear borders provide structure without visual weight. The overall impression is one of confident, minimalist sophistication, focusing reader attention on the curated content.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  divider-gray: "#e5e7eb"
  muted-surface: "#a9a9a9"
  blush-card-back: "#fff5fa"
  swiper-accent: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.6
    letterSpacing: 0.79px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.2px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.8
    letterSpacing: -0.36px
spacing:
  cardRadius: 0px
  buttonRadius: 100%
  elementGap: 12px
  sectionGap: 60px
components:
  carousel-navigation-button:
    role: Interactive element to navigate image carousels
  load-more-button:
    role: Expands content using a prominent call to action.
  image-card-default:
    role: Displays articles or features prominently with large imagery.
  blush-content-card:
    role: Highlights specific curated content or editorial picks.
  hero-section-header:
    role: Primary visual for articles, featuring a large image and overlaid title.
  navigation-link:
    role: Top-level navigation items
---

## Overview

**North Star:** monochrome editorial canvas

Exhibition Magazine embraces a high-contrast editorial aesthetic: stark black and white punctuated by strong photographic imagery. Content is presented on clean, unadorned surfaces with minimal elevation, emphasizing typography and photography. Subtle linear borders provide structure without visual weight. The overall impression is one of confident, minimalist sophistication, focusing reader attention on the curated content.

### Do's

- Prioritize Ink Black (#000000) for all primary text and headings against Canvas White (#ffffff) backgrounds for maximum contrast.
- Use DIN font exclusively for all headings and significant display text, with its characteristic tight letter-spacing.
- Structure content using Divider Gray (#e5e7eb) for subtle linear borders and dividers, rather than heavy backgrounds or shadows.
- Treat images as full-bleed within their content containers, adhering to the 0px border-radius for a stark, unconstrained look.
- Reserve the Swiper Accent (#007aff) for minimal interactive cues, avoiding its use for primary calls to action or decorative elements.
- Maintain generous section gaps of 60px to provide ample white space and visual breathing room between content blocks.
- Utilize forma-djr-display for small supporting text, always uppercase and highly tracked (0.0620em) to differentiate it.

### Don'ts

- Avoid using drop shadows or complex gradients; the design relies on flat surfaces and high contrast.
- Do not introduce new saturated colors; the palette is intentionally monochromatic with a single, highly controlled accent.
- Do not apply rounded corners to cards or main content blocks; maintain sharp, crisp edges (0px radius).
- Avoid decorative background patterns or textures; surfaces should remain clean and uncluttered.
- Do not use Cochin for headlines or large display text; its role is specifically for body copy and descriptive links.
- Do not place buttons or interactive elements on Muted Surface (#a9a9a9) or Blush Card Back (#fff5fa) backgrounds without sufficient contrast for text and interaction states.
- Do not create dense, information-heavy blocks without substantial white space; content should be spaced out to maintain clarity.

### Layout

The page primarily uses a full-bleed layout for hero sections, filling the viewport horizontally. Content sections then generally narrow to a contained maximum width, centered on the page. The hero features a large full-bleed image with centered overlaid text. Sections follow a consistent vertical rhythm with a 60px gap. Content is arranged in alternating patterns, often with large image cards followed by text blocks. There's a clear 4-column implied grid for card layouts, though some sections use a single dominant image. Navigation is a minimalist top bar, sticky or otherwise. The overall density is comfortable, allowing for strong visual impact from images and typography.

### Imagery

This design system primarily utilizes photography, which is often full-bleed and serves as the dominant visual element. Images are usually high-contrast and often moody, presented with raw, un-masked edges and no rounding. Product shots are contained within image cards, and lifestyle photography in hero sections is used to set the tone rather than provide explicit information. Icons are minimal, likely outlined and monochromatic, acting as functional cues rather than decorative elements. Image density is high, with visuals often taking precedence over text in content blocks.

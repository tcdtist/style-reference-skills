---
version: alpha
name: Visual
description: Visual employs an editorial-minimalist aesthetic, using a muted, near-achromatic palette to emphasize typography and content. A primary accent of deep charcoal and secondary highlights of yellow are used sparingly to draw attention to key functional elements. The design prioritizes generous spacing and a deliberate grid, creating a sense of calm authority and allowing the AI-generated content to take center stage without visual clutter. Surfaces are mostly light, acting as a clean canvas.
colors:
  canvas-parchment: "#f6f6f4"
  surface-white: "#ffffff"
  charcoal-ink: "#2c2c26"
  content-black: "#000000"
  muted-stone: "#d0d0c8"
  warm-gray: "#e8e7d9"
  icon-gray: "#aaab9c"
  border-khaki: "#57584b"
  accent-lime: "#fff347"
  muted-gold: "#aaa674"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.41
    letterSpacing: -0.025px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.33
    letterSpacing: -0.025px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.13
    letterSpacing: -0.05px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.94
    letterSpacing: -0.05px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 80px
components:
  primary-ghost-button:
    role: Outlined action button
  filled-pill-button:
    role: Secondary action button/Tag
  light-pill-button:
    role: Neutral secondary button
  light-muted-pill-button:
    role: Tertiary or ghost action button
  content-card:
    role: Container for content blocks
  half-rounded-card:
    role: Asymmetric content container
  navigation-bar-item:
    role: Top navigation link
  footer-block:
    role: Bottom page section
---

## Overview

**North Star:** Editorial blueprint on parchment

Visual employs an editorial-minimalist aesthetic, using a muted, near-achromatic palette to emphasize typography and content. A primary accent of deep charcoal and secondary highlights of yellow are used sparingly to draw attention to key functional elements. The design prioritizes generous spacing and a deliberate grid, creating a sense of calm authority and allowing the AI-generated content to take center stage without visual clutter. Surfaces are mostly light, acting as a clean canvas.

### Do's

- Prioritize fontSerif for all primary headlines, with a weight of 300 or 400, not bolder.
- Use fontMono for all body text, navigation, and button labels to maintain the technical, precise feel.
- Maintain generous vertical spacing between sections, primarily using 80px for section gaps.
- Apply Canvas Parchment (#f6f6f4) as the default background for most page sections.
- Use Charcoal Ink (#2c2c26) for filled button backgrounds and dark section backgrounds, paired with Surface White text.
- Accent key functional elements and interactive states with Accent Lime (#fff347), used sparingly and punctually.
- Ensure all buttons and interactive tags maintain an aggressively pill-shaped radius (1.67772e+07px) or a sharp 0px radius for ghost actions.

### Don'ts

- Avoid arbitrary use of strong colors; color should always serve a functional purpose.
- Do not use heavy shadows or strong elevation effects; surfaces should remain flat or subtly bordered.
- Do not use generic system fonts; stick strictly to fontMono and fontSerif for all text.
- Avoid excessively long line lengths for body text to preserve the editorial clarity.
- Do not apply rounded corners to elements unless explicitly specified with 8px for cards or 3px for navigation elements.
- Do not use images as primary branding elements, maintain the emphasis on typography and structured content.
- Avoid decorative gradients; stick to solid color backgrounds unless for specific imagery.

---
version: alpha
name: Gsap
description: GSAP uses a dynamic 'dark playground' aesthetic, where a deep black canvas provides a dramatic stage for vibrant, evolving highlight colors and bold, unconventional typography. The system emphasizes clear content hierarchy through stark contrast, with interactive elements outlined in subtle, near-white tones rather than filled. The overall impression is one of sophisticated, high-performance tooling for creative animation.
colors:
  absolute-zero: "#0e100f"
  frosted-canvas: "#fffce1"
  faded-steel: "#7c7c6f"
  deep-graphite: "#42433d"
  neon-pink: "#fec5fb"
  fiery-orange: "#ff8709"
  shocking-green: "#0ae448"
  digital-violet: "#9d95ff"
  aqua-glow: "#00bae2"
  mint-burst: "#abff84"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: -0.14px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: -0.16px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.38
    letterSpacing: -0.24px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.64px
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.15
    letterSpacing: -0.88px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 66px
    lineHeight: 1.05
    letterSpacing: -1.32px
  display:
    fontFamily: "system-ui"
    fontSize: 224px
    lineHeight: 0.9
    letterSpacing: -4.48px
spacing:
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 34px
components:
  pill-ghost-button:
    role: Primary action button
  text-only-button:
    role: Secondary action or navigation link
  icon-only-button:
    role: Tertiary action or purely decorative icon button
  internal-link-nav-item:
    role: Navigation links
  branded-section-card:
    role: Container for product features or content sections
---

## Overview

**North Star:** Midnight kinetic canvas

GSAP uses a dynamic 'dark playground' aesthetic, where a deep black canvas provides a dramatic stage for vibrant, evolving highlight colors and bold, unconventional typography. The system emphasizes clear content hierarchy through stark contrast, with interactive elements outlined in subtle, near-white tones rather than filled. The overall impression is one of sophisticated, high-performance tooling for creative animation.

### Do's

- Use Absolute Zero (#0e100f) as the default background for all pages and primary content sections.
- Prioritize Frosted Canvas (#fffce1) for all primary text and interactive elements to ensure high contrast on dark backgrounds.
- Apply Mori font with variable letter-spacing, using the tighter tracking values for larger display text (e.g., -0.0200em for 224px display text) and standard tracking for body copy.
- Employ the 100px border-radius for all primary buttons and navigation items to maintain a distinct pill-shaped interactive element.
- Integrate brand accent colors (Neon Pink, Fiery Orange, Shocking Green, Digital Violet, Aqua Glow, Mint Burst) in graphical elements, animated components, and section highlights using 2px borders.
- Maintain a comfortable density with element gaps typically at 16px, and card padding at 16px for content blocks.
- Outline interactive elements like buttons and input fields rather than filling them, using Frosted Canvas (#fffce1) for borders to keep the primary background clean.

### Don'ts

- Avoid using solid background fills for primary action buttons; instead, opt for outlined styles with Frosted Canvas borders.
- Do not introduce new color palettes; stick to the defined brand accents and neutral scale.
- Never use generic square or rounded-square buttons; all primary interactive elements should leverage the 100px border-radius for the signature pill shape.
- Resist adding unnecessary elevation or shadows; the design relies on flat surfaces and vibrant color outlines for visual interest.
- Do not deviate from the Mori font or introduce other font families; all textual content must use Mori to maintain brand consistency.
- Avoid overly bright or light background sections; the design system is anchored in a dark theme where brighter elements serve as accents.
- Do not use generic gray text for headlines or section titles; they should always be Frosted Canvas (#fffce1) or a specific brand accent color for emphasis.

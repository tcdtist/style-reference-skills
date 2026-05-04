---
version: alpha
name: Panic
description: Panic Studio's design system combines bold, expressive typography with a vibrant, contrasting color palette. The visual identity alternates between a warm, soft peach background with dark text and a moody, dark background punctuated by energetic yellow headlines. Components are minimal, relying on generous spacing and high contrast to define their presence. The overall impression is playful yet authoritative, reflecting a creative agency that values strong visual storytelling.
colors:
  panic-peach: "#f8e2db"
  midnight-ink: "#0e1017"
  emerald-pop: "#16ffbd"
  sunbeam-yellow: "#fff050"
  pure-white: "#ffffff"
  absolute-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.45
    letterSpacing: 0.11px
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.15
    letterSpacing: 1.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1.1
    letterSpacing: 2.6px
  display:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1
    letterSpacing: 3px
spacing:
  buttonRadius: 60px
  elementGap: 12px
  sectionGap: 90px
components:
  ghost-button-light:
    role: Call to action button for light backgrounds.
  logo-circle:
    role: Brand identity mark.
  primary-navigation-link:
    role: Top-level navigation item.
---

## Overview

**North Star:** Vibrant type on contrasting canvas.

Panic Studio's design system combines bold, expressive typography with a vibrant, contrasting color palette. The visual identity alternates between a warm, soft peach background with dark text and a moody, dark background punctuated by energetic yellow headlines. Components are minimal, relying on generous spacing and high contrast to define their presence. The overall impression is playful yet authoritative, reflecting a creative agency that values strong visual storytelling.

### Do's

- Use Panic Peach (#f8e2db) as the dominant background for light-themed sections, providing warmth.
- Pair Roslindale 500 headlines with GT Pressura 300 body text for consistent typographic contrast.
- Implement 60px border-radius for all interactive elements like buttons to maintain a soft, friendly aesthetic.
- Utilize Sunbeam Yellow (#fff050) exclusively for dramatic headlines or decorative graphical elements on dark backgrounds.
- Maintain generous 90px vertical section gaps and 50px horizontal column gaps to create a spacious, breathable layout.
- Employ Midnight Ink (#0e1017) for all primary text and un-filled button borders for strong contrast and legibility.
- Use Emerald Pop (#16ffbd) only for the brand logo or other specific brand marks, not for general UI elements.

### Don'ts

- Do not use Roslindale for body text; reserve it entirely for headlines and display text.
- Avoid using Sunbeam Yellow (#fff050) as a button background color or for large blocks of text.
- Do not introduce square or low-radius corners on interactive elements; enforce 60px radius.
- Do not use multiple font families beyond Roslindale and GT Pressura without explicit approval.
- Avoid tight element spacing; prioritize the generous 12px element gap and larger section paddings.
- Do not use Emerald Pop (#16ffbd) for any interactive states or general background elements.
- Do not use gradients; the system relies on solid color blocks for structure and impact.

### Layout

Pages are structured with a full-bleed background that alternates between Panic Peach and Midnight Ink. Content is centered and largely contained within a flexible max-width, creating a clear content rhythm. The hero section often features large, centered headlines over a solid background. Sections are separated by generous vertical spacing (90px). Content flows in mostly single-column stacks with occasional multi-column feature or work showcases, but always high contrast and centered. Navigation is a minimal top-right bar with simple text links.

### Imagery

This system primarily uses iconography and limited imagery. The branding relies on abstract, geometric shapes (like the circular logo background) and simple, expressive icons (e.g., down arrows, small starbursts). When present, product imagery is likely to be high-quality, contained, and without busy backgrounds, allowing the expressive typography to dominate. Icons should be monochrome outlined or filled with the brand's key accent colors (Sunbeam Yellow). Imagery is decorative and used to punctuate text rather than being content-heavy.

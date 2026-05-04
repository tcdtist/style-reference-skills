---
version: alpha
name: PALAZZO MONTI
description: Palazzo Monti employs a stark, high-contrast aesthetic with a minimalist footprint. Black text on white canvas dominates, with generous negative space emphasizing content. The design features a single, custom sans-serif typeface used across all elements, creating a cohesive typographic voice. Components are lightweight and often outlined, playing into a 'ghost' or 'inverted' button style, and circular elements appear as an unexpected geometric motif.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  ash-gray: "#9d9d9d"
  slate-text: "#595959"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.38
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 0.72
spacing:
  elementGap: 15px
  sectionGap: 30px
components:
  ghost-button:
    role: Interactive action button
  primary-link:
    role: Navigation and key action links
  circular-card:
    role: Decorative or content containers with a distinct shape
  callout-text-block:
    role: Prominent textual content sections
  newsletter-button:
    role: Secondary action button for subscriptions
---

## Overview

**North Star:** monochromatic gallery, bold typography

Palazzo Monti employs a stark, high-contrast aesthetic with a minimalist footprint. Black text on white canvas dominates, with generous negative space emphasizing content. The design features a single, custom sans-serif typeface used across all elements, creating a cohesive typographic voice. Components are lightweight and often outlined, playing into a 'ghost' or 'inverted' button style, and circular elements appear as an unexpected geometric motif.

### Do's

- Use `Midnight Ink` (`#000000`) for all primary text and headings to establish strong contrast against `Canvas White` (`#ffffff`).
- Apply Aeonik 400 exclusively for all typeface requirements, adjusting size and line height to create hierarchy, not weight changes.
- Maintain generous vertical spacing, using `30px` as a standard `sectionGap` between distinct content blocks for a spacious feel.
- Employ the `3px` border-radius for interactive buttons and the `40px` border-radius for distinct oval-shaped links to differentiate interaction types.
- Center all content blocks horizontally with a `900px` `pageMaxWidth` to maintain a contained and focused layout.
- Use `Ash Gray` (`#9d9d9d`) for subtle borders or secondary information where `Midnight Ink` would be too dominant.
- Implement the subtle button shadow `rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.15) 0px 1px 1px -1px` for all button hover/active states or subtle elevation.

### Don'ts

- Do not introduce additional font families or weights beyond Aeonik 400.
- Avoid using saturated colors; the palette is strictly achromatic with black and white as dominant tones.
- Do not break the `900px` `pageMaxWidth` for primary content sections; hero elements can extend full-bleed visually but the content within should adhere to the max-width.
- Do not use heavy, filled button styles; all primary interactive elements should leverage ghost or outlined button aesthetics.
- Avoid decorative gradients or drop shadows; elevation is minimal and subtle, primarily through outlines or inset shadows.
- Do not use small, cramped spacing; aim for comfortable `15px` `elementGap` and `20px` `cardPadding` to enhance readability and visual breathing room.
- Do not introduce border radii other than `3px`, `40px`, or `80px` (for circular elements) to maintain shape consistency.

### Layout

The page adheres to a `900px` fixed-width centered container for most content, creating a strong sense of structure. The hero section often features oversized typography (`display` role) laid over a full-bleed atmospheric image, contrasting with the contained sections below. Content is arranged in a classic stacked format, with `30px` `sectionGap` providing distinct visual separation. There are no explicit grid layouts for features; instead, content like team members or partners seems to be handled with simple lists or sequential blocks. Navigation consists of a left-aligned, rotated brand name and a clear 'Apply Now' button, implying a minimal, focused approach to site navigation.

### Imagery

The site uses photography primarily as background elements, often large-scale and subtly integrated, such as the historical palazzo interior serving as a backdrop to text. Imagery is not presented front-and-center but acts as atmospheric context. There are no outlined or filled icons visible, suggesting an aesthetic that relies on typography and whitespace. The limited imagery suggests a text-dominant design where visuals provide mood rather than direct information.

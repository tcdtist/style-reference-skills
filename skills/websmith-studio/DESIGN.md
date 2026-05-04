---
version: alpha
name: Websmith Studio
description: Websmith Studio presents a visually understated design system built on a calming off-white canvas and grounded in dark, confident typography. The UI is characterized by lightweight components, ample whitespace, and minimal elevation, allowing product visuals to pop with their own distinct color palettes. Interactions are subtle and deliberate, maintaining the overall sense of quiet sophistication and focus on content.
colors:
  ink: "#1a1a1a"
  canvas: "#f8f8f2"
  fog: "#ffffff"
  deep-space: "#000000"
  mint: "#a4f4cf"
  sky-tint: "#bedbff"
  blush: "#ffc9c9"
  online-green: "#00c950"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.35px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.43
    letterSpacing: -0.5px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.75px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1
    letterSpacing: -2.2px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 16px
  sectionGap: 64-96px
components:
  primary-filled-button:
    role: Main call-to-action button for initiating key actions
  content-card-default:
    role: Container for product showcases, case studies, and informational blocks
  content-card-mint-accent:
    role: Alternative content card for visual variation or thematic grouping
  content-card-sky-accent:
    role: Alternative content card for visual variation or thematic grouping
  content-card-blush-accent:
    role: Alternative content card for visual variation or thematic grouping
  navigation-link:
    role: Top-level navigation items
  header-logo:
    role: Brand identity in the header
  feature-box-plan-build:
    role: Small informational boxes describing services
---

## Overview

**North Star:** Artisanal precision on a calm canvas: a meticulously crafted UI using refined typography and a neutral palette, where subtle interactions and product imagery take center stage.

Websmith Studio presents a visually understated design system built on a calming off-white canvas and grounded in dark, confident typography. The UI is characterized by lightweight components, ample whitespace, and minimal elevation, allowing product visuals to pop with their own distinct color palettes. Interactions are subtle and deliberate, maintaining the overall sense of quiet sophistication and focus on content.

### Do's

- Prioritize the Canvas (#f8f8f2) for page backgrounds, reserving Fog (#ffffff) for contained UI surfaces like cards.
- Use Ink (#1a1a1a) for all primary text, headlines, and interactive elements to maintain high contrast and legibility.
- Apply a consistent 12px border-radius to all image containers, content cards, and major UI blocks for a unified soft aesthetic.
- Maintain ample negative space using elementGap up to 16px and sectionGap up to 96px, allowing content to breathe.
- Use the system font `-apple-system` with `letter-spacing: -0.025em` for headlines 48px and larger, to achieve a tight, modern typographic feel.
- Introduce subtle accent colors (Mint, Sky Tint, Blush) primarily as card backgrounds for visual differentiation, avoiding their use as primary text or action colors.
- Keep elevation minimal or absent; when used, rely on subtle borders rather than heavy shadows to define elements.

### Don'ts

- Never use vibrant saturated colors for large UI areas; they are reserved for small, functional accent points like the Online Green status dot.
- Avoid decorative gradients; the design relies on flat colors and subtle textural differences between surfaces.
- Do not introduce strong drop shadows; the system prefers a flat, clean aesthetic with elevation defined by background color shifts or hairline borders.
- Refrain from using thin, light fonts for body copy; ensure sufficient contrast and readability with Ink (#1a1a1a) and appropriate weights.
- Do not deviate from the established 8px and 12px radii for buttons and cards; these values define the component softness.
- Avoid overly dense layouts or packing too much information into one section; maintain the spacious rhythm with generous padding and section gaps.
- Do not use browser default link colors; all links should be styled with Ink (#1a1a1a) and rely on subtle hover effects for interaction.

### Layout

The page maintains a max-width contained layout of 1340px, centered on the Canvas background. The hero section features a prominent, centered headline and subtext. Content follows a rhythm of alternating section types: large text blocks, 2-column card grids for collaborations and features, and a testimonial block with an image alongside text. Vertical section gaps are generous (64-96px), creating breathing room. Navigation is a sticky top bar with logo left and textual links right. There are distinct section headers aligned left, followed by the respective content blocks.

### Imagery

The site predominantly uses contained product screenshots, often depicting devices (phones, tablets, laptops) displaying digital user interfaces. These images are typically full-color, sharp, and placed within cards with 12px rounded corners. Photography is minimal, appearing in black and white for testimonials, treated with a softer, slightly desaturated feel. Icons are monochrome, simple, and outlined, serving as functional or decorative visual cues within content blocks.

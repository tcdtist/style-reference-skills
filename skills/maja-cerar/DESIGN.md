---
version: alpha
name: Maja Cerar
description: Maja Cerar's online portfolio conveys a meticulous, understated elegance through a spacious achromatic canvas, where project visuals are presented as large, clean blocks. Typography is the primary conveyor of information and hierarchy, using a single signature typeface with subtle negative letter-spacing for a refined, almost whispered presence. The design is highly content-centric, relying on generous whitespace and a minimalist approach to define structure and visual flow without relying on heavy borders, shadows, or vivid accent colors.
colors:
  canvas-white: "#ffffff"
  project-card: "#ebeeff"
  ink-black: "#111111"
  subtle-gray-border: "#bbbbbb"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
spacing:
  cardRadius: 64px
  elementGap: 24px
  sectionGap: 128px
components:
  project-card:
    role: Container for individual project previews.
  navigation-link:
    role: Top-level navigation items and contact links.
  descriptive-text-block:
    role: Text blocks accompanying project entries.
---

## Overview

**North Star:** Typographic Precision on an Open Canvas

Maja Cerar's online portfolio conveys a meticulous, understated elegance through a spacious achromatic canvas, where project visuals are presented as large, clean blocks. Typography is the primary conveyor of information and hierarchy, using a single signature typeface with subtle negative letter-spacing for a refined, almost whispered presence. The design is highly content-centric, relying on generous whitespace and a minimalist approach to define structure and visual flow without relying on heavy borders, shadows, or vivid accent colors.

### Do's

- Prioritize GT America Extended (or Inter) at weight 400 for all textual content.
- Apply -0.031em letter-spacing to all text to maintain the clean, precise feel.
- Use Canvas White (#ffffff) as the default page background for an open, airy canvas.
- Employ consistent 64px border-radius for all image and card containers.
- Use Ink Black (#111111) for all main text and subtle border outlines.
- Maintain generous section gaps of 128px between major content blocks.
- Use Project Card (#ebeeff) as a subtle background for content areas within the main canvas.

### Don'ts

- Avoid using bold or heavy weights; the entire system relies on weight 400 for its understated character.
- Do not introduce new typefaces; the single typeface defines the brand's typographic identity.
- Do not use highly saturated or vivid accent colors; the palette is deliberately achromatic with subtle tints.
- Avoid heavy shadows or gradient backgrounds; the system favors flat surfaces and clear typographic hierarchy.
- Do not use small, tight spacing. Embrace spacious layouts and generous whitespace.
- Refrain from complex component styling; components should be lightweight, with minimal borders and no superfluous decoration.

### Layout

The page employs a full-bleed layout for its overall structure, but content within project sections is often visually contained. The hero section features the designer's name and bio, framed by generous whitespace. Project sections follow a consistent vertical rhythm, with each project presented as a large block comprising a year, project title, descriptive text, and a large visual preview. These sections are separated by very large vertical gaps (128px), creating distinct visual pauses. Content within sections tends to align left, with ample horizontal spacing. The navigation is a minimalist top bar with text links, maintaining a light footprint. There's no complex grid system, but rather a sequential stacking of distinct content blocks.

### Imagery

This design system primarily uses actual product screenshots and UI renders to showcase work. Imagery is consistently presented within large, softly rounded (64px radius) containers, often acting as the main visual element of a project card. There's an absence of lifestyle photography or complex illustrations; instead, the focus is on direct, unadorned visual evidence of product design. Icons, when present, are minimal and likely outlined, aligning with the overall lightweight aesthetic. Imagery serves to explain and demonstrate, taking a significant visual space relative to text.

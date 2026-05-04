---
version: alpha
name: ADBC
description: ADBC employs a high-contrast, minimalist visual language, emphasizing strong typography and monochromatic imagery over decorative elements. A stark white background acts as a clean canvas, creating sharp legibility for the almost black text. The design relies on generous whitespace and a precise typographic system to establish hierarchy and a sense of understated authority. Interaction is conveyed through subtle underlines rather than overt button styling, making the experience feel direct and content-focused.
colors:
  inkwell: "#111111"
  canvas-white: "#ffffff"
  pitch-black: "#000000"
  sage-accent: "#778652"
  muted-gray: "#cecece"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.45px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.05
    letterSpacing: -3.6px
spacing:
  elementGap: 24px
  sectionGap: 42px
components:
  navigation-link:
    role: Header and footer navigation items.
  hero-headline:
    role: Large, impactful text for hero sections.
  body-text-block:
    role: Standard paragraphs and descriptive text.
  promotional-card:
    role: Informational content blocks, featuring image and text.
  section-heading:
    role: Titles for content sections.
  call-to-action-link:
    role: Subtle calls to action embedded in text.
---

## Overview

**North Star:** alpine starkness on white canvas

ADBC employs a high-contrast, minimalist visual language, emphasizing strong typography and monochromatic imagery over decorative elements. A stark white background acts as a clean canvas, creating sharp legibility for the almost black text. The design relies on generous whitespace and a precise typographic system to establish hierarchy and a sense of understated authority. Interaction is conveyed through subtle underlines rather than overt button styling, making the experience feel direct and content-focused.

### Do's

- Use Canvas White (#ffffff) as the primary background for all page sections to enforce a clean, spacious aesthetic.
- Apply Inkwell (#111111) for all main text, ensuring maximum contrast and legibility.
- Prioritize Untitled Sans at 72px with -0.0500em letterSpacing for prominent headlines to achieve a modern, condensed feel.
- Maintain a clear visual hierarchy by consistently using 0px border-radius across all elements; sharp edges are part of the brand.
- Employ a 1px solid Inkwell (#111111) underline for all interactive links and navigation items, removing it on hover for an active state indication.
- Use 42px for section spacing and significant vertical gaps to create a spacious, breathable layout.
- Integrate photography full-bleed as background elements in hero sections, layering text with high contrast for readability.

### Don'ts

- Avoid using drop shadows or complex elevation; maintain a flat, almost two-dimensional interface design.
- Do not introduce additional bright or saturated colors beyond the defined accent color for UI elements; keep the palette monochromatic.
- Refrain from using heavily decorative borders or frames on cards or content blocks; visual separation is achieved through spacing and typography.
- Do not deviate from the specified negative letter-spacing values for large headings, as it is a core characteristic of the typographic style.
- Avoid centered content blocks that take up the full viewport width; instead, use a comfortable reading width centered on the page.
- Do not use generic button styles with filled backgrounds, instead opt for text links with underlines to indicate interaction.
- Do not use complex gradient backgrounds or overlays; stick to solid color backgrounds for clarity.

### Layout

The page primarily uses a max-width contained model within a full-bleed structure. The hero features a full-bleed background image with a large, centered headline. Content sections below alternate between full-width blocks and a centered single-column layout for extensive text. There's a subtle left-aligned feel for content within these single-column sections. Vertical rhythm is established by consistent 42px section gaps, with additional 56px gaps appearing for emphasis. A simple top navigation bar is used, featuring text links and a hamburger menu icon.

### Imagery

This site predominantly uses photography. Hero sections and content blocks often feature full-bleed, high-quality, desaturated or monochrome candid photography showing landscapes, events, and people in natural settings, sometimes with a subtle vintage or muted filter. Imagery serves as a rich atmospheric backdrop or contextual visual for content, rather than purely decorative. There are no illustrations or distinct icon styles visible; interaction is conveyed primarily through text and underlined links. Imagery usage is substantial, often framing entire sections and making the site feel image-heavy.

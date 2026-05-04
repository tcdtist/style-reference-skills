---
version: alpha
name: Maëlan Le Meur
description: This design system evokes a sense of refined, vintage elegance, akin to a printed book or an aged manuscript. The dominant dark, almost sepia, background paired with the warm, creamy text creates a soft, legible contrast that feels intimate and sophisticated. Large, unkerned typography becomes a primary visual element, treated as a graphic form rather than just text, emphasizing the 'artisan' nature of the brand. Minimalist lines and a near-absence of modern UI elements contribute to a timeless aesthetic where content is paramount.
colors:
  inkwell: "#1e1915"
  parchment-cream: "#eee9cc"
  antique-ivory: "#cecab1"
  burnt-umber: "#674825"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 0.95
  display:
    fontFamily: "system-ui"
    fontSize: 115px
    lineHeight: 0.95
  display-lg:
    fontFamily: "system-ui"
    fontSize: 225px
    lineHeight: 0.95
  display-xl:
    fontFamily: "system-ui"
    fontSize: 317px
    lineHeight: 0.95
spacing:
  elementGap: 10-20px
  sectionGap: 60px
components:
  services-category-list:
    role: 
  r-alisations-project-table:
    role: 
  hero-statement-block:
    role: 
  navigation-link:
    role: Interactive element (e.g. 'V', 'o', 'u', 's' in nav)
  menu-item-highlight-button:
    role: Highlighting a currently selected menu item.
  content-card-grid-item:
    role: Structural container for content listings (e.g., 'Quentin Hocdé', 'LCDC' entries).
  badge-tag-default:
    role: Descriptive labels.
  horizontal-divider-line:
    role: Visual separation of content sections.
---

## Overview

**North Star:** Sepia-toned literary journal

This design system evokes a sense of refined, vintage elegance, akin to a printed book or an aged manuscript. The dominant dark, almost sepia, background paired with the warm, creamy text creates a soft, legible contrast that feels intimate and sophisticated. Large, unkerned typography becomes a primary visual element, treated as a graphic form rather than just text, emphasizing the 'artisan' nature of the brand. Minimalist lines and a near-absence of modern UI elements contribute to a timeless aesthetic where content is paramount.

### Do's

- Do use Inkwell (#1e1915) as the primary background for most sections to maintain a deep, rich canvas.
- Do apply Parchment Cream (#eee9cc) for all primary text elements, including headings, body copy, and interactive text, for maximum legibility and brand consistency.
- Do leverage PP Neue Montreal weight 400 exclusively across all type sizes to maintain a consistent tone.
- Do treat headlines at 115px and above as graphic elements, paying attention to their visual form and unkerned character.
- Do apply 0px border radius to most UI elements and cards, relying on subtle line dividers for structure.
- Do use Burnt Umber (#674825) sparingly as a warm background accent for specific, distinct content blocks.

### Don'ts

- Don't introduce additional font weights or families; PP Neue Montreal 400 is the only typeface.
- Don't use pronounced box shadows or elevation; the design relies on color and line for depth.
- Don't use full-color images or illustrations; opt for monochromatic visuals that match the sepia-toned aesthetic.
- Don't use vibrant or contrasting accent colors; stick to the Parchment Cream, Antique Ivory, and Burnt Umber palette.
- Don't override the default letter spacing; typography is designed to appear natural and unkerned.
- Don't use standard button styles; interactive elements are subtly indicated with text color changes, underlines, or minimal circular active states, not framed buttons.

### Layout

The layout is primarily full-bleed dark with content centered or left-aligned within implicit columns, lacking a strong max-width constraint for main sections. The hero section features a monumental, graphically treated headline (317px, 225px) that dominates the screen. Navigation is a fixed top bar. Content is presented in vertical sections separated by subtle horizontal lines, often with a two-column implied grid for text-heavy content or listings. There is a consistent vertical rhythm driven by 'sectionGap' at 60px, creating ample breathing room, occasionally broken by dense table-like structures. The overall impression is spacious and text-dominant.

### Imagery

The site uses minimal imagery, primarily relying on typography as a visual element. When images are present (not directly observed in provided assets, but inferred by contextual clues from 'Artisan graphiste'), they are likely treated with a desaturated or monochrome filter to blend with the sepia-toned aesthetic, keeping focus on the UI and text. Icons, if present (e.g., in navigation), appear as simple, monochrome outlines, maintaining the understated elegance of the design.

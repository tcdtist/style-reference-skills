---
version: alpha
name: Unseen Studio®
description: This design system evokes a sense of stark minimalism and intellectual rigor, like a high-fashion editorial. The limited monochrome palette paired with custom serif and sans-serif typefaces creates a distinctive, almost academic-yet-modern feel. The generous use of letter spacing on display text, combined with tightly controlled line heights at smaller sizes, adds to the precise, almost etched quality of the content. Absence of decorative elements pushes focus entirely onto typography and content.
colors:
  pitch-black: "#000000"
  frost-white: "#ffffff"
  canvas-white: "#f1edeb"
  graphite-text: "#212121"
  light-gray-text: "#d6d6d6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: -0.016px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.5
    letterSpacing: -0.016px
  heading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1
    letterSpacing: -0.016px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1
    letterSpacing: -0.016px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.9
    letterSpacing: -0.016px
spacing:
  elementGap: 6px
  sectionGap: 90px
components:
  navigation-links:
    role: 
  editorial-heading-display:
    role: 
  project-index-card:
    role: 
  navigation-link:
    role: Main navigation items and sub-navigation.
  ghost-button-circular:
    role: Icon-only interactive elements like hamburger menus or sound toggles.
  body-text-block:
    role: General paragraph content and descriptions.
  editorial-heading:
    role: Primary page titles and section headers.
---

## Overview

**North Star:** Minimalist editorial canvas; stark black text on an expansive white backdrop, with every letter precisely placed.

This design system evokes a sense of stark minimalism and intellectual rigor, like a high-fashion editorial. The limited monochrome palette paired with custom serif and sans-serif typefaces creates a distinctive, almost academic-yet-modern feel. The generous use of letter spacing on display text, combined with tightly controlled line heights at smaller sizes, adds to the precise, almost etched quality of the content. Absence of decorative elements pushes focus entirely onto typography and content.

### Do's

- Use Pitch Black (#000000) for primary text elements and Frost White (#ffffff) for backgrounds to maintain high contrast (21.0:1 AAA).
- Employ Saol Display for all large headings (90px) and key navigation items (19px) to establish the brand's editorial voice.
- Apply letter-spacing of -0.0160em to both Saol Display and Neue Montreal typefaces across all sizes to reinforce precision.
- Utilize Neue Montreal for all body copy, button labels, and secondary navigation elements, ensuring legibility at smaller sizes (10px - 29px).
- Prioritize generous padding and margin to create spacious layouts, especially with 90px padding around major content blocks.
- Implement circular ghost buttons (borderRadius: 50%, transparent background, #000000 border) for all compact interactive icons.
- For subtle background variation, use Canvas White (#f1edeb) instead of pure Frost White when a slight textural shift is desired.

### Don'ts

- Avoid using saturated or chromatic colors; the palette is strictly achromatic to preserve the system's stark, minimalist identity.
- Do not introduce heavy shadows or gradients; the design relies purely on typography, spacing, and subtle color shifts for depth.
- Refrain from altering the defined letter spacing for typefaces; the -0.0160em value is critical to the brand's precise visual character.
- Do not clutter layouts with extraneous visual elements; the aesthetic demands expansive white space and a focus on essential information.
- Avoid standard rectangular button shapes; interactive elements should be subtle, circular, or text-based to align with the minimalist interaction model.
- Do not use font weights other than 400 and 700 for Neue Montreal, and only 400 for Saol Display; these specific weights define the typographic hierarchy.

### Layout

The page exhibits a full-bleed layout which prioritizes extreme white space, with content typically centered or justified to the left/right edges of the viewport defined by generous implied padding (seen with 90px on content blocks). The header features minimal, widely spaced navigation links on the right, balanced by the brand logo on the left. Section rhythm is implied by content shifts rather than distinct dividers; elements are vertically stacked with substantial section gaps (e.g., 90px). There's no evident grid for cards or complex content arrangements, leaning towards single-column, highly editorial presentations. The overall density is spacious, emphasizing breathing room around all elements. Navigation is a top bar, fixed or sticky (implied by header structure).

### Imagery

The visual language is characterized by an absence of traditional imagery in the provided view, relying instead on pure UI elements. If present, it would likely feature highly composed, perhaps monochromatic or desaturated photography, or very abstract, minimal graphics that would not disrupt the stark, typographic focus of the design. The current presentation is text-dominant, with icons functioning as functional accents rather than decorative elements. There is no product photography, illustrations, or 3D renders evident, suggesting a focus on information and interaction over visual 'fluff'.

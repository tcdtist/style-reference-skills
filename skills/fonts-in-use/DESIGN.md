---
version: alpha
name: Fonts In Use
description: This design system presents as an academic archive: minimal, almost utilitarian, with a relentless focus on content. The stark monochrome palette of pure black and white emphasizes the typographic examples, with subtle gray surfaces providing structure without distraction. Custom fonts (BentonSansRE and RelayCond) lend a distinct, authoritative voice, reinforcing the site's role as a trusted resource. The tight spacing and modest 2px radius on interactive elements communicate efficiency and precision, prioritizing information delivery over decorative flourishes.
colors:
  inkwell: "#000000"
  canvas: "#ffffff"
  mist: "#f0f0f0"
  pewter: "#dddddd"
  stone: "#cccccc"
  ash: "#999999"
  granite: "#b3b3b3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
spacing:
  buttonRadius: 2px
  elementGap: 10px
  sectionGap: 30px
components:
  font-entry-cards-grid:
    role: 
  search-bar-with-filter-controls:
    role: 
  sponsor-card:
    role: 
  primary-action-button:
    role: Interactive element
  default-input-field:
    role: User input
  small-button:
    role: Pagination/Navigation
  staff-pick-badge:
    role: Decorative/Informational Tag
---

## Overview

**North Star:** Typographic Archive on Vellum. A precise, ordered display of form and content, like a beautifully cataloged library of type specimens.

This design system presents as an academic archive: minimal, almost utilitarian, with a relentless focus on content. The stark monochrome palette of pure black and white emphasizes the typographic examples, with subtle gray surfaces providing structure without distraction. Custom fonts (BentonSansRE and RelayCond) lend a distinct, authoritative voice, reinforcing the site's role as a trusted resource. The tight spacing and modest 2px radius on interactive elements communicate efficiency and precision, prioritizing information delivery over decorative flourishes.

### Do's

- Use Benton Sans RE for all body, paragraph, and standard heading text, varying weight between 400 and 700, and sizes between 10px and 16px to maintain a dense, readable content block.
- Apply Relay Cond exclusively for prominent headings, navigation items, and badges, utilizing its 18px and 36px sizes with weights 400 or 700 to create impact.
- Maintain a strict monochrome palette with Inkwell (#000000) for text, Canvas (#ffffff) for backgrounds, and Mist (#f0f0f0) for subtle section differentiation.
- Implement 2px border radii for all interactive elements like buttons and input fields to imply functionality without softness.
- Separate distinct content sections with a 30px vertical gap, fostering a structured yet compact layout.
- Use 5-10px element spacing to create visual separation between adjacent UI elements without appearing sparse.

### Don'ts

- Do not introduce chromatic colors outside the established monochrome and sponsor-driven accents for any UI elements; reserve color for content itself.
- Avoid large, rounded corners or fluid, organic shapes; maintain the precise, rectilinear aesthetic with maximum 2px radii.
- Do not use letter-spacing other than 'normal' for any text, as the custom fonts are designed for specific impact without alteration.
- Do not deviate from the established 5px vertical and 10px horizontal padding for buttons; consistency reinforces the utilitarian feel.
- Refrain from using prominent box-shadows or complex elevation patterns; subtle differentiation with gray backgrounds suffices for depth.

### Layout

The page adheres to a max-width 1180px, centered layout. The hero section is minimal, primarily text-based with navigation. Content is presented in a dense, multi-column grid, featuring square or rectangular 'cards' each displaying a type example. This grid maintains consistent column gutters (20px column gap) and row spacing (30px marginBottom). Navigation is predominantly horizontal at the top, supplemented by a secondary filter bar. The overall rhythm emphasizes content density and visual cataloging, with sections divided by consistent vertical spacing rather than alternating backgrounds.

### Imagery

The site's visual language is dominated by the type specimens themselves, acting as the primary imagery. These are typically contained within a grid, often cropped, and showcasing diverse typographic applications. There are no lifestyle photos, illustrations, or 3D renders. Icons are minimal, usually simple arrows or abstract shapes for navigation. The focus is entirely on showcasing typography, and the images serve as direct examples, not decorative elements. They are displayed without additional masking or bespoke treatments, appearing to be raw, clear representations of their content.

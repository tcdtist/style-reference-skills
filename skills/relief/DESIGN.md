---
version: alpha
name: Relief
description: Relief's visual system evokes a refreshing, confident simplicity, utilizing a primarily cool blue and white palette. Illustrations are front-and-center, creating a friendly and approachable feel rather than an austere financial one. Typography is robust and direct, anchored by strong, rounded buttons that feel tangible and reassuring. The design favors soft elevation and ample whitespace, framing content with a playful organic rather than rigid geometric structure.
colors:
  sky-canvas: "#f9f7f0"
  arctic-mist: "#ffffff"
  deep-ocean: "#13426f"
  hope-blue: "#2e96ff"
  subtle-gray: "#616c8a"
  slate-text: "#333333"
  input-charcoal: "#202634"
  powder-blue: "#bde1f9"
  cerulean-link: "#0254a5"
  shadow-tint: "#cde7fb"
  sky-fill: "#73b9ff"
  ocean-fill: "#50a7ff"
  accent-blue: "#328dd1"
  dim-gray: "#d0d5dd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.7
    letterSpacing: -0.22px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.63
    letterSpacing: -0.25px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
    letterSpacing: -0.29px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.32px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.43
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.29
    letterSpacing: -0.58px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.11
    letterSpacing: -1.04px
spacing:
  cardRadius: 18px
  buttonRadius: 70px
  elementGap: 14px
  sectionGap: 68px
components:
  primary-action-button:
    role: Call-to-action button
  compact-action-button:
    role: Secondary call-to-action button
  dark-feature-card:
    role: Informational display card
  review-testimonial-card:
    role: User testimonial display
  input-field:
    role: User data entry
  pill-badge:
    role: Categorization or status indicator
---

## Overview

**North Star:** Oceanic clarity on a paper white canvas. Illustrations and confident blues guide the user through a clear, calm financial journey.

Relief's visual system evokes a refreshing, confident simplicity, utilizing a primarily cool blue and white palette. Illustrations are front-and-center, creating a friendly and approachable feel rather than an austere financial one. Typography is robust and direct, anchored by strong, rounded buttons that feel tangible and reassuring. The design favors soft elevation and ample whitespace, framing content with a playful organic rather than rigid geometric structure.

### Do's

- Prioritize 'Hope Blue' (#2e96ff) for all primary interactive elements like call-to-action buttons, maintaining a '70px' border-radius for their rounded pill shape.
- Use 'Gilroy' font throughout, applying the detected negative letter-spacing for each specific `typeScale` role to maintain a compact and confident appearance.
- Employ 'Deep Ocean' (#13426f) for primary headings and dark content sections, contrasted with 'Sky Canvas' (#f9f7f0) or 'Arctic Mist' (#ffffff) for backgrounds.
- Apply '18px' border-radius to general information cards and `26px` for testimonial cards, providing a consistent soft-edged aesthetic.
- Maintain a clear visual hierarchy by limiting prominent shadows to interactive elements and specific cards (e.g., `rgba(0, 0, 0, 0.05) 0px 3px 0px 0px` for review cards).
- Use 'Sky Canvas' (#f9f7f0) as the underlying page background, with 'Arctic Mist' (#ffffff) for most interactive card surfaces, ensuring a bright and open feel.

### Don'ts

- Avoid harsh, dark shadows; instead, use the subtle 'Shadow Tint' (#cde7fb) for button elevation to keep the visual tone light and approachable.
- Do not introduce new saturated accent colors outside of the blues and grays; the color palette is intentionally focused for brand consistency.
- Refrain from using sharp corners; all UI elements from buttons to cards should have a generous border-radius, typically `18px`, `26px`, `70px`, or `100px`.
- Do not deviate from the 'Gilroy' typeface or adjust its letter-spacing outside the defined `typeScale` roles, as its specific tracking is a key brand identifier.
- Avoid dense, information-heavy blocks; ensure generous `28px` card padding and `14px` element gaps to maintain a spacious and airy layout.
- Do not use dark backgrounds for general body text or utility elements; save 'Deep Ocean' for prominent headings or distinct sections.

### Layout

The page primarily uses a max-width contained layout, with content centered. The hero section features a soft 'Sky Canvas' background with a large, centered headline and button, anchored by significant illustrations across the bottom. Sections maintain a consistent vertical rhythm, often alternating between white and blue backgrounds in bands. Content frequently follows a text-left/image-right or image-left/text-right pattern, or stacked centered elements. Feature sections often employ 3-column card grids. There is a strong emphasis on spaciousness, with ample vertical and horizontal padding, creating a comfortable density. Navigation is a simple top bar, with a logo on the left and a 'Primary Action Button' on the far right.

### Imagery

Imagery primarily utilizes custom conceptual illustrations and product screenshots. Illustrations are dimensional and playful, featuring organic, rounded forms in blues, grays, and occasional pops of warm orange or yellow. They often show symbolic objects (money, boats, anchors, piggy banks) within scenes that evoke financial journey narratives, heavily using the brand's blue palette. Product screenshots are typically presented within mockups of mobile devices. Icons are filled, rounded, and mono-color, complementing the illustration style. Imagery plays a dual role: setting a decorative, approachable atmosphere and serving as explanatory content, often adjacent to text blocks. It is image-heavy, balancing UI with illustrative storytelling.

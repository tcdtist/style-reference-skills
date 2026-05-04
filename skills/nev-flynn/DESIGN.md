---
version: alpha
name: Nev Flynn
description: Nev Flynn's design aesthetic is that of a playful digital canvas, characterized by soft, rounded cards floating on a clean, near-white background. Typography is primarily functional and understated, reserving boldness for key headings. Color is introduced sparingly, often as subtle accent panels or within images, creating a gentle visual energy rather than overt branding. The overall impression is approachable and organized, like a well-structured personal portfolio.
colors:
  canvas-bloom: "#f7f2f2"
  surface-white: "#ffffff"
  ink-black: "#000000"
  storm-gray: "#0d1117"
  muted-sage: "#8a949e"
  sky-card: "#98d0ff"
spacing:
  cardRadius: 32px
  buttonRadius: 18px
  elementGap: 4px
  sectionGap: 40px
components:
  pill-navigation-item:
    role: Navigation links (e.g., 'All', 'About')
  outlined-switch-like-button:
    role: Toggle buttons (e.g., 'Toggle Lockdown')
  standard-content-card:
    role: General information containers
  accent-content-card-sky-card:
    role: Visually distinct information containers
  underlined-input-field:
    role: Form inputs
  nev-logo-mark:
    role: Brand identifier with gradient
---

## Overview

**North Star:** Softly rounded digital canvas

Nev Flynn's design aesthetic is that of a playful digital canvas, characterized by soft, rounded cards floating on a clean, near-white background. Typography is primarily functional and understated, reserving boldness for key headings. Color is introduced sparingly, often as subtle accent panels or within images, creating a gentle visual energy rather than overt branding. The overall impression is approachable and organized, like a well-structured personal portfolio.

### Do's

- Apply 32px border-radius to all card-like containers, strictly adhering to the soft, rounded aesthetic.
- Use Canvas Bloom (#f7f2f2) as the primary page background color to establish the system's light theme.
- Utilize Ink Black (#000000) for primary text and significant borders, ensuring strong legibility and definition.
- Employ Storm Gray (#0d1117) for secondary text and subtle navigational elements to create visual hierarchy.
- Implement the 2px inset Canvas Bloom (#f7f2f2) box-shadow for cards that require a soft, elevated look.
- Maintain a clear visual hierarchy by limiting saturated colors to accent cards or embedded imagery, keeping most UI achromatic.
- Ensure headings use Moranga Bold weight 400 with tight letter-spacing to convey authority through restraint.

### Don'ts

- Do not introduce sharp corners or small radii; the system relies on generous rounding (18px, 32px, 50px).
- Avoid using strong, saturated colors for primary UI elements like buttons or backgrounds, as they would clash with the understated palette.
- Do not deviate from the specified font families; '-apple-system' or 'Arial' are fallback systems, but 'Moranga Bold' and 'Silka' are brand-defining.
- Never use hard shadows or aggressive elevation effects; the design's lightness comes from subtle inset shadows and flat surfaces.
- Do not introduce complex gradients for functional UI elements; gradients are reserved for brand elements like the logo.
- Avoid overly dense layouts or small element gaps, as the design prioritizes comfortable spacing and clear separation.
- Do not use dark backgrounds for main content areas; the theme is predominantly light and airy.

### Imagery

Imagery primarily consists of contained, full-bleed product screenshots or abstract graphics within cards, often featuring pastel color palettes. Some hero images feature 3D-like emoji characters or flat illustrations. Photography is minimal, appearing within product context. Icons are typically filled and monochromatic (Ink Black or white), with a consistent stroke weight where outlined. The density is moderate, with images serving both decorative and explanatory roles within the card grid.

---
version: alpha
name: Graf Lantz
description: Graf Lantz embodies a clean, material-focused aesthetic with a high-contrast monochromatic palette grounded in deep grays and precise typography. Surfaces are predominantly white, providing a crisp canvas for content, while subtle off-white tones introduce minimal depth. A single, vivid violet accent is reserved for primary interactive elements, providing a focused point of action against the otherwise subdued interface. Components are lightweight with strong outlines and sharp corners generally, though some interactive elements feature a playful, overtly rounded form.
colors:
  canvas-white: "#ffffff"
  text-black: "#212121"
  graphite-text: "#474747"
  subtle-gray: "#eeeeee"
  deepest-gray: "#000000"
  muted-silver: "#7b7b7b"
  violet-action: "#574cd5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1
spacing:
  buttonRadius: 0px
  elementGap: 15px
  sectionGap: 50px
components:
  primary-action-button:
    role: Main interactive button
  search-input-field:
    role: User input for search queries
  secondary-ghost-button:
    role: Secondary action or navigational button
  header-navigation-link:
    role: Top-level navigation items
  pill-button:
    role: Small, high-contrast action or tag.
---

## Overview

**North Star:** White canvas, sharp monochrome details.

Graf Lantz embodies a clean, material-focused aesthetic with a high-contrast monochromatic palette grounded in deep grays and precise typography. Surfaces are predominantly white, providing a crisp canvas for content, while subtle off-white tones introduce minimal depth. A single, vivid violet accent is reserved for primary interactive elements, providing a focused point of action against the otherwise subdued interface. Components are lightweight with strong outlines and sharp corners generally, though some interactive elements feature a playful, overtly rounded form.

### Do's

- Use 'Canvas White' (#ffffff) as the default background for all primary page sections and elevated component surfaces.
- Apply 'Graphite Text' (#474747) for most body text, links, and form field content to ensure consistent readability.
- Reserve 'Violet Action' (#574cd5) exclusively for primary interactive elements, such as filled call-to-action buttons, to maintain its impact.
- Form input fields should utilize 'Subtle Gray' (#eeeeee) backgrounds and maintain a 0px border radius for a sharp, neutral appearance.
- Headlines should primarily use Instrument Sans font with variable weights and sizes (e.g., 32px), with careful attention to line height 1.2 to 1.0.
- Maintain a default padding of 15px for cards and primary element spacing, with sections separated by 50px of vertical space.
- Employ a 0px border radius for most container elements and buttons to preserve the sharp, modern aesthetic, except for specific pill-shaped elements that use 50px.

### Don'ts

- Do not introduce new vibrant colors outside of 'Violet Action' (#574cd5) for interactive elements; color should remain predominantly monochromatic.
- Avoid arbitrary uses of 'Deepest Gray' (#000000) for text; reserve it for structural borders or specific high-contrast icon details.
- Do not vary border radius extensively; stick to 0px for most elements and 50px for specific pill-like shapes.
- Refrain from using lightweight fonts for primary headings. Instrument Sans at weights 400 or 500 should be used for clarity.
- Do not apply shadows or heavy elevation styles; the system relies on flat surfaces and high color contrast for hierarchy.
- Avoid using multiple font families for body text; NeueHaasUnicaW1G should be the standard for general content.
- Do not deviate from the established spacing units of 4px increments, particularly for element gaps (15px) and section gaps (50px).

### Layout

The page structure favors a max-width contained layout, likely centered, rather than full-bleed. The hero section is characterized by a prominent visual (like a background image with text overlay) and a focused call to action. Section rhythm appears to be consistent with ample vertical spacing. Content arrangement frequently uses stacked elements with clear headings and accompanying text. Navigation is a simple top bar with text links, likely sticky or prominent. The density is on the comfortable side, prioritizing readability and visual breathing room over information packing.

### Imagery

This system primarily uses product photography, often close-cropped to showcase material texture and detail. Imagery is presented within contained sections, with a tendency toward raw edges over masking. The photography appears brightly lit, focusing on the product itself with minimal background context. Icons are minimal, likely outlined, and contribute to the functional UI rather than serving as decorative elements. The overall density of imagery is balanced, with imagery serving both explanatory and atmospheric roles, breaking up text-dominant sections.

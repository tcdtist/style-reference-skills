---
version: alpha
name: Microsoft
description: The Microsoft design system exudes a balanced composition, pairing clear-cut information presentation with a foundational blue accent. It leverages a strong neutral palette dominated by white and deep grays, providing high contrast and visual clarity. The consistent use of 2px radius on interactive elements like buttons subtly softens the otherwise sharp edges dictated by the 0px default. Bold imagery and product showcases are integrated seamlessly, often against a vibrant brand blue that contrasts with the clean, primarily white UI.
colors:
  ocean-blue: "#0067b8"
  charcoal-black: "#000000"
  graphite-gray: "#616161"
  cloud-white: "#ffffff"
  fog-gray: "#f2f2f2"
  dark-slate: "#262626"
  deep-ash: "#171717"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
  heading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 37px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 2px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-action-button:
    role: Filled button
  ghost-border-button:
    role: Outlined button
  subtle-link-button:
    role: Text link styled as button
  circular-icon-button:
    role: Icon button
  feature-card:
    role: Information display card
  transparent-content-card:
    role: Image/text container without explicit background
  navigation-link:
    role: Main navigation item
---

## Overview

**North Star:** Crisp White Blueprint

The Microsoft design system exudes a balanced composition, pairing clear-cut information presentation with a foundational blue accent. It leverages a strong neutral palette dominated by white and deep grays, providing high contrast and visual clarity. The consistent use of 2px radius on interactive elements like buttons subtly softens the otherwise sharp edges dictated by the 0px default. Bold imagery and product showcases are integrated seamlessly, often against a vibrant brand blue that contrasts with the clean, primarily white UI.

### Do's

- Prioritize Ocean Blue (#0067b8) for primary calls to action and interactive elements to maintain brand consistency.
- Use Charcoal Black (#000000) for all main headings and body text to ensure maximum readability and contrast.
- Apply Cloud White (#ffffff) as the default background for content cards and elevated surfaces.
- Employ Fog Gray (#f2f2f2) for subtle background differentiation between page sections.
- Maintain a 2px border radius for all interactive buttons to introduce a subtle softness to actions.
- Always use Segoe UI with a 400 or 600 weight for all typographic elements.
- Apply 48px padding around content within Feature Cards to create a spacious internal layout.

### Don'ts

- Avoid using background colors other than Cloud White (#ffffff) or Fog Gray (#f2f2f2) for primary content areas.
- Do not introduce sharp corners on primary action buttons; always use the specified 2px border radius.
- Refrain from using heavily saturated colors outside of the defined brand blue (#0067b8) for UI elements.
- Do not deviate from Segoe UI for text; avoid decorative or script fonts.
- Avoid using box shadows on elements other than Feature Cards.
- Do not use generic gray values; stick to the defined neutral palette (Charcoal Black, Graphite Gray, Dark Slate, Deep Ash).
- Do not apply padding or margins inconsistent with the 8px base unit system.

### Layout

The page primarily utilizes a max-width contained layout, centering content within a defined horizontal space, though hero sections can span full-bleed. The hero pattern features a split layout with text on a neutral background to the left and a prominent product image on a branded gradient background to the right. Sections alternate between Fog Gray (#f2f2f2) and Cloud White (#ffffff) backgrounds, creating a clear vertical rhythm. Content is generally arranged in two-column layouts or multi-column grids (3-column, sometimes 4-column) for features and product showcasing. Navigation is a persistent top bar with clear links and utility icons.

### Imagery

The site primarily uses high-quality product photography, often displayed against clean white or abstract gradient backgrounds. These images are typically contained within rectangular frames, without rounded corners or overlapping elements. Beyond product shots, illustrations are colorful and often abstract, emphasizing dynamism and digital concepts. Icons are typically monochrome (Charcoal Black or Graphite Gray) and outlined. Imagery serves both to showcase products and to provide decorative atmosphere, with a balanced density relative to text content.

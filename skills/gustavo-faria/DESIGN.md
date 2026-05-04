---
version: alpha
name: GUSTAVO Faria ©
description: Gustavo Faria's portfolio website presents an austere, high-contrast, text-dominant canvas. Information is structured rigidly with subtle typographic variations to create hierarchy rather than color or extensive spacing. The design emphasizes content clarity and directness through a near-monochromatic palette and a compact layout, punctuated by a single, striking personal image that challenges the otherwise stark presentation.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  graphite: "#282828"
  pale-ash: "#dcdcdc"
  blush-tone: "#efc4b2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.17
    letterSpacing: -0.047px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 125px
    lineHeight: 1.02
  display:
    fontFamily: "system-ui"
    fontSize: 142px
    lineHeight: 0.81
    letterSpacing: -0.047px
spacing:
  elementGap: 1px
components:
  work-entry-link:
    role: Interactive list item
  navigation-link:
    role: Top-level navigation
  year-range-display:
    role: Large decorative heading
---

## Overview

**North Star:** Minimalist gallery wall

Gustavo Faria's portfolio website presents an austere, high-contrast, text-dominant canvas. Information is structured rigidly with subtle typographic variations to create hierarchy rather than color or extensive spacing. The design emphasizes content clarity and directness through a near-monochromatic palette and a compact layout, punctuated by a single, striking personal image that challenges the otherwise stark presentation.

### Do's

- Prioritize text as the primary vehicle for information and hierarchy, using color only for stark contrast or subtle guidance.
- Maintain a monochromatic palette with Canvas White backgrounds, Ink Black for primary text, and Graphite or Pale Ash for secondary details.
- Use custom_21879 (or suitable substitute) for all interactive text and primary headings, embracing its tight letter-spacing for visual impact.
- Apply 0px border-radius to all elements to reinforce a sharp, unyielding aesthetic.
- Ensure horizontal lines or borders are 1px thick and use Pale Ash for subtle visual separation between list items or sections.
- Keep spacing between elements minimal, often 1px, to create a compact and dense information display.

### Don'ts

- Avoid colorful or decorative elements outside of explicit imagery; the interface should remain stark and functional.
- Do not introduce soft shadows or gradients, as the system relies on flat surfaces and hard edges.
- Do not use multiple font families for body text or navigation; stick to the defined typographic system.
- Refrain from generous padding or excessive white space between repeating elements to maintain the compact presentation.
- Do not use bold weights indiscriminately; reserve weight 700 for specific high-emphasis elements identified in `custom_21879` roles.

### Layout

The page adheres to a predominantly full-bleed model, with a centered content block for the bio and navigation. The hero section features a large, horizontally dominant year range (2019-2025) at the top right, contrasting with the bio on the left. Content is primarily organized into two main columns: a left column for bio text (and a personal image) and a right column for the 'Work Selection' list. The work list items are presented in a compact, vertically stacked format, separated by 1px Pale Ash lines. There is no explicit max-width constraint; content adapts to the viewport. A sticky top navigation containing 'Gustavo Faria', 'Info', and 'Instagram' seems present.

### Imagery

The site primarily uses idiosyncratic, distorted photography of faces, specifically a self-portrait, contained within irregular, organic cutouts. These images are not product showcases but serve as a strong personal brand statement, directly contrasting the minimalist UI. They operate decoratively and as a focal point, occupying a significant visual area and bringing an element of surrealism to the otherwise structured page. Icons are absent, and UI elements are purely textual or geometric.

---
version: alpha
name: B—Line
description: B—Line's visual system evokes a gallery of industrial design: a pristine white canvas showcases product photography and minimal UI elements. Black typography provides high contrast and a grounding presence. The density is compact, making efficient use of space to present a catalog of items with subtle interactive cues and minimal ornamentation. The entire aesthetic is about the product being the star, supported by an understated display system.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  muted-stone: "#595959"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 4px
  elementGap: 5px
  sectionGap: 40px
components:
  primary-ghost-button:
    role: Action button with minimal styling.
  product-display-card:
    role: Container for product imagery and titles in a grid layout.
  navigation-link:
    role: Interactive text links in header and footer.
  text-input-minimal:
    role: Basic text input field.
---

## Overview

**North Star:** Gallery Grid Aesthetics

B—Line's visual system evokes a gallery of industrial design: a pristine white canvas showcases product photography and minimal UI elements. Black typography provides high contrast and a grounding presence. The density is compact, making efficient use of space to present a catalog of items with subtle interactive cues and minimal ornamentation. The entire aesthetic is about the product being the star, supported by an understated display system.

### Do's

- Prioritize Canvas White (#ffffff) for all large background and surface areas, creating a clean, almost exhibition-like feel.
- Use Ink Black (#000000) for all primary text, headings, and crucial interactive elements to ensure maximum contrast and legibility.
- Employ HELVMONO font at weight 400 for all UI text, reinforcing the precise, industrial aesthetic of the brand.
- Maintain a compact density, using 5px as the default elementGap and 4px for cardPadding to maximize product visibility.
- Utilize a 0px border-radius for all cards and product containers to maintain a sharp, photographic presentation.
- When borders are present, use 1px solid Ink Black (#000000) for a crisp, defined line.
- Apply Vivid Orange (#e73b1d) sparingly for decorative accents or secondary highlights, never for primary interactive elements.

### Don'ts

- Avoid using multiple font families or excessive font weights; stick to HELVMONO 400 and helvetica-bold 400 for consistency.
- Do not introduce complex shadows or gradients; rely on flat surfaces, high contrast, and photographic content for visual interest.
- Refrain from using heavily saturated colors for backgrounds or large UI areas; the canvas should remain neutral.
- Do not deviate from the compact spacing values; avoid expansive padding or large element gaps that would reduce content density.
- Avoid decorative iconography; the visual system is focused on product display and simple typographic elements.
- Do not use heavily rounded corners on cards or major content blocks; maintain a sharp, almost technical edge (0px radius).
- Avoid custom button styles beyond ghost or outlined; do not introduce filled buttons with accent colors as primary actions.

### Layout

The page primarily uses a max-width contained layout section, though the header elements touch the viewport edges. The hero section is minimal, with a large brand mark and a compact horizontal navigation. The main content area features a distinct grid pattern for product display, with 4 columns of cards repeated vertically. Each product card is a visual square with the product name below it. Sections flow seamlessly without distinct visual dividers, maintaining consistent vertical spacing. The overall impression is a dense, responsive grid layout that prioritizes product visibility.

### Imagery

The visual language is dominated by high-quality product photography. Products are presented as isolated objects against a neutral gray background, often with subtle lighting that highlights their form and texture. There are no lifestyle shots or human elements, focusing entirely on the design of the objects themselves. Imagery is the primary content, with UI elements acting as a frame around these product showcased items. Icons are minimal, likely single-color outlines or filled monochromes for navigation.

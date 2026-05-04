---
version: alpha
name: Designer Fashion
description: Selfridges presents a classic e-commerce aesthetic with a foundation of stark white surfaces and unapologetic black typography. A single, vibrant yellow accent color acts as a high-contrast call to action, drawing immediate attention. The design prioritizes clear information hierarchy through careful use of neutral shades for borders and secondary text, paired with crisp, unrounded edges across most interactive elements to convey directness.
colors:
  selfridges-yellow: "#ffe255"
  raisin-black: "#212121"
  true-black: "#000000"
  canvas-white: "#ffffff"
  whisper-gray: "#f6f6f6"
  porcelain-gray: "#eaeaea"
  input-border-gray: "#767676"
  stone-gray: "#545454"
  light-pearl: "#efefef"
  muted-silver: "#b7b7b7"
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 24px
components:
  selfridges-primary-button:
    role: Call to action
  navigation-link-button:
    role: Navigation button
  ghost-secondary-button:
    role: Secondary action
  shop-service-button:
    role: Shopping service action
  default-input-field:
    role: User input
---

## Overview

**North Star:** High-contrast retail catalog.

Selfridges presents a classic e-commerce aesthetic with a foundation of stark white surfaces and unapologetic black typography. A single, vibrant yellow accent color acts as a high-contrast call to action, drawing immediate attention. The design prioritizes clear information hierarchy through careful use of neutral shades for borders and secondary text, paired with crisp, unrounded edges across most interactive elements to convey directness.

### Do's

- Prioritize Canvas White (#ffffff) as the dominant background color for content areas.
- Use Selfridges Yellow (#ffe255) exclusively for primary action backgrounds and high-attention graphical elements, never for text or borders unless it's for an active button state.
- Ensure all primary text uses Raisin Black (#212121) for maximum readability and contrast.
- Apply a 0px border-radius to all buttons and input fields to maintain a sharp, angular aesthetic, reserving 4px for specific non-interactive elements.
- Maintain generous section gaps of 24px to create distinct content blocks and avoid visual clutter.
- Use Porcelain Gray (#eaeaea) or Light Pearl (#efefef) for subtle button backgrounds only, not for large surface areas.
- Utilize Input Border Gray (#767676) for all input field borders and secondary text where less emphasis is needed.

### Don'ts

- Do not introduce additional chromatic accent colors beyond Selfridges Yellow (#ffe255).
- Avoid softened edges with large border radii; the design relies on square and rectangular forms.
- Do not use dark backgrounds for main content sections; the system is built on a light theme with minimal dark elements.
- Refrain from using Raisin Black (#212121) or True Black (#000000) as background colors for large sections or cards.
- Do not use subtle gradients or shadows; the aesthetic is flat and direct and relies on color and line for definition.
- Avoid compacting elements with less than 8px of element gap; space is used to ensure clarity.
- Do not override the default Arial font; consistency across all text is key.

### Layout

The site employs a primarily contained fixed-width layout within a maximum width section, centered on the page. The hero features a large, often full-width photograph with overlaid text and a clear call-to-action on the left. Content sections flow vertically with a consistent 24px section gap, transitioning between full-width imagery and more structured grid-based content like product carousels or feature blocks. Navigation is a persistent top bar, with elements arranged in a classic retail pattern: logo top-left, search bar central, and utility icons/services top-right. Grid usage includes multi-column layouts for product listings and feature showcases.

### Imagery

The site uses a mix of high-fashion photography and styled product shots. Photography is typically full-bleed or large-scale, often featuring models in editorial poses, with a clean white or light background when showing products directly. Images are untrimmed, using sharp edges to integrate seamlessly into content blocks. There is a strong emphasis on showcasing products and lifestyle, with imagery playing a key role in visual storytelling and product presentation.

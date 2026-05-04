---
version: alpha
name: Bastien Allard
description: Bastien Allard's design system creates a 'digital canvas' aesthetic: a stark white background accented by deep black typography and subtle greys, evoking the precision of architectural blueprints. The dominant characteristic is a compact, dense arrangement of content, with an emphasis on strong typographic forms. UI elements are rendered with fine borders rather than heavy fills, giving an airy yet structured feel. The visual language prioritizes information density and clarity through a high-contrast monochrome palette, with subtle hints of interaction through border changes, suggesting a lean, content-focused experience.
colors:
  canvas-white: "#ffffff"
  midnight-graphite: "#000000"
  storm-gray: "#333333"
  silver-haze: "#e5e5e5"
  ocean-blue: "#0064e1"
spacing:
  elementGap: 13px
  sectionGap: 64px
components:
  text-link:
    role: Interactive text link, border changes on hover/focus.
  project-card-implicit:
    role: Container for individual project previews.
  header-navigation-item:
    role: Top-level navigation link.
---

## Overview

**North Star:** Architectural Blueprint Canvas

Bastien Allard's design system creates a 'digital canvas' aesthetic: a stark white background accented by deep black typography and subtle greys, evoking the precision of architectural blueprints. The dominant characteristic is a compact, dense arrangement of content, with an emphasis on strong typographic forms. UI elements are rendered with fine borders rather than heavy fills, giving an airy yet structured feel. The visual language prioritizes information density and clarity through a high-contrast monochrome palette, with subtle hints of interaction through border changes, suggesting a lean, content-focused experience.

### Do's

- Prioritize high contrast between text and background: use Midnight Graphite (#000000) or Storm Gray (#333333) on Canvas White (#ffffff).
- Maintain a compact information density across layouts, minimizing excessive whitespace between content blocks.
- Use subtle border treatments for interactive elements: 1px solid borders in Silver Haze (#e5e5e5) or Storm Gray (#333333) for states and definitions.
- Apply Diatype Variable (or Inter) at 16px for all primary body text, ensuring consistent weight 540.
- Keep all corners sharp with a 0px border-radius, reflecting a precise, structured aesthetic.
- Use Midnight Graphite (#000000) for all prominent headings and labels to establish visual hierarchy.
- Ensure all text links are styled with Strom Gray (#333333) and hint interaction through border-bottom changes, not color changes.

### Don'ts

- Avoid using saturated colors for backgrounds or large areas; maintain an achromatic base palette.
- Do not introduce soft shadows or excessive elevation – rely on borders and negative space for component separation.
- Do not use rounded corners on any UI elements; maintain a strict 0px border-radius.
- Avoid large, widely spaced content blocks; maintain a dense, information-rich visual experience.
- Do not use multiple font families for body text; stick to Diatype Variable (Inter) for primary text.
- Do not introduce heavy gradient overlays or background images that detract from content clarity.
- Avoid large-scale photography or illustrations that aren't tightly integrated into a structured grid or content block.

### Layout

The page exhibits a clean, contained layout, centered on the screen with implied maximum width constraints. The hero section features a stark header with minimal information – name, title, and current time. Content below organizes into a grid-like structure for showcasing projects, often with distinct visual blocks for text alongside imagery. Sections appear to have consistent vertical spacing, creating an organized, deliberate rhythm. The overall arrangement feels symmetrical and balanced for readability, leaning towards a text-left/image-right or centered stack compositional approach for feature presentation. Navigation is limited to a minimal top header.

### Imagery

This site uses a combination of high-contrast, minimalist product/case study photography and dark, atmospheric abstract imagery. Photography is typically tightly cropped or contained within specific UI elements, often against dark backgrounds that contrast with the overall light theme. The abstract images, like the sunset scene, convey a mood without being overly literal, often serving as background elements. Icons are implicit, likely using minimal, outlined styles if present, maintaining the overall clean aesthetic. Imagery plays a supportive role, providing visual interest and context without dominating the page, enhancing the text-dominant interface.

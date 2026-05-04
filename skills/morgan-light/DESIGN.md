---
version: alpha
name: Morgan Light
description: Morgan Light presents a minimal, high-contrast digital portfolio. The system is built on a stark monochrome palette, emphasizing content through a dense grid of product imagery contained within fine, light gray borders. Typography is direct and compact, serving as clear information labels against the pristine white canvas. Components are lightweight, using subtle borders to define interactive areas, ensuring the vivid product visuals remain the focal point.
colors:
  canvas-white: "#e5e7eb"
  ink-black: "#000000"
  subtle-gray: "#b5b5b5"
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 24px
components:
  navigation-link:
    role: Top-level navigation and filter links.
  image-grid-item:
    role: Container for portfolio imagery.
  filter-tag:
    role: Categorization tags for filtering portfolio items.
---

## Overview

**North Star:** Gallery on White Canvas

Morgan Light presents a minimal, high-contrast digital portfolio. The system is built on a stark monochrome palette, emphasizing content through a dense grid of product imagery contained within fine, light gray borders. Typography is direct and compact, serving as clear information labels against the pristine white canvas. Components are lightweight, using subtle borders to define interactive areas, ensuring the vivid product visuals remain the focal point.

### Do's

- Use Canvas White (#e5e7eb) as the pervasive background color for all surfaces and backgrounds.
- Employ Ink Black (#000000) exclusively for primary text, headlines, and interactive elements to maintain high contrast.
- Apply Subtle Gray (#b5b5b5) sparingly for secondary information like helper text or captions.
- Maintain a default padding of 24px for vertical spacing between content blocks and sections.
- Define interactive button and link areas with text color changes rather than background fills or heavy borders, adhering to the ghost-like aesthetic.
- Place all images edge-to-edge within their grid containers, with no internal padding or radius.
- Utilize Neue weight 400 for all text elements; avoid other weights unless explicitly defined.

### Don'ts

- Do not introduce saturated colors unless they are part of the image content itself.
- Avoid applying any border-radius to elements; maintain sharp, crisp edges for all components.
- Do not use elevation or shadows; the design relies on flat, high-contrast visual separation.
- Refrain from using varied font sizes or weights for hierarchy; rely on layout and content structure instead.
- Do not add decorative flourishes, icons, or complex graphical elements outside of the portfolio images.
- Avoid applying background fills to interactive components like buttons or tags; keep them text-based with implied interaction zones.
- Refrain from using horizontal dividers; rely on clear vertical spacing for content separation.

### Layout

The page uses a full-bleed, fluid layout with a dominant two-column grid for the portfolio items. There is no explicit maximum width, allowing content to stretch across the viewport. The hero consists of a simple centered text block over the page background. Section rhythm is driven by the consistent grid of images with minimal vertical spacing (24px row-gap, 24px column-gap), creating a dense, gallery-like feel. Navigation is a minimal, always-present top bar with compact text links. Content is arranged in an almost uniform grid, with slight variations in image size and aspect ratio.

### Imagery

The site is image-heavy, primarily showcasing diverse product photography and custom branding illustrations. Images are presented as contained, full-bleed within their grid cells, featuring square or rectangular raw edges without masking or rounding. Photography styles vary greatly as they are client projects, but they are consistently high-quality, often with vibrant coloration or striking compositions. Illustrations tend to be brand-specific and diverse. Graphics serve as direct product showcases and visual evidence of design work, dominating the visual space relative to text, which is purely explanatory.

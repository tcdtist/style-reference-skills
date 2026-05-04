---
version: alpha
name: Sébastien El Idrissi
description: This design system presents content with deliberate minimalism, using strong achromatic contrast and ample negative space to spotlight product visuals. Typography anchors the identity with a single serif font used across all content, creating a consistent, editorial feel. The dark, spacious layout emphasizes raw object forms, while a subtle border style offers a tactile texture to interactive elements.
colors:
  midnight-matte: "#000000"
  canvas-white: "#ffffff"
  charcoal-surface: "#1c1c1c"
  fine-stone: "#808080"
  pebble-gray: "#cccccc"
spacing:
  elementGap: 12px
  sectionGap: 72px
components:
  ghost-button:
    role: Action button with minimal visual footprint.
  minimal-input-field:
    role: Form input field.
  product-thumbnail:
    role: Display individual product or work items visually.
  page-header:
    role: Brand identity and navigation.
---

## Overview

**North Star:** Gallery of Quiet Objects

This design system presents content with deliberate minimalism, using strong achromatic contrast and ample negative space to spotlight product visuals. Typography anchors the identity with a single serif font used across all content, creating a consistent, editorial feel. The dark, spacious layout emphasizes raw object forms, while a subtle border style offers a tactile texture to interactive elements.

### Do's

- Use 'Midnight Matte' (#000000) for all primary text and important borders to maintain high contrast.
- Apply 'Toto' font (or 'Playfair Display' as substitute) consistently for all text elements, maintaining weight 400 and tabular figures.
- Implement a '0px' border-radius for all interactive elements and containers, promoting sharp, defined edges.
- Employ `sectionGap` of 72px for generous vertical spacing between major content blocks.
- Ensure interactive elements like buttons and inputs use 12px vertical padding as a minimum.
- Maintain a spacious density with a base unit of 6px for all spacing decisions.
- Use 'Charcoal Surface' (#1c1c1c) as the primary background for content presentation.

### Don'ts

- Avoid using highly saturated, chromatic colors; the palette is strictly achromatic to maintain focus on content.
- Do not introduce additional font families or weights beyond Toto 400.
- Prevent any rounded corners; elements should always have sharp, 0px border-radius edges.
- Do not constrain page content with a `pageMaxWidth`; allow content to span the full viewport.
- Avoid decorative gradients; rely on stark color blocks and subtle shadows for visual interest.
- Do not introduce complex shadow styles; keep shadows minimal and subtle to suggest depth without visual clutter.
- Refrain from using small, tight line heights; maintain generous line spacing for legibility, especially for body text (1.33).

### Layout

The page primarily uses a full-bleed layout, particularly for hero sections, which feature large product images or statements with centered text. Content sections typically utilize a contained grid for product listings, often a 3-column arrangement, within the dominant 'Charcoal Surface' background. The section rhythm is consistent with vertical separation provided by `72px` `sectionGap`. Layouts are often single-column or symmetrical multi-column stacks, emphasizing individual items rather than complex arrangements. Navigation is minimal, consisting of a sticky top header with the brand name.

### Imagery

The site primarily uses product photography, often showcasing single objects or small arrangements against a stark, desaturated background or a textured concrete wall, highlighting material and form. These are contained within their own blocks or function as full-bleed hero banners, without overlapping. The treatment is focused, with tight crops and minimal contextual information, making the object the central focus. Illustrations or complex graphic elements are absent; the visual language relies purely on clean product representation and achromatic UI.

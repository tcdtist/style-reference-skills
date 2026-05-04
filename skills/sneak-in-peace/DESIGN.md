---
version: alpha
name: Sneak in Peace
description: Sneak in Peace presents a digital fashion platform characterized by a clean, contained UI overlaid on a dynamic background. Its aesthetic balances high-contrast text on bright surfaces with muted interactive elements and a singular vivid red accent for active states. Typography is compact and precise, maintaining a high information density while card-based layouts organize content with subtle elevation.
colors:
  midnight-graphite: "#3d3d3d"
  canvas-white: "#ffffff"
  deep-space: "#000000"
  concrete-gray: "#8d8d8d"
  pale-ash: "#f0eeed"
  wolf-gray: "#9e9e9e"
  silver-mist: "#b5b5b5"
  digital-violet: "#142161"
  action-crimson: "#ba2223"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
spacing:
  cardRadius: 6px
  buttonRadius: 6px
  elementGap: 6px
  sectionGap: 40px
components:
  live-indicator-button:
    role: Primary Call to Action
  ghost-schedule-button:
    role: Secondary Action
  navigation-link-button:
    role: Tertiary Navigation Link
  product-info-card-detailed:
    role: Content Display, Primary Information Card
  product-item-card-compact:
    role: List Item, Product Thumbnail
  search-input-field:
    role: User Input
  category-badge:
    role: Categorization Label
---

## Overview

**North Star:** Overlaid fashion showcase

Sneak in Peace presents a digital fashion platform characterized by a clean, contained UI overlaid on a dynamic background. Its aesthetic balances high-contrast text on bright surfaces with muted interactive elements and a singular vivid red accent for active states. Typography is compact and precise, maintaining a high information density while card-based layouts organize content with subtle elevation.

### Do's

- Prioritize 'Canvas White' (#ffffff) and 'Pale Ash' (#f0eeed) for distinct surface levels, reserving 'Canvas White' for primary content cards and 'Pale Ash' for secondary badges or backgrounds.
- Use 'Action Crimson' (#ba2223) exclusively for vital call-to-action buttons and live indicators to maintain its impact and visual hierarchy.
- Apply `borderRadius` of 6px for most interactive elements like cards, buttons, and inputs, but use 4px for smaller interactive elements like badges.
- Employ the `rgba(0, 0, 0, 0.08) 1px 1px 6px -1px` shadow for subtle elevation on primary content cards, avoiding heavy or multiple shadows.
- Maintain high information density with NTNeuss at small sizes and active `letterSpacing` for UI elements (0.036em-0.122em).
- Utilize 6px as the primary `elementGap` for tight vertical spacing between UI elements within a compact layout.
- Ensure 'Midnight Graphite' (#3d3d3d) is the default for most body and interactive text for maximum readability on light backgrounds.

### Don'ts

- Avoid introducing new saturated colors; adhere strictly to 'Action Crimson' (#ba2223) as the sole vibrant brand accent.
- Do not use heavy shadows or gradients; rely on subtle elevation and clean surface breaks for visual hierarchy.
- Refrain from drastically altering default letter spacing for RecklessNeue-Book; it is intended for fluid readability.
- Do not use border radii larger than 6px for typical UI components, except for specific decorative elements that require 26px.
- Avoid excessive padding on interactive elements; maintain the compact density seen across buttons and badges.
- Do not use dark backgrounds for primary content areas; the theme is predominantly light with overlaid elements.
- Do not introduce complex animations or transitions; stick to provided durations and `ease` timing for a moderate, efficient feel.

### Layout

The page exhibits a full-bleed background often featuring dynamic video or photography, over which a contained, right-aligned UI panel floats. The hero section is characterized by this overlaid panel structure. Content within the UI panel is arranged in a consistent vertical flow, featuring a main informational card followed by a scrollable list of compact product item cards. There is no strict grid for main content outside the panel, but product items within the list appear as uniform, vertically stacked elements. Navigation is minimal, consisting of a top-bar with text links and subtle indicators, while the main UI panel acts as a dynamic content display.

### Imagery

Imagery features tightly cropped product photography on neutral backgrounds, often with model hands interacting with items. Product focus is paramount, with little to no lifestyle context. Iconography is minimalist, likely outlined or solid, with a clean stroke weight, primarily monochrome and functional. Graphics are used sparingly, serving as decorative accents or navigational aids without overwhelming the UI. The overall density is image-heavy in product listings but balanced in informational sections.

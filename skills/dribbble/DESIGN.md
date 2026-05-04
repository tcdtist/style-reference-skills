---
version: alpha
name: Dribbble
description: Dribbble's aesthetic is an 'organized showcase' — a high-contrast, functionally transparent environment designed to highlight creative work without visual interference. Dominant achromatic tones in the background and foreground create a neutral canvas, allowing the showcased content to provide the primary visual interest. Subtle but consistent border radii unify interactive elements and content containers, creating a sense of approachable professionalism.
colors:
  stormy-night: "#0d0c22"
  anchor-black: "#060318"
  ghost-gray: "#6e6d7a"
  dribbble-pink: "#ea4c89"
  arctic-white: "#ffffff"
  canvas-light: "#f3f3f6"
  chrome-gray: "#9e9ea7"
  hint-frost: "#e2e8f2"
  deep-plum: "#3a3546"
  sapphire-glow: "#956bcd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.21
spacing:
  cardRadius: 8px
  buttonRadius: 10000px
  elementGap: 4px
  sectionGap: 40px
components:
  search-bar-with-popular-tags:
    role: 
  shot-card-with-designer-info:
    role: 
  category-filter-bar-with-new-badge-banner:
    role: 
  primary-navigation-link:
    role: Interactive element
  auth-button:
    role: Call to action
  category-filter-button:
    role: Filter/Tag
  search-input:
    role: Data entry
  filter-tag-text:
    role: Search refinement
  badge-new:
    role: Informational tag
  compact-nav-button:
    role: Navigation/Action
---

## Overview

**North Star:** Gallery Wall on White Linen — content as art, neutrally framed.

Dribbble's aesthetic is an 'organized showcase' — a high-contrast, functionally transparent environment designed to highlight creative work without visual interference. Dominant achromatic tones in the background and foreground create a neutral canvas, allowing the showcased content to provide the primary visual interest. Subtle but consistent border radii unify interactive elements and content containers, creating a sense of approachable professionalism.

### Do's

- Prioritize Mona Sans for all text elements to maintain a unified, modern aesthetic.
- Use Arctic White (#ffffff) as the primary page background and Canvas Light (#f3f3f6) for subtle section differentiation.
- Apply a 10000px border radius to all primary action buttons (e.g., 'Auth Button') to establish a consistent soft, approachable shape.
- Employ Stormy Night (#0d0c22) for main body text and Anchor Black (#060318) for headlines to ensure strong legibility against light backgrounds.
- Use Ghost Gray (#6e6d7a) for secondary text and disabled states to create hierarchy and reduce visual noise.
- Integrate Dribbble Pink (#ea4c89) sparingly for key accents like 'New' badges or interactive element highlights to draw attention.
- Ensure input fields have a 12px border radius and 24px left padding for consistency.

### Don'ts

- Do not introduce sharp corners on interactive elements; maintain the established border radii for buttons (10000px) and inputs (12px).
- Avoid using highly saturated colors for large background areas; stick to the neutral palette to ensure content remains the focus.
- Do not deviate from the Mona Sans typeface; no other font families should be introduced.
- Refrain from using strong drop shadows or complex gradients; the system relies on flat colors and subtle borders for depth.
- Do not use white text on white backgrounds or similar low-contrast combinations; maintain WCAG AAA contrast ratio where possible (e.g. Stormy Night on Arctic White).
- Avoid excessive use of Dribbble Pink (#ea4c89); it should be reserved for specific branding or high-priority calls to action.
- Do not use inconsistent padding values around elements; adhere to the 4px base unit and established token values for internal spacing.

### Layout

The page model is a max-width contained layout, likely around 1200px, symmetrically centered. The hero section is a split layout with a prominent headline on the left and a large product screenshot/showcase on the right. Section rhythm is primarily consistent vertical spacing with subtle background color variations (Arctic White and Canvas Light). Content is often arranged in 2-column or 3-column grids, particularly for showcasing design 'shots'. The layout is spacious with clear visual separation between blocks of content. Navigation is a sticky top bar.

### Imagery

Photography and product screenshots are the primary visual assets, showcasing digital designs. They are typically contained within rectangular frames, with sharp edges, and often presented in grids or prominent hero sections. The imagery itself provides the color and vibrant energy against the neutral UI backdrop, serving a functional role as product showcase and inspiration. Iconography is minimalist, outlined, and monochromatic, often using Stormy Night (#0d0c22) or Ghost Gray (#6e6d7a).

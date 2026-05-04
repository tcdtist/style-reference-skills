---
version: alpha
name: Nike.com
description: Nike.com evokes a sharp, performance-driven aesthetic, grounded in a highly contrasting black-and-white palette. The dominant use of stark black typography against pristine white surfaces creates an immediate sense of clarity and authority, amplified by a compact spacing system that keeps elements close-knit. Key elements like primary buttons and navigation items feature generous 30px radii, introducing a subtle softness that contrasts with the otherwise angular, direct visual language, hinting at the athletic curves of their products.
colors:
  pitch-black: "#111111"
  cloud-white: "#ffffff"
  alloy-gray: "#e5e5e5"
  feather-gray: "#f5f5f5"
  steel-gray: "#707072"
  pewter-gray: "#9e9ea0"
  ignite-red: "#EE0005"
  blaze-orange: "#FF5000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.75
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.75
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 30px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Call to Action
  ghost-button:
    role: Secondary Action
  circular-icon-button:
    role: Navigation/Utility
  feature-card:
    role: Content Display
  product-tile:
    role: Product Listing
---

## Overview

**North Star:** High-contrast arena with athletic curves.

Nike.com evokes a sharp, performance-driven aesthetic, grounded in a highly contrasting black-and-white palette. The dominant use of stark black typography against pristine white surfaces creates an immediate sense of clarity and authority, amplified by a compact spacing system that keeps elements close-knit. Key elements like primary buttons and navigation items feature generous 30px radii, introducing a subtle softness that contrasts with the otherwise angular, direct visual language, hinting at the athletic curves of their products.

### Do's

- Use Pitch Black (#111111) for all primary text, headings, and outlines to maintain high contrast and sophistication.
- Apply Cloud White (#ffffff) as the primary background for all page sections and card surfaces, ensuring visual spaciousness.
- Ensure primary action buttons feature 30px border-radius with 6px vertical and 16px horizontal padding.
- Implement a compact spacing system using 8px as the primary `elementGap` between UI elements.
- Utilize Nike Futura ND (or Arial as substitute) at 76px size and 1.0 lineHeight for all hero headlines to convey brand power.
- Divide content using subtle background shifts to Alloy Gray (#e5e5e5) for secondary sections instead of heavy borders or shadows.

### Don'ts

- Avoid using drop shadows or heavy box shadows, as the system relies on background color shifts and borders for depth.
- Do not deviate from the monochrome palette for functional UI elements; save branded colors for marketing accents only.
- Do not use generic system fonts when custom fonts like Helvetica Now Text/Display or Nike Futura ND are specified, as they are crucial for brand identity.
- Disregard the 30px radius for buttons and nav items except for specific utility components like circular buttons.
- Do not introduce large gaps or excessive padding; the design favors a compact, information-dense layout.
- Avoid using multiple bright, saturated colors for primary UI elements; reserve these for specific brand highlights or imagery if necessary.

### Layout

The layout primarily uses a max-width contained grid for most content, though the hero section often leverages full-bleed imagery. The header is sticky and provides a minimal but clear global navigation. Sections alternate between prominent full-width visual statements (like the hero shoe image) and structured content blocks. Content arrangement frequently uses two-column or four-column card grids for features and product listings. Vertical spacing between logical sections appears consistent, creating a rhythmic flow down the page. The overall density is compact, ensuring visual information is readily available without excessive scrolling.

### Imagery

The visual language is characterized by high-quality product photography, often shot with dramatic lighting against dark, sometimes black, backgrounds for hero sections, and on pristine white or simple colored backgrounds for product listings. When not product-focused, imagery features crisp action shots of athletes. Images are typically contained within rectangular frames with sharp edges or within grid structures, with no noticeable masking or complex overlapping. Icons are monochrome, often Pitch Black (#111111) on white, thin-stroked, and functional.

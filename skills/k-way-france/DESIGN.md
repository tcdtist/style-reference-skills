---
version: alpha
name: K-Way France
description: K-Way France uses a utilitarian-modern approach with a high-contrast monochromatic base accented by vibrant, purposeful blues. The design prioritizes clear information hierarchy and legibility, suitable for e-commerce. Components are lightweight and functional, with minimal decorative flourishes, emphasizing clean lines and direct interaction. The overall feel is restrained yet energetic, reflecting the brand's sporty heritage.
colors:
  midnight-blue: "#133977"
  ocean-teal: "#01607c"
  pitch-black: "#000000"
  white-canvas: "#ffffff"
  pale-ash: "#e8e8e1"
  soft-black: "#0f0f0f"
  charcoal-grey: "#1c1d1d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 41px
    lineHeight: 1.1
    letterSpacing: 0.019px
spacing:
  buttonRadius: 4px
  elementGap: 10px
  sectionGap: 75px
components:
  announcement-bar:
    role: Top banner for critical information
  ghost-navigation-button:
    role: Primary navigation links and interactive text
  outlined-call-to-action-button:
    role: Emphasized interactive elements, usually for actions
  basic-input-field:
    role: Standard text input for forms
  product-card:
    role: Display individual product items in a grid layout
---

## Overview

**North Star:** Alpine utility, pure fabric

K-Way France uses a utilitarian-modern approach with a high-contrast monochromatic base accented by vibrant, purposeful blues. The design prioritizes clear information hierarchy and legibility, suitable for e-commerce. Components are lightweight and functional, with minimal decorative flourishes, emphasizing clean lines and direct interaction. The overall feel is restrained yet energetic, reflecting the brand's sporty heritage.

### Do's

- Use Pitch Black (#000000) for all primary text content including headings, body, and navigation items to maintain high contrast and legibility.
- Apply White Canvas (#ffffff) sparingly for backgrounds of content areas and cards, ensuring a clean and bright stage for product imagery.
- Employ Pale Ash (#e8e8e1) as the default page background and for subtle dividers to create a soft, non-intrusive backdrop.
- Reserve Ocean Teal (#01607c) strictly for outlined interactive elements and their corresponding text, to clearly identify actions without overwhelming the design with color.
- Maintain a clear visual hierarchy by differentiating text with Helvetica weights: 700 for main headings, 500 for subheadings and navigation, and 400 for body text.
- Use a border-radius of 4px for all button-like elements and icons to maintain a very subtle softness within the otherwise angular design.
- Ensure generous internal padding within components, particularly cards (45px), to provide adequate breathing room and emphasize product photography.

### Don'ts

- Do not use highly saturated colors for large background areas or extensive text blocks; limit such colors to functional accents.
- Avoid applying excessive box-shadows or gradients; the design relies on flat planes and crisp borders for visual depth.
- Do not introduce additional font families; maintain a consistent look with Helvetica and its specified weights.
- Refrain from drastically altering letter-spacing for body text; apply only predetermined values for headings and specific UI elements to preserve readability.
- Do not use radii larger than 4px on any component, as it would conflict with the system's slightly angular and functional aesthetic.
- Avoid dense packing of elements; maintain the established elementGap of 10px for consistent spacing between UI components.
- Do not use Midnight Blue (#133977) for interactive elements, as its primary role is for informational banners, not user actions.

### Layout

The page structure is a contained, centered layout, where content doesn't extend edge-to-edge except for the very top announcement bar and some hero sections. The hero section typically features a large full-width image or video, often with a dark overlay and prominent centered text. Sections maintain a consistent vertical rhythm, often delineated by distinct content blocks or subtle background color changes (e.g., Pale Ash vs White Canvas). Content is primarily arranged in two-column grids for text-plus-image layouts or multi-column card grids for product listings. The navigation is a sticky top bar with clearly spaced links and utility icons. Visual density is balanced, prioritizing clear grouping and breathing room rather than information-packed blocks.

### Imagery

Imagery on K-Way France is product-focused and clean. Product photography features items either in studio settings with stark white or soft grey backgrounds, or in context on models against blurred, natural environments. There are no abstract graphics or 3D renders. Photography serves to showcase the product directly, avoiding heavy lifestyle context. Iconic stroke icons are used for utility functions like search or account. Image density is moderate, acting as the primary visual content within a text-dominant layout, with many images contained within square or rectangular frames rather than being full-bleed.

---
version: alpha
name: Ysl
description: This design system projects a mood of stark, high-fashion minimalism through a monochromatic palette. Visual energy stems from deep photographic imagery rather than UI ornamentation. The rigid, unforgiving aesthetic is defined by zero border radius and a strict black-and-white color scheme, creating a canvas where product photography and brand typography command full attention. Subtle spacing maintains a sense of luxury without clutter, allowing each element to breathe within a visually demanding context.
colors:
  midnight-ink: "#000000"
  polar-white: "#ffffff"
  accent-blue: "#007aff"
spacing:
  elementGap: 4px
  sectionGap: 68px
components:
  product-card:
    role: 
  button-group:
    role: 
  campaign-caption-banner:
    role: 
  primary-navigation-link:
    role: Header and footer navigation elements.
  standard-button-default:
    role: Interactive elements, calls to action.
  standard-button-inverted:
    role: Primary calls to action on dark backgrounds.
  filled-primary-button:
    role: Key action buttons, such as 'Add to Cart' or 'Explore'.
  product-card:
    role: Displaying product listings.
  section-heading:
    role: Primary titles for content blocks.
---

## Overview

**North Star:** Black Tie Photography — a high-contrast canvas for arresting visuals.

This design system projects a mood of stark, high-fashion minimalism through a monochromatic palette. Visual energy stems from deep photographic imagery rather than UI ornamentation. The rigid, unforgiving aesthetic is defined by zero border radius and a strict black-and-white color scheme, creating a canvas where product photography and brand typography command full attention. Subtle spacing maintains a sense of luxury without clutter, allowing each element to breathe within a visually demanding context.

### Do's

- Maintain a monochromatic palette of `Midnight Ink` (#000000) and `Polar White` (#ffffff) for all core UI elements.
- Use 0px for all border radius values across buttons, cards, and interactive elements to preserve angularity.
- Prioritize full-bleed, dramatic photography as the primary visual interest, allowing UI elements to recede.
- Employ the SaintLaurent sans-serif font family at weight 400 for all text, varying size for hierarchy.
- Ensure generous spacing: `sectionGap` of 68px and standard `elementGap` of 4px between smaller components.
- Utilize transparent backgrounds for border-only buttons unless a primary, filled action is required (`Midnight Ink` background, `Polar White` text).

### Don'ts

- Avoid decorative shadows or complex gradients; rely on photography for depth perception.
- Do not introduce rounded corners on any UI elements; maintain sharp, crisp edges.
- Refrain from using any color other than `Accent Blue` (#007aff) for internal, non-brand specific UI signals.
- Do not use highly saturated colors for text or backgrounds; stick to the achromatic theme.
- Avoid dense UI layouts; allow ample white/black space around elements to convey luxury.
- Do not use multiple font families or weights outside of SaintLaurent sans-serif 400.

### Layout

The page primarily uses a full-bleed layout, where hero imagery extends to the edges of the viewport, particularly on the initial screen. Content sections often alternate between these dark, immersive visual blocks and more functional, information-dense areas. The overall structure favors a centered stacking of content, especially for headings and short descriptions overlaying images, with a clear vertical rhythm. Navigation is a minimalist top bar, split into left and right groups of text links, suggesting a clear brand hierarchy. Content arrangement within sections appears to be flexible, supporting large hero images, product grids (not explicitly visible but implied by e-commerce nature), and simple text blocks. Density is spacious, emphasizing individual elements and imagery rather than compact information.

### Imagery

The visual language is dominated by high-impact, editorial photography, often dark and moody, shot at night or in dramatically lit environments. Photography is typically full-bleed, immersive, and features models or products in a stylized, high-fashion context. Images serve a decorative and brand-building role, conveying atmosphere and aspiration rather than purely explanatory content. Product shots are embedded within these rich compositions, often featuring metallic or reflective elements that catch subtle light. There are no illustrations or abstract graphics; the focus is exclusively on realistic yet highly curated photography. Icons are minimal, represented by simple monochrome outlines (e.g., search, cart).

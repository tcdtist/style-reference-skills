---
version: alpha
name: entire studios
description: This system feels like a minimalist gallery space, emphasizing raw visual impact and an almost ascetic reduction of UI ornamentation. The stark monochromatic palette of deep black and pale slate, punctuated only by occasional bright white elements, directs focus entirely to the content. Type is exclusively monospaced, lending a technical, almost archival quality, while the complete absence of rounded corners or shadows reinforces a sharp, uncompromising aesthetic.
colors:
  midnight-ink: "#000000"
  pale-slate: "#e7ecea"
  arctic-white: "#ffffff"
spacing:
  elementGap: 6px
  sectionGap: 64px
components:
  announcement-banner:
    role: 
  ghost-navigation-button-group:
    role: 
  product-card-grid:
    role: 
  ghost-navigation-button:
    role: Interactive element (e.g. navigation, filters)
---

## Overview

**North Star:** Gallery White Box – stark, unadorned surfaces presenting content with minimalist precision.

This system feels like a minimalist gallery space, emphasizing raw visual impact and an almost ascetic reduction of UI ornamentation. The stark monochromatic palette of deep black and pale slate, punctuated only by occasional bright white elements, directs focus entirely to the content. Type is exclusively monospaced, lending a technical, almost archival quality, while the complete absence of rounded corners or shadows reinforces a sharp, uncompromising aesthetic.

### Do's

- Maintain a strictly monochromatic palette, primarily utilizing Midnight Ink (#000000), Pale Slate (#e7ecea), and Arctic White (#ffffff).
- Use 'Space Mono' exclusively for all typography at 12px or 16px with respective line heights.
- Apply 0px border-radius to all elements, maintaining sharp, clean edges.
- Utilize 6px as the base unit for horizontal padding and gaps between small inline elements.
- Prioritize text-based UI elements over graphical icons for navigation and actions.

### Don'ts

- Avoid using any colors outside the defined monochromatic palette for UI elements.
- Do not introduce any rounded corners or soft edges on buttons, cards, or other interactive components.
- Refrain from using drop shadows or complex elevation effects; depth is created through color contrast and plane changes.
- Do not deviate from 'Space Mono' as the sole typeface. No sans-serif or serif fonts.
- Avoid decorative imagery; content visuals should be functional product shots or abstract textural backgrounds.

### Layout

The page maintains a full-bleed structure without a fixed `pageMaxWidth` container, allowing imagery to extend edge-to-edge. The hero section features a centered, large headline over a full-viewport background image. Content sections appear to flow with consistent vertical spacing, creating an airy, gallery-like feel. Navigation is a minimal top bar with left-aligned 'shop' and right-aligned utility links, all in small, uppercase Space Mono. The overall impression is information-dense but visually sparse, driven by strong photography and precise typography.

### Imagery

Imagery consists primarily of high-fashion and editorial photography, either full-bleed as main hero content or tightly integrated with text. The treatment is raw and untamed, with a distinct absence of masks, overlays, or structured framing. Photography drives the mood and ambiance, acting as large, immersive backdrops or focal points, rather than contained decorative elements. Photography is dominant, often full-screen, making the site feel image-heavy despite minimalist UI elements. No specific icons are visible in the provided data beyond generic UI elements.

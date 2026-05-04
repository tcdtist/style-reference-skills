---
version: alpha
name: B/D® JAMS
description: The B/D® JAMS design system presents a clean, editorial aesthetic reminiscent of a digital zine, prioritizing spaciousness and direct typography over decorative elements. Its visual language relies on a monochrome palette of stark black text and crisp backgrounds, occasionally softened by subtle gray borders. Layouts are deliberately sparse, framing content with generous whitespace, and interactions are signaled through direct text changes rather than elaborate animations or vivid highlights. Components are minimalist, focusing on function with zero radii and transparent backgrounds.
colors:
  canvas-ice: "#f1f1f1"
  ink-black: "#0e0e0e"
  border-fog: "#e5e7eb"
  true-white: "#ffffff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.17
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.13
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.92px
spacing:
  elementGap: 30px
  sectionGap: 80px
components:
  ghost-navigation-button:
    role: Interactive element for navigation and primary actions.
  information-card-minimal:
    role: Container for content.
---

## Overview

**North Star:** Editorial White Canvas

The B/D® JAMS design system presents a clean, editorial aesthetic reminiscent of a digital zine, prioritizing spaciousness and direct typography over decorative elements. Its visual language relies on a monochrome palette of stark black text and crisp backgrounds, occasionally softened by subtle gray borders. Layouts are deliberately sparse, framing content with generous whitespace, and interactions are signaled through direct text changes rather than elaborate animations or vivid highlights. Components are minimalist, focusing on function with zero radii and transparent backgrounds.

### Do's

- Prioritize Canvas Ice (#f1f1f1) for all background surfaces to maintain a clean, expansive feel.
- Use Ink Black (#0e0e0e) for primary text and borders to ensure strong contrast and visual hierarchy.
- Apply SctoGroteskA (or Inter) with letter-spacing -0.04em for headings at 48px, and -0.03em for 16px and 24px text to consistently deliver the concise, editorial aesthetic.
- Maintain a zero border-radius for all interactive elements and containers to preserve the sharp, angular aesthetic.
- Utilize 80px for vertical spacing between major sections, and 30px for horizontal and vertical spacing within content blocks to ensure generous whitespace.
- Implement Ghost Navigation Buttons with a transparent background and Ink Black (#0e0e0e) text, only showing a border on hover/focus using Ink Black (#0e0e0e).

### Don'ts

- Do not use highly saturated colors for main UI elements; chromatic colors are not part of the brand's core palette.
- Avoid using box-shadows or elevated elements; the design emphasizes a flat, two-dimensional aesthetic.
- Do not introduce decorative borders or excessive padding on cards; they should remain minimalist and transparent.
- Do not use rounded corners on any UI element; all corners should be sharp and angular.
- Avoid dense information blocks; instead, use ample whitespace and clear typographic hierarchy for content organization.
- Do not use generic system fonts; always prioritize SctoGroteskA (or Inter) to maintain the brand's unique typographic voice.

### Layout

The page maintains a full-bleed, canvas-like aesthetic, allowing background imagery to extend edge-to-edge. Content appears to be horizontally centered within a broad but undefined maximum width. The hero pattern features minimal navigation text elements positioned prominently at the top, overlaying the background. Sections are separated by generous vertical spacing, typically 80px, maintaining significant breathing room between content blocks. The primary content arrangement is a simple, stacked typographic hierarchy creating an editorial, almost printed page feel with no complex grids or alternating visual patterns.

### Imagery

The site's imagery primarily consists of full-bleed, raw photographic or abstract visuals acting as background elements, specifically a weathered-looking sky. These images are treated without specific masking or prominent borders, integrating seamlessly into the minimalist design, acting more as atmospheric textures than focal points. There are no obvious icons or complex illustrations, preserving a text-dominant and stark visual environment.

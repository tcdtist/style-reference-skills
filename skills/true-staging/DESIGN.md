---
version: alpha
name: True Staging
description: True Staging establishes a serious yet refined industrial aesthetic, using a deep gray canvas punctuated by an antiqued peachy-orange accent. Typography pairs a classic serif for large expressive headlines with a clean sans-serif for functional text, setting up a contrast between permanence and precision. Components emphasize subtle outlining and generous border radii, lending a soft, approachable feel despite the muted palette. The overall impression is one of understated luxury and meticulous craftsmanship.
colors:
  blueprint-canvas: "#111111"
  parchment-white: "#f5efeb"
  amber-peach: "#f1b497"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
    letterSpacing: 0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 158px
    lineHeight: 1
    letterSpacing: -0.02px
spacing:
  buttonRadius: 80px
  elementGap: 8px
  sectionGap: 53px
components:
  hero-headline:
    role: Primary page title
  ghost-navigation-item:
    role: Secondary navigation and non-primary actions
  primary-action-button:
    role: Call to action button for 'Our Work'
  body-text:
    role: Standard informative text
  footer-detail-text:
    role: Copyright and minor informational text
---

## Overview

**North Star:** Architectural blueprint on aged parchment

True Staging establishes a serious yet refined industrial aesthetic, using a deep gray canvas punctuated by an antiqued peachy-orange accent. Typography pairs a classic serif for large expressive headlines with a clean sans-serif for functional text, setting up a contrast between permanence and precision. Components emphasize subtle outlining and generous border radii, lending a soft, approachable feel despite the muted palette. The overall impression is one of understated luxury and meticulous craftsmanship.

### Do's

- Always use Blueprint Canvas (#111111) for page backgrounds and primary dark text.
- Apply Parchment White (#f5efeb) for primary light text on dark backgrounds and for ghost button borders.
- Reserve Amber Peach (#f1b497) for key accents, selected navigation highlights, and the primary 'Our Work' button fill.
- Employ Roslindale (sub: Playfair Display) for large, expressive headlines (158px, weight 300, ls -0.0200em) to convey gravitas.
- Utilize Alliance (sub: Inter) for all functional text, varying weights (400, 500, 600) and sizes (9px, 12px, 14px) as needed for hierarchy.
- Implement an 80px border-radius for all interactive elements like buttons and navigation items to maintain a consistent soft, pill-like shape.
- Maintain a compact spacing density, with an element gap of 8px and section vertical spacing of 53px.

### Don'ts

- Do not introduce bright, vibrant colors; maintain the muted, earthy palette of Blueprint Canvas, Parchment White, and Amber Peach.
- Avoid sharp, angular corners; consistently apply the 80px border-radius for all applicable UI elements.
- Do not use generic system fonts for display headings; Roslindale's unique character is central to the brand's sophisticated feel.
- Avoid excessive use of elevation or heavy shadows; the system relies on subtle borders and color shifts for separation.
- Do not deviate from the defined letter-spacing values for Alliance; precise tracking is essential for its compact appearance.
- Do not use Parchment White (#f5efeb) on amber backgrounds due to insufficient contrast (1.6:1 ratio).
- Avoid making any element overtly 'loud'; the design emphasizes understated luxury through subtle contrasts and refined details.

### Layout

The page employs a full-bleed layout, particularly for the hero section, which features a large, centered headline over an architectural graphic background. Content is centrally aligned within this wide canvas, using large, negative space. The header features right-aligned navigation items, subtly outlined. Subsequent content sections appear to follow a consistent vertical rhythm, though specific sectioning is less explicit than a banded approach; instead, it relies on visual weight and typography.

### Imagery

The site uses subtle, abstract blueprint-style graphics overlaid on a textured dark background for atmospheric effect. These graphics are largely monochromatic, serving as an underlying visual motif rather than direct content. All imagery is decorative, establishing a mood of construction and precision, without featuring photography or product showcases. The density is image-light, with UI and typography dominating the visual space.

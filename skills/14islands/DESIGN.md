---
version: alpha
name: 14islands
description: This design system evokes the precision of a high-end editorial layout, prioritizing clear information delivery over decorative elements. The interplay of stark `#070707` text against expansive `#F2F2F2` backgrounds creates a powerful, almost architectural contrast, while the strategic use of `--color-grey-highlight-light` (`#a2a2a9`) provides subtle visual breaks that maintain gravity. Typography drives the aesthetic, with custom fonts `AftenScreen` delivering impactful, tightly kerned headlines and `BentonSans` ensuring legible, understated body copy, resulting in a system that feels both modern and timeless.
colors:
  canvas-white: "#f2f2f2"
  deep-graphite: "#070707"
  off-white: "#ffffff"
  soft-gray-highlight: "#a2a2a9"
  medium-gray-highlight: "#797979"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 75px
    lineHeight: 1
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 180px
    lineHeight: 0.8
    letterSpacing: -0.05px
spacing:
components:
  agency-intro-block:
    role: 
  work-grid-project-cards:
    role: 
  section-heading-lovable-products:
    role: 
  text-link-primary:
    role: Interactive element, navigation links, inline text links
  text-link-secondary:
    role: Interactive element, secondary navigation links, subtle buttons
  minimal-button-active:
    role: Primary action button, selected state button
  minimal-button-inactive-secondary:
    role: Secondary action button, unselected state button
  section-heading:
    role: Primary headings for content sections
  inline-text-highlight:
    role: Highlighting specific words or phrases.
  body-text-paragraph:
    role: Standard body copy for detailed information.
---

## Overview

**North Star:** Editorial Minimal Canvas — Large, impactful typography commands attention against vast, light-gray expanses.

This design system evokes the precision of a high-end editorial layout, prioritizing clear information delivery over decorative elements. The interplay of stark `#070707` text against expansive `#F2F2F2` backgrounds creates a powerful, almost architectural contrast, while the strategic use of `--color-grey-highlight-light` (`#a2a2a9`) provides subtle visual breaks that maintain gravity. Typography drives the aesthetic, with custom fonts `AftenScreen` delivering impactful, tightly kerned headlines and `BentonSans` ensuring legible, understated body copy, resulting in a system that feels both modern and timeless.

### Do's

- Prioritize `Canvas White` (`#f2f2f2`) as the main background for content areas and `Deep Graphite` (`#070707`) for all primary text, ensuring visual clarity and impact.
- Use `AftenScreen` at its largest sizes (75px, 100px, 180px) with negative letter-spacing for all hero and section headlines to create dramatic visual tension.
- Employ `BentonSans` at 16px weight 400 with a 1.4 line height for all body copy and secondary informational text to maintain high readability.
- Introduce `Soft Gray Highlight` (`#a2a2a9`) for secondary text elements or visual accents, especially for subheadings or subtle distinctions.
- Apply a consistent `4.16667px` border-radius to all image containers and interactive elements, avoiding sharp corners while still maintaining a structured feel.
- Maintain generous vertical spacing between sections, using values around `100px` to `108px` to ensure content breathes.
- Ensure interactive elements (buttons, links) are either `Deep Graphite` (`#070707`) or `Soft Gray Highlight` (`#a2a2a9`) with no background, relying on text and subtle borders for indication.

### Don'ts

- Avoid using background colors other than `Canvas White` (`#f2f2f2`) or `Off White` (`#ffffff`) for primary content sections.
- Do not introduce highly saturated or vivid chromatic colors; adhere strictly to the established neutral palette.
- Refrain from using strong box-shadows or complex elevation effects; the design relies on spacing and typography for hierarchy.
- Do not deviate from the specified negative letter-spacing for `AftenScreen` headlines, as this is a core part of its visual identity.
- Avoid pill-shaped or overly rounded elements; the standard `4.16667px` radius should be used consistently.
- Do not use generic system fonts; always specify `BentonSans` or `AftenScreen` (or their approved substitutes) for all text.
- Do not add additional padding or background styles to the 'Minimal Button' components; their design is intentionally understated.

### Layout

The page primarily uses a full-bleed pattern for its background colors (Canvas White), but content within these sections is constrained to a central max-width viewport (implicitly present, though not explicitly defined by a max-width token). The hero section features a large, centered headline over a dark background section, establishing a strong typographic focal point. Sections are clearly delineated by generous vertical spacing (`100px` to `108px`) and sometimes by subtle background color changes (e.g., `#f2f2f2` to a darker block). Content arrangement frequently uses a text-left, image-right or vice-versa alternating pattern, and showcases work in a clean grid-like structure (e.g., 2-column image grid). The navigation is a minimalist top bar, likely sticky, with spaced-out text links.

### Imagery

The site uses a mix of high-quality, professional photography and product screenshots. Photography is typically studio-shot, often with muted backgrounds or a focus on the subject. Images are contained, not full-bleed, usually presented in rectangular frames with a subtle `4.16667px` border-radius. In some cases, illustrations or abstract graphics for product showcases are used, often demonstrating clean lines and a somewhat flat aesthetic. Imagery plays an explanatory and showcase role, breaking up text-heavy sections and visually presenting work examples, maintaining a balanced density between visuals and text.

---
version: alpha
name: Haley Park
description: Haley Park employs a 'Gothic manuscript' aesthetic: a deeply saturated, muted forest green canvas provides a rich backdrop for delicate, antiqued typography, often accompanied by thin, almost calligraphic underlines or borders. Surface treatments are minimal, favoring ghostly lines and subtle background patterns over solid cards or elevation. The visual system feels quietly scholarly and meticulously crafted, with a restrained use of contrast to maintain a calm, focused atmosphere. The typography is a key expressive element, mixing classical serifs with a distinctive, almost whimsical display font.
colors:
  forest-canopy: "#143930"
  parchment-white: "#f8f2de"
  moss-line: "#456859"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  body-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.3
  body:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
spacing:
  elementGap: 11px
  sectionGap: 26px
components:
  ghost-navigation-link:
    role: Header navigation items and project links
  project-card-outlined:
    role: Containers for project listings, often appearing in grid layouts.
  section-divider-with-text:
    role: Visual separation between content sections, enhanced with centered text
  ornamental-icon:
    role: Decorative crosses or geometric patterns
---

## Overview

**North Star:** Gothic manuscript on dark parchment

Haley Park employs a 'Gothic manuscript' aesthetic: a deeply saturated, muted forest green canvas provides a rich backdrop for delicate, antiqued typography, often accompanied by thin, almost calligraphic underlines or borders. Surface treatments are minimal, favoring ghostly lines and subtle background patterns over solid cards or elevation. The visual system feels quietly scholarly and meticulously crafted, with a restrained use of contrast to maintain a calm, focused atmosphere. The typography is a key expressive element, mixing classical serifs with a distinctive, almost whimsical display font.

### Do's

- Prioritize Forest Canopy (#143930) for all main backgrounds to maintain the deep, dark ambiance.
- Use Parchment White (#f8f2de) exclusively for primary text, links, and borders, reserving it for elements that need to stand out from the dark background.
- Apply Moss Line (#456859) for secondary decorative strokes, subtle outlines, and subdued graphic elements to add detail without high contrast.
- Employ the 'Wispy' font (96px, 100 weight, -0.96px letter-spacing) for primary hero headlines to achieve an ethereal, elegant feel.
- Structure interactive elements like navigation and project listings with text on transparent backgrounds, using only a Parchment White (#f8f2de) border or underline for definition.
- Maintain a comfortable density with element gaps at `11px` and section gaps at `26px` to allow content to breathe without feeling sparse.
- Utilize 0px border-radius for components like project cards and buttons to reinforce a sharp, traditional print aesthetic.

### Don'ts

- Avoid using bright, saturated colors for UI elements; stick to the muted palette provided.
- Do not introduce heavy shadows or prominent elevation; maintain a flat, layered visual approach with subtle outlines.
- Refrain from using bold or heavy font weights for headlines or primary text where lightness and elegance are key.
- Do not use large, solid background fills for interactive components; prefer ghost styles with borders or underlines.
- Avoid decorative imagery that clashes with the site's 'Gothic manuscript' aesthetic; prioritize line art, subtle textures, or classic ornaments.
- Do not deviate from the specified typefaces and their distinct letter-spacing values to preserve the unique typographic voice.
- Avoid arbitrary border radii; use 0px by default, and 4.8px very sparingly for elements that require a slight softening.

### Layout

The page uses a full-bleed layout for its background, but content is visually constrained to a central column (though `pageMaxWidth` is null, the arrangement suggests a conceptual max-width with ample horizontal padding). The hero section features a centered headline over a textured background. Sections are delineated by subtle horizontal dividers often accompanied by centered textual titles. Content is primarily arranged in multi-column grids for project listings (e.g., 2-column or 3-column), using the 'Project Card (Outlined)' component. The overall density is comfortable, with consistent vertical spacing and minimal visual clutter, emphasizing typography and subtle graphic textures. Navigation is a simple, horizontal top bar with ghost links, consistent throughout the experience.

### Imagery

This site features a 'graphics-only' visual language. Imagery consists primarily of highly stylized, almost architectural line art and geometric forms, reminiscent of stained glass or gothic arches, rendered in Moss Line (#456859) or as subtle grayscale patterns on the dark background. Icons are minimal, outlined, and monochromatic, often using complex, antique-inspired symbols derived from `bodoni-classic-ornaments`. Visuals serve a decorative and atmospheric role, adding texture and historical depth rather than conveying explicit content or product functionalities. They are dense in pattern but low in color, maintaining the site's quiet, scholarly mood.

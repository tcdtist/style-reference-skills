---
version: alpha
name: 19–86
description: This design system evokes the precision and meticulousness of architectural blueprints, presented with stark clarity. The visual field is dominated by pure black text and lines against an unblemished white background, creating an impression of objective documentation. The singular `store_norske_ja_light` font, with its consistent weight and precise letter-spacing, grounds the aesthetic in technical rigor while allowing large display elements like "19-86" to feel monumental yet understated due to their light weight.
colors:
  obsidian-black: "#000000"
  pure-white: "#FFFFFF"
  ash-gray: "#8C8C8C"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 490px
    lineHeight: 1
    letterSpacing: -0.02px
spacing:
  elementGap: 5px
components:
  project-table-with-header:
    role: 
  display-monogram:
    role: 
  link-button-group:
    role: 
  table-row:
    role: Data display
  table-header-cell:
    role: Table column title
  link-button:
    role: Interactive navigation
---

## Overview

**North Star:** Architectural blueprint on white marble. The system is built on a high-contrast, minimalist palette of black and white, reminiscent of technical drawings.

This design system evokes the precision and meticulousness of architectural blueprints, presented with stark clarity. The visual field is dominated by pure black text and lines against an unblemished white background, creating an impression of objective documentation. The singular `store_norske_ja_light` font, with its consistent weight and precise letter-spacing, grounds the aesthetic in technical rigor while allowing large display elements like "19-86" to feel monumental yet understated due to their light weight.

### Do's

- Prioritize `Obsidian Black` (#000000) text on `Pure White` (#FFFFFF) backgrounds for all content.
- Utilize `store_norske_ja_light` (or Montserrat) at weight 400 for all typography, maintaining a consistent light aesthetic.
- Implement -0.0200em letter spacing for all text elements to maintain typographic precision.
- Structure content primarily in tabular or list formats with clear 1px solid `Obsidian Black` (#000000) dividers for organization.
- Use subtle spacing increments like `5px` and `8px` for internal element padding, creating a comfortable yet contained feel.
- Leverage the large `490px` `store_norske_ja_light` weight 400 for dominant display elements to infuse monumental scale without visual heaviness.

### Don'ts

- Avoid shadows or complex gradients; rely on pure black and white for depth and visual interest.
- Do not introduce additional font families or arbitrary weights; maintain the singular light aesthetic of `store_norske_ja_light`.
- Do not use saturated or vivid chromatic colors; the system relies on a strictly achromatic palette with a single muted accent (Ash Gray) for links.
- Avoid highly rounded corners or soft shapes; prioritize crisp lines and rectangular forms.
- Do not vary line heights excessively; stick to the defined `1.00` and `1.20` ratios for consistency and readability.
- Do not use a `pageMaxWidth`; allow content to span the full width where appropriate, but maintain internal content alignment.

### Layout

The page exhibits a full-bleed, uncontained model, but with strong internal alignment and a structured tabular presentation that implies a grid. The hero section is characterized by the monumental '19-86' central to the screen, serving as both branding and a strong visual anchor. Content below flows in a list-like fashion with alternating text and subtle horizontal dividers creating a rhythm. The overall density is comfortable, with ample vertical spacing between content blocks, contrasting with the precise, tight typography.

### Imagery

The visual language is characterized by an absence of traditional imagery like photography or illustrations. Instead, the design foregrounds text as the primary visual element. The large-scale number '19-86' functions as a graphical focal point, treated with the same typographic precision as smaller text, yet gaining monumental presence through its size. Simple, singular black dots serve as purely functional icons, mirroring the minimalist and high-contrast approach.

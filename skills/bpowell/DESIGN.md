---
version: alpha
name: Bpowell
description: The Bpowell design system embodies a stark, high-contrast aesthetic reminiscent of a gallery space. It leverages a predominantly monochrome palette, where extreme black and white create a dramatic backdrop for textual content. Typography is the hero, featuring bold, custom sans-serif fonts with distinct letter spacing used to define visual hierarchy and create a sense of impactful directness. Components are minimalistic, relying on negative space and precise typography to convey interaction rather than traditional buttons or elaborate graphic elements.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal-black: "#111111"
  deep-gray: "#2b2b2b"
spacing:
  elementGap: 16px
  sectionGap: 104px
components:
  navigation-bar-item:
    role: Header and footer navigation (text links)
  project-title-link:
    role: Interactive project list items
  section-heading-uppercase:
    role: Categorical section headers
  subsection-label:
    role: Subtle visual separators for content blocks
---

## Overview

**North Star:** gallery wall typography

The Bpowell design system embodies a stark, high-contrast aesthetic reminiscent of a gallery space. It leverages a predominantly monochrome palette, where extreme black and white create a dramatic backdrop for textual content. Typography is the hero, featuring bold, custom sans-serif fonts with distinct letter spacing used to define visual hierarchy and create a sense of impactful directness. Components are minimalistic, relying on negative space and precise typography to convey interaction rather than traditional buttons or elaborate graphic elements.

### Do's

- Prioritize typography as the primary visual element, using extreme contrast (Ink Black on Canvas White and vice versa).
- Maintain a clear visual hierarchy through font family, weight, and letter spacing — particularly the distinct tracking of Teg and New Grotesk.
- Use 1px or 2px solid Ink Black borders sparingly for subtle interaction cues on links and occasionally as a divider.
- Ensure generous vertical spacing, using 56px and 104px for section gaps to create comfortable density.
- Employ the 0px border-radius system-wide; avoid rounded corners for a sharp, precise look.
- Utilize a base unit of 4px for all spacing measurements, with element gaps typically at 16px.
- Alternate between Canvas White and Ink Black backgrounds for distinct page sections, using text colors that ensure AAA contrast.

### Don'ts

- Avoid using any chromatic colors; stick to the achromatic palette of extreme blacks and whites.
- Do not add drop shadows or complex elevation effects; rely on high contrast and typographic size for hierarchy.
- Refrain from using any imagery or photographic elements; the UI is purely typographic and text-driven.
- Do not introduce decorative borders or complex graphical elements; keep UI minimal and functional.
- Avoid mixed letter-spacing within a single typographic element; stick to the defined tracking for each font and size.
- Do not use subtle gray shades for primary text or backgrounds; the system leans into high-contrast black and white.
- Do not use generic buttons; interactive elements are styled as underlines or text transformations without distinct backgrounds.

### Layout

The page primarily uses a full-bleed layout for both light and dark sections, with content centered horizontally but often stretching to near-full width. The hero consists of simple text. Section rhythm is driven by alternating Canvas White and Ink Black backgrounds, creating strong visual breaks. Content is arranged in prominent vertical stacks of large text links, often with smaller descriptive text above. There is no grid usage for content and no visible card structures. Navigation is a minimal, top-bar text-based menu that appears to be sticky or fixed.

### Imagery

The site uses no imagery, photography, or illustrations. The visual language is entirely text-based, relying on the composition, sizing, and contrast of typography to create visual interest and structure.

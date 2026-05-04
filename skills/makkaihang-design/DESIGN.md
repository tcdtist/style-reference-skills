---
version: alpha
name: makkaihang design
description: The makkaihang design system establishes a minimal, almost invisible interface ethos. A stark charcoal canvas serves as the dominant background, providing a neutral backdrop for content. Text is a bright white, ensuring high contrast. Subtle light gray borders are used sparingly for visual segmentation rather than heavy containers. The overall aesthetic suggests an emphasis on content and unadorned presentation.
colors:
  carbon: "#1a1a1a"
  frost: "#ffffff"
  smoke: "#e5e7eb"
spacing:
  elementGap: 12px
  sectionGap: 32px
components:
  ghost-border-button:
    role: Interactive Element
  naked-card:
    role: Content container
---

## Overview

**North Star:** Midnight canvas, silver thread

The makkaihang design system establishes a minimal, almost invisible interface ethos. A stark charcoal canvas serves as the dominant background, providing a neutral backdrop for content. Text is a bright white, ensuring high contrast. Subtle light gray borders are used sparingly for visual segmentation rather than heavy containers. The overall aesthetic suggests an emphasis on content and unadorned presentation.

### Do's

- Always use Carbon (#1a1a1a) for primary page backgrounds to maintain the deep, dark ambiance.
- Render all primary text in Frost (#ffffff) to ensure readability against dark surfaces.
- Employ Smoke (#e5e7eb) for all borders and subtle separators, keeping visual distractions to a minimum.
- Use Untitled Sans (or a suitable substitute) at weight 400 for all typographic elements, prioritizing content clarity over size-based hierarchy.
- Maintain 0px border-radius across all UI elements for a consistently sharp and unadorned aesthetic.
- Utilize 12px for horizontal and vertical element separation within components or content blocks.
- Apply 32px as the standard vertical spacing between distinct content sections.

### Don'ts

- Avoid using any vibrantly saturated colors; restrict the palette to the defined achromatic grays.
- Do not introduce shadows or elevation; surfaces should remain flat and blend with the background.
- Never use rounded corners on any UI element; the design mandates strict 0px radii.
- Refrain from altering font sizes or weights for hierarchy; rely on spacing and position for emphasis.
- Do not use background colors on buttons or cards; maintain a 'ghost' or 'naked' appearance.
- Avoid using decorative imagery or complex illustrations; the focus is on clean UI and textual content.
- Do not vary paragraph line heights; maintain the established 1.5 ratio for all body text.

### Layout

The page maintains a full-bleed, uncontained content model, with no defined `pageMaxWidth`. The headers and navigation are integrated into this full-width presentation. Content appears to be structured in blocks, with 32px vertical gaps separating major sections. The navigation and header elements are positioned at the top of the page, potentially overlapping or layering content. Minimal layout elements are used, giving the feeling of content floating on a dark canvas, with an absence of clear grid structures outside of basic vertical and horizontal spacing.

### Imagery

The visual language is characterized by an absence of imagery on the page itself, relying instead on pure UI and typography. When visuals appear, as suggested by the 'Identity Book Design' content, they are likely confined to product showcases or project portfolios, presenting the work directly without decorative framing. Iconography, if present, would likely be minimal, outlined, and monochromatic, maintaining the severe aesthetic. The system is text-dominant.

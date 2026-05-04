---
version: alpha
name: XXXI.studio
description: XXXI.studio employs a stark, almost architectural aesthetic, reminiscent of an unembellished gallery space. The design system is characterized by a high-contrast monochrome palette, minimal use of visual hierarchy, and precise typographic arrangements that feel more like labels and captions than flowing text. Emphasis is placed on direct content presentation with a sense of restrained utility and a muted, almost industrial background through subtle borders.
colors:
  canvas-white: "#ffffff"
  carbon-black: "#000000"
  concrete-gray: "#e5e7eb"
spacing:
  elementGap: 4px
components:
  navigation-link:
    role: Interactive text link, primarily in navigation context.
  footer-copyright:
    role: Legal and copyright information.
  project-label:
    role: Labeling specific projects or items.
---

## Overview

**North Star:** gallery label on raw concrete

XXXI.studio employs a stark, almost architectural aesthetic, reminiscent of an unembellished gallery space. The design system is characterized by a high-contrast monochrome palette, minimal use of visual hierarchy, and precise typographic arrangements that feel more like labels and captions than flowing text. Emphasis is placed on direct content presentation with a sense of restrained utility and a muted, almost industrial background through subtle borders.

### Do's

- Always use Neue Haas Grotesk (or Helvetica Neue) at weight 400 for all textual elements.
- Prioritize Carbon Black (#000000) for all text on Canvas White (#ffffff) backgrounds.
- Implement a subtle Concrete Gray (#e5e7eb) border for interactive elements to signal state change.
- Maintain a compact density, using 4px and 6px for internal component and element spacing.
- Utilize 225px as a primary vertical margin for significant section breaks or footer separation.
- Keep all corners sharp with a 0px border radius, reinforcing the architectural aesthetic.

### Don'ts

- Avoid using any saturated or vivid colors; restrict the palette strictly to the defined monochrome neutrals.
- Do not introduce multiple font weights or styles; maintain the singular weight 400 for consistency.
- Refrain from using shadows or any form of elevation; elements should appear flat and integrated with the surface.
- Do not deviate from the specified spacing units of 4px, 6px, and 225px for elements and sections.
- Never add unnecessary decorative elements or complex backgrounds; the design should remain unembellished.

### Layout

The page adheres to a full-bleed layout, effectively using the entire viewport without a defined container width. The hero section features a full-screen image with minimal, centered text overlaid. Sections are demarcated by significant vertical spacing, particularly a 225px margin, rather than explicit dividers or alternating backgrounds. Content arrangement is primarily stacked or presented as direct visual showcases. Navigation appears minimal, typically located at the header and footer, acting more as metadata or project labels than traditional interactive menus.

### Imagery

The site's imagery consists solely of large, full-bleed architectural photography, primarily of interior spaces. These images are functional, acting as background canvases more than distinct content pieces, showcasing the studio's output directly. The treatment of images is raw and unmasked, allowing the photography's natural textures and lighting to define the visual atmosphere. Density is high, with imagery encompassing large portions of the screen, leaving text elements overlaid or adjacent, suggesting the visual documentation is paramount.

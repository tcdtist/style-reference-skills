---
version: alpha
name: Leandro Farina
description: Leandro Farina's visual system evokes a stark gallery aesthetic: pure black canvas, high-contrast typography, and unadorned image presentation. There's a deliberate absence of color, borders, or any decorative elements, placing absolute focus on the photographic work. Typography remains understated and functional, providing context without drawing attention, while navigation is minimal and disappears when not needed. The overall impression is one of quiet contemplation, letting the art speak for itself.
colors:
  canvas-black: "#000000"
  muted-ash: "#999999"
  ghost-gray: "#bbbbbb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.54
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.54
  body-lg:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.3
spacing:
  elementGap: 8px
  sectionGap: 45px
components:
  ghost-navigation-button:
    role: Primary navigation interaction, active link states.
  project-card:
    role: Image containers for portfolio items.
  muted-tag-badge:
    role: Categorization for portfolio items.
  image-navigation-arrow:
    role: Carousel navigation.
---

## Overview

**North Star:** Minimalist gallery canvas — imagery isolated by deep matte black and sharp, subtle typography.

Leandro Farina's visual system evokes a stark gallery aesthetic: pure black canvas, high-contrast typography, and unadorned image presentation. There's a deliberate absence of color, borders, or any decorative elements, placing absolute focus on the photographic work. Typography remains understated and functional, providing context without drawing attention, while navigation is minimal and disappears when not needed. The overall impression is one of quiet contemplation, letting the art speak for itself.

### Do's

- Always use Canvas Black (#000000) for page backgrounds and primary text to maintain a high-contrast, gallery-like feel.
- Present all images in their raw form, without borders, shadows, or applied corner radii; let the content define its edges.
- Employ Sequel font for all primary interface text, leveraging its thin weights (100) for a subtle, sophisticated presence.
- Utilize Ghost Gray (#bbbbbb) exclusively for inactive links and ghost controls, ensuring minimal visual hierarchy for non-primary actions.
- Keep all interactive elements, such as buttons and navigation links, as text-only or icon-only with no distinct backgrounds or borders unless explicitly for a hover/active state.
- Maintain generous spacing of 45px between major content sections to allow visual breathing room for portfolio pieces.
- Use 0px radius for all elements, including cards and buttons, to achieve a sharp, unyielding aesthetic.

### Don'ts

- Avoid using any saturated colors; the system is strictly achromatic, with no exceptions for brand accents or semantic colors.
- Do not add any drop shadows or elevation effects; elements should exist on a single, flat plane against the Canvas Black.
- Refrain from using any background colors for buttons, badges, or cards; these components are defined by their content and text color alone.
- Do not introduce any decorative borders or outlines around images, cards, or sections; visual separation is achieved through negative space.
- Avoid bold or heavy font weights for headlines or primary text; prefer lighter weights like Sequel 100 or 400 for understated elegance.
- Do not use letter-spacing other than 'normal' for any typography, preserving the intended rhythm of the font.
- Never apply rounded corners to any UI element; all corners should be sharp and rectilinear.

### Layout

The page primarily follows a full-bleed layout for portfolio items, extending content to the edges, interspersed with max-width contained text. The header is a fixed top bar on larger screens, minimal, featuring the brand name and a 'Menu' link. The hero pattern is a full-bleed image with overlaid, simple text. The main content area features large, often staggered or centered images, with project details appearing below. Vertical spacing between project blocks is consistent and generous, featuring a 45px section gap. There's an implied grid for the project previews in the scrollable section, appearing as a two-column, slightly offset arrangement of image cards.

### Imagery

The site is image-heavy, dominated by highly stylized, professional photography from the artist's portfolio. Images are treated as central content, displayed full-bleed within sections or as large, framed pieces. They are raw-edged, without rounding or overlays, and act as the primary visual interest. Icons (like navigation arrows) are minimal, outlined, and monochromatic, serving purely functional roles without decoration. The density is high in terms of image presence, making the site primarily a visual showcase.

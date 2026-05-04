---
version: alpha
name: Zendesk
description: Zendesk employs a crisp, bright aesthetic with high contrast typography and a single vibrant accent color. The visual system prioritizes legibility and direct communication on a clean white canvas, grounded by dark, information-dense footers. Components are lightweight and functional, using subtle rounding and a clear hierarchy driven by size and color. Interaction points are sharply defined by the key accent green, making actions feel clear and responsive.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal: "#11110d"
  fog-gray: "#f5f5f2"
  zendesk-green: "#d1f470"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.05
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
spacing:
  buttonRadius: 16px
  elementGap: 16px
  sectionGap: 88px
components:
  primary-action-button:
    role: Call to action
  ghost-navigation-button:
    role: Secondary navigation or action
  info-banner:
    role: Top-level informational message
  footer-link:
    role: Navigation links within the footer
  muted-heading:
    role: Secondary section headings
---

## Overview

**North Star:** Crisp digital canvas

Zendesk employs a crisp, bright aesthetic with high contrast typography and a single vibrant accent color. The visual system prioritizes legibility and direct communication on a clean white canvas, grounded by dark, information-dense footers. Components are lightweight and functional, using subtle rounding and a clear hierarchy driven by size and color. Interaction points are sharply defined by the key accent green, making actions feel clear and responsive.

### Do's

- Use Canvas White (#ffffff) for primary page backgrounds, ensuring maximum legibility for content.
- Apply Zendesk Green (#d1f470) exclusively for primary calls-to-action, interactive elements, and focused brand highlights.
- Employ Charcoal (#11110d) as the background for footer sections and high-contrast informational banners.
- Use Vanilla Sans (or Inter as substitute) for all typographic elements, prioritizing legibility and a consistent brand voice.
- Ensure all buttons and navigation items utilize a 16px border-radius for a consistent, soft visual feel.
- Maintain high contrast (AAA level) for all text against its background, e.g., Ink Black (#000000) on Canvas White (#ffffff).
- Utilize an 8px base unit for all spacing, with common element gaps at 16px and section gaps at 88px for clarity.

### Don'ts

- Do not introduce new vibrant colors outside of Zendesk Green (#d1f470), as it diminishes the impact of the primary accent.
- Avoid heavy shadows or gradients on interactive elements; rely on color and typography changes for states.
- Do not deviate from the established type scale; maintain consistent sizing and line heights for hierarchy.
- Do not use generic system fonts; always specify Vanilla Sans or its substitute Inter.
- Avoid applying tight letter-spacing to body text; it should remain at 'normal' for readability.
- Do not use border-radius values other than 4px or 16px for UI elements, except for the large 40px radius on a specific body surface.
- Do not use more subtle forms of interaction for primary CTAs; they must be filled with Zendesk Green.

### Layout

The page follows a contained layout model, centered within a max-width constraint, though the 'max-width' itself is not explicitly defined in the data, the content is clearly not full-bleed. The hero section features a large, centered headline followed by body text and an engaging call to action. Sections are delineated by clear vertical rhythm with generous spacing. The footer shifts to a dark background, employing a multi-column grid for navigation links and a visually distinct 'Contact us.' section with a brand accent. Page-level navigation is a simple top bar with a logo and two ghost action buttons.

### Imagery

This site predominantly uses icons and UI elements rather than complex imagery. White background with a simple black logo. When present, imagery is typically functional, like a small decorative green gradient in the footer or simple line icons in navigation. The design is text-dominant, with visual elements serving to break up sections or highlight interaction. Icons are minimal, likely filled or solid, with no apparent stroke. No elaborate photography or custom illustrations are present beyond the brand's immediate UI needs.

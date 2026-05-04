---
version: alpha
name: Thomas Hedger
description: Thomas Hedger's portfolio features a stark, high-contrast visual identity centered on vibrant illustration against a light canvas. The design system is highly content-driven, with individual artworks serving as the primary visual elements. Typography is minimal and functional, acting as a clear, understated frame for the colorful, intricate illustrations. A tightly controlled palette of neutrals defines the UI, allowing the bold and diverse color compositions within the artwork to command full attention.
colors:
  absolute-zero: "#000000"
  canvas-white: "#ffffff"
  ink-grey: "#29242b"
  border-fog: "#e5e5e5"
spacing:
  elementGap: 3px
components:
  artwork-grid-item:
    role: Primary display for artwork portfolio items.
  navigation-link:
    role: Interactive text links in the header and footer.
  header-branding:
    role: Site title in the main header.
  footer-copyright-text:
    role: Small, legal text at the bottom of the page.
---

## Overview

**North Star:** Gallery Grid Canvas

Thomas Hedger's portfolio features a stark, high-contrast visual identity centered on vibrant illustration against a light canvas. The design system is highly content-driven, with individual artworks serving as the primary visual elements. Typography is minimal and functional, acting as a clear, understated frame for the colorful, intricate illustrations. A tightly controlled palette of neutrals defines the UI, allowing the bold and diverse color compositions within the artwork to command full attention.

### Do's

- Prioritize image content. Most of the page should be dedicated to displaying artwork, respecting its inherent dimensions and aspect ratios.
- Maintain a clear, high-contrast visual hierarchy using 'Absolute Zero' for key text and borders against 'Canvas White' backgrounds.
- Use 'Ink Grey' for prominent headings to establish a slightly softer, yet still impactful, textual presence.
- Apply 'Absolute Zero' for all primary borders and dividers to emphasize the grid structure and define interactive areas.
- Keep all corners sharp with a 0px border-radius on all components, maintaining a crisp, rectilinear aesthetic.
- Employ 'Diatype' (or Inter) at 26px weight 700 for main navigation and headings, providing clear and concise guidance.
- Utilize 3px padding from the tokens only for small, internal element spacing where needed for compact density, otherwise prefer 0px for content containers.

### Don'ts

- Avoid decorative shadows or complex elevation schemes; the design relies on flat, direct presentation.
- Do not introduce new colors into the UI beyond the defined neutrals; all vibrancy should come from the artwork itself.
- Refrain from using heavily styled buttons or components that draw attention away from the visual content.
- Do not implement soft curves or rounded corners; the aesthetic is sharp and geometric.
- Avoid unnecessary padding or excessive white space around artwork to maintain a dense, gallery-like feel.
- Do not use generic system fonts for prominent text roles; stick to 'Diatype' and 'Diatype Variable' for brand consistency.
- Under no circumstances should the browser default link color (#0000ee) appear; all links use 'Absolute Zero' or 'Ink Grey'.

### Imagery

The site is dominated by a diverse collection of highly stylized, often surreal, and always vibrant illustrations. These are the core content and visual identity. They feature a mix of bold outlines, flattened perspectives, and rich, often unexpected color palettes. Imagery is treated as full-bleed within its grid cell, without rounded corners or drop shadows, emphasizing a direct and unadorned presentation. The density is image-heavy, with each piece of artwork occupying a significant visual footprint. Iconography for social links (Behance, Instagram, Cart) is minimalist and outlined, using 'Absolute Zero' against the 'Canvas White' background.

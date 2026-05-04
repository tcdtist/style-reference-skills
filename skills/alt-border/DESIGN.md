---
version: alpha
name: Alt–Border
description: Alt-Border embodies a minimalist art gallery aesthetic: stark white canvases juxtaposed with deep black text and hairline dividers. Layouts are tight and grid-based, preferring dense information presentation over expansive negative space. Typography is critical, using a precise, narrow sans-serif at varying weights for an intellectual and assertive tone. The visual system emphasizes content, with images acting as art pieces within structured frames, devoid of soft shadows or chromatic accents, relying on sharp contrast and precise alignment to communicate a high-end, curated feel.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal-grey: "#333333"
  pale-stone: "#808080"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: -0.38px
  body:
    fontFamily: "system-ui"
    fontSize: 21px
    lineHeight: 1
    letterSpacing: -0.57px
  subheading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1
    letterSpacing: -0.92px
  heading:
    fontFamily: "system-ui"
    fontSize: 105px
    lineHeight: 0.85
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 120px
    lineHeight: 1
    letterSpacing: -1.4px
spacing:
  cardRadius: 10px
  elementGap: 9px
  sectionGap: 48px
components:
  navigation-link:
    role: Primary site navigation, secondary links like 'Read more'
  ghost-button:
    role: Actionable text that blends into surrounds but indicates interaction
  image-grid-card:
    role: Displaying project thumbnails and content previews in a masonry-style grid
  content-section-headline:
    role: Breaking up content sections with prominent descriptive text
  dividing-line:
    role: Subtle visual separation between content blocks or navigation items
---

## Overview

**North Star:** monochromatic minimalist gallery

Alt-Border embodies a minimalist art gallery aesthetic: stark white canvases juxtaposed with deep black text and hairline dividers. Layouts are tight and grid-based, preferring dense information presentation over expansive negative space. Typography is critical, using a precise, narrow sans-serif at varying weights for an intellectual and assertive tone. The visual system emphasizes content, with images acting as art pieces within structured frames, devoid of soft shadows or chromatic accents, relying on sharp contrast and precise alignment to communicate a high-end, curated feel.

### Do's

- Prioritize Neuehaasdisplay 300 at extremely large sizes (e.g., 105px) for hero headlines to maximize immediate visual impact.
- Use Inferi across all typographic elements that require controlled, refined elegance, adjusting weights (200-400) for hierarchy but maintaining its signature narrow tracking.
- Employ Ink Black (#000000) for all primary text and critical borders to create strong visual anchors against the Canvas White (#ffffff) background.
- Structure layouts using visible 1px solid borders in Charcoal Grey (#333333) or Pale Stone (#808080) to define content areas without relying on shadows or heavy backgrounds.
- Maintain a compact visual density, using standard element gaps of 9px and card padding of 9px to keep elements close-knit.
- Apply a 10px border-radius consistently to all image frames and contained card components to soften hard edges slightly.
- Keep backgrounds minimal and pure, primarily using Canvas White (#ffffff) as the dominant surface for all content.

### Don'ts

- Avoid using drop shadows or elevation effects; elements should rely on borders and spatial separation for hierarchy.
- Do not introduce chromatic colors for UI elements; the palette is strictly monochromatic with white, black, and grays.
- Refrain from using heavily padded buttons or buttons with solid backgrounds; actions should primarily be expressed through ghost buttons or text links.
- Do not deviate from the specified negative letter-spacing for headlines and navigation links; this is key to the brand's typographic identity.
- Avoid decorative gradients or background images that would disrupt the clean, high-contrast, text-forward aesthetic.
- Do not use generic sans-serifs where a custom font is specified; the precise character of Inferi and Neuehaasdisplay is foundational to the brand.

### Layout

The site employs a primarily contained, max-width layout for its textual content, but images frequently break free to fill horizontal space, creating a dynamic visual flow. The hero section often features a large-scale headline (Neuehaasdisplay) over a white background with interspersed small, decorative thumbnails. Sections maintain a consistent vertical rhythm, separated by clean horizontal dividers (Charcoal Grey lines). Content is arranged in structured grids, such as 3-column image grids for projects, or 2-column layouts for text-and-image features. The layout feels dense and information-rich yet highly organized, maintaining a strict grid alignment. Navigation is a minimalist top bar with text links.

### Imagery

This design system heavily features high-end, editorial-style photography and CGI renders. Images are typically contained within a solid border (Ink Black or Pale Stone) and a 10px border-radius, presenting them like curated art pieces. They are product-focused or abstract, often featuring clean, stark backgrounds that complement the overall minimalism. There is a strong emphasis on visual storytelling through the images themselves, with minimal text overlay. Icons are absent from standard UI, with the focus solely on photographic and CGI content for visual flair. Image density is high, with large, prominent images dominating sections, but always within a structured layout.

---
version: alpha
name: Interaction
description: The Isaac Powell system conveys a stark, almost monastic minimalism, using an extreme black-on-white polarity. Typography is consistently small and tracked tightly. The design is devoid of significant color or elevation, directing focus entirely onto content framed by sharp, unornamented boundaries. Interaction elements are subtle ghost outlines or simple text links, maintaining a subdued aesthetic.
colors:
  canvas-white: "#e5e7eb"
  ink-black: "#000000"
spacing:
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 48px
components:
  ghost-navigation-item:
    role: Navigation links (e.g., 'Reel', 'Info')
  footer-text-link:
    role: Informational links in the footer
  content-image-card:
    role: Visual content display
---

## Overview

**North Star:** Minimalist digital folio

The Isaac Powell system conveys a stark, almost monastic minimalism, using an extreme black-on-white polarity. Typography is consistently small and tracked tightly. The design is devoid of significant color or elevation, directing focus entirely onto content framed by sharp, unornamented boundaries. Interaction elements are subtle ghost outlines or simple text links, maintaining a subdued aesthetic.

### Do's

- Prioritize stark black-on-white contrast across all UI elements.
- Apply Antique Legacy (or Times New Roman substitute) at 17px with -0.0250em letter-spacing for all text roles.
- Use 9999px border-radius for all interactive navigation elements and similar tags.
- Maintain a comfortable density with 12px for small element gaps and 48px for general section padding.
- Present content images flush within an `Ink Black` background, without borders or padding.

### Don'ts

- Do not introduce overt colors; restrict the palette to `Ink Black` and `Canvas White`.
- Avoid shadows or complex elevation; maintain a flat, two-dimensional aesthetic.
- Do not vary font sizes or weights for hierarchy; rely on layout and context.
- Refrain from using gradients or decorative backgrounds.
- Do not add extra padding or borders to content images; they should sit precisely on their `Ink Black` panel.

### Layout

The page follows a centered, max-width layout with substantial whitespace. The header features minimalist, horizontally aligned navigation elements. Content sections are composed of large `Ink Black` rectangular blocks, each housing an image or graphic, contrasting sharply with the dominant `Canvas White` background. The footer is minimal, mirroring the header's text-based links. Vertical rhythm is established by significant visual separation between the header, image gallery section, and footer.

### Imagery

This site features product photography and graphic design mockups presented as content. The imagery is primarily monochromatic or desaturated, aligning with the minimal color palette. Images are treated as flat, rectangular blocks, often displayed against `Ink Black` panels that project them forward from the `Canvas White` page. There is no usage of rounded corners, abstract graphics, or decorative illustrations; the imagery is functional and directly showcases portfolio work.

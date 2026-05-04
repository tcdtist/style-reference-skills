---
version: alpha
name: Counterprint
description: Counterprint's visual system evokes a precise, almost utilitarian aesthetic, reminiscent of classic design publishing. The core palette is primarily achromatic, relying on sharp black text against stark white surfaces and soft gray borders. Typography is confident and compact, favoring a system sans-serif for most content, with a custom geometric sans-serif for specific branding. Components are lightweight, emphasizing function over embellishment, with generous use of infinite border-radius for buttons and subtle rounded corners for input fields, providing a touch of approachability within the otherwise rigorous structure.
colors:
  canvas-white: "#ffffff"
  text-black: "#1c1c1c"
  border-gray: "#e5e7eb"
spacing:
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 28px
components:
  primary-ghost-button:
    role: Interactive element
  text-link-button:
    role: Interactive element
  search-input-field:
    role: Data entry
  product-grid-item:
    role: Display component for products
  nav-menu-item:
    role: Navigation link
---

## Overview

**North Star:** Graphic design manual on white canvas

Counterprint's visual system evokes a precise, almost utilitarian aesthetic, reminiscent of classic design publishing. The core palette is primarily achromatic, relying on sharp black text against stark white surfaces and soft gray borders. Typography is confident and compact, favoring a system sans-serif for most content, with a custom geometric sans-serif for specific branding. Components are lightweight, emphasizing function over embellishment, with generous use of infinite border-radius for buttons and subtle rounded corners for input fields, providing a touch of approachability within the otherwise rigorous structure.

### Do's

- Use Canvas White (#ffffff) as the default background for all page surfaces and major content blocks.
- Implement Text Black (#1c1c1c) for all primary text, headings, and functional icons to maintain high contrast.
- Apply Border Gray (#e5e7eb) for all hairline separators, subtle outlines, and inactive interactive component borders.
- Utilize 9999px border-radius for all pill-shaped buttons and tags, creating a soft, approachable boundary.
- Maintain a compact typographical rhythm with Helvetica (or system-ui sans-serif substitute) at a letter-spacing of -0.025em for all prominent text.
- Adhere to an 8px base unit for horizontal spacing between elements and 4px for fine-tuned vertical padding.

### Don'ts

- Avoid introducing additional saturated colors unless explicitly for semantic states (e.g., error) or specific brand-approved product imagery, as the system is intentionally achromatic.
- Do not use heavy shadows or deeply colored backgrounds; surface elevation should be minimal and almost imperceptible, achieved through subtle borders where needed.
- Refrain from using large, decorative typefaces for headlines; the system prioritizes compact, functional typography.
- Do not deviate from the established border-radius values (9999px for buttons/tags, 15px for inputs); arbitrary rounded corners will disrupt the system's feel.
- Avoid excessive padding around interface elements; the site employs a compact density, maximizing information visibility.

### Layout

The page maintains a full-width, non-contained layout, allowing content to stretch across the browser window. The hero section features a dynamic, full-bleed split visual with two large product images. Content is primarily arranged in a dense, multi-column grid for product listings, with consistent vertical spacing between sections. Navigation is minimalist, residing in a lightweight top bar that appears fixed on scroll.

### Imagery

The visual language relies heavily on product-focused photography and vibrant book cover art. Photography either features clean, high-key shots of books and products isolated on simple backgrounds (e.g., solid color blocks). Images are contained within rectangular frames, with no overlapping or complex masking. They are highly central to content, serving as both decorative atmosphere and explanatory content, occupying significant visual space in grid layouts.

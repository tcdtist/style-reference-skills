---
version: alpha
name: MAKR
description: MAKR employs a utilitarian workshop aesthetic, characterized by a monochrome palette, robust typography, and minimal decorative elements. The design prioritizes directness and product focus, using abundant white space and a tightly constrained color scheme of near-black text on white or light gray surfaces. Interactions are subdued, relying on subtle background shifts and text changes rather than overt animations or vibrant accent colors. The overall impression is one of crafted precision and understated quality.
colors:
  ink: "#1c1717"
  canvas: "#ffffff"
  fog: "#f0f0f0"
  stone: "#a9aea9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: 0.165px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.35
    letterSpacing: 0.27px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.15
    letterSpacing: 0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: 0.96px
spacing:
  elementGap: 5px
  sectionGap: 90px
components:
  primary-filled-button:
    role: Call to action.
  text-input:
    role: Form text entry.
  product-tag-badge:
    role: Informational labels for products or promotions.
---

## Overview

**North Star:** Workshop-crafted monochrome utility.

MAKR employs a utilitarian workshop aesthetic, characterized by a monochrome palette, robust typography, and minimal decorative elements. The design prioritizes directness and product focus, using abundant white space and a tightly constrained color scheme of near-black text on white or light gray surfaces. Interactions are subdued, relying on subtle background shifts and text changes rather than overt animations or vibrant accent colors. The overall impression is one of crafted precision and understated quality.

### Do's

- Use Ink (#1c1717) for all primary text and Canvas (#ffffff) for primary backgrounds.
- Maintain a rigid 0px border-radius for all UI elements, including buttons, inputs, and cards.
- Apply Sohne Web Regular (400) for all body text, headings, and interactive elements.
- Structure layouts with ample white space, using a section gap of 90px between major content blocks.
- Utilize Stone (#a9aea9) as the background for primary interactive buttons, paired with Ink (#1c1717) text and a 1px Ink border.
- Employ Fog (#f0f0f0) sparingly for subtle background differentiation in secondary content areas or inputs.
- Reserve CircularXXMonoWeb-Regular (400) for specific decorative text elements or unique callouts, not for general content.

### Don'ts

- Avoid using any saturated or vivid accent colors; the palette is strictly monochrome.
- Do not introduce rounded corners or soft edges on any components.
- Refrain from using drop shadows or elevation effects; elements should appear flat on the canvas.
- Do not use gradients; all colors should be solid fills.
- Avoid decorative typography; maintain the utilitarian style of Sohne Web as the dominant font.
- Do not deviate from the specified spacing units; consistency in 5px element gaps and 90px section gaps is key.
- Do not use default browser link colors; all links must be styled with Ink (#1c1717).

### Layout

The page primarily uses a full-bleed layout, where content sections span the full width of the viewport, particularly for large image blocks and product showcases. Textual content and UI elements are typically contained within a centered max-width content area (implicitly around 1200px based on observable patterns). The hero section often features large, immersive product photography with superimposed text links or minimal headlines. Section rhythm is driven by consistent vertical spacing of 90px and alternating content blocks, sometimes featuring equal-width multi-column grids for presenting product variations or features. Navigation is a minimal top bar with left-aligned brand logo and right-aligned utility links (Account, Cart).

### Imagery

The imagery features tightly cropped, professional product photography against neutral backgrounds (often white, gray, or soft blurs of natural settings). There is a mix of highly detailed product shots and contextual action shots that showcase products in use, without overt lifestyle branding. Photography is often monochromatic or desaturated, aligning with the overall brand aesthetic. Illustrations and abstract graphics are absent. Icons are minimal, utility-based, and appear as simple outlined or filled shapes consistent with the primary text color, #1c1717. Images serve to showcase the product directly and provide functional context, rather than purely decorative or atmospheric roles.

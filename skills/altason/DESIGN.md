---
version: alpha
name: Altason
description: Atlason's visual system evokes a gallery of curated industrial design, prioritizing form and function through stark contrasts and precise typography. The aesthetic is black and white, with expansive negative space framing product visuals. Typography is compact and commanding, set in a sans-serif that conveys a sense of modernity and clarity. The overall impression is one of sophisticated minimalism, where every element is intentional and serves to highlight the featured works.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#b0b0b0"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.8
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 106px
    lineHeight: 0.77
  display:
    fontFamily: "system-ui"
    fontSize: 288px
    lineHeight: 0.77
spacing:
  elementGap: 8px
  sectionGap: 48px
components:
  navigation-link-header:
    role: Primary navigation links in headers.
  product-thumbnail-card:
    role: Displays product images with titles.
  contact-information-block:
    role: Lists contact details and address.
  footer-section:
    role: Contains navigation links and copyright information.
---

## Overview

**North Star:** Black & White Gallery

Atlason's visual system evokes a gallery of curated industrial design, prioritizing form and function through stark contrasts and precise typography. The aesthetic is black and white, with expansive negative space framing product visuals. Typography is compact and commanding, set in a sans-serif that conveys a sense of modernity and clarity. The overall impression is one of sophisticated minimalism, where every element is intentional and serves to highlight the featured works.

### Do's

- Use Canvas White (#ffffff) as the primary background for all page content to maintain a clean, expansive feel.
- Employ Ink Black (#000000) for all primary text, headings, and significant borders to achieve strong contrast and visual impact.
- Utilize Haas Grotesk DS Pro, weight 500, for all display-level headings (48px and above) with compact line heights to create impactful typographic blocks.
- Apply Haas Grotesk TX Pro, weight 400 or 500, for all body text, links, and secondary information, distinguishing its usage from display headings.
- Maintain a clear visual hierarchy by placing product visuals framed by generous Canvas White (#ffffff) space and minimal text overlays.
- Use 8px as the default `elementGap` for vertical spacing between related content elements and 48px for `sectionGap` between distinct content blocks.
- Border product thumbnail cards with a 1px solid Ink Black (#000000) line to create distinct content modules.

### Don'ts

- Avoid introducing saturated colors outside of embedded imagery; the interface should remain monochrome.
- Do not use subtle variations of black or white for background or text where Ink Black or Canvas White provide sufficient contrast.
- Refrain from using any form of elevation (shadows) on UI elements; the design emphasizes flat surfaces.
- Do not use rounded corners on any UI components; all elements should maintain sharp, defined edges.
- Avoid dense, text-heavy blocks. Break up information with imagery and ample whitespace.
- Do not use generic system fonts; stick to `haas-grotesk-tx-pro` and `haas-grotesk-ds-pro` or their designated substitutes.
- Do not create highly interactive or animated elements; the motion profile is functional and subtle (ease, durations 0.3-0.5s).

### Layout

The page primarily uses a max-width contained layout, though specific hero or section elements may appear full-bleed. The hero pattern features a dominant, often full-bleed or near full-bleed, striking image juxtaposed with large, impactful typography that directly states the brand name or key message. Subsequent sections alternate between large individual content blocks and grid-based layouts, such as 2-column or 3-column feature/product grids. Content arrangement often utilizes a clean, centered stack or side-by-side text and image pairing, with ample vertical spacing between sections. The navigation is minimal, likely a top bar, integrating seamlessly with the large display typography.

### Imagery

The site uses a mix of high-quality product photography and abstract graphic elements. Product photography is typically studio-shot, featuring tight crops, often on neutral or white backgrounds, emphasizing the object itself without external context. Visuals are contained within defined areas, often with Ink Black (#000000) borders, creating a gallery-like presentation. There is a strong interplay of large, impactful images and smaller, supporting visuals, suggesting a curated exhibition. Icons (if present) are minimal, likely outlined, and monochrome, blending seamlessly with the typographic style. The imagery serves to showcase the product design, acting as the primary content without decorative distraction.

### Elevation

The design intentionally avoids shadows and elevation effects. All elements exist on a single, flat plane, relying on stark color contrast, precise lines, and generous negative space to define hierarchy and separation. This commitment to flatness reinforces the 'gallery' aesthetic, presenting content without visual ornamentation.

---
version: alpha
name: AndAgain
description: This design system presents as a stark, high-contrast monochrome environment, prioritizing sharp visual clarity and directness. The absolute black page background against crisp white typography defines its strong, almost severe, aesthetic. Information density is managed through precise typographic hierarchy and generous spacing, allowing the bold visual statements to breathe. The overall impression is one of confident, minimalist authority.
colors:
  absolute-black: "#000000"
  pure-white: "#ffffff"
  charcoal-gray: "#747474"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.13
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.31
spacing:
  elementGap: 28px
  sectionGap: 188px
components:
  site-header-bar:
    role: 
  agency-tagline-block:
    role: 
  project-showcase-card:
    role: 
  text-link:
    role: Interactive navigation and calls to action.
  body-text:
    role: Standard informational content.
  headline-text:
    role: Primary page titles and section headers.
  ghost-button:
    role: Outlined, minimal interactive elements.
  metadata-text:
    role: Contextual, smaller information like location or time.
---

## Overview

**North Star:** High-contrast digital canvas – a monochrome composition where every element stands out with graphic precision.

This design system presents as a stark, high-contrast monochrome environment, prioritizing sharp visual clarity and directness. The absolute black page background against crisp white typography defines its strong, almost severe, aesthetic. Information density is managed through precise typographic hierarchy and generous spacing, allowing the bold visual statements to breathe. The overall impression is one of confident, minimalist authority.

### Do's

- Prioritize a strict monochrome palette of Absolute Black (#000000) and Pure White (#ffffff) for primary elements, with Charcoal Gray (#747474) as a secondary accent.
- Utilize Spezia 400 as the sole typeface across all elements, maintaining a unified visual language.
- Employ generous vertical spacing, defaulting to a section gap of 188px, to create clear hierarchy and visual breathing room.
- Maintain a sharp, unrounded aesthetic by setting all component radii to 0px.
- Ensure all interactive elements, including ghost buttons and links, are rendered in Pure White (#ffffff) on Absolute Black (#000000) backgrounds.
- Use 24px and 48px from the typographic scale with their respective line heights (1.13 and 1.31) for consistent text sizing.

### Don'ts

- Avoid the introduction of any chromatic colors; maintain the strictly achromatic theme.
- Do not deviate from the Spezia font family or its specified weight of 400 for any text.
- Refrain from using any rounded corners or soft shapes across the interface.
- Do not use subtle variations in gray for backgrounds; stick to the absolute contrast of #000000 and #ffffff.
- Avoid adding box shadows or elevation effects, as the design relies on flat, high-contrast layers for depth.
- Do not implement traditional button styles with solid backgrounds; favor ghost buttons or simple text links.

### Layout

The layout is characterized by a full-bleed, edge-to-edge dark background, predominantly Absolute Black. The page content is largely left-aligned, with a clear global header that maintains a minimal text-based navigation. Sections within the page are separated by significant vertical spacing, like the 188px section gap, creating distinct content blocks. The primary content arrangement uses a top-down information hierarchy, with large headlines followed by descriptive text. Product or project showcases often feature large, centrally-presented framed visuals accompanied by minimal text, creating a strong focal point. The page does not appear to utilize a fixed maximum width for its content, allowing elements to occupy the full browser width, but sections are carefully composed to avoid horizontal sprawl.

### Imagery

This site features a dual approach to imagery. The initial hero section is purely typographic, relying on the stark contrast of large white text on black. Subsequent sections, particularly product showcases, use highly stylized 3D renders or product shots that feel integrated into a digital experience or interface. These visuals are typically contained within rectangular frames, sometimes with a slight 'device screen' aesthetic and a subtle outer glow or border effect, as seen in the Adidas example. The imagery serves to demonstrate technical capability and creative output, rather than provide decorative atmosphere, with a focus on product or experience showcase. Icons, when present, are mono-color and minimalistic, aligning with the overall sharp, unadorned aesthetic.

---
version: alpha
name: Gt-america
description: The GT America visual system is a stark, high-contrast exploration of primary colors, mimicking vintage packaging and pop-art aesthetics. It deploys a limited palette of white, vibrant blue, and punchy orange against a dominant white canvas. Type is paramount, often oversized and serving as graphic elements, with borders and outlines heavily used to delineate content rather than subtle shadows. The aesthetic is bold, playful, and intentionally draws attention through its raw, unfiltered color usage and maximalist typographic approach.
colors:
  canvas-white: "#ffffff"
  electric-blue: "#0000ff"
  orange-punch: "#ff3500"
  ink-black: "#000000"
  vivid-indigo: "#0028ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.17
    letterSpacing: 0.36px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.23
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.22
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.12
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 108px
    lineHeight: 1.11
    letterSpacing: -2.7px
  display:
    fontFamily: "system-ui"
    fontSize: 900px
    lineHeight: 0.74
    letterSpacing: -36px
spacing:
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 96px
components:
  ghost-button-blue-type:
    role: Interactive controls with minimal visual footprint, often in navigation or secondary actions, emphasized by type color and a hairline border.
  ghost-button-orange-type:
    role: Interactive controls for less critical actions, using the secondary brand color for text and border, maintaining a minimalist appearance.
  pill-button-orange-filled:
    role: Primary call-to-action buttons, highly prominent with a filled brand color and large, playful padding, suggesting interactive delight.
  ghost-button-white-bg-blue-type:
    role: A subtle interactive control primarily for navigation or utility, used when the background demands a distinct white container.
  text-input-white-bg-blue-border:
    role: Standard text input field on a light background, outlined with the primary brand blue to maintain visual consistency.
  text-input-solid-blue:
    role: Monochromatic text input designed to integrate with backgrounds, where the input field is the primary Electric Blue.
  pill-input-solid-blue:
    role: A decorative or interactive input field that adopts a pill shape and solid blue background for visual distinctiveness.
  pill-input-ghost-blue:
    role: An outlined, pill-shaped input, serving as a filter or search bar, maintaining the brand's graphic, outlined aesthetic.
---

## Overview

**North Star:** Vivid Pop-Art Canvas

The GT America visual system is a stark, high-contrast exploration of primary colors, mimicking vintage packaging and pop-art aesthetics. It deploys a limited palette of white, vibrant blue, and punchy orange against a dominant white canvas. Type is paramount, often oversized and serving as graphic elements, with borders and outlines heavily used to delineate content rather than subtle shadows. The aesthetic is bold, playful, and intentionally draws attention through its raw, unfiltered color usage and maximalist typographic approach.

### Do's

- Prioritize GT America Intl typeface for all textual content, leveraging its diverse sizes and stylistic alternates for both readability and graphic impact.
- Use Electric Blue (#0000ff) as the primary accent for interactive elements, links, and borders to create a cohesive interactive language.
- Implement Orange Punch (#ff3500) exclusively for primary call-to-action buttons and critical information to ensure high visual urgency.
- Employ Canvas White (#ffffff) as the default background for most page sections and as the primary text color on dark backgrounds.
- Apply 9999px border-radius to all buttons and input fields that require a 'pill' shape, creating a consistent playful edge.
- Utilize 12px as the standard element gap to create comfortable breathing room between components on the page.
- Emphasize content through strong outlines and borders using brand colors, rather than relying on subtle shadows or gradients for separation.

### Don'ts

- Avoid using standard drop shadows for UI elements; instead, use white 1px borders and inner box shadows if elevation is necessary to maintain the graphic, outlined aesthetic.
- Do not introduce additional chromatic colors; the palette is explicitly limited to Electric Blue and Orange Punch as accents.
- Refrain from using gradients for backgrounds or components, as the design system relies on flat, high-contrast color blocks.
- Do not deviate from the specified GT America font families or their provided feature settings; these are critical to the brand identity.
- Avoid subtle, low-contrast text for body copy; ensure sufficient contrast with Ink Black (#000000) or Electric Blue (#0000ff) on Canvas White (#ffffff).
- Do not use generic padding or spacing values; adhere strictly to the `spacing` tokens to maintain the established rhythm and density.
- Do not add decorative flourishes or complex imagery that breaks from the strict two-tone primary color scheme and graphic, type-driven approach.

### Layout

The page primarily uses a full-bleed layout, particularly for large typographical hero sections and the overall wrapper. Content within these sections tends to be loosely centered or arranged in a dynamic, overlapping collage style, especially with the 'packaging' elements. There isn't a strict grid for content arrangement, rather a dynamic, somewhat chaotic, yet visually unified composition, as seen in the overlapping product boxes. Vertical rhythm is established through consistent section gaps, but individual elements within sections may have varied spacing for graphic effect. Navigation is minimal, likely a fixed top bar or subtle overlay. The page avoids conventional card grids or complex structural elements in favor of a simpler, more expressive arrangement.

### Imagery

Imagery is almost entirely absent, replaced instead by typography as the dominant visual element. When graphics are present, they are either simple, high-contrast line art or solid color shapes, often abstract or iconic, using the brand's Electric Blue and Orange Punch. Illustrations are flat, outlined, and minimal, serving decorative and atmospheric roles rather than explanatory content. Icons, if visible, maintain a bold, filled style consistent with the graphic typography. The density is very text-dominant, with oversized type acting as large-scale visual elements or even full-bleed backgrounds.

### Elevation

The design intentionally avoids traditional shadows for elevation. Instead, a graphic, 'cut-out' or 'layered' effect is achieved through the use of 1px solid white borders and white box-shadows (rgb(255, 255, 255) 1px 0px 0px 0px, etc.). This creates a stark, physical separation of elements without the softness or depth implied by conventional shadows, reinforcing the pop-art, package-design aesthetic.

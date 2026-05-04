---
version: alpha
name: Basic.Space
description: Basic.Space presents a stark, almost utilitarian aesthetic, building on a foundation of pure achromatic neutrals. The design is characterized by crisp lines, minimal ornamentation, and a compact, information-dense display of products. Typography is consistently dark and primary, creating a strong contrast against the light canvas, while interactive elements are subtly defined by thin borders and precise spacing rather than bold color accents.
colors:
  canvas-fog: "#ebebeb"
  inkwell: "#000000"
  surface-frost: "#cecccc"
  pure-white: "#ffffff"
  subtle-ash: "#f7f7f7"
  placeholder-gray: "#b5b5b5"
  electric-blue: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.12
    letterSpacing: -0.88px
spacing:
  cardRadius: 2px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 48px
components:
  outlined-pill-button:
    role: Secondary action button, often used for navigation or filtering.
  ghost-link-button:
    role: Minimal interactive text link or navigation item.
  product-card-minimal:
    role: Default display for product listings with no visible border or shadow.
  product-card-hover:
    role: Product display with a subtle radius, likely for interactive states.
  search-input-filled:
    role: Primary search input field.
  text-input-underlined:
    role: Minimal input field, typically for forms.
---

## Overview

**North Star:** Gallery Grid Monochrome.

Basic.Space presents a stark, almost utilitarian aesthetic, building on a foundation of pure achromatic neutrals. The design is characterized by crisp lines, minimal ornamentation, and a compact, information-dense display of products. Typography is consistently dark and primary, creating a strong contrast against the light canvas, while interactive elements are subtly defined by thin borders and precise spacing rather than bold color accents.

### Do's

- Prioritize Inkwell (#000000) for all main text and Canvas Fog (#ebebeb) for backgrounds and subtle borders, establishing the core monochrome palette.
- Use 9999px border radius for all buttons and small interactive elements to create a pill-like, contained appearance.
- Apply 2px border radius to product cards and images to provide a consistent, slight softening of edges.
- Maintain high visual contrast for text by almost exclusively using Inkwell (#000000) on light backgrounds like Pure White (#ffffff), Subtle Ash (#f7f7f7), or Canvas Fog (#ebebeb).
- Employ the FTBasicSpace font consistently across all typographic elements, leveraging its different weights (400, 500, 600) to create hierarchy.
- Utilize 4px as the foundational unit for inner element spacing and padding to ensure compact visual density.
- Reserve Electric Blue (#007aff) for functional accents such as app download banners or interactive highlights, avoiding decorative overuse.

### Don'ts

- Do not introduce highly saturated colors for primary UI elements; adhere strictly to the achromatic palette with minimal Electric Blue accents.
- Avoid heavy shadows or gradients; rely on clean borders and subtle background shifts to define UI layers.
- Do not deviate from the specified border radii; maintain 9999px for buttons, 2px for cards, and 16px for inputs.
- Refrain from using varied typefaces or decorative font styles; FTBasicSpace covers all typographic needs.
- Do not use large, wide spacing for elements or sections; the system favors a compact, information-dense layout.
- Avoid complex, multi-layered components; keep interactive elements simple with clear, minimal styling.
- Do not use more than 1px border thickness; the system relies on hairline definitions for structure.

### Layout

The page adheres to a mostly full-bleed layout with content sections but employs a maximum width constraint implicitly for readability within those sections, centered horizontally. The hero section is a full-bleed visual banner, potentially with superimposed text. Section rhythm is primarily driven by color shifts between Canvas Fog, Subtle Ash, and Surface Frost backgrounds, creating distinct visual blocks often separated by thin horizontal lines. Content is frequently arranged in multi-column grids for product listings and alternating text-left/image-right compositions for feature sections. Overall density is compact, prioritizing product visibility in tight grids. Navigation is a sticky top bar with minimal links and a central search input.

### Imagery

The site uses a mix of high-quality product photography and artistic lifestyle shots focused on objects, not people. Photography is typically clean, high-key, and often isolated from context, emphasizing the product itself. Illustrations are stylized and abstract, used sparingly as visual highlights without explicit outlining. Icons are filled and monochromatic (Inkwell or Placeholder Gray), maintaining the minimal aesthetic. Imagery serves primarily as a product showcase and decorative atmosphere, with a high density of images relative to text in product grids.

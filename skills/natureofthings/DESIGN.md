---
version: alpha
name: natureofthings
description: natureofthings uses a quiet luxury aesthetic, built on a foundation of clean achromatic grays and whites. Typography is compact and precise, using Founders Grotesk for most content, often with elevated letter-spacing. Interaction is primarily driven by subtle outline changes and text underlines, with a single muted blue providing unobtrusive functional contrast without disrupting the monochrome canvas.
colors:
  canvas-white: "#ffffff"
  ink: "#000000"
  muted-stone: "#696159"
  soft-gray: "#746c6c"
  interaction-azure: "#0066cc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
    letterSpacing: 0.12px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: 0.18px
  display:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.1
    letterSpacing: 0.3px
spacing:
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 40px
components:
  navigation-link-white:
    role: Ghost link
  navigation-link-dark:
    role: Ghost link
  input-field-ghost:
    role: Data entry
  inline-text-link:
    role: Navigation
  search-button:
    role: Icon button
  shop-all-button:
    role: Ghost button with padding
  privacy-policy-link:
    role: Underlined link
---

## Overview

**North Star:** Minimalist gallery canvas

natureofthings uses a quiet luxury aesthetic, built on a foundation of clean achromatic grays and whites. Typography is compact and precise, using Founders Grotesk for most content, often with elevated letter-spacing. Interaction is primarily driven by subtle outline changes and text underlines, with a single muted blue providing unobtrusive functional contrast without disrupting the monochrome canvas.

### Do's

- Prioritize Ink (#000000) for all primary text and Canvas White (#ffffff) for backgrounds to maintain a clean, high-contrast aesthetic.
- Use Founders Grotesk for all primary typographic elements, adjusting letter-spacing by 0.01em or 0.04em to create subtle variations in emphasis.
- Apply 0px border-radius to interactive buttons unless a perfect circle is intended, favoring sharp edges for UI elements.
- Utilize 40px as the standard vertical separation between major content sections.
- When a distinct call to action is required, use Interaction Azure (#0066cc) for text and outline, avoiding solid colored backgrounds for interactive elements.
- Maintain comfortable density using 8px as the base unit for element gaps, ensuring consistent spacing between components.
- Employ Soft Gray (#746c6c) exclusively for placeholder text within input fields, differentiating it from active input.

### Don'ts

- Avoid arbitrary color usage; retain the minimalist achromatic palette with Interaction Azure (#0066cc) as the sole accent color.
- Do not use heavy shadows or gradients; rely on contrast and spacing to define UI hierarchy.
- Refrain from mixing fonts excessively; Founders Grotesk should dominate, with highly limited use of others for specific technical purposes.
- Do not break the 0px radius rule for primary buttons; rounded corners are a specific stylistic departure from this system.
- Avoid dense, information-heavy blocks; ensure generous use of whitespace with a comfortable density strategy.
- Do not introduce strong visual metaphors or decorative elements that disrupt the clean, gallery-like canvas.
- Do not use filled buttons as primary actions; always prefer outlined or text links with Interaction Azure (#0066cc) for emphasis.

### Layout

The page maintains a centered, max-width contained layout, though specific sections may extend full-bleed. The hero section often features a centered headline over a background image or a clean product shot. Content proceeds with consistent vertical spacing, often alternating between text-left/image-right sections and centered text blocks. Card grids, like for product categories, are present but not overly dense. Navigation is handled by a discreet top bar that may become sticky, providing a minimalist browsing experience that prioritizes content.

### Imagery

Imagery primarily features product shots or carefully composed art-direction photography. Product shots are typically clean, isolated items presented on a white or light gray background. Lifestyle photography embeds products or abstract elements within natural, often muted-tone, outdoor settings, offering a sense of calm and organic origin. Images are usually contained within rectangular bounds, without overlapping elements, and serve as decorative atmosphere or product showcase. Icons, when present, are simple, outlined, and monochromatic, maintaining the understated aesthetic. The overall image density is moderate, carefully balanced with text to create a feeling of spaciousness.

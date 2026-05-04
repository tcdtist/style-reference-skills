---
version: alpha
name: Resident
description: Resident employs a disciplined, gallery-like visual language, emphasizing product photography with stark white space and precise, minimal typography. Achromatic tones of black and white dominate, providing a quiet canvas for product hero shots. The design system leans into content-rich layouts, using tight typographic control for an authoritative, editorial feel, with interactive elements sparingly articulated through subtle borders and text rather than bold fills.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  muted-ash: "#979797"
  graphite: "#333333"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.03px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.29
    letterSpacing: -0.03px
  display:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1
    letterSpacing: -0.037px
spacing:
  elementGap: 21px
  sectionGap: 35px
components:
  primary-navigation-link:
    role: Top-level navigation items
  secondary-ghost-button:
    role: Language switcher, login links
  outlined-pill-button:
    role: Small interactive elements like language selection (e.g. 'EN/DE')
  product-grid-card:
    role: Displaying product images and brief descriptions in a gallery format
  text-input-field:
    role: Form fields like login, password
---

## Overview

**North Star:** Gallery Grid Serenity

Resident employs a disciplined, gallery-like visual language, emphasizing product photography with stark white space and precise, minimal typography. Achromatic tones of black and white dominate, providing a quiet canvas for product hero shots. The design system leans into content-rich layouts, using tight typographic control for an authoritative, editorial feel, with interactive elements sparingly articulated through subtle borders and text rather than bold fills.

### Do's

- Prioritize product photography as the focal point, allowing images to extend full-bleed or occupy significant visual space without heavy UI overlays.
- Use Ink Black (#000000) for all primary text and headings against Canvas White (#ffffff) backgrounds to maintain a high-contrast, editorial feel.
- Maintain a density of comfortable spacing by defaulting to 21px for element gaps and 14px for card padding, creating breathing room around content.
- Apply 0px border-radius to all major interactive elements and cards, preserving the sharp, architectural aesthetic.
- Utilize MessinaSansWeb for headlines and prominent body text with letter-spacing adjusted for precise visual fit, like -0.0370em at 27px.
- Employ `sans-serif` (system font) for secondary and utility text, ensuring high legibility and efficiency for smaller, functional details.
- Use subtle, text-based interactive elements (buttons, links) with minimal styling — often transparent backgrounds and thin borders instead of filled shapes.

### Don'ts

- Avoid using saturated or bright colors; restrict the palette almost entirely to achromatic neutrals (Canvas White, Ink Black, Muted Ash, Graphite).
- Do not use box-shadows or elevated elements; maintain a flat, two-dimensional design language for all UI components.
- Refrain from using heavily styled buttons with solid color fills; default to text links, ghost buttons, or subtly outlined elements.
- Do not introduce decorative gradients or complex backgrounds; interfaces should be clean Canvas White to highlight content.
- Avoid generic large-scale letter-spacing; use the precise, negative letter-spacing defined for MessinaSansWeb at larger sizes for consistency.
- Do not break away from the minimal, stark presentation of interactive elements; avoid hover effects that drastically change component appearance.

### Imagery

The imagery is dominated by high-quality product photography and architectural interior shots. Treatment is often full-bleed or large-format, allowing the visual to dictate the section. Products are typically shown in sophisticated, minimalist environments, often with stark lighting. Some lifestyle and landscape photography provides contextual atmosphere. Image density is high, with visuals often taking precedence over text. Icons (e.g., search, cart) are minimal, outlined, and in Ink Black, reinforcing the austere aesthetic.

### Elevation

The design intentionally eschews all forms of elevation and shadows. Surfaces are designed to appear flat and two-dimensional, creating a clean, almost architectural blueprint feel. Depth is implied through high-contrast typography and precise spacing, rather than layering or light effects. This approach reinforces a gallery-like presentation of content, aligning with the brand's focus on product purity and form.

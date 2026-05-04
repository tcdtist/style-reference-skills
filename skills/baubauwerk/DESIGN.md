---
version: alpha
name: Baubauwerk
description: Baubauwerk presents a stark, high-contrast visual system built on uncompromising black and white. Typography carries the primary visual weight, feeling both academic and modern, with minimal use of color beyond functional roles. Surfaces are flat and unadorned, relying on crisp text and strong compositional lines rather than elevation or gradients. The overall atmosphere is direct, confident, and text-focused, allowing content to take precedence without visual interruption.
colors:
  canvas-white: "#ffffff"
  midnight-black: "#000000"
  ghost-border: "#d8d8d8"
  subtle-gray: "#9b9b9b"
  button-text-gray: "#4e4a4a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.33
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.25
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
spacing:
  elementGap: 20px
  sectionGap: 40px
components:
  ghost-action-button:
    role: Secondary action button for filtering and navigation.
  primary-action-button:
    role: Prominent calls to action.
  feature-card:
    role: Content container for articles or project showcases.
  category-badge:
    role: Small, descriptive labels for content.
---

## Overview

**North Star:** Black & White Manifesto

Baubauwerk presents a stark, high-contrast visual system built on uncompromising black and white. Typography carries the primary visual weight, feeling both academic and modern, with minimal use of color beyond functional roles. Surfaces are flat and unadorned, relying on crisp text and strong compositional lines rather than elevation or gradients. The overall atmosphere is direct, confident, and text-focused, allowing content to take precedence without visual interruption.

### Do's

- Prioritize text with Midnight Black (#000000) on Canvas White (#ffffff) for all primary content and actions, ensuring AAA contrast.
- Use Telegraf for all headline-level text (sizes 22px-60px) and Quattrocento Sans for body text (sizes 14px-30px, always with letterSpacing normal).
- Maintain a strict '0px' border-radius for all component corners, reinforcing a sharp and angular aesthetic.
- Implement Ghost Action Buttons with 1px Ghost Border (#d8d8d8) and text color Button Text Gray (#4e4a4a) for secondary interactions.
- Implement Primary Action Buttons with solid Midnight Black (#000000) backgrounds and Canvas White (#ffffff) text for critical interactions.
- Employ consistent 20px padding for element and card spacing, allowing content to breathe without excessive white space.

### Don'ts

- Avoid using saturated or bright colors; the system relies almost exclusively on achromatic tones.
- Do not introduce rounded corners or soft edges; all visual elements should adhere to a strict 0px border-radius.
- Refrain from adding UI shadows or significant elevation; surfaces should remain flat and compositional.
- Do not use generic system fonts when custom fonts Telegraf and Quattrocento Sans are specified; their distinctiveness is key to the brand.
- Avoid decorative gradients or background imagery on UI elements; maintain a clean, text-first presentation.
- Do not deviate from the specified spacing units; consistent element and card spacing is crucial for structure.

### Layout

The page structure is a contained layout, with content centered within a maximum width that supports a clear columned approach. The hero section features a prominent, centered headline with a minimal visual accent (the Berlin bear graphic). Sections often alternate between content blocks and image galleries. A consistent vertical rhythm is maintained with specific section and element gaps. Navigation is a simple top bar with left-aligned links and a right-aligned language toggle. Content often uses 2 or 3-column grids for feature cards or blog posts, creating a structured, information-dense display.

### Imagery

This system primarily uses embedded functional imagery: product screenshots, tightly cropped visual examples of work, and small profile pictures. Photography is typically high-contrast, often with a stark, journalistic quality and a focus on the subject. Illustrations, if present, are minimal and flat. Icons are generally filled and monochromatic. Imagery serves as explanatory content or showcases product/portfolio, rather than decorative atmosphere, and is often presented in small, contained squares.

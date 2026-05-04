---
version: alpha
name: Contract
description: The Contract design system by MDF Italia embodies a refined, architectural blueprint aesthetic: a stark monochromatic palette emphasizes structure and form. Typography is the primary visual communicator, utilizing a wide range of weights to establish hierarchy rather than color. Surfaces are clean and unadorned, promoting a focus on product photography and minimal, precise UI elements. The overall impression is one of understated luxury and functional clarity, where space and proportion play a crucial role.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  ash-gray: "#e5e7eb"
  slate-text: "#6b7280"
  medium-gray: "#b3b3b3"
  light-gray: "#bbbbbb"
  azure-accent: "#2563eb"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.002px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
    letterSpacing: -0.002px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.63
    letterSpacing: -0.025px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.13
    letterSpacing: -0.04px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.08
    letterSpacing: -0.04px
  display:
    fontFamily: "system-ui"
    fontSize: 100px
    lineHeight: 1
    letterSpacing: -0.05px
spacing:
  elementGap: 8px
  sectionGap: 69px
components:
  primary-ghost-button:
    role: Interactive control for primary actions, presenting as an outlined element to maintain a light visual footprint.
  text-link-button:
    role: Minimal interactive control for navigation or secondary actions, appearing as plain text.
  text-input-field:
    role: User input area for forms.
  office-product-card:
    role: Display individual product categories or offerings.
  key-value-circle:
    role: Highlights key features or services within a section.
  download-catalog-link:
    role: Direct call to action for downloading detailed information.
---

## Overview

**North Star:** Architectural Blueprint on Marble: Precise lines and forms over a neutral, expansive canvas.

The Contract design system by MDF Italia embodies a refined, architectural blueprint aesthetic: a stark monochromatic palette emphasizes structure and form. Typography is the primary visual communicator, utilizing a wide range of weights to establish hierarchy rather than color. Surfaces are clean and unadorned, promoting a focus on product photography and minimal, precise UI elements. The overall impression is one of understated luxury and functional clarity, where space and proportion play a crucial role.

### Do's

- Prioritize Ink Black (#000000) for all primary text and headings.
- Use Canvas White (#ffffff) for all main section backgrounds and card surfaces.
- Apply Plain typeface with specific letter-spacing values as defined in Typography for all text elements to maintain precise optical rhythm.
- Utilize Ash Gray (#e5e7eb) for subtle borders and dividers between content blocks and interactive elements.
- Maintain a compact density with an 8px element gap and 12px internal padding for cards.
- Form inputs should feature a 1px solid Slate Text (#6b7280) border with a 0px radius, aligning with the clean, unornamented aesthetic.
- Only use Azure Accent (#2563eb) for specific interactive feedback such as focus states or informational messages, never as a primary brand color.

### Don'ts

- Avoid using saturated background colors; all primary backgrounds should adhere to Canvas White (#ffffff) or Ink Black (#000000).
- Do not introduce decorative shadows or heavy gradients; the system relies on flat surfaces and high contrast.
- Refrain from using varied border radii across components; stick to 0px for most elements and 2px only for inputs.
- Do not deviate from the specified letter-spacing for 'Plain' font; optical precision is critical for this brand’s typographic identity.
- Do not use color to create hierarchy in text; rely on font weight and size variations within the `Plain` typeface.
- Avoid large, impactful graphics unless they are product photography; maintain a text-dominant, information-focused layout.
- Do not add unnecessary padding or margin; adhere to the defined spacing tokens for a consistently compact arrangement.

### Layout

The page primarily uses a full-bleed layout for sections, with strong visual separation often created by alternating Ink Black (#000000) and Canvas White (#ffffff) backgrounds. Content within these sections is typically contained within a maximum width (not explicitly defined, but visually present). The hero section features a large, striking image or video. Content is often arranged in simple two-column text-left/image-right patterns or centered stacking for emphasis. Card grids are used for feature presentation or product categories. Navigation is a minimalist top bar, with elements appearing lightweight and subservient to the main content.

### Imagery

Imagery primarily consists of high-quality product photography and architectural renders. These visuals are typically contained within their sections, often shown as part of a larger composition or in a grid, with clean edges. Product shots are often full-frame or tightly cropped, emphasizing the material and form of the furniture. There are minimal decorative illustrations or abstract graphics. Icons are monochrome, typically filled where present, and serve a functional purpose.

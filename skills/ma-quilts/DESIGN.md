---
version: alpha
name: MA Quilts
description: MA Quilts employs a vibrant, handcrafted aesthetic with a focus on bold typography and a playful, primary color palette. The design balances generous white space with striking color blocks and outlined interactive elements. Typography is confident and uppercase for headlines, creating a distinct visual voice, while subtle dashed borders and high radius buttons add a touch of playful warmth.
colors:
  canvas-white: "#ffffff"
  text-black: "#000000"
  accent-orange: "#f15a24"
  canary-yellow: "#ffed8c"
  midnight-ink: "#050133"
  secondary-text-gray: "#333333"
  utility-gray: "#cce1e2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 2
  button:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: 0.06px
  subheading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
    letterSpacing: 0.12px
  display:
    fontFamily: "system-ui"
    fontSize: 126px
    lineHeight: 1
    letterSpacing: 0.06px
spacing:
  buttonRadius: 66px
  elementGap: 14px
  sectionGap: 54px
components:
  primary-outlined-button:
    role: Call to action button
  hero-headline:
    role: Largest display text
  section-headline:
    role: Major section titles
  nav-link:
    role: Main navigation item
  image-card-footer:
    role: Caption for product or blog post image
---

## Overview

**North Star:** Joyful Quilted Canvas

MA Quilts employs a vibrant, handcrafted aesthetic with a focus on bold typography and a playful, primary color palette. The design balances generous white space with striking color blocks and outlined interactive elements. Typography is confident and uppercase for headlines, creating a distinct visual voice, while subtle dashed borders and high radius buttons add a touch of playful warmth.

### Do's

- Use Accent Orange (#f15a24) exclusively for primary interactive elements, major headings, and brand accents.
- Maintain a clear visual hierarchy by employing Manrope for all headings with appropriate letter-spacing, and Roboto Mono for body and supporting text.
- Apply a 66px border-radius to all buttons for a consistent soft, pill-like appearance.
- Implement dashed borders (e.g., 4px dashed) for subtle visual divisions or decorative elements, particularly around image cards.
- Utilize Canvas White (#ffffff) as the dominant background, balanced with Canary Yellow (#ffed8c) for distinct section breaks or focused content blocks.
- Ensure generous spacing around all components; an `elementGap` of 14px is a good default.
- Adopt an uppercase style for all significant headings using Manrope to reinforce the system's bold typographic identity.

### Don'ts

- Do not introduce new primary action colors; Accent Orange (#f15a24) serves this role through its outlined usage.
- Avoid using solid background fills for buttons; prefer the outlined style with Accent Orange borders.
- Do not deviate from the Manrope and Roboto Mono font families for text content.
- Avoid tight spacing between elements; maintain adequate `elementGap` and `cardPadding` to prevent a cramped appearance.
- Do not use shadows for elevation; the design system relies on color blocks, borders, and spacing for visual hierarchy instead.
- Do not use generic system fonts; always specify Manrope or Roboto Mono.
- Avoid using full-bleed imagery without surrounding white space; images should feel contained within the layout.

### Layout

The page uses a maximum-width contained layout, with content centered. The hero section is characterized by a two-column split, with a large, bold headline on the left against a Canary Yellow background and a compelling product image on the right. Subsequent sections feature alternating text and visual content, with a clear vertical rhythm. Content is arranged in flexible grids for product displays (3-4 columns) and blog posts (3 columns). The navigation is a minimalist top bar with text links, reinforcing the clean aesthetic.

### Imagery

The site heavily features product photography of textile art (quilts and quilted coats). These images are tightly cropped, showcasing patterns and textures, often against solid, contrasting backgrounds like pale pink. The photography is clean, well-lit, and product-focused, with no lifestyle elements. Icons are minimal, represented by the custom 'MA' logo in the header, suggesting a clean, graphic approach. The overall density is balanced, allowing the product visuals to speak for themselves within a spacious layout.

---
version: alpha
name: Prisma
description: The Prisma design system evokes the precision of a high-performance developer tool. Predominantly achromatic surfaces in shades of cool gray and crisp white create an environment of focus and clarity. A vibrant teal (#14B8A6) acts as a singular, sharp accent, drawing attention to critical actions and active states. Typography is distinct, with a custom geometric sans-serif for headlines that conveys technical authority, complemented by a highly legible system font for body text.
colors:
  cloud-white: "#ffffff"
  ghost-gray: "#f3f4f6"
  border-frost: "#e2e8f0"
  charcoal-black: "#111827"
  obsidian-text: "#1d242f"
  muted-stone: "#6b7280"
  soft-stone: "#718096"
  subtle-ash: "#9ca3af"
  prisma-teal: "#14b8a6"
  deep-teal: "#0d9488"
  teal-sky-gradient: "#0d9488"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: 0.033px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: 0.1px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: 0.1px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.13
    letterSpacing: 0.1px
spacing:
  elementGap: 4px
  sectionGap: 48px
components:
  feature-cards-row:
    role: 
  cta-button-group-with-code-snippet:
    role: 
  testimonial-cards:
    role: 
  primary-action-button:
    role: Call to action
  secondary-ghost-button:
    role: Secondary action button
  subtle-background-button:
    role: Tertiary action button
  pill-ghost-button:
    role: Small, less prominent actions or tags
  feature-card:
    role: Content container
  code-snippet-button:
    role: Execute or copy technical commands
  product-navigation-link:
    role: Top navigation item
---

## Overview

**North Star:** Architectural blueprint on white marble. Light, precise structures with sharp accents.

The Prisma design system evokes the precision of a high-performance developer tool. Predominantly achromatic surfaces in shades of cool gray and crisp white create an environment of focus and clarity. A vibrant teal (#14B8A6) acts as a singular, sharp accent, drawing attention to critical actions and active states. Typography is distinct, with a custom geometric sans-serif for headlines that conveys technical authority, complemented by a highly legible system font for body text.

### Do's

- Use Border Frost (#E2E8F0) for all component borders and separators.
- Apply 6px border-radius as the default for most interactive elements and cards, reserving 10px for larger contextual elements.
- Prioritize Prisma Teal (#14B8A6) exclusively for primary calls to action to maintain its impact.
- Employ Mona Sans VF for all primary headings, ensuring a letter-spacing of 0.1em at display sizes for distinctiveness.
- Maintain a clear visual hierarchy by using the progression of Charcoal Black (#111827) for headings, Obsidian Text (#1D242F) for body, and Muted Stone (#6B7280) for secondary details.
- Space elements using multiples of 4px as a base unit, with `elementGap` at 4px, `cardPadding` at 16px, and `sectionGap` at 48px to maintain density and rhythm.
- Use Mona Sans Mono VF (16px, weight 400) for all code-related content, including inline snippets and code block buttons.

### Don'ts

- Do not introduce new chromatic colors outside of the teal brand palette in interactive contexts.
- Avoid shadows other than rgba(0,0,0,0.04) 0px 1px 2px 0px; elevation is primarily achieved through background color shifts and borders.
- Do not deviate from the specified letter-spacing for Mona Sans VF headings; the 0.1em value is integral to its character.
- Do not use highly rounded forms (like the pill shape) for anything other than small, tertiary buttons or tags.
- Avoid using bold or semi-bold weights for body text; rely on font size and color for emphasis with Inter font.
- Do not use generic system fonts for code snippets; Mona Sans Mono VF ensures consistency and readability for technical content.

### Layout

The page uses a centered, max-width layout for most content, with a consistent internal padding. The hero section is full-width with a background gradient, but its content is centrally aligned. Sections generally alternate between centered stacks of content and common left-text/right-image (or vice-versa) patterns. Feature sections often use 3-column card grids. There's a consistent vertical rhythm with sections separated by 'sectionGap' (48px) and internal elements by 'elementGap' (4px). The navigation is a sticky top bar, providing persistent access while scrolling.

### Imagery

The visual language for imagery is primarily focused on product screenshots and custom abstract graphics. Text-heavy UI screenshots of the Prisma Studio and code editors are common, presented within contained, sharp-cornered modules with a subtle gray border. Abstract graphics, often in shades of light blue or teal, appear as background elements or subtle decorative flourishes, such as speckles in the hero section or subtle geometric shapes. Icons are typically outlined or filled in a mono-color (either black or Prisma Teal), appearing functional and descriptive rather than purely decorative. The overall density is balanced, with imagery serving explanatory or demonstrative roles alongside ample whitespace.

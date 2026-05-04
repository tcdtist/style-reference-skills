---
version: alpha
name: Electronic Materials Office®
description: The Electronic Materials Office design system presents a future-forward, material-focused aesthetic: deep charcoal surfaces provide a sophisticated backdrop for precise typography. A single vibrant orange acts as a focused accent, guiding user interaction and highlighting key product details. The overall experience is one of refined minimalism, emphasizing form and function through limited color, structured spacing, and highly legible text.
colors:
  carbon: "#202020"
  vanilla-ice: "#FFFFFF"
  ash: "#9d9d9d"
  obsidian: "#000000"
  power-orange: "#f45500"
  electric-violet: "#9e9eff"
  dark-umber: "#933400"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.06
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.62px
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1.31
  display:
    fontFamily: "system-ui"
    fontSize: 86px
    lineHeight: 1.33
spacing:
  cardRadius: 20px
  buttonRadius: 16px
  elementGap: 4px
  sectionGap: 48px
components:
  primary-action-button-pre-order:
    role: Main call-to-action button, driving conversions.
  play-film-button:
    role: Secondary action button, typically embedded in rich media sections.
  compact-accent-button:
    role: Small, functional button for specific actions like 'Pre-order' in the header.
  product-feature-card:
    role: Displays key features or specifications with an associated visual.
  transparent-card:
    role: Used for content overlays or sections that should blend with the background.
---

## Overview

**North Star:** Deep charcoal precision

The Electronic Materials Office design system presents a future-forward, material-focused aesthetic: deep charcoal surfaces provide a sophisticated backdrop for precise typography. A single vibrant orange acts as a focused accent, guiding user interaction and highlighting key product details. The overall experience is one of refined minimalism, emphasizing form and function through limited color, structured spacing, and highly legible text.

### Do's

- Use Carbon (#202020) as the dominant background color for most sections to maintain the dark theme.
- Apply Power Orange (#f45500) exclusively for primary calls-to-action and key interactive accents.
- Prioritize GT-Flexa for all headings and UI elements that require a distinct brand voice.
- Employ Tobias-light with negative letter-spacing for large, impactful headlines to create a sense of elegant precision.
- Utilize 20px border-radius for cards and content containers, and 16px for primary action buttons.
- Maintain a comfortable density with element gaps of 4px and section gaps of 48px.
- Ensure all interactive text and links use Electric Violet (#9e9eff) for recognition, only if they are true interactive links. Vanilla Ice (#ffffff) should be used for static link-like text.

### Don'ts

- Do not introduce new vibrant colors outside of Power Orange and Electric Violet for interaction or branding.
- Avoid using serif typography for UI elements or headings; reserve Times for body content only.
- Do not deviate from the established 20px and 16px border-radii for cards and buttons respectively.
- Refrain from adding arbitrary shadows or borders to elements; elevation is used sparingly and deliberately.
- Do not use Electric Violet for button backgrounds; it is primarily for links and borders.
- Avoid excessive spacing or padding that breaks the comfortable density; stick to 4px multiples for consistency.
- Do not use pure black (#000000) as a background unless specifically for text on a white element or as a deep accent shade.

### Layout

The page primarily uses a full-bleed layout on a dark background, interspersed with content sections that maintain a visual max-width for readability, even if technically full-bleed. The hero section features a centered product visual over a dark background. Sections alternate between centered content stacks and dynamic arrangements of text and product imagery within a grid-like structure. There's a consistent vertical rhythm created by the 48px section gap, providing ample breathing room. Navigation is minimal, featuring a discreet top bar with essential links and a prominent 'Pre-order' button.

### Imagery

This system primarily uses high-fidelity product photography of the keyboard, tightly cropped and presented on a Carbon (#202020) background. The visuals are clean, showcasing the product's materiality and design. There are also abstract illustrations of keycaps that maintain a flat, geometric style. Icons, when present, are outlined and monochromatic. Imagery serves to showcase the product's features and aesthetics rather than providing atmosphere, maintaining a product-focused, almost studio-shot quality.

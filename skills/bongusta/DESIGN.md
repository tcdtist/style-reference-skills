---
version: alpha
name: Bongusta
description: Bongusta embraces a minimalist approach with a subtle touch of warmth through its earthy, almost sepia-toned neutral palette. The system prioritizes clarity and directness with crisp typography, understated components, and an absence of heavy shadows or complex gradients. Visual hierarchy is achieved through careful typographic sizing and a singular, deep plum color that acts as the primary interactive and branding accent, offering a sophisticated contrast to the prevalent soft grays. Surfaces are uncluttered, and elevation is minimal, creating an open and airy feel.
colors:
  paper-white: "#ffffff"
  plum-core: "#321929"
  concrete-gray: "#e0dddf"
  ink-black: "#000000"
  shadow-tint: "#808080"
  input-charcoal: "#1d1d1f"
  ghost-gray: "#f0f0f0"
  muted-stone: "#636363"
  faded-text: "#6f6d6b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.7
    letterSpacing: 0.154px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.098px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: 0.126px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: 0.154px
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.5
    letterSpacing: 0px
spacing:
  cardRadius: 0px
  buttonRadius: 9999px
  elementGap: 4-10px
  sectionGap: 48px
components:
  pill-ghost-button:
    role: Primary interactive element for calls to action.
  product-card:
    role: Displaying product listings, features, and content modules.
  filled-input-field:
    role: User input for forms and subscriptions.
  outline-ghost-button:
    role: Secondary action or navigation within content area.
  white-background-button:
    role: Used for specific interactive elements that need to stand out on darker backgrounds.
  flat-badge:
    role: Categorization or short status labels.
  white-fill-badge:
    role: Highlighting news or important tags.
---

## Overview

**North Star:** Warm Minimalism Canvas

Bongusta embraces a minimalist approach with a subtle touch of warmth through its earthy, almost sepia-toned neutral palette. The system prioritizes clarity and directness with crisp typography, understated components, and an absence of heavy shadows or complex gradients. Visual hierarchy is achieved through careful typographic sizing and a singular, deep plum color that acts as the primary interactive and branding accent, offering a sophisticated contrast to the prevalent soft grays. Surfaces are uncluttered, and elevation is minimal, creating an open and airy feel.

### Do's

- Prioritize NeueHaasGrotesk for all body and UI text at 400 weight with 0.0070em letter-spacing.
- Use Plum Core (#321929) for all primary interactive elements, headings, and branding accents.
- Ensure buttons adhere to a 9999px border-radius, creating a distinct pill shape.
- Maintain a transparent background and 0px border-radius for product cards, letting content define their shape.
- Apply Concrete Gray (#e0dddf) for subtle borders and dividers, maintaining visual lightness.
- Separate major page sections with a vertical gap of approximately 48px to create breathing room.
- Use Bongusta (500 weight, 28px) exclusively for main headings to establish visual hierarchy without heavy bolding.

### Don'ts

- Avoid heavy drop shadows or complex gradients; rely on flat design and subtle borders for depth.
- Do not introduce new vibrant colors outside the defined palette; color should be used minimally and intentionally.
- Refrain from using bold typography for body text; the system maintains a consistent 400 weight for readability.
- Do not apply rounded corners to cards or input fields; maintain the crisp 0px radius for these elements.
- Avoid tight spacing between elements; ensure a minimum elementGap of 4-10px and sectionGap of 48px.
- Do not alter the letter-spacing of NeueHaasGrotesk; the precise 0.0070em is critical for its aesthetic.
- Never use generic system fonts when NeueHaasGrotesk or Bongusta are appropriate and available.

### Layout

The page maintains a centered, max-width layout, approximately 1200px wide, with consistent white backgrounds for content. The hero section often features a blurred background image with centered, large text, setting a serene tone. Section rhythm involves alternating content blocks, typically featuring two-column layouts with text and product images. A common pattern includes a grid of product cards, utilizing 0px padding and relying on external element gaps for spacing. Navigation is a minimalistic top bar, possibly sticky, with direct links. The overall density is light and spacious, with ample breathing room between sections and content elements.

### Imagery

Imagery primarily features product shots or lifestyle photography with a warm, slightly desaturated color palette, often depicting textiles or home goods. Product images are typically contained within a clean, unadorned frame, with no overlapping or complex masking. Icons are outlined, thin-stroked, and monochrome, primarily using Plum Core (#321929) or Ink Black (#000000) for a minimal, functional aesthetic. The density is image-moderate, balancing product showcases with textual information; images serve more as explanatory content and product showcase rather than decorative atmosphere.

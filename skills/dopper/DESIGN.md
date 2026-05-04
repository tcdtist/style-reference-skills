---
version: alpha
name: Dopper
description: Dopper's design evokes a sense of playful environmentalism, blending a cheerful primary color palette with crisp typography. The abundant use of `Pale Sand` (#f6ecc8) as a primary background creates a warm, inviting canvas, contrasting sharply with the deep, saturated blues and vivid yellow. Rounded corners at `20px` are applied universally to interactive elements and cards, giving components a friendly, approachable character that softens the otherwise direct, functional aesthetic.
colors:
  pale-sand: "#f6ecc8"
  ocean-deep: "#000f2"
  true-black: "#000000"
  sky-blue: "#0067e5"
  teal-splash: "#116973"
  sea-mist: "#8ab1e6"
  sunbeam-yellow: "#fed200"
  slate-gray: "#515a8a"
  glacier-blue: "#cce2ff"
  clear-sky-gradient: "#0067e5"
  off-white: "#fcfaf2"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 27px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.1
  display-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
  hero:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1
  hero-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
spacing:
  cardRadius: 20px
  buttonRadius: 20px
  elementGap: 8px
components:
  cta-button-group:
    role: 
  solutions-feature-cards:
    role: 
  hero-headline-block:
    role: 
  primary-call-to-action-button:
    role: Interactive element
  outline-secondary-button:
    role: Interactive element
  navigation-link:
    role: Interactive element
  product-feature-card-sky-blue:
    role: Informational display
  product-feature-card-sea-mist:
    role: Informational display
  plain-content-card:
    role: Informational display/Container
---

## Overview

**North Star:** Playful Marine Minimalism — like sunshine bouncing off clear blue water.

Dopper's design evokes a sense of playful environmentalism, blending a cheerful primary color palette with crisp typography. The abundant use of `Pale Sand` (#f6ecc8) as a primary background creates a warm, inviting canvas, contrasting sharply with the deep, saturated blues and vivid yellow. Rounded corners at `20px` are applied universally to interactive elements and cards, giving components a friendly, approachable character that softens the otherwise direct, functional aesthetic.

### Do's

- Prioritize `Pale Sand` (#f6ecc8) as the dominant page background to establish a consistent brand canvas.
- Apply `20px` border radius consistently to all interactive buttons, cards, and image containers for a friendly, approachable feel.
- Use `Ocean Deep` (#000f2e) for primary headings and prominent text to create a strong visual presence.
- Reserve `Sky Blue` (#0067e5) and its gradient for primary calls-to-action to highlight key interactions.
- Maintain a clear visual hierarchy by using `Gilroy` weights `700` and `600` for headlines and `400` for body text with `-apple-system` for accessibility details.
- Utilize a 4px grid for all spacing; common values include `8px` for element gaps and `20px` for internal component padding.
- Ensure contrast: `True Black` (#000000) text on `Pale Sand` (#f6ecc8) backgrounds is the default for readability.

### Don'ts

- Avoid arbitrary border radii; stick strictly to `20px` for rounded elements and `0px` for sharp edges.
- Do not introduce new saturated colors outside the defined `accent` and `brand` palettes to maintain visual consistency.
- Never use `Ocean Deep` (#000f2e) as a background for primary buttons; it is reserved for text dominance.
- Avoid applying drop shadows; the design relies on bold color blocks and internal content for visual depth, not traditional elevation.
- Do not use system fonts for prominent headlines or branding elements; `Gilroy` and `Dopper` carry the brand's typographic identity.
- Refrain from using monochrome photography; imagery should be vibrant and full-color to match the playful aesthetic of the brand colors.
- Do not create complex layouts that deviate from clear, sectioned content blocks; simplicity and directness are key.

### Layout

The layout primarily uses a full-bleed page model, with content sections extending edge-to-edge laterally. Content within sections is often centered or arranged in alternating two-column text-left/image-right compositions. The hero section features large, centered headlines over a `Pale Sand` background, setting a bright and open tone. Section rhythm is defined by large vertical spacing, with subsequent sections filling the width but using various background colors (like `Pale Sand`, `Sky Blue`, or custom colors for product cards) to create visual breaks rather than strict horizontal dividers. Card grids, particularly 5-column product feature cards, are a common pattern for showcasing multiple items, demonstrating both variety and consistency. Navigation is a persistent top bar with minimal styling.

### Imagery

The site uses a mix of high-quality product photography and vibrant, bold graphics. Product imagery features tight crops of bottles, often against clean white or brand-colored backgrounds, emphasizing utility and design. Illustrations are typically geometric and flat, using the brand's vibrant color palette to communicate concepts. Photography, when humans are present, is lifestyle-oriented but clean and aspirational, showcasing people actively using the products in positive, outdoor settings. The overall feel is image-heavy, using visuals to tell a story alongside compelling typography, and images are contained within card structures with `20px` rounded corners, maintaining a consistent brand aesthetic.

---
version: alpha
name: A-dam
description: A-dam embodies a playful, energetic aesthetic with a strong commitment to brand identity. Dominant dark blue accents punctuate a clean, bright white canvas, creating distinct contrasts. Typography is confident yet friendly, utilizing a custom geometric sans-serif for both headlines and body text. Components are minimalist, often ghosted or subtly outlined, relying on content and brand blue for emphasis rather than heavy styling or dramatic elevation.
colors:
  midnight-ink: "#000E1F"
  ocean-blue: "#0000C5"
  polar-white: "#FFFFFF"
  sky-blue: "#1A1ACB"
  slate-border: "#1A2635"
  light-mist: "#E6E7E9"
  subtle-gray: "#DCDDDF"
  off-white-canvas: "#F4F4F4"
  midtone-gray: "#666E79"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1
spacing:
  buttonRadius: 30px
  elementGap: 10px
  sectionGap: 48px
components:
  ghost-button:
    role: Navigation links and subtle actions
  outline-pill-button:
    role: Primary Call to Action
  product-card:
    role: Displaying product items
  search-input-field:
    role: User input for search
  badge-neutral-text:
    role: Informational labels
---

## Overview

**North Star:** Electric blue minimalist playground

A-dam embodies a playful, energetic aesthetic with a strong commitment to brand identity. Dominant dark blue accents punctuate a clean, bright white canvas, creating distinct contrasts. Typography is confident yet friendly, utilizing a custom geometric sans-serif for both headlines and body text. Components are minimalist, often ghosted or subtly outlined, relying on content and brand blue for emphasis rather than heavy styling or dramatic elevation.

### Do's

- Prioritize GT Walsheim Pro at various weights and sizes for all text elements to maintain brand identity.
- Use Midnight Ink (#000E1F) for primary text and headings, employing it as the dominant dark element.
- Apply Polar White (#FFFFFF) as the default page background and for card surfaces, creating a bright base.
- Accent actions and navigational highlights with Ocean Blue (#0000C5) for distinct brand moments.
- Ensure interactive elements like buttons and inputs primarily feature a 30px border radius for a consistent pill-shaped aesthetic.
- Utilize Off-White Canvas (#F4F4F4) for secondary card backgrounds or section differentiation to add subtle depth.
- Limit borders to Light Mist (#E6E7E9) or Subtle Gray (#DCDDDF) for ghosting effects or minimal separation, avoiding heavy outlines.

### Don'ts

- Avoid using harsh, saturated colors outside the defined brand blue for general design elements; keep the palette disciplined.
- Do not introduce heavy drop shadows or significant elevation effects; the design relies on flat surfaces and subtle borders.
- Resist using generic sans-serif fonts; the custom GT Walsheim Pro is critical for the brand’s friendly yet confident tone.
- Do not deviate from the established 30px border-radius for interactive inputs and buttons, as it defines the component style.
- Refrain from using thick, dark borders on cards or product listings; maintain an open and lightweight feel.
- Avoid excessive spacing that leads to sparse layouts; aim for a compact density that feels efficient but not crowded.
- Do not rely on complex gradients; the system uses solid colors and minimal surface variation.

### Layout

The page model is a max-width contained layout, likely around 1200px, centered on a Polar White canvas. The hero prominently features a full-bleed lifestyle image with an overlaid centered headline and descriptive text. Section rhythm is consistent, primarily using clear vertical spacing between content blocks, often alternating between a main white background and an Off-White Canvas for subtle visual breaks. Content is arranged in flexible grid systems, particularly a 3-column product grid, and also features alternating text-left/image-right patterns for feature sections. Navigation is a sticky top bar with a centered brand logo and functional links to the left and right.

### Imagery

The imagery predominantly features lifestyle photography with a clear, bright color palette, emphasizing activity and vitality under natural, often blue-sky, conditions. Product imagery is clean, often showing items in context or as flat lays. Illustrations are minimal, primarily limited to the brand's iconic bear logo. Graphics serve a functional or decorative accent role. The overall density is balanced, allowing prominent section imagery to dominate without overwhelming the clean UI.

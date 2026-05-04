---
version: alpha
name: Bang & Olufsen
description: This design system balances classic luxury with contemporary minimalism. Rich, deep indigo (#060daa) and elegant black (#191817) create a sophisticated backdrop, punctuated by a delicate, almost cream-colored off-white (#fcfaee) for textual contrast. The signature element is the custom BeoSupreme typeface, used across all text sizes, which brings a unique, refined character, with precise letter-spacing adjustments at every size. The dominant visual language is clean, centered product photography on stark backgrounds, framed by generous negative space and a strict typographic hierarchy.
colors:
  midnight-indigo: "#060daa"
  carbon-black: "#191817"
  barely-white: "#fcfaee"
  ash-gray: "#555555"
  pure-white: "#ffffff"
  pale-silver: "#e5e5e5"
  pure-black: "#000000"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.007px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.014px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
    letterSpacing: -0.056px
spacing:
  buttonRadius: 40px
  elementGap: 4px
  sectionGap: 48px
components:
  product-cards-explore-superventas:
    role: 
  hero-cta-beo-grace:
    role: 
  button-group-b-o-style-system:
    role: 
  primary-button-honey-tone-cta:
    role: Call to action
  ghost-button-menu-search:
    role: Navigation/Utility
  text-link-button:
    role: Tertiary action/Navigation
  feature-card:
    role: Product display
  input-field:
    role: User entry
  new-product-badge:
    role: Highlight new items
---

## Overview

**North Star:** Gallery of precise objects. A dark, velvet-lined showcase where each product rests, spotlighted with refined exactitude.

This design system balances classic luxury with contemporary minimalism. Rich, deep indigo (#060daa) and elegant black (#191817) create a sophisticated backdrop, punctuated by a delicate, almost cream-colored off-white (#fcfaee) for textual contrast. The signature element is the custom BeoSupreme typeface, used across all text sizes, which brings a unique, refined character, with precise letter-spacing adjustments at every size. The dominant visual language is clean, centered product photography on stark backgrounds, framed by generous negative space and a strict typographic hierarchy.

### Do's

- Prioritize the custom 'BeoSupreme' font for all textual content, leveraging its unique character and precise letter-spacing.
- Use 'Midnight Indigo' (#060daa) exclusively for foundational elements like the footer to establish a luxurious, deep anchor.
- Maintain a clear visual hierarchy by contrasting 'Carbon Black' (#191817) text on light backgrounds (#ffffff, #fcfaee) and 'Barely White' (#fcfaee) on dark backgrounds (#060daa).
- Employ the 40px border-radius strictly for primary CTA buttons, ensuring they stand out as the sole 'soft' element.
- Utilize generous negative space around product imagery and text blocks to convey a sense of premium quality and focus, with section gaps around 48px.
- Ensure all interactive elements, especially primary CTAs, meet a minimum contrast ratio of 4.5:1 against their background.
- Use a subtle 1px border for ghost button states and text links to provide definition without visual weight.

### Don'ts

- Do not introduce additional font families; 'BeoSupreme' defines the typographic identity.
- Avoid using multiple accent colors; 'Midnight Indigo' is reserved for specific, prominent sectional backgrounds.
- Do not deviate from the established border-radius values (0px, 2px, 40px); rounded corners are intentional and scarce.
- Do not use box-shadows; elevation is handled through background color changes and spatial separation.
- Avoid decorative elements or busy backgrounds; the aesthetic emphasizes product clarity and clean UI.
- Do not create dense content blocks; the comfortable density principle with a 4px base unit should be consistently applied.
- Never use the browser default blue for links; control all link colors with 'Carbon Black', 'Ash Gray', or 'Barely White'.

### Layout

The page uses a mixed layout approach, blending full-bleed sections with constrained content. The hero prominently features a full-bleed dark background ('Midnight Indigo') with a large, centered product image and left-aligned headline/CTA. Subsequent sections alternate between full-bleed white backgrounds for product listings (often displaying items in a clean, centered grid of 4) and some potentially full-bleed sections with strong, singular background colors like the red observed. Content is generally centered within a comfortable maximum width when not full-bleed. Vertical rhythm is maintained by consistent spacing between sections (around 48px), creating a spacious and unhurried browsing experience. The navigation is a minimalist sticky top bar, providing persistent access without visual clutter.

### Imagery

The visual language focuses on meticulously staged product photography. Products are often isolated or tightly cropped, centered on pure white backgrounds or against deep, velvety textiles like the 'Midnight Indigo' in the hero. The treatment is clean and raw-edged, with no masking or overlapping effects. Photography is clearly high-key for white backgrounds and moody/dark for dramatic impact on colored backgrounds, emphasizing the texture and material of the products. Images are explanatory and showcase the product as the hero, occupying significant visual space in sections to convey luxury and technical precision. Icons are minimal, monochromatic, and outlined, primarily in 'Pure Black' or 'Barely White', complementing the UI's precision.

---
version: alpha
name: Sackville & Co.
description: Sackville & Co. employs a vibrant, expressive visual language centered on high contrast and dynamic shapes. The design features a light, almost off-white canvas punctuated by a bold, energetic blue. Typography is confident and slightly quirky, mixing a strong sans-serif with a more artistic serif for impactful headlines. Components often prioritize outlined styles with organic, asymmetric radii, making elements feel handcrafted yet sophisticated.
colors:
  canvas-creme: "#f3f4ee"
  midnight-ash: "#231f20"
  deep-space-blue: "#245dc5"
  sunset-orange: "#ffc6a6"
  crimson-ember: "#f04736"
  jet: "#000000"
  charcoal-whisper: "#383435"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.15
  subheading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.15
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 0.8
  heading:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 0.85
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 47px
    lineHeight: 0.9
  display:
    fontFamily: "system-ui"
    fontSize: 130px
    lineHeight: 0.8
spacing:
  cardRadius: 10px 10px 0px 0px
  buttonRadius: 50px
  elementGap: 10px
  sectionGap: 43px
components:
  ghost-button:
    role: Minimal interactive elements
  text-link-button:
    role: Inline text actions
  oval-outline-button-deep-space:
    role: Primary interaction button
  oval-outline-button-crimson:
    role: Secondary interaction button, often for 'Underage' states
  rounded-product-card:
    role: Product display card
  circular-outline-icon-button:
    role: Iconic button for navigation or filtering
  accent-input-field:
    role: Data entry fields
---

## Overview

**North Star:** Electric Blue Studio

Sackville & Co. employs a vibrant, expressive visual language centered on high contrast and dynamic shapes. The design features a light, almost off-white canvas punctuated by a bold, energetic blue. Typography is confident and slightly quirky, mixing a strong sans-serif with a more artistic serif for impactful headlines. Components often prioritize outlined styles with organic, asymmetric radii, making elements feel handcrafted yet sophisticated.

### Do's

- Prioritize Deep Space Blue (#245dc5) and Crimson Ember (#f04736) for interactive element borders rather than filled backgrounds.
- Use Canvas Creme (#f3f4ee) as the dominant background surface for all page sections to maintain a bright, airy feel.
- Apply the FoundersGrotesk font with varied sizes but consistent weight (400) for most UI text to create visual interest without additional typographic complexity.
- Employ the asymmetrical border radius '81px / 39px' for primary action buttons to give a unique, organic feel.
- Ensure large headlines leverage the contrast between TimesNow SemiLight (400) and FoundersGrotesk (400) for typographic hierarchy.
- Maintain comfortable spacing with an element gap of 10px and card padding of 20px to prevent visual crowding.

### Don'ts

- Do not use solid background fills for primary action buttons; utilize outlined styles with brand colors.
- Avoid using multiple font weights within a single text block; stick to weight 400 for both primary typefaces.
- Do not introduce sharp, angular radii for primary interactive elements that are intended to feel organic or unique, such as oval buttons.
- Do not use dark backgrounds for entire page sections; reserve Deep Space Blue (#245dc5) for specific component surfaces or brand accents.
- Do not overuse highly saturated colors; focus on Deep Space Blue and Crimson Ember for functional highlights, allowing Canvas Creme to dominate.

### Layout

The page maintains a full-width linear scroll, but content is often contained within a perceived maximum width. The hero section frequently features a full-bleed visual element with overlaid text or an age-gate. Section rhythm is primarily consistent vertical spacing with occasional alternating visual treatments or distinct card-based layouts for product showcases. Content arrangement is flexible, featuring centered stacks for calls to action, text-left/image-right compositions for features, and multi-column card grids for product listings. Navigation is a persistent top bar, often minimal, with supplementary navigation in the footer.

### Imagery

The site uses a mix of evocative photography and minimalist line art. Photography leans towards moody or branded lifestyle shots, often with a blue tint or duotone effect, sometimes featuring product crops against the Canvas Creme background. Illustrations and icons are typically minimal line drawings, often in Deep Space Blue, contributing to a modern, artistic, and slightly mysterious atmosphere. Imagery serves both decorative atmosphere and product showcase, with a moderate density.

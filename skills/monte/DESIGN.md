---
version: alpha
name: Monte
description: Monte evokes a warm, rustic cafe atmosphere with a distinctive terracotta brand color, soft cream backgrounds, and strong typographic contrast. The design emphasizes clear hierarchy through a limited color palette focused on the primary brand hue and subtle neutrals. Components are lightweight with defined borders and generous rounded corners, suggesting an approachable, handcrafted feel.
colors:
  terracotta: "#b84b30"
  espresso-shot: "#5f1d1a"
  cream-canvas: "#f8f4e9"
  silver-border: "#e5e7eb"
  carbon-text: "#000000"
  pure-frost: "#ffffff"
  stone-gray: "#666666"
  medium-gray: "#999999"
  dark-overlay: "#3e3d3a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.05px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: 0.025px
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 0.9
    letterSpacing: 0.1px
spacing:
  cardRadius: 14px
  buttonRadius: 0px
  elementGap: 5px
  sectionGap: 48px
components:
  ghost-header-button:
    role: Navigation and secondary actions.
  outlined-call-to-action-button:
    role: Primary interactive element.
  terracotta-feature-card:
    role: Highlights features or product categories.
  transparent-image-overlay-card:
    role: Used for subtle visual effects over images.
  rounded-input-field:
    role: User data entry.
  ghost-badge:
    role: Decorative labels or textual accents.
  overlay-badge:
    role: Informational labels on darker backgrounds.
---

## Overview

**North Star:** Warm Terracotta Cafe

Monte evokes a warm, rustic cafe atmosphere with a distinctive terracotta brand color, soft cream backgrounds, and strong typographic contrast. The design emphasizes clear hierarchy through a limited color palette focused on the primary brand hue and subtle neutrals. Components are lightweight with defined borders and generous rounded corners, suggesting an approachable, handcrafted feel.

### Do's

- Use Terracotta (#b84b30) as the primary brand color for backgrounds, key interactive elements, and prominent headings to maintain brand identity.
- Apply Cream Canvas (#f8f4e9) as the default page background and for light surface elements, ensuring a soft, inviting base.
- Employ the Riposte font for all headlines, navigation, and call-to-action text, leveraging its distinct letter-spacing and weights for brand personality.
- Utilize Apercu Mono font for body copy and input fields, pairing its functional mono-spaced character with the expressive display font.
- Always use a 9999px border-radius for input fields and an outlined style for primary action buttons to achieve a soft, approachable aesthetic.
- Ensure generous vertical spacing between sections (48px) to create a relaxed, comfortable density.
- Employ the Silver Border (#e5e7eb) for subtle dividers and borders on neutral backgrounds to maintain a delicate visual separation.

### Don'ts

- Avoid using bright, saturated colors not present in the defined palette, as they will clash with the warm, muted brand theme.
- Do not introduce sharp, angular card or button radii; the system favors soft curves (14px for cards, 9999px for inputs, 0px for navigation buttons).
- Under no circumstances substitute the custom `Riposte` or `Apercu Mono` fonts without ensuring the chosen alternative carries the same distinctive letter-spacing and weight properties.
- Do not use heavy box-shadows; the design favors flat surfaces and borders for depth.
- Avoid excessive use of different font colors; stick to Terracotta, Espresso Shot, Carbon Text, Stone Gray, and Pure Frost to maintain a cohesive scheme.
- Do not create dense, text-heavy blocks without sufficient line height; Riposte and Apercu Mono lines should breathe with their specified line heights.
- Do not use dark backgrounds for entire sections unless Terracotta or Dark Overlay are specifically employed to align with brand colors, otherwise stick to Cream Canvas.

### Layout

The page uses a centered, max-width layout (implicitly around 1200px based on content centering, though not fixed) with a dynamic hero section. The initial hero is full-bleed Terracotta featuring centered large text and an illustrative graphic. Scrolling reveals a Cream Canvas background with a soft card stack containing images. Content sections alternate between images and text, often in a left-right arrangement, with consistent vertical spacing of 48px between major blocks. A fixed header provides minimalist navigation. The overall rhythm is unhurried and spacious, creating a comfortable browsing experience.

### Imagery

Imagery primarily features in-situ cafe photography with a warm, natural lighting. Product-focused shots of food and drinks are vibrant and inviting, often with soft backgrounds that don't distract. Illustrations are hand-drawn, line-art style, depicting simple, organic forms of people or objects (like coffee cups) in the Terracotta brand color, serving as decorative accents. Icons are minimal, outlined, in Carbon Text, and used functionally for navigation. Visuals balance atmospheric photography with charming, characterful illustrations, lending a friendly and casual brand feel.

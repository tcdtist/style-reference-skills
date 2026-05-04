---
version: alpha
name: Zellerfeld
description: Zellerfeld's visual style is a 'concrete brutalism meets digital futurism' aesthetic. It pairs stark, unadorned typography with substantial, well-defined components, often set against a cool gray canvas. There's a deliberate lack of decorative elements, keeping the focus on solid forms and product imagery. Elevation is minimal, often relying on subtle background shifts or high-contrast borders rather than deep shadows. A single vibrant blue acts as a functional highlight, drawing attention to active states and new content.
colors:
  midnight-ink: "#111111"
  canvas-white: "#ffffff"
  shadow: "#000000"
  stone-gray: "#a1a4aa"
  fog: "#d7d7d7"
  surface-gray: "#ecedee"
  stonewash: "#444955"
  sky-tint: "#e5e7ff"
  subtle-slate: "#737780"
  electric-blue: "#000aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
  display-sm:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 128px
    lineHeight: 1
spacing:
  cardRadius: 10px
  buttonRadius: 10px
  elementGap: 16px
  sectionGap: 48px
components:
  primary-action-button:
    role: Main call-to-action button
  ghost-button-dark:
    role: Secondary action on dark backgrounds
  ghost-button-light:
    role: Secondary actions on light backgrounds
  faded-button:
    role: Tertiary or disabled button states
  light-opaque-button:
    role: Standard button on neutral backgrounds
  glass-input:
    role: Input fields on light backgrounds
  dark-overlay-card:
    role: Prominent content sections or overlays
  neutral-product-card:
    role: Default display for product listings
  glass-product-card:
    role: Product card with a subtle transparent background
  new-in-badge:
    role: Highlights new items or features
---

## Overview

**North Star:** Sculpted forms, digital canvas

Zellerfeld's visual style is a 'concrete brutalism meets digital futurism' aesthetic. It pairs stark, unadorned typography with substantial, well-defined components, often set against a cool gray canvas. There's a deliberate lack of decorative elements, keeping the focus on solid forms and product imagery. Elevation is minimal, often relying on subtle background shifts or high-contrast borders rather than deep shadows. A single vibrant blue acts as a functional highlight, drawing attention to active states and new content.

### Do's

- Use Roobert with a letter-spacing of -0.04em for all primary text elements to maintain a compact, engineered aesthetic.
- Apply `10px` border radius consistently to buttons, product images, and cards for a subtly softened but deliberate edge.
- Reserve `Electric Blue` (#000aff) strictly for 'new' badges, active states, and primary call-to-action buttons to ensure maximum functional emphasis.
- Adhere to the `16px` unit for `elementGap` and `cardPadding` to establish a comfortable yet structured density.
- Utilize `Stone Gray` (#a1a4aa) for subtle borders and placeholders, creating a tiered visual hierarchy for non-interactive elements.
- Establish clear visual separation between sections by using `48px` for `sectionGap` and alternating `Canvas White` and `Surface Gray` (#ecedee) backgrounds.
- Incorporate `Space Mono` for small, numeric, or technical details, setting it apart with its monospaced character and normal letter-spacing.

### Don'ts

- Do not deviate from the standardized letter-spacing of -0.04em for Roobert, as it defines the text's character.
- Avoid using `Electric Blue` (#000aff) for purely decorative elements; its purpose is functional emphasis.
- Do not introduce heavy drop shadows, as the system relies on subtle background shifts and high-contrast borders for depth.
- Do not use generic system fonts where Roobert or Space Mono are specified; the custom typography is a core brand identifier.
- Avoid arbitrary padding or margin values; stick to the `4px` base unit and specified `elementGap` and `cardPadding`.
- Do not round corners excessively beyond `10px` for cards and buttons, except for `30px` on badges, to maintain a solid, architectural feel.
- Do not use highly saturated colors outside the defined accent color; the palette is primarily neutral to highlight products.

### Layout

The page adheres to a max-width `1440px` centered container for most content, with occasional full-bleed sections. The hero consistently presents a large, visually dominant product image or render, often with overlaid text. Section rhythm is driven by generous vertical spacing (`48px`) and alternating background colors (primarily `Canvas White` and `Surface Gray`) to differentiate content blocks. Content is typically arranged in adaptive grid layouts (e.g., 4-column product grids) or symmetrical centered stacks, with an emphasis on visual balance. Navigation features a subtle top bar and a sticky header, suggesting a lightweight and clean user experience.

### Imagery

Imagery primarily features product shots: 3D rendered shoes on plain, often monolithic backgrounds, sometimes featuring stylized human elements (legs, poses) but always framing the product as the central hero. Photography is high-key, with bright, even lighting and minimal shadows to showcase texture and form. The focus is on the object itself, often with a slightly desaturated overall tone to the environment, allowing vibrant product colors (like the purple shoe) to pop. Icons are minimal, utilitarian, and use outlined or filled styles, typically in `Midnight Ink`.

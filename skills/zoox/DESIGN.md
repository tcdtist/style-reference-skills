---
version: alpha
name: Zoox
description: Zoox employs a sophisticated, muted aesthetic, blending an off-black and white core with subtle, cool-toned neutrals and a singular vibrant teal accent. Typography is dominant, commanding attention with generous sizing and precise control over letter-spacing. Surfaces vary between stark white, dark gray, and a soft, desaturated teal, creating distinct visual sections without harsh transitions. Components are often outlined or ghosted, relying on subtle borders and rounded corners, avoiding heavy fills or deep shadows to maintain a lightweight, intentional feel.
colors:
  midnight-ink: "#0d1212"
  cloud-canvas: "#ffffff"
  ash-gray: "#565959"
  slate-green: "#34484a"
  pale-mint: "#d3e4df"
  fog: "#696969"
  stone-gray: "#7b8889"
  light-mist: "#9aa3a5"
  pale-sage: "#edf4f2"
  teal-accent: "#64d5b3"
  muted-teal: "#5b8279"
  conic-wave: "#34ffc5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.28
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.28
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.28
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.28
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.28
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.28
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.28
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.28
  display:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.28
spacing:
  cardRadius: 36px
  buttonRadius: 16px
  elementGap: 5px
  sectionGap: 40px
components:
  ghost-nav-button:
    role: Navigation and secondary actions
  primary-action-button:
    role: Call to action
  outline-ghost-button:
    role: Subtle secondary actions or interactive elements.
  neutral-card:
    role: Content container
  elevated-card-pale-mint:
    role: Prominent content container
  dark-card:
    role: Thematic content container
  header-card-slate-green:
    role: Section header background
  text-input:
    role: User data entry
  neutral-badge:
    role: Informational labels
  soft-badge:
    role: Categorization and status indicators
---

## Overview

**North Star:** Muted, precise mobility.

Zoox employs a sophisticated, muted aesthetic, blending an off-black and white core with subtle, cool-toned neutrals and a singular vibrant teal accent. Typography is dominant, commanding attention with generous sizing and precise control over letter-spacing. Surfaces vary between stark white, dark gray, and a soft, desaturated teal, creating distinct visual sections without harsh transitions. Components are often outlined or ghosted, relying on subtle borders and rounded corners, avoiding heavy fills or deep shadows to maintain a lightweight, intentional feel.

### Do's

- Use 'Gt Standard L' weight 400 for all primary headings (28px to 120px) with normal letter spacing to maximize impact.
- Apply 'Teal Accent' (#64d5b3) exclusively for primary action buttons or significant interactive highlights.
- Employ generously rounded corners (16px and 36px) on cards, buttons, and images to soften the overall aesthetic.
- Maintain high contrast between text ('Midnight Ink') and backgrounds ('Cloud Canvas', 'Pale Mint', or 'Slate Green') for optimal legibility.
- Utilize 'Pale Mint' (#d3e4df) for background sections to create soft visual breaks or subtle elevated surfaces.
- Implement 'Slate Green' (#34484a) for subtle borders, ghost button outlines, and interactive navigation elements.
- Ensure letter-spacing is consistently negative for 'Gt Standard S' typography in smaller sizes to maintain its compact appearance.

### Don'ts

- Do not introduce new vibrant colors outside of 'Teal Accent' (#64d5b3); maintain the muted and achromatic base palette.
- Avoid heavy use of drop shadows; reserve the subtle rgba(0, 0, 0, 0.2) 0px 0px 4px 0px shadow for very specific, subtle elevation.
- Do not use generic system fonts; stick to the 'Gt Standard S' and 'Gt Standard L' families for brand consistency.
- Avoid sharp corners on interactive elements or prominent containers; maintain the established rounded aesthetic.
- Do not use highly saturated backgrounds or overwhelming gradients in full sections; keep backgrounds understated with an occasional conic gradient as a decorative element.
- Refrain from using varied letter spacing on large display type ('Gt Standard L'); keep it 'normal' for maximum clarity.
- Do not create dense, busy layouts; prioritize comfortable spacing (40px section gap, 5px element gap) and ample whitespace.

### Layout

The page primarily uses a max-width contained layout, though specific sections like the hero or thematic backgrounds can be full-bleed. The hero often features a centered headline over a background image or a single color block (e.g., Pale Mint or Slate Green). Vertical rhythm is established through consistent section gaps, creating a comfortable density. Content is arranged using alternating text-left/image-right or image-left/text-right patterns, and in some areas, stacked centered elements. There are implicit grids for features, often two or three columns beneath larger headlines. Navigation is a persistent top bar with ghost buttons, converting to a hamburger menu on smaller viewports. Sticky headers are present, and the overall feel is spacious and organized.

### Imagery

The imagery features realistic photography of the Zoox robotaxi and interiors, or people interacting within the vehicle, shown in contained, often horizontally cropped or square formats. Treatment involves both full-bleed hero visuals and smaller, isolated images with substantial border-radii (16px to 36px) that soften their impact. Photography is clear, well-lit, and product-focused, showcasing the vehicle and user experience directly. Iconography is minimalist and monochrome, using black or dark gray outlines with a light stroke weight, serving primarily functional roles (e.g., play/pause button). Image density is balanced, used to break up text sections and illustrate features without overwhelming the page.

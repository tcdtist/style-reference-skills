---
version: alpha
name: Notion
description: Notion's visual style evokes a deep-space command center, merging functionality with an ethereal atmosphere. Dark, often indigo-tinted, backgrounds provide a canvas against which interface elements glow with a distinct, often cool-toned vibrancy. Thoughtful use of subtle shadows and translucency creates an impression of layered depth and sophisticated tooling, without overt skeuomorphism.
colors:
  midnight-abyss: "#000000"
  ghostly-gray: "#0b0b0b"
  canvas-white: "#ffffff"
  mist-gray: "#f6f5f4"
  slate-text: "#615d59"
  dim-gray: "#a39e98"
  iron-border: "#dddddd"
  deep-space-violet: "#02093a"
  cosmic-blue: "#455dd3"
  link-ocean: "#0075de"
  sky-glint: "#62aef0"
  pixel-blush: "#f77463"
  mint-glitch: "#2a9d99"
  sunflare: "#ffc950"
  orange-boost: "#ff8a33"
  magenta-spark: "#ff83dd"
  purple-haze: "#ad6ded"
  blue-notification: "#097fe8"
  info-tint: "#f2f9ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: 0.1px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.1px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.35
    letterSpacing: 0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.33
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.27
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.23
    letterSpacing: -0.36px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.44px
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.04
    letterSpacing: -0.66px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.83
    letterSpacing: -0.44px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 32px
components:
  nav-header-button:
    role: Navigation, utility
  product-feature-card:
    role: Content container
  accent-block-card:
    role: Decorative content housing
  call-to-action-button-filled:
    role: Primary interaction
  call-to-action-button-outlined:
    role: Secondary interaction
  ghost-text-button:
    role: Tertiary interaction
  pill-badge-info:
    role: Informational tag
  text-input:
    role: Form Element
---

## Overview

**North Star:** Deep-space command center

Notion's visual style evokes a deep-space command center, merging functionality with an ethereal atmosphere. Dark, often indigo-tinted, backgrounds provide a canvas against which interface elements glow with a distinct, often cool-toned vibrancy. Thoughtful use of subtle shadows and translucency creates an impression of layered depth and sophisticated tooling, without overt skeuomorphism.

### Do's

- Prioritize NotionInter for all text elements, leveraging its variable weights for hierarchy and readability.
- Use Midnight Abyss (#000000) as the primary page background, establishing a dark theme foundation.
- Employ Cosmic Blue (#455dd3) for primary action buttons to clearly define interactive elements.
- Apply 12px border-radius to cards and larger content blocks to maintain a consistent soft edge.
- Utilize Ghostly Gray (#0b0b0b) for nested card backgrounds within the primary dark canvas to suggest depth.
- Use 24px for card padding and core element gaps to provide adequate breathing room between content.
- Reserve Lyon Text for distinctive section headlines to introduce an editorial contrast.

### Don'ts

- Avoid using bright, saturated colors for large background areas unless they are intentionally decorative and contained.
- Do not introduce sharp corners on cards or primary interface elements; adhere to the 12px or 8px standard radii.
- Refrain from using strong box-shadows; a subtle layered depth is preferred over pronounced elevation.
- Do not deviate from the established type scale and letter-spacing values to maintain typographic clarity and brand voice.
- Avoid using Link Ocean (#0075de) as a primary button fill; it is intended for outlined buttons and text links.
- Do not mix and match spacing units outside the 4px base unit and established tokens; consistency is key.
- Do not use generic system fonts, NotionInter and Lyon Text are critical for brand identity.

### Layout

The page primarily uses a max-width contained layout for content sections, set against a full-bleed dark background. The hero section is full-viewport, featuring a centered headline and subtext over the deep-space violet background, with an embedded product screenshot. Subsequent content sections alternate between white and dark panels, using consistent vertical spacing. Content within sections generally follows a two-column layout with text-left/image-right or vice-versa, or dynamic card grids (3-column) for features and testimonials. Navigation is a sticky top bar, providing persistent access while users scroll.

### Imagery

The visual language combines clean product screenshots of the Notion application, often embedded or within device mockups, with abstract, organic line illustrations. These illustrations are typically single-color (like the vivid blue) or multicolored line art, featuring abstract shapes and friendly, geometric character-like elements. They serve a decorative and explanatory role, adding a playful yet sophisticated layer to the UI. Photography is sparse, often editorial or lifestyle shots, typically desaturated or muted and contained within cards. Icons are outlined, simple, and monochromatic, maintaining a functional aesthetic across the UI.

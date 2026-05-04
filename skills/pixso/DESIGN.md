---
version: alpha
name: Pixso
description: Pixso embodies a digital workspace aesthetic, with clean lines and a functional layout that prioritizes content. Its visual mood is bright and accessible, achieved through ample white space and subtle, almost invisible grays. The deliberate use of soft, colorful gradients primarily for decorative elements and featured cards prevents the grayscale foundation from feeling sterile, adding a touch of playful innovation without overshadowing the core content.
colors:
  absolute-zero: "#000000"
  canvas-white: "#FFFFFF"
  warm-mist: "#F9F9FA"
  slate-border: "#EAEBEE"
  deep-graphite: "#121212"
  cloud-whisper: "#FAF8FD"
  cool-teal: "#CFE7ED"
  skybound-blue: "#336FFF"
  skybound-blue-hover: "#4381FF"
  cosmic-drift-gradient: "#BFBFBF"
  horizon-burst-gradient: "#BFBFBF"
  dawn-spectrum-gradient: "#BFBFBF"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.38
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.29
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.21
    letterSpacing: 0px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 6px
  sectionGap: 64px
components:
  hero-cta-button-group:
    role: 
  design-resource-cards-grid:
    role: 
  value-proposition-text-block:
    role: 
  primary-action-button:
    role: Core CTA for user actions
  secondary-action-button:
    role: Alternative or less prominent actions
  ghost-button:
    role: Tertiary actions, links, or navigation items
  small-button:
    role: Compact actions, utility buttons
  image-card-no-background:
    role: Displaying visual content without additional styling
  teal-accent-card:
    role: Highlighting specific content, often decorative in nature
  background-detail-card:
    role: Subtle background element or very light separation
  subtle-teal-accent-card:
    role: Minor highlights or visual breaks
  text-input-base:
    role: Standard user input fields
  elevated-tooltip-button:
    role: Interactive elements with a subtle lift, often in toolbars or secondary navigation.
---

## Overview

**North Star:** Architectural Blueprint on White Marble. This system feels like designs precisely laid out in a brightly lit, expansive modern studio.

Pixso embodies a digital workspace aesthetic, with clean lines and a functional layout that prioritizes content. Its visual mood is bright and accessible, achieved through ample white space and subtle, almost invisible grays. The deliberate use of soft, colorful gradients primarily for decorative elements and featured cards prevents the grayscale foundation from feeling sterile, adding a touch of playful innovation without overshadowing the core content.

### Do's

- Always use Figtree for all textual content, leveraging weights 400-700 to establish hierarchy rather than mixing font families.
- Maintain generous white space using Canvas White (`#FFFFFF`) as the dominant background color for pages and cards to foster an open, clean aesthetic.
- Apply an 8px border radius to most interactive elements like buttons and cards, creating a consistent soft rounding.
- Utilize Absolute Zero (`#000000`) for primary text and critical UI elements to ensure maximum readability and impact.
- Use Cool Teal (`#CFE7ED`) only as a background color for decorative cards or subtle feature highlights, not for typography or primary interactive elements.
- Prefer `padding-top: 10px`, `padding-right: 10px`, `padding-bottom: 18px`, `padding-left: 10px` for less prominent buttons to give them distinction from primary CTAs, using an 18px radius.
- Implement the Skybound Blue (`#336FFF`) for primary call-to-action buttons, ensuring a clear visual prompt for user engagement.

### Don'ts

- Do not introduce new font families; the system relies exclusively on Figtree.
- Avoid high-contrast, saturated colors for UI element backgrounds, maintaining the serene, clean feel through neutrals and subtle accents.
- Do not use hard, sharp shadows; instead, use the defined, soft elevation for buttons (`rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.3) 0px 0px 1px 0px`).
- Do not overcrowd sections; maintain a comfortable density with consistent element and section gaps.
- Avoid excessive gradients on functional elements; reserve them primarily for large decorative sections or illustrative backgrounds.
- Do not deviate from the established border radii; avoid sharp corners on interactive components or overly rounded, pill-like shapes outside specific button variants.
- Do not use dark backgrounds for main content areas; maintain the integrity of the light theme.

### Layout

The page primarily uses a max-width contained layout, with content centered within a generous Canvas White background. The hero section features a prominent, centered headline with a subtext and dual calls-to-action, optionally flanked by abstract 3D graphic elements on either side. Sections alternate between white and very light gray backgrounds (like Warm Mist or Slate Border), creating a subtle visual rhythm without harsh dividers. Content arrangements are generally centered stacks or two-column layouts (text on one side, image/illustration on the other). Feature grids are common, often presenting content in 3 or 4 columns. Navigation is a sticky top bar with a clear logo, global navigation links, and login/signup buttons. The density is comfortable, with ample vertical spacing between sections.

### Imagery

The site uses a mix of abstract 3D elements, product screenshots, and stylized flat icons. Product screenshots are typically tightly cropped UI examples of the Pixso product, often presented within UI frames, emphasizing functionality. Abstract 3D elements feature soft, organic shapes with soft gradients (e.g., violet, blue, orange, pink), serving as decorative flourishes that animate subtly and add a sense of modern digital artistry. Icons are outlined or filled, mostly monochromatic, and provide visual cues without dominating the layout. The overall language is explanatory and product-centric, with imagery serving to enhance understanding of software capabilities.

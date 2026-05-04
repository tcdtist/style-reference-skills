---
version: alpha
name: monday.com
description: This design system feels like a vibrant, organized digital workspace, balancing playful accents with robust functionality. It uses a very accessible light theme with high-contrast text and a central, vivid violet (#6161ff) to draw attention to primary actions. The abundant use of color, especially in product card backgrounds, creates a rich and dynamic interface, while rounded elements (160px pill buttons, 24px cards) soften the structured grid layout. A diverse set of gradients adds energetic flair and a sense of continuous motion.
colors:
  text-primary: "#333333"
  text-muted: "#676879"
  canvas-background: "#ffffff"
  surface-accent: "#f5f6f8"
  interactive-violet: "#6161ff"
  outline-ebony: "#000000"
  border-silver: "#d0d4e4"
  interactive-graphite: "#535768"
  card-mint: "#bcfe90"
  card-lavender: "#eddff7"
  card-sky: "#abf0ff"
  card-sunset: "#ff8940"
  card-pale-blue: "#e7ecff"
  card-ocean: "#93beff"
  card-ice: "#d1faff"
  button-indigo: "#9450fd"
  button-sky: "#3ac9ff"
  button-teal: "#2a5c40"
  badge-light-blue: "#dbdbff"
  gradient-vibrant-flow: "#fe81e4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.3
  display-sm:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.3
spacing:
  cardRadius: 24px
  buttonRadius: 160px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-call-to-action-button:
    role: Interactive Element
  outlined-call-to-action-button:
    role: Interactive Element
  text-link-button:
    role: Interactive Element
  feature-card:
    role: Content Display
  basic-card:
    role: Content Display
  accent-background-card:
    role: Content Display
  input-field:
    role: Data Entry
  informational-badge:
    role: Categorization/Tagging
  feature-category-badge:
    role: Categorization/Tagging
---

## Overview

**North Star:** Vibrant organized workspace — like a digital desk splashed with colorful sticky notes and neatly arranged tools.

This design system feels like a vibrant, organized digital workspace, balancing playful accents with robust functionality. It uses a very accessible light theme with high-contrast text and a central, vivid violet (#6161ff) to draw attention to primary actions. The abundant use of color, especially in product card backgrounds, creates a rich and dynamic interface, while rounded elements (160px pill buttons, 24px cards) soften the structured grid layout. A diverse set of gradients adds energetic flair and a sense of continuous motion.

### Do's

- Do use 'Interactive Violet' (#6161ff) for primary call-to-action buttons, ensuring text is 'Canvas Background' (#ffffff).
- Do apply a 160px border-radius to all buttons to create a consistent pill shape.
- Do use Poppins 20px, weight 700 with -0.015em letter spacing for major section headings to maintain legibility and impact.
- Do utilize the specific accent colors like 'Card Mint' (#bcfe90) and 'Card Sky' (#abf0ff) as backgrounds for feature cards to add visual variety and categorization.
- Do ensure interactive elements use 'Interactive Graphite' (#535768) for text and 'Border Silver' (#d0d4e4) for subtle borders in neutral states.
- Do apply the rgba(205, 208, 223, 0.4) 0px 2px 48px 0px shadow for elevated cards to create clear visual hierarchy.
- Do employ 'elementGap' at 8px for consistent spacing between inline and block elements.

### Don'ts

- Don't use any color other than 'Interactive Violet' (#6161ff) for primary CTA button backgrounds; use outlined or text variants for secondary actions.
- Don't use square buttons or cards; maintain the established 160px or 24px border-radii for interactive and content elements respectively.
- Don't deviate from Poppins for any text element; other fonts will appear off-brand.
- Don't overcrowd sections; maintain a minimum 'sectionGap' of 48px between major content blocks.
- Don't introduce new shadow values; use the established rgba(205, 208, 223, 0.4) 0px 2px 48px 0px for elevation or no shadow for flat elements.
- Don't center align body text; prefer left alignment with 'Text Primary' (#333333) for optimal readability.

### Layout

The page exhibits a max-width contained layout, though specific hero sections can span full-width. The hero section often features a centered headline over a subtle background, with primary actions prominently in the center. Content sections alternate between visually distinct blocks, often with a consistent vertical rhythm. Many sections employ a 2-column or 3-column grid for features, cards, and interactive elements. The overall density is comfortable, ensuring sufficient breathing room around content blocks, with 48px section gaps providing clear visual breaks. Navigation elements are consistently at the top, often sticky, simplifying user flow.

### Imagery

The site uses a mix of subtle product screenshots, abstract gradient graphics, and simple icons. Product screenshots are often blurred or contained within a UI mock-up, suggesting functionality without being overly detailed. Abstract graphics, particularly those incorporating the vibrant gradients, serve a decorative and energetic purpose, often as background elements or subtle accents. Icons are generally minimalist, often outlined or mono-color, appearing both within the UI for navigation/features and as more decorative elements. The overall language is high-tech playful, with visuals serving to energize rather than explicitly demonstrate.

---
version: alpha
name: ClickUp™
description: ClickUp's interface channels a vibrant productivity hub atmosphere: an inviting white canvas contrasts with deep charcoal text, punctuated by vivid accents of violet and electric blue. Its visual identity relies on dynamic, lightweight UI elements, thin borders, and soft shadows, creating a sense of clarity and speed. Typography is confident and modern, leveraging condensed sans-serifs for headings and a highly legible sans-serif for body text, maintaining a tight visual rhythm. Gradients are strategically used for subtle flair and to highlight interactive states, reinforcing an energetic, forward-looking aesthetic.
colors:
  canvas-white: "#ffffff"
  midnight-charcoal: "#292d34"
  dark-onyx: "#202023"
  ash-gray: "#e8e8e8"
  smoke-gray: "#b3b3b3"
  hint-of-sky: "#e9ebf0"
  shadow-tint-blue: "#edf6fd"
  deep-violet: "#7b68ee"
  electric-blue: "#0091ff"
  rich-plum: "#514b81"
  vivid-purple: "#6647f0"
  deep-space-charcoal: "#090c1d"
  warm-fade-gradient: "#ff5b36"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.15px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.26px
  subheading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.25
    letterSpacing: -0.91px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 34px
    lineHeight: 1.18
    letterSpacing: -1.19px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.14
    letterSpacing: -1.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.12
    letterSpacing: -1.82px
  display:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 1.05
    letterSpacing: -3.8px
spacing:
  cardRadius: 12px
  buttonRadius: 9px
  elementGap: 9px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Call to action
  ghost-button:
    role: Secondary action
  pill-button:
    role: Tertiary action/Tag
  outline-button:
    role: Bordered action/Navigation element
  feature-card:
    role: Content container
  ghost-content-card:
    role: Visual content container without explicit bounding
  subtle-badge:
    role: Informational tag
  pill-badge:
    role: Compact informational tag
---

## Overview

**North Star:** Vibrant productivity hub: a dynamic workspace with energetic highlights.

ClickUp's interface channels a vibrant productivity hub atmosphere: an inviting white canvas contrasts with deep charcoal text, punctuated by vivid accents of violet and electric blue. Its visual identity relies on dynamic, lightweight UI elements, thin borders, and soft shadows, creating a sense of clarity and speed. Typography is confident and modern, leveraging condensed sans-serifs for headings and a highly legible sans-serif for body text, maintaining a tight visual rhythm. Gradients are strategically used for subtle flair and to highlight interactive states, reinforcing an energetic, forward-looking aesthetic.

### Do's

- Use Plus Jakarta Sans for all headings and prominent brand statements, leveraging its negative letter-spacing at larger sizes for a premium, condensed feel.
- Prioritize Canvas White (#ffffff) as the primary background for all page sections and elevated component surfaces to maintain a bright, open aesthetic.
- Apply Midnight Charcoal (#292d34) for primary body text and main content to ensure readability across all contexts.
- Utilize Electric Blue (#0091ff) or Deep Violet (#7b68ee) as the primary accent colors for interactive elements, links, and key brand highlights.
- Employ a 9px border-radius for buttons and a 12px radius for cards, with a 54px radius reserved for pill-shaped elements and tags.
- Create visual hierarchy and separation using thin, subtle borders in Ash Gray (#e8e8e8) or Dark Onyx (#202023) rather than heavy solid backgrounds.
- Maintain a compact information density with 12px card padding and 9px element gaps, ensuring UI elements feel connected but not overcrowded.

### Don'ts

- Avoid using achromatic grays like #000000 for body text; always prefer Midnight Charcoal (#292d34) for content clarity and consistency.
- Do not use strong, opaque background colors for action buttons unless explicitly outlined as a Brand or Accent color; prefer Dark Onyx (#202023) for filled primary actions with white text.
- Do not introduce new shadow styles; stick to the defined, subtle shadows (e.g., rgba(0, 0, 0, 0.1) 0px 1px 3px 0px) to maintain a lightweight elevation philosophy.
- Refrain from using heavily decorative gradients as primary backgrounds; reserve complex gradients for illustrative and atmospheric elements.
- Do not extend the use of Sometype Mono beyond code snippets or technical labels; it is not suitable for general body or heading text.
- Avoid large, unpadded sections; use the defined `elementGap` of 9px and `cardPadding` of 12px to ensure consistent spacing and density.
- Do not use bold weights indiscriminately; the combination of condensed letter-spacing in Plus Jakarta Sans and Inter provides sufficient visual weight when necessary. 

### Layout

The page maintains a centered, max-width layout, approximately 1200px wide. The hero section is full-bleed, featuring a prominent headline over a product screenshot. Sections alternate between soft white and subtle gray backgrounds, creating a clear visual rhythm. Content is generally arranged in two-column layouts, often with text on the left and visuals or product UI on the right, or centered stacks for feature showcases. Grid patterns are prominent for displaying product capabilities and features, typically in a multi-column card grid. The navigation is a sticky top bar, providing persistent access to global navigation elements.

### Imagery

Imagery primarily consists of bright, clean product screenshots embedded within UI mockups, often demonstrating the platform's features. These are typically contained within card-like structures or placed alongside explanatory text. Illustrations are abstract and organic, using fluid shapes and soft gradients, serving as decorative atmosphere rather than direct content explanation. Icons are predominantly outlined, conveying a lightweight feel, with a consistent stroke weight. The overall density is balanced: images punctuate text blocks to illustrate functionality without overwhelming the layout.

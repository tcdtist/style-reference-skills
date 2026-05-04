---
version: alpha
name: Fingerprint
description: Fingerprint's design system offers a grounded, informative aesthetic that balances clear data presentation with subtle brand touches. The combination of a warm, off-white background and a dark, slightly desaturated typography creates a high-contrast yet comfortable reading experience. The system utilizes a precise, technical monospace font for data display, contrasting with a clean sans-serif for general content, underscoring its focus on accuracy and data integrity. Primary interactions are highlighted with a vibrant, energetic orange, adding a focused burst of color against the otherwise subdued palette.
colors:
  canvas-white: "#fafaf8"
  ink-black: "#141415"
  graphite: "#454542"
  light-gray: "#f0f0ef"
  border-ash: "#e4e5e1"
  faded-stone: "#8c8c89"
  warm-white: "#ffffff"
  accent-orange: "#f35b22"
  success-green: "#62b06d"
  deep-teal: "#88d2c3"
  soft-blue: "#8bc5f3"
  monitor-grey: "#abb2bf"
  code-block-dark: "#2e2e2c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.45
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.22
    letterSpacing: -0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.17
    letterSpacing: -0.99px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 48px
components:
  cta-button-group:
    role: 
  visitor-data-console:
    role: 
  stats-block:
    role: 
  primary-action-button:
    role: Call to action
  secondary-ghost-button:
    role: Alternative action
  outline-ghost-button:
    role: Navigation/Tertiary action
  light-default-button:
    role: Utility/Default action
  highlighted-content-card:
    role: Information display
  feature-list-item:
    role: Listing features/options
  data-display-console:
    role: Technical data visualization
  success-status-badge:
    role: Status indicator
---

## Overview

**North Star:** Data Sheet Precision. A clean, well-organized technical document with key elements highlighted in a single, vivid accent.

Fingerprint's design system offers a grounded, informative aesthetic that balances clear data presentation with subtle brand touches. The combination of a warm, off-white background and a dark, slightly desaturated typography creates a high-contrast yet comfortable reading experience. The system utilizes a precise, technical monospace font for data display, contrasting with a clean sans-serif for general content, underscoring its focus on accuracy and data integrity. Primary interactions are highlighted with a vibrant, energetic orange, adding a focused burst of color against the otherwise subdued palette.

### Do's

- Prioritize Inter 400 for all body copy and standard UI text at 14px or 16px size for clear readability.
- Use Accent Orange (#f35b22) exclusively for primary calls to action and active states to guide user focus.
- Apply a 6px border radius for all interactive buttons and a 12px radius for contained content cards to provide soft corners.
- Ensure all technical data, code snippets, and console-like displays use JetBrains Mono in Code Block Dark (#2e2e2c) backgrounds for consistent visual cueing.
- Use Border Ash (#e4e5e1) for all component borders and dividers to maintain a subtle, structured appearance.
- Implement the card shadow `rgba(228, 229, 225, 0.3) 0px 1px 0px 0px inset, rgba(110, 111, 109, 0.1) 0px -1px 0px 0px inset` for subtle internal depth on cards.

### Don'ts

- Do not introduce new chromatic colors; stick to Accent Orange, Deep Teal, Soft Blue, Monitor Grey, and Success Green for emphasis.
- Avoid using bold or weight 700 for paragraphs; reserve Inter 600 for headlines and critical short statements only.
- Do not deviate from the established spacing scale; maintain 8px element gaps and 48px section gaps for visual rhythm.
- Do not use hard, sharp shadows; only apply the specified inset shadows or light, diffused box shadows for elevation.
- Avoid large imagery that breaks the grid; if images are used, they should complement the data-driven content or be contained within structured layouts.
- Do not use generic blue for interactive elements; Accent Orange is the designated primary interaction color.

### Layout

The page adheres to a max-width 1232px centered layout with generous vertical spacing between sections, using a consistent 48px section gap. The hero section follows a split content pattern, presenting a prominent headline and subtitle next to a visual example (often a screenshot of the product UI in a dark container). Content is frequently arranged in two-column structures, with text on one side and supporting visuals or data displays on the other. Feature sections often utilize a grid for presenting distinct items, typically 3-column articles. The overall density is spacious, providing ample breathing room for explanations and data. The navigation is a sticky top bar with interactive elements on the right.

### Imagery

The site's visual language primarily features product screenshots and abstract graphic elements. Product screenshots are typically high-fidelity UI examples, often depicting data tables or console interfaces, presented within dark, contained blocks to emphasize the 'software in action'. Abstract graphics are minimal, often using a limited color palette (orange, teal, blue) and clean, geometric shapes to convey concepts without distracting. Icons are mostly outlined, monochrome (Ink Black or Monitor Grey), with a few exceptions of filled, brand-colored icons for specific interactive elements or logos. Treatment is generally contained and isolated, with minimal overlapping, putting the focus on clarity and information. Image density is moderate, used to break up text and showcase product functionality rather than decorative atmosphere.

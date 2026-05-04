---
version: alpha
name: Franco Maria Ricci Editore
description: Franco Maria Ricci's design system evokes the gravitas of classic publishing with a pristine white canvas and sharp, high-contrast typography. Its visual identity relies on subtle use of a single, rich gold accent for highlighting and interactive states, creating an understated elegance. Components are minimal, often borderless and shadowless, allowing the content—primarily art books—to command attention. The overall impression is one of sparse luxury and meticulous curation, where visual space is as important as the elements it contains.
colors:
  canvas-white: "#ffffff"
  warm-paper: "#f6f6f6"
  faded-gray: "#b3b3b3"
  midnight-ink: "#000000"
  baroque-gold: "#bc9c5c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 42px
    lineHeight: 0.95
spacing:
  elementGap: 20px
  sectionGap: 48px
components:
  ghost-button:
    role: Interactive elements with minimal visual footprint, often acting as links or secondary actions. Their visual weight is conveyed through text and a subtle border or underline.
  outlined-accent-button:
    role: Primary Call-to-action or important interactive elements, distinguished by the Baroque Gold border.
  product-display-card:
    role: Used to showcase individual product items like books, emphasizing the product image itself.
  text-input-underlined:
    role: Standard input field for forms, with minimal styling.
---

## Overview

**North Star:** Ivory Page, Golden Inscription

Franco Maria Ricci's design system evokes the gravitas of classic publishing with a pristine white canvas and sharp, high-contrast typography. Its visual identity relies on subtle use of a single, rich gold accent for highlighting and interactive states, creating an understated elegance. Components are minimal, often borderless and shadowless, allowing the content—primarily art books—to command attention. The overall impression is one of sparse luxury and meticulous curation, where visual space is as important as the elements it contains.

### Do's

- Prioritize BodoniSvntytwoITCStd-Book (or a serif substitute) for all headings and body text, especially at larger sizes, to maintain a classic, editorial feel.
- Use Midnight Ink (#000000) for all primary text and main UI borders to ensure high contrast and a strong visual presence.
- Introduce Baroque Gold (#bc9c5c) sparingly, primarily for interactive element borders, links, or decorative accents to draw attention without overwhelming the design.
- Maintain hard, crisp edges: utilize 0px border-radius for all components, including buttons, cards, and input fields.
- Leverage ample whitespace as a primary design element; backgrounds should predominantly be Canvas White (#ffffff) or Warm Paper (#f6f6f6).
- Ensure interactive elements appear as ghost buttons or outlined elements, rather than solid fills, minimizing visual weight.
- When displaying products or imagery, use transparent backgrounds and 0px padding/radius on cards to allow the content to breathe and maintain a gallery-like presentation.

### Don'ts

- Avoid solid background colors for buttons; they contradict the ghost/outlined aesthetic.
- Do not use highly saturated colors outside the brand's Baroque Gold accent; maintain a largely achromatic palette.
- Refrain from using rounded corners or soft edges on any UI elements; the design emphasizes sharp, precise lines.
- Do not introduce drop shadows for elevation; rely on spacing and subtle background color changes for visual hierarchy.
- Avoid dense, information-heavy layouts; prioritize spaciousness and clear visual separation between elements.
- Do not use font weights other than 400 for serif typefaces, or 400/700 for Arial, to preserve typographic precision.
- Avoid large hero sections with busy imagery; focus on clean typographic statements and minimal visual content.

### Layout

The page adheres to a max-width contained layout, though the exact max-width is not defined globally but suggested through consistent margins. The hero section often features a centered headline over a background graphic or illustration. Content flows in distinct sections, often with alternating background colors (Canvas White and Warm Paper) to delineate blocks. A common pattern is a grid-based display for product listings, using 3-column layouts for cards. Navigation is a subtle top bar with minimal elements, suggesting a focus on content browsing rather than complex interactions. The rhythm is spacious and measured, with significant vertical spacing between sections.

### Imagery

The visual language focuses heavily on product shots of books, often isolated on neutral backgrounds, showcasing the cover art as the primary visual. When illustrations are present, particularly the Erte artwork, they are highly stylized with strong outlines and often featuring the Baroque Gold as a key color. Iconography tends to be minimalistic, outlined, and in Midnight Ink. Imagery's role is primarily decorative atmosphere and product showcase, with a bias towards text-dominant layouts punctuated by key visuals. The density is moderate, with images usually contained within well-defined, singular areas, not overlapping or full-bleed across sections.

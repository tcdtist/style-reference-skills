---
version: alpha
name: Jp
description: This system conveys a precise and product-focused atmosphere, grounded in a stark achromatic palette. The interplay of near-white backgrounds with dark grayscale text and interactive elements creates a clean, high-contrast visual hierarchy. Rounded corners on interactive elements (100px) soften the otherwise sharp 12px corners of content areas, suggesting approachability within a structured framework. Vivid blue accents are reserved for badges, acting as rare, focused indicators.
colors:
  canvas-white: "#ffffff"
  carbon-black: "#202020"
  graphite: "#333333"
  stone-gray: "#555555"
  silver-lining: "#e6e6e6"
  zinc: "#838383"
  sky-blue: "#4177ff"
  ocean-blue: "#41a9ff"
spacing:
  cardRadius: 12px
  buttonRadius: 100px
  elementGap: 4-18px
  sectionGap: 48-80px
components:
  cta-button-group:
    role: 
  category-filter-tab-bar:
    role: 
  template-preview-cards-grid:
    role: 
  primary-action-button:
    role: Main call to action
  secondary-outline-button:
    role: Navigation, filtering
  selection-toggle-button:
    role: Category selection (e.g., 'All', 'Exclusive')
  informational-badge-sky-blue:
    role: Categorization, status indicators
  informational-badge-canvas-white:
    role: Categorization, status indicators
---

## Overview

**North Star:** monochrome digital canvas, precisely framed

This system conveys a precise and product-focused atmosphere, grounded in a stark achromatic palette. The interplay of near-white backgrounds with dark grayscale text and interactive elements creates a clean, high-contrast visual hierarchy. Rounded corners on interactive elements (100px) soften the otherwise sharp 12px corners of content areas, suggesting approachability within a structured framework. Vivid blue accents are reserved for badges, acting as rare, focused indicators.

### Do's

- Prioritize Graphite (#333333) for body text on Canvas White (#ffffff) backgrounds to maintain AAA contrast.
- Use 100px border radius for all interactive elements like buttons and badges to signal affordance and approachability.
- Reserve Carbon Black (#202020) for dominant headlines and primary call-to-action button backgrounds.
- Apply Spacings of 8px, 10px, 12px, 14px, 18px to maintain a compact, structured layout, particularly around interactive elements.
- Utilize Ppneuemontreal at 0.02em letter-spacing consistently across all sizes and weights to maintain a crisp, digital aesthetic.

### Don'ts

- Avoid using multiple chromatic colors; Sky Blue (#4177ff) and Ocean Blue (#41a9ff) are the only allowed accents.
- Do not introduce sharp corners on interactive buttons or badges; maintain '100px' radius for these elements.
- Do not use dark backgrounds for large text blocks, as the system favors a light base with dark text.
- Avoid excessive line heights; the tight line height values (e.g., 1.0, 1.11, 1.2) should be maintained for a dense, composed feel.
- Refrain from using strong box shadows on general UI elements; the system relies on flat design with subtle borders for separation.

### Layout

The page uses a `max-width` contained model for its primary content, centered on a Canvas White background. The hero section features a centered headline and subtext, followed by a centrally aligned action button. Below the hero, a prominent filter bar with segmented toggle buttons suggests content organization. The main content area is a dense, responsive grid of template preview cards, which appear to use a 3-column layout at desktop sizes. Sections are clearly delineated by the content within, rather than strong visual separators or alternating background colors. The layout is compact, prioritizing information density without feeling cramped, with consistent vertical spacing between sections and elements.

### Imagery

The site heavily features product screenshots (template previews) presented within Canvas White (#ffffff) frames with 12px rounded corners. These previews are tightly cropped and often showcase digital interfaces or abstract graphic compositions. There is no lifestyle photography; the focus is entirely on the digital product itself, treated as an object of design. Illustrations, if present, are minimal and likely integrated within the templates themselves, not as separate decorative elements of the site. Icons are outlined, simple, and monochrome, complementing the clean UI. The overall density of imagery is high, with a large grid of template cards dominating the layout, making it visually rich despite the lack of complex decorative graphics.

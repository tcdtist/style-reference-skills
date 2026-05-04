---
version: alpha
name: Firecrawl
description: Firecrawl employs a crisp, data-centric interface with a strong emphasis on clean surfaces and a single vibrant accent color. Typography is confident and precise, prioritizing legibility and structure over decorative flair. Components are lightweight and interaction focused, using subtle borders and shadows to define hierarchy rather than heavy fills. The overall impression is one of efficiency and directness, designed for developers engaging with AI tools.
colors:
  fire-orange: "#ff4d00"
  code-blue: "#006fff"
  cloud-canvas: "#e5e7eb"
  ink-black: "#262626"
  paper-white: "#f9f9f9"
  slate-gray: "#727272"
  stone-gray: "#616161"
  silver-mist: "#949494"
  frost-gray: "#c7c7c7"
  pale-sienna: "#fcddcc"
  powder-pink: "#febec2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.1px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.54
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.43
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.07
    letterSpacing: -0.52px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -0.6px
spacing:
  cardRadius: 16px
  buttonRadius: 999px
  elementGap: 12px
  sectionGap: 164px
components:
  primary-action-button:
    role: Calls to action, signup, and key interactive elements.
  ghost-button:
    role: Secondary actions that need less emphasis, often next to a primary button.
  navigation-link-button:
    role: Navigation items in headers and footers.
  feature-card:
    role: Showcasing product features or benefits.
  hero-input-field:
    role: Main input for search/URL, prominent on hero section.
  code-block-card:
    role: Displaying code examples, with syntax highlighting.
---

## Overview

**North Star:** Whiteboard blueprints, with a single neon 'active' indicator.

Firecrawl employs a crisp, data-centric interface with a strong emphasis on clean surfaces and a single vibrant accent color. Typography is confident and precise, prioritizing legibility and structure over decorative flair. Components are lightweight and interaction focused, using subtle borders and shadows to define hierarchy rather than heavy fills. The overall impression is one of efficiency and directness, designed for developers engaging with AI tools.

### Do's

- Always use Fire Orange (#ff4d00) for primary interactive elements and key brand callouts.
- Maintain a clear visual hierarchy using Ink Black (#262626) for primary text and Slate Gray (#727272) or Stone Gray (#616161) for secondary text.
- Apply Cloud Canvas (#e5e7eb) as the page background and Paper White (#f9f9f9) for elevated card surfaces.
- Use Suisse typeface for all UI text, selecting weights 400 for body, 450 for subheadings, and 500 for main headings.
- Round all buttons and tags with a 999px border-radius for distinct pill-shaped components.
- Utilize a 1px Cloud Canvas (#e5e7eb) border for subtle visual separation of elements and boundaries.
- Implement the multi-layer shadow for Feature Cards to create a feeling of subtle elevation and depth.

### Don'ts

- Avoid introducing additional saturated colors; maintain the Fire Orange (#ff4d00) as the sole vibrant accent for consistency.
- Do not use heavy, opaque backgrounds for cards or panels; leverage transparency and subtle shadows for layering.
- Never compromise text contrast; ensure all text meets AAA accessibility standards against its background.
- Do not use generic square buttons; all actionable buttons should have a 999px border radius.
- Avoid excessively ornate or pictorial imagery; prefer simple icons, product mockups, or abstract data visualizations.
- Do not use arbitrary spacing; adhere to the 4px base unit and established element, card, and section gaps.
- Avoid bolding or italicizing large blocks of text; rely on font weight and size hierarchy with the Suisse typeface.

### Layout

The page maintains a centered, max-width layout, approximately 1200px wide, with generous horizontal padding. The hero section features a centered headline and a large input with call-to-action, set against the Cloud Canvas background. Sections are separated by consistent vertical spacing, often 164px, with subtle borders or faint background shifts. Content is arranged in alternating single-column stacks and two-to-three column card grids for features and examples. The navigation is a sticky top bar with clearly defined links and a prominent Fire Orange primary action button.

### Imagery

The visual language focuses on minimalist product-centric graphics. Photography is absent. Illustrations are stylized, flat, and often abstract, emphasizing geometric forms and subtle outlines. Icons are outlined, conveying functionality without visual weight. Product screenshots or code blocks are presented within clean card elements. Imagery serves to explain content or showcase product interfaces rather than for decorative atmosphere. The overall density is text-dominant, with graphics used sparingly and purposefully.

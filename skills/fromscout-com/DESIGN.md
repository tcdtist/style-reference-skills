---
version: alpha
name: fromscout.com
description: GoDaddy's design system, as observed, features a pragmatic and informative tone. It relies on a high-contrast dark blue (#00112C) for primary display areas contrasting sharply with an expansive white canvas. Text is generally dark and crisp (#111111), punctuated by a single vibrant teal (#00A4A6) that highlights interactive elements and key information without being overly playful. Components are structured, defined by subtle borders and minimal shadow, favoring clarity and directness over decorative flourishes.
colors:
  midnight-ink: "#00112c"
  activation-teal: "#00a4a6"
  crisp-white: "#ffffff"
  charcoal-text: "#111111"
  sky-gray: "#d4dbe0"
  graphite: "#000000"
  silver-mist: "#767676"
  dark-granite: "#444444"
  light-shadow: "#808080"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 0.71
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.71
spacing:
  cardRadius: 6px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 24px
components:
  ghost-button:
    role: Secondary calls to action or navigational links.
  outline-link-button:
    role: Contextual navigation or subtle calls to action.
  subtle-text-button:
    role: Tertiary actions or interactive text hints.
  primary-filled-button:
    role: Main calls to action.
  teal-ai-button:
    role: Specialized, highly visible action button for AI integration.
  information-card:
    role: Grouping of related content, often with interactive elements.
  text-input:
    role: User input fields.
---

## Overview

**North Star:** Pragmatic Blue Canvas

GoDaddy's design system, as observed, features a pragmatic and informative tone. It relies on a high-contrast dark blue (#00112C) for primary display areas contrasting sharply with an expansive white canvas. Text is generally dark and crisp (#111111), punctuated by a single vibrant teal (#00A4A6) that highlights interactive elements and key information without being overly playful. Components are structured, defined by subtle borders and minimal shadow, favoring clarity and directness over decorative flourishes.

### Do's

- Use Midnight Ink (#00112C) only for large hero sections or prominent headers to create a bold visual anchor.
- Apply Activation Teal (#00A4A6) exclusively to primary calls to action, active states, and small, functional accents like checkboxes or link underlines.
- Maintain a clear visual hierarchy by primarily using Crisp White (#ffffff) for backgrounds and Charcoal Text (#111111) for main text, ensuring high contrast.
- Implement a 6px border-radius for all cards and most buttons to maintain a consistent, slightly softened aesthetic.
- Ensure all interactive elements have sufficient padding: 8px vertical and 12px horizontal as a minimum for small buttons, scaling up for larger elements.
- Use Silver Mist (#767676) for secondary text and borders that need to recede slightly without losing legibility.
- Employ the card shadow (rgba(0, 0, 0, 0.1) 0px 5px 10px 0px) sparingly, only for cards and elevated components to provide subtle depth.

### Don'ts

- Do not use Activation Teal (#00A4A6) for large blocks of text or background sections; reserve it for functional accents.
- Avoid using multiple chromatic colors; limit the palette to the primary Activation Teal and neutral shades.
- Do not deviate from the gdsherpa font family for any UI text, as it defines the brand's typographic voice.
- Avoid excessive use of shadows; elevation should be subtle and serve a functional purpose for interactive or distinct components.
- Do not use transparent backgrounds with non-text elements unless it's a ghost button or input field.
- Refrain from using very thin borders for primary interactive elements; use solid borders or filled backgrounds for clarity.
- Do not introduce new border radii values beyond 6px or 10px; adhere strictly to established values for consistency.

### Layout

The page uses a contained layout model, with content centered within a maximum width that appears to be less than full-bleed for core sections. The hero section, however, uses a full-bleed dark background for visual impact, with centered headlines. Section rhythm is created through distinct content blocks, transitioning from a dark hero to a broad white canvas for feature listings. Content is arranged in alternating text-dominant blocks and icon-based feature grids. Vertical spacing between sections is generous but not excessive, promoting readability. Navigation consists of a simple top bar, with a prominent floating AI button on the right side.

### Imagery

The site uses a sparse, functional iconography style. Icons are primarily outlined or filled with Graphite (#000000), light, and abstract, serving to explain features rather than provide decorative flair. They are simple, geometric, and isolated, enclosed within their own content blocks. There is no use of photography or complex illustrations, emphasizing a clear, information-focused user interface.

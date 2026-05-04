---
version: alpha
name: AutoSend
description: AutoSend employs a crisp, modern aesthetic built on a soft white canvas and strong typographic presence. A single vibrant violet is designated for primary actions, contrasting with otherwise subdued interactions. Surfaces are clean and often borderless, relying on subtle shadows for depth rather than heavy outlines. The system prioritizes clear information hierarchy and lightweight components, allowing content to take precedence.
colors:
  ink: "#292524"
  paper: "#fafaf9"
  whisper: "#e7e5e4"
  snow: "#ffffff"
  graphite: "#79716b"
  stone: "#a6a09b"
  ebony: "#0c0a09"
  violet-action: "#615fff"
  violet-accent: "#4f39f6"
  sunset-orange: "#d97757"
  emerald-green: "#5ea500"
  alert-red: "#ff0000"
  ocean-teal: "#22b8cd"
  sky-blue: "#007ebb"
  lime-accent: "#9ae600"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.48px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0.56px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
    letterSpacing: 0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.1
    letterSpacing: 0px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 24px
  sectionGap: 80px
components:
  primary-filled-button:
    role: Primary call-to-action button.
  ghost-button:
    role: Secondary action button.
  text-button:
    role: Minimal interactive element, inline actions.
  feature-card:
    role: Content container for features or articles with subtle elevation.
  minimal-card:
    role: Flat content container without elevation.
  input-field:
    role: Standard text input field.
  navigation-link:
    role: Primary site navigation items.
  badge:
    role: Small, informative labels or tags.
---

## Overview

**North Star:** Crisp White Canvas

AutoSend employs a crisp, modern aesthetic built on a soft white canvas and strong typographic presence. A single vibrant violet is designated for primary actions, contrasting with otherwise subdued interactions. Surfaces are clean and often borderless, relying on subtle shadows for depth rather than heavy outlines. The system prioritizes clear information hierarchy and lightweight components, allowing content to take precedence.

### Do's

- Prioritize Geist for all marketing and UI text, reserving cooperLtBT exclusively for hero headlines and prominent display text.
- Use Paper (#fafaf9) for main page backgrounds and Snow (#ffffff) for card and elevated surfaces to establish surface hierarchy.
- Apply Violet Action (#615fff) strictly to primary call-to-actions, ensuring it consistently signals interactivity and importance.
- Maintain a clear visual rhythm with section gaps of 80px and elemental gaps of 24px.
- Use 8px border-radius for all interactive elements like buttons and input fields, and 16px for larger content cards.
- For subtle depth, apply the card shadow (rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px) sparingly, primarily on content cards.
- Utilize Geist Mono for all code snippets, data labels, and elements requiring monospace alignment, applying 0.04em or 0.10em letter-spacing as appropriate for emphasis.

### Don'ts

- Avoid using saturated accent colors other than Violet Action (#615fff) for primary button backgrounds; these are reserved for borders, icons, or specific highlights.
- Do not deviate from the defined border radii; mixing different radius values will disrupt the systematic feel.
- Refrain from introducing new shadow styles; rely solely on the specified card shadow for elevation.
- Do not use generic system fonts for headings or body text, as Geist and cooperLtBT define the brand's typographic identity.
- Avoid excessive use of borders; many components rely on background color differences or subtle shadows for separation.
- Do not use the neutral colors with chromatic names like 'Twilight Indigo' when creating new color tokens; stick to neutral descriptions.
- Do not apply letter-spacing to regular body text set in Geist; it should remain 'normal' for optimal readability.

### Layout

The layout is primarily a max-width contained design at 1200px, centered on the page. The hero section is a full-width dark background visually extending beyond the content area, featuring a large, centered headline and subtext with stacked call-to-action buttons. Sections below maintain a consistent vertical rhythm with 80px gaps, often featuring two-column layouts that alternate between text-left/image-right compositions. Content is presented in clean, well-defined blocks and card grids for features and data points. Navigation is a sticky top bar with a logo, text links, and two prominent buttons. The overall density suggests a comfortable reading experience with ample breathing room.

### Imagery

Imagery on AutoSend is functional and often abstract or illustrative, maintaining a clean, product-focused aesthetic. Product screenshots are contained and clearly framed, not full-bleed. Illustrations are geometric and clean, using a limited palette that integrates with the brand colors. Icons are primarily outlined or filled in a mono-color style, typically Ink (#292524) or Graphite (#79716b), occasionally with Violet Accent (#4f39f6) for emphasis. The blue-tinted gradient in the hero functions as an abstract background, suggesting scale and technology without being a literal image. The role of visuals is primarily explanatory and decorative, supporting product points rather than being the main content.

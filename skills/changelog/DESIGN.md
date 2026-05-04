---
version: alpha
name: Changelog
description: This design system evokes a 'midnight command center behind frosted glass,' achieving a focused, high-tech atmosphere through a dark achromatic palette and precise typographic choices. A subtly layered grayscale background creates depth without relying on heavy shadows, while crisp text and restrained accenting maintain readability. Signature anti-conventional headlines use weight 500 at larger sizes, conveying authority through subtle refinement rather than bold weight. The system relies on precise border treatments and a dominant 9999px radius for interactive elements, contrasting with 8px radius for cards, to define interaction points within the otherwise serious interface.
colors:
  canvas-black: "#08090a"
  surface-dark: "#141516"
  line-graphite: "#34343a"
  deep-charcoal: "#1c1c1f"
  border-carbon: "#23252a"
  border-ash: "#2d2e31"
  text-primary: "#f7f8f8"
  text-secondary: "#d0d6e0"
  text-muted: "#8a8f98"
  highlight-fog: "#e4e5e9"
  shadow-tint: "#3e3e44"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: -0.12px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.29px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.38px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -0.58px
spacing:
  cardRadius: 8px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 24px
components:
  text-link:
    role: Interactive text, navigation items.
  ghost-button-primary:
    role: Primary Call to Action, outlines interactiveness without filling.
  ghost-button-secondary:
    role: Secondary actions that need less visual emphasis.
  filled-button-compact:
    role: Small, contained action buttons.
  search-input:
    role: Input elements for search functionality.
  changelog-card:
    role: Container for changelog entries.
  navigation-tab:
    role: Filtering or category navigation.
  pill-tag:
    role: Categorization or short labels.
---

## Overview

**North Star:** Midnight command center behind frosted glass.

This design system evokes a 'midnight command center behind frosted glass,' achieving a focused, high-tech atmosphere through a dark achromatic palette and precise typographic choices. A subtly layered grayscale background creates depth without relying on heavy shadows, while crisp text and restrained accenting maintain readability. Signature anti-conventional headlines use weight 500 at larger sizes, conveying authority through subtle refinement rather than bold weight. The system relies on precise border treatments and a dominant 9999px radius for interactive elements, contrasting with 8px radius for cards, to define interaction points within the otherwise serious interface.

### Do's

- Prioritize Inter Variable font for all UI text, ensuring readability and consistency.
- Use Text Primary #f7f8f8 for all main text elements and headings on dark backgrounds to maintain strong contrast.
- Apply Canvas Black #08090a as the dominant background color across all pages.
- Use 9999px border radius for all actionable buttons and interactive pill components.
- Employ a 1px solid border using Line Graphite #34343a for subtle visual separation of components and containers, especially on hover.
- Leverage Berkeley Mono for all code snippets, timestamps, or technical text, keeping its distinct letter-spacing.
- Apply Surface Dark #141516 for subtle elevation for backgrounds of interactive components or hover states.

### Don'ts

- Avoid using multiple vibrant colors; restrict accent colors to functional elements if not present in the palette.
- Do not use heavy shadows for visual depth; rely on background color layering and subtle borders instead.
- Do not introduce new typefaces; the system is built on Inter Variable and Berkeley Mono.
- Avoid large hero imagery; prefer UI-focused elements or subtle graphic overlays.
- Do not use generic square corners; apply 8px radius to cards and containers for a softer, integrated feel.
- Do not use standard, bold font weights for large headlines; leverage Inter Variable weight 500-590 for a refined, modern approach.
- Avoid overly bright or pure white backgrounds; the system is designed for a dark interface.

### Layout

The page maintains a max-width contained layout, with content centered within a defined vertical flow. The hero section is a full-bleed dark canvas with a left-aligned, prominent headline. Sections follow a consistent vertical rhythm, primarily using a text-heavy, single-column stack for changelog entries, occasionally broken by centered visual components like the grid of app icons. Navigation is provided by a sticky top bar with clearly segmented, low-prominence text links and a ghost button for primary action. The layout emphasizes clarity and direct information delivery, with ample vertical rhythm from the 24px section gap and compact element spacing.

### Imagery

The visual language is characterized by functional abstraction and product-focused graphics. It primarily uses icons and stylized, often monochrome, product screenshots or UI elements within dark, contained boxes. Icons are outlined, with a moderate stroke weight, and mostly monochromatic, occasionally using a subtle gradient. Imagery serves an explanatory role for product features or decorative atmosphere within the dark UI, always contained and never full-bleed. There's a high density of text-dominant content, punctuated by these visually precise, often button-like, graphics.

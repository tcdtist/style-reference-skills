---
version: alpha
name: Zikd
description: Zikd employs a high-contrast theme defined by its stark black and white palette, punctuated by a soft, muted blue for interactive elements. Typography is bold and direct, ensuring clarity against dark backgrounds. Component surfaces feature sharp corners, with softer rounding reserved for interactive elements, contributing to a sense of precision and responsiveness.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  deep-graphite: "#111111"
  sky-dust: "#b8e4fc"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.85
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.85
  body:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.85
  body-lg:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.3
spacing:
  cardRadius: 14px
  buttonRadius: 5px
  elementGap: 16px
  sectionGap: 54px
components:
  primary-action-button:
    role: Filled button for main calls to action.
  search-result-card:
    role: Container for related search topics.
  domain-lookup-card:
    role: Container for the domain search input and action.
---

## Overview

**North Star:** High-contrast digital ledger.

Zikd employs a high-contrast theme defined by its stark black and white palette, punctuated by a soft, muted blue for interactive elements. Typography is bold and direct, ensuring clarity against dark backgrounds. Component surfaces feature sharp corners, with softer rounding reserved for interactive elements, contributing to a sense of precision and responsiveness.

### Do's

- Prioritize Deep Graphite (#111111) as baseline for component backgrounds and Midnight Ink (#000000) for primary text and significant borders.
- Use Sky Dust (#b8e4fc) exclusively for interactive surface backgrounds like list items or search results, never for primary text or borders.
- Apply a 3px solid Midnight Ink (#000000) border to cards and interactive elements for a crisp, defined outline.
- Maintain a default padding of 24px for card content using `cardPadding`.
- Utilize GD Sherpa at 700 weight for primary actions and key interface elements to maximize impact.
- Ensure all buttons have a 5px border-radius unless specified, and cards use 14px for a distinct visual separation.
- Use 16px as the primary `elementGap` for horizontal and vertical spacing between related items.

### Don'ts

- Do not introduce additional saturated colors; maintain the strictly neutral palette with Sky Dust as the sole accent.
- Avoid using soft shadows or elevation effects; elements are defined by borders and background changes.
- Do not use Canvas White (#ffffff) for large background areas except for specific content zones or header.
- Do not deviate from the specified GD Sherpa font family for any textual content within the main interface.
- Do not combine multiple text sizes within a single sentence or functional element; adhere to the type scale for clear hierarchy.
- Avoid decorative imagery or complex graphics; the interface should rely on strong typography and clear UI elements.
- Do not use `elementGap` greater than 16px for elements within a component; reserve larger gaps for section separation.

### Layout

The page uses a contained layout model, with content centered within a maximum width that dictates the flow. The hero section is characterized by a prominent input field with a clear call-to-action button, vertically stacked and centered. Subsequent sections, such as 'Related Search Topics', utilize multiple vertically stacked cards with consistent padding. Sections are primarily separated by consistent vertical spacing, and strong 3px borders provide clear visual boundaries around components. The page maintains a comfortable density with ample breathing room between elements, rather than dense information blocks. A minimal sticky header with the brand logo is present at the top.

### Imagery

This site features a minimalist approach to imagery, primarily relying on small, simple icons. The GoDaddy logo is the dominant visual graphic. Icons are presented in a monochrome, outlined style (Midnight Ink #000000) with a standard stroke weight, serving purely functional and decorative purposes without additional color or dimension. There are no photographs, complex illustrations, or 3D renders; the visual emphasis is entirely on UI elements and typography.

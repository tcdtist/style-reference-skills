---
version: alpha
name: Schemasofuncertainty
description: The 'Schemas of Uncertainty' visual system evokes a stark academic journal or a deconstructed text, prioritizing content density and an austere, monochrome aesthetic. Typography is the primary visual element, laid out to maximize information with minimal spatial adornment. The system relies on a consistent lack of color, using almost exclusively black text on a white background, punctuated by a single, dark gray accent that serves as subtle interactive and structural cues.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  charcoal-accent: "#2c3829"
spacing:
  elementGap: 10px
  sectionGap: 138px
components:
  navigation-link:
    role: Primary navigation item
  article-card:
    role: Container for article summaries or entries.
  body-text-block:
    role: Main content display.
  small-text-label:
    role: Category tags, indicators.
---

## Overview

**North Star:** Deconstructed text, academic sparseness

The 'Schemas of Uncertainty' visual system evokes a stark academic journal or a deconstructed text, prioritizing content density and an austere, monochrome aesthetic. Typography is the primary visual element, laid out to maximize information with minimal spatial adornment. The system relies on a consistent lack of color, using almost exclusively black text on a white background, punctuated by a single, dark gray accent that serves as subtle interactive and structural cues.

### Do's

- Prioritize text as the primary visual element, keeping layouts dense and content-focused.
- Use Century Schoolbook 16px / 1.3 lineHeight for all body text, ensuring a consistent academic tone.
- Apply Next Mono 10px / 1.3 lineHeight for all navigation, metadata, and smaller functional text.
- Restrict color usage to Ink Black for text, Canvas White for backgrounds, and Charcoal Accent (#2c3829) for subtle interactive highlights or structural borders.
- Use 10px for internal element spacing and padding within components, maintaining compactness.
- Utilize Charcoal Accent (#2c3829) for all interactive borders (e.g., active navigation items) to provide visual feedback.
- Employ a 138px vertical margin as the primary separator between major sections or content blocks.

### Don'ts

- Avoid using any colors beyond Ink Black, Canvas White, and Charcoal Accent; the system is deliberately monochrome.
- Do not introduce significant changes in font size or weight for emphasis; rely on spacing and position for hierarchy.
- Do not use box shadows or rounded corners; the aesthetic is flat, sharp, and text-driven.
- Avoid large imagery or elaborate graphics; the system emphasizes raw textual information over decorative visuals.
- Do not feature large empty spaces or overly generous padding; maintain a compact, information-dense display.
- Refrain from using animated transitions or complex UI effects; interaction should feel direct and immediate.
- Do not deviate from the specified font families; their distinct characteristics are central to the brand identity.

### Layout

The page prominently features a full-width, centered layout with a maximal text column. The hero area consists of a simple brand name and navigation against the white canvas. Content is arranged in alternating multi-column sections, primarily 4-column for article listings, maintaining a consistent vertical rhythm. Each article entry is an isolated block of text, implicitly outlined without explicit borders, and separated by significant vertical spacing (138px section gap). The navigation is a minimalist top bar. The overall density is high in terms of information per block, but the generous vertical spacing between blocks creates a structured, readable flow.

### Imagery

The site's visual language is characterized by an absence of conventional imagery. There are no photographs, illustrations, or product screenshots. The aesthetic is purely textual and typographic, relying on the arrangement of text blocks, headlines, and minimal UI elements to convey information. Icons are simple, outlined (implied stroke weight of 1px from subtle lines), and strictly monochrome. The density of text means visual space is entirely dominated by content, rather than atmospheric or explanatory graphics.

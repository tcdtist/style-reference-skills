---
version: alpha
name: Cargo
description: The design system of santijaramillo.com presents a straightforward, minimalist interface, primarily leveraging default browser styles with carefully selected overrides. Its visual identity is defined by a utilitarian palette of strong achromatic colors and a single vivid blue for active elements and links. Typography relies on system fonts, prioritizing direct communication over decorative flourish. Components are sparse, focusing on direct textual information with minimal visual ornamentation, creating an atmosphere of functional clarity.
colors:
  midnight-ink: "#000000"
  slate-gray: "#999999"
  arctic-white: "#ffffff"
  electric-blue: "#0055ff"
spacing:
  elementGap: 8px
  sectionGap: 64px
components:
  primary-text-block:
    role: Standard body text.
  muted-text-block:
    role: Secondary, less prominent body text.
  action-link:
    role: Hyperlinks for navigation or interaction.
---

## Overview

**North Star:** Direct text, minimalist blue accent

The design system of santijaramillo.com presents a straightforward, minimalist interface, primarily leveraging default browser styles with carefully selected overrides. Its visual identity is defined by a utilitarian palette of strong achromatic colors and a single vivid blue for active elements and links. Typography relies on system fonts, prioritizing direct communication over decorative flourish. Components are sparse, focusing on direct textual information with minimal visual ornamentation, creating an atmosphere of functional clarity.

### Do's

- Use Electric Blue (#0055ff) exclusively for interactive elements and links, keeping it as the sole chromatic element.
- Prioritize '-apple-system' (or system-ui fallback) at 18px weight 400 for all text to maintain system-native legibility.
- Apply a general letter-spacing of 0.017em to all text elements for consistent visual density.
- Maintain a stark contrast between text (Midnight Ink #000000, Slate Gray #999999) and the Arctic White (#ffffff) background.
- Use 8px for internal element spacing and 15px for padding around content blocks.
- Ensure all components have default 0px border-radius, reflecting a sharp, direct aesthetic.

### Don'ts

- Do not introduce additional accent colors; Electric Blue (#0055ff) is the only allowed brand accent.
- Avoid decorative heavy typography; stick to the single font family and its specified weight.
- Do not use elevation or shadows; rely on clear content separation and typography for hierarchy.
- Do not vary border-radius; all elements should maintain sharp corners.
- Do not use gradients or complex background fills; surfaces should remain solid and flat.
- Avoid using icons or imagery unless they are purely functional and unstyled; the emphasis is on text.

### Layout

The page employs a simple, centered block layout for content. There is no explicit max-width for the main content block, allowing it to adapt to the viewport width. The hero pattern is a direct, centered text block. Section rhythm is defined by vertical spacing between discrete text paragraphs. All content is arranged in a single-column, centered stack without complex grid structures. The layout is sparse, with ample whitespace surrounding textual elements. There is no visible navigation bar.

### Imagery

No imagery is used. The visual language is entirely text-based, relying on typography and color to convey information and hierarchy. Graphics are limited to default browser rendering, making content the sole visual focus.

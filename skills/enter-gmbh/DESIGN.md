---
version: alpha
name: Enter GmbH
description: Enter GmbH presents a bold, utilitarian aesthetic marked by high-contrast typography and a distinct lack of decorative elements. The visual system operates on contrasting surfaces of muted and vibrant hues, with a focus on clear, unembellished communication. Components are straightforward, featuring strong outlines and full-block backgrounds, reinforcing a sense of directness and functional clarity.
colors:
  ocean-mist: "#a5d3d4"
  warm-canvas: "#f9f8ea"
  pure-white: "#ffffff"
  charcoal-black: "#000000"
  graphite: "#282828"
  muted-stone: "#6a6a6a"
  flame-orange: "#ff5000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.15
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.29
spacing:
  buttonRadius: 25px
  elementGap: 24px
  sectionGap: 24px
components:
  primary-action-button:
    role: Interactive element for key user actions.
  navigation-link:
    role: Top-level navigation items.
  decorative-text-link:
    role: Subtle links within body content or lists.
  news-banner:
    role: Informational banner at the top of the page.
---

## Overview

**North Star:** High-contrast functional block

Enter GmbH presents a bold, utilitarian aesthetic marked by high-contrast typography and a distinct lack of decorative elements. The visual system operates on contrasting surfaces of muted and vibrant hues, with a focus on clear, unembellished communication. Components are straightforward, featuring strong outlines and full-block backgrounds, reinforcing a sense of directness and functional clarity.

### Do's

- Always use Charcoal Black (#000000) for primary text on light backgrounds for maximum contrast.
- Apply 25px border-radius to all interactive buttons and prominent links.
- Use Maax Mono at 16px with 1.5 line height for all extended body copy.
- Employ Flame Orange (#ff5000) sparingly for high-impact section backgrounds or decorative accents to draw attention.
- Maintain a comfortable density with element gaps typically at 24px and card padding at 13px.
- Contrast bold, solid Graphite (#282828) buttons with Pure White (#ffffff) text.
- Leverage the cool Ocean Mist (#a5d3d4) or warm Warm Canvas (#f9f8ea) for distinct full-width section backgrounds.

### Don'ts

- Do not introduce gradients or soft shadows; the design relies on flat, high-contrast elements.
- Avoid using more than two distinct font families on a single page, adhering to Helvetica, Maax Mono, and Sofia-Regular.
- Do not use subtle color variations for interactive states; rely on direct changes in background, border, or text color.
- Do not use descriptive words like 'click here' – always make the link target clear.
- Refrain from using thin fonts or light greys for critical information, as legibility is prioritized through high contrast.
- Do not mix border radii values; consistently apply 25px for interactive elements and none for block content.
- Avoid excessive imagery; the visual identity is driven by bold color blocks and typography.

### Layout

The page maintains a contained maximum width for text content, but sections frequently employ full-bleed background colors for visual impact. The hero section uses a full-bleed Ocean Mist background with abstract illustrations, centered body text, and a distinct link below. Section rhythm alternates between muted (Ocean Mist, Warm Canvas) and vibrant (Flame Orange) full-width color blocks. Content arrangement is primarily centered stacks of text, with some two-column text and link patterns. Navigation is a minimalist sticky top bar with a 'Support' button and a 'plus' icon acting as a menu toggle.

### Imagery

The visual language predominantly features abstract, geometric illustrations with a stark, blocky style. These are typically simple shapes in Charcoal Black, Flame Orange, and Pure White, serving as decorative atmosphere rather than content explanation. Imagery serves a bold, graphic purpose, providing visual anchors in an otherwise text-dominant layout. There is a minimal use of icons, which are outlined and in Charcoal Black.

---
version: alpha
name: Rarible
description: Rarible presents a command center aesthetic: a dark canvas with sharp geometric cards and a singular vivid green accent. Typography is compact and precise, using a monospace family for detail and a clean sans-serif for headlines. Bordered elements and subtle elevation provide structure without visual clutter, creating a focused environment for digital asset trading. The dominant visual language emphasizes technicality and functional clarity over rich ornamentation.
colors:
  rich-black: "#0a0a0a"
  graphite: "#27272a"
  ash-gray: "#3b3b3b"
  silver-text: "#9d9d9d"
  off-white: "#cecece"
  white: "#ffffff"
  true-black: "#000000"
  dark-granite: "#18181b"
  cadmium-green: "#faff00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.43
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.29
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.33
    letterSpacing: 0px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 32px
components:
  pill-ghost-button:
    role: Secondary action or filter button
  outline-text-button:
    role: Tertiary action or navigation link
  outline-rectangular-button:
    role: Filter or category selection
  filled-filter-button:
    role: Active filter or selection
  primary-action-button:
    role: Prominent action button (Login, Get $RARI)
  nft-collection-card:
    role: Display individual NFT collections or items
  search-input:
    role: Main search functionality
  table-row:
    role: Display data in tabular format
---

## Overview

**North Star:** Dark Terminal, Electric Green

Rarible presents a command center aesthetic: a dark canvas with sharp geometric cards and a singular vivid green accent. Typography is compact and precise, using a monospace family for detail and a clean sans-serif for headlines. Bordered elements and subtle elevation provide structure without visual clutter, creating a focused environment for digital asset trading. The dominant visual language emphasizes technicality and functional clarity over rich ornamentation.

### Do's

- Prioritize Rich Black (#0a0a0a) for all primary backgrounds and card surfaces to maintain the deep, dark aesthetic.
- Use Cadmium Green (#faff00) exclusively for primary calls-to-action, active states, and critical indicators, making it pop against the dark UI.
- Apply Geist Mono for all data-driven elements, tables, and numeric displays to convey a technical, precise feel.
- Utilize 9999px border radius for all interactive buttons and tags to create a consistent 'pill' shape.
- Maintain subtle visual hierarchy with Graphite (#27272a) for hairline borders and inactive outlines.
- Use 8px as the default element gap for consistent spacing between interactive components and text blocks.
- Ensure headings always use the Tomorrow font family to provide visual distinction from technical data.

### Don'ts

- Avoid using bright or overly saturated colors other than Cadmium Green (#faff00) to preserve the stark dark theme.
- Do not introduce strong drop shadows; rely on subtle borders and slight background opacity changes for depth.
- Refrain from using mixed fonts for single pieces of information; stick to Geist Mono for data and Tomorrow for headings/primary text.
- Do not deviate from the established border radii (6px, 12px, 9999px); avoid arbitrary rounding.
- Never use White (#ffffff) as a background for entire sections; reserve it for text and critical UI contrast.
- Avoid large, expansive padding within cards; content should feel relatively compact and framed by borders.
- Do not use generic gray tones for borders where Graphite (#27272a) or Ash Gray (#3b3b3b) are specified.

### Layout

The page uses a full-bleed structure for the main content area, with elements extending to the edges of the viewport horizontally. The hero section is dark and centered. Content is organized into distinct, vertically stacked sections, separated by consistent 32px section gaps. Within these sections, a columnar grid system is evident, particularly for feature cards, often 3-4 columns wide. Text and UI elements tend to be left-aligned or centered within their containers, avoiding complex asymmetric compositions. The layout prioritizes an information-dense, yet organized, presentation, complemented by a sticky top navigation bar and a persistent footer.

### Imagery

The site's imagery is primarily composed of diverse NFT art, often presented within structured cards. These visuals range from cartoonish characters to abstract designs, with no consistent color treatment or photographic style. They are always contained within boundaries, either sharp 6px rectangles or slightly rounded 12px cards, and serve as direct content rather than decorative atmosphere. Icons are filled, mono-color, and often use the Cadmium Green accent or White, maintaining a minimalist appearance. There's an absence of lifestyle photography or complex illustrations, emphasizing that the NFTs themselves are the primary visual content.

---
version: alpha
name: Fiasco
description: Fiasco projects a refined, tactile aesthetic using a muted off-white canvas and discreet typographical hierarchy. The system prioritizes crisp, open layouts punctuated by occasional vibrant accent colors that appear as focused, deliberate flashes rather than overwhelming washes. Components often feature generous radii, conveying a soft, approachable feel despite the otherwise formal typography. The overall impression is one of crafted minimalism with attention to subtle detail and comfortable negative space.
colors:
  cloud-canvas: "#f8f9f3"
  soot-black: "#1d1e19"
  ash-grey: "#e9eae2"
  slate-border: "#686e77"
  midnight-ink: "#151612"
  accent-yellow: "#fff714"
  candy-pink: "#fbc2d1"
  sky-blue: "#84bdff"
  vivid-orange: "#fd6b01"
  forest-green: "#03ac47"
  action-blue: "#204ce5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
    letterSpacing: 1px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: -0.28px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
    letterSpacing: -0.38px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -2.32px
spacing:
  cardRadius: 8px
  buttonRadius: 800px
  elementGap: 12px
  sectionGap: 32px
components:
  subtle-ghost-button:
    role: Secondary action or tag
  primary-filled-button:
    role: Call to action
  navigation-link-button:
    role: Top-level navigation
  standard-card:
    role: Content container
  hero-section-card:
    role: Prominent content container
  accent-pink-card:
    role: Highlight content
  soft-input-field:
    role: User input
  clean-input-field:
    role: Standard user input
---

## Overview

**North Star:** Gallery canvas, warm minimal.

Fiasco projects a refined, tactile aesthetic using a muted off-white canvas and discreet typographical hierarchy. The system prioritizes crisp, open layouts punctuated by occasional vibrant accent colors that appear as focused, deliberate flashes rather than overwhelming washes. Components often feature generous radii, conveying a soft, approachable feel despite the otherwise formal typography. The overall impression is one of crafted minimalism with attention to subtle detail and comfortable negative space.

### Do's

- Use Cloud Canvas (#f8f9f3) as the default page background for all primary content areas.
- Apply Soot Black (#1d1e19) for all primary text content to maintain strong contrast and readability.
- Ensure all text inputs utilize the 3px border-radius with a Slate Border (#686e77) on focus.
- Prioritize fully rounded '800px' corners for all buttons and tags, creating a soft, approachable aesthetic.
- For accentuation of content blocks, select from Accent Yellow (#fff714), Candy Pink (#fbc2d1), Sky Blue (#84bdff), Vivid Orange (#fd6b01), or Forest Green (#03ac47) as card backgrounds.
- Use 12px as the consistent `elementGap` for horizontal and vertical spacing between related components.
- Utilize Area-Normal font family for all body text, adjusting weights (400, 500, 600) and sizes (12-80px) to establish hierarchy.

### Don'ts

- Avoid using primary brand colors for extensive backgrounds; reserve vibrant colors for deliberate highlights and accents.
- Do not introduce sharp corners or minimal radii where a rounded aesthetic (8px or 800px) is expected, particularly for cards and buttons.
- Do not deviate from the established font families; avoid system fonts or other custom typefaces.
- Do not use letter-spacing values less than -0.0330em or greater than 0.1000em, as found in OC Highway, for readability and brand consistency.
- Avoid large, intrusive shadows; apply soft, subtle elevation where needed, like rgba(18, 25, 97, 0.08) 0px 1px 4px 0px.
- Do not exceed the pageMaxWidth of 1440px for contained content, ensuring a focused reading experience.
- Do not use generic gray tones for input borders; always prefer Soot Black (#1d1e19) for default states and Slate Border (#686e77) for specific form elements.

### Layout

The page adheres to a max-width 1440px centered model. The hero section often presents a large, centered headline over a background that alternates between full-bleed imagery and the Cloud Canvas. Sections maintain a consistent vertical rhythm, often delineated by distinct background colors or subtle changes in surface level. Content is structured in responsive grids, commonly a 2-column or 3-column arrangement for feature cards and portfolio items. Text-heavy blocks are centered or left-aligned within their containers, creating a spacious and comfortable reading experience. The primary navigation is a sticky top bar with minimal links and a discrete time display.

### Imagery

The visual language predominantly features clean, product-focused photography and abstract graphics. Photography consists of tight crops of technology or urban landscapes, often with a slightly desaturated, naturalistic color palette. Illustrations are minimal and graphic, serving as decorative accents or background elements. Icons are filled, monochrome, and have a clear, moderate stroke weight. Imagery primarily serves to create atmosphere or visually break up text, rather than being explicitly explanatory. The density is moderate, with images appearing in grid layouts, often within cards, interspersed with text blocks.

---
version: alpha
name: Frontier AI LLMs
description: Mistral AI presents as a digital desert landscape at dawn. The warm, earthy gradient backgrounds evoke vast, untamed frontiers, grounding the advanced AI concepts in natural, expansive imagery. Heavy, dark typography on these warm backdrops creates stark contrast, emphasizing seriousness and weight. An almost absent border radius (0px) reinforces a pragmatic, unyielding aesthetic, while the single vivid orange accent color highlights interaction points, mimicking a critical glow against the muted tones.
colors:
  desert-canvas: "#fffaeb"
  midnight-ink: "#1f1f1f"
  snowdrift: "#ffffff"
  void-deep: "#000000"
  graphite: "#3c3c3c"
  sandstone-slab: "#fff0c2"
  pale-ochre: "#ecdaa2"
  horizon-gradient: "#b35d20"
  frontier-accent: "#fa520f"
  golden-streak: "#ffd900"
  sunbeam: "#ffae00"
  faded-red: "#e00400"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.42px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.48px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.72px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.96px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.15
    letterSpacing: -1.14px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.44px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 0.95
    letterSpacing: -1.68px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 82px
    lineHeight: 0.95
    letterSpacing: -2.46px
spacing:
  elementGap: 12px
  sectionGap: 89px
components:
  cta-button-group:
    role: 
  feature-list-cards:
    role: 
  autonomous-work-feature-selector:
    role: 
  primary-dark-button:
    role: Call-to-action button for critical user journeys.
  ghost-accent-link-button:
    role: Secondary action or navigation highlight, often appearing in hero or footer zones.
  ghost-dark-link-button:
    role: Secondary action or navigation, typically within light sections.
  callout-tag-button:
    role: Informational tags or minor calls to action.
  navigation-link:
    role: Primary navigation links in the header.
  hero-headline:
    role: Dominant textual element on the primary landing page.
  body-paragraph:
    role: Standard informative text block.
  feature-card-light:
    role: Used for informational content blocks in light sections.
  footer-link:
    role: Navigation and informational links in the footer.
---

## Overview

**North Star:** Digital Desert Dawn — a stark, warm landscape where technology meets the wild.

Mistral AI presents as a digital desert landscape at dawn. The warm, earthy gradient backgrounds evoke vast, untamed frontiers, grounding the advanced AI concepts in natural, expansive imagery. Heavy, dark typography on these warm backdrops creates stark contrast, emphasizing seriousness and weight. An almost absent border radius (0px) reinforces a pragmatic, unyielding aesthetic, while the single vivid orange accent color highlights interaction points, mimicking a critical glow against the muted tones.

### Do's

- Use 'Horizon Gradient' for hero sections or significant atmospheric backgrounds.
- Maintain 0px border radius across all buttons and interactive elements for a sharp aesthetic.
- Prioritize 'Midnight Ink' for all primary text content against light backgrounds for maximum legibility.
- Apply 'Frontier Accent' (#fa520f) sparingly, only for interactive elements or key icons.
- Ensure large headlines (>= 48px) utilize Arial 400 weight with -0.0250em letter spacing.
- Use 'Desert Canvas' (#fffaeb) as the primary page background.
- Structure content with ample 12px 'elementGap' between adjacent components like text and buttons.

### Don'ts

- Avoid applying any border radius to UI elements; stick to 0px.
- Do not introduce new color gradients; adhere to 'Horizon Gradient' for atmospheric elements and a flat canvas for UI.
- Refrain from using any colors not specified in the palette, especially highly saturated hues, to maintain the muted, earth-toned brand identity.
- Do not use generic gray scales for text. Use the specific 'Midnight Ink' (#1f1f1f) and 'Graphite' (#3c3c3c) tokens.
- Avoid heavy drop shadows on elevated elements. If elevation is needed, rely on subtle background shifts.
- Do not vary line height from the specified values per type size to avoid disrupting vertical rhythm.
- Introduce white space around elements using the defined spacing tokens (e.g., 12px for elementGap) rather than relying on margin-auto or arbitrary values.

### Layout

The page follows a classic max-width centered layout, though the hero section spans full-bleed to establish an expansive atmosphere. The hero features a large, centered headline over the 'Horizon Gradient' background. Subsequent sections alternate between a primary 'Desert Canvas' background and a 'Sandstone Slab' for visual pacing. Content is arranged in alternating two-column layouts (text left, image/graphic right) and centered stacks. Feature sections often use simple bulleted lists or sequential blocks of text with small 'Frontier Accent' icons. Information density is moderate, with generous vertical spacing (sectionGap 89px) providing breathing room between content blocks. The header is a sticky top bar containing navigation and call-to-action buttons, while the footer is a multi-column layout.

### Imagery

The site heavily uses atmospheric, wide-landscape photography with an earthy, orange-yellow gradient overlay, reminiscent of desert mountains at dawn. These are full-bleed in hero sections, creating a sense of vastness and uncultivated potential. Elsewhere, the imagery is minimal, primarily focusing on abstract, pixelated block compositions in muted yellow tones (#fff0c2, #fffaeb) which serve as decorative, branded background patterns. Icons are monochrome, 'Frontier Accent' colored, outlined or filled, with a consistent stroke weight to match the sharp aesthetic. Imagery primarily serves to establish mood and brand identity, with an abstract rather than literal representation of AI.

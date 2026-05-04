---
version: alpha
name: Cosmos Network
description: Cosmos Network embodies a 'sophisticated darkness' aesthetic, utilizing a deep black canvas with stark white typography and subtle, near-gray surface treatments for content segmentation. The visual system projects authority and precision through a constrained color palette and compact, feature-rich typography. This creates a high-contrast, information-dense environment where text and data take precedence, punctuated by minimal UI elements that maintain a serious, technology-forward presence. Interactive elements are sparse, emphasizing clarity over visual flair.
colors:
  midnight-abyss: "#000000"
  ghost-white: "#ffffff"
  iron-slate: "#333333"
  faded-steel: "#807f7f"
  card-dark: "#1e1f20"
  frost: "#f1f4f4"
  interface-green: "#22e2a8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.63
    letterSpacing: 0.24px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
    letterSpacing: 0.35px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.32px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.43
    letterSpacing: 0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.33
    letterSpacing: 0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: 0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.13
    letterSpacing: 1.5px
spacing:
  cardRadius: 20px
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 30px
components:
  navigation-link:
    role: Primary navigation item
  ghost-button:
    role: Secondary action or link
  feature-card-dark:
    role: Container for secondary content like customer showcases.
  header-card-dark-large:
    role: Prominent content container for key sections.
  default-input-field:
    role: Standard input for user data.
---

## Overview

**North Star:** Midnight Ledger, sharp and precise

Cosmos Network embodies a 'sophisticated darkness' aesthetic, utilizing a deep black canvas with stark white typography and subtle, near-gray surface treatments for content segmentation. The visual system projects authority and precision through a constrained color palette and compact, feature-rich typography. This creates a high-contrast, information-dense environment where text and data take precedence, punctuated by minimal UI elements that maintain a serious, technology-forward presence. Interactive elements are sparse, emphasizing clarity over visual flair.

### Do's

- Prioritize Midnight Abyss (#000000) for all significant background areas to maintain the system's dark theme.
- Use Ghost White (#ffffff) for all primary text and critical UI elements to ensure high contrast and readability.
- Apply the `The Future` typeface with its specific font feature settings ('ss02', 'ss09') for all text elements to preserve brand identity.
- Segment content using subtle shifts in background color like Card Dark (#1e1f20) for cards, rather than relying on shadows or heavy borders.
- Maintain sharp edges for primary interactive elements, using a 0px border radius for ghost buttons and navigation links.
- Use Interface Green (#22e2a8) sparingly, only for small interactive indicators, active states, or subtle accent details.
- Apply a 20px border radius consistently to feature cards to soften their appearance while maintaining structural clarity.

### Don'ts

- Avoid using saturated background colors or multiple vivid accents; the system prioritizes a monochrome, high-contrast palette.
- Do not introduce drop shadows for elevation; rely on background color changes for surface differentiation.
- Do not use generic system fonts; `The Future` with its specific settings is critical for typographic identity.
- Avoid overly complex layouts or decorative gradients; emphasize clean, structured content presentation.
- Do not use heavily padded or filled buttons as primary calls to action; prefer ghost or text-based interactions.
- Do not use large, rounded corners on primary interactive elements; keep them sharp with 0px radius.
- Avoid mixing light and dark themes unless explicitly for a specific component variation.

### Layout

The page maintains a max-width contained layout rather than full-bleed, with primary content centered. The hero section is a full-width dark background with a large, centered headline and a supporting text block, accompanied by an abstract, data-visualization graphic. Section rhythm is primarily consistent vertical spacing on a continuous dark background, with content blocks appearing as distinct cards or text-heavy paragraphs. Content arrangement often features a single column of text or a split layout with text on the left and imagery/cards on the right, or a grid of 3-4 feature cards. There is a prominent sticky top navigation with subtle links.

### Imagery

The visual language for imagery is primarily functional and understated. Product-focused graphics, often represented as abstract, glowing spherical elements or simplified interface diagrams, convey complex technology concepts rather than aspirational lifestyle photography. These are typically contained within sections, not full-bleed, and utilize the system's core dark and accent colors. Icons are minimalist, outlined rather than filled, with a light stroke weight, primarily in Ghost White or subtle gray tones, and occasionally accented with Interface Green. Overall density is moderate, with imagery serving explanatory or illustrative roles complementing dense blocks of text.

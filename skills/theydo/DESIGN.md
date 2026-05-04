---
version: alpha
name: TheyDo
description: TheyDo employs a bright, geometric, and conversational aesthetic, balancing crisp achromatic UI with a vibrant, playful pink accent. The system favors strong contrasts, a clean information hierarchy, and a subtle interplay of sharp angles and soft curves within its visual elements. Prominent headlines with distinct letter spacing establish a confident, expert-driven tone, while a generous use of negative space creates an inviting, breathable user experience. The design avoids heavy shadows or complex textures, opting for a flat, modern appearance with a single vibrant accent.
colors:
  canvas: "#ffffff"
  ash-gray: "#fce7f3"
  graphite: "#131110"
  charcoal: "#000000"
  stone-gray: "#c6c3c3"
  muted-sage: "#7b7674"
  light-pink-wash: "#fad6e9"
  bubblegum-burst: "#f9b4db"
  magenta-zing: "#e82183"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.14px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.25
    letterSpacing: -0.076px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.288px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.19
    letterSpacing: -0.608px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.11
    letterSpacing: -2.52px
spacing:
  cardRadius: 8px
  buttonRadius: 5px
  elementGap: 15px
  sectionGap: 80px
components:
  primary-navigation-text-button:
    role: Unfilled text button for main navigation items with subtle `:hover` state
  outline-nav-item-button:
    role: Outlined button for secondary actions in header (e.g., login)
  ghost-outline-button:
    role: Ghost (transparent background) buttons with subtle borders.
  filled-dark-button:
    role: Primary action button with a dark background.
  subtle-information-card:
    role: Cards for displaying information, often with a light background.
  accented-content-card:
    role: Cards for highlighted content, featuring a light pink background and border.
---

## Overview

**North Star:** Crisp geometry, playful pink.

TheyDo employs a bright, geometric, and conversational aesthetic, balancing crisp achromatic UI with a vibrant, playful pink accent. The system favors strong contrasts, a clean information hierarchy, and a subtle interplay of sharp angles and soft curves within its visual elements. Prominent headlines with distinct letter spacing establish a confident, expert-driven tone, while a generous use of negative space creates an inviting, breathable user experience. The design avoids heavy shadows or complex textures, opting for a flat, modern appearance with a single vibrant accent.

### Do's

- Use 'Graphite' (#131110) for primary text and filled buttons against light backgrounds.
- Apply 'Magenta Zing' (#e82183) judiciously as an accent for headlines, interactive states, and outlined button borders.
- Prioritize 'wulkan' font for all headings, adjusting letter-spacing according to its specific scale (e.g., -0.029em at 48px).
- Maintain a default border-radius of 8px for cards and most UI elements, while using 5px for primary action buttons.
- Implement tight letter-spacing for all display and heading-level text to establish a distinct typographic presence.
- Use 'Stone Gray' (#c6c3c3) for subtle borders and ghost button outlines to maintain a light, crisp aesthetic.

### Don'ts

- Avoid heavy drop shadows or complex elevation; the system relies on flat surfaces and high contrast.
- Do not introduce new saturated primary colors; limit the palette to the established neutrals and 'Magenta Zing'.
- Do not use generic system fonts for headlines; the 'wulkan' typeface is integral to the brand's typographic identity.
- Refrain from creating highly dense content blocks; prioritize generous white space and clear visual separation.
- Avoid using 'Times' except for very specific, minor text elements where observed – it's a fallback, not a primary font.
- Do not deviate from the established padding values (e.g., 20px for cards, 0 15px for filled buttons) without strong justification.

### Layout

The layout follows a centered max-width pattern rather than full-bleed, creating a contained and organized feel. The hero section is characterized by a prominent, centered headline, often with a secondary conversational element, and typically features a distinct geometric accent in the background. Sections alternate between clean white backgrounds and subtle 'Ash Gray' panels, providing clear visual breaks. Content is often arranged in symmetrical two-column or three-column grids, particularly for feature descriptions or cards, using consistent vertical spacing. Navigation is a persistent top bar with minimal elements and clear 'Get a demo' and 'Login' calls to action.

### Imagery

The visual language for imagery is minimal and functional. It features clean product screenshots integrated within the UI, often with a slightly desaturated or grayscale filter for supporting brands. Decorative elements consist of abstract geometric shapes (squares and rounded squares) in varying shades of pink, floating or arranged in diagonal patterns, providing a playful and dynamic accent to otherwise static sections. Icons are outlined, subtle, and mono-color, typically in 'Charcoal' or 'Magenta Zing', serving an explanatory role without dominating the content. Overall density is image-light, focusing on UI and illustration for branding rather than photographic content beyond partner logos.

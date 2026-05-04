---
version: alpha
name: Eight Sleep
description: Eight Sleep's design evokes a sense of sophisticated, premium technology, akin to a high-end personal device, through its dominant dark surfaces and stark monochromatic palette. The experience is primarily dark, using a deep #121212 background, sharply contrasted by bright white typography and subtle gray accents. A singular vivid violet (#4158ee) serves as the primary accent, appearing sparingly on interactive elements to create precise visual cues without becoming distracting. The design prioritizes visual clarity and focused attention on product features, employing carefully structured dark surfaces rather than relying on heavy shadows or complex color schemes.
colors:
  midnight-ink: "#121212"
  porcelain-white: "#FFFFFF"
  silver-thread: "#808080"
  ash-gray: "#8e8d92"
  graphite: "#363636"
  winter-frost: "#F9F8F7"
  ghost-gray: "#F1F2F4"
  electric-violet: "#4158EE"
  sky-blue: "#1862FF"
  nightfall-gradient: "#1B263B"
  ocean-blue: "#3f5975"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: 0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.125px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.001px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.27
    letterSpacing: 0.143px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: 0.004px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -0.02px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.94
    letterSpacing: -0.02px
spacing:
  cardRadius: 12px
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 64px
components:
  region-selector-modal:
    role: 
  sleep-challenge-quiz-panel:
    role: 
  announcement-banner-cta-buttons:
    role: 
  ghost-navigation-link:
    role: Primary navigation, secondary CTAs
  primary-navigation-product-link:
    role: Top-level navigation items
  primary-cta-button:
    role: Main call to action
  footer-link:
    role: Informational links in footer
  region-selection-card-modal:
    role: Interactive list item in a modal
  modal-input-field:
    role: Single-line text input
  carousel-navigation-dot:
    role: Pagination for image carousels or feature sliders
  quiz-selection-button:
    role: Interactive options within a quiz or survey
  feature-highlight-card:
    role: Displays key product features or benefits
---

## Overview

**North Star:** Midnight Command Center // A dark, immersive interface with pin-prick bright accents, like illuminated controls in a premium device.

Eight Sleep's design evokes a sense of sophisticated, premium technology, akin to a high-end personal device, through its dominant dark surfaces and stark monochromatic palette. The experience is primarily dark, using a deep #121212 background, sharply contrasted by bright white typography and subtle gray accents. A singular vivid violet (#4158ee) serves as the primary accent, appearing sparingly on interactive elements to create precise visual cues without becoming distracting. The design prioritizes visual clarity and focused attention on product features, employing carefully structured dark surfaces rather than relying on heavy shadows or complex color schemes.

### Do's

- Use 'Midnight Ink' (#121212) as the default background for all primary page sections and modals to maintain the dark theme.
- Prioritize 'Porcelain White' (#FFFFFF) for all body text, headings, and primary interactive elements on dark backgrounds to ensure high contrast.
- Apply 'Electric Violet' (#4158EE) exclusively to key interactive elements like links, buttons, and active states to guide user focus.
- Employ NeueMontreal weight 300 for display-sized headings (e.g., 64px, 115px) to achieve a sophisticated, whisper-like authority.
- Utilize a 4px border-radius for all primary buttons and interactive inputs, and 12px for cards to establish a consistent shape language.
- Maintain generous vertical spacing with `sectionGap` at `64px` and component element spacing with `elementGap` at `16px`.
- Use text links that appear as 'Porcelain White' on dark backgrounds or 'Midnight Ink' on light backgrounds for standard interactions, reserving 'Electric Violet' for emphasis.

### Don'ts

- Avoid using multiple vibrant colors; restrict accent colors primarily to 'Electric Violet' (`#4158EE`) and its close variant 'Sky Blue' (`#1862FF`).
- Do not use box shadows for general elevation; rely on background color changes or subtle outlines to indicate depth.
- Do not use aggressive, heavy typography weights like 700 for large headings; the brand emphasizes subtlety through lighter weights.
- Avoid circular or aggressively rounded elements other than specific small icons or carousel indicators (9999px radius).
- Do not deviate from the NeueMontreal font family; it is central to the visual identity.
- Do not use generic gray tones for primary text on dark backgrounds; always use 'Porcelain White' for high readability.

### Layout

The overarching layout is full-bleed, particularly for hero sections and dark backgrounds, providing an expansive, immersive feel. Content is primarily centered or arranged in a two-column text-left/image-right or image-left/text-right alternating pattern. The hero section often features a large, centered headline over a dark background (sometimes with a gradient), immediately establishing the product's value proposition. Sections maintain a consistent vertical rhythm, with generous `64px` gaps between major content blocks. There are instances of multi-column card grids for features, typically 3 columns. The navigation is a sticky top bar, minimal, with right-aligned utility links and a primary CTA, keeping the focus on the main content area.

### Imagery

Imagery primarily features product shots and lifestyle photography. Product shots include tightly cropped, pristine images of the 'Pod' device, often on a neutral background or integrated into a clean bedroom aesthetic. Lifestyle photography is staged, showcasing individuals interacting with the product in a visually appealing, aspirational bedroom setting, focusing on comfort and technology. Images are generally contained, not full-bleed, with sharp rectangular edges. There is a strong emphasis on the product's integration into sophisticated domestic environments. Icons are monochrome, often using 'Ash Gray' or 'Porcelain White', with simple, clean outlines or fills.

---
version: alpha
name: OLIPOP
description: This design system evokes a sense of playful nostalgia fused with modern health consciousness. Dominant dark teal (#14433d) and creamy off-white (#fdf7e7) establish a comforting, natural palette, punctuated by a diverse array of pastel and vivid fruit-inspired accent colors for product showcase. The custom 'WindsorEF' typeface with weighty, generous letterforms and tight line-height gives headings an almost hand-drawn, vintage soda shop feel, while the 'Ano' sans-serif provides crisp, legible body text. Rounded corners and liberal padding contribute to an approachable, soft aesthetic, countering the sharp contrast of the headline fonts.
colors:
  deep-sea-teal: "#14433d"
  creamy-canvas: "#fdf7e7"
  cloud-burst-gray: "#d3e8e3"
  ash-slate: "#3a3a3a"
  pure-white: "#ffffff"
  ruby-red: "#7e0022"
  candy-apple-red: "#febac4"
  lavender-bloom: "#e3d2ed"
  tropical-sky: "#4ac1e0"
  mellow-yellow: "#fdf4b5"
  lime-spritz: "#95d95d"
  peach-fuzz: "#ffc3b3"
  aqua-pop: "#2ad2c9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.56
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.48
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
  display-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
spacing:
  cardRadius: 16px
  buttonRadius: 50px
  elementGap: 8-20px
  sectionGap: 40-80px
components:
  product-flavor-cards-row:
    role: 
  rewards-banner-get-rewarded-for-sipping:
    role: 
  shipping-announcement-banner-button-group:
    role: 
  primary-action-button:
    role: Primary calls to action in hero sections and prominent areas.
  secondary-action-button:
    role: Secondary CTAs, navigation items that feel like buttons.
  text-link-button:
    role: In-text actionable links that appear as buttons but lack distinct background.
  circular-icon-button:
    role: Small interactive elements like quantity selectors or social sharing.
  product-display-card:
    role: Showcasing individual product variants.
  accent-product-card-peach:
    role: Highlights specific product variants with an accent color background.
  accent-product-card-lavender:
    role: Highlights specific product variants with an accent color background.
  accent-product-card-buttercup:
    role: Highlights specific product variants with an accent color background.
  subscription-text-input:
    role: Form fields for email subscription or search.
---

## Overview

**North Star:** Whimsical soda shop on cream. Bold, rounded letterforms and a palette of comforting dark teal and creamy white, accented by juicy fruit colors, define its inviting, playful core.

This design system evokes a sense of playful nostalgia fused with modern health consciousness. Dominant dark teal (#14433d) and creamy off-white (#fdf7e7) establish a comforting, natural palette, punctuated by a diverse array of pastel and vivid fruit-inspired accent colors for product showcase. The custom 'WindsorEF' typeface with weighty, generous letterforms and tight line-height gives headings an almost hand-drawn, vintage soda shop feel, while the 'Ano' sans-serif provides crisp, legible body text. Rounded corners and liberal padding contribute to an approachable, soft aesthetic, countering the sharp contrast of the headline fonts.

### Do's

- Do use WindsorEF at weights 700-900 for all primary headings, particularly 72px and 80px, to establish the distinct brand voice.
- Do apply a 50px border-radius to all buttons and a 49px radius to input fields, ensuring a consistent soft, pill-shaped interaction aesthetic.
- Do use Deep Sea Teal (#14433d) for all primary interactive elements like buttons and active navigation links.
- Do ensure Creamy Canvas (#fdf7e7) or Cloud Burst Gray (#d3e8e3) serve as the primary background colors for sections, providing a light, inviting base.
- Do employ a diverse array of pastel and vivid accent colors (e.g., #febac4, #e3d2ed, #fdf4b5) for product cards to visually differentiate offerings.
- Do maintain a compact vertical rhythm, with section gaps typically between 40-80px and elemental gaps between 8-20px.
- Do use Ash Slate (#3a3a3a) for all primary body text to ensure strong readability against light backgrounds.

### Don'ts

- Don't use overly sharp or angular graphic elements; everything should lean towards rounded and soft forms (min 16px radius for cards).
- Don't dilute the impact of Deep Sea Teal (#14433d) by using other saturated primary colors for main calls to action.
- Don't introduce additional display fonts; WindsorEF is exclusive for prominent headlines, and Ano for supporting text.
- Don't use strong box shadows for cards or general elevation; the design relies on color and slight border separation for depth.
- Don't use generic system UI fonts like Helvetica for prominent information; it's reserved for subtle functional text.
- Don't deviate from the established accent color palette for product categorization; stick to the provided range (e.g., #febac4, #e3d2ed, #fdf4b5, #4ac1e0).

### Layout

The page primarily uses a max-width contained layout, centered on the screen, though the hero section spans full-width with text and a button contained within. The hero showcases a split background (cream and teal) with a prominent headline. Subsequent sections are typically full-width with a light background (Creamy Canvas #fdf7e7 or Cloud Burst Gray #d3e8e3), utilizing a multi-column card grid (5 columns) for product display. Content often follows a stacked, centered pattern for headlines and subtext, creating a clear visual hierarchy. Navigation is a sticky top bar, reinforced by a secondary 'Find In Store' link. Sections have distinct but not visually harsh vertical separation, primarily through color changes or content blocks. There's a playful balance between structured content and whimsical, off-center illustrative elements.

### Imagery

The visual language is product-centric, featuring tightly cropped product cans on solid, often pastel-colored backgrounds. Treatment is isolated and contained, with a consistent 16px border-radius on implied card containers. Photography is vibrant and well-lit, focusing solely on the product. Secondary visuals include playful, illustrative graphics (like the glass and jacket) that reinforce the retro, celebratory feel. Icons are monochrome, filled, and bold. The overall density is balanced, with imagery playing a key role in breaking up text and adding visual interest, creating an 'album cover' like feel for product presentation.

### Elevation

This design intentionally avoids prominent shadows, favoring instead distinct background colors and clear content separation to establish visual layers. Elements like product cards achieve definition through solid backgrounds (accent colors) rather than dropped shadows, contributing to a flat, clean, and unfussy aesthetic. The only detected shadow is a soft, subtle one on a button. There is a single instance of `rgba(0, 0, 0, 0.1) 0px 0px 24px 0px` on a button, but it's not a common pattern and doesn't define the system's elevation strategy.

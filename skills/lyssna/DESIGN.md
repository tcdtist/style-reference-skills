---
version: alpha
name: Lyssna
description: Lyssna cultivates a calm, focused workspace aesthetic with soft, muted background colors and a distinctive rich teal. Typography is functional and modern, balancing a custom sans-serif for body text with a unique display font for headlines. Components are lightweight with subtle rounding, emphasizing content rather than heavy borders or deep shadows. The overall feel is one of approachable professionalism, with color used sparingly to guide interaction.
colors:
  midnight-pine: "#061d29"
  arctic-mist: "#e5e7eb"
  canvas-white: "#ffffff"
  zenith-teal: "#006e75"
  pale-mint: "#b9ffe8"
  pale-amber: "#fffded"
  soft-stone: "#425d6d"
  rose-sunset: "#ffb0a4"
  warm-berry: "#4d0037"
  soft-magenta: "#ffc3e6"
  ocean-glimmer: "#0b978e"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.22
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.15
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.05
spacing:
  cardRadius: 24px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Call-to-action button for initiating key actions.
  ghost-outline-button:
    role: Secondary action button, blends into content.
  navigation-link-button:
    role: Navigation items in the header or active states.
  default-card:
    role: Content containers on white backgrounds.
  accent-card-pale-amber:
    role: Decorative or highlighted content containers.
  muted-action-link:
    role: Secondary action or informational links without button styling.
---

## Overview

**North Star:** Serene teal workspace

Lyssna cultivates a calm, focused workspace aesthetic with soft, muted background colors and a distinctive rich teal. Typography is functional and modern, balancing a custom sans-serif for body text with a unique display font for headlines. Components are lightweight with subtle rounding, emphasizing content rather than heavy borders or deep shadows. The overall feel is one of approachable professionalism, with color used sparingly to guide interaction.

### Do's

- Use 'Midnight Pine' (#061d29) for all primary text and headings.
- Apply 'Zenith Teal' (#006e75) for primary call-to-action buttons, ensuring it's always interactable.
- Maintain a 24px border-radius for all content cards, softening surfaces.
- Employ 'Arctic Mist' (#e5e7eb) for subtle UI dividers, borders, and inactive states.
- Prioritize the `mint` font for all body text, navigation, and functional UI elements.
- Use a base unit of 8px for vertical and horizontal element gaps to maintain comfortable density.
- Structure page sections with a 'Midnight Pine' heading using `grenette` font, followed by `mint` body text.

### Don'ts

- Avoid using highly saturated colors for large background areas; reserve them for accents or interactive elements.
- Do not introduce heavy shadows or deep elevation; components should feel lightweight and integrated.
- Refrain from using generic system fonts when `mint` or `grenette` are available.
- Do not deviate from the 8px or 24px border-radii for buttons and cards respectively.
- Do not overcrowd sections; maintain the comfortable density with 24px section gaps.
- Never use 'Pale Mint' (#b9ffe8) for text against light backgrounds; its contrast is insufficient.
- Avoid arbitrary gradients; only use the defined conic gradients for decorative elements, not functional UI.

### Layout

The page primarily uses a max-width contained layout, centered on 'Canvas White' background, with full-width sections for brand logos (implicitly max-width due to content). The hero section features a centered headline and subtext, followed by two primary ghost and filled action buttons. Below the fold, sections alternate between centered stacks of content and common text-left/image-right (or vice-versa) arrangements, utilizing a default card grid for features. Vertical rhythm is maintained by consistent 24px section gaps, with content organized for comfortable readability and scannability. The navigation is a fixed top bar with standard links and two distinct button actions.

### Imagery

The visual language combines abstract, gradient-filled graphics with clear product screenshots and professional, often unposed, photography. Imagery serves both decorative and explanatory roles. Abstract background gradients (like the Rose Sunset conic gradient) provide atmosphere, while tight product screenshots showcase the UI clearly, often with a subtle white border. Photography features diverse individuals in work settings, maintaining a candid, authentic feel rather than highly stylized lifestyle shots. Icons are filled, monocolor, and have a consistent stroke weight, used sparingly for functionality and subtle decoration. Imagery density is moderate, carefully balanced with text to avoid overwhelming the user.

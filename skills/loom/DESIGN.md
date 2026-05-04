---
version: alpha
name: Loom
description: Loom's visual design is a study in confident clarity, balancing a vibrant, highly saturated brand blue against clean, bright surfaces. The use of custom typography, Charlie Text and Charlie Display, with specific OpenType features like stylistic sets, imbues the interface with a distinct personality. Generous rounded corners, reaching up to 9999px for buttons and a significant 68.9231px for cards, create an approachable, fluid aesthetic, contrasting with the precise content delivery. Subtle background tints add a layered depth without heavy shadows.
colors:
  loom-blue: "#1868db"
  deep-sea-blue: "#123263"
  bright-blue: "#1558bc"
  violet-berry: "#48245d"
  lavender-mist: "#eed7fc"
  spring-bud: "#efffd6"
  vivid-green: "#82b536"
  sunset-orange: "#ff613d"
  crisp-white: "#ffffff"
  carbon-black: "#101214"
  ink-slate: "#292a20"
  sky-dust: "#e9f2fe"
  pure-black: "#000000"
  soft-gray: "#bfbfbf"
  shadow: "#bfbfbf"
  honey-dew: "#fff5d4"
  warm-ochre: "#a36700"
  yellow-burst: "#ffc716"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.71
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.65
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.52
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.27
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.14
  display:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 1.03
spacing:
  cardRadius: 41.6923px
  buttonRadius: 9999px
  elementGap: 16px
  sectionGap: 36px
components:
  primary-call-to-action-button:
    role: Interactive
  secondary-outline-button:
    role: Interactive
  dark-primary-button:
    role: Interactive
  minimal-link-button:
    role: Interactive
  default-content-card:
    role: Display
  feature-highlight-card-blue:
    role: Display
  asymmetric-image-card:
    role: Display
  deep-blue-content-card:
    role: Display
  subtle-shadow-card:
    role: Display
---

## Overview

**North Star:** Vibrant blue precision on a soft canvas.

Loom's visual design is a study in confident clarity, balancing a vibrant, highly saturated brand blue against clean, bright surfaces. The use of custom typography, Charlie Text and Charlie Display, with specific OpenType features like stylistic sets, imbues the interface with a distinct personality. Generous rounded corners, reaching up to 9999px for buttons and a significant 68.9231px for cards, create an approachable, fluid aesthetic, contrasting with the precise content delivery. Subtle background tints add a layered depth without heavy shadows.

### Do's

- Prioritize Loom Blue (#1868db) for all primary calls-to-action to establish a clear visual hierarchy.
- Use pill-shaped 9999px radii exclusively for interactive buttons and navigation items to convey approachability and distinguish them from content blocks.
- Employ the Charlie Display font (weight 700) for all main section headings and hero text to ensure prominence and brand consistency.
- Alternate subtle background tints like Sky Dust (#e9f2fe), Lavender Mist (#eed7fc), Spring Bud (#efffd6), and Honey Dew (#fff5d4) for different sections to add visual interest and segmentation without harsh dividers.
- Apply the multi-layer shadow `rgba(0, 0, 0, 0.04) 0px 2px 6px 0px, rgba(0, 0, 0, 0.06) 0px 5px 18px 0px, rgba(0, 0, 0, 0.1) 0px 24px 83px 0px` for elevating cards and images, maintaining a soft, diffused lift.
- Maintain a default element and card padding of 16px to ensure comfortable information density.
- Ensure all text uses the Charlie Text or Charlie Display font families with their specified OpenType stylistic sets to preserve the unique typographic character.

### Don'ts

- Avoid using harsh, high-contrast borders on cards; rely on subtle background colors and soft shadows for visual separation and depth.
- Do not introduce new color hues for primary interactive elements; restrict these to Loom Blue (#1868db) and its darker/lighter variants for consistency.
- Do not use sharp corners for buttons or primary content cards; maintain the brand's rounded aesthetic with 9999px or 41.6923px radii.
- Avoid excessive text styling within body paragraphs; stick to Charlie Text regular and medium weights for readability.
- Do not deviate from the defined letter spacing for headlines (normal) and body text; consistent tracking is crucial for the custom typeface's appearance.
- Resist using highly saturated colors for large background areas unless it's a dedicated feature highlight card with a specific content purpose.
- Do not implement complex gradient patterns beyond the subtle, directional background gradient example; the aesthetic focuses on solid colors and tinted surfaces.

### Layout

The page uses a contained layout with a maximum explicit width of approximately 1200px, centering content within a generous white background. The hero section features a prominent, centered headline and subtext, followed by two call-to-action buttons, then a large, centrally placed video player card. Sections alternate visual patterns, moving from centered headlines to two-column layouts (text left, image/video right, or vice versa). Vertical spacing between sections is comfortable, with subtle background color changes (e.g., Crisp White, Sky Dust) often serving as soft visual dividers. Content blocks typically use the brand's large rounded card radii, giving a playful yet structured feel.

### Imagery

The visual language comprises primarily product screenshots and occasional abstract, brand-colored graphics. Product screenshots are typically contained within cards with large rounded corners (41.6923px-68.9231px), often with an asymmetric border-radius, giving them a softened, friendly appearance. They are presented without strong borders, relying on background color or subtle shadows for definition. Iconography is primarily outlined or filled in Loom Blue or Ink Slate, with a minimal, functional aesthetic. Imagery serves to explain product functionality or illustrate concepts, rather than being purely decorative.

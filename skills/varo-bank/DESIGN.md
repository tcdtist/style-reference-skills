---
version: alpha
name: Varo Bank
description: Varo uses a vibrant, confident design language to convey financial accessibility. It primarily features a clean white canvas frequently punctuated by bold, saturated blocks of color for branding and accentuation. Typography is assertive, primarily using a custom grotesque sans-serif with controlled letter-spacing, giving a modern and approachable feel. Interactive elements are clearly delineated with a dominant purple accent, while a subtle elevation strategy ensures a lightweight, fluid user experience.
colors:
  canvas-white: "#ffffff"
  midnight-ink: "#000000"
  graphite: "#1c1c1c"
  storm-gray: "#939393"
  pale-mist: "#eff2f5"
  warm-linen: "#faefdc"
  sunrise-yellow: "#fdf0af"
  deep-plum: "#42185f"
  regal-violet: "#8c58d0"
  lavender-bloom: "#cdb0fa"
  forest-green: "#183428"
  limelight: "#d4e84b"
  burnt-orange: "#ed6c52"
  sunset-blush: "#f2a295"
  golden-earth: "#4a4216"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.56
    letterSpacing: 0.036px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.14
    letterSpacing: -0.004px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.27
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.22
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.17
    letterSpacing: -0.013px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
    letterSpacing: -0.019px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1
    letterSpacing: -0.019px
  display-xxl:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 0.96
    letterSpacing: -0.019px
  display-xxxl:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.92
    letterSpacing: -0.02px
spacing:
  buttonRadius: 4px
  elementGap: 24px
  sectionGap: 48px
components:
  primary-action-button:
    role: Calls to action that drive key user journeys.
  text-input-field:
    role: Standard user data entry.
  ghost-navigation-button:
    role: Interactive elements within the navigation bar.
  feature-card-full-bleed-color:
    role: Highlighted sections promoting specific product features.
  feature-card-text-only:
    role: Content blocks that emphasize text and visual separation.
  secondary-action-button:
    role: Alternate calls to action or less prominent interactive elements.
  icon-button-circular:
    role: Small, functional, and decorative interactive icons, often for utilities.
---

## Overview

**North Star:** Vibrant Financial Canvas

Varo uses a vibrant, confident design language to convey financial accessibility. It primarily features a clean white canvas frequently punctuated by bold, saturated blocks of color for branding and accentuation. Typography is assertive, primarily using a custom grotesque sans-serif with controlled letter-spacing, giving a modern and approachable feel. Interactive elements are clearly delineated with a dominant purple accent, while a subtle elevation strategy ensures a lightweight, fluid user experience.

### Do's

- Use Regal Violet (#8c58d0) for primary interactive elements, ensuring strong contrast against white or dark backgrounds.
- Apply 4px border-radius consistently for all interactive components like buttons and input fields.
- Employ National 2 Compressed for large, impactful headlines to create a bold, direct visual statement.
- Maintain a clear visual hierarchy with Neue Haas Grotesk Display, using varying weights and letter-spacing to differentiate content roles.
- Prioritize Canvas White (#ffffff) as the dominant background, using blocks of saturated brand/accent colors to define sections and emphasize content.
- Utilize 24px as the standard `elementGap` for horizontal and vertical spacing between components and elements.
- Ensure input fields have a subtle border of rgba(0, 28, 45, 0.14) against a white background to distinguish them clearly.

### Don'ts

- Avoid using highly saturated colors for large paragraphs of body text; reserve them for accents, headings, or interactive elements.
- Do not introduce new border radii beyond the established 4px for interactive elements and 0px for full-bleed content blocks.
- Refrain from using shadows for elevation; rely on color blocks and subtle borders for visual separation.
- Do not deviate from the specified letter-spacing values for Neue Haas Grotesk Display and National 2 Compressed, as they are crucial to the brand's typographic identity.
- Avoid arbitrary use of the accent color palette; deploy colors like Limelight (#d4e84b) and Burnt Orange (#ed6c52) intentionally for highlights and feature differentiation.
- Do not use generic system fonts unless explicitly specified for fallback; prioritize Neue Haas Grotesk Display and National 2 Compressed.
- Do not apply decorative gradients; the system relies on solid color blocks and sharp color transitions for visual dynamism.

### Layout

The page primarily uses a full-bleed layout, allowing content sections to extend edge-to-edge, but often contains content within implied horizontal guides. The hero section often features a split layout with prominent headlines and input forms on the left, paired with lifestyle product photography on the right. Section rhythms are defined by alternating background colors, moving from Canvas White to bold brand colors like Regal Violet or various accent colors. Content is arranged in alternating text-left/image-right or image-left/text-right patterns, creating a dynamic flow down the page. Feature sections frequently utilize a 3-column grid of distinct color blocks. The density is relatively spacious, with clear vertical separation between major content blocks. Navigation is handled by a sticky top bar.

### Imagery

The imagery primarily features product screenshots of the Varo mobile app, often held by diverse individuals in a modern, casual setting, conveying ease of use and approachability for a broad audience. Photography is generally bright with natural light, focusing on the product interface. Illustrations are geometric and abstract, using brand colors to create dynamic backgrounds or callouts, such as the colorful blocks for feature sections. Icons are filled, with moderate stroke weights, and are mono-color, reinforcing functional clarity. Imagery density varies; some sections are image-heavy, while others are text-dominant with smaller decorative graphics. The overall role of imagery is to contextually showcase the product and graphically support content with brand-aligned visuals.

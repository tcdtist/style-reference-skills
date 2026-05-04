---
version: alpha
name: Thehiddenjoboffer
description: Thehiddenjoboffer.net employs a subtle, dark-themed aesthetic with a strong emphasis on spaciousness and restrained interactivity. Its visual identity centers around a deep violet canvas, accented by lighter purples and a 'velvet gray' for muted text and borders. Typography is clean and direct, relying on a system sans-serif contrasted with bold headlines. The overall impression is one of quiet, understated elegance, with minimal elements allowing content to breathe.
colors:
  deep-violet: "#5e42a6"
  aubergine: "#493382"
  velvet-gray: "#a29cb0"
  lunar-white: "#ffffff"
  fog-gray: "#79718d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.25px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.75
    letterSpacing: 0.25px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.75
    letterSpacing: 0.25px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.5
    letterSpacing: 0.25px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: 0.25px
spacing:
  buttonRadius: 31.2px
  elementGap: 21px
  sectionGap: 43px
components:
  outline-pill-button:
    role: Primary action button, providing a clear call to action without a filled background, maintaining the light touch of the design.
  navigation-link:
    role: Discreet navigation items in the sidebar, providing subtle guidance.
  dominant-headline:
    role: High-impact headlines, designed to quickly convey key information.
---

## Overview

**North Star:** deep violet canvas, quiet atmosphere

Thehiddenjoboffer.net employs a subtle, dark-themed aesthetic with a strong emphasis on spaciousness and restrained interactivity. Its visual identity centers around a deep violet canvas, accented by lighter purples and a 'velvet gray' for muted text and borders. Typography is clean and direct, relying on a system sans-serif contrasted with bold headlines. The overall impression is one of quiet, understated elegance, with minimal elements allowing content to breathe.

### Do's

- Use 'Deep Violet' (#5e42a6) as the default background for large hero sections and primary page areas.
- Apply 'Aubergine' (#493382) for content blocks or footers to introduce subtle tonal shifts without breaking the dark theme.
- Set dominant headlines (48px) in 'Lunar White' (#ffffff) and Arial 700 with a tight line height of 1.0 for maximum impact.
- Use 'Velvet Gray' (#a29cb0) for all hairline borders and muted textual elements to maintain a sophisticated contrast.
- Maintain a clear visual hierarchy by limiting prominent colors to backgrounds and primary text, and using 'Velvet Gray' (#a29cb0) for secondary details.
- Ensure interactive elements like buttons have a high border-radius of 31.2px, creating a distinctive pill shape.
- Implement consistent horizontal padding of 39px and vertical padding of 14px for interactive elements.

### Don'ts

- Avoid introducing bright, saturated colors outside the specified violet range, as this contradicts the site's muted palette.
- Do not use heavy box-shadows or gradients, as the design philosophy leans towards flat surfaces and minimal elevation.
- Do not vary font families; stick to the specified Arial (or system-ui) to maintain typographic consistency.
- Avoid dense layouts; prioritize generous spacing with '21px' as the base element gap and '43px' for section gaps.
- Do not use filled buttons as primary actions; prefer the outlined pill button style with white text on a dark background.
- Do not use dark text colors on the 'Aubergine' (#493382) or 'Deep Violet' (#5e42a6) backgrounds, as contrast will be insufficient.

### Layout

The layout is characterized by a two-column structure. A narrow, dark violet sidebar on the left (`#312450`, inferred from contrast data as background for #a29cb0 links) houses navigation, while the main content area occupies the majority of the screen with a broader, lighter violet background (`#5e42a6`). Content is primarily centered within this main area, featuring a large headline, explanatory body text, and a centered interactive button. The max-width of the content appears to be around 1113px, ensuring a contained experience even on wider screens. Vertical rhythm is established through generous section gaps of 43px.

### Imagery

The site uses minimal imagery, primarily relying on abstract, light-line vector graphics on the main violet background. These lines form geometric patterns that provide subtle texture and depth without distracting from the core content or introducing photographic elements. Icons are not visible, suggesting a text-dominant, clean UI approach prioritizing pure typography and layout.

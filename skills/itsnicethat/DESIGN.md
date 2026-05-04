---
version: alpha
name: Itsnicethat
description: This design system feels like a carefully curated art zine, balancing disciplined, editorial typography with unexpected splashes of vivid, almost childlike color. The overall impression is one of approachable creativity and intellectual curiosity. Sharp corners dominate the UI, making the few instances of extreme roundedness (75px) feel like deliberate, playful exceptions. This tension between strict layout and spontaneous color creates a dynamic, engaging experience.
colors:
  black-ink: "#2b2b2b"
  pure-white: "#ffffff"
  frost-gray: "#f0efef"
  medium-gray: "#676767"
  muted-taupe: "#faead9"
  electric-purple: "#8147ff"
  sunshine-yellow: "#ffd519"
  deep-indigo: "#6219ff"
  risograph-gradient: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
    letterSpacing: 0.005px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.47
    letterSpacing: 0.008px
  heading:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.46
    letterSpacing: 0.077px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.73
    letterSpacing: 0.091px
spacing:
  buttonRadius: 75px
  elementGap: 10px
  sectionGap: 40px
components:
  the-nice-feed-article-feed-strip:
    role: 
  article-card-with-tags:
    role: 
  floating-navigation-bar:
    role: 
  primary-ghost-button:
    role: Call to action, navigation
  category-label-button:
    role: Informational grouping, filtering
  pill-accent-button:
    role: Primary call to action (floating nav)
  highlighted-button:
    role: Prominent action
  badge-tag:
    role: Content categorization
  article-card:
    role: Content listing
  search-input-field:
    role: User input
---

## Overview

**North Star:** Artist's sketchbook, bursting with vibrant scraps and precise typography.

This design system feels like a carefully curated art zine, balancing disciplined, editorial typography with unexpected splashes of vivid, almost childlike color. The overall impression is one of approachable creativity and intellectual curiosity. Sharp corners dominate the UI, making the few instances of extreme roundedness (75px) feel like deliberate, playful exceptions. This tension between strict layout and spontaneous color creates a dynamic, engaging experience.

### Do's

- Use Electric Purple (#8147ff) for primary interactive elements to ensure visual magnetism.
- Maintain 0px border-radius for all structural elements and standard buttons to reinforce the sharp, editorial aesthetic.
- Employ a 75px border-radius exclusively for navigation pill buttons to highlight their distinctive interactive role.
- Utilize LabilVariable font at larger sizes for headlines, coupled with its generous letter spacing (e.g., 0.091em at 40px), to create impactful, breathable titles.
- Integrate the Muted Taupe (#faead9) background for selected content sections to provide subtle visual differentiation and warmth.
- Leverage the Bradford font for body text and descriptive elements, ensuring readability and an editorial tone.
- Apply 10px element gap as a default for horizontal and vertical spacing between most inline content elements.

### Don'ts

- Avoid using shadows for elevation; rely on color and spacing hierarchy instead.
- Do not deviate from the 0px border-radius for anything other than specific navigation pill buttons.
- Refrain from using highly saturated colors for large background areas or extensive text blocks; reserve them for accents.
- Do not introduce additional font families; the current mix of Bradford, LabilVariable, and Labil is deliberate.
- Avoid generic 'modern' or 'sleek' visual tropes; the system's character is in its eclectic editorial feel.
- Do not introduce gradients unless they mirror the subtle 'Risograph Gradient' pattern; avoid complex, multi-stop gradients.

### Layout

The page adheres to a max-width, center-aligned model of 1200px, providing structured content presentation. The hero section often features a large headline centered over a background or a split layout with prominent text. Content sections maintain a consistent vertical rhythm, with generous section spacing of 40px. The main content flows in a series of stacked, full-width blocks, often alternating between text-dominant sections and grid-like arrangements of images/cards. Feature sections frequently exhibit a three-column grid for articles. Navigation is a combination of a fixed top bar and a floating pill-shaped menu at the bottom, offering both persistent and contextual navigation.

### Imagery

The site primarily uses diverse, high-quality photography and static illustrations to showcase creative work. Imagery is mostly contained within distinct blocks, without significant masks or overlaps, maintaining a structured presentation. Photographs are often bright and product-focused, displaying artworks or designs clearly. Illustrations are varied in style, ranging from whimsical and organic to geometric and flat, always serving to represent artistic content. There's a high density of imagery, particularly within content listings, making the site visually rich and appealing to a creative audience. Icons are minimal, subtle, and outline-based, mostly functional.

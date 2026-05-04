---
version: alpha
name: ethereum.org
description: This design system feels like a tech conference where abstract ideas are made tangible. Its light theme and ample white space convey clarity and openness, while a spectrum of vibrant violet-to-pink gradients and sharp vector illustrations infuse it with a futuristic, playful energy. The interplay between strong, almost black headings and lighter grey body text, anchored by a prominent purple accent, creates a sophisticated yet dynamic informational aesthetic. Rounded corners on interactive elements provide a friendly counterpoint to predominantly straight lines in graphics.
colors:
  cloud-white: "#ffffff"
  graphite: "#121212"
  ash-gray: "#616161"
  silver-mist: "#cfcfcf"
  ghost-white: "#f7f7f7"
  lavender-bloom: "#ece0ff"
  electric-violet: "#6c24e0"
  fuchsia-burst: "#f60e9d"
  indigo-orb: "#3d4ceb"
  emerald-spark: "#0f9972"
  deep-violet: "#41128c"
  violet-mist-gradient: "#9357f4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
spacing:
  cardRadius: 0px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 40px
components:
  cta-button-group:
    role: 
  popular-topics-cards:
    role: 
  feature-section-card-network-badge:
    role: 
  ghost-button-default:
    role: Interactive element
  ghost-button-secondary:
    role: Interactive element
  compact-action-button:
    role: Call-to-action
  feature-card-basic:
    role: Content container
  pill-button:
    role: Meta navigation / Tag
---

## Overview

**North Star:** Abstract digital canvas, illuminated.

This design system feels like a tech conference where abstract ideas are made tangible. Its light theme and ample white space convey clarity and openness, while a spectrum of vibrant violet-to-pink gradients and sharp vector illustrations infuse it with a futuristic, playful energy. The interplay between strong, almost black headings and lighter grey body text, anchored by a prominent purple accent, creates a sophisticated yet dynamic informational aesthetic. Rounded corners on interactive elements provide a friendly counterpoint to predominantly straight lines in graphics.

### Do's

- Use Electric Violet (#6c24e0) exclusively for primary calls-to-action and active states to maintain visual hierarchy.
- Employ the Inter font at weight 900 for all display and large headings (48px, 60px, 64px) to convey authority and impact.
- Apply Lavender Bloom (#ece0ff) for background sections that need a branded, soft distinction from the main Cloud White canvas.
- Ensure generous padding, primarily 16px for content blocks and 32px for larger structural elements, to create an airy, spacious feel.
- Utilize 8px border-radius for primary buttons to give a modern, approachable feel, offsetting the sharper aesthetic of core UI elements.
- Implement the background radial gradient for hero sections or key interstitial blocks to introduce visual depth and brand mood.

### Don'ts

- Do not use multiple contrasting accent colors in a single area; prioritize Electric Violet, reserving Fuchsia Burst and Indigo Orb for secondary illustration details.
- Avoid box-shadow on cards that are meant to be simple content containers; maintain the flat aesthetic unless elevation is explicitly required by interaction.
- Refrain from using more than two distinct font families; Inter and IBM Plex Mono are sufficient for all content and UI needs.
- Do not vary paragraph text size excessively; stick to 16px for body and 14px for captions for consistent readability.
- Avoid applying tight letter-spacing; all text should maintain 'normal' letter-spacing except where specific display styles are defined by the type scale.

### Layout

The page primarily uses a max-width, centered content model, providing ample white space on either side. The hero section is a full-bleed illustrated graphic, setting an immersive tone. Subsequent sections alternate between the main centered content block and full-width background treatments (like Lavender Bloom). Content arrangement often features a single-column stack for headlines and lead paragraphs, transitioning to multi-column layouts for features or exploratory content, frequently with text on one side and an accompanying illustration on the other. Vertical spacing between sections is generous (typically 40px), creating clear visual breaks. Navigation is a sticky top bar, containing branding, main links, and utility actions like search and language selection, maintaining constant access.

### Imagery

The site uses a distinctive style of 'line-art' vector illustrations, often featuring pastel-colored fills and outlines in the brand's violet, pink, and indigo hues. These are not flat but have a subtle dimensionality and often include abstract geometric elements (like the Ethereum logo). They are frequently full-width or large hero elements, serving decorative, atmospheric, and explanatory roles without being strictly product screenshots. There's an absence of traditional photography, favoring a consistent, stylized graphic language. Icons are outlined, matching the illustration style, usually monochrome or employing brand accents. Density favors imagery, with large illustrations often dominating sections, establishing an immersive visual experience rather than a text-heavy one.

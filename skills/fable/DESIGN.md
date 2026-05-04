---
version: alpha
name: Fable
description: Fable embraces a playful, illustrative aesthetic with strong, inviting typography and a limited but impactful color palette. Bold, contrasting backgrounds in rich greens and blues create distinct sections, often paired with white or near-black text for high readability. Imagery is organic and character-driven, feeling integrated rather than overlaid. Components feature generous padding and distinct, rounded shapes, projecting a friendly and approachable digital experience.
colors:
  forest-canopy: "#064c37"
  ocean-deep: "#43a1d7"
  midnight-ink: "#161015"
  deep-space: "#070607"
  slate-shadow: "#292229"
  pearl-white: "#ffffff"
  parchment: "#f7f4ee"
  ghost-gray: "#ededed"
  ink-wash: "#3f383d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.43
    letterSpacing: -0.11px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.14px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: -0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.09
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.08
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.94
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 0.88
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.86
spacing:
  cardRadius: 12px
  buttonRadius: 60px
  elementGap: 24px
  sectionGap: 24px
components:
  primary-filled-button:
    role: Call to action button
  navigation-link:
    role: Header and footer navigation
  light-theme-filled-button:
    role: Secondary call to action, interactive elements on dark backgrounds
  card-with-shadow:
    role: Featured content card, elevated interactive elements
  product-display-card:
    role: Book cover display, content grid item
  parchment-content-card:
    role: Informational cards, content blocks
---

## Overview

**North Star:** whimsical storybook canvas

Fable embraces a playful, illustrative aesthetic with strong, inviting typography and a limited but impactful color palette. Bold, contrasting backgrounds in rich greens and blues create distinct sections, often paired with white or near-black text for high readability. Imagery is organic and character-driven, feeling integrated rather than overlaid. Components feature generous padding and distinct, rounded shapes, projecting a friendly and approachable digital experience.

### Do's

- Use Forest Canopy (#064c37) or Ocean Deep (#43a1d7) for full-width section backgrounds to establish clear visual breaks.
- Apply Heldane Display for all headings, using sizes 48px, 72px, or 80px with weight 500 for maximum impact.
- Default to Inter weight 400 for body text with line-height of 1.42 or 1.43, and letter-spacing adjusted per size for comfortable reading.
- Employ a 60px border-radius for all primary and secondary buttons to maintain a pill-like, friendly aesthetic.
- Pad card elements generously with 40px top, 24px right, 34px bottom, 24px left for primary content cards, and 12px for smaller, tighter content.
- Use Slate Shadow (#292229) for primary button backgrounds with Pearl White (#ffffff) text.
- Incorporate subtle shadows rgba(0, 0, 0, 0.6) 0px 4px 20px 0px for elevated cards, ensuring visual hierarchy without heavy bordering.

### Don'ts

- Avoid using multiple chromatic colors in close proximity; the palette is designed for distinct section separation.
- Do not use generic sans-serif fonts for headlines; Heldane Display is essential for brand personality.
- Refrain from using hard-edged rectangles for interactive elements; all buttons and many cards require significant border-radius.
- Do not clutter pages with excessive imagery; allow illustrations to breathe and serve as focal points.
- Avoid thin borders for cards and buttons; rely on solid background colors or shadows for definition.
- Do not use letter-spacing: normal for text larger than 16px; Inter requires specific negative tracking for optimal appearance at varied sizes.
- Do not use pure black body text on white backgrounds, opt for Midnight Ink (#161015) or Deep Space (#070607) for softer contrast.

### Layout

The page model alternates between full-bleed background sections (especially the hero) and maximum-width contained content blocks, creating a dynamic progression. The hero typically features a centered headline over a brand-colored background, accompanied by a large illustrative element. Section rhythm is established by alternating large blocks of Forest Canopy green and Ocean Deep blue with white or parchment-colored sections. Content is often arranged in a split text-left/image-right pattern or centered stacks. Book displays utilize a dense grid of product cards. The layout feels spacious with comfortable breathing room between sections, and the navigation is a minimal sticky header at the top.

### Imagery

The visual language is characterized by custom, expressive illustrations featuring human-like characters engaging with books or digital devices. These illustrations are typically full-color, organic, and often occupy significant visual space as hero elements or section dividers. They are not contained within strict bounding boxes but rather interact with the text and layout. Photography, when present, tends to be product-focused (e.g., book covers) or subtle lifestyle imagery. Icons are generally filled and have a moderate stroke weight, matching the friendly, approachable aesthetic. Imagery serves both decorative atmosphere and explanatory content, emphasizing community and product interaction, and contributes to a visual density that feels rich but not overwhelming.

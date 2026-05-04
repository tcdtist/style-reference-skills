---
version: alpha
name: Threads
description: Threads presents a clean, content-focused experience with minimal ornamentation. The visual system prioritizes clarity and directness through a largely achromatic palette, precise typography, and subtle surface differentiation. Interaction is marked by a single, distinct blue accent, deployed sparingly to guide user attention. Components are lightweight with soft, rounded corners, emphasizing an approachable and modern feel.
colors:
  midnight-graphite: "#000000"
  canvas-white: "#fafafa"
  silver-mist: "#d5d5d5"
  platinum-gray: "#969696"
  dark-metal: "#424242"
  action-azure: "#385898"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
spacing:
  cardRadius: 8px
  buttonRadius: 1000px
  elementGap: 12px
  sectionGap: 48px
components:
  ghost-button:
    role: Minimal interactive element for secondary actions
  pill-ghost-button:
    role: Minimal interactive element, for icon-only actions or small secondary controls where a soft touch is desired.
  primary-filled-button:
    role: Main call-to-action button for critical user flows
  circular-icon-button:
    role: Small, usually icon-only buttons for navigation or quick actions.
  feed-post-card:
    role: Primary content container for user-generated posts
  navigation-side-rail:
    role: Main persistent navigation element
---

## Overview

**North Star:** Minimalist Content Stream

Threads presents a clean, content-focused experience with minimal ornamentation. The visual system prioritizes clarity and directness through a largely achromatic palette, precise typography, and subtle surface differentiation. Interaction is marked by a single, distinct blue accent, deployed sparingly to guide user attention. Components are lightweight with soft, rounded corners, emphasizing an approachable and modern feel.

### Do's

- Prioritize a clean, achromatic base: use Canvas White (#fafafa) for main backgrounds and Midnight Graphite (#000000) for primary text and icons.
- Introduce Action Azure (#385898) only for primary interactive elements like links and outlined buttons, and for active navigation states.
- Apply soft borders and separation with Silver Mist (#d5d5d5) for hairline dividers and Platinum Gray (#969696) for more substantial outlines.
- Maintain high contrast for all text against backgrounds, ensuring AAA accessibility with Midnight Graphite (#000000) on Canvas White (#fafafa).
- Use flexible 'system-ui' fonts at specified sizes (12px, 13px, 15px) for consistent readability and platform-native feel.
- Ensure all interactive elements have highly rounded corners (1000px) or full circles (50%) to convey approachability and clear affordance.
- Differentiate content blocks with subtle elevation using rgba(0,0,0,0.04) 0px 0px 12px 0px shadows rather than heavy backgrounds or strong borders.

### Don'ts

- Do not introduce new chromatic colors; restrict accents to Action Azure (#385898) and only when signifying interaction or brand.
- Avoid strong gradients or overly decorative background textures; surfaces should remain flat and understated.
- Do not use sharp 0px corners on interactive elements; all buttons and similar controls require a minimum of 8px radius, preferably 1000px for pill shapes.
- Do not use generic box-shadows; adhere to the specified subtle shadow for cards to maintain a lightweight feel.
- Avoid large, impactful headlines; all typography should remain compact and direct, primarily relying on 'system-ui' at smaller sizes.
- Do not use excessive white space between elements; maintain a compact density with 12px for `elementGap` for visual efficiency.
- Do not use non-system fonts; the UI relies on a native font feel for consistency and performance.

### Layout

The page uses a full-bleed structure for the main content stream, without a fixed `pageMaxWidth`, allowing content to adapt to viewport width. The hero section is minimal, simply a centered 'Home' title. The primary layout consists of a left-aligned, fixed sidebar for navigation and a central, scrolling content stream. Content posts are vertically stacked cards, with consistent vertical `sectionGap` spacing but no strong visual dividers between them. Card content is arranged in a text-dominant, centered stack within its container, often with images or media filling a central block. There is no complex grid usage beyond a single-column content stream. The density is compact, designed for efficient scrolling and information consumption. Navigation is handled by a sticky left-aligned sidebar with functional icons and a minimal top bar with a 'Log in' button.

### Imagery

The visual language for imagery is primarily functional. It consists of user-uploaded content (images, GIFs, videos) within cards, product screenshots, and avatar photography for user profiles. Photography is generally unstyled, maintaining its original context, often displayed within contained, rounded (8px) frames. Icons are minimalist, outlined, and monochromatic, primarily using Midnight Graphite (#000000) or Action Azure (#385898) to indicate states. Imagery serves explanatory and content-display purposes, rather than decorative atmosphere, often occupying significant visual space within a post's content area.

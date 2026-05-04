---
version: alpha
name: IKEA
description: IKEA's global digital presence is built on a foundation of optimistic simplicity. The interface features a clean, bright canvas, primarily using high-contrast typography and a distinct, energetic yellow as the primary brand accent. Component surfaces are generally flat and rounded, creating a friendly and approachable feel. This system prioritizes clear communication and intuitive interaction, using color sparingly for functional highlights, while maintaining a spacious, user-friendly layout.
colors:
  ikea-yellow: "#ffdb00"
  core-black: "#111111"
  canvas-white: "#ffffff"
  deep-sea-blue: "#0159a3"
  off-white: "#fffefb"
  text-black: "#000000"
  mid-grey: "#818181"
  light-grey: "#dadada"
  soft-peach: "#ffa6da"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.57
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.57
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.97px
  display:
    fontFamily: "system-ui"
    fontSize: 51px
    lineHeight: 1.08
    letterSpacing: -1.48px
spacing:
  elementGap: 24px
  sectionGap: 80px
components:
  primary-action-button:
    role: Main call-to-action button, drawing immediate attention.
  dark-icon-button:
    role: Small, functional buttons for video controls or navigation, offering a clear visual cue.
  light-icon-button:
    role: Small, functional buttons for controls like video pause, against lighter backgrounds.
  ghost-header-button:
    role: Secondary call-to-action or functional button within headers, unobtrusive.
  content-card-yellow:
    role: Highlighting key information or promotional content.
  text-input-field:
    role: User input fields.
---

## Overview

**North Star:** Scandinavian sunshine on white birch

IKEA's global digital presence is built on a foundation of optimistic simplicity. The interface features a clean, bright canvas, primarily using high-contrast typography and a distinct, energetic yellow as the primary brand accent. Component surfaces are generally flat and rounded, creating a friendly and approachable feel. This system prioritizes clear communication and intuitive interaction, using color sparingly for functional highlights, while maintaining a spacious, user-friendly layout.

### Do's

- Prioritize Ikea Yellow (#ffdb00) for all primary call-to-actions, ensuring it's the most prominent interactive element.
- Maintain a clear visual hierarchy using Core Black (#111111) for main headlines and Canvas White (#ffffff) for backgrounds.
- Apply an 8px border radius consistently to all cards, buttons, and interactive elements for a cohesive, friendly aesthetic.
- Use letter-spacing of -0.0290em for 'display' type (51px) and -0.0270em for 'heading' type (36px) to give titles a distinct composed feel.
- Ensure generous vertical spacing between sections, defaulting to 80px, to promote a comfortable, scannable layout.
- Reserve Deep Sea Blue (#0159a3) for decorative link backgrounds or highly specific interactive accents, not for primary actions.
- Use Off-White (#fffefb) for subtle background variations, providing visual depth without harsh color changes.

### Don'ts

- Do not use Core Black (#111111) for general body text; reserve it for high-contrast headlines or specific dark UI elements.
- Avoid arbitrary color choices outside of the defined palette; color should always serve a specific functional or brand-aligned purpose.
- Do not vary border radius values across components; all interactive elements and contained content should use a consistent 8px radius.
- Do not crowd content; maintain an 'elementGap' of 24px for horizontal and vertical spacing between internal elements.
- Avoid using multiple accent colors in close proximity that compete with Ikea Yellow (#ffdb00) or Deep Sea Blue (#0159a3).
- Do not use generic system fonts; only use Noto IKEA (or Inter as a substitute) to maintain typographic brand identity.
- Do not create an overly dense layout; ensure a maximum page width of 1440px with content centered, leaving ample breathing room.

### Layout

The page adheres to a max-width 1440px centered container for most content. The hero section is often full-bleed with either a product video or a large visual split between content and a prominent Ikea Yellow CTA. Sections maintain a consistent vertical rhythm with 80px gaps. Content is arranged in flexible layouts, often with product cards or content blocks organized into grids. Visuals frequently feature text overlays at the bottom left. The navigation is a persistent top bar, minimalist and functional, with logo and primary links.

### Imagery

Imagery primarily features product shots and lifestyle photography, often with a white or light-colored background that blends seamlessly with the UI. Product shots are typically centered and well-lit, functioning as content showcases. Illustrations, when present, are flat, organic, and often use brand colors or soft pastels for decorative or conceptual purposes. Icons are predominantly outline-style with a medium stroke weight, in monochrome (black) or occasionally brand colors, used functionally for navigation and interaction. Imagery plays a significant role in conveying product context and aspirational living, balancing text-dominant informational blocks with engaging visual content.

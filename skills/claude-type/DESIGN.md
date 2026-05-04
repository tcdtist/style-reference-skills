---
version: alpha
name: Claude Type
description: Claude Type presents a stately, minimalist aesthetic focused on displaying luxury typefaces. Its visual language relies on expansive neutral backgrounds, sparse content arrangements, and high-contrast typography. Typography is the primary visual element, with generous use of letter-spacing and custom font features. Images serve as artistic showcases, contained within large, softly rounded or arched frames, giving a gallery-like feel to the content.
colors:
  canvas-white: "#fcfbf7"
  paper-gray: "#e7e4e0"
  midnight-ink: "#0d0d0f"
  deep-charcoal: "#2b1b1b"
  ghost-fill: "#100401"
  pure-white: "#ffffff"
  success-green: "#99ff66"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.6
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.6
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.6
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
spacing:
  cardRadius: 32px
  buttonRadius: 100px
  elementGap: 16px
  sectionGap: 180px
components:
  navigation-link:
    role: Top navigation items and footer links.
  ghost-button-light-outline:
    role: Secondary action buttons, typically against light backgrounds.
  ghost-button-dark-outline-variant:
    role: Secondary action buttons against dark backgrounds.
  filled-button-dark-background:
    role: Primary action button within dark sections or against images.
  filled-button-light-background-variant:
    role: Primary action button within light sections.
  image-card-arched-top:
    role: Display large, artistic images with a distinct visual shape.
  image-card-arched-all-sides:
    role: Primary decorative image container for hero sections or prominent displays.
  information-card-rounded:
    role: Structured content blocks, e.g., for showcasing typefaces with accompanying descriptive text.
  status-chip:
    role: Small informational tags, often for highlighting product counts or states.
  input-field:
    role: Text input areas.
---

## Overview

**North Star:** Gallery of Arched Voids

Claude Type presents a stately, minimalist aesthetic focused on displaying luxury typefaces. Its visual language relies on expansive neutral backgrounds, sparse content arrangements, and high-contrast typography. Typography is the primary visual element, with generous use of letter-spacing and custom font features. Images serve as artistic showcases, contained within large, softly rounded or arched frames, giving a gallery-like feel to the content.

### Do's

- Prioritize typography as the primary visual element, using MagicUIPro with careful attention to size and letter-spacing.
- Use Canvas White (#fcfbf7) or Paper Gray (#e7e4e0) for all page and section backgrounds to maintain a clean, airy feel.
- Container imagery within large rounded or arched frames (900px radius) to create a gallery aesthetic.
- Apply 100px border-radius to all interactive elements like buttons and chips to achieve a soft, 'pill-shaped' appearance.
- Maintain generous spacing between sections and elements, with a base element gap of 16px and section gap of 180px, to emphasize content scarcity and luxury.
- Use Midnight Ink (#0d0d0f) for all primary text and Deep Charcoal (#2b1b1b) for secondary text or subtle borders.
- Employ the 'dlig' font feature for all MagicUIPro text to render discretionary ligatures, enhancing typographic elegance.

### Don'ts

- Avoid strong, vivid chromatic colors. Keep color palette subdued, relying on neutrals and a single subtle accent.
- Do not use sharp 0px corners on any card or actionable UI element; 32px is the minimum for cards, 100px for buttons.
- Do not overcrowd sections with dense content; maintain a comfortable density with ample breathing room.
- Avoid heavy shadows or elevation effects; the design relies on subtle background color shifts for surface distinction.
- Do not use generic system fonts; only MagicUIPro (or its identified substitute) should be used for branding consistency.
- Minimize the use of multiple font weights; the system primarily uses a single weight with size and spacing for visual hierarchy.
- Do not use decorative borders on elements other than subtle outlines for ghost buttons or inputs.

### Elevation

This design system intentionally avoids overt shadows. The distinction between surface levels is achieved through subtle background color changes (Canvas White, Paper Gray, Ghost Fill) and the strong visual weight of imagery contained within distinct shapes. There is no traditional 'elevation' through shadows, maintaining a flat, sophisticated aesthetic.

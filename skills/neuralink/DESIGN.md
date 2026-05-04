---
version: alpha
name: Neuralink
description: Neuralink's design system uses a high-contrast dark-to-light progression, transitioning from a deep void to soft, textured surfaces. Typography is minimal and precise, focusing on clear communication over decorative flair. Interactive elements feature soft, large radii, creating an approachable feel within the clinical and technical context. The system relies on a restrained palette, where shifts in background color delicately delineate sections.
colors:
  midnight-void: "#000000"
  canvas-white: "#ffffff"
  soft-linen: "#f5f5f5"
  ash-gray: "#bababa"
  neural-gradient: "#e486ab"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.037px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: -0.03px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.015px
  display-sm:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.15
    letterSpacing: -0.015px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.015px
spacing:
  cardRadius: 20px
  buttonRadius: 80px
  elementGap: 12px
  sectionGap: 50px
components:
  primary-call-to-action-button:
    role: Informative action button
  ghost-button-dark:
    role: Secondary action on dark backgrounds
  ghost-button-light:
    role: Secondary action on light backgrounds
  info-banner:
    role: Top-level informational message
  navigation-link:
    role: Main navigation item
  pioneer-profile-card:
    role: Displaying relevant profiles or opportunities
---

## Overview

**North Star:** Deep void to soft textured canvas

Neuralink's design system uses a high-contrast dark-to-light progression, transitioning from a deep void to soft, textured surfaces. Typography is minimal and precise, focusing on clear communication over decorative flair. Interactive elements feature soft, large radii, creating an approachable feel within the clinical and technical context. The system relies on a restrained palette, where shifts in background color delicately delineate sections.

### Do's

- Use Midnight Void (#000000) for hero backgrounds and primary text to establish high contrast.
- Employ Canvas White (#ffffff) for primary interactive element backgrounds and key text on dark backgrounds.
- Apply Soft Linen (#f5f5f5) as the background for most content sections to provide a subtle texture contrast to the dark hero.
- All buttons must use an 80px border-radius for a distinct, soft pill shape.
- Maintain comfortable density with 12px element-gap between components and 50px section-gap between major content blocks.
- Utilize UntitledSans for all type, with variable letter-spacing as defined in the typography section, to ensure precise visual rhythm.
- Implement the Neural Gradient for the top informational banner, creating a unique brand signature without relying on saturated brand colors elsewhere.

### Don'ts

- Do not introduce additional saturated colors beyond the Neural Gradient; maintain the achromatic base palette.
- Avoid generic rectangular buttons; all buttons should adhere to the 80px radius for a consistent pill aesthetic.
- Do not use heavy shadows or excessive elevation; the design relies on changes in background color and subtle borders for depth.
- Refrain from using Ash Gray (#bababa) for critical text or active states; reserve it for muted, secondary information.
- Do not break the established typographic scale; maintain semantic roles and their associated sizes and letter-spacing values from the typeScale.
- Avoid compact layouts; prioritize comfortable spacing with 12px element gaps and 50px section gaps.
- Do not use generic system fonts; the custom UntitledSans is fundamental to the brand's quiet, precise tone.

### Layout

The page transitions from a full-bleed dark hero with a prominent centered headline to a contained, variable-width content area. Sections alternate between Midnight Void for key messages and Soft Linen for detailed content, creating a distinct visual rhythm. Most content uses a max-width container, appearing centered. Content arrangement often features a split layout (text left, image right or vice versa) or stacked information blocks. Navigation is a sticky top bar, minimal and integrating a subtle Ghost Button.

### Imagery

Imagery primarily features people (portraits, profiles) or abstract scientific visualizations, often integrated with a duotone or gradient overlay (similar to the Neural Gradient) that blends with the site's palette. Photos are often contained within soft-edged shapes (20px-60px radius) rather than hard crops. Icons are minimal, outlined, and monochromatic, matching the surrounding text color. The role of imagery is a blend of inspirational (people) and explanatory (visualizing complex ideas), maintaining a high-fidelity and slightly conceptual aesthetic.

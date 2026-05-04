---
version: alpha
name: Proton
description: Proton's design system evokes a digital sanctuary: a crisp, bright base accented by deep, protective purples. The layout emphasizes clear information hierarchy with ample whitespace, using soft gradients for depth without heavy shadows. Typography is precise and confident, balancing a strong sans-serif for UI with a traditional serif for prominent headlines. Interactive elements are clearly defined by vibrant violet cues rather than subtle hover states.
colors:
  canvas-white: "#ffffff"
  cloud-gray: "#f6f7f9"
  stone-gray: "#e5e7eb"
  iron-gray: "#4b5563"
  ash-gray: "#9ca3af"
  privacy-violet: "#372580"
  action-violet: "#6d4aff"
  lavender-glow: "#e2dbff"
  twilight-gradient: "#c5b7ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.55
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.63
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.16
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.13
    letterSpacing: -0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.11
    letterSpacing: -0.72px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.06
    letterSpacing: -0.96px
spacing:
  cardRadius: 24px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 64px
components:
  filled-action-button:
    role: Primary call-to-action button
  ghost-button:
    role: Secondary call-to-action or navigational button
  navigation-link-button:
    role: Tertiary action, internal navigation
  muted-ghost-button:
    role: Inactive or low-emphasis secondary button
  feature-card:
    role: Container for product features or illustrative content
---

## Overview

**North Star:** Digital sanctuary on white canvas

Proton's design system evokes a digital sanctuary: a crisp, bright base accented by deep, protective purples. The layout emphasizes clear information hierarchy with ample whitespace, using soft gradients for depth without heavy shadows. Typography is precise and confident, balancing a strong sans-serif for UI with a traditional serif for prominent headlines. Interactive elements are clearly defined by vibrant violet cues rather than subtle hover states.

### Do's

- Use 'Privacy Violet' (#372580) for all primary headline text, leveraging its authoritative depth.
- Apply a 9999px (pill) border-radius to all buttons for a consistent soft, approachable shape.
- Define interactive elements clearly with 'Action Violet' (#6d4aff) for filled backgrounds or text, and use Stone Gray (#e5e7eb) for subtle ghost button borders.
- Structure large negative spaces with 'Canvas White' (#ffffff) and 'Cloud Gray' (#f6f7f9) to create clear content separation and visual breathing room.
- Employ ProtonSerif for all major headings to establish a distinct, traditional brand voice.
- Implement consistent internal padding of 20px for cards and 64px for section side-padding to maintain visual alignment and density.
- Utilize the Lavender Glow (#e2dbff) and Cloud Gray (#f6f7f9) gradients to provide subtle background depth without resorting to heavy drop shadows.

### Don'ts

- Avoid using harsh or dark shadows; instead, rely on subtle background gradients and color shifts for layering and depth.
- Do not introduce new saturated hues outside of the defined violet brand colors unless for specific semantic purposes (e.g., success, error).
- Avoid arbitrary border-radius values; adhere strictly to 9999px for buttons, 24px for cards, and 6px for navigation items.
- Do not deviate from the ProtonSerif and ProtonSans font families; maintain the established typographic hierarchy.
- Refrain from tight, compressed layouts; ensure generous 'sectionGap' (64px) and 'elementGap' (4px) values are maintained.
- Do not use generic blue for links; all interactive text links should default to 'Action Violet' (#6d4aff) for consistency.
- Avoid unnecessary decoration or heavy visual elements; the system prioritizes clarity and a lightweight feel.

### Layout

The page primarily uses a full-bleed layout, particularly in the hero section where atmospheric gradients extend edge-to-edge. Content within sections adheres to a comfortable max-width, centrally aligned. The hero features a large, centered headline from 'ProtonSerif' over a soft gradient background. Section rhythm is visually distinct but not harsh, often defined by subtle background color shifts between 'Canvas White' and 'Cloud Gray' or atmospheric gradients. Content often alternates between left-aligned text blocks and right-aligned product visuals or vice-versa, with clear vertical spacing provided by the 'sectionGap' of 64px. Minimalistic header navigation remains at the top, consistent across pages.

### Imagery

This system primarily uses product screenshots and abstract graphic elements. Product screenshots are typically tightly cropped within device frames, showcasing clean, focused interface details. Abstract graphics feature soft, organic shapes and translucent overlays in the brand's violet and gray palette, creating a sense of depth and atmosphere. Icons are filled, featuring moderate stroke weights and are either 'Iron Gray' or 'Action Violet'. Imagery functions decoratively to set a secure, professional mood or explain product features, often balancing text-heavy sections. Imagery density is moderate, integrated thoughtfully without dominating the page.

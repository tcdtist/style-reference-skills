---
version: alpha
name: Glow
description: Glow embraces a 'Solana future' aesthetic: clean, spacious interfaces with a vibrant gradient accent that hints at digital energy. The design uses a dominant neutral canvas to ground the playful purple-pink-orange color narrative, focusing attention on key actions and glowing interactive states. Typography is confident and impactful, balancing heavy headlines with readable body text, while generous spacing ensures content breathes and feels light.
colors:
  ghost-ink: "#131517"
  cloud-canvas: "#f4f5f6"
  snowdrift: "#ffffff"
  stone-gray: "#737577"
  soft-sterling: "#b3b5b7"
  carbon: "#333537"
  solana-grape: "#cc62d5"
  alert-red: "#e83b47"
  highlight-orange: "#ec660d"
  glow-gradient: "#a732d6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0.99px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.28
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.28
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: -0.43px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.72px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1px
spacing:
  cardRadius: 40px
  buttonRadius: 19px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-action-button:
    role: Filled button
  secondary-action-button:
    role: Filled button
  feature-card:
    role: Informational display
  badge-new:
    role: Status indicator
---

## Overview

**North Star:** Vibrant crypto gradient on clean canvas

Glow embraces a 'Solana future' aesthetic: clean, spacious interfaces with a vibrant gradient accent that hints at digital energy. The design uses a dominant neutral canvas to ground the playful purple-pink-orange color narrative, focusing attention on key actions and glowing interactive states. Typography is confident and impactful, balancing heavy headlines with readable body text, while generous spacing ensures content breathes and feels light.

### Do's

- Use `Solana Grape` (#cc62d5) exclusively for primary interactive elements, ensuring every click feels significant.
- Apply `Roobert` with a 700 weight and `Ghost Ink` (#131517) for all main headlines to convey clarity and impact.
- Maintain a clear hierarchy of surfaces: `Snowdrift` (#ffffff) for foreground, `Cloud Canvas` (#f4f5f6) for elevated backgrounds.
- Ensure generous `40px` vertical spacing between major sections for comfortable scanning and visual breathing room.
- Pad interactive elements like buttons and badges with at least `10px` vertical and `14px` horizontal padding, maintaining a `19px` border radius.
- Utilize the `Glow Gradient` for decorative brand elements only, never for functional UI components.

### Don'ts

- Avoid using `Highlight Orange` (#ec660d) or `Alert Red` (#e83b47) for general UI backgrounds; reserve them for specific semantic alerts or decorative accents.
- Do not introduce additional font families; `Roobert` is the sole brand typeface.
- Refrain from using strong shadows; the design relies on flat layers and subtle transitions, not deep elevation.
- Do not deviate from the established `40px` radius for cards and `19px` for buttons; consistency in shape defines component identity.
- Avoid dense information blocks; instead, use the `8px` `elementGap` and clear typography to create spacious layouts.

### Layout

The page primarily employs a max-width contained layout, though the hero section extends full-bleed across the screen with a light background and a left-aligned content block. Sections alternate between a prominent heading and explanatory text, often paired with product screenshots on the opposite side (text-left, image-right, then text-right, image-left). Vertical rhythm is established through consistent `40px` section gaps. Call-to-action buttons are clustered together. Feature showcases utilize card grids, while footer links are minimal and left-aligned. The overall density is comfortable, with ample white space around content blocks, creating an open and airy feel.

### Imagery

The site predominantly uses product screenshots of the Glow wallet interface, presented on stark white or lightly textured surfaces. These are cleanly cropped and isolated, focusing on the UI in action rather than lifestyle. Abstract 3D elements, often in 'Solana Grape' or similar gradient hues (#cc62d5 gradient), float around the screenshots, acting as decorative accents without obscuring the product. Iconography is simple, outlined, and uses the neutral palette with occasional brand color fills for emphasis. The visual language emphasizes product functionality and a modern, slightly playful tech aesthetic over hyper-realistic or human-centric photography.

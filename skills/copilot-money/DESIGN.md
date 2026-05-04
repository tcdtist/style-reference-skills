---
version: alpha
name: Copilot Money
description: Copilot Money employs a sophisticated dark-mode aesthetic with a spacious canvas, primarily leveraging shades of deep blue and near-black. Dynamic, multi-colored 'tag' elements float across the interface, adding vibrant, soft-glow accents against the dark backdrop. Typography balances a modern geometric sans with a lighter, custom variable font, creating a refined information hierarchy. Components are soft-edged, often featuring inset shadows and subtle transparency, giving a sense of depth without harshness.
colors:
  midnight-ink: "#000814"
  deep-space: "#010d1e"
  obsidian: "#11263b"
  mist-gray: "#ccced0"
  shadow-blue: "#29303a"
  deep-shadow: "#303741"
  muted-stone: "#7f8ba4"
  platinum-ghost: "#ffffff"
  teal-glow: "#00cc4b"
  crimson-beam: "#ff4433"
  cosmic-blue: "#426088"
  ocean-glimmer: "#597caa"
  iris-pop: "#1c6cff"
  sunbeam: "#fece4c"
  amethyst-flare: "#9019e6"
  slate-blue: "#5c6f8a"
  cherry-blossom: "#ff33aa"
  pumpkin-zest: "#f27f0c"
  golden-harvest: "#ff9900"
  lime-soda: "#59cc33"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
    letterSpacing: 0.22px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.3
    letterSpacing: -0.38px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.9
    letterSpacing: -1.28px
spacing:
  cardRadius: 24px
  buttonRadius: 16px
  elementGap: 16px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Call to action button for primary user flows.
  ghost-button:
    role: Secondary action or navigation link.
  floating-content-card:
    role: Displaying featured content or information blocks.
  vibrant-category-tag:
    role: Categorization of items, dynamically colored.
  navigation-link:
    role: Primary navigation elements in header or footer.
  message-banner:
    role: Alerts or promotional messages at the top of the page.
---

## Overview

**North Star:** Midnight ocean with glowing buoys

Copilot Money employs a sophisticated dark-mode aesthetic with a spacious canvas, primarily leveraging shades of deep blue and near-black. Dynamic, multi-colored 'tag' elements float across the interface, adding vibrant, soft-glow accents against the dark backdrop. Typography balances a modern geometric sans with a lighter, custom variable font, creating a refined information hierarchy. Components are soft-edged, often featuring inset shadows and subtle transparency, giving a sense of depth without harshness.

### Do's

- Prioritize Midnight Ink (#000814) or Deep Space (#010d1e) for all background canvases and card surfaces to maintain the dark theme.
- Use Platinum Ghost (#ffffff) for all primary body and headline text to ensure legibility and brand consistency.
- Apply Iris Pop (#1c6cff) exclusively for primary calls to action to create clear interaction points.
- Implement a 16px border-radius for all interactive elements like buttons and primary inputs.
- Use Matter Variable Thin with precise letter-spacing adjustments for headlines to achieve a light, modern typographic presence.
- Incorporate vibrant accent colors like Teal Glow (#00cc4b) or Crimson Beam (#ff4433) for category tags and small decorative elements, ensuring they stand out against the dark background.
- Employ inset shadows (like rgba(255, 255, 255, 0.16) inset) on vibrant tags and cards to give elements a subtle, glowing depth.
- Maintain an element gap of 16px (4 units) and card padding of 16px for consistent visual rhythm and content separation.

### Don'ts

- Avoid using light backgrounds for primary content areas; maintain the dark theme's integrity.
- Do not introduce new saturated primary colors; limit vibrant accents to the established palette of Teal Glow, Crimson Beam, Iris Pop, etc.
- Do not use sharp 0px corners on any card-like or interactive UI elements; maintain soft radii (16px, 20px, 24px, 40px).
- Avoid heavy drop shadows; prefer the subtle, inset shadow styles or minimal elevation visible in the system.
- Do not use generic system fonts in place of Matter Variable Thin or Jokker; preserve the distinctive brand typography.
- Do not create dense, text-heavy blocks without sufficient padding or line height; ensure ample white space for readability within the dark context.

### Layout

The page primarily uses a full-bleed structure for its dark background, combined with a contained maximum width for core content, which appears centered. The hero section features a large, centered headline overlaid with dynamically arranged, glowing 'tag' elements, creating an immediate sense of activity and organization. Sections are separated by consistent vertical spacing, and there's a pattern of presenting information in centered stacks or simple text-aligned-left compositions with a strong visual element on the right (though not strongly represented in the provided screenshots, suggested by the 'money organized' layout). The navigation is a sticky top bar, minimal and un-intrusive, designed to blend into the overall dark theme, with a primary call to action in the top right. Content density is generally spacious, allowing elements to breathe on the dark canvas.

### Imagery

The visual language focuses on abstract, illustrative 'tag' elements rendered with soft glows and a shallow depth of field, positioned against a dark, minimalist UI. These tags are color-varied, featuring clear and vivid hues like #00cc4b, #ff4433, #9019e6, and #fece4c. Icons are outlines, rendered in white against the dark background, maintaining a clean and functional appearance. Photography is notably absent, with the visual emphasis placed entirely on UI elements and stylized graphic accents. The density of these visuals is moderate, allowing them to serve as engaging focal points without overwhelming the sparse textual information. There are product screenshots of UI embedded in devices that are presented flat, consistent with the minimal aesthetic. These serve to showcase product functionality in context.

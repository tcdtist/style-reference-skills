---
version: alpha
name: DICE
description: DICE uses a bold, monochrome aesthetic with a stark black-and-white foundation that provides a high-contrast canvas. Typography is assertive, carrying much of the brand's voice, while subtle hints of energetic accent colors occasionally punctuate the otherwise achromatic interface. Component surfaces are flat and minimal, often relying on high contrast and distinct shapes rather than shadows for visual separation, embodying a robust, no-nonsense utility.
colors:
  pitch-black: "#000000"
  arctic-white: "#ffffff"
  ash-gray: "#d9d9d9"
  cloud-white: "#eeeeee"
  medium-gray: "#808080"
  dark-gray: "#595959"
  charcoal: "#333333"
  electric-blue: "#0000FE"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.25
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.25
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
spacing:
  cardRadius: 4px
  buttonRadius: 40px
  elementGap: 8px
  sectionGap: 24px
components:
  primary-action-button:
    role: Main call-to-action
  secondary-ghost-button:
    role: Alternative actions or less prominent calls
  searchbar-input:
    role: Global site search and filtering
  event-card:
    role: Displaying event listings
  app-download-button:
    role: Link to app stores
  pill-navigation-item:
    role: Navigation links within headers or footers
---

## Overview

**North Star:** High-contrast monochrome canvas

DICE uses a bold, monochrome aesthetic with a stark black-and-white foundation that provides a high-contrast canvas. Typography is assertive, carrying much of the brand's voice, while subtle hints of energetic accent colors occasionally punctuate the otherwise achromatic interface. Component surfaces are flat and minimal, often relying on high contrast and distinct shapes rather than shadows for visual separation, embodying a robust, no-nonsense utility.

### Do's

- Prioritize high contrast between primary foreground (Pitch Black) and background (Arctic White).
- Use Foggy exclusively for large, impactful headlines (106px at 0.83 line height) to maintain its declarative visual weight.
- Apply Favorit at 0.0600em letter-spacing universally for body, navigation, and interactive text to maintain the characteristic density.
- Utilize 40px border-radius for all primary action buttons, ensuring a consistent pill-shaped interaction target.
- Employ the 8px base unit for consistent element spacing where individual elements require small buffers.
- Introduce accent colors (Neon Green, Electric Blue) sparingly, reserving them for functional states, icons, or crucial brand highlights.
- Keep card and section backgrounds flat and monochrome (Arctic White or Ash Gray) to support the content without distraction.

### Don'ts

- Avoid using Foggy for body copy or small text — its legibility is optimized for large display sizes.
- Do not introduce soft shadows or gradients for primary surface elevation; rely on high-contrast color shifts and borders.
- Refrain from using strong chromatic colors for backgrounds or large UI areas; maintain the black-and-white dominance.
- Do not deviate from the specified Favorit font feature settings ("ss02", "ss03", "ss05", "ss06", "ss08") as they are integral to the brand's typographic identity.
- Avoid arbitrary padding or margin values; adhere to the 4px base unit and derived spacing tokens like 8px for element gaps and 24px for section gaps.
- Do not use multiple, distinct border-radius values on elements of the same type; buttons should consistently be 40px radius, cards 4px, etc.

### Layout

The page structure is primarily max-width contained for content sections, but utilizes full-bleed hero and footer sections that extend edge-to-edge. The hero section often presents a split layout: a dominant, oversized headline and supporting text on one side, paired with a large product visual (e.g., a phone UI) on the other. Content sections typically flow with consistent vertical spacing (24px section gaps), often displaying card grids (e.g., event listings with 3-5 columns) or feature lists. Navigation is a sticky top bar with clear text links and a prominent Primary Action Button.

### Imagery

The visual language predominantly features high-contrast product screenshots (like the phone UI) with clean, sharp edges, often against solid Pitch Black or Arctic White backgrounds. Illustrations are minimalistic and abstract, using thick outlines and primarily black-and-white palettes, occasionally highlighted with a single vivid accent color like Neon Green. Icons are solid, bold, and monoline, conveying clarity and directness. Imagery serves to showcase product functionality or add a distinctive brand personality through abstract, almost 'sticker-like' graphic elements. It's an image-rich but text-dominant system, where images provide visual breaks and emphasis without overwhelming the content.

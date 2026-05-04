---
version: alpha
name: TeePublic
description: TeePublic utilizes a dynamic, high-contrast aesthetic with a playful edge. Dark primary text and bold accent colors define a vibrant mood, set against a predominantly white and subtle gray surface palette. Components feature soft, large radii and distinct shadow treatments, ensuring readability while maintaining a confident, attention-grabbing presence.
colors:
  midnight-ink: "#151523"
  canvas-white: "#ffffff"
  ghost-gray: "#e9e9ec"
  border-silver: "#d7d7db"
  cloud-whisper: "#f1f3fe"
  royal-indigo: "#4e64df"
  crimson-strike: "#ff0000"
  lavender-mist: "#99a7f5"
  electric-violet: "#6c7ee4"
  faded-steel: "#49495a"
  vivid-chroma-gradient: "#25d454"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.15
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 24px
components:
  ghost-button:
    role: Secondary actions or navigation links that need less emphasis. They appear as text with a transparent background.
  neutral-outlined-button:
    role: Tertiary actions or category filters, providing interaction without competing with primary calls to action.
  primary-filled-button:
    role: Main calls to action.
  crimson-call-to-action-button:
    role: High-urgency primary actions, distinct from the brand's standard primary color.
  elevated-feature-card:
    role: Highlighting key features or content, using elevation to draw attention.
  grouped-content-card:
    role: Organizing related content into visually distinct blocks on the page, with subtle elevation.
  subtle-information-card:
    role: Presenting supplementary information or less prominent content, without strong visual weighting.
  search-input-field:
    role: Primary user input for search functions.
  outline-input-field:
    role: General form inputs, blending subtly into the background.
  standard-input-field:
    role: Basic input fields across the application.
---

## Overview

**North Star:** Vibrant Pop Canvas: Bold and graphic against bright white.

TeePublic utilizes a dynamic, high-contrast aesthetic with a playful edge. Dark primary text and bold accent colors define a vibrant mood, set against a predominantly white and subtle gray surface palette. Components feature soft, large radii and distinct shadow treatments, ensuring readability while maintaining a confident, attention-grabbing presence.

### Do's

- Use Royal Indigo (#4e64df) for all primary interactive elements like buttons and prominent links.
- Apply Canvas White (#ffffff) as the default background for content sections and primary cards.
- Employ Midnight Ink (#151523) for all primary headings and body text to ensure high contrast and readability.
- Maintain a compact density with an elementGap of 8px between closely related UI components.
- Utilize a 12px border-radius for most interactive elements and general cards to maintain a consistent soft aesthetic.
- Use Sharp Grotesk for large headings (20px and above) to introduce distinct brand personality.
- Apply subtle shadow rgba(21, 21, 35, 0.2) 0px 2px 4px 0px for elevated cards to create clear visual separation.

### Don'ts

- Avoid using multiple chromatic colors for primary actions on a single screen; reserve Crimson Strike (#ff0000) for highest urgency only.
- Do not use dark backgrounds for large content areas; the system relies on a light canvas for readability.
- Do not deviate from the established padding and radius values for buttons and cards; consistency in these areas is key.
- Avoid using decorative gradients for non-brand essential elements; they are reserved for specific brand communication.
- Do not introduce new font families; the current selection provides sufficient typographic range.
- Do not reduce border-radius below 12px for standard components; the rounded aesthetic is a core identifier.
- Avoid making text too light against white backgrounds; ensure sufficient contrast with Midnight Ink (#151523) or Faded Steel (#49495a).

### Layout

The page primarily uses a max-width contained layout of 1440px, with content centered. The hero section often features full-bleed imagery or gradient backgrounds with centered text overlays. Vertical rhythm is established through consistent section gaps and alternating content arrangements, including two-column text-left/image-right patterns and three-column card grids for features. Navigation is a sticky top bar with prominent brand links and actions.

### Imagery

The visual language predominantly features high-quality, product-focused photography and lifestyle imagery on white or subtly colored backgrounds. These are often contained within rounded card shapes or as full-bleed hero elements. Illustrations are flat, colorful, and organic, used for decorative atmosphere and branding, often featuring a vibrant gradient. Icons are primarily outlined or filled versions of Electric Violet (#6c7ee4), maintaining a crisp, light stroke. Imagery density is moderate, with images used to break up text and showcase products or features.

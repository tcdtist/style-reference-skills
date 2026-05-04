---
version: alpha
name: Getharvest
description: Harvest projects a dependable, organized workspace aesthetic, blending understated neutrals with a single vibrant orange accent. The primary visual tension arises from the interplay of a clean, spacious layout and rich, textured data visualizations. Surfaces are primarily crisp white, occasionally warmed by a subtle cream, with a focus on soft, rounded corners rather than hard edges. Typography is approachable yet confident, often using a slightly wider letter-spacing for an open feel, contrasting with compact, data-rich interfaces.
colors:
  amber-glow: "#fa5d00"
  harvest-cream: "#fff8f1"
  deep-graphite: "#1d1e1c"
  canvas-white: "#ffffff"
  soft-fog: "#c0bbb6"
  pale-sand: "#e3d6c5"
  muted-stone: "#8e8b87"
  link-gray: "#615f5c"
  light-steel: "#d9d9d9"
  golden-wash: "#fee3b5"
  mid-slate: "#777571"
  dark-slate: "#4a4a47"
  subtle-gray: "#a5a19c"
  text-gray: "#999999"
  shadow-tint: "#ccc6c1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.26
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.2
spacing:
  cardRadius: 20px
  buttonRadius: 16px
  elementGap: 10px
  sectionGap: 30px
components:
  primary-action-button:
    role: Call-to-action button
  standard-content-card:
    role: Informational content container
  elevated-content-card:
    role: Prominent content container
  text-input-field:
    role: User data input
---

## Overview

**North Star:** Warm, organized workspace: like an inviting desk with neatly arranged tools and a single, bright sticky note.

Harvest projects a dependable, organized workspace aesthetic, blending understated neutrals with a single vibrant orange accent. The primary visual tension arises from the interplay of a clean, spacious layout and rich, textured data visualizations. Surfaces are primarily crisp white, occasionally warmed by a subtle cream, with a focus on soft, rounded corners rather than hard edges. Typography is approachable yet confident, often using a slightly wider letter-spacing for an open feel, contrasting with compact, data-rich interfaces.

### Do's

- Prioritize Canvas White (#ffffff) or Harvest Cream (#fff8f1) for all background surfaces to maintain a light and airy feel.
- Use Amber Glow (#fa5d00) exclusively for primary interactive elements and brand accents; avoid scattering it decoratively.
- Apply Deep Graphite (#1d1e1c) for all primary text and headings to ensure strong contrast and readability.
- Maintain a 16px border-radius for buttons and inputs, and a softer 20px for content cards to unify the rounded aesthetic.
- Employ MuotoWeb as the default font across the UI, leveraging its 0.0150em letter spacing for an open typographic presence.
- Utilize 10px as the default elementGap horizontally and vertically between related UI elements for comfortable spacing.
- Ensure all interactive components have a moderate transition duration of 0.2s with an ease timing function for smooth feedback.

### Don'ts

- Do not introduce new saturated colors; the palette relies on Amber Glow (#fa5d00) as the sole chromatic accent.
- Avoid hard-edged components; all card, button, and input elements should adhere to the established border-radius values.
- Do not use heavy, dark shadows; elevation should be subtle, leveraging the Golden Wash (#fee3b5) or rgba(0, 0, 0, 0.2) tints.
- Refrain from tight, condensed typography; prioritize the slightly expanded letter spacing of MuotoWeb for all body and UI text.
- Do not use gradients on backgrounds or interactive elements; the visual system is primarily flat with subtle surface changes.
- Avoid dense, information-packed sections without generous internal padding or a Clearfix button text in Amber Glow.
- Do not use dark backgrounds for main content areas; maintain the light theme with Canvas White and Harvest Cream as primary surfaces.

### Layout

The page uses a maximum content width centered layout, rather than full-bleed, creating a contained and organized feel. The hero section often features a large, centered headline (Monarch font) over a subtle, abstract background using light, warm washes, with a call to action immediately below. Sections alternate between Canvas White and Harvest Cream backgrounds, creating a gentle visual rhythm. Content within sections favors centered stacks or two-column layouts (text alongside illustrations or cards). Feature sections often arrange content in three-column card grids. The overall density is comfortable, with generous vertical spacing between sections (around 30px). Navigation is a sticky top bar.

### Imagery

The site uses a mix of stylized product screenshots and abstract graphic elements. Product screenshots are typically rendered on white or a very light pastel background, focusing on clean UI and data visualization. Abstract graphics are subtle, organic, and often take the form of watercolor-like washes in warm, muted tones (like those suggesting Golden Wash #fee3b5 or Pale Sand #e3d6c5). Icons are primarily mono-color, Deep Graphite outlines or fills, used functionally to illustrate features. Imagery serves an explanatory and atmospheric role, rather than decorative, and never breaks out of contained, rounded forms.

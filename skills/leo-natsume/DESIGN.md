---
version: alpha
name: Leo Natsume
description: The Leo Natsume design system employs a stark, almost monochromatic foundation, punctuated by a single vibrant red accent. Its visual identity relies on precise typography and the interplay of negative space to convey a high-end, minimalist aesthetic. The overall impression is one of restrained confidence, where visual information is carefully curated and presented without clutter. Components are lightweight, often outlined, and subtle surface variations define areas without heavy shadows.
colors:
  canvas-white: "#fafafa"
  surface-cool: "#eeeeea"
  ink-black: "#000000"
  deep-graphite: "#1c1d20"
  medium-gray: "#323232"
  muted-silver: "#8b8b8b"
  light-concrete: "#c7c7c7"
  active-red: "#f41111"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.05
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.05
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1.4
spacing:
  elementGap: 6px
  sectionGap: 43px
components:
  ghost-navigation-link:
    role: Primary navigation item and general interactive text link.
  primary-branded-heading:
    role: Large, eye-catching title for key sections.
  horizontal-divider:
    role: Visual separation for sections or content blocks.
  work-showcase-card:
    role: Container for showcasing project images.
  minimalist-feature-text:
    role: Descriptive text for featured sections.
  small-label-text:
    role: Contextual labels or meta-information.
  outlined-input-field:
    role: Standard text input field.
---

## Overview

**North Star:** Gallery Wall Precision

The Leo Natsume design system employs a stark, almost monochromatic foundation, punctuated by a single vibrant red accent. Its visual identity relies on precise typography and the interplay of negative space to convey a high-end, minimalist aesthetic. The overall impression is one of restrained confidence, where visual information is carefully curated and presented without clutter. Components are lightweight, often outlined, and subtle surface variations define areas without heavy shadows.

### Do's

- Use `Canvas White (#fafafa)` as the dominant background for all pages and most surfaces.
- Emphasize content and hierarchy through `Ink Black (#000000)` for primary text and `Deep Graphite (#1c1d20)` for headings.
- Reserve `Active Red (#f41111)` strictly for brand accents, current state indicators, or impactful focal points, using it sparingly to maximize its effect.
- Implement horizontal dividers as `1px` lines in `Ink Black (#000000)` for clear visual separation.
- Employ a generous `43px` vertical `sectionGap` to maintain a spacious and uncluttered layout between major content blocks.
- Structure interactive elements like navigation items and input fields with thin `1px` borders, using `Light Concrete (#c7c7c7)` or `Ink Black (#000000)` depending on prominence.
- Apply `20px` `border-radius` to the top corners of `Work Showcase Card` elements to create a subtle architectural detail.

### Don'ts

- Avoid using drop shadows or heavy elevation styles; rely on color and subtle borders to define surface levels.
- Do not introduce additional vibrant colors beyond `Active Red (#f41111)` to maintain the high-contrast, minimalist palette.
- Refrain from using solid background colors for buttons unless it is a specific, single accent call to action.
- Do not deviate from the specified typeface families; `wfont_b4f017_e9045633d52f4a2fa031ee07f7d9033d` and `wfont_b4f017_1511f1af80db4e64b4e84b3f76de255c` are central to the brand's typographic identity.
- Do not overcrowd sections with dense information; maintain a comfortable `elementGap` of `6px` and focus on singular messages.
- Avoid decorative gradients; surfaces should remain flat and monochromatic.
- Do not use highly textured backgrounds; embrace clean, smooth surfaces characteristic of `Canvas White` and `Surface Cool`.

### Layout

The page primarily uses a full-bleed layout, particularly in the hero section, which features a large, striking visual with centered text. Content sections below often operate within a contained maximum width, centered on the screen. The section rhythm is quite open, defined by a generous `43px` vertical spacing between major blocks and often separated by `1px` `Ink Black` horizontal dividers. Content arrangements alternate between centered single-column text blocks and implicit two-column structures where an image is paired with text. Grid usage is visible in the form of work showcases. The overall density is spacious and clean, prioritizing breathing room. Primary navigation is a simple top bar, with ghost links to pages.

### Imagery

The visual language for imagery is characterized by high-fidelity 3D renders or tightly cropped product screenshots, typically presented against a neutral or white background. Photography appears to be minimal or entirely absent in product showcases. Illustrations are dimensional and often highly customized, featuring organic shapes and vibrant, multi-colored accents (e.g., the coiled lines in the hero section). Icons are minimal, outlined, and monochromatic, used for navigation or social links. Imagery generally holds significant visual weight, often serving as hero elements or key content dividers, and is well-contained within defined areas, not bleeding into the UI. The density of images is moderate; they are used strategically to showcase work rather than as constant decorative elements.

### Elevation

This design system explicitly avoids complex shadows. Elevation is primarily conveyed through subtle background color shifts (`Canvas White` to `Surface Cool`) and precise `1px` borders, maintaining a flat and clean aesthetic.

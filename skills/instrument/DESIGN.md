---
version: alpha
name: Instrument
description: Instrument's visual system evokes a stark, high-contrast, minimalist agency aesthetic. Dominated by a monochrome palette of deep nearly-black gray and pure white, it leverages strong typography as its primary visual identity. Typography is both commanding and refined, with distinctive custom typefaces varying dramatically in size and tracking. Components are lightweight and functional, often using ghosting or subtle background tints against large, open white canvases, emphasizing content and a clean, editorial layout.
colors:
  midnight-ink: "#070708"
  white-canvas: "#ffffff"
  midtone-gray: "#808080"
  faded-ink: "#0707081f"
  translucent-white: "#ffffff80"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: 0.44px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.33
    letterSpacing: 0.056px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.22
    letterSpacing: -0.09px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.26
    letterSpacing: -0.23px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.14
    letterSpacing: -0.28px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.11
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.13
    letterSpacing: -1.28px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 352px
    lineHeight: 0.85
    letterSpacing: -17.6px
spacing:
  cardRadius: 24px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 24px
components:
  pill-ghost-button:
    role: Primary navigation and filter controls.
  outline-text-button:
    role: Secondary actions and category filters.
  soft-rectangular-button:
    role: Filter controls on darker backgrounds or for a slightly more defined appearance.
  filled-square-button:
    role: Interactive elements requiring strong visual presence on white backgrounds.
  transparent-card:
    role: Content presentation where the background provides context.
  rounded-card:
    role: Visual highlights for individual content blocks.
  input-field:
    role: Data entry forms.
  transparent-badge:
    role: Minimalist labels and tags.
  pill-badge:
    role: Category tags and filters.
---

## Overview

**North Star:** High-contrast typographic canvas

Instrument's visual system evokes a stark, high-contrast, minimalist agency aesthetic. Dominated by a monochrome palette of deep nearly-black gray and pure white, it leverages strong typography as its primary visual identity. Typography is both commanding and refined, with distinctive custom typefaces varying dramatically in size and tracking. Components are lightweight and functional, often using ghosting or subtle background tints against large, open white canvases, emphasizing content and a clean, editorial layout.

### Do's

- Prioritize `Midnight Ink` text (`#070708`) on `White Canvas` (`#ffffff`) for readability and high contrast.
- Use `Instrument-Sans` for all body text, navigation, and button labels, adjusting sizes and letter-spacing for impact.
- Apply `999px` border-radius to all buttons and badges for a consistent pill-like shape.
- Break up page content with distinct blocks of `Midnight Ink` background for dramatic negative space and visual hierarchy.
- Employ `24px` for internal card padding and image corner rounding to maintain soft block definition.
- Utilize the `Instrument-Serif` typeface sparingly for large, editorial headlines to introduce a layer of sophisticated tension.
- Maintain a compact spacing density, generally utilizing multiples of `4px` with an `8px` base unit for element gaps.

### Don'ts

- Avoid generic border radii; stick to `0px`, `8px`, `24px`, `32px`, or `999px` as defined.
- Do not introduce strong accent colors; the palette is strictly monochrome with subtle translucent effects.
- Refrain from using shadows or heavy elevation styles; surfaces should remain flat or use minimal transparency.
- Do not deviate from the specified typefaces and their distinct letter-spacing values to preserve the brand's typographic identity.
- Avoid excessive padding or large gaps between elements; maintain a compact, information-dense layout where appropriate.
- Do not use generic system fonts; `Instrument-Sans` and `Instrument-Serif` are central to the brand.
- Do not dilute the high-contrast ethos with mid-tone backgrounds or multiple shades of gray for primary content areas.

### Layout

The page primarily uses a full-bleed layout, allowing sections to stretch edge-to-edge. Content within these sections often appears to be contained within an implicit maximum width, centrally aligned. The hero section features large, centered typography over a full-bleed black background. Section rhythm alternates between large, open white canvas areas and immersive, full-bleed black blocks. Content is arranged in alternating text-and-image two-column layouts, often with the text on the left and visual on the right, or in multi-column card grids for portfolio and articles. Navigation is a minimalist top bar, with sticky header behavior. Vertical spacing between sections is consistent, typically using `24px` as a base unit for vertical rhythm.

### Imagery

This system primarily uses product screenshots and abstract graphic artwork in a contained, card-like format. Photography is largely absent, focusing instead on digital renders and stylized brand visuals. Imagery is either contained within clean, rounded or sharp-edged card structures, or used as full-bleed background for hero sections. Icons are minimal, featuring outlined, mono-color designs that align with the stark aesthetic. The visual density is image-heavy in portfolio grids, alternating with text-dominant editorial blocks, where images serve as key content indicators rather than decorative elements.

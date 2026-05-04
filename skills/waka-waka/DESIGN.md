---
version: alpha
name: Waka Waka
description: Waka Waka employs a stark, editorial aesthetic, reminiscent of print. Its visual system centers on high-contrast typography against an off-white canvas, conveying information with an almost journalistic directness. The layout is disciplined and grid-bound, using generous negative space around bold type and product photography to lend an artifact-like quality to content. Color is minimal, primarily serving as a background for the content block, with deep charcoal black for all text and UI elements.
colors:
  canvas-parchment: "#edeae4"
  ink-jot: "#28282a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1
  body-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 560px
    lineHeight: 1
spacing:
  elementGap: 6-20px
  sectionGap: 40-54px
components:
  page-canvas:
    role: The primary content container
  hero-headline:
    role: Prominent display text
  navigation-link:
    role: Site navigation
  body-text:
    role: :Standard paragraph and descriptive text
  functional-details:
    role: Metadata, timestamps, and smaller labels
---

## Overview

**North Star:** Gallery Wall Catalog: off-white canvas, stark black typography, and carefully placed product visuals.

Waka Waka employs a stark, editorial aesthetic, reminiscent of print. Its visual system centers on high-contrast typography against an off-white canvas, conveying information with an almost journalistic directness. The layout is disciplined and grid-bound, using generous negative space around bold type and product photography to lend an artifact-like quality to content. Color is minimal, primarily serving as a background for the content block, with deep charcoal black for all text and UI elements.

### Do's

- Prioritize 'Canvas Parchment' (#edeae4) as the main background for content areas, providing a neutral, gallery-like surface.
- Use 'Ink Jot' (#28282a) for all text and UI elements to maintain high contrast and a consistent monochrome palette.
- Employ Waka Sans at 560px with weight 700 and -0.09em letter-spacing for all prominent display headlines, creating a poster-like visual impact.
- Maintain a clear page max-width of 445px for primary content blocks to create a focused, contained reading experience.
- Utilize Waka Sans at 14px, weight 400, and lineHeight 1.6 for body text, ensuring legibility within the compact layout.
- Intersperse content with liberal white space; `elementGap` should range from 6px to 20px, and `sectionGap` between 40px and 54px.
- Maintain a strict '0px' border-radius across all elements to reinforce the sharp, editorial aesthetic.

### Don'ts

- Avoid using any saturated colors beyond the strict 'Ink Jot' and 'Canvas Parchment' palette.
- Do not introduce shadows or complex gradients; the design relies on flat surfaces and stark contrast.
- Refrain from varying font families; Waka Sans is the exclusive typeface for the entire system.
- Do not break the page max-width containment; all primary content should adhere to the 445px constraint.
- Avoid decorative graphical elements; imagery should be product-focused and photography-based.
- Do not implement any border-radius greater than 0px; all corners must remain sharp.
- Do not use subtle neutrals to hint at hierarchy; rely on type size, weight, and spacing for visual differentiation.

### Layout

The page model is centered and constrained to a maximum width of 445px, creating a narrow, column-like presentation reminiscent of a printed page. The hero pattern features a monumental, centered headline 'Waka' spanning the width. Content arrangement alternates between large, impactful type elements and product photographs, often in a two-column or stacked composition within the narrow canvas. Vertical rhythm is established by distinct gaps between sections and elements, relying on negative space rather than explicit dividers. Navigation is minimal, consisting of text links in a fixed header and footer.

### Imagery

Imagery consists exclusively of product photography, primarily showcasing furniture. The treatment is stark and isolated: tightly cropped subjects against neutral, often studio-like backgrounds, with a focus on form and material. Photos are contained within layout blocks, maintaining sharp, unmasked edges. There are no lifestyle shots, illustrations, or iconography beyond simple text-based interactives; the objects themselves convey the aesthetic and brand. Images are high-contrast and often monochromatic, mirroring the color palette.

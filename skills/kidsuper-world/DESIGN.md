---
version: alpha
name: KidSuper World
description: This design system is a raw, unpolished canvas, evoking a digital sketchbook or an artist's personal journal. The dominant white background with faint, hand-drawn lines gives the impression of a work in progress, while the splash of watercolor-like imagery introduces an organic, illustrative brand core. Typography, primarily a monospaced font, grounds the ethereal visuals with a utilitarian, almost code-like precision, creating a tension between artistic freedom and structured communication.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
typography:
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.3
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
spacing:
  elementGap: 16px
  sectionGap: 40px
components:
  top-navigation-bar:
    role: 
  ghost-button-group:
    role: 
  footer-bar:
    role: 
  ghost-button:
    role: Interactive Element
---

## Overview

**North Star:** Digital Sketchbook on Canvas – a raw, hand-drawn aesthetic dominates the visual experience.

This design system is a raw, unpolished canvas, evoking a digital sketchbook or an artist's personal journal. The dominant white background with faint, hand-drawn lines gives the impression of a work in progress, while the splash of watercolor-like imagery introduces an organic, illustrative brand core. Typography, primarily a monospaced font, grounds the ethereal visuals with a utilitarian, almost code-like precision, creating a tension between artistic freedom and structured communication.

### Do's

- Maintain a canvas-like background using Canvas White (#ffffff) as the primary page background.
- Utilize Ink Black (#000000) for all text elements to ensure high contrast and a consistent graphic tone.
- Apply 'Abc Diatype Mono' typeface for all general text, navigation, and interactive labels to maintain a raw, utilitarian aesthetic.
- Reserve 'Neue Haas Grotesk Display' weight 800 at 60px for prominent headlines to create striking visual focal points.
- Implement consistent internal padding of 1px vertical and 6px horizontal for interactive buttons.
- Use a 1px Ink Black border for interactive ghost buttons with 0px border-radius, maintaining sharp edges and a minimalist interactive style.

### Don'ts

- Avoid using any colored backgrounds; the Canvas White (#ffffff) is fundamental to the brand's aesthetic.
- Do not introduce rounded corners or border-radius values other than 0px; sharp angles are consistent with the graphic style.
- Refrain from using shadows or elevation effects; the design relies on flat, illustrative layering.
- Do not introduce additional font families or weights beyond those specified; typography is highly constrained for character.
- Avoid decorative elements that deviate from the hand-drawn, illustrative quality; maintain the digital sketchbook visual metaphor.
- Do not vary from the minimal border-only style for buttons; filled or heavily styled buttons would disrupt the subtle interactivity.

### Layout

The page uses a maximum width containment (64px from the left, derived from the visible text block) for its primary content areas, within a full-bleed Canvas White background. The hero section features a prominent, centered illustration against this white canvas. Section rhythm is subtle, mainly driven by textual content blocks rather than strong visual dividers. Content is arranged in a minimalist, stacked fashion, often centered or left-aligned within narrow columns. Navigation is a simple, sparse top bar, complemented by a similar footer bar, minimal and unadorned. The layout prioritizes breathing room, making the overall density spacious.

### Imagery

The site employs a distinctive hand-drawn, watercolor-like illustrative style for its main visual content, featuring buildings with a vibrant, almost painterly quality against a stark white background with faint outlines of cityscapes. Imagery is central to the visual identity but appears in a contained, stylized section, not full-bleed. Its role is decorative atmosphere and brand identity, showcasing artistic expression rather than product features. The density is relatively low, focusing on one primary illustration rather than multiple images, making the text-to-image ratio lean towards text dominance.

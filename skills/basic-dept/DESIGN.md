---
version: alpha
name: BASIC/DEPT®
description: This design system projects a refined, minimalist aesthetic through a stark monochrome palette punctuated by a single, muted accent. Predominantly light backgrounds with subtle texture create an expansive, almost gallery-like feel. Typography is paramount, delivered in a custom-designed, highly legible sans-serif with precise letter-spacing adjustments, fostering a sense of sharp, intellectual precision. The restrained use of an "azalea" pink shade for subtle interactive cues or emotive accents prevents the system from feeling cold, adding an unexpected, almost artistic touch amidst the otherwise severe structure.
colors:
  storm-graphite: "#252422"
  canvas-white: "#ffffff"
  cloud-whisper: "#f4f4f4"
  subtle-ash: "#5e5e5"
  azalea-frost: "#f9cdcd"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: -0.12px
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.1
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1
    letterSpacing: -0.77px
spacing:
  buttonRadius: 50%
  elementGap: 10-38px
  sectionGap: 150px
components:
  watch-reel-cta-button:
    role: 
  awards-recognition-strip:
    role: 
  work-showcase-cards:
    role: 
  circular-call-to-action-cta-button:
    role: Primary interactive element on hero sections for media playback or key actions.
  ghost-navigation-button:
    role: Tertiary interactive elements for navigation or less critical actions.
  accent-badge-azalea-frost:
    role: Visual indicator or tag, often highlighting status or category.
  work-showcase-card:
    role: Presentation of portfolio items, typically featuring an image and brief text.
  inverse-ghost-button:
    role: Call to action button for secondary actions on light backgrounds.
---

## Overview

**North Star:** Gallery Grid and Whisper

This design system projects a refined, minimalist aesthetic through a stark monochrome palette punctuated by a single, muted accent. Predominantly light backgrounds with subtle texture create an expansive, almost gallery-like feel. Typography is paramount, delivered in a custom-designed, highly legible sans-serif with precise letter-spacing adjustments, fostering a sense of sharp, intellectual precision. The restrained use of an "azalea" pink shade for subtle interactive cues or emotive accents prevents the system from feeling cold, adding an unexpected, almost artistic touch amidst the otherwise severe structure.

### Do's

- Prioritize SctoGroteskA for all typography, leveraging its weight and letter-spacing variations for hierarchy.
- Maintain a monochromatic base with Storm Graphite (#252422) for primary text and elements, and Canvas White (#ffffff) or Cloud Whisper (#f4f4f4) for backgrounds and inverse elements.
- Use Azalea Frost (#f9cdcd) explicitly for interactive states, badges, or subtle, emotionally resonant accents.
- Employ `0px` border-radius almost universally, reserving `50%` radius only for prominent circular interactive elements.
- Ensure generous `sectionGap` of 150px to create ample negative space and a sense of calm visual rhythm.
- Utilize a precise typographic scale where letter-spacing is systematically decreased for larger font sizes: e.g., 22px text uses -0.0350em letter-spacing.
- Implement the `Cloud Whisper` (#f4f4f4) neutral background for primary page content, providing a soft, subtle backdrop.

### Don'ts

- Avoid introducing additional chromatic colors; the Azalea Frost (#f9cdcd) is the sole accent.
- Do not use box-shadows or other elevation techniques; all depth is implied through color contrast and compositional layering.
- Refrain from using heavily saturated images; prefer desaturated or monochrome photography that blends with the system's muted palette.
- Do not deviate from the single typeface SctoGroteskA; typographic diversity comes from size and weight.
- Avoid excessive padding on ghost buttons; they should appear as underlined text links unless styled with a border for emphasis.
- Do not introduce rounded corners (e.g. 4px, 8px) on cards, containers, or general elements; maintain sharp, angular forms.
- Never use pure black (#000000) for body text on light backgrounds; always opt for Storm Graphite (#252422) for softer contrast.

### Layout

The page structure favors a max-width, centered container for most content, providing a clear visual boundary against the expansive Cloud Whisper background. The hero section is characterized by a central, iconic interactive element (the 'WATCH REEL' button) on a softly textured, light background. Sections are distinctly separated by generous vertical `sectionGap` of 150px, establishing a spacious rhythmic flow rather than continuous scrolling. Content blocks often employ a two-column layout, typically alternating text and image, creating dynamic, asymmetrical compositions. There are prevalent usage of card grids for showcasing work, although the exact column count and card padding are fluid based on content, but maintaining the underlying grid structure. Navigation is a minimalist top bar, likely sticky, with ghost links or text-only buttons that are visually subtle to avoid distracting from the main content. The overall impression is one of intentional, unhurried presentation.

### Imagery

The visual language for imagery is specific and curated. Photography features tight product crops or evocative, desaturated lifestyle shots, often with a raw, candid feel rather than overly staged perfection. Images are typically full-bleed within their containers, maintaining sharp, unrounded edges to align with the overall angular aesthetic. Product screenshots are clean and precise. Illustrations, when present, are likely minimal, line-based, or geometric, adhering to the limited brand palette. The role of imagery is primarily to showcase work and evoke emotion, rather than just decorate. There's a deliberate choice for image density to be balanced, allowing visuals space to breathe without overwhelming text content.

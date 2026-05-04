---
version: alpha
name: Norgram
description: Norgram operates with a stark, high-contrast aesthetic, juxtaposing deep black and pristine white with minimal interruption. The system leans on precise typography and a grid-based rhythm, creating a sense of quiet authority rather than overt design flourishes. Color is used sparingly, primarily for functional accents, ensuring that content and structure remain the focal point. Components emphasize lightweight clarity: flat surfaces, crisp text, and subtle interactions.
colors:
  obsidian: "#000000"
  canvas-white: "#ffffff"
  deep-graphite: "#141414"
  powder-gray: "#efefef"
  ash-mist: "#777777"
  soft-stone: "#cecece"
  whisper-gray: "#b2b2b2"
  smoked-glass: "#3f3f3f"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.17
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.17
  body:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.17
  body-lg:
    fontFamily: "system-ui"
    fontSize: 87px
    lineHeight: 1.17
spacing:
  cardRadius: 4.0678px
  buttonRadius: 7px
  elementGap: 8px
  sectionGap: 68px
components:
  ghost-player-button:
    role: Interactive control for media playback or navigation within content blocks.
  toast-notification-button:
    role: Close button for ephemeral notifications or alerts.
  basic-content-card:
    role: Container for showcasing work, images, or small content snippets.
  interactive-link-button:
    role: Actionable text links in notifications or informational areas.
  image-player-controls:
    role: Controls for navigating through image galleries or project details.
  meta-information-text:
    role: Small, secondary textual information like dates or categories.
---

## Overview

**North Star:** monochromatic architectural blueprint

Norgram operates with a stark, high-contrast aesthetic, juxtaposing deep black and pristine white with minimal interruption. The system leans on precise typography and a grid-based rhythm, creating a sense of quiet authority rather than overt design flourishes. Color is used sparingly, primarily for functional accents, ensuring that content and structure remain the focal point. Components emphasize lightweight clarity: flat surfaces, crisp text, and subtle interactions.

### Do's

- Maintain a stark, high-contrast palette using 'Obsidian' (#000000) for text and 'Canvas White' (#ffffff) for backgrounds, and 'Deep Graphite' (#141414) for dark surfaces.
- Apply 'Helvetica Now Display - Regular' for headlines and main content, utilizing aggressive negative letter-spacing for large titles (-0.0200em at 87px).
- Use geometric, minimal border radii: 4.0678px for cards and larger containers, and 7px for interactive elements like buttons.
- Space elements using a compact rhythm, leveraging 8px for most element gaps and 68px for section separation.
- Convey interaction through subtle background fills like 'Smoked Glass' (rgba(63, 63, 63, 0.4)) or 'Whisper Gray' (#b2b2b2) rather than strongly chromatic accents.
- Prioritize functional clarity over decorative elements; every visual choice must serve to organize or highlight content precisely.

### Don'ts

- Avoid decorative shadows or complex elevation schemes; surfaces should remain flat or subtly transparent.
- Do not introduce vibrant accent colors; the system relies on a strictly achromatic palette with functional gray tints.
- Refrain from using organic or hand-drawn graphic elements; visuals should be precise, geometric, and structured.
- Avoid excessive padding within containers; content often sits flush with card edges or uses minimal, proportional spacing.
- Do not use generic system fonts for display text; 'Helvetica Now Display' is critical for maintaining the brand's sharp, modern edge.
- Do not apply large, soft rounded corners unless explicitly denoted; default radii are small and precise.

### Layout

The layout is primarily a max-width contained grid, but projects and hero sections can expand to full-bleed. The hero pattern prominently features a full-bleed dark background with stark white, centered headlines. Content sections often alternate between light and dark thematic bands, utilizing consistent vertical spacing of 68px between major sections. Within sections, content is arranged in two-column text+image layouts or stacked centered blocks for more focused messages. There's an underlying compact density, with minimal internal padding on elements like cards, allowing imagery and text to command space. Navigation is a minimal top-bar, often ghosted or subtly present.

### Imagery

This design system uses a blend of high-fidelity product photography, often showcasing technological devices or industrial designs in controlled, studio-like lighting against monochromatic backgrounds. These are integrated full-bleed or as large content blocks, serving as primary visual content rather than decorative elements. Abstract, minimalist graphics featuring clean lines and geometric structures are also present, often used subtly as background textures or brand elements. Icons are typically monochrome, outlined or filled, with a very fine stroke weight or solid, reflecting the system's overall precision.

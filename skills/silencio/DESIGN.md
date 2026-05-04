---
version: alpha
name: Silencio
description: This design system evokes a sense of stark, intellectual minimalism, like text on archival paper. The near-exclusive use of achromatic colors combined with extremely tight letter spacing and ultra-light font weights creates a unique atmosphere of quiet authority. Interactions are marked by subtle inversions of the monochrome palette rather than vibrant accents, directing focus with understated precision. The overall impression is one of serious, almost academic rigor, where content takes absolute precedence.
colors:
  canvas-white: "#FFFFFF"
  ink-black: "#000000"
  paper-gray: "#DBDAD9"
  border-gray: "#808080"
  subtle-fade: "#DBDAD9"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 141px
    lineHeight: 0.9
spacing:
  buttonRadius: 129.6px
  elementGap: 6-14px
components:
  ghost-button-group:
    role: 
  reference-metadata-block:
    role: 
  content-section-heading-with-caption:
    role: 
  ghost-button:
    role: Primary Call to Action
  content-section-heading:
    role: Secondary section titles
  display-heading:
    role: Signature large text
  reference-text:
    role: Metadata and small print
---

## Overview

**North Star:** Archival Text on White. A single page from a carefully curated, minimalist document, demanding close attention.

This design system evokes a sense of stark, intellectual minimalism, like text on archival paper. The near-exclusive use of achromatic colors combined with extremely tight letter spacing and ultra-light font weights creates a unique atmosphere of quiet authority. Interactions are marked by subtle inversions of the monochrome palette rather than vibrant accents, directing focus with understated precision. The overall impression is one of serious, almost academic rigor, where content takes absolute precedence.

### Do's

- Prioritize Canvas White (#FFFFFF) and Ink Black (#000000) for high-contrast pairs, achieving AAA contrast.
- Use Paper Gray (#DBDAD9) sparingly for subtle background offsets or non-interactive element fills.
- Apply HaasT at 141px with weight 100 and line-height 0.9 for all display-level headings, breaking lines creatively for visual impact.
- Maintain a default border-radius of 7.2px for most container elements.
- Ensure all interactive buttons utilize a 129.6px border-radius, creating an exaggerated pill shape.
- Use PT Mono, 11px, weight 400 for any technical or metadata text.
- Employ the Subtle Fade gradient from #DBDAD9 to #FFFFFF for background transitions to introduce soft, material depth.

### Don'ts

- Avoid introducing any chromatic colors; the system is strictly achromatic.
- Do not use explicit padding on buttons; their shape and content are implicitly spaced by the surrounding layout.
- Never use HaasR at 39px with weight 100; it's a 700 weight for that size.
- Do not use generic square or slightly rounded buttons; the 129.6px pill shape is a critical brand identifier.
- Avoid heavy drop shadows or vibrant elevation cues; depth is primarily conveyed through subtle background shifts and gradients.
- Do not use letter spacing variations unless explicitly defined for display type; stick to 'normal' for body and subheadings.
- Do not break the strict line-height values for HaasR and HaasT; they are integral to the system's precise feel.

### Layout

The layout is characterized by a full-bleed background model that often features the Subtle Fade gradient vertically, giving a soft, infinite canvas feel. Content is organized into distinct, expansive vertical sections marked by changes in background color from Canvas White to Paper Gray, or by the presence of large, impactful typography. The hero section often features oversized, tightly spaced type. Content arrangement within sections appears to alternate between centered headings and left-aligned text blocks, with visual elements (like product mocks) sometimes floating or partially overlapping with text areas, creating an almost gallery-like composition. There's a strong emphasis on spaciousness, with liberal use of vertical whitespace between content blocks. Navigation is likely minimal, perhaps a sticky top bar or discrete menu button, given the text-heavy and large-scale visual approach.

### Imagery

Imagery on this site focuses on abstract, often sculptural representations of objects or raw materials with a distinct lack of human presence. Product shots, if any, are hyper-minimalist and isolated on white or light gray backgrounds, emphasizing form and texture. The treatment is primarily isolated with soft, diffused shadows, creating an ethereal, floating effect. The visual style is highly conceptual and serves to underline the agency's focus on 'visual languages' by presenting objects as pure, unadorned forms. Density is extremely low; images are sparse and given ample white space, making them significant visual anchors when they appear.

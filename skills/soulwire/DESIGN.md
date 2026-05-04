---
version: alpha
name: Soulwire
description: Soulwire adopts a 'digital console' aesthetic, using a dark, monochromatic canvas as a backdrop for highly legible fixed-width typography. Information is presented with a developer-centric precision, featuring sparse layout and a muted, almost clinical color palette. The system emphasizes clear textual hierarchy and functional, unadorned elements, where interactions are highlighted by subtle shifts in text color rather than heavy graphic adornments.
colors:
  console-background: "#16191b"
  primary-text: "#e2e6e8"
  code-block-highlight: "#ffffff"
  divider-boundary: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 2
  body-sm:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2
  body:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 2
  body-lg:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 2
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 2
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
spacing:
  elementGap: 8px
  sectionGap: 166px
components:
  minimal-card:
    role: Container
  navigation-link:
    role: Interactive Element
  footer-social-link:
    role: Interactive Element
  listing-item:
    role: Content Display
---

## Overview

**North Star:** midnight command center behind frosted glass

Soulwire adopts a 'digital console' aesthetic, using a dark, monochromatic canvas as a backdrop for highly legible fixed-width typography. Information is presented with a developer-centric precision, featuring sparse layout and a muted, almost clinical color palette. The system emphasizes clear textual hierarchy and functional, unadorned elements, where interactions are highlighted by subtle shifts in text color rather than heavy graphic adornments.

### Do's

- Use Console Background (#16191b) as the base for all page backgrounds and primary surfaces.
- Apply Roboto Mono with 0.1500em letter-spacing for all textual content to maintain the code-like aesthetic.
- Ensure all primary text (headings, body, interactive elements) uses Primary Text (#e2e6e8) for high contrast and readability.
- Leverage Code Block Highlight (#ffffff) exclusively for subtle emphasis or active states on textual elements within lists or code contexts.
- Maintain a clear visual hierarchy through variations in Roboto Mono font sizes and the strategic employment of Primary Text (#e2e6e8) vs. the darker background.
- Employ minimal visual adornments, relying on precise typography and spacing to structure content rather than heavy borders or backgrounds.
- Use 166px for section gaps and 8px for inter-element spacing to establish a consistent, compact rhythm.

### Don'ts

- Do not introduce any saturated colors; the palette is strictly monochromatic and cool-toned.
- Avoid decorative borders, shadows, or background fills on any cards or content blocks unless explicitly defining an active state with text color.
- Do not use generic system fonts; Roboto Mono is central to the brand's identity.
- Do not deviate from the established letter-spacing of 0.1500em for Roboto Mono; it is a signature characteristic.
- Refrain from using varied timing functions or complex transitions; stick to ease and opacity changes for motion.
- Do not use heavy, display-style headings; maintain a light, technical feel even for titles.
- Do not exceed a page width; the content should be left-aligned within the full-bleed canvas.

### Layout

The page employs a full-bleed dark canvas with content largely contained within a left-aligned, unbounded width flow. The hero section introduces the main 'Salut' text, followed by an 'about' section and a 'labs' section, all arranged linearly. Vertical spacing is critical, using a large 166px section gap. Individual content elements are tightly packed, with an 8px element gap. Navigation is minimal, limited to a small header logomark and footer links, all integrated purely as text. There is no grid system for content; everything stacks vertically, creating a continuous, compact flow of information.

### Imagery

This site uses no imagery, illustrations, or graphics beyond its subtly stylized logomark. The visual system is entirely text-dominant, relying on typographic presentation and stark empty space to convey its aesthetic. Icons are minimal, represented by character symbols or single-color SVGs that integrate seamlessly with the text. No photography or graphic elements are present to distract from the code-like interface.

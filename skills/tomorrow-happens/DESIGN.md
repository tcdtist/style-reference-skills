---
version: alpha
name: Tomorrow Happens
description: Tomorrow Happens employs a stark, editorial white-space aesthetic, prioritizing text and subtle visual cues over heavy graphical elements. The system emphasizes a high-contrast monochromatic palette with light, breathable typography. Interaction is hinted through understated borders and minimal sizing, creating a sense of quiet authority and focus on content.
colors:
  canvas-white: "#ffffff"
  ink-black: "#000000"
  muted-ash: "#808080"
typography:
  display:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1
spacing:
  buttonRadius: 0px
  elementGap: 4px
  sectionGap: 60px
components:
  ghost-navigation-link:
    role: Main navigation links
  underlined-navigation-link:
    role: Active or highlighted navigation item
---

## Overview

**North Star:** typographic whisper on white space

Tomorrow Happens employs a stark, editorial white-space aesthetic, prioritizing text and subtle visual cues over heavy graphical elements. The system emphasizes a high-contrast monochromatic palette with light, breathable typography. Interaction is hinted through understated borders and minimal sizing, creating a sense of quiet authority and focus on content.

### Do's

- Prioritize text content and negative space over graphic elements.
- Use Ink Black (#000000) for all primary text and critical borders to maintain high contrast.
- Deploy Reckless Neue at weight 200 for headings to convey a delicate, considered tone.
- Structure interactive elements with subtle borders like Muted Ash (#808080) for visual hierarchy without visual weight.
- Maintain a compact information density for body and navigation text using ABC Diatype, leveraging its tight line heights.
- Employ `0px` border-radius universally for a sharp, angular aesthetic.
- Ensure generous `60px` vertical spacing between major sections for breathability.

### Don'ts

- Avoid using bold or heavy font weights for headlines; the 200 weight of Reckless Neue is a signature.
- Do not introduce strong accent colors for interactive elements; stick to the monochromatic palette for primary actions.
- Refrain from applying soft shadows or any elevation that disrupts the flat, two-dimensional aesthetic.
- Do not use rounded corners on any component; `0px` radius is central to the visual character.
- Never overcrowd content; allow ample negative space, adhering to the expansive white canvas principle.
- Avoid decorative imagery that competes with the textual focus, maintaining an 'icons-only' approach where necessary.
- Do not use any of the predefined `--wp--preset--color` values, as they are not part of the active brand palette.

### Layout

The page primarily uses a max-width contained model where the main content is centered. The hero pattern features a centered headline with secondary text cascading around it, creating a text-based, editorial focus over a full-bleed white background. Section rhythm is dictated by clear vertical spacing of `60px` between potential content blocks. Content arrangement is primarily centered stacks for large text, and implicit two-column layouts for navigation. The navigation is minimal, appearing as a vertical list of ghost links on the left side, indicating a sidebar or sticky menu approach rather than a traditional top navigation bar. Density is extremely spacious, with ample breathing room between elements and sections.

### Imagery

The visual language is essentially 'no imagery, pure UI' with text-dominant screens. Icons, when present, are minimal (e.g., a simple '+' sign), outlined, and monochromatic, serving purely functional, navigational roles. There are no photographs, illustrations, product screenshots, or 3D renders. The density is extremely text-dominant, with generous white space around minimal text elements.

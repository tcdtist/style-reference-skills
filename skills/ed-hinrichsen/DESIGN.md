---
version: alpha
name: Ed Hinrichsen
description: The Ed Hinrichsen site evokes a retro-computing aesthetic with a warm, desaturated orange and dark gray palette, accented by pixel-art typography and blocky shadow effects. Its visual language prioritizes a 'terminal' feel, using dashed borders as dividers and relying on a muted background color to ground content. Interactions are highlighted by direct, sharp shadows rather than soft glows, lending a tactile, almost stamped appearance to elements.
colors:
  vanilla-dust: "#f6d4b1"
  system-gray: "#525252"
  pixel-black: "#000000"
  warm-sand: "#cdb499"
spacing:
  buttonRadius: 0px
  elementGap: 16px
  sectionGap: 32px
components:
  outlined-terminal-button:
    role: Primary Call to Action
  project-card:
    role: Content Display Card
  dashed-divider:
    role: Visual Separator
  page-header-nav-item:
    role: Navigation Link
  tag-skill-badge:
    role: Categorization Label
---

## Overview

**North Star:** Retro terminal interface.

The Ed Hinrichsen site evokes a retro-computing aesthetic with a warm, desaturated orange and dark gray palette, accented by pixel-art typography and blocky shadow effects. Its visual language prioritizes a 'terminal' feel, using dashed borders as dividers and relying on a muted background color to ground content. Interactions are highlighted by direct, sharp shadows rather than soft glows, lending a tactile, almost stamped appearance to elements.

### Do's

- Always use the 'public-pixel' font for headings and primary navigational texts to maintain the distinct retro-digital identity.
- Implement the layered shadow effect (1px 'Vanilla Dust' offset, then 4px 'System Gray' offset) for all interactive clickable elements to simulate a three-dimensional, 'stamped' look.
- Utilize 1px dashed borders of 'System Gray' extensively as visual dividers and content outlines to reinforce the terminal aesthetic.
- Prioritize 'System Gray' for backgrounds and 'Vanilla Dust' for text accents and outlines, creating a high-contrast vintage display.
- Maintain a compact density with element gaps typically at 16px to reflect the information-dense nature of classic terminal interfaces.
- Employ 0px border-radius for all UI elements, ensuring sharp, blocky edges consistent with pixel-art visuals.

### Don'ts

- Avoid soft, diffused shadows or glows; stick to sharp, layered offset shadows for depth.
- Do not introduce rounded corners; all interface elements must have a 0px border-radius.
- Refrain from using gradients or subtle color transitions; elements should have solid, distinct fill and border colors.
- Do not use generic sans-serif or serif fonts for primary text; 'chill' and 'public-pixel' define the brand's typographic voice.
- Avoid vibrant or highly saturated colors outside of the defined 'Vanilla Dust' accent, to preserve the muted, vintage palette.
- Do not use expansive white space between sections; maintain a relatively compact vertical rhythm with consistent section gaps of 32px.

### Layout

The page primarily uses a contained layout, with content centered. The hero section features a prominent 3D render of a retro computer, with critical information displayed on its screen in the signature terminal style. Subsequent sections alternate between centered stacks of content and implicit two-column layouts where text is juxtaposed with imagery (often product screenshots). Vertical rhythmic spacing appears consistent, primarily driven by 32px section gaps and extensive use of dashed dividers. Navigation is a minimal top-left icon menu, supplemented by prominent 'Projects' and 'About' sections.

### Imagery

The site uses a mix of highly stylized 3D renders of retro computing equipment (e.g., the CRT monitor and keyboard) and pixelated iconography. The product imagery consists of tightly cropped, high-fidelity screenshots, often contained within a 'terminal' frame. All visuals are integrated to support a consistent vintage technology aesthetic, acting as both decorative atmosphere and explanatory content. Imagery density is moderate, with visuals often anchoring sections rather than being purely illustrative.

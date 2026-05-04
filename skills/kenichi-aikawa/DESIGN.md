---
version: alpha
name: Kenichi Aikawa
description: The Kenichi Aikawa design system embodies a minimal, high-contrast aesthetic that privileges content. It balances the starkness of dark text on a pure white canvas with the understated elegance of custom typography. Spacing is generous, creating a spacious, uncluttered environment where photographic works are given ample room to breathe. Interactions are subtle, using faint borders and text changes rather than overt color or heavy components, focusing attention on the visual artistry.
colors:
  basalt-black: "#2d2926"
  canvas-white: "#ffffff"
  ash-gray: "#7c8780"
  whisper-gray: "#c1c6c8"
  pale-silver: "#d0d3d4"
spacing:
  elementGap: 15px
  sectionGap: 75px
components:
  navigation-link:
    role: Interactive text link within the header and navigation menus.
  body-text-block:
    role: Standard paragraph text and small informational labels.
  heading-large:
    role: Primary headline for sections, providing visual emphasis.
  heading-medium:
    role: Secondary headline for subsections or categorized content.
  interactive-border:
    role: Outline indicator for hover or focus states on navigation items and other interactive elements.
---

## Overview

**North Star:** Photographic gallery on crisp paper. A precise grid with generous negative space showcases imagery and text like exhibits in a minimalist art gallery.

The Kenichi Aikawa design system embodies a minimal, high-contrast aesthetic that privileges content. It balances the starkness of dark text on a pure white canvas with the understated elegance of custom typography. Spacing is generous, creating a spacious, uncluttered environment where photographic works are given ample room to breathe. Interactions are subtle, using faint borders and text changes rather than overt color or heavy components, focusing attention on the visual artistry.

### Do's

- Always use Basalt Black (#2d2926) for primary text on Canvas White (#ffffff) backgrounds to maintain high contrast.
- Apply PP Editorial New, weight 400 for all headings to establish a distinct editorial tone, with `letter-spacing: -0.0500em` for 58px and `-0.0300em` for 20px text.
- Employ PP Neue Montreal, weight 400 for all body text, navigation links, and functional copy, ensuring legibility and a neutral aesthetic.
- Utilize 15px vertical padding for interactive text elements like navigation links to provide clear click targets and visual breathing room.
- Maintain generous spacing between content sections (e.g., sectionGap: 75px) to achieve a spacious and uncluttered page density.
- Implement 1px Basalt Black (#2d2926) borders as subtle accent or hover states, avoiding any filled button backgrounds or heavy visual indicators.

### Don'ts

- Do not introduce strong accent colors; the palette should remain predominantly monochrome with subtle grays.
- Avoid using shadows or gradients; rely on contrast and spacing for visual hierarchy rather than elevation effects.
- Do not deviate from the specified letter-spacing for PP Editorial New; its tight tracking is a signature element of the typography.
- Do not use heavy, filled button styles; all interactive elements should be text-based or use subtle borders.
- Do not create dense blocks of text or tightly packed UI; prioritize spacious layouts and ample negative space.

### Layout

The page model is a max-width contained layout in certain sections, but primarily presents imagery in a full-bleed or near full-bleed manner. The hero section often features large photographic content with centered, minimal text. Section rhythm is characterized by consistent vertical spacing (implied 75px sectionGap) and a seamless flow between content blocks, with no hard visual dividers like alternating colored bands. Content arrangement likely follows a grid system for portfolio items, where images are primary and text is secondary, providing labels or brief descriptions. The overall density is spacious, reflecting an exhibition-like presentation. Navigation is a compact top bar which seems to be sticky, allowing for persistent access while maintaining a clean aesthetic.

### Imagery

This design system primarily utilizes photography as its visual language, given the photographer's portfolio nature. The treatment of images, which are not explicitly provided in the token data but implied by the system's aesthetic, would be full-bleed or large contained crops. Imagery is the hero, framed by abundant negative space. Product photography or lifestyle shots (depending on the project) would be the focus, with minimal overlays or complex masking, allowing the inherent qualities of the photograph to shine. Icons, if present, are minimal, likely outlined with a fine stroke, adhering to the monochrome palette. The density is image-heavy, with text serving to label and contextualize the visuals.

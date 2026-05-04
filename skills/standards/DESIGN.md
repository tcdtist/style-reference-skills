---
version: alpha
name: Standards
description: Standards adopts a stark, high-contrast visual language; an almost monochrome canvas of near-white and black is punctuated sparingly by a vivid, energetic orange. Typography is central, using a bespoke sans-serif with subtle letter-spacing for a precise, authoritative voice. Components are minimal and sharp, focusing on functionality over adornment, with clean borders and tight spacing that reinforce a sense of clarity and efficiency. The overall effect is direct and impactful, designed to convey competence and modern exactitude.
colors:
  canvas-ice: "#eaeaea"
  midnight-ink: "#000000"
  steel-gray: "#a1a1a1"
  whisper-gray: "#d7d7d7"
  action-orange: "#ff2e00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.55
    letterSpacing: -0.1px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.45
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.27
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 31px
    lineHeight: 1.15
    letterSpacing: -0.31px
  display:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: -0.52px
spacing:
  buttonRadius: 4px
  elementGap: 10px
  sectionGap: 46px
components:
  primary-action-button:
    role: Key interactive element.
  secondary-action-button:
    role: Alternative interactive element, less emphasis.
  ghost-card:
    role: Container for content, appearing as an empty visual block.
  navigation-link:
    role: Primary navigation item in headers and footers.
---

## Overview

**North Star:** High-contrast precision blueprint.

Standards adopts a stark, high-contrast visual language; an almost monochrome canvas of near-white and black is punctuated sparingly by a vivid, energetic orange. Typography is central, using a bespoke sans-serif with subtle letter-spacing for a precise, authoritative voice. Components are minimal and sharp, focusing on functionality over adornment, with clean borders and tight spacing that reinforce a sense of clarity and efficiency. The overall effect is direct and impactful, designed to convey competence and modern exactitude.

### Do's

- Prioritize Midnight Ink (#000000) for all primary text and critical UI elements to ensure high contrast.
- Use Element Gap (10px) consistently for horizontal and vertical spacing between small interactive elements.
- Apply Action Orange (#ff2e00) exclusively for primary calls-to-action and minimal, impactful accents.
- Ensure all buttons have a 4px border radius for a subtle, consistent corner treatment.
- Maintain the -0.0100em letter-spacing for all text elements to preserve the distinct typographical feel.
- Utilize Canvas Ice (#eaeaea) as the dominant background color for most page sections.
- Structure all headings with Soehne font, weight 600, paired with section gaps of 46px to define clear content blocks.

### Don'ts

- Avoid using multiple chromatic colors; limit accents strictly to Action Orange (#ff2e00).
- Do not introduce additional font families or weights beyond Soehne 400 and 600.
- Refrain from applying shadows to elements; maintain a flat design aesthetic.
- Do not vary letter-spacing from -0.0100em across any text element.
- Avoid decorative gradients or complex backgrounds; stick to solid colors.
- Do not use border radii different from 4px on interactive elements or 0px on cards.
- Do not deviate from the established spacing tokens; maintain the spacious rhythm.

### Layout

The page maintains a full-bleed visual model, without a fixed max-width container. The hero section establishes a stark contrast with a large, centered, high-impact headline directly on the Canvas Ice background, immediately followed by a full-width black block potentially for video or product showcase. Sections alternate between light Canvas Ice backgrounds and full-width content blocks. Content is arranged in flexible, often multi-column grids or centered stacks. Vertical rhythm is defined by consistent section gaps (around 46px), and card grids often feature six-column layouts where elements have 0px radius and no box shadows, appearing as pure contained blocks hinting at content. The navigation is minimal, featuring a sticky top bar with logo, index, and simple text links.

### Imagery

This system features a highly minimal approach to imagery. Product screenshots show cropped application windows on pure white backgrounds, emphasizing software UI without lifestyle context. Illustrations are entirely absent. Icons, when present, are simple, monochromatic, and outlined, reinforcing the clean, functional aesthetic with a subtle stroke weight. The overall density is text-dominant, with imagery serving as direct functional examples or placeholder content in ghost card backgrounds, never vying for attention with complex visual narratives.

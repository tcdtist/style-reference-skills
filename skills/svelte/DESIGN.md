---
version: alpha
name: Svelte
description: This design system feels like a modern reinterpretation of classic editorial design, balancing gravitas with approachability. The signature move is the pairing of a strong, almost-black headline color (#141414) with an elegant serif font (EB Garamond / DM Serif Display) that commands attention without being overbearing. This is underscored by a clean, spacious layout using ample negative space to highlight key content, with the single vibrant orange (#d43008) serving as a bright, technical accent, reminiscent of a warning light or a 'hot' element in a cool system.
colors:
  carbon: "#141414"
  graphite: "#262626"
  pewter: "#666666"
  ghost-white: "#f2f2f2"
  snow: "#ffffff"
  svelte-orange: "#d43008"
spacing:
  elementGap: 10px
  sectionGap: 100px
components:
  get-started-cta-button:
    role: 
  search-bar-with-keyboard-shortcut:
    role: 
  companies-social-proof-block:
    role: 
  primary-navigation-link:
    role: Main navigation item
  default-button:
    role: General interactive button
  minimal-card-button:
    role: Button within a card-like element
  inline-text-link:
    role: Hyperlinks in body copy
---

## Overview

**North Star:** Crisp editorial elegance

This design system feels like a modern reinterpretation of classic editorial design, balancing gravitas with approachability. The signature move is the pairing of a strong, almost-black headline color (#141414) with an elegant serif font (EB Garamond / DM Serif Display) that commands attention without being overbearing. This is underscored by a clean, spacious layout using ample negative space to highlight key content, with the single vibrant orange (#d43008) serving as a bright, technical accent, reminiscent of a warning light or a 'hot' element in a cool system.

### Do's

- Prioritize DM Serif Display 500 for all top-level headlines at 54px size, using Carbon (#141414) for maximum impact.
- Use EB Garamond 400 at 22px for primary body text, paired with a line-height of 1.5 to enhance readability.
- Apply Svelte Orange (#d43008) exclusively for interactive elements, links, and critical accent icons to draw attention to actionable items.
- Maintain a default border-radius of 4px for all buttons and structural containers unless a specific style guide says otherwise.
- Ensure sufficient negative space around major content blocks, with section gaps typically around 100px vertical spacing.
- Keep text colors to Carbon (#141414), Graphite (#262626), and Pewter (#666666) against white or near-white backgrounds for clear visual hierarchy.

### Don'ts

- Do not use generic system fonts; EB Garamond, Fira Sans, and DM Serif Display are integral to the brand's typographic identity.
- Avoid excessive use of shadows or busy backgrounds; the design relies on crisp edges and generous white space.
- Do not replace Svelte Orange (#d43008) with other chromatic colors or use it for purely decorative purposes; it's reserved for interaction and emphasis.
- Do not vary border radii arbitrarily; stick to 4px for most elements to maintain visual consistency, with exceptions like the 56px radius for specialized components.
- Do not use pure black (#000000) for body text; instead, opt for Graphite (#262626) or Carbon (#141414) for a softer but still high-contrast look.
- Avoid using a pageMaxWidth; the layout appears to be full-bleed with content centered within flexible containers, allowing for adaptive responsiveness.

### Layout

The page follows a full-bleed pattern with content centrally aligned within implied maximum width containers. The hero section is full-width, featuring a prominent, centered headline over a background that combines a soft gradient with the distinctive 3D render. Subsequent sections alternate between centered single-column text blocks and a combination of text and product screenshots, often in a responsive, two-column arrangement. Vertical spacing between sections is generous (100px) creating a spacious rhythm. Navigation is a sticky top bar, providing persistent access to key links.

### Imagery

The visual language mixes functional, abstract 3D product renders with classic product screenshots. The hero features a complex 3D rendering of the 'Svelte' logo integrated into an industrial conveyor belt, symbolizing processing and transformation, rendered with a metallic sheen and an orange glow suggesting activity. This is contrasted with crisp, raw product screenshots of IDEs and code, often presented as contained, sharp-edged rectangles, demonstrating the UI framework in action. Iconography (e.g., search, social media) is minimalist line art, mostly in monochrome black. The overall density of imagery is moderate, used strategically for impact rather than decoration, with product visuals focused on explanatory content.

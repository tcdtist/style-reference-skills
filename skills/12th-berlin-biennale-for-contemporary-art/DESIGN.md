---
version: alpha
name: 12th Berlin Biennale for Contemporary Art
description: The 12th Berlin Biennale design system evokes an underground gallery experience: stark black and white punctuated by a vivid violet and subtle muted violet. Typography is compact and precise, often with tight letter-spacing, contrasting against large, bold elements or ample negative space. Components are lightweight with minimal elevation, focusing on clear functionality through high-contrast text against clean surfaces. The interface relies on hard edges and distinct blocks of color for rhythm, avoiding gradients or complex shadows.
colors:
  midnight: "#000000"
  canvas: "#ffffff"
  fog: "#f2f2f2"
  ash: "#e7e7e7"
  vivid-violet: "#7373ff"
  muted-violet: "#23234d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 2.4
    letterSpacing: 0.01px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 2
    letterSpacing: -0.004px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.15
    letterSpacing: -0.004px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.03
    letterSpacing: -0.004px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.02
    letterSpacing: -0.01px
spacing:
  cardRadius: 7px
  buttonRadius: 5px
  elementGap: 5px
  sectionGap: 32px
components:
  primary-filled-button:
    role: Standard interactive button for general actions.
  secondary-pill-button-outlined:
    role: Secondary action or tag component, distinctly rounded.
  bare-text-link:
    role: Stylized text link, often inside a component or list.
  vivid-violet-text-link:
    role: Distinguished interactive text link.
  default-card:
    role: Container for content, appearing as a floating panel.
  transparent-card:
    role: Subtle content container, often for lists within a dark section.
  search-input:
    role: Interactive text input field.
  navigation-item-white-bg:
    role: Menu items within navigation blocks.
  navigation-item-ash-bg:
    role: Menu items within navigation blocks, slightly differentiated.
---

## Overview

**North Star:** Underground gallery, high contrast, stark violet punctuation

The 12th Berlin Biennale design system evokes an underground gallery experience: stark black and white punctuated by a vivid violet and subtle muted violet. Typography is compact and precise, often with tight letter-spacing, contrasting against large, bold elements or ample negative space. Components are lightweight with minimal elevation, focusing on clear functionality through high-contrast text against clean surfaces. The interface relies on hard edges and distinct blocks of color for rhythm, avoiding gradients or complex shadows.

### Do's

- Always use Midnight (#000000) for primary text on Canvas (#ffffff) backgrounds to ensure AAA contrast.
- Apply Vivid Violet (#7373ff) as the primary accent color for active states, link underlinings, and outlined buttons.
- Maintain a compact typographic density with ABCMonumentGroteskWeb, utilizing tight letter-spacing (-0.0100em for large headings) to create an architectural feel.
- Use a default border-radius of 3px for most interactive elements, transitioning to 5px for primary buttons and 7px for cards and inputs.
- Structure layouts with a maximum content width of 1069px, centered, allowing ample negative space around content blocks.
- Employ Midnight (#000000) and Canvas (#ffffff) as core background colors, with Fog (#f2f2f2) and Ash (#e7e7e7) for subtle background differentiation in lists and navigation.
- Ensure all interactive elements have a clear visual feedback using Vivid Violet (#7373ff) for borders or text, especially for ghost or outlined components.

### Don'ts

- Avoid complex gradients or multi-color shadows; the design relies on flat colors and minimal elevation.
- Do not introduce new typefaces; adhere strictly to ABCMonumentGroteskWeb and BradfordLLSub.
- Do not use overly large line-heights for body text; aim for compact information presentation.
- Do not deviate from the established radius values; specific radii like 5px for buttons and 7px for cards are part of the brand identity.
- Do not use highly saturated colors other than Vivid Violet (#7373ff) for UI elements; maintain a largely monochromatic palette with a single dominant accent.
- Avoid heavy borders or solid backgrounds on cards; rely on subtle background shifts and corner radii for visual separation.
- Do not use decorative background patterns or textures; surfaces should remain clean and uniform.

### Layout

The page uses a max-width contained layout set at 1069px, with content consistently centered. The hero section is full-bleed and dark (Midnight background) with large, centered headlines and abstract numerical shapes. Sections maintain consistent vertical spacing. Content is largely arranged in compact, text-heavy blocks, often within clearly defined card-like structures. Navigation consists of a top bar that becomes sticky on scroll, and a detailed off-canvas menu or pop-over overlay. The overall rhythm is stark and blocky, emphasizing high contrast and distinct areas of information rather than seamless flow.

### Imagery

This design system eschews photographic imagery, decorative illustrations, or product screenshots in favor of an 'icons-only' approach. The visual language is almost entirely UI-driven, with graphic elements being minimal and abstract geometric shapes, such as the large black '1' and '2' numbers or the map in the screenshots. When present, icons are typically solid filled, monochromatic (Midnight or Muted Violet), and serve a functional rather than decorative role. The density is text-dominant; imagery is used sparingly for navigation or conceptual emphasis, not for content presentation.

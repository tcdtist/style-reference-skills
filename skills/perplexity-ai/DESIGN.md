---
version: alpha
name: Perplexity AI
description: The Perplexity AI interface presents as a refined, subtly textured workspace, like a digital parchment infused with computational intelligence. A pervasive creamy off-white (#faf8f5) provides a soft visual foundation, allowing charcoal text (#27251e) to softly emerge, rather than starkly contrast. The single teal accent (#016a71) is used judiciously for active states and critical calls to action, providing a quiet spark of functionality without dominating the serene palette. Rounded corners, ranging from a subtle 6px to a more prominent 16px on cards, soften hard edges, while a distinctive 9999px pill shape is reserved for interactive tags and compact action elements, creating a visual rhythm between form and function.
colors:
  canvas-creme: "#faf8f5"
  text-charcoal: "#272510"
  accent-teal: "#016a71"
  secondary-text: "#72706b"
  border-slate: "#d1d1cd"
  subtle-gray: "#92918b"
  deep-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.25
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 8px
  sectionGap: 32px
components:
  primary-navigation-item:
    role: Active state navigation item
  text-input-field:
    role: User input area
  search-query-pill:
    role: Interactive tag within input
  icon-button-default:
    role: Subtle interactive icon
  call-to-action-ghost:
    role: Secondary action or link
  content-card:
    role: Information container
  utility-link:
    role: Informational links in headers or footers
---

## Overview

**North Star:** Digital Parchment, Subtle Authority

The Perplexity AI interface presents as a refined, subtly textured workspace, like a digital parchment infused with computational intelligence. A pervasive creamy off-white (#faf8f5) provides a soft visual foundation, allowing charcoal text (#27251e) to softly emerge, rather than starkly contrast. The single teal accent (#016a71) is used judiciously for active states and critical calls to action, providing a quiet spark of functionality without dominating the serene palette. Rounded corners, ranging from a subtle 6px to a more prominent 16px on cards, soften hard edges, while a distinctive 9999px pill shape is reserved for interactive tags and compact action elements, creating a visual rhythm between form and function.

### Do's

- Use Canvas Creme (#faf8f5) as the primary background for all page sections and cards.
- Apply Text Charcoal (#27251e) for primary body text and main interface elements to ensure soft readability.
- Reserve Accent Teal (#016a71) exclusively for active navigation states, selected items, and high-priority interactive text.
- Utilize 9999px border-radius for all interactive tags and pill-shaped elements like search filters or small action buttons.
- Implement 16px border-radius for all higher-level containers and cards to maintain a consistent soft containment.
- Employ pplxSans with a weight of 400 for standard UI text, and 500 for subtle emphasis on titles or interactive elements.
- Maintain an 8px spacing unit for element gaps, ensuring consistent alignment and visual rhythm.

### Don'ts

- Do not introduce strong, saturated colors beyond Accent Teal (#016a71); the palette is intentionally soft and restrained.
- Avoid using hard, sharp corners; all functional UI elements should have a minimum of 6px border-radius.
- Do not use shadows indiscriminately; restrict them to cards and elevated containers, using the specified rgba(0, 0, 0, 0.08) 0px 1px 2px 0px only.
- Refrain from using excessively bold or heavy typefaces; pplxSans weights 400 and 500 are sufficient for all hierarchy needs.
- Do not clutter layouts with excessive visual dividers; rely on background color changes and consistent spacing for section separation.
- Avoid using pure white (#FFFFFF) for backgrounds; Canvas Creme (#faf8f5) provides a warmer, softer base.
- Do not add outlines to text inputs unless specifically for a focus state; maintain a clean, border-only aesthetic for default states.

### Layout

The page adheres to a distinct two-column layout: a fixed-width left navigation sidebar and a flexible main content area. The main content area is centered and constrained, not full-bleed, accommodating an AI-focused interface with clear boundaries. The hero section prominently features a centered brand logo and a large, central input field, directing immediate user interaction. Section rhythm is consistent, separated by implied spacing and functional groupings rather than visual dividers. Content is arranged in centered stacks for primary interaction, with some components utilizing two-column structures. Navigation is a persistent, left-aligned sidebar containing both hierarchical and utility links.

### Imagery

The visual language is UI-dominant with minimal decorative imagery. When icons are present, they are monochromatic, filled, and primarily use Text Charcoal (#27251e) or Accent Teal (#016a71) for active states, conveying functional clarity rather than ornate design. No photography, illustrations, or complex graphics are present, emphasizing a utilitarian, information-focused experience. The density is text-dominant, with icons serving as supporting visual cues.

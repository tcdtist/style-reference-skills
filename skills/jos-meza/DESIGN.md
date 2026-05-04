---
version: alpha
name: José Meza
description: José Meza presents a stark, high-contrast visual system where typography is the primary aesthetic element. The design uses an almost pure black canvas, allowing crisp white and muted gray text to define hierarchy and interaction. Spacing is generous, creating an atmosphere of spaciousness and deliberate calm. The overall impression is one of directness and essential information rather than rich ornamentation or complex layouts.
colors:
  midnight-void: "#000000"
  ghost-white: "#ffffff"
  slate-echo: "#585858"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.2
    letterSpacing: -0.903px
  display:
    fontFamily: "system-ui"
    fontSize: 97px
    lineHeight: 1.1
    letterSpacing: -2.231px
spacing:
  elementGap: 60px
  sectionGap: 60px
components:
  primary-navigation-link:
    role: Interactive text link for site navigation.
  secondary-navigation-link:
    role: Inactive or secondary interactive text link.
  display-headline:
    role: Large, prominent branding or section title.
---

## Overview

**North Star:** Minimalist Dark Canvas

José Meza presents a stark, high-contrast visual system where typography is the primary aesthetic element. The design uses an almost pure black canvas, allowing crisp white and muted gray text to define hierarchy and interaction. Spacing is generous, creating an atmosphere of spaciousness and deliberate calm. The overall impression is one of directness and essential information rather than rich ornamentation or complex layouts.

### Do's

- Prioritize Ghost White (#ffffff) for all primary text and active states against the Midnight Void (#000000) background.
- Use Slate Echo (#585858) exclusively for secondary text, inactive states, and subtle visual dividers.
- Maintain a spacious layout with a consistent 60px vertical and horizontal spacing unit between major content blocks and elements.
- Apply Untitled Sans, weight 400, for all typography, adjusting size and letter-spacing according to the type scale.
- Ensure the page content is contained within a 1320px maximum width, centered on the screen.
- Leverage the high contrast between Midnight Void and Ghost White to establish clear visual hierarchy without needing additional colors.

### Don'ts

- Avoid introducing any colors other than Midnight Void, Ghost White, and Slate Echo unless for specific functional or branding elements (not detected here).
- Do not use multiple font families or weights, as the system relies on a singular typeface for consistency.
- Refrain from using shadows or complex gradients; the aesthetic is flat and relies on color contrast and spacing.
- Introduce complex component structures or decorative elements that detract from the minimalist, text-focused presentation.
- Vary the letter-spacing or line-height from the defined typographic scale values for Untitled Sans.

### Layout

The page adheres to a maximalist typographic hero pattern, where the primary content (name and role) is displayed prominently as large, centered text, followed by navigation links. The layout is generally contained within a 1320px maximum width, centered. Vertical rhythm is established by consistent 60px gaps, creating generous breathing room between sections and elements. The navigation is a simple vertical list of text links, suggesting a minimal structure rather than complex menus. The main interaction happens through the text itself, highlighting a content-first, direct approach.

### Imagery

This design system primarily uses a 'no imagery, pure UI' approach. The visual emphasis is entirely on typography and spaciousness. If imagery were to be introduced, it would need to align with a stark, high-contrast, minimalist aesthetic, likely involving full-bleed or tightly cropped visuals that maintain an elegant, understated presence without clashing with the dominant dark canvas and crisp white text. Icons, if present (none detected), should be monochromatic, probably outlined, with medium stroke weight, to blend seamlessly with the typographic style rather than introducing new visual complexity.

### Elevation

This design system deliberately avoids shadows and complex elevation. The aesthetic is flat and relies on color contrast between text and background, along with generous spacing, to create visual hierarchy and depth. Any component interaction should be indicated by text color changes or subtle background shifts, not drop shadows or layered elements.

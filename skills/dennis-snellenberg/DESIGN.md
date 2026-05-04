---
version: alpha
name: Dennis Snellenberg
description: Dennis Snellenberg's design system uses a confident, dark-mode aesthetic with a strong emphasis on spaciousness and precise typography. Surfaces are predominantly dark, with crisp white text providing high contrast. A single vivid violet hue serves as the primary brand accent, thoughtfully deployed to highlight interactive elements and create moments of visual interest. The overall impression is one of meticulous craft and understated digital elegance.
colors:
  midnight-ink: "#1c1d20"
  frosted-glass: "#ffffff"
  neutral-stone: "#999d9e"
  graphite-shadow: "#494a4d"
  vivid-violet: "#455ce9"
  deep-violet: "#334bd3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.66
    letterSpacing: 0.05px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.06
    letterSpacing: 0.05px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 33px
    lineHeight: 1.45
    letterSpacing: 0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
    letterSpacing: 0.05px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 76px
    lineHeight: 1
    letterSpacing: 0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 216px
    lineHeight: 1
    letterSpacing: 0.05px
spacing:
  elementGap: 12px
components:
  located-tag:
    role: Informational tag showing location context.
  navigation-link:
    role: Primary navigation item in headers and footers.
  circular-brand-card-vivid-violet:
    role: Highlighting specific project categories or services with brand color.
  circular-brand-card-deep-violet:
    role: Supporting brand elements with a darker variation of the accent.
  circular-neutral-card-midnight-ink:
    role: General purpose neutral card for categorization or grouping.
  circular-neutral-card-frosted-glass:
    role: Highlighting elements on a dark background where full contrast is desired.
---

## Overview

**North Star:** midnight command center

Dennis Snellenberg's design system uses a confident, dark-mode aesthetic with a strong emphasis on spaciousness and precise typography. Surfaces are predominantly dark, with crisp white text providing high contrast. A single vivid violet hue serves as the primary brand accent, thoughtfully deployed to highlight interactive elements and create moments of visual interest. The overall impression is one of meticulous craft and understated digital elegance.

### Do's

- Prioritize Midnight Ink (#1c1d20) for primary page backgrounds and dark surface elements, establishing the core theme.
- Use Frosted Glass (#ffffff) for all main text on dark backgrounds and as a crisp accent for elements requiring high contrast.
- Apply Vivid Violet (#455ce9) sparingly for interactive elements, links, and card backgrounds to draw attention and reinforce brand identity.
- Ensure generous padding and spacing, using 18px as a consistent vertical and horizontal padding for most major content blocks and 12px for smaller element gaps.
- Utilize the Dennis Sans font with its consistent weight 450 across all text, relying on size changes for hierarchical differentiation.
- Employ a border radius of 36.72px for interactive links and tags, creating a distinct pill-like shape, contrasting with 10px for more structural body elements.
- Implement an inset shadow `rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset` for interactive link states to provide subtle feedback without heavy elevation.

### Don'ts

- Avoid using multiple accent colors; Vivid Violet (#455ce9) is the sole chromatic accent.
- Do not introduce heavy drop shadows or strong skeuomorphic elements; use subtle inset borders or background color shifts for depth.
- Refrain from using overly bold or light font weights, as Dennis Sans weight 450 is the primary typographic expression.
- Do not clutter layouts with dense information; maintain comfortable spacing values (12px element gap, 18px padding for sections) to ensure readability.
- Avoid arbitrary border radii; stick to the specified 36.72px for interactive elements and 10px for structural containers.
- Do not use Frosted Glass (#ffffff) as a full-page background; its primary role is for text and elevated surfaces on dark pages.

### Layout

The page exhibits a max-width contained layout, approximately 1200px, with content centered. The hero section is full-bleed, featuring a person offset to the right against a gray background with large typography on the left. Section rhythm is implied by strong negative space and the dark theme, rather than distinct alternating bands. Content arrangement seems to favor asymmetric compositions with large typographic elements balanced by visual components. Navigation is a minimalist top-right header, indicating a non-sticky, simple structure.

### Imagery

The site primarily uses photography, featuring a candid product shot of the brand's owner on a neutral gray background. The imagery is product-focused (the person as the 'product' representation) with a clean, unadorned treatment. Icons are minimal, represented by a clear, outlined style for global context (globe icon). Density is low, with imagery serving as a focal point rather than information conveyance, leaving ample space for typography.

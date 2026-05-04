---
version: alpha
name: Convex
description: This design system feels like a developer's workbench with a warm, analog-meets-digital aesthetic. It pairs a dark, almost charcoal-colored UI with hints of muted earth tones and vibrant, isolated code syntax colors. The sharp, unrounded buttons stand in contrast to the subtly rounded general UI elements, creating a precise, tool-like feel, while the extensive use of `GT America` font brings a distinctive modern tech presence.
colors:
  carbon: "#141414"
  cloud: "#ffffff"
  ash: "#f6f6f6"
  parchment: "#fdefd2"
  slate: "#292929"
  stone: "#d7d7d7"
  whisper: "#e5e5e5"
  code-violet: "#948ae3"
  code-pink: "#fc618d"
  code-green: "#7bd88f"
  code-yellow: "#f8e67a"
  warm-code-blue: "#69bee2"
  burnt-orange: "#de5d33"
  deep-plum: "#8d2676"
  workbench-gradient: "#221f1d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0.5px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.25px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.9px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.25
    letterSpacing: -1px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -2.8px
spacing:
  cardRadius: 12px
  buttonRadius: 0px
  elementGap: 4-16px
components:
  button-group-primary-ghost:
    role: 
  feature-list-everything-is-code:
    role: 
  product-section-banner-not-just-a-database:
    role: 
  primary-action-button-dark-bg:
    role: Primary call to action on dark backgrounds.
  outline-ghost-button-dark-bg:
    role: Secondary action or navigation on dark themed sections.
  outline-ghost-button-light-bg:
    role: Secondary action or navigation on light themed sections.
  code-window-container:
    role: Displays interactive code examples and snippets.
  dashboard-card:
    role: Displays data or a list of items within the interactive dashboard.
  search-input-field:
    role: Global or section-specific search functionality.
  navigation-link-active:
    role: Indicates current page or active menu item.
  navigation-link-inactive:
    role: Standard navigation item.
---

## Overview

**North Star:** Warm charcoal workbench with code syntax highlights. The core experience is dark and functional, highlighted by colorful code snippets.

This design system feels like a developer's workbench with a warm, analog-meets-digital aesthetic. It pairs a dark, almost charcoal-colored UI with hints of muted earth tones and vibrant, isolated code syntax colors. The sharp, unrounded buttons stand in contrast to the subtly rounded general UI elements, creating a precise, tool-like feel, while the extensive use of `GT America` font brings a distinctive modern tech presence.

### Do's

- Prioritize GT America for all textual elements except for specific code blocks, using ui-monospace for technical content.
- Use 0px border-radius for all interactive buttons to maintain a precise, angular aesthetic.
- Apply 'Workbench Gradient' (#221f1d to rgba(41, 57, 105, 0.9)) for rich, dark, interactive code editor backgrounds.
- Maintain a primary text color of Carbon (#141414) on light backgrounds and Cloud (#ffffff) on dark backgrounds for readability.
- Employ the code syntax colors (Code Violet, Pink, Green, Yellow) exclusively for code snippets or specific data highlights to prevent visual noise.
- Utilize Ash (#f6f6f6) for light page backgrounds and Slate (#292929) for dark card/surface backgrounds, clearly defining section depth.
- Enforce a hierarchical typography scale, with the largest display text at 56px and -2.8px letter spacing, creating a distinct visual voice.

### Don'ts

- Avoid using rounded corners for buttons; all buttons must have 0px border-radius.
- Do not introduce new chromatic colors outside the defined accent palette for syntax highlighting; maintain the established code color scheme.
- Do not use generic system fonts for headlines or body text; GT America is fundamental to the brand identity.
- Avoid excessive use of shadows; prefer distinct background colors and gradients to indicate elevation or separate surfaces.
- Do not dilute the contrast between text and background; ensure high contrast ratios like #ffffff on #141414 or #f6f6f6 on #000000.
- Do not mix 'Parchment' (#fdefd2) with 'Ash' (#f6f6f6) on adjacent surfaces; these subtle neutrals serve distinct light-theme background roles.

### Layout

The site uses a mixed layout approach. The initial hero section is dark and full-bleed with a centered headline and action buttons. Subsequent sections alternate between light and dark themes, often using a max-width contained grid for content, centered to a pageMaxWidth of approximately 1200px. Content arrangement frequently features split layouts (text on one side, visual on the other) or stacked content blocks. Vertical spacing between sections is generous and consistent (e.g., 940-1392px gaps). The navigation is a sticky top bar with logo, links, and action buttons. Feature sections often employ a 2-column layout or a card grid structure (e.g., pricing tiers). The density is varied, with spacious hero sections and more compact, information-dense blocks for features and explanations.

### Imagery

The visual language blends illustrative elements with minimalist product UI. Product screenshots are typically dark-themed code editor environments, often presented within a rounded-corner frame, signifying a working digital tool. Illustrations are abstract, pixelated, and geometric, featuring brand colors against light or dark backgrounds (e.g., the grid pattern with scattered orange and black squares), adding a playful yet technical feel. These are often used as decorative atmospheric elements, not functional content. Icons are minimal, either filled white on dark or filled dark on light, without apparent outlines, primarily serving UI navigation and feature indication. The overall density is balanced, with imagery serving as visual breaks or context for text-dominant sections, without overwhelming the content.

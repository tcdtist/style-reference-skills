---
version: alpha
name: Phantom
description: Phantom presents a light, playful, yet sophisticated aesthetic, establishing trust through a unique palette of muted violets and near-achromatic grays. A signature rounded-rectangle form dominates, appearing in primary buttons, hero containers, and navigation elements. The custom 'Phantom' typeface, with its 350-weight headlines, feels intimate and approachable, avoiding the starkness of many crypto platforms while maintaining clarity.
colors:
  phantom-violet: "#3c315b"
  lavender-mist: "#e2dffe"
  grape-glow: "#ab9ff2"
  success-green: "#2ec08b"
  paper-white: "#fdfcfe"
  charcoal-black: "#1c1c1c"
  silver-ash: "#e9e8ea"
  fog-gray: "#f4f2f4"
  stone-gray: "#86848d"
spacing:
  cardRadius: 24px
  buttonRadius: 32px
components:
  download-cta-button-group:
    role: 
  feature-section-card-trading-tools:
    role: 
  security-feature-card-dark:
    role: 
  primary-action-button:
    role: Main call to action
  inverted-dark-button:
    role: Secondary action or featured button on dark backgrounds
  ghost-button-light:
    role: Tertiary action or navigation
  dark-card-button:
    role: Button variant for dark cards/sections.
  light-card-button:
    role: Button variant for light cards/sections.
  navigation-link:
    role: Primary navigation elements
  success-badge:
    role: Status indicator or small tag
  hero-section-container:
    role: Main content block for hero sections
---

## Overview

**North Star:** Soft Violet Dreamscape: A calming digital space where gentle curves meet understated color, feeling secure and approachable.

Phantom presents a light, playful, yet sophisticated aesthetic, establishing trust through a unique palette of muted violets and near-achromatic grays. A signature rounded-rectangle form dominates, appearing in primary buttons, hero containers, and navigation elements. The custom 'Phantom' typeface, with its 350-weight headlines, feels intimate and approachable, avoiding the starkness of many crypto platforms while maintaining clarity.

### Do's

- Prioritize Phantom Violet (#3c315b) for primary text and interactive elements to maintain brand identity.
- Use Lavender Mist (#e2dffe) for primary button backgrounds and subtle interactive highlights.
- Apply a 24px border radius for main content blocks and card-like elements, and 32px for primary buttons.
- Use the Phantom font with a 350 weight and -0.025em letter spacing for display headlines (64px, 80px, 96px).
- Employ a base unit of 4px for all spacing measurements, translating to values like 4px, 8px, 12px, 16px, etc.
- Use Paper White (#fdfcfe) as the dominant page background color to support the soft, light theme.
- Ensure contrast ratio of 13:1 or higher for text-to-background combinations, using Charcoal Black (#1c1c1c) on light backgrounds like Paper White (#fdfcfe) and Lavender Mist (#e2dffe).

### Don'ts

- Avoid harsh, saturated colors that deviate from the muted violet and near-achromatic palette, except for specific semantic indicators like Success Green.
- Do not use sharp corners or square elements; maintain the rounded-rectangle and circular forms consistently.
- Refrain from using bold or heavy font weights for headlines; the 350 weight of Phantom font is a brand signature.
- Do not introduce unnecessary box shadows; elevation is minimal, confined to subtle effects like #e2dffe 0px 0px 4px 0px for interactive elements.
- Avoid high-contrast text on bright backgrounds, instead opting for the slightly desaturated Charcoal Black (#1c1c1c) on Paper White (#fdfcfe).
- Steer clear of aggressive or overly dynamic animations; the design encourages a calm and stable user experience.
- Do not vary letter spacing unless explicitly defined; the -0.025em for Phantom font is a stylistic choice, not a general rule.

### Layout

The layout is primarily a max-width contained design with content centered, but sections vary in background color. The hero section often features a full-width background, typically a solid color like Lavender Mist, with content centered. Subsequent sections alternate between Paper White backgrounds and more saturated violet backgrounds, creating a clear visual rhythm. Content is generally arranged in centered stacks, with strong emphasis on large, centrally aligned headlines and descriptive body text. Navigation is a sticky top bar, centered within the max-width container, featuring rounded buttons for primary actions.

---
version: alpha
name: Visitors
description: The Visitors design system employs a crisp, analytical aesthetic with a playful edge. It balances substantial negative space and achromatic surfaces with a vibrant, gradient-infused purple as its primary brand color, punctuated by a suite of vivid secondary accents. Typography is compact and precise, maintaining readability while maximizing information density. Interactive elements often manifest as ghost buttons or subtle, rounded containers, giving a lightweight feel until the accent color 'switches on' for primary actions. The pervasive use of rounded corners softens the otherwise direct, functional presentation.
colors:
  canvas-white: "#ffffff"
  slate-ink: "#181925"
  medium-gray: "#666666"
  muted-gray: "#999999"
  light-gray: "#e8e8e8"
  whisper-purple: "#dad9fc"
  radiant-violet: "#918df6"
  electric-blue: "#2c78fc"
  success-green: "#33c758"
  warning-yellow: "#ffa600"
  accent-pink: "#d6409f"
  pale-mint: "#def6e4"
  deep-purple: "#9580ff"
  vivid-orange: "#ff3e00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.56
    letterSpacing: -0.05px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.025px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.02px
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.22
    letterSpacing: -0.018px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.17
    letterSpacing: -0.017px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -0.013px
spacing:
  cardRadius: 16px
  buttonRadius: 1.67772e+07px
  elementGap: 16px
  sectionGap: 64px
components:
  navigation-link:
    role: Menu items, simple textual links
  ghost-button:
    role: Secondary actions, tertiary navigation items
  pill-ghost-button:
    role: Subtle filtering, small secondary actions
  primary-action-button:
    role: Main calls to action, clear user intent
  accent-pill-button:
    role: Prominent but compact actions like 'Register'
  subtle-text-button:
    role: Small, informative labels, often with an icon
  feature-card:
    role: Displaying key features or content blocks
  elevated-content-card:
    role: Prominent information display, often with more substantial content
---

## Overview

**North Star:** Analytical canvas vibrant spectrum

The Visitors design system employs a crisp, analytical aesthetic with a playful edge. It balances substantial negative space and achromatic surfaces with a vibrant, gradient-infused purple as its primary brand color, punctuated by a suite of vivid secondary accents. Typography is compact and precise, maintaining readability while maximizing information density. Interactive elements often manifest as ghost buttons or subtle, rounded containers, giving a lightweight feel until the accent color 'switches on' for primary actions. The pervasive use of rounded corners softens the otherwise direct, functional presentation.

### Do's

- Use Radiant Violet (#918df6) exclusively for primary action backgrounds and brand-aligned interactive elements; avoid using it for decorative purposes.
- Apply OpenRunde with specific letter-spacing values: -0.013em for 48px headlines, scaling down to -0.05em for 12px caption text.
- Maintain comfortable visual distance between elements using a base unit of 4px; common `elementGap` is 16px, and `cardPadding` is 16px.
- Utilize 1.67772e+07px (effectively 9999px) border-radius for all pill-shaped buttons and tags to create a consistent soft, rounded edge.
- Implement the soft box shadow `rgba(0, 0, 0, 0.08) 0px 1px 1px 1px, rgba(0, 0, 0, 0.06) 0px 0px 0px 0.5px` sparingly for interactive buttons.
- Use Slate Ink (#181925) for all high-contrast, structural text, including main headings and primary body content, ensuring readability on light backgrounds.
- Separate sections with a substantial 64px vertical `sectionGap` unless content dictates a continuous flow.

### Don'ts

- Do not use saturated colors for large background areas or extensive text; reserve them for accents and actionable components.
- Avoid sharp corners; ensure all interactive elements and content containers have a minimum border-radius of 8px.
- Do not introduce new typefaces; OpenRunde is the sole family for all textual content.
- Do not use heavy, opaque shadows; leverage the prescribed subtle shadows for depth or rely on background color changes for hierarchy.
- Do not clutter layouts; prioritize negative space and clear visual hierarchy on a bright, minimalist canvas.
- Do not apply `letter-spacing: normal` to display or large heading sizes; always use the specified negative tracking for OpenRunde.
- Do not use multiple instances of distinct purple hues for primary actions; Radiant Violet (#918df6) is the definitive choice for filled buttons.

### Layout

The page primarily employs a max-width contained layout, approximately 1200px, horizontally centered. The hero section features a centered headline and description over a full-bleed gradient background that extends across the viewport. Below the hero, content typically alternates between full-width banner-like sections and narrower, contained blocks. Feature sections often use a multi-column grid (e.g., 3-column) for concise information. Vertical rhythm is established by consistent section gaps of 64px, with components and cards featuring internal padding. Navigation is a sticky top bar with a left-aligned brand logo, right-aligned navigation links, and accent-colored 'Login'/'Register' buttons, indicating a clear, un-cluttered approach to utility.

### Imagery

The imagery style is a mix of product screenshots, abstract gradient backgrounds, and line art icons. Product screenshots are clean and direct, showcasing UI elements without heavy stylization. Abstract graphics are characterized by smooth, organic gradients, primarily in blues and purples, providing decorative atmosphere. Icons are minimalist, outlined, and often monochromatic or subtly tinted with accent colors like #33c758 (green), #ffa600 (yellow), or #d6409f (pink), serving as explanatory content or functional indicators. They possess a moderate stroke weight. The visual density is balanced, with imagery serving to break up text-heavy sections or highlight key data, rather than being overwhelming.

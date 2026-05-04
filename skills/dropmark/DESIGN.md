---
version: alpha
name: Dropmark
description: Dropmark employs a clean, organized visual style featuring a bright, expansive canvas and structural components delineated by subtle borders and minimal elevation. A vibrant, functional blue serves as the primary accent, providing clear focal points against an otherwise muted palette of grays and off-whites. Typography is confident and direct, utilizing both proportional and tabular figures for clarity. The overall impression is one of efficiency and understated reliability.
colors:
  canvas-white: "#ffffff"
  whisper-gray: "#f7f7f1"
  border-fog: "#dcdcd4"
  text-graphite: "#404040"
  muted-black: "#111111"
  icon-gray: "#7f7f7f"
  action-blue: "#00affa"
  deep-violet: "#1e2554"
  accent-lilac: "#2c2a6c"
  vivid-orange: "#ff5d43"
  bright-teal: "#38dede"
  neon-violet: "#9164fa"
  soft-rose: "#f8b3b8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.2
spacing:
  cardRadius: 3px
  buttonRadius: 3px
  elementGap: 10px
  sectionGap: 60px
components:
  primary-outlined-button:
    role: Call to action button for key interactive elements.
  filled-navigation-button:
    role: High-contrast action in the header, always visible.
  header-navigation-link:
    role: Standard navigation item for primary site sections.
  feature-card:
    role: Display individual features or content blocks.
  avatar-circular-element:
    role: User profile images or circular decorative components.
  input-field-focus:
    role: Visual indicator for active input fields.
---

## Overview

**North Star:** Architectural blueprint on white marble; precise organization within a serene, bright expanse.

Dropmark employs a clean, organized visual style featuring a bright, expansive canvas and structural components delineated by subtle borders and minimal elevation. A vibrant, functional blue serves as the primary accent, providing clear focal points against an otherwise muted palette of grays and off-whites. Typography is confident and direct, utilizing both proportional and tabular figures for clarity. The overall impression is one of efficiency and understated reliability.

### Do's

- Use Action Blue (#00affa) exclusively for primary interactive elements like outlined button borders and text links, not as a background color for filled buttons.
- Prioritize Whisper Gray (#f7f7f1) and Canvas White (#ffffff) for dominant backgrounds to maintain a light, organized visual theme.
- Apply a consistent 3px border-radius to all interactive components like buttons and cards to ensure a unified softness.
- Structure page sections with a 60px vertical gap to create clear visual separation between content blocks.
- Use Text Graphite (#404040) for primary text and headings to ensure readability against light backgrounds.
- Employ `DropmarkRealText` with 'lnum' feature for all body and general interface text for consistent number alignment.
- Apply `DropmarkRealHead` with 'lnum', 'tnum' features for all headings to ensure aligned tabular figures where numbers are prominent.

### Don'ts

- Avoid using the decorative illustration colors (Deep Violet, Vivid Orange, etc.) for UI elements, reserving them strictly for graphics and illustrations.
- Do not introduce strong drop shadows; rely on subtle borders, inset shadows, and background color shifts for depth.
- Do not use letter-spacing on headings or body text; maintain the 'normal' value for all typography to preserve legibility.
- Avoid deviating from the 3px radius for general component corners; only use 60px for explicitly circular elements.
- Do not use dark backgrounds for major page sections; maintain the light theme with Whisper Gray and Canvas White.
- Do not exceed a page maximum width of 1200px for main content to keep the layout contained and readable.
- Avoid creating filled buttons with Action Blue (#00affa) as the background; its primary role is for outlined elements and links.

### Layout

The page adheres to a max-width of 1200px, centering primary content blocks. The hero section features a prominent headline centered over descriptive text and two distinct CTA buttons, with a large, colorful illustration occupying the lower half, hinting at the product's visual nature. Sections below often alternate between multi-column layouts, such as three-column grids for feature highlights, and stacked centered blocks. Vertical rhythm is established through consistent 60px section gaps. The navigation is a sticky top bar with text links and a distinct filled 'Sign up' button, keeping essential controls always accessible.

### Imagery

The site uses a combination of abstract, geometric illustrations and product-focused graphics. Illustrations are dimensional and colorful, using the full brand/accent color palette (Deep Violet, Vivid Orange, Bright Teal, Neon Violet, Soft Rose) to create dynamic, overlapping scenes that explain features. They serve a decorative and explanatory role, often positioned alongside text. Icons are filled, appearing in brand colors where applicable (e.g., Bright Teal). The overall density of imagery is balanced, supporting the textual content without overwhelming it.

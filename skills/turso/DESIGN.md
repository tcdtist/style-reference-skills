---
version: alpha
name: Turso
description: Turso's design evokes a sophisticated 'hacker aesthetic' — dark, precise, and highly functional code tooling. The interplay of a deep, almost black background with a singular, vibrant teal accent color (#4ff7d1) creates an electric tension. Sharp rectangular panels with subtle, near-black borders provide structure, contrasting with the occasional pill-shaped button that introduces a touch of approachable modernity. Text hierarchy is established through font weight and size variations, not color, with the vivid teal reserved for key calls to action and distinguishing elements.
colors:
  deep-space: "#0d1318"
  hacker-teal: "#4ff7d1"
  void-black: "#000000"
  cloud-gray: "#ffffff"
  slate-border: "#283945"
  charcoal-surface: "#162129"
  whisper-gray: "#86898c"
  subtle-gray: "#b6b8ba"
  electric-violet: "#d946ef"
  neon-pink: "#a21caf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.75
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.78
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.63
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.33
    letterSpacing: -0.75px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.8px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  sectionGap: 40px
components:
  button-group-primary-secondary-badge:
    role: 
  product-cards-turso-turso-cloud:
    role: 
  announcement-banner-hero-badge:
    role: 
  primary-call-to-action-button:
    role: Main interactive button
  secondary-ghost-button:
    role: Alternative or less prominent action
  badge-button-violet:
    role: Small, emphasized action or status label
  badge-button-transparent:
    role: Small, less emphasized action or status label
  dark-card-panel:
    role: Content container for features or information blocks
  top-navigation-link:
    role: Primary navigation item in header
  section-highlight-badge:
    role: Small, descriptive badge for section status or category
  secondary-accent-card:
    role: Distinguishes a specific offer or product within a grid
---

## Overview

**North Star:** Electric Teal Command Center. A dark, digital workspace where a single vibrant hue highlights critical actions amid a field of deep shadows.

Turso's design evokes a sophisticated 'hacker aesthetic' — dark, precise, and highly functional code tooling. The interplay of a deep, almost black background with a singular, vibrant teal accent color (#4ff7d1) creates an electric tension. Sharp rectangular panels with subtle, near-black borders provide structure, contrasting with the occasional pill-shaped button that introduces a touch of approachable modernity. Text hierarchy is established through font weight and size variations, not color, with the vivid teal reserved for key calls to action and distinguishing elements.

### Do's

- Prioritize Hacker Teal (#4ff7d1) for primary calls to action, headlines, and key interactive elements to draw the eye.
- Maintain a deep, dark aesthetic using Deep Space (#0d1318) for backgrounds and Charcoal Surface (#162129) for secondary panels.
- Use Cloud Gray (#ffffff) for primary text on dark backgrounds, ensuring high contrast and legibility.
- Apply 12px radius to most structural components like cards and panels for a consistent, subtle modern edge.
- Implement 9999px radius for all primary and secondary buttons, along with small badges, to create distinct interaction points.
- Employ the Inter font family, varying weights (400-800) to establish clear typographic hierarchy without introducing new typefaces.
- Use Slate Border (#283945) for all component borders to subtly define elements against the dark background without harshness.

### Don'ts

- Avoid introducing additional saturated colors that would dilute the impact of Hacker Teal (#4ff7d1) and Electric Violet (#d946ef).
- Don't use overly rounded corners (e.g. 24px) on large content cards; reserve that for specific, small elements like nav items.
- Do not use shadows for elevation; rely on border colors, background tints, and spacing to define hierarchy and depth.
- Refrain from using light backgrounds; the entire system is built for a dark interface, and light elements would disrupt the aesthetic.
- Do not use generic system fonts; 'Inter' is critical to the site's modern, technical tone.
- Avoid dense information blocks; use generous spacing (40px padding, 8px-16px element gaps) for comfortable readability on deep backgrounds.
- Do not use small font sizes (below 14px for body content), as it compromises readability on the dark theme.

### Layout

The layout adheres to a max-width, center-aligned model for primary content, though the hero section spans full-bleed with its dark background. The initial hero features a large, centered headline and subtext, with action buttons below. Sections maintain generous vertical spacing (around 40px), creating a breathable rhythm. Content often appears in a simple stacked fashion or within 2-column grids, frequently with a text block on one side and a supporting visual element or code snippet on the other. Card grids (2 per row in larger sections) are used for feature showcases, maintaining consistent interior padding and border treatments. The navigation is a sticky top bar, providing persistent access to links and CTAs. The overall Impression is one of structured organization, allowing the dark background and accent colors to guide the eye.

### Imagery

The site favors technical illustrations and product-focused iconography over photography or complex 3D renders. Illustrations, when present, are often abstract geometric shapes or line art in Hacker Teal or subtle grayscale, serving a decorative or conceptual role without being visually heavy. Icons are predominantly clean, outlined, and monochromatic (Cloud Gray or Hacker Teal), used functionally to accompany text or denote actions. There's an emphasis on product code snippets and logos of partnered technologies, serving as social proof and contextual information rather than decorative elements. Visuals are contained and typically full-width within the content columns, maintaining the structured, code-like aesthetic. The density is moderate to high, with visuals used strategically to break up text and convey functionality.

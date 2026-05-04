---
version: alpha
name: Lovable
description: Lovable’s design system conveys a dynamic, creative energy using a predominantly light theme accented by a striking, evolving gradient for hero sections and interactive prompts. Typography is clean and compact, emphasizing content clarity within a contained layout. UI elements are subtly refined with medium border radii and minimal, soft shadows, creating an approachable yet modern aesthetic. Color manifests as functional cues and atmospheric backdrops, rather than heavy branding.
colors:
  canvas-white: "#fcfbf8"
  text-primary: "#1c1c1c"
  border-light: "#eceae4"
  text-secondary: "#5f5f5d"
  text-ghost: "#2e2e2d"
  accent-gradient: "#1f55f1"
  text-callout: "#030303"
  focus-border: "#c5c4c2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.3px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.38
    letterSpacing: -0.5px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.25
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1.1
    letterSpacing: -1.5px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 6px
  sectionGap: 32px
components:
  primary-navigation-link:
    role: Top navigation items and footer links that guide users through the site structure.
  ghost-header-button:
    role: Call to action buttons in the header, encouraging login or getting started.
  pill-accent-button:
    role: Small, informational buttons or tags with a rounded 'pill' shape.
  hero-input-field:
    role: Prominent text input for primary action on the hero section.
  feature-card:
    role: Displays featured content or product examples in a grid layout.
  content-block-card:
    role: Container for descriptive content, like feature explanations or testimonials.
---

## Overview

**North Star:** Shifting gradient nebula

Lovable’s design system conveys a dynamic, creative energy using a predominantly light theme accented by a striking, evolving gradient for hero sections and interactive prompts. Typography is clean and compact, emphasizing content clarity within a contained layout. UI elements are subtly refined with medium border radii and minimal, soft shadows, creating an approachable yet modern aesthetic. Color manifests as functional cues and atmospheric backdrops, rather than heavy branding.

### Do's

- Prioritize Canvas White (#fcfbf8) for backgrounds and main surfaces, maintaining a bright, open aesthetic.
- Use Text Primary (#1c1c1c) for all primary text content and main navigational elements.
- Apply Camera Plain Variable with a global letter-spacing of -0.0250em for a compact typographic feel.
- Always use a 9999px border-radius for 'pill' shaped buttons and tags.
- Reserve the Accent Gradient for hero sections or significant atmospheric backgrounds to highlight key content.
- Maintain a clear visual hierarchy by differentiating text sizes and weights, making key information bold without sacrificing the compact feel.
- Use a default element spacing of 6px to create consistent but dense information blocks.

### Don'ts

- Avoid applying strong box-shadows; prefer minimal elevation with soft inset shadows or no shadows to maintain a flat, modern surface design.
- Do not introduce new saturated accent colors outside of the defined Accent Gradient, as the system relies on a predominantly neutral palette.
- Refrain from using excessively large padding or margins that break the compact information density of the layout.
- Do not deviate from the specified border radii; 16px for cards, 8px for buttons, and 28px for prominent input fields are design signatures.
- Avoid decorative imagery that competes with the subtle UI; visuals should support content without overwhelming it.
- Do not use generic system fonts; always implement Camera Plain Variable for brand consistency.
- Avoid heavy borders; prefer the subtle Border Light (#eceae4) or no border to keep elements lightweight.

### Layout

The page primarily follows a max-width contained layout set at 1280px, with content centered. The hero section, however, breaks this pattern by featuring a full-bleed, vibrant gradient background with a centered headline and interactive input field. Subsequent sections typically alternate between a clear Canvas White (#fcfbf8) background and slightly off-white (Canvas White equivalent as the main page canvas). Content is arranged in flexible patterns, including centered text stacks, and multi-column grids for feature lists (e.g., text adjacent to a blank area) and template showcases (3-column card grid). Vertical spacing between sections is generally consistent with a 32px section gap.

### Imagery

Imagery primarily consists of contained product screenshots and template previews, often presented within rounded rectangles. There's also use of abstract gradients as backgrounds. Photography is absent from the core UI, deferring to the colorful 'Accent Gradient' for visual flair. Icons are minimal, either filled or outlined, appearing primarily in a monochromatic Text Primary or Text Secondary color, without multicolor applications.

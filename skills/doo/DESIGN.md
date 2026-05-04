---
version: alpha
name: Doo
description: Doo presents a clean, productivity-focused interface with an emphasis on spacious layouts and subtle interactivity. Its visual identity is built on high-contrast typography against a primarily white canvas, accented by soft, rounded cards and a single, deep violet for primary actions. The design minimizes visual clutter, using thin borders and ghost-like elements to define structure, allowing content to take center stage.
colors:
  canvas-white: "#ffffff"
  subtle-gray: "#f7f7f7"
  border-fog: "#edeef3"
  text-primary: "#383938"
  text-secondary: "#6e6d7a"
  shadow-ink: "#111111"
  action-violet: "#5e45a2"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
    letterSpacing: 0.13px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: 0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.2
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 65px
    lineHeight: 1
    letterSpacing: -0.8px
spacing:
  cardRadius: 30px
  buttonRadius: 39px
  elementGap: 20px
  sectionGap: 187px
components:
  primary-action-button:
    role: Filled button
  ghost-navigation-link:
    role: Primary navigation item, text-based
  default-content-card:
    role: Standard container for information
  minimal-card:
    role: Container without explicit padding
  accent-card:
    role: Card with a light background tint
  muted-text-badge:
    role: Small text label
---

## Overview

**North Star:** White Canvas Productivity

Doo presents a clean, productivity-focused interface with an emphasis on spacious layouts and subtle interactivity. Its visual identity is built on high-contrast typography against a primarily white canvas, accented by soft, rounded cards and a single, deep violet for primary actions. The design minimizes visual clutter, using thin borders and ghost-like elements to define structure, allowing content to take center stage.

### Do's

- Maintain a spacious layout, ensuring a minimum sectionGap of 187px between major content blocks.
- Use Avenir Next, weight 400 for body text and weight 600 for headings, adhering to the defined type scale and letter-spacing values to maintain visual lightness.
- Apply Canvas White (#ffffff) as the dominant background for body and primary surfaces, creating a bright, uncluttered feel.
- Round all interactive elements like buttons and input fields with a 39px border-radius.
- Ensure all cards use a 30px border-radius and either Subtle Gray (#f7f7f7) or Canvas White (#ffffff) backgrounds.
- Define UI hierarchy using subtle distinctions: Text Primary (#383938) for main content, Text Secondary (#6e6d7a) for supportive details and navigation, and Border Fog (#edeef3) for minimal outlines.
- Reserve Action Violet (#5e45a2) exclusively for primary calls to action, active states, and elements that require immediate user interaction.

### Don'ts

- Avoid heavy shadows or strong gradients; the interface should remain largely flat and airy.
- Do not introduce new typefaces; rely solely on Avenir Next for consistency in brand voice.
- Refrain from using saturated colors other than Action Violet, particularly for backgrounds or large areas.
- Do not use box-shadow for elevation; rely on background color changes and subtle borders for surface distinction.
- Avoid dense information blocks; instead, break content into digestible sections with generous padding and clear visual separation.
- Do not deviate from the defined border-radius values of 39px for buttons and 30px for cards; this is a core aspect of the brand's friendly professional aesthetic.
- Never use generic system link blue (#0000ee) for text links; use Text Secondary (#6e6d7a).

### Layout

The page primarily uses a max-width 1200px centered layout for content, sitting on a full-bleed white background. The hero section is characterized by a centered dominant headline and subtext, followed by a primary action button. Subsequent sections maintain consistent vertical spacing (approx. 187px sectionGap) and often feature large product screenshots or mockups that break the max-width constraint, extending closer to the edge or being centrally placed. Content is arranged in alternating visual rhythm, often implying a text-left/visual-right pattern, with prominent product visuals. Navigation is a minimal top bar with subtly styled links and the brand logo, indicating a focus on content over complex navigation structures.

### Imagery

This site prominently features product screenshots embedded within devices (MacBooks, iPhones, Apple Watches) on pristine white backgrounds. The screenshots are presented cleanly, often angled or slightly overlapping to create visual interest while maintaining focus on the app interface itself. There are no lifestyle photos or abstract illustrations. Iconography (visible in product screenshots) appears to be outlined or ghost-style with a thin stroke. Imagery serves to showcase the product's functionality and visual design directly, demonstrating the app in its native environments.

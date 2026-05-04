---
version: alpha
name: Riptype Foundry
description: Riptype's design system combines a deep, almost black, background with crisp white typography and sparse, vivid chartreuse accents, creating a high-contrast, edgy aesthetic. Components are compact and minimally decorated, favoring subtle borders over heavy fills or shadows. The overall impression is technical and precise, reflecting its typographic focus. Subtle motion and interaction states provide a responsive, engaging user experience.
colors:
  midnight-ink: "#121212"
  obsidian: "#292929"
  smoke-glass: "#18181866"
  frost: "#ffffff"
  pale-ash: "#d0d0d0"
  steel-grey: "#a0a0a0"
  charger-green: "#d9ff00"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.58
    letterSpacing: -0.18px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.26px
  heading:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 0.95
    letterSpacing: 0.35px
spacing:
  buttonRadius: 4px
  elementGap: 6px
  sectionGap: 48px
components:
  pill-accent-button:
    role: Primary action button, often for CTAs or key navigation.
  standard-button:
    role: Secondary action button for general interactivity.
  menu-item-card:
    role: Interactive list items, used in navigational menus.
---

## Overview

**North Star:** Deep Slate Terminal

Riptype's design system combines a deep, almost black, background with crisp white typography and sparse, vivid chartreuse accents, creating a high-contrast, edgy aesthetic. Components are compact and minimally decorated, favoring subtle borders over heavy fills or shadows. The overall impression is technical and precise, reflecting its typographic focus. Subtle motion and interaction states provide a responsive, engaging user experience.

### Do's

- Use `Midnight Ink` (#121212) as the dominant background color for all page sections.
- Prioritize `Frost` (#ffffff) for primary text and `Pale Ash` (#d0d0d0) for secondary text to maintain clear hierarchy against dark backgrounds.
- Apply `Charger Green` (#d9ff00) exclusively for highly interactive elements, text, and icons to draw attention and indicate action.
- Construct buttons with either `144px` (pill) or `4px` (standard) border radius, avoiding other radius values for interactive elements.
- Implement `6px` as the base unit for vertical and horizontal spacing between elements.
- Utilize the `Office` typeface across all headings and body text, adhering to the specified weights and precise letter-spacing values.

### Don'ts

- Avoid introducing additional saturated colors; maintain the high-contrast `Charger Green` (#d9ff00) as the sole vivid accent.
- Do not use heavy shadows or gradients for elevation; rely on subtle background opacity changes and thin borders.
- Do not create components with border radii other than `4px` or `144px` for interactive elements.
- Do not vary from the established `Midnight Ink` (#121212) and `Obsidian` (#292929) for background surfaces.
- Avoid large, uncontained imagery; all visuals should either be full-bleed with strong composition or tightly integrated into structured sections.

### Layout

The page structure favors a max-width contained layout at `285px` for content, creating a focused, almost terminal-like experience. The hero section is full-bleed, often with a large, striking graphic or textural background and centered, bold typography. Subsequent sections maintain consistent vertical rhythm with minimal dividers, primarily using `6px` element gaps. The overall content arrangement alternates between left-aligned text blocks, centered feature displays, and grid-like presentations for items like font samples. Navigation is present as a minimal top bar and integrated sidebar list.

### Imagery

This system primarily uses bold, high-contrast, full-bleed graphic imagery and abstract product shots, often with a stark black backdrop. Photography, when present, features tightly cropped product details with high textural fidelity or stylized, almost conceptual images. Icons are minimalist, outlined, and monochromatic, often using `Frost` (#ffffff) or `Charger Green` (#d9ff00) for active states. The visual language favors an atmosphere of technical precision and artistic expression rather than lifestyle or extensive explanatory graphics. Imagery is heavy, commanding significant visual space.

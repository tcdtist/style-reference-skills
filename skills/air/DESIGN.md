---
version: alpha
name: Air
description: Air's design system evokes a digital canvas under an expansive, almost dreamlike sky. It marries a high-contrast dark text with clean, slightly rounded white and muted gray surfaces. Typography mixes confident, weighty statements with lighter, more fluid headings, creating a dynamic yet composed visual hierarchy. Accents are sparingly applied but impactful, often appearing as subtle outlines or functional indicators, maintaining an overall atmosphere of refined utility.
colors:
  cloud-canvas: "#ffffff"
  midnight-ink: "#1b1b1b"
  vapor-gray: "#f5f5f5"
  charcoal-void: "#000000"
  sky-blue: "#426188"
  vivid-azure: "#2b7fff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.1
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 259px
    lineHeight: 0.85
spacing:
  cardRadius: 14px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 48px
components:
  ghost-navigation-button:
    role: Primary navigation and subtle calls to action.
  outlined-action-button:
    role: Primary calls to action for interactive elements.
  basic-card:
    role: Content grouping for informational blocks with minimal visual adornment.
  elevated-content-card:
    role: Card for featuring key content sections.
  hero-image-card:
    role: Large, immersive card for images or visual content.
  standard-input-field:
    role: User entry fields for forms.
---

## Overview

**North Star:** Expansive sky, clean canvas.

Air's design system evokes a digital canvas under an expansive, almost dreamlike sky. It marries a high-contrast dark text with clean, slightly rounded white and muted gray surfaces. Typography mixes confident, weighty statements with lighter, more fluid headings, creating a dynamic yet composed visual hierarchy. Accents are sparingly applied but impactful, often appearing as subtle outlines or functional indicators, maintaining an overall atmosphere of refined utility.

### Do's

- Use 'Cloud Canvas' (#ffffff) for all main page backgrounds and elevated card surfaces.
- Apply 'Midnight Ink' (#1b1b1b) for primary text elements to ensure strong readability.
- Employ 'Control' font at 500 weight for all body text and common UI labels.
- Utilize 'Vivid Azure' (#2b7fff) exclusively for borders of primary outlined actions and active link states.
- Round corners with 8px radius for all buttons and navigation items.
- Implement a base element gap of 8px (2 base units) between most UI elements for consistent comfortable density.
- Use 'Control Compressed' at 259px size and 900 weight for high-impact display headlines to command attention.

### Don'ts

- Do not use saturated brand colors (#426188, #2b7fff) for large background areas or extensive text blocks.
- Avoid arbitrary border radii; stick to 4px for inputs, 8px for buttons, and 14px for significant cards.
- Do not introduce heavy drop shadows, as the system relies on subtle surface changes and crisp contrast for hierarchy.
- Refrain from using 'Charcoal Void' (#000000) for body text; reserve it for distinct headings or strong outlines.
- Do not deviate from the specified font families or weights for their intended roles to maintain typographic identity.
- Avoid tight spacing; maintain a minimum 8px element gap and 48px section gap for comfortable visual separation.
- Do not create filled primary buttons; the system emphasizes outlined chromatic actions with 'Vivid Azure' borders.

### Layout

The overarching page layout is full-bleed, using an atmospheric gradient background behind a centered content container for most sections. The hero features an expansive full-viewport background with large, centered marketing text. Section rhythm is marked by consistent vertical spacing of 48px, often with alternating background colors or distinct visual treatments separating blocks. Content arranges into clear, often two-column text-left/visual-right sections, with features presented in grid-like structures featuring cards. Navigation is a sticky top bar with ghost buttons, transitioning to outlined buttons or color changes on interaction, maintaining a relatively minimal profile.

### Imagery

The site uses a mix of abstract 3D renders with soft, atmospheric gradients for hero sections, and clean, contained product screenshots for demonstrating functionality. Photography is minimal, if present. Icons are primarily outlined or ghost-style with a moderate stroke weight, often in 'Midnight Ink' or 'Cloud Canvas' to match the overall monochrome UI, with 'Vivid Azure' accents for interactive states. Imagery is generally contained within defined areas or sections, serving both atmospheric and explanatory roles without excessive layering or full-bleed treatment outside the hero.

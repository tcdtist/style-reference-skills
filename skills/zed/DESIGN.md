---
version: alpha
name: Zed
description: Zed's visual design evokes the quiet confidence of precision engineering, much like a well-crafted mechanical keyboard. A primary palette of cool blues and grays, accented by vibrant UI indicators, creates a focused, high-performance atmosphere. The interplay of crisp, small typography and generous negative space ensures clarity, allowing the powerful functionality of the editor to take center stage.
colors:
  midnight-blue: "#1348dc"
  sky-blue: "#2b7fff"
  deep-harbor: "#464b57"
  iceberg-blue: "#8ec5ff"
  pale-arctic: "#bedbff"
  cerulean-haze: "#74ade8"
  carbon-gray: "#5d636f"
  pine-green: "#a1c181"
  rosewood-red: "#d07277"
  golden-ochre: "#dec184"
  page-background: "#e5e7eb"
  off-black-text: "#3a3d43"
  medium-gray: "#b2b5bb"
  light-gray-border: "#cccfd3"
  white-surface: "#ffffff"
  dark-editor-surface: "#282c33"
  input-background: "#f4f4f2"
  dark-modal-background: "#2f343"
  accent-blue-shadow: "#053794"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.1
    letterSpacing: -0.25px
  heading:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.25
    letterSpacing: -0.52px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -0.96px
spacing:
  cardRadius: 2px
  buttonRadius: 2px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  feature-cards:
    role: 
  stat-block-open-source-metrics:
    role: 
  primary-navigation-link:
    role: Interactive element in the main header.
  secondary-ghost-button:
    role: Subtle call to action or supplementary action.
  brand-secondary-button-light:
    role: Prominent but not primary action.
  dark-code-block-button:
    role: Interactive elements within the dark-themed code editor preview.
  navigation-context-button-dark-text:
    role: Navigation or contextual actions within a darker UI section.
  code-input-field:
    role: Used for user input in code-related contexts.
  feature-card:
    role: Showcasing individual product features.
  code-editor-frame:
    role: Visual container for the embedded code editor preview.
---

## Overview

**North Star:** precision-engineered dark mode text editor

Zed's visual design evokes the quiet confidence of precision engineering, much like a well-crafted mechanical keyboard. A primary palette of cool blues and grays, accented by vibrant UI indicators, creates a focused, high-performance atmosphere. The interplay of crisp, small typography and generous negative space ensures clarity, allowing the powerful functionality of the editor to take center stage.

### Do's

- Use Midnight Blue (#1348dc) for all primary calls to action, prominent links, and main interactive button states.
- Employ the 2px border-radius consistently across all interactive elements, cards, and image containers, giving a subtle but unified crispness.
- Maintain a clear visual hierarchy by utilizing Plex Serif weight 340 for major headings and Writer weight 400 for all body text.
- Apply specific letter-spacing: -0.0250em for Writer font to optimize readability for dense UI, and 0.0500em for Zed Mono to distinguish code/technical text.
- Use Page Background (#e5e7eb) as the canvas for most content sections, ensuring a clean and bright base.
- Incorporate subtle inset box-shadows (e.g., rgba(111, 123, 144, 0.1) 0px -2px 0px 0px inset) on interactive elements or cards to create depth without heavy drop shadows.
- Limit the use of saturated colors like Pine Green (#a1c181), Rosewood Red (#d07277), and Golden Ochre (#dec184) to semantic indicators or specific highlights to maximize their impact.

### Don'ts

- Do not introduce strong drop shadows; rely on the subtle inset shadows or lighter elevated box-shadows.
- Avoid large, ornate typography. The design prioritizes small, precise text with generous line heights over oversized headlines.
- Do not use generic system fonts where custom fonts Writer, Zed Mono, or Plex Serif are specified, as their unique letter-spacing and weights are crucial to the brand identity.
- Refrain from using heavily saturated background colors for content sections; stick to the neutral scale and slight blue tints.
- Do not apply rounded corners greater than 2px to general UI elements, as this contradicts the overall crisp, engineered aesthetic.
- Avoid cluttering layouts with excessive elements; maintain generous elementGap (6px, 10px, 12px) and sectionGap (64px) for clear information separation.
- Do not use more than two saturated brand colors prominently in any single view, to keep the focus on clarity and code editor aesthetic.

### Layout

The page primarily uses a max-width contained layout, approximately 1200px, centered on a light Page Background (#e5e7eb). The hero section is centered with a prominent headline and call-to-action buttons. Content sections often alternate between wide, full-width blocks and narrower, centered content divisions. There's a consistent vertical rhythm, with sections separated by significant sectionGap (64px). Text-heavy sections frequently use a 2-column layout or a single centered column. Feature descriptions often employ a 3-column grid for overview. Embedded code editor previews are typically wide, visually striking blocks. The navigation is a sticky top bar with clearly defined interactive elements.

### Imagery

The site's visual language is a blend of product screenshots, user avatars, and abstract, geometric line-art illustrations. Product screenshots are typically high-fidelity captures of the Zed editor in a dark mode theme, shown in context or isolated as compelling visuals. They are often full-bleed or centrally placed, occupying significant visual real estate to showcase the UI. User avatars are small, circular, and appear in grids to convey community and social proof. Abstract illustrations are sparse, utilize thin linework, and soft blue fills (e.g., Sky Blue #2b7fff), serving a decorative atmospheric role without distracting from the UI. There's a notable absence of lifestyle photography. The overall density is balanced, with imagery serving as key focal points amidst text-heavy sections, acting as explanatory content and product showcase.

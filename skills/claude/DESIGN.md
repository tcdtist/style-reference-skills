---
version: alpha
name: Claude
description: This design system evokes the quiet confidence of a well-edited scientific journal, balancing approachability with precise execution. Creamy off-white backgrounds provide a soft canvas, while crisp dark gray text ensures legibility. The understated typography, particularly the lighter weights of Anthropic Serif for headings, communicates authority through clarity rather than shouting, reminiscent of an academic paper. Subtle accent colors appear mostly within the custom Anthropic icons, suggesting a sophisticated, self-contained aesthetic with minimal external decoration.
colors:
  vellum-white: "#faf9f5"
  ink-black: "#141413"
  onyx: "#1f1e1d"
  graphite: "#3d3d3a"
  dusty-gray: "#73726c"
  stone: "#9c9a92"
  parchment: "#dedcd1"
  snow-white: "#ffffff"
  pale-azure: "#ccdbe8"
  terra-cotta: "#d97757"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.2
spacing:
  cardRadius: 9.6px
  buttonRadius: 9.6px
  elementGap: 8-24px
  sectionGap: 32-40px
components:
  sign-in-form-card:
    role: 
  pricing-cards:
    role: 
  chat-cowork-toggle-selector:
    role: 
  primary-navigation-button:
    role: Main navigation items in the header.
  secondary-button:
    role: Buttons for less prominent actions, often in a secondary role.
  primary-cta-button:
    role: Key interaction buttons.
  destructive-prominent-button:
    role: Buttons for actions demanding attention or within prominent fields.
  call-to-action-dark-filled:
    role: Main call to action, used for sign-ups or primary workflows.
  form-input-field:
    role: Standard fields for user input.
  card-standard:
    role: Content containers for features, pricing tiers, or grouped information.
  toggle-button-group:
    role: Used for selecting between distinct options.
  inline-navigation-link:
    role: Standard text links within body content or footers.
  icon-button:
    role: Buttons primarily identified by an icon.
---

## Overview

**North Star:** Academic Journal on Vellum — a soft, tactile precision.

This design system evokes the quiet confidence of a well-edited scientific journal, balancing approachability with precise execution. Creamy off-white backgrounds provide a soft canvas, while crisp dark gray text ensures legibility. The understated typography, particularly the lighter weights of Anthropic Serif for headings, communicates authority through clarity rather than shouting, reminiscent of an academic paper. Subtle accent colors appear mostly within the custom Anthropic icons, suggesting a sophisticated, self-contained aesthetic with minimal external decoration.

### Do's

- Use Vellum White (#faf9f5) as the default background for all page sections and main content cards.
- Apply 9.6px border-radius to all interactive elements, including buttons, input fields, and standard cards, for a consistent soft-edged feel.
- Set primary headings (56px) with Anthropic Serif weight 330 to achieve an articulate, understated voice.
- Ensure all body text uses Anthropic Sans weight 400 to maintain high readability across the interface.
- Utilize Ink Black (#141413) for primary text and CTA button backgrounds to ensure strong contrast against Vellum White backgrounds.
- Maintain a comfortable information density using an elementGap of 8-24px between smaller components, and sectionGap of 32-40px between major sections.

### Don'ts

- Do not use dark, harsh shadows; employ subtle borders like #dedcd1 or rgba(31,30,29,0.15) for depth and separation.
- Avoid overly vibrant or saturated color accents outside of the very specific design system-defined accents like Terra Cotta (#d97757).
- Never use bolding (weights above 500) for headlines; the system relies on lighter weights for stylistic authority.
- Refrain from using sharp, 0px border radii on buttons or cards, except for specific navigation or list item elements that require a more contained appearance.
- Do not introduce new font families; strictly adhere to Anthropic Sans and Anthropic Serif to maintain brand consistency.

### Layout

The layout primarily uses a max-width contained model (approximately 1200px) with content centered on the page. The hero section features a split layout: a large, centered headline on the left and an interactive UI simulation on the right. Content sections generally employ a consistent vertical spacing of 32-40px, creating a spacious feel. Feature and pricing sections often use a 3-column card grid, with content stacked vertically within each card. The navigation is a sticky top bar, with primary links left-aligned and 'Contact sales' and 'Try Claude' buttons right-aligned. The overall rhythm is clean, balanced, and information-dense without feeling cramped.

### Imagery

The site uses a 'no imagery, pure UI' approach for its primary content areas. Decorative visuals consist purely of custom, outlined icons with occasional accents of Terra Cotta (#d97757) within the outlines. These icons are abstract and symbolic, serving to clarify features or concepts rather than adding decorative flair. This minimalist approach places full emphasis on the elegant typography and interaction design.

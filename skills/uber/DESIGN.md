---
version: alpha
name: Uber
description: Uber's design system feels like a precise, functional transport UI on an expansive, crisp canvas. It prioritizes direct interaction and clear information with high contrast black-on-white text. Distinctive elements include capsule-shaped interactive components and subtle, almost invisible, input fields, focusing user attention on action over aesthetics. The only chromatic color, a muted blue-green, appears sparingly, adding a touch of sophisticated calm to an otherwise stark, monochromatic palette.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  whisper-gray: "#f6f6f6"
  charcoal-text: "#333333"
  input-border-gray: "#767676"
  subtle-silver: "#afafaf"
  slate-shadow: "#d6d6d6"
  lagoon-mist: "#9dcdd6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.25
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.22
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  display:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.23
  display-lg:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1.4
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  elementGap: 4-24px
  sectionGap: 48-80px
components:
  ride-booking-form:
    role: 
  suggestions-feature-cards:
    role: 
  log-in-account-cta:
    role: 
  primary-action-button:
    role: Main call to action
  capsule-button:
    role: Compact action button
  ghost-capsule-button:
    role: Secondary interaction
  input-field-text:
    role: User input for text
  navigation-link-primary:
    role: Top-level navigation items
  feature-card:
    role: Showcasing services
---

## Overview

**North Star:** Crisp monochrome canvas

Uber's design system feels like a precise, functional transport UI on an expansive, crisp canvas. It prioritizes direct interaction and clear information with high contrast black-on-white text. Distinctive elements include capsule-shaped interactive components and subtle, almost invisible, input fields, focusing user attention on action over aesthetics. The only chromatic color, a muted blue-green, appears sparingly, adding a touch of sophisticated calm to an otherwise stark, monochromatic palette.

### Do's

- Prioritize Midnight Ink (#000000) for primary CTAs and critical text, ensuring high contrast against Canvas White (#ffffff) or Whisper Gray (#f6f6f6) backgrounds.
- Apply 999px border-radius to all small, compact interactive elements for a distinct capsule aesthetic, like navigation buttons.
- Use 8px border-radius for larger action buttons and cards to create a softer, yet still defined, rectangular shape.
- Employ UberMove (custom font) for all headlines and major calls to action, utilizing its 400 and 700 weights to establish hierarchy.
- Maintain a clear visual hierarchy with Midnight Ink for headings, Charcoal Text (#333333) for body text, and Subtle Silver (#afafaf) for secondary descriptive text.
- Use Lagoon Mist (#9dcdd6) as the sole chromatic accent, reserving it for decorative elements or subtle background effects to maintain monochromatic dominance.
- Place input fields on Canvas White backgrounds with minimal styling, relying on a subtle Input Border Gray (#767676) bottom border to indicate interactive areas.

### Don'ts

- Do not introduce additional saturated colors; maintain the monochromatic base with Lagoon Mist (#9dcdd6) as the only accent.
- Avoid excessive use of box shadows; stick to the subtle Slate Shadow (#d6d6d6) only when slight elevation is necessary for buttons.
- Do not use generic system fonts for headlines or core UI elements; leverage the custom UberMove and UberMoveText families to preserve brand identity.
- Avoid complex gradients or patterns; surfaces should remain flat and clean, with a clear distinction between background colors.
- Do not add strong borders to primary input fields; preserve the minimal, almost borderless aesthetic with only a bottom bar.
- Refrain from drastically altering button padding; stick to the established 14px vertical 25px horizontal for standard buttons and 10px vertical 12px horizontal for capsule buttons.
- Do not use letter spacing adjustments; all text should maintain normal letter spacing for a clean and uncluttered appearance.

### Layout

The layout is primarily centered and contained within an implied max-width, with generous vertical spacing between sections. The hero section features a prominent headline and interactive form on the left, balanced by a large, contained illustration on the right. Subsequent sections often alternate between text-left/visual-right compositions and centered content stacks. Small feature blocks are arranged in a 3-column grid. The footer is full-bleed black, contrasting with the predominantly white main content area. Navigation is a sticky top bar with minimal elements, including capsule-style buttons.

### Imagery

The site uses a mix of bespoke, blocky illustrations and stylized product icons. Illustrations are semi-flat, with distinct geometric shapes and limited color palettes, often featuring abstract figures or objects relevant to the service (e.g., luggage, vehicles, food). They are contained within defined sections rather than full-bleed, typically serving as explanatory or decorative visuals. Product icons are simplified, monochrome (Midnight Ink), and used to clarify features or services. The overall treatment is descriptive and clean, avoiding photography to maintain a uniform, branded visual language.

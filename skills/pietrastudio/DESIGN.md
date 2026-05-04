---
version: alpha
name: Pietrastudio
description: Pietra exudes a dynamic, clean, digital canvas aesthetic. Its visual system is built on a crisp white backdrop, punctuated by a vibrant, warm orange action color and muted, pastel gradients that provide visual interest and a sense of depth without overwhelming the UI. Typography is compact and understated, allowing the strong contrasts of the brand orange and deep charcoal text to command attention. Components tend towards soft, rounded shapes and subtle shadow effects, creating a friendly yet capable interface.
colors:
  canvas-white: "#ffffff"
  stone-grey: "#f8f6f2"
  midnight-ink: "#1f2026"
  ink-wash: "#141414"
  slate-text: "#6b6b6b"
  silver-link: "#c4c4c4"
  input-border-gray: "#e8e8ea"
  action-orange: "#ff5c3c"
  slightly-yellowed: "#fffbe7"
  amber-dot: "#f9e070"
  forest-green: "#57ad6a"
  lavender-sky-gradient: "#7d32f7"
  sunset-blush-gradient: "#e9aa4b"
  ocean-bloom-gradient: "#4865ff"
  emerald-coast-gradient: "#32cb8b"
  orchid-haze-gradient: "#f732ef"
  paper-tint-gradient: "#fddfe3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.57
    letterSpacing: -0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.57
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.57
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.2px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: -0.64px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -0.96px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
    letterSpacing: -1px
spacing:
  cardRadius: 12px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 120px
components:
  primary-filled-button:
    role: The main call-to-action button, signaling key interactions.
  secondary-filled-button-dark:
    role: Alternative action button, often for less critical actions.
  outline-ghost-button-light-text:
    role: Subtle button for secondary actions or links where a filled button is too heavy.
  outlined-ghost-button-yellow-accent:
    role: Contextual action button with a hint of accent color.
  default-card:
    role: General content container for features, information blocks.
  input-field:
    role: Standard user input fields.
  elevated-card-large-padding:
    role: Prominent content card, often for hero content or key features.
---

## Overview

**North Star:** Warm digital canvas

Pietra exudes a dynamic, clean, digital canvas aesthetic. Its visual system is built on a crisp white backdrop, punctuated by a vibrant, warm orange action color and muted, pastel gradients that provide visual interest and a sense of depth without overwhelming the UI. Typography is compact and understated, allowing the strong contrasts of the brand orange and deep charcoal text to command attention. Components tend towards soft, rounded shapes and subtle shadow effects, creating a friendly yet capable interface.

### Do's

- Use Labil Grotesk (or Inter) weight 400 at 16px with line height 1.57 and -0.01em letter spacing for all body copy to maintain legibility and a compact feel.
- Apply Canvas White #ffffff as the default background for the main canvas and most card surfaces.
- Reserve Action Orange #ff5c3c for primary call-to-action buttons and critical interactive elements, ensuring high visibility.
- Utilize a soft, subtle 'neuromorphic' shadow effect from rgba(221, 223, 228, 0.5) 5px 5px 24px 0px for cards and elevated components, paired with inset highlights for depth.
- Employ consistent 8px border radius for all buttons and input fields, with cards using 12px or 20px for a softer, more approachable aesthetic.
- Maintain a clear vertical rhythm using 24px spacing below secondary elements and 12px padding within cards.
- Use Attila-Bold (or Archivo Black) for headlines, especially at 48px with -0.02em letter spacing, to create a strong, condensed visual impact.

### Don'ts

- Avoid using highly saturated colors outside the defined brand and accent palette; maintain a largely achromatic UI.
- Do not use sharp, square corners on interactive elements; all buttons, inputs, and cards should have a minimum of 8px border radius.
- Refrain from dense text blocks without sufficient line height; ensure body text maintains a line height of 1.57 for readability.
- Do not introduce strong, dark shadows without the complementary light inset shadows; the visual system relies on a subtle, luminous depth.
- Avoid large variations in text letter spacing other than the defined tight values; excessive spacing breaks the compact typographic style.
- Do not use generic system fonts for prominent text; stick to Labil Grotesk or its substitutes for brand consistency.
- Do not add additional decorative borders or heavy outlines to elements; surfaces gain definition through subtle shadows and internal highlights.

### Layout

The page primarily uses a max-width contained layout, likely around 1200px, centered on the screen. The hero section often features a large, centered headline paired with a call-to-action and either an abstract gradient background or a product illustration. Section rhythm is driven by consistent vertical spacing, with a calculated section gap around 120px. Content is often arranged in symmetrical stacks or 2-column layouts for text and visuals, and recurring 3-column card grids for features. Components within sections follow a comfortable density with 8px element gaps. The navigation is a typical top bar, fixed or sticky, with the brand logo, navigation links, and primary action buttons.

### Imagery

The visual language for imagery is a mix of product illustrations and abstract, gradient-infused graphics. Illustrations are flat, often depicting stylized people interacting with UI elements, using a limited color palette that aligns with brand accents. Abstract graphics feature soft gradients (like Lavender Sky and Sunset Blush) that provide depth and a dreamy, digital feel without being overly complex. Icons are simple, outlined, often in black or a muted gray to maintain the clean UI. Imagery serves a decorative and explanatory role, providing context for the AI features and creating an inviting, modern atmosphere. Content is focused, with imagery often contained within cards or as background washes, rather than full-bleed photography. Density is balanced, with imagery breaking up text-heavy sections rather than dominating the page.

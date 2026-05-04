---
version: alpha
name: Relume
description: Relume uses a productivity-focused design vocabulary, built on a light, airy canvas with soft, rounded surfaces. Typography is compact and precise, maintaining clarity even at smaller scales. A vibrant purple serves as the primary accent, signaling interactive elements and brand presence against an otherwise subtle neutral palette. Components are lightweight with minimal elevation, emphasizing functionality over heavy visual ornamentation, often featuring a blend of pixel and percentage units for fluid responsiveness.
colors:
  canvas: "#f1f0ee"
  surface-white: "#ffffff"
  charcoal-text: "#161616"
  dark-neutral-text: "#222222"
  medium-gray-text: "#686868"
  light-border: "#e4e2df"
  primary-purple: "#6248ff"
  muted-purple: "#e0daff"
  light-purple-accent: "#b8adf5"
  system-black: "#000000"
  orange-to-purple-gradient: "#ff7448"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.4
    letterSpacing: 0px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: 0px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1.68px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1.1
    letterSpacing: -1.92px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 80px
components:
  ai-generate-input-bar:
    role: 
  feature-cards-plan-structure-conceptualise:
    role: 
  prompt-to-sitemap-feature-block:
    role: 
  primary-filled-button:
    role: Signaling primary actions and calls to action.
  secondary-outlined-button:
    role: Neutral, supportive actions.
  ghost-button:
    role: Less prominent actions, often within navigation or secondary interaction.
  feature-card:
    role: Presenting key features or content blocks.
  input-field:
    role: User input for forms.
  navigation-link:
    role: Primary navigation items.
  information-badge:
    role: Small informational tags or labels.
---

## Overview

**North Star:** AI-powered architectural blueprint

Relume uses a productivity-focused design vocabulary, built on a light, airy canvas with soft, rounded surfaces. Typography is compact and precise, maintaining clarity even at smaller scales. A vibrant purple serves as the primary accent, signaling interactive elements and brand presence against an otherwise subtle neutral palette. Components are lightweight with minimal elevation, emphasizing functionality over heavy visual ornamentation, often featuring a blend of pixel and percentage units for fluid responsiveness.

### Do's

- Prioritize Relume's Primary Purple (#6248ff) for all key interactive elements, including primary CTA buttons and critical icons.
- Use Charcoal Text (#161616) as the default for all headings and primary body content, ensuring high readability.
- Apply a consistent 16px border-radius to all card-like surfaces and larger content containers.
- Maintain a clear visual hierarchy using the typography scale, with Relative Faux 96px for display and Relative 56px for primary headlines, employing their specified negative letter-spacing.
- Employ the Canvas (#f1f0ee) for primary page backgrounds, contrasting with Surface White (#ffffff) for card and elevated component backgrounds.
- Use the predefined soft shadow (`rgba(0, 0, 0, 0.08) 0px 8px 10px -4px, rgba(0, 0, 0, 0.05) 0px 2px 10px 2px`) selectively for cards and key components to provide subtle depth.
- Structure page sections with a vertical spacing of 80px for ample breathing room.

### Don'ts

- Avoid introducing new primary colors; limit the palette to the defined brand and neutral tones.
- Do not use sharp 0px corners on interactive elements or cards, as the design uses rounded edges (8px or 16px) consistently.
- Do not vary letter-spacing for body text; apply negative tracking only to large headings and display text as specified.
- Avoid heavy or complex gradients for backgrounds of primary interactive elements; reserve them for decorative elements or specific brand moments.
- Do not use dark gray or black as primary background colors; the system is fundamentally light-themed.
- Do not overload pages with excessive box shadows, as the system relies on subtle elevation for focal elements.
- Avoid using default system fonts; always specify 'Relative' or 'Relative Faux' (with Inter as a substitute) for all text elements.

### Layout

The page model is contained within an implicit maximum width of approximately 1200px, centered on the screen. The hero section is a full-width experience, featuring a prominent centered headline over a dynamic, visually rich background. Subsequent sections follow a consistent rhythm of alternating blocks, often featuring two-column layouts with text and visuals side-by-side (text-left/image-right or vice versa). Feature lists and testimonials are presented in multi-column card grids. Vertical spacing between major sections is generous at 80px, creating a comfortable, uncrowded density. Navigation is a sticky top bar with a 'Start for free' button as the main CTA.

### Imagery

The imagery primarily consists of product screenshots and abstract digital illustrations. Product screenshots are typically tightly cropped and isolated against clean backgrounds, often with soft drop shadows or contained within rounded card components. Illustrations are abstract, geometric, and occasionally feature human figures in an expressive, non-realistic style, typically using a brand-aligned or complementary color palette. Icons are predominantly outlined, featuring a moderate stroke weight, and are monochromatic in the Charcoal Text or System Black color, occasionally with the Primary Purple accent. Imagery serves both decorative atmosphere, product showcase, and explanatory content, occupying significant visual space in alternating text-image sections.

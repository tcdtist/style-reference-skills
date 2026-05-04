---
version: alpha
name: Framer
description: Framer's design pulsates like a high-contrast digital canvas, where every element is deliberately placed against a deep, inky black. The interplay of brilliant white typography and electric blue accents (#0099ff) against the #000000 background creates an immediate sense of clarity and impact, reminiscent of a command-line interface or a designer's dark-mode workspace. Generously rounded elements, especially 100px pill buttons, introduce soft dynamism into an otherwise sharp, modern aesthetic, making complex tools feel approachable. Subtle layers of near-black surfaces (#080808) provide depth without relying on heavy shadows, maintaining a lightweight, performant feel.
colors:
  absolute-zero: "#000000"
  charcoal-canvas: "#080808"
  vapor-white: "#ffffff"
  ash-gray: "#999999"
  silver-mist: "#cccccc"
  slate-dust: "#666666"
  deep-space: "#171717"
  electric-blue: "#0099ff"
  sky-indigo: "#0055ff"
  cyan-fade: "#05ff9f"
  tangerine: "#fd5d5c"
  goldenrod: "#fac80a"
  emerald: "#33c659"
  amethyst: "#9869fd"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.3
  body-lg:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.02px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.07
    letterSpacing: -0.02px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
  heading:
    fontFamily: "system-ui"
    fontSize: 62px
    lineHeight: 1
    letterSpacing: -0.031px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 85px
    lineHeight: 0.95
    letterSpacing: -0.05px
  display:
    fontFamily: "system-ui"
    fontSize: 110px
    lineHeight: 0.85
    letterSpacing: -0.05px
spacing:
  cardRadius: 8px
  buttonRadius: 100px
  elementGap: 4px
  sectionGap: 64px
components:
  cta-button-group:
    role: 
  testimonial-card:
    role: 
  trusted-by-logo-bar:
    role: 
  primary-hero-button:
    role: Call to action
  secondary-ghost-button:
    role: Secondary call to action
  solid-primary-button:
    role: High-emphasis call to action
  icon-only-button:
    role: Action without text label
  navigation-link:
    role: Top navigation item
  case-study-card:
    role: Showcase customer work
  small-feature-card:
    role: Highlight key features
  text-input-field:
    role: User data entry
---

## Overview

**North Star:** Inky command center

Framer's design pulsates like a high-contrast digital canvas, where every element is deliberately placed against a deep, inky black. The interplay of brilliant white typography and electric blue accents (#0099ff) against the #000000 background creates an immediate sense of clarity and impact, reminiscent of a command-line interface or a designer's dark-mode workspace. Generously rounded elements, especially 100px pill buttons, introduce soft dynamism into an otherwise sharp, modern aesthetic, making complex tools feel approachable. Subtle layers of near-black surfaces (#080808) provide depth without relying on heavy shadows, maintaining a lightweight, performant feel.

### Do's

- Use Absolute Zero (#000000) as the primary background for all page sections to enforce a consistent dark theme.
- Apply Vapor White (#ffffff) for all main headings and body text on dark backgrounds to ensure maximum contrast and readability.
- Reserve Electric Blue (#0099ff) exclusively for interactive elements like links, buttons, and active states to guide user attention.
- Utilize 100px border radius for all primary calls-to-action to create distinct pill-shaped buttons.
- Employ the GT Walsheim fonts (GT Walsheim Framer Medium, GT Walsheim Medium) for all major headlines to convey the brand's unique character.
- Maintain a compact line height for all display and heading typography (e.g., 0.85 for 110px, 0.95 for 85px) to achieve a dense, type-driven aesthetic.
- Layer surfaces using Absolute Zero (#000000) and Charcoal Canvas (#080808) to create depth without relying on prominent shadows.

### Don'ts

- Avoid using light backgrounds for entire page sections; the theme is predominantly dark.
- Do not use generic system fonts for prominent headings; GT Walsheim is critical for brand identity.
- Do not introduce additional accent colors beyond Electric Blue (#0099ff) and the designated card highlights (Tangerine, Goldenrod, Emerald, Amethyst).
- Avoid box shadows for general elevation; subtle background color shifts (e.g., #000000 to #080808) provide the primary sense of layering.
- Do not use letter-spacing: normal for headlines; specific negative letter-spacing values (-0.0500em, -0.0310em) are integral to the typographic style.
- Do not vary border radius for buttons; stick to 100px for pill shapes and 8px for cards/inputs.
- Do not introduce complex gradients or textures on primary surfaces; the background should remain clean and near-monochromatic.

### Layout

The layout primarily uses a full-bleed dark canvas for the background. Content is centered and constrained within an implied max-width (no explicit pageMaxWidth, but content blocks are visually centered and not full-width). The hero section features a centered, oversized headline on a full-bleed dark background, with prominent pill-shaped call-to-action buttons. Subsequent sections alternate between large, impactful text blocks and grids of featured content. There's a prominent 3-column card grid for 'Made with Framer' examples, showcasing various visual styles within a consistent structural framework. Vertical spacing between sections is generous but not excessively sprawling, contributing to a compact visual density.

### Imagery

The visual language is a blend of tight product screenshots, abstract geometric shapes with vibrant accent colors, and stylized photography. Product screenshots are typically contained within cards, often featuring a subtle background or drop shadow. Illustrations are geometric and abstract, using brand accent colors (Tangerine, Goldenrod, Emerald, Amethyst) to add visual interest and break up the dark interface. Photography is used sparingly for social proof, featuring desaturated or monochrome portraits within circular masks. Icons are monochrome, outlined, and minimal, primarily in Vapor White against dark backgrounds. Imagery primarily serves to showcase products, demonstrate features, or provide decorative color accents, balanced with a high density of textual content.

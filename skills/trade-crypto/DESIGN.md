---
version: alpha
name: Trade Crypto
description: Gemini's design system offers a crisp, compact, and confident interface for financial markets. It balances extensive negative space with information-dense cards, punctuated by a vibrant blue accent for interactive elements. The typography is modern and precise, contributing to an atmosphere of focused functionality rather than elaborate decoration, where every element serves a clear purpose.
colors:
  ink-black: "#010304"
  paper-white: "#ffffff"
  deep-graphite: "#000000"
  steel-gray: "#999a9b"
  light-cloud: "#e6e6e6"
  soft-fog: "#676868"
  pale-mist: "#808181"
  electric-blue: "#005ff9"
  sky-tint: "#c9e0ff"
typography:
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.35
    letterSpacing: -0.08px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.04px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.16
    letterSpacing: -0.04px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.15
    letterSpacing: -0.12px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
    letterSpacing: -0.2px
spacing:
  cardRadius: 20px
  buttonRadius: 1000px
  elementGap: 8px
  sectionGap: 40px
components:
  primary-action-button:
    role: Main call-to-action
  ghost-button:
    role: Secondary action / Navigation
  outlined-button:
    role: Tertiary action
  dark-primary-button:
    role: Hero or prominent action
  information-card:
    role: Content container
  qr-code-card:
    role: Unique interactive element
  minimal-card:
    role: Compact grouped information
  prediction-input-card:
    role: Interactive prediction logic
  text-input:
    role: User entry field
---

## Overview

**North Star:** Precision on parchment: a financial platform that feels like an architect's blueprint, meticulously detailed on a bright white surface, with interactive elements highlighted in stark, electric blue.

Gemini's design system offers a crisp, compact, and confident interface for financial markets. It balances extensive negative space with information-dense cards, punctuated by a vibrant blue accent for interactive elements. The typography is modern and precise, contributing to an atmosphere of focused functionality rather than elaborate decoration, where every element serves a clear purpose.

### Do's

- Prioritize Paper White (#ffffff) as the dominant background for all content cards and primary page surfaces.
- Use Ink Black (#010304) for primary text and Deep Graphite (#000000) for navigation and prominent button text to ensure high contrast.
- Apply a 1000px border-radius to all primary action buttons for a distinctly pill-shaped aesthetic.
- Employ the Sky Tint (#c9e0ff) background with Electric Blue (#005ff9) text for clear, functional primary call-to-actions.
- Maintain a compact information density using Geist typeface with precise letter-spacing, particularly tighter tracking for larger display text.
- Utilize a consistent element gap of 8px for spacing elements within components and small clusters.
- Elevate cards with a subtle shadow (rgba(0, 0, 0, 0.08) 0px 8px 32px 0px) and a radius of 20px to differentiate content blocks.

### Don'ts

- Avoid using highly saturated, non-brand colors; restrict the palette primarily to neutrals with the defined Electric Blue and Sky Tint accents.
- Do not deviate from the Geist typeface; its specific weights and letter-spacing define the brand's typographic tone.
- Refrain from using hard-edged or overly sharp corners on interactive or grouped elements; prefer radii of 12px to 1000px.
- Do not introduce heavy gradients or complex background patterns; maintain a clean, flat surface treatment for most UI elements.
- Avoid excessive use of elevation; reserve shadows for distinct interactive cards and key UI elements to guide attention.
- Do not use generic system fonts; the custom Geist font is critical to the brand's visual identity.
- Do not introduce large, decorative imagery that distracts from functional UI; focus on product-showcasing or abstract graphics when necessary.

### Layout

The page primarily uses a full-bleed structure, with key content areas constrained to a central column (implied max-width around 1200px from overall screenshot analysis). The hero section is characterized by a central headline and subtext, often over a clean white background, framed by functional navigation. Section rhythm is provided by distinct content blocks and cards on a uniform white canvas. Content is arranged in flexible patterns, including centered stacks for key messages, simple left-aligned text with right-aligned card interactions, and grids for showcasing features or data. The layout avoids visual dividers between sections, relying on consistent vertical spacing for flow. Navigation is a sticky top bar, providing immediate access to key brand links and calls to action.

### Imagery

The site's imagery is sparse, prioritizing UI and functionality over abstract visuals. When present, it features tight, product-focused illustrations like the rounded-rectangle app icon, or simplified graphic elements such as the basketball icon in the prediction interface. Icons are line-drawn and monochrome (often Deep Graphite or Ink Black), maintaining a clean, technical feel. Photography is notably absent, reinforcing a sense of precise, data-driven interaction. Imagery serves an explanatory or functional role, never purely decorative, and occupies minimal space relative to text and data.

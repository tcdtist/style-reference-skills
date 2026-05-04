---
version: alpha
name: Intercom
description: Intercom's design system evokes a sense of understated innovation, like an architectural blueprint on white marble.  Lightness and clarity are established through an expansive white canvas contrasted by fine-lined black typography and minimal, precise UI elements. The tension between the nearly achromatic palette and a single vibrant violet accent for primary calls to action creates a focused, forward-thinking feel without visual clutter. Custom typography with subtle letter-spacing variations adds a layer of quiet sophistication, preventing the sparse aesthetic from feeling sterile.
colors:
  canvas-white: "#ffffff"
  background-off-white: "#faf9f6"
  surface-cream: "#f1eee9"
  border-sand: "#dedbd6"
  subtle-gray: "#e7e3db"
  canvas-beige: "#d3cec6"
  headline-black: "#111111"
  body-text-black: "#000000"
  subtle-graphite: "#414141"
  mid-gray: "#585858"
  footer-gray: "#666666"
  icon-gray: "#707070"
  button-text-gray: "#888888"
  placeholder-gray: "#a0a0a0"
  inactive-icon-gray: "#b8b8b8"
  accent-violet: "#0007cb"
  accent-orange: "#ff5600"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.4
    letterSpacing: 0.7px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.16px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.4px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1
    letterSpacing: -1.62px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.95
    letterSpacing: -2.4px
spacing:
  buttonRadius: 4px
  elementGap: 16px
  sectionGap: 48px
components:
  alert-banner:
    role: 
  tab-bar:
    role: 
  button-group:
    role: 
  primary-action-button:
    role: Call to action
  secondary-outline-button:
    role: Secondary action
  ghost-navigation-button:
    role: Navigation link
  tab-button:
    role: Tab selection
  primary-navigation-item:
    role: Main navigation
  header-alert-banner:
    role: Informational banner
  logo-grid-item:
    role: Client/partner logo display
  input-field:
    role: Data entry
---

## Overview

**North Star:** Architectural blueprint on white marble

Intercom's design system evokes a sense of understated innovation, like an architectural blueprint on white marble.  Lightness and clarity are established through an expansive white canvas contrasted by fine-lined black typography and minimal, precise UI elements. The tension between the nearly achromatic palette and a single vibrant violet accent for primary calls to action creates a focused, forward-thinking feel without visual clutter. Custom typography with subtle letter-spacing variations adds a layer of quiet sophistication, preventing the sparse aesthetic from feeling sterile.

### Do's

- Use Headline Black (#111111) for all major headings and impactful statements to maintain strong contrast.
- Apply Saans font with a weight of 300 for display-sized headlines (54px, 80px) to achieve an authoritative yet understated feel.
- Implement 4px border-radius for all interactive buttons and navigation items, creating a subtle visual softness.
- Reserve Accent Violet (#0007cb) strictly for primary interactive elements, such as CTA buttons and active state indicators.
- Differentiate sections using the neutral background progression: Canvas White (#ffffff) > Background Off-White (#faf9f6) > Surface Cream (#f1eee9) for subtle visual hierarchy.
- Maintain standard element spacing of 16px for comfortable content flow, adjusting vertically with multiples of 8px as needed.
- Utilize SaansMono for any technical or explicit code-like content, with its distinctive increased letter-spacing.

### Don'ts

- Avoid using saturated colors other than Accent Violet (#0007cb) and Accent Orange (#ff5600) to preserve the clean, neutral aesthetic.
- Do not introduce sharp, unrounded corners on interactive elements, as this contradicts the established 4px radius pattern.
- Refrain from heavy drop shadows or complex gradients; the system relies on subtle background shifts and crisp lines for depth.
- Do not deviate from the specified Saans, SaansMono, or MediumLL typefaces; ensure consistency in typographic personality.
- Avoid dense, information-heavy blocks without adequate spacing; prioritize comfortable content density and readability.
- Do not use Body Text Black (#000000) for large, prominent headlines; Headline Black (#111111) should be preferred for impact.
- Do not use highly saturated photography; imagery should align with the muted or monochromatic style.

### Layout

The page primarily uses a max-width contained layout, though the hero section spans full-bleed to establish a grander scale. The hero features a centered oversized headline (Saans 80px, weight 300) with a secondary text block right-aligned. Sections often alternate between full-width content blocks and contained layouts. Content arrangement frequently uses a split-screen pattern (text column left, visual/product screenshot right, or vice versa) with consistent vertical spacing between sections. There's a minimal use of explicit grids for feature showcasing, but logo sections use a fluid, adaptive grid. The layout prioritizes spaciousness, using ample whitespace around elements and between sections to keep information digestible. The navigation is a sticky header with primary links on the left and action buttons (Start free trial, Fin AI Agent) on the right.

### Imagery

The visual language focuses on a mix of product screenshots, abstract and illustrative graphics, and subtly treated photography. Product screenshots are clean, showcasing the UI in action, often on a slight perspective. Abstract illustrations feature monochromatic human-like figures or organic shapes (like the flower graphic) in black against the dominant white background, serving as decorative atmosphere rather than direct content. Photography is minimal, often cropped tightly or treated with filters/desaturation, focusing on human elements (eyes, silhouettes) without being overtly vibrant or lifestyle-oriented. Iconography is primarily outlined and monochromatic, aligning with the refined, clean aesthetic. The role is a blend of product showcase, conceptual atmosphere, and light visual breaks, with a strong emphasis on maintaining a text-dominant layout.

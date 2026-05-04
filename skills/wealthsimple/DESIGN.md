---
version: alpha
name: Wealthsimple
description: Wealthsimple projects an image of approachable financial sophistication, blending a muted, almost vintage-feeling color palette with modern typography. The design feels grounded and trustworthy, achieved through a dominant presence of off-white and dark gray surfaces that create a soft contrast. Touches of natural, desaturated color appear subtly, preventing the aesthetic from feeling stark while maintaining a sense of serious purpose. Custom fonts — one with a humanist, inviting feel, the other a crisp sans-serif — underpin content hierarchy without resorting to harsh visual cues.
colors:
  greyscale-black: "#32302f"
  linen-white: "#fcfcfc"
  slate-border: "#e4e2e1"
  text-muted: "#686664"
  ash-canvas: "#f1f0f0"
  input-gray: "#eeece7"
  ocean-tint: "#d3e5f3"
  success-green: "#486635"
  error-red: "#a43d12"
  focus-outline: "#afaaa7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.4
    letterSpacing: 0.005px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
    letterSpacing: 0.005px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.005px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.08
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.16
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.08
    letterSpacing: -0.01px
spacing:
  cardRadius: 100px
  buttonRadius: 1600px
  elementGap: 8px
  sectionGap: 40-48px
components:
  button-group:
    role: 
  feature-cards-row:
    role: 
  product-feature-section:
    role: 
  secondary-outlined-button:
    role: Secondary action, navigation
  small-utility-button:
    role: Icon-only actions, small interactive elements
  invisible-button:
    role: Text links appearing as buttons
  default-card:
    role: Content grouping (no specific styling)
  tinted-pill-card-linen:
    role: Subtle badging, small contextual labels
  tinted-pill-card-dark-slate:
    role: Dark-mode badging, small contextual labels
  text-input-field:
    role: Form input
---

## Overview

**North Star:** Warm Minimalism on Linen. Imagine precise, intentional content laid out on a finely textured, off-white linen, framed by subtle, earthy tones.

Wealthsimple projects an image of approachable financial sophistication, blending a muted, almost vintage-feeling color palette with modern typography. The design feels grounded and trustworthy, achieved through a dominant presence of off-white and dark gray surfaces that create a soft contrast. Touches of natural, desaturated color appear subtly, preventing the aesthetic from feeling stark while maintaining a sense of serious purpose. Custom fonts — one with a humanist, inviting feel, the other a crisp sans-serif — underpin content hierarchy without resorting to harsh visual cues.

### Do's

- Use Linen White (#fcfcfc) as the primary page background to establish warmth.
- Apply Greyscale Black (#32302f) for all primary body text and headlines to ensure high contrast and readability.
- Implement the-future for body text and navigation, maintaining its defined sizes and the subtle 0.0050em letter-spacing.
- Use tiempos for headlines, adjusting sizes and utilizing its -0.0100em letter-spacing to create a distinctive, editorial typesetting.
- Ensure all interactive buttons use a 1600px border-radius, creating a consistent 'pill' shape, regardless of fill or outline.
- Employ Slate Border (#e4e2e1) for all non-critical borders, such as input fields and secondary button outlines, for a soft, integrated look.
- Use 20px 32px padding for primary buttons and 12px 24px for secondary buttons to maintain a consistent interactive element scale.

### Don'ts

- Avoid harsh, high-saturation colors; all chromatic elements should be desaturated or muted.
- Do not use pure black (#000000) for text or primary backgrounds; always opt for Greyscale Black (#32302f) for a softer appearance.
- Refrain from sharp corners; button, card, and input radii should be either 100px or greater, or 0px for purely structural elements.
- Do not introduce strong shadows or elevation effects; the design relies on color and careful spacing for depth.
- Avoid using highly decorative or ornate iconography; prefer simple, clear, line-based icons that match the minimal aesthetic.
- Do not vary line heights from the specified typography profiles; precise line heights establish a clean vertical rhythm.
- Do not use letter spacing other than the specified values for the-future (0.0050em) and tiempos (-0.0100em) to preserve typographic identity.

### Layout

The site employs a max-width contained layout, typically centered, but features occasional full-bleed hero sections. Hero patterns are often split-layout (text on left, visual on right) or centered text over an abstract background image. Section rhythm is varied but generally uses consistent vertical spacing of 40-48px. Content is often arranged in 2-column layouts with alternating text-left/image-right or stacked blocks. The primary content delivery is text-dominant, with imagery serving as an accent rather than a primary information vehicle. A sticky top navigation bar provides consistent access to key sections.

### Imagery

Imagery is conceptual and abstract, focusing on product illustrations and staged still-life photography of objects that evoke finance (papers, coins, devices). Treatments are primarily contained within rounded frames or as background elements that blend into the color palette. There's an absence of lifestyle photography, keeping the focus on the product and conceptual integrity. Illustrations are dimensional and often use soft, brand-adjacent colors, avoiding harsh outlines or overly cartoonish styles. Icons are simple, monochrome, and line-based, maintaining the overall clean aesthetic. Visual space is balanced, allowing for prominent heroes but also significant text areas.

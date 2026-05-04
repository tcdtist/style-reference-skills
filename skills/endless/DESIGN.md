---
version: alpha
name: Endless
description: This system projects an academic, almost clinical, precision with its sparse layout and strict monochrome palette. The design balances significant negative space with dense, information-rich text blocks, reminiscent of a research paper's appendix. Inter's subtle letter-spacing adjustments, especially noticeable at smaller text sizes, carve out readable blocks, contrasting with the bold visual statements of fluid, almost psychedelic, gradients used in portfolio showcases. The singular design choice is the use of perfectly circular 9999px pill buttons, offering the only soft, organic shape in an otherwise angular and purely functional interface.
colors:
  ink: "#000000"
  graphite: "#737373"
  canvas: "#ffffff"
  ghost: "#f5f5f5"
  charcoal: "#0a0a0a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.238px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.43
    letterSpacing: -0.24px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.242px
spacing:
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 32px
components:
  cta-button-group:
    role: 
  hero-text-block-with-client-list:
    role: 
  services-pricing-info-block:
    role: 
  primary-action-button:
    role: Interactive element
  secondary-action-button:
    role: Interactive element
  navigation-link:
    role: Navigation element
  main-heading:
    role: Headline
  body-text:
    role: Content
  caption-utility-text:
    role: Supporting content
---

## Overview

**North Star:** Academic monograph on a clean desk. Information density without visual clutter, framed by stark black and white.

This system projects an academic, almost clinical, precision with its sparse layout and strict monochrome palette. The design balances significant negative space with dense, information-rich text blocks, reminiscent of a research paper's appendix. Inter's subtle letter-spacing adjustments, especially noticeable at smaller text sizes, carve out readable blocks, contrasting with the bold visual statements of fluid, almost psychedelic, gradients used in portfolio showcases. The singular design choice is the use of perfectly circular 9999px pill buttons, offering the only soft, organic shape in an otherwise angular and purely functional interface.

### Do's

- Prioritize 'Ink' (#000000) for all primary text and critical UI elements, ensuring maximum contrast against 'Canvas' (#ffffff).
- Maintain a maximal radius of 9999px for all interactive buttons or tags, creating a distinct pill shape.
- Utilize Inter at weight 400 for all typography, adjusting size and letter-spacing (-0.238px to -0.242px) to define hierarchy, not weight variation.
- Employ 'Graphite' (#737373) specifically for secondary information or subdued interactive states, adhering to its moderate contrast.
- Adhere to the compact spacing system, using 2px, 4px, 6px, 8px, 12px, 16px, 20px, and 32px increments to create dense but organized layouts.

### Don'ts

- Do not introduce additional font weights or families; Inter 400 is the only typeface.
- Avoid using saturated colors in the main UI; restrict color to embedded portfolio imagery or gradients.
- Do not deviate from the pill shape (9999px radius) for buttons; all other elements should retain sharp 0px corners, or very subtle rounding where necessary for images.
- Do not use generic box shadows or elevation; depth should be created through color contrast and layered gradients within content blocks, not UI chrome.
- Do not use letter-spacing values outside the established -0.011em to -0.017em range; tight tracking is a signature element.

### Layout

The page adheres to a max-width of 950px, centered on a 'Canvas' (#ffffff) background. The hero section is a minimal, left-aligned text column with a bold headline. Content primarily flows in a single column, with occasionally split sections (e.g., client lists). Information is densified through tight line heights and compact block elements, creating a sense of a packed, highly organized document. Navigation is a simple top-left set of text links, maintaining a subdued presence.

### Imagery

The visual language is split: the UI itself is text-dominant with no decorative imagery, focusing on pure content. However, portfolio showcases prominently feature vibrant, abstract, swirling gradient backgrounds with product screenshots or logos superimposed. These are full-bleed within their card containers, often featuring soft, organic color blends that stand in stark contrast to the monochrome UI. The imagery serves as a 'window' into client work, visually rich but isolated from the functional interface.

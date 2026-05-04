---
version: alpha
name: Gigantic
description: Gigantic's design system pulses with a bold, high-contrast energy, centered on a dominant black and white palette punctuated by a single vivid red accent. Typography is oversized and impactful, often leaning into condensed and italicized forms to create a sense of dynamic urgency, balanced by generous spacing. The overall aesthetic is raw and direct, reminiscent of street art or bold industrial signage, with minimal decorative elements, focusing instead on stark visual statements.
colors:
  canvas-white: "#ffffff"
  asphalt-black: "#231f20"
  street-chalk: "#f0ede7"
  ink-black: "#000000"
  flavor-burst-red: "#ff634b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0.43px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.56
    letterSpacing: 0.49px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.44
    letterSpacing: 0.58px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: 0.65px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: 0.6px
  display:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1
    letterSpacing: 0.5px
spacing:
  elementGap: 19px
  sectionGap: 32px
components:
  filled-primary-button:
    role: Call to action
  text-link-button:
    role: Secondary action
  outlined-text-button:
    role: Tertiary action
  product-shop-buttons:
    role: Product navigation action
  utility-top-bar:
    role: Informational banner
---

## Overview

**North Star:** Raw Urban Energy: Oversized typography and high-contrast visuals on a clean backdrop evoke direct, impactful communication.

Gigantic's design system pulses with a bold, high-contrast energy, centered on a dominant black and white palette punctuated by a single vivid red accent. Typography is oversized and impactful, often leaning into condensed and italicized forms to create a sense of dynamic urgency, balanced by generous spacing. The overall aesthetic is raw and direct, reminiscent of street art or bold industrial signage, with minimal decorative elements, focusing instead on stark visual statements.

### Do's

- Use Asphalt Black (#231f20) for all primary text and button backgrounds to ensure strong contrast against Canvas White (#ffffff).
- Apply 0px border-radius to all interactive elements, cards, and containers to maintain the blocky, direct aesthetic.
- Employ `neue-haas-grotesk-display` at large sizes (24px, 32px) and heavy weights (700) for headlines, with aggressive letter-spacing to create maximum impact.
- Introduce Flavor Burst Red (#ff634b) sparingly as an accent for brand elements, hover states, or small decorative graphic details.
- Maintain a clear visual hierarchy with generous vertical spacing (sectionGap 32px) between content blocks, balanced by a comfortable elementGap of 19px.
- Keep backgrounds predominantly Canvas White (#ffffff) or Street Chalk (#f0ede7), ensuring text remains highly legible.

### Don'ts

- Avoid using multiple chromatic colors; limit vibrant hues to the singular Flavor Burst Red (#ff634b) accent.
- Do not use subtle shadows or gradients; rely on stark color contrast and flat surfaces for visual hierarchy.
- Refrain from rounded corners or soft edges; all visual elements should adhere to sharp, angular forms dictated by 0px border-radius.
- Do not dilute headline impact with light weights or small sizes; prioritize bold, expansive typography for maximum presence.
- Avoid decorative imagery that clashes with the high-contrast, text-dominant, urban aesthetic. Product shots should be clean and direct.
- Do not introduce complex UI components or overlays; keep layouts direct and information presented upfront.

### Layout

The site uses a full-bleed page model, with content often centered but spanning the full width, especially for hero sections or full-page typographic statements. The hero features an immense, centered headline against a Street Chalk background, immediately setting a bold typographic tone. Sections alternate between a high-contrast white background and the subtle Street Chalk background, creating a rhythmic visual flow. Content arrangement is primarily centered stacks for headlines and subtext, transitioning to a distinct two-column layout for product descriptions (text-left/image-right, then reversed). Product listings typically utilize a 4-column grid. The layout prioritizes ample space around key elements, presenting information in impactful, self-contained blocks. Navigation is a sticky top bar with minimal links.

### Imagery

The site uses a combination of sharp product photography and bold, graphic illustrations. Product shots are clean, brightly lit, and often feature the product unwrapped or broken to showcase inner textures, set against pure white or subtly textured backgrounds. Illustrations are geometric and distressed (e.g., 'VARIETY BOX') or abstract, often using Ink Black with subtle texture. Icons are predominantly filled and blocky, adhering to the sharp-edged aesthetic. Imagery plays a dual role: directly showcasing product appeal and reinforcing the brand's impactful, slightly rugged visual identity. Density is balanced, with images occupying significant blocks but always complementary to large typographic statements rather than overwhelming them.

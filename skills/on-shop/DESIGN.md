---
version: alpha
name: On Shop
description: On Shop embodies a stark, high-performance aesthetic: a monochrome canvas where bold black typography and clean product photography take center stage. Interaction is delivered with confident, compact components, relying on border treatments and solid fills rather than shadows for visual hierarchy. The design communicates authority through precise spacing and a focused absence of unnecessary visual noise.
colors:
  pitch-black: "#000000"
  cloud-white: "#ffffff"
  slate-gray: "#4d4d4d"
  fog-input: "#666666"
  swiper-accent: "#007aff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.013px
  subheading:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 39px
    lineHeight: 1.2
    letterSpacing: -0.01px
  display:
    fontFamily: "system-ui"
    fontSize: 63px
    lineHeight: 1
    letterSpacing: -0.02px
spacing:
  buttonRadius: 40px
  elementGap: 24px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Solid interactive element
  ghost-button:
    role: Secondary/tertiary interactive element (large)
  text-link-button:
    role: Minimal interactive element
  icon-button-ghost:
    role: Interactive element (small)
  product-card-borderless:
    role: Content display
  input-field:
    role: User input element
---

## Overview

**North Star:** Monochrome high-performance stadium

On Shop embodies a stark, high-performance aesthetic: a monochrome canvas where bold black typography and clean product photography take center stage. Interaction is delivered with confident, compact components, relying on border treatments and solid fills rather than shadows for visual hierarchy. The design communicates authority through precise spacing and a focused absence of unnecessary visual noise.

### Do's

- Use Pitch Black (#000000) for all primary body text, headings, and key icons.
- Apply Cloud White (#ffffff) as the dominant background for all main page content sections.
- Implement 24px of horizontal padding within primary filled buttons for a confident, compact feel.
- Utilize 'On' font family with specific letter-spacing for large headlines (e.g., -0.0200em for 63px type) to achieve a precise, condensed look.
- Maintain a clear hierarchy using solid fills and borders for component states, avoiding complex shadows.
- Employ 40px border-radius for all primary button shapes to ensure a soft, approachable pill-like form amidst the stark typography.
- Structure layouts using a 48px vertical gap between main sections to provide generous breathing room without excess.

### Don'ts

- Do not introduce additional saturated colors; maintain the monochrome palette with minimal functional accents.
- Avoid decorative gradients or complex overlays; keep surfaces clean and flat.
- Do not use subtle variations of gray for primary backgrounds or text that compete with Pitch Black and Cloud White.
- Avoid system default links; ensure all interactive text uses explicit Pitch Black (#000000) or Cloud White (#ffffff) styling.
- Do not use drop shadows for elevation; rely on color contrast, borders, and spacing.
- Avoid pixel-perfect spacing and alignment that doesn't adhere to the 4px base unit or defined spacing tokens.
- Do not use generic font sizes; adhere to the defined type scale to maintain typographic rhythm.

### Layout

The page primarily uses a full-bleed layout for hero sections, often with centered, large-scale typography overlaying a background image. Subsequent content sections alternate between full-width imagery and a contained, centered content area. Content arrangement frequently features juxtaposed text blocks and visuals. The overall density feels spacious due to generous section gaps (48px) and ample padding around elements. The navigation is a concise top bar that remains visible, prioritizing minimalism.

### Imagery

This site prominently features high-quality, product-focused photography and lifestyle shots of athletes. Images are often full-bleed within sections or contained in simple, unrounded frames. Photography is generally high-key with crisp focus on the product or subject, sometimes against a clean, minimal background (white or solid color). Product shots are direct and showcase utility. Icons are minimal, outlined, monochromatic, and used functionally.

### Elevation

This design system intentionally avoids shadows. Visual hierarchy and element differentiation are achieved exclusively through strong color contrast (Pitch Black on Cloud White), clear borders, and defined spacing. The absence of shadows contributes to a flat, modern, and performance-oriented aesthetic.

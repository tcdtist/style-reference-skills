---
version: alpha
name: Frontify
description: Frontify employs a sophisticated, clean, brand-centric aesthetic, combining a calm, off-white canvas with sharp black typography and deliberate, functional infusions of color. The system balances highly compact, precise type with generous negative space, creating an impression of clarity and efficiency. A muted, almost monochrome palette ensures focus on content, with specific, vivid accents used strategically for highlighting interactive elements or brand punctuation. Components are lightweight with softened corners, contributing to a modern, approachable feel.
colors:
  inkwell-black: "#111110"
  paper-white: "#f0f0eb"
  true-white: "#ffffff"
  canvas-muted: "#e1e1db"
  stone-whisper: "#d7d7cf"
  deep-pewter: "#464643"
  charcoal-grey: "#000000"
  pale-granite: "#cbcbc5"
  dusty-sage: "#bfbfb8"
  slate-echo: "#575753"
  forest-tint: "#042a2b"
  flame-orange: "#ff3b00"
  violet-streak: "#b60ae3"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0.18px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: 0.24px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.1
    letterSpacing: 0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: 0.4px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1
    letterSpacing: -0.427px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 0.91
    letterSpacing: -0.672px
spacing:
  cardRadius: 8px
  buttonRadius: 24px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-filled-button:
    role: Call to action, main navigation buttons
  outlined-button-dark-border:
    role: Secondary actions, ghost buttons, calls to explore
  outlined-button-light-border:
    role: Ghost buttons on dark backgrounds
  subtle-card:
    role: Content containers, feature blocks on light backgrounds
  ghost-card:
    role: Decorative or transparent content groupings
  small-radius-card:
    role: Tight content groupings, embedded UI elements
  tertiary-button:
    role: Subtle calls to action or embedded buttons
  underline-input:
    role: Form input fields
---

## Overview

**North Star:** Architectural blueprint on soft linen

Frontify employs a sophisticated, clean, brand-centric aesthetic, combining a calm, off-white canvas with sharp black typography and deliberate, functional infusions of color. The system balances highly compact, precise type with generous negative space, creating an impression of clarity and efficiency. A muted, almost monochrome palette ensures focus on content, with specific, vivid accents used strategically for highlighting interactive elements or brand punctuation. Components are lightweight with softened corners, contributing to a modern, approachable feel.

### Do's

- Always use Paper White (#f0f0eb) as the default page canvas, creating a consistent light background.
- Apply ABC Diatype for all body text and UI labels, ensuring clarity and efficiency with its 0.0100em letter spacing.
- Reserve Cranny font for headlines and display text, leveraging its elegant weight 300 or 400 with size-dependent letter spacing for sophisticated visual hierarchy.
- Button corners should consistently have a 24px border-radius for primary and outlined buttons, and 40px for larger tertiary buttons, maintaining a soft, approachable feel.
- Utilize Inkwell Black (#111110) for primary button backgrounds and primary text, creating high contrast and clear calls to action.
- Implement a default element gap of 8px for vertical and horizontal spacing between small UI elements, establishing a comfortable density.
- Card backgrounds should default to Canvas Muted (#e1e1db) with an 8px border-radius, providing subtle visual separation without heavy borders or shadows.

### Don'ts

- Avoid using multiple chromatic colors for interactive elements; stick to Flame Orange (#ff3b00) or Violet Streak (#b60ae3) for accents, never for full button fills.
- Do not use heavy shadows or multi-layered elevation; surfaces are defined by subtle background changes and light borders, not Z-axis depth.
- Do not use default system fonts; ABC Diatype, Cranny, Satoshi, and Cabinetgrotesk are the only approved typefaces.
- Avoid arbitrary letter spacing; use the defined -0.007em (for large Cranny) or 0.010em (for ABC Diatype) for precise type rendering.
- Do not introduce new border-radius values; adhere strictly to 4px, 8px, 18px, 24px, 32px, and 40px for components as specified.
- Never use less than 48px vertical spacing between major page sections to maintain a spacious and breathable layout.
- Do not introduce new accent gradients. The 'Gradient Aura' provides a controlled, decorative element that should not be replicated or modified.

### Layout

The page structure employs a mix of full-bleed and contained sections. The hero typically features a full-bleed visual or background with text meticulously centered. Content flows in distinct blocks with consistent vertical spacing of 48px between sections, often presented as alternating light and muted background bands. Content arrangement frequently uses centered stacks for headlines and subtext, transitioning into alternating text-left/image-right or vertical features. Card grids, where present, are typically 3-column. The design emphasizes spaciousness, allowing elements to breathe. Navigation is handled by a sticky top bar with a centered logo and right-aligned actions, providing persistent access without intruding on content.

### Imagery

Imagery on Frontify prioritizes clean, conceptual visuals, favoring product-focused photography and abstract graphics over lifestyle shots. Photography, when used, features high-key lighting with subjects often isolated or in calm, desaturated environments, reinforcing a focused and composed atmosphere. Illustrations are minimal and abstract, often using subtle gradients or geometric forms for decorative or atmospheric effect, without heavy outlines or bold color blocks. Icons are primarily outlined, showcasing a light stroke weight, and are monochromatic in Inkwell Black, maintaining the system's clean, functional aesthetic. Imagery serves primarily as decorative atmosphere or explanatory context rather than product showcases or social proof, maintaining a text-dominant layout with generous negative space.

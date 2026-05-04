---
version: alpha
name: Duna
description: Duna employs a quietly confident and sophisticated aesthetic, characterized by a near-monochromatic palette and subtle textural shifts. Typography is precise and highly tracked, creating a sense of understated authority. Surfaces are clean and layered, with minimal elevation, allowing content to take precedence. The overall impression is one of grounded reliability, eschewing overt flash for refined clarity.
colors:
  midnight-ink: "#000000"
  canvas-white: "#ffffff"
  near-white: "#f7f7f5"
  deep-charcoal: "#292421"
  subtle-gray: "#898683"
  card-wash: "#edece7"
  quiet-black: "#1a1816"
  medium-gray: "#444444"
  onyx-button-background: "#160f0c"
  light-steel: "#b2afae"
  slate-text: "#0d0d0d"
  input-fill: "#eeeeee"
  accent-purple: "#1b0624"
  muted-slate: "#766a7c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.71
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: -0.72px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.96px
  display:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -2px
  display-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.1
    letterSpacing: -2.2px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -4.32px
spacing:
  cardRadius: 16px
  buttonRadius: 999px
  elementGap: 10px
  sectionGap: 40px
components:
  primary-filled-button:
    role: Main call to action button.
  ghost-button:
    role: Secondary action or navigation outside of primary flows.
  announcement-pill:
    role: Small, informational component to highlight news or status.
  simple-card:
    role: Basic container for information, features a subtle background to distinguish from canvas.
  elevated-card:
    role: Interactive or featured card with a light shadow for depth.
  text-input-active:
    role: User input field.
  navigation-link:
    role: Top-level navigation items.
  cookie-consent-banner:
    role: Non-intrusive notification banner.
---

## Overview

**North Star:** Understated Compliance Authority

Duna employs a quietly confident and sophisticated aesthetic, characterized by a near-monochromatic palette and subtle textural shifts. Typography is precise and highly tracked, creating a sense of understated authority. Surfaces are clean and layered, with minimal elevation, allowing content to take precedence. The overall impression is one of grounded reliability, eschewing overt flash for refined clarity.

### Do's

- Use GT America with specific letter-spacing adjustments for all headings to maintain the refined and precise typographic hierarchy.
- Utilize Canvas White (#ffffff) as the dominant page background, reserving Near White (#f7f7f5) for subtle section differentiation or specific component backgrounds.
- Apply a 999px border-radius to all buttons and small interactive elements to achieve a consistent pill-like shape.
- Distinguish cards by using either Card Wash (#edece7) for simple containers or Canvas White (#ffffff) with an inset shadow for elevated content.
- Prioritize Onyx Button Background (#160f0c) with Canvas White (#ffffff) text for primary calls to action, maintaining a premium, understated feel.
- Employ Accent Purple (#1b0624) sparingly and strategically for impactful headings or brand-specific graphical elements, not as a general accent color.
- Maintain comfortable element spacing using a base unit of 10px, with larger gaps for sections to ensure content breathing room.

### Don'ts

- Avoid using highly saturated colors for interface elements; the brand relies on a nearly monochromatic palette with restrained chromatic accents.
- Do not use heavy drop shadows; elevation is primarily conveyed through subtle background shifts and a very soft inset shadow on specific cards.
- Do not introduce decorative borders or strong differentiating lines; surfaces are generally seamless or subtly defined by background color changes.
- Never use generic system fonts for headings or body text; always map to the GT America family to preserve the distinct typographic personality.
- Avoid arbitrary radius values; adhere to the established radii of 999px for buttons, 16px for cards, and 8px for inputs.
- Do not implement complex gradients or bold background patterns; the system favors clean, flat surfaces.
- Do not vary line-height aggressively across body text; stick to the established ratios to maintain consistent reading rhythm.

### Layout

The page primarily uses a max-width contained layout, likely around 1200px, horizontally centered. The hero section is full-bleed with a large illustrative background and centered headline, followed by a 'news pill' that breaks the full-width image. Subsequent sections feature a consistent vertical rhythm, often with a centered stack of content (headline, body, buttons) or multi-column grids for features and data. There's a subtle alternating section pattern, primarily between Canvas White (#ffffff) and Near White (#f7f7f5) backgrounds. Navigation is a sticky top bar with left-aligned branding and right-aligned buttons/links.

### Imagery

Imagery primarily consists of evocative, painted landscape illustrations acting as large background heroes, featuring muted sunrise/sunset tones with soft, organic forms. Product imagery uses tightly cropped, detailed product screenshots or abstract graphics to illustrate concepts, often isolated on clean white backgrounds. Icons are minimal, outlined, monochromatic, and used for functional clarity rather than excessive decoration. The overall density is text-dominant, with imagery serving as atmospheric backdrops or focused explanatory elements.

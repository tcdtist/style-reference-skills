---
version: alpha
name: Letter
description: Letter employs a 'dark academia meets finance' aesthetic, characterized by dramatic, almost painterly dark backgrounds with glowing abstract forms that provide depth and visual interest. Over this, a minimalist, high-contrast typography system ensures clarity and seriousness. Components are unfussy, with sharp corners and subtle borders, allowing the rich backgrounds to take center stage, creating an atmosphere of understated luxury and technological sophistication. The overall impression is one of grounded authority with a hint of digital mystique.
colors:
  midnight: "#000000"
  canvas-white: "#ffffff"
  carbon: "#191b1f"
  ghost-gray: "#f6f9f9"
  whisper-gray: "#e6ebec"
  stone-whisper: "#9fabad"
  deep-teal: "#186f64"
  royal-violet: "#536eff"
  grape-dusk: "#644bc4"
  ocean-gaze: "#154ea5"
  lilac-mist: "#e6def0"
  mint-glaze: "#eefcef"
  canyon-haze: "#fcede1"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.1
    letterSpacing: 0.44px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 1.2
    letterSpacing: 0.92px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1.2
    letterSpacing: 1.6px
spacing:
  buttonRadius: 2px
  elementGap: 16px
  sectionGap: 64px
components:
  primary-dark-button:
    role: Call to action for joining or getting started.
  secondary-light-button:
    role: Alternative call to action, often for signing in or less prominent actions.
  teal-action-button:
    role: Primary action for 'Invest' or 'Browse' related features.
  violet-action-button:
    role: Primary action for 'Borrow' related features.
  ghost-card:
    role: Decorative card used as a background or for subtle visual separation without strong outlines.
  surface-card:
    role: Content card providing a slightly raised, clean surface for information.
  navigation-link:
    role: Top-level navigation items.
---

## Overview

**North Star:** Sublime Depth, Minimal Interface

Letter employs a 'dark academia meets finance' aesthetic, characterized by dramatic, almost painterly dark backgrounds with glowing abstract forms that provide depth and visual interest. Over this, a minimalist, high-contrast typography system ensures clarity and seriousness. Components are unfussy, with sharp corners and subtle borders, allowing the rich backgrounds to take center stage, creating an atmosphere of understated luxury and technological sophistication. The overall impression is one of grounded authority with a hint of digital mystique.

### Do's

- Prioritize Neufile Grotesk Extended for all body text, buttons, and navigation, maintaining normal letter-spacing for high legibility.
- Use Albra Sans with 0.0200em letter-spacing for all headings and display text (`h1`-`h3`) to convey sophistication and impact.
- Apply a consistent 2px border radius to all interactive elements like buttons and links to maintain a sharp, deliberate feel.
- Employ Midnight (#000000) for hero section backgrounds and large textual content over them, creating a dramatic, immersive experience.
- Use Ghost Gray (#f6f9f9) as a subtle background for content sections or light cards, contrasting with the dramatic dark hero.
- Reserve Deep Teal (#186f64) for primary calls to action, ensuring attention is drawn to key interactive elements.
- Maintain maximum content width at 1440px, centering all major content blocks to ensure consistent presentation.

### Don'ts

- Avoid using curved or soft shapes; all radii should be sharp and minimal (2px) or absent (0px).
- Do not introduce strong drop shadows; the design relies on background gradients and subtle surface changes for depth, not elevation.
- Steer clear of overly saturated, single-color backgrounds for main content areas; maintain the subdued, high-contrast palette.
- Do not use generic system fonts; stick to Neufile Grotesk Extended and Albra Sans for brand continuity.
- Refrain from using thin weights for body or navigation text; Neufile Grotesk Extended should be used at 400 or 500 weight.
- Do not deviate from the established 12px vertical and 27.2px horizontal padding for primary actions; consistency is key.
- Avoid overly dense information layouts; utilize the 16px element gap and ample section gaps to create a sense of breathing room and exclusivity.

### Layout

The site uses a contained page model with a maximum width of 1440px, centered on the screen. The hero section is full-bleed and dramatic, featuring a large centered headline and subtext over an abstract dark background. Subsequent sections often alternate between two primary content arrangements: a full-width header over a light background, and two-column layouts where text is left-aligned and paired with a visual element on the right (or vice-versa). Vertical rhythm is established through consistent section gaps, creating a spacious and unhurried feel. Navigation is a minimalist top bar, sticky at the top, integrating branding with key menu items and action buttons.

### Imagery

The visual language is characterized by abstract 3D rendered forms with metallic or translucent surfaces, often set against a gradient-heavy, dark, moody background. These visuals act primarily as decorative atmosphere and brand representation, rather than explanatory content. They are typically contained within sections, not full-bleed images, and may feature subtle blur filters. On lighter sections, these forms appear to be more crystalline and less moody. The overall effect is sophisticated and slightly mysterious, fitting for a high-net-worth financial institution.

---
version: alpha
name: Authkit
description: AuthKit's design evokes an 'internal dashboard' feel — polished and functional without being sterile. Dark, translucent surfaces glow with subtle inner shadows and a restrained use of soft, muted blues. The sharp contrast between the deep `Midnight Abyss` background and crisp white text, paired with a limited palette of nearly achromatic blues, creates a sense of digital precision. The deliberate mix of round (`Pill`) and subtly rounded (`Subtle`) corners on different elements adds a tactile quality to the otherwise sleek, high-tech aesthetic, hinting at user-friendliness within a complex system.
colors:
  midnight-abyss: "#05060f"
  ghost-white: "#ffffff"
  storm-gray: "#2f343"
  comet: "#d8ecf8"
  arctic-mist: "#d1e4fa"
  celestial-light: "#b6d9fc"
  azure-glow: "#c7d3ea"
  slate-dew: "#3f4959"
  whisper-blue: "#9da7ba"
  neon-violet: "#663af3"
  interstellar-gray: "#81899b"
  twilight-gradient-overlay: "#d8ecf8"
  system-highlight-border: "#bacff7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.01px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.01px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.01px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
    letterSpacing: -0.01px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.01px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: 0px
  display:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.16
    letterSpacing: 0px
  display-xl:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.14
    letterSpacing: 0px
spacing:
  cardRadius: 12-16px
  buttonRadius: 999px
  elementGap: 8px
  sectionGap: 48px
components:
  login-form-card:
    role: 
  dark-light-mode-toggle-feature-badges:
    role: 
  section-heading-glassy-feature-cards:
    role: 
  primary-pill-button:
    role: Action
  secondary-outline-button:
    role: Secondary action
  solid-primary-button:
    role: Call to Action
  glassy-feature-card:
    role: Information Display
  login-form-card:
    role: Data Input Container
  minimal-input-field:
    role: Text Input
  status-badge:
    role: Metatag / Categorization
  icon-button:
    role: Small interactive element
---

## Overview

**North Star:** Midnight Command Center. Imagine a high-tech dashboard glowing softly in a dark room, with frosted glass elements reflecting subtle light.

AuthKit's design evokes an 'internal dashboard' feel — polished and functional without being sterile. Dark, translucent surfaces glow with subtle inner shadows and a restrained use of soft, muted blues. The sharp contrast between the deep `Midnight Abyss` background and crisp white text, paired with a limited palette of nearly achromatic blues, creates a sense of digital precision. The deliberate mix of round (`Pill`) and subtly rounded (`Subtle`) corners on different elements adds a tactile quality to the otherwise sleek, high-tech aesthetic, hinting at user-friendliness within a complex system.

### Do's

- Prioritize `Midnight Abyss` (#05060f) as the primary background color for all main page sections and large surface areas.
- Use `aeonikPro` (sub. Space Grotesk) for all marketing headlines (28-48px) and `Untitled Sans` (sub. Inter) for all body copy and UI elements (12-24px).
- Apply `Pill` (999px) radius to all primary and secondary action buttons, and `Subtle` (12-16px) radius to cards and containers.
- Employ the complex inner shadow `rgba(199, 211, 234, 0.12) 0px 1px 1px 0px inset, rgba(199, 211, 234, 0.05) 0px 24px 48px 0px inset, rgba(6, 6, 14, 0.7) 0px 24px 32px 0px` on elevated cards to create visual depth.
- Reserve `Neon Violet` (#663af3) exclusively for critical call-to-action buttons, maintaining its impact.
- Use subtle linear gradients for decorative elements, such as `linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(186, 215, 247, 0.12), rgba(0, 0, 0, 0))` for dividers or highlights.

### Don'ts

- Avoid using highly saturated, non-brand colors outside of the designated `Neon Violet` accent.
- Do not use generic drop shadows; instead, utilize the specified `inset` shadows and soft outer glows to achieve depth.
- Do not deviate from the specified font families; their visual distinction is core to the brand identity.
- Do not apply standard rectangular shapes to buttons; all interactive buttons should use `Pill` (999px) radius.
- Avoid using flat, opaque background colors for cards; instead, use translucent backgrounds with subtle inner shadows to maintain the 'frosted glass' effect.
- Do not use letter-spacing on display headings; `aeonikPro` should maintain `normal` letter spacing at larger sizes, while `Untitled Sans` uses a subtle negative spacing.

### Layout

The page uses a full-bleed dark background (`Midnight Abyss`) with content contained to a logical max-width. The hero section features a prominent, centered headline over a subtle background gradient and atmospheric glow. Sections follow a consistent top-to-bottom flow, with `sectionGap` providing generous vertical rhythm. Content often appears as centered stacks, sometimes with embedded UI components (like the login form) serving as visual focal points. Navigation is a simple, sticky top bar.

### Imagery

Minimalist and highly stylized. Photography is absent. Illustrations are abstract, geometric forms with subtle glows and transparent layers, often depicting UI components or data structures in a 'blueprint' or 'schematic' style against the dark background. Icons are simple, filled or outlined glyphs with high contrast, often set within softly rounded or pill-shaped containers. The imagery's role is primarily decorative atmosphere and conceptual explanation rather than literal depiction, with images sparsely used and serving as visual anchors in content sections. Overall density is text-dominant, allowing UI elements and graphics to 'breathe' in the dark space.

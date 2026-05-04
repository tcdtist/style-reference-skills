---
version: alpha
name: Column
description: Column's design is a blend of corporate authority and digital precision. It uses a very light, almost invisible dotted grid background to evoke a technical blueprint, while maintaining a clean, spacious feel. The deep-seated violet and stark orange accents provide clear interactive points set against a largely monochromatic text palette, suggesting seriousness and innovation. Strategic use of subtle box shadows and inner borders adds dimensionality without heavy handedness, like layers of frosted glass on a complex instrument.
colors:
  ink-blue: "#011821"
  code-black: "#000000"
  ghost-white: "#ffffff"
  fog-gray: "#f6f6f8"
  steel-gray: "#e3e4e8"
  charcoal-text: "#232730"
  slate-text: "#7c7f88"
  graphite: "#12161"
  deep-plum: "#111a4a"
  action-orange: "#ec652b"
  soft-horizon-gradient: "#d65620"
  faded-grid-blue: "#023247"
  success-moss: "#44b48b"
  radial-twilight-gradient: "#771c86"
  info-blue: "#7ea7e9"
  callout-cyan: "#167e6c"
  notification-teal: "#88deeb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.28px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.44px
spacing:
  cardRadius: 8px
  buttonRadius: 8px
  sectionGap: 48px
components:
  cta-button-group:
    role: 
  account-balance-card:
    role: 
  testimonial-feature-badge-card:
    role: 
  primary-navigation-link:
    role: Navigation
  ghost-button-inverted:
    role: Secondary interaction in dark contexts
  ghost-button-light:
    role: Secondary interaction in light contexts
  nav-button-light-text:
    role: Interaction in transparent sections
  card-callout-orange:
    role: Prominent information highlight
  badge-transparent:
    role: Categorization or small label
  secondary-button-outlined:
    role: Alternative interaction
---

## Overview

**North Star:** Architectural blueprint on white marble. Subtle background patterns convey structure beneath a pristine, luminous surface, punctuated by precise, high-contrast markers.

Column's design is a blend of corporate authority and digital precision. It uses a very light, almost invisible dotted grid background to evoke a technical blueprint, while maintaining a clean, spacious feel. The deep-seated violet and stark orange accents provide clear interactive points set against a largely monochromatic text palette, suggesting seriousness and innovation. Strategic use of subtle box shadows and inner borders adds dimensionality without heavy handedness, like layers of frosted glass on a complex instrument.

### Do's

- Use `Fog Gray` (#f6f6f8) for secondary section backgrounds to create subtle visual breaks, not just `Ghost White` (#ffffff).
- Apply `SuisseIntl` with a negative letter-spacing (-0.02em to -0.03em) for all headlines 28px and larger, tightening the text for a refined, modern feel.
- Borders on interactive elements should primarily use `Steel Gray` (#e3e4e8), providing definition without harshness.
- All cards and buttons should consistently use an `8px` border-radius for a soft, approachable geometry, except when specific components dictate otherwise.
- Emphasize critical actions with the `Action Orange` (#ec652b) background, reserving `Deep Plum` (#111a4a) primarily for non-primary interactive elements and brand accents.
- Use `SFMono` or `SuisseIntlMono` at 10-12px for all numerical data and code snippets to ensure alignment and technical precision.
- Enhance surface depth with the subtle card shadow: `rgba(17, 26, 74, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 1px 2px 0px, rgba(255, 255, 255, 0.5) 0px 0px 0px 1px inset`.

### Don'ts

- Do not use generic blue for primary interactive elements; save `Info Blue` (#7ea7e9) for graphics and non-actionable information to prevent dilution of `Deep Plum` and `Action Orange`.
- Avoid arbitrary uses of vivid colors; `Success Moss` (#44b48b) and `Notification Teal` (#88deeb) are reserved for semantic feedback, not decorative elements.
- Do not deviate from the `8px` default border-radius for primary UI elements across buttons and cards; exceptions are only for badges or specific component variants.
- Do not apply heavy, opaque box-shadows; the system relies on subtle, layered shadows to suggest depth and elevation.
- Avoid using `Code Black` (#000000) for large blocks of text; opt for `Ink Blue` (#011821) or `Charcoal Text` (#232730) for better readability and a softer appearance.
- Do not introduce new typefaces; `SuisseIntl` is for visual impact and headings, `Inter` for general readability, and monospaced fonts for technical context.
- Do not break the established vertical rhythm of 48px `sectionGap` and `24px` `elementGap` in content arrangements; maintain spaciousness.

### Layout

The page uses a `max-width` contained layout, centered on the screen, around a primary content width of approximately 1200px based on observable component widths and spacing. The hero section is a full-bleed, almost white background with a subtle dotted grid pattern creating a technical blueprint aesthetic (`Faded Grid Blue`). Content sections alternate between `Ghost White` and `Fog Gray` backgrounds, maintaining a consistent vertical `sectionGap` of 48px. Content is typically arranged in left-aligned blocks or two-column layouts where text is on one side and a product screenshot or graphic is on the other. Feature sections often use a grid of cards (implied 2-3 column from screenshots). The overall impression is spacious and organized, prioritizing information clarity over dense visual elements.

### Imagery

This site prominently features abstract, technical graphics and product UI screenshots. The graphics often depict dotted world maps or wireframe-like structures, usually in subdued blues and grays (`Faded Grid Blue`). Product UI screenshots are contained within card-like components, often with subtle drop shadows, showcasing financial data and code snippets with `SFMono` or `SuisseIntlMono` for a developer-centric feel. There are no lifestyle photos or complex illustrations; the imagery is functional and explanatory, reinforcing the brand's focus on backend infrastructure and developer tools. Visual density is low, with imagery serving more an atmospheric and explanatory role rather than a dominant content one.

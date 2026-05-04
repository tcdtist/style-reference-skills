---
version: alpha
name: Clerk
description: This design system operates on a principle of duality, presenting a bright, airy marketing facade that transitions into a dark, technical core. The light theme uses expansive white space and a singular, arresting violet accent for calls-to-action, creating focus and clarity. The dark theme, used for feature showcases, creates depth and a high-tech feel not with shadows, but with layered near-black surfaces and subtle, glowing inset highlights, giving components a 'pressed-into-glass' look. Typography is dominated by the geometric precision of Geist, with tight negative tracking on headlines to feel dense and technical. The system's identity is this shift from open and inviting to focused and sophisticated.
colors:
  clerk-violet: "#6c47ff"
  hero-aurora: "#6248f6"
  neon-cyan: "#5de3ff"
  lemon-glow: "#fff963"
  error-red: "#ef4444"
  white: "#ffffff"
  paper: "#f7f7f8"
  ash: "#eeeef0"
  slate: "#d9d9de"
  graphite: "#9394a1"
  tungsten: "#747686"
  iron: "#5e5f6"
  charcoal: "#42434d"
  onyx: "#212126"
  deep-space: "#131316"
  black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.54
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.53
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.12
    letterSpacing: -2.24px
spacing:
  cardRadius: 12px
  buttonRadius: 6px
  sectionGap: 96-128px
components:
  primary-cta-button-group:
    role: 
  create-account-auth-card:
    role: 
  dark-feature-cards-grid-authentication:
    role: 
  primary-cta-button:
    role: The main call to action.
  dark-secondary-button:
    role: Secondary action in dark contexts.
  light-ghost-button:
    role: Tertiary action or nav link.
  pill-tag:
    role: A tag or small status indicator.
  login-modal-card:
    role: Container for authentication forms.
  light-input-field:
    role: Standard text input for forms.
  logo-cloud-item:
    role: Displays a partner or customer logo.
---

## Overview

**North Star:** Developer's Prism. A system that refracts a single beam of brand identity into two distinct light and dark spectrums for different audiences.

This design system operates on a principle of duality, presenting a bright, airy marketing facade that transitions into a dark, technical core. The light theme uses expansive white space and a singular, arresting violet accent for calls-to-action, creating focus and clarity. The dark theme, used for feature showcases, creates depth and a high-tech feel not with shadows, but with layered near-black surfaces and subtle, glowing inset highlights, giving components a 'pressed-into-glass' look. Typography is dominated by the geometric precision of Geist, with tight negative tracking on headlines to feel dense and technical. The system's identity is this shift from open and inviting to focused and sophisticated.

### Do's

- Use the dual theme structure: light for top-level marketing, dark for in-depth feature sections.
- Apply negative letter-spacing to all `geistNumbers` headlines larger than 24px.
- Reserve `Clerk Violet (#6c47ff)` exclusively for primary CTAs and interactive focus states.
- On dark surfaces, use inset `box-shadow` with a subtle white color to create the signature 'pressed-in' highlight.
- Use a `6px` radius for interactive elements like buttons and inputs, and a larger `12px` for container cards.
- Maintain generous `96-128px` vertical spacing between page sections.
- For dark theme cards, use `Onyx (#212126)` for the background and `Iron (#5e5f6e)` for text to achieve a lower-contrast, glowing effect.

### Don'ts

- Don't use drop shadows in the dark theme; use inset highlights instead.
- Don't apply `Clerk Violet` to large fields of color or body text.
- Don't mix radii; stick to the `6px/12px/9999px` system.
- Don't build pages using only one theme; the light/dark transition is a core part of the identity.
- Don't use pure black (#000000) for dark theme backgrounds; use `Deep Space (#131316)` for the page background and `Onyx (#212126)` for cards.
- Don't use photography; rely on UI mockups and abstract gradients.
- Don't round the corners of top-level navigation, header, or footer containers.

### Layout

The layout is contained within a 1280px max-width, with content centered. The hero section is a special case, featuring a full-bleed radial gradient background behind centered text. Page structure follows a clear rhythm, alternating between expansive white sections for marketing content and dense, dark sections for technical feature grids. Content is organized in simple, balanced compositions, typically centered stacks or 2- and 3-column grids for feature lists. Navigation is handled by a standard, sharp-edged top header that remains conventional.

### Imagery

This is a text-and-UI-dominant design. Imagery consists almost exclusively of product component screenshots and abstract background gradients. There is no photography. UI mockups are presented cleanly, often within styled containers or cards that match the page's theme. The visual language is explanatory and product-focused, using graphical elements to demonstrate functionality rather than create atmospheric mood. Icons are likely to be simple, solid, and single-color fills.

### Elevation

Elevation is achieved through two distinct methods, avoiding generic drop shadows. On light backgrounds, soft, multi-layered shadows create realistic depth. On dark backgrounds, elevation is inverted; components use subtle inset highlights (1px white at low opacity) to appear 'pressed in' or 'glowing from within', creating a sophisticated, technical surface texture.

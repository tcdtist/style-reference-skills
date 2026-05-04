---
version: alpha
name: Neon
description: The design feels like a high-end server room after dark — a pure black void where information glows. A strict monochrome palette of pure black (#000000) and white (#ffffff) creates maximum contrast, ensuring text and UI are starkly legible. All visual energy comes from a single, electric green (#34d59a) that mimics terminal output and data visualizations, used exclusively for accents and decorative, code-like background graphics. The system achieves depth not with shadows but with subtle, layered near-black surfaces. A unique tension exists between the pill-shaped buttons and the sharp, 4px corners of all other UI containers.
colors:
  neon-glow: "#34d59a"
  neon-muted: "#285d49"
  scanline-fade: "#39a57d"
  system-warning: "#ff3621"
  whiteout: "#ffffff"
  ash: "#797d86"
  pewter: "#94979"
  cloud: "#c9cbcf"
  graphite-light: "#303236"
  graphite: "#242628"
  graphite-deep: "#151617"
  depth: "#0a0a0b"
  blackout: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: -0.7px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: -0.7px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.43px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.38
    letterSpacing: -0.36px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.25
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
    letterSpacing: -0.64px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.13
    letterSpacing: -1.2px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 4px
  buttonRadius: 9999px
  elementGap: 8-16px
  sectionGap: 96-128px
components:
  cta-button-group:
    role: 
  terminal-code-block:
    role: 
  feature-navigation-list:
    role: 
  primary-pill-button:
    role: The main call-to-action, e.g., 'Get started', 'Sign up'.
  ghost-pill-button:
    role: Secondary actions, e.g., 'Read the docs', 'Log in'.
  feature-list-item:
    role: Bulleted items in feature sections.
  navigation-link:
    role: Links in the main site header.
  tag-badge:
    role: Small informational tags, like 'A DATABRICKS COMPANY'.
  announcement-bar:
    role: A persistent top bar for site-wide announcements.
  logo-bar:
    role: A section displaying logos of partner or client companies.
---

## Overview

**North Star:** Server Room After Dark. A deep black environment where data and interactions are the only sources of light.

The design feels like a high-end server room after dark — a pure black void where information glows. A strict monochrome palette of pure black (#000000) and white (#ffffff) creates maximum contrast, ensuring text and UI are starkly legible. All visual energy comes from a single, electric green (#34d59a) that mimics terminal output and data visualizations, used exclusively for accents and decorative, code-like background graphics. The system achieves depth not with shadows but with subtle, layered near-black surfaces. A unique tension exists between the pill-shaped buttons and the sharp, 4px corners of all other UI containers.

### Do's

- Use pure Blackout (#000000) for all main section backgrounds.
- Reserve Neon Glow (#34d59a) for interactive highlights, data visualizations, and small decorative accents only.
- Employ the Whiteout (#ffffff) pill button for all primary calls-to-action.
- Use GeistMono for all code snippets, terminal simulations, and compact UI labels.
- Apply tight negative letter-spacing (-1.2px or more) to all headlines 48px and larger.
- Achieve depth by layering near-black surfaces (e.g., #151617 on #000000), not with box-shadows.
- Maintain a strict dichotomy of shapes: 9999px radius for buttons, 4px for all other containers.

### Don'ts

- Don't use gradients or background colors on main page sections.
- Don't use traditional box-shadows for elevation.
- Don't use Neon Glow (#34d59a) for body copy or headlines.
- Don't use saturated colors other than the primary brand green and the occasional red alert accent.
- Don't mix Inter and GeistMono within the same sentence or headline.
- Don't use rounded corners larger than 4px on cards, code blocks, or input fields.
- Don't create buttons that aren't pill-shaped.

### Layout

The page structure is full-bleed black, creating an immersive, infinite canvas. A centered headline over an abstract data-viz graphic defines the hero. Below the hero, content is organized within a centered max-width container (approx. 1200px), creating focus. Sections flow seamlessly into one another without visual dividers, relying on generous vertical spacing (96-128px) to create rhythm. Content is arranged in simple, symmetrical layouts: centered stacks for headlines, two-column grids for feature lists, and multi-column grids for logos. A sticky header provides persistent navigation.

### Imagery

Visuals are exclusively abstract, generative graphics resembling data streams, server activity, or glitch art. Composed of thin vertical lines in Neon Glow (#34d59a) and other muted tones, they serve as atmospheric backdrops rather than informational content. Product visuals are limited to stylized screenshots of terminal windows and code blocks, treated as UI components. Photography and traditional illustrations are absent. This text-and-abstract-graphic approach creates a purely digital, code-native environment.

### Elevation

Elevation is achieved through layered, near-black surfaces, not traditional box-shadows. Surfaces like Graphite Deep (#151617) float on the pure Blackout (#000000) background, creating depth through contrast without relying on blurs. This reinforces a flat, digital-native aesthetic.

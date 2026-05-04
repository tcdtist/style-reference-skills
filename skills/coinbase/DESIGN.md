---
version: alpha
name: Coinbase
description: The design system establishes a feeling of digital-native trust, grounded in a high-contrast, minimalist palette. A precise foundation of pure white (#ffffff) and near-black (#0a0b0d) creates an environment of clarity and focus. The system's entire personality is injected through a single, electric `Coinbase Blue` (#0052ff), which is reserved exclusively for primary actions and brand marks, acting as a confident guide. A suite of custom fonts (Coinbase Display, Sans, Text) provides a unique and cohesive typographic voice across all scales. Depth is achieved not with shadows but with bold, full-width color blocks, alternating between bright white and deep midnight sections, creating a clean, architectural rhythm.
colors:
  coinbase-blue: "#0052ff"
  interactive-blue: "#578bfa"
  pure-white: "#ffffff"
  midnight: "#0a0b0d"
  slate: "#5b616"
  ash: "#8a919"
  frost: "#f7f8f9"
  cloud: "#eef0f3"
  pewter: "#dedfe2"
  charcoal: "#141519"
  positive-green: "#27ad75"
  negative-red: "#f0616d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.54
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.09
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
spacing:
  cardRadius: 24px
  buttonRadius: 56px
components:
  primary-secondary-button-group:
    role: 
  crypto-price-list-card:
    role: 
  earn-apy-feature-banner:
    role: 
  primary-cta-button:
    role: The main call-to-action on any page.
  secondary-pill-button:
    role: Secondary action, often on a dark background.
  ghost-link:
    role: Inline, text-style interactive elements.
  header-nav-link:
    role: Top-level navigation items.
  filter-tag:
    role: Toggleable filter in data views.
  footer-link:
    role: Tertiary navigation links in the page footer.
  large-headline:
    role: The primary heading for a page or hero section.
---

## Overview

**North Star:** Digital Trust, Blueprinted. A system built on the clarity of an architectural plan, energized by a single, electric blue neuron.

The design system establishes a feeling of digital-native trust, grounded in a high-contrast, minimalist palette. A precise foundation of pure white (#ffffff) and near-black (#0a0b0d) creates an environment of clarity and focus. The system's entire personality is injected through a single, electric `Coinbase Blue` (#0052ff), which is reserved exclusively for primary actions and brand marks, acting as a confident guide. A suite of custom fonts (Coinbase Display, Sans, Text) provides a unique and cohesive typographic voice across all scales. Depth is achieved not with shadows but with bold, full-width color blocks, alternating between bright white and deep midnight sections, creating a clean, architectural rhythm.

### Do's

- Use `Coinbase Blue` (#0052ff) exclusively for primary CTAs and the brand logo.
- Define primary buttons with the signature 56px border-radius.
- Construct all major page headlines using the `CoinbaseDisplay` font.
- Create visual hierarchy by alternating full-width #ffffff and #0a0b0d sections.
- Reserve `Slate` (#5b616e) for all secondary body copy and footer links.
- Set body text at 16px with `CoinbaseSans` or `CoinbaseText` for optimal readability.
- Apply a 24px radius to all larger content cards.

### Don'ts

- Don't use shadows on any element; rely on color blocking for depth.
- Don't use `Coinbase Blue` (#0052ff) for text or non-interactive elements.
- Don't use multiple saturated colors in one section; stick to the neutral palette with one blue accent.
- Don't use sharp corners for buttons or tags; they must be rounded (56px or 100000px).
- Don't use system fonts; the custom Coinbase font suite is essential to the brand identity.
- Don't create visual dividers with lines; use negative space and background color changes.
- Don't make footer links any color other than `Slate` (#5b616e).

### Layout

The layout is a centered, max-width container (approx. 1200px) providing a stable reading experience. A key pattern is the rhythmic alternation between a white-background hero (split-column text/visual) and a full-bleed dark feature section. This creates dramatic contrast and pacing. Content is organized in simple, clear structures like 2-column feature blocks and multi-column card grids. Generous vertical spacing (64px+) between sections ensures each message has room to breathe.

### Imagery

Visuals are dominated by abstract vector illustrations and clean product UI screenshots. Illustrations use a flat-color, geometric style featuring brand colors, making complex financial concepts feel approachable and modern. They are always contained within layout blocks, reinforcing the structured, grid-based feel of the page. Photography is absent, placing the focus squarely on the product's interface and stylized brand graphics.

### Elevation

The design intentionally avoids shadows. Depth and hierarchy are created through color blocking, contrasting light backgrounds (#ffffff) with distinct dark sections (#0a0b0d).

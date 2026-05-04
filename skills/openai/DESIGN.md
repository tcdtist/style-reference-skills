---
version: alpha
name: OpenAI
description: OpenAI.com reads like a blank page waiting to be written on — pure white, near-zero chromatic saturation (1%), and typography that does everything. The custom OpenAI Sans carries the entire visual weight: tightly tracked at -0.03em for large display text, it condenses space so headlines feel carved rather than set. Black (#000000) and border-gray (#e5e7eb) are the only tools; no accent colors, no gradients on the core UI, no decorative illustration. Color arrives exclusively through editorial imagery — soft-focus flower macros, pastel gradient thumbnail cards — making those images feel explosive against the white canvas. The signature tension is 9999px pills for interactive chips and inputs sitting inside a layout where cards use a very specific 6.08px radius, creating a system that pairs one extreme roundness with one precise near-flat radius.
colors:
  void: "#000000"
  fog-border: "#e5e7eb"
  chalk: "#f1f1f1"
  graphite: "#666666"
  ash: "#8f8f8f"
  canvas: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.64
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.26
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.21
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.16
    letterSpacing: -1.44px
spacing:
  cardRadius: 6.08px
  buttonRadius: 9999px
  elementGap: 8-16px
  sectionGap: 64-80px
components:
  conversational-input-with-category-chips:
    role: 
  editorial-news-card-featured-sidebar-stack:
    role: 
  button-group-primary-ghost-soft-chips:
    role: 
  primary-navigation-bar:
    role: Top-level site navigation
  filled-pill-cta-button:
    role: Primary call-to-action
  ghost-pill-button:
    role: Secondary actions, navigation chips
  soft-rounded-button:
    role: Feature category chips (Search with ChatGPT, Talk with ChatGPT, Sora)
  conversational-input:
    role: ChatGPT-style prompt entry field
  editorial-news-card:
    role: Article thumbnails in news/stories grids
  image-overlay-badge:
    role: Model or product name displayed over hero images
  nav-text-link:
    role: Top-level navigation items
  inline-text-link:
    role: Body copy hyperlinks and 'View more' actions
  category-label-badge:
    role: Content taxonomy tags (Product, Company, Research)
  footer-column-block:
    role: Site footer navigation
---

## Overview

**North Star:** Blank page before the first word — a design that treats white space as the most powerful element, reserving all color for user-generated and editorial content.

OpenAI.com reads like a blank page waiting to be written on — pure white, near-zero chromatic saturation (1%), and typography that does everything. The custom OpenAI Sans carries the entire visual weight: tightly tracked at -0.03em for large display text, it condenses space so headlines feel carved rather than set. Black (#000000) and border-gray (#e5e7eb) are the only tools; no accent colors, no gradients on the core UI, no decorative illustration. Color arrives exclusively through editorial imagery — soft-focus flower macros, pastel gradient thumbnail cards — making those images feel explosive against the white canvas. The signature tension is 9999px pills for interactive chips and inputs sitting inside a layout where cards use a very specific 6.08px radius, creating a system that pairs one extreme roundness with one precise near-flat radius.

### Do's

- Use #000000 as the only filled button background color — no colored CTAs
- Apply 9999px border-radius to all pill buttons, ghost buttons, and the conversational input field
- Use 6.08px border-radius on all image-containing card elements and thumbnail clips
- Set display headlines (48px) with letter-spacing -0.03em; omit tracking overrides below 22px unless using caps labels
- Use #e5e7eb as the only border/divider color — never darken it or tint it
- Introduce color only through photography or editorial imagery — never through UI backgrounds or button fills
- Maintain minimum 64px vertical gap between page sections

### Don'ts

- Do not use any colored accent (blue, green, orange) on interactive elements or backgrounds
- Do not apply box-shadows to cards — separation comes from whitespace, not depth
- Do not mix border-radius values between pill (9999px) and card (6.08px) contexts — the contrast is intentional and the values must be exact
- Do not use weight below 400 or above 600 in OpenAI Sans — the 400/500/600 triad defines all typographic hierarchy
- Do not use background colors on section blocks — the page stays #ffffff wall-to-wall
- Do not add letter-spacing at body sizes (16-18px) — tracking is only for display (negative) and caps labels (positive +0.011em)
- Do not use more than two typographic colors: #000000 for primary and #666666 for secondary — #8f8f8f is reserved for disabled/tertiary only

### Layout

Max-width centered layout (~1200px) on a pure white canvas. Hero section is minimal-centered: headline at 48px centered horizontally, input box centered below, chip buttons centered below that — no hero image, no background treatment. Below hero: asymmetric two-column editorial grid (large featured card left ~60% width, vertical stack of smaller cards right ~35%). Further sections use consistent top-to-bottom stacking with 64-80px section gaps. Navigation is a fixed top bar at 64px, logo left, links center-left, CTAs right. Footer is a multi-column link grid. No alternating dark/light bands — the entire page is white with content as the only visual differentiation.

### Imagery

Editorial photography is the only source of color on the page — soft-focus macro flower shots in warm oranges/pinks, pastel gradient abstract tiles for sidebar cards in blue/purple/teal. These images are contained within 6.08px rounded-corner tiles, never full-bleed on the page. No lifestyle photography, no people, no UI screenshots in news cards. The color in images feels deliberate and curated — always soft, always gradient-adjacent, never harsh or literal. Icons are monochrome: outlined/filled in #000000 or #666666, 1.5px apparent stroke weight. Image density is low — images appear only in editorial card grids, leaving vast white space across the page.

### Elevation

Elevation is functionally absent. The only shadow in the system — rgba(0,0,0,0.02) 0px 4px 6px, rgba(0,0,0,0.05) 0px 0px 2px — appears on the CTA button and is so faint it reads as a print artifact rather than depth. Cards have no shadow; separation comes from whitespace and the 6.08px image clip radius, not shadow stacking. This is a flat surface philosophy where z-axis is communicated through opacity and spatial distance, not shadow.

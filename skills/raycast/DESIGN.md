---
version: alpha
name: Raycast
description: Raycast lives in near-total darkness — a #040506 void where UI surfaces emerge as barely-lighter charcoal strata rather than conventional cards. The signature move is depth through shadow layering: the keyboard-key shadow `rgba(0,0,0,0.4) 0px 1.5px 0.5px 2.5px, rgb(0,0,0) 0px 0px 0.5px 1px, rgba(0,0,0,0.25) 0px 2px 1px 1px inset, rgba(255,255,255,0.2) 0px 1px 1px 1px inset` makes interactive elements feel physically pressable — a tactile metaphor for keyboard shortcuts. The brand red (#FF6363) appears sparingly as a status signal and logo accent rather than a CTA color; primary download buttons are a near-white #E6E6E6 pill on black — inverted convention. Radial gradients with blue and purple cores bleed into the dark canvas at very low opacity, creating the impression of colored light sources behind frosted obsidian. Type is Inter with tight negative tracking at display sizes, shifting to loose positive tracking on micro labels and badges — creating a two-register system where headlines contract and metadata breathes.
colors:
  void-black: "#040506"
  deep-charcoal: "#07080a"
  graphite-700: "#111214"
  graphite-600: "#1b1c1e"
  graphite-500: "#363739"
  graphite-400: "#454647"
  slate-300: "#6a6b6c"
  slate-200: "#9c9c9d"
  ash-50: "#e6e6e6"
  snow: "#ffffff"
  ember-red: "#ff6363"
  ember-dark: "#452324"
  mint-signal: "#59d499"
  sky-signal: "#56c2ff"
  nebula-glow: "#043f96"
  violet-haze: "#523091"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: 0.8px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
    letterSpacing: 0.06px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.05px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.06px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
    letterSpacing: -0.11px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -0.13px
spacing:
  cardRadius: 11px
  buttonRadius: 8px
  elementGap: 15px
  sectionGap: 80px
components:
  download-button-group:
    role: 
  dark-badge-status-indicator-collection:
    role: 
  raycast-search-input-app-filter-ui:
    role: 
  primary-download-button:
    role: Main CTA for app download
  ghost-navigation-link:
    role: Top navigation items
  keyboard-key-element:
    role: Interactive keyboard shortcut visualizer
  feature-card:
    role: Marketing feature section cards
  glass-product-card:
    role: Product screenshot / app UI demo containers
  outlined-highlight-card:
    role: Extension/store item cards with white ring
  dark-badge:
    role: Version numbers, category labels, status chips
  search-input:
    role: In-app filter/search within product demo
  muted-inline-button:
    role: Secondary text actions and version badges
  navigation-ring-link:
    role: Circular icon links in nav or social areas
  ember-status-indicator:
    role: Colored dot or label for status signals inside product UI
  section-atmosphere-backdrop:
    role: Per-section colored radial glow behind content
---

## Overview

**North Star:** Obsidian command terminal — a near-black void where UI surfaces emerge like backlit glass panels, depth created by shadow layering rather than color contrast.

Raycast lives in near-total darkness — a #040506 void where UI surfaces emerge as barely-lighter charcoal strata rather than conventional cards. The signature move is depth through shadow layering: the keyboard-key shadow `rgba(0,0,0,0.4) 0px 1.5px 0.5px 2.5px, rgb(0,0,0) 0px 0px 0.5px 1px, rgba(0,0,0,0.25) 0px 2px 1px 1px inset, rgba(255,255,255,0.2) 0px 1px 1px 1px inset` makes interactive elements feel physically pressable — a tactile metaphor for keyboard shortcuts. The brand red (#FF6363) appears sparingly as a status signal and logo accent rather than a CTA color; primary download buttons are a near-white #E6E6E6 pill on black — inverted convention. Radial gradients with blue and purple cores bleed into the dark canvas at very low opacity, creating the impression of colored light sources behind frosted obsidian. Type is Inter with tight negative tracking at display sizes, shifting to loose positive tracking on micro labels and badges — creating a two-register system where headlines contract and metadata breathes.

### Do's

- Use #040506 as the page canvas ground — never a warm or cool-tinted near-black, only this near-pure neutral void
- Apply the keyboard key shadow stack (rgba(0,0,0,0.4) outer, rgba(255,255,255,0.2) inset top highlight) on any element meant to feel physically pressable
- Keep headline letter-spacing negative at display sizes: -0.11em at 56px, -0.13em at 64px — critical to the compressed, dense headline feel
- Use radial gradients (blue or violet, max 0.7 opacity core fading to transparent) as per-section atmosphere layers behind content — never flat colored sections
- Badge and chip text: Inter weight 500, positive letter-spacing +0.04em to +0.073em, on #1B1C1 background — the tracking contrast with headlines is part of the two-register system
- For primary CTAs use #E6E6E6 background with #2F3031 text at 8px radius — not white, not a chromatic color
- Use GeistMono weight 300–400 for all code, version strings, and terminal commands at 10–14px with +0.017em to +0.05em tracking

### Don'ts

- Do not use any colored backgrounds for section containers — all surface backgrounds must be from the #040506 → #1B1C1 neutral stack only
- Do not apply border-radius above 20px to cards — the design uses 8px, 11px, 16px, 20px; rounder forms break the precision instrument aesthetic
- Do not use #FF6363 as a button fill or large background — it appears only as a small status dot, icon accent, or single-word label text
- Do not use white (#FFFFFF) as a button background — the primary action uses #E6E6E6 specifically; pure white reads as system/OS chrome at this scale
- Do not use positive letter-spacing on headings above 24px — all display and heading text must track neutral-to-negative
- Do not create dividers between sections using horizontal rules or color changes — section separation happens through 80px vertical gaps and radial gradient shifts only
- Do not use drop-shadows with color tints (blue, red, etc.) — all shadows must be rgba(0,0,0,x) or rgba(255,255,255,x) only, keeping elevation monochromatic

### Layout

Max-width ~1200px centered on wide viewports, but hero section is full-bleed dark with no side constraints. Navigation is a fixed top bar: ~740px wide pill-shaped container with rounded edges (11px radius), dark #1B1C1 background, logo left + nav links center + CTA right. Hero: full-viewport height with centered headline (2-line display text) over full-bleed abstract photography, CTA buttons centered below. Second section: dark background with centered 2-line heading, then a contained macOS window mockup (70% width) floating below. Section rhythm: seamless dark-to-dark flow with no visible dividers — depth changes come from radial gradient atmosphere shifts rather than alternating light/dark bands. Feature sections use 2-3 column card grids at 11–16px radius. Spacing between sections: ~80px vertical. The overall impression is vertical scrolling through a continuous dark space with distinct 'zones' of light created by radial gradients.

### Imagery

Primarily abstract photography — the hero uses extreme close-up macro shots of diagonal red/pink forms on black (appear to be keyboard key edges or geometric objects) treated with deep shadow and vivid red-to-pink chromatic saturation. These fill the full viewport bleed with no containment border or radius, bleeding edge-to-edge. Product screenshots appear in the second section as contained glass-panel mockups with 12px radius and dark UI chrome, simulating a live macOS window. No lifestyle photography, no human subjects. Icons are monochromatic filled/outlined at ~16px in #6A6B6C or #9C9C9D — uniform low-contrast weight. The visual density is image-light: one full-bleed hero photograph, then a transition to text + contained product UI mockup. Decorative SVG graphics (blue/violet strokes in the color data: #02193b, #143ca3, #63a1ff) serve as background illustration layers behind feature sections at very low opacity, not visible as content.

---
version: alpha
name: Travelperk
description: Perk radiates controlled energy — a lime-charged black-and-cream field where electric #beff50 punches through near-black and warm off-white surfaces. The warm off-white (#f5f5eb) hero background reads as aged paper next to the electric lime, making the palette feel tactile rather than digital. A single custom sans, OTSono, does all the work at every scale from 10px UI labels to 200px display glyphs, with tight 0.89-0.90 leading and -0.03em tracking at display sizes making the oversized headlines feel compressed and purposeful. The 26px radius is the system's dominant shape language — applied uniformly to buttons, cards, and image frames — creating rounded-corner consistency that softens an otherwise high-contrast black/lime/cream palette. No shadows, no gradients — surfaces differ only by background value, with #14140f dark cards, #ffffff white cards, and #f5f5eb warm-cream cards all sharing the same 26px radius and no elevation metaphor.
colors:
  electric-lime: "#beff50"
  near-black: "#14140f"
  pure-black: "#000000"
  pure-white: "#ffffff"
  warm-cream: "#f5f5eb"
  parchment-card: "#fafaf5"
  stone: "#d2d2c8"
  graphite: "#6e6e64"
  charcoal: "#30302a"
  slate-border: "#919183"
  signal-blue: "#144fcc"
  coral-alert: "#eb3131"
  mint-confirm: "#1dc479"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -1.92px
  display:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 0.89
    letterSpacing: -2.7px
spacing:
  cardRadius: 26px
  buttonRadius: 26px
  elementGap: 8-16px
  sectionGap: 60px
components:
  button-group:
    role: 
  tab-pill-selector-with-feature-cards:
    role: 
  flight-info-card-status-badges:
    role: 
  primary-cta-button:
    role: Main conversion action — 'Book a demo', 'Get started'
  ghost-button-dark:
    role: Secondary actions on light backgrounds
  ghost-button-light:
    role: Secondary actions on dark backgrounds
  circular-icon-button-filled:
    role: Play, pause, nav arrows
  circular-icon-button-ghost:
    role: Alternate icon-only action
  white-feature-card:
    role: Product UI preview cards, floating info overlays on hero
  cream-feature-card:
    role: Section feature blocks on alternating layouts
  dark-feature-card:
    role: High-contrast feature highlight, pulled quote blocks
  lime-accent-card:
    role: Hero feature callout — 'Real-time visibility' highlight block
  text-badge-status-chip:
    role: 'On time', 'Expense submitted', 'Confirmed', 'Needs Approval' labels
  announcement-banner:
    role: Top-of-page global notification strip
  tab-pill-selector:
    role: 'Automate / Control / Support' section toggles
---

## Overview

**North Star:** Lime spark on warm parchment — electric CTA green against aged-paper cream, zero shadows, everything rounded at exactly 26px.

Perk radiates controlled energy — a lime-charged black-and-cream field where electric #beff50 punches through near-black and warm off-white surfaces. The warm off-white (#f5f5eb) hero background reads as aged paper next to the electric lime, making the palette feel tactile rather than digital. A single custom sans, OTSono, does all the work at every scale from 10px UI labels to 200px display glyphs, with tight 0.89-0.90 leading and -0.03em tracking at display sizes making the oversized headlines feel compressed and purposeful. The 26px radius is the system's dominant shape language — applied uniformly to buttons, cards, and image frames — creating rounded-corner consistency that softens an otherwise high-contrast black/lime/cream palette. No shadows, no gradients — surfaces differ only by background value, with #14140f dark cards, #ffffff white cards, and #f5f5eb warm-cream cards all sharing the same 26px radius and no elevation metaphor.

### Do's

- Use #beff50 as the exclusive CTA fill — max one lime button and one lime surface element per viewport; never fill two adjacent containers with lime
- Apply 26px border-radius to all cards, buttons, and image frames regardless of content type — the single radius value IS the shape language
- Set display headlines (64px+) at line-height 0.89–1.00 with -0.03em letter-spacing so stacked lines form a compressed typographic mass
- Keep all surfaces on the warm achromatic scale: #14140f / #30302a / #fafaf5 / #f5f5eb / #ffffff — never introduce cool-tinted grays or blue-cast neutrals
- Use #6e6e64 for all supporting body text and card subtext, reserving #14140f for primary labels and headlines only
- Distinguish card hierarchy by background value alone: white (#ffffff) → cream (#fafaf5) → warm cream (#f5f5eb) → dark (#14140f) — no shadows, no borders needed
- OTSono is the only typeface — use size and weight (400 vs 500) as the sole differentiation between body and emphasis

### Don'ts

- Never use box-shadow or drop-shadow on any card or button — elevation is achieved through background color contrast, not shadow depth
- Never use more than two border-radius values in a layout: 26px for all cards/buttons/images, 8px for badges/chips, 50% for icon-only circles — no other radii
- Never place Electric Lime (#beff50) text on a white background — lime is a background color only; text on lime must be #14140f or #000000
- Never introduce a second typeface — OTSono handles all scales from 10px UI labels to 200px display; switching fonts breaks the single-voice identity
- Never use cool grays (#9ca3af, #6b7280 etc.) — all neutrals must carry the warm undertone of the #f5f5eb → #6e6e64 → #14140f scale
- Never stack two dark cards (#14140f) without a cream or white surface between them — the dark/light alternation defines the page rhythm
- Never apply the 26px radius to inline text links, dividers, or table rows — radius belongs only on bounded box elements

### Layout

Max-width ~1200px centered on a full-bleed warm cream (#f5f5eb) hero. Hero is full-viewport with centered headline text (OTSono 80-90px) and floating product UI cards arranged in a loose z-pattern around a central phone mockup. Below hero: alternating white and cream bands, each 60px vertical padding. Feature sections use a horizontal scroll card row (4 cards visible, arrow-navigated) rather than a static grid. Tab-switched feature sections (Automate / Control / Support) show 3-column card layouts within a contained max-width box. Logo bar (social proof) runs full-width on cream. Navigation is sticky, top bar, minimal — no mega-menu. Section transitions are seamless (no visual dividers, pure background-color shifts). Overall density is spacious — generous whitespace between the large display type and card elements.

### Imagery

Product UI screenshots displayed as floating cards over the hero background, cropped at 26px radius to match the card system. A real hand holding a phone (product mockup) anchors the hero center — lifestyle-adjacent but product-focused, not editorial. The second section features a full-bleed video embed (no autoplay) with a 'Watch full video' pill button overlay, using motion documentary-style footage. Illustrations inside feature cards are flat, line-based, geometric — two-color (black line on lime or cream fill), matching the brand palette exactly. Icons throughout the UI are 1.5px stroke weight, monochrome (#14140f or #ffffff depending on surface). No photography outside the hero hand shot and video. Image-to-text ratio is low — the design is text and UI-screenshot dominant.

### Elevation

Zero shadow system — no box-shadow appears on any card or interactive element. Hierarchy is communicated entirely through background color: #14140f dark cards sit visually 'above' cream backgrounds not through shadow depth but through contrast mass. White (#ffffff) cards appear to float over #f5f5eb sections purely because of the value difference. This flat-surface approach makes the Electric Lime (#beff50) accent carry all the visual weight that shadows would otherwise provide.

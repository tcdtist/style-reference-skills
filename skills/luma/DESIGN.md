---
version: alpha
name: Luma
description: Luma feels like a summer festival poster designed by a typographer — warm, alive, and unapologetically joyful. The page is nearly achromatic in its UI chrome (near-black #131517 text, mid-gray #656768 secondary, light-gray backgrounds) which makes the explosion of color in the hero 3D render feel earned and deliberate. The signature move is a full-spectrum radial gradient — cyan through violet through pink through orange — used as a single accent arc on the logo mark, transforming a system-font UI into something recognizably branded. Headlines run at 64px weight 400 with -0.016em tracking, relying on size alone rather than weight to command attention — the restraint is the statement. The CTA button is a dark near-black pill (#333537) against white, inverting the typical bright-CTA convention so the colorful hero imagery provides all the visual energy.
colors:
  obsidian: "#131517"
  graphite: "#656768"
  ash: "#a5a6a8"
  charcoal: "#333537"
  pure-white: "#ffffff"
  ink-black: "#000000"
  luma-spectrum: "#099ef1"
  flamingo: "#f31a7c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 20
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 24
    letterSpacing: -0.26px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 27
    letterSpacing: -0.29px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 24
    letterSpacing: -0.32px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 66
    letterSpacing: -1.02px
spacing:
  cardRadius: 15px
  buttonRadius: 15px
  elementGap: 8px
  sectionGap: 32px
components:
  hero-headline-cta-button:
    role: 
  event-card:
    role: 
  footer-navigation-row:
    role: 
  logo-wordmark:
    role: Brand identity, top-left nav
  nav-bar:
    role: Primary navigation, sticky top
  time-display-badge:
    role: Ambient contextual info in nav
  hero-headline:
    role: Primary value statement
  hero-body-text:
    role: Supporting copy below headline
  footer-navigation-links:
    role: Footer utility links
  footer-social-icons:
    role: Social media links in footer
  explore-events-link:
    role: Secondary nav CTA
---

## Overview

**North Star:** Festival poster behind frosted glass — the UI recedes into gray silence so a technicolor 3D world can explode through the center of the page.

Luma feels like a summer festival poster designed by a typographer — warm, alive, and unapologetically joyful. The page is nearly achromatic in its UI chrome (near-black #131517 text, mid-gray #656768 secondary, light-gray backgrounds) which makes the explosion of color in the hero 3D render feel earned and deliberate. The signature move is a full-spectrum radial gradient — cyan through violet through pink through orange — used as a single accent arc on the logo mark, transforming a system-font UI into something recognizably branded. Headlines run at 64px weight 400 with -0.016em tracking, relying on size alone rather than weight to command attention — the restraint is the statement. The CTA button is a dark near-black pill (#333537) against white, inverting the typical bright-CTA convention so the colorful hero imagery provides all the visual energy.

### Do's

- Use the Luma Spectrum radial gradient exclusively on the logo mark / brand icon — never apply it to buttons, backgrounds, or text elsewhere
- Reserve Flamingo #f31a7c for single accent phrases within otherwise monochromatic headlines — one phrase maximum per heading
- Set display headlines (64px) at weight 400 with letter-spacing -0.016em; resist increasing weight to bold even for hero contexts
- Keep CTA button fill at #333537 (Charcoal) against white backgrounds — let photography and 3D renders provide the chromatic energy
- Use #656768 (Graphite) for all secondary UI text: nav links, subtext, footer labels, icon fills
- Apply 15px border-radius to buttons and interactive cards; use 8px for smaller tags and nav items
- Maintain -0.016em letter-spacing across all type sizes from 13px to 64px — this single value unifies the entire type system

### Don'ts

- Never use the Luma Spectrum gradient as a button background, section fill, or text gradient outside the logo mark
- Don't increase headline weight above 400 for emphasis — use Flamingo #f31a7c inline color instead
- Don't add drop shadows or card elevation to the primary UI chrome — the design is intentionally flat to let imagery carry visual depth
- Don't use Flamingo #f31a7c on more than one word cluster per screen — it loses meaning if applied broadly
- Don't use pure #000000 for body text — use Obsidian #131517 which carries slight warmth and reduces harshness against white
- Don't place colored or gradient backgrounds behind the hero text column — white only, so the split layout reads as grounded UI vs expressive imagery

### Layout

Max-width approximately 1200px, centered. Hero is a two-column split: left column contains headline, body copy, and CTA button (left-aligned, approximately 40% width); right column contains the full-bleed circular 3D render (approximately 60% width), extending to the top edge. Navigation is a full-width bar at 52px height, white, with logo-left and utility-links-right pattern. Footer is a single horizontal row with logo + nav links left and social icons right, 24px vertical padding. No alternating section bands visible — the single viewport is hero-only, with footer directly below. Layout is spacious in the left text column (173px left margin from data) and dense in information hierarchy.

### Imagery

The hero is defined by a large 3D render of a smartphone floating above a tropical beach scene, surrounded by playful 3D objects (inflatable rings, flamingo float, calendar emoji, sparkles). The render is fully contained within a circular crop with a sky-blue-to-white radial background. It occupies the right ~60% of the hero split. The treatment is deliberately maximalist and cartoon-tactile — soft lighting, high-saturation product chrome in pink, 3D depth. This 3D hero style is isolated from the rest of the UI, which is pure flat white. Icons in the nav and footer are outlined/stroke-style SVGs at 16px in Graphite #656768 — minimal single-color mono treatment. No photography, no illustration beyond the 3D hero render.

### Elevation

No shadows anywhere in the UI chrome. Depth is created exclusively through the 3D render in the hero — the product illustration provides all spatial dimension. The flat white surface of the page acts as a neutral stage, making the shadow-free approach feel intentional rather than minimal. Buttons have no shadow, cards have no elevation, the nav bar has no border-bottom shadow.

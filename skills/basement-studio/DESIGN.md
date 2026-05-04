---
version: alpha
name: basement.studio
description: Pure void aesthetic — the page opens as a black rectangle with a single orange nav item and a whispered 'Scroll to Explore', then erupts into massive display type at 87px. The #000000 canvas is absolute, not 'dark gray' — no surface gradients, no depth layers, no decorative noise. Geist at 87px weight 600 with -0.04em letter-spacing is the visual anchor: compressed, wide, mechanical. The single accent, #ff4d00 ember orange, appears only on the active nav item — never on CTAs, never on buttons — making it feel like an indicator light, not a brand color. Grid-bordered client logo tiles in #454545 create a dense, file-cabinet inventory feel against pure black.
colors:
  ember-signal: "#ff4d00"
  void: "#000000"
  chalk: "#ffffff"
  fog: "#e5e7eb"
  ash: "#c4c4c4"
  graphite: "#757575"
  carbon: "#454545"
  obsidian: "#2e2e2"
  cinder: "#1a1a1a"
  smudge: "#666666"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.23
    letterSpacing: -0.4px
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.07
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1
    letterSpacing: -1.14px
  display:
    fontFamily: "system-ui"
    fontSize: 87px
    lineHeight: 0.89
    letterSpacing: -3.48px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 8px
  sectionGap: 128px
components:
  client-logo-grid:
    role: 
  display-headline-with-body-copy:
    role: 
  nav-bar-strip:
    role: 
  ghost-navigation-link:
    role: Primary nav items
  contact-us-button:
    role: Primary CTA in nav
  scroll-to-explore-label:
    role: Scroll prompt / ambient CTA
  client-logo-tile:
    role: Social proof grid cell
  section-label:
    role: Small contextual headers (e.g. 'Trusted by Visionaries')
  display-headline:
    role: Hero primary heading
  body-paragraph:
    role: Descriptive sub-headline body copy
  text-input:
    role: Form input fields
  nav-badge-count:
    role: Numeric label on nav items (e.g. showcase item count)
  wordmark:
    role: Brand logo in nav
---

## Overview

**North Star:** Void print shop at 3am — massive compressed type bleeding off a pitch-black canvas, one ember of orange light on the nav, everything else white or ghost-gray.

Pure void aesthetic — the page opens as a black rectangle with a single orange nav item and a whispered 'Scroll to Explore', then erupts into massive display type at 87px. The #000000 canvas is absolute, not 'dark gray' — no surface gradients, no depth layers, no decorative noise. Geist at 87px weight 600 with -0.04em letter-spacing is the visual anchor: compressed, wide, mechanical. The single accent, #ff4d00 ember orange, appears only on the active nav item — never on CTAs, never on buttons — making it feel like an indicator light, not a brand color. Grid-bordered client logo tiles in #454545 create a dense, file-cabinet inventory feel against pure black.

### Do's

- Use #000000 as the only page background — never substitute near-blacks like #0a0a0a or #111111; the absolute void is intentional.
- Apply 0px border-radius to every element — buttons, cards, inputs, badges, all components. Any rounded corner breaks the system.
- Reserve #ff4d00 exclusively for the active nav state. Never use it on buttons, CTAs, icons, or decorative elements.
- Set display type (38px+) with font-feature-settings: 'ss01' and letter-spacing at minimum -0.02em, scaling to -0.04em at 76-87px.
- Use 1px solid #454545 borders on grid tiles and 1px solid #e5e7eb on interactive elements (buttons, nav items) — these two border shades create a two-tier hierarchy.
- Maintain Geist as the single typeface across all sizes from 12px caption to 87px display — no secondary or decorative fonts.
- Use #c4c4c4 for body copy under headlines rather than full white, creating luminosity hierarchy through brightness rather than size alone.

### Don'ts

- Never add box-shadows, drop-shadows, or glows — the design has zero elevation; depth is created by type scale and color, not shadow.
- Never use rounded corners — not 2px, not 4px. The 0px radius is non-negotiable across every component.
- Never introduce a secondary typeface — not for decorative headlines, not for code blocks, not for quotes.
- Never place #ff4d00 on backgrounds, fills, or decorative shapes — it exists only as a 1-element text color signal.
- Never use white (#ffffff) for body-level descriptive text — use #c4c4c4 or #757575 to preserve the display headline as the luminance peak.
- Never add gradients to backgrounds or text — the system is flat, matte, and binary in its color application.
- Never apply padding greater than 16px to inline or small components — the spacing system is compact (4px base unit) and dense grid arrangements should not breathe excessively.

### Layout

Full-bleed #000000 canvas with no max-width constraint on the hero. Navigation is a fixed top bar with wordmark left, links centered, contact CTA right. First viewport is entirely black with only nav visible plus 'Scroll to Explore' bottom-center — a theatrical reveal before content appears. Below the fold: full-width display headline spanning the viewport, then a constrained-width (~350px) body paragraph column left-aligned. Client logo section uses an 8-column equal-width grid with collapsed 1px borders (#454545) — cells share borders, no gaps, creating a dense mesh. Section rhythm is generous between major sections (128px gap) but internally compact. No alternating light/dark bands — entire page maintains the void background throughout.

### Imagery

Client logos are white SVG monochrome renderings on transparent backgrounds, set into a rigid bordered grid — no breathing room, no hover state photographs. No photography, no illustration, no 3D. The visual language is purely typographic and iconographic. Logo tiles function as inventory catalog entries rather than showcase moments. The page is text-dominant to an extreme degree: the hero is 100% type against black, zero imagery. Icon style where present is minimal outlined/filled mono-white SVGs at small sizes. The design deliberately resists atmospheric imagery — the void IS the art direction.

### Elevation

Zero elevation — no shadows, no raised surfaces, no blurs. The entire interface exists on one Z plane. Depth is constructed exclusively through type scale contrast (12px vs 87px) and luminance contrast (white vs #757575 vs black). This flatness is structural: adding any shadow would imply a surface that doesn't exist in this void.

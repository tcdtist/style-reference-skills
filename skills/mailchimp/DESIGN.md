---
version: alpha
name: Mailchimp
description: Mailchimp's visual language feels like a vintage newspaper printing house that discovered electric color — warm near-black (#231e15) dominates nearly every surface and typographic element, while a single voltage-yellow (#ffe01b) CTA button commands every page. The type system splits between Graphik Web (a geometric sans at tight -0.013em tracking) for all body/UI text and Means Web (a display serif-adjacent face at -0.021em) for headlines — a newspaper/magazine editorial duality that's rare in SaaS. Cards are flatly borderless or carry a soft warm shadow (rgba(35,30,21,0.15)), never the blue-tinted floating shadows common to other platforms. Section backgrounds alternate between #ffffff, #f5f5f5, the warm cream #ebe1cd, and near-black #231e15, creating a banded editorial rhythm. The pill CTA (26px radius, yellow fill, dark stroke, dark text) is the one rounded form in a system that otherwise uses 3px or zero radius everywhere.
colors:
  press-black: "#231e15"
  voltage-yellow: "#ffe01b"
  teal-ink: "#004e56"
  warm-parchment: "#ebe1cd"
  sand-footer: "#e7b75f"
  ash-white: "#f5f5f5"
  pure-white: "#ffffff"
  graphite: "#706d67"
  warm-charcoal: "#403b3b"
  silver-rule: "#bcbab6"
  true-black: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
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
    fontSize: 24px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.2
    letterSpacing: -0.67px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -0.84px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -1.01px
spacing:
  cardRadius: 10px
  buttonRadius: 26px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  primary-cta-button-group:
    role: 
  pricing-tier-widget:
    role: 
  feature-cards-dark-section:
    role: 
  primary-cta-button-pill-yellow:
    role: Main conversion actions — 'Iniciar gratis', 'Iniciar prueba gratis'
  ghost-navigation-button:
    role: Secondary actions like 'Inicia sesión', dropdown triggers
  arrow-link-inline-cta:
    role: Section-level 'learn more' navigation — 'Aprende sobre el marketing por SMS →'
  feature-card-dark-section:
    role: 3-column feature grid cards on #231e15 backgrounds
  elevated-white-card:
    role: Pricing widget, form containers that float over backgrounds
  rounded-content-card:
    role: Product screenshot previews, integration tiles
  dark-badge-pill-tag:
    role: Labels like 'Prueba sin riesgo', section labels
  underline-input-field:
    role: Forms, contact inputs, newsletter signup
  announcement-bar:
    role: Top-of-page promotional strip
  sticky-navigation-bar:
    role: Primary site navigation
  pricing-tier-widget:
    role: Plan selection with contact slider and CTA
---

## Overview

**North Star:** Vintage press meets electric yellow — an editorial print house with one neon switch.

Mailchimp's visual language feels like a vintage newspaper printing house that discovered electric color — warm near-black (#231e15) dominates nearly every surface and typographic element, while a single voltage-yellow (#ffe01b) CTA button commands every page. The type system splits between Graphik Web (a geometric sans at tight -0.013em tracking) for all body/UI text and Means Web (a display serif-adjacent face at -0.021em) for headlines — a newspaper/magazine editorial duality that's rare in SaaS. Cards are flatly borderless or carry a soft warm shadow (rgba(35,30,21,0.15)), never the blue-tinted floating shadows common to other platforms. Section backgrounds alternate between #ffffff, #f5f5f5, the warm cream #ebe1cd, and near-black #231e15, creating a banded editorial rhythm. The pill CTA (26px radius, yellow fill, dark stroke, dark text) is the one rounded form in a system that otherwise uses 3px or zero radius everywhere.

### Do's

- Use #ffe01b with 1px solid #231e15 border (box-shadow 0 0 0 1px) and 26px border-radius for every primary CTA button
- Set display headlines in Means Web 300 at 40-48px with letter-spacing -0.021em (~-1.0px at 48px)
- Alternate section backgrounds in this sequence for multi-section pages: #ffffff → #231e15 → #ffffff → #f5f5f5 → #ebe1cd
- Apply warm shadow rgba(35,30,21,0.15) 0px 0px 20px 3px only to cards that need to float above a background — never use blue-gray box shadows
- Keep inputs as underline-only (border-bottom 1px solid #231e15, no side borders, border-radius 0px) to maintain the ruled-paper editorial feel
- Use Graphik Web at -0.013em letter-spacing for all body and UI text — never set Graphik at default (0) tracking
- Apply #004e56 teal exclusively to hyperlinks and icon fills — never as a button or badge background

### Don'ts

- Never use border-radius above 26px (pill) for buttons or above 10px for cards — the system has no fully circular UI elements outside icon badges
- Never introduce a second saturated accent color — #ffe01b is the only vivid color; adding blue, green, or red CTAs breaks the single-signal hierarchy
- Never use Means Web for body copy or UI labels — it exists only for display headlines at 32px and above
- Never render shadows in cool/blue tones like rgba(50,50,93,0.25) — all shadows must be warm-tinted using #231e15 as the shadow base color
- Never place white or light-colored CTA buttons on white backgrounds — the yellow-on-white contrast (15.9:1) is the system's designed pairing; ghost buttons on white are for secondary actions only
- Never track out (positive letter-spacing) any text — the system uses exclusively negative tracking on both typefaces
- Never use flat gray (#9e9e9 range) text — use #706d67 as the minimum secondary text color to maintain the warm-neutral palette

### Layout

Max-width ~1200px centered on a full-bleed white page. Hero is split 50/50: left column with headline (Means Web 300 48px), subhead, CTA button, and trust badges; right column with floating product UI screenshots. Below hero, sections alternate backgrounds: white → #231e15 → white → #f5f5f5 → #ebe1cd creating a banded editorial rhythm. The dark #231e15 section uses a 3-column card grid for features. The light sections use the same 3-column grid. Pricing section is asymmetric: left 60% text content, right 40% elevated widget. Navigation is sticky top bar, full-width, with left logo, center nav links, right utility actions. Section vertical padding is approximately 80-120px. No sidebar navigation.

### Imagery

Product UI screenshots are the primary visual asset — shown as contained cards with 10px border-radius, never full-bleed. Email campaign previews and automation diagrams appear inside phone/browser mockups that are themselves contained in rounded cards. Integration logos appear as a collage grid (multiple app icons on a single card). One lifestyle photography instance shows a parent and child — candid, warmly lit. Icons are filled monochrome at 16-20px, single-color (#231e15 or #ffffff). The overall image approach is product-showcase dominant: the software IS the visual hero, not people using it. All images are contained within the card grid — no bleeds, no overlapping compositions outside the hero zone where integration logos overlap as floating circles.

### Elevation

Mailchimp uses elevation sparingly and only through warm-tinted shadows: rgba(35,30,21,0.15) — the same hue as the brand's near-black. This means floating elements feel ink-stained rather than digitally lifted. The rare use of shadow (only on the pricing widget and floating cards) makes those elements read as physical objects on the page. All other layering is achieved through surface color changes (white → gray → parchment → dark) rather than z-axis illusion.

---
version: alpha
name: Slite
description: Slite's visual language feels like warm parchment under natural light — a cream-toned workspace where knowledge feels approachable rather than clinical. The dominant #f9efe4 background reads as aged paper without feeling retro, grounded by #3f434a ink-dark text that gives editorial weight to every line. The signature move is typographic contradiction: a serif-adjacent custom face (Garnett) at 64px for display, crossed out in black with 'goes to die' while 'thrives' renders in a hand-lettered cursive script in vivid blue — disruption-by-contrast rather than polish. Feature cards sit on near-white #fdfdfd against the warm cream ground, tagged with muted category badges in yellows, greens, and pinks that never compete with the overall softness. Pill buttons in near-black (#2d2f34) against cream create the sharpest contrast point on every screen, anchoring calls to action without resorting to saturated color.
colors:
  parchment: "#f9efe4"
  vellum: "#fdf9f4"
  chalk: "#fdfdfd"
  ink: "#3f434a"
  graphite: "#2d2f34"
  slate: "#656565"
  ash: "#9da3af"
  silver-mist: "#d9dde6"
  linen: "#f0e4d6"
  blueprint: "#2e77e5"
  electric-sky: "#176be5"
  spectrum-gradient: "#ef91f7"
  blossom: "#fae9f4"
  buttercup: "#fbf4d8"
  sage: "#547358"
  terracotta: "#f67748"
  mauve: "#9d4d77"
  ochre: "#7f6c1f"
  dusk-blue: "#446aa7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 16
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 22
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 28
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 42
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 48
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 77
spacing:
  cardRadius: 12px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  cta-button-group:
    role: 
  feature-card-grid:
    role: 
  testimonial-rating-trust-block:
    role: 
  primary-pill-button:
    role: Main CTA — 'Start for free', nav primary action
  outlined-pill-button:
    role: Secondary CTA — 'Book a demo', secondary page actions
  ghost-text-button:
    role: Navigation dropdowns — 'Product', 'Solutions', 'Resources'
  rounded-tag-button:
    role: In-page toggles and selectors — documentation type switchers
  feature-card:
    role: Enterprise feature grid items — SSO, SCIM, GDPR etc.
  category-badge:
    role: Feature card label — SECURITY, CUSTOMIZATION, COMPLIANCE, CONTROL
  product-ui-preview-card:
    role: Hero section embedded product screenshot
  testimonial-quote-card:
    role: Inline social proof floating over product preview
  rating-chip:
    role: G2/Capterra/ProductHunt score display in trust bar
  navigation-bar:
    role: Site-wide top header
  tooltip:
    role: Contextual hover labels
---

## Overview

**North Star:** Warm parchment editorial desk — a workspace where knowledge feels handwritten, not enterprise-stamped.

Slite's visual language feels like warm parchment under natural light — a cream-toned workspace where knowledge feels approachable rather than clinical. The dominant #f9efe4 background reads as aged paper without feeling retro, grounded by #3f434a ink-dark text that gives editorial weight to every line. The signature move is typographic contradiction: a serif-adjacent custom face (Garnett) at 64px for display, crossed out in black with 'goes to die' while 'thrives' renders in a hand-lettered cursive script in vivid blue — disruption-by-contrast rather than polish. Feature cards sit on near-white #fdfdfd against the warm cream ground, tagged with muted category badges in yellows, greens, and pinks that never compete with the overall softness. Pill buttons in near-black (#2d2f34) against cream create the sharpest contrast point on every screen, anchoring calls to action without resorting to saturated color.

### Do's

- Use #f9efe4 as the default page background — never white or cold gray; the warmth is the entire atmospheric identity
- Apply border-radius 42-50px to all primary and secondary CTA buttons — the pill shape is non-negotiable brand geometry
- Use Garnett weight 700 for display sizes (36-64px) and weight 500 for section headings (24-32px); never use UniversalSans for headings
- Render category badges with border-radius 50px, padding 4px 12px, and the specific color pairs: Ochre text on Buttercup (#fbf4d8), Mauve text on Blossom (#fae9f4), Sage text on near-white — never swap pairs
- Keep feature cards at border-radius 12px with the three-layer shadow (rgba(0,0,0,0.01/0.05/0.10)) — this whisper-shadow is the only elevation used
- Use #2d2f34 filled pill buttons as the single primary CTA per screen; every other action should be outlined or ghost weight
- Restrict chromatic color (Blueprint #2e77e5) to interactive text links and decorative heading accents only — never for backgrounds or borders in feature UI

### Don'ts

- Don't use pure white (#ffffff) as a page background — it reads cold against Slite's warm typographic palette; use #fdfdfd or #fdf9f4 for card surfaces
- Don't introduce saturated color backgrounds for section bands — the warm cream is the only background color; category badges carry all color variety
- Don't use font weights below 400 or above 700, and don't apply Garnett at sizes below 12px where its editorial character is lost
- Don't add shadows beyond the established three-layer formula — heavier shadows break the lightweight elevation philosophy
- Don't use rectangular buttons (border-radius under 12px) for primary actions — all CTAs must be pill or near-pill shaped
- Don't display third-party logos in their brand colors in trust bars — convert all to #3f434a for visual unity
- Don't place category badges in any color combination outside the established four variants (Security/Customization/Compliance/Control) — ad-hoc badge colors fracture the muted palette

### Layout

Max-width approximately 1200px, centered. The hero is full-bleed cream (#f9efe4) with a centered headline stack above a large contained product mockup card. Below the hero, sections alternate between cream background (page ground) and near-white (#fdf9f4) without hard dividers — color shift alone signals section breaks. The enterprise feature section uses a 3-column card grid with 24px gutters, each card uniform height. Trust/social-proof sections are single-row horizontal with logo lockups centered. The product detail sections use asymmetric 2-column split: text left (40%), product UI right (60%). Navigation is a flat single-row bar at 72px, no mega-menu visible — dropdowns implied by chevrons. Vertical section rhythm is generous: 80-120px between sections, creating breathing room that reinforces the editorial pacing over information density.

### Imagery

Slite uses a hybrid of product UI screenshots and simple line-art illustrations rather than photography. The hero features an embedded product interface mockup — a faithful recreation of the actual application sidebar and document canvas, presented in a rounded card at roughly 70% page width. Overlapping this mockup are floating testimonial cards and compliance badge graphics, creating a layered depth effect. Illustration style is minimal line-drawing: architectural/structural sketches (a building facade, a filing cabinet) rendered in single-weight strokes on colored background tiles (#eebacb pink, near-white). These illustrations are contained within grid cells, never full-bleed. Company logos in the trust bar are all displayed in a uniform dark gray (#3f434a), stripping brand colors for visual unity — a deliberate erasure of chaos in favor of calm. Icon style throughout is outlined, single-weight, monochrome, matching text color exactly. The overall image density is low — the page is text and UI-preview dominant, with illustration serving as spatial punctuation rather than atmosphere.

### Elevation

Shadow usage is minimal and intentionally recessive. The single shadow formula — rgba(0,0,0,0.01) 0px 4px 12px, rgba(0,0,0,0.05) 0px 2px 6px, rgba(0,0,0,0.1) 0px 1px 3px — appears only on cards and selected buttons. It reads as a whisper of lift against the warm background rather than a dramatic drop. Elevation is communicated primarily through background color contrast (cream → near-white) rather than shadow depth.

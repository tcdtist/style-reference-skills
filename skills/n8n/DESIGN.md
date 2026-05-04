---
version: alpha
name: N8n
description: n8n is a dark workflow canvas that feels like staring into a running machine at night — deep purple-black surfaces lit from within by orange fire and electric blue current. The #0e0918 base is nearly black but carries a violet undertone that makes the darkness feel technological rather than neutral. The signature visual move is the orange-to-red gradient CTA against this void: rgb(253,137,37) → rgb(255,12,0) at 30deg creates an ember glow that reads as kinetic energy. Typography runs entirely in geomanist at weights 300 and 400 — the light weight at 54px headline sizes feels deliberately restrained, letting the lightning bolt hero illustration do the shouting. Cards are not floating objects but embedded panels, using inset white-10% borders and faint orange inset bottom-glows (rgba(255,142,93,0.3)) that suggest backlit hardware.
colors:
  void-base: "#0e0918"
  elevated-surface: "#1a1624"
  deep-panel: "#1b1728"
  muted-shell: "#2c2834"
  border-smoke: "#3e3a46"
  ash-text: "#d1cece"
  fog-text: "#9d9797"
  silver-rail: "#e5e7eb"
  cloud-white: "#ffffff"
  steel-muted: "#48556a"
  ember-cta: "#fd8925"
  electric-current: "#077ac7"
  ember-scorch: "#ff492c"
  crimson-glow: "#56312d"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.29px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.17px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.94
    letterSpacing: -0.86px
  display:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 0.88
    letterSpacing: -1.08px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 16-24px
  sectionGap: 80-120px
components:
  cta-button-group:
    role: 
  social-proof-stat-cards:
    role: 
  use-case-sidebar-tabs:
    role: 
  ember-gradient-cta-button:
    role: Primary call-to-action, top nav and hero section
  ghost-outline-button:
    role: Secondary action, hero section ('Talk to sales')
  frosted-ghost-button:
    role: Tertiary actions and icon buttons over dark card surfaces
  pill-tag-button:
    role: Use-case category pills and filter selectors
  feature-card:
    role: Primary content panels in features section
  glowing-inset-card:
    role: Highlighted stats, testimonials, community proof cards
  dark-feature-panel:
    role: Full-width section panels with workflow canvas previews
  hiring-badge:
    role: Status indicator tags (e.g., 'Hiring' label in footer nav)
  workflow-node:
    role: Canvas node objects in workflow diagram illustrations
  nav-bar:
    role: Sticky top navigation
  social-proof-row:
    role: Logo bar showing enterprise customers
  footer-mega-nav:
    role: Site-wide footer with multi-column link grid
---

## Overview

**North Star:** Workflow engine at midnight — the feeling of a live automation canvas running in a dark server room, lit by status indicators and data flows.

n8n is a dark workflow canvas that feels like staring into a running machine at night — deep purple-black surfaces lit from within by orange fire and electric blue current. The #0e0918 base is nearly black but carries a violet undertone that makes the darkness feel technological rather than neutral. The signature visual move is the orange-to-red gradient CTA against this void: rgb(253,137,37) → rgb(255,12,0) at 30deg creates an ember glow that reads as kinetic energy. Typography runs entirely in geomanist at weights 300 and 400 — the light weight at 54px headline sizes feels deliberately restrained, letting the lightning bolt hero illustration do the shouting. Cards are not floating objects but embedded panels, using inset white-10% borders and faint orange inset bottom-glows (rgba(255,142,93,0.3)) that suggest backlit hardware.

### Do's

- Use #0e0918 as the only page background — never substitute with pure #000000 or neutral dark gray; the violet undertone is load-bearing for the palette
- Apply the Ember gradient (linear-gradient(30deg, rgb(253,137,37), rgb(255,12,0))) exclusively to primary CTA buttons — using it for decorative elements dilutes its focal pull
- Set geomanist 300 at line-height 0.88 for 48–54px display headlines with letter-spacing -0.018em to -0.020em; the tight stack is intentional
- Use inset box-shadows (rgba(255,255,255,0.1) 1px inset + rgba(255,142,93,0.3) bottom inset) instead of border properties on transparent-background cards
- Maintain card surfaces at rgb(26,22,36) or rgb(27,23,40) — exactly one visible step above the base void; three distinct surface levels exist: page → card → elevated panel
- Use 8px border-radius for buttons and inputs, 16px for standard cards, 24px for large feature panels — apply the correct tier per component scale
- Apply Electric Current gradient (linear-gradient(141deg, #077ac7, #6b21ef)) only for link underlines, focus rings, and canvas connection lines — it signals interactivity and data flow

### Don'ts

- Never use a warm or neutral dark gray (#1a1a1a, #222, #333) as a surface — all surfaces must carry the violet undertone that differentiates n8n's dark from generic dark mode
- Never use geomanist 700 or 800 weight — the type system is intentionally limited to 300 and 400; heavy weight breaks the restrained visual register
- Never place body text in #ffffff at normal reading sizes — use #d1cece or #e5e7eb; pure white at 15–16px creates harshness against the violet-black background
- Never use drop-shadows (outset box-shadows) for card elevation — elevation is expressed through background color stepping, not shadow lifting
- Never use the Ember gradient as a background fill for sections or banners — it appears only on interactive CTA buttons
- Never apply 9999px radius to cards or section containers — pill radius (9999px) is reserved for tags, status indicators, and circular icon wrappers only
- Never show partner/customer logos in their brand colors — all logos in the social proof row must be monochrome #d1cece to avoid palette pollution

### Layout

Full-bleed dark canvas with max-width ~1200px content columns centered horizontally. Hero is left-aligned headline + CTA column with a right-bleed 3D illustration occupying 50% viewport width — the illustration breaks the content boundary intentionally. Below hero: a social proof logo bar flush to section bottom. Feature sections use large 24px-radius dark panels (full content width) containing split layouts: text column left, product screenshot right. A 'use case' section uses a left sidebar of vertical tab pills next to a right-fill product canvas — asymmetric 30/70 split. Stats/proof section: 3-column equal card grid using Glowing Inset Cards. Integration section: centered headline over a dense icon grid. Vertical section rhythm uses ~80–120px gaps with no divider lines — sections are distinguished by surface color changes (void → panel → void alternation). Footer is full-bleed with ember radial glow in the upper-right corner, 5-column link grid below a logo/tagline row.

### Imagery

Primary visual is a single hero 3D illustration — a glowing orange-red lightning bolt rendered with volumetric light, glass-like facets, and bloom glow, positioned right-bleed over the dark background. This is product-metaphor imagery, not photography. The bolt bleeds off the right edge with no containment, which creates asymmetric tension with the left-aligned headline block. Workflow canvas screenshots appear in product sections as contained flat UI captures with 24px border-radius clipping — the product IS the imagery. Section backgrounds use subtle radial gradients (warm ember at corners, faint blue halos) that function as atmospheric depth rather than visible graphics. No photography, no lifestyle imagery. Icons in workflow nodes are multi-color brand icons (Slack, Jira, etc.) appearing at 32–48px within 12px-radius containers — the only colorful elements outside the CTA and hero illustration. Overall density is image-light with one hero hero and one product-screenshot per section.

### Elevation

n8n uses color-stepping instead of drop shadows for elevation. Moving from #0e0918 → #1a1624 → #1b1728 creates three panel depths visible only through background color — no outset shadow appears on any card. The single exception is the frosted ghost button which uses rgba(0,0,0,0.26) 0px 0px 8px as a halo, not an elevation lift. Cards that need 'active' or 'highlighted' states use inset white and orange glow shadows (rgba(255,255,255,0.1) + rgba(255,142,93,0.3)) — light emanates from within the surface, not beneath it.

---
version: alpha
name: Superhuman
description: Superhuman feels like a cinematic productivity cockpit — moody atmospheric photography bleeds behind glassmorphic UI panels while the page itself stays anchored in warm parchment neutrals. The hero is a full-viewport dusk photograph with overlapping product panels floating at various depths, then the page snaps to a warm off-white (#f2f0eb) canvas for feature content. Custom variable font 'Super Sans VF' is the entire typographic system — tight negative tracking at display sizes (-0.028em at 64px) makes headlines feel compressed and urgent. Violet (#714cb6) is the sole chromatic system accent, appearing as outlined ghost buttons and focus rings against otherwise achromatic surfaces. The dark muted-red (#421d24) surfaces only in the announcement banner and footer, creating a bracketed frame around the entire page.
colors:
  parchment-canvas: "#f2f0eb"
  ink: "#292827"
  bone: "#ffffff"
  fog: "#e3e3e2"
  driftwood: "#dcd7d3"
  graphite: "#666666"
  aubergine: "#421d24"
  aubergine-deep: "#4e242c"
  iris: "#714cb6"
  indigo-glow: "#353088"
  lavender-chip: "#d4c7ff"
  hero-dusk-gradient: "#a8a4d8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.3
    letterSpacing: -0.14px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.31px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.2
    letterSpacing: -0.62px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -1.3px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 0.96
    letterSpacing: -1.79px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 64px
components:
  announcement-banner:
    role: 
  suite-tab-selector:
    role: 
  get-superhuman-cta-button-group:
    role: 
  announcement-banner:
    role: Full-width top-of-page notification strip
  primary-navigation:
    role: Sticky top navigation bar
  hero-section:
    role: Full-viewport brand opening
  get-superhuman-cta-button:
    role: Primary hero call-to-action
  sign-up-button:
    role: Nav-level signup action
  ghost-outlined-button-iris:
    role: Secondary action on light surfaces
  suite-tab-button:
    role: Product switcher tabs (Mail / Grammarly / Coda / Go)
  social-proof-logo-bar:
    role: Trust logos strip
  product-feature-card:
    role: Per-product detail panel inside tab sections
  glassmorphic-hero-panel:
    role: Product UI preview panels floating in hero
  footer:
    role: Full-width site footer
---

## Overview

**North Star:** Cinematic cockpit behind warm parchment — a productivity instrument panel where atmospheric photography meets structured cream-toned UI surfaces.

Superhuman feels like a cinematic productivity cockpit — moody atmospheric photography bleeds behind glassmorphic UI panels while the page itself stays anchored in warm parchment neutrals. The hero is a full-viewport dusk photograph with overlapping product panels floating at various depths, then the page snaps to a warm off-white (#f2f0eb) canvas for feature content. Custom variable font 'Super Sans VF' is the entire typographic system — tight negative tracking at display sizes (-0.028em at 64px) makes headlines feel compressed and urgent. Violet (#714cb6) is the sole chromatic system accent, appearing as outlined ghost buttons and focus rings against otherwise achromatic surfaces. The dark muted-red (#421d24) surfaces only in the announcement banner and footer, creating a bracketed frame around the entire page.

### Do's

- Use #f2f0eb as the page canvas for all content sections below the hero — never plain white (#ffffff) as the canvas background.
- Apply Super Sans VF at weight 600–700 for all headings with letter-spacing -0.022em to -0.028em at sizes 28px and above.
- Use #714cb6 exclusively as outlined ghost button borders and link colors on light surfaces — never as a filled button background.
- Reserve #421d24 only for the announcement banner and footer — it must bracket the page without appearing in content sections.
- Set border-radius 8px for inline buttons and badges, 16px for cards, 999px for pill tabs and floating UI chips.
- Use backdrop-filter: blur(12px) on any UI panel that overlaps the hero photography to maintain the glassmorphic depth effect.
- Pair display headlines (64px) with line-height 0.96 — sub-1.0 line-height at display sizes is the signature compression of this system.

### Don'ts

- Don't use a pure white (#ffffff) page background for content sections — the parchment (#f2f0eb) canvas is what separates this from generic SaaS.
- Don't apply #714cb6 as a filled button background — evidence shows it appears only as outlined borders and link text, never as a button fill.
- Don't use letter-spacing at 0 or positive values for headings — all heading sizes use negative tracking; flat tracking breaks the compressed headline aesthetic.
- Don't introduce additional typefaces — Super Sans VF handles every text role; mixing in system fonts or other typefaces breaks the typographic cohesion.
- Don't use standard box-shadow elevation for cards — depth is achieved through overlapping layout and backdrop-blur, not drop shadows.
- Don't place the aubergine (#421d24) in mid-page content sections, feature cards, or UI components — its role is structural framing (banner + footer) only.
- Don't use rounded corners smaller than 8px on interactive elements — the minimum radius in this system is 8px; sharp 0px borders only appear on flat content containers and logo bars.

### Layout

Max-width approximately 1200px centered, but hero is full-bleed edge-to-edge with no container. Hero occupies 100vh with centered headline stack and CTA, product UI panels float asymmetrically left and right over the photography. Below hero: white/parchment alternating bands with 64px section gaps. Logo bar is a single full-width row with sharp borders. Suite section uses a tab switcher (pill tabs) above a large product panel — single column centered. Feature sections use 2-column text-left / product-right alternating layout. Navigation is a fixed top bar that starts transparent over the hero and fades to white with blur on scroll. Footer is 4-column grid at full width in dark aubergine. Overall rhythm is spacious with 64px between sections and 36px internal section padding.

### Imagery

Superhuman uses full-bleed cinematic lifestyle photography in the hero — dark-toned dusk and evening skies with human subjects (woman looking upward, silhouetted figures) that read as contemplative rather than corporate. Photography is high-contrast with deep cool blues and magentas, treated with semi-transparent gradient overlays in pastel violet/blue/pink (the hero gradient system). Product UI screenshots are embedded as floating glassmorphic panels directly over the photography — not contained in device frames, just floating at depth. Below the hero, imagery shifts to pure product: email UI, document surfaces, and AI suggestions shown in white-background card panels. Illustrated abstract geometric compositions appear in promotional sections (stacked rectangle frames, golden-ratio wireframes) as editorial art rather than UI. Icons throughout are outlined mono-color at ~16-20px, using Iris (#714cb6) tint on light surfaces and white on dark surfaces. The design is moderately image-heavy in the hero and text-dominant in feature sections.

### Elevation

Superhuman uses no box-shadow elevation for cards or panels — depth is created through overlapping elements at the layout level (product UI panels floating over hero photography) and backdrop-filter: blur(12px) frosted glass on hero-overlapping panels. Shadow appears only as the Iris inset ring on the focused primary CTA.

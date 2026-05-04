---
version: alpha
name: Deel
description: Deel operates in contrasting registers — a deep purple-black (#201547) hero punched through with electric yellow-green product shots, then a cream-warm (#fffbf4) body that stretches through the rest of the page. The dual-zone layout is the signature move: dark/vivid left panel with serif-weight condensed Bagoss headlines, fluorescent product imagery on the right, then warmth and space below. Accent violet (#a98df6 to #5938b7) appears only within the dark hero for the word 'anywhere.' and CTAs — never in the light body sections. Pill-shaped buttons (200px radius) coexist with 24px-radius cards, creating a soft geometry throughout. The custom Bagoss family — in Condensed, Extended, Standard, and VF cuts — gives the brand typographic range unavailable through any system font.
colors:
  deep-cosmos: "#201547"
  violet-mid: "#5938b7"
  lavender-pulse: "#a98df6"
  pale-amethyst: "#c4b1f9"
  indigo-shadow: "#381f89"
  electric-lime: "#ffcf25"
  amber-core: "#faaf00"
  butter-glow: "#ffe27c"
  sky-mist: "#d8ebff"
  celadon-check: "#53a945"
  powder-blue: "#b1d8fc"
  midnight-ink: "#000000"
  graphite: "#1b1b1b"
  obsidian: "#141414"
  charcoal: "#404040"
  slate: "#5f5f5f"
  fog: "#767676"
  ash: "#a4a4a4"
  bone: "#dbdbdb"
  linen: "#d9d0ca"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.6
    letterSpacing: 0.375px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.05
    letterSpacing: -0.22px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -0.3px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: 0.32px
spacing:
  cardRadius: 24px
  buttonRadius: 200px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  hero-cta-button-group:
    role: 
  feature-product-cards:
    role: 
  dark-stat-callout-row:
    role: 
  dark-hero-cta-button:
    role: Primary call-to-action within the dark hero panel
  ghost-pill-navigation-button:
    role: Nav items with dropdown indicators
  dark-filled-pill-button:
    role: 'Book a demo' CTA in the top nav
  ghost-underline-button:
    role: Text-level inline CTAs like 'Learn more →'
  pill-input-with-search:
    role: Search and email capture fields
  feature-product-card:
    role: Product feature cards (Deel Payroll, Deel HR, Deel IT)
  dark-stats-panel:
    role: Stat callout panels on dark background sections
  currency-selection-chip:
    role: Illustrative UI chips showing selectable options (ARS, CAD, USD, etc.)
  customer-logo-badge:
    role: Testimonial attribution chip (e.g. Robinhood badge on carousel)
  trust-logo-strip:
    role: Social proof logo row below hero
  section-eyebrow-label:
    role: Pre-heading category label (e.g. 'WHAT DEEL DOES')
  stat-callout-row:
    role: Three-column feature stat blocks in dark sections
---

## Overview

**North Star:** Global command split-screen — a war-room purple panel beside a neon product showcase, then warm cream scrolls below.

Deel operates in contrasting registers — a deep purple-black (#201547) hero punched through with electric yellow-green product shots, then a cream-warm (#fffbf4) body that stretches through the rest of the page. The dual-zone layout is the signature move: dark/vivid left panel with serif-weight condensed Bagoss headlines, fluorescent product imagery on the right, then warmth and space below. Accent violet (#a98df6 to #5938b7) appears only within the dark hero for the word 'anywhere.' and CTAs — never in the light body sections. Pill-shaped buttons (200px radius) coexist with 24px-radius cards, creating a soft geometry throughout. The custom Bagoss family — in Condensed, Extended, Standard, and VF cuts — gives the brand typographic range unavailable through any system font.

### Do's

- Use BagossCondensedFont at 44-60px weight 500 with -0.005em letter-spacing for all primary hero headlines inside dark (#201547) sections.
- Apply 200px border-radius to all pill buttons, search inputs, and currency chips — this is the system's defining shape token.
- Use #fffbf4 (Warm Cream) as the page body background, never pure white (#ffffff), for all light-theme content sections below the hero.
- Accent the single most emotionally charged word in each hero headline with #a98df6 (Lavender Pulse) — one word only, never a phrase.
- Pair dark (#141414 or #201547) section backgrounds with Inter body text in #d9d0ca (Linen) — not pure white — for softer contrast on extended reading.
- Use rgba(27,27,27,0.16) as the standard border color for inputs and card outlines in light sections — never a solid opaque gray.
- Reserve #ffcf25 (Electric Lime) strictly for product screenshots and graphic accents — never apply it as a button or text color.

### Don'ts

- Don't use BagossCondensedFont below 16px — at small sizes switch to BagossStandardFont or Inter for legibility.
- Don't use 8px or 16px border-radius on primary CTA buttons — those radii belong only to secondary badges and icon containers.
- Don't use #5938b7 (Violet Mid) or any saturated violet in light (cream) body sections — violet is hero-zone-only.
- Don't apply box shadows to feature product cards — the system uses border (1px #dbdbdb) as the only card boundary in light sections; shadows appear only on floating overlays.
- Don't mix BagossExtendedFont and BagossCondensedFont in the same heading — choose one cut per section based on available width.
- Don't use pure white (#ffffff) as the page background — the system's warm cream (#fffbf4) distinguishes Deel's light theme from generic white-page SaaS.
- Don't apply letter-spacing to BagossCondensedFont display headlines — the -0.005em is already set; adding positive tracking breaks the compressed silhouette.

### Layout

Max-width approximately 1280px centered, but the hero breaks this rule — it runs full viewport width as a 50/50 split: left panel (#201547) contains text + CTA, right panel is full-bleed product imagery with no padding. Below the hero, content resets to max-width contained with 80-120px vertical section gaps. Sections alternate: white/cream light bands with card grids (3-column feature cards), then full-width dark (#141414) bands with 3-column stat rows, then a full-bleed photo section with floating UI chips overlaid. Navigation is a fixed top bar — pure white background, logo left, dropdown nav center, language + log in + CTA pill right. Hero is not full-viewport-height but a defined panel (~480px). The brand logo section (trust strip) uses a horizontal scrolling row of gray logos on white, 2 rows, separated by a light rule. Feature product cards use a 3-column equal grid with 16px gaps.

### Imagery

Deel mixes two distinct image registers: dark-panel graphic design (geometric yellow-green forms as abstract background shapes on the right hero panel, pure graphic, no photography) and real-world lifestyle photography (hands holding a purple iPhone over a table with an orange mug — warm, candid, slightly editorial). Product screenshots are rendered as phone mockups or flat UI crops embedded in cards, contained with 24px radius. The hero right panel uses a dramatic high-contrast shot — black angular shapes over electric yellow-green (#ffcf25), iPhone floating in front — this is purely product showcase, not human context. Below the hero, photography shifts to warm, natural-light scenes that feel ambient rather than staged. Icons are outlined, monochrome (#1b1b1b or white depending on surface), consistent 16-20px stroke-weight SVGs. Customer logos are rendered as flat gray silhouettes at reduced opacity to avoid visual competition. The overall ratio is approximately 40% imagery, 60% text+UI.

### Elevation

Deel uses borders, not shadows, as the primary card boundary language in light sections — 1px solid #dbdbdb or rgba(27,27,27,0.16) defines card edges. The single shadow value (16px/32px spread with dual-layer rgba(27,27,27)) is reserved exclusively for floating UI elements like testimonial badges and product chips that need to appear physically lifted above a photo background.

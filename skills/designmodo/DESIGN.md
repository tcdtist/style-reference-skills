---
version: alpha
name: Designmodo
description: Designmodo splits its personality across two distinct registers: a deep forest-green dark hero (#0e231c) that anchors authority, then opens into a bright white content canvas — the visual equivalent of stepping through a dark doorway into a sunlit studio. The dark sections use white and the muted sage #defaca for type, while the light sections flip to near-black #313942, creating a two-room color system where context always signals mode. A single electric green (#27ae60) is the sole interactive color in both worlds — CTA buttons, badges, and active states all share one hue, making every clickable element feel like it belongs to the same family regardless of which room it lives in. InterVariable at negative letter-spacing (down to -0.028em at display sizes) does the typographic heavy lifting, with ligature-aware feature flags 'cv03', 'cv04', 'cv06', 'cv09', 'ss03' making standard Inter feel proprietary. The 32px card radius and 999px pill buttons create the only soft geometry in an otherwise rectangular system.
colors:
  forest-floor: "#0e231c"
  canopy-shadow: "#1a3029"
  pine-border: "#233630"
  slate-ink: "#313942"
  ash: "#656a75"
  mist: "#c3cecb"
  fog: "#879b93"
  parchment: "#f4f7f2"
  dew: "#e4ebe2"
  sprout: "#27ae60"
  sage-whisper: "#defaca"
  mint-card: "#edf9f2"
  iris: "#5c51e0"
  sky-link: "#186bff"
  tangerine-cta: "#ff5722"
  amber-nav: "#f49a40"
  azure-action: "#2f80ed"
  lavender-tint: "#f1ebff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 2.29
    letterSpacing: 1.3px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.6
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.35
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
    letterSpacing: -1.06px
  display:
    fontFamily: "system-ui"
    fontSize: 57px
    lineHeight: 1
    letterSpacing: -1.6px
spacing:
  cardRadius: 32px
  buttonRadius: 999px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  stats-counter-cards:
    role: 
  product-feature-card-postcards:
    role: 
  article-cards-with-category-badges:
    role: 
  primary-cta-button:
    role: Main call-to-action, most prominent interactive element
  ghost-green-button:
    role: Secondary CTA beside primary button, typically 'See more' or 'Learn more'
  outlined-dark-button:
    role: Tertiary action on light sections, e.g. 'Browse articles'
  ghost-white-button:
    role: Navigation-level or overlay actions on dark sections
  navigation-sign-up-button:
    role: Primary conversion entry point in sticky nav bar
  feature-product-card:
    role: Large showcase card for a named product (Postcards, Slides, Startup)
  stats-counter-card:
    role: Metric callout block (97%, 7.2 hours, 500 hours)
  category-badge:
    role: Article taxonomy tag on blog cards
  success-status-badge:
    role: Status indicator, success label
  tab-navigation:
    role: Product switcher (Postcards / Slides / Startup)
  product-screenshot-frame:
    role: App UI screenshot within hero or feature sections
  logo-bar-social-proof-strip:
    role: Trust logos row — Twilio, Toptal, Vodafone, Yelp, etc.
---

## Overview

**North Star:** Forest clearing at dawn — dark canopy above, open light below, a single green glow marking the path forward.

Designmodo splits its personality across two distinct registers: a deep forest-green dark hero (#0e231c) that anchors authority, then opens into a bright white content canvas — the visual equivalent of stepping through a dark doorway into a sunlit studio. The dark sections use white and the muted sage #defaca for type, while the light sections flip to near-black #313942, creating a two-room color system where context always signals mode. A single electric green (#27ae60) is the sole interactive color in both worlds — CTA buttons, badges, and active states all share one hue, making every clickable element feel like it belongs to the same family regardless of which room it lives in. InterVariable at negative letter-spacing (down to -0.028em at display sizes) does the typographic heavy lifting, with ligature-aware feature flags 'cv03', 'cv04', 'cv06', 'cv09', 'ss03' making standard Inter feel proprietary. The 32px card radius and 999px pill buttons create the only soft geometry in an otherwise rectangular system.

### Do's

- Use #27ae60 for all primary interactive elements — CTA buttons, active states, success badges — in both dark and light sections. This is the only green allowed as a button fill.
- Apply 999px border-radius to all CTA pill buttons; reserve 17px radius for outlined secondary actions and nav chips; use 32px for large product cards.
- Set display headlines (48–57px) at weight 700 with letter-spacing -0.022em to -0.028em and InterVariable feature-settings '"cv03" on, "cv04" on, "cv06" on, "cv09" on, "ss03" on'.
- Use #f49a40 exclusively for the navigation Sign Up button — no other element in the system uses amber. Do not repurpose this color for section CTAs.
- Apply the green-tinted shadow (rgba(17, 50, 38, 0.14) 14px 17px 40px 0px) only to product screenshot images — never to cards, modals, or buttons.
- Alternate hero and footer between #0e231c dark and light #f4f7f2/#ffffff to bookend page content with the same palette, closing the visual loop.
- Use #5c51e0 (Iris) and #defaca (Sage Whisper) only as inline word-level accents inside headlines — never as button fills or background swatches.

### Don'ts

- Do not mix the amber nav button (#f49a40) into body CTAs or feature sections — it belongs only in the top navigation, where it uniquely signals account creation.
- Do not apply the green-tinted drop shadow to cards or panels — card boundaries are defined by background-color contrast alone (mint vs white vs page gray).
- Do not use Inter without the OpenType feature-settings — 'cv03', 'cv04', 'cv06', 'cv09', 'ss03' are required to match the on-brand letterform variants.
- Do not use positive letter-spacing (tracking) on any text larger than 12px — the +0.118em value is reserved for uppercase micro-labels at 11px only.
- Do not introduce additional font weights beyond 400, 500, 600, 700 — the four-weight scale is sufficient and adding 300 or 800 breaks the typographic register.
- Do not place article category badges in any color other than #ff5722 — violet, green, or blue badges would conflict with the accent-color hierarchy where those hues carry semantic meaning.
- Do not use card shadows or borders on Feature Product Cards — the #edf9f2 mint background against a white or gray page is the only containment mechanism.

### Layout

Max-width approximately 1200px, centered on a white or near-white (#f4f7f2) canvas. The hero is full-bleed dark (#0e231c), spanning the full viewport width and roughly 90vh, with a two-column split: left column holds the headline + tab switcher + CTA cluster, right column holds the product screenshot frame. Below the hero, a full-bleed logo strip acts as a visual break before the light content zone begins. The light zone uses alternating white and #f4f7f2 section bands with no dividing lines — background shift alone creates rhythm. Feature product cards appear as large single cards (one per section) in a centered single-column layout with 50px internal padding. The stats section is a 3-column equal-width grid. The integrations and 'built for you' sections return to 2-column text-plus-visual layouts. The article carousel is a 4-column card grid with left/right arrow navigation. Footer is a dark #0e231c band returning to the hero palette, closing the visual loop.

### Imagery

Three types coexist without visual conflict. Product screenshots are the dominant imagery type — captured as realistic app UI at standard screen proportions, placed in rounded frames with the brand-green shadow, never cropped or iconified. These are explanatory, not decorative. Photography appears in blog/article cards: lifestyle-editorial — laptops on desks, phones in hands, overhead phone mockups — treated with natural color, high-key, not desaturated or duotoned. A third tier of small brand logos (partner/client strip) appears as flat white SVGs. Icons within the product UI (drag-and-drop icons, integration logos) are outlined, 1.5px stroke weight, monochromatic. The overall image density is moderate — screenshots anchor feature sections, photos appear only in the article carousel.

### Elevation

Elevation is used sparingly and only on product screenshot images — never on cards, panels, or UI chrome. The shadow rgba(17, 50, 38, 0.14) 14px 17px 40px 0px is green-tinted (the 17, 50, 38 RGB origin matches the forest-green brand palette), so even depth signals stay on-brand. Cards use radius alone to define boundary — no shadow, no border — relying on background-color contrast between the mint card (#edf9f2) and the white page to define containment.

---
version: alpha
name: mymind
description: mymind feels like a private journal left open on a warm windowsill — soft, diffuse light bleeding in from orange-to-white gradients that suffuse the entire canvas in ambient warmth. The hero background is a radial bloom of coral-orange fading to white, not a photograph or illustration, just color as atmosphere. Typography does the heavy lifting: Louize serif at 96–140px with aggressive negative tracking (-0.062em) creates editorial weight that editorial magazines would recognize, while Nunito handles micro-UI labels at tracked-out uppercase (0.063em to 0.125em) — the two extremes of the letter-spacing scale are the system's visual signature. Cards sit on tinted pastel surfaces (#e5eaf2, #f3f0e7, #dde9d3) rather than generic white, each hue suggesting a different mood of content. The single chromatic accent — Ember Orange #ff5924 — appears only as an outlined pill button border and brand moment, never as a filled CTA, making it feel like a mark rather than a command.
colors:
  ember-orange: "#ff5924"
  cobalt-link: "#1573dd"
  midnight-ink: "#000000"
  canvas-white: "#f9fafc"
  pure-white: "#ffffff"
  blush-tint: "#fff1f1"
  mist: "#e2e2e2"
  slate-blue-card: "#e5eaf2"
  parchment-card: "#f3f0e7"
  sage-card: "#dde9d3"
  deep-slate: "#3a475a"
  storm: "#4a5465"
  steel: "#717286"
  slate: "#748297"
  graphite-nav: "#24272d"
  ash: "#afb5c1"
  chalk: "#a6a8aa"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.33
    letterSpacing: 2px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.67
    letterSpacing: -0.36px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.4
    letterSpacing: -0.44px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.19
    letterSpacing: -1.92px
  heading:
    fontFamily: "system-ui"
    fontSize: 52px
    lineHeight: 1
    letterSpacing: -2.08px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.88
    letterSpacing: -4.96px
  display:
    fontFamily: "system-ui"
    fontSize: 140px
    lineHeight: 0.85
    letterSpacing: -8.68px
spacing:
  cardRadius: 16px
  buttonRadius: 100px
  elementGap: 20px
  sectionGap: 80-120px
components:
  content-category-tags-hero-inline-pills:
    role: 
  platform-download-buttons-ghost-slate-pills:
    role: 
  inline-checklist-card-pastel-parchment-feature-card:
    role: 
  ember-outlined-pill-button:
    role: Primary brand action button — outlined, never filled
  ghost-slate-pill-button:
    role: Secondary platform download buttons (iPhone app, Browser Extension, Android app)
  white-outlined-pill-button:
    role: Dark-background section CTAs
  content-category-tag:
    role: Inline keyword tags within hero body text (notes, bookmarks, inspiration, articles, images)
  pastel-feature-card:
    role: Primary content feature card in 2-column feature grids
  white-elevated-card:
    role: Hero product preview card / elevated demo surface
  navigation-bar:
    role: Persistent top navigation
  nav-bullet-link:
    role: Navigation items with decorative orange dot prefix
  section-eyebrow-label:
    role: Small uppercase category labels above section headings
  product-demo-screenshot-frame:
    role: Browser-frame wrapper showing app UI
  dark-manifesto-section:
    role: Full-bleed dark narrative section
  inline-checklist-card:
    role: Product feature demo — task list inside a pastel card
---

## Overview

**North Star:** Sunlit personal archive — a warm afternoon light spilling across a private collection of saved thoughts, images, and bookmarks, curated without folders.

mymind feels like a private journal left open on a warm windowsill — soft, diffuse light bleeding in from orange-to-white gradients that suffuse the entire canvas in ambient warmth. The hero background is a radial bloom of coral-orange fading to white, not a photograph or illustration, just color as atmosphere. Typography does the heavy lifting: Louize serif at 96–140px with aggressive negative tracking (-0.062em) creates editorial weight that editorial magazines would recognize, while Nunito handles micro-UI labels at tracked-out uppercase (0.063em to 0.125em) — the two extremes of the letter-spacing scale are the system's visual signature. Cards sit on tinted pastel surfaces (#e5eaf2, #f3f0e7, #dde9d3) rather than generic white, each hue suggesting a different mood of content. The single chromatic accent — Ember Orange #ff5924 — appears only as an outlined pill button border and brand moment, never as a filled CTA, making it feel like a mark rather than a command.

### Do's

- Use Louize-Regular-205TF for all headline text at 32px and above, with letter-spacing of -0.04em to -0.062em — tighter as size increases.
- Apply the Hero Bloom gradient (orange → blush → white) only to hero-scale backgrounds; never as a card or button fill.
- Use 100px border-radius on all pill buttons regardless of variant — the full-circle pill is the only button shape in the system.
- Differentiate feature cards exclusively by background color (Slate Blue #e5eaf2 / Parchment #f3f0e7 / Sage #dde9d3) — never by border or shadow.
- Prefix navigation links with a small Ember Orange (#ff5924) filled dot — it is the primary visual affordance of the nav.
- Track Nunito uppercase labels at +0.063em to +0.125em — the extreme positive tracking contrasts the extreme negative tracking of Louize headlines and defines the system's typographic rhythm.
- Place section eyebrow labels in Ember Orange (#ff5924) ALL CAPS above every Louize display heading.

### Don'ts

- Never fill any button with Ember Orange (#ff5924) as a solid background — it is an outline-only accent color. Filled orange breaks the brand's restrained invitation tone.
- Never use box shadows on feature cards — the three pastel card variants (#e5eaf2, #f3f0e7, #dde9d3) elevate through color contrast alone.
- Never set Louize headlines above 32px with positive or zero letter-spacing — negative tracking at scale is the typography system's core rule.
- Do not use more than three surface tints per page section — Slate Blue, Parchment, and Sage are a complete set; adding a fourth card color breaks the categorical system.
- Do not use Inter or Open Sans for display-size text — Louize owns all sizes above 28px; Avenir and Inter serve body and UI only.
- Never apply the warm orange-glow card shadow (rgba(255,167,129,0.44)) to anything other than the hero product preview card — it is a signature moment, not a reusable elevation style.
- Do not use hard dividers (visible border-bottom rules or <hr>) between page sections — rhythm is created by alternating background colors (#f9fafc vs #fff1f1), not structural lines.

### Layout

Max-width 1440px centered on a near-white (#f9fafc) canvas. Hero is full-viewport with centered headline over the warm bloom gradient — no split layout, pure text-over-atmosphere. Navigation is minimal sticky top bar: logo left, centered links, auth right. Sections alternate between warm-white (#f9fafc) and blush (#fff1f1) backgrounds with no visible dividers. Content sections use 2-column layouts: feature text left / demo card right, or vice versa (alternating). Feature card grids are 2-column at desktop. The dark manifesto section is full-bleed, breaking the warm palette completely for tonal contrast. Product demo appears as an oversized browser-frame card that bleeds slightly off the section edge — deliberately cropped to imply a larger product. Vertical spacing between sections is generous (80–120px), giving the page a slow, unhurried reading pace. No sidebar, no mega-menu, no sticky sidebar.

### Imagery

Product screenshots are the primary visual content — shown inside browser/app frames with rounded corners (12–16px), cropped at viewport edges to suggest depth. No lifestyle photography. Abstract color as atmosphere: the hero uses pure gradient bloom (orange to white) rather than any photograph. Illustrations are absent. Product UI cards float as isolated artifacts against pastel surfaces — a soap bar, a magazine cover, movie posters — shown as-found content items, not staged product photography. Icons are minimal: outlined style, single-stroke weight, monochrome. The 'Magic is happening...' ambient loader appears as a soft red radial glow with a wave icon — purely decorative atmospheric feedback. Overall image density is low: large expanses of tinted background with single focused content artifacts, text-dominant layout. The content items inside demo cards (Dior editorial, GQ cover, Top Gun poster) are reproduced at natural proportions with no color treatment or filters.

### Elevation

Shadows are almost entirely absent — the three card variants use no shadow at all, relying solely on background color differentiation (pastel tinted surfaces against canvas) to establish layering. The one exception is the hero product card which uses a warm orange-tinted shadow (rgba(255,167,129,0.44)) as a brand moment, not a structural elevation pattern. The system elevates through color, not depth.

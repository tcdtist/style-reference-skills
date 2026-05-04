---
version: alpha
name: Tailwind CSS
description: Tailwind CSS's homepage feels like a live code editor bleeding into a marketing page — black type hammered at near-display scale, monospace code fragments interrupting prose, and a white canvas that never apologizes for its blankness. The near-black #030712 dominates everything: headings, body copy, borders, and buttons all collapse toward the same ink-black anchor, creating a stark tonal discipline rarely seen on developer tools sites that usually reach for blue. The signature move is scale contrast: 96px Inter at weight 700 next to 14px monospace code, the size gulf doing all the visual work that color usually handles. Accent colors (sky blue #00a6f4, hot pink #e60076) appear exclusively inside inline code snippets as syntax highlights, never as UI chrome — they're content, not decoration. The color palette swatch section generates a systematic rainbow of every Tailwind hue, but the actual UI uses only ink-black, white, and near-grays.
colors:
  ink-black: "#030712"
  slate-mist: "#4a5565"
  slate-mid: "#6a7282"
  slate-cool: "#364153"
  steel-veil: "#90a1b9"
  fog-line: "#cad5e2"
  slate-deep: "#1e2939"
  pure-white: "#ffffff"
  off-white: "#bfbfbf"
  syntax-sky: "#00a6f4"
  syntax-cyan: "#74d4ff"
  syntax-rose: "#e60076"
  neon-pink: "#f6339a"
  electric-violet: "#e12afb"
  mint-glow: "#96f7e4"
  ocean-depth: "#00598a"
  blush-silk: "#fb64b6"
  powder-blue: "#bedbff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.71
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 30px
    lineHeight: 1.33
    letterSpacing: -1.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
    letterSpacing: -2px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -4.8px
spacing:
  cardRadius: 8px
  buttonRadius: 32px (pill CTA), 4px (code/tag badges)
  elementGap: 16px
  sectionGap: 96px
components:
  cta-button-group-with-search-bar:
    role: 
  sponsors-section:
    role: 
  version-pill-badge-inline-code-tags:
    role: 
  primary-cta-button:
    role: Main calls to action — 'Get started', 'Become a sponsor'
  dark-code-badge-button:
    role: Version label and secondary tags inside dark sections
  ghost-dark-button:
    role: Secondary actions within dark code editor UI
  version-pill-badge:
    role: Current version tag in navigation (v4.2)
  inline-code-tag:
    role: Class name references in body text (flex, pt-4, text-center)
  search-input-bar:
    role: Quick search command palette trigger in header
  sponsor-logo-card:
    role: Partner and sponsor logos in the 'Supported by the best' section
  navigation-bar:
    role: Top sticky header with brand, links, and utilities
  section-label:
    role: Eyebrow text above section headings ('SPONSORS')
  card-with-inset-ring-shadow:
    role: Image cards and UI preview cards throughout the page
  card-with-elevation-shadow:
    role: Elevated cards that need more depth (overlaid preview cards)
---

## Overview

**North Star:** Type specimen as product demo — a typographer's proof sheet where the headline IS the interface, bold black at 96px demanding attention through size alone.

Tailwind CSS's homepage feels like a live code editor bleeding into a marketing page — black type hammered at near-display scale, monospace code fragments interrupting prose, and a white canvas that never apologizes for its blankness. The near-black #030712 dominates everything: headings, body copy, borders, and buttons all collapse toward the same ink-black anchor, creating a stark tonal discipline rarely seen on developer tools sites that usually reach for blue. The signature move is scale contrast: 96px Inter at weight 700 next to 14px monospace code, the size gulf doing all the visual work that color usually handles. Accent colors (sky blue #00a6f4, hot pink #e60076) appear exclusively inside inline code snippets as syntax highlights, never as UI chrome — they're content, not decoration. The color palette swatch section generates a systematic rainbow of every Tailwind hue, but the actual UI uses only ink-black, white, and near-grays.

### Do's

- Use Inter with font-feature-settings: '"cv02", "cv03", "cv04", "cv11"' at all sizes — these alternates are non-negotiable for Tailwind's typographic identity.
- Apply -0.05em letter-spacing globally on Inter text; at 96px this compresses to ~-4.8px, giving display text the tightly-set newspaper feel visible in the hero.
- Use the inset 1px ring shadow (`oklab(0.129999 -0.00404751 -0.027702 / 0.1) 0px 0px 0px 1px inset`) instead of CSS borders on cards — this prevents layout shift and matches the exact surface treatment used throughout.
- Reserve 32px pill-radius buttons exclusively for primary CTAs; use 4px radius for all secondary tags, version badges, and code labels.
- Render inline code references with IBM Plex Mono at +0.1em letter-spacing and features '"ss02", "zero"' — the wide tracking visually separates code tokens from surrounding prose at a glance.
- Use syntax colors (#00a6f4, #e60076, #96f7e4) ONLY inside code blocks and inline code references — never as UI chrome, button colors, or decorative fills.
- Place section eyebrow labels in all-caps Inter 600 at 12px in Syntax Sky (#00a6f4) — this is the only recurring non-black UI element on the marketing page.

### Don'ts

- Don't use any background color other than #ffffff or #030712-family darks for page sections — the entire marketing site alternates between pure white and near-black; any mid-gray background breaks the tonal discipline.
- Don't use rounded corners larger than 8px on cards or content containers — only pill buttons (32px) and version badges (16px) use high-radius; cards stay at 8px.
- Don't apply accent colors (sky blue, hot pink, mint) to navigation items, headings, or UI buttons — they belong exclusively in code syntax contexts.
- Don't use IBM Plex Mono for anything except code blocks and inline code badges — no headings, nav items, or body copy should appear in monospace.
- Don't add drop shadows to sponsor logos or section-level card grids — the inset ring shadow is the only depth signal; external shadows are reserved for elevated overlay cards only.
- Don't set heading weights below 700 at display sizes — the hero's authority comes entirely from weight-plus-scale, not color or decoration.
- Don't introduce gradients into UI chrome — the extensive gradient color data represents the Tailwind color palette documentation swatch system, not page decoration.

### Layout

Max-width contained (~1280px) centered on white. Hero is asymmetric: headline text at full-width left-aligned (not centered), with two demo cards floating to the right and overlapping partially offscreen — creating a deliberate bleed that suggests the framework is bigger than the viewport. The hero headline occupies 60% of viewport width at display size. Section rhythm is consistent white bands with 96px vertical gaps — no alternating dark/light banding in the marketing sections (the dark is reserved for the embedded code editor block, not full-width section backgrounds). Sponsor logos in a 4-column grid with generous whitespace between items. Navigation is a flat top bar, not sticky based on screenshot evidence, with logo left, links right, and utility icons far-right. Content arrangement below the fold switches to centered headings with left-aligned supporting text — a subtle asymmetry that prevents monotony. Zero sidebar usage on the marketing page.

### Imagery

Product UI screenshots and live code editor demos dominate — no lifestyle photography anywhere. The hero section shows an actual HTML file in a dark code editor window with real Tailwind classes highlighted in syntax colors, making the product the hero literally. A secondary card shows a real-world UI output (a product card with photography), demonstrating the output of writing those classes. Photography within demo cards is tight editorial product shots (album covers, property images), displayed in rounded-corner containers (8px) with inset ring shadows — the photography is always framed, never full-bleed. Icon style is filled/solid, monochromatic black, at 16–20px. The color palette section uses flat solid color swatches in a systematic grid — no gradients or imagery, pure chromatic data visualization. Overall image density is low — wide text-dominant whitespace with one large code demo occupying roughly 40% of the first viewport's lower half.

### Elevation

Tailwind CSS marketing uses inset ring shadows instead of traditional drop shadows for most components. A 1px inset shadow at 10% black opacity (`oklab(0.129999 -0.00404751 -0.027702 / 0.1) 0px 0px 0px 1px inset`) defines card boundaries without adding visual mass. Only truly elevated elements (overlaid preview cards) add a minimal 1–3px drop shadow alongside the ring. This matches the framework's philosophy of composable, low-specificity primitives — shadows define edges rather than assert depth.

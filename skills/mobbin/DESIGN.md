---
version: alpha
name: Mobbin
description: Mobbin runs on pure achromatic restraint — zero chroma across the entire palette, forcing hierarchy through weight, size, and tone alone. The page is white space interrupted by near-black ink (#141414) at display sizes and warm-gray (#707070, #adadad) for secondary text. The custom 'saans' typeface is the single differentiator: fractional weights (440, 456, 652) that don't exist in any system font, creating headline mass that sits between regular and semibold — typography doing the work of color. 9999px pill shapes appear on every interactive element while card content sits on 16-24px rounded rectangles, making buttons feel like badges in a sea of contained thumbnails. The content itself — mobile app screenshots in grayscale cards — IS the visual texture of the page.
colors:
  midnight-ink: "#141414"
  pure-canvas: "#ffffff"
  graphite: "#707070"
  ash: "#adadad"
  fog: "#ededed"
  mist: "#f2f2f2"
  silver: "#c2c2c2"
  slate-shadow: "#e0e0e0"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 16
    letterSpacing: 0.2px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 20
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 22
    letterSpacing: 0.21px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 28
    letterSpacing: 0.28px
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 42
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 63
    letterSpacing: -0.39px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 80
    letterSpacing: -0.88px
spacing:
  cardRadius: 16-24px
  buttonRadius: 9999px
  elementGap: 8-16px
  sectionGap: 80px
components:
  button-group-primary-outlined-muted:
    role: 
  search-input-with-filter-pills:
    role: 
  testimonial-cards:
    role: 
  primary-filled-button:
    role: Main CTA — 'Join for free'
  outlined-pill-button:
    role: Secondary action — 'See our plans'
  muted-pill-button:
    role: Tertiary / inactive filter tabs
  inline-underline-link:
    role: Inline text action with no pill shape
  app-screenshot-card:
    role: Primary content unit in the gallery grid
  category-navigation-menu:
    role: Mega-dropdown showing filter categories
  top-navigation-bar:
    role: Sticky global navigation
  filter-pill-tab-row:
    role: Horizontal scrollable filter bar above the gallery
  search-input:
    role: App/screen search bar
  section-stat-display:
    role: Hero library size counter
---

## Overview

**North Star:** Grayscale specimen board — a printer's proof sheet where typographic weight IS color.

Mobbin runs on pure achromatic restraint — zero chroma across the entire palette, forcing hierarchy through weight, size, and tone alone. The page is white space interrupted by near-black ink (#141414) at display sizes and warm-gray (#707070, #adadad) for secondary text. The custom 'saans' typeface is the single differentiator: fractional weights (440, 456, 652) that don't exist in any system font, creating headline mass that sits between regular and semibold — typography doing the work of color. 9999px pill shapes appear on every interactive element while card content sits on 16-24px rounded rectangles, making buttons feel like badges in a sea of contained thumbnails. The content itself — mobile app screenshots in grayscale cards — IS the visual texture of the page.

### Do's

- Use #141414 as the only 'color' — every UI accent, icon, filled button, and active state is this near-black, never a chromatic hue.
- Apply 9999px radius to every interactive pill element: buttons, tags, search inputs, filter chips. Non-interactive content containers use 16–24px radius.
- Set display headlines (56–80px) at saans weight 600–652 with letter-spacing -0.007em to -0.011em and lineHeight 1.00–1.13.
- Use font-feature-settings: '"calt" 0, "dlig", "ss07"' on all saans text to activate the custom ligature and stylistic set that distinguish it from fallback sans-serifs.
- Differentiate card elevation with 1px solid #ededed borders only — never box-shadow on cards. Reserve box-shadow exclusively for floating dropdowns.
- Use fractional saans weights: 440 for UI labels/nav, 456 for mid-emphasis body, 652 for hero numerics — never round to 400/500/600 at sizes where the fractional weight is available.
- Maintain 80px vertical section rhythm between major content blocks, with 24px internal card padding as the baseline.

### Don'ts

- Never introduce a chromatic accent color — not blue for links, not green for success states, not any hue. The entire brand palette is achromatic.
- Never use box-shadow on cards or gallery thumbnails — borders do that work; shadows on content cards would compete with the screenshot imagery inside them.
- Never use font-weight 700 or 800 — the heaviest weight is 652. Heavier weights would break the typographic restraint that defines the system.
- Never use radius values other than 9999px (interactive), 24px (large containers), 16px (cards/images), or 8px (inline badges) — arbitrary intermediate values destroy the shape vocabulary.
- Never place colored backgrounds behind sections — alternating band layouts should use #ffffff vs #f2f2f2 at most, never tinted or chromatic fills.
- Never left-align hero headlines — the centered display type at 80px/56px is the layout anchor; shifting it breaks the symmetry that makes the screenshot grid feel organized.
- Never remove letter-spacing from display type — at 80px, the -0.88px tracking is what makes saans feel like a custom typeface rather than a generic web font.

### Layout

Max-width centered (~1280px), white background throughout. Hero is vertically centered text stack — large display headline (80px) over a subtitle paragraph over two pill CTAs side by side, with a featured app icon above the headline as a specimen. Below the hero: full-width trust logo bar with muted gray brand logos. The gallery section introduces a sticky secondary nav (app type tabs, search bar, filter row) above a 3-column card grid with comfortable 16-20px gutters. Testimonials section uses a 4-column masonry-style text card grid on white. Navigation is a floating top bar with logo left, text links center, CTA pill right — switches from transparent to white/f2f2f2 on scroll. Section vertical rhythm is consistently 80px between major blocks. No alternating dark/light bands — the entire page is white with card grids providing visual texture.

### Imagery

Content IS the imagery: grayscale mobile app screenshots displayed as contained cards in a 3-column grid. Screenshots are cropped to phone frames, placed on white card backgrounds with 16px radius, and rendered in desaturated tones that match the achromatic brand palette — colorful apps appear muted because the surrounding UI demands it. No lifestyle photography, no illustrations, no abstract graphics. Partner/customer logos (Uber, Meta, Airbnb, etc.) appear as flat monochrome SVGs in a trust bar. The Revolut-style app icon in the hero (rounded square, 24px radius, green fill with white symbol) is the only chromatic element on the page — a deliberate specimen of the content being showcased, not a brand choice. Icon style throughout the UI is outlined, thin stroke (~1.5px), monochrome #141414.

### Elevation

Shadows are nearly absent — the one exception is a very soft ambient lift (rgba(0,0,0,0.04) 0px 8px 40px) on dropdown menus. Card elevation is expressed entirely through 1px #ededed borders against a white page, not shadow. This flat-border approach keeps the visual field clean enough that app screenshot content reads as the highest-contrast element on every surface.

---
version: alpha
name: Skillshare
description: Skillshare operates in stark black-and-white contrast with a single electric cyan-green accent that fires only on key interactive moments. The hero splits between a chalk-white left panel with bold headline weight and a pure black right panel hosting the registration flow — a literal light/dark duality that mirrors its creator/learner tension. Photo cards of instructors are presented edge-to-edge without padding, letting faces fill the frame; identity replaces ornament. The GT Walsheim Pro typeface at weight 700 for headlines and tight 0.90-0.96 line heights on large sizes creates a stacked, poster-like density. Cyan-green (#55da9b) and the brighter #00ff84 appear exclusively on CTAs and checkmarks — tiny amounts of color doing maximum work against acres of black and white.
colors:
  studio-black: "#000000"
  pure-white: "#ffffff"
  deep-ink: "#0b1215"
  graphite-stroke: "#394649"
  fog-border: "#e0e0e0"
  ash-mid: "#757575"
  charcoal-surface: "#232424"
  skill-green: "#55da9b"
  neon-pulse: "#00ff84"
  electric-cyan: "#24c2f2"
  creator-violet: "#6927ef"
  deep-violet: "#5620c1"
  facebook-blue: "#1877f2"
  google-red: "#ea4335"
  warning-amber: "#f6b60b"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.45
    letterSpacing: 1.1px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.25
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.1
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 46px
    lineHeight: 0.96
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 0.9
spacing:
  cardRadius: 4px
  buttonRadius: 4px
  elementGap: 8-12px
  sectionGap: 80-120px
components:
  registration-panel-auth-buttons:
    role: 
  stat-counter-cards-social-proof-metrics:
    role: 
  feature-checklist-dark-section:
    role: 
  primary-cta-button:
    role: Main registration and sign-up actions
  white-outlined-auth-button:
    role: Social login options (Google, Facebook, Apple)
  ghost-text-link-button:
    role: Email continuation, secondary navigation actions
  instructor-portrait-card:
    role: Teacher browse grid — social proof section
  category-browse-card:
    role: Full-bleed horizontal category slider
  stat-counter-card:
    role: Social proof metrics — Members, Classes, Teachers, Rating
  feature-checklist-item:
    role: Benefit list on dark sections
  search-input-bar:
    role: Global navigation search
  navigation-bar:
    role: Sticky top navigation
  dark-split-section:
    role: Feature/benefit alternating sections on black background
  registration-panel:
    role: Right-half hero sign-up widget
---

## Overview

**North Star:** Poster studio on matte black — bold instructor faces, chalk-white type, single neon pulse.

Skillshare operates in stark black-and-white contrast with a single electric cyan-green accent that fires only on key interactive moments. The hero splits between a chalk-white left panel with bold headline weight and a pure black right panel hosting the registration flow — a literal light/dark duality that mirrors its creator/learner tension. Photo cards of instructors are presented edge-to-edge without padding, letting faces fill the frame; identity replaces ornament. The GT Walsheim Pro typeface at weight 700 for headlines and tight 0.90-0.96 line heights on large sizes creates a stacked, poster-like density. Cyan-green (#55da9b) and the brighter #00ff84 appear exclusively on CTAs and checkmarks — tiny amounts of color doing maximum work against acres of black and white.

### Do's

- Use #55da9b exclusively for the primary CTA button — never as a background fill for sections, badges, or decorative elements
- Apply GT Walsheim Pro weight 700 with line-height 0.90–0.96 at 46–48px for all display headlines; the tight stacking is the signature poster effect
- Use 0.1em letter-spacing on ALL-CAPS metadata labels (11–13px) — MEMBERS, CLASSES, TEACHERS all track wide to distinguish label hierarchy from body text
- Set instructor/creator photography cards to zero padding — images fill 100% of card face with a bottom scrim overlay for text legibility
- Use border-radius 4px for all buttons, inputs, and cards; reserve 100px radius only for pill-shaped tags or badges — never apply 100px to buttons
- On black-background sections, use #232424 as the surface for stat/metric cards to create depth without shadows or borders
- Keep #00ff84 confined to small checkmarks and icon fills on dark backgrounds only — never use it as button background or large fill

### Don'ts

- Never use the Creator Violet (#6927ef) or Electric Cyan (#24c2f2) as background fills for large sections — they are micro-accent colors for icons and specific interactive states only
- Never round hero photography or category browse strips — hard edges on full-bleed images are intentional; adding radius breaks the edge-to-edge poster aesthetic
- Never use weight 100 GT Walsheim Pro for any functional text — it appears only in decorative/watermark contexts and is illegible at body sizes on dark backgrounds
- Never place the Skill Green CTA (#55da9b) on a white section as a ghost or outlined variant — it only works as a filled button on both black and white backgrounds
- Never apply box-shadows to dark-theme (#000000 background) components — depth is achieved through #232424 surface elevation, not shadow
- Never mix multiple accent colors in the same section — pick either #55da9b or #24c2f2 per section, never both simultaneously
- Never set body text line-height below 1.40 at sizes 13–18px — tight line-height is reserved for 36px+ display sizes only

### Layout

Max-width ~1280px centered with full-bleed dark and light section bands. Hero is a two-column split: left ~55% white background with oversized stacked headline, right ~45% black background hosting the registration widget — the only page section using this side-by-side light/dark split. Below the hero, full-bleed horizontal photography strips serve as category navigation, spanning 100vw with zero margin. Subsequent sections alternate pure black and white backgrounds with 80–120px vertical padding. Dark feature sections use two-column layout (headline left, checklist right). Instructor grid is a 4-column responsive card grid with 12px gutters. Stat counters use a single-row 4-column flex layout within a dark section. Navigation is a white sticky bar at ~56px height with logo-left, search-center, auth-right arrangement — no mega-menu, no sidebar.

### Imagery

Photography-forward with zero illustration outside of small SVG icons. Instructor portraits are the dominant image type — tight head-and-shoulders crops with natural studio lighting, filling card faces edge-to-edge with no padding or border treatment. Category browse strips use lifestyle photography (hands on tablets, close-up product shots, faces with accessories) at full viewport height in a horizontal scroll strip, each panel hard-edged with no radius. Text overlays use a bottom-anchored gradient scrim (transparent to rgba(0,0,0,0.7)) rather than opaque overlays. Photography is high-contrast with saturated colors — editorial-quality, not stock. Icons are minimal outlined SVGs at 20px, monochrome (#ffffff on dark, #0b1215 on light), stroke-weight consistent at ~1.5px. Imagery occupies roughly 60% of visual space on browse sections; the registration hero is text/UI-dominant with no photography.

### Elevation

Shadows are uniformly shallow — 2px blur, 4px spread, 10% black opacity. Dark sections achieve depth entirely through background-color stepping (#000000 → #232424) with zero shadows. Elevation is a light-theme-only concept; dark surfaces stack without any shadow layer.

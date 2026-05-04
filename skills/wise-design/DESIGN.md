---
version: alpha
name: Wise Design
description: Wise Design hits like a silk-screened protest poster — electric lime green (#87ea5c) floods the hero at full saturation, then dark forest ink (#083400) type slams across it at display scale. The palette is deliberately non-fintech: vivid yellow (#ffea4b), peach (#ffbd89), cotton candy pink (#ffd5f0), and deep aubergine (#2a0831) coexist like a global currency collection. Wise Sans at weight 900 with 0.85 line-height is the signature — letterforms stack so tightly they almost collide, creating billboard compression at digital scale. Pills (9999px radius) are the only rounded UI element, while large content blocks use generous 86px radii creating soft-edged cards that contrast the aggressive type. The design system oscillates between screaming and whispering — massive stacked display type then a single quiet midsize line on white.
colors:
  lime-volt: "#87ea5c"
  forest-ink: "#083400"
  volt-yellow: "#ffea4b"
  papaya: "#ffbd89"
  cotton-candy: "#ffd5f0"
  aubergine-night: "#2a0831"
  crimson-depth: "#370305"
  fog: "#58717a"
  white: "#ffffff"
  positive: "#008026"
  negative: "#cf2929"
  accent-blue: "#0097c7"
  warning: "#9a6500"
typography:
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.08px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.44
    letterSpacing: -0.09px
  subheading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.12px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 25px
    lineHeight: 1.25
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 45px
    lineHeight: 1.17
    letterSpacing: -0.5px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 58px
    lineHeight: 1.03
    letterSpacing: -1.39px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -2.16px
spacing:
  cardRadius: 86px
  buttonRadius: 9999px
  elementGap: 12px
  sectionGap: 80-120px
components:
  category-navigation-pills:
    role: 
  transaction-card-product-ui:
    role: 
  mosaic-design-system-cards:
    role: 
  lime-pill-button:
    role: Primary CTA and category tag navigation
  ghost-pill-button:
    role: Secondary or transparent navigation action
  hero-display-block:
    role: Full-viewport brand statement sections
  navigation-bar:
    role: Site-level navigation
  mosaic-content-card:
    role: Design system section showcase tiles in scrolling grid
  editorial-subheading:
    role: Section introduction text between visual blocks
  typography-specimen-card:
    role: Design system typography showcase tile
  category-label-tag:
    role: Section or content type identifier in mosaic grid
---

## Overview

**North Star:** Neon market stall on a global street — electric lime signage that shouts across a crowded marketplace, then polished product UI slips in behind it.

Wise Design hits like a silk-screened protest poster — electric lime green (#87ea5c) floods the hero at full saturation, then dark forest ink (#083400) type slams across it at display scale. The palette is deliberately non-fintech: vivid yellow (#ffea4b), peach (#ffbd89), cotton candy pink (#ffd5f0), and deep aubergine (#2a0831) coexist like a global currency collection. Wise Sans at weight 900 with 0.85 line-height is the signature — letterforms stack so tightly they almost collide, creating billboard compression at digital scale. Pills (9999px radius) are the only rounded UI element, while large content blocks use generous 86px radii creating soft-edged cards that contrast the aggressive type. The design system oscillates between screaming and whispering — massive stacked display type then a single quiet midsize line on white.

### Do's

- Use Wise Sans weight 900 with lineHeight 0.85 for all hero display text — lines must stack tightly, almost touching, at 288px minimum
- Fill entire hero and nav sections with #87ea5c — the lime is a background, not a highlight; it should dominate, not accent
- Pair #083400 (Forest Ink) as the primary text color on lime and white backgrounds — never use pure black (#000000) anywhere in the system
- Assign 86px border-radius to content cards and mosaic tiles; reserve 9999px exclusively for pill buttons and tags
- Use the full accent palette (#ffea4b, #ffbd89, #ffd5f0, #2a0831, #370305) as full-bleed card backgrounds — each color is a distinct 'room', not a subtle tint
- Apply Inter font-feature-settings: "calt", "ss01" — the ss01 variant alternates specific letterforms that are part of the typographic identity
- Maintain negative letter-spacing on Inter at all display sizes: -2.16px at 72px, scaling to -0.08px at 16px

### Don'ts

- Never use #87ea5c as a small accent detail — it must be used at large scale (full backgrounds, full buttons) or not at all
- Do not use weight 700 for body text — Inter weights are strictly 400 (body) and 600 (labels/subheadings)
- Never apply drop shadows or elevation effects — the system uses color contrast and scale for hierarchy, not shadow depth
- Do not use rectangular (0px radius) cards — content blocks must use either 86px radius or 9999px pill; sharp corners are absent from the system
- Never use conventional fintech blue as a primary brand color — #0097c7 exists only for semantic accent links and focus states, never as primary CTA or brand expression
- Do not place Wise Sans at sizes below 187px — it is a display-only typeface; Inter handles all UI and body text
- Never mix multiple chromatic background colors in a single section — each panel is monochromatic, switching color only at full section breaks

### Layout

Full-bleed sections with no max-width constraint on hero and color blocks; content sections use ~1152-1440px max-width centered. Hero is full-viewport lime green with Wise Sans stacked display type, no image — the type IS the visual. Navigation merges seamlessly with hero background (same #87ea5c), creating a single unbroken color field from top of page through hero. Section rhythm alternates: massive color hero → white editorial pause → full-bleed photography → mosaic card grid → white section → dark panel → repeat. No decorative dividers — color is the divider. The mosaic grid uses 3-column irregular tile layout where tiles vary in height and background color, creating a collage effect. Individual content sections use centered single-column for editorial statements and 2-column for feature explanations. Spacious vertical breathing room (80-120px) between major sections ensures each color block reads as a distinct visual beat.

### Imagery

Three distinct visual modes coexist in the system. First: full-bleed real-world photography (street scenes with flags, city imagery) used full-width with no border-radius — raw, unmasked, documentary in feel, treated as atmospheric section dividers rather than product illustration. Second: product UI screenshots (transaction cards, app interfaces) contained within 86px-radius white cards, floating against colored backgrounds — the UI is the product showcase. Third: a mosaic of color-block tiles containing flags (circular crop), paper airplane illustrations, currency symbols, and illustrated characters — these are flat, graphic, brand-colored, and decorative. Icons visible in transaction UI are outlined stroke-style at ~1.5px weight, monochrome #083400. The overall density is image-heavy in the mosaic zones but text-dominant in editorial sections — the system alternates between visual feast and typographic silence.

### Elevation

Zero shadow usage throughout the system — elevation and hierarchy are communicated entirely through color contrast and scale. A white card on a lime background reads as 'elevated' purely because the white interrupts the field. The 86px radius on cards signals boundary without any shadow depth. This is a flat design system where the vivid palette does all the spatial work that shadows would normally perform.

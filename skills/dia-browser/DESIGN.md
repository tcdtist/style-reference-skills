---
version: alpha
name: Dia Browser
description: Feels like holding a blank sheet of premium stationery up to warm morning light — the page is almost entirely achromatic, but a hidden spectrum bleeds through in concentrated gradient bursts that feel like sunlight refracting through a prism's edge. The warmth comes from translucent card surfaces (white at 90% opacity) floating on a #F8F8F8 canvas with backdrop-blur, creating frosted-glass depth without hard shadows. ABC Oracle at weight 300 for display text (72px, 54px) is the defining typographic gesture — impossibly thin letterforms with tight -0.04em tracking create an airy authority, like text etched into glass. The single rainbow gradient (pink → red → amber → lavender → blue) appears as a chromatic accent strip and ambient background glow, making what is otherwise a monochrome system feel alive. Buttons default to #D9D9D9 — deliberately muted, never demanding attention, letting the content hierarchy stay centered on the typography.
colors:
  ink-black: "#000000"
  snow: "#ffffff"
  canvas: "#f8f8f8"
  fog: "#efefef"
  pebble: "#d9d9d9"
  graphite: "#636363"
  slate: "#959595"
  steel: "#aeaeae"
  ash: "#7c7c7c"
  spectrum-gradient: "#fa3d1d"
  rose-quartz: "#c679c4"
  marigold: "#ffb005"
  signal-blue: "#0358f7"
  hot-pink: "#fd02f5"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.5
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
    lineHeight: 1.33
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.25
    letterSpacing: -0.44px
  heading:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.18
    letterSpacing: -2px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.17
    letterSpacing: -2.16px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.11
    letterSpacing: -2.88px
spacing:
  cardRadius: 30px
  buttonRadius: 30px
  elementGap: 15-20px
  sectionGap: 80-120px
components:
  download-cta-button-group:
    role: 
  testimonial-cards:
    role: 
  ai-prompt-search-bar:
    role: 
  frosted-content-card:
    role: Primary content container for feature descriptions, testimonials, and product showcases
  neutral-filled-button:
    role: Primary download/action button ("Download Dia")
  ghost-pill-button:
    role: Secondary actions and navigation toggles
  soft-fill-button:
    role: Announcement banner and contextual actions
  sticky-header-bar:
    role: Fixed navigation with frosted glass effect
  testimonial-card:
    role: User quote display in horizontal carousel
  product-screenshot-showcase:
    role: Feature demonstration with ambient gradient background
  category-tab-carousel:
    role: Horizontal dot pagination and content category switcher
  video-thumbnail-button:
    role: Watch the trailer CTA overlay
  footer-navigation-grid:
    role: Multi-column link grid in footer
  privacy-section:
    role: Trust/privacy messaging block
  inline-text-link:
    role: Contextual links within body copy
---

## Overview

**North Star:** Prism on white stationery — light refracts color from a nearly monochrome surface.

Feels like holding a blank sheet of premium stationery up to warm morning light — the page is almost entirely achromatic, but a hidden spectrum bleeds through in concentrated gradient bursts that feel like sunlight refracting through a prism's edge. The warmth comes from translucent card surfaces (white at 90% opacity) floating on a #F8F8F8 canvas with backdrop-blur, creating frosted-glass depth without hard shadows. ABC Oracle at weight 300 for display text (72px, 54px) is the defining typographic gesture — impossibly thin letterforms with tight -0.04em tracking create an airy authority, like text etched into glass. The single rainbow gradient (pink → red → amber → lavender → blue) appears as a chromatic accent strip and ambient background glow, making what is otherwise a monochrome system feel alive. Buttons default to #D9D9D9 — deliberately muted, never demanding attention, letting the content hierarchy stay centered on the typography.

### Do's

- Use the spectrum gradient (pink → red → amber → lavender → blue) ONLY as ambient background glow or decorative strip — never as text color or button fill
- Keep buttons neutral gray (#D9D9D9) or transparent; the system deliberately avoids chromatic CTAs to keep focus on content
- Apply 30px border-radius consistently to cards and filled buttons; use 9999px pill radius only for ghost/tab buttons
- Use ABC Oracle weight 300 for all display text (50px+) with -0.04em letter-spacing; weight 500 only for buttons and labels ≤16px
- Apply backdrop-filter: blur(24px) with rgba(255,255,255,0.9) for any elevated surface to maintain the frosted-glass layering
- Maintain the rgba(0,0,0,0.08) 0px 0px 8px 0px shadow on all floating cards — this is the only shadow in the system
- Use #636363 for body text and #959595 for tertiary/metadata text against the #F8F8F8 canvas

### Don'ts

- Never use saturated colors (--red, --blue, --pink, --yellow) as solid backgrounds or button fills — they exist only within the gradient and as design tokens for rare micro-accents
- Never use border-radius less than 10px on any element; the system has no sharp corners
- Never use font weights above 500 — there is no bold (600/700/800) anywhere in this system
- Never add drop shadows beyond the single 8px blur shadow; avoid layered or colored shadows
- Never place dark backgrounds behind content sections; the system is exclusively light with the gradient as the only warm/dark element
- Never use underlined links with color changes — links stay #000000 and only animate underline opacity on hover
- Never introduce a second typeface; the entire system runs on a single family at three weights

### Layout

Max-width ~1200px centered content on #F8F8F8 canvas. Hero is centered single-column: subtitle at 18px, display headline at 72px weight 300, neutral button, then a floating product UI mockup with gradient glow beneath. Sticky frosted header (~52px tall) with logo left, nav center, CTA right. Sections flow vertically with generous 80-120px gaps. Feature sections use centered stacks: heading → carousel dots → subheading → full-width screenshot showcase. Testimonial section is a horizontal scrolling card carousel (5+ cards visible, edge-bleed). Privacy section returns to simple centered text stack. Footer is a multi-column link grid. No alternating background bands — the entire page stays on the same canvas color, with depth created by frosted card surfaces and gradient glows rather than section color changes.

### Imagery

Product screenshots dominate — browser UI mockups (Gmail compose, Substack editor) shown at realistic scale with 10px rounded corners, floating over warm ambient gradient glows. No stock photography for hero/feature sections. The only photography is small circular avatar crops (~40px) for testimonial cards. The spectrum gradient functions as the primary decorative visual — a horizontal chromatic band (pink → red → amber → lavender → blue) that bleeds into soft ambient light behind screenshot showcases. This gradient replaces traditional hero imagery; it's atmospheric rather than illustrative. Icon style is minimal monochrome: a small lock icon for privacy, the Dia diamond logo mark. The system is text-dominant — imagery serves as proof (screenshots) or mood (gradient glow), never as decoration for its own sake.

### Elevation

The system uses a single, extremely subtle shadow (8px blur at 8% opacity) and relies primarily on backdrop-filter blur and semi-transparent white surfaces to create depth. Cards feel like frosted glass panels hovering over the canvas rather than lifted surfaces casting shadows. This is a deliberate choice — the frosted effect creates layering without weight.

---
version: alpha
name: Resend
description: Resend is a pure black command surface — the canvas is #000000 with near-zero colorfulness (1%), giving the entire interface the weight of polished obsidian. Headlines use a custom serif (Domaine) at display sizes with tight -0.01em tracking, while UI copy runs in Inter and monospaced code elements appear in CommitMono, creating a three-voice typographic hierarchy that signals dev tooling without decoration. Color appears almost exclusively as functional data punctuation: violet for code identity, blue for interactive borders, and a handful of vivid status colors (green, red, yellow, light blue) that function as email event indicators — never as decoration. The system uses subtle border-based elevation (1px hairlines at #292d30) rather than shadows, keeping all surfaces flush and matte on black.
colors:
  void-black: "#000000"
  graphite-rail: "#292d30"
  smoke: "#464a4d"
  ash: "#6c6c6c"
  steel: "#6e727a"
  fog: "#a1a4a5"
  mist: "#abafb4"
  frost: "#f0f0f0"
  pure-white: "#ffffff"
  electric-blue: "#3b9eff"
  resend-violet: "#9281f7"
  surface-lift: "#1b1b1b"
  delivered-green: "#3ad389"
  bounced-red: "#ff9592"
  complained-yellow: "#ffca16"
  opened-blue: "#70b8ff"
  clicked-lavender: "#baa7ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.6
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.3
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -2.8px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1
    letterSpacing: -0.96px
spacing:
  cardRadius: 16px
  buttonRadius: 6px
  elementGap: 16px
  sectionGap: 80-120px
components:
  primary-outlined-action-button:
    role: Main CTA — 'Get started' in nav and hero
  ghost-navigation-button:
    role: Nav dropdowns — Features, Company, Resources, Help, Docs, AI
  ghost-text-link-button:
    role: Secondary actions — Documentation, Log in, View on GitHub
  muted-secondary-button:
    role: Tertiary navigation links — Pricing
  announcement-badge-pill:
    role: Inline announcement tag — 'Announcing Resend Forward'
  feature-card:
    role: Product feature highlight panels in section grids
  testimonial-card:
    role: Social proof quote cards in horizontal scroll section
  code-snippet-block:
    role: Inline product demo code panels in feature sections
  status-event-badge:
    role: Email event row indicators in analytics product UI
  email-app-icon:
    role: Brand product mark shown in logo/hero sections
  navigation-bar:
    role: Site-wide sticky top bar
  logo-partner-wordmark-strip:
    role: Trust signal section — company logo grid
---

## Overview

**North Star:** Obsidian developer terminal — every surface reads like polished black glass under a focused beam of white type.

Resend is a pure black command surface — the canvas is #000000 with near-zero colorfulness (1%), giving the entire interface the weight of polished obsidian. Headlines use a custom serif (Domaine) at display sizes with tight -0.01em tracking, while UI copy runs in Inter and monospaced code elements appear in CommitMono, creating a three-voice typographic hierarchy that signals dev tooling without decoration. Color appears almost exclusively as functional data punctuation: violet for code identity, blue for interactive borders, and a handful of vivid status colors (green, red, yellow, light blue) that function as email event indicators — never as decoration. The system uses subtle border-based elevation (1px hairlines at #292d30) rather than shadows, keeping all surfaces flush and matte on black.

### Do's

- Use #000000 as the default background for every section, card, and container — deviations must be justified by a visible elevation hierarchy via 1px #292d30 border.
- Apply Domaine weight 400 exclusively to hero display text (77-96px) and use ABCFavorit for section headings (56px) — never swap these roles.
- Reserve the six vivid status colors (#3ad389, #ff9592, #ffca16, #70b8ff, #baa7ff, #9281f7) strictly for product-UI data contexts such as email event rows or code syntax — never for decorative section backgrounds or nav elements.
- Use CommitMono for any code, filename, CLI snippet, or developer token — never Inter or ABCFavorit in code contexts.
- Keep button borders at 6px radius for action buttons and pill badges at 16px radius — maintain this distinction to separate call-to-action shape from tagging shape.
- Use #3b9eff only as the outlined border on the primary CTA button — this is the only chromatic color in the nav/shell and must remain singular.
- Set all card padding to 32px and maintain 1px solid #292d30 as the only border treatment — no shadow stacks, no color fills, no gradients on cards.

### Don'ts

- Never use a filled colored background for action buttons — the design uses outlined (#3b9eff border) or ghost (transparent) buttons exclusively. A filled blue or violet button breaks the matte black surface language.
- Never apply Domaine or ABCFavorit to UI chrome such as nav labels, badge text, or button copy — those belong exclusively to Inter.
- Never use more than one vivid status color in a non-product-UI context — the moment a page-level section uses green or yellow as decoration, the email event system loses its meaning.
- Never add drop shadows to cards or sections — elevation is achieved through 1px border contrast on black, not shadow lifting.
- Never use a white or light background for any full-width section — even 'light' content blocks must remain on near-black (#000000 or #0b0e14).
- Never increase letter-spacing on display text — Domaine and ABCFavorit run at negative tracking (-0.01em and -0.05em respectively); positive tracking at display sizes conflicts with the editorial compression of this system.
- Never mix more than two typefaces in a single component — one font for UI copy (Inter) and one for code (CommitMono) is the maximum; headings use ABCFavorit or Domaine depending on size, never both simultaneously.

### Layout

Max-width approximately 1200px centered on a full-bleed black canvas. Hero is full-viewport dark — left-aligned headline block with announcement pill above, two action buttons below, and a right-positioned 3D rendered object floating in the dark field. Section rhythm is seamless black-on-black with only hairline dividers (1px #292d30) separating bands — no alternating light/dark sections, no distinct color shifts between sections. Feature sections use left-text / right-product-video two-column layouts at roughly 40/60 split, alternating which side holds the visual. Social proof uses a horizontal scroll card strip. Code showcase sections use a centered stack with the code panel as the hero visual. The navigation is a fixed top bar at 59px. Footer is minimal — two links only. Overall the page feels vertically long with generous spacing (80-120px section gaps) and very low content density per viewport, pushing focus onto each individual product moment.

### Imagery

Resend's visual language centers on high-fidelity 3D-rendered objects — the hero shows a black modular cube cluster rendered with physically-based lighting on pure black, casting no visible floor shadow. Objects have a lacquered, almost ceramic finish: deep black with subtle specular highlights that emerge from the scene's single directional light. There is no lifestyle photography, no people, no abstract patterns. Product screenshots (email analytics tables, code editors) appear as contained UI panels inside dark card frames, treated as flat surfaces rather than floating mockups. The email app icon uses a violet-to-purple gradient as its only chromatic surface. Icon style is outlined with consistent ~1.5px stroke weight, monochromatic white or gray — never filled with color. Overall image density is low: one hero 3D object, one or two product video panels per section, white company logos on black. The site is text and code dominant; imagery serves as punctuation, not wallpaper.

### Elevation

Resend avoids box-shadow elevation almost entirely. Depth is created through border contrast: components sit on black with a 1px #292d30 border, making them readable without ever lifting off the surface. The one true shadow is the icon ring — a barely-there cold-tinted glow at rgba(176,199,217,0.145) — which is so subtle it reads as a polish detail rather than an elevation cue.

---
version: alpha
name: Asana
description: Asana reads as a white canvas under a coral-and-violet editorial system — generous whitespace punctuated by a near-black (#0d0d0d) headline weight that commands attention, then released into light gray body copy. The signature move is two coexisting type voices: Ghost at 60-72px with -0.0070em tracking for display headlines that compress letter forms into dense, authoritative blocks, and TWK Lausanne at 300-500 weight handling everything else with a humanist openness. Pill buttons (100px+ radius) float as soft capsules against sharp-cornered cards (10-16px), creating gentle contrast between interaction surfaces and content containers. The coral tint (#ffeaec background, #690031 deep text) acts as a warm semantic accent for the product's brand-colored UI elements, while a saturated dark violet (#222875) marks interactive and informational states — both restrained to small, intentional doses against an otherwise achromatic canvas.
colors:
  ink-black: "#0d0d0d"
  pure-white: "#ffffff"
  mist: "#f3f3f3"
  cloud: "#e7e7e7"
  stone: "#e0dedc"
  graphite: "#6e6e6"
  slate: "#646f79"
  charcoal: "#3d3d3d"
  iron: "#474748"
  ash: "#9ca6af"
  asana-violet: "#222875"
  coral-blush: "#ffeaec"
  deep-coral: "#690031"
  coral-ember: "#ff584a"
  coral-dark: "#710c3a"
  sky-ice: "#cbefff"
  coral-petal: "#e1bbc7"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.75
    letterSpacing: 0.44px
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
    fontSize: 24px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.2
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 60px
    lineHeight: 1
    letterSpacing: -0.42px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.5px
spacing:
  cardRadius: 10-16px
  elementGap: 16px
  sectionGap: 80-120px
components:
  cta-button-group:
    role: 
  filter-chip-tab-bar:
    role: 
  use-case-feature-cards:
    role: 
  primary-cta-button-pill:
    role: Main calls to action: 'Get started', primary conversion points
  secondary-outline-button-pill:
    role: Secondary actions: 'View demo', alternate CTAs alongside primary
  ghost-nav-button:
    role: Navigation dropdown triggers and tertiary utility actions
  filter-chip-active:
    role: Active category filter in tabbed product sections: 'Marketing', 'Operations', etc.
  product-ui-screenshot-card:
    role: Hero and section feature showcases — framed product app screenshots
  logo-bar-social-proof-strip:
    role: Fortune 100 trust signal section with partner logos
  arrow-circle-icon-button:
    role: Carousel navigation and card-level CTA links
  sticky-navigation-bar:
    role: Global top navigation, persistent on scroll
  section-heading-block:
    role: Large section titles introducing content clusters
  informational-tint-chip:
    role: Small inline labels and tag badges with semantic color tints
---

## Overview

**North Star:** Productivity whiteboard lit by a coral lamp — authoritative black type on a breathing white field, with a warm coral flash and a deep-navy flicker to signal where action lives.

Asana reads as a white canvas under a coral-and-violet editorial system — generous whitespace punctuated by a near-black (#0d0d0d) headline weight that commands attention, then released into light gray body copy. The signature move is two coexisting type voices: Ghost at 60-72px with -0.0070em tracking for display headlines that compress letter forms into dense, authoritative blocks, and TWK Lausanne at 300-500 weight handling everything else with a humanist openness. Pill buttons (100px+ radius) float as soft capsules against sharp-cornered cards (10-16px), creating gentle contrast between interaction surfaces and content containers. The coral tint (#ffeaec background, #690031 deep text) acts as a warm semantic accent for the product's brand-colored UI elements, while a saturated dark violet (#222875) marks interactive and informational states — both restrained to small, intentional doses against an otherwise achromatic canvas.

### Do's

- Use Ghost font at 60-72px with letter-spacing -0.0070em exclusively for top-level display headlines — no other element should compete at this scale
- Apply 100px+ border-radius on all CTA buttons (primary and secondary) and filter chips — pill shapes are the only soft element in an otherwise angular component set
- Reserve #222875 (Asana Violet) for product UI frames and informational containers — never use it as a button fill or section background
- Pair Coral Blush (#ffeaec) backgrounds exclusively with Deep Coral (#690031) text — they are a locked semantic pair; do not substitute either half
- Maintain a near-achromatic page canvas (#ffffff primary, #f3f3f3 secondary) and introduce coral or violet only as small contained accents, never as full-section backgrounds
- Use TWK Lausanne weight 300 for all body copy to preserve the open, non-urgent reading texture — weight 400 is for UI labels and nav, weight 500 for subheadings and CTAs
- Set card borders to 1px solid #e7e7e7 with 10-16px radius — no box shadows on content cards; elevation is conveyed through color contrast alone

### Don'ts

- Never use Ghost font below 60px — TWK Lausanne at weight 500 handles all sub-display heading sizes
- Never apply the pill button radius (100px+) to cards, inputs, or modal containers — the shape language is exclusive to interactive action elements
- Never fill a full page section with #222875 or any saturated color — the violet and coral appear only in contained UI frames or chip-sized elements
- Never use positive letter-spacing on headings — letter-spacing is negative or zero for all sizes 20px and above
- Never mix the coral and violet accent families in the same component — they operate as separate semantic threads
- Never add box-shadow elevation to feature cards — borders alone define card boundaries; shadows break the flat, print-like surface quality
- Never set body copy weight above 400 — weight 500 is reserved for labels, CTAs, and subheading roles only

### Layout

Max-width approximately 1200px centered on all content, but product UI screenshot cards bleed to wider containers. Hero is a centered-headline pattern: Ghost headline centered, subhead centered at ~560px max-width, two pill buttons in a row, then a full-width product UI screenshot card below. Sections below alternate between: full-width white logo bar (no containers), left-text + tabbed-filter + image right (2-column split), and horizontally scrolling card rails (4 cards visible, 10px gap, overflow hinted). Navigation is a fixed top bar at 56px with left logo, center nav, right utility links. Vertical section rhythm is generous — 80-120px between sections — giving each content cluster breathing room. The feature card carousel section uses explicit prev/next circular icon buttons for navigation control.

### Imagery

Two visual registers coexist. Product UI screenshots dominate: flat, pixel-accurate app window captures dropped inside rounded violet frames, shown at large scale (full-width hero) and medium scale (section features). These are isolated, never lifestyle-contextualised — the interface IS the subject. The second register is a set of outline-only line illustrations used in use-case cards: single-color coral stroke illustrations on white (a campaign chart, an easel, a rocket) with minimal fill, geometric-organic hybrid style, approximately 1.5px apparent stroke weight. Icons across the UI are monochrome outlines, matching the TWK Lausanne light weight in visual mass. No photography anywhere on the visible page. The density balance is text-dominant with product UI serving as the single large visual anchor per section.

### Elevation

Asana uses zero box-shadow elevation across all content components. Cards are defined by 1px solid #e7e7e7 borders on a white background — depth comes from color contrast between container and surface, not shadow. The only visual elevation effect is the Product UI Screenshot Card, where a #222875 violet frame makes a white inner window appear to float — achieved through color contrast, not shadow. This approach keeps the page feeling like a flat printed surface.

---
version: alpha
name: Family
description: Family lands like a children's book dropped into a fintech dashboard — warm off-white canvas (#fbfaf9) littered with expressive flat-illustrated characters in vivid primary colors (electric orange, grass green, sky blue, bright yellow) while the typography stays grounded and authoritative. The custom 'Family' typeface at 68px with tight -0.031em tracking carries the hero weight, while Inter handles everything else with progressively tighter letter-spacing as sizes increase. Cards use an inset warm-stone border (a single 1px shadow at #f2f0ed) instead of drop shadows, keeping surfaces flat and tactile. The only dark surface is the 'Get Started' pill button in near-black #121212 against the warm cream background — a single moment of contrast in an otherwise light, airy layout. The illustration vocabulary — wobbly blob creatures with stick legs and expressive faces — is the real identity system, not the color palette alone.
colors:
  warm-canvas: "#fbfaf9"
  stone-surface: "#f2f0ed"
  parchment-card: "#f8f7f4"
  graphite: "#474645"
  charcoal-primary: "#343433"
  midnight: "#121212"
  obsidian: "#000000"
  ash: "#848281"
  fog: "#c6c6c6"
  smoke: "#a7a7a7"
  pepper: "#282624"
  ember-orange: "#ff3e00"
  meadow-green: "#00ca48"
  sky-blue: "#0090ff"
  sunburst-yellow: "#ffbb26"
  deep-amber: "#d48f00"
  ocean-blue: "#0086fc"
  ice-blue: "#64c6ff"
  spearmint: "#00c978"
  flamingo: "#ff58ae"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.58
    letterSpacing: -0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.47
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 19px
    lineHeight: 1.38
    letterSpacing: -0.25px
  heading:
    fontFamily: "system-ui"
    fontSize: 23px
    lineHeight: 1.2
    letterSpacing: -0.44px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.09
    letterSpacing: -1.14px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1.09
    letterSpacing: -2.11px
spacing:
  cardRadius: 10px
  buttonRadius: 32px
  elementGap: 8-12px
  sectionGap: 120-180px
components:
  primary-cta-button-pill-dark:
    role: Main conversion action — 'Get Started', 'Download on iOS'
  secondary-cta-button-pill-light:
    role: Alternative actions — 'Log In', 'Watch the Video'
  ghost-text-link-button:
    role: Inline navigation links — 'Watch the demo', section CTAs
  outlined-navigation-button:
    role: Tertiary actions in nav or contextual contexts
  feature-card-white:
    role: Primary content cards — feature descriptions, testimonials
  feature-card-warm-cream:
    role: Secondary content panels — screenshot containers, demo previews
  dark-phone-mockup-card:
    role: Product screenshot showcase — wallet UI demonstrations
  testimonial-card:
    role: Social proof — Twitter/X quotes in 'Friends of Family' section
  illustration-character:
    role: Decorative brand mascots — blob creatures, emoji animals scattered in hero
  navigation-bar:
    role: Sticky top navigation
  section-heading:
    role: Page section titles
  colored-action-badge:
    role: Transaction type labels inside wallet UI mockups — Send, Receive, Purchase
---

## Overview

**North Star:** Pixar storyboard on cream paper — playful illustrated characters inhabit a warm off-white world where fintech feels like an adventure game.

Family lands like a children's book dropped into a fintech dashboard — warm off-white canvas (#fbfaf9) littered with expressive flat-illustrated characters in vivid primary colors (electric orange, grass green, sky blue, bright yellow) while the typography stays grounded and authoritative. The custom 'Family' typeface at 68px with tight -0.031em tracking carries the hero weight, while Inter handles everything else with progressively tighter letter-spacing as sizes increase. Cards use an inset warm-stone border (a single 1px shadow at #f2f0ed) instead of drop shadows, keeping surfaces flat and tactile. The only dark surface is the 'Get Started' pill button in near-black #121212 against the warm cream background — a single moment of contrast in an otherwise light, airy layout. The illustration vocabulary — wobbly blob creatures with stick legs and expressive faces — is the real identity system, not the color palette alone.

### Do's

- Use #fbfaf9 as page background — never pure white (#ffffff) at canvas level; the warm cream cast is the foundation of the tactile feel.
- Apply the inset stone border (box-shadow: color(display-p3 0.949 0.941 0.929) 0px 0px 0px 1px inset) on all white cards instead of a CSS border property — keeps cards off-layout-flow.
- Use border-radius 32px for all pill buttons (both #121212 dark and #f6f4ef light variants) — the pill shape is non-negotiable for interactive elements.
- Apply tight negative letter-spacing to all large text: -2.11px at 68px display, -1.14px at 44px heading-lg, scaling to near-zero at body sizes.
- Restrict the Family custom typeface to display and large section headings only (44px and 68px) — Inter handles all UI text regardless of weight.
- Use Ember Orange (#ff3e00) exclusively for text-link CTAs and illustration accents — never as a button background fill; its power is as an inline pop against cream.
- Space illustration characters asymmetrically around hero text — overlap the headline bounding box with characters to create depth through layering, not z-index stacking.

### Don'ts

- Don't use drop shadows on content cards — the inset warm-stone border is the only surface definition mechanism; shadows appear only on the dark phone mockup and hover-elevated states.
- Don't use pure #ffffff as a page background — it breaks the warm cream identity; #fbfaf9 is the minimum warmth threshold.
- Don't use the illustration characters as pure decoration at small sizes — below 60px they lose their expressive faces and become abstract blobs.
- Don't mix Inter weight 700+ with the Family display typeface — the site uses Inter max weight 600; heavier weights fight the custom font's personality.
- Don't apply Ember Orange (#ff3e00) to more than one UI element per viewport — its rarity is what creates urgency; overuse collapses the hierarchy.
- Don't use border-radius below 10px on cards — the minimum card radius is 10px; anything sharper breaks the soft-edged system.
- Don't use the Violet Pop (#9f4fff), Flamingo (#ff58ae), or Coral Red (#ff2b3a) colors in UI chrome — these are illustration-only accents and have no role in buttons, nav, or body text.

### Layout

Max-width ~1200px centered on the warm canvas. Hero is full-viewport with centered headline text (Family typeface), flanked by illustration characters positioned left and right of the text column — not a split layout but a 'headline-surrounded-by-friends' composition. Below hero: alternating sections with generous vertical gaps (120-180px). Feature section uses a 3-column card grid (white cards with inset borders). Phone mockup sections show 2-3 device frames side by side on white or cream bands. Social proof section ('Friends of Family') uses a horizontal scrolling card row. Navigation is a fixed top bar with logo left, links center, actions right. Footer is minimal — link grid on canvas background. No sidebar, no mega-menu. Page is text-dominant with illustrations as punctuation, not wallpaper.

### Imagery

Exclusively custom flat illustration — no photography anywhere on the page. Characters are organic blob-shaped creatures with stick limbs, dot eyes, and emoji-like expressions, rendered in vivid primaries (orange, green, blue, yellow) against the warm cream canvas. Illustration density is highest in the hero: 12-15 characters and objects scattered asymmetrically around the headline, creating a 'spilled toy box' composition. Product screenshots appear inside dark rounded phone mockups (border-radius 24px) — contained and framed, never bleeding to page edge. Icons are filled monochrome at small sizes; action badges use filled circles with white icon glyphs. The illustration style is the primary brand differentiator: deliberately childlike but executed with precision — consistent stroke weights, flat shading with no gradients, expressive character design that makes crypto feel approachable rather than intimidating.

### Elevation

Elevation is expressed through warm inset borders rather than drop shadows — the 1px inset stone-colored ring (display-p3 0.949 0.941 0.929) on white cards creates definition without casting any light. Drop shadows appear only at two moments: the dark phone mockup (0.15 opacity, 24px blur — a cinematic spotlight) and subtle hover states. This keeps the page feeling paper-flat except where product is being spotlit.

---
version: alpha
name: JetBrains
description: JetBrains' site feels like the interior of a deep-space control room — pure black (#000000) ground plane with electric violet-to-blue gradients erupting from the darkness like bioluminescent nebulae. The defining moves are the chromatic product icon ecosystem (each IDE gets a vivid multicolor badge) floating against near-black surfaces, and the blue radial glow (rgba(0,71,253,0.8) at 75% opacity) diffused behind hero content like a spotlight on a dark stage. Headlines at 72-79px use JetBrains Sans weight 600 with tight letter-spacing, while the hot-pink accent (#f31199, CSS var --main-page-pink) fires only on category labels and brand moments — a neon sign in a dark corridor. Cards use 24px radius with translucent violet or pink fills (rgba(90,31,208,0.3), rgba(243,17,180,0.2)) that glow rather than separate.
colors:
  obsidian-ground: "#000000"
  deep-charcoal: "#19191c"
  graphite: "#343434"
  iron: "#474749"
  ash: "#757577"
  slate: "#8c8c8"
  silver: "#a3a3a4"
  fog: "#bababb"
  pure-white: "#ffffff"
  electric-blue: "#18a3fa"
  violet-pulse: "#7b61ff"
  iris: "#6b57ff"
  amethyst: "#8473ff"
  deep-violet: "#2e106a"
  neon-pink: "#f31199"
  magenta-glow: "#5a1fd0"
  nebula-violet: "#5a1fd0"
  aurora-teal: "#08deaa"
  hero-blue-glow: "#0047fd"
  danger-red: "#f45c4a"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1.2
    letterSpacing: 0.065px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0.032px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  subheading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1.34
    letterSpacing: -0.029px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 35px
    lineHeight: 1.2
    letterSpacing: -0.035px
  heading:
    fontFamily: "system-ui"
    fontSize: 43px
    lineHeight: 1.14
    letterSpacing: -0.043px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -0.36px
  display:
    fontFamily: "system-ui"
    fontSize: 79px
    lineHeight: 0.9
    letterSpacing: -0.395px
spacing:
  cardRadius: 24px
  buttonRadius: 20-26px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  audience-segmentation-tab-row-business-feature-card:
    role: 
  feature-announcement-card-with-ide-grid:
    role: 
  button-group-primary-violet-deep-and-ghost:
    role: 
  hero-cta-button-primary-dark:
    role: Main call-to-action on hero sections
  cta-button-violet-deep:
    role: Secondary prominent CTA on feature cards
  ghost-button-white-outlined:
    role: Navigation links, secondary actions with text context
  ghost-link-button-borderless:
    role: Nav bar top-level items, inline text actions
  feature-announcement-card:
    role: Hero carousel cards for product announcements like 'JetBrains IDEs 2026.1'
  business-feature-card:
    role: Gradient content card for audience-segmented sections
  pink-tinted-feature-card:
    role: Highlight cards for specific product moments
  violet-badge-filled:
    role: Status labels like 'Now Live', 'Featured', 'Free for non-commercial use'
  violet-badge-tab-style:
    role: Contextual tab labels attached to card tops
  ide-product-icon-badge:
    role: Per-product identity marks in product grids and navigation
  navigation-bar:
    role: Top-level site navigation, always visible
  carousel-pagination-control:
    role: Slide navigation for announcement cards
---

## Overview

**North Star:** Neon nebula on obsidian — a black-ground page where violet-blue gradients bloom upward like deep-space imagery, punctuated by hot-pink neon and per-product chromatic icon light.

JetBrains' site feels like the interior of a deep-space control room — pure black (#000000) ground plane with electric violet-to-blue gradients erupting from the darkness like bioluminescent nebulae. The defining moves are the chromatic product icon ecosystem (each IDE gets a vivid multicolor badge) floating against near-black surfaces, and the blue radial glow (rgba(0,71,253,0.8) at 75% opacity) diffused behind hero content like a spotlight on a dark stage. Headlines at 72-79px use JetBrains Sans weight 600 with tight letter-spacing, while the hot-pink accent (#f31199, CSS var --main-page-pink) fires only on category labels and brand moments — a neon sign in a dark corridor. Cards use 24px radius with translucent violet or pink fills (rgba(90,31,208,0.3), rgba(243,17,180,0.2)) that glow rather than separate.

### Do's

- Use #000000 as the absolute page background — never a near-black like #0a0a0a or #111; the true black is what makes the gradient glows feel luminous
- Apply the radial blue glow (rgba(0,71,253,0.8) → transparent) behind hero content at ~87% width spread, centered on the content, so text appears spotlit from behind
- Use Neon Pink (#f31199) only for category labels and brand punctuation — 1-3 instances per page maximum; it reads as a signal color, not a fill color
- Set all card and feature panel border-radius to 24px; use 4px only for badges, never mix these on the same component
- Use translucent fills for card backgrounds: rgba(90,31,208,0.3) for violet-tinted cards, rgba(243,17,180,0.2) for pink-tinted cards — never opaque colored fills
- Apply JetBrains Sans with fontFeatureSettings '"calt", "kern", "liga"' active at all sizes, and apply negative letter-spacing (-0.005em) at display sizes 43px and above
- Give each JetBrains product its own distinct multicolor icon — the chromatic icon grid is the primary visual diversity mechanism; do not apply a single brand color to all icons

### Don'ts

- Do not use #18a3fa (Electric Blue) as a fill color for buttons or large surfaces — it is a text/border/link color only; as a fill it would overpower the dark palette
- Do not add box-shadows to cards — elevation is expressed through gradient fills and translucent backgrounds, never drop shadows
- Do not use border-radius below 16px on interactive elements (buttons, cards); sharp-cornered shapes are reserved exclusively for badges (4-6px)
- Do not place white text directly on the pure black background without a gradient zone or translucent card beneath for longer body text — use #bababb for body on raw black
- Do not use Neon Pink (#f31199) as a background fill for large areas — its opacity 0.2 translucent form (rgba(243,17,180,0.2)) is the maximum surface application
- Do not add a visible border-bottom to the navigation bar — the #19191c header transitions into the hero gradient without a line
- Do not apply uniform icon color — product icons must retain their individual per-product chromatic gradient identity; monochromatic treatment breaks the identity system

### Layout

Full-bleed dark canvas with a max-width content container of ~1280px centered. Hero is full-viewport with centered headline text over a radial blue glow, with an IDE screenshot mockup below the fold. Section rhythm moves from the blue-glow hero → card carousel section (full-bleed black) → audience segmentation tabs with gradient feature panels → product grid sections. No alternating light/dark bands — the entire page stays on the dark black ground, with section separation achieved via gradient card backgrounds and spacing (80-120px between sections) rather than background color changes. The 'For businesses' section temporarily shifts to a near-black #19191c ground for contrast. Card grids use 2-column layouts for feature panels and 4-5 column grids for the IDE product icon array. Navigation is a fixed top bar at 72px with logo-left, nav-center, utilities-right structure.

### Imagery

Heavy use of abstract 3D rendered data-mesh visuals — luminous wireframe surfaces in pink/purple/blue forming curved grid planes, as seen in the 'JetBrains IDEs 2026.1' announcement card. These renders have no photographic elements; they're pure light-on-dark mathematical geometry suggesting data structures or network topology. Product screenshots are treated as dark-themed UI mockups (the IDE itself shown with dark editor theme) with rounded 8-16px corners, embedded within dark card contexts rather than on white backgrounds. No lifestyle photography or people imagery visible. Icons are 32px product logos with individual per-product multicolor gradient fills — each is a distinct chromatic identity mark, not a unified icon set. The overall image language is code-and-compute: abstract renders + UI screenshots + chromatic product icons, with zero real-world photography.

### Elevation

Zero box-shadows anywhere on the site. Elevation and depth are created exclusively through gradient fills, translucent backgrounds with color tint (rgba violet/pink), and radial glow effects — not shadow casting. A card 'rises' because its colored translucent fill catches the light of the background gradient behind it, not because it casts a shadow below it. This approach keeps the dark theme feeling like illumination from within rather than objects floating above a surface.

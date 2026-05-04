---
version: alpha
name: Paste
description: Feels like sunlight through a minimalist gallery — vast white space with black typography and a single warm-amber focal point that draws the eye like a lantern in snow. The page is dominated by pure white (#ffffff) and near-white (#f5f5f7) surfaces with near-black (#101010) text, creating extreme contrast. system-ui at display sizes (54-80px) with tight letter-spacing (-0.013em) and weight 400-700 gives headlines a native-OS feel that reinforces the Mac-utility identity. The amber-orange gradient logo (rgb(240,100,19) → rgb(254,171,48)) is the only warm element on an otherwise monochrome canvas, making it impossibly magnetic. Blue CTA buttons (#0088ff) with 100px pill radius are the sole call to action — warm brand, cool CTA, white field.
colors:
  amber-flame: "#f06413"
  honey-glow: "#feab30"
  signal-blue: "#0088ff"
  bright-blue: "#1c95ff"
  pure-white: "#ffffff"
  snow-gray: "#f5f5f7"
  mist: "#f0f0f0"
  silver: "#d0d0d3"
  pewter: "#ababb0"
  smoke: "#6e6e73"
  charcoal: "#272727"
  ink: "#101010"
  true-black: "#000000"
  vivid-green: "#34c759"
  electric-magenta: "#cb30e0"
  alert-red: "#ff383c"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 18
    letterSpacing: -0.41px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 24
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 24
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 28
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 44
    letterSpacing: -0.24px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 56
    letterSpacing: -0.7px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 80
    letterSpacing: -1.04px
spacing:
  cardRadius: 16-20px
  buttonRadius: 100px
  elementGap: 16-20px
  sectionGap: 80-120px
components:
  primary-cta-button-group:
    role: 
  social-proof-press-logos-bar:
    role: 
  feature-cards-grid:
    role: 
  primary-cta-button-filled-pill:
    role: Main call-to-action across hero and sections
  ghost-pill-button-outline:
    role: Secondary actions, alternative CTAs
  navigation-bar:
    role: Top-level site navigation, sticky header
  hero-section:
    role: Primary landing area with product showcase
  feature-section-amber-headline:
    role: Section introduction with brand-colored headline
  feature-card:
    role: Individual feature highlight within grid layouts
  category-color-indicator:
    role: Visual markers for feature categories (privacy, collaboration, etc.)
  product-screenshot-container:
    role: Device mockup display for product imagery
  section-divider-surface-shift:
    role: Visual separation between page sections
  pricing-cta-block:
    role: Conversion-focused pricing section
---

## Overview

**North Star:** Amber lantern on white marble — the brand's warm gradient logo floats in vast white space, like a single lit window in a snow-covered building.

Feels like sunlight through a minimalist gallery — vast white space with black typography and a single warm-amber focal point that draws the eye like a lantern in snow. The page is dominated by pure white (#ffffff) and near-white (#f5f5f7) surfaces with near-black (#101010) text, creating extreme contrast. system-ui at display sizes (54-80px) with tight letter-spacing (-0.013em) and weight 400-700 gives headlines a native-OS feel that reinforces the Mac-utility identity. The amber-orange gradient logo (rgb(240,100,19) → rgb(254,171,48)) is the only warm element on an otherwise monochrome canvas, making it impossibly magnetic. Blue CTA buttons (#0088ff) with 100px pill radius are the sole call to action — warm brand, cool CTA, white field.

### Do's

- Use 100px border-radius for ALL buttons, badges, and pill-shaped elements — this is non-negotiable and defines the visual identity
- Alternate page sections between #ffffff and #f5f5f7 backgrounds to create rhythm without visible dividers
- Set display headlines (40px+) in system-ui weight 600-700 with negative letter-spacing (-0.7px to -1.04px) — tight tracking at large sizes is essential
- Reserve the amber-orange gradient (rgb(240,100,19) → rgb(254,171,48)) for brand mark and occasional headline accents — never for backgrounds or large surfaces
- Keep all CTA buttons in #0088ff with white text — the warm brand / cool CTA temperature split is the core interaction pattern
- Use #6e6e73 or #ababb0 for secondary/body text to maintain the high-contrast headline / low-contrast body hierarchy
- Apply the soft ambient shadow (rgba(16,16,16,0.1) 0px 0px 30px) to elevated cards — never sharp directional shadows

### Don'ts

- Never use the amber-orange gradient as a button fill — it is reserved for the logo and decorative headline accents only
- Never mix sharp-corner containers (0px radius) with the pill-radius system — minimum radius for any container is 8px, with 16-20px for cards
- Never use more than one chromatic accent color (#0088ff) in a single CTA context — the four category colors (#34c759, #cb30e0, #ff383c) are for indicators, not buttons
- Never set body text in weight 700 — reserve 700 for headlines at 40px+; body stays at 400-500
- Never add visible border lines between sections — use background color shifts (#ffffff ↔ #f5f5f7) and spacing instead
- Never use directional or hard-edged shadows — the only shadow in the system is the ambient 30px blur at 10% opacity
- Never apply positive letter-spacing to headlines — display type always uses negative tracking; positive spacing is only for small (14-18px) labels

### Layout

Max-width ~1200px centered container. Hero is full-width white with centered headline, centered body text, and a composed multi-device product screenshot below. CTA button centered below body copy. Sticky navigation bar at top with logo left, links center, CTA right. Below hero: a thin press-logos bar (social proof). Sections alternate between #ffffff and #f5f5f7 backgrounds with 80-120px vertical gaps. Feature sections use large amber-gradient headlines centered, followed by explanatory content. Content is predominantly centered single-column — no sidebars, minimal multi-column grids. Section rhythm: hero → social proof → feature intro (amber headline on gray) → feature details → next feature section. The page reads as a vertical scroll with clear section breaks via background shifts.

### Imagery

Product-focused device mockups dominate — MacBook, iPhone, and iPad shown together in composed arrangements where devices overlap slightly to communicate ecosystem unity. Screenshots show the actual app UI with colorful clipboard items (photos, text snippets, maps, messages) providing visual interest against the monochrome page. No lifestyle photography, no abstract illustrations. The hero image is a composite of three device frames centered on white, establishing a 'product showcase in a gallery' feel. Press logos are displayed in muted gray. The amber-orange gradient appears only in the logo icon and as headline text color in feature sections — it's treated like a precious material used sparingly. Icon style mirrors Apple's SF Symbols: mono-weight, single-color, functional. Overall density is text-dominant with large product imagery as section anchors.

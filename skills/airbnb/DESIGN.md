---
version: alpha
name: Airbnb
description: Airbnb's interface is a warm, airy marketplace built on near-white surfaces and a single coral-red brand heartbeat. The #f7f7f7 canvas with #ffffff card surfaces creates a barely-there depth — paper stacked on paper — where photography does all the visual heavy lifting. The custom Airbnb Cereal VF variable font runs at weights 400–700 across a compact, tight scale with negative letter-spacing at larger sizes, giving the UI a quiet confidence without needing decorative elements. The singular #ff385c coral-red appears exclusively on brand touchpoints (logo, active states, the search button), making it feel like a signature rather than a system color. Card images bleed edge-to-edge with 20px rounded corners — the only generous radius in an otherwise compact, information-dense layout.
colors:
  rausch-coral: "#ff385c"
  rausch-deep: "#e00b41"
  carbon: "#222222"
  slate: "#6a6a6a"
  silver: "#c1c1c1"
  stone: "#b0b0b0"
  pebble: "#dddddd"
  mist: "#ebebeb"
  fog: "#f7f7f7"
  cloud: "#ffffff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.29
    letterSpacing: 0.44px
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.13px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.25
    letterSpacing: -0.18px
  heading:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.23
    letterSpacing: -0.2px
  display:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.18
    letterSpacing: -0.56px
spacing:
  cardRadius: 20px
  buttonRadius: 8px
  elementGap: 8px
  sectionGap: 48px
components:
  primary-search-bar:
    role: 
  listing-card:
    role: 
  navigation-tab-bar:
    role: 
  listing-card:
    role: Primary browsable content unit in scrollable horizontal carousels
  guest-favorite-badge:
    role: Trust signal overlaid on listing card images
  primary-search-bar:
    role: Main search interface in the header
  circular-icon-button-default:
    role: Carousel navigation arrows, save/wishlist toggles
  rounded-pill-button-secondary:
    role: Filter category tabs (Popular, Beach, Cities, Historic)
  ghost-text-button-nav-link:
    role: Top navigation links: Homes, Experiences, Services
  become-a-host-button:
    role: Tertiary CTA in global header navigation
  section-header-with-arrow-link:
    role: Section title + 'See all' inline link
  star-rating-indicator:
    role: Listing quality signal below card image
  global-header:
    role: Sticky top bar containing logo, nav, and search
  carousel-scroll-container:
    role: Horizontal scrollable listing row per section
---

## Overview

**North Star:** Vacation photos pinned to a white corkboard — bright photography contained in rounded frames against a near-white surface, with a single coral pin holding everything together.

Airbnb's interface is a warm, airy marketplace built on near-white surfaces and a single coral-red brand heartbeat. The #f7f7f7 canvas with #ffffff card surfaces creates a barely-there depth — paper stacked on paper — where photography does all the visual heavy lifting. The custom Airbnb Cereal VF variable font runs at weights 400–700 across a compact, tight scale with negative letter-spacing at larger sizes, giving the UI a quiet confidence without needing decorative elements. The singular #ff385c coral-red appears exclusively on brand touchpoints (logo, active states, the search button), making it feel like a signature rather than a system color. Card images bleed edge-to-edge with 20px rounded corners — the only generous radius in an otherwise compact, information-dense layout.

### Do's

- Use #ff385c exclusively for the brand logo, the search trigger button background, and active/selected state indicators — never for decorative fills or text blocks.
- Apply 20px border-radius to all listing cards and the main search bar container; use 8px for filter pill buttons and input fields; reserve 50% (circular) for icon-only buttons.
- Set all typography in Airbnb Cereal VF (substitute: Inter Variable) with font-feature-settings: 'salt'; apply letter-spacing -0.02em at 20px+ sizes and +0.04em for small-caps labels at 11–12px.
- Layer shadows as the three-value stack — rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px 0px, rgba(0,0,0,0.1) 0px 4px 8px 0px — on elevated containers like the search bar and modals only; listing cards use no shadow.
- Maintain the surface hierarchy strictly: page canvas #f7f7f7 → card/header surface #ffffff → disabled/placeholder fills #dddddd → skeleton loaders #b0b0b0.
- Keep section headings at 22px weight 600 with the inline arrow-link pattern; use 14px weight 400 #6a6a6a for all metadata (dates, host type, review counts).
- Use 12px as the base gap for intra-card elements and 48px for vertical section rhythm between listing rows.

### Don'ts

- Never use #ff385c for body text, headings, or decorative strokes — its appearance outside logo/search-button/active-states breaks the signature scarcity of the brand color.
- Don't add heavy drop shadows to listing cards — cards use no shadow; the #dddddd placeholder color and 20px radius carry the visual weight without elevation.
- Never set headings above weight 700 or below weight 500; Airbnb Cereal VF at weight 800+ is not in the design system and breaks the measured typographic rhythm.
- Don't use border-radius values other than 4px, 8px, 14px, 20px, 32px, or 50% — mixing arbitrary radii (e.g. 6px, 12px, 24px) disrupts the deliberate radius vocabulary.
- Never place text directly on card photography without a scrim or badge surface — overlay content uses #ffffff or semi-transparent white containers, not raw text on image.
- Don't use the blue gradient (rgb(45,60,91) → rgb(128,157,192)) as a UI surface — it is specific to the hero CTA card animation and not part of the repeatable component palette.
- Never omit the 'salt' font feature setting on Airbnb Cereal VF — without it, the alternate letterforms revert to generic shapes that undermine brand distinctiveness.

### Layout

Max-width approximately 1760px, centered, with ~24px horizontal page padding. The header is fixed at 96px with white fill, containing logo left, tab nav center, utility right. Below the header, a search bar pill floats centered at roughly 72px height. The main content begins at ~200px from top with a section heading + horizontal card carousel pattern that repeats every 48px of vertical rhythm. Each section is a label + scrollable single-row card strip (7–8 cards visible, paginated). Cards maintain equal width (~160–180px) with 12px gutters. There is no alternating dark/light band rhythm — every section sits on the same #f7f7f7 canvas with white card surfaces. The footer is a dense multi-column link grid on #f7f7f7. Navigation is a slim top bar with no sidebar, no mega-menu, and no sticky secondary nav.

### Imagery

Full-bleed interior and architectural photography with no color treatment — images are vibrant and unfiltered, occupying 70–75% of each listing card's visual area. Photos are contained within 20px rounded-corner cards; no sharp-edge or full-bleed-to-viewport images on the listing grid. The images are lifestyle-adjacent but product-focused: rooms, beds, living spaces shot in natural light, staged but not dramatically lit. No illustrations, no abstract graphics, no 3D renders. Icons are outlined (thin ~1.5px stroke), monochromatic in #222222, used only for functional UI (navigation, save, search, share). The design is heavily image-dense — in any section, photography accounts for roughly 4× the visual area of text — making the listing grid feel like a photo album with metadata annotations rather than a product catalog.

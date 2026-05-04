---
version: alpha
name: Mapbox
description: Mapbox operates in near-total darkness — a #0e1012 void that makes embedded map tiles glow like illuminated instruments. The entire neutral scale runs from #0e1012 through #333943 to #a0aaba, creating depth through layered darkness rather than shadows. A single vivid blue (#007afc) punctuates the black field exclusively on CTAs and active states, like a GPS pin dropped into night sky. Pill-form buttons (100px radius) coexist with sharp 4px badges, creating deliberate tension between cartographic curves and data-table precision. Cera Pro's geometric weight-700 at 68px and tight -0.02em tracking gives headlines a technical density — coordinates on a map, not marketing copy.
colors:
  void-black: "#0e1012"
  deep-charcoal: "#15171b"
  gunmetal: "#1c1f24"
  graphite: "#23262d"
  steel: "#333943"
  pewter: "#444d5a"
  slate: "#566171"
  ash: "#8b96aa"
  fog: "#a0aaba"
  silver: "#bbc2ce"
  cloud: "#d5dae2"
  white: "#ffffff"
  signal-blue: "#007afc"
  deep-signal: "#0062ca"
  map-green: "#228a56"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.6
    letterSpacing: 1px
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
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
  heading:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.25
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1.14
    letterSpacing: -0.88px
  display:
    fontFamily: "system-ui"
    fontSize: 68px
    lineHeight: 1
    letterSpacing: -1.36px
spacing:
  cardRadius: 24px
  buttonRadius: 100px
  elementGap: 12px
  sectionGap: 96px
components:
  cta-button-group:
    role: 
  category-filter-tab-bar:
    role: 
  customer-story-card:
    role: 
  primary-cta-button:
    role: Main call-to-action, 'Get started for free', 'Sign up'
  outlined-pill-button:
    role: Secondary actions like 'Contact us', nav secondary links
  ghost-text-button:
    role: Inline text links, 'Learn more →', 'Read more →', footer links
  icon-frame-button:
    role: Utility buttons like language selector 'EN', compact controls
  product-update-badge:
    role: Labels marking new features, product announcements
  info-badge:
    role: Announcement or info-type labels
  category-tab-filter-pill:
    role: Section filters like 'Automotive', 'Weather', 'Fleets'
  news-product-carousel-card:
    role: Homepage feature cards for recent updates and partnerships
  logo-grid-social-proof-rail:
    role: Partner/customer logo display — GM, CNN, BMW, Strava etc.
  top-navigation-bar:
    role: Sticky site nav with logo, dropdown menus, CTA
  video-map-embed-block:
    role: Full-width media with inset shadow fade at bottom edge
---

## Overview

**North Star:** Satellite console at midnight — a dark control room where glowing map tiles are the only light source, surrounded by near-black instrument panels.

Mapbox operates in near-total darkness — a #0e1012 void that makes embedded map tiles glow like illuminated instruments. The entire neutral scale runs from #0e1012 through #333943 to #a0aaba, creating depth through layered darkness rather than shadows. A single vivid blue (#007afc) punctuates the black field exclusively on CTAs and active states, like a GPS pin dropped into night sky. Pill-form buttons (100px radius) coexist with sharp 4px badges, creating deliberate tension between cartographic curves and data-table precision. Cera Pro's geometric weight-700 at 68px and tight -0.02em tracking gives headlines a technical density — coordinates on a map, not marketing copy.

### Do's

- Use #007afc exclusively for primary interactive elements (CTA buttons, active tabs, text links needing high emphasis) — never as a decorative fill or background wash.
- Apply 100px borderRadius to all pill buttons and filter tabs; reserve 4–6px radius for badge and utility elements only.
- Set hero and display headlines in Cera Pro weight 700 with -0.02em letter-spacing (-1.36px at 68px, -0.88px at 44px) — no weight below 700 at display sizes.
- Use all-caps Cera Pro at 10–12px with +0.70em to +1.00em letter-spacing for section labels, badge text, and category markers.
- Layer surfaces using the four-step dark scale (#0e1012 → #15171b → #1c1f24 → #23262d); never use drop shadows to imply depth between content layers.
- Apply inset shadow rgb(14,16,18) 0px -175px 175px -75px on bottom edge of map tiles, video embeds, and image blocks to dissolve them into the #0e1012 page background.
- Render partner/brand logos at #a0aaba on #0e1012 — no color, no individual treatment — keeping the partner rail visually subordinate to the product.

### Don'ts

- Never use a radius between 6px and 12px on buttons — the system uses either pill (100px), card (24px), chip (12px), or sharp utility (4–6px). Intermediate values break the rhythm.
- Never introduce a second chromatic accent color — orange, purple, teal, or any additional hue violates the single-signal-in-darkness principle of Signal Blue (#007afc).
- Never set body copy or subheadings in white (#ffffff) — use #a0aaba for body and #8b96aa for captions; full white is reserved for headings and interactive labels.
- Never place cards or sections on white or light backgrounds — all content lives within the #0e1012–#15171b dark range; light surfaces appear only inside embedded map tiles.
- Never use Cera Pro weight 400 for headings larger than 24px — weight 500 minimum at subheading scale, 700 at heading-lg and display.
- Never apply colored drop shadows — the only allowed shadows are monochromatic #0e1012 inset vignettes on media blocks.
- Never add decorative borders or dividers between sections — vertical rhythm is created by spacing and surface color change, not ruled lines.

### Layout

Max-width 1344px centered on an always-dark #0e1012 full-bleed background. Hero is full-viewport centered text stack (headline + subtext + dual CTA buttons) with a large rounded map-tile video embed below it, fading at its bottom edge. Second section is a no-frame logo grid (two rows, ~6 logos each) labeled with a tight all-caps eyebrow. Below that, alternating asymmetric 2-column sections: text left + map visual right, then reversed. Customer stories use a 2-column layout: large image card left (~55%), text + logo + body right (~45%). A horizontal filter tab row (pill tabs) controls the visible story. Navigation is a fixed top bar, full-bleed at the background color, with center-aligned dropdown links and right-side auth buttons. Vertical section gaps are approximately 96px. The layout avoids visual dividers entirely — section transitions happen through background color and content spacing only.

### Imagery

The dominant visual is product screenshots of Mapbox map tiles — dark-mode 3D city renders, automotive circular navigation interfaces, satellite-toned street maps. These are always contained within rounded-24px frames and treated with an inset bottom shadow that dissolves the lower edge into the page background, making map content feel embedded in the surface rather than placed on it. Photography appears in customer story cards: tight editorial product shots (BMW instrument cluster, in-vehicle navigation screens) cropped dark and moody, no lifestyle context. Icons are minimal outlined mono-stroke in #a0aaba to #566171. Logo grid partners are desaturated to near-gray. The overall imagery density is medium — one or two large map/product visuals per section, with text-dominant supporting sections. No abstract illustration or decorative graphics; every image is either a real map tile or a real customer device.

### Elevation

Elevation is achieved through background color stepping (#0e1012 → #15171b → #1c1f24) rather than drop shadows. The only shadows present are inward-fading vignettes on media embeds — black bleeds in from edges of map tiles and video frames, dissolving them into the page background as if the content is emerging from darkness rather than floating above it.

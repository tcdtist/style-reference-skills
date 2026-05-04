---
version: alpha
name: Julia Krantz
description: Julia Krantz's portfolio operates like a darkroom contact sheet — dense grid of image tiles on near-black, with stark white typography hovering over photography. The canvas is #000000, surfaces are pure darkness, and the only warmth comes from the photographic content inside each tile. Typographic restraint is extreme: ClashDisplay at weight 300 for large display initials (the abbreviated project codes 'Se', 'Fd', 'Ga') creates a barely-there identity mark, while DM Sans at weight 300 handles all body and navigation at 10-14px with wide tracking. The grid is the interface — a mosaic of image tiles with 1px solid rgba(248,248,248,0.12) borders separating them, no rounded corners anywhere, no shadows, no gradients. Color is entirely absent from the UI layer; all chromatic interest is delegated to the photography.
colors:
  void: "#000000"
  salt: "#f8f8f8"
  ash: "#707070"
  ghost-line: "#f8f8f8"
  veil: "#f8f8f8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.3
    letterSpacing: 0.6px
  heading:
    fontFamily: "system-ui"
    fontSize: 29px
    lineHeight: 1
    letterSpacing: -1.16px
  display:
    fontFamily: "system-ui"
    fontSize: 44px
    lineHeight: 1
    letterSpacing: -1.76px
spacing:
  cardRadius: 0px
  buttonRadius: 0px
  elementGap: 6px
  sectionGap: 30px
components:
  project-grid-tiles:
    role: 
  about-bio-block:
    role: 
  header-identity-email-cta:
    role: 
  project-grid-tile:
    role: Primary portfolio navigation — each tile is a cropped photograph with abbreviated project code overlaid
  name-logotype:
    role: Primary identity mark in the top-left header
  navigation-link:
    role: Top-right global nav: Magic Fabric ↗, Bio, Contact
  about-bio-block:
    role: Multi-column text section with label headers
  press-list-item:
    role: Numbered external press links within the bio section
  email-cta-link:
    role: Contact email in the top-right of the header, the site's only direct CTA
  section-divider:
    role: Horizontal rule separating header from bio section and bio section from grid
  category-label:
    role: Small uppercase tag beneath project initials on tiles
  archive-year-badge:
    role: Year label on archive tiles (e.g. '· 2009', '· 2011')
---

## Overview

**North Star:** Darkroom contact sheet — a grid of photographic tiles on pure black, identity spelled in barely-visible weight-300 letterforms.

Julia Krantz's portfolio operates like a darkroom contact sheet — dense grid of image tiles on near-black, with stark white typography hovering over photography. The canvas is #000000, surfaces are pure darkness, and the only warmth comes from the photographic content inside each tile. Typographic restraint is extreme: ClashDisplay at weight 300 for large display initials (the abbreviated project codes 'Se', 'Fd', 'Ga') creates a barely-there identity mark, while DM Sans at weight 300 handles all body and navigation at 10-14px with wide tracking. The grid is the interface — a mosaic of image tiles with 1px solid rgba(248,248,248,0.12) borders separating them, no rounded corners anywhere, no shadows, no gradients. Color is entirely absent from the UI layer; all chromatic interest is delegated to the photography.

### Do's

- Use #000000 for all backgrounds — the CSS token --bg: #000 is absolute; never substitute dark gray or near-black
- Set all ClashDisplay display headings (44px tile codes) at weight 300 with letter-spacing -0.04em — the ultra-light setting against photography is the signature move
- Apply 1px solid rgba(248,248,248,0.12) for every structural border: tile separators, section dividers, column rules
- Keep all interactive hover states to color/filter transitions only — color: rgba(248,248,248,0.45) for links, filter: brightness(0.82) for image tiles, 0.2s ease
- Use 0px border-radius on every element — tiles, any containers, any interactive elements. The sharp-corner rule is absolute
- Maintain DM Sans weight 300 for all body, nav, and label text — no bold text anywhere in the UI layer
- Express secondary hierarchy through #707070 (section labels, numbers, category tags) — never through size increases or weight changes

### Don'ts

- Never add any color to the UI chrome — buttons, links, labels, borders must remain in the #f8f8f8 / #707070 / rgba opacity system only
- Never round corners — no border-radius on tiles, containers, or any interactive element; 0px is non-negotiable
- Never use font weight above 500 — ClashDisplay 500 is the ceiling and used only for the name logotype; DM Sans stays at 300
- Never add box-shadows or elevation — the design has zero shadow tokens; depth comes from contrast with the black canvas only
- Never add hover backgrounds or button fills — interactive states change text opacity or image brightness only, never add a background color
- Never introduce gradients, overlays, or tinted backgrounds — the CSS tokens confirm no gradient system exists; #000 is the only background
- Never separate the category label from its tile project code with more than 4px margin — the tight stacking (4px marginBottom between elements) is the spatial rhythm

### Layout

Full-bleed, no max-width container. Header bar spans full width: name logotype pinned left, email and nav pinned right, both at 16px horizontal padding. Bio section below header uses a multi-column horizontal layout — approximately 4-5 text columns (About, Press, Speaking, Podcasts, Links) filling full width with 20-32px column gaps. Grid section below bio: 10-column mosaic of variable-width tiles in rows, each tile filled with photography. Tiles vary in width — some span one column, some two — creating a journalistic contact-sheet rhythm. No gutters visible between tiles except the 1px Ghost Line border. Navigation is a minimal top-right inline set of 3 links. No sidebar, no sticky header. The entire page scrolls vertically with no section anchoring or visual dividers beyond the Ghost Line horizontal rule.

### Imagery

Photography-dominant — every project grid tile is a full-bleed photographic crop: fashion portraiture, macro textile/material studies, AI-generated imagery, event photography. Photographs are raw-edged, sharp-cornered, zero border-radius. Images are not contained or padded — they fill their tile completely, edge to edge. No lifestyle staging context visible; images are treated as abstract color fields at tile scale, only readable as subjects when enlarged. Color in the UI exists exclusively within these photographs — from vivid AI-generated chromatics to desaturated fashion editorial. The photographic density IS the design: at the grid scale, the tiles form a chromatic mosaic against black. Icons: minimal use of directional glyphs ('↗', '→') inline with text, no standalone icon components. No illustrations, no 3D renders in the UI chrome.

### Elevation

Zero shadows across the entire system. Depth is created purely by the contrast between the black canvas and photographic tile content. No box-shadow values appear anywhere; the 1px rgba(248,248,248,0.12) border is the only surface separator. Hover states use filter: brightness(0.82) — darkening the image rather than lifting the element.

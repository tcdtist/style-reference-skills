---
version: alpha
name: AngelList
description: AngelList employs a sophisticated, dark-mode financial intelligence aesthetic. Deep, almost-black surfaces create a sense of gravitas, punctuated by crisp, light typography that stands out with authoritative clarity. Subtle green and muted violet accents are sparingly used for functional elements, guiding the eye without overwhelming the serious tone. Components feature soft, rounded edges and light borders, maintaining a sense of approachability within the otherwise robust system.
colors:
  midnight-ink: "#001d21"
  canvas-white: "#ffffff"
  ash-cloud: "#e1e3e3"
  smoke-gray: "#68706f"
  pale-stone: "#f1f3f2"
  charcoal-tint: "#002b31"
  silver-thread: "#ccd5d6"
  mint-glaze: "#e0fee6"
  verdant-mist: "#cdeed3"
  lavender-haze: "#cdcbff"
  royal-violet: "#bdbbff"
  deep-plum: "#3a25f5"
  harvest-gold: "#6e5c3b"
  patina: "#5d5337"
  bronze-slate: "#544a2e"
  cosmic-gradient: "#6258ff"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.4
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.09px
  heading:
    fontFamily: "system-ui"
    fontSize: 38px
    lineHeight: 1.15
    letterSpacing: -0.57px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 90px
    lineHeight: 1.1
    letterSpacing: -1.35px
  display:
    fontFamily: "system-ui"
    fontSize: 216px
    lineHeight: 0.9
    letterSpacing: -8.64px
spacing:
  cardRadius: 12px
  buttonRadius: 9999px
  elementGap: 4px
  sectionGap: 48px
components:
  navigation-link-active-hover:
    role: Top navigation item, highlighted state
  primary-ghost-button:
    role: Call to action, less prominent
  outlined-button:
    role: Secondary action, distinctive outline
  primary-filled-button:
    role: Primary call to action (e.g. 'Contact sales')
  card-dark-surface:
    role: Content container with elevated dark surface
  card-transparent:
    role: Content container for featured sections
  card-light-accent:
    role: Small informational card, e.g. cookie settings
---

## Overview

**North Star:** Midnight Ledger, luminous script.

AngelList employs a sophisticated, dark-mode financial intelligence aesthetic. Deep, almost-black surfaces create a sense of gravitas, punctuated by crisp, light typography that stands out with authoritative clarity. Subtle green and muted violet accents are sparingly used for functional elements, guiding the eye without overwhelming the serious tone. Components feature soft, rounded edges and light borders, maintaining a sense of approachability within the otherwise robust system.

### Do's

- Use Midnight Ink (#001d21) as the default page background for most sections, establishing a dark, serious foundation.
- Employ angellistDisplay font at weight 400 with a negative letter-spacing between -0.015em and -0.04em for all large headings (90px and above) to maintain a compact, impactful look.
- Prioritize Canvas White (#ffffff) text on all Midnight Ink (#001d21) and Charcoal Tint (#002b31) backgrounds for maximum legibility.
- Apply a 9999px border-radius to all primary action buttons and navigation pills to create a distinct, approachable, 'soft' interactive element.
- Use Silver Thread (#ccd5d6) for hairline borders and subtle dividers, ensuring visual separation without heavy lines.
- Introduce Mint Glaze (#e0fee6) or Verdant Mist (#cdeed3) sparingly as accent colors for active states, small highlights, or positive indicators.

### Don'ts

- Avoid using multiple chromatic colors in close proximity; maintain a largely monochromatic palette with selective accents.
- Do not use default system fonts; always utilize angellist or angellistDisplay variants for brand consistency.
- Do not introduce heavy shadows; the system favors subtle elevation through background color shifts and light borders.
- Avoid tight vertical spacing in content sections; ensure generous vertical buffer with a section gap of at least 48px.
- Do not place large blocks of text in accent colors; reserve them for highlights, interactive elements, or very short headings.

### Layout

The page primarily uses a full-bleed dark background for impact, with content sections constrained to a central max-width (likely 1200px based on component widths) that is not fixed, but implied. The hero section is full-bleed, featuring a large, centered headline on a dark canvas. Content flows in distinct blocks, often alternating background colors or using large, dark cards (#002b31) to break up sections. There's a common pattern of 4-column card grids for features. The rhythm is comfortable, with generous vertical spacing between sections. Navigation is handled by a fixed top bar on a dark background, with main links and a primary button.

### Imagery

The site uses a mix of tightly cropped, process-oriented photography showing people interacting with technology or collaborating, and abstract product screenshots. Photography includes candid, mid-tone, slightly desaturated images of people in professional settings, often with hands-on focus, serving to ground the abstract financial concepts in human activity. Product screenshots are clean, showcasing UI against dark backgrounds. Visuals are contained within cards, often with soft transitions or subtle overlays, without raw edges or heavy masking. Icons are generally outlined with a medium stroke weight, in monochromatic or brand accent colors, providing functional clarity.

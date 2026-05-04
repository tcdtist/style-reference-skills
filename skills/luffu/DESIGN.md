---
version: alpha
name: Luffu
description: Luffu feels like late afternoon sun through a kitchen window — warm, unhurried, intimate. The cream-tan background (#f5f5ee) and near-black text (#2f3136) create a paper-and-ink warmth far from the cold blues of health tech. Two custom ABC Arizona typefaces do the heavy lifting: Flare at massive display sizes with -0.05em letter-spacing renders the brand name as a piece of editorial typography, while Sans handles navigation and body with similar optical tightening. The hero is full-bleed lifestyle photography — a real family, natural light, golden retriever — with oversized logotype overlaid at near-opacity, bleeding into the image. Color restriction is extreme: no accent color anywhere, just dark ink, warm cream, and white, with a single dark-teal (#192830) reserved for the primary CTA button.
colors:
  deep-ink: "#192830"
  parchment: "#f5f5ee"
  linen: "#e4e7da"
  pressed-cotton: "#d7d7cb"
  graphite: "#2f3136"
  slate: "#535557"
  dusk: "#424e52"
  white: "#ffffff"
  ink: "#000000"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1
    letterSpacing: -0.35px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.2
    letterSpacing: -0.32px
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.2
    letterSpacing: -0.32px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1
    letterSpacing: -1.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1
    letterSpacing: -2.02px
  display:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1
    letterSpacing: -3.2px
spacing:
  cardRadius: 6px
  buttonRadius: 4-6px
  elementGap: 16-24px
components:
  button-group-primary-cta-ghost-inline-waitlist:
    role: 
  section-heading-block-with-caregiver-questions:
    role: 
  feature-cards-health-logging-3-up-grid:
    role: 
  primary-cta-button-dark-fill:
    role: Main conversion action — waitlist signup
  ghost-navigation-button-outlined:
    role: Secondary actions in the navigation bar
  inline-waitlist-link-button:
    role: In-text or body-section CTA
  hero-full-bleed-section:
    role: Above-the-fold full-viewport visual anchor
  feature-card-app-screen-preview:
    role: Product feature illustration in 3-up grid
  floating-family-member-avatar:
    role: Caregiver network visualization in mid-page section
  section-heading-block-centered:
    role: Mid-page section introductions
  navigation-bar:
    role: Global persistent header
  footer-strip:
    role: Site footer with legal and social links
---

## Overview

**North Star:** Family almanac printed on cream linen — editorial restraint meets intimate warmth, executed in two weights of a single serif-adjacent type system on a near-parchment ground.

Luffu feels like late afternoon sun through a kitchen window — warm, unhurried, intimate. The cream-tan background (#f5f5ee) and near-black text (#2f3136) create a paper-and-ink warmth far from the cold blues of health tech. Two custom ABC Arizona typefaces do the heavy lifting: Flare at massive display sizes with -0.05em letter-spacing renders the brand name as a piece of editorial typography, while Sans handles navigation and body with similar optical tightening. The hero is full-bleed lifestyle photography — a real family, natural light, golden retriever — with oversized logotype overlaid at near-opacity, bleeding into the image. Color restriction is extreme: no accent color anywhere, just dark ink, warm cream, and white, with a single dark-teal (#192830) reserved for the primary CTA button.

### Do's

- Use ABC Arizona Flare weight 400 at -0.05em letter-spacing for all display headings above 40px — this tight tracking is non-negotiable for the editorial look.
- Keep the background #f5f5ee (Parchment) as the default section fill; only use #e4e7da (Linen) or #d7d7cb (Pressed Cotton) for subtle section alternation.
- Use circular (9999px radius) crops for all person/avatar photography — it humanizes data and links visual language to the family-member representation pattern.
- Restrict the palette to Parchment + Graphite + White for all new sections; #192830 appears ONLY on the primary button and footer — not as a text color or decorative element.
- Apply letterSpacing -0.016em to -0.05em across all type sizes; zero-tracking Arizona type looks wrong at every size.
- Use full-bleed lifestyle photography for hero sections with text overlaid left-aligned in white, not in a card or box — the image IS the content.
- Maintain single-weight (400) discipline across both typefaces — all hierarchy comes from size and opacity, never weight changes.

### Don'ts

- Never introduce a chromatic accent color (no brand blue, green, or orange) — the entire system is intentionally achromatic except for the near-teal #192830.
- Never use bold or semibold weights of Arizona Sans or Arizona Flare; the single-weight system breaks immediately when bold appears.
- Don't use drop shadows or card elevation shadows on content sections — the design is entirely flat with background color differentiation only.
- Don't increase button border-radius above 6px; this is a rectilinear system — pill buttons would clash with the editorial register.
- Never place heading text on a white background without the warm Parchment tint (#f5f5ee) — pure white reads too clinical against this family-warmth palette.
- Don't use icon-only buttons or icon-first navigation; all interactive elements are text-labeled in this system.
- Don't stack multiple sections with the same background color (#f5f5ee) without visual break — alternate with Linen (#e4e7da) or photography.

### Layout

Max-width approximately 1200px centered on wide screens, with the hero section breaking fully to 100vw. Hero is full-viewport-height lifestyle photography with floating navigation overlay and left-aligned text block at upper-left. Second section (caregiver) is Parchment background with scattered circular avatars around a centered heading — the layout is deliberately open, low-density, white-space-dominant. Third section (feature cards) is a 3-column grid on Parchment-to-Linen gradient background with equal-width cards. Section gap is generous at 120-218px vertical margin between content blocks. No alternating dark/light band pattern — the site remains warm cream throughout with photography providing contrast. Navigation is a single floating top bar, no sticky behavior implied, no mega-menu.

### Imagery

Full-bleed lifestyle photography of real multi-generational families (grandparents, parents, children, pets) in natural outdoor settings — golden hour, residential gardens, candid movement. Photography is warm-keyed, not treated or duotone, with rich natural color that contrasts with the restrained type system. Circular portrait crops are used for individual family member representations in feature sections. Product feature cards use contained photography (food close-ups, health tracking interfaces) with subdued color-tinted card backgrounds. The brand wordmark 'Luffu' overlaid at massive scale on the hero image is the primary graphic design move — type as imagery. Icons are minimal outlined glyphs at 16-20px, monochrome. Image-to-text ratio is very high in the hero, dropping to roughly 50/50 in feature sections, then text-dominant in the footer.

### Elevation

No box-shadows appear anywhere in the UI. Depth and hierarchy are achieved entirely through background color layering (Parchment → Linen → Pressed Cotton) and typographic scale. The absence of elevation shadows is consistent with the tactile, print-inspired aesthetic — this is a page, not a dashboard.

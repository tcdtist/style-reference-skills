---
version: alpha
name: Dialog
description: Dialog feels like a high-end retail floor plan rendered in digital form — neutral, airy, and unhurried, with one warm accent that acts like a price tag sticker on white linen. The #f7f7f7 near-white background and pure white cards create a surface hierarchy so subtle it reads as continuous space rather than layered depth. PP Radio Grotesk Light at 50-70px is the defining move: a geometric grotesque rendered at its lightest weight makes large headlines feel handwritten on paper rather than stamped — zero aggression, maximum presence. The single orange #f69251 appears exclusively on CTAs, pulling attention the way a sale tag pops in a neutral showroom. Pill-shaped buttons (28px radius) float against square-cornered containers, the only soft shape in an otherwise rectilinear system.
colors:
  tangerine-tag: "#f69251"
  midnight-ink: "#181825"
  graphite: "#484758"
  deep-slate: "#242433"
  carbon: "#000000"
  stone: "#636363"
  pebble: "#949494"
  ash: "#8b8b8b"
  fog: "#f7f7f7"
  snow: "#ffffff"
  peach-whisper: "#fad7c1"
  dusty-rose: "#c97b84"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
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
    lineHeight: 1.3
    letterSpacing: -0.32px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 50px
    lineHeight: 1.2
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 70px
    lineHeight: 1.15
    letterSpacing: -0.7px
spacing:
  cardRadius: 24px
  buttonRadius: 28px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  email-input-cta-inline-form-with-star-ratings:
    role: 
  testimonial-card:
    role: 
  product-screenshot-browser-frame:
    role: 
  primary-cta-button-orange-pill:
    role: Hero and nav primary action — 'Book a demo'
  ghost-cta-button-white-pill:
    role: Secondary actions on dark or image-backed surfaces
  email-input-cta-inline-form:
    role: Hero email capture row
  testimonial-card:
    role: Social proof in scrolling testimonials section
  product-screenshot-browser-frame:
    role: Product tour / hero UI illustration
  navigation-bar:
    role: Global top navigation
  feature-badge-pill-label:
    role: Category tags, section labels like 'AI product recommender'
  section-heading-block:
    role: Main headline + supporting subtext for each content section
  star-rating-row:
    role: Social proof trust indicators below hero CTA
---

## Overview

**North Star:** Neutral showroom with one warm price tag. Every surface is a different tone of off-white; the orange CTA is the only color in the room.

Dialog feels like a high-end retail floor plan rendered in digital form — neutral, airy, and unhurried, with one warm accent that acts like a price tag sticker on white linen. The #f7f7f7 near-white background and pure white cards create a surface hierarchy so subtle it reads as continuous space rather than layered depth. PP Radio Grotesk Light at 50-70px is the defining move: a geometric grotesque rendered at its lightest weight makes large headlines feel handwritten on paper rather than stamped — zero aggression, maximum presence. The single orange #f69251 appears exclusively on CTAs, pulling attention the way a sale tag pops in a neutral showroom. Pill-shaped buttons (28px radius) float against square-cornered containers, the only soft shape in an otherwise rectilinear system.

### Do's

- Use PP Radio Grotesk Light (weight 400) exclusively for headings at 32px+; never substitute Inter for headlines at large sizes
- Apply #f69251 only to primary CTA buttons — never to text, icons, decorative shapes, or backgrounds
- Set all buttons to border-radius 28px (pill shape) regardless of button width; this is the only rounded UI element in the system
- Maintain #f7f7f7 as the page background and #ffffff for all card surfaces — the 2-tone near-white surface system defines the visual plane
- Use Inter at -0.01em to -0.02em letter-spacing for body and nav text — never at default or positive tracking
- Set card shadows to rgba(24,24,37,0.12) 0px 2px 3px -2px — single low-offset shadow, never stacked high-elevation shadows
- Give testimonial and feature cards border-radius 24px with 24px internal padding — do not use smaller radii for large containers

### Don'ts

- Do not use #f69251 for more than one element category (CTAs only) — introducing orange to icons, text, or decoration breaks the single-accent discipline
- Do not apply border-radius less than 24px to card containers — 8px or 12px radii belong to inner UI chips, not layout-level cards
- Do not use bold or heavy weights (600+) with PP Radio Grotesk — the light grotesque loses its identity at high weight
- Do not introduce colored section backgrounds (blue, green, purple bands) — section variation comes from #f7f7f7 vs #ffffff swaps only
- Do not use drop shadows larger than 8px blur or opacity above 0.12 — the elevation system is deliberately flush with the page plane
- Do not crop or bleed photography to page edges on interior pages — photography lives inside 24px-radius card containers only
- Do not set input fields to a rounded border-radius — inputs use 0px or minimal radius to contrast with the pill button system

### Layout

Max-width ~1200px centered on a #f7f7f7 full-bleed background. Hero is a center-stack layout: headline in PP Radio Grotesk at 70px, subtext, then inline email+CTA form, then trust-badge row — all vertically centered with generous whitespace (~120px top padding). The browser mockup floats below, cropped at the bottom viewport edge to hint at scrollable content. Below: alternating content sections using left-aligned headline + body text paired with right-side UI mockups (2-column). Testimonial section breaks the grid into a horizontal scroll carousel with 3-column partial cards visible. Navigation is a floating white pill (border-radius 32px) that appears contained within a header band — minimal, no mega-menu, no sidebar.

### Imagery

Two modes of imagery coexist. Product screenshots are rendered as browser-chrome wireframe mockups on white card surfaces — functional and diagrammatic, showing the AI chat interface UI rather than lifestyle. Customer testimonials in the second section use editorial photography: close-cropped product still life (perfume bottle, textured surface) and brand identity shots (Delsey luggage, car dashboard detail). These are contained within 24px-radius cards in a horizontal carousel, with no full-bleed photography on the main page. Photography is warm-toned and moody — shot in ambient/low light, desaturated with brown or bronze casts. The contrast between the clinical wireframe mockups and the warm editorial photos is deliberate: product as system, proof as atmosphere.

### Elevation

Shadows are used at near-invisible intensity — rgba(24,24,37,0.12) at 2px blur and rgba(0,0,0,0.04) layered micro-shadows on buttons. The effect is less about lifting surfaces and more about defining their edges against the #f7f7f7 background. Cards do not compete for vertical attention; they sit in the plane. The rgba(247,247,247,0.5) 0px -40px 40px fade on the browser mockup is the most dramatic shadow on the page, and it fades INTO the background color — erasing depth rather than creating it.

---
version: alpha
name: Mural
description: Mural hits like a blackboard in a bright studio — the hero opens pitch-black with oversized serif-adjacent display type bleeding edge to edge, then the page snaps into clinical white with the same confidence. The dual-font system is the signature move: STK Bureau (weight 300 only) handles all display and headline work with tight negative tracking (-0.04 to -0.05em), while ABC Social runs everything from captions to body in a humanist groove. Electric jade (#00c27a) is the single chromatic anchor — appearing on CTAs and key links against both black and white backgrounds, creating identical urgency in both contexts. Cards live in a borderless, shadow-free world where containment comes from background-color switches (#eeeeee, #ffffff) rather than depth. The Mural logomark's rainbow-spectrum identity is carefully quarantined from the page palette — the product itself runs monochromatic with jade as its only relief valve.
colors:
  jade-cta: "#00c27a"
  mint-surface: "#b4f5c8"
  forest: "#00843f"
  badge-leaf: "#d5f8e0"
  badge-text: "#007b3b"
  void: "#000000"
  paper: "#ffffff"
  fog: "#f3f3f3"
  ash: "#eeeeee"
  cool-grey: "#dce1e5"
  slate: "#8c8c8c"
  stone: "#808080"
  graphite: "#4f5457"
  ink: "#333333"
  charcoal: "#626262"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 11px
    lineHeight: 1.5
    letterSpacing: 1.925px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.43
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 26px
    lineHeight: 1.1
    letterSpacing: -0.52px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.1
    letterSpacing: -0.8px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 54px
    lineHeight: 1.1
    letterSpacing: -2.16px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -4px
spacing:
  cardRadius: 8-24px
  buttonRadius: 8px
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  hero-email-capture-cta:
    role: 
  blog-resource-cards:
    role: 
  trusted-brands-logo-bar:
    role: 
  primary-cta-button:
    role: Hero email capture submit, section CTAs
  outlined-black-button:
    role: Secondary CTAs on white sections
  ghost-white-button:
    role: CTAs on dark/black hero sections
  large-filled-grey-button:
    role: Feature navigation tabs, section-level action buttons
  email-input-field:
    role: Hero lead capture
  blog-badge:
    role: Content categorization on card thumbnails
  content-card-large-rounded:
    role: Blog/resource listing cards
  content-card-ash-fill:
    role: Feature comparison or info tiles
  product-ui-card:
    role: In-page product screenshot/demo containers
  ai-chat-widget:
    role: Muriel AI consultant persistent overlay
  section-eyebrow-label:
    role: Pre-heading category labels above section titles
  logo-bar-trusted-brands:
    role: Social proof strip
---

## Overview

**North Star:** Blackboard flipping to whiteboard — same hand, same authority, opposite ground.

Mural hits like a blackboard in a bright studio — the hero opens pitch-black with oversized serif-adjacent display type bleeding edge to edge, then the page snaps into clinical white with the same confidence. The dual-font system is the signature move: STK Bureau (weight 300 only) handles all display and headline work with tight negative tracking (-0.04 to -0.05em), while ABC Social runs everything from captions to body in a humanist groove. Electric jade (#00c27a) is the single chromatic anchor — appearing on CTAs and key links against both black and white backgrounds, creating identical urgency in both contexts. Cards live in a borderless, shadow-free world where containment comes from background-color switches (#eeeeee, #ffffff) rather than depth. The Mural logomark's rainbow-spectrum identity is carefully quarantined from the page palette — the product itself runs monochromatic with jade as its only relief valve.

### Do's

- Use STK Bureau weight 300 exclusively for all display and hero headlines at -0.04em to -0.05em tracking. Never use it at body or UI sizes.
- Apply #00c27a only to primary CTA buttons (with 1px #000000 border) and active link states. Do not use it for decorative color blocks or illustrations.
- Use 26px border-radius for all pill badges and 8px for all buttons and inputs. Keep 24px for large content cards only.
- Open letter-spacing to +0.175em only for uppercase eyebrow labels in ABC Social at 11-12px. All other sizes track at -0.02em or default.
- Establish section separation through background-color switching (#000000 → #ffffff → #eeeeee) rather than dividers or shadows between sections.
- Use the blue-tinted shadow (rgba(11,41,70,0.32) 0px 0px 1px 0px, rgba(42,82,121,0.08) 0px 24px 20px 0px) exclusively for overlaying floating elements like the chat widget.
- Keep photography on cards full-bleed to the card edge with no internal padding — let the 24px card radius clip the image corners.

### Don'ts

- Do not use STK Bureau for body copy, UI labels, or anything below 32px — the tight tracking at small sizes becomes illegible.
- Do not add colored backgrounds using the extended CSS token palette (--lavender, --flamingo, --mural-blue, etc.) on any marketing page — those are reserved for in-canvas product contexts only.
- Do not use shadows for card grouping or section organization — use background-color differences instead. Shadows are only for floating overlays.
- Do not apply #00c27a to text on white backgrounds as a body link color — it only appears as a button background or hover state on black backgrounds.
- Do not use border-radius values other than 8px, 16px, 24px, or 26px. In particular, avoid pill shapes (9999px) on buttons — Mural uses 8px squared buttons, not pill buttons.
- Do not mix STK Bureau with any weight other than 300 — the light-weight display type is the deliberate choice; heavier weights destroy the contrast with the dense tracking.
- Do not use the #dce1e5 Cool Grey as text — it is a border and divider color only.

### Layout

Max-width approximately 1280px, centered. Hero is full-bleed black spanning 100vh with left-aligned STK Bureau display headline, left-aligned email capture row, and product screenshot cards overlapping the hero bottom edge into the next white section — creating a cinematic cut between dark and light. Section rhythm alternates: black hero → white feature section → white with ash card grid → white trust bar → back to feature sections. No alternating dark/light bands beyond the opening hero. Content arrangement is primarily left-text + right-visual (2-column) for feature sections, and 3-column card grids for blog/resource content. Navigation is a fixed top bar: logo left, centered horizontal nav links, login + two CTA buttons right. No mega-menu visible — nav links expand to dropdowns. The left-edge vertical tool palette (appearing in product screenshots) is a product UI element shown for demo context, not page navigation.

### Imagery

Three distinct image modes coexist: (1) Product UI screenshots presented as floating white-background cards with 24px radius, cropped tightly to show the canvas tool in use — no lifestyle context around the product itself. (2) Photography on blog cards: candid workplace scenes, high-key natural light, people in conversation — desaturated to near-grayscale with warm midtones, full-bleed to card edge with no internal padding. (3) In-canvas illustration within product screenshots: hand-drawn circle annotations in saturated reds and blues, avatar photos in circular crops with colored ring borders, sticky-note callout boxes — these are product content, not brand illustration. Icons in the left-rail tool palette are outlined, single-color (white on black), approximately 18-20px with ~1.5px stroke weight. The brand palette (jade green) appears only in UI chrome and CTAs, never in photography or illustration.

### Elevation

The system is almost entirely flat — card containers use background-color switching (#eeeeee, #f3f3f3, #ffffff) rather than shadows to establish hierarchy. The only shadows appear on the AI chat overlay (blue-tinted, substantial: 0px 24px 20px rgba(42,82,121,0.08)) and blog cards (shallow: 0px 4px 4px rgba(0,0,0,0.08)). Elevation is reserved for things that literally float above the page, not for organizational grouping.

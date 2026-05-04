---
version: alpha
name: Retool
description: Retool operates on a near-black canvas — #151515 as the dominant ground — with off-white text (#e9ebdf) that reads more like parchment than pure white, giving the dark surface a warm, organic quality rather than a cold tech-void. Typography is the primary design tool: the custom 'saansFont' runs from weight 300 at 72px down to 380 at body sizes, with aggressive negative tracking at large scales creating compressed, authoritative headlines that feel proprietary. Surface depth is achieved through a three-step stack (#0e0e0 → #151515 → #242424) with no shadows — cards are literally darker or lighter slabs of the same material, not elevated objects. The only chromatic punctuation is muted teal (#185849, #0e352c) used as subtle background washes, while the hero gradient bleeds warm earthy tones (amber-rust into near-black) from the bottom-left, creating atmospheric depth without visual noise. Buttons are square-cornered or pill-cornered depending on context — no in-between — reinforcing a binary, decisive visual grammar.
colors:
  obsidian-canvas: "#151515"
  void-black: "#0e0e0e"
  ember-surface: "#242424"
  charcoal-rim: "#3f403d"
  copper-wire: "#8b867f"
  ash-text: "#94958e"
  fog-text: "#cbccc4"
  limestone: "#b6b8af"
  parchment: "#e9ebdf"
  forest-deep: "#185849"
  midnight-moss: "#0e352c"
  spectrum-shimmer: "#e87650"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.2
    letterSpacing: 0.12px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0.14px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.2
    letterSpacing: -0.18px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.2
    letterSpacing: -0.24px
  heading:
    fontFamily: "system-ui"
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -0.36px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.05
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1
    letterSpacing: -1.58px
spacing:
  elementGap: 8-16px
  sectionGap: 80-120px
components:
  announcement-bar-cta-button-group:
    role: 
  stat-social-proof-cards:
    role: 
  feature-section-card-appgen:
    role: 
  pill-button-filled:
    role: Primary call-to-action (e.g. 'Book a demo', 'Get early access')
  ghost-button-square:
    role: Secondary actions, nav-level text links with visible border
  dark-surface-button-square:
    role: Section-level actions embedded in dark content cards
  muted-ghost-button:
    role: Tertiary actions, low-emphasis interactive text
  raised-card:
    role: Feature cards, integration tiles, content panels
  deep-card:
    role: Full-bleed content sections, testimonial panels
  eyebrow-label:
    role: Section category labels above headlines (e.g. 'AppGen for the enterprise')
  beta-badge:
    role: Status tags, 'Public Beta' announcement strip
  announcement-bar:
    role: Global top-of-page announcement strip
  navigation-bar:
    role: Sticky top navigation
  logo-grid-row:
    role: Social proof customer logo strip
  integration-icon-bubble:
    role: Integration/connector showcase icons in hero grid
---

## Overview

**North Star:** Warm obsidian workshop — a precision tool surface lit by ember glow, where everything is built.

Retool operates on a near-black canvas — #151515 as the dominant ground — with off-white text (#e9ebdf) that reads more like parchment than pure white, giving the dark surface a warm, organic quality rather than a cold tech-void. Typography is the primary design tool: the custom 'saansFont' runs from weight 300 at 72px down to 380 at body sizes, with aggressive negative tracking at large scales creating compressed, authoritative headlines that feel proprietary. Surface depth is achieved through a three-step stack (#0e0e0 → #151515 → #242424) with no shadows — cards are literally darker or lighter slabs of the same material, not elevated objects. The only chromatic punctuation is muted teal (#185849, #0e352c) used as subtle background washes, while the hero gradient bleeds warm earthy tones (amber-rust into near-black) from the bottom-left, creating atmospheric depth without visual noise. Buttons are square-cornered or pill-cornered depending on context — no in-between — reinforcing a binary, decisive visual grammar.

### Do's

- Use #151515 as the default page background for all new pages and sections — never use pure black (#000000) or white.
- Set all display and large headings (48px+) in saansFont weight 300 with letter-spacing between -0.020em and -0.022em — this compressed, light-weight combination is the signature headline treatment.
- Use 9999px border-radius only for pill CTAs ('Book a demo', 'Start for free') and 0px for all other buttons — the binary radius grammar is intentional.
- Apply #e9ebdf (Parchment) for all primary text, primary borders, and filled CTA backgrounds — this warm off-white is the system's single 'bright' color.
- Elevate cards using background #242424 against canvas #151515 with no shadow — a 1px solid #3f403d border is optional for additional definition.
- Use pxGroteskFont 400 12-14px at +0.013em tracking for all eyebrow labels, nav items, and micro-UI text — distinct from saansFont body text.
- Apply the hero radial gradient (amber-rust from bottom-left fading to transparent over #151515) only on full-viewport hero sections — not on inner content panels.

### Don'ts

- Never use saturated chromatic colors (#518dd2 blue, #e8765 coral, #9874d2 purple) as interface chrome — they exist only inside the animated shimmer text and illustration/3D renders.
- Never add box-shadow to cards or panels — shadows break the flat-material surface system; use background lightness shifts instead.
- Never mix square-corner buttons with pill buttons in the same row — choose one context and maintain it (nav uses pill, inline content uses square/ghost).
- Never set heading text above 32px in weight 570 — the bold weight is reserved for small labels; large text must use 300 or 380.
- Never use pure white (#ffffff) as a text or background color — all 'white' in this system is Parchment (#e9ebdf), which carries a warm gray-green tint.
- Never increase section background saturation beyond the muted teal washes (#185849, #0e352c) — the entire page should register as near-achromatic at a glance.
- Never apply border-radius values between 1px and 7px for buttons — the system only uses 0px or 9999px for button shapes.

### Layout

Max-width approximately 1200px centered on all content with full-bleed dark backgrounds extending to viewport edges. Hero is full-viewport with centered-left headline text over the dark canvas and ember-glow gradient, with a 2-column split below (integration icon grid left, waitlist card right). Subsequent sections alternate: logo strip full-bleed, then 2-column text-left / 3D-render-right, then full-bleed testimonial/case-study grid. The case study section uses a CSS grid with mixed-size tiles: 2 text cells left paired with 1 large photo tile right. Feature sections use a single centered column with large left-aligned headlines. Navigation is a sticky top bar 60px tall with backdrop blur, full-width. Footer is full-bleed #151515 with a multi-column link grid. Section vertical rhythm uses 80-120px gaps between major content zones with no visible horizontal dividers — sections flow into each other separated only by background color shifts.

### Imagery

Retool's imagery combines two distinct registers: product-integrated 3D renders and real photography. The 3D renders are dimensional, architectural — stacked geometric forms with teal, mauve, and warm neutral finishes, rendered with soft directional lighting and finger/hand interaction to suggest tactility and precision. Photography is moody, tight-cropped portraiture and industrial scenes (worker in hard hat, close-up face) with ambient color preserved but overall tone dark and muted. Both treatments are contained within rounded-rectangle frames (8-12px radius) set against dark card surfaces, never full-bleed. Integration icons appear as a branded grid of circular app bubbles (9999px radius) retaining native brand colors — the only saturated color clusters on the page. The visual density is medium: imagery occupies roughly 40% of content sections as right-side panels, with text taking the left column. Icons throughout the UI are outlined-style, thin stroke, mono-color #e9ebdf or #94958e.

### Elevation

Retool uses zero box-shadows throughout the UI. Depth is communicated entirely through surface color: #0e0e0 recedes, #151515 is ground, #242424 floats. Cards are literally lighter or darker patches of the same material — no light source simulation, no blur halos. This creates a flat-material depth system where hierarchy is read through luminance steps rather than shadow casting.

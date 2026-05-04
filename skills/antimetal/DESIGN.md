---
version: alpha
name: Antimetal
description: Antimetal operates in two visual modes that coexist on one page: a deep navy-to-electric-blue hero that feels like staring into a server rack at night, and a near-white #f8f9fc product surface that reads like a technical dashboard in daylight. The transition between these modes is dramatic and intentional — dark atmospheric entry, then immediate pivot to a light, data-dense product UI. The single color that bridges both modes is a vivid chartreuse (#d0f100) used exclusively on primary CTAs, creating an almost jarring contrast against both the dark hero and the light product surface. Typography is custom throughout: abcdFont handles all UI at tight tracking (-0.016em), while ivarTextFont with OpenType alternates takes headlines at display sizes, giving the largest text a slightly editorial, high-craft quality uncommon in infrastructure tooling. Elevation is achieved through layered blue-tinted shadows (rgba(0,39,80,...)) rather than dark fills, so even raised surfaces feel part of the same chromatic family.
colors:
  midnight-navy: "#1b2540"
  deep-cosmos: "#001033"
  chartreuse-pulse: "#d0f100"
  ice-veil: "#e0f6ff"
  ghost-canvas: "#f8f9fc"
  pure-surface: "#ffffff"
  slate-ink: "#6b7184"
  ash-medium: "#7c8293"
  storm-gray: "#596075"
  fog-border: "#b1b5c0"
  hero-gradient: "#0050f8"
  blue-glow-radial: "#0080f8"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 13px
    lineHeight: 1
    letterSpacing: -0.21px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.33
    letterSpacing: -0.09px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 22px
    lineHeight: 1.29
    letterSpacing: -0.22px
  heading:
    fontFamily: "system-ui"
    fontSize: 28px
    lineHeight: 1.17
    letterSpacing: -0.14px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.05
    letterSpacing: -0.4px
  display:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.04
    letterSpacing: -0.48px
spacing:
  cardRadius: 20px
  buttonRadius: 9999px
  elementGap: 8px
  sectionGap: 80px
components:
  chartreuse-cta-button:
    role: Primary conversion action — 'Book a demo', 'Start saving time'
  dark-ghost-button:
    role: Secondary action on dark hero — navigation items, 'Log in'
  light-ghost-button:
    role: Secondary action on light surface — 'Explore', inline CTAs
  dark-solid-button:
    role: Tertiary dark-mode CTA — 'Book a demo' nav variant on dark header
  feature-card-elevated:
    role: Primary product UI showcase card in light sections
  section-background-card:
    role: Content grouping surface in light feature sections
  code-data-chip:
    role: Inline code references, small data containers
  badge-pill-floating:
    role: Status labels, category tags — 'Urgent', 'Production', alert count badges
  announcement-banner-pill:
    role: Top-of-page product announcement — 'New / Introducing...' link
  sidebar-navigation-icon:
    role: Vertical product sidebar — icon-only navigation in the product UI
  text-input:
    role: Form fields — email or search inputs
---

## Overview

**North Star:** Electric storm over a blueprint — vivid neon signal cutting through deep navy atmosphere, then snapping to precise technical daylight.

Antimetal operates in two visual modes that coexist on one page: a deep navy-to-electric-blue hero that feels like staring into a server rack at night, and a near-white #f8f9fc product surface that reads like a technical dashboard in daylight. The transition between these modes is dramatic and intentional — dark atmospheric entry, then immediate pivot to a light, data-dense product UI. The single color that bridges both modes is a vivid chartreuse (#d0f100) used exclusively on primary CTAs, creating an almost jarring contrast against both the dark hero and the light product surface. Typography is custom throughout: abcdFont handles all UI at tight tracking (-0.016em), while ivarTextFont with OpenType alternates takes headlines at display sizes, giving the largest text a slightly editorial, high-craft quality uncommon in infrastructure tooling. Elevation is achieved through layered blue-tinted shadows (rgba(0,39,80,...)) rather than dark fills, so even raised surfaces feel part of the same chromatic family.

### Do's

- Use 9999px radius on ALL buttons and interactive pill elements — this applies across both dark and light surfaces without exception.
- Reserve #d0f100 exclusively for the primary CTA fill; never use it for decorative elements, icons, or backgrounds other than action buttons.
- Apply blue-tinted shadows using rgba(0,39,80,...) for all card elevation — never use neutral black-based shadows like rgba(0,0,0,...) on light surfaces.
- Use ivarTextFont with font-feature-settings 'ss04','ss06','ss09','ss10','ss11' only at 32px and above; abcdFont handles everything below 32px.
- Maintain the hero-to-light transition as the singular dark section — subsequent sections stay on #f8f9fc with #ffffff elevated cards; do not add additional dark bands.
- Apply letter-spacing -0.016em to -0.005em on abcdFont across all sizes; avoid default browser tracking which makes the type feel unset.
- Use the 1px outer shadow ring (rgba(0,39,80,0.04) 0px 0px 0px 1px) as a border substitute on cards and badges — avoid explicit border-color properties.

### Don'ts

- Don't use #d0f100 in hero sections or dark backgrounds for decorative illustration fills — it appears only as a filled button background.
- Don't apply radius other than 9999px to buttons — even small utility buttons in the product UI use the pill shape.
- Don't mix ivarTextFont into body copy or UI labels below 32px; the serif is strictly a display instrument.
- Don't use more than two surface levels in light sections (#f8f9fc canvas + #ffffff card) — the design system has almost no mid-tone fill colors between these two steps.
- Don't create dark sections beyond the hero; the page's rhythm depends on a single dramatic dark entry followed by sustained light product canvas.
- Don't use black-based text (#000000 or near-black) — all text is #1b2540, even at maximum emphasis, preserving the blue-navy chromatic identity in the type.
- Don't set input borders to rounded — inputs use 0px radius by design, creating deliberate contrast against the pill-heavy button and badge language.

### Layout

Max-width approximately 1200px, centered. The hero is full-bleed dark spanning the full viewport height with the gradient from deep navy to electric blue — headline and CTA are centered over the dot-globe illustration. Below the fold, the page switches to the #f8f9fc light canvas with generous vertical section gaps (~80px). Feature sections use alternating 2-column layouts (text-left / product-screenshot-right, then reversed) rather than full-width stacks. Product UI showcase cards occupy roughly 60% of the viewport width when shown in context. A 3-column icon+text feature grid appears in the 'Ship more, break less' section. Navigation is a top sticky bar: logo left, center nav links (Platform, Resources, Pricing, Careers), right side 'Log in' ghost + 'Book a demo' pill. The nav bar uses the same dark navy (#001033) as the hero, becoming a transparent overlay that only distinguishes itself via the nav items.

### Imagery

The hero section uses a large, glowing dot-matrix globe illustration rendered in white dots on the blue gradient — abstract, technical, zero-lifestyle photography. It evokes network topology or infrastructure mapping without showing any literal servers or people. Below the hero, the product UI itself is the imagery: cropped dashboard screenshots showing the Antimetal interface with sidebar navigation, issue detail panels, and alert badge flows. These are contained within rounded-corner cards (20px radius) at modest scale, suggesting real product depth without overwhelming. Small decorative illustrations appear in feature sections — simple flat icons with green/orange/blue fills for 'Fix' and 'Prevent' concepts. Icon style is outlined with moderate stroke weight, monochrome in most contexts, occasionally using brand-accent fills for active states. The overall balance is heavily text-and-UI-dominant; decorative imagery exists purely to contextualize the product, not as atmospheric surface treatment.

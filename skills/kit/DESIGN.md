---
version: alpha
name: Kit
description: Kit reads like a warm editorial notebook — cream-tinted parchment (#f2efe9) as the page base, heavy black headlines punching out of it at weight 700, and a single sky-blue accent (#44b1ff) that appears on CTAs and interactive highlights against the near-black (#1e1e1e). The palette is intentionally muted and hand-curated: soft pastel blocks (dusty blue, blush pink, peach, sage green) appear as section backgrounds, never as text or interaction states, making the one vivid blue feel like a highlighter on a notebook page. KitSansFont at 80px/64px in the custom weight 500 dominates hero spaces with tight -0.009em tracking, while Libre Franklin handles everything else across the content hierarchy — a two-font system where custom display and workhorse utility stay in clearly assigned lanes. Radius tokens are tight and intentional: 12px on buttons and cards, 8px on secondary UI, creating a slightly-rounded-but-serious personality that avoids both sharp corporate rigidity and bubbly consumer softness.
colors:
  sky-marker: "#44b1ff"
  dust-blue: "#a2d1f1"
  blush-mist: "#e7c9f1"
  peach-sand: "#ffd0ad"
  sage-foam: "#b9e9c5"
  amber-flag: "#f2ba41"
  near-black: "#1e1e1"
  parchment: "#f2efe9"
  chalk: "#ffffff"
  fog: "#e3e3e3"
  ash: "#d4d4d4"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 10px
    lineHeight: 1.4
    letterSpacing: -0.25px
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.16px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
    letterSpacing: -0.14px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.16px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.25
    letterSpacing: -0.43px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.25
    letterSpacing: -0.5px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 0.95
    letterSpacing: -0.72px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 16px
  sectionGap: 80px
components:
  hero-feature-cards:
    role: 
  subscriber-stats-dashboard-card:
    role: 
  primary-cta-button-group-with-trial-note:
    role: 
  primary-cta-button:
    role: Main call-to-action — 'Start free trial', sign-up triggers
  ghost-navigation-button:
    role: Secondary nav actions like 'Log in', 'Request a demo', dropdown triggers
  subtle-tinted-button:
    role: Tertiary or grouped option buttons within content
  text-action-button:
    role: Inline content actions, pill-style small controls
  hero-feature-card:
    role: Below-the-fold 4-column feature summary tiles
  pastel-section-background-band:
    role: Full-bleed section backgrounds used to break page rhythm
  navigation-bar:
    role: Sticky top navigation across all pages
  footer-column-grid:
    role: Site-wide footer link columns
  testimonial-creator-photo-strip:
    role: Social proof imagery along the hero's right edge
  new-badge:
    role: Inline tag marking new features in nav and footer
---

## Overview

**North Star:** Warm creator notebook — parchment pages, highlighter-blue ink, heavy type on linen.

Kit reads like a warm editorial notebook — cream-tinted parchment (#f2efe9) as the page base, heavy black headlines punching out of it at weight 700, and a single sky-blue accent (#44b1ff) that appears on CTAs and interactive highlights against the near-black (#1e1e1e). The palette is intentionally muted and hand-curated: soft pastel blocks (dusty blue, blush pink, peach, sage green) appear as section backgrounds, never as text or interaction states, making the one vivid blue feel like a highlighter on a notebook page. KitSansFont at 80px/64px in the custom weight 500 dominates hero spaces with tight -0.009em tracking, while Libre Franklin handles everything else across the content hierarchy — a two-font system where custom display and workhorse utility stay in clearly assigned lanes. Radius tokens are tight and intentional: 12px on buttons and cards, 8px on secondary UI, creating a slightly-rounded-but-serious personality that avoids both sharp corporate rigidity and bubbly consumer softness.

### Do's

- Use #f2efe9 (Parchment) as the default page background — never pure white (#ffffff) for full-page base
- Apply #44b1ff only to primary CTA buttons and keyword highlights; all other interactive text states use #1e1e1 on transparent
- Set all button border-radius to 12px for primary actions; use 8px for secondary/tertiary controls and form inputs
- Use KitSansFont weight 500 only at 48px and above; switch to Libre Franklin for all text at 20px and below
- Apply 1px #e3e3e3 border to all cards and inputs — no shadows; elevation reads through surface color contrast alone
- Use pastel section backgrounds (Dust Blue #a2d1f1, Blush Mist #e7c9f1, Peach Sand #ffd0ad, Sage Foam #b9e9c5) for alternating content bands; limit to one per section, never consecutive same-hue bands
- Set Libre Franklin at negative letter-spacing: -0.016em at 16px, -0.013em at 14px, -0.025em at 10-12px caps labels with +0.025em for uppercase tags

### Don'ts

- Don't use #44b1ff as a section background or decorative fill — it exists only on interactive elements (buttons, inline highlights)
- Don't add box-shadows to cards or buttons — shadows break the flat editorial print aesthetic; use border 1px #e3e3e3 instead
- Don't use KitSansFont below 48px in display contexts; at smaller sizes it loses the structural weight that justifies its custom status
- Don't use Amber Flag (#f2ba41) for text, borders, or buttons — it is strictly an icon accent fill color
- Don't stack two consecutive pastel-background sections of the same hue — alternate with parchment (#f2efe9) or white (#ffffff) bands between
- Don't use border-radius above 16px — avoid pill/capsule shapes (9999px) entirely; the system sits between pill-free and boxy
- Don't apply the dark footer (#1e1e1e) surface to any mid-page section — it is reserved exclusively for the page-closing footer block

### Layout

Max-width ~1200px centered, sections are full-bleed to viewport width with content constrained inside. The above-the-fold hero splits 50/50: left half parchment (#f2efe9) with headline + CTA, right half full-height portrait photography — no gutter between them, creating an edge-to-edge split without a grid column gap. Below the hero: alternating pastel band sections (Dust Blue, Blush Mist, Peach Sand) each containing a centered product screenshot or feature illustration with text alongside. Feature grid: 4-column card row at comfortable 24px padding each. 'Thousands of' social proof section: centered headline with keyword highlighted in Sky Marker #44b1ff, followed by a horizontal creator photo strip. Footer: dark (#1e1e1e) full-bleed 4-column link grid. Navigation is sticky top bar at 56px, parchment-colored matching the hero. Section vertical rhythm is 80px gaps between major bands. No sidebar patterns — all layouts are horizontal-grid or centered-stack.

### Imagery

Kit uses portrait photography as the hero's dominant visual — waist-up shots of real creators (authors, coaches, bloggers) holding their books or products against solid-color studio backgrounds (teal, blue). The photography is warm, direct, high-key studio lit with no moody processing — subjects look at camera or slightly off, smiling, creating a peer-to-peer feeling rather than aspirational stock. Photos bleed to the card edge with a 12px radius container. Product UI screenshots appear as overlapping card overlays (dashboard metrics, sign-up pages) positioned partially over the photography, grounding the emotional imagery in functional reality. The second-screen hero section uses a darkened product screenshot as a full-panel background with a floating white card overlay — photography mixed with UI, not isolated. The testimonial strip uses tight circular avatar crops. Icon style: filled, minimal, two-tone (Sky Marker blue #44b1ff body + Amber Flag #f2ba41 accent detail), displayed at 24-32px in feature cards. Imagery density is balanced — one large photo per hero, then primarily text + UI screenshot driven below the fold.

### Elevation

Kit avoids drop shadows almost entirely. Elevation is achieved through surface color contrast: white (#ffffff) cards read as lifted against parchment (#f2efe9), and parchment sections read as recessed against white overlays. The single exception is the UI mockup/dashboard card that floats over photography — it uses the white card surface plus the 1px #e3e3e3 border to visually separate from the photographic background without a shadow. This keeps the design feeling printed and flat rather than glass-and-depth.

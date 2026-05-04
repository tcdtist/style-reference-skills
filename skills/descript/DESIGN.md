---
version: alpha
name: Descript
description: Descript's visual language is deep burgundy darkness cut by coral-red action — like the interior of a recording booth where the walls absorb everything and only the signal glows. The #390a1a near-black burgundy dominates 70% of the hero, creating a theater-dark immersion that makes the coral-red CTA (#f73b3b) feel like an on-air indicator light. Headlines use Gamuth Display, a custom editorial serif at 88px — an unusual choice for a SaaS product that signals craft and content creation rather than enterprise utility. The light sections (#faf8f7, a warm off-white) provide contrast between dark bands without ever going pure white, keeping the palette unified in warmth. Tag labels like 'AI VIDEO EDITOR' use Brett, a custom typeface with wide 0.04em tracking that mimics broadcast chyron styling.
colors:
  broadcast-burgundy: "#390a1a"
  on-air-coral: "#f73b3b"
  hot-take-red: "#ff5340"
  plum-mid: "#651a39"
  deep-violet: "#0c0b5f"
  soft-violet: "#8787e0"
  pale-peach: "#ffe8db"
  blush-mist: "#f1eaed"
  studio-black: "#190308"
  ink-dark: "#1a1a1a"
  warm-parchment: "#faf8f7"
  pure-white: "#ffffff"
  dusty-rose: "#a28993"
  border-mauve: "#907580"
  fog-gray: "#e5e7eb"
  muted-plum: "#583f4a"
  steel-mauve: "#d1c7cb"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: -0.32px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.56
    letterSpacing: -0.36px
  body:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.5
    letterSpacing: -0.4px
  subheading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.33
    letterSpacing: -0.48px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.2
  heading:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.1
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.1
spacing:
  cardRadius: 4px
  buttonRadius: 12px
  elementGap: 16px
  sectionGap: 80-120px
components:
  primary-cta-button-group:
    role: 
  testimonial-card-grid:
    role: 
  awards-recognition-card-with-category-tags:
    role: 
  primary-cta-button:
    role: Main conversion action — 'Get started for free'
  dark-pill-icon-button:
    role: Media controls and compact icon actions in dark sections
  sign-up-nav-button:
    role: Primary nav conversion CTA
  eyebrow-label:
    role: Section category tags above hero headings
  feature-card-blush:
    role: Feature description cards in light sections
  feature-card-peach:
    role: Alternate feature cards with warmer tint
  testimonial-card:
    role: Social proof quotes in grid layout on dark background
  ai-chat-interface-card:
    role: Product UI preview showing Underlord AI assistant
  nav-bar:
    role: Sticky top navigation
  social-proof-logo-strip:
    role: Trust logos (Canva, Figma, Spotify, etc.)
  category-tag-badge:
    role: Filter tags and feature category pills
  awards-recognition-card:
    role: G2 award display in testimonials section
---

## Overview

**North Star:** Broadcast booth meets editorial press — deep burgundy theater dark, editorial serif headlines, coral on-air signals.

Descript's visual language is deep burgundy darkness cut by coral-red action — like the interior of a recording booth where the walls absorb everything and only the signal glows. The #390a1a near-black burgundy dominates 70% of the hero, creating a theater-dark immersion that makes the coral-red CTA (#f73b3b) feel like an on-air indicator light. Headlines use Gamuth Display, a custom editorial serif at 88px — an unusual choice for a SaaS product that signals craft and content creation rather than enterprise utility. The light sections (#faf8f7, a warm off-white) provide contrast between dark bands without ever going pure white, keeping the palette unified in warmth. Tag labels like 'AI VIDEO EDITOR' use Brett, a custom typeface with wide 0.04em tracking that mimics broadcast chyron styling.

### Do's

- Use Gamuth Display weight 400 for all H1/H2 hero headlines — never bold or weight 700
- Precede every major section heading with a Brett 18px, 0.04em tracked eyebrow label in #f73b3b
- Apply #f73b3b background with 12px border-radius and 16px/32px padding for all primary CTAs
- Pair #390a1a dark sections immediately with #faf8f7 light sections — maintain alternating band rhythm
- Use 4px border-radius for all cards; reserve 12px for floating UI components and modals
- Set Booton letter-spacing to −0.02em (negative) across all body sizes — never neutral or positive tracking except in Brett eyebrows
- Use #583f4a as the elevated card surface on dark #390a1a backgrounds — never pure black or white cards on dark sections

### Don'ts

- Never use a pure white (#ffffff) page background — all light surfaces use #faf8f7 (Warm Parchment)
- Never apply Gamuth Display to body copy, captions, or UI labels — it is heading-only at 40px minimum
- Never use the coral CTA (#f73b3b) for more than one button per screen — it functions as a single focal signal
- Never add drop shadows to section cards — background-color contrast alone defines elevation on card surfaces
- Never use a generic sans-serif substitute for Booton without applying −0.02em letter-spacing — positive or zero tracking breaks the warmth
- Never place green, blue, or teal semantic colors in the UI — the system has no cool-hued semantic states; use only the warm coral/burgundy/violet palette
- Never use border-radius above 12px on cards or sections — 9999px is reserved exclusively for compact icon pill buttons

### Layout

Max-width approximately 1200px, centered with generous horizontal padding. Hero is full-bleed #390a1a burgundy dark spanning 100vh with centered headline stack and single CTA. Below hero, alternating dark (#390a1a) and light (#faf8f7) horizontal bands create a clear rhythm — dark for brand immersion, light for feature explanation. Feature sections use 2-3 column card grids with 24px gaps. Testimonials use a 2-column card grid on dark background with an awards card occupying the left column. Social proof logo strip is full-bleed single row between hero and feature sections. Navigation is sticky white bar at top with left-aligned wordmark and right-aligned utility links + CTA button. Section headings are always centered with eyebrow label above and subtext below, max-width ~640px for readability.

### Imagery

Product UI screenshots are the primary visual asset — shown as floating cards partially cropped, overlapping, presented at perspective to simulate depth. No lifestyle photography in screenshots; the product interface IS the visual. UI previews show the Descript editor with real transcript text, building credibility through product exposure. G2 badge art (flat, illustrative award icons) appears in the social proof section. Icons use a filled-with-outline hybrid style at approximately 20-24px, monocolor matching the surface text color. The Underlord AI chat component is showcased as a standalone card with a clean white background floating against the dark hero — product-as-hero framing. All imagery is contained within rounded-corner cards (12px) rather than full-bleed, maintaining the 'exhibit behind glass' feel.

### Elevation

Shadows appear only on floating UI elements (chat card, nav dropdowns) using a single system: rgba(0,0,0,0.16) 0px 2px 4px. Cards and section containers use background-color contrast alone for separation — no shadow hierarchy. This keeps the dark sections feeling like material surfaces rather than layered interfaces.

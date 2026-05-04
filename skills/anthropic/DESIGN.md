---
version: alpha
name: Anthropic
description: Anthropic's site runs on warm ivory parchment (#faf9f5) — not white, not gray, but the color of aged paper under good light. The palette is almost entirely achromatic, with the entire chromatic budget spent on a single earthy terracotta accent (#d97757) held in reserve in CSS tokens but largely absent from the visible UI. Two custom type families do all the personality work: Anthropic Sans drives navigation and UI at tight tracking, while Anthropic Serif delivers editorial weight in headlines and featured content — the serif-plus-grotesque pairing signals research institution, not startup. Headlines use a thick double-underline on key words (visible on 'research' and 'products') as the sole decorative device — it replaces color as the emphasis mechanism. The massive feature cards flip to near-black (#141413) background, creating hard-edged alternating surface bands with zero gradient or shadow softening.
colors:
  slate-dark: "#141413"
  ivory-light: "#faf9f5"
  ivory-medium: "#f0eee6"
  ivory-dark: "#e8e6dc"
  oat: "#e3dacc"
  cloud-medium: "#b0aea5"
  cloud-light: "#d1cfc5"
  cloud-dark: "#87867f"
  slate-medium: "#3d3d3a"
  slate-light: "#5e5d59"
  clay: "#d97757"
  accent-ember: "#c6613f"
  olive: "#788c5d"
  sky: "#6a9bcc"
  fig: "#c46686"
  cactus: "#bcd1ca"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.3
  body-sm:
    fontFamily: "system-ui"
    fontSize: 15px
    lineHeight: 1.4
    letterSpacing: -0.03px
  subheading:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.3
    letterSpacing: -0.12px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 61px
    lineHeight: 1.1
    letterSpacing: -1.22px
  display:
    fontFamily: "system-ui"
    fontSize: 91px
    lineHeight: 1.1
spacing:
  cardRadius: 8px
  buttonRadius: 0px
  elementGap: 8-16px
  sectionGap: 61px
components:
  latest-releases-card-grid:
    role: 
  feature-card-dark-editorial:
    role: 
  button-group-primary-ghost-metadata-label:
    role: 
  primary-nav-button-try-claude:
    role: Main CTA in top navigation
  ghost-nav-button-transparent:
    role: Secondary nav actions, dropdown triggers
  muted-ghost-button:
    role: Disabled or secondary-secondary action
  inline-text-link-with-underline-emphasis:
    role: Hero-level keyword emphasis links
  feature-card-dark:
    role: Full-width editorial feature sections
  release-card-light:
    role: Content listing cards in the 'Latest releases' grid
  metadata-badge-label:
    role: Category and date labels on cards
  arrow-text-link:
    role: Read more / announcement CTAs within cards
  continue-reading-button-on-dark:
    role: CTA within dark feature card
  top-navigation-bar:
    role: Site-wide primary navigation
---

## Overview

**North Star:** Research journal printed on warm stone — authoritative typographic composition where word-level underlines replace color as the primary emphasis mechanism, and the only warmth comes from the paper itself.

Anthropic's site runs on warm ivory parchment (#faf9f5) — not white, not gray, but the color of aged paper under good light. The palette is almost entirely achromatic, with the entire chromatic budget spent on a single earthy terracotta accent (#d97757) held in reserve in CSS tokens but largely absent from the visible UI. Two custom type families do all the personality work: Anthropic Sans drives navigation and UI at tight tracking, while Anthropic Serif delivers editorial weight in headlines and featured content — the serif-plus-grotesque pairing signals research institution, not startup. Headlines use a thick double-underline on key words (visible on 'research' and 'products') as the sole decorative device — it replaces color as the emphasis mechanism. The massive feature cards flip to near-black (#141413) background, creating hard-edged alternating surface bands with zero gradient or shadow softening.

### Do's

- Use #faf9f5 (Ivory Light) as the page base — never pure white (#ffffff) or neutral gray.
- Apply borderRadius 0px to all buttons and interactive controls except the primary 'Try Claude' CTA which uses 0px 0px 8px 8px (asymmetric: flat top, rounded bottom only).
- Emphasize headline keywords with a thick text-decoration underline only — never color, bold weight increase, or highlight backgrounds — as the sole decorative emphasis mechanism.
- Use Anthropic Serif at display sizes (91px, weight 400) exclusively within dark (#141413) surface cards; use Anthropic Sans for all light-surface headlines.
- Restrict chromatic color to the CSS accent palette (Clay #d97757, Olive #788c5d, etc.) and deploy it sparingly — one accent per section maximum; default state uses zero chromatic color.
- Set dark editorial feature cards to borderRadius 24px and keep them full content-column width with hard clipping of interior imagery at the same radius.
- Use Anthropic Mono 16px for metadata field labels (DATE, CATEGORY) in card footers — the mono/grotesque contrast signals structured data within editorial layout.

### Don'ts

- Never use pure white (#ffffff) or pure black (#000000) as a surface background — all surfaces must come from the ivory/slate token range.
- Never add box-shadows or drop-shadows to any component — surface contrast and border lines are the only depth signals.
- Never round button corners uniformly — the 0px radius is a deliberate formal signal; avoid introducing 4px, 6px, or pill buttons.
- Never use Anthropic Serif on the page's ivory background at large sizes — the serif display scale is reserved for the dark card inversion.
- Never apply multiple chromatic accent colors within a single section — the palette tokens (Clay, Sky, Fig, Olive) are categorical variants, not combinable accents.
- Never use background fills for badge or label components — metadata labels are pure text with no chip, pill, or capsule treatment.
- Never replace the underline emphasis mechanic with color emphasis on headlines — links within headlines underline, they do not change color.

### Layout

Max-width centered layout (~1200px) on ivory background. Hero is split-column: large weight-700 headline on left (spanning ~55% width) with a brief descriptive paragraph on right at ~30% width, both sitting on the ivory page background with generous top padding (~80px). Below the hero, full-width dark cards (borderRadius 24px) break the ivory field — left half carries Anthropic Serif display headline + CTA, right half holds the 3D visualization image. These dark editorial cards are full-column-width but not full-bleed to the browser edge. Below that, a 3-column card grid for 'Latest releases' with equal-width release cards on oat/ivory-dark backgrounds. Section gaps are ~61px. Navigation is a sticky top bar spanning full width at ~68px height. No sidebar. No mega-menu — dropdown triggers are inline in the nav with chevrons. The overall rhythm is: hero → dark editorial band → light card grid → repeat, creating a strict alternating thermal pattern.

### Imagery

Dominated by a single recurring 3D abstract graphic — a dark mesh or lattice of hexagonal/irregular cells with glowing white edges, resembling a biological cell structure or neural network under a microscope. Rendered as a high-contrast dark-field image (near-black background, luminous white wireframe lines) and placed large within the dark feature cards. This is not photography or illustration — it's a 3D scientific visualization rendered with a biological aesthetic, suggesting AI safety as a kind of material science. The image is always contained within the dark card boundary with hard-edged radius clipping (24px). Text-to-image density is high — imagery is used as a single dramatic visual accent per section, not a repeating motif. The rest of the page is entirely text-dominant with no decorative imagery, icons, or illustration.

### Elevation

Zero box-shadows throughout. Surface depth is achieved entirely through background color contrast — ivory (#faf9f5) vs near-black (#141413) vs oat (#e3dacc) — with hard-edged transitions and no blurring. Cards sit flush in their grid with no lift. This flat-but-high-contrast approach reads as print design transferred to screen: depth through ink density, not light simulation.

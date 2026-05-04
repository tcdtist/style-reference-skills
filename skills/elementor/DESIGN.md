---
version: alpha
name: Elementor
description: Elementor's visual system is a high-contrast monochrome stage where black and near-white alternate as the sole performers — no brand color claims the throne, just pure #000000 and #f6f6f6 pushed to 19:1 contrast ratios. The hero is a full-bleed moody lifestyle photograph with massive weight-900 Roobert headlines in white overlay, commanding attention through scale rather than color. Roobert's 'ss14' feature and tight negative letter-spacing (-0.02em at display sizes) give the type a compressed urgency. Black-filled CTA buttons and white-filled secondary buttons create the only color distinction on the page — the entire interactive vocabulary runs on this two-tone switch. Cards flip between pure black (#000000, 16px radius, 24px padding) and pure white (#ffffff, 16px radius, 48px/32px padding), creating a checkerboard depth without any shadow or elevation.
colors:
  press-black: "#000000"
  charcoal-ink: "#212121"
  blank-canvas: "#ffffff"
  fog-sheet: "#f6f6f6"
  ash-border: "#d1d1d1"
  slate-text: "#a6a6a6"
  steel-gray: "#69727d"
  deep-void: "#0c0d0"
  pixel-blush: "#FFB8E5"
  neon-loop: "#ED01EE"
  codeberry: "#620856"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.5
    letterSpacing: 0px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.5
    letterSpacing: 0px
  body:
    fontFamily: "system-ui"
    fontSize: 18px
    lineHeight: 1.5
    letterSpacing: 0px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: 0px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 32px
    lineHeight: 1.3
    letterSpacing: -0.32px
  heading:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.2
    letterSpacing: -0.48px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.2
    letterSpacing: -1.28px
  display:
    fontFamily: "system-ui"
    fontSize: 88px
    lineHeight: 1.1
    letterSpacing: -1.76px
spacing:
  cardRadius: 16px
  buttonRadius: 8px
  elementGap: 8-16px
  sectionGap: 96px
components:
  button-group-primary-secondary-ghost:
    role: 
  stat-counter-block:
    role: 
  feature-cards-white-on-black:
    role: 
  primary-cta-button-black-fill:
    role: Main call-to-action across hero and section endings
  secondary-button-white-fill:
    role: Secondary action alongside primary CTAs
  ghost-text-button:
    role: Tertiary links styled as buttons — 'Learn more', 'How to start building a website'
  white-content-card:
    role: Feature cards on dark-background sections
  black-content-card:
    role: Feature or stat cards on light-background sections
  black-badge-label:
    role: Brand trust badges (e.g. 'CNN'), product labels
  top-navigation-bar:
    role: Global site navigation — sticky, light background
  hero-section:
    role: Full-viewport opening section with lifestyle photography
  stat-counter-block:
    role: Social proof metrics — '21M+' websites built
  footer:
    role: Site-wide footer navigation grid
---

## Overview

**North Star:** High-stakes monochrome printing press — a system where black and white do all the heavy lifting, Roobert's compressed weight-900 headlines stamped like bold ink on paper.

Elementor's visual system is a high-contrast monochrome stage where black and near-white alternate as the sole performers — no brand color claims the throne, just pure #000000 and #f6f6f6 pushed to 19:1 contrast ratios. The hero is a full-bleed moody lifestyle photograph with massive weight-900 Roobert headlines in white overlay, commanding attention through scale rather than color. Roobert's 'ss14' feature and tight negative letter-spacing (-0.02em at display sizes) give the type a compressed urgency. Black-filled CTA buttons and white-filled secondary buttons create the only color distinction on the page — the entire interactive vocabulary runs on this two-tone switch. Cards flip between pure black (#000000, 16px radius, 24px padding) and pure white (#ffffff, 16px radius, 48px/32px padding), creating a checkerboard depth without any shadow or elevation.

### Do's

- Use Roobert 900 with letter-spacing -0.02em for all display headlines at 56px and above — never swap to a lighter weight for main hero text
- Apply 8px border-radius to all buttons and badges; apply 16px to all cards and large image containers
- Alternate section backgrounds strictly between #000000 and #f6f6f6/#ffffff — never use a third background color to break the binary rhythm
- Set white cards (padding 48px 32px) on black sections; set black cards (padding 24px) on white/light sections — always invert card color relative to section
- Keep all interactive focus to black-fill or white-fill buttons with 24px horizontal padding — no colored CTAs, no gradients on buttons
- Use #69727d for supporting body text and icon strokes — never use it for headings or primary navigation
- Apply fontFeatureSettings '"ss14"' whenever rendering Roobert to activate the intended alternate letterforms

### Don'ts

- Never add box-shadow to any card, button, or navigation element — depth is created through surface color inversion, not elevation
- Never introduce a chromatic brand color (the CSS token pinks/magentas) into the main marketing page UI — these are reserved for product-feature illustration contexts only
- Never use weight 400 for headings at 32px and above — minimum weight for heading-sm and up is 600, display sizes require 900
- Never set a card background that matches its parent section background — every card must contrast against its container (#fff on #000, #000 on #fff or #f6f6f6)
- Never use border-radius above 16px on interactive components or cards — the 160px pill radius is exclusive to image crops, not UI elements
- Never use #69727d or #a6a6a6 for button labels or CTA copy — these gray tones are body/meta text only, never interactive labels
- Never stack multiple black sections or multiple white sections consecutively — the alternating binary rhythm must be maintained across every section boundary

### Layout

Max-width contained at approximately 1200px, centered on page. Hero is a full-bleed dark lifestyle photograph — the container breaks the max-width to extend edge-to-edge, then the headline and CTA stack centered over the image. Below the hero, sections alternate strictly between #f6f6f6 and #000000 backgrounds with 96px vertical gaps. Feature sections use a 2–3 column card grid with white-on-black or black-on-white inversion. Stat counters appear in a single-row horizontal flex with generous spacing. Navigation is a top sticky bar with logo left, centered links, and auth+CTA right — the bar height is 40–80px. Footer is a full-width black band with a multi-column link grid (4–5 columns) and a large hero-scale headline. The overall rhythm is spacious and section-based, with no sidebar or asymmetric compositions.

### Imagery

Lifestyle photography at full bleed — the hero is a moody, dark-toned photograph of a person in a relaxed creative pose. High contrast, slightly underexposed feel with warm golden tones in the subject against a near-black background environment. No color grading or duotone treatment; the natural darkness of the image provides headline contrast without any overlay scrim. Images are contained within 16px-radius cards in feature sections and 160px pill-radius crops for circular or elongated thumbnail treatments. Icons appear to use thin-to-medium stroke weight, monochrome (black or white depending on surface). Imagery is sparse relative to the text-dominant layout — photography is used for emotional atmosphere in the hero and sparingly as product/UI screenshots in feature sections.

### Elevation

Zero shadows throughout. Depth is created exclusively through surface color contrast — black cards (#000000) placed against white sections and white cards (#ffffff) placed against black sections. No box-shadow values appear on any component. The alternating black/white card system replaces the traditional light/shadow elevation hierarchy entirely.

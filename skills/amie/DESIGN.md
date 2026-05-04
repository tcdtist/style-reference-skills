---
version: alpha
name: Amie
description: Amie feels like a well-lit productivity workspace — bright white surfaces, almost clinical in their restraint, punctuated by a single electric sky-blue (#11a8ff) that fires only when action is required. The page is overwhelmingly neutral — 98% achromatic — making every chromatic moment (the amber highlight on 'without a bot', the green calendar icon, the violet tag) feel intentional rather than decorative. Inter at tight negative letter-spacing (-0.025em at display sizes) condenses headlines into confident blocks without weight extremes — weight 700 at 56px reads assertive but not aggressive. Cards use hairline 1px borders via layered near-invisible shadows rather than visible strokes, giving product UI previews the appearance of floating slightly off the page. The ghost 'Request a demo' button beside the filled CTA creates a paired choice architecture that recurs throughout the page.
colors:
  pure-canvas: "#ffffff"
  fog-surface: "#fafafa"
  ash-border: "#cdcdcd"
  stone-divider: "#ebebeb"
  graphite-body: "#5c5c5c"
  silver-muted: "#a0a0a0"
  ink-primary: "#000000"
  charcoal-dark: "#2e2e2e"
  sky-action: "#11a8ff"
  sky-pale: "#cfeeff"
  amie-pink: "#f6a6a6"
  mint-active: "#01ca45"
  violet-tag: "#a050ff"
  amber-highlight: "#fbefaf"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.5
  body:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.75
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.14
    letterSpacing: -0.48px
  display:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1
    letterSpacing: -1.4px
spacing:
  cardRadius: 12px
  buttonRadius: 12px
  elementGap: 8px
  sectionGap: 80px
components:
  cta-button-group:
    role: 
  meeting-summary-card:
    role: 
  stat-highlight-block:
    role: 
  primary-cta-button:
    role: Main conversion actions — 'Get started', 'Start free trial'
  ghost-secondary-button:
    role: 'Request a demo' and secondary actions paired beside primary CTA
  text-nav-ghost-button:
    role: Navigation links and low-priority actions like 'Features', 'Pricing', 'Login'
  small-outline-button:
    role: Compact in-UI actions within product preview areas
  feature-card-white:
    role: Primary content cards showcasing product features
  feature-card-off-white:
    role: Secondary feature cards with subtle background differentiation
  highlight-chip:
    role: Inline text emphasis tags like 'Within 47 seconds:' label
  category-tag-pill:
    role: Feature category labels — 'Meeting Notes', 'Shareable Pages'
  inline-text-highlight:
    role: Hero headline word-level emphasis like 'without a bot'
  navigation-bar:
    role: Top-fixed site navigation
  product-preview-card:
    role: Large screenshot/demo card in hero section
  social-proof-logo-strip:
    role: 'Trusted by teams at' company logos
---

## Overview

**North Star:** Sunlit productivity dashboard — a workspace where everything is white, flat, and purposeful, with one electric-blue switch that turns things on.

Amie feels like a well-lit productivity workspace — bright white surfaces, almost clinical in their restraint, punctuated by a single electric sky-blue (#11a8ff) that fires only when action is required. The page is overwhelmingly neutral — 98% achromatic — making every chromatic moment (the amber highlight on 'without a bot', the green calendar icon, the violet tag) feel intentional rather than decorative. Inter at tight negative letter-spacing (-0.025em at display sizes) condenses headlines into confident blocks without weight extremes — weight 700 at 56px reads assertive but not aggressive. Cards use hairline 1px borders via layered near-invisible shadows rather than visible strokes, giving product UI previews the appearance of floating slightly off the page. The ghost 'Request a demo' button beside the filled CTA creates a paired choice architecture that recurs throughout the page.

### Do's

- Use #11a8ff exclusively for filled CTA buttons — no other UI element gets a chromatic fill color
- Apply letter-spacing -1.40px at 56px and -0.48px at 40px for all display and section headings using Inter
- Render card borders via 3-layer shadow stack (rgba(0,0,0,0.06) 0px 0px 0px 1px ...) rather than explicit border-color properties
- Use 9999px radius for all tag/pill/chip components and category labels; use 12px for cards and primary buttons
- Highlight key statistics or phrases inline with #fbefaf background at the span level — apply only once per hero to preserve impact
- Maintain grayscale(1) filter on partner/social proof logos and product screenshots in secondary contexts
- Keep category accent colors (#01ca45, #a050ff) to border-only usage on tags — never fill a UI surface with them

### Don'ts

- Never add a second chromatic action color — #11a8ff is the only CTA fill; competing colors collapse the hierarchy
- Do not use weight below 400 for body text or above 700 for any text — the weight range 400–700 is the entire system
- Avoid explicit border declarations for cards — the shadow-as-border technique (0.06 opacity ring) is what keeps surfaces integrated, not separated
- Never use #a0a0a0 or #5c5c5c for headings — these are strictly secondary body and label colors
- Do not center-align body paragraphs — left-aligned text with 16px subheading baseline is the consistent content pattern
- Avoid gradients in UI components — the sky gradient (#cfeeff → #41baff) is decorative-only behind highlighted phrases, not a button or card treatment
- Do not apply backdrop-filter blur outside the navigation bar — it appears only on the sticky nav at scroll

### Layout

Max-width ~1200px centered on a white full-bleed canvas. Navigation is a minimal top bar with logo + 3 links + 2 button actions. Hero section is split: left-aligned headline block with two CTAs stacked beside a large product screenshot card that extends below the fold. Below hero: logo strip (full-bleed scrolling), then a large centered headline section with tight paragraph text and a single CTA. Feature sections use alternating or stacked card grids — 2-3 column — with cards at equal height. No visible dividers between sections; spacing alone creates rhythm (estimated 80px section gaps). The page is long (~14000px) with many stacked feature blocks. Dense content areas use 8px element gaps; section transitions use 80px. Sticky nav collapses at scroll via backdrop blur.

### Imagery

Visuals are dominated by product UI screenshots — the app's own interface rendered at realistic scale inside rounded-top cards. No lifestyle photography, no people, no abstract 3D renders. Screenshots are full-color and detailed, showing the actual sidebar+content layout of the product. Outside screenshots, the page is pure text and UI components. The one decorative graphic element is a handwritten-style annotation ('These companies have 10+ Amie users') suggesting authenticity. Icons are filled and outlined variants in a single stroke weight, monochromatic except for the category-colored variants (Mint #01ca45, Violet #a050ff). Overall: text-dominant, image-sparse — the product screenshot IS the hero visual, not a supporting element.

### Elevation

Shadows at opacity 0.06 serve as borders, not depth indicators — the 3-layer card shadow (0px ring + 1px lift + 3px blur) creates a hairline perimeter that reads as a crisp 1px stroke at normal viewing. Cards feel flush against the page, not floating above it. True depth (dropdowns) escalates to 0.1 opacity but stays short-range.

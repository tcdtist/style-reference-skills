---
version: alpha
name: Apple
description: Apple's MacBook Neo product page radiates cool luminosity — a gallery-white canvas where enormous weight-700 headlines at 80-96px dominate above feather-light body copy, creating a tension between mass and air. The page background stays #f5f5f7, one step off pure white, giving cards and content wells a surface-lift effect without any shadows. Negative letter-spacing tightens progressively with size — display headlines track at -0.022em while body text breathes at -0.003em, a signature move that makes large type feel chiseled rather than loose. The single interactive accent (#0071e3 CTA blue) appears only on the 'Buy' pill button and nav links, rationed so every appearance reads as an instruction to act. Product gradients — dark-to-citrus-green, dark-to-blue, dark-to-violet — serve as full-bleed theatrical backdrops for each color finish showcase, never decorating UI chrome.
colors:
  ink: "#1d1d1f"
  graphite: "#707070"
  slate: "#474747"
  ash: "#333333"
  fog: "#f5f5f7"
  snow: "#ffffff"
  obsidian: "#000000"
  silver-mist: "#e8e8ed"
  azure: "#0071e3"
  cobalt-link: "#0066cc"
  citrus-gradient: "#dddc8c"
  indigo-gradient: "#2535e2"
  blush-gradient: "#cc29bc"
  citrus-finish: "#dddc8c"
  blush-finish: "#e8d0d0"
  indigo-finish: "#596680"
  caution: "#b64400"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 12px
    lineHeight: 1.33
    letterSpacing: -0.26px
  body-sm:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.43
    letterSpacing: -0.04px
  body:
    fontFamily: "system-ui"
    fontSize: 17px
    lineHeight: 1.47
    letterSpacing: -0.1px
  subheading:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
    letterSpacing: -0.2px
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 24px
    lineHeight: 1.29
    letterSpacing: -0.36px
  heading:
    fontFamily: "system-ui"
    fontSize: 40px
    lineHeight: 1.17
    letterSpacing: -0.6px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 56px
    lineHeight: 1.07
    letterSpacing: -0.9px
  display:
    fontFamily: "system-ui"
    fontSize: 96px
    lineHeight: 1.04
    letterSpacing: -2.11px
spacing:
  cardRadius: 28px
  buttonRadius: 999px
  elementGap: 10px
  sectionGap: 80-120px
components:
  primary-buy-button:
    role: Sole conversion CTA across page and sticky nav
  ghost-text-button:
    role: Section 'Learn more' links styled as buttons
  rounded-ghost-button:
    role: Feature navigation tabs (Calls and Texts, Handoff, iPhone Mirroring, AirDrop)
  frosted-pill-selector:
    role: Country/region selector and segmented control overlays
  dark-pill-button:
    role: Hero section 'Buy' CTA on dark product backdrops
  white-feature-card:
    role: Primary content card for feature showcases
  fog-feature-card:
    role: Alternate feature card on white backgrounds
  dark-feature-card:
    role: High-contrast product detail card
  global-navigation-bar:
    role: Persistent top nav with product categories
  sticky-product-sub-nav:
    role: Page-section navigator (Overview, Tech Specs, Compare, Switch from PC to Mac)
  product-color-swatch-chip:
    role: Finish selector for Silver, Blush, Citrus, Indigo
  new-badge:
    role: Product 'New' label in nav and product cards
  carousel-pagination-dot:
    role: Slide indicator in feature carousels
---

## Overview

**North Star:** Gallery wall at natural light — enormous type casts shadows on a white surface, color enters only as product.

Apple's MacBook Neo product page radiates cool luminosity — a gallery-white canvas where enormous weight-700 headlines at 80-96px dominate above feather-light body copy, creating a tension between mass and air. The page background stays #f5f5f7, one step off pure white, giving cards and content wells a surface-lift effect without any shadows. Negative letter-spacing tightens progressively with size — display headlines track at -0.022em while body text breathes at -0.003em, a signature move that makes large type feel chiseled rather than loose. The single interactive accent (#0071e3 CTA blue) appears only on the 'Buy' pill button and nav links, rationed so every appearance reads as an instruction to act. Product gradients — dark-to-citrus-green, dark-to-blue, dark-to-violet — serve as full-bleed theatrical backdrops for each color finish showcase, never decorating UI chrome.

### Do's

- Use 28px border-radius for all feature cards (#ffffff and #f5f5f7 backgrounds) — this exact value is the page's geometric signature.
- Reserve #0071e3 exclusively for the primary 'Buy' CTA button. No other UI element uses this blue — its scarcity makes it the only color that reads as an imperative.
- Apply negative letter-spacing scaled to font size: -2.11px at 96px display, -0.9px at 56px heading-lg, -0.1px at 17px body. Positive or zero tracking at display sizes breaks the chiseled headline aesthetic.
- Use #f5f5f7 as page canvas and #ffffff as card surface. Never reverse this — cards must always be lighter than their parent background.
- Set SF Pro Display weight 700 for all primary product headlines at 56px and above. Weight 600 is for supporting headers (24-40px), never for hero text.
- Use rgba(210,210,215,0.64) with backdrop-filter blur(20px) for any temporary overlay controls (country selectors, segmented pickers) — this is the frosted-glass layer distinct from all opaque surfaces.
- Product finish gradients (Citrus, Indigo, Blush) are used only as full-bleed section backdrops for that finish's showcase. Never use them as UI chrome, card backgrounds, or button fills.

### Don'ts

- Do not add box-shadow to any card or container. The entire elevation system is color-value-only — shadows break the flat-lit gallery effect.
- Do not use #0066cc (Cobalt Link) for button backgrounds. It is an inline text link color only — using it on filled buttons conflicts with the #0071e3 CTA hierarchy.
- Do not use font weight 300 for headlines below 40px — below that threshold, weight 300 loses definition against the white/fog background.
- Do not place two rounded-pill buttons side by side in the same visual zone. The 999px radius is rationed to one CTA per section to prevent diffusion of focus.
- Do not use the product finish colors (#dddc8c Citrus, #e8d0d0 Blush, #596680 Indigo) as semantic or UI accent colors — they exist only as product identity swatches and gradient source colors.
- Do not use positive letter-spacing on SF Pro Display at sizes above 28px. The +0.007em–+0.011em values from the data appear only at small display sizes (21px); at headline scale positive tracking is tonally inconsistent.
- Do not center-align body paragraphs longer than 2 lines. Apple's body copy left-aligns in two-column feature layouts; centered text is reserved for single-line hero subheadings and price callouts.

### Layout

Max-width ~1200px centered on a #f5f5f7 canvas. Hero is full-viewport centered headline stack (product name at 24px, hero headline at 80-96px, price subtext at 17px, single Buy pill) with product image breaking below the text fold — classic Apple centered-stack hero. Sub-nav becomes sticky at ~52px height after the hero. Section rhythm: alternating white (#ffffff full-width bands) and fog (#f5f5f7) bands with no explicit dividers — the color shift alone creates section breaks. Feature sections use 2-column split (text left at ~40% width, product image right at ~60%) or full-bleed product gradient cards. Highlight carousel is a single-column centered card with horizontal scroll and pagination dots. Specs section uses a tight left-label / right-value two-column table pattern at body-sm size. Feature detail cards stack in a 2×2 grid at 28px radius, each card self-contained. Navigation: translucent sticky global nav at top (12px text, ~44px tall) plus sticky product sub-nav below it (14px text, ~52px tall) — two navigation layers are always visible, keeping section context persistent during long scroll.

### Imagery

Product photography dominates: the MacBook is always the sole subject, photographed on pure white or against the Fog (#f5f5f7) surface — zero lifestyle context, no hands (except the hero hand hold), no desk environment. The hero image is the laptop balanced on a single palm from below-frame, shot at a near-overhead angle with the vivid Citrus finish as the sole color note in an otherwise achromatic composition. Color finish showcases use full-bleed theatrical gradients (dark-to-citrus, dark-to-indigo, dark-to-blush) as the backdrop, with the open laptop emerging from the gradient — product-as-light-source. No illustration. Icons are SF Symbols style: mono, filled/outlined hybrid, 1.5-2px apparent stroke, #1d1d1f on light backgrounds, #ffffff on dark cards. The page is image-heavy relative to text — each major section is anchored by a product image occupying 50-80% of viewport height, with text floating above or below in compact lockups.

### Elevation

Zero box-shadows across all 73 card instances. Elevation is expressed entirely through background-color differential: #ffffff cards float above #f5f5f7 canvas by value contrast alone. This forces the eye to read depth through color rather than cast shadow — a choice that keeps the page feeling like a flat lit surface rather than a stacked document. The only visual separation is the 28px border-radius rounding the card edges, making containment geometric rather than dimensional.

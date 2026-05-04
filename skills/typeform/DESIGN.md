---
version: alpha
name: Typeform
description: Typeform operates in a register of editorial authority — a publishing house that also ships software. The hero section is a deep aubergine-black (#2a222b) that transitions to an almost-white cream (#faf9fb), creating a palette that feels like parchment under lamplight rather than a typical SaaS light-on-dark flip. The defining signature is the Tobias serif at display sizes: a classical editorial typeface with tight negative tracking (-0.031em at 64px) sitting alongside the geometric sans-serif TWK Lausanne, creating a deliberate tension between print heritage and digital utility. Buttons are low-key 12px radius rectangles in near-black — not pill-shaped, not sharp — quiet enough to let the typography lead. Purple (#9454ab) appears sparingly as a section label color for category eyebrows, never as a primary CTA, acting more like an editorial accent ink than a conversion color.
colors:
  aubergine-ink: "#2a222b"
  deep-plum: "#3e3040"
  violet-mist: "#9454ab"
  lavender-whisper: "#ddb7f0"
  cream-canvas: "#faf9fb"
  pure-white: "#ffffff"
  charcoal: "#222222"
  slate-mid: "#564b58"
  ash: "#655d67"
  fog: "#837a85"
  mist: "#d4d1d5"
  parchment: "#f5f3f6"
typography:
  caption:
    fontFamily: "system-ui"
    fontSize: 14px
    lineHeight: 1.2
  body:
    fontFamily: "system-ui"
    fontSize: 16px
    lineHeight: 1.49
  body-lg:
    fontFamily: "system-ui"
    fontSize: 20px
    lineHeight: 1.4
  heading-sm:
    fontFamily: "system-ui"
    fontSize: 48px
    lineHeight: 1.1
  heading:
    fontFamily: "system-ui"
    fontSize: 64px
    lineHeight: 1.1
    letterSpacing: -1.98px
  heading-lg:
    fontFamily: "system-ui"
    fontSize: 72px
    lineHeight: 1.1
    letterSpacing: -1.01px
  display:
    fontFamily: "system-ui"
    fontSize: 80px
    lineHeight: 1
    letterSpacing: -0.96px
spacing:
  cardRadius: 24px
  buttonRadius: 12px
  elementGap: 16px
  sectionGap: 64px
components:
  announcement-banner:
    role: 
  feature-content-block:
    role: 
  integrations-section:
    role: 
  primary-cta-button:
    role: Main call to action throughout the page
  ghost-navigation-button:
    role: Secondary actions, nav-level text links with chevrons
  section-eyebrow-label:
    role: Category identifier above section headings
  integration-logo-pill:
    role: Partner/integration logos in the integrations section
  dark-hero-section:
    role: Full-width page hero with dark background
  light-content-section:
    role: Alternating content blocks in cream/white backgrounds
  product-preview-card:
    role: Embedded UI/screenshot previews in content sections
  primary-navigation-bar:
    role: Top navigation with logo, links, and auth CTAs
  trust-stat-block:
    role: Social proof number display
---

## Overview

**North Star:** Publishing house meets product dashboard — serif headlines borrowed from a literary journal, UI chrome stripped to bare minimum so the type can own every screen.

Typeform operates in a register of editorial authority — a publishing house that also ships software. The hero section is a deep aubergine-black (#2a222b) that transitions to an almost-white cream (#faf9fb), creating a palette that feels like parchment under lamplight rather than a typical SaaS light-on-dark flip. The defining signature is the Tobias serif at display sizes: a classical editorial typeface with tight negative tracking (-0.031em at 64px) sitting alongside the geometric sans-serif TWK Lausanne, creating a deliberate tension between print heritage and digital utility. Buttons are low-key 12px radius rectangles in near-black — not pill-shaped, not sharp — quiet enough to let the typography lead. Purple (#9454ab) appears sparingly as a section label color for category eyebrows, never as a primary CTA, acting more like an editorial accent ink than a conversion color.

### Do's

- Use Tobias 400 with negative letter-spacing (-1.98px at 64px minimum) for all display headlines — do not substitute a heavier weight sans-serif
- Reserve #9454ab exclusively for section eyebrow labels in uppercase TWK Lausanne 14px — never use it on buttons, links, or backgrounds
- Apply 12px radius to all button variants and 24px radius to all card containers — do not use pill (9999px) or sharp (0px) radius anywhere in the UI
- Alternate sections between #2a222b dark surfaces and #faf9fb/#f5f3f6 light surfaces — never stack two dark sections or two identical-tone light sections consecutively
- Maintain TWK Lausanne font-feature-settings of '"clig", "liga", "ss01", "ss11"' at all sizes — these alternate glyphs are part of the brand identity
- Use #2a222b (not pure #000000) for all primary text and dark backgrounds — the warm violet undertone is the brand's chromatic signature
- Keep CTAs in near-black fill regardless of section — on dark backgrounds use #faf9fb text with #faf9fb border; on light backgrounds same fill, no change

### Don'ts

- Do not use saturated purple (#9454ab, #b66dd5) on buttons, hover states, or backgrounds — it exists only as typographic ink for category labels
- Do not use Tobias for body copy, captions, or UI labels — it is display-only; all functional text uses TWK Lausanne
- Do not add box-shadows to cards or buttons — elevation is expressed through background color contrast (dark surface vs light surface), not shadows
- Do not use weight 600+ in TWK Lausanne for headlines — heavy-weight sans headings contradict the editorial register the Tobias/Lausanne pairing establishes
- Do not use pill-shaped buttons (border-radius > 12px) for CTAs — the 12px radius is intentionally understated so typography leads, not the button shape
- Do not place colored backgrounds (purple, green, yellow) behind large content sections — only #2a222b, #faf9fb, #f5f3f6, and #ffffff are valid section backgrounds
- Do not set display headlines without negative letter-spacing — Tobias at -0em tracking reads archaic; the tightened tracking is what makes it feel contemporary

### Layout

Max-width 1536px, centered with horizontal padding of 48px. Hero is full-bleed #2a222b with centered text stack — eyebrow label, display headline, body copy, CTA, all center-aligned. Below hero: alternating cream (#faf9fb) and slightly tinted (#f5f3f6) bands with 64px vertical padding each. Content sections use a two-column split: text left (heading + body + CTA), product visual right. The integrations section breaks into a multi-row logo grid (6-7 columns) with a centered heading above. Navigation is a fixed-height (~72px) sticky top bar with logo left, centered links, auth buttons right. Section rhythm is consistent: eyebrow → large heading → body → CTA, with 16px gaps between stacked text elements and 48px gap before the CTA.

### Imagery

Product UI screenshots are the primary visual content — shown inside 24px-radius containers with lavender-tinted (#f9f2fd) backgrounds, not floating freely. No lifestyle photography on the main marketing page. Integration logos are displayed as monochrome marks inside white rounded-rectangle pills, neutralizing their varied brand colors into a cohesive grid. Icons use a thin outlined style consistent with TWK Lausanne's light stroke character. Imagery is purely explanatory — every visual element depicts the product interface, not aspirational context. Image density is low: each section has at most one product preview, occupying roughly half the column width in a two-column layout, with generous whitespace dominating.

### Elevation

Typeform avoids box-shadows entirely. Elevation and depth are conveyed through background color progression: #2a222b → #3e3040 for dark layers, #faf9fb → #f5f3f6 → #ffffff for light layers. The dark-to-light section alternation IS the elevation system — a card on a cream background uses white to lift off the surface, not a shadow.

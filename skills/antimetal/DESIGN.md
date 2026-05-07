---
version: alpha
name: "Antimetal"
description: "Antimetal operates in two visual modes that coexist on one page: a deep navy-to-electric-blue hero that feels like staring into a server rack at night, and a near-white #f8f9fc product surface that reads like a technical dashboard in daylight. The transition between these modes is dramatic and intentional — dark atmospheric entry, then immediate pivot to a light, data-dense product UI. The single color that bridges both modes is a vivid chartreuse (#d0f100) used exclusively on primary CTAs, creating an almost jarring contrast against both the dark hero and the light product surface. Typography is custom throughout: abcdFont handles all UI at tight tracking (-0.016em), while ivarTextFont with OpenType alternates takes headlines at display sizes, giving the largest text a slightly editorial, high-craft quality uncommon in infrastructure tooling. Elevation is achieved through layered blue-tinted shadows (rgba(0,39,80,...)) rather than dark fills, so even raised surfaces feel part of the same chromatic family."
theme: "mixed"
industry: "devtools"
source_url: "https://antimetal.com"
refero_style_id: "9f9a4a4f-1a27-47ca-a65b-68b9850a84e4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777506947507-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777506947507-thumb.jpg"
extracted_at: "2026-04-29T23:58:04.471Z"
---

# Antimetal — Style Reference

> Electric storm over a blueprint — vivid neon signal cutting through deep navy atmosphere, then snapping to precise technical daylight.

**Theme:** mixed

**Industry:** devtools

Antimetal operates in two visual modes that coexist on one page: a deep navy-to-electric-blue hero that feels like staring into a server rack at night, and a near-white #f8f9fc product surface that reads like a technical dashboard in daylight. The transition between these modes is dramatic and intentional — dark atmospheric entry, then immediate pivot to a light, data-dense product UI. The single color that bridges both modes is a vivid chartreuse (#d0f100) used exclusively on primary CTAs, creating an almost jarring contrast against both the dark hero and the light product surface. Typography is custom throughout: abcdFont handles all UI at tight tracking (-0.016em), while ivarTextFont with OpenType alternates takes headlines at display sizes, giving the largest text a slightly editorial, high-craft quality uncommon in infrastructure tooling. Elevation is achieved through layered blue-tinted shadows (rgba(0,39,80,...)) rather than dark fills, so even raised surfaces feel part of the same chromatic family.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Navy | #1b2540 | `--color-midnight-navy` | Primary text, heading color on light surfaces, nav text, icon fills, input text, border color across cards and form elements — the structural ink of the entire light-mode UI |
| Deep Cosmos | #001033 | `--color-deep-cosmos` | Blue action color for filled buttons, selected navigation states, and focused conversion moments. |
| Chartreuse Pulse | #d0f100 | `--color-chartreuse-pulse` | Green action color for filled buttons, selected navigation states, and focused conversion moments. |
| Ice Veil | #e0f6ff | `--color-ice-veil` | Ghost button borders in dark hero mode, subtle icon stroke tints, very-light atmospheric surface wash in the hero region |
| Ghost Canvas | #f8f9fc | `--color-ghost-canvas` | Primary page background, card fill for feature sections, section backgrounds in the light product UI |
| Pure Surface | #ffffff | `--color-pure-surface` | Elevated card surfaces above the ghost canvas — product UI cards, floating pill badges, modal-level surfaces |
| Slate Ink | #6b7184 | `--color-slate-ink` | Secondary body text, muted labels, icon fills at reduced emphasis |
| Ash Medium | #7c8293 | `--color-ash-medium` | Tertiary text, hairline border fills, subtle strokes on dividers and icon outlines |
| Storm Gray | #596075 | `--color-storm-gray` | Mid-tone text in body copy within darker surface contexts, muted border strokes |
| Fog Border | #b1b5c0 | `--color-fog-border` | Hairline borders on buttons and cards in the light theme, icon stroke at minimum visibility |
| Hero Gradient | #0050f8 | `--color-hero-gradient` | Full-bleed hero background — dark navy at top fading through electric blue to lighter cyan near bottom, creating depth behind the dot-pattern globe illustration |
| Blue Glow Radial | #0080f8 | `--color-blue-glow-radial` | Supporting palette color for small decorative accents when the core palette needs contrast. |

## Tokens — Typography

### abcdFont

- **Token:** `--font-abcdfont`
- **Substitute:** Inter Variable or DM Sans
- **Weights:** 400, 450, 480
- **Sizes:** 13px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 24px, 28px
- **Line heights:** 1.00–1.60 depending on size (tighter at larger sizes)
- **Letter spacing:** -0.016em at smallest sizes, -0.015em mid-range, -0.010em at 20-24px, -0.005em at 28px
- **Role:** All UI text: navigation, buttons, body copy, labels, badges, inputs, card headings up to 28px. The weight range 400–480 is narrower than most variable fonts use — 480 acts as a 'medium' without the visual jump of a true 600 bold, giving the UI a composed, unshowy density. Used with tight tracking (-0.016em to -0.005em) at all sizes.

### ivarTextFont

- **Token:** `--font-ivartextfont`
- **Substitute:** Freight Display Pro or Fraunces
- **Weights:** 400
- **Sizes:** 32px, 40px, 46px, 48px
- **Line heights:** 1.04–1.25
- **Letter spacing:** -0.010em uniformly across all display sizes
- **OpenType features:** "ss04", "ss06", "ss09", "ss10", "ss11"
- **Role:** Hero and section display headlines exclusively. At weight 400 with OpenType features ss04/ss06/ss09/ss10/ss11 active, this serif alternative adds a high-craft editorial quality that contrasts sharply with the utilitarian sans UI — infrastructure tooling brands almost never use a serif at display scale, making this a signature differentiator.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1 | -0.21px | `--text-caption` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 18px | 1.33 | -0.09px | `--text-subheading` |
| heading-sm | 22px | 1.29 | -0.22px | `--text-heading-sm` |
| heading | 28px | 1.17 | -0.14px | `--text-heading` |
| heading-lg | 40px | 1.05 | -0.4px | `--text-heading-lg` |
| display | 48px | 1.04 | -0.48px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-129 | 129px | `--spacing-129` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-201 | 201px | `--spacing-201` |
| spacing-214 | 214px | `--spacing-214` |
| spacing-232 | 232px | `--spacing-232` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 20px |
| badges | 16px |
| inputs | 0px |
| buttons | 9999px |
| pillLarge | 60px |
| cardsSmall | 6px |
| cardsMedium | 16px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px | `--shadow-xl` |
| xl-2 | rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset | `--shadow-xl-2` |
| xl-3 | rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px | `--shadow-xl-3` |
| xl-4 | color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset | `--shadow-xl-4` |
| xl-5 | rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px | `--shadow-xl-5` |
| xl-6 | rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset | `--shadow-xl-6` |
| xl-7 | rgba(255, 255, 255, 0.88) 0px 1px 1px 0px inset, rgba(0, 39, 80, 0.04) 0px 48px 72px -12px, rgba(0, 39, 80, 0.03) 0px 28px 40px 0px, rgba(0, 39, 80, 0.02) 0px 4px 12px 0px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px | `--shadow-xl-7` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80px |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Chartreuse CTA Button

**Role:** Primary conversion action — 'Book a demo', 'Start saving time'

Pill shape (radius 9999px), #d0f100 fill, #1b2540 text at abcdFont 15px weight 480, padding 0 24px, vertical height ~40px. Shadow stack: rgba(24,37,66,0.32) 0px 1px 3px, rgba(24,37,66,0.44) 0px 12px 24px -12px with inset ice highlights rgba(219,247,255,0.48) 0px 0.5px 0.5px. The bright yellow-green against dark navy in the hero creates a stop-sign level of contrast unusual for infrastructure SaaS.

### Dark Ghost Button

**Role:** Secondary action on dark hero — navigation items, 'Log in'

Pill shape (radius 9999px), transparent fill (#rgba(0,0,0,0)), #fafeff text and border, padding 0 12px. Inset white glow: rgba(255,255,255,0.08) 0px 0px 16px 8px inset layered 4x. Used exclusively against the dark hero gradient.

### Light Ghost Button

**Role:** Secondary action on light surface — 'Explore', inline CTAs

Pill shape (radius 9999px), transparent fill, #1b2540 text and border, padding 8px 24px. Border drawn via box-shadow: rgba(255,255,255,0.72) 0px 1px 1px inset, rgba(4,33,80,0.04) 0px 0px 0px 1px. Sits on #f8f9fc canvas.

### Dark Solid Button

**Role:** Tertiary dark-mode CTA — 'Book a demo' nav variant on dark header

Pill shape (radius 9999px), #001033 fill, #fafeff text. Zero padding variant — height determined by content. Used in the sticky nav against the dark hero background.

### Feature Card (Elevated)

**Role:** Primary product UI showcase card in light sections

radius 20px, #ffffff fill, shadow: rgba(0,39,80,0.03) 0px 56px 72px -16px, rgba(0,39,80,0.03) 0px 32px 32px -16px, rgba(0,39,80,0.04) 0px 6px 12px -3px, rgba(0,39,80,0.04) 0px 0px 0px 1px. The outermost 1px ring shadow acts as a border substitute — no explicit border-color needed.

### Section Background Card

**Role:** Content grouping surface in light feature sections

radius 16px, #f8f9fc fill, no shadow. Appears as a slightly-recessed container on the white page background, relying on the 1-step gray difference (#f8f9fc vs #ffffff) for separation.

### Code / Data Chip

**Role:** Inline code references, small data containers

radius 6px, rgba(12,38,77,0.02) fill, no shadow. Used for monospace-adjacent labels inside product UI illustrations. Nearly invisible background — purely structural grouping.

### Badge Pill (Floating)

**Role:** Status labels, category tags — 'Urgent', 'Production', alert count badges

radius 16px, rgba(255,255,255,0.01) fill, #1b2540 text at 14px, padding 12px 20px 12px 12px. Shadow: rgba(0,39,80,0.08) 0px 6px 16px -3px, rgba(0,39,80,0.04) 0px 0px 0px 1px. The outer 1px shadow ring creates the border; the heavy-ish vertical shadow makes these float visibly above the product canvas.

### Announcement Banner Pill

**Role:** Top-of-page product announcement — 'New / Introducing...' link

Pill shape (radius 9999px), #ffffff fill with inset white highlight rgba(255,255,255,0.88) 0px 1px 1px, outer shadow rgba(0,39,80,0.04) 0px 0px 0px 1px as border ring. Sits centered above the hero headline. Contains a 'New' label chip + announcement text in abcdFont 14px.

### Sidebar Navigation Icon

**Role:** Vertical product sidebar — icon-only navigation in the product UI

No visible text labels in collapsed state. Icons at ~24px in #6b7184 stroke color. Active icon gets the Chartreuse Pulse (#d0f100) fill background chip. Spacing between icons: 8px gaps.

### Text Input

**Role:** Form fields — email or search inputs

radius 0px (sharp corners), transparent background, #1b2540 text and border color, padding 15px 20px. The zero-radius inputs contrast with the otherwise all-pill UI, suggesting form contexts are intentionally more austere than action contexts.

## Do's and Don'ts

### Do

- Use 9999px radius on ALL buttons and interactive pill elements — this applies across both dark and light surfaces without exception.
- Reserve #d0f100 exclusively for the primary CTA fill; never use it for decorative elements, icons, or backgrounds other than action buttons.
- Apply blue-tinted shadows using rgba(0,39,80,...) for all card elevation — never use neutral black-based shadows like rgba(0,0,0,...) on light surfaces.
- Use ivarTextFont with font-feature-settings 'ss04','ss06','ss09','ss10','ss11' only at 32px and above; abcdFont handles everything below 32px.
- Maintain the hero-to-light transition as the singular dark section — subsequent sections stay on #f8f9fc with #ffffff elevated cards; do not add additional dark bands.
- Apply letter-spacing -0.016em to -0.005em on abcdFont across all sizes; avoid default browser tracking which makes the type feel unset.
- Use the 1px outer shadow ring (rgba(0,39,80,0.04) 0px 0px 0px 1px) as a border substitute on cards and badges — avoid explicit border-color properties.

### Don't

- Don't use #d0f100 in hero sections or dark backgrounds for decorative illustration fills — it appears only as a filled button background.
- Don't apply radius other than 9999px to buttons — even small utility buttons in the product UI use the pill shape.
- Don't mix ivarTextFont into body copy or UI labels below 32px; the serif is strictly a display instrument.
- Don't use more than two surface levels in light sections (#f8f9fc canvas + #ffffff card) — the design system has almost no mid-tone fill colors between these two steps.
- Don't create dark sections beyond the hero; the page's rhythm depends on a single dramatic dark entry followed by sustained light product canvas.
- Don't use black-based text (#000000 or near-black) — all text is #1b2540, even at maximum emphasis, preserving the blue-navy chromatic identity in the type.
- Don't set input borders to rounded — inputs use 0px radius by design, creating deliberate contrast against the pill-heavy button and badge language.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Hero Dark Canvas | #001033 | Full-bleed dark hero; behind the blue gradient — deepest surface, seen only in the top section |
| 1 | Ghost Canvas | #f8f9fc | Primary page background for all light content sections below the hero fold |
| 2 | Pure Surface | #ffffff | Elevated product UI cards, floating panels, announcement pill backgrounds |
| 3 | Data Chip Surface | #0c264d05 | Barely-there tint for code chips and inline data containers — almost invisible, only perceived against white |

## Elevation

- **Feature Card (Elevated):** `rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px`
- **Badge Pill (Floating):** `rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px`
- **Light Ghost Button:** `rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px`
- **Chartreuse CTA Button:** `rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset`
- **Dark Ghost Button:** `rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset`

## Imagery

The hero section uses a large, glowing dot-matrix globe illustration rendered in white dots on the blue gradient — abstract, technical, zero-lifestyle photography. It evokes network topology or infrastructure mapping without showing any literal servers or people. Below the hero, the product UI itself is the imagery: cropped dashboard screenshots showing the Antimetal interface with sidebar navigation, issue detail panels, and alert badge flows. These are contained within rounded-corner cards (20px radius) at modest scale, suggesting real product depth without overwhelming. Small decorative illustrations appear in feature sections — simple flat icons with green/orange/blue fills for 'Fix' and 'Prevent' concepts. Icon style is outlined with moderate stroke weight, monochrome in most contexts, occasionally using brand-accent fills for active states. The overall balance is heavily text-and-UI-dominant; decorative imagery exists purely to contextualize the product, not as atmospheric surface treatment.

## Layout

Max-width approximately 1200px, centered. The hero is full-bleed dark spanning the full viewport height with the gradient from deep navy to electric blue — headline and CTA are centered over the dot-globe illustration. Below the fold, the page switches to the #f8f9fc light canvas with generous vertical section gaps (~80px). Feature sections use alternating 2-column layouts (text-left / product-screenshot-right, then reversed) rather than full-width stacks. Product UI showcase cards occupy roughly 60% of the viewport width when shown in context. A 3-column icon+text feature grid appears in the 'Ship more, break less' section. Navigation is a top sticky bar: logo left, center nav links (Platform, Resources, Pricing, Careers), right side 'Log in' ghost + 'Book a demo' pill. The nav bar uses the same dark navy (#001033) as the hero, becoming a transparent overlay that only distinguishes itself via the nav items.

## Similar Brands

- **Linear** — Same deep navy + near-white two-mode layout with a single vivid accent color (Linear uses violet, Antimetal uses chartreuse) and custom variable font with tight negative tracking
- **Vercel** — Infrastructure-focused dark hero snapping to light product canvas, with UI-screenshot-as-hero-imagery and minimal decorative color
- **Incident.io** — Same devops-incident-management product category, same pill button + dark header + light product UI layout pattern
- **Grafana** — Dark hero atmosphere with bright single accent CTA against deep blue background, targeting infrastructure and observability audience
- **Datadog** — Blue-dominant brand palette with near-white product surface, dashboard-screenshot-as-feature-imagery, technical dense information layout

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-navy: #1b2540;
  --color-deep-cosmos: #001033;
  --color-chartreuse-pulse: #d0f100;
  --color-ice-veil: #e0f6ff;
  --color-ghost-canvas: #f8f9fc;
  --color-pure-surface: #ffffff;
  --color-slate-ink: #6b7184;
  --color-ash-medium: #7c8293;
  --color-storm-gray: #596075;
  --color-fog-border: #b1b5c0;
  --color-hero-gradient: #0050f8;
  --color-blue-glow-radial: #0080f8;
  --font-abcdfont: 'abcdFont', Inter Variable or DM Sans;
  --font-ivartextfont: 'ivarTextFont', Freight Display Pro or Fraunces;
  --text-caption: 13px;
  --leading-caption: 1;
  --tracking-caption: -0.21px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.09px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.29;
  --tracking-heading-sm: -0.22px;
  --text-heading: 28px;
  --leading-heading: 1.17;
  --tracking-heading: -0.14px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.4px;
  --text-display: 48px;
  --leading-display: 1.04;
  --tracking-display: -0.48px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-129: 129px;
  --spacing-160: 160px;
  --spacing-201: 201px;
  --spacing-214: 214px;
  --spacing-232: 232px;
  --radius-cards: 20px;
  --radius-badges: 16px;
  --radius-inputs: 0px;
  --radius-buttons: 9999px;
  --radius-pilllarge: 60px;
  --radius-cardssmall: 6px;
  --radius-cardsmedium: 16px;
  --shadow-xl: rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset;
  --shadow-xl-3: rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl-4: color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset;
  --shadow-xl-5: rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl-6: rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset;
  --shadow-xl-7: rgba(255, 255, 255, 0.88) 0px 1px 1px 0px inset, rgba(0, 39, 80, 0.04) 0px 48px 72px -12px, rgba(0, 39, 80, 0.03) 0px 28px 40px 0px, rgba(0, 39, 80, 0.02) 0px 4px 12px 0px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --surface-hero-dark-canvas: #001033;
  --surface-ghost-canvas: #f8f9fc;
  --surface-pure-surface: #ffffff;
  --surface-data-chip-surface: #0c264d05;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-navy: #1b2540;
  --color-deep-cosmos: #001033;
  --color-chartreuse-pulse: #d0f100;
  --color-ice-veil: #e0f6ff;
  --color-ghost-canvas: #f8f9fc;
  --color-pure-surface: #ffffff;
  --color-slate-ink: #6b7184;
  --color-ash-medium: #7c8293;
  --color-storm-gray: #596075;
  --color-fog-border: #b1b5c0;
  --color-hero-gradient: #0050f8;
  --color-blue-glow-radial: #0080f8;
  --font-abcdfont: 'abcdFont', Inter Variable or DM Sans;
  --font-ivartextfont: 'ivarTextFont', Freight Display Pro or Fraunces;
  --text-caption: 13px;
  --leading-caption: 1;
  --tracking-caption: -0.21px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.09px;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.29;
  --tracking-heading-sm: -0.22px;
  --text-heading: 28px;
  --leading-heading: 1.17;
  --tracking-heading: -0.14px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.05;
  --tracking-heading-lg: -0.4px;
  --text-display: 48px;
  --leading-display: 1.04;
  --tracking-display: -0.48px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-38: 38px;
  --spacing-50: 50px;
  --spacing-54: 54px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-129: 129px;
  --spacing-160: 160px;
  --spacing-201: 201px;
  --spacing-214: 214px;
  --spacing-232: 232px;
  --radius-cards: 20px;
  --radius-badges: 16px;
  --radius-inputs: 0px;
  --radius-buttons: 9999px;
  --radius-pilllarge: 60px;
  --radius-cardssmall: 6px;
  --radius-cardsmedium: 16px;
  --shadow-xl: rgba(0, 39, 80, 0.08) 0px 6px 16px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(255, 255, 255, 0.08) 0px 0px 16px 8px inset, rgba(255, 255, 255, 0.08) 0px 0px 8px 4px inset, rgba(255, 255, 255, 0.08) 0px 0px 4px 2px inset, rgba(255, 255, 255, 0.12) 0px 0px 2px 1px inset;
  --shadow-xl-3: rgba(255, 255, 255, 0.72) 0px 1px 1px 0px inset, rgba(4, 33, 80, 0.02) 0px 8px 16px 0px, rgba(4, 33, 80, 0.03) 0px 4px 12px 0px, rgba(4, 33, 80, 0.06) 0px 1px 2px 0px, rgba(4, 33, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl-4: color(srgb 0.878431 0.964706 1 / 0.24) 0px 0.5px 0.5px 0px inset, color(srgb 0.878431 0.964706 1 / 0.24) 0px -0.5px 0.5px 0px inset;
  --shadow-xl-5: rgba(0, 39, 80, 0.03) 0px 56px 72px -16px, rgba(0, 39, 80, 0.03) 0px 32px 32px -16px, rgba(0, 39, 80, 0.04) 0px 6px 12px -3px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --shadow-xl-6: rgba(24, 37, 66, 0.32) 0px 1px 3px 0px, rgba(24, 37, 66, 0.12) 0px 0.5px 0.5px 0px, rgba(24, 37, 66, 0.44) 0px 12px 24px -12px, rgba(219, 247, 255, 0.06) 0px 8px 16px 0px inset, rgba(219, 247, 255, 0.48) 0px 0.5px 0.5px 0px inset, rgba(219, 247, 255, 0.04) 0px -4px 8px 0px inset, rgba(219, 247, 255, 0.24) 0px -0.5px 0.5px 0px inset;
  --shadow-xl-7: rgba(255, 255, 255, 0.88) 0px 1px 1px 0px inset, rgba(0, 39, 80, 0.04) 0px 48px 72px -12px, rgba(0, 39, 80, 0.03) 0px 28px 40px 0px, rgba(0, 39, 80, 0.02) 0px 4px 12px 0px, rgba(0, 39, 80, 0.04) 0px 0px 0px 1px;
  --surface-hero-dark-canvas: #001033;
  --surface-ghost-canvas: #f8f9fc;
  --surface-pure-surface: #ffffff;
  --surface-data-chip-surface: #0c264d05;
}
```

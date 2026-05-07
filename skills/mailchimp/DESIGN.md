---
version: alpha
name: "Mailchimp"
description: "Mailchimp's visual language feels like a vintage newspaper printing house that discovered electric color — warm near-black (#231e15) dominates nearly every surface and typographic element, while a single voltage-yellow (#ffe01b) CTA button commands every page. The type system splits between Graphik Web (a geometric sans at tight -0.013em tracking) for all body/UI text and Means Web (a display serif-adjacent face at -0.021em) for headlines — a newspaper/magazine editorial duality that's rare in SaaS. Cards are flatly borderless or carry a soft warm shadow (rgba(35,30,21,0.15)), never the blue-tinted floating shadows common to other platforms. Section backgrounds alternate between #ffffff, #f5f5f5, the warm cream #ebe1cd, and near-black #231e15, creating a banded editorial rhythm. The pill CTA (26px radius, yellow fill, dark stroke, dark text) is the one rounded form in a system that otherwise uses 3px or zero radius everywhere."
theme: "light"
industry: "saas"
source_url: "https://mailchimp.com"
refero_style_id: "24929007-7e62-4c96-a940-7de65438a578"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935149330-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935149330-thumb.jpg"
extracted_at: "2026-04-11T19:20:50.339Z"
---

# Mailchimp — Style Reference

> Vintage press meets electric yellow — an editorial print house with one neon switch.

**Theme:** light

**Industry:** saas

Mailchimp's visual language feels like a vintage newspaper printing house that discovered electric color — warm near-black (#231e15) dominates nearly every surface and typographic element, while a single voltage-yellow (#ffe01b) CTA button commands every page. The type system splits between Graphik Web (a geometric sans at tight -0.013em tracking) for all body/UI text and Means Web (a display serif-adjacent face at -0.021em) for headlines — a newspaper/magazine editorial duality that's rare in SaaS. Cards are flatly borderless or carry a soft warm shadow (rgba(35,30,21,0.15)), never the blue-tinted floating shadows common to other platforms. Section backgrounds alternate between #ffffff, #f5f5f5, the warm cream #ebe1cd, and near-black #231e15, creating a banded editorial rhythm. The pill CTA (26px radius, yellow fill, dark stroke, dark text) is the one rounded form in a system that otherwise uses 3px or zero radius everywhere.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Press Black | #231e15 | `--color-press-black` | Primary text, headings, button borders, backgrounds of dark sections — the near-black with a warm brown undertone that prevents harshness and reads as ink rather than void |
| Voltage Yellow | #ffe01b | `--color-voltage-yellow` | Primary CTA buttons and nav 'Iniciar gratis' — one saturated hit of color on an otherwise near-monochrome page; impossible to miss without competing for dominance |
| Teal Ink | #004e56 | `--color-teal-ink` | Links, icon fills, image accents — muted teal provides navigational contrast against warm-neutral backgrounds without reading as a generic blue |
| Warm Parchment | #ebe1cd | `--color-warm-parchment` | Section backgrounds for GDPR and feature callout bands — warm cream that reads as aged newsprint, warmer than gray |
| Sand Footer | #e7b75f | `--color-sand-footer` | Footer background — deeper gold-tan that anchors the page base with warmth |
| Ash White | #f5f5f5 | `--color-ash-white` | Card backgrounds, secondary section fills |
| Pure White | #ffffff | `--color-pure-white` | Page backgrounds, card surfaces, reversed text on dark sections |
| Graphite | #706d67 | `--color-graphite` | Secondary body text, captions, supporting copy |
| Warm Charcoal | #403b3b | `--color-warm-charcoal` | Tertiary text, card body copy on white surfaces |
| Silver Rule | #bcbab6 | `--color-silver-rule` | Borders, dividers, input underlines in secondary contexts |
| True Black | #000000 | `--color-true-black` | Input text, icon fills, certain border overrides at maximum contrast |

## Tokens — Typography

### Graphik Web

- **Token:** `--font-graphik-web`
- **Substitute:** Inter, Aktiv Grotesk
- **Weights:** 400, 500, 700
- **Sizes:** 11px, 13px, 14px, 16px, 20px, 24px, 32px
- **Line heights:** 1.33–1.60 for body; 1.10–1.25 for large sizes
- **Letter spacing:** -0.013em across all sizes (approx -0.21px at 16px, -0.32px at 24px)
- **OpenType features:** normal
- **Role:** All UI text: nav, buttons, body copy, captions, badges, inputs, card text. Weight 400 is default body; 500 for subheadings and emphasis; 700 sparingly for bold callouts. The tight -0.013em letter-spacing across all sizes gives even small text a compressed editorial density.

### Means Web

- **Token:** `--font-means-web`
- **Substitute:** Freight Display, Canela, Playfair Display
- **Weights:** 300, 400
- **Sizes:** 13px, 18px, 32px, 40px, 48px
- **Line heights:** 1.00–1.25 at display sizes; 1.50 at text sizes
- **Letter spacing:** -0.021em at display sizes (approx -0.84px at 40px, -1.01px at 48px); -0.012em at 18-32px
- **Role:** Display headlines and hero headings only. Weight 300 at 40-48px is the signature move — most SaaS headlines use 600-800, but this light-weight serif whispers authority at large scale. The -0.021em tracking at display sizes compresses letterforms into a tight, journalistic headline block.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.45 | — | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.25 | — | `--text-heading-sm` |
| heading | 32px | 1.2 | -0.67px | `--text-heading` |
| heading-lg | 40px | 1.2 | -0.84px | `--text-heading-lg` |
| display | 48px | 1.1 | -1.01px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-107 | 107px | `--spacing-107` |
| spacing-122 | 122px | `--spacing-122` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 32px |
| cards | 10px |
| badges | 8px |
| inputs | 0px |
| buttons | 26px |
| navItems | 3px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(35, 30, 21) 0px 0px 0px 1px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| cardPadding | 24px |
| elementGap | 8-16px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Pricing Tier Widget

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards (Dark Section)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button (Pill Yellow)

**Role:** Main conversion actions — 'Iniciar gratis', 'Iniciar prueba gratis'

Background #ffe01b, text #231e15, border 1px solid #231e15 (via box-shadow rgb(35,30,21) 0 0 0 1px), border-radius 26px, padding 12px 24px. Graphik Web 500 at 16px. The yellow fill with dark border creates a physical 'printed label' impression — the stroke is what makes it feel tactile rather than digital.

### Ghost Navigation Button

**Role:** Secondary actions like 'Inicia sesión', dropdown triggers

Background transparent, text #231e15, border 1px solid #231e15 (via box-shadow), border-radius 3px, padding 8px. Graphik Web 400 at 14px. The near-zero radius and transparent fill make these nearly invisible alongside the yellow CTA — intentional hierarchy.

### Arrow Link (Inline CTA)

**Role:** Section-level 'learn more' navigation — 'Aprende sobre el marketing por SMS →'

Text color #231e15 or #ffffff on dark backgrounds. Graphik Web 500 at 16px. Paired with a circular yellow arrow badge (26px diameter, #ffe01b background, border-radius 32px). On hover, background hint rgba(255,224,27,0.65) appears under text — a yellow wash rather than underline.

### Feature Card (Dark Section)

**Role:** 3-column feature grid cards on #231e15 backgrounds

Background transparent (rgba(0,0,0,0)), no border, no shadow, border-radius 0px, no padding. Image thumbnail at top (border-radius 10px), heading in Means Web 300 at 24px white, body in Graphik Web 400 at 16px rgba(255,255,255,0.65). Cards are pure content containers with no visual frame — the dark section background is the container.

### Elevated White Card

**Role:** Pricing widget, form containers that float over backgrounds

Background #ffffff, border-radius 0px, box-shadow rgba(35,30,21,0.15) 0px 0px 20px 3px, padding 24px 16px. The warm-tinted shadow (not blue-gray) keeps elevation on-brand. Zero radius on white card creates a printed invoice feel.

### Rounded Content Card

**Role:** Product screenshot previews, integration tiles

Background #ffffff or #f5f5f5, border-radius 10px, no shadow, padding 8px. Graphik Web 400 at 13-14px. Used to frame UI screenshots and app logos — the 10px radius is the maximum curvature in the system outside pill buttons.

### Dark Badge / Pill Tag

**Role:** Labels like 'Prueba sin riesgo', section labels

Background #231e15, text #ffffff, border-radius 8px, padding 4px 12px. Graphik Web 500 at 13px. The near-black fill mirrors the headline color — tags feel stamped, not digital.

### Underline Input Field

**Role:** Forms, contact inputs, newsletter signup

Background transparent, border-radius 0px, border-bottom 1px solid #231e15 (or #000000), text #231e15, padding 8px 0px. No visible side or top borders — a ruled-line aesthetic that matches the editorial print vocabulary.

### Announcement Bar

**Role:** Top-of-page promotional strip

Background #231e15, text #ffffff at 13px Graphik Web 400, centered. Link text in #ffe01b or underlined white. Full-width, 42px tall. The bar uses the same near-black as body text — continuity without a competing color.

### Sticky Navigation Bar

**Role:** Primary site navigation

Background #ffffff, height 68px, bottom border none. Mailchimp wordmark left, nav links in Graphik Web 400 16px #231e15 with chevrons for dropdowns, phone number right, then ghost button 'Inicia sesión', then pill yellow 'Iniciar gratis'. Max contrast between ghost and filled buttons enforces single primary action.

### Pricing Tier Widget

**Role:** Plan selection with contact slider and CTA

White elevated card (box-shadow rgba(35,30,21,0.15) 0 0 20px 3px), padding 24px. Plan name in Means Web 300 32px #231e15, price in Means Web 300 48px #231e15 with -1.01px letter-spacing. Radio inputs with #231e15 accent. CTA uses Primary Pill Yellow Button component. Border-radius 0px on the card itself.

## Do's and Don'ts

### Do

- Use #ffe01b with 1px solid #231e15 border (box-shadow 0 0 0 1px) and 26px border-radius for every primary CTA button
- Set display headlines in Means Web 300 at 40-48px with letter-spacing -0.021em (~-1.0px at 48px)
- Alternate section backgrounds in this sequence for multi-section pages: #ffffff → #231e15 → #ffffff → #f5f5f5 → #ebe1cd
- Apply warm shadow rgba(35,30,21,0.15) 0px 0px 20px 3px only to cards that need to float above a background — never use blue-gray box shadows
- Keep inputs as underline-only (border-bottom 1px solid #231e15, no side borders, border-radius 0px) to maintain the ruled-paper editorial feel
- Use Graphik Web at -0.013em letter-spacing for all body and UI text — never set Graphik at default (0) tracking
- Apply #004e56 teal exclusively to hyperlinks and icon fills — never as a button or badge background

### Don't

- Never use border-radius above 26px (pill) for buttons or above 10px for cards — the system has no fully circular UI elements outside icon badges
- Never introduce a second saturated accent color — #ffe01b is the only vivid color; adding blue, green, or red CTAs breaks the single-signal hierarchy
- Never use Means Web for body copy or UI labels — it exists only for display headlines at 32px and above
- Never render shadows in cool/blue tones like rgba(50,50,93,0.25) — all shadows must be warm-tinted using #231e15 as the shadow base color
- Never place white or light-colored CTA buttons on white backgrounds — the yellow-on-white contrast (15.9:1) is the system's designed pairing; ghost buttons on white are for secondary actions only
- Never track out (positive letter-spacing) any text — the system uses exclusively negative tracking on both typefaces
- Never use flat gray (#9e9e9 range) text — use #706d67 as the minimum secondary text color to maintain the warm-neutral palette

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| 1 | Page Base | #ffffff | Primary section backgrounds, hero area |
| 2 | Soft Gray | #f5f5f5 | Alternate section backgrounds, card fills |
| 3 | Warm Parchment | #ebe1cd | Feature callout and compliance section bands |
| 4 | Press Black | #231e15 | Dark feature sections, announcement bar, footer overlay |
| 5 | Sand Footer | #e7b75f | Footer background — warmest surface in the system |

## Elevation

- **Shadow 1:** `rgb(35, 30, 21) 0px 0px 0px 1px`

## Imagery

Product UI screenshots are the primary visual asset — shown as contained cards with 10px border-radius, never full-bleed. Email campaign previews and automation diagrams appear inside phone/browser mockups that are themselves contained in rounded cards. Integration logos appear as a collage grid (multiple app icons on a single card). One lifestyle photography instance shows a parent and child — candid, warmly lit. Icons are filled monochrome at 16-20px, single-color (#231e15 or #ffffff). The overall image approach is product-showcase dominant: the software IS the visual hero, not people using it. All images are contained within the card grid — no bleeds, no overlapping compositions outside the hero zone where integration logos overlap as floating circles.

## Layout

Max-width ~1200px centered on a full-bleed white page. Hero is split 50/50: left column with headline (Means Web 300 48px), subhead, CTA button, and trust badges; right column with floating product UI screenshots. Below hero, sections alternate backgrounds: white → #231e15 → white → #f5f5f5 → #ebe1cd creating a banded editorial rhythm. The dark #231e15 section uses a 3-column card grid for features. The light sections use the same 3-column grid. Pricing section is asymmetric: left 60% text content, right 40% elevated widget. Navigation is sticky top bar, full-width, with left logo, center nav links, right utility actions. Section vertical padding is approximately 80-120px. No sidebar navigation.

## Similar Brands

- **Squarespace** — Same editorial serif-for-headlines + geometric-sans-for-UI duality with single vivid accent CTA on warm-neutral backgrounds
- **Typeform** — Shares the underline-only input field convention and near-black (#231e15 range) dominant palette with one yellow accent
- **Webflow** — Alternating dark/light section banding with product UI screenshots as primary imagery rather than lifestyle photography
- **ConvertKit** — Marketing email platform with warm-neutral palette (cream/parchment backgrounds), editorial typography pairing, and minimal shadow usage
- **Notion** — Near-black as the primary brand color across text and dark sections, with a single warm-tinted shadow system and flat card surfaces

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-press-black: #231e15;
  --color-voltage-yellow: #ffe01b;
  --color-teal-ink: #004e56;
  --color-warm-parchment: #ebe1cd;
  --color-sand-footer: #e7b75f;
  --color-ash-white: #f5f5f5;
  --color-pure-white: #ffffff;
  --color-graphite: #706d67;
  --color-warm-charcoal: #403b3b;
  --color-silver-rule: #bcbab6;
  --color-true-black: #000000;
  --font-graphik-web: 'Graphik Web', Inter, Aktiv Grotesk;
  --font-means-web: 'Means Web', Freight Display, Canela, Playfair Display;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.67px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.84px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -1.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-71: 71px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-107: 107px;
  --spacing-122: 122px;
  --radius-tags: 32px;
  --radius-cards: 10px;
  --radius-badges: 8px;
  --radius-inputs: 0px;
  --radius-buttons: 26px;
  --radius-navitems: 3px;
  --shadow-xl: rgb(35, 30, 21) 0px 0px 0px 1px;
  --surface-page-base: #ffffff;
  --surface-soft-gray: #f5f5f5;
  --surface-warm-parchment: #ebe1cd;
  --surface-press-black: #231e15;
  --surface-sand-footer: #e7b75f;
}
```

### Tailwind v4

```css
@theme {
  --color-press-black: #231e15;
  --color-voltage-yellow: #ffe01b;
  --color-teal-ink: #004e56;
  --color-warm-parchment: #ebe1cd;
  --color-sand-footer: #e7b75f;
  --color-ash-white: #f5f5f5;
  --color-pure-white: #ffffff;
  --color-graphite: #706d67;
  --color-warm-charcoal: #403b3b;
  --color-silver-rule: #bcbab6;
  --color-true-black: #000000;
  --font-graphik-web: 'Graphik Web', Inter, Aktiv Grotesk;
  --font-means-web: 'Means Web', Freight Display, Canela, Playfair Display;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.25;
  --text-heading: 32px;
  --leading-heading: 1.2;
  --tracking-heading: -0.67px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.84px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -1.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-71: 71px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-107: 107px;
  --spacing-122: 122px;
  --radius-tags: 32px;
  --radius-cards: 10px;
  --radius-badges: 8px;
  --radius-inputs: 0px;
  --radius-buttons: 26px;
  --radius-navitems: 3px;
  --shadow-xl: rgb(35, 30, 21) 0px 0px 0px 1px;
  --surface-page-base: #ffffff;
  --surface-soft-gray: #f5f5f5;
  --surface-warm-parchment: #ebe1cd;
  --surface-press-black: #231e15;
  --surface-sand-footer: #e7b75f;
}
```

---
version: alpha
name: "Kit"
description: "Kit reads like a warm editorial notebook — cream-tinted parchment (#f2efe9) as the page base, heavy black headlines punching out of it at weight 700, and a single sky-blue accent (#44b1ff) that appears on CTAs and interactive highlights against the near-black (#1e1e1e). The palette is intentionally muted and hand-curated: soft pastel blocks (dusty blue, blush pink, peach, sage green) appear as section backgrounds, never as text or interaction states, making the one vivid blue feel like a highlighter on a notebook page. KitSansFont at 80px/64px in the custom weight 500 dominates hero spaces with tight -0.009em tracking, while Libre Franklin handles everything else across the content hierarchy — a two-font system where custom display and workhorse utility stay in clearly assigned lanes. Radius tokens are tight and intentional: 12px on buttons and cards, 8px on secondary UI, creating a slightly-rounded-but-serious personality that avoids both sharp corporate rigidity and bubbly consumer softness."
theme: "light"
industry: "ecommerce"
source_url: "https://kit.com"
refero_style_id: "7f7d24b9-6878-4548-82ca-a26bbf7a6f2c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934085908-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934085908-thumb.jpg"
extracted_at: "2026-04-11T19:03:33.812Z"
---

# Kit — Style Reference

> Warm creator notebook — parchment pages, highlighter-blue ink, heavy type on linen.

**Theme:** light

**Industry:** ecommerce

Kit reads like a warm editorial notebook — cream-tinted parchment (#f2efe9) as the page base, heavy black headlines punching out of it at weight 700, and a single sky-blue accent (#44b1ff) that appears on CTAs and interactive highlights against the near-black (#1e1e1e). The palette is intentionally muted and hand-curated: soft pastel blocks (dusty blue, blush pink, peach, sage green) appear as section backgrounds, never as text or interaction states, making the one vivid blue feel like a highlighter on a notebook page. KitSansFont at 80px/64px in the custom weight 500 dominates hero spaces with tight -0.009em tracking, while Libre Franklin handles everything else across the content hierarchy — a two-font system where custom display and workhorse utility stay in clearly assigned lanes. Radius tokens are tight and intentional: 12px on buttons and cards, 8px on secondary UI, creating a slightly-rounded-but-serious personality that avoids both sharp corporate rigidity and bubbly consumer softness.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Sky Marker | #44b1ff | `--color-sky-marker` | Primary CTA buttons, active nav states, inline keyword highlights — vivid blue on parchment or near-black backgrounds acts as the single highlighter across an otherwise neutral palette, directing attention without competing with any other chromatic element |
| Dust Blue | #a2d1f1 | `--color-dust-blue` | Hero and section background panels — muted blue used as an atmospheric backdrop, never for text or interaction |
| Blush Mist | #e7c9f1 | `--color-blush-mist` | Section background panels — pastel pink used decoratively to vary section rhythm |
| Peach Sand | #ffd0ad | `--color-peach-sand` | Section background panels — muted orange for alternating content band backgrounds |
| Sage Foam | #b9e9c5 | `--color-sage-foam` | Section background panels — muted green used as a decorative surface, never for semantic status |
| Amber Flag | #f2ba41 | `--color-amber-flag` | Icon fills and inline callout elements — warm yellow used sparingly for small graphic accents, not for text or backgrounds |
| Near Black | #1e1e1 | `--color-near-black` | Primary text, nav text, button text, footer text, borders on dark surfaces — near-black rather than pure black softens the contrast ceiling while still reading as definitive ink |
| Parchment | #f2efe9 | `--color-parchment` | Page background, hero section fill, card backgrounds — the defining warm-tinted base that makes the whole site feel like a printed editorial page rather than a screen |
| Chalk | #ffffff | `--color-chalk` | Card interiors, form inputs, modal surfaces, footer text on dark backgrounds |
| Fog | #e3e3e3 | `--color-fog` | All borders, dividers, input outlines — omnipresent at freq=7844, it is the connective tissue border color across every component |
| Ash | #d4d4d4 | `--color-ash` | Subdued body text, placeholder text, disabled states |

## Tokens — Typography

### KitSansFont

- **Token:** `--font-kitsansfont`
- **Substitute:** Instrument Sans, Plus Jakarta Sans
- **Weights:** 500
- **Sizes:** 14px, 18px, 48px, 56px, 64px, 80px
- **Line heights:** 0.95–1.50 (0.95 at 80px, 1.00 at 64px, 1.25 at 56px)
- **Letter spacing:** -0.72px at 80px, -0.45px at 48px, 0.35px for caps labels (0.025em)
- **Role:** Hero display headlines and large section statements only. Weight 500 is the only cut — this custom face is reserved for sizes 48px and above in practice, with 14px/18px appearing as UI labels in kit-branded contexts. At 80px with 0.95 line-height, lines stack with intentional bleed, creating visual mass. The -0.009em tracking at display sizes tightens the setting so letterforms feel cut from a single block.

### Libre Franklin

- **Token:** `--font-libre-franklin`
- **Substitute:** Libre Franklin is freely available on Google Fonts — use directly
- **Weights:** 400, 600, 700
- **Sizes:** 10px, 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.40–1.56 for body (1.50 typical), 1.25 for UI labels, 1.00 for single-line caps
- **Letter spacing:** -0.25px at 10px (-0.025em), -0.18px at 14px (-0.013em), -0.16px at 16px (-0.010em), -0.14px at 18px (-0.008em), 0.25px for 0.025em uppercase tags
- **Role:** Everything except display headlines — nav, body copy, buttons, links, captions, footer columns. Weight 700 for sub-headlines and emphasis within body text; 600 for button labels and nav items; 400 for running body text and secondary info. Negative tracking from -0.025em at small sizes to -0.008em at 20px gives all text a slightly condensed, editorial feel even at small scales. The 0.025em uppercase letter-spacing on small-caps labels creates a typewriter-tag contrast against the condensed body.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | -0.25px | `--text-caption` |
| body | 16px | 1.5 | -0.16px | `--text-body` |
| subheading | 18px | 1.56 | -0.14px | `--text-subheading` |
| heading-sm | 20px | 1.4 | -0.16px | `--text-heading-sm` |
| heading | 48px | 1.25 | -0.43px | `--text-heading` |
| heading-lg | 56px | 1.25 | -0.5px | `--text-heading-lg` |
| display | 80px | 0.95 | -0.72px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 8px |
| cards | 12px |
| inputs | 8px |
| modals | 16px |
| buttons | 12px |
| navDropdowns | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80px |
| cardPadding | 24px |
| elementGap | 16px |

## Components

### Hero Feature Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Subscriber Stats Dashboard Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button Group with Trial Note

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Main call-to-action — 'Start free trial', sign-up triggers

Background #44b1ff, text #1e1e1, border-radius 12px, padding 16px all sides. Font: Libre Franklin 600 14-16px. No border. On parchment (#f2efe9) backgrounds this creates the single chromatic pop on an otherwise neutral surface. Appears 9× as the dominant button variant.

### Ghost Navigation Button

**Role:** Secondary nav actions like 'Log in', 'Request a demo', dropdown triggers

Background transparent, text #1e1e1, border-radius 0px, no padding (inline text-style). Libre Franklin 400-600 14px. Border inherited as #e3e3e3 only when grouped. Used for non-CTA nav links that need no chrome — they read as text until hovered.

### Subtle Tinted Button

**Role:** Tertiary or grouped option buttons within content

Background oklab dark-tinted at ~8% opacity (#1e1e1 at 0.08), text #1e1e1, border-radius 8px, zero padding (tight fit). Creates a very-light pressed-surface appearance against parchment. Appears 4× as an in-content control variant.

### Text Action Button

**Role:** Inline content actions, pill-style small controls

Background transparent, text #1e1e1, border-radius 8px, padding 4px top/bottom × 8px left/right. Libre Franklin 400 14px. Minimal-chrome button for low-emphasis actions within content blocks.

### Hero Feature Card

**Role:** Below-the-fold 4-column feature summary tiles

Background #ffffff on parchment page, border 1px #e3e3e3, border-radius 12px, padding 24px. Contains a colored icon (Amber Flag #f2ba41 or Sky Marker #44b1ff), Libre Franklin 700 14-16px bold feature name inline with body weight 400 description. Light card on warm page base creates subtle lift without shadows.

### Pastel Section Background Band

**Role:** Full-bleed section backgrounds used to break page rhythm

Full-width bands using Dust Blue #a2d1f1, Blush Mist #e7c9f1, Peach Sand #ffd0ad, or Sage Foam #b9e9c5. No border, no radius (edge-to-edge). Text remains #1e1e1 throughout — contrast is always AAA (12:1+). Each band houses product screenshots or feature illustrations, never more than one pastel per consecutive section.

### Navigation Bar

**Role:** Sticky top navigation across all pages

Background #f2efe9 (parchment), height ~56px, border-bottom 1px #e3e3e3. Left: Kit wordmark #1e1e1e. Center: ghost text nav items (Features, Pricing, Use Cases, Resources) Libre Franklin 600 14px. Right: 'Log in' ghost + 'Request a demo' ghost + 'Start free trial' #44b1ff pill button at border-radius 12px, padding 16px. Entire bar shares the parchment base — no white nav-on-white convention.

### Footer Column Grid

**Role:** Site-wide footer link columns

Background #1e1e1 (near-black), text #ffffff for links, column headers in Libre Franklin 600 10-12px uppercase with 0.025em letter-spacing. Links in Libre Franklin 400 14px #ffffff. 4-column grid with 32px column gap. 'NEW' badge appears as a small Sage Foam #b9e9c5 pill tag inline with select links. Parchment logo (#f2efe9 tinted) in bottom-left.

### Testimonial / Creator Photo Strip

**Role:** Social proof imagery along the hero's right edge

Circular avatar images 40-48px diameter, stacked vertically with 4px gap, border 2px #ffffff. Float against the photographic hero background. No label text — image-only stack creates ambient trust signal without disrupting the headline hierarchy.

### NEW Badge

**Role:** Inline tag marking new features in nav and footer

Background Sage Foam #b9e9c5, text #1e1e1, border-radius 8px, padding 4px 8px. Libre Franklin 600 10px uppercase with 0.025em tracking. Appears inline after link text — not as a standalone badge but as a tight appended label.

## Do's and Don'ts

### Do

- Use #f2efe9 (Parchment) as the default page background — never pure white (#ffffff) for full-page base
- Apply #44b1ff only to primary CTA buttons and keyword highlights; all other interactive text states use #1e1e1 on transparent
- Set all button border-radius to 12px for primary actions; use 8px for secondary/tertiary controls and form inputs
- Use KitSansFont weight 500 only at 48px and above; switch to Libre Franklin for all text at 20px and below
- Apply 1px #e3e3e3 border to all cards and inputs — no shadows; elevation reads through surface color contrast alone
- Use pastel section backgrounds (Dust Blue #a2d1f1, Blush Mist #e7c9f1, Peach Sand #ffd0ad, Sage Foam #b9e9c5) for alternating content bands; limit to one per section, never consecutive same-hue bands
- Set Libre Franklin at negative letter-spacing: -0.016em at 16px, -0.013em at 14px, -0.025em at 10-12px caps labels with +0.025em for uppercase tags

### Don't

- Don't use #44b1ff as a section background or decorative fill — it exists only on interactive elements (buttons, inline highlights)
- Don't add box-shadows to cards or buttons — shadows break the flat editorial print aesthetic; use border 1px #e3e3e3 instead
- Don't use KitSansFont below 48px in display contexts; at smaller sizes it loses the structural weight that justifies its custom status
- Don't use Amber Flag (#f2ba41) for text, borders, or buttons — it is strictly an icon accent fill color
- Don't stack two consecutive pastel-background sections of the same hue — alternate with parchment (#f2efe9) or white (#ffffff) bands between
- Don't use border-radius above 16px — avoid pill/capsule shapes (9999px) entirely; the system sits between pill-free and boxy
- Don't apply the dark footer (#1e1e1e) surface to any mid-page section — it is reserved exclusively for the page-closing footer block

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Base | #f2efe9 | Default page and hero background — warm parchment that defines the editorial character |
| 1 | Card Surface | #ffffff | Form inputs, content cards, dashboard mockup overlays — reads as lifted against parchment without shadows |
| 2 | Dark Inversion | #1e1e1 | Footer only — full-bleed near-black surface that closes the page as a strong typographic terminus |

## Imagery

Kit uses portrait photography as the hero's dominant visual — waist-up shots of real creators (authors, coaches, bloggers) holding their books or products against solid-color studio backgrounds (teal, blue). The photography is warm, direct, high-key studio lit with no moody processing — subjects look at camera or slightly off, smiling, creating a peer-to-peer feeling rather than aspirational stock. Photos bleed to the card edge with a 12px radius container. Product UI screenshots appear as overlapping card overlays (dashboard metrics, sign-up pages) positioned partially over the photography, grounding the emotional imagery in functional reality. The second-screen hero section uses a darkened product screenshot as a full-panel background with a floating white card overlay — photography mixed with UI, not isolated. The testimonial strip uses tight circular avatar crops. Icon style: filled, minimal, two-tone (Sky Marker blue #44b1ff body + Amber Flag #f2ba41 accent detail), displayed at 24-32px in feature cards. Imagery density is balanced — one large photo per hero, then primarily text + UI screenshot driven below the fold.

## Layout

Max-width ~1200px centered, sections are full-bleed to viewport width with content constrained inside. The above-the-fold hero splits 50/50: left half parchment (#f2efe9) with headline + CTA, right half full-height portrait photography — no gutter between them, creating an edge-to-edge split without a grid column gap. Below the hero: alternating pastel band sections (Dust Blue, Blush Mist, Peach Sand) each containing a centered product screenshot or feature illustration with text alongside. Feature grid: 4-column card row at comfortable 24px padding each. 'Thousands of' social proof section: centered headline with keyword highlighted in Sky Marker #44b1ff, followed by a horizontal creator photo strip. Footer: dark (#1e1e1e) full-bleed 4-column link grid. Navigation is sticky top bar at 56px, parchment-colored matching the hero. Section vertical rhythm is 80px gaps between major bands. No sidebar patterns — all layouts are horizontal-grid or centered-stack.

## Similar Brands

- **Mailchimp** — Warm-tinted neutral base (Mailchimp's oat/yellow vs Kit's parchment) with single vivid accent for CTAs and heavy-weight display typography for hero headlines
- **Beehiiv** — Creator-economy email SaaS using editorial typography hierarchy and product-screenshot-as-hero approach against a light neutral page base
- **Substack** — Same creator-first positioning reflected visually: serif-adjacent heavy headlines, minimal color palette, warm neutrals over cold corporate blues
- **Ghost** — Single-accent-on-neutral palette approach (Ghost's green vs Kit's blue), photography-forward hero with stat overlay cards, dark footer contrasting light page body
- **Flodesk** — Email marketing SaaS using pastel section backgrounds for visual rhythm and portrait photography of real creators as primary hero imagery

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-sky-marker: #44b1ff;
  --color-dust-blue: #a2d1f1;
  --color-blush-mist: #e7c9f1;
  --color-peach-sand: #ffd0ad;
  --color-sage-foam: #b9e9c5;
  --color-amber-flag: #f2ba41;
  --color-near-black: #1e1e1;
  --color-parchment: #f2efe9;
  --color-chalk: #ffffff;
  --color-fog: #e3e3e3;
  --color-ash: #d4d4d4;
  --font-kitsansfont: 'KitSansFont', Instrument Sans, Plus Jakarta Sans;
  --font-libre-franklin: 'Libre Franklin', Libre Franklin is freely available on Google Fonts — use directly;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: -0.25px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: -0.14px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.16px;
  --text-heading: 48px;
  --leading-heading: 1.25;
  --tracking-heading: -0.43px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.5px;
  --text-display: 80px;
  --leading-display: 0.95;
  --tracking-display: -0.72px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --radius-tags: 8px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-modals: 16px;
  --radius-buttons: 12px;
  --radius-navdropdowns: 12px;
  --surface-page-base: #f2efe9;
  --surface-card-surface: #ffffff;
  --surface-dark-inversion: #1e1e1;
}
```

### Tailwind v4

```css
@theme {
  --color-sky-marker: #44b1ff;
  --color-dust-blue: #a2d1f1;
  --color-blush-mist: #e7c9f1;
  --color-peach-sand: #ffd0ad;
  --color-sage-foam: #b9e9c5;
  --color-amber-flag: #f2ba41;
  --color-near-black: #1e1e1;
  --color-parchment: #f2efe9;
  --color-chalk: #ffffff;
  --color-fog: #e3e3e3;
  --color-ash: #d4d4d4;
  --font-kitsansfont: 'KitSansFont', Instrument Sans, Plus Jakarta Sans;
  --font-libre-franklin: 'Libre Franklin', Libre Franklin is freely available on Google Fonts — use directly;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: -0.25px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.56;
  --tracking-subheading: -0.14px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.4;
  --tracking-heading-sm: -0.16px;
  --text-heading: 48px;
  --leading-heading: 1.25;
  --tracking-heading: -0.43px;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.25;
  --tracking-heading-lg: -0.5px;
  --text-display: 80px;
  --leading-display: 0.95;
  --tracking-display: -0.72px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --radius-tags: 8px;
  --radius-cards: 12px;
  --radius-inputs: 8px;
  --radius-modals: 16px;
  --radius-buttons: 12px;
  --radius-navdropdowns: 12px;
  --surface-page-base: #f2efe9;
  --surface-card-surface: #ffffff;
  --surface-dark-inversion: #1e1e1;
}
```

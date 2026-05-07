---
version: alpha
name: "Panxo"
description: "Panxo reads like a financial data terminal wearing a startup's wardrobe — numbers and metrics front and center, but the palette stays warm cream and near-black rather than cold blue. The base surface is #fafafa pushing toward #f7f3eb (a barely-warm off-white), while the primary text mass is the rich near-black #1c1a17 — warmer than pure black, almost coffee. The hero visualization uses a candy-colored gradient (teal → violet → amber) as its only splash of chromatic energy against otherwise achromatic structure. Mona Sans at weight 700 and aggressive negative tracking (-0.04em at 56px) makes headlines feel compressed and purposeful — data labels rather than declarations. Interactive elements use a single deep orange (#ff6020) for CTAs, distinct from the violet data-highlight colors (#777eff, #731fff) used for semantic classification signals inside UI demos."
theme: "light"
industry: "other"
source_url: "https://panxo.com"
refero_style_id: "8b5cfe6d-a2bd-4edb-854e-9185cec46c09"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775990537818-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775990537818-thumb.jpg"
extracted_at: "2026-04-12T10:44:29.583Z"
---

# Panxo — Style Reference

> Data terminal in warm ink — every surface echoes ledger paper, every accent reads like a highlighted cell.

**Theme:** light

**Industry:** other

Panxo reads like a financial data terminal wearing a startup's wardrobe — numbers and metrics front and center, but the palette stays warm cream and near-black rather than cold blue. The base surface is #fafafa pushing toward #f7f3eb (a barely-warm off-white), while the primary text mass is the rich near-black #1c1a17 — warmer than pure black, almost coffee. The hero visualization uses a candy-colored gradient (teal → violet → amber) as its only splash of chromatic energy against otherwise achromatic structure. Mona Sans at weight 700 and aggressive negative tracking (-0.04em at 56px) makes headlines feel compressed and purposeful — data labels rather than declarations. Interactive elements use a single deep orange (#ff6020) for CTAs, distinct from the violet data-highlight colors (#777eff, #731fff) used for semantic classification signals inside UI demos.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Coal Ink | #1c1a17 | `--color-coal-ink` | Primary text, filled CTA button background, dark card surface — warmer than pure black, prevents the page from reading as cold despite high contrast |
| Ledger White | #fafafa | `--color-ledger-white` | Page background, card surfaces, badge fills — the dominant surface; slightly warmer than #ffffff, giving the page a matte paper quality |
| Parchment | #f7f3eb | `--color-parchment` | Hero section background wash — the warmest surface tone, used for large atmospheric areas |
| Ash | #f1f1f1 | `--color-ash` | Borders, divider lines, ghost button borders |
| Slate Mid | #7e7d7b | `--color-slate-mid` | Secondary body text, metadata labels, muted headings |
| Graphite | #5a5957 | `--color-graphite` | Tertiary text, icon strokes, nav link default state |
| Stone | #969594 | `--color-stone` | Placeholder text, disabled states |
| Fossil | #bab9b8 | `--color-fossil` | Hairline borders, subtle dividers |
| Smolder | #ff6020 | `--color-smolder` | Primary CTA buttons, announcement bar link, high-emphasis interactive triggers — warm orange against near-black creates urgency without aggression |
| Signal Violet | #777eff | `--color-signal-violet` | Data classification labels, AI confidence highlights, link color inside product demos — signals machine intelligence rather than human action |
| Deep Violet | #731fff | `--color-deep-violet` | Secondary violet accent, gradient midpoint stop, deeper classification markers |
| Spectrum Gradient | #a855f7 | `--color-spectrum-gradient` | Hero demo background gradient — teal-to-violet-to-amber sweep used as atmospheric backdrop for the product visualization |
| Mint Pulse | #05933b | `--color-mint-pulse` | AI Traffic 'High' indicator badges, positive signal states |
| Emerald Tag | #10b981 | `--color-emerald-tag` | Semantic success backgrounds, gradient anchor (green end of the spectrum gradient) |
| Sky Blush | #bdd8ff | `--color-sky-blush` | Hero section vertical gradient background (top stop, blue-white) |

## Tokens — Typography

### Mona Sans

- **Token:** `--font-mona-sans`
- **Substitute:** Plus Jakarta Sans or Geist
- **Weights:** 500, 700
- **Sizes:** 24px, 32px, 40px, 48px, 56px
- **Line heights:** 1.00–1.20
- **Letter spacing:** -0.04em at 56px, -0.03em at 48–40px, -0.01em at 32–24px
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** All display and section headings. The custom GitHub-adjacent variable font at weight 700 with -0.04em tracking at large sizes compresses headlines into dense data labels — they read as precision output rather than marketing copy. Weight 500 at 24-32px handles subheadings.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter (freely available on Google Fonts)
- **Weights:** 400, 500, 600, 700
- **Sizes:** 8px, 9px, 10px, 11px, 12px, 13px, 14px, 15px, 16px, 18px
- **Line heights:** 1.20–1.67
- **Letter spacing:** -0.03em at UI labels, +0.02em to +0.05em at badge/caption sizes
- **OpenType features:** "blwf", "cv03", "cv04", "cv09", "cv11"
- **Role:** All body copy, UI labels, badges, nav links, button text, card metadata. The wide weight range (400 body, 600 stat labels, 700 metric numerals) creates internal hierarchy within data-dense components without switching families.

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Role:** System fallback for non-critical UI chrome. Not a designed choice — browser default in edge cases.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.2 | 0.5px | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| heading-sm | 24px | 1.2 | -0.24px | `--text-heading-sm` |
| heading | 32px | 1.13 | -0.96px | `--text-heading` |
| heading-lg | 48px | 1 | -1.44px | `--text-heading-lg` |
| display | 56px | 1 | -2.24px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 10px |
| badges | 6-8px |
| images | 8px |
| buttons | 48px (filled primary), 999px (outlined/ghost), 20px (filter chips) |
| demoPanels | 12-20px |
| inputFields | 12px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(95, 99, 106, 0.08) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 1px 0px | `--shadow-xl` |
| xl-2 | rgba(95, 99, 106, 0.12) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 4px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| cardPadding | 24px |
| elementGap | 8-12px |

## Components

### Button Group (Primary + Ghost + Filter Pills)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat Metric Cards Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Publisher Directory Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Filled CTA Button

**Role:** Highest-priority action: 'Get Started', 'Try Free'

Background #1c1a17, text white (#ffffff), border-radius 48px, padding 7px 12px. At nav scale: compact pill. The near-black fill distinguishes it from the orange (#ff6020) used for announcement CTAs — nav primary action is authoritative, not urgent.

### Outlined Ghost Button

**Role:** Secondary actions: 'Explore Marketplace', 'Sign In'

Background transparent, text #1c1a17 at 72% opacity, border 1px solid rgba(0,0,0,0.12), border-radius 20px, padding 8px 16px. The semi-transparent text color against the near-white background reads as intentionally recessive — draws eye to the filled CTA without disappearing.

### White Card Button / Chip

**Role:** Clickable panel triggers, demo tab selectors

Background #ffffff, text uses accent colors (#777eff), border 1px solid #f1f1f1, border-radius 12px, padding 24px. These double as both filter pills and interactive card surfaces in the product demo UI.

### Filter Pill

**Role:** Publisher directory category filters: 'All 1291', 'Arts & Entertainment'

Background transparent, border 1px solid rgba(0,0,0,0.12), border-radius 999px, padding 7px 12px, text Inter 400 14px #1c1a17 at 72% opacity. Active state not fully specified but implied by filled #1c1a17 background.

### Content Card (Light)

**Role:** Publisher directory listing cards, feature explanation cards

Background #fafafa, border-radius 10px, no shadow, no border. Inner content uses Inter 400 14px body text at #5a5957, bold publisher name at #1c1a17 Inter 600 15px. Bottom row shows colored metric badges (Mint Pulse green for 'High AI Traffic', orange for revenue).

### Dark Stat Card

**Role:** Trust/social proof hero metric, 'Trusted by publishers' card

Background radial-gradient(81% 66% at 1.8% 1.1%, #545454 0%, #1c1a17 100%), border-radius 10px, white text. Headline Inter 700 at display size, sub-label Inter 400 14px white at 70% opacity. This single dark card anchors the 4-column stats grid.

### Metric Stat Cell

**Role:** Numerical KPI display: '$0M+ Paid to Publishers', '0M+ AI Reach'

Background #fafafa, border-radius 10px, no shadow. Label Inter 400 14px #7e7d7b at top, numeral Mona Sans 700 40-48px #1c1a17 with -0.03em tracking. Compact padding 24px inside the cell.

### Category Badge

**Role:** Taxonomy tags on publisher cards: 'Internet & Telecom', 'en', 'Arts & Entertainment'

Background #fafafa, text Inter 400 12px #52525b, border-radius 6px, padding 4px 10px. Stack horizontally with 4px gap. No border — the background/surface contrast provides definition.

### Announcement Bar

**Role:** Top-of-page event promotion strip

Full-bleed background #000000, centered Inter 400 14px white body text, orange (#ff6020) 'Schedule a meeting' text link at right. Fixed height ~36px. The only full-bleed black element on an otherwise light page — immediately commands attention.

### Top Navigation Bar

**Role:** Sticky site navigation

Background #ffffff, border-bottom 1px solid #f1f1f1, height ~60px. Left: Mona Sans wordmark 'panxo' + Inter 500 11px 'AI' label. Center: Inter 500 14px nav links at #5a5957 with chevron dropdowns. Right: 'Sign In' ghost text, 'Get Started' pill #1c1a17 48px radius. 'Early Access' badge uses #10b981 green with Inter 600 10px uppercase tracking.

### Product Demo UI Card

**Role:** Hero section interactive visualization of AI traffic classification

White background card with 12-20px radius, shadow: rgba(95,99,106,0.08) 0 0 0 1px + rgba(43,43,48,0.1) 0 1px 4px. Interior tabs use the White Card Button / Chip pattern. Body text shows inline color-coded classifications: #777eff for AI source tags, #731fff for segment labels, #ff6020 for CPM values, #05933b for confidence percentages.

### Spectrum Gradient Panel

**Role:** Hero visualization backdrop, atmospheric visual section divider

linear-gradient(90deg, #10b981 0%, #a855f7 50%, #f59e0b 100%) applied to large contained panels, border-radius 15px or full-bleed. This is the site's single high-chroma element — all other color is data-functional.

### Trust Logo Strip

**Role:** Social proof publisher logos: Business Insider, Yahoo Finance, Investing.com

Full-width horizontal scroll on a white background. Logos rendered in grayscale (#000000 or desaturated), Inter-weight-matched, no borders or cards. Equal visual weight across brands — no featured positioning.

## Do's and Don'ts

### Do

- Use Mona Sans weight 700 with letter-spacing -0.04em for all headlines 40px and above — the compressed tracking is the headline signature.
- Keep the #ff6020 orange exclusively for CTAs and promotional links; never use it for data labels or classification UI — that role belongs to #777eff and #731fff.
- Use 48px border-radius on filled primary buttons and 999px on outlined/ghost buttons — the asymmetry between the two types is intentional.
- Apply the teal→violet→amber gradient (linear-gradient(90deg, #10b981 0%, #a855f7 50%, #f59e0b 100%)) only to large atmospheric panels or product visualization backdrops, never to text or small UI elements.
- Build data metric cells using Mona Sans 700 for the numeral and Inter 400 for the label — mixing the two families creates the 'terminal readout' hierarchy inside a single card.
- Use #fafafa (not #ffffff) as the default card background — the barely-off-white matches the page-level warmth and prevents cards from visually floating off the page.
- Use Inter font-feature-settings '"cv03", "cv04", "cv09", "cv11"' consistently — these OpenType alternates are active site-wide and affect character recognition.

### Don't

- Never use pure #ffffff as a section background — #fafafa or #f7f3eb are the correct warm-neutral surfaces; pure white only appears in card interiors or overlays.
- Don't apply box-shadows heavier than rgba(43,43,48,0.1) 0px 1px 4px — deeper shadows break the flat data-surface aesthetic.
- Never use #777eff or #731fff for interactive controls or CTA buttons — these violets are semantic data-classification colors, not brand action colors.
- Don't use Mona Sans below 24px — it is exclusively a display/heading face; Inter handles all body and UI text at 18px and below.
- Avoid card border-radius above 20px — the system uses 8-12px for badges, 10px for cards, and reserves large radii (48-999px) only for button pills.
- Don't add colored backgrounds to category badges — they use #fafafa fill with no border; adding color or borders would break the taxonomy hierarchy.
- Never use the spectrum gradient as a text color or button background — it exists only as a contained atmospheric panel element.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Base | #f7f3eb | Hero section and large atmospheric backgrounds — warmest surface |
| 1 | App Surface | #fafafa | Default page background and card fills |
| 2 | Elevated Card | #ffffff | Interactive cards and demo UI panels with micro-shadow |
| 3 | Inverse Surface | #1c1a17 | Dark stat card and primary CTA button fill |

## Elevation

- **Shadow 1:** `rgba(95, 99, 106, 0.08) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 1px 0px`
- **Shadow 2:** `rgba(95, 99, 106, 0.12) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 4px 0px`

## Imagery

The hero section uses a contained product demo UI as the primary visual — a card-within-card interface showing AI traffic classification in real time, floating over a warm pastel gradient (sky blue bleeding into peach). No photography anywhere on the page. The gradient background behind the demo is decorative atmosphere, not informational. Publisher directory cards use small favicon-scale brand logos as the only iconography — circular, isolated, stamp-like. Stat/metric blocks are typography-as-imagery: oversized numerals ($0M+, 0M+) functioning as hero graphics. Icon usage is minimal outlined style, monocolor, low stroke weight, used sparingly in the demo UI tabs (search, person, chart icons). Trust logos (Business Insider, Yahoo Finance, Investing.com) appear in a horizontal grayscale strip — desaturated, equal weight, no special treatment. The page is heavily text-dominant; imagery occupies less than 20% of visual space.

## Layout

Max-width ~1200px centered on a white-to-near-white page. Navigation is a sticky top bar: left-anchored wordmark + 'AI' badge, center nav links with a chevron dropdown, right-anchored 'Sign In' text link and filled 'Get Started' pill CTA. Above the main nav sits a full-bleed black announcement bar with centered event copy and an orange 'Schedule a meeting' text link. Hero is a two-column asymmetric split — left column holds the label + headline + CTA buttons, right column holds the body paragraph. Below the fold a full-width card-panel contains the product demo UI. Stats section uses a 4-column grid (1 dark card + 3 metric cards) with equal column width. Publisher directory uses a 3-column card grid. Sections alternate between white and near-white (#fafafa) bands without hard dividers — seamless flow. Vertical rhythm is generous (80-120px between sections) despite the compact base unit.

## Similar Brands

- **Clearbit** — Same warm-neutral palette with near-black primary and single orange CTA on a data intelligence platform
- **Segment** — Mona-Sans-adjacent compressed headline treatment with Inter body on a light SaaS data product
- **Primer.io** — Publisher-facing adtech with flat card grids, metric-display typography at display scale, and low-shadow surfaces
- **Chartbeat** — Real-time audience data UI with warm off-white backgrounds, monochrome logo strips, and stat-as-hero visual pattern

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-coal-ink: #1c1a17;
  --color-ledger-white: #fafafa;
  --color-parchment: #f7f3eb;
  --color-ash: #f1f1f1;
  --color-slate-mid: #7e7d7b;
  --color-graphite: #5a5957;
  --color-stone: #969594;
  --color-fossil: #bab9b8;
  --color-smolder: #ff6020;
  --color-signal-violet: #777eff;
  --color-deep-violet: #731fff;
  --color-spectrum-gradient: #a855f7;
  --color-mint-pulse: #05933b;
  --color-emerald-tag: #10b981;
  --color-sky-blush: #bdd8ff;
  --font-mona-sans: 'Mona Sans', Plus Jakarta Sans or Geist;
  --font-inter: 'Inter', Inter (freely available on Google Fonts);
  --font-sans-serif: 'sans-serif', Inter;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.5px;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -0.96px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.44px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -2.24px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --radius-cards: 10px;
  --radius-badges: 6-8px;
  --radius-images: 8px;
  --radius-buttons: 48px (filled primary), 999px (outlined/ghost), 20px (filter chips);
  --radius-demopanels: 12-20px;
  --radius-inputfields: 12px;
  --shadow-xl: rgba(95, 99, 106, 0.08) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 1px 0px;
  --shadow-xl-2: rgba(95, 99, 106, 0.12) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 4px 0px;
  --surface-page-base: #f7f3eb;
  --surface-app-surface: #fafafa;
  --surface-elevated-card: #ffffff;
  --surface-inverse-surface: #1c1a17;
}
```

### Tailwind v4

```css
@theme {
  --color-coal-ink: #1c1a17;
  --color-ledger-white: #fafafa;
  --color-parchment: #f7f3eb;
  --color-ash: #f1f1f1;
  --color-slate-mid: #7e7d7b;
  --color-graphite: #5a5957;
  --color-stone: #969594;
  --color-fossil: #bab9b8;
  --color-smolder: #ff6020;
  --color-signal-violet: #777eff;
  --color-deep-violet: #731fff;
  --color-spectrum-gradient: #a855f7;
  --color-mint-pulse: #05933b;
  --color-emerald-tag: #10b981;
  --color-sky-blush: #bdd8ff;
  --font-mona-sans: 'Mona Sans', Plus Jakarta Sans or Geist;
  --font-inter: 'Inter', Inter (freely available on Google Fonts);
  --font-sans-serif: 'sans-serif', Inter;
  --text-caption: 10px;
  --leading-caption: 1.2;
  --tracking-caption: 0.5px;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.24px;
  --text-heading: 32px;
  --leading-heading: 1.13;
  --tracking-heading: -0.96px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1;
  --tracking-heading-lg: -1.44px;
  --text-display: 56px;
  --leading-display: 1;
  --tracking-display: -2.24px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --radius-cards: 10px;
  --radius-badges: 6-8px;
  --radius-images: 8px;
  --radius-buttons: 48px (filled primary), 999px (outlined/ghost), 20px (filter chips);
  --radius-demopanels: 12-20px;
  --radius-inputfields: 12px;
  --shadow-xl: rgba(95, 99, 106, 0.08) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 1px 0px;
  --shadow-xl-2: rgba(95, 99, 106, 0.12) 0px 0px 0px 1px, rgba(43, 43, 48, 0.1) 0px 1px 4px 0px;
  --surface-page-base: #f7f3eb;
  --surface-app-surface: #fafafa;
  --surface-elevated-card: #ffffff;
  --surface-inverse-surface: #1c1a17;
}
```

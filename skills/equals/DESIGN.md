---
version: alpha
name: "Equals"
description: "Equals feels like a newspaper broadsheet that learned to breathe — authoritative serif headlines punching at 110px sit on a warm cream field (#FAF9F5), while playful pastel color swatches float loosely in the background like spreadsheet cells coming undone. The tension between Serrif Condensed's editorial weight and Unica77's tight UI precision creates a dual-register: serious data tool and approachable product. Yellow (#FFCC00) announces itself only on the top announcement bar, orchid purple (#B074CE) appears exclusively on CTA buttons — two accent colors that never compete because they never share the same zone. Thin horizontal rules divide sections instead of whitespace padding, referencing spreadsheet grid lines as a structural metaphor throughout the page."
theme: "light"
industry: "saas"
source_url: "https://equals.com"
refero_style_id: "dae7cbf2-0485-433b-8f63-eea8716ad14d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934084494-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934084494-thumb.jpg"
extracted_at: "2026-04-11T19:03:11.531Z"
---

# Equals — Style Reference

> Broadsheet meets spreadsheet — editorial serif authority on warm cream, punctuated by floating pastel data cells.

**Theme:** light

**Industry:** saas

Equals feels like a newspaper broadsheet that learned to breathe — authoritative serif headlines punching at 110px sit on a warm cream field (#FAF9F5), while playful pastel color swatches float loosely in the background like spreadsheet cells coming undone. The tension between Serrif Condensed's editorial weight and Unica77's tight UI precision creates a dual-register: serious data tool and approachable product. Yellow (#FFCC00) announces itself only on the top announcement bar, orchid purple (#B074CE) appears exclusively on CTA buttons — two accent colors that never compete because they never share the same zone. Thin horizontal rules divide sections instead of whitespace padding, referencing spreadsheet grid lines as a structural metaphor throughout the page.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Analyst Yellow | #FFCC00 | `--color-analyst-yellow` | Announcement bar background only — saturated yellow on near-black text creates maximum urgency at minimal surface area, never used elsewhere so it retains its alarm-signal quality |
| Orchid CTA | #B074CE | `--color-orchid-cta` | Primary CTA buttons — warm violet against cream background reads as inviting rather than urgent, distinguishing CTAs from the aggressive red/orange typical of SaaS |
| Brand Green | #20A277 | `--color-brand-green` | Finance category accent swatch — one of three role-coded indicator blocks (RevOps red, Founders navy, Finance green) flanking solution rows |
| Glacier | #2DCBDC | `--color-glacier` | Background decorative color block in hero, part of the floating pastel spreadsheet-cell visual language |
| Midnight Ink | #000000 | `--color-midnight-ink` | All headings, body text, borders, nav links, icons — full black with zero softening; the high contrast against cream is deliberately old-media, not SaaS-neutral |
| Warm Cream | #FAF9F5 | `--color-warm-cream` | Page background, section backgrounds — the slight warm yellow tint separates this from clinical white and reinforces the paper/spreadsheet metaphor |
| Cloud White | #FFFFFF | `--color-cloud-white` | Button text on orchid CTAs, nav hover states, input field backgrounds |
| Slate Body | #646462 | `--color-slate-body` | Body copy, nav secondary text, descriptive subtexts under headings |
| Fog Border | #CDCCC9 | `--color-fog-border` | Nav dropdown shadows, subtle divider lines |

## Tokens — Typography

### Serrif Condensed

- **Token:** `--font-serrif-condensed`
- **Substitute:** Freight Display Condensed, or Playfair Display with condensed tracking
- **Weights:** 400
- **Sizes:** 40px, 48px, 110px
- **Line heights:** 1.00–1.10
- **Letter spacing:** -2.2px at 110px, -0.48px at 48px, -0.4px at 40px
- **Role:** All display and section headings — single weight 400 across all sizes is the anti-convention choice; most SaaS headlines use 700-800, this regular-weight condensed serif whispers editorial authority. The 110px size is used only for hero display text.

### Unica77

- **Token:** `--font-unica77`
- **Substitute:** Inter, Aktiv Grotesk
- **Weights:** 400
- **Sizes:** 14px, 16px, 18px, 24px
- **Line heights:** 1.00–1.71
- **Letter spacing:** -0.084px at 14px, -0.08px at 16px, -0.072px at 18px
- **Role:** Every non-heading element: nav links, body copy, buttons, footer, input placeholder, labels. The negative letter-spacing at all sizes tightens an already compact grotesque into something UI-precise — a signature move that makes UI chrome feel considered rather than default.

### Aeonik Fono

- **Token:** `--font-aeonik-fono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 13px
- **Line heights:** 1.54
- **Letter spacing:** normal
- **Role:** Fine-print body context — 13px utility text likely used for footnotes or micro-labels. Its presence alongside Unica77 suggests a tertiary voice for data footnotes or legal-adjacent content.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.54 | — | `--text-caption` |
| body | 16px | 1.5 | -0.08px | `--text-body` |
| subheading | 18px | 1.33 | -0.072px | `--text-subheading` |
| heading-sm | 24px | 1.29 | — | `--text-heading-sm` |
| heading | 40px | 1.1 | -0.8px | `--text-heading` |
| heading-lg | 48px | 1.04 | -0.48px | `--text-heading-lg` |
| display | 110px | 1 | -2.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-150 | 150px | `--spacing-150` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 50px |
| inputs | 0px |
| buttons | 60px |
| dropdowns | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px, rgba(0, 0, 0, 0.14) 0px 2px 10px -4px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| cardPadding | 24px |
| elementGap | 12-20px |

## Components

### Orchid CTA Email Capture

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Solution Rows

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Pull Quote

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Orchid CTA Button

**Role:** Primary call-to-action

Background #B074CE, white text, 60px border-radius (full pill), 4px 12px padding, Unica77 14px weight 400. The pill radius against the otherwise 0px-radius input it sits beside creates deliberate contrast. Used for 'Get a demo' globally.

### Ghost Nav Link

**Role:** Primary navigation items

Transparent background, #000000 text, 0px radius, 0px padding, Unica77 16px weight 400 with -0.08px letter-spacing. No underline at rest. Navigation links are completely unstyled except for hover state.

### Solution Row

**Role:** Feature/use-case listing separated by horizontal rules

Full-width row separated by 1px #000000 horizontal rule top and bottom. Left: heading in Serrif Condensed 40px + body in Unica77 16px #646462. Right: a 24×12px solid color block (red for RevOps #FF3716, navy #00B for Founders, green #20A277 for Finance) functioning as a category icon. No card background — content sits directly on #FAF9F5.

### Nav Dropdown Panel

**Role:** Mega-menu navigation dropdown

White #FFFFFF background, 6px border-radius, box-shadow rgba(0,0,0,0.1) 0 0 0 0.5px + rgba(0,0,0,0.05) 0 2px 8px -2px + rgba(0,0,0,0.14) 0 2px 10px -4px. Interior items use Unica77 14px-16px. The layered three-value shadow creates thin-bezel framing without aggressive depth.

### Logo Tag

**Role:** Social proof / customer logo display

Monochrome customer logos displayed at uniform size in a horizontal or grid layout directly on #FAF9F5. No card, no border, no padding container — logos float on the page surface. Brand names (Notion, Intercom, Cursor, etc.) rendered in their own logotype styling but forced to black.

### Floating Color Swatch

**Role:** Hero background decorative element

Rectangular blocks of flat color (glacier teal #2DCBDC, soft purple, warm yellow, pastel green) scattered in the hero background at varying sizes. No radius, no border, no shadow. They reference spreadsheet cell fills, creating an ambient visual field without interfering with foreground content.

### Testimonial Pull Quote

**Role:** Social proof text block

Large opening quotation mark in Serrif Condensed, quote body in Serrif Condensed 40-48px, attribution in Unica77 16px #646462. Placed on #FAF9F5 with no container or border. The serif quote type against the sans-serif attribution creates deliberate register shift.

## Do's and Don'ts

### Do

- Use Serrif Condensed weight 400 (never bold) for all headings — the editorial authority comes from scale (up to 110px) and letter-spacing (-2.2px at display), not weight
- Set the page background to #FAF9F5 (Warm Cream), never pure white — the warm tint is the canvas that makes black text feel typographic rather than digital
- Reserve #FFCC00 exclusively for the announcement bar and #B074CE exclusively for CTA buttons — their power comes from appearing once each, never reused as decorative color
- Use 60px border-radius on CTA buttons only; all other interactive elements (inputs, dropdowns, category pills) use 0px or 6px — the pill/sharp contrast is deliberate system tension
- Separate sections with 1px solid #000000 horizontal rules instead of increased vertical whitespace — this references spreadsheet grid lines and is the primary structural rhythm device
- Apply negative letter-spacing to Unica77 at all sizes: -0.084px at 14px, -0.08px at 16px — never use default tracking for UI text
- Display category/role color blocks as flat 24×12px solid rectangles (no radius, no border) — the raw flat swatch is the icon; never substitute icons or illustrations for these

### Don't

- Never use #B074CE or #FFCC00 as background for content sections or cards — both colors are single-purpose signal colors, not palette options
- Never apply border-radius to inputs or horizontal dividers — the 0px sharp edge on form elements is the system's UI register; rounding them collapses the tension with pill CTAs
- Never use Serrif Condensed at weights other than 400 — do not attempt to bold or italicize headings, even for emphasis
- Never replace the floating color swatch decoratives with photography or illustrations — abstract flat rectangles are the hero visual language; anything representational breaks the spreadsheet metaphor
- Never use #646462 (Slate Body) for headings or CTAs — it is body-only, maintaining a strict two-tier contrast system: black for structure, slate for supporting copy
- Never stack multiple orchid (#B074CE) buttons in proximity — each page view should have a single dominant CTA moment, typically the email capture composite in the hero
- Never add drop shadows or elevation to section containers or cards — the only permitted shadow is on nav dropdown panels; sections live flat on the cream surface

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px, rgba(0, 0, 0, 0.14) 0px 2px 10px -4px`

## Imagery

No photography anywhere on the visible page. The hero's visual field is occupied entirely by flat-color rectangular swatches — glacier teal, soft lavender, pastel yellow, mint green — arranged loosely in the background at varying sizes, without radius or border, mimicking unfilled spreadsheet cells. These are purely decorative and never contain content. The logo section uses monochrome customer wordmarks forced to black, no badges or containers. Category indicators are 24×12px solid color blocks — raw data visualization primitives rather than designed icons. The visual language is resolutely non-photographic: a product confident enough that its typography IS the visual.

## Layout

Max-width centered layout (~1200px) on a full-bleed #FAF9F5 cream background. Hero is full-viewport-height centered stack: 110px display headline, 18px subtext, then the email+CTA composite unit. Floating color swatches appear left and right of the text column without containing structure — they bleed near the viewport edges. Below the hero, sections are separated exclusively by 1px black horizontal rules with no vertical gap between them, creating a dense spreadsheet-row rhythm. Solution rows use a two-column layout: text left, color swatch right. Customer logos appear in a 5-column grid row, then a second row, directly on the cream surface with no container. Navigation is a single sticky top bar with logo left, five nav links centered, sign-in + email input + CTA button right. Dropdown panels float below nav items with the layered shadow system.

## Similar Brands

- **Notion** — Same black-on-cream typographic approach with a primary CTA pill button in a single accent color against an otherwise achromatic UI
- **Linear** — Same two-font editorial system pairing a display serif with a tight grotesque for UI chrome, with negative letter-spacing as a signature move
- **Rows.com** — Directly comparable spreadsheet product visual language — editorial serif headlines, cream backgrounds, minimal color accents referencing data-cell aesthetics
- **Retool** — Monochrome logo grid on cream with single-accent CTA buttons and horizontal-rule section dividers instead of card-based layouts

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-analyst-yellow: #FFCC00;
  --color-orchid-cta: #B074CE;
  --color-brand-green: #20A277;
  --color-glacier: #2DCBDC;
  --color-midnight-ink: #000000;
  --color-warm-cream: #FAF9F5;
  --color-cloud-white: #FFFFFF;
  --color-slate-body: #646462;
  --color-fog-border: #CDCCC9;
  --font-serrif-condensed: 'Serrif Condensed', Freight Display Condensed, or Playfair Display with condensed tracking;
  --font-unica77: 'Unica77', Inter, Aktiv Grotesk;
  --font-aeonik-fono: 'Aeonik Fono', IBM Plex Mono;
  --text-caption: 13px;
  --leading-caption: 1.54;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.08px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.072px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.29;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: -0.48px;
  --text-display: 110px;
  --leading-display: 1;
  --tracking-display: -2.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-150: 150px;
  --radius-tags: 50px;
  --radius-inputs: 0px;
  --radius-buttons: 60px;
  --radius-dropdowns: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px, rgba(0, 0, 0, 0.14) 0px 2px 10px -4px;
}
```

### Tailwind v4

```css
@theme {
  --color-analyst-yellow: #FFCC00;
  --color-orchid-cta: #B074CE;
  --color-brand-green: #20A277;
  --color-glacier: #2DCBDC;
  --color-midnight-ink: #000000;
  --color-warm-cream: #FAF9F5;
  --color-cloud-white: #FFFFFF;
  --color-slate-body: #646462;
  --color-fog-border: #CDCCC9;
  --font-serrif-condensed: 'Serrif Condensed', Freight Display Condensed, or Playfair Display with condensed tracking;
  --font-unica77: 'Unica77', Inter, Aktiv Grotesk;
  --font-aeonik-fono: 'Aeonik Fono', IBM Plex Mono;
  --text-caption: 13px;
  --leading-caption: 1.54;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.08px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.072px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.29;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 48px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: -0.48px;
  --text-display: 110px;
  --leading-display: 1;
  --tracking-display: -2.2px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-150: 150px;
  --radius-tags: 50px;
  --radius-inputs: 0px;
  --radius-buttons: 60px;
  --radius-dropdowns: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px, rgba(0, 0, 0, 0.14) 0px 2px 10px -4px;
}
```

---
version: alpha
name: "Mural"
description: "Mural hits like a blackboard in a bright studio — the hero opens pitch-black with oversized serif-adjacent display type bleeding edge to edge, then the page snaps into clinical white with the same confidence. The dual-font system is the signature move: STK Bureau (weight 300 only) handles all display and headline work with tight negative tracking (-0.04 to -0.05em), while ABC Social runs everything from captions to body in a humanist groove. Electric jade (#00c27a) is the single chromatic anchor — appearing on CTAs and key links against both black and white backgrounds, creating identical urgency in both contexts. Cards live in a borderless, shadow-free world where containment comes from background-color switches (#eeeeee, #ffffff) rather than depth. The Mural logomark's rainbow-spectrum identity is carefully quarantined from the page palette — the product itself runs monochromatic with jade as its only relief valve."
theme: "mixed"
industry: "productivity"
source_url: "https://mural.co"
refero_style_id: "2b6642d9-fa66-4c06-9804-30f56e544a6d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934209053-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934209053-thumb.jpg"
extracted_at: "2026-04-11T19:05:34.543Z"
---

# Mural — Style Reference

> Blackboard flipping to whiteboard — same hand, same authority, opposite ground.

**Theme:** mixed

**Industry:** productivity

Mural hits like a blackboard in a bright studio — the hero opens pitch-black with oversized serif-adjacent display type bleeding edge to edge, then the page snaps into clinical white with the same confidence. The dual-font system is the signature move: STK Bureau (weight 300 only) handles all display and headline work with tight negative tracking (-0.04 to -0.05em), while ABC Social runs everything from captions to body in a humanist groove. Electric jade (#00c27a) is the single chromatic anchor — appearing on CTAs and key links against both black and white backgrounds, creating identical urgency in both contexts. Cards live in a borderless, shadow-free world where containment comes from background-color switches (#eeeeee, #ffffff) rather than depth. The Mural logomark's rainbow-spectrum identity is carefully quarantined from the page palette — the product itself runs monochromatic with jade as its only relief valve.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Jade CTA | #00c27a | `--color-jade-cta` | Primary CTA buttons, active links, key interactive highlights — jade against black in the hero and against white in body sections maintains equal visual force without changing hue |
| Mint Surface | #b4f5c8 | `--color-mint-surface` | Card backgrounds, feature highlight areas — pastel counterpoint to jade that reads as 'selected' or 'active' without the full saturation of CTA jade |
| Forest | #00843f | `--color-forest` | Card accent backgrounds, deep green surface variant |
| Badge Leaf | #d5f8e0 | `--color-badge-leaf` | Blog/category badge backgrounds — near-white green tint that signals categorization without demanding attention |
| Badge Text | #007b3b | `--color-badge-text` | Badge text and border on leaf background — dark enough on #d5f8e0 to pass contrast without going full black |
| Void | #000000 | `--color-void` | Hero background, primary text, button borders, icon fills — the dominant surface and text color simultaneously; this dual role is the system's core tension |
| Paper | #ffffff | `--color-paper` | Section backgrounds, card surfaces, nav background |
| Fog | #f3f3f3 | `--color-fog` | Secondary button fill, subtle input backgrounds |
| Ash | #eeeeee | `--color-ash` | Card background variant, divider surfaces |
| Cool Grey | #dce1e5 | `--color-cool-grey` | Borders, nav dividers, separator lines |
| Slate | #8c8c8c | `--color-slate` | Subheadings, secondary headings, muted heading text |
| Stone | #808080 | `--color-stone` | Body secondary text, muted links |
| Graphite | #4f5457 | `--color-graphite` | Input border color (dark variant) |
| Ink | #333333 | `--color-ink` | Link text, image overlay text |
| Charcoal | #626262 | `--color-charcoal` | Nav secondary elements, supplementary UI chrome |

## Tokens — Typography

### STK Bureau

- **Token:** `--font-stk-bureau`
- **Substitute:** Barlow Condensed Light, or Helvetica Neue Light
- **Weights:** 300
- **Sizes:** 32px, 40px, 54px, 70px, 80px, 100px
- **Line heights:** 1.00–1.20
- **Letter spacing:** -0.04em at 54-70px, -0.05em at 80-100px
- **Role:** All display and hero headlines exclusively. Weight 300 at 70-100px with -0.04 to -0.05em tracking is the signature voice — letters crowd each other at scale, creating mass through density rather than weight. Nothing else in the system uses this font.

### ABC Social

- **Token:** `--font-abc-social`
- **Substitute:** Inter, DM Sans
- **Weights:** 300, 400, 500, 600
- **Sizes:** 11px, 12px, 14px, 16px, 18px, 20px, 22px, 26px, 40px
- **Line heights:** 1.00–1.75
- **Letter spacing:** -0.02em at larger sizes (26px+), +0.175em and +0.25em for uppercase eyebrow labels at 11-12px
- **Role:** Everything else: nav (14px/500), body copy (16-18px/400), buttons (14-16px/500-600), badges (12px/500), eyebrow labels (11px/500 at +0.175em tracking). The +0.175-0.25em tracking on small caps/eyebrows is the only place the system opens up letter-spacing — everywhere else it's tight or default.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | 1.925px | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 18px | 1.43 | — | `--text-subheading` |
| heading-sm | 26px | 1.1 | -0.52px | `--text-heading-sm` |
| heading | 40px | 1.1 | -0.8px | `--text-heading` |
| heading-lg | 54px | 1.1 | -2.16px | `--text-heading-lg` |
| display | 80px | 1 | -4px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-55 | 55px | `--spacing-55` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-192 | 192px | `--spacing-192` |
| spacing-208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 8-24px |
| badges | 26px |
| inputs | 8px |
| buttons | 8px |
| largeCards | 24px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.08) 0px 4px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(11, 41, 70, 0.32) 0px 0px 1px 0px, rgba(42, 82, 121, 0.08) 0px 24px 20px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 80-120px |
| cardPadding | 24-40px |
| elementGap | 8-16px |

## Components

### Hero Email Capture CTA

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Blog / Resource Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Trusted Brands Logo Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Hero email capture submit, section CTAs

Background #00c27a, color #000000, border #000000 1px solid, border-radius 8px, padding 9px 52px 9px 16px (asymmetric — wide right for icon/arrow). ABC Social 500, 14-16px. The black border on a green button is unconventional — it adds weight and keeps jade from floating.

### Outlined Black Button

**Role:** Secondary CTAs on white sections

Background transparent, color #000000, border #000000 1px solid, border-radius 8px, padding 8px 16px. ABC Social 500. Sits beside CTA buttons as the 'no-commitment' option.

### Ghost White Button

**Role:** CTAs on dark/black hero sections

Background transparent, color #ffffff, border #ffffff 1px solid, border-radius 0px, padding 0. Zero radius and zero padding — these appear as inline underlined-style links styled as ghost buttons in the hero, not pill or block shapes.

### Large Filled Grey Button

**Role:** Feature navigation tabs, section-level action buttons

Background #f3f3f3, color #000000, no border, border-radius 8px, padding 23px 44px. ABC Social 500 at 16px. Large padding (23px vertical) creates a tall, substantial button used for primary section navigation choices.

### Email Input Field

**Role:** Hero lead capture

Background #000000, color #ffffff, border #4f5457 1px solid, border-radius 8px, padding 8px 16px. Dark input on dark background — distinguishable only by the #4f5457 border. Placeholder text in #808080.

### Blog Badge

**Role:** Content categorization on card thumbnails

Background #d5f8e0, color #007b3b, border-radius 26px, padding 2px 16px 1px 16px. ABC Social 500 at 12px. The 26px radius creates a true pill. Leaf green background with forest text — the only colored text element in the body sections.

### Content Card — Large Rounded

**Role:** Blog/resource listing cards

Background #ffffff, border-radius 24px, no border, shadow rgba(0,0,0,0.08) 0px 4px 4px 0px. Padding 0 (image fills top, text below with internal padding). The 24px radius softens what is otherwise a sharp-edged system — cards are the site's only round affordance.

### Content Card — Ash Fill

**Role:** Feature comparison or info tiles

Background #eeeeee, border-radius 7-8px, no border, no shadow. Padding 40px 5-6px. The extreme vertical padding with minimal horizontal padding creates a tall narrow container used for icon-led feature columns.

### Product UI Card

**Role:** In-page product screenshot/demo containers

Background #ffffff, border-radius 24px, no box-shadow, full-bleed image content inside. Floated over the dark hero section to create contrast between the product and the marketing context.

### AI Chat Widget

**Role:** Muriel AI consultant persistent overlay

Background #ffffff, border-radius 16px, shadow rgba(11,41,70,0.32) 0px 0px 1px 0px, rgba(42,82,121,0.08) 0px 24px 20px 0px. Contains avatar, name, role label, conversation text, CTA button (#00c27a, 8px radius), and text input. The blue-tinted shadow (rgba(11,41,70)) is the only non-monochrome shadow in the system.

### Section Eyebrow Label

**Role:** Pre-heading category labels above section titles

Color #8c8c8c or #000000, ABC Social 500 at 11px, letter-spacing +0.175em, uppercase transform. No background, no border. Acts as a whispered section tag before the STK Bureau headline drops.

### Logo Bar — Trusted Brands

**Role:** Social proof strip

White or light-grey background strip, grayscale brand logos (Microsoft, IBM, etc.) at medium opacity. ABC Social 500 at 11px uppercase label 'TRUSTED BY BRANDS AROUND THE WORLD' at +0.175em tracking centered above. No border, no card, flush horizontal scroll.

## Do's and Don'ts

### Do

- Use STK Bureau weight 300 exclusively for all display and hero headlines at -0.04em to -0.05em tracking. Never use it at body or UI sizes.
- Apply #00c27a only to primary CTA buttons (with 1px #000000 border) and active link states. Do not use it for decorative color blocks or illustrations.
- Use 26px border-radius for all pill badges and 8px for all buttons and inputs. Keep 24px for large content cards only.
- Open letter-spacing to +0.175em only for uppercase eyebrow labels in ABC Social at 11-12px. All other sizes track at -0.02em or default.
- Establish section separation through background-color switching (#000000 → #ffffff → #eeeeee) rather than dividers or shadows between sections.
- Use the blue-tinted shadow (rgba(11,41,70,0.32) 0px 0px 1px 0px, rgba(42,82,121,0.08) 0px 24px 20px 0px) exclusively for overlaying floating elements like the chat widget.
- Keep photography on cards full-bleed to the card edge with no internal padding — let the 24px card radius clip the image corners.

### Don't

- Do not use STK Bureau for body copy, UI labels, or anything below 32px — the tight tracking at small sizes becomes illegible.
- Do not add colored backgrounds using the extended CSS token palette (--lavender, --flamingo, --mural-blue, etc.) on any marketing page — those are reserved for in-canvas product contexts only.
- Do not use shadows for card grouping or section organization — use background-color differences instead. Shadows are only for floating overlays.
- Do not apply #00c27a to text on white backgrounds as a body link color — it only appears as a button background or hover state on black backgrounds.
- Do not use border-radius values other than 8px, 16px, 24px, or 26px. In particular, avoid pill shapes (9999px) on buttons — Mural uses 8px squared buttons, not pill buttons.
- Do not mix STK Bureau with any weight other than 300 — the light-weight display type is the deliberate choice; heavier weights destroy the contrast with the dense tracking.
- Do not use the #dce1e5 Cool Grey as text — it is a border and divider color only.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Hero Void | #000000 | Full-bleed hero section background, the page's dramatic opening |
| 1 | Page White | #ffffff | Primary page and section background after hero |
| 2 | Ash Surface | #eeeeee | Card and tile backgrounds for grouping without elevation |
| 3 | Elevated Card | #ffffff | Content cards with 4px shadow — only layer using drop shadows for grouping |
| 4 | Overlay Float | #ffffff | AI chat widget and product UI cards floating over sections with blue-tinted composite shadow |

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.08) 0px 4px 4px 0px`
- **Shadow 2:** `rgba(11, 41, 70, 0.32) 0px 0px 1px 0px, rgba(42, 82, 121, 0.08) 0px 24px 20px 0px`

## Imagery

Three distinct image modes coexist: (1) Product UI screenshots presented as floating white-background cards with 24px radius, cropped tightly to show the canvas tool in use — no lifestyle context around the product itself. (2) Photography on blog cards: candid workplace scenes, high-key natural light, people in conversation — desaturated to near-grayscale with warm midtones, full-bleed to card edge with no internal padding. (3) In-canvas illustration within product screenshots: hand-drawn circle annotations in saturated reds and blues, avatar photos in circular crops with colored ring borders, sticky-note callout boxes — these are product content, not brand illustration. Icons in the left-rail tool palette are outlined, single-color (white on black), approximately 18-20px with ~1.5px stroke weight. The brand palette (jade green) appears only in UI chrome and CTAs, never in photography or illustration.

## Layout

Max-width approximately 1280px, centered. Hero is full-bleed black spanning 100vh with left-aligned STK Bureau display headline, left-aligned email capture row, and product screenshot cards overlapping the hero bottom edge into the next white section — creating a cinematic cut between dark and light. Section rhythm alternates: black hero → white feature section → white with ash card grid → white trust bar → back to feature sections. No alternating dark/light bands beyond the opening hero. Content arrangement is primarily left-text + right-visual (2-column) for feature sections, and 3-column card grids for blog/resource content. Navigation is a fixed top bar: logo left, centered horizontal nav links, login + two CTA buttons right. No mega-menu visible — nav links expand to dropdowns. The left-edge vertical tool palette (appearing in product screenshots) is a product UI element shown for demo context, not page navigation.

## Similar Brands

- **Figma (figma.com)** — Same dark-hero-to-white-body flip with a single vivid accent (Figma uses blue, Mural uses jade) against an otherwise monochromatic marketing palette
- **Notion (notion.so)** — Identical custom sans-serif + display typeface dual-font pairing with tight negative tracking on headlines and achromatic color discipline
- **Miro (miro.com)** — Direct competitor with same visual workspace product category — both use full-bleed hero product screenshots and green-family accent CTAs
- **Loom (loom.com)** — Same bordered CTA button approach (colored fill + visible dark border) and flat card system using background-color for hierarchy instead of shadows
- **Linear (linear.app)** — Weight 300 display type at large sizes with aggressive negative tracking as the primary typographic statement — authority through restraint not weight

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-jade-cta: #00c27a;
  --color-mint-surface: #b4f5c8;
  --color-forest: #00843f;
  --color-badge-leaf: #d5f8e0;
  --color-badge-text: #007b3b;
  --color-void: #000000;
  --color-paper: #ffffff;
  --color-fog: #f3f3f3;
  --color-ash: #eeeeee;
  --color-cool-grey: #dce1e5;
  --color-slate: #8c8c8c;
  --color-stone: #808080;
  --color-graphite: #4f5457;
  --color-ink: #333333;
  --color-charcoal: #626262;
  --font-stk-bureau: 'STK Bureau', Barlow Condensed Light, or Helvetica Neue Light;
  --font-abc-social: 'ABC Social', Inter, DM Sans;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 1.925px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.52px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -2.16px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-37: 37px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-42: 42px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-58: 58px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-128: 128px;
  --spacing-192: 192px;
  --spacing-208: 208px;
  --radius-cards: 8-24px;
  --radius-badges: 26px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-largecards: 24px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;
  --shadow-xl-2: rgba(11, 41, 70, 0.32) 0px 0px 1px 0px, rgba(42, 82, 121, 0.08) 0px 24px 20px 0px;
  --surface-hero-void: #000000;
  --surface-page-white: #ffffff;
  --surface-ash-surface: #eeeeee;
  --surface-elevated-card: #ffffff;
  --surface-overlay-float: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-jade-cta: #00c27a;
  --color-mint-surface: #b4f5c8;
  --color-forest: #00843f;
  --color-badge-leaf: #d5f8e0;
  --color-badge-text: #007b3b;
  --color-void: #000000;
  --color-paper: #ffffff;
  --color-fog: #f3f3f3;
  --color-ash: #eeeeee;
  --color-cool-grey: #dce1e5;
  --color-slate: #8c8c8c;
  --color-stone: #808080;
  --color-graphite: #4f5457;
  --color-ink: #333333;
  --color-charcoal: #626262;
  --font-stk-bureau: 'STK Bureau', Barlow Condensed Light, or Helvetica Neue Light;
  --font-abc-social: 'ABC Social', Inter, DM Sans;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --tracking-caption: 1.925px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading-sm: 26px;
  --leading-heading-sm: 1.1;
  --tracking-heading-sm: -0.52px;
  --text-heading: 40px;
  --leading-heading: 1.1;
  --tracking-heading: -0.8px;
  --text-heading-lg: 54px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -2.16px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -4px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-37: 37px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-42: 42px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-55: 55px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-58: 58px;
  --spacing-63: 63px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-128: 128px;
  --spacing-192: 192px;
  --spacing-208: 208px;
  --radius-cards: 8-24px;
  --radius-badges: 26px;
  --radius-inputs: 8px;
  --radius-buttons: 8px;
  --radius-largecards: 24px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 4px 4px 0px;
  --shadow-xl-2: rgba(11, 41, 70, 0.32) 0px 0px 1px 0px, rgba(42, 82, 121, 0.08) 0px 24px 20px 0px;
  --surface-hero-void: #000000;
  --surface-page-white: #ffffff;
  --surface-ash-surface: #eeeeee;
  --surface-elevated-card: #ffffff;
  --surface-overlay-float: #ffffff;
}
```

---
version: alpha
name: "mymind"
description: "mymind feels like a private journal left open on a warm windowsill — soft, diffuse light bleeding in from orange-to-white gradients that suffuse the entire canvas in ambient warmth. The hero background is a radial bloom of coral-orange fading to white, not a photograph or illustration, just color as atmosphere. Typography does the heavy lifting: Louize serif at 96–140px with aggressive negative tracking (-0.062em) creates editorial weight that editorial magazines would recognize, while Nunito handles micro-UI labels at tracked-out uppercase (0.063em to 0.125em) — the two extremes of the letter-spacing scale are the system's visual signature. Cards sit on tinted pastel surfaces (#e5eaf2, #f3f0e7, #dde9d3) rather than generic white, each hue suggesting a different mood of content. The single chromatic accent — Ember Orange #ff5924 — appears only as an outlined pill button border and brand moment, never as a filled CTA, making it feel like a mark rather than a command."
theme: "light"
industry: "productivity"
source_url: "https://mymind.com"
refero_style_id: "5bfe6c1d-1b15-4f8d-b0c9-677a33291c5d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777459186324-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777459186324-thumb.jpg"
extracted_at: "2026-04-29T10:42:11.503Z"
---

# mymind — Style Reference

> Sunlit personal archive — a warm afternoon light spilling across a private collection of saved thoughts, images, and bookmarks, curated without folders.

**Theme:** light

**Industry:** productivity

mymind feels like a private journal left open on a warm windowsill — soft, diffuse light bleeding in from orange-to-white gradients that suffuse the entire canvas in ambient warmth. The hero background is a radial bloom of coral-orange fading to white, not a photograph or illustration, just color as atmosphere. Typography does the heavy lifting: Louize serif at 96–140px with aggressive negative tracking (-0.062em) creates editorial weight that editorial magazines would recognize, while Nunito handles micro-UI labels at tracked-out uppercase (0.063em to 0.125em) — the two extremes of the letter-spacing scale are the system's visual signature. Cards sit on tinted pastel surfaces (#e5eaf2, #f3f0e7, #dde9d3) rather than generic white, each hue suggesting a different mood of content. The single chromatic accent — Ember Orange #ff5924 — appears only as an outlined pill button border and brand moment, never as a filled CTA, making it feel like a mark rather than a command.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ember Orange | #ff5924 | `--color-ember-orange` | Brand accent — outlined pill buttons, nav bullet markers, section eyebrow text. Never filled. Appears as coral-warm mark, not command.; Decorative gradient on brand moments and section backgrounds — orange to warm amber; Hero section background — radial bloom from intense orange bleeding into white canvas, creating the signature warm ambient atmosphere |
| Cobalt Link | #1573dd | `--color-cobalt-link` | Inline hyperlinks and underlined interactive text — only chromatic non-orange color in the UI |
| Midnight Ink | #000000 | `--color-midnight-ink` | Page background (dark sections), primary display text, icon fills |
| Canvas White | #f9fafc | `--color-canvas-white` | Primary page canvas — the base surface of all main content sections |
| Pure White | #ffffff | `--color-pure-white` | Card surfaces, elevated panels, inner containers requiring maximum contrast from canvas |
| Blush Tint | #fff1f1 | `--color-blush-tint` | Warm-tinted section backgrounds, alternating with canvas white for rhythm |
| Mist | #e2e2e2 | `--color-mist` | Dividers, subtle borders, structural separators |
| Slate Blue Card | #e5eaf2 | `--color-slate-blue-card` | Cool-tinted card backgrounds — technology/productivity content cards |
| Parchment Card | #f3f0e7 | `--color-parchment-card` | Warm off-white card backgrounds — notes, writing content cards |
| Sage Card | #dde9d3 | `--color-sage-card` | Green-tinted card backgrounds — third content category surface |
| Deep Slate | #3a475a | `--color-deep-slate` | Primary heading text in body sections, secondary display text |
| Storm | #4a5465 | `--color-storm` | Body text, paragraph copy, secondary content text |
| Steel | #717286 | `--color-steel` | Tertiary body text, captions, metadata labels |
| Slate | #748297 | `--color-slate` | Ghost button text/border (inactive platform buttons: iPhone app, Browser Extension, Android app) |
| Graphite Nav | #24272d | `--color-graphite-nav` | Navigation text items in active/scrolled state |
| Ash | #afb5c1 | `--color-ash` | Muted nav labels, disabled states, placeholder text |
| Chalk | #a6a8aa | `--color-chalk` | Strikethrough / completed list item text inside product demo cards |

## Tokens — Typography

### Open Sans

- **Token:** `--font-open-sans`
- **Substitute:** Open Sans (Google Fonts)
- **Weights:** 400
- **Sizes:** 18px, 22px
- **Line heights:** 1.00–1.67
- **Letter spacing:** normal
- **Role:** Fallback / supporting body text in specific CMS-driven content blocks.

### Louize-Regular-205TF

- **Token:** `--font-louize-regular-205tf`
- **Substitute:** Freight Display Pro, or Playfair Display at weight 400
- **Weights:** 400
- **Sizes:** 18px, 32px, 36px, 42px, 52px, 54px, 80px, 96px, 140px
- **Line heights:** 0.80–1.30
- **Letter spacing:** -6.2px at 100px / -5.3px at 80px / -2.3px at 36px — tight across all display sizes
- **OpenType features:** normal
- **Role:** Editorial display and section headlines. The defining typographic voice — a transitional serif with ink-trap details. At 96–140px with -0.062em tracking, letterforms compress into a single visual mass. Anti-conventional: weight 400 (not bold) at enormous sizes creates authority through mass and scale rather than weight.

### Louize-Italic-205TF

- **Token:** `--font-louize-italic-205tf`
- **Substitute:** Freight Display Pro Italic
- **Weights:** 400
- **Sizes:** 80px, 84px
- **Line heights:** 0.88
- **Letter spacing:** -2.88px at 80px, -1.93px at 84px
- **Role:** Italic variant for editorial emphasis within headlines — creates contrast between upright and italic forms at the same display size

### Nunito-SemiBold / Nunito-Regular

- **Token:** `--font-nunito-semibold-nunito-regular`
- **Substitute:** Nunito (Google Fonts)
- **Weights:** 400–500
- **Sizes:** 15px, 16px, 18px, 20px
- **Line heights:** 1.20–1.75
- **Letter spacing:** -2.2px at large / +0.4em to +1.25em for all-caps labels at small sizes
- **Role:** UI micro-labels, button text, nav items, section eyebrows. Tracked out at +0.025em to +0.125em for uppercase labels — the widest positive tracking in the system, contrasting sharply with Louize's negative tracking. Rounded forms soften UI chrome against the editorial serif.

### Avenir LT W01_45 Book1475508

- **Token:** `--font-avenir-lt-w01-45-book1475508`
- **Substitute:** DM Sans or Nunito Sans
- **Weights:** 400
- **Sizes:** 15px, 16px, 20px, 24px, 32px, 40px, 42px, 48px, 54px, 80px, 96px, 140px
- **Line heights:** 0.85–1.83
- **Letter spacing:** -0.96px at 16px / -1.44px at 24px / uniform -0.06em ratio across the scale
- **Role:** Body copy and long-form explanatory text. Humanist geometric grotesque — bridges the editorial serif headlines and the rounded UI labels. Letter-spacing held at -0.06em across all sizes.

### Inter-Medium / Inter-Regular

- **Token:** `--font-inter-medium-inter-regular`
- **Substitute:** Inter (Google Fonts)
- **Weights:** 400
- **Sizes:** 16px, 18px, 20px, 24px, 40px
- **Line heights:** 1.11–1.67
- **Letter spacing:** -0.64px at 16px, -0.26px at 20px
- **Role:** Navigation labels, UI body text, list items. Neutral workhorse for medium-density interface contexts where Avenir's personality would compete. Tracking at -0.04em to -0.013em.

### neue-haas-grotesk-display

- **Token:** `--font-neue-haas-grotesk-display`
- **Substitute:** Helvetica Neue
- **Weights:** 500
- **Sizes:** 16px, 24px
- **Line heights:** 1.00–1.25
- **Letter spacing:** +1.0px at 16px
- **Role:** Small-caps section category labels and UI micro-headings. Tracked out at +0.063em — used where Nunito's roundness is too informal.

### Louize-Bold-205TF

- **Token:** `--font-louize-bold-205tf`
- **Weights:** 400
- **Sizes:** 42px
- **Line heights:** 1.19
- **Letter spacing:** -0.019
- **Role:** Louize-Bold-205TF — detected in extracted data but not described by AI

### Louize-Medium-205TF

- **Token:** `--font-louize-medium-205tf`
- **Weights:** 400
- **Sizes:** 48px
- **Line heights:** 0.92
- **Letter spacing:** -0.033
- **Role:** Louize-Medium-205TF — detected in extracted data but not described by AI

### mymindai-Regular

- **Token:** `--font-mymindai-regular`
- **Weights:** 400
- **Sizes:** 96px
- **Line heights:** 0.88
- **Letter spacing:** -0.044
- **Role:** mymindai-Regular — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 15px | 1.33 | 2px | `--text-caption` |
| body | 18px | 1.67 | -0.36px | `--text-body` |
| subheading | 22px | 1.4 | -0.44px | `--text-subheading` |
| heading-sm | 32px | 1.19 | -1.92px | `--text-heading-sm` |
| heading | 52px | 1 | -2.08px | `--text-heading` |
| heading-lg | 80px | 0.88 | -4.96px | `--text-heading-lg` |
| display | 140px | 0.85 | -8.68px | `--text-display` |

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
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-180 | 180px | `--spacing-180` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| nav | 30px |
| tags | 36px |
| cards | 16px |
| buttons | 100px |
| cardsAlt | 12px |
| buttonsAlt | 120px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(255, 167, 129, 0.44) 0px 57px 60px -54px, rgba(255, 128, 36, 0.27) 0px -27px 50px -40px | `--shadow-xl` |
| xl-2 | rgba(140, 142, 151, 0.32) 0px 4px 7px -4px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 80-120px |
| cardPadding | 50px |
| elementGap | 20px |

## Components

### Content Category Tags (Hero Inline Pills)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Platform Download Buttons (Ghost Slate Pills)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Inline Checklist Card (Pastel Parchment Feature Card)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ember Outlined Pill Button

**Role:** Primary brand action button — outlined, never filled

Background transparent, border 1px solid #ff5924, text #ff5924, border-radius 100px, padding 10px 24px. Nunito-SemiBold 15–16px, letter-spacing +0.053em uppercase. The absence of a filled CTA is deliberate — the brand never commands, only invites.

### Ghost Slate Pill Button

**Role:** Secondary platform download buttons (iPhone app, Browser Extension, Android app)

Background transparent, border 1px solid #748297, text #748297, border-radius 100px, padding 10px 24px. Identical structure to Ember Outlined — differentiated only by Slate (#748297) replacing Ember Orange.

### White Outlined Pill Button

**Role:** Dark-background section CTAs

Background transparent, border 1px solid #ffffff, text #ffffff, border-radius 120px, padding 10px 22px. Used exclusively over dark/black section backgrounds.

### Content Category Tag

**Role:** Inline keyword tags within hero body text (notes, bookmarks, inspiration, articles, images)

Border-radius 36px, border 1px solid, each tag uses its own accent color matching the keyword category (Ember Orange for some, Cobalt #1573dd for links). Small pill form, inline with body text at 18px. Creates a 'tag cloud embedded in prose' pattern.

### Pastel Feature Card

**Role:** Primary content feature card in 2-column feature grids

Background alternates: #e5eaf2 (blue), #f3f0e7 (parchment), or #dde9d3 (sage). Border-radius 16px. No shadow. Padding 50px all sides. No border. Color selection encodes content category — each card type has its own tinted surface.

### White Elevated Card

**Role:** Hero product preview card / elevated demo surface

Background #ffffff, border-radius 12px, padding 100px top / 30px sides and bottom. Shadow: rgba(255,167,129,0.44) 0px 57px 60px -54px, rgba(255,128,36,0.27) 0px -27px 50px -40px. The warm orange-glow shadow is unique to this one card — it echoes the hero bloom.

### Navigation Bar

**Role:** Persistent top navigation

Background #ffffff or transparent over hero. Logo at left. Nav links (What, Why, How, What's New) centered with small Ember Orange bullet dots preceding each item. 'Log in' as plain text link in #24272d. 'Sign up' as Ember Outlined Pill Button. Nunito/Inter at 16px. No border-bottom — separates via position only.

### Nav Bullet Link

**Role:** Navigation items with decorative orange dot prefix

Each nav label preceded by a small filled circle in #ff5924. Text in #24272d at 16px Inter-Medium. No underline. The orange dots are the primary navigation affordance — brand identity woven into wayfinding.

### Section Eyebrow Label

**Role:** Small uppercase category labels above section headings

Text #ff5924, Nunito-SemiBold or neue-haas-grotesk-display 15–16px, letter-spacing +0.063em to +0.125em uppercase. No background. Positioned directly above the Louize display heading. Example: 'YOUR PRIVATE OASIS'.

### Product Demo Screenshot Frame

**Role:** Browser-frame wrapper showing app UI

Rounded rectangle at 12–16px radius, gray border (#e2e2e2) 1px solid, white interior. Contains a simulated browser/app UI inside. No shadow. Appears partially cropped at viewport edge — creates 'peek' effect suggesting more content below.

### Dark Manifesto Section

**Role:** Full-bleed dark narrative section

Background linear-gradient from #000000 to #2f343c. White text (#ffffff) at Louize-Regular 52–80px, tightly tracked at -0.04em. White outlined pill buttons over dark. Creates stark contrast against the warm-white surrounding sections.

### Inline Checklist Card

**Role:** Product feature demo — task list inside a pastel card

Parchment card (#f3f0e7) at 16px radius, 50px padding. List items at Inter-Regular 16–18px: checked items in #a6a8aa with strikethrough, active items in #3a475a. Minimal checkbox circles, no filled checkmarks except as gray circles.

## Do's and Don'ts

### Do

- Use Louize-Regular-205TF for all headline text at 32px and above, with letter-spacing of -0.04em to -0.062em — tighter as size increases.
- Apply the Hero Bloom gradient (orange → blush → white) only to hero-scale backgrounds; never as a card or button fill.
- Use 100px border-radius on all pill buttons regardless of variant — the full-circle pill is the only button shape in the system.
- Differentiate feature cards exclusively by background color (Slate Blue #e5eaf2 / Parchment #f3f0e7 / Sage #dde9d3) — never by border or shadow.
- Prefix navigation links with a small Ember Orange (#ff5924) filled dot — it is the primary visual affordance of the nav.
- Track Nunito uppercase labels at +0.063em to +0.125em — the extreme positive tracking contrasts the extreme negative tracking of Louize headlines and defines the system's typographic rhythm.
- Place section eyebrow labels in Ember Orange (#ff5924) ALL CAPS above every Louize display heading.

### Don't

- Never fill any button with Ember Orange (#ff5924) as a solid background — it is an outline-only accent color. Filled orange breaks the brand's restrained invitation tone.
- Never use box shadows on feature cards — the three pastel card variants (#e5eaf2, #f3f0e7, #dde9d3) elevate through color contrast alone.
- Never set Louize headlines above 32px with positive or zero letter-spacing — negative tracking at scale is the typography system's core rule.
- Do not use more than three surface tints per page section — Slate Blue, Parchment, and Sage are a complete set; adding a fourth card color breaks the categorical system.
- Do not use Inter or Open Sans for display-size text — Louize owns all sizes above 28px; Avenir and Inter serve body and UI only.
- Never apply the warm orange-glow card shadow (rgba(255,167,129,0.44)) to anything other than the hero product preview card — it is a signature moment, not a reusable elevation style.
- Do not use hard dividers (visible border-bottom rules or <hr>) between page sections — rhythm is created by alternating background colors (#f9fafc vs #fff1f1), not structural lines.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #f9fafc | Base page background — barely-off-white, receives the warm bloom gradient in hero |
| 1 | Section Warm | #fff1f1 | Alternating section backgrounds — warm blush tint for rhythm |
| 2 | Card White | #ffffff | Elevated card surfaces — full white against tinted backgrounds |
| 2 | Card Blue | #e5eaf2 | Content category card — cool-tinted for tech/productivity content |
| 2 | Card Parchment | #f3f0e7 | Content category card — warm off-white for notes/writing content |
| 2 | Card Sage | #dde9d3 | Content category card — green-tinted for nature/wellness content |

## Elevation

- **Hero Product Card:** `rgba(255, 167, 129, 0.44) 0px 57px 60px -54px, rgba(255, 128, 36, 0.27) 0px -27px 50px -40px`
- **Floating Card:** `rgba(140, 142, 151, 0.32) 0px 4px 7px -4px`

## Imagery

Product screenshots are the primary visual content — shown inside browser/app frames with rounded corners (12–16px), cropped at viewport edges to suggest depth. No lifestyle photography. Abstract color as atmosphere: the hero uses pure gradient bloom (orange to white) rather than any photograph. Illustrations are absent. Product UI cards float as isolated artifacts against pastel surfaces — a soap bar, a magazine cover, movie posters — shown as-found content items, not staged product photography. Icons are minimal: outlined style, single-stroke weight, monochrome. The 'Magic is happening...' ambient loader appears as a soft red radial glow with a wave icon — purely decorative atmospheric feedback. Overall image density is low: large expanses of tinted background with single focused content artifacts, text-dominant layout. The content items inside demo cards (Dior editorial, GQ cover, Top Gun poster) are reproduced at natural proportions with no color treatment or filters.

## Layout

Max-width 1440px centered on a near-white (#f9fafc) canvas. Hero is full-viewport with centered headline over the warm bloom gradient — no split layout, pure text-over-atmosphere. Navigation is minimal sticky top bar: logo left, centered links, auth right. Sections alternate between warm-white (#f9fafc) and blush (#fff1f1) backgrounds with no visible dividers. Content sections use 2-column layouts: feature text left / demo card right, or vice versa (alternating). Feature card grids are 2-column at desktop. The dark manifesto section is full-bleed, breaking the warm palette completely for tonal contrast. Product demo appears as an oversized browser-frame card that bleeds slightly off the section edge — deliberately cropped to imply a larger product. Vertical spacing between sections is generous (80–120px), giving the page a slow, unhurried reading pace. No sidebar, no mega-menu, no sticky sidebar.

## Similar Brands

- **Notion** — Shared editorial serif + geometric sans pairing for content-first product pages, pastel surface tints for feature differentiation
- **Are.na** — Same 'private collection' positioning with minimal chromatic palette and typography-first layouts
- **Craft Docs** — Warm pastel card surfaces, product screenshot frames with rounded corners, and light-theme personal productivity positioning
- **Readwise** — Single warm accent color (orange/amber range), serif editorial headlines, and knowledge-management product framing
- **Framer** — Aggressive display-size negative letter-spacing on serif headlines and gradient-as-atmosphere hero backgrounds

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ember-orange: #ff5924;
  --color-cobalt-link: #1573dd;
  --color-midnight-ink: #000000;
  --color-canvas-white: #f9fafc;
  --color-pure-white: #ffffff;
  --color-blush-tint: #fff1f1;
  --color-mist: #e2e2e2;
  --color-slate-blue-card: #e5eaf2;
  --color-parchment-card: #f3f0e7;
  --color-sage-card: #dde9d3;
  --color-deep-slate: #3a475a;
  --color-storm: #4a5465;
  --color-steel: #717286;
  --color-slate: #748297;
  --color-graphite-nav: #24272d;
  --color-ash: #afb5c1;
  --color-chalk: #a6a8aa;
  --font-open-sans: 'Open Sans', Open Sans (Google Fonts);
  --font-louize-regular-205tf: 'Louize-Regular-205TF', Freight Display Pro, or Playfair Display at weight 400;
  --font-louize-italic-205tf: 'Louize-Italic-205TF', Freight Display Pro Italic;
  --font-nunito-semibold-nunito-regular: 'Nunito-SemiBold / Nunito-Regular', Nunito (Google Fonts);
  --font-avenir-lt-w01-45-book1475508: 'Avenir LT W01_45 Book1475508', DM Sans or Nunito Sans;
  --font-inter-medium-inter-regular: 'Inter-Medium / Inter-Regular', Inter (Google Fonts);
  --font-neue-haas-grotesk-display: 'neue-haas-grotesk-display', Helvetica Neue;
  --font-louize-bold-205tf: 'Louize-Bold-205TF', ui-sans-serif, system-ui, sans-serif;
  --font-louize-medium-205tf: 'Louize-Medium-205TF', ui-sans-serif, system-ui, sans-serif;
  --font-mymindai-regular: 'mymindai-Regular', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 15px;
  --leading-caption: 1.33;
  --tracking-caption: 2px;
  --text-body: 18px;
  --leading-body: 1.67;
  --tracking-body: -0.36px;
  --text-subheading: 22px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.44px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.19;
  --tracking-heading-sm: -1.92px;
  --text-heading: 52px;
  --leading-heading: 1;
  --tracking-heading: -2.08px;
  --text-heading-lg: 80px;
  --leading-heading-lg: 0.88;
  --tracking-heading-lg: -4.96px;
  --text-display: 140px;
  --leading-display: 0.85;
  --tracking-display: -8.68px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-140: 140px;
  --spacing-180: 180px;
  --spacing-200: 200px;
  --radius-nav: 30px;
  --radius-tags: 36px;
  --radius-cards: 16px;
  --radius-buttons: 100px;
  --radius-cardsalt: 12px;
  --radius-buttonsalt: 120px;
  --shadow-xl: rgba(255, 167, 129, 0.44) 0px 57px 60px -54px, rgba(255, 128, 36, 0.27) 0px -27px 50px -40px;
  --shadow-xl-2: rgba(140, 142, 151, 0.32) 0px 4px 7px -4px;
  --surface-canvas: #f9fafc;
  --surface-section-warm: #fff1f1;
  --surface-card-white: #ffffff;
  --surface-card-blue: #e5eaf2;
  --surface-card-parchment: #f3f0e7;
  --surface-card-sage: #dde9d3;
}
```

### Tailwind v4

```css
@theme {
  --color-ember-orange: #ff5924;
  --color-cobalt-link: #1573dd;
  --color-midnight-ink: #000000;
  --color-canvas-white: #f9fafc;
  --color-pure-white: #ffffff;
  --color-blush-tint: #fff1f1;
  --color-mist: #e2e2e2;
  --color-slate-blue-card: #e5eaf2;
  --color-parchment-card: #f3f0e7;
  --color-sage-card: #dde9d3;
  --color-deep-slate: #3a475a;
  --color-storm: #4a5465;
  --color-steel: #717286;
  --color-slate: #748297;
  --color-graphite-nav: #24272d;
  --color-ash: #afb5c1;
  --color-chalk: #a6a8aa;
  --font-open-sans: 'Open Sans', Open Sans (Google Fonts);
  --font-louize-regular-205tf: 'Louize-Regular-205TF', Freight Display Pro, or Playfair Display at weight 400;
  --font-louize-italic-205tf: 'Louize-Italic-205TF', Freight Display Pro Italic;
  --font-nunito-semibold-nunito-regular: 'Nunito-SemiBold / Nunito-Regular', Nunito (Google Fonts);
  --font-avenir-lt-w01-45-book1475508: 'Avenir LT W01_45 Book1475508', DM Sans or Nunito Sans;
  --font-inter-medium-inter-regular: 'Inter-Medium / Inter-Regular', Inter (Google Fonts);
  --font-neue-haas-grotesk-display: 'neue-haas-grotesk-display', Helvetica Neue;
  --font-louize-bold-205tf: 'Louize-Bold-205TF', ui-sans-serif, system-ui, sans-serif;
  --font-louize-medium-205tf: 'Louize-Medium-205TF', ui-sans-serif, system-ui, sans-serif;
  --font-mymindai-regular: 'mymindai-Regular', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 15px;
  --leading-caption: 1.33;
  --tracking-caption: 2px;
  --text-body: 18px;
  --leading-body: 1.67;
  --tracking-body: -0.36px;
  --text-subheading: 22px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.44px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.19;
  --tracking-heading-sm: -1.92px;
  --text-heading: 52px;
  --leading-heading: 1;
  --tracking-heading: -2.08px;
  --text-heading-lg: 80px;
  --leading-heading-lg: 0.88;
  --tracking-heading-lg: -4.96px;
  --text-display: 140px;
  --leading-display: 0.85;
  --tracking-display: -8.68px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-120: 120px;
  --spacing-128: 128px;
  --spacing-140: 140px;
  --spacing-180: 180px;
  --spacing-200: 200px;
  --radius-nav: 30px;
  --radius-tags: 36px;
  --radius-cards: 16px;
  --radius-buttons: 100px;
  --radius-cardsalt: 12px;
  --radius-buttonsalt: 120px;
  --shadow-xl: rgba(255, 167, 129, 0.44) 0px 57px 60px -54px, rgba(255, 128, 36, 0.27) 0px -27px 50px -40px;
  --shadow-xl-2: rgba(140, 142, 151, 0.32) 0px 4px 7px -4px;
  --surface-canvas: #f9fafc;
  --surface-section-warm: #fff1f1;
  --surface-card-white: #ffffff;
  --surface-card-blue: #e5eaf2;
  --surface-card-parchment: #f3f0e7;
  --surface-card-sage: #dde9d3;
}
```

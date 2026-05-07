---
version: alpha
name: "Luma"
description: "Luma feels like a summer festival poster designed by a typographer — warm, alive, and unapologetically joyful. The page is nearly achromatic in its UI chrome (near-black #131517 text, mid-gray #656768 secondary, light-gray backgrounds) which makes the explosion of color in the hero 3D render feel earned and deliberate. The signature move is a full-spectrum radial gradient — cyan through violet through pink through orange — used as a single accent arc on the logo mark, transforming a system-font UI into something recognizably branded. Headlines run at 64px weight 400 with -0.016em tracking, relying on size alone rather than weight to command attention — the restraint is the statement. The CTA button is a dark near-black pill (#333537) against white, inverting the typical bright-CTA convention so the colorful hero imagery provides all the visual energy."
theme: "light"
industry: "ai"
source_url: "https://lu.ma"
refero_style_id: "680b0fff-26d0-45c3-808b-d571ff45eb99"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935560781-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935560781-thumb.jpg"
extracted_at: "2026-04-11T19:27:25.431Z"
---

# Luma — Style Reference

> Festival poster behind frosted glass — the UI recedes into gray silence so a technicolor 3D world can explode through the center of the page.

**Theme:** light

**Industry:** ai

Luma feels like a summer festival poster designed by a typographer — warm, alive, and unapologetically joyful. The page is nearly achromatic in its UI chrome (near-black #131517 text, mid-gray #656768 secondary, light-gray backgrounds) which makes the explosion of color in the hero 3D render feel earned and deliberate. The signature move is a full-spectrum radial gradient — cyan through violet through pink through orange — used as a single accent arc on the logo mark, transforming a system-font UI into something recognizably branded. Headlines run at 64px weight 400 with -0.016em tracking, relying on size alone rather than weight to command attention — the restraint is the statement. The CTA button is a dark near-black pill (#333537) against white, inverting the typical bright-CTA convention so the colorful hero imagery provides all the visual energy.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Obsidian | #131517 | `--color-obsidian` | Primary text, headings, nav labels — the near-black is slightly warm, avoiding the coldness of pure #000 |
| Graphite | #656768 | `--color-graphite` | Secondary text, icon fills, nav links, muted labels |
| Ash | #a5a6a8 | `--color-ash` | Tertiary text, borders, stroke on icons |
| Charcoal | #333537 | `--color-charcoal` | Primary CTA button background — dark against white page so the 3D imagery carries the color load |
| Pure White | #ffffff | `--color-pure-white` | Page background, button label text |
| Ink Black | #000000 | `--color-ink-black` | SVG icon fills, highest-contrast overlays |
| Luma Spectrum | #099ef1 | `--color-luma-spectrum` | Logo accent arc, brand identity mark — the only gradient on the UI chrome, applied exclusively to the wordmark star/logo element |
| Flamingo | #f31a7c | `--color-flamingo` | Inline accent text — used on 'start here.' in the hero headline for a single phrase of color against black text |

## Tokens — Typography

### -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

- **Token:** `--font-apple-system-blinkmacsystemfont-segoe-ui-sans-serif`
- **Substitute:** Inter, SF Pro Display
- **Weights:** 400, 500
- **Sizes:** 13px, 14px, 16px, 18px, 20px, 64px
- **Line heights:** 1.0–1.5 (1.0 at display sizes, 1.5 at body sizes)
- **Letter spacing:** -0.016em across all sizes (approximately -1.02px at 64px, -0.26px at 16px)
- **OpenType features:** none detected
- **Role:** Single font family for all text across all contexts — the deliberate use of system-ui means the UI feels native and frictionless. Weight 400 at 64px for the headline is anti-convention (most sites push 700+); the size does the work so weight stays quiet. Weight 500 for buttons and nav labels only.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 20 | — | `--text-caption` |
| body | 16px | 24 | -0.26px | `--text-body` |
| subheading | 18px | 27 | -0.29px | `--text-subheading` |
| heading-sm | 20px | 24 | -0.32px | `--text-heading-sm` |
| display | 64px | 66 | -1.02px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-173 | 173px | `--spacing-173` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 8px |
| cards | 15px |
| buttons | 15px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 32px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Hero Headline + CTA Button

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Event Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Footer Navigation Row

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Logo Wordmark

**Role:** Brand identity, top-left nav

Text 'luma' in #131517, accompanied by a superscript star/spark icon rendered with the full Luma Spectrum radial gradient (cyan → violet → pink → orange). The gradient appears ONLY here — it is the singular brand signal on an otherwise achromatic UI.

### Nav Bar

**Role:** Primary navigation, sticky top

White background, full-width. Left: logo wordmark. Right: 'Explore Events' link with arrow (Graphite #656768, 14px, weight 400), 'Sign In' button (Graphite text, 14px). Nav labels use #656768 with -0.016em tracking. A live clock display ('3:25 PM EDT') in Ash #a5a6a8 is a distinctive ambient element. Height approximately 52px.

### Time Display Badge

**Role:** Ambient contextual info in nav

Live local time string in Ash #a5a6a8, 13px weight 400. No background, no border. Sits in the top-right nav as a subtle real-time data point — reinforces the events/scheduling context without visual weight.

### Hero Headline

**Role:** Primary value statement

Two-color inline headline: 'Delightful events' in Obsidian #131517 at 64px weight 400, then 'start here.' in Flamingo #f31a7c same size/weight. Line-height ~1.03 (66px). Letter-spacing -1.02px. Single font family, weight unchanged — color switch alone creates the accent effect.

### Hero Body Text

**Role:** Supporting copy below headline

16px, weight 400, Graphite #656768, line-height 1.5 (24px). Max-width approximately 320px, left-aligned under the headline. Letter-spacing -0.016em.

### Footer Navigation Links

**Role:** Footer utility links

13-14px, weight 400, Graphite #656768 at default state. Horizontal row layout. Spacing 8px column-gap between items. No underline at rest. Luma wordmark repeated in footer at 14px weight 500, Obsidian #131517.

### Footer Social Icons

**Role:** Social media links in footer

Icon-only links (email, font/A, play, X/Twitter, Instagram). SVG fill #656768 Graphite. Size approximately 16px. 8px gap between icons. No hover state visible in static data.

### Explore Events Link

**Role:** Secondary nav CTA

Text link with arrow suffix (↗), 14px weight 400-500, Graphite #656768. 8px border-radius pill treatment. Padding 7px 10px. Sits in top-right nav beside Sign In.

## Do's and Don'ts

### Do

- Use the Luma Spectrum radial gradient exclusively on the logo mark / brand icon — never apply it to buttons, backgrounds, or text elsewhere
- Reserve Flamingo #f31a7c for single accent phrases within otherwise monochromatic headlines — one phrase maximum per heading
- Set display headlines (64px) at weight 400 with letter-spacing -0.016em; resist increasing weight to bold even for hero contexts
- Keep CTA button fill at #333537 (Charcoal) against white backgrounds — let photography and 3D renders provide the chromatic energy
- Use #656768 (Graphite) for all secondary UI text: nav links, subtext, footer labels, icon fills
- Apply 15px border-radius to buttons and interactive cards; use 8px for smaller tags and nav items
- Maintain -0.016em letter-spacing across all type sizes from 13px to 64px — this single value unifies the entire type system

### Don't

- Never use the Luma Spectrum gradient as a button background, section fill, or text gradient outside the logo mark
- Don't increase headline weight above 400 for emphasis — use Flamingo #f31a7c inline color instead
- Don't add drop shadows or card elevation to the primary UI chrome — the design is intentionally flat to let imagery carry visual depth
- Don't use Flamingo #f31a7c on more than one word cluster per screen — it loses meaning if applied broadly
- Don't use pure #000000 for body text — use Obsidian #131517 which carries slight warmth and reduces harshness against white
- Don't place colored or gradient backgrounds behind the hero text column — white only, so the split layout reads as grounded UI vs expressive imagery

## Imagery

The hero is defined by a large 3D render of a smartphone floating above a tropical beach scene, surrounded by playful 3D objects (inflatable rings, flamingo float, calendar emoji, sparkles). The render is fully contained within a circular crop with a sky-blue-to-white radial background. It occupies the right ~60% of the hero split. The treatment is deliberately maximalist and cartoon-tactile — soft lighting, high-saturation product chrome in pink, 3D depth. This 3D hero style is isolated from the rest of the UI, which is pure flat white. Icons in the nav and footer are outlined/stroke-style SVGs at 16px in Graphite #656768 — minimal single-color mono treatment. No photography, no illustration beyond the 3D hero render.

## Layout

Max-width approximately 1200px, centered. Hero is a two-column split: left column contains headline, body copy, and CTA button (left-aligned, approximately 40% width); right column contains the full-bleed circular 3D render (approximately 60% width), extending to the top edge. Navigation is a full-width bar at 52px height, white, with logo-left and utility-links-right pattern. Footer is a single horizontal row with logo + nav links left and social icons right, 24px vertical padding. No alternating section bands visible — the single viewport is hero-only, with footer directly below. Layout is spacious in the left text column (173px left margin from data) and dense in information hierarchy.

## Similar Brands

- **Eventbrite** — Event ticketing platform with white-dominant UI and colorful event imagery doing the visual work
- **Linear** — Same achromatic UI chrome with -0.016em letter-spacing on system-ui font, single accent color for brand identity
- **Partiful** — Event-focused SaaS with bold gradient accent logo mark against flat white UI, similar Gen-Z visual energy
- **Notion** — System-font typography at weight 400 for headlines, dark near-black text on white, flat UI with illustrative hero
- **Pitch** — Single-spectrum gradient as the sole brand color expression in an otherwise monochromatic product UI

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-obsidian: #131517;
  --color-graphite: #656768;
  --color-ash: #a5a6a8;
  --color-charcoal: #333537;
  --color-pure-white: #ffffff;
  --color-ink-black: #000000;
  --color-luma-spectrum: #099ef1;
  --color-flamingo: #f31a7c;
  --font-apple-system-blinkmacsystemfont-segoe-ui-sans-serif: '-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif', Inter, SF Pro Display;
  --text-caption: 13px;
  --leading-caption: 20;
  --text-body: 16px;
  --leading-body: 24;
  --tracking-body: -0.26px;
  --text-subheading: 18px;
  --leading-subheading: 27;
  --tracking-subheading: -0.29px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 24;
  --tracking-heading-sm: -0.32px;
  --text-display: 64px;
  --leading-display: 66;
  --tracking-display: -1.02px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-173: 173px;
  --radius-tags: 8px;
  --radius-cards: 15px;
  --radius-buttons: 15px;
}
```

### Tailwind v4

```css
@theme {
  --color-obsidian: #131517;
  --color-graphite: #656768;
  --color-ash: #a5a6a8;
  --color-charcoal: #333537;
  --color-pure-white: #ffffff;
  --color-ink-black: #000000;
  --color-luma-spectrum: #099ef1;
  --color-flamingo: #f31a7c;
  --font-apple-system-blinkmacsystemfont-segoe-ui-sans-serif: '-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif', Inter, SF Pro Display;
  --text-caption: 13px;
  --leading-caption: 20;
  --text-body: 16px;
  --leading-body: 24;
  --tracking-body: -0.26px;
  --text-subheading: 18px;
  --leading-subheading: 27;
  --tracking-subheading: -0.29px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 24;
  --tracking-heading-sm: -0.32px;
  --text-display: 64px;
  --leading-display: 66;
  --tracking-display: -1.02px;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-173: 173px;
  --radius-tags: 8px;
  --radius-cards: 15px;
  --radius-buttons: 15px;
}
```

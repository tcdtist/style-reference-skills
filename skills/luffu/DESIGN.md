---
version: alpha
name: "Luffu"
description: "Luffu feels like late afternoon sun through a kitchen window — warm, unhurried, intimate. The cream-tan background (#f5f5ee) and near-black text (#2f3136) create a paper-and-ink warmth far from the cold blues of health tech. Two custom ABC Arizona typefaces do the heavy lifting: Flare at massive display sizes with -0.05em letter-spacing renders the brand name as a piece of editorial typography, while Sans handles navigation and body with similar optical tightening. The hero is full-bleed lifestyle photography — a real family, natural light, golden retriever — with oversized logotype overlaid at near-opacity, bleeding into the image. Color restriction is extreme: no accent color anywhere, just dark ink, warm cream, and white, with a single dark-teal (#192830) reserved for the primary CTA button."
theme: "light"
industry: "ai"
source_url: "https://luffu.com"
refero_style_id: "3da7b444-ded8-406b-90b7-96851604b92b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775990540363-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775990540363-thumb.jpg"
extracted_at: "2026-04-12T10:44:07.656Z"
---

# Luffu — Style Reference

> Family almanac printed on cream linen — editorial restraint meets intimate warmth, executed in two weights of a single serif-adjacent type system on a near-parchment ground.

**Theme:** light

**Industry:** ai

Luffu feels like late afternoon sun through a kitchen window — warm, unhurried, intimate. The cream-tan background (#f5f5ee) and near-black text (#2f3136) create a paper-and-ink warmth far from the cold blues of health tech. Two custom ABC Arizona typefaces do the heavy lifting: Flare at massive display sizes with -0.05em letter-spacing renders the brand name as a piece of editorial typography, while Sans handles navigation and body with similar optical tightening. The hero is full-bleed lifestyle photography — a real family, natural light, golden retriever — with oversized logotype overlaid at near-opacity, bleeding into the image. Color restriction is extreme: no accent color anywhere, just dark ink, warm cream, and white, with a single dark-teal (#192830) reserved for the primary CTA button.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Ink | #192830 | `--color-deep-ink` | Primary CTA button fill, nav border, interactive controls — this single dark-teal anchor is the only departure from the black/cream palette, creating a subtle aquatic undertone that reads health-adjacent without being clinical |
| Parchment | #f5f5ee | `--color-parchment` | Page background, section fills — the slight warm-green cast separates this from pure white and prevents sterility |
| Linen | #e4e7da | `--color-linen` | Subtle section dividers, secondary surface tinting |
| Pressed Cotton | #d7d7cb | `--color-pressed-cotton` | Tertiary surface, card backgrounds in feature sections |
| Graphite | #2f3136 | `--color-graphite` | Body text, headings, primary readable content |
| Slate | #535557 | `--color-slate` | Secondary body text, captions, supporting copy |
| Dusk | #424e52 | `--color-dusk` | Tertiary text, footer links, subdued labels |
| White | #ffffff | `--color-white` | Button text on dark fills, icon fills, overlay text on photography |
| Ink | #000000 | `--color-ink` | Maximum contrast text, SVG fills |

## Tokens — Typography

### ABC Arizona Sans

- **Token:** `--font-abc-arizona-sans`
- **Substitute:** Freight Sans Pro or Cormorant SC
- **Weights:** 400
- **Sizes:** 14px, 16px, 20px
- **Line heights:** 1.0–1.2
- **Letter spacing:** -0.35px at 14px, -0.32px at 16px, -0.32px at 20px
- **Role:** Navigation links, body copy, buttons, captions, footer text. Single weight used across all UI text — no bold weight anywhere forces hierarchy through size alone. The tight letter-spacing (-0.016em at 20px, -0.020em at 16px, -0.025em at 14px) gives a condensed editorial feel at every size.

### ABC Arizona Flare

- **Token:** `--font-abc-arizona-flare`
- **Substitute:** Playfair Display or Cormorant Garamond
- **Weights:** 400
- **Sizes:** 40px, 48px, 64px
- **Line heights:** 1.0
- **Letter spacing:** -3.2px at 64px, -2.02px at 48px, -1.24px at 40px
- **Role:** Display headings and the oversized brand wordmark. The flare-serif construction (hairline terminal spurs) at very tight -0.05em spacing at 64px collapses letterforms together like editorial magazine typography — the 'Luffu' logotype treatment at display scale is the signature visual moment of this system.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1 | -0.35px | `--text-caption` |
| body | 16px | 1.2 | -0.32px | `--text-body` |
| body-lg | 20px | 1.2 | -0.32px | `--text-body-lg` |
| heading-sm | 40px | 1 | -1.24px | `--text-heading-sm` |
| heading | 48px | 1 | -2.02px | `--text-heading` |
| display | 64px | 1 | -3.2px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-123 | 123px | `--spacing-123` |
| spacing-200 | 200px | `--spacing-200` |
| spacing-218 | 218px | `--spacing-218` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 6px |
| buttons | 4-6px |
| avatarCircles | 9999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| cardPadding | 32-34px |
| elementGap | 16-24px |

## Components

### Button Group (Primary CTA + Ghost + Inline Waitlist)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Section Heading Block with Caregiver Questions

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards — Health Logging 3-Up Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button (Dark Fill)

**Role:** Main conversion action — waitlist signup

Background #192830, white text (#ffffff), 4px border-radius, 0px vertical padding with 20px horizontal padding. ABC Arizona Sans 16px weight 400, letter-spacing -0.32px. The minimal vertical padding makes this feel like an inline chip rather than a traditional button — compact and editorial.

### Ghost Navigation Button (Outlined)

**Role:** Secondary actions in the navigation bar

Background white (#ffffff), text #192830, border 1px solid #192830, 6px border-radius, 4px top/bottom padding, 18px left/right padding. ABC Arizona Sans 16px. Sits next to ghost text links — the light border marks it as actionable without using color.

### Inline Waitlist Link-Button

**Role:** In-text or body-section CTA

White background, #192830 text, border 1px solid #192830, 6px radius, 4px/18px padding. Small arrow glyph appended after text ('Join the waitlist →'). Uses the same construction as the nav button but with arrow affordance for in-context placement.

### Hero Full-Bleed Section

**Role:** Above-the-fold full-viewport visual anchor

Full-width lifestyle photography spanning 100vw, headline text in ABC Arizona Flare 48px weight 400, white (#ffffff), letterSpacing -2.02px, positioned top-left over the image. Oversized brand wordmark 'Luffu' at ~120px+ Arizona Flare overlaid at bottom-left, white, bleeding into the image. Dark gradient overlay implied left-side for text legibility. Navigation floats over image with white text links and outlined ghost button.

### Feature Card — App Screen Preview

**Role:** Product feature illustration in 3-up grid

Rounded card at 6px radius, image fills the card top, 32px internal padding on text area. Three cards in a row with 20px column gap. Each card has a subdued-tone background (desaturated blue or warm cream) rather than white. Category label in ABC Arizona Sans 14px uppercase tracked, body copy in Sans 16px #535557.

### Floating Family Member Avatar

**Role:** Caregiver network visualization in mid-page section

Circular photo crops at 9999px border-radius, approximately 80-100px diameter, on the #f5f5ee parchment background. Small question text labels in Arizona Sans 14px #535557 float adjacent. No card container — avatars scatter with negative-space arrangement around a centered heading block.

### Section Heading Block (Centered)

**Role:** Mid-page section introductions

Arizona Flare 48px #2f3136 letterSpacing -2.02px centered, followed by Arizona Sans 20px #535557 letterSpacing -0.32px body paragraph, also centered. Max-width approximately 600px on the paragraph to preserve narrow measure. No decorative elements — pure typographic hierarchy.

### Navigation Bar

**Role:** Global persistent header

Transparent/overlay over hero photography, left-anchored brand logomark (floral icon + 'luffu' wordmark in white Arizona Flare). Right side: 'About' text link in white Arizona Sans 16px, and outlined ghost button 'Join the Waitlist'. No background color — floats over hero image. Height approximately 70px.

### Footer Strip

**Role:** Site footer with legal and social links

Background near #393e28 (dark olive-near-black), white text links in Arizona Sans 14px. Social platform links (Instagram, LinkedIn, X, Facebook) and Privacy Notice. Compact height approximately 50px, full-width. The warm dark-olive footer background echoes the #192830 button tone — the only two dark surfaces on the page.

## Do's and Don'ts

### Do

- Use ABC Arizona Flare weight 400 at -0.05em letter-spacing for all display headings above 40px — this tight tracking is non-negotiable for the editorial look.
- Keep the background #f5f5ee (Parchment) as the default section fill; only use #e4e7da (Linen) or #d7d7cb (Pressed Cotton) for subtle section alternation.
- Use circular (9999px radius) crops for all person/avatar photography — it humanizes data and links visual language to the family-member representation pattern.
- Restrict the palette to Parchment + Graphite + White for all new sections; #192830 appears ONLY on the primary button and footer — not as a text color or decorative element.
- Apply letterSpacing -0.016em to -0.05em across all type sizes; zero-tracking Arizona type looks wrong at every size.
- Use full-bleed lifestyle photography for hero sections with text overlaid left-aligned in white, not in a card or box — the image IS the content.
- Maintain single-weight (400) discipline across both typefaces — all hierarchy comes from size and opacity, never weight changes.

### Don't

- Never introduce a chromatic accent color (no brand blue, green, or orange) — the entire system is intentionally achromatic except for the near-teal #192830.
- Never use bold or semibold weights of Arizona Sans or Arizona Flare; the single-weight system breaks immediately when bold appears.
- Don't use drop shadows or card elevation shadows on content sections — the design is entirely flat with background color differentiation only.
- Don't increase button border-radius above 6px; this is a rectilinear system — pill buttons would clash with the editorial register.
- Never place heading text on a white background without the warm Parchment tint (#f5f5ee) — pure white reads too clinical against this family-warmth palette.
- Don't use icon-only buttons or icon-first navigation; all interactive elements are text-labeled in this system.
- Don't stack multiple sections with the same background color (#f5f5ee) without visual break — alternate with Linen (#e4e7da) or photography.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Ground | #f5f5ee | Default section background — the warm cream anchor of the entire system |
| 1 | Section Lift | #e4e7da | Subtle section differentiation without color shift |
| 2 | Card Surface | #d7d7cb | Feature card backgrounds and UI mock containers |
| 3 | Dark Anchor | #192830 | Primary button fill and footer background — the only true dark surfaces |

## Imagery

Full-bleed lifestyle photography of real multi-generational families (grandparents, parents, children, pets) in natural outdoor settings — golden hour, residential gardens, candid movement. Photography is warm-keyed, not treated or duotone, with rich natural color that contrasts with the restrained type system. Circular portrait crops are used for individual family member representations in feature sections. Product feature cards use contained photography (food close-ups, health tracking interfaces) with subdued color-tinted card backgrounds. The brand wordmark 'Luffu' overlaid at massive scale on the hero image is the primary graphic design move — type as imagery. Icons are minimal outlined glyphs at 16-20px, monochrome. Image-to-text ratio is very high in the hero, dropping to roughly 50/50 in feature sections, then text-dominant in the footer.

## Layout

Max-width approximately 1200px centered on wide screens, with the hero section breaking fully to 100vw. Hero is full-viewport-height lifestyle photography with floating navigation overlay and left-aligned text block at upper-left. Second section (caregiver) is Parchment background with scattered circular avatars around a centered heading — the layout is deliberately open, low-density, white-space-dominant. Third section (feature cards) is a 3-column grid on Parchment-to-Linen gradient background with equal-width cards. Section gap is generous at 120-218px vertical margin between content blocks. No alternating dark/light band pattern — the site remains warm cream throughout with photography providing contrast. Navigation is a single floating top bar, no sticky behavior implied, no mega-menu.

## Similar Brands

- **Calm** — Same warm cream (#f5f5ee-range) backgrounds with lifestyle photography, single-weight serif display type, and extreme color restraint across the palette
- **Gentler Streak** — Editorial sans-serif UI type at tight letter-spacing with achromatic palette and nature-adjacent photography for a wellness app
- **Whoop** — Health tech brand that uses lifestyle photography as primary visual language with near-typographic-only supporting sections
- **Care.com** — Multi-generational family care positioning expressed through warm-tone photography and editorial type hierarchy
- **Bellabeat** — Custom serif display typeface at very tight tracking overlaid on full-bleed photography, with a warm neutral palette and no accent color

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-ink: #192830;
  --color-parchment: #f5f5ee;
  --color-linen: #e4e7da;
  --color-pressed-cotton: #d7d7cb;
  --color-graphite: #2f3136;
  --color-slate: #535557;
  --color-dusk: #424e52;
  --color-white: #ffffff;
  --color-ink: #000000;
  --font-abc-arizona-sans: 'ABC Arizona Sans', Freight Sans Pro or Cormorant SC;
  --font-abc-arizona-flare: 'ABC Arizona Flare', Playfair Display or Cormorant Garamond;
  --text-caption: 14px;
  --leading-caption: 1;
  --tracking-caption: -0.35px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.32px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.32px;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: -1.24px;
  --text-heading: 48px;
  --leading-heading: 1;
  --tracking-heading: -2.02px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -3.2px;
  --spacing-4: 4px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-123: 123px;
  --spacing-200: 200px;
  --spacing-218: 218px;
  --radius-cards: 6px;
  --radius-buttons: 4-6px;
  --radius-avatarcircles: 9999px;
  --surface-page-ground: #f5f5ee;
  --surface-section-lift: #e4e7da;
  --surface-card-surface: #d7d7cb;
  --surface-dark-anchor: #192830;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-ink: #192830;
  --color-parchment: #f5f5ee;
  --color-linen: #e4e7da;
  --color-pressed-cotton: #d7d7cb;
  --color-graphite: #2f3136;
  --color-slate: #535557;
  --color-dusk: #424e52;
  --color-white: #ffffff;
  --color-ink: #000000;
  --font-abc-arizona-sans: 'ABC Arizona Sans', Freight Sans Pro or Cormorant SC;
  --font-abc-arizona-flare: 'ABC Arizona Flare', Playfair Display or Cormorant Garamond;
  --text-caption: 14px;
  --leading-caption: 1;
  --tracking-caption: -0.35px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.32px;
  --text-body-lg: 20px;
  --leading-body-lg: 1.2;
  --tracking-body-lg: -0.32px;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1;
  --tracking-heading-sm: -1.24px;
  --text-heading: 48px;
  --leading-heading: 1;
  --tracking-heading: -2.02px;
  --text-display: 64px;
  --leading-display: 1;
  --tracking-display: -3.2px;
  --spacing-4: 4px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-123: 123px;
  --spacing-200: 200px;
  --spacing-218: 218px;
  --radius-cards: 6px;
  --radius-buttons: 4-6px;
  --radius-avatarcircles: 9999px;
  --surface-page-ground: #f5f5ee;
  --surface-section-lift: #e4e7da;
  --surface-card-surface: #d7d7cb;
  --surface-dark-anchor: #192830;
}
```

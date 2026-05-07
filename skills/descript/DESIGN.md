---
version: alpha
name: "Descript"
description: "Descript's visual language is deep burgundy darkness cut by coral-red action — like the interior of a recording booth where the walls absorb everything and only the signal glows. The #390a1a near-black burgundy dominates 70% of the hero, creating a theater-dark immersion that makes the coral-red CTA (#f73b3b) feel like an on-air indicator light. Headlines use Gamuth Display, a custom editorial serif at 88px — an unusual choice for a SaaS product that signals craft and content creation rather than enterprise utility. The light sections (#faf8f7, a warm off-white) provide contrast between dark bands without ever going pure white, keeping the palette unified in warmth. Tag labels like 'AI VIDEO EDITOR' use Brett, a custom typeface with wide 0.04em tracking that mimics broadcast chyron styling."
theme: "mixed"
industry: "media"
source_url: "https://descript.com"
refero_style_id: "fe955d4a-c56d-4ab0-a6b3-8d985ab9570c"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935558034-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775935558034-thumb.jpg"
extracted_at: "2026-04-11T19:27:40.467Z"
---

# Descript — Style Reference

> Broadcast booth meets editorial press — deep burgundy theater dark, editorial serif headlines, coral on-air signals.

**Theme:** mixed

**Industry:** media

Descript's visual language is deep burgundy darkness cut by coral-red action — like the interior of a recording booth where the walls absorb everything and only the signal glows. The #390a1a near-black burgundy dominates 70% of the hero, creating a theater-dark immersion that makes the coral-red CTA (#f73b3b) feel like an on-air indicator light. Headlines use Gamuth Display, a custom editorial serif at 88px — an unusual choice for a SaaS product that signals craft and content creation rather than enterprise utility. The light sections (#faf8f7, a warm off-white) provide contrast between dark bands without ever going pure white, keeping the palette unified in warmth. Tag labels like 'AI VIDEO EDITOR' use Brett, a custom typeface with wide 0.04em tracking that mimics broadcast chyron styling.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Broadcast Burgundy | #390a1a | `--color-broadcast-burgundy` | Hero backgrounds, primary dark surface — creates the theater-dark immersion that makes coral CTAs read as on-air signals |
| On-Air Coral | #f73b3b | `--color-on-air-coral` | Primary CTA buttons, active section labels — the single vivid signal against deep burgundy dark |
| Hot Take Red | #ff5340 | `--color-hot-take-red` | Inline text highlights, secondary accent emphasis in body copy |
| Plum Mid | #651a39 | `--color-plum-mid` | Nav hover states, secondary button backgrounds — one step lighter than Broadcast Burgundy for interactive depth |
| Deep Violet | #0c0b5f | `--color-deep-violet` | Inline links and callout text in light sections — a cool contrast to the otherwise warm palette |
| Soft Violet | #8787e0 | `--color-soft-violet` | Underlord AI feature accent — used on AI chat interface send button |
| Pale Peach | #ffe8db | `--color-pale-peach` | Card backgrounds for feature cards in warm sections |
| Blush Mist | #f1eaed | `--color-blush-mist` | Card backgrounds for testimonial and feature content cards in light sections |
| Studio Black | #190308 | `--color-studio-black` | Deepest background layer, nav overlay backgrounds |
| Ink Dark | #1a1a1a | `--color-ink-dark` | Body text, nav text — used across all surfaces |
| Warm Parchment | #faf8f7 | `--color-warm-parchment` | Light section page backgrounds, button text on dark — deliberately off-white to maintain warmth against burgundy |
| Pure White | #ffffff | `--color-pure-white` | Button text on coral CTAs, card surfaces in chat UI |
| Dusty Rose | #a28993 | `--color-dusty-rose` | Secondary body text, de-emphasized labels on dark surfaces |
| Border Mauve | #907580 | `--color-border-mauve` | Card borders, dividers, input borders on dark surfaces |
| Fog Gray | #e5e7eb | `--color-fog-gray` | Borders and dividers on light surfaces, button borders |
| Muted Plum | #583f4a | `--color-muted-plum` | Mid-dark card backgrounds in dark sections |
| Steel Mauve | #d1c7cb | `--color-steel-mauve` | Shadows, secondary text on light surfaces |

## Tokens — Typography

### Booton

- **Token:** `--font-booton`
- **Substitute:** Source Sans Pro, IBM Plex Sans
- **Weights:** 400, 600
- **Sizes:** 16px, 18px, 20px, 24px, 56px
- **Line heights:** 1.10–1.56
- **Letter spacing:** -0.32px at 16px (−0.02em applied across all sizes)
- **OpenType features:** "calt", "liga"
- **Role:** Primary workhorse across UI — nav, body copy, buttons, captions, and feature labels. Weight 600 for subheadings and card titles; weight 400 for body and nav. The custom design gives it a warmth that distinguishes it from commodity grotesques like Inter.

### Gamuth Display

- **Token:** `--font-gamuth-display`
- **Substitute:** Playfair Display, Fraunces
- **Weights:** 400
- **Sizes:** 40px, 56px, 88px
- **Line heights:** 1.10–1.20
- **OpenType features:** "calt", "liga"
- **Role:** Hero and section headings only. A custom editorial serif — the signature choice that marks Descript as a content creation tool, not enterprise SaaS. Weight 400 at 88px is confident restraint; most SaaS hero fonts lean heavy.

### Brett

- **Token:** `--font-brett`
- **Substitute:** Courier Prime, Space Mono
- **Weights:** 400
- **Sizes:** 18px
- **Line heights:** 1.00–1.56
- **Letter spacing:** 0.72px at 18px (0.04em)
- **OpenType features:** "calt", "liga"
- **Role:** Section eyebrow labels only (e.g. 'AI VIDEO EDITOR', 'AI VIDEO AGENT'). Wide 0.04em tracking mimics broadcast chyron or print section slugs — the only place positive letter-spacing appears in the system.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 16px | 1.5 | -0.32px | `--text-caption` |
| body-sm | 18px | 1.56 | -0.36px | `--text-body-sm` |
| body | 20px | 1.5 | -0.4px | `--text-body` |
| subheading | 24px | 1.33 | -0.48px | `--text-subheading` |
| heading-sm | 40px | 1.2 | — | `--text-heading-sm` |
| heading | 56px | 1.1 | — | `--text-heading` |
| display | 88px | 1.1 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-39 | 39px | `--spacing-39` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-104 | 104px | `--spacing-104` |
| spacing-106 | 106px | `--spacing-106` |
| spacing-152 | 152px | `--spacing-152` |
| spacing-192 | 192px | `--spacing-192` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 4px |
| badges | 100px |
| inputs | 8px |
| buttons | 12px |
| buttonsPill | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.16) 0px 2px 4px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 80-120px |
| elementGap | 16px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Card Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Awards Recognition Card with Category Tags

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Main conversion action — 'Get started for free'

Background #f73b3b, text #fff7fd (warm white), border-radius 12px, padding 16px 32px. Booton weight 600 at 18px. No border. The coral against dark backgrounds is the loudest element in the hierarchy.

### Dark Pill Icon Button

**Role:** Media controls and compact icon actions in dark sections

Background #390a1a, border-radius 9999px, padding 12px all sides. Square-ish pill with icon only. #651a39 variant used for hover/active state.

### Sign Up Nav Button

**Role:** Primary nav conversion CTA

Background #651a39 (Plum Mid), text white, border-radius 12px, padding 12px 20px. Sits in sticky white nav — creates a warm burgundy-to-plum contrast against #faf8f7 nav background.

### Eyebrow Label

**Role:** Section category tags above hero headings

Brett typeface, 18px, 0.04em letter-spacing, #f73b3b (On-Air Coral) on dark surfaces, uppercase. No background, no border. Used exclusively to introduce section headings.

### Feature Card — Blush

**Role:** Feature description cards in light sections

Background #f1eaed (Blush Mist), border-radius 4px, padding 24px 24px 32px, no shadow. Booton 600 for card title at 20px, Booton 400 for body at 16px, #1a1a1a text.

### Feature Card — Peach

**Role:** Alternate feature cards with warmer tint

Background #ffe8db (Pale Peach), border-radius 4px, padding 24px 24px 32px, no shadow. Same typography treatment as Blush card.

### Testimonial Card

**Role:** Social proof quotes in grid layout on dark background

Background #583f4a (Muted Plum), border-radius 4px, padding 24px. Booton 400 at 16px, text #faf8f7. Subtle border-color #907580. No shadow.

### AI Chat Interface Card

**Role:** Product UI preview showing Underlord AI assistant

Background #ffffff, border-radius 12px, box-shadow rgba(0,0,0,0.16) 0px 2px 4px. Inner message bubbles use #cdcdfe (muted violet) for AI messages, #8787e0 for send button. Booton 400 at 16px.

### Nav Bar

**Role:** Sticky top navigation

Background #faf8f7, border-bottom #e5e7eb 1px. Text #1a1a1a at 16px Booton 400. Dropdown chevrons as inline icons. Max-height 50px. Contains wordmark (Descript logo with stacked-lines icon in #f73b3b), text nav links, and Sign Up pill button in #651a39.

### Social Proof Logo Strip

**Role:** Trust logos (Canva, Figma, Spotify, etc.)

Full-width band on #390a1a background. Logos rendered in #faf8f7 or desaturated white at reduced opacity. Booton 400 16px label text above in #a28993.

### Category Tag Badge

**Role:** Filter tags and feature category pills

Border 1px solid #907580, background transparent, border-radius 100px, padding 6px 12px. Booton 400 at 14-16px, text #faf8f7 on dark / #1a1a1a on light. Used in Awards card to show product category labels.

### Awards Recognition Card

**Role:** G2 award display in testimonials section

Background #faf8f7, border-radius 4px, padding 24px. Contains G2 badge images, year label in #f73b3b (Brett 18px), category tag badges with transparent background and #907580 borders.

## Do's and Don'ts

### Do

- Use Gamuth Display weight 400 for all H1/H2 hero headlines — never bold or weight 700
- Precede every major section heading with a Brett 18px, 0.04em tracked eyebrow label in #f73b3b
- Apply #f73b3b background with 12px border-radius and 16px/32px padding for all primary CTAs
- Pair #390a1a dark sections immediately with #faf8f7 light sections — maintain alternating band rhythm
- Use 4px border-radius for all cards; reserve 12px for floating UI components and modals
- Set Booton letter-spacing to −0.02em (negative) across all body sizes — never neutral or positive tracking except in Brett eyebrows
- Use #583f4a as the elevated card surface on dark #390a1a backgrounds — never pure black or white cards on dark sections

### Don't

- Never use a pure white (#ffffff) page background — all light surfaces use #faf8f7 (Warm Parchment)
- Never apply Gamuth Display to body copy, captions, or UI labels — it is heading-only at 40px minimum
- Never use the coral CTA (#f73b3b) for more than one button per screen — it functions as a single focal signal
- Never add drop shadows to section cards — background-color contrast alone defines elevation on card surfaces
- Never use a generic sans-serif substitute for Booton without applying −0.02em letter-spacing — positive or zero tracking breaks the warmth
- Never place green, blue, or teal semantic colors in the UI — the system has no cool-hued semantic states; use only the warm coral/burgundy/violet palette
- Never use border-radius above 12px on cards or sections — 9999px is reserved exclusively for compact icon pill buttons

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Studio Dark | #190308 | Deepest background — used behind logo strip and page footer |
| 1 | Broadcast Burgundy | #390a1a | Hero and primary dark sections — dominant dark surface |
| 2 | Muted Plum | #583f4a | Cards and elevated containers on dark backgrounds |
| 3 | Warm Parchment | #faf8f7 | Light section backgrounds, nav bar — the opposing pole to the dark surfaces |
| 4 | Blush Mist | #f1eaed | Cards and containers on light section backgrounds |
| 5 | Pure White | #ffffff | UI components like chat cards that need maximum contrast on any surface |

## Elevation

- **AI Chat Card:** `rgba(0, 0, 0, 0.16) 0px 2px 4px 0px`
- **Nav Dropdown:** `rgba(0, 0, 0, 0.16) 0px 2px 4px 0px`

## Imagery

Product UI screenshots are the primary visual asset — shown as floating cards partially cropped, overlapping, presented at perspective to simulate depth. No lifestyle photography in screenshots; the product interface IS the visual. UI previews show the Descript editor with real transcript text, building credibility through product exposure. G2 badge art (flat, illustrative award icons) appears in the social proof section. Icons use a filled-with-outline hybrid style at approximately 20-24px, monocolor matching the surface text color. The Underlord AI chat component is showcased as a standalone card with a clean white background floating against the dark hero — product-as-hero framing. All imagery is contained within rounded-corner cards (12px) rather than full-bleed, maintaining the 'exhibit behind glass' feel.

## Layout

Max-width approximately 1200px, centered with generous horizontal padding. Hero is full-bleed #390a1a burgundy dark spanning 100vh with centered headline stack and single CTA. Below hero, alternating dark (#390a1a) and light (#faf8f7) horizontal bands create a clear rhythm — dark for brand immersion, light for feature explanation. Feature sections use 2-3 column card grids with 24px gaps. Testimonials use a 2-column card grid on dark background with an awards card occupying the left column. Social proof logo strip is full-bleed single row between hero and feature sections. Navigation is sticky white bar at top with left-aligned wordmark and right-aligned utility links + CTA button. Section headings are always centered with eyebrow label above and subtext below, max-width ~640px for readability.

## Similar Brands

- **Rive** — Same mixed dark/light banded layout with a single vivid accent color on otherwise neutral-dark hero sections
- **Framer** — Custom editorial serif for SaaS hero headlines combined with product-UI-as-hero visual strategy
- **Loom** — Creator-tool SaaS with dark brand sections, coral/warm CTAs, and video product screenshot previews
- **Pitch** — Deep dark brand color as primary surface with warm off-white light sections and editorial type scale
- **Runway ML** — AI creative tool using dark theatrical hero + single bright CTA + product interface showcase as primary imagery

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-broadcast-burgundy: #390a1a;
  --color-on-air-coral: #f73b3b;
  --color-hot-take-red: #ff5340;
  --color-plum-mid: #651a39;
  --color-deep-violet: #0c0b5f;
  --color-soft-violet: #8787e0;
  --color-pale-peach: #ffe8db;
  --color-blush-mist: #f1eaed;
  --color-studio-black: #190308;
  --color-ink-dark: #1a1a1a;
  --color-warm-parchment: #faf8f7;
  --color-pure-white: #ffffff;
  --color-dusty-rose: #a28993;
  --color-border-mauve: #907580;
  --color-fog-gray: #e5e7eb;
  --color-muted-plum: #583f4a;
  --color-steel-mauve: #d1c7cb;
  --font-booton: 'Booton', Source Sans Pro, IBM Plex Sans;
  --font-gamuth-display: 'Gamuth Display', Playfair Display, Fraunces;
  --font-brett: 'Brett', Courier Prime, Space Mono;
  --text-caption: 16px;
  --leading-caption: 1.5;
  --tracking-caption: -0.32px;
  --text-body-sm: 18px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: -0.36px;
  --text-body: 20px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.48px;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1.2;
  --text-heading: 56px;
  --leading-heading: 1.1;
  --text-display: 88px;
  --leading-display: 1.1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-89: 89px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-104: 104px;
  --spacing-106: 106px;
  --spacing-152: 152px;
  --spacing-192: 192px;
  --radius-cards: 4px;
  --radius-badges: 100px;
  --radius-inputs: 8px;
  --radius-buttons: 12px;
  --radius-buttonspill: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
  --surface-studio-dark: #190308;
  --surface-broadcast-burgundy: #390a1a;
  --surface-muted-plum: #583f4a;
  --surface-warm-parchment: #faf8f7;
  --surface-blush-mist: #f1eaed;
  --surface-pure-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-broadcast-burgundy: #390a1a;
  --color-on-air-coral: #f73b3b;
  --color-hot-take-red: #ff5340;
  --color-plum-mid: #651a39;
  --color-deep-violet: #0c0b5f;
  --color-soft-violet: #8787e0;
  --color-pale-peach: #ffe8db;
  --color-blush-mist: #f1eaed;
  --color-studio-black: #190308;
  --color-ink-dark: #1a1a1a;
  --color-warm-parchment: #faf8f7;
  --color-pure-white: #ffffff;
  --color-dusty-rose: #a28993;
  --color-border-mauve: #907580;
  --color-fog-gray: #e5e7eb;
  --color-muted-plum: #583f4a;
  --color-steel-mauve: #d1c7cb;
  --font-booton: 'Booton', Source Sans Pro, IBM Plex Sans;
  --font-gamuth-display: 'Gamuth Display', Playfair Display, Fraunces;
  --font-brett: 'Brett', Courier Prime, Space Mono;
  --text-caption: 16px;
  --leading-caption: 1.5;
  --tracking-caption: -0.32px;
  --text-body-sm: 18px;
  --leading-body-sm: 1.56;
  --tracking-body-sm: -0.36px;
  --text-body: 20px;
  --leading-body: 1.5;
  --tracking-body: -0.4px;
  --text-subheading: 24px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.48px;
  --text-heading-sm: 40px;
  --leading-heading-sm: 1.2;
  --text-heading: 56px;
  --leading-heading: 1.1;
  --text-display: 88px;
  --leading-display: 1.1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-39: 39px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-89: 89px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-104: 104px;
  --spacing-106: 106px;
  --spacing-152: 152px;
  --spacing-192: 192px;
  --radius-cards: 4px;
  --radius-badges: 100px;
  --radius-inputs: 8px;
  --radius-buttons: 12px;
  --radius-buttonspill: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.16) 0px 2px 4px 0px;
  --surface-studio-dark: #190308;
  --surface-broadcast-burgundy: #390a1a;
  --surface-muted-plum: #583f4a;
  --surface-warm-parchment: #faf8f7;
  --surface-blush-mist: #f1eaed;
  --surface-pure-white: #ffffff;
}
```

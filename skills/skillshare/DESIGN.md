---
version: alpha
name: "Skillshare"
description: "Skillshare operates in stark black-and-white contrast with a single electric cyan-green accent that fires only on key interactive moments. The hero splits between a chalk-white left panel with bold headline weight and a pure black right panel hosting the registration flow — a literal light/dark duality that mirrors its creator/learner tension. Photo cards of instructors are presented edge-to-edge without padding, letting faces fill the frame; identity replaces ornament. The GT Walsheim Pro typeface at weight 700 for headlines and tight 0.90-0.96 line heights on large sizes creates a stacked, poster-like density. Cyan-green (#55da9b) and the brighter #00ff84 appear exclusively on CTAs and checkmarks — tiny amounts of color doing maximum work against acres of black and white."
theme: "mixed"
industry: "media"
source_url: "https://skillshare.com"
refero_style_id: "162e9ba9-7487-4b57-aee8-0bbeadcc586d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934898950-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775934898950-thumb.jpg"
extracted_at: "2026-04-11T19:16:57.861Z"
---

# Skillshare — Style Reference

> Poster studio on matte black — bold instructor faces, chalk-white type, single neon pulse.

**Theme:** mixed

**Industry:** media

Skillshare operates in stark black-and-white contrast with a single electric cyan-green accent that fires only on key interactive moments. The hero splits between a chalk-white left panel with bold headline weight and a pure black right panel hosting the registration flow — a literal light/dark duality that mirrors its creator/learner tension. Photo cards of instructors are presented edge-to-edge without padding, letting faces fill the frame; identity replaces ornament. The GT Walsheim Pro typeface at weight 700 for headlines and tight 0.90-0.96 line heights on large sizes creates a stacked, poster-like density. Cyan-green (#55da9b) and the brighter #00ff84 appear exclusively on CTAs and checkmarks — tiny amounts of color doing maximum work against acres of black and white.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Studio Black | #000000 | `--color-studio-black` | Primary text, dark section backgrounds, nav background on scroll — full-spectrum black with no tint creates maximum contrast against white sections |
| Pure White | #ffffff | `--color-pure-white` | Page background, card surfaces, text on dark sections, button fills |
| Deep Ink | #0b1215 | `--color-deep-ink` | Body text on white backgrounds, button text on white buttons — near-black with the faintest cool tint |
| Graphite Stroke | #394649 | `--color-graphite-stroke` | Border color on white buttons, secondary text, dividers |
| Fog Border | #e0e0e0 | `--color-fog-border` | Input borders, card dividers, subtle separators |
| Ash Mid | #757575 | `--color-ash-mid` | Placeholder text in inputs, secondary metadata |
| Charcoal Surface | #232424 | `--color-charcoal-surface` | Elevated dark card backgrounds on black sections — one step lighter than pure black to create surface depth without shadows |
| Skill Green | #55da9b | `--color-skill-green` | Primary CTA button fill, brand accent — a muted-vivid green that reads warm against black and cool against white, avoiding both danger and safety connotations |
| Neon Pulse | #00ff84 | `--color-neon-pulse` | Checkmark icons on feature lists, active fill states — saturated to near-glow, appears only as small marks on black backgrounds where luminosity hits hardest |
| Electric Cyan | #24c2f2 | `--color-electric-cyan` | Secondary accent, stat highlights, animated elements on dark sections |
| Creator Violet | #6927ef | `--color-creator-violet` | Hover state backgrounds, link accent on specialized flows |
| Deep Violet | #5620c1 | `--color-deep-violet` | Active/pressed state for violet interactive elements |
| Facebook Blue | #1877f2 | `--color-facebook-blue` | Facebook social login icon fill — brand color of the platform, not Skillshare's own |
| Google Red | #ea4335 | `--color-google-red` | Google 'G' logo fill in social login button |
| Warning Amber | #f6b60b | `--color-warning-amber` | Star ratings, achievement indicators |

## Tokens — Typography

### GT Walsheim Pro

- **Token:** `--font-gt-walsheim-pro`
- **Substitute:** Inter, DM Sans
- **Weights:** 100, 400, 500, 600, 700
- **Sizes:** 11px, 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 24px, 28px, 34px, 36px, 38px, 46px, 48px
- **Line heights:** 0.90–1.55 (tight 0.90–0.96 at display sizes 36px+, 1.20–1.50 at body sizes)
- **Letter spacing:** 0.1em on uppercase labels (caps tracking for ALL-CAPS metadata like MEMBERS, CLASSES, TEACHERS)
- **OpenType features:** normal
- **Role:** Every UI element — headlines at 700 weight with 0.90 line-height produce a stacked poster effect at 46–48px. Body at 400/16px with 1.50 line-height. Buttons and labels at 500–600. Weight 100 appears only in decorative or watermark contexts. The custom font brings rounded geometric terminals that soften the stark black/white palette.

### Times

- **Token:** `--font-times`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 16px
- **Line heights:** 1.00
- **Role:** System fallback only — appears in legal/fine-print contexts where custom font fails to load. Not an intentional typographic choice.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.45 | 1.1px | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.3 | — | `--text-subheading` |
| heading-sm | 28px | 1.25 | — | `--text-heading-sm` |
| heading | 38px | 1.1 | — | `--text-heading` |
| heading-lg | 46px | 0.96 | — | `--text-heading-lg` |
| display | 48px | 0.9 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-38 | 38px | `--spacing-38` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-54 | 54px | `--spacing-54` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-89 | 89px | `--spacing-89` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-93 | 93px | `--spacing-93` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-111 | 111px | `--spacing-111` |
| spacing-113 | 113px | `--spacing-113` |
| spacing-114 | 114px | `--spacing-114` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-121 | 121px | `--spacing-121` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-135 | 135px | `--spacing-135` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-164 | 164px | `--spacing-164` |
| spacing-168 | 168px | `--spacing-168` |
| spacing-182 | 182px | `--spacing-182` |
| spacing-190 | 190px | `--spacing-190` |
| spacing-205 | 205px | `--spacing-205` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 4px |
| pills | 100px |
| inputs | 4px |
| buttons | 4px |
| elevated | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 2px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(180, 184, 184, 0.5) 0px 2px 4px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1280px |
| sectionGap | 80-120px |
| cardPadding | 16px |
| elementGap | 8-12px |

## Components

### Registration Panel — Auth Buttons

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat Counter Cards — Social Proof Metrics

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Checklist — Dark Section

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Main registration and sign-up actions

Background #55da9b, text #0b1215 at weight 600, 14–16px GT Walsheim Pro. Border-radius 4px. Padding 5px 15px. No border. Appears in navbar and hero — the only consistent green element on any page section regardless of surrounding theme.

### White Outlined Auth Button

**Role:** Social login options (Google, Facebook, Apple)

Background #ffffff, text #0b1215 at weight 500, 15px. Border 1px solid #394649, border-radius 4px. Padding 5px 15px. Contains 20px platform icon left-aligned. Full-width within registration panel. Stacked vertically with 8px gaps.

### Ghost Text Link Button

**Role:** Email continuation, secondary navigation actions

Background transparent, text #6927ef at 500 weight, 14px. No border, no radius, no padding. Underlined on hover. Used as the 'Continuar con correo electrónico' option below the social auth buttons.

### Instructor Portrait Card

**Role:** Teacher browse grid — social proof section

Background #ffffff, border-radius 4px top, 8px bottom. Box-shadow rgba(0,0,0,0.1) 0px 2px 4px. Zero padding — photography fills 100% of card face. Overlaid at bottom: small 'CONOCE' label at 11px uppercase tracking 0.1em in #ffffff, followed by instructor name at 24px weight 700 #ffffff, title at 12px uppercase #ffffff. Gradient scrim from transparent to rgba(0,0,0,0.7) over bottom 40% of image.

### Category Browse Card

**Role:** Full-bleed horizontal category slider

No card chrome — full-bleed photographic strip with category label at bottom-left, 18–22px weight 700 #ffffff, with a dark overlay. Cards are 150–200px wide, full viewport height within the slider strip. No border radius — hard edges on left/right, categories run edge-to-edge.

### Stat Counter Card

**Role:** Social proof metrics — Members, Classes, Teachers, Rating

Background #232424 on a #000000 section. Border-radius 8px. Padding 16px. No shadow. Stat value at 34–38px weight 700 #ffffff. Label below at 11px weight 500, uppercase, tracking 0.1em, #757575. Four cards in a 4-column horizontal grid.

### Feature Checklist Item

**Role:** Benefit list on dark sections

Horizontal flex: #00ff84 filled checkmark icon (20px) + body text at 16px weight 400 #ffffff. Vertical gap 12px between items. No container — items float on pure black background.

### Search Input Bar

**Role:** Global navigation search

Background transparent, border 1px solid #e0e0e0, border-radius 4px. Padding 0 38px on both sides (icon gutters). Placeholder text #757575 at 14px GT Walsheim Pro. Search icon 20px left-inset, clear/submit icon right-inset. Appears in white nav bar only.

### Navigation Bar

**Role:** Sticky top navigation

Background #ffffff. Height ~56px. Logo left-aligned, 'Navegar' dropdown with chevron center-left. Search bar spans ~50% width. Right side: 'Iniciar sesión' text link in #0b1215 weight 500, then 'Regístrate' green CTA button. No bottom border in hero section — relies on content separation.

### Dark Split Section

**Role:** Feature/benefit alternating sections on black background

Full-width background #000000. Two-column layout: left column heading at 38–46px weight 700 #ffffff, right column feature checklist items. Section padding 80px vertical. Section headings use tight 0.96 line-height producing poster-stacked effect.

### Registration Panel

**Role:** Right-half hero sign-up widget

Background #ffffff. Width ~380px. Heading 'Disfruta 7 días gratis de Skillshare' at 22px weight 700 #0b1215 centered. Three stacked auth buttons with 8px gaps. 'Continuar con correo electrónico' ghost link centered below. Fine print at 11px #757575. Panel sits on pure black hero background with no card chrome — the white block floats.

## Do's and Don'ts

### Do

- Use #55da9b exclusively for the primary CTA button — never as a background fill for sections, badges, or decorative elements
- Apply GT Walsheim Pro weight 700 with line-height 0.90–0.96 at 46–48px for all display headlines; the tight stacking is the signature poster effect
- Use 0.1em letter-spacing on ALL-CAPS metadata labels (11–13px) — MEMBERS, CLASSES, TEACHERS all track wide to distinguish label hierarchy from body text
- Set instructor/creator photography cards to zero padding — images fill 100% of card face with a bottom scrim overlay for text legibility
- Use border-radius 4px for all buttons, inputs, and cards; reserve 100px radius only for pill-shaped tags or badges — never apply 100px to buttons
- On black-background sections, use #232424 as the surface for stat/metric cards to create depth without shadows or borders
- Keep #00ff84 confined to small checkmarks and icon fills on dark backgrounds only — never use it as button background or large fill

### Don't

- Never use the Creator Violet (#6927ef) or Electric Cyan (#24c2f2) as background fills for large sections — they are micro-accent colors for icons and specific interactive states only
- Never round hero photography or category browse strips — hard edges on full-bleed images are intentional; adding radius breaks the edge-to-edge poster aesthetic
- Never use weight 100 GT Walsheim Pro for any functional text — it appears only in decorative/watermark contexts and is illegible at body sizes on dark backgrounds
- Never place the Skill Green CTA (#55da9b) on a white section as a ghost or outlined variant — it only works as a filled button on both black and white backgrounds
- Never apply box-shadows to dark-theme (#000000 background) components — depth is achieved through #232424 surface elevation, not shadow
- Never mix multiple accent colors in the same section — pick either #55da9b or #24c2f2 per section, never both simultaneously
- Never set body text line-height below 1.40 at sizes 13–18px — tight line-height is reserved for 36px+ display sizes only

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Pure Black | #000000 | Dark section backgrounds, hero right panel, feature sections |
| 1 | Charcoal Lift | #232424 | Stat cards and metric tiles floating on pure black sections |
| 2 | White Page | #ffffff | Light section backgrounds, registration panel, card surfaces |
| 3 | Navigation Bar | #ffffff | Sticky nav — same white as page background, separated by content not chrome |

## Elevation

- **Course Card:** `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px`
- **Instructor Portrait Card:** `rgba(0, 0, 0, 0.1) 0px 2px 4px 0px`
- **Secondary UI Element:** `rgba(180, 184, 184, 0.5) 0px 2px 4px 0px`

## Imagery

Photography-forward with zero illustration outside of small SVG icons. Instructor portraits are the dominant image type — tight head-and-shoulders crops with natural studio lighting, filling card faces edge-to-edge with no padding or border treatment. Category browse strips use lifestyle photography (hands on tablets, close-up product shots, faces with accessories) at full viewport height in a horizontal scroll strip, each panel hard-edged with no radius. Text overlays use a bottom-anchored gradient scrim (transparent to rgba(0,0,0,0.7)) rather than opaque overlays. Photography is high-contrast with saturated colors — editorial-quality, not stock. Icons are minimal outlined SVGs at 20px, monochrome (#ffffff on dark, #0b1215 on light), stroke-weight consistent at ~1.5px. Imagery occupies roughly 60% of visual space on browse sections; the registration hero is text/UI-dominant with no photography.

## Layout

Max-width ~1280px centered with full-bleed dark and light section bands. Hero is a two-column split: left ~55% white background with oversized stacked headline, right ~45% black background hosting the registration widget — the only page section using this side-by-side light/dark split. Below the hero, full-bleed horizontal photography strips serve as category navigation, spanning 100vw with zero margin. Subsequent sections alternate pure black and white backgrounds with 80–120px vertical padding. Dark feature sections use two-column layout (headline left, checklist right). Instructor grid is a 4-column responsive card grid with 12px gutters. Stat counters use a single-row 4-column flex layout within a dark section. Navigation is a white sticky bar at ~56px height with logo-left, search-center, auth-right arrangement — no mega-menu, no sidebar.

## Similar Brands

- **Masterclass** — Same photography-dominant dark sections with white display typography and a single brand-color CTA, instructor portraits as hero content
- **Coursera** — Split hero layout with sign-up widget on dark right panel alongside headline-left structure, social auth button stacking
- **Domestika** — Edge-to-edge instructor photography cards with name/title overlay scrims and a creator-community grid browse pattern
- **LinkedIn Learning** — Mixed light/dark section alternation with white nav, neon accent on CTA, and category-browse horizontal strips

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-studio-black: #000000;
  --color-pure-white: #ffffff;
  --color-deep-ink: #0b1215;
  --color-graphite-stroke: #394649;
  --color-fog-border: #e0e0e0;
  --color-ash-mid: #757575;
  --color-charcoal-surface: #232424;
  --color-skill-green: #55da9b;
  --color-neon-pulse: #00ff84;
  --color-electric-cyan: #24c2f2;
  --color-creator-violet: #6927ef;
  --color-deep-violet: #5620c1;
  --color-facebook-blue: #1877f2;
  --color-google-red: #ea4335;
  --color-warning-amber: #f6b60b;
  --font-gt-walsheim-pro: 'GT Walsheim Pro', Inter, DM Sans;
  --font-times: 'Times', Georgia;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --tracking-caption: 1.1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.25;
  --text-heading: 38px;
  --leading-heading: 1.1;
  --text-heading-lg: 46px;
  --leading-heading-lg: 0.96;
  --text-display: 48px;
  --leading-display: 0.9;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-69: 69px;
  --spacing-80: 80px;
  --spacing-89: 89px;
  --spacing-90: 90px;
  --spacing-93: 93px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-111: 111px;
  --spacing-113: 113px;
  --spacing-114: 114px;
  --spacing-120: 120px;
  --spacing-121: 121px;
  --spacing-125: 125px;
  --spacing-128: 128px;
  --spacing-135: 135px;
  --spacing-153: 153px;
  --spacing-160: 160px;
  --spacing-164: 164px;
  --spacing-168: 168px;
  --spacing-182: 182px;
  --spacing-190: 190px;
  --spacing-205: 205px;
  --radius-cards: 4px;
  --radius-pills: 100px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;
  --radius-elevated: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
  --shadow-xl-2: rgba(180, 184, 184, 0.5) 0px 2px 4px 0px;
  --surface-pure-black: #000000;
  --surface-charcoal-lift: #232424;
  --surface-white-page: #ffffff;
  --surface-navigation-bar: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-studio-black: #000000;
  --color-pure-white: #ffffff;
  --color-deep-ink: #0b1215;
  --color-graphite-stroke: #394649;
  --color-fog-border: #e0e0e0;
  --color-ash-mid: #757575;
  --color-charcoal-surface: #232424;
  --color-skill-green: #55da9b;
  --color-neon-pulse: #00ff84;
  --color-electric-cyan: #24c2f2;
  --color-creator-violet: #6927ef;
  --color-deep-violet: #5620c1;
  --color-facebook-blue: #1877f2;
  --color-google-red: #ea4335;
  --color-warning-amber: #f6b60b;
  --font-gt-walsheim-pro: 'GT Walsheim Pro', Inter, DM Sans;
  --font-times: 'Times', Georgia;
  --text-caption: 11px;
  --leading-caption: 1.45;
  --tracking-caption: 1.1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.25;
  --text-heading: 38px;
  --leading-heading: 1.1;
  --text-heading-lg: 46px;
  --leading-heading-lg: 0.96;
  --text-display: 48px;
  --leading-display: 0.9;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-35: 35px;
  --spacing-38: 38px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-54: 54px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-69: 69px;
  --spacing-80: 80px;
  --spacing-89: 89px;
  --spacing-90: 90px;
  --spacing-93: 93px;
  --spacing-96: 96px;
  --spacing-103: 103px;
  --spacing-111: 111px;
  --spacing-113: 113px;
  --spacing-114: 114px;
  --spacing-120: 120px;
  --spacing-121: 121px;
  --spacing-125: 125px;
  --spacing-128: 128px;
  --spacing-135: 135px;
  --spacing-153: 153px;
  --spacing-160: 160px;
  --spacing-164: 164px;
  --spacing-168: 168px;
  --spacing-182: 182px;
  --spacing-190: 190px;
  --spacing-205: 205px;
  --radius-cards: 4px;
  --radius-pills: 100px;
  --radius-inputs: 4px;
  --radius-buttons: 4px;
  --radius-elevated: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
  --shadow-xl-2: rgba(180, 184, 184, 0.5) 0px 2px 4px 0px;
  --surface-pure-black: #000000;
  --surface-charcoal-lift: #232424;
  --surface-white-page: #ffffff;
  --surface-navigation-bar: #ffffff;
}
```

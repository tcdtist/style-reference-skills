---
version: alpha
name: "Wise Design"
description: "Wise Design hits like a silk-screened protest poster — electric lime green (#87ea5c) floods the hero at full saturation, then dark forest ink (#083400) type slams across it at display scale. The palette is deliberately non-fintech: vivid yellow (#ffea4b), peach (#ffbd89), cotton candy pink (#ffd5f0), and deep aubergine (#2a0831) coexist like a global currency collection. Wise Sans at weight 900 with 0.85 line-height is the signature — letterforms stack so tightly they almost collide, creating billboard compression at digital scale. Pills (9999px radius) are the only rounded UI element, while large content blocks use generous 86px radii creating soft-edged cards that contrast the aggressive type. The design system oscillates between screaming and whispering — massive stacked display type then a single quiet midsize line on white."
theme: "mixed"
industry: "design"
source_url: "https://wise.design"
refero_style_id: "c5326639-873a-4257-ad1a-7da9111e9286"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775943985153-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775943985153-thumb.jpg"
extracted_at: "2026-04-11T21:48:17.504Z"
---

# Wise Design — Style Reference

> Neon market stall on a global street — electric lime signage that shouts across a crowded marketplace, then polished product UI slips in behind it.

**Theme:** mixed

**Industry:** design

Wise Design hits like a silk-screened protest poster — electric lime green (#87ea5c) floods the hero at full saturation, then dark forest ink (#083400) type slams across it at display scale. The palette is deliberately non-fintech: vivid yellow (#ffea4b), peach (#ffbd89), cotton candy pink (#ffd5f0), and deep aubergine (#2a0831) coexist like a global currency collection. Wise Sans at weight 900 with 0.85 line-height is the signature — letterforms stack so tightly they almost collide, creating billboard compression at digital scale. Pills (9999px radius) are the only rounded UI element, while large content blocks use generous 86px radii creating soft-edged cards that contrast the aggressive type. The design system oscillates between screaming and whispering — massive stacked display type then a single quiet midsize line on white.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Lime Volt | #87ea5c | `--color-lime-volt` | Hero backgrounds, pill button fill, category tag backgrounds — the single most identifiable brand signal; vivid green against dark ink creates energy no fintech blue could achieve |
| Forest Ink | #083400 | `--color-forest-ink` | Primary text, dark headlines on lime, nav links, icon fills — deep forest green instead of black keeps everything on-brand even at body size |
| Volt Yellow | #ffea4b | `--color-volt-yellow` | Accent headlines, decorative text color on dark backgrounds — electric yellow that pairs with deep burgundy for maximum punch |
| Papaya | #ffbd89 | `--color-papaya` | Warm accent card backgrounds, decorative section highlights |
| Cotton Candy | #ffd5f0 | `--color-cotton-candy` | Soft accent backgrounds, section highlights in the mosaic grid |
| Aubergine Night | #2a0831 | `--color-aubergine-night` | Dark card backgrounds, high-contrast panels in the content grid — deep purple-black that isn't neutral |
| Crimson Depth | #370305 | `--color-crimson-depth` | Dark editorial backgrounds, heading color on light panels — near-black red that reads as richly dark without being neutral |
| Fog | #58717a | `--color-fog` | Secondary body text, border colors, UI chrome |
| White | #ffffff | `--color-white` | Page backgrounds, card surfaces, section backgrounds between color blocks |
| Positive | #008026 | `--color-positive` | Success states, positive transaction indicators |
| Negative | #cf2929 | `--color-negative` | Error states, negative transaction indicators |
| Accent Blue | #0097c7 | `--color-accent-blue` | Interactive accent links, focus states |
| Warning | #9a6500 | `--color-warning` | Warning states, attention-needed transaction labels |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter (Google Fonts — this IS Inter)
- **Weights:** 400, 600
- **Sizes:** 16px, 18px, 22px, 25px, 45px, 58px, 72px, 432px
- **Line heights:** 1.00 – 1.50 depending on size (display sizes use 1.00–1.03, body uses 1.44–1.50)
- **Letter spacing:** -2.16px at 72px, -1.39px at 58px, -0.50px at 45px, -0.18px at 25px, -0.12px at 22px, -0.09px at 18px, -0.08px at 16px
- **OpenType features:** "calt", "ss01"
- **Role:** All UI text: nav links, body copy, subheadings, and medium display text. Weight 400 for body, 600 for subheadings and labels. The 'ss01' feature setting and negative letter-spacing at large sizes (-0.03em at 72px down to -0.005em at 22px) keep it tight without feeling condensed.

### Wise Sans

- **Token:** `--font-wise-sans`
- **Substitute:** Obviously (similar ultra-compressed display), or Neue Haas Grotesk Display at ultra weight
- **Weights:** 400, 900
- **Sizes:** 187px, 288px, 306px, 374px, 562px
- **Line heights:** 0.85
- **OpenType features:** "ss01", "calt"
- **Role:** Hero and section display headlines exclusively. Weight 900 at 0.85 line-height is the defining typographic move — lines of text stack so tightly the cap-height of one line nearly touches the descender zone of the line above, creating billboard-compressed stacked type. This is the visual signature of the design system.

### Zen Kaku Gothic New

- **Token:** `--font-zen-kaku-gothic-new`
- **Substitute:** Noto Sans JP weight 600
- **Weights:** 600
- **Sizes:** 432px
- **Line heights:** 1.00
- **OpenType features:** "calt"
- **Role:** Single-use mega-display for CJK character showcase — demonstrates multilingual typographic range of the system

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body-sm | 16px | 1.5 | -0.08px | `--text-body-sm` |
| body | 18px | 1.44 | -0.09px | `--text-body` |
| subheading | 22px | 1.25 | -0.12px | `--text-subheading` |
| heading-sm | 25px | 1.25 | -0.18px | `--text-heading-sm` |
| heading | 45px | 1.17 | -0.5px | `--text-heading` |
| heading-lg | 58px | 1.03 | -1.39px | `--text-heading-lg` |
| display | 72px | 1 | -2.16px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-17 | 17px | `--spacing-17` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-27 | 27px | `--spacing-27` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-86 | 86px | `--spacing-86` |
| spacing-101 | 101px | `--spacing-101` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-202 | 202px | `--spacing-202` |
| spacing-225 | 225px | `--spacing-225` |

### Border Radius

| Element | Value |
| --- | --- |
| body | 1440px |
| tags | 9999px |
| cards | 86px |
| buttons | 9999px |
| contentBlocks | 86px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 80-120px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### Category Navigation Pills

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Transaction Card (Product UI)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Mosaic Design System Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Lime Pill Button

**Role:** Primary CTA and category tag navigation

backgroundColor: #87ea5c (display-p3), color: #083400, borderRadius: 9999px, paddingTop: 11px, paddingBottom: 11px, paddingRight: 24px, paddingLeft: 24px. Font: Inter 400 16px. No border — the lime fill IS the button. Used for 'Components', 'Flags', 'Tone of voice' category navigation.

### Ghost Pill Button

**Role:** Secondary or transparent navigation action

backgroundColor: transparent, color: #083400, borderRadius: 9999px, paddingTop: 11px, paddingBottom: 11px, paddingRight: 24px, paddingLeft: 24px. No visible border. Appears on same lime background surfaces where the lime fill would be redundant.

### Hero Display Block

**Role:** Full-viewport brand statement sections

backgroundColor: #87ea5c, full-width. Wise Sans weight 900 at 288–562px, color: #083400, lineHeight: 0.85. Text is centered and stacked — 2 lines maximum, each word or pair filling near full width. No padding reduction at any viewport — the type fills edge-to-edge aggressively.

### Navigation Bar

**Role:** Site-level navigation

backgroundColor: #87ea5c (matches hero, seamless), logo left-aligned with Wise wordmark in #083400. Nav links center-right: 'Design at Wise', 'Foundations', 'Components', 'Patterns', 'Resources' in Inter 400 16px #083400 with -0.08px letter-spacing. Search icon (magnifier) far right. No divider between nav and hero — intentionally merged.

### Mosaic Content Card

**Role:** Design system section showcase tiles in scrolling grid

Variable backgroundColor per tile: #87ea5c, #ffd5f0, #ffbd89, #2a0831, #370305, #ffffff. borderRadius: 86px. Contains either large display type (Wise Sans 900), illustration, photography, or product UI at full bleed within the rounded card bounds. Each tile is a self-contained visual story for a design system section.

### Editorial Subheading

**Role:** Section introduction text between visual blocks

Inter 600 45px, color: #083400, lineHeight: 1.17, letterSpacing: -0.5px. Displayed on #ffffff background with generous whitespace above and below (80px+). Used for statements like 'Made for the world' — single short line, centered or left-aligned.

### Typography Specimen Card

**Role:** Design system typography showcase tile

backgroundColor: #083400 (dark forest), borderRadius: 86px. Wise Sans weight 900 at 288px+, color: #87ea5c, lineHeight: 0.85. 'WISE SANS' stacked display — lime text on forest card. Demonstrates the inverse colorway from the hero.

### Category Label Tag

**Role:** Section or content type identifier in mosaic grid

Same as Lime Pill Button — backgroundColor: #87ea5c, color: #083400, borderRadius: 9999px, padding: 11px 24px, Inter 400 16px. Positioned floating at bottom edge of mosaic section to label content category ('Flags', 'Components', 'Tone of voice').

## Do's and Don'ts

### Do

- Use Wise Sans weight 900 with lineHeight 0.85 for all hero display text — lines must stack tightly, almost touching, at 288px minimum
- Fill entire hero and nav sections with #87ea5c — the lime is a background, not a highlight; it should dominate, not accent
- Pair #083400 (Forest Ink) as the primary text color on lime and white backgrounds — never use pure black (#000000) anywhere in the system
- Assign 86px border-radius to content cards and mosaic tiles; reserve 9999px exclusively for pill buttons and tags
- Use the full accent palette (#ffea4b, #ffbd89, #ffd5f0, #2a0831, #370305) as full-bleed card backgrounds — each color is a distinct 'room', not a subtle tint
- Apply Inter font-feature-settings: "calt", "ss01" — the ss01 variant alternates specific letterforms that are part of the typographic identity
- Maintain negative letter-spacing on Inter at all display sizes: -2.16px at 72px, scaling to -0.08px at 16px

### Don't

- Never use #87ea5c as a small accent detail — it must be used at large scale (full backgrounds, full buttons) or not at all
- Do not use weight 700 for body text — Inter weights are strictly 400 (body) and 600 (labels/subheadings)
- Never apply drop shadows or elevation effects — the system uses color contrast and scale for hierarchy, not shadow depth
- Do not use rectangular (0px radius) cards — content blocks must use either 86px radius or 9999px pill; sharp corners are absent from the system
- Never use conventional fintech blue as a primary brand color — #0097c7 exists only for semantic accent links and focus states, never as primary CTA or brand expression
- Do not place Wise Sans at sizes below 187px — it is a display-only typeface; Inter handles all UI and body text
- Never mix multiple chromatic background colors in a single section — each panel is monochromatic, switching color only at full section breaks

## Imagery

Three distinct visual modes coexist in the system. First: full-bleed real-world photography (street scenes with flags, city imagery) used full-width with no border-radius — raw, unmasked, documentary in feel, treated as atmospheric section dividers rather than product illustration. Second: product UI screenshots (transaction cards, app interfaces) contained within 86px-radius white cards, floating against colored backgrounds — the UI is the product showcase. Third: a mosaic of color-block tiles containing flags (circular crop), paper airplane illustrations, currency symbols, and illustrated characters — these are flat, graphic, brand-colored, and decorative. Icons visible in transaction UI are outlined stroke-style at ~1.5px weight, monochrome #083400. The overall density is image-heavy in the mosaic zones but text-dominant in editorial sections — the system alternates between visual feast and typographic silence.

## Layout

Full-bleed sections with no max-width constraint on hero and color blocks; content sections use ~1152-1440px max-width centered. Hero is full-viewport lime green with Wise Sans stacked display type, no image — the type IS the visual. Navigation merges seamlessly with hero background (same #87ea5c), creating a single unbroken color field from top of page through hero. Section rhythm alternates: massive color hero → white editorial pause → full-bleed photography → mosaic card grid → white section → dark panel → repeat. No decorative dividers — color is the divider. The mosaic grid uses 3-column irregular tile layout where tiles vary in height and background color, creating a collage effect. Individual content sections use centered single-column for editorial statements and 2-column for feature explanations. Spacious vertical breathing room (80-120px) between major sections ensures each color block reads as a distinct visual beat.

## Similar Brands

- **Monzo** — Coral/hot pink dominant brand color on fintech product — single saturated hue flooding UI that defies category conventions
- **Duolingo** — Vivid lime/green as primary brand color with dark-on-bright type treatment and ultra-rounded pill buttons at 9999px
- **Figma (brand site)** — Design system documentation with color-block mosaic tiles, each tile a distinct hue showcasing system components
- **Cash App** — Same lime-green brand color in fintech context, pill buttons, and dark forest-green text on bright backgrounds
- **Mailchimp** — Bold editorial display type (ultra-heavy, stacked) on vivid brand-colored backgrounds as primary hero treatment

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-lime-volt: #87ea5c;
  --color-forest-ink: #083400;
  --color-volt-yellow: #ffea4b;
  --color-papaya: #ffbd89;
  --color-cotton-candy: #ffd5f0;
  --color-aubergine-night: #2a0831;
  --color-crimson-depth: #370305;
  --color-fog: #58717a;
  --color-white: #ffffff;
  --color-positive: #008026;
  --color-negative: #cf2929;
  --color-accent-blue: #0097c7;
  --color-warning: #9a6500;
  --font-inter: 'Inter', Inter (Google Fonts — this IS Inter);
  --font-wise-sans: 'Wise Sans', Obviously (similar ultra-compressed display), or Neue Haas Grotesk Display at ultra weight;
  --font-zen-kaku-gothic-new: 'Zen Kaku Gothic New', Noto Sans JP weight 600;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.08px;
  --text-body: 18px;
  --leading-body: 1.44;
  --tracking-body: -0.09px;
  --text-subheading: 22px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.12px;
  --text-heading-sm: 25px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.18px;
  --text-heading: 45px;
  --leading-heading: 1.17;
  --tracking-heading: -0.5px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.03;
  --tracking-heading-lg: -1.39px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -2.16px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-35: 35px;
  --spacing-43: 43px;
  --spacing-63: 63px;
  --spacing-80: 80px;
  --spacing-86: 86px;
  --spacing-101: 101px;
  --spacing-144: 144px;
  --spacing-202: 202px;
  --spacing-225: 225px;
  --radius-body: 1440px;
  --radius-tags: 9999px;
  --radius-cards: 86px;
  --radius-buttons: 9999px;
  --radius-contentblocks: 86px;
}
```

### Tailwind v4

```css
@theme {
  --color-lime-volt: #87ea5c;
  --color-forest-ink: #083400;
  --color-volt-yellow: #ffea4b;
  --color-papaya: #ffbd89;
  --color-cotton-candy: #ffd5f0;
  --color-aubergine-night: #2a0831;
  --color-crimson-depth: #370305;
  --color-fog: #58717a;
  --color-white: #ffffff;
  --color-positive: #008026;
  --color-negative: #cf2929;
  --color-accent-blue: #0097c7;
  --color-warning: #9a6500;
  --font-inter: 'Inter', Inter (Google Fonts — this IS Inter);
  --font-wise-sans: 'Wise Sans', Obviously (similar ultra-compressed display), or Neue Haas Grotesk Display at ultra weight;
  --font-zen-kaku-gothic-new: 'Zen Kaku Gothic New', Noto Sans JP weight 600;
  --text-body-sm: 16px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: -0.08px;
  --text-body: 18px;
  --leading-body: 1.44;
  --tracking-body: -0.09px;
  --text-subheading: 22px;
  --leading-subheading: 1.25;
  --tracking-subheading: -0.12px;
  --text-heading-sm: 25px;
  --leading-heading-sm: 1.25;
  --tracking-heading-sm: -0.18px;
  --text-heading: 45px;
  --leading-heading: 1.17;
  --tracking-heading: -0.5px;
  --text-heading-lg: 58px;
  --leading-heading-lg: 1.03;
  --tracking-heading-lg: -1.39px;
  --text-display: 72px;
  --leading-display: 1;
  --tracking-display: -2.16px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-17: 17px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-27: 27px;
  --spacing-29: 29px;
  --spacing-35: 35px;
  --spacing-43: 43px;
  --spacing-63: 63px;
  --spacing-80: 80px;
  --spacing-86: 86px;
  --spacing-101: 101px;
  --spacing-144: 144px;
  --spacing-202: 202px;
  --spacing-225: 225px;
  --radius-body: 1440px;
  --radius-tags: 9999px;
  --radius-cards: 86px;
  --radius-buttons: 9999px;
  --radius-contentblocks: 86px;
}
```

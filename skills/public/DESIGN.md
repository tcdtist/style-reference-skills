---
version: alpha
name: "Public"
description: "Public's design system evokes a confident, editorial demeanor, balancing sharp, sophisticated typography with subtle, functional use of color. The primary palette is a clean, high-contrast monochrome, serving as a neutral canvas for data and product interfaces. Visual accents are delivered through a singular, vivid violet for interactive elements and an electric blue for subtle highlights, creating focal points without visual clutter. Surfaces are predominantly light and spacious, grounded by slim borders and minimal shadow, suggesting precision and clarity in financial tooling."
theme: "light"
industry: "fintech"
source_url: "https://public.com"
refero_style_id: "9d16aa65-cef7-4bf7-83c8-91837a248cd9"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509016634-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509016634-thumb.jpg"
extracted_at: "2026-04-30T00:30:47.087Z"
---

# Public — Style Reference

> Crisp Editorial Clarity: a high-contrast financial journal on a pristine, structured page.

**Theme:** light

**Industry:** fintech

Public's design system evokes a confident, editorial demeanor, balancing sharp, sophisticated typography with subtle, functional use of color. The primary palette is a clean, high-contrast monochrome, serving as a neutral canvas for data and product interfaces. Visual accents are delivered through a singular, vivid violet for interactive elements and an electric blue for subtle highlights, creating focal points without visual clutter. Surfaces are predominantly light and spacious, grounded by slim borders and minimal shadow, suggesting precision and clarity in financial tooling.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink | #000000 | `--color-ink` | Primary text, darkest backgrounds, prominent borders |
| Canvas | #ffffff | `--color-canvas` | Page backgrounds, card surfaces, UI elements requiring high contrast |
| Smoke | #e9edf3 | `--color-smoke` | Subtle borders, dividers, card outlines, background separation |
| Graphite | #262626 | `--color-graphite` | Dark card backgrounds, secondary dark text, subtle dark interface elements |
| Ash | #dce2ea | `--color-ash` | Muted borders and text, outlines for secondary elements |
| Jet | #1b2128 | `--color-jet` | Dark navigation text, dark UI element borders, secondary dark backgrounds |
| Slate | #516880 | `--color-slate` | Secondary text, muted links, subtle informational accents |
| Cloud | #a8b4bf | `--color-cloud` | Subtle border accents, light informational text, placeholder content |
| Ultramarine | #0027b3 | `--color-ultramarine` | Active link text, interactive element borders, functional highlights |
| Azure Glow | #95d0ff | `--color-azure-glow` | Decorative icons, light accent fills, subtle hover states |
| Lilac Mist | #fff0fe | `--color-lilac-mist` | Light supporting surface for subtle backgrounds and section separation. Do not promote it to the primary CTA color |
| Sky Veil | #cdf3ff | `--color-sky-veil` | Gray supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Ocean Deep | #00379a | `--color-ocean-deep` | Subtle icon fills, deeper blue decorative elements |
| Nav Blue | #566e8c | `--color-nav-blue` | Navigation active states, subtle header text |

## Tokens — Typography

### Denton

- **Token:** `--font-denton`
- **Substitute:** Playfair Display
- **Weights:** 300
- **Sizes:** 48px, 52px, 80px
- **Line heights:** 1.00, 1.11, 1.12, 1.13
- **Role:** Display and primary headings – its light weight at large sizes conveys authority through understatement, setting an intellectual tone.

### Invest Pro

- **Token:** `--font-invest-pro`
- **Substitute:** IBM Plex Serif
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 20px, 24px, 32px
- **Line heights:** 1.00, 1.13, 1.14, 1.15, 1.17, 1.20, 1.28, 1.29, 1.31, 1.37, 1.38, 1.50
- **Role:** Secondary headings, subheadings, and emphasized text segments – providing a structured, confident contrast to Inter for key informational blocks.

### Invest Pro

- **Token:** `--font-invest-pro`
- **Substitute:** IBM Plex Serif
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 20px, 24px, 32px
- **Line heights:** 1.00, 1.13, 1.14, 1.15, 1.17, 1.20, 1.28, 1.29, 1.31, 1.37, 1.38, 1.50
- **Role:** More emphatic secondary headings and callouts, providing a slightly bolder touch while retaining the core character of Invest Pro.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 10px, 11px, 12px, 14px, 16px
- **Line heights:** 1.00, 1.15, 1.42, 1.43, 1.50, 1.54, 1.60, 2.00
- **Letter spacing:** normal
- **Role:** Body copy, navigation, and detailed information – its neutral, legible form supports dense data and long-form content.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 10px, 11px, 12px, 14px, 16px
- **Line heights:** 1.00, 1.15, 1.42, 1.43, 1.50, 1.54, 1.60, 2.00
- **Letter spacing:** normal
- **Role:** Strong emphasis within body text, labels, and small headings, maintaining high readability at smaller sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0px | `--text-caption` |
| body-lg | 14px | 1.43 | 0px | `--text-body-lg` |
| heading-sm | 20px | 1.2 | 0px | `--text-heading-sm` |
| heading | 24px | 1.17 | 0px | `--text-heading` |
| heading-lg | 32px | 1.28 | 0px | `--text-heading-lg` |
| display | 48px | 1.11 | 0px | `--text-display` |
| display-lg | 80px | 1.13 | 0px | `--text-display-lg` |

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
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-65 | 65px | `--spacing-65` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-190 | 190px | `--spacing-190` |
| spacing-210 | 210px | `--spacing-210` |
| spacing-250 | 250px | `--spacing-250` |
| spacing-320 | 320px | `--spacing-320` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| cards | 16px |
| buttons | 100px |
| default | 4px |
| minimal | 1px |
| partial | 12px |
| smallInteractive | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.08) 0px 1px 10px 0px | `--shadow-xl` |
| xl-2 | rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.06) 0px 24px 24px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Primary Ghost Button

**Role:** Call to action

An outlined button with transparent background, white text (#ffffff), and a subtle border of Ultramarine (#0027b3) or rgba(255, 255, 255, 0.1). Rounded with 100px radius and 40px horizontal padding. Features a dual colored shadow to hint at interactivity: rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px.

### Filled Action Button

**Role:** Call to action

A solid black button (#000000) with white text (#ffffff). Rounded corners set at 100px, with 40px horizontal padding. Used for primary actions like 'Get started'.

### Section Card

**Role:** Content container

A light gray background card (#fafa_fafa) with 16px border-radius. No shadow, flush padding for internal content. Used to group related features or information.

### Monochrome Elevated Card

**Role:** Accent / Elevated content.

A dark gray background card (#262626) with a subtle shadow (rgba(0, 0, 0, 0.08) 0px 1px 10px 0px). Has 6px border-radius and 16px padding on all sides. Used for focused content blocks, such as AI agent details or market briefs.

### Informational Badge

**Role:** Metadata / Status

Transparent background badge with black text (#000000) and no border radius. Used for small, contextual labels like '3.30% APY*'.

### Feature Link Card

**Role:** Navigation / Feature overview

Transparent background with no border-radius or shadow, 22px left padding. Utilized for introductory feature links like 'Stocks Build your portfolio'.

## Do's and Don'ts

### Do

- Prioritize Ink (#000000) for all primary text and critical headlines to maintain high contrast and legibility.
- Use Ultramarine (#0027b3) exclusively for interactive elements like links and button borders, ensuring functional color remains a distinct accent.
- Apply Denton at Weight 300 for all large headings (48px and above) to convey a sense of understated authority.
- Maintain a default border-radius of 4px for most UI elements, reserving 100px for buttons and 16px for prominent cards.
- Employ Smoke (#e9edf3) for hairline borders and subtle dividers to structure content without heavy visual lines.
- Ensure generous spacing with an 8px element gap and 16px card padding to maintain a spacious, uncluttered layout.
- Use Invest Pro for secondary titles and emphasized text, ensuring it complements Denton without competing for attention.
- Leverage the dual-tinted shadow (rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px) for highly interactive ghost buttons to add distinct visual depth.

### Don't

- Avoid using highly saturated colors outside of the defined Ultramarine (#0027b3) and Azure Glow (#95d0ff) accents.
- Do not introduce heavy drop shadows or decorative gradients on surfaces, as the design maintains minimal elevation.
- Refrain from mixing font families randomly; adhere strictly to Inter for body text, Invest Pro for structured text, and Denton for display headings.
- Do not use border-radius values other than 1px, 4px, 8px, 12px, 16px, 100px, or 999px.
- Do not use #0000ee (browser default link blue) for any link states; use Ultramarine (#0027b3) instead.
- Do not use an element gap smaller than 8px for vertical or horizontal spacing between related items.
- Avoid excessive use of uppercase text; reserve it only for specific, highly constrained labels or navigation items where it's explicitly observed.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #ffffff | Dominant page background, base for light sections. |
| 1 | Section Card | #fafa_fafa | Light background for grouping content segments within the main canvas. |
| 2 | Monochrome Elevated Card | #262626 | Darker, slightly elevated card backgrounds for focused information or interactive elements. |

## Elevation

- **Monochrome Elevated Card:** `rgba(0, 0, 0, 0.08) 0px 1px 10px 0px`
- **Primary Ghost Button:** `rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px`

## Imagery

The visual language for imagery is primarily product-focused and functional. It features clean product screenshots of UI interfaces, often displayed within device mockups. These are presented without heavy filters or dramatic lighting, maintaining a sense of realism and direct utility. Imagery primarily serves an explanatory role, showcasing the product's functionality rather than purely decorative atmosphere. The density is moderate; images are used to break up text-heavy sections and illustrate concepts, but the layout remains text-dominant.

## Layout

The page primarily uses a contained layout with elements centered within a maximum width, though the hero section can be full-bleed. The hero features a large, light-weighted headline centered over a background that integrates product imagery. Sections exhibit a consistent vertical rhythm, often alternating between centered stacks of text, or two-column layouts pairing text with a visual. Content is arranged with a sense of order and precision, frequently utilizing visual separations for clarity. Navigation is a sticky top bar with clearly delineated links and distinct login/signup buttons.

## Similar Brands

- **Linear** — High-contrast monochrome UI with minimal use of accent color, clean spacious layouts, and sharp typography.
- **Rippling** — Editorial feel achieved through distinct, impactful heading fonts contrasting with clean body text, and a restrained color palette.
- **Stripe** — Emphasis on clear information hierarchy, high legibility, subtle borders, and a focus on product functionality over decorative elements.
- **Wealthfront** — Sophisticated use of typography for financial services, a clean and uncluttered interface, and a primary focus on data presentation.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink: #000000;
  --color-canvas: #ffffff;
  --color-smoke: #e9edf3;
  --color-graphite: #262626;
  --color-ash: #dce2ea;
  --color-jet: #1b2128;
  --color-slate: #516880;
  --color-cloud: #a8b4bf;
  --color-ultramarine: #0027b3;
  --color-azure-glow: #95d0ff;
  --color-lilac-mist: #fff0fe;
  --color-sky-veil: #cdf3ff;
  --color-ocean-deep: #00379a;
  --color-nav-blue: #566e8c;
  --font-denton: 'Denton', Playfair Display;
  --font-invest-pro: 'Invest Pro', IBM Plex Serif;
  --font-invest-pro: 'Invest Pro', IBM Plex Serif;
  --font-inter: 'Inter', Inter;
  --font-inter: 'Inter', Inter;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-lg: 14px;
  --leading-body-lg: 1.43;
  --tracking-body-lg: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 24px;
  --leading-heading: 1.17;
  --tracking-heading: 0px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.28;
  --tracking-heading-lg: 0px;
  --text-display: 48px;
  --leading-display: 1.11;
  --tracking-display: 0px;
  --text-display-lg: 80px;
  --leading-display-lg: 1.13;
  --tracking-display-lg: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-190: 190px;
  --spacing-210: 210px;
  --spacing-250: 250px;
  --spacing-320: 320px;
  --radius-tags: 999px;
  --radius-cards: 16px;
  --radius-buttons: 100px;
  --radius-default: 4px;
  --radius-minimal: 1px;
  --radius-partial: 12px;
  --radius-smallinteractive: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 1px 10px 0px;
  --shadow-xl-2: rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.06) 0px 24px 24px 0px;
  --surface-canvas: #ffffff;
  --surface-section-card: #fafa_fafa;
  --surface-monochrome-elevated-card: #262626;
}
```

### Tailwind v4

```css
@theme {
  --color-ink: #000000;
  --color-canvas: #ffffff;
  --color-smoke: #e9edf3;
  --color-graphite: #262626;
  --color-ash: #dce2ea;
  --color-jet: #1b2128;
  --color-slate: #516880;
  --color-cloud: #a8b4bf;
  --color-ultramarine: #0027b3;
  --color-azure-glow: #95d0ff;
  --color-lilac-mist: #fff0fe;
  --color-sky-veil: #cdf3ff;
  --color-ocean-deep: #00379a;
  --color-nav-blue: #566e8c;
  --font-denton: 'Denton', Playfair Display;
  --font-invest-pro: 'Invest Pro', IBM Plex Serif;
  --font-invest-pro: 'Invest Pro', IBM Plex Serif;
  --font-inter: 'Inter', Inter;
  --font-inter: 'Inter', Inter;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body-lg: 14px;
  --leading-body-lg: 1.43;
  --tracking-body-lg: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 24px;
  --leading-heading: 1.17;
  --tracking-heading: 0px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.28;
  --tracking-heading-lg: 0px;
  --text-display: 48px;
  --leading-display: 1.11;
  --tracking-display: 0px;
  --text-display-lg: 80px;
  --leading-display-lg: 1.13;
  --tracking-display-lg: 0px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-65: 65px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-112: 112px;
  --spacing-128: 128px;
  --spacing-160: 160px;
  --spacing-190: 190px;
  --spacing-210: 210px;
  --spacing-250: 250px;
  --spacing-320: 320px;
  --radius-tags: 999px;
  --radius-cards: 16px;
  --radius-buttons: 100px;
  --radius-default: 4px;
  --radius-minimal: 1px;
  --radius-partial: 12px;
  --radius-smallinteractive: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.08) 0px 1px 10px 0px;
  --shadow-xl-2: rgba(255, 196, 250, 0.25) 8px -8px 20px 0px, rgba(56, 205, 255, 0.25) -8px 8px 30px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.06) 0px 24px 24px 0px;
  --surface-canvas: #ffffff;
  --surface-section-card: #fafa_fafa;
  --surface-monochrome-elevated-card: #262626;
}
```

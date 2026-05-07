---
version: alpha
name: "Nubank"
description: "Nubank's visual identity feels like a digitally native financial institution — confidently modern and approachable, driven by a vibrant violet. Large, friendly sans-serif type with subtle tracking dominates, creating a conversational tone. The defining feature is a playful tension between the dominant 'Royalty Violet' and stark black/white neutrals, softened by generous 999px pill radii on interactive elements which stand out against the otherwise sharp-edged UI. A single, consistent elevated primary action button in vibrant violet grounds the visual hierarchy amidst fluid, content-driven layouts."
theme: "light"
industry: "fintech"
source_url: "https://nubank.com.br"
refero_style_id: "f1a2100a-7cda-4787-b8af-5c5edcfcdff0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775927524002-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775927524002-thumb.jpg"
extracted_at: "2026-04-11T17:12:39.832Z"
---

# Nubank — Style Reference

> Royalty Violet and Pill Forms — a playful, digital-first financial presence.

**Theme:** light

**Industry:** fintech

Nubank's visual identity feels like a digitally native financial institution — confidently modern and approachable, driven by a vibrant violet. Large, friendly sans-serif type with subtle tracking dominates, creating a conversational tone. The defining feature is a playful tension between the dominant 'Royalty Violet' and stark black/white neutrals, softened by generous 999px pill radii on interactive elements which stand out against the otherwise sharp-edged UI. A single, consistent elevated primary action button in vibrant violet grounds the visual hierarchy amidst fluid, content-driven layouts.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Royalty Violet | #820ad1 | `--color-royalty-violet` | Primary interactive elements, call-to-action buttons, active states — provides a singular, striking brand accent against a largely achromatic palette. |
| Deep Violet Shadow | #290b4d | `--color-deep-violet-shadow` | Subtle background for UI elements, implying depth without heavy shadows. |
| Subtle Violet | #714f8f | `--color-subtle-violet` | Secondary brand usage, often in more ambient contexts. |
| Noir | #000000 | `--color-noir` | Primary text, critical UI elements, solid background for footers and hero sections — creates strong contrast and gravitas. |
| Porcelain White | #ffffff | `--color-porcelain-white` | Page backgrounds, card surfaces, text on dark backgrounds — provides a crisp, luminous canvas. |
| Ash Gray | #f4f4f4 | `--color-ash-gray` | Input fields, light backgrounds for subtle delineation — softer than pure white. |
| Silver Mist | #a2a2a2 | `--color-silver-mist` | Secondary text, inactive states, borders — a softer alternative to Noir for less prominent information. |
| Medium Gray | #b3b3b3 | `--color-medium-gray` | Placeholder text, minor details. |
| Dark Charcoal | #666666 | `--color-dark-charcoal` | Accent elements, fills. |
| Steel Gray | #777777 | `--color-steel-gray` | Icon and border colors. |

## Tokens — Typography

### Graphik Medium

- **Token:** `--font-graphik-medium`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 22px, 24px, 36px, 48px, 56px
- **Line heights:** 1.00, 1.10, 1.20, 1.30, 1.44, 1.50, 1.66, 2.22, 2.50, 2.80
- **Letter spacing:** -0.03em, -0.02em, -0.018em, -0.01em
- **OpenType features:** 'kern'
- **Role:** The primary typeface for all text content, from headings to body. Its consistent application across weights and sizes, often with subtle negative letter-spacing at larger sizes, creates a clean, modern, and highly legible visual rhythm. The medium weights feel substantial without being heavy, contributing to the approachable feel.

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| images | 32px |
| inputs | 24px |
| buttons | 999px |
| default | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 16-32px |
| elementGap | 8-24px |

## Components

### CPF Sign-up Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Product Carousel Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary & Secondary Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Call-to-action

Filled button with `Royalty Violet` background, `Porcelain White` text, `999px` border-radius, `0px` vertical padding and `24px` horizontal padding. Font: Graphik Medium, typically 16px.

### Ghost Navigation Button

**Role:** Navigation and secondary actions

Transparent background, `Noir` text, `999px` border-radius, `0px` padding. Used in header navigation.

### Solid Disabled Button

**Role:** Disabled state

Solid `Silver Mist` background, `Noir` text, `8px` border-radius, `0px` padding. Indicates inactive interaction.

### Login/Secondary Action Button

**Role:** Login and less prominent actions

Translucent `rgba(65, 65, 64, 0.4)` background, `Porcelain White` text, `999px` border-radius, `0px` vertical padding and `32px` horizontal padding. Used for 'Login Empresas' type actions.

### Hero Input Field

**Role:** Data entry

Long input with `Ash Gray` background, `Noir` text, `24px` border-radius, `16px` top padding, `40px` right padding, `0px` bottom padding, `20px` left padding. Placeholder text is assumed to be a lighter `Medium Gray`.

### Footer Badge

**Role:** Informational badge

Solid `Noir` background, `Porcelain White` text, `0px` border-radius, `0px` padding. Used for site metadata or copyright notices.

### Carousel Card

**Role:** Content showcase

Transparent background, `0px` border-radius, no box shadow, `0px` padding. Visually defined by imagery and implicit rounded containers in the screenshot with `32px` border-radius, not by the card component itself.

## Do's and Don'ts

### Do

- Use `Royalty Violet` (#820ad1) exclusively for primary call-to-action buttons and active states to maintain visual punch.
- Apply `999px` border-radius to all buttons and prominent interactive links.
- Ensure all body text uses Graphik Medium with `1.50` line height for a comfortable reading experience.
- Utilize `Ash Gray` (#f4f4f4) for form input backgrounds for subtle visual distinction.
- Maintain `24px` of horizontal padding for primary buttons and at least `16px` of vertical padding for form inputs.
- Employ Graphik Medium letter-spacing values (-0.03em at large sizes decreasing to normal at small text) to give headlines a distinctive and compact feel.
- Use `Noir` (#000000) for primary text and major headings on light backgrounds, and `Porcelain White` (#ffffff) on dark backgrounds.

### Don't

- Do not introduce new color accents outside of the established violet palette.
- Avoid using sharp corners on interactive buttons; maintain `999px` pill shapes.
- Do not create overly dense layouts; ensure generous `40px` minimum `sectionGap` between content blocks.
- Do not use arbitrary font weights; stick to Graphik Medium 400 and 500.
- Do not apply shadows for subtle elevation; use distinct background colors like `Ash Gray` or `Deep Violet Shadow` instead.
- Avoid excessive line-heights, ensuring textual densities are consistent with the established `1.50` for body copy.

## Imagery

The site uses a mix of high-quality, aspirational lifestyle photography for brand storytelling and polished product screenshots/illustrations for feature showcases. Photography often depicts diverse groups of people laughing or engaging in financial activities, leaning towards candid and natural light. Product images are typically presented on clean, simple backgrounds. A prominent hero section uses an aerial, dynamic shot of a stadium, tinted with the brand's violet, demonstrating a full-bleed, almost immersive visual. Imagery is broadly contained within rounded-corner elements (e.g., `32px` radius cards in the carousel) or subtle gradients that visually integrate with text. Iconography is minimal, primarily leveraging line icons with `Steel Gray` (#777777), maintaining the clean aesthetic. The role of imagery is both decorative, setting a brand mood, and explanatory, showcasing product features.

## Layout

The page primarily uses a max-width contained layout with centered content, though the hero section is full-bleed with a dark, immersive background and a centered, high-impact headline. Below the hero, the page transitions to a light theme with alternating sections using `Porcelain White` and `Ash Gray` backgrounds. Content blocks are typically structured in two-column layouts (text left, image right, or vice-versa) or a prominent three-column card grid in the 'Para cada momento, um Nubank diferente' section. Vertical spacing between sections is generous, around `40px` (though not consistently defined, derived from `marginBottom` and `marginTop` values). A sticky top navigation bar with the Nubank logo and key links is always present. The footer is a dense, multi-column layout on a `Noir` background, utilizing `Silver Mist` text for links and info.

## Similar Brands

- **Revolut** — Similar approach to vibrant brand color for primary actions against a clean, mostly achromatic UI. Also uses modern sans-serif typography with generous spacing.
- **Monzo** — Pill-shaped buttons and a strong, singular brand color (Monzo's orange) that acts as the primary accent, similar to Nubank's violet.
- **Wise (formerly TransferWise)** — Clean, digital-first aesthetic with a focus on simple UI and a prominent usage of a single, vibrant brand color (Wise's green) for primary interactions.
- **Coda** — Uses a similar modern sans-serif typeface (Graphik equivalent) with precise letter-spacing and a focus on clarity through strong typographic hierarchy and minimal reliance on shadows.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-royalty-violet: #820ad1;
  --color-deep-violet-shadow: #290b4d;
  --color-subtle-violet: #714f8f;
  --color-noir: #000000;
  --color-porcelain-white: #ffffff;
  --color-ash-gray: #f4f4f4;
  --color-silver-mist: #a2a2a2;
  --color-medium-gray: #b3b3b3;
  --color-dark-charcoal: #666666;
  --color-steel-gray: #777777;
  --font-graphik-medium: 'Graphik Medium', Inter;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;
  --radius-cards: 12px;
  --radius-images: 32px;
  --radius-inputs: 24px;
  --radius-buttons: 999px;
  --radius-default: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-royalty-violet: #820ad1;
  --color-deep-violet-shadow: #290b4d;
  --color-subtle-violet: #714f8f;
  --color-noir: #000000;
  --color-porcelain-white: #ffffff;
  --color-ash-gray: #f4f4f4;
  --color-silver-mist: #a2a2a2;
  --color-medium-gray: #b3b3b3;
  --color-dark-charcoal: #666666;
  --color-steel-gray: #777777;
  --font-graphik-medium: 'Graphik Medium', Inter;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;
  --radius-cards: 12px;
  --radius-images: 32px;
  --radius-inputs: 24px;
  --radius-buttons: 999px;
  --radius-default: 8px;
}
```

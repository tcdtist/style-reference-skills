---
version: alpha
name: "Foodnoms"
description: "Foodnoms presents a vibrant, data-driven aesthetic, blending clean white spaces with a lively and diverse color palette. The immediate impression is one of approachable and precise digital tools, reinforced by the combination of a sharp, clear sans-serif with a more characterful, rounded custom typeface. The use of multiple vivid accent colors, particularly in charts and graphs within the simulated app screens, suggests a system designed for information visualization where clarity and differentiation are paramount, rather than a strictly minimalist or monochromatic approach."
theme: "light"
industry: "other"
source_url: "https://foodnoms.com"
refero_style_id: "1e7dae3b-cb34-4fcf-8c32-051152aebbab"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933341816-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933341816-thumb.jpg"
extracted_at: "2026-04-11T18:49:24.219Z"
---

# Foodnoms — Style Reference

> Vibrant Data Clarity – like a meticulously organized information dashboard lit by colorful indicator lights.

**Theme:** light

**Industry:** other

Foodnoms presents a vibrant, data-driven aesthetic, blending clean white spaces with a lively and diverse color palette. The immediate impression is one of approachable and precise digital tools, reinforced by the combination of a sharp, clear sans-serif with a more characterful, rounded custom typeface. The use of multiple vivid accent colors, particularly in charts and graphs within the simulated app screens, suggests a system designed for information visualization where clarity and differentiation are paramount, rather than a strictly minimalist or monochromatic approach.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White Canvas | #ffffff | `--color-white-canvas` | Page backgrounds, card surfaces, primary text on dark accents. |
| Graphite Text | #2f2f2f | `--color-graphite-text` | Primary body text, darker UI elements, for strong contrast against White Canvas. |
| Raven Black | #000000 | `--color-raven-black` | Headings, strong emphasis text, icons, ensures maximum legibility. |
| Warm Gray | #f5f5f5 | `--color-warm-gray` | Subtle section dividers, light background for featured content blocks, provides slight visual separation from White Canvas. |
| Tangerine Accent | #ff5406 | `--color-tangerine-accent` | Primary call-to-action buttons, active navigation states, strong visual cues. |
| Sunshine Orange | #ff6d00 | `--color-sunshine-orange` | Secondary brand accent, used for specific data highlights or interactive elements within charts. |
| Crimson | #ff3400 | `--color-crimson` | Alternative CTA background, hints at urgency or important interactions. |
| Vivid Green | #00b33f | `--color-vivid-green` | Success states, positive metrics in data visualizations, provides a clear semantic indicator. |
| Sky Blue | #00a9dd | `--color-sky-blue` | Informational indicators, general data visualization elements. |
| Deep Purple | #5856de | `--color-deep-purple` | Distinctive data point, often used for highlighting or unique categories in graphs, providing strong differentiation. |

## Tokens — Typography

### Aquawax Pro

- **Token:** `--font-aquawax-pro`
- **Substitute:** Montserrat Bold, Lato Bold
- **Weights:** 700
- **Sizes:** 18px, 22px, 30px, 60px
- **Line heights:** 1.20, 1.40
- **OpenType features:** "blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on, "dlig" on, "ss01" on, "ss02" on, "ss03" on, "ss07" on
- **Role:** Headlines and prominent display text, using a full set of stylistic alternates and ligatures to give a distinct, modern character.

### Aquawax Pro

- **Token:** `--font-aquawax-pro`
- **Substitute:** Montserrat Medium, Lato Medium
- **Weights:** 500
- **Sizes:** 17px, 20px
- **Line heights:** 1.60, 1.80
- **OpenType features:** "blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on, "dlig" on, "ss01" on, "ss02" on, "ss03" on
- **Role:** Long-form body text and primary links, ensuring readable paragraphs with a slightly generous line height.

### Aquawax Pro

- **Token:** `--font-aquawax-pro`
- **Substitute:** Montserrat SemiBold, Lato SemiBold
- **Weights:** 600
- **Sizes:** 14px, 16px
- **Line heights:** 1.20, 1.40
- **OpenType features:** "blwf" on, "cv03" on, "cv04" on, "cv09" on, "cv11" on, "dlig" on, "ss01" on, "ss02" on, "ss03" on, "ss07" on
- **Role:** Subheadings, button text, and important inline labels, providing emphasis without the boldness of display text.

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** sans-serif
- **Role:** System-level text like menu items, captions, and fine print, defaulting to an accessible and ubiquitous sans-serif.

### system-ui

- **Token:** `--font-system-ui`
- **Substitute:** sans-serif
- **Role:** Bolded system text, minor navigation elements, and emphasized inline text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.2 | — | `--text-caption` |
| subheading | 18px | 1.2 | — | `--text-subheading` |
| heading | 22px | 1.2 | — | `--text-heading` |
| heading-lg | 30px | 1.4 | — | `--text-heading-lg` |
| display | 60px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| all | 26px |
| cards | 26px |
| buttons | 26px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 20px |
| elementGap | 8px |

## Components

### Primary CTA Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Stats / Metric Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Nutrition Goal Cards (Calories / Carbs / Fat / Protein)

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Primary Calls to Action

Filled button with Tangerine Accent background (#ff5406), White Canvas text (#ffffff), 26px border radius, 12px vertical padding, 20px horizontal padding. Prominently guides user interaction.

### Secondary Action Button

**Role:** Secondary Calls to Action

Ghost button with transparent background, Graphite Text (#2f2f2f) text at 64% opacity, 26px border radius, 12px vertical padding, 20px horizontal padding. Provides a less dominant interaction point.

### Subtle Action Button

**Role:** Minor interactions or alternative options

Filled button with Warm Gray background (#f5f5f5), Tangerine Accent text (#ff5406) at 29% opacity, 26px border radius, 12px vertical padding, 20px horizontal padding. Offers a discrete interaction with brand color reinforcement.

### Hero Headline

**Role:** Main page title

Aquawax Pro Bold 60px, line-height 1.2, Raven Black. Center-aligned, immediately grabs attention.

### Hero Subhead

**Role:** Supporting text for hero headline

Aquawax Pro Medium 20px, line-height 1.8, Graphite Text. Provides additional context below the main headline.

### Icon Button

**Role:** Download links for App Store

Apple App Store icon, presented as a clickable button to download the app. No explicit styling beyond the standard icon design.

## Do's and Don'ts

### Do

- Always use the 26px border radius for all buttons, cards, and interactive containers.
- Prioritize Tangerine Accent (#ff5406) for primary call-to-action buttons to ensure immediate visibility.
- Maintain generous vertical spacing between sections (184-256px) for an airy, comfortable layout.
- Use Aquawax Pro Bold for all major headlines to leverage its distinctive character, with Raven Black (#000000) for maximum impact.
- Employ the full palette of vivid accent colors (Green, Sky Blue, Deep Purple) for information visualization within app-like interface elements to signify distinct categories or data points.
- Ensure all body text uses Aquawax Pro Medium weight 500 for optimal readability at default sizes.

### Don't

- Avoid using Tangerine Accent (#ff5406) or Sunshine Orange (#ff6d00) for purely decorative purposes; reserve them for interactive elements or key data highlights.
- Do not introduce sharp corners or low radii; the 26px radius is a signature shape element.
- Never use generic system fonts for headlines or body text; always prefer Aquawax Pro with its specified weights and feature settings.
- Do not deviate from the established spacing scale (8px, 12px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 96px); maintain consistent density.
- Avoid overusing bold weighting (Aquawax Pro Bold 700) outside of headlines; use DemiBold (600) or Medium (500) for subheadings and body emphasis.

## Imagery

The visual language is dominated by product screenshots, specifically in-app UI. These screenshots are presented as realistic phone mockups with slightly rounded edges, suggesting the app's functionality and interface are the primary visual content. The treatment is clean and contained, showcasing the UI clearly without distracting backgrounds (except for one instance of lifestyle photography visible behind an app interface). There are no abstract graphics or 3D renders, maintaining a focus on functional utility. Icons within the app are filled and minimal. The overall role of imagery is demonstrative: to showcase the product's features and user experience directly.

## Similar Brands

- **Calm** — Clean white backgrounds paired with vibrant accent colors for key interactive elements and data visualization.
- **Headspace** — Approachable feel through rounded elements and a focus on clarity in product imagery, specifically app interfaces.
- **Fitbod** — Emphasis on showcasing in-app UI through phone mockups as a primary method of communicating product value.
- **Linear (light mode)** — Minimalist overall aesthetic with a particular focus on typography and subtle use of accent colors for interaction.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white-canvas: #ffffff;
  --color-graphite-text: #2f2f2f;
  --color-raven-black: #000000;
  --color-warm-gray: #f5f5f5;
  --color-tangerine-accent: #ff5406;
  --color-sunshine-orange: #ff6d00;
  --color-crimson: #ff3400;
  --color-vivid-green: #00b33f;
  --color-sky-blue: #00a9dd;
  --color-deep-purple: #5856de;
  --font-aquawax-pro: 'Aquawax Pro', Montserrat Bold, Lato Bold;
  --font-aquawax-pro: 'Aquawax Pro', Montserrat Medium, Lato Medium;
  --font-aquawax-pro: 'Aquawax Pro', Montserrat SemiBold, Lato SemiBold;
  --font-system-ui: 'system-ui', sans-serif;
  --font-system-ui: 'system-ui', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --text-heading: 22px;
  --leading-heading: 1.2;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.4;
  --text-display: 60px;
  --leading-display: 1.2;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --radius-all: 26px;
  --radius-cards: 26px;
  --radius-buttons: 26px;
}
```

### Tailwind v4

```css
@theme {
  --color-white-canvas: #ffffff;
  --color-graphite-text: #2f2f2f;
  --color-raven-black: #000000;
  --color-warm-gray: #f5f5f5;
  --color-tangerine-accent: #ff5406;
  --color-sunshine-orange: #ff6d00;
  --color-crimson: #ff3400;
  --color-vivid-green: #00b33f;
  --color-sky-blue: #00a9dd;
  --color-deep-purple: #5856de;
  --font-aquawax-pro: 'Aquawax Pro', Montserrat Bold, Lato Bold;
  --font-aquawax-pro: 'Aquawax Pro', Montserrat Medium, Lato Medium;
  --font-aquawax-pro: 'Aquawax Pro', Montserrat SemiBold, Lato SemiBold;
  --font-system-ui: 'system-ui', sans-serif;
  --font-system-ui: 'system-ui', sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.2;
  --text-subheading: 18px;
  --leading-subheading: 1.2;
  --text-heading: 22px;
  --leading-heading: 1.2;
  --text-heading-lg: 30px;
  --leading-heading-lg: 1.4;
  --text-display: 60px;
  --leading-display: 1.2;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --radius-all: 26px;
  --radius-cards: 26px;
  --radius-buttons: 26px;
}
```

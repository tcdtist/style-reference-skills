---
version: alpha
name: "Dovetail"
description: "Dovetail uses a sophisticated, deep-space interface strategy: a dominant dark canvas creates depth, accented by bright, functional typography and subtle gray surfaces. Visual hierarchy is established through precise alignment, judicious use of white text, and a single, vivid blue violet. Interactive elements are clearly delineated with contrasting backgrounds and precise spacing, maintaining a sense of order against the immersive dark theme."
theme: "dark"
industry: "ai"
source_url: "https://dovetailapp.com"
refero_style_id: "6f9452a4-3b64-4c6f-a05e-528d7a586f24"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520517494-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777520517494-thumb.jpg"
extracted_at: "2026-04-30T03:42:21.046Z"
---

# Dovetail — Style Reference

> Midnight command center

**Theme:** dark

**Industry:** ai

Dovetail uses a sophisticated, deep-space interface strategy: a dominant dark canvas creates depth, accented by bright, functional typography and subtle gray surfaces. Visual hierarchy is established through precise alignment, judicious use of white text, and a single, vivid blue violet. Interactive elements are clearly delineated with contrasting backgrounds and precise spacing, maintaining a sense of order against the immersive dark theme.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Deep Night | #0a0a0a | `--color-deep-night` | Primary page background, core surface — a rich, near-black that sets the deep-space tone |
| Graphite | #1e1e1e | `--color-graphite` | Secondary surface, button backgrounds, interactive elements — offers slight elevation from the Deep Night background |
| Abyssal Plane | #141414 | `--color-abyssal-plane` | Tertiary surface, card background — provides another level of depth, slightly lighter than Deep Night |
| Ghost | #313131 | `--color-ghost` | Subtle borders, image frames, grid lines — a barely-there separation for content |
| Ash | #454545 | `--color-ash` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Skybound Violet | #6798ff | `--color-skybound-violet` | Violet outline accent for tags, dividers, and focused UI edges. Do not promote it to the primary CTA color |
| Pure White | #ffffff | `--color-pure-white` | Primary text, prominent icons, button text — ensures high contrast against dark backgrounds |
| Silver Pine | #a7a7a7 | `--color-silver-pine` | Secondary text, muted links, subtle details — provides readability without competing with Pure White |
| Stone Dust | #7c7c7c | `--color-stone-dust` | Tertiary text, subtle descriptions, disabled states — fades into the background |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 20px, 24px, 40px, 56px, 64px
- **Line heights:** 1.13, 1.14, 1.20, 1.29, 1.33, 1.40, 1.50, 1.57
- **Letter spacing:** -0.0360em at 64px, -0.0310em at 56px, -0.0250em at 40px, -0.0210em at 24px, -0.0120em at 20px
- **OpenType features:** 'liga'
- **Role:** Primary typeface for all UI text, headings, and body content. Its clean, geometric forms provide clarity and modern appeal against the dark theme.

### JetBrains Mono

- **Token:** `--font-jetbrains-mono`
- **Substitute:** monospace
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line heights:** 1.00, 1.40
- **Letter spacing:** 0.0830em at 12px, 0.0710em at 14px
- **OpenType features:** 'liga'
- **Role:** Monospaced typeface used for small labels, code snippets, and data points, providing distinctiveness and precision.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.4 | 0.996px | `--text-caption` |
| body-sm | 14px | 1.5 | 0.7px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 20px | 1.4 | -0.24px | `--text-subheading` |
| heading | 24px | 1.33 | -0.5px | `--text-heading` |
| heading-lg | 40px | 1.2 | -1px | `--text-heading-lg` |
| display-sm | 56px | 1.14 | -1.74px | `--text-display-sm` |
| display | 64px | 1.13 | -2.3px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-124 | 124px | `--spacing-124` |
| spacing-169 | 169px | `--spacing-169` |
| spacing-172 | 172px | `--spacing-172` |
| spacing-200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 4px |
| cards | 8px |
| buttons | 8px |
| prominent-card | 66px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 32px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Ghost Navigation Button

**Role:** Primary navigation and subtle actions in headers

Transparent background, Pure White text, no border, 0px border-radius, no padding. Inter typeface.

### Subtle Nav Button

**Role:** Secondary navigation items, subtly interactive elements

Graphite (#1e1e1e) background, Pure White text, 8px border-radius, 10px vertical and 11px horizontal padding. Inter typeface.

### Standard Button

**Role:** General purpose call-to-action buttons

Pure White (#ffffff) background, Deep Night (#0a0a0a) text, 8px border-radius, 10px vertical and 16px horizontal padding. Inter typeface. Offers strong contrast.

### Outlined Elevated Button

**Role:** Secondary call-to-action, ghost buttons with higher prominence

Subtle White (rgba(255, 255, 255, 0.08)) background, Pure White text, Subtle White (rgba(255, 255, 255, 0.24)) border, 8px border-radius, 10px vertical and 16px horizontal padding. Inter typeface.

### Prominent Spotlight Card

**Role:** Highlighted content panels, visual breaks with strong presence

Deep Night (#000000 converted from rgba) background, 66px border-radius, no shadow, 0px padding. Used for large, distinctive content blocks.

### Default Card

**Role:** Standard content containers

Abyssal Plane (#141414 converted from rgba) background, 8px border-radius, no shadow, 0px padding. Provides a consistent container for information.

## Do's and Don'ts

### Do

- Prioritize Absolute White (#ffffff) for primary text on dark backgrounds and Skybound Violet (#6798ff) for critical interactive states to ensure immediate attention.
- Utilize Graphite (#1e1e1e) for interactive surface elements and Abyssal Plane (#141414) for static card backgrounds, creating a distinct visual layering.
- Apply Inter font family for all main content and headings, adjusting weights from 400 to 600 to control hierarchy, with letter-spacing decreasing for larger sizes.
- Employ JetBrains Mono at 12px or 14px with positive letter-spacing (0.0710em or 0.0830em) for labels, data, or code elements to provide a precise, technical feel.
- Maintain an 8px border-radius for all standard interactive components and cards, ensuring a consistent softened-edge aesthetic.
- Use Ash (#454545) or Ghost (#313131) sparingly for hairline borders and subtle dividers, allowing elements to breathe without harsh separation.
- Ensure generous sectionGap of 32px between major content blocks to prevent visual crowding on the dark canvas.

### Don't

- Avoid introducing additional chromatic colors; Skybound Violet (#6798ff) is the singular accent for focus and interaction.
- Do not use dark backgrounds that are too light or saturated, as this dilutes the deep-space theme and affects readability of white text.
- Refrain from using strong shadows or complex elevation; the visual hierarchy is primarily achieved through background color shifts and precise borders.
- Do not deviate from the specified letter-spacing for Inter at different sizes; the precise tracking is crucial for the typography's authoritative feel.
- Avoid arbitrary border-radius values; adhere strictly to 8px for standard components, 4px for tags, and 66px for distinct spotlight cards.
- Do not overload interface elements with borders; rely on background color changes for surface distinction, reserving borders for subtle cues.
- Avoid using decorative imagery or photography that introduces light tones or busy compositions, as this would conflict with the dark, focused UI.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Absolute Canvas | #0a0a0a | Primary HTML body and large section backgrounds, lowest visual plane. |
| 1 | Card Surface | #141414 | Standard content cards and containers, slightly elevated from the canvas. |
| 2 | Interactive Surface | #1e1e1 | Backgrounds for interactive components like buttons and certain UI controls, visually distinct. |

## Similar Brands

- **Linear** — Shares a sophisticated dark-mode UI with a single accent color for interaction and a similar approach to clean typography.
- **Vercel** — Employs deep dark backgrounds, a strong focus on monospace fonts for data, and subtle borders/gradients for depth rather than heavy shadows.
- **Raycast** — Utilizes a functional dark theme, sharp type hierarchy, and a restrained use of color to guide user attention within complex interfaces.
- **Notion (dark mode)** — Features a dominant dark canvas, minimalist component design, and emphasis on clear content structure with subtle surface variations.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-deep-night: #0a0a0a;
  --color-graphite: #1e1e1e;
  --color-abyssal-plane: #141414;
  --color-ghost: #313131;
  --color-ash: #454545;
  --color-skybound-violet: #6798ff;
  --color-pure-white: #ffffff;
  --color-silver-pine: #a7a7a7;
  --color-stone-dust: #7c7c7c;
  --font-inter: 'Inter', system-ui;
  --font-jetbrains-mono: 'JetBrains Mono', monospace;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.996px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.7px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.24px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.5px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -1px;
  --text-display-sm: 56px;
  --leading-display-sm: 1.14;
  --tracking-display-sm: -1.74px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -2.3px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-110: 110px;
  --spacing-124: 124px;
  --spacing-169: 169px;
  --spacing-172: 172px;
  --spacing-200: 200px;
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-buttons: 8px;
  --radius-prominent-card: 66px;
  --surface-absolute-canvas: #0a0a0a;
  --surface-card-surface: #141414;
  --surface-interactive-surface: #1e1e1;
}
```

### Tailwind v4

```css
@theme {
  --color-deep-night: #0a0a0a;
  --color-graphite: #1e1e1e;
  --color-abyssal-plane: #141414;
  --color-ghost: #313131;
  --color-ash: #454545;
  --color-skybound-violet: #6798ff;
  --color-pure-white: #ffffff;
  --color-silver-pine: #a7a7a7;
  --color-stone-dust: #7c7c7c;
  --font-inter: 'Inter', system-ui;
  --font-jetbrains-mono: 'JetBrains Mono', monospace;
  --text-caption: 12px;
  --leading-caption: 1.4;
  --tracking-caption: 0.996px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0.7px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --tracking-subheading: -0.24px;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --tracking-heading: -0.5px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -1px;
  --text-display-sm: 56px;
  --leading-display-sm: 1.14;
  --tracking-display-sm: -1.74px;
  --text-display: 64px;
  --leading-display: 1.13;
  --tracking-display: -2.3px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-64: 64px;
  --spacing-96: 96px;
  --spacing-100: 100px;
  --spacing-110: 110px;
  --spacing-124: 124px;
  --spacing-169: 169px;
  --spacing-172: 172px;
  --spacing-200: 200px;
  --radius-tags: 4px;
  --radius-cards: 8px;
  --radius-buttons: 8px;
  --radius-prominent-card: 66px;
  --surface-absolute-canvas: #0a0a0a;
  --surface-card-surface: #141414;
  --surface-interactive-surface: #1e1e1;
}
```

---
version: alpha
name: "Balsa"
description: "Balsa employs a modern, structured aesthetic, blending a pristine white canvas with soft, elevated cards to organize content. Typography is deliberately dense and confident, using strong impactful headlines and compact body text to convey information efficiently. A vibrant yellow and deep violet act as functional highlights, drawing attention to calls-to-action and important information within a predominantly achromatic interface. The overall impression is one of clarity, precision, and productivity."
theme: "light"
industry: "productivity"
source_url: "https://www.balsa.com"
refero_style_id: "ebbfbc6a-988b-4f33-b261-d431b2327545"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519159567-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777519159567-thumb.jpg"
extracted_at: "2026-04-30T03:19:52.273Z"
---

# Balsa — Style Reference

> Architectural blueprint on white marble

**Theme:** light

**Industry:** productivity

Balsa employs a modern, structured aesthetic, blending a pristine white canvas with soft, elevated cards to organize content. Typography is deliberately dense and confident, using strong impactful headlines and compact body text to convey information efficiently. A vibrant yellow and deep violet act as functional highlights, drawing attention to calls-to-action and important information within a predominantly achromatic interface. The overall impression is one of clarity, precision, and productivity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas Ice | #f7f7f7 | `--color-canvas-ice` | Page backgrounds, subtle surface differentiation |
| Surface White | #ffffff | `--color-surface-white` | Card backgrounds, primary interactive surfaces |
| Ink Black | #000000 | `--color-ink-black` | Primary text, strong headings, primary interactive elements (buttons, links) |
| Graphite | #313131 | `--color-graphite` | Secondary text, subheadings, supporting information |
| Storm Gray | #686868 | `--color-storm-gray` | Muted text, helper text, subtle borders |
| Silver Mist | #bbbbbb | `--color-silver-mist` | Decorative card backgrounds, subtle dividers |
| Purple Haze | #914db2 | `--color-purple-haze` | Pink outline accent for tags, dividers, and focused UI edges |
| Goldenrod | #ffb700 | `--color-goldenrod` | Highlight cards, callout backgrounds, primary accent for important information — adds focus and urgency |
| Midnight Ink Blue | #003399 | `--color-midnight-ink-blue` | Link text, outlined button borders — a secondary interactive color distinct from black |

## Tokens — Typography

### sans-serif

- **Token:** `--font-sans-serif`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 12px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback or system font for small UI elements and metadata, ensuring broad compatibility.

### Van Condensed Pro Bold

- **Token:** `--font-van-condensed-pro-bold`
- **Substitute:** Bebas Neue
- **Weights:** 400
- **Sizes:** 24px, 32px, 48px
- **Line heights:** 1.20, 1.50
- **Letter spacing:** -0.0470em at 48px, -0.0310em at 32px
- **Role:** Impactful headings and display text. Its condensed nature allows for larger sizes without consuming excessive horizontal space, while the strong weight ensures immediate attention. The aggressive negative letter-spacing at larger sizes contributes to a tight, assertive visual feel.

### Inter

- **Token:** `--font-inter`
- **Substitute:** Inter
- **Weights:** 400, 600, 700
- **Sizes:** 11px, 14px, 16px
- **Line heights:** 1.18, 1.20, 1.29, 1.30, 1.43, 1.50, 1.64, 1.73
- **Letter spacing:** -0.0100em
- **Role:** The primary typeface for body copy, subheadings, and UI elements. Its neutrality and high legibility support densely packed information, while various weights provide a clear typographic hierarchy. The consistent slight negative tracking keeps text blocks compact.

### Roboto Mono

- **Token:** `--font-roboto-mono`
- **Substitute:** Roboto Mono
- **Weights:** 400
- **Sizes:** 11px, 13px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Monospaced font for code snippets, technical details, and any content requiring fixed-width alignment.

### Noto Sans Mono

- **Token:** `--font-noto-sans-mono`
- **Substitute:** Noto Sans Mono
- **Weights:** 400
- **Sizes:** 11px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Supplementary monospaced font, likely for specific code or data display. Used sparingly.

### Inter-Bold

- **Token:** `--font-inter-bold`
- **Weights:** 700
- **Sizes:** 11px, 14px, 18px
- **Line heights:** 1.2, 1.43, 1.64, 2
- **Letter spacing:** -0.01
- **Role:** Inter-Bold — detected in extracted data but not described by AI

### Inter-Medium

- **Token:** `--font-inter-medium`
- **Weights:** 500
- **Sizes:** 14px
- **Line heights:** 1.43, 1.5, 2
- **Role:** Inter-Medium — detected in extracted data but not described by AI

### Inter-Light

- **Token:** `--font-inter-light`
- **Weights:** 300
- **Sizes:** 11px
- **Line heights:** 1.73
- **Letter spacing:** -0.01
- **Role:** Inter-Light — detected in extracted data but not described by AI

### Inter-Black

- **Token:** `--font-inter-black`
- **Weights:** 900
- **Sizes:** 24px
- **Line heights:** 1.2
- **Role:** Inter-Black — detected in extracted data but not described by AI

### Inter-SemiBold

- **Token:** `--font-inter-semibold`
- **Weights:** 600
- **Sizes:** 32px
- **Line heights:** 1.2
- **Role:** Inter-SemiBold — detected in extracted data but not described by AI

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.73 | -0.11px | `--text-caption` |
| body | 14px | 1.43 | -0.14px | `--text-body` |
| heading-sm | 18px | 1.43 | -0.18px | `--text-heading-sm` |
| heading | 24px | 1.2 | -1.13px | `--text-heading` |
| heading-lg | 32px | 1.2 | -0.99px | `--text-heading-lg` |
| display | 48px | 1.2 | -2.26px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-33 | 33px | `--spacing-33` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-100 | 100px | `--spacing-100` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 16px |
| cards | 12px |
| buttons | 6px |
| minimal | 1px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(255, 255, 255) 0px 0px 0px 2px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.05) 0px 1px 0px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Main call-to-action

Solid Ink Black background with Surface White text. Uses a 6px border radius and generous padding of 12px vertical, 8-12px horizontal. Text is typically 12px system sans-serif.

### Outline Accent Button (Midnight Ink Blue)

**Role:** Secondary call-to-action or informational link

Transparent background with a 1px Midnight Ink Blue border and Midnight Ink Blue text. Uses a 6px border radius, 12px vertical padding, and 8-12px horizontal padding. Text is typically 12px system sans-serif.

### Base Card (No Shadow)

**Role:** Content grouping, pricing tiers in neutral state

Background of rgba(255, 255, 255, 0.8) with a 12px border radius. No shadows, giving a flat, clean appearance. Padding is typically absent for these cards, relying on internal element spacing.

### Elevated Content Card

**Role:** Prominent content blocks, feature descriptions

Surface White background, 12px border radius, and a complex, subtle multi-layer shadow stack (rgba(0,0,0,0.09) starting at 0px 2.15px 3px). Provides significant visual lift without adding heavy dark tones. No internal padding defined at the card level.

### Callout Card (Goldenrod)

**Role:** Highlighting key information, warnings, or tips

Goldenrod background, 12px border radius. Uses a subtle, warm shadow tint (rgba(112, 94, 0, 0.05) starting at 0px 2.15px 1.72px). Features consistent internal padding of 20px horizontal and 20-32px vertical. Text in Ink Black.

### Callout Card (Purple Haze)

**Role:** Highlighting secondary key information or status updates

Purple Haze background, 12px border radius. Uses a subtle, cool-toned shadow (rgba(61, 32, 75, 0.05) starting at 0px 2.15px 1.72px). Features consistent internal padding of 20px horizontal and 20-32px vertical. Text in Ink Black.

## Do's and Don'ts

### Do

- Always use Canvas Ice (#f7f7f7) as the base page background.
- Apply Surface White (#ffffff) for all elevated cards and primary UI elements that require a clean, bright backdrop.
- Prioritize Ink Black (#000000) for all primary text and bold headlines to ensure high contrast and readability.
- Reserve Goldenrod (#ffb700) and Purple Haze (#914db2) exclusively for accent cards, callouts, or small functional indicators, never for large background areas or primary text.
- Maintain a clear visual hierarchy by utilizing Van Condensed Pro Bold for main headings and Inter for all body text, with Inter's various weights for subheadings and emphasis.
- Use 12px border-radius for all cards and container elements to maintain the consistent soft, modern feel.
- Ensure generous vertical spacing between sections, using the defined sectionGap of 60px to provide breathing room.

### Don't

- Avoid using multiple different accent colors on a single screen; limit to Goldenrod or Purple Haze for focused attention.
- Do not use dark backgrounds for main content areas; maintain the light theme with Canvas Ice and Surface White providing the primary surfaces.
- Refrain from using strong, opaque shadows; instead, apply the subtle, tiered shadow stacks seen on Elevated Content Cards for a soft lift.
- Do not vary border radius arbitrarily; adhere to 12px for cards and 6px for buttons and interactive elements.
- Avoid decorative imagery that competes with UI elements; imagery should be contained, product-focused, or purely illustrative.
- Do not introduce new typefaces outside of Van Condensed Pro Bold, Inter, Roboto Mono, Noto Sans Mono, or the system sans-serif fallback.
- Exclude heavy gradients or complex background patterns, maintaining the flat and clean aesthetic of the primary surfaces.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas Ice | #f7f7f7 | Base page background |
| 1 | Surface White | #ffffff | Primary interactive cards, content blocks, and UI elements |

## Elevation

- **Elevated Content Card:** `rgba(0, 0, 0, 0.09) 0px 2.14989px 3.00985px -0.5625px, rgba(0, 0, 0, 0.086) 0px 5.09563px 7.13388px -1.125px, rgba(0, 0, 0, 0.082) 0px 9.29495px 13.0129px -1.6875px, rgba(0, 0, 0, 0.08) 0px 15.4528px 21.634px -2.25px, rgba(0, 0, 0, 0.075) 0px 24.9551px 34.9371px -2.8125px, rgba(0, 0, 0, 0.063) 0px 40.849px 57.1886px -3.375px, rgba(0, 0, 0, 0.047) 0px 70.3392px 98.4749px -3.9375px, rgba(0, 0, 0, 0.01) 0px 128px 179.2px -4.5px`
- **Callout Card (Goldenrod):** `rgba(112, 94, 0, 0.05) 0px 2.14989px 1.71992px -0.3125px, rgba(112, 94, 0, 0.05) 0px 5.09563px 4.0765px -0.625px, rgba(112, 94, 0, 0.05) 0px 9.29495px 7.43596px -0.9375px, rgba(112, 94, 0, 0.05) 0px 15.4528px 12.3623px -1.25px, rgba(112, 94, 0, 0.05) 0px 24.9551px 19.9641px -1.5625px, rgba(112, 94, 0, 0.05) 0px 40.849px 32.6792px -1.875px, rgba(112, 94, 0, 0.05) 0px 70.3392px 56.2714px -2.1875px, rgba(112, 94, 0, 0.05) 0px 128px 102.4px -2.5px`
- **Callout Card (Purple Haze):** `rgba(61, 32, 75, 0.05) 0px 2.14989px 1.71992px -0.3125px, rgba(61, 32, 75, 0.05) 0px 5.09563px 4.0765px -0.625px, rgba(61, 32, 75, 0.05) 0px 9.29495px 7.43596px -0.9375px, rgba(61, 32, 75, 0.05) 0px 15.4528px 12.3623px -1.25px, rgba(61, 32, 75, 0.05) 0px 24.9551px 19.9641px -1.5625px, rgba(61, 32, 75, 0.05) 0px 40.849px 32.6792px -1.875px, rgba(61, 32, 75, 0.05) 0px 70.3392px 56.2714px -2.1875px, rgba(61, 32, 75, 0.05) 0px 128px 102.4px -2.5px`
- **Focus Ring:** `rgb(255, 255, 255) 0px 0px 0px 2px`

## Imagery

This site uses product screenshots and contained graphical elements. Product screenshots are typically clean, isolated views of the Balsa interface, often shown within a browser frame on a white background, highlighting specific features or workflows. Illustrations are flat, geometric, and follow brand colors, primarily used for decorative accents or simple icons. Iconography is generally outlined or filled, with varying stroke weights, maintaining a functional purpose rather than being purely ornamental. Imagery serves to explain product features and add visual interest in a contained, text-dominant layout.

## Layout

The page model is primarily centered content within a contained width, though the hero section spans full-bleed. The hero presents a centered headline and subtext, followed by a product screenshot on a clean Canvas Ice background. Sections follow a consistent vertical rhythm, with `sectionGap` (60px) providing ample separation. Content is often arranged in simple, centered stacks, or in 3-column card grids for features and pricing. Navigation is a minimal top-right 'Log in' link.

## Similar Brands

- **Linear** — Similar focus on pristine white surfaces, crisp typography, and subtle elevation for UI elements.
- **Asana** — White background, structured content blocks, and functional use of accent colors to highlight information in a productivity context.
- **Notion** — Clean document-centric interface, emphasis on text presentation, and strategic use of lightweight components.
- **Figma** — Uses a light theme with soft cards and shadows, strong typography for headings, and functional, contained UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-ice: #f7f7f7;
  --color-surface-white: #ffffff;
  --color-ink-black: #000000;
  --color-graphite: #313131;
  --color-storm-gray: #686868;
  --color-silver-mist: #bbbbbb;
  --color-purple-haze: #914db2;
  --color-goldenrod: #ffb700;
  --color-midnight-ink-blue: #003399;
  --font-sans-serif: 'sans-serif', system-ui;
  --font-van-condensed-pro-bold: 'Van Condensed Pro Bold', Bebas Neue;
  --font-inter: 'Inter', Inter;
  --font-roboto-mono: 'Roboto Mono', Roboto Mono;
  --font-noto-sans-mono: 'Noto Sans Mono', Noto Sans Mono;
  --font-inter-bold: 'Inter-Bold', ui-sans-serif, system-ui, sans-serif;
  --font-inter-medium: 'Inter-Medium', ui-sans-serif, system-ui, sans-serif;
  --font-inter-light: 'Inter-Light', ui-sans-serif, system-ui, sans-serif;
  --font-inter-black: 'Inter-Black', ui-sans-serif, system-ui, sans-serif;
  --font-inter-semibold: 'Inter-SemiBold', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.73;
  --tracking-caption: -0.11px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: -0.14px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.43;
  --tracking-heading-sm: -0.18px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -1.13px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.99px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: -2.26px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --radius-tags: 16px;
  --radius-cards: 12px;
  --radius-buttons: 6px;
  --radius-minimal: 1px;
  --shadow-xl: rgb(255, 255, 255) 0px 0px 0px 2px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px;
  --surface-canvas-ice: #f7f7f7;
  --surface-surface-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-ice: #f7f7f7;
  --color-surface-white: #ffffff;
  --color-ink-black: #000000;
  --color-graphite: #313131;
  --color-storm-gray: #686868;
  --color-silver-mist: #bbbbbb;
  --color-purple-haze: #914db2;
  --color-goldenrod: #ffb700;
  --color-midnight-ink-blue: #003399;
  --font-sans-serif: 'sans-serif', system-ui;
  --font-van-condensed-pro-bold: 'Van Condensed Pro Bold', Bebas Neue;
  --font-inter: 'Inter', Inter;
  --font-roboto-mono: 'Roboto Mono', Roboto Mono;
  --font-noto-sans-mono: 'Noto Sans Mono', Noto Sans Mono;
  --font-inter-bold: 'Inter-Bold', ui-sans-serif, system-ui, sans-serif;
  --font-inter-medium: 'Inter-Medium', ui-sans-serif, system-ui, sans-serif;
  --font-inter-light: 'Inter-Light', ui-sans-serif, system-ui, sans-serif;
  --font-inter-black: 'Inter-Black', ui-sans-serif, system-ui, sans-serif;
  --font-inter-semibold: 'Inter-SemiBold', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.73;
  --tracking-caption: -0.11px;
  --text-body: 14px;
  --leading-body: 1.43;
  --tracking-body: -0.14px;
  --text-heading-sm: 18px;
  --leading-heading-sm: 1.43;
  --tracking-heading-sm: -0.18px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -1.13px;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.99px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: -2.26px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-33: 33px;
  --spacing-40: 40px;
  --spacing-50: 50px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-100: 100px;
  --radius-tags: 16px;
  --radius-cards: 12px;
  --radius-buttons: 6px;
  --radius-minimal: 1px;
  --shadow-xl: rgb(255, 255, 255) 0px 0px 0px 2px;
  --shadow-xl-2: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.1) 0px 0px 0px 0.5px;
  --surface-canvas-ice: #f7f7f7;
  --surface-surface-white: #ffffff;
}
```

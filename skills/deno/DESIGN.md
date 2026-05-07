---
version: alpha
name: "Deno"
description: "This design system feels like a friendly, yet precise, developer workbench. A light, airy backdrop ensures code snippets and technical diagrams are the primary focus, while a distinctive 'Deno Green' provides a consistent, reassuring visual anchor for key interactions. Subtle border accents and minimal shadows keep elements grounded without adding visual weight, creating a streamlined, information-first experience where clarity is paramount."
theme: "light"
industry: "devtools"
source_url: "https://deno.com"
refero_style_id: "973dcf14-2237-4346-81af-3d8c811666c2"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923016668-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775923016668-thumb.jpg"
extracted_at: "2026-04-11T15:57:20.605Z"
---

# Deno — Style Reference

> Clean Code Canvas — a pristine digital workspace where clarity and functionality are paramount.

**Theme:** light

**Industry:** devtools

This design system feels like a friendly, yet precise, developer workbench. A light, airy backdrop ensures code snippets and technical diagrams are the primary focus, while a distinctive 'Deno Green' provides a consistent, reassuring visual anchor for key interactions. Subtle border accents and minimal shadows keep elements grounded without adding visual weight, creating a streamlined, information-first experience where clarity is paramount.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Stormy Night | #0a0e1c | `--color-stormy-night` | Primary text, prominent headings, key UI elements for strong contrast. |
| Cloud Gray | #cbd1e1 | `--color-cloud-gray` | Subtle borders, secondary text, inactive states. |
| Deno Green | #70ffaf | `--color-deno-green` | CTA backgrounds, active states, key highlights, success indicators. |
| Slate Blue | #a8b2c8 | `--color-slate-blue` | Tertiary text, less prominent borders. |
| Ocean Blue | #0077cc | `--color-ocean-blue` | Highlight accents, interactive elements, sometimes used for prominent calls to action. |
| Code Black | #000000 | `--color-code-black` | Default text, high-contrast UI elements. |
| Frost White | #ffffff | `--color-frost-white` | Page backgrounds, card surfaces. |
| Pale Gray | #e5e7eb | `--color-pale-gray` | Subtle borders, background surfaces for interactive elements, hover states. |
| Whisper White | #f8f9fc | `--color-whisper-white` | Secondary background surfaces, subtle differentiation from main page background. |
| Success Green | #116329 | `--color-success-green` | Text for success messages and badges, deep green for conveying positive status. |
| Sky Button Blue | #b3e0ff | `--color-sky-button-blue` | Background for secondary buttons, paired with a vibrant blue border for interactive appeal. |
| Highlight Yellow | #ffdb1 | `--color-highlight-yellow` | Subtle highlights, occasional accents, adding a touch of vibrancy. |
| Blue Gradient Accent | #cbd1e1 | `--color-blue-gradient-accent` | Decorative background gradients, soft, atmospheric visual interest on specific sections. |
| Green Conic Accent | #70ffaf | `--color-green-conic-accent` | Subtle conic gradient, adding a dynamic, contained glow for emphasis. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 27px, 28px, 36px, 44px, 72px
- **Line heights:** 1.00, 1.10, 1.25, 1.33, 1.43, 1.50, 1.56, 2.00
- **Letter spacing:** -0.0330em at 72px, -0.0250em at 44px
- **Role:** Primary sans-serif for body text, navigation, buttons, and most headings; its versatility spans from fine print to prominent display.

### Menlo

- **Token:** `--font-menlo`
- **Substitute:** monospace
- **Weights:** 400, 650, 700
- **Sizes:** 14px, 16px, 20px
- **Line heights:** 1.40, 1.45, 1.50
- **OpenType features:** "ss12"
- **Role:** Monospace font for code snippets, badges, and technical output; its fixed width and specific stylistic set ('ss12') ensure clear rendering of code.

### Recursive

- **Token:** `--font-recursive`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 16px, 18px
- **Line heights:** 1.50, 1.56
- **OpenType features:** "ss12"
- **Role:** Supporting sans-serif for body content and specific informational sections; offers a subtly different character than Inter, used sparingly.

### Moranga

- **Token:** `--font-moranga`
- **Substitute:** serif
- **Weights:** 400, 700
- **Sizes:** 14px, 18px, 44px, 72px
- **Line heights:** 1.00, 1.10
- **Letter spacing:** -0.0250em at 44px and 72px
- **OpenType features:** "liga"
- **Role:** Distinctive serif for display-sized headings and certain branded elements; its presence indicates a break from the utilitarian sans-serif, adding a touch of sophisticated weight.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body-sm | 14px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.56 | — | `--text-body` |
| subheading | 18px | 1.43 | — | `--text-subheading` |
| heading | 20px | 1.33 | — | `--text-heading` |
| heading-lg | 28px | 1.25 | — | `--text-heading-lg` |
| display | 44px | 1.1 | -0.48px | `--text-display` |
| display-xl | 72px | 1 | -2.38px | `--text-display-xl` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-139 | 139px | `--spacing-139` |
| spacing-144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 6px |
| pills | 9997px |
| buttons | 6px |
| general | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px | `--shadow-xl-2` |
| xl-3 | rgb(102, 194, 255) 2px 4px 0px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48-56px |
| cardPadding | 16-32px |
| elementGap | 8-16px |

## Components

### Button Group — Primary, Secondary, GitHub

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stats Card — Rating, Community, Ecosystem

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Search Input Field

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call to Action Button

**Role:** Interactive element

Background: Deno Green (#70ffaf). Text: Stormy Night (#0a0e1c), Inter 400. Padding: 12px vertical, 16px horizontal. Border radius: 9997px (pill shape). No border. Used for primary user actions.

### Secondary Ghost Button

**Role:** Interactive element

Background: transparent. Text: Stormy Night (#0a0e1c). Border: 1px solid Cloud Gray (#cbd1e1). Padding: 12px vertical, 16px horizontal. Border radius: 9997px (pill shape). Used for secondary user actions or links.

### Code Snippet Button

**Role:** Interactive element

Background: transparent. Text: Code Black (#000000), Menlo 400. Border: 1px solid Cloud Gray (#cbd1e1). Padding: 0px vertical, 8px horizontal. Border radius: 6px. Used for code actions like 'Copy command'.

### Accent Button (Windows)

**Role:** Interactive element

Background: Sky Button Blue (#b3e0ff). Text: Stormy Night (#0a0e1c). Border: 1px solid #66c2ff with a #66c2ff 2px 4px 0px 0px box-shadow. Padding: 12px vertical, 20px horizontal. Border radius: 8px. Specific to OS selection.

### Navigation Link

**Role:** Primary navigation

Text: Stormy Night (#0a0e1c), Inter 400, 16px. Underline on hover or active (implied by context). No explicit padding/background, simply text with interactive behavior.

### Search Input Field

**Role:** Site utility

Background: transparent. Text: Stormy Night (#0a0e1c). Border: 1px solid Cloud Gray (#cbd1e1). Placeholder: Slate Blue (#a8b2c8). Padding: 12px vertical, 16px horizontal. Border radius: 6px.

### Feature Card

**Role:** Content container

Background: Frost White (#ffffff). Border: 1px solid Pale Gray (#e5e7eb) (implied). Box shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px. Border radius: 6px. Internal padding varies (e.g. 32px).

### Statistic Badge

**Role:** Information display

Background: transparent. Text: Stormy Night (#0a0e1c) for value, Success Green (#116329) for label. Uses Menlo for numeric values. No radius, no padding.

## Do's and Don'ts

### Do

- Use Deno Green (#70ffaf) exclusively for primary calls to action or key indicators to maintain its visual weight.
- Apply all border radii as 6px or 9997px (pill) to maintain the balance between soft and sharp forms.
- Utilize Inter for all primary text elements, adjusting weight and size according to the type scale.
- Employ Menlo (with 'ss12' feature) for all code snippets, technical terms, and data displays for consistent readability.
- Maintain generous section gaps of 48px to 56px to ensure breathable layouts.
- Apply the subtle card shadow (rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px) only to elements requiring modest elevation.

### Don't

- Do not introduce new color hues; strictly adhere to the defined palette of grays, Deno Green, and accent blues.
- Avoid arbitrary use of shadows; elevation is reserved for specific, prominent components like cards.
- Do not modify the letter-spacing of Moranga or Inter outside of the defined negative values for display sizes.
- Do not use transparent backgrounds with non-transparent borders unless it's a 'Ghost Button' variant.
- Avoid using multiple colors on a single textual element (e.g., a heading with different colored words) unless it's a brand element.
- Do not deviate from the 8px base unit for spacing, as this disrupts the visual rhythm.

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`
- **Accent Button (Windows):** `rgb(102, 194, 255) 2px 4px 0px 0px`

## Imagery

The visual language focuses on custom, whimsical illustrations and clean product screenshots. Illustrations, like the dino character, are flat, line-drawn, and contain brand colors (e.g., Deno Green for highlights, various blues and grays). They serve a decorative and brand-identity role, humanizing complex technical topics. Photography is absent. Screenshots are presented with minimal framing, often on a light background, highlighting code or UI elements directly. Icons are typically filled or outlined in black/gray, maintaining a clear and minimalist aesthetic. The overall density of imagery is balanced, with illustrations occupying significant visual space in key hero sections, while product screenshots are integrated sparingly for explanatory content.

## Layout

The page adheres to a max-width centered content model within a full-bleed background. The hero section prominently features a bold, left-aligned headline with a custom illustration taking up the right half. Subsequent sections often employ a clean grid structure, featuring 2-column layouts (text on left, content/code on right) or 3-column card grids for features. Vertical rhythm is established through consistent section gaps (48-56px). Some sections incorporate subtle background gradients as visual dividers. The navigation is a sticky top bar with a centered logo, left-aligned primary links, and a search input on the right.

## Similar Brands

- **Vercel** — Clean, developer-focused aesthetic with prominent illustrations and a clear content hierarchy.
- **Supabase** — Light theme, heavy use of custom illustrations to explain technical concepts, and a developer-centric layout.
- **Tailwind Labs** — Emphasis on clear typography, intentional spacing, and minimal use of color for a highly functional UI.
- **PlanetScale** — Modern developer tool branding with a light background, crisp UI, and subtle use of accent colors.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-stormy-night: #0a0e1c;
  --color-cloud-gray: #cbd1e1;
  --color-deno-green: #70ffaf;
  --color-slate-blue: #a8b2c8;
  --color-ocean-blue: #0077cc;
  --color-code-black: #000000;
  --color-frost-white: #ffffff;
  --color-pale-gray: #e5e7eb;
  --color-whisper-white: #f8f9fc;
  --color-success-green: #116329;
  --color-sky-button-blue: #b3e0ff;
  --color-highlight-yellow: #ffdb1;
  --color-blue-gradient-accent: #cbd1e1;
  --color-green-conic-accent: #70ffaf;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-menlo: 'Menlo', monospace;
  --font-recursive: 'Recursive', sans-serif;
  --font-moranga: 'Moranga', serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.56;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading: 20px;
  --leading-heading: 1.33;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.25;
  --text-display: 44px;
  --leading-display: 1.1;
  --tracking-display: -0.48px;
  --text-display-xl: 72px;
  --leading-display-xl: 1;
  --tracking-display-xl: -2.38px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-125: 125px;
  --spacing-128: 128px;
  --spacing-139: 139px;
  --spacing-144: 144px;
  --radius-cards: 6px;
  --radius-pills: 9997px;
  --radius-buttons: 6px;
  --radius-general: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-3: rgb(102, 194, 255) 2px 4px 0px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-stormy-night: #0a0e1c;
  --color-cloud-gray: #cbd1e1;
  --color-deno-green: #70ffaf;
  --color-slate-blue: #a8b2c8;
  --color-ocean-blue: #0077cc;
  --color-code-black: #000000;
  --color-frost-white: #ffffff;
  --color-pale-gray: #e5e7eb;
  --color-whisper-white: #f8f9fc;
  --color-success-green: #116329;
  --color-sky-button-blue: #b3e0ff;
  --color-highlight-yellow: #ffdb1;
  --color-blue-gradient-accent: #cbd1e1;
  --color-green-conic-accent: #70ffaf;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-menlo: 'Menlo', monospace;
  --font-recursive: 'Recursive', sans-serif;
  --font-moranga: 'Moranga', serif;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.56;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --text-heading: 20px;
  --leading-heading: 1.33;
  --text-heading-lg: 28px;
  --leading-heading-lg: 1.25;
  --text-display: 44px;
  --leading-display: 1.1;
  --tracking-display: -0.48px;
  --text-display-xl: 72px;
  --leading-display-xl: 1;
  --tracking-display-xl: -2.38px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-73: 73px;
  --spacing-125: 125px;
  --spacing-128: 128px;
  --spacing-139: 139px;
  --spacing-144: 144px;
  --radius-cards: 6px;
  --radius-pills: 9997px;
  --radius-buttons: 6px;
  --radius-general: 6px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  --shadow-xl-3: rgb(102, 194, 255) 2px 4px 0px 0px;
}
```

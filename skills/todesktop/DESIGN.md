---
version: alpha
name: "ToDesktop"
description: "ToDesktop employs a 'digital engineering lab' aesthetic, characterized by a dominant dark, cool blue background contrasting with crisp white and light gray interfaces. Subtle internal shadows create a sense of depth on surfaces, while a vivid Electric Blue serves as the primary accent for interactive elements and brand highlights. Typography is precise and utilitarian, fostering a high-tech, functional atmosphere. The design balances a serious, technical tone with moments of vibrant clarity."
theme: "mixed"
industry: "devtools"
source_url: "https://www.todesktop.com"
refero_style_id: "dd89ce6c-f0aa-4ca8-bd63-19dcd81920a7"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507216279-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507216279-thumb.jpg"
extracted_at: "2026-04-30T00:00:54.656Z"
---

# ToDesktop — Style Reference

> Digital engineering lab

**Theme:** mixed

**Industry:** devtools

ToDesktop employs a 'digital engineering lab' aesthetic, characterized by a dominant dark, cool blue background contrasting with crisp white and light gray interfaces. Subtle internal shadows create a sense of depth on surfaces, while a vivid Electric Blue serves as the primary accent for interactive elements and brand highlights. Typography is precise and utilitarian, fostering a high-tech, functional atmosphere. The design balances a serious, technical tone with moments of vibrant clarity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Void | #05061b | `--color-midnight-void` | Deep blue-black background for hero sections and elevated cards, providing a grounded dark mode base |
| Canvas White | #ffffff | `--color-canvas-white` | Primary background for light mode sections, card surfaces, and primary button text |
| Silver Mist | #e5e7eb | `--color-silver-mist` | Subtle borders, dividers, and background elements in light mode, indicating UI separation |
| Ink Black | #000000 | `--color-ink-black` | Primary body text, heading black for full contrast, and icon fills |
| Graphite | #141414 | `--color-graphite` | Secondary text, dark navigation elements, and muted icon fills, offering a softer alternative to Ink Black |
| Cloud Gray | #656565 | `--color-cloud-gray` | Muted helper text, secondary icon colors, and subtle UI elements |
| Faded White | #e6fff7 | `--color-faded-white` | Light background fill predominantly |
| Light Steel | #c2c2c9 | `--color-light-steel` | Light-touch shadows and subtle background elements, providing very faint depth |
| Polar Mist | #d6d6db | `--color-polar-mist` | Muted UI surface for disabled controls, low-emphasis panels, and placeholder blocks. Do not promote it to the primary CTA color |
| Electric Blue | #0036ff | `--color-electric-blue` | Primary call-to-action button backgrounds and accent points, bringing energy and focus to interactive elements |
| Sky Blue | #0093ff | `--color-sky-blue` | Informational text links, badge accents, and decorative icon fills, a brighter, more open blue than Electric Blue |
| Ash Code | #384642 | `--color-ash-code` | Code snippet text, offering a distinct, slightly green-tinted dark gray for monospace content |
| Clean White Gradient | #f7f7f7 | `--color-clean-white-gradient` | Subtle background gradient for light sections or hero elements, providing volume and visual interest |
| Deep Blue Gradient | #0f071d | `--color-deep-blue-gradient` | Complex multi-stop gradient for hero backgrounds or prominent feature sections, creating a dynamic, deep blue visual field |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 9px, 10px, 12px, 13px, 14px, 16px
- **Line heights:** 1.07, 1.33, 1.43, 1.50, 1.54, 1.57, 1.63, 1.67, 1.78, 1.83, 2.40
- **Letter spacing:** -0.01em at 16px, -0.005em at 12px
- **OpenType features:** "cv01", "ss01"
- **Role:** Primary UI font for body text, navigation items, buttons, tables, and small headings. Its clean, functional legibility ensures clarity across varied information-dense components. Features 'cv01' and 'ss01' for nuanced character forms.

### Aeonik Pro

- **Token:** `--font-aeonik-pro`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 400, 500
- **Sizes:** 18px, 24px, 36px, 48px, 64px, 74px
- **Line heights:** 1.08, 1.13, 1.14, 1.22, 1.33, 1.78
- **Letter spacing:** -0.015em at 74px, -0.01em at 48px
- **OpenType features:** 'ss02', 'ss05', 'ss10', 'ss11'
- **Role:** Used for prominent headings, drawing attention with its distinct, technically-inspired letterforms, especially at larger sizes. Specific stylistic sets ('ss02', 'ss05', 'ss10', 'ss11') define its unique character.

### Geist Mono

- **Token:** `--font-geist-mono`
- **Substitute:** ui-monospace, monospace
- **Weights:** 400, 500
- **Sizes:** 10px, 11px, 12px, 14px, 16px
- **Line heights:** 1.45, 1.50, 1.57, 2.00, 2.40, 2.67
- **Letter spacing:** 0.03em at 10px, -0.01em at 14px
- **Role:** Dedicated monospace font for code blocks, terminal output, and technical labels, maintaining a consistent width for precise alignment. The subtle positive letter-spacing at smaller sizes enhances readability.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 16px | 1.5 | -0.04px | `--text-body` |
| subheading | 18px | 1.78 | — | `--text-subheading` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 36px | 1.22 | -0.54px | `--text-heading-lg` |
| display | 74px | 1.08 | -1.11px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-109 | 109px | `--spacing-109` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-116 | 116px | `--spacing-116` |
| spacing-120 | 120px | `--spacing-120` |
| spacing-125 | 125px | `--spacing-125` |
| spacing-126 | 126px | `--spacing-126` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-144 | 144px | `--spacing-144` |
| spacing-152 | 152px | `--spacing-152` |
| spacing-173 | 173px | `--spacing-173` |
| spacing-216 | 216px | `--spacing-216` |
| spacing-236 | 236px | `--spacing-236` |
| spacing-240 | 240px | `--spacing-240` |
| spacing-248 | 248px | `--spacing-248` |
| spacing-273 | 273px | `--spacing-273` |
| spacing-284 | 284px | `--spacing-284` |

### Border Radius

| Element | Value |
| --- | --- |
| none | 0px |
| cards | 24px |
| large | 32px |
| small | 6px |
| badges | 999px |
| medium | 14px |
| buttons | 999px |
| content | 20px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.06) 0px 0px 0px 1px | `--shadow-xl` |
| xl-2 | rgba(255, 255, 255, 0.12) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset, rgba(101, 101, 101, 0.16) 0px 4px 8px -2px, rgba(101, 101, 101, 0.12) 0px 2px 4px -1px, rgba(101, 101, 101, 0.12) 0px 1px 2px -0.5px, rgba(101, 101, 101, 0.12) 0px 0.5px 0.5px 0px | `--shadow-xl-2` |
| xl-3 | rgba(255, 255, 255, 0.12) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.16) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.16) 0px 8px 24px -4px inset, rgba(9, 1, 20, 0.03) 0px 8px 8px -3px, rgba(9, 1, 20, 0.03) 0px 5px 5px -2.5px, rgba(8, 1, 20, 0.03) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px | `--shadow-xl-3` |
| xl-4 | rgba(0, 0, 0, 0.04) 0px 12px 12px -3px, rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px | `--shadow-xl-4` |
| xl-5 | rgba(0, 0, 0, 0.06) 0px 12px 12px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px | `--shadow-xl-5` |
| xl-6 | rgba(255, 255, 255, 0.08) 0px -4px 12px -4px inset, rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset, rgba(9, 1, 20, 0.06) 0px 8px 8px -3px, rgba(8, 1, 20, 0.06) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.04) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px | `--shadow-xl-6` |
| xl-7 | rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px, rgba(255, 255, 255, 0.04) 0px 2px 8px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset | `--shadow-xl-7` |
| xl-8 | rgba(0, 0, 0, 0.04) 0px -2px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px, rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px | `--shadow-xl-8` |
| xl-9 | rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px | `--shadow-xl-9` |
| xl-10 | rgba(0, 0, 0, 0.04) 0px 8px 8px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.03) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px | `--shadow-xl-10` |
| xl-11 | rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(2, 9, 44, 0.24) 0px 16px 56px 0px, rgba(1, 9, 44, 0.24) 0px 4px 16px 0px, rgba(2, 9, 44, 0.24) 0px 1px 2px 0px, rgba(5, 6, 27, 0.52) 0px 0px 0px 1px | `--shadow-xl-11` |
| xl-12 | rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(5, 6, 27, 0.88) 0px 16px 56px 0px, rgba(5, 6, 27, 0.16) 0px 2px 4px 0px, rgba(5, 6, 27, 0.12) 0px 1px 2px 0px, rgba(5, 6, 27, 0.88) 0px 0px 0px 1px | `--shadow-xl-12` |
| xl-13 | rgba(0, 0, 0, 0.08) 0px 12px 24px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px | `--shadow-xl-13` |
| xl-14 | rgba(0, 0, 0, 0.04) 0px 24px 32px -3px, rgba(0, 0, 0, 0.06) 0px 12px 24px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px | `--shadow-xl-14` |
| xl-15 | rgba(255, 255, 255, 0.04) 0px 4px 8px 0px inset, rgba(255, 255, 255, 0.04) 0px 2px 4px 0px inset, rgba(255, 255, 255, 0.04) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset | `--shadow-xl-15` |
| xl-16 | rgba(255, 255, 255, 0.36) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.18) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.25) 0px 8px 24px -4px inset, rgba(0, 0, 0, 0.1) 0px 8px 8px -3px, rgba(0, 0, 0, 0.1) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.06) 0px 0.5px 0.5px 0px | `--shadow-xl-16` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 12px |
| elementGap | 8px |

## Components

### Primary Action Button

**Role:** Filled button indicating primary calls to action.

Background: Electric Blue (#0036ff), Text: Canvas White (#ffffff), Padding: 7px vertical, 16px horizontal; Radius: 999px.

### Ghost Button

**Role:** Secondary action button, visually lighter.

Background: transparent, Text: Ink Black (#000000), Border: 1px solid Silver Mist (#e5e7eb) Top/Left/Right/Bottom, Padding: 16px vertical, 20px horizontal; Radius: 0px.

### Pill Outline Button

**Role:** Outlined button with a distinct pill shape.

Background: transparent, Text: Ink Black (#000000), Border: 1px solid Polar Mist (#d6d6db) Top/Left/Right/Bottom, Padding: 7px vertical, 8-10px horizontal; Radius: 6px.

### Navigation Link Button

**Role:** Small, subtly interactive navigation button.

Background: transparent, Text: Graphite (#141414), Border: 1px solid rgba(0, 0, 0, 0.06), Padding: 7px vertical, 8px horizontal; Radius: 6px.

### Hero Card - Dark Elevated

**Role:** Prominent card for key product features, elevated in background.

Background: Midnight Void (#05061b) with 0.5 opacity, Padding: 6px all sides, Radius: 24px. Features complex inner and outer shadows for significant depth.

### Feature Card - White Frosted

**Role:** Card for light-themed features, with a frosted glass effect.

Background: Canvas White (#ffffff) with 0.88 opacity, Padding: 32px vertical, 36px horizontal; Radius: 20px. Uses soft, multi-layer shadows for subtle lift.

### Info Badge - Sky Blue Text

**Role:** Small informational tag with blue text.

Background: Canvas White (#ffffff), Text: Sky Blue (#0093ff), Padding: 4px vertical, 10-12px horizontal; Radius: 999px.

### Ghost Badge - Dark Background

**Role:** Subtle badge for categorization or status in dark areas.

Background: rgba(255, 255, 255, 0.08) or rgba(255, 255, 255, 0.04), Text: Ink Black (#000000), Padding: 4px vertical, 8px horizontal; Radius: 999px.

## Do's and Don'ts

### Do

- Prioritize Electric Blue (#0036ff) exclusively for primary calls-to-action and essential interactive states.
- Use a 999px border-radius for all primary buttons and badges to achieve a distinctly rounded, 'pill' aesthetic.
- Apply the Midnight Void (#05061b) for hero sections and dark mode cards to ground the interface in deep, cool tones.
- Employ Aeonik Pro with font-feature-settings 'ss02', 'ss05', 'ss10', 'ss11' for all main headlines to maintain its unique character.
- Ensure all body text and UI elements consistently use the Inter typeface with appropriate weight and size from the defined scale.
- Use Silver Mist (#e5e7eb) for all hairline borders and subtle dividers, maintaining visual separation without heavy lines.
- Whenever displaying code or terminal-like content, use Geist Mono with 0.03em letter-spacing at smaller sizes for legibility.

### Don't

- Do not introduce new saturated colors; adhere strictly to Electric Blue and Sky Blue for chromatic accents.
- Avoid using harsh, opaque black shadows; prefer soft, multi-layered, often slightly tinted shadows from the defined list.
- Do not deviate from the specified border radii; mixing different radius styles will undermine component consistency.
- Never use primary text colors (#000000, #141414) on pure white (#ffffff) backgrounds in code or terminal UI components.
- Do not apply bold or black backgrounds to ghost buttons; they are defined by a transparent background with a neutral border.
- Avoid generic system fonts; always map text to Inter, Aeonik Pro, or Geist Mono as appropriate.
- Do not use white as a dominant background color in the hero section; it's reserved for light-themed feature sections.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Deep Space | #05061b | Base background for dark sections, especially hero and commanding areas, with a subtle texture/gradient. |
| 1 | Canvas White | #ffffff | Primary background for light themed sections, offering a clean, expansive content area. |
| 2 | Frosted Card | #ffffff | Elevated white cards (with 0.88 opacity) that appear 'frosted' with soft shadows for content grouping. |
| 3 | Dark Commander Card | #05061b | High-prominence dark cards (with 0.5 opacity) for key feature blocks, featuring complex inner and outer shadows. |

## Elevation

- **Hero Card - Dark Elevated:** `rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(2, 9, 44, 0.24) 0px 16px 56px 0px, rgba(1, 9, 44, 0.24) 0px 4px 16px 0px, rgba(2, 9, 44, 0.24) 0px 1px 2px 0px, rgba(5, 6, 27, 0.52) 0px 0px 0px 1px`
- **Feature Card - White Frosted:** `rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px`
- **Interactive Button (various):** `rgba(255, 255, 255, 0.12) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.16) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.16) 0px 8px 24px -4px inset, rgba(9, 1, 20, 0.03) 0px 8px 8px -3px, rgba(9, 1, 20, 0.03) 0px 5px 5px -2.5px, rgba(8, 1, 20, 0.03) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px`

## Similar Brands

- **Vercel** — Shares a similar developer-tooling aesthetic with dark mode sections, sharp typographic hierarchy for headlines, and clean, contained UI elements.
- **Linear** — Employs a precise, utilitarian typography, often using subtle grays and a single vibrant accent color to denote interaction and status.
- **GitHub** — Uses a blend of light and dark interfaces, with technical, monospace fonts for code and a clear emphasis on functional, data-rich displays.
- **Plausible Analytics** — Features a clean, data-focused UI with carefully selected grays, structured layouts, and minimal, effective use of brand colors for key actions.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-void: #05061b;
  --color-canvas-white: #ffffff;
  --color-silver-mist: #e5e7eb;
  --color-ink-black: #000000;
  --color-graphite: #141414;
  --color-cloud-gray: #656565;
  --color-faded-white: #e6fff7;
  --color-light-steel: #c2c2c9;
  --color-polar-mist: #d6d6db;
  --color-electric-blue: #0036ff;
  --color-sky-blue: #0093ff;
  --color-ash-code: #384642;
  --color-clean-white-gradient: #f7f7f7;
  --color-deep-blue-gradient: #0f071d;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-aeonik-pro: 'Aeonik Pro', Inter, system-ui, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, monospace;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.04px;
  --text-subheading: 18px;
  --leading-subheading: 1.78;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.22;
  --tracking-heading-lg: -0.54px;
  --text-display: 74px;
  --leading-display: 1.08;
  --tracking-display: -1.11px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-109: 109px;
  --spacing-110: 110px;
  --spacing-116: 116px;
  --spacing-120: 120px;
  --spacing-125: 125px;
  --spacing-126: 126px;
  --spacing-140: 140px;
  --spacing-144: 144px;
  --spacing-152: 152px;
  --spacing-173: 173px;
  --spacing-216: 216px;
  --spacing-236: 236px;
  --spacing-240: 240px;
  --spacing-248: 248px;
  --spacing-273: 273px;
  --spacing-284: 284px;
  --radius-none: 0px;
  --radius-cards: 24px;
  --radius-large: 32px;
  --radius-small: 6px;
  --radius-badges: 999px;
  --radius-medium: 14px;
  --radius-buttons: 999px;
  --radius-content: 20px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(255, 255, 255, 0.12) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset, rgba(101, 101, 101, 0.16) 0px 4px 8px -2px, rgba(101, 101, 101, 0.12) 0px 2px 4px -1px, rgba(101, 101, 101, 0.12) 0px 1px 2px -0.5px, rgba(101, 101, 101, 0.12) 0px 0.5px 0.5px 0px;
  --shadow-xl-3: rgba(255, 255, 255, 0.12) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.16) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.16) 0px 8px 24px -4px inset, rgba(9, 1, 20, 0.03) 0px 8px 8px -3px, rgba(9, 1, 20, 0.03) 0px 5px 5px -2.5px, rgba(8, 1, 20, 0.03) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.04) 0px 12px 12px -3px, rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  --shadow-xl-5: rgba(0, 0, 0, 0.06) 0px 12px 12px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-6: rgba(255, 255, 255, 0.08) 0px -4px 12px -4px inset, rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset, rgba(9, 1, 20, 0.06) 0px 8px 8px -3px, rgba(8, 1, 20, 0.06) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.04) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px;
  --shadow-xl-7: rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px, rgba(255, 255, 255, 0.04) 0px 2px 8px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset;
  --shadow-xl-8: rgba(0, 0, 0, 0.04) 0px -2px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px, rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-9: rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px;
  --shadow-xl-10: rgba(0, 0, 0, 0.04) 0px 8px 8px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.03) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  --shadow-xl-11: rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(2, 9, 44, 0.24) 0px 16px 56px 0px, rgba(1, 9, 44, 0.24) 0px 4px 16px 0px, rgba(2, 9, 44, 0.24) 0px 1px 2px 0px, rgba(5, 6, 27, 0.52) 0px 0px 0px 1px;
  --shadow-xl-12: rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(5, 6, 27, 0.88) 0px 16px 56px 0px, rgba(5, 6, 27, 0.16) 0px 2px 4px 0px, rgba(5, 6, 27, 0.12) 0px 1px 2px 0px, rgba(5, 6, 27, 0.88) 0px 0px 0px 1px;
  --shadow-xl-13: rgba(0, 0, 0, 0.08) 0px 12px 24px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-14: rgba(0, 0, 0, 0.04) 0px 24px 32px -3px, rgba(0, 0, 0, 0.06) 0px 12px 24px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-15: rgba(255, 255, 255, 0.04) 0px 4px 8px 0px inset, rgba(255, 255, 255, 0.04) 0px 2px 4px 0px inset, rgba(255, 255, 255, 0.04) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset;
  --shadow-xl-16: rgba(255, 255, 255, 0.36) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.18) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.25) 0px 8px 24px -4px inset, rgba(0, 0, 0, 0.1) 0px 8px 8px -3px, rgba(0, 0, 0, 0.1) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.06) 0px 0.5px 0.5px 0px;
  --surface-deep-space: #05061b;
  --surface-canvas-white: #ffffff;
  --surface-frosted-card: #ffffff;
  --surface-dark-commander-card: #05061b;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-void: #05061b;
  --color-canvas-white: #ffffff;
  --color-silver-mist: #e5e7eb;
  --color-ink-black: #000000;
  --color-graphite: #141414;
  --color-cloud-gray: #656565;
  --color-faded-white: #e6fff7;
  --color-light-steel: #c2c2c9;
  --color-polar-mist: #d6d6db;
  --color-electric-blue: #0036ff;
  --color-sky-blue: #0093ff;
  --color-ash-code: #384642;
  --color-clean-white-gradient: #f7f7f7;
  --color-deep-blue-gradient: #0f071d;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-aeonik-pro: 'Aeonik Pro', Inter, system-ui, sans-serif;
  --font-geist-mono: 'Geist Mono', ui-monospace, monospace;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.04px;
  --text-subheading: 18px;
  --leading-subheading: 1.78;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.22;
  --tracking-heading-lg: -0.54px;
  --text-display: 74px;
  --leading-display: 1.08;
  --tracking-display: -1.11px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-109: 109px;
  --spacing-110: 110px;
  --spacing-116: 116px;
  --spacing-120: 120px;
  --spacing-125: 125px;
  --spacing-126: 126px;
  --spacing-140: 140px;
  --spacing-144: 144px;
  --spacing-152: 152px;
  --spacing-173: 173px;
  --spacing-216: 216px;
  --spacing-236: 236px;
  --spacing-240: 240px;
  --spacing-248: 248px;
  --spacing-273: 273px;
  --spacing-284: 284px;
  --radius-none: 0px;
  --radius-cards: 24px;
  --radius-large: 32px;
  --radius-small: 6px;
  --radius-badges: 999px;
  --radius-medium: 14px;
  --radius-buttons: 999px;
  --radius-content: 20px;
  --shadow-xl: rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  --shadow-xl-2: rgba(255, 255, 255, 0.12) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset, rgba(101, 101, 101, 0.16) 0px 4px 8px -2px, rgba(101, 101, 101, 0.12) 0px 2px 4px -1px, rgba(101, 101, 101, 0.12) 0px 1px 2px -0.5px, rgba(101, 101, 101, 0.12) 0px 0.5px 0.5px 0px;
  --shadow-xl-3: rgba(255, 255, 255, 0.12) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.16) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.16) 0px 8px 24px -4px inset, rgba(9, 1, 20, 0.03) 0px 8px 8px -3px, rgba(9, 1, 20, 0.03) 0px 5px 5px -2.5px, rgba(8, 1, 20, 0.03) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px;
  --shadow-xl-4: rgba(0, 0, 0, 0.04) 0px 12px 12px -3px, rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  --shadow-xl-5: rgba(0, 0, 0, 0.06) 0px 12px 12px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-6: rgba(255, 255, 255, 0.08) 0px -4px 12px -4px inset, rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset, rgba(9, 1, 20, 0.06) 0px 8px 8px -3px, rgba(8, 1, 20, 0.06) 0px 3px 3px -1.5px, rgba(8, 1, 20, 0.04) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px;
  --shadow-xl-7: rgba(8, 1, 20, 0.03) 0px 2px 2px -1px, rgba(8, 1, 20, 0.03) 0px 1px 1px -0.5px, rgba(8, 1, 20, 0.03) 0px 0.5px 0.5px 0px, rgba(255, 255, 255, 0.04) 0px 2px 8px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.12) 0px 0.5px 0.5px 0px inset;
  --shadow-xl-8: rgba(0, 0, 0, 0.04) 0px -2px 0.5px 0px inset, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px, rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-9: rgba(0, 0, 0, 0.02) 0px 6px 6px -3px, rgba(0, 0, 0, 0.02) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.04) 0px 12px 12px -3px;
  --shadow-xl-10: rgba(0, 0, 0, 0.04) 0px 8px 8px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 2px 2px -1px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.03) 0px 0.5px 0.5px 0px, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px;
  --shadow-xl-11: rgba(255, 255, 255, 0.06) 0px 1px 3px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(2, 9, 44, 0.24) 0px 16px 56px 0px, rgba(1, 9, 44, 0.24) 0px 4px 16px 0px, rgba(2, 9, 44, 0.24) 0px 1px 2px 0px, rgba(5, 6, 27, 0.52) 0px 0px 0px 1px;
  --shadow-xl-12: rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset, rgba(5, 6, 27, 0.88) 0px 16px 56px 0px, rgba(5, 6, 27, 0.16) 0px 2px 4px 0px, rgba(5, 6, 27, 0.12) 0px 1px 2px 0px, rgba(5, 6, 27, 0.88) 0px 0px 0px 1px;
  --shadow-xl-13: rgba(0, 0, 0, 0.08) 0px 12px 24px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-14: rgba(0, 0, 0, 0.04) 0px 24px 32px -3px, rgba(0, 0, 0, 0.06) 0px 12px 24px -3px, rgba(0, 0, 0, 0.04) 0px 6px 6px -3px, rgba(0, 0, 0, 0.04) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.03) 0px 1px 1px -0.5px;
  --shadow-xl-15: rgba(255, 255, 255, 0.04) 0px 4px 8px 0px inset, rgba(255, 255, 255, 0.04) 0px 2px 4px 0px inset, rgba(255, 255, 255, 0.04) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.06) 0px 0.5px 0.5px 0px inset;
  --shadow-xl-16: rgba(255, 255, 255, 0.36) 0px 1px 2px -0.5px inset, rgba(255, 255, 255, 0.18) 0px 0.5px 0.5px 0px inset, rgba(255, 255, 255, 0.25) 0px 8px 24px -4px inset, rgba(0, 0, 0, 0.1) 0px 8px 8px -3px, rgba(0, 0, 0, 0.1) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.08) 0px 2px 2px -1px, rgba(0, 0, 0, 0.06) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.06) 0px 0.5px 0.5px 0px;
  --surface-deep-space: #05061b;
  --surface-canvas-white: #ffffff;
  --surface-frosted-card: #ffffff;
  --surface-dark-commander-card: #05061b;
}
```

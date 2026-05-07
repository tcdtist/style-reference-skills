---
version: alpha
name: "Qatalog"
description: "ClickUp's design system, as seen on the Qatalog acquisition page, emphasizes a bold yet understated aesthetic. High-contrast typography in deep, near-black neutrals anchors the content on a pristine white canvas. A single vivid violet serves as a functional accent, drawing the eye to interactive elements and brand highlights. The visual language balances sharp, confident headlines with approachable body text, creating a system that feels modern and efficient without visual clutter."
theme: "light"
industry: "ai"
source_url: "https://qatalog.com"
refero_style_id: "7eed2626-ab11-472c-b04a-603476ff8957"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510121595-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510121595-thumb.jpg"
extracted_at: "2026-04-30T00:49:08.084Z"
---

# Qatalog — Style Reference

> Crisp Monochrome Control Panel

**Theme:** light

**Industry:** ai

ClickUp's design system, as seen on the Qatalog acquisition page, emphasizes a bold yet understated aesthetic. High-contrast typography in deep, near-black neutrals anchors the content on a pristine white canvas. A single vivid violet serves as a functional accent, drawing the eye to interactive elements and brand highlights. The visual language balances sharp, confident headlines with approachable body text, creating a system that feels modern and efficient without visual clutter.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, elevated card surfaces, primary text on dark elements |
| Graphite Black | #000000 | `--color-graphite-black` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Ink Black | #202020 | `--color-ink-black` | Headlines, dominant button fills, critical text elements – slightly softer than pure black to prevent starkness; Background for product screenshots or dark UI sections, providing a smooth transition from dark to slightly lighter neutral |
| Slate Gray | #292d34 | `--color-slate-gray` | Secondary text, borders, subtle UI elements – a dark, desaturated background for content sections |
| Subtle Gray | #646464 | `--color-subtle-gray` | Muted helper text, navigation items, secondary link borders – provides visual separation without disappearing |
| Ash Gray | #838383 | `--color-ash-gray` | Lightest gray for borders, inactive states, placeholder text – provides subtle definition |
| Whisper White | #f0f0f0 | `--color-whisper-white` | Subtle background for navigation elements and ghost buttons, hinting at interactivity |
| Cloud Gray | #e8e8e8 | `--color-cloud-gray` | Fine borders and decorative fills, providing minimal contrast |
| Deep Violet | #514b81 | `--color-deep-violet` | Decorative accents, UI highlights – a deep, almost muted purple for a sophisticated touch |
| Electric Violet | #7b68ee | `--color-electric-violet` | Interactive link underlines, bordered buttons, emphasis on a few key UI elements – a vibrant pop of color for action |
| Rainbow Gradient Overlay | #0091ff | `--color-rainbow-gradient-overlay` | Decorative background overlay for imagery, creating a dynamic, tech-forward atmosphere |

## Tokens — Typography

### Plus Jakarta Sans

- **Token:** `--font-plus-jakarta-sans`
- **Substitute:** system-ui
- **Weights:** 400, 650, 700
- **Sizes:** 16px, 34px, 40px, 48px, 60px
- **Line heights:** 1.10, 1.15, 1.20, 1.50
- **Letter spacing:** -0.0470em, -0.0400em, -0.0350em
- **OpenType features:** 'calt' 0
- **Role:** Primary headings and select prominent UI text. Its distinct letter spacing at larger sizes creates a signature tight, modern feel, while lighter weights retain approachability. Usage at 16px provides a clear, compact label.

### Inter

- **Token:** `--font-inter`
- **Substitute:** sans-serif
- **Weights:** 400, 500, 600, 650
- **Sizes:** 8px, 12px, 14px, 16px, 18px
- **Line heights:** 1.00, 1.14, 1.33, 1.38, 1.43, 1.50
- **Letter spacing:** -0.0200em, -0.0180em, -0.0140em, -0.0110em, -0.0100em
- **OpenType features:** 'calt' 0, 'clig' 0, 'liga' 0
- **Role:** Body copy, secondary navigation, and smaller UI text. Its versatility across weights and small sizes ensures readability and clarity in dense information areas.

### Sometype Mono

- **Token:** `--font-sometype-mono`
- **Substitute:** monospace
- **Weights:** 500
- **Sizes:** 14px, 16px
- **Line heights:** 1.25, 1.29
- **Letter spacing:** normal
- **Role:** Used sparingly for code snippets, badges, or specific technical labels where a fixed-width, distinct character is desired. Its presence distinguishes content from standard UI text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| body | 14px | 1.5 | -0.14px | `--text-body` |
| body-lg | 16px | 1.5 | -0.16px | `--text-body-lg` |
| subheading | 18px | 1.43 | -0.21px | `--text-subheading` |
| heading | 34px | 1.15 | -1.36px | `--text-heading` |
| heading-lg | 40px | 1.1 | -1.4px | `--text-heading-lg` |
| display | 48px | 1.1 | -1.44px | `--text-display` |
| display-lg | 60px | 1.1 | -2.12px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-90 | 90px | `--spacing-90` |
| spacing-133 | 133px | `--spacing-133` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 9px |
| cards | 18px |
| buttons | 9px |
| general | 9px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 133px |
| cardPadding | 10px |
| elementGap | 5px |

## Components

### Text Link Button

**Role:** Navigation, secondary actions

Ghost button with no background or border, `Graphite Black` text, 5px bottom padding to create a subtle underline effect on hover, 0px radius.

### Outlined Neutral Button

**Role:** Secondary calls to action, filtering

Transparent background, 8px radius, `Graphite Black` text, 4px top/bottom padding, 10px left/right padding. The `Graphite Black` border activates on hover.

### Muted Outlined Button

**Role:** Tertiary actions, less prominent links

Transparent background, 8px radius, `Subtle Gray` text and border (when present), 8px top/bottom padding, 10px left/right padding.

### Filled Primary Button

**Role:** Main call to action

Solid `Ink Black` background, `Canvas White` text, 8px radius, 8px top/bottom padding, 12px left/right padding. Signals high interaction priority.

### Light Header Button

**Role:** Navigation login actions

`Whisper White` background, `Graphite Black` text, 8px radius, 8px top/bottom padding, 10px left/right padding.

### Gradient Border Button

**Role:** Specialized or featured actions

Displays a vibrant `Electric Violet` border for emphasized links or buttons, with transparent background and `Electric Violet` text. Radius is 8px.

### Feature Card

**Role:** Showcasing product features or benefits

Cards use a `Canvas White` with 50% opacity background, a distinct 18px border radius, and 10px internal padding. They communicate a light, elevated presence without strong shadows.

### Dark Content Card

**Role:** Containing rich media or contextual information

Cards with a solid `Graphite Black` background, 18px border radius, and 0px padding, often used for embedding visuals or interactive elements.

### Muted Badge

**Role:** Informational labels, status indicators

Transparent background with `Ash Gray` text, 0px radius, and standard text padding. Used for unobtrusive categorization.

## Do's and Don'ts

### Do

- Use `Canvas White` (#ffffff) as the primary page background for all content outside of dedicated dark sections.
- Apply `Ink Black` (#202020) for all primary headings (display-lg, display, heading-lg, heading) to ensure visual impact.
- Ensure interactive links and bordered buttons use `Electric Violet` (#7b68ee) for their text or border color, never for backgrounds.
- Maintain a tight visual rhythm for headings by consistently applying letter spacing: -1.4px at 40px, -1.44px at 48px, and -2.12px at 60px (`Plus Jakarta Sans`).
- Employ a 9px border radius (`spacing.radius.buttons` or `spacing.radius.general`) for all functional UI elements like buttons, nav links, and tags.
- Utilize 10px (`spacing.cardPadding`) as the primary internal padding for card components and similar container elements.
- For primary call-to-action buttons, use the `Ink Black` (#202020) fill with `Canvas White` (#ffffff) text and an 8px border radius.

### Don't

- Do not use `Electric Violet` (#7b68ee) as a background fill for any button or primary UI element; reserve it for borders, text, and interactive highlights.
- Avoid applying heavy drop shadows; cards should use `Canvas White` at 50% opacity or be solid `Graphite Black` with no shadow.
- Do not introduce new typefaces; rely solely on `Plus Jakarta Sans`, `Inter`, and `Sometype Mono` for all typographic needs.
- Never use full-bleed imagery without a subtle overlay, especially when paired with the `Rainbow Gradient Overlay`.
- Do not use arbitrary spacing values; always refer to the defined `spacing` tokens like 4px, 5px, 8px, 10px, 12px, for consistent rhythm.
- Avoid deep, dark backgrounds on content cards unless it's a specific 'Dark Content Card' component using `Graphite Black` (#000000).
- Do not use highly saturated colors for body text; `Slate Gray` (#292d34) or `Subtle Gray` (#646464) are preferred for readability and brand adherence.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Page Canvas | #ffffff | Dominant background for the entire page, providing a bright, clean, and spacious foundation. |
| 1 | Feature Card Surface | #ffffff | Slightly elevated card backgrounds, appearing with 50% opacity to subtly distinguish itself from the main canvas without introducing heavy shadows. |
| 2 | Dark Content Panel | #000000 | Used for specific content blocks or sections that require a darker backdrop, such as embedded product visuals or unique UI elements. |
| 3 | Header Action Background | #f0f0f0 | A subtle, light gray background for ghost buttons or specific navigation elements, indicating interactive areas without being visually heavy. |

## Similar Brands

- **Linear** — High-contrast dark typography on white, functional color accents for interactive elements, compact UI.
- **Stripe** — Clean, spacious layout with strong typographic hierarchy, subtle use of neutrals, and focused chromatic accents.
- **Notion** — Emphasis on content clarity, minimalist UI, and a controlled color palette with primary text in near-black hues.
- **Figma** — Modern design tool aesthetic with strong use of neutrals, subtle surface differentiation, and precise radius treatment.
- **Vercel** — Developer-centric, minimalist design with strong typography, ample whitespace, and focused use of brand colors as highlights.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-graphite-black: #000000;
  --color-ink-black: #202020;
  --color-slate-gray: #292d34;
  --color-subtle-gray: #646464;
  --color-ash-gray: #838383;
  --color-whisper-white: #f0f0f0;
  --color-cloud-gray: #e8e8e8;
  --color-deep-violet: #514b81;
  --color-electric-violet: #7b68ee;
  --color-rainbow-gradient-overlay: #0091ff;
  --font-plus-jakarta-sans: 'Plus Jakarta Sans', system-ui;
  --font-inter: 'Inter', sans-serif;
  --font-sometype-mono: 'Sometype Mono', monospace;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.14px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.21px;
  --text-heading: 34px;
  --leading-heading: 1.15;
  --tracking-heading: -1.36px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.4px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -1.44px;
  --text-display-lg: 60px;
  --leading-display-lg: 1.1;
  --tracking-display-lg: -2.12px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-90: 90px;
  --spacing-133: 133px;
  --spacing-153: 153px;
  --spacing-160: 160px;
  --radius-tags: 9px;
  --radius-cards: 18px;
  --radius-buttons: 9px;
  --radius-general: 9px;
  --surface-page-canvas: #ffffff;
  --surface-feature-card-surface: #ffffff;
  --surface-dark-content-panel: #000000;
  --surface-header-action-background: #f0f0f0;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-graphite-black: #000000;
  --color-ink-black: #202020;
  --color-slate-gray: #292d34;
  --color-subtle-gray: #646464;
  --color-ash-gray: #838383;
  --color-whisper-white: #f0f0f0;
  --color-cloud-gray: #e8e8e8;
  --color-deep-violet: #514b81;
  --color-electric-violet: #7b68ee;
  --color-rainbow-gradient-overlay: #0091ff;
  --font-plus-jakarta-sans: 'Plus Jakarta Sans', system-ui;
  --font-inter: 'Inter', sans-serif;
  --font-sometype-mono: 'Sometype Mono', monospace;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: -0.14px;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --tracking-body-lg: -0.16px;
  --text-subheading: 18px;
  --leading-subheading: 1.43;
  --tracking-subheading: -0.21px;
  --text-heading: 34px;
  --leading-heading: 1.15;
  --tracking-heading: -1.36px;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -1.4px;
  --text-display: 48px;
  --leading-display: 1.1;
  --tracking-display: -1.44px;
  --text-display-lg: 60px;
  --leading-display-lg: 1.1;
  --tracking-display-lg: -2.12px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-52: 52px;
  --spacing-90: 90px;
  --spacing-133: 133px;
  --spacing-153: 153px;
  --spacing-160: 160px;
  --radius-tags: 9px;
  --radius-cards: 18px;
  --radius-buttons: 9px;
  --radius-general: 9px;
  --surface-page-canvas: #ffffff;
  --surface-feature-card-surface: #ffffff;
  --surface-dark-content-panel: #000000;
  --surface-header-action-background: #f0f0f0;
}
```

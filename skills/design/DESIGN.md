---
version: alpha
name: "Design"
description: "Cash App's design system navigates between stark order and vibrant expression, built on a dark theme that leverages high contrast and precise typographic control. The core palette is achromatic, allowing saturated brand colors to serve as energetic accents within a highly structured environment. Typography is prominent, employing large, confident sizes and distinctive letter-spacing. UI elements are rendered with minimal visual embellishment, emphasizing function and content, with interaction indicated by subtle borders and color shifts."
theme: "dark"
industry: "fintech"
source_url: "https://design.cash.app"
refero_style_id: "bbfbe753-a417-43ec-9af7-ef6c08a5140d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509469153-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777509469153-thumb.jpg"
extracted_at: "2026-04-30T00:38:05.490Z"
---

# Design — Style Reference

> Dark mode precision, neon punctuation

**Theme:** dark

**Industry:** fintech

Cash App's design system navigates between stark order and vibrant expression, built on a dark theme that leverages high contrast and precise typographic control. The core palette is achromatic, allowing saturated brand colors to serve as energetic accents within a highly structured environment. Typography is prominent, employing large, confident sizes and distinctive letter-spacing. UI elements are rendered with minimal visual embellishment, emphasizing function and content, with interaction indicated by subtle borders and color shifts.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Black | #000000 | `--color-midnight-black` | Primary text, icon fills, page backgrounds (dominant for text/icons, secondary for canvas) |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card surfaces, high-contrast text and icon fills against dark backgrounds |
| Ghost Border | #e5e7eb | `--color-ghost-border` | Subtle borders for outlined elements, dividers, ghost buttons, and list item separators – providing structure without heavy lines |
| Subtle Gray | #858585 | `--color-subtle-gray` | Muted text, secondary labels, disabled states, supporting information |
| Hinting Gray | #b3b3b3 | `--color-hinting-gray` | Placeholder text, tertiary information, subtle icon tones |

## Tokens — Typography

### CashSans

- **Token:** `--font-cashsans`
- **Substitute:** system-ui
- **Weights:** 400, 500, 700
- **Sizes:** 10px, 12px, 16px, 86px, 117px, 122px
- **Line heights:** 1.00, 1.50
- **Letter spacing:** -0.0150em
- **Role:** Primary brand typeface, used across all text elements from body to display headlines. Its tailored tracking ensures visual tightness even at large sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body-sm | 12px | 1.5 | — | `--text-body-sm` |
| body | 16px | 1.5 | — | `--text-body` |
| body-lg | 86px | 1.3 | — | `--text-body-lg` |
| heading-sm | 117px | 1.3 | — | `--text-heading-sm` |
| heading | 122px | 1.3 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 0px |
| images | 15px |
| buttons | 0px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 0px |
| elementGap | 12px |

## Components

### Ghost Navigation Button

**Role:** Navigation items and secondary actions without visual hierarchy

Transparent background, Ghost Border around the bottom for emphasis, Midnight Black text, 0px border-radius, `CashSans` font, 10px vertical padding, 10px horizontal padding.

### Plain Card

**Role:** Container for content; appears as a content block within the page structure

Transparent background, no border, no box shadow, 0px border-radius, 0px padding inside. Renders content directly without a distinct container style.

### Image with Rounded Corners

**Role:** Visual content container with minimal styling aside from radius

Images are displayed with a 15px border-radius, without any border or shadow.

## Do's and Don'ts

### Do

- Prioritize high contrast using Midnight Black and Canvas White for text and backgrounds.
- Use Ghost Border (#e5e7eb) for subtle structural elements like dividers and non-primary button outlines, not for solid fills.
- Apply Cash Lime (#00d533) sparingly as a functional accent for interactive states or key brand moments.
- Employ the CashSans font family at specified weights and sizes, ensuring the global -0.0150em letter-spacing is applied.
- Maintain 0px border-radius for buttons and cards, preserving a structured and sharp aesthetic.
- Utilize 12px as the standard element gap for horizontal and vertical spacing between most UI elements.
- Set section gaps at 64px to create clear visual separation between major content blocks.

### Don't

- Avoid using saturated colors other than Cash Lime, unless explicitly defined as semantic status colors.
- Do not introduce heavy box shadows or gradient overlays, as the system relies on flat surfaces and minimal elevation.
- Refrain from deviating from the 0px border-radius for interactive components like buttons and cards.
- Do not use generic system fonts; always default to CashSans for brand consistency.
- Avoid excessive padding within card components, as they are designed to be content-forward without ornate frames.
- Do not allow text to have low contrast; ensure sufficient contrast ratios for readability, especially for Subtle Gray and Hinting Gray.
- Do not use multiple font families; restrict typography to CashSans only.

## Imagery

Imagery use is minimal, with the provided screenshot indicating image blocks with rounded corners. If photography or illustration is introduced, it should be contained within these structured blocks. The primary visual language seems to be UI-focused, leaning towards text and simple icons/shapes rather than rich graphical elements. Icons are likely filled or outlined, inheriting color from the parent text context, and contribute to the structured typographic field.

## Layout

The page primarily uses a full-bleed structure without a defined `pageMaxWidth`, suggesting content can span the full viewport. However, content elements and sections appear to be intentionally spaced using a `64px` section gap. The hero pattern is not explicitly visible but the overall feel suggests a dark canvas with strong typographic elements. Content arrangement appears to be linear, with distinct sections vertically stacked and internally structured by strong use of borders and whitespace. Navigation elements are likely a top bar or side panel given the structured nature, with minimal visual emphasis allowing content to dominate.

## Similar Brands

- **Revolut** — Dark-mode UI with high contrast and reliance on a single vivid accent color for interactive elements.
- **Acme Inc. (fictional)** — Strong emphasis on custom typography and precise letter-spacing to define brand identity, rather than decorative elements.
- **Stripe** — Minimalist aesthetic, with a focus on functional UIs, subtle borders, and precise spacing over heavy visual adornments.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-black: #000000;
  --color-canvas-white: #ffffff;
  --color-ghost-border: #e5e7eb;
  --color-subtle-gray: #858585;
  --color-hinting-gray: #b3b3b3;
  --font-cashsans: 'CashSans', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body-sm: 12px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 86px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 117px;
  --leading-heading-sm: 1.3;
  --text-heading: 122px;
  --leading-heading: 1.3;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-64: 64px;
  --radius-cards: 0px;
  --radius-images: 15px;
  --radius-buttons: 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-black: #000000;
  --color-canvas-white: #ffffff;
  --color-ghost-border: #e5e7eb;
  --color-subtle-gray: #858585;
  --color-hinting-gray: #b3b3b3;
  --font-cashsans: 'CashSans', system-ui;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body-sm: 12px;
  --leading-body-sm: 1.5;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-body-lg: 86px;
  --leading-body-lg: 1.3;
  --text-heading-sm: 117px;
  --leading-heading-sm: 1.3;
  --text-heading: 122px;
  --leading-heading: 1.3;
  --spacing-0: 0px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-64: 64px;
  --radius-cards: 0px;
  --radius-images: 15px;
  --radius-buttons: 0px;
}
```

---
version: alpha
name: "Pipe"
description: "Pipe presents a confident, high-contrast dark theme. The almost-black background paired with stark white typography gives it a technical, no-nonsense feel, while a single vivid orange accent color slices through to highlight key interactions. Typography, primarily in a custom sans-serif, maintains a clean and readable texture against the dark canvas, with subtle variations in weight and spacing. The overall impression is one of digital infrastructure and precision."
theme: "dark"
industry: "fintech"
source_url: "https://pipe.com"
refero_style_id: "ab201ed7-928f-4080-ba95-c3992311e39d"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924207972-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924207972-thumb.jpg"
extracted_at: "2026-04-11T16:17:05.741Z"
---

# Pipe — Style Reference

> Blackrock and Molten Orange. A landscape of dark, solid forms punctuated by sharp, glowing accents.

**Theme:** dark

**Industry:** fintech

Pipe presents a confident, high-contrast dark theme. The almost-black background paired with stark white typography gives it a technical, no-nonsense feel, while a single vivid orange accent color slices through to highlight key interactions. Typography, primarily in a custom sans-serif, maintains a clean and readable texture against the dark canvas, with subtle variations in weight and spacing. The overall impression is one of digital infrastructure and precision.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Core | #000000 | `--color-midnight-core` | Page background, primary text on light backgrounds, component backgrounds. |
| Ivory Canvas | #ffffff | `--color-ivory-canvas` | Primary text on dark backgrounds, card backgrounds, interactive elements. |
| Slate Text | #808080 | `--color-slate-text` | Secondary text, subtle interactive states, descriptive copy against dark backgrounds. |
| Onyx Layer | #1a1a1a | `--color-onyx-layer` | Secondary card backgrounds, subtle surface variations within the dark theme. |
| Ghost White | #f5f5f5 | `--color-ghost-white` | Decorative borders, subtle dividers, very light background accents on light cards. |
| Molten Orange | #e2572c | `--color-molten-orange` | Primary call-to-action buttons, key links, highlighted text elements – drawing immediate attention. |

## Tokens — Typography

### Suisse Font

- **Token:** `--font-suisse-font`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 20px, 24px, 32px, 80px
- **Line heights:** 1.10, 1.24, 1.25, 1.33, 1.37, 1.40, 1.42, 1.43, 1.50, 1.63, 1.90
- **Letter spacing:** -0.0070em (at larger sizes), 0.0060em (at smaller sizes)
- **OpenType features:** 'kern'
- **Role:** The sole typeface, handling all content from hero headings to captions. Its straightforward sans-serif form reinforces the system's clarity and modern functionality. The consistent use of a single font family at varying sizes and line heights creates a cohesive and disciplined textual hierarchy.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 32px | 1.25 | — | `--text-heading-lg` |
| display | 80px | 1.1 | -0.7px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-5 | 5px | `--spacing-5` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-96 | 96px | `--spacing-96` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 9999px |
| cards | 16px |
| buttons | 8px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64-72px |
| cardPadding | 16px |
| elementGap | 8px |

## Components

### Primary CTA Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Cards — Dark Surface Grid

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat / Metric Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call-to-Action Button

**Role:** Interactive element

Filled with Molten Orange (#e2572c), text in Midnight Core (#000000), 8px border-radius, with 12px horizontal padding and minimal vertical padding creating a compact, action-oriented button. Text is Suisse Font 400.

### Secondary Ghost Button

**Role:** Interactive element

Transparent background, text in Slate Text (#808080), 8px border-radius. Used for navigation and secondary actions, offering a less intrusive interaction.

### Sign-in Button

**Role:** Interactive element

Filled with Ivory Canvas (#ffffff), text in Midnight Core (#000000), 8px border-radius, with 12px horizontal padding. Offers a high-contrast alternative for specific actions.

### Navigation Link Button

**Role:** Interactive element

Transparent background, text in Ivory Canvas (#ffffff), 8px border-radius, with 12px horizontal padding. Used for the primary navigation, blending into the dark header until hovered/active.

### Dark Surface Card

**Role:** Content container

Background is Onyx Layer (#1a1a1a) with 16px border-radius. Primarily used for containing content blocks against the overall Midnight Core background.

### Light Surface Card

**Role:** Content container

Background is Ivory Canvas (#ffffff) with 16px border-radius. Used to visually differentiate content sections or highlight specific information within the dark theme.

## Do's and Don'ts

### Do

- Prioritize Midnight Core (#000000) for primary dark backgrounds and Ivory Canvas (#ffffff) for primary text achieving AAA contrast.
- Use Molten Orange (#e2572c) exclusively for high-impact CTAs and key interactive elements.
- Apply an 8px border-radius for all interactive buttons and a 16px radius for content cards.
- Maintain Suisse Font 400 throughout the interface, leveraging size and line-height for hierarchy.
- Ensure consistent spacing with the 8px base unit, particularly 24px-48px for horizontal padding and 64px-72px for section gaps.
- Utilize Slate Text (#808080) for all secondary and tertiary textual content against dark backgrounds to soften hierarchy.

### Don't

- Avoid introducing additional saturated colors; maintain the Molten Orange (#e2572c) as the sole brand accent.
- Do not use box-shadows; depth is created through variations of dark neutral backgrounds.
- Refrain from using varied font weights; the system relies on the singular Suisse Font 400, adjusting size and line-height for visual distinction.
- Do not create buttons with less than 8px border-radius or cards with less than 16px border-radius.
- Avoid placing Ivory Canvas (#ffffff) text directly on Molten Orange (#e2572c) elements due to insufficient contrast (5.6:1 AA).

## Imagery

The site uses a mix of candid, dark-toned photography and abstract, minimal product-oriented graphics. Photography like the hero image features real people in professional, albeit natural, settings. The color treatment of these images is often desaturated, blending seamlessly into the dark UI. Visuals are typically contained within defined sections rather than full-bleed, maintaining a structured feel. Icons, while not explicitly detailed, appear monochrome and functional, supporting the UI without drawing excessive attention. The role of imagery is primarily atmospheric and supplementary, providing context for the software without distracting from the UI's focus.

## Layout

The layout is predominantly a max-width contained design on a dark canvas, with the hero section stretching full-bleed vertically. Content is largely divided into clear, vertically stacked sections. The primary hero pattern features a split-screen approach: prominent headline and CTA on the left on a dark background, paired with a dark-toned photographic image on the right. Section rhythm is mostly seamless, relying on internal content differentiation rather than alternating background bands. Content arrangement employs centered stacks for main headings and descriptions, with implied multi-column grids for feature presentations. Density is comfortable, with generous vertical spacing between content blocks, but without feeling sparse. Navigation is a sticky top bar, minimal and functional, featuring text links and a 'Demo' button.

## Similar Brands

- **Stripe** — Shares a sophisticated, high-contrast dark mode aesthetic with a single, clear accent color and clean, functional typography.
- **Vercel** — Employs an unadorned, almost stark dark UI alongside a clear emphasis on textual hierarchy and a strong single accent color for interactive elements.
- **Linear** — Utilizes a dark, minimalist interface with a focus on sharp edges and a disciplined use of color, conveying efficiency and precision.
- **Ramp** — Features a direct and functional design with a dark theme and prominent CTAs, typical of modern fintech platforms.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-core: #000000;
  --color-ivory-canvas: #ffffff;
  --color-slate-text: #808080;
  --color-onyx-layer: #1a1a1a;
  --color-ghost-white: #f5f5f5;
  --color-molten-orange: #e2572c;
  --font-suisse-font: 'Suisse Font', Inter;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.25;
  --text-display: 80px;
  --leading-display: 1.1;
  --tracking-display: -0.7px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-35: 35px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --radius-pill: 9999px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-core: #000000;
  --color-ivory-canvas: #ffffff;
  --color-slate-text: #808080;
  --color-onyx-layer: #1a1a1a;
  --color-ghost-white: #f5f5f5;
  --color-molten-orange: #e2572c;
  --font-suisse-font: 'Suisse Font', Inter;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.43;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.25;
  --text-display: 80px;
  --leading-display: 1.1;
  --tracking-display: -0.7px;
  --spacing-5: 5px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-35: 35px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --radius-pill: 9999px;
  --radius-cards: 16px;
  --radius-buttons: 8px;
}
```

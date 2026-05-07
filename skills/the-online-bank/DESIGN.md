---
version: alpha
name: "The online bank"
description: "N26 employs a utilitarian, almost institutional aesthetic, built around a dominant teal that provides a singular brand anchor against an otherwise stark monochrome palette. The design emphasizes functional clarity, using crisp lines and generous whitespace to present complex financial information in an accessible manner. The restricted use of color focuses attention on key interactive elements and a distinct brand presence, avoiding visual clutter."
theme: "light"
industry: "fintech"
source_url: "https://n26.com"
refero_style_id: "e9f07a27-bdd4-4f6a-8132-329d014aa5f4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924145030-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924145030-thumb.jpg"
extracted_at: "2026-04-11T16:16:05.008Z"
---

# The online bank — Style Reference

> Teal and White Ledger. A clear, high-contrast digital ledger laid out on a clean white page, highlighted by a single, prominent teal ink.

**Theme:** light

**Industry:** fintech

N26 employs a utilitarian, almost institutional aesthetic, built around a dominant teal that provides a singular brand anchor against an otherwise stark monochrome palette. The design emphasizes functional clarity, using crisp lines and generous whitespace to present complex financial information in an accessible manner. The restricted use of color focuses attention on key interactive elements and a distinct brand presence, avoiding visual clutter.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Arctic White | #ffffff | `--color-arctic-white` | Page backgrounds, card surfaces, primary button background. |
| Deep Teal | #088177 | `--color-deep-teal` | Primary brand color for large hero sections, strong call-to-action buttons, and active indicators. It’s the visual core of the brand. |
| Ink Black | #1b1b1b | `--color-ink-black` | Primary text color for body, headings, and UI elements. Provides high contrast against light backgrounds. |
| Horizon Gray | #e9e9e9 | `--color-horizon-gray` | Subtle borders and dividers for UI elements, defining structure without harshness. |
| Ghost White | #faf8f5 | `--color-ghost-white` | Subtle background for differentiated sections or groupings within a light theme. |
| Slate Gray | #6d6d6d | `--color-slate-gray` | Secondary text, descriptive elements. Provides a softer hierarchy than Ink Black. |
| Warning Red | #d80027 | `--color-warning-red` | Semantic color for warnings or negative indicators, sparingly used. |
| Caution Yellow | #ffda44 | `--color-caution-yellow` | Semantic color for cautious states or highlights, used minimally. |
| Accent Teal | #06736a | `--color-accent-teal` | Slightly darker shade of Deep Teal, used for hover states on interactive elements and secondary brand components. |

## Tokens — Typography

### N26

- **Token:** `--font-n26`
- **Substitute:** Open Sans
- **Weights:** 400, 500, 700
- **Sizes:** 11px, 14px, 16px, 18px, 20px, 24px
- **Line heights:** 1.33, 1.38, 1.43, 1.50, 1.60
- **Letter spacing:** -0.18px
- **Role:** Used for all standard text: body copy, navigation labels, button text, and smaller headings. The varied letter-spacing at smaller sizes aims for optical clarity in dense financial information.

### N26-Extended

- **Token:** `--font-n26-extended`
- **Substitute:** Montserrat
- **Weights:** 400, 500
- **Sizes:** 18px, 32px, 44px, 58px, 80px
- **Line heights:** 1.10, 1.20, 1.25, 1.50
- **Letter spacing:** normal
- **Role:** Reserved for impactful headlines and display text, leveraging its wider character set for grandeur. Lower line heights give a compact, strong appearance to headings.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 14.63 | -0.18px | `--text-caption` |
| body-sm | 14px | 19.32 | -0.14px | `--text-body-sm` |
| body | 16px | 22.88 | -0.25px | `--text-body` |
| subheading | 18px | 27 | -0.34px | `--text-subheading` |
| heading-sm | 24px | 31.92 | — | `--text-heading-sm` |
| heading | 32px | 38.4 | — | `--text-heading` |
| heading-lg | 44px | 48.4 | — | `--text-heading-lg` |
| display | 58px | 63.8 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-192 | 192px | `--spacing-192` |
| spacing-201 | 201px | `--spacing-201` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 4px |
| images | 24px |
| buttons | 6px |
| input_fields | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64-80px |
| cardPadding | 12-24px |
| elementGap | 4-16px |

## Components

### Risk Indicator Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Hero CTA Section

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Button Group

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Call-to-Action Button

**Role:** Interactive element

Solid 'Deep Teal' background (#088177) with 'Arctic White' (#ffffff) text, 6px border-radius, and 12px vertical, 24px horizontal padding. Font is N26 weight 400.

### Secondary Outlined Button

**Role:** Interactive element

Transparent background with 'Deep Teal' (#088177) text and a 1px 'Deep Teal' border, 6px border-radius, and 12px vertical, 24px horizontal padding. Font is N26 weight 400.

### Navigation Link Button

**Role:** Interactive element

Transparent background, 'Ink Black' (#1b1b1b) text, 8px border-radius, and 4px vertical, 8px horizontal padding. Font is N26 weight 400.

### Header Navigation Link

**Role:** Navigation

Transparent background, 'Ink Black' (#1b1b1b) text, 0px border-radius, 0px padding. Font is N26 weight 400.

### Informational QR Module

**Role:** Utility element

White background with a 1px 'Horizon Gray' (#e9e9e9) border and 4px radius. Text is 'Ink Black' (#1b1b1b).

## Do's and Don'ts

### Do

- Use 'Deep Teal' (#088177) exclusively for primary calls-to-action and key branding in hero sections.
- Maintain high contrast text with 'Ink Black' (#1b1b1b) on 'Arctic White' (#ffffff) backgrounds for all body and heading content.
- Apply 'Horizon Gray' (#e9e9e9) for subtle UI borders and dividers to structure content without heavy lines.
- Structure display headings with 'N26-Extended' font family, using weights 400 or 500 for impact.
- Utilize 'Arctic White' (#ffffff) for page backgrounds and elevated card surfaces, creating a clean canvas.
- Apply a 6px border-radius for all primary and secondary buttons, balancing softness with a structured look.

### Don't

- Do not introduce additional saturated colors beyond 'Deep Teal' for primary interactive elements; color saturation is highly restrained.
- Avoid applying heavy shadows or complex gradients; the system relies on flat colors and distinct borders for depth.
- Do not deviate from the specified tight letter-spacing for 'N26' font at smaller sizes, as it's critical for text clarity.
- Avoid using 'N26-Extended' font for body copy or small text; it is reserved for headlines.
- Do not use different radius values for buttons and input fields; consistently apply 6px for buttons and 4px for inputs.
- Do not use highly decorative imagery; illustrations and photos should be either product-focused or abstract and minimal.

## Imagery

The site's visual language is dominated by UI elements and product-focused graphics. Photography is absent, replaced by crisp product screenshots or abstract, clean graphics to illustrate financial concepts. Icons are filled, monochrome, matching the 'Ink Black' text where 'Deep Teal' is the primary background. Imagery is primarily explanatory and functional, contained within clear sections, avoiding full-bleed or overlapping styles. The density is moderate, allowing text to remain dominant while visuals support key messages.

## Layout

The page adheres to a max-width centered content model, creating visual stability. The header floats at the top, consistent across different content. The hero section is full-bleed 'Deep Teal' with a prominent centered headline and descriptive text, followed by the primary CTA. Content sections follow a vertical rhythm with generous spacing. Information is presented in clear, distinct blocks, often utilizing a multi-column grid for features or data like the 'Risk Indicator' modules. The layout is spacious with strong visual separation between content blocks.

## Similar Brands

- **Revolut** — Clean, minimalist UI with a strong accent color against a neutral base, focusing on financial data clarity.
- **Monzo** — Digital banking identity featuring a focused accent color for branding and CTAs, simple typography, and structured layouts.
- **Wise (formerly TransferWise)** — High-contrast text on white backgrounds, strong geometric branding with a single dominant brand color against a very clean aesthetic.
- **Starling Bank** — Bright, clear, and functional interface with a signature brand color used for primary interaction and identity. Emphasis on information hierarchy.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-arctic-white: #ffffff;
  --color-deep-teal: #088177;
  --color-ink-black: #1b1b1b;
  --color-horizon-gray: #e9e9e9;
  --color-ghost-white: #faf8f5;
  --color-slate-gray: #6d6d6d;
  --color-warning-red: #d80027;
  --color-caution-yellow: #ffda44;
  --color-accent-teal: #06736a;
  --font-n26: 'N26', Open Sans;
  --font-n26-extended: 'N26-Extended', Montserrat;
  --text-caption: 11px;
  --leading-caption: 14.63;
  --tracking-caption: -0.18px;
  --text-body-sm: 14px;
  --leading-body-sm: 19.32;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 22.88;
  --tracking-body: -0.25px;
  --text-subheading: 18px;
  --leading-subheading: 27;
  --tracking-subheading: -0.34px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 31.92;
  --text-heading: 32px;
  --leading-heading: 38.4;
  --text-heading-lg: 44px;
  --leading-heading-lg: 48.4;
  --text-display: 58px;
  --leading-display: 63.8;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-192: 192px;
  --spacing-201: 201px;
  --radius-cards: 4px;
  --radius-images: 24px;
  --radius-buttons: 6px;
  --radius-input-fields: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-arctic-white: #ffffff;
  --color-deep-teal: #088177;
  --color-ink-black: #1b1b1b;
  --color-horizon-gray: #e9e9e9;
  --color-ghost-white: #faf8f5;
  --color-slate-gray: #6d6d6d;
  --color-warning-red: #d80027;
  --color-caution-yellow: #ffda44;
  --color-accent-teal: #06736a;
  --font-n26: 'N26', Open Sans;
  --font-n26-extended: 'N26-Extended', Montserrat;
  --text-caption: 11px;
  --leading-caption: 14.63;
  --tracking-caption: -0.18px;
  --text-body-sm: 14px;
  --leading-body-sm: 19.32;
  --tracking-body-sm: -0.14px;
  --text-body: 16px;
  --leading-body: 22.88;
  --tracking-body: -0.25px;
  --text-subheading: 18px;
  --leading-subheading: 27;
  --tracking-subheading: -0.34px;
  --text-heading-sm: 24px;
  --leading-heading-sm: 31.92;
  --text-heading: 32px;
  --leading-heading: 38.4;
  --text-heading-lg: 44px;
  --leading-heading-lg: 48.4;
  --text-display: 58px;
  --leading-display: 63.8;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-192: 192px;
  --spacing-201: 201px;
  --radius-cards: 4px;
  --radius-images: 24px;
  --radius-buttons: 6px;
  --radius-input-fields: 4px;
}
```

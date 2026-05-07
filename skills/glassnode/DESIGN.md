---
version: alpha
name: "Glassnode"
description: "Glassnode's design evokes a sense of understated authority and analytical precision, like an institutional data terminal. Its visual character is built on stark achromatic contrasts, pairing deep charcoal backgrounds with white text and light gray surfaces. A single, cool ultramarine blue functions as the sole accent, appearing only to highlight interactive elements and subtle visual cues, reinforcing a no-nonsense, data-centric identity. The sparing use of rounded corners (2px) on buttons and inputs prevents a harsh, technical feel, while maintaining an overall sharp and deliberate aesthetic."
theme: "mixed"
industry: "crypto"
source_url: "https://glassnode.com"
refero_style_id: "a79b6a74-6b67-4c9f-9d69-bff80869b943"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933459599-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775933459599-thumb.jpg"
extracted_at: "2026-04-11T18:51:21.104Z"
---

# Glassnode — Style Reference

> Analytical Console on Dark Steel. The design feels like a sophisticated yet functional tool built for focused data analysis, emphasizing clarity with deliberate restraint.

**Theme:** mixed

**Industry:** crypto

Glassnode's design evokes a sense of understated authority and analytical precision, like an institutional data terminal. Its visual character is built on stark achromatic contrasts, pairing deep charcoal backgrounds with white text and light gray surfaces. A single, cool ultramarine blue functions as the sole accent, appearing only to highlight interactive elements and subtle visual cues, reinforcing a no-nonsense, data-centric identity. The sparing use of rounded corners (2px) on buttons and inputs prevents a harsh, technical feel, while maintaining an overall sharp and deliberate aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Charcoal | #1a1a1a | `--color-midnight-charcoal` | Dark mode backgrounds, primary headings on dark backgrounds, active button states, immersive section backgrounds. |
| Arctic White | #ffffff | `--color-arctic-white` | Page backgrounds, text on dark backgrounds, primary headings on light backgrounds. |
| Cloud Gray | #f7f8fa | `--color-cloud-gray` | Section backgrounds, subtle hover states, tertiary button backgrounds. Creates a soft separation against Arctic White. |
| Ash Concrete | #edeff2 | `--color-ash-concrete` | Button backgrounds, light interactive elements. Provides a slightly darker, more substantial neutral than Cloud Gray. |
| Stone Whisper | #dedfe1 | `--color-stone-whisper` | Borders, dividers, subtle inactive states. Its light touch defines boundaries without being visually dominant. |
| Slate Text | #5a5a5a | `--color-slate-text` | Secondary body text and descriptions. Provides lower contrast than pure black for improved reading comfort. |
| Granite Text | #6f6f6f | `--color-granite-text` | Badge text, muted links, caption text. A softer gray for less prominent information. |
| Mist Gray | #a0a0a0 | `--color-mist-gray` | Input placeholder text, disabled states. Indicates non-interactive or supplementary content. |
| Deep Marine | #e2e7fc | `--color-deep-marine` | Background for interactive elements, subtle highlights, chart fills. The most prominent saturated color, it signals 'interactive' or 'data point'. |
| Violet Signal | #8fa5f6 | `--color-violet-signal` | Chart lines, interactive elements and highlights in darker sections. Provides key visual emphasis against dark backgrounds. |
| Ultramarine Ink | #6888fb | `--color-ultramarine-ink` | Primary brand accent for iconography and subtle interactive states. Its vibrancy is used sparingly for maximum impact. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 500, 700
- **Sizes:** 12px, 14px, 16px, 20px, 24px, 32px
- **Line heights:** 1.00, 1.20, 1.30, 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Primary text font system-wide. Used for body copy, navigation, buttons, and most informational text. The variety of weights and sizes allows for a clear hierarchy within content sections.

### Fraktion

- **Token:** `--font-fraktion`
- **Substitute:** Inter, system-ui, sans-serif
- **Weights:** 700
- **Sizes:** 56px
- **Line heights:** 1.20
- **Letter spacing:** normal
- **Role:** Exclusive display typeface for hero headings. Its distinct bold character conveys gravitas and establishes the brand's key message with authority.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1 | — | `--text-caption` |
| body-sm | 14px | 1 | — | `--text-body-sm` |
| body | 16px | 1.2 | — | `--text-body` |
| subheading | 20px | 1.3 | — | `--text-subheading` |
| heading | 24px | 1.4 | — | `--text-heading` |
| heading-lg | 32px | 1.5 | — | `--text-heading-lg` |
| display | 56px | 1.2 | — | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-29 | 29px | `--spacing-29` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-37 | 37px | `--spacing-37` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-49 | 49px | `--spacing-49` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-212 | 212px | `--spacing-212` |

### Border Radius

| Element | Value |
| --- | --- |
| inputs | 2px |
| buttons | 2px |
| general | 2px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.04) 0px 2px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 8px 32px 0px | `--shadow-xl-2` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Announcement Banner + CTA Buttons

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature List — Dark Section

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Research Cards + Email Subscribe

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Interactive element

Text link with `color: #000000`, `padding: 0px 4px 0px 4px`, `border-radius: 2px`. Text uses Inter font, weight 400.

### Hero CTA Button

**Role:** Call to action

Background `backgroundColor: #1a1a1a`, `color: #ffffff`, `border-radius: 2px`, `padding: 9.6px 16px`. Text uses Inter font, weight 400.

### Secondary Outline Button

**Role:** Secondary action

Background `backgroundColor: #f7f8fa`, `color: #000000`, `border-color: #dedfe1`, `border-radius: 2px`, `padding: 32px 0px 0px 32px`. Text uses Inter font, weight 400.

### Feature Teaser Button

**Role:** Informational

Background `backgroundColor: #f7f8fa`, `color: #000000`, `border-color: #dedfe1`, `border-radius: 2px`, `padding: 32px 0px 0px 32px`. Text uses Inter font, weight 400.

### Email Input Field

**Role:** Data entry

Background `backgroundColor: rgba(0, 0, 0, 0)`, `color: #a0a0a0`, `border-color: #808080`, `border-radius: 2px 0px 0px 2px`, `padding: 0px 16px`. Placeholder text `color: #a0a0a0`.

### Research Badge

**Role:** Categorization

Background `backgroundColor: rgba(0, 0, 0, 0)`, `color: #6f6f6f`, `border-radius: 0px`, `padding: 0px`. Text uses Inter font, weight 400, size 12px.

### Subtle Callout Button

**Role:** Informational link

Background `backgroundColor: rgba(0, 0, 0, 0)`, `color: #000000`, `border-color: #000000`, `border-radius: 2px`, `padding: 0px 4px`. Text uses Inter font, weight 400.

## Do's and Don'ts

### Do

- Prioritize text content against `Arctic White (#ffffff)` and `Midnight Charcoal (#1a1a1a)` for strong contrast.
- Use `Inter` at weight 400 for all body text, ensuring a consistent and clear reading experience.
- Apply `2px` to all interactive element border radii (buttons, inputs) for subtle softening.
- Reserve `Fraktion` weight 700, size 56px, exclusively for hero headings to establish grand emphasis.
- Highlight interactive elements and data points with `Deep Marine (#e2e7fc)` or `Violet Signal (#8fa5f6)` to guide user attention.
- Maintain `16px` as the standard horizontal padding and interior element spacing within layouts.
- Implement `64px` vertical spacing between major page sections to ensure clear content separation.

### Don't

- Avoid using `Deep Marine (#e2e7fc)` or `Violet Signal (#8fa5f6)` for large blocks of text; their vibracy is for accents only.
- Do not deviate from the `2px` border radius for buttons and inputs; maintain the sharp, precise aesthetic.
- Do not use shadows on cards or sections; the design relies on stark background color changes for separation instead of elevation.
- Never introduce additional accent colors outside of the defined ultramarine palette, to preserve the focused, limited palette.
- Do not use `Fraktion` for any text below 56px; it is a display font only, not suitable for body or subheadings.
- Avoid overly complex layouts or decorative elements; the design emphasizes direct presentation of information.

## Elevation

- **Shadow 1:** `rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`
- **Shadow 2:** `rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 8px 32px 0px`

## Imagery

The site uses a combination of product screenshots, abstract data visualizations, and minimalist, brand-colored line illustrations. Product screenshots are contained within a browser-like frame, showcasing interactive charts and data, emphasizing functionality over aesthetic appeal. Abstract data visualizations, often in `Violet Signal` or `Ultramarine Ink` against dark backgrounds, serve a decorative but theme-aligned role, reinforcing the data-centric nature of the product. Illustrations are sparse, simple, and utilize the brand's accent colors, appearing as small explanatory graphics rather than hero images. The overall approach is functional and explanatory, rather than emotive or lifestyle-focused.

## Layout

The site uses a mixed-mode layout, alternating between light and dark sections. The primary page model is max-width contained, with content centered within an implied `1200px` boundary, though the page itself is full-bleed. The hero section features a left-aligned headline and body text against a dark background with an illustrative product screenshot on the right. Subsequent sections alternate between light (`Arctic White`) and dark (`Midnight Charcoal`) backgrounds, primarily using a two-column text-left/visual-right arrangement, or grids for product cards and testimonials. Vertical spacing between these sections is generous at `64px`, providing ample breathing room. The navigation is a sticky top bar, centered, with clearly delineated interactive buttons and dropdowns, all in service of a direct and functional content presentation.

## Similar Brands

- **Coinmetrics** — Shares a focus on cryptocurrency data, presenting complex information with a similar clean, professional, and slightly technical aesthetic.
- **The Block** — Features a similar combination of analytical content, clean typography, and a restrained color palette, often utilizing a single accent color against neutral backgrounds.
- **Messari** — Employs an information-dense, data-focused UI with clear typography and minimalist design to convey authority in the crypto analytics space.
- **Arc Browser** — Exhibits a similar architectural rigor and attention to type and color restraint, using a limited palette and sharp edges to convey a high-tech, precise feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-charcoal: #1a1a1a;
  --color-arctic-white: #ffffff;
  --color-cloud-gray: #f7f8fa;
  --color-ash-concrete: #edeff2;
  --color-stone-whisper: #dedfe1;
  --color-slate-text: #5a5a5a;
  --color-granite-text: #6f6f6f;
  --color-mist-gray: #a0a0a0;
  --color-deep-marine: #e2e7fc;
  --color-violet-signal: #8fa5f6;
  --color-ultramarine-ink: #6888fb;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-fraktion: 'Fraktion', Inter, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1;
  --text-body-sm: 14px;
  --leading-body-sm: 1;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.5;
  --text-display: 56px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-49: 49px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-212: 212px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;
  --radius-general: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 8px 32px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-charcoal: #1a1a1a;
  --color-arctic-white: #ffffff;
  --color-cloud-gray: #f7f8fa;
  --color-ash-concrete: #edeff2;
  --color-stone-whisper: #dedfe1;
  --color-slate-text: #5a5a5a;
  --color-granite-text: #6f6f6f;
  --color-mist-gray: #a0a0a0;
  --color-deep-marine: #e2e7fc;
  --color-violet-signal: #8fa5f6;
  --color-ultramarine-ink: #6888fb;
  --font-inter: 'Inter', system-ui, sans-serif;
  --font-fraktion: 'Fraktion', Inter, system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1;
  --text-body-sm: 14px;
  --leading-body-sm: 1;
  --text-body: 16px;
  --leading-body: 1.2;
  --text-subheading: 20px;
  --leading-subheading: 1.3;
  --text-heading: 24px;
  --leading-heading: 1.4;
  --text-heading-lg: 32px;
  --leading-heading-lg: 1.5;
  --text-display: 56px;
  --leading-display: 1.2;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --spacing-26: 26px;
  --spacing-29: 29px;
  --spacing-32: 32px;
  --spacing-37: 37px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-49: 49px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-212: 212px;
  --radius-inputs: 2px;
  --radius-buttons: 2px;
  --radius-general: 2px;
  --shadow-xl: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 8px 32px 0px;
}
```

---
version: alpha
name: "Pastel"
description: "Pastel's design evokes a sense of clarity and understated reliability, like a well-organized workspace. It achieves this through a predominantly achromatic palette anchored by soft grays and a single, vibrant blue accent. Typography is clean and highly legible, using distinct font sizes and weights for clear hierarchy without visual clutter. The generous spacing and subtle use of rounded corners contribute to an open, approachable feel, giving content room to breathe."
theme: "light"
industry: "design"
source_url: "https://usepastel.com"
refero_style_id: "409d92b9-00a8-4e21-a430-ab95ea48204f"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932826232-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932826232-thumb.jpg"
extracted_at: "2026-04-11T18:40:44.569Z"
---

# Pastel — Style Reference

> Architectural Blueprint on White Marble. The layout is structured and precise, rendered in a palette that feels both clean and substantial.

**Theme:** light

**Industry:** design

Pastel's design evokes a sense of clarity and understated reliability, like a well-organized workspace. It achieves this through a predominantly achromatic palette anchored by soft grays and a single, vibrant blue accent. Typography is clean and highly legible, using distinct font sizes and weights for clear hierarchy without visual clutter. The generous spacing and subtle use of rounded corners contribute to an open, approachable feel, giving content room to breathe.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #111111 | `--color-midnight-ink` | Primary text, deep neutrals for headings and core information, providing strong contrast. |
| Storm Gray | #222222 | `--color-storm-gray` | Secondary text, subheadings, and borders, a slightly softer shade for supporting content. |
| Ghost White | #f5f5f4 | `--color-ghost-white` | Page backgrounds and primary surface areas, creating a bright and airy canvas. |
| Cloud Cover | #e6e3e2 | `--color-cloud-cover` | Subtle distinctions between sections and very light backgrounds, used for visual separation. |
| Deep Sea Blue | #165dfb | `--color-deep-sea-blue` | Primary calls to action, interactive elements, and key branding highlights, drawing immediate attention. |
| Whisper Gray | #78716b | `--color-whisper-gray` | Muted text, iconography, or subtle borders to convey secondary importance without disappearing. |
| Snow Drift | #ffffff | `--color-snow-drift` | Text on dark backgrounds, buttons, and other elements requiring high contrast against a saturated color. |

## Tokens — Typography

### Figtree

- **Token:** `--font-figtree`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 18px, 21px, 35px, 45px, 58px
- **Line heights:** 1.00, 1.07, 1.10, 1.25, 1.29, 1.33, 1.37, 1.43, 1.50, 1.52, 1.70, 2.00
- **Letter spacing:** -0.0160em, -0.0140em
- **Role:** Primary typeface for all content including headings, body text, and interactive elements. Its clean, sans-serif lines provide excellent readability across all sizes and weights.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.5 | -0.22px | `--text-caption` |
| body | 16px | 1.43 | -0.22px | `--text-body` |
| subheading | 18px | 1.33 | -0.25px | `--text-subheading` |
| heading | 21px | 1.29 | -0.29px | `--text-heading` |
| heading-lg | 35px | 1.1 | -0.56px | `--text-heading-lg` |
| display | 58px | 1 | -0.93px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-0 | 0px | `--spacing-token` |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-26 | 26px | `--spacing-26` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-35 | 35px | `--spacing-35` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-43 | 43px | `--spacing-43` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-50 | 50px | `--spacing-50` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-57 | 57px | `--spacing-57` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-70 | 70px | `--spacing-70` |
| spacing-78 | 78px | `--spacing-78` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-100 | 100px | `--spacing-100` |
| spacing-112 | 112px | `--spacing-112` |
| spacing-140 | 140px | `--spacing-140` |
| spacing-150 | 150px | `--spacing-150` |
| spacing-210 | 210px | `--spacing-210` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 4px |
| round | 120px |
| buttons | 10px |
| default | 8.8px |
| prominent | 15px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 0px |

## Components

### CTA Button Group with Trust Signals

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Testimonial Card with Attribution

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Social Proof — Trusted By Section

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Button

**Role:** Interactive element

Outline button with Midnight Ink text and transparent background. The 'Watch demo' button follows this, though its specific styling of border and background is not directly captured in the provided variant data, implies a transparent background and text color of #111111 or #222222 with a subtle border.

### Secondary Action Button

**Role:** Interactive element

Solid Storm Gray button with Snow Drift text. Used for less prominent actions or variations. Uses backgroundColor: #45403c, color: #ffffff (based on a variant with slightly darker gray). This button is likely an alternative, though the example provided uses #454745 for background and #ffffff text, for example 'Sign up' in header.

### Base Card (Implicit)

**Role:** Content container

Transparent background cards with no intrinsic border or shadow. Content takes precedence, often featuring embedded images or UI screenshots. Uses backgroundColor: rgba(0, 0, 0, 0), borderRadius: 0px, boxShadow: none, padding: 0px.

### Navigation Link

**Role:** Interactive element

Standard text link, typically Midnight Ink or Storm Gray. Hover states are implied, but not explicitly defined. On current page, often bolded. Uses color: #111111.

### Info Badge

**Role:** Categorization/metadata

Transparent background with text color matching surrounding content. Provides emphasis or classification for content blocks. Uses backgroundColor: rgba(0, 0, 0, 0), color: #111111, borderRadius: 0px, padding: 0px.

### Form Input (Implicit)

**Role:** Data entry

Although not explicitly detailed, the border colors #d1dee8 and #d7d3d1 suggest subtle, light gray borders for input fields to blend into the Ghost White background.

## Do's and Don'ts

### Do

- Prioritize Figtree font for all text elements to maintain a unified typographic voice.
- Use Deep Sea Blue (#165dfb) exclusively for primary calls to action and critical interactive elements.
- Maintain generous vertical spacing between sections, roughly 68-70px, to ensure content breathability.
- Apply a default border-radius of 8.8px for most interactive elements and images for a consistent, soft touch.
- Utilize Midnight Ink (#111111) as the primary text color on Ghost White (#f5f5f4) backgrounds for maximum legibility and contrast.

### Don't

- Avoid using highly saturated colors outside of the defined Deep Sea Blue accent, to preserve the clean, achromatic palette.
- Do not introduce sharp corners where a subtle 8.8px radius has been established for other elements, to prevent visual inconsistency.
- Refrain from heavy shadows or complex gradients; the system relies on flat colors and light surfaces for definition.
- Do not use small font sizes (below 14px) without clear necessity, as larger text is a hallmark of this system's readability.
- Avoid dense, information-packed sections without adequate spacing, as the system favors spaciousness over compactness.

## Imagery

The visual language of imagery on this site is primarily functional and demonstrative, featuring product screenshots and stylized UI mockups. These are presented either raw within card-like containers with no discernible borders, or as tight crops that showcase the product's interface. When photos are used, they are generally high-key, bright, and often feature muted color palettes to avoid distracting from the core UI. Icons are typically solid, monochromatic, and simple, serving a direct communicative purpose. Imagery's role is explanatory content and product showcase, with a moderate density, allowing text to remain dominant.

## Layout

The page exhibits a max-width contained layout, with content centered within a clear visual boundary. The hero section is full-width with a light background and a centered, prominent headline, followed by a left-aligned block of text, quote, and calls to action. Section rhythm is marked by consistent vertical spacing, creating distinct content blocks without heavy visual dividers. Content arrangement often employs a stacked, centered approach for headings and subtext, with multi-column card grids (likely 4-column based on screenshots) for features and testimonials. The layout is very spacious, providing ample breathing room around all elements. Navigation is a sticky top bar with clearly delineated logo, links, and action buttons.

## Similar Brands

- **Linear** — Shares a precise, almost clinical aesthetic with a strong emphasis on functional typography and restrained use of color against a clean, light background.
- **Framer** — Exhibits similar characteristics regarding generous whitespace, minimal adornment, and a clear hierarchy driven by typographic scale, allowing content to take center stage.
- **Vercel** — Utilizes a clean, high-contrast, text-dominant interface with strong focus on legibility and a primary accent color for calls to action, much like Pastel.
- **Webflow** — Features a light, open design with well-defined content blocks and a reliance on sans-serif typography for a modern, approachable feel.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #111111;
  --color-storm-gray: #222222;
  --color-ghost-white: #f5f5f4;
  --color-cloud-cover: #e6e3e2;
  --color-deep-sea-blue: #165dfb;
  --color-whisper-gray: #78716b;
  --color-snow-drift: #ffffff;
  --font-figtree: 'Figtree', Inter;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: -0.22px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: -0.22px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.25px;
  --text-heading: 21px;
  --leading-heading: 1.29;
  --tracking-heading: -0.29px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.56px;
  --text-display: 58px;
  --leading-display: 1;
  --tracking-display: -0.93px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-210: 210px;
  --radius-tags: 4px;
  --radius-round: 120px;
  --radius-buttons: 10px;
  --radius-default: 8.8px;
  --radius-prominent: 15px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #111111;
  --color-storm-gray: #222222;
  --color-ghost-white: #f5f5f4;
  --color-cloud-cover: #e6e3e2;
  --color-deep-sea-blue: #165dfb;
  --color-whisper-gray: #78716b;
  --color-snow-drift: #ffffff;
  --font-figtree: 'Figtree', Inter;
  --text-caption: 14px;
  --leading-caption: 1.5;
  --tracking-caption: -0.22px;
  --text-body: 16px;
  --leading-body: 1.43;
  --tracking-body: -0.22px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.25px;
  --text-heading: 21px;
  --leading-heading: 1.29;
  --tracking-heading: -0.29px;
  --text-heading-lg: 35px;
  --leading-heading-lg: 1.1;
  --tracking-heading-lg: -0.56px;
  --text-display: 58px;
  --leading-display: 1;
  --tracking-display: -0.93px;
  --spacing-0: 0px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-22: 22px;
  --spacing-26: 26px;
  --spacing-30: 30px;
  --spacing-34: 34px;
  --spacing-35: 35px;
  --spacing-40: 40px;
  --spacing-43: 43px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-50: 50px;
  --spacing-56: 56px;
  --spacing-57: 57px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-70: 70px;
  --spacing-78: 78px;
  --spacing-80: 80px;
  --spacing-100: 100px;
  --spacing-112: 112px;
  --spacing-140: 140px;
  --spacing-150: 150px;
  --spacing-210: 210px;
  --radius-tags: 4px;
  --radius-round: 120px;
  --radius-buttons: 10px;
  --radius-default: 8.8px;
  --radius-prominent: 15px;
}
```

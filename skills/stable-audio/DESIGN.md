---
version: alpha
name: "Stable Audio"
description: "Stable Audio presents a playful and accessible aesthetic built on a foundation of warm, muted neutrals that evoke aged paper, punctuated by vibrant, almost neon, pops of color. This system employs gentle, rounded forms for interactive elements set against a backdrop of crisp, geometric content blocks. The primary contrast comes from a dark, near-black text on these soft backgrounds, giving it a friendly yet structured feel."
theme: "light"
industry: "ai"
source_url: "https://stableaudio.com"
refero_style_id: "c363a216-873c-4112-b960-8e823db76f74"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932653717-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775932653717-thumb.jpg"
extracted_at: "2026-04-11T18:37:52.924Z"
---

# Stable Audio — Style Reference

> Warm parchment; vibrant neon bursts.

**Theme:** light

**Industry:** ai

Stable Audio presents a playful and accessible aesthetic built on a foundation of warm, muted neutrals that evoke aged paper, punctuated by vibrant, almost neon, pops of color. This system employs gentle, rounded forms for interactive elements set against a backdrop of crisp, geometric content blocks. The primary contrast comes from a dark, near-black text on these soft backgrounds, giving it a friendly yet structured feel.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000000 | `--color-midnight-ink` | Primary text, critical icons, high-contrast elements. |
| Charcoal Accent | #27262b | `--color-charcoal-accent` | Secondary text, button borders, subtle UI accents. |
| Clean Canvas | #ffffff | `--color-clean-canvas` | Overlay backgrounds, card surfaces, active states. |
| Parchment Base | #f4f1ec | `--color-parchment-base` | Body background, large content sections. |
| Subtle Ash | #e2e2e7 | `--color-subtle-ash` | Component backgrounds, subtle borders, dividers. |
| Pale Earth | #e5dfc8 | `--color-pale-earth` | Section backgrounds, visually separating content blocks. |
| Muted Sage | #c9d19c | `--color-muted-sage` | Distinctive card background, accent color for specific content areas. |
| Desert Sand | #d4c9b4 | `--color-desert-sand` | Subtle background for specific interactive blocks. |
| Deep Plum | #c4bae3 | `--color-deep-plum` | Highlight and distinct section background, signaling a content shift. |
| Ocean Mist | #9fc2c7 | `--color-ocean-mist` | Unique sectional background, providing visual interest. |
| Vivid Chartreuse | #a0f32f | `--color-vivid-chartreuse` | Graphical accent within UI, drawing attention to visual elements. |
| Goldenrod Pop | #e1ca46 | `--color-goldenrod-pop` | UI element highlights, emphasizing key data or states. |
| Sunset Orange | #f9a916 | `--color-sunset-orange` | Primary call-to-action buttons, crucial interactive elements. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui, sans-serif
- **Weights:** 400, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px, 30px, 40px
- **Line heights:** 1.00, 1.15, 1.33, 1.50, 1.71, 1.78
- **Letter spacing:** -0.0210em, -0.0170em, -0.0150em, -0.0140em, -0.0110em, -0.0060em
- **Role:** The sole typeface, Inter, handles all text roles. Its variable weights provide flexibility, but the consistent family choice ensures cohesion. The subtle negative letter-spacing on larger sizes creates a tighter, more deliberate appearance, while standard spacing on smaller text maintains readability.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.71 | — | `--text-caption` |
| body-sm | 14px | 1.71 | -0.011px | `--text-body-sm` |
| body | 16px | 1.5 | -0.006px | `--text-body` |
| subheading | 18px | 1.33 | -0.014px | `--text-subheading` |
| heading-sm | 20px | 1.33 | -0.015px | `--text-heading-sm` |
| heading | 30px | 1.15 | -0.017px | `--text-heading` |
| display | 40px | 1 | -0.021px | `--text-display` |

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
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-83 | 83px | `--spacing-83` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-128 | 128px | `--spacing-128` |
| spacing-134 | 134px | `--spacing-134` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 4px |
| forms | 9999px |
| images | 4px |
| buttons | 9999px |
| default | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1764px |
| sectionGap | 64px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Primary CTA Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Toggle Pills + Text-to-Audio Section Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Audio Track History List

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Secondary Ghost Button

**Role:** Less prominent actions

Rounded pill button with transparent background, 'Midnight Ink' (000000) text (Inter 16px/1.50/400). Border 'Charcoal Accent' (27262b) 1px. Padding 4px vertical, 14px horizontal.

### Navigation Button

**Role:** Header navigation actions

Rounded pill button with 'Clean Canvas' (#ffffff) background, 'Midnight Ink' (000000) text (Inter 16px/1.50/400). Border 'Subtle Ash' (#e2e2e7) 1px. No explicit padding, likely uses inherent text spacing.

### Section Title (Main)

**Role:** Hero and major section headings

Text is Inter 40px/1.00/700 with letter-spacing -0.0210em, in 'Midnight Ink' (#000000).

### Body Text

**Role:** Paragraphs and descriptions

Text is Inter 16px/1.50/400, in 'Midnight Ink' (#000000).

### Minor Card

**Role:** Information blocks, e.g., prompt details

Background 'Clean Canvas' (#ffffff), border 1px 'Subtle Ash' (#e2e2e7). Border radius 4px. Internal padding varies (e.g. 16px). Contains body text and icon.

### Highlight Card (Purple)

**Role:** Visually distinct content sections

Background 'Deep Plum' (#c4bae3), border radius 4px. Contains imagery, heading.

### Highlight Card (Yellow)

**Role:** Highlighting unique features or categories

Background 'Goldenrod Pop' (#e1ca46), border radius 4px. Contains imagery, heading.

### Image Placeholder

**Role:** Visual representation for audio/music

Square shaped with a 4px border-radius, background colors vary (e.g., 'Vivid Chartreuse' (#a0f32f), 'Goldenrod Pop' (#e1ca46)), containing a semi-circular visual element.

## Do's and Don'ts

### Do

- Use 'Parchment Base' (#f4f1ec) as the default page background.
- Apply 'Midnight Ink' (#000000) for all primary text elements, including headings and body copy.
- Utilize 'Sunset Orange' (#f9a916) exclusively for primary call-to-action buttons, paired with 'Midnight Ink' text.
- Implement a 9999px border-radius for all interactive buttons and input fields to maintain a soft, approachable feel.
- Maintain a 4px border-radius for static containers like cards and images.
- Employ the Inter typeface for all content, selecting weights 400 for body and 700 for headings, adjusting letter-spacing as per type scale.
- Separate major content sections using a `sectionGap` of 64px.

### Don't

- Do not use dark backgrounds for large content blocks; stick to the light, muted neutral palette.
- Avoid sharp corners on interactive elements; maintain the 9999px radius for buttons and form fields.
- Do not introduce new typefaces; Inter is the sole font allowed.
- Do not add additional drop shadows unless explicitly specified for an overlay; rely on background color changes for hierarchy.
- Avoid complex, multi-color gradients for backgrounds; stick to solid or subtly varying background colors.
- Do not introduce additional vivid accent colors beyond 'Sunset Orange', 'Vivid Chartreuse', and 'Goldenrod Pop' without explicit approval.

## Imagery

The visual language for imagery is characterized by minimalist, geometric abstract shapes acting as placeholders for audio content, frequently rendered in vivid brand colors like 'Vivid Chartreuse' (#a0f32f) or 'Goldenrod Pop' (#e1ca46). These abstract forms (often semi-circles) are contained within square or rectangular frames with a 4px border-radius, giving them a polished, almost 'album art' feel for UI elements. Product screenshots are clean and direct, showing the interface in action without heavy masking or stylized effects. Icons are simple, outlined, and monochromatic, typically in 'Midnight Ink' (#000000), serving a functional rather than decorative role. The overall density is balanced, with imagery serving as clear visual anchors in text-rich sections.

## Layout

The site employs a contained layout with a `pageMaxWidth` of 1764px, centrally aligned. The hero section presents as a split layout: a prominent headline on a 'Parchment Base' background on the left, balanced by an interactive content block on the right. Section rhythm is marked by alternating subtle background colors (e.g., 'Pale Earth', 'Deep Plum', 'Ocean Mist') creating distinct yet flowing content zones. Content arrangement frequently uses a 2-column pattern, with text on one side and a corresponding visual component (like an abstract graphic or product screenshot) on the other. Feature grids are present, likely 3-column. Spacing between sections is generous, lending a comfortable and breathable feel, rather than information-dense blocks. Navigation is a simple top bar with aligned 'Sign up' and 'Log in' buttons, appearing minimal and functional.

## Similar Brands

- **Framer** — Combination of soft, desaturated background colors with strong, saturated accents for interactive elements and clear typography.
- **Linear** — Minimalist UI with a strong focus on clear typography, subtle use of background color changes for hierarchy, and monochromatic icon styling.
- **Canva** — Playful use of color in content and UI elements, with a foundation of light neutrals, and rounded-edge components.
- **Webflow** — Emphasis on well-defined content blocks, clear visual hierarchy through background changes, and a systematic approach to typography and spacing.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000000;
  --color-charcoal-accent: #27262b;
  --color-clean-canvas: #ffffff;
  --color-parchment-base: #f4f1ec;
  --color-subtle-ash: #e2e2e7;
  --color-pale-earth: #e5dfc8;
  --color-muted-sage: #c9d19c;
  --color-desert-sand: #d4c9b4;
  --color-deep-plum: #c4bae3;
  --color-ocean-mist: #9fc2c7;
  --color-vivid-chartreuse: #a0f32f;
  --color-goldenrod-pop: #e1ca46;
  --color-sunset-orange: #f9a916;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --text-body-sm: 14px;
  --leading-body-sm: 1.71;
  --tracking-body-sm: -0.011px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.006px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.014px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.015px;
  --text-heading: 30px;
  --leading-heading: 1.15;
  --tracking-heading: -0.017px;
  --text-display: 40px;
  --leading-display: 1;
  --tracking-display: -0.021px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-83: 83px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-134: 134px;
  --radius-cards: 4px;
  --radius-forms: 9999px;
  --radius-images: 4px;
  --radius-buttons: 9999px;
  --radius-default: 4px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000000;
  --color-charcoal-accent: #27262b;
  --color-clean-canvas: #ffffff;
  --color-parchment-base: #f4f1ec;
  --color-subtle-ash: #e2e2e7;
  --color-pale-earth: #e5dfc8;
  --color-muted-sage: #c9d19c;
  --color-desert-sand: #d4c9b4;
  --color-deep-plum: #c4bae3;
  --color-ocean-mist: #9fc2c7;
  --color-vivid-chartreuse: #a0f32f;
  --color-goldenrod-pop: #e1ca46;
  --color-sunset-orange: #f9a916;
  --font-inter: 'Inter', system-ui, sans-serif;
  --text-caption: 12px;
  --leading-caption: 1.71;
  --text-body-sm: 14px;
  --leading-body-sm: 1.71;
  --tracking-body-sm: -0.011px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: -0.006px;
  --text-subheading: 18px;
  --leading-subheading: 1.33;
  --tracking-subheading: -0.014px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.33;
  --tracking-heading-sm: -0.015px;
  --text-heading: 30px;
  --leading-heading: 1.15;
  --tracking-heading: -0.017px;
  --text-display: 40px;
  --leading-display: 1;
  --tracking-display: -0.021px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-83: 83px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-134: 134px;
  --radius-cards: 4px;
  --radius-forms: 9999px;
  --radius-images: 4px;
  --radius-buttons: 9999px;
  --radius-default: 4px;
}
```

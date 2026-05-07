---
version: alpha
name: "Brex"
description: "Brex's design system evokes a sense of quiet authority and precision, like a finely engineered financial instrument. It relies on a high-contrast achromatic palette for clarity, punctuated by a single vibrant orange for critical actions. The interplay of strong typography, including a custom headline font, and a disciplined use of space, crafts an experience that feels both robust and approachable, grounding complex financial offerings in visual simplicity."
theme: "light"
industry: "fintech"
source_url: "https://brex.com"
refero_style_id: "b58d92f6-68a8-4358-8fc9-6ea58e6d483b"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924115534-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775924115534-thumb.jpg"
extracted_at: "2026-04-11T16:15:34.365Z"
---

# Brex — Style Reference

> Precision engineered toolkit — crisp, organized, and focused on clarity.

**Theme:** light

**Industry:** fintech

Brex's design system evokes a sense of quiet authority and precision, like a finely engineered financial instrument. It relies on a high-contrast achromatic palette for clarity, punctuated by a single vibrant orange for critical actions. The interplay of strong typography, including a custom headline font, and a disciplined use of space, crafts an experience that feels both robust and approachable, grounding complex financial offerings in visual simplicity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #000710 | `--color-midnight-ink` | Footer background, secondary dark surface, deep textual elements for high contrast. |
| Action Orange | #ff5900 | `--color-action-orange` | Primary CTA buttons, active navigation indicators, key interactive elements — vibrant and unmistakable. |
| Primary Text | #000000 | `--color-primary-text` | Dominant text color for headlines and body copy across light backgrounds, ensuring maximum readability. |
| Paper White | #ffffff | `--color-paper-white` | Page backgrounds, card surfaces, high-contrast text on dark backgrounds. |
| Dark Charcoal | #15191 | `--color-dark-charcoal` | Prominent headings, main navigation text, input text — a slightly softer black for substantial text blocks. |
| Soft Gray | #f3f3f7 | `--color-soft-gray` | Subtle background for sections, lightly elevated surfaces, distinguishing content blocks without harsh boundaries. |
| Muted Slate | #b9bbc6 | `--color-muted-slate` | Subtle borders, disabled states, less prominent icons, and secondary informational text. |
| Cool Stone | #60646c | `--color-cool-stone` | Secondary body text, descriptive labels, and less emphasized headings for softer visual hierarchy. |
| Ash Gray | #6f737b | `--color-ash-gray` | Tertiary text, subtle button outlines, and placeholder text in inputs. |
| Silver Pine | #8b8d98 | `--color-silver-pine` | Navigation text in inactive states, subtle dividers, and less emphasized textual elements. |

## Tokens — Typography

### Inter

- **Token:** `--font-inter`
- **Substitute:** system-ui
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 20px, 24px, 36px, 48px, 72px
- **Line heights:** 1.00, 1.20, 1.21, 1.33, 1.43, 1.50, 1.57
- **Letter spacing:** -0.0300em at display sizes, tapering to normal at body text levels
- **OpenType features:** "calt" 0, "cv01", "cv05" 0, "cv10", "liga" 0, "ss01" 0, "ss03", "zero" 0
- **Role:** Primary UI font for all body text, navigation, buttons, and most headings. Its range of weights and optical adjustments ensure legibility across all scales, grounding the system in a familiar yet precise sans-serif.

### Flecha

- **Token:** `--font-flecha`
- **Substitute:** serif
- **Weights:** 500
- **Sizes:** 36px
- **Line heights:** 1.11
- **Letter spacing:** normal
- **OpenType features:** "calt" 0, "cv01", "cv05" 0, "cv10", "liga" 0, "ss01" 0, "ss03", "zero" 0
- **Role:** Exclusive typeface for dominant headlines, used at 36px/500 weight. Flecha provides a distinctive, slightly condensed character that gives Brex a unique voice at key branding moments, signaling authority and modernity without common sans-serif neutrality.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0px | `--text-caption` |
| body | 14px | 1.5 | 0px | `--text-body` |
| heading-sm | 20px | 1.2 | -0.4px | `--text-heading-sm` |
| heading | 24px | 1.2 | -0.48px | `--text-heading` |
| heading-lg | 36px | 1.2 | -0.72px | `--text-heading-lg` |
| display | 48px | 1.2 | -0.96px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-63 | 63px | `--spacing-63` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| input | 0px |
| buttons | 6px |
| default | 6px |
| navItem | 10px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 24-32px |
| elementGap | 8-16px |

## Components

### Email Signup CTA Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature Product Cards Row

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Cookie Consent Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Action Button

**Role:** Calls to action

Solid Action Orange background (#ff5900) with Paper White text (#ffffff), 8px border-radius, 16px horizontal padding. Deliberately no top/bottom padding defined, implying height is externally set or flexible.

### Navigation Link Button

**Role:** Header navigation

Transparent background (rgba(0,0,0,0)), Dark Charcoal text (#15191e), 6px border-radius, 4px vertical padding and 8px horizontal padding. A subtle container for navigation items.

### Ghost Button

**Role:** Secondary actions, text-heavy links

Transparent background (rgba(0,0,0,0)) with Primary Text (#000000), no border-radius or padding. Used for minimal, text-dominant interactive elements without a clear container.

### Pill Navigation Tag

**Role:** Category filters, secondary navigation

Transparent background (rgba(0,0,0,0)) with Ash Gray text (#6f737b) and a matching 1px border. Rounded corners at 10px, with 0px vertical padding and 8px horizontal padding, creating a distinct pill shape for non-primary navigation.

### Text Input (Underlined)

**Role:** Form fields

Transparent background (rgba(0,0,0,0)) with Dark Charcoal text (#15191e). Features a bottom border of matching #15191, and 8px vertical padding with 2px horizontal padding, implying an input that highlights its data entry field directly.

## Do's and Don'ts

### Do

- Always use Action Orange (#ff5900) for primary call-to-action buttons, never fordecorative elements.
- Apply Soft Gray (#f3f3f7) as a background to differentiate content sections without introducing strong color.
- Employ the Flecha typeface (36px, 500 weight) exclusively for main page headlines to maintain brand distinction.
- Utilize Inter for all body text and UI labels, ensuring legibility and consistency across components.
- Maintain a clear visual hierarchy with Dark Charcoal (#15191e) for prominent text and Cool Stone (#60646c) for supporting details.
- Ensure all interactive elements have sufficient padding; a minimum of 4px vertical and 8px horizontal for small buttons, scaling up to 16px horizontal for primary CTAs.

### Don't

- Do not use any additional chromatic colors beyond Action Orange (#ff5900); stick to the defined neutral palette.
- Avoid arbitrary border-radius values; adhere to 6px, 8px, or 12px for components, and 0px for inputs.
- Do not use Flecha for any body text or minor headings; its distinctiveness is reserved for key messaging.
- Never use shadows on buttons or cards unless explicitly defined as part of a component style.
- Do not introduce tight letter-spacing for body text; apply negative letter-spacing only to large display typography as specified for Inter.

## Imagery

The visual language focuses on sophisticated, desaturated product photography and clean UI mockups. Images are typically contained within rectangular frames, sometimes with a subtle 12px border-radius, and are frequently masked into device frames (like a smartphone or card). There is a distinct absence of lifestyle photography or complex illustrations. The imagery serves to demonstrate the product and its interface directly, emphasizing functionality and precision rather than emotive storytelling or abstract concepts. When icons are present, they are typically filled or outlined in the neutral palette. Density is moderate, with images serving as explanatory content alongside text blocks.

## Layout

The layout is predominantly a max-width contained structure, with content centered within the viewport. The hero section often features a split layout with prominent headlines and calls to action on the left, balanced by a significant product visual on the right. Below the hero, sections alternate between Paper White backgrounds and subtle Soft Gray (#f3f3f7) bands, creating a gentle vertical rhythm. Content is arranged in flexible grids, often with two or three columns for feature lists and information blocks, utilizing left-aligned text beside accompanying visuals. The navigation is a standard top-bar, fixed header with clear product and resource categorization, emphasizing direct access. Overall density is comfortable, with generous padding around content blocks preventing a cramped feel and enhancing readability.

## Similar Brands

- **Stripe** — Both use a high-contrast achromatic base with a single vibrant accent color for interaction and a clean, technical aesthetic.
- **Ramp** — Features a similar focus on financial tools presented with clear typography and a restrained color palette.
- **Mercury** — Navigates a sophisticated B2B finance space with a simple, functional UI and minimal decorative elements.
- **Linear** — Shares the use of strong typography, a limited color palette, and high information density presented cleanly.
- **Figma** — Employs an extremely clean, function-over-form UI with distinct, legible typography and limited chromatic accents.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #000710;
  --color-action-orange: #ff5900;
  --color-primary-text: #000000;
  --color-paper-white: #ffffff;
  --color-dark-charcoal: #15191;
  --color-soft-gray: #f3f3f7;
  --color-muted-slate: #b9bbc6;
  --color-cool-stone: #60646c;
  --color-ash-gray: #6f737b;
  --color-silver-pine: #8b8d98;
  --font-inter: 'Inter', system-ui;
  --font-flecha: 'Flecha', serif;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.4px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -0.48px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.72px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-160: 160px;
  --radius-cards: 12px;
  --radius-input: 0px;
  --radius-buttons: 6px;
  --radius-default: 6px;
  --radius-navitem: 10px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #000710;
  --color-action-orange: #ff5900;
  --color-primary-text: #000000;
  --color-paper-white: #ffffff;
  --color-dark-charcoal: #15191;
  --color-soft-gray: #f3f3f7;
  --color-muted-slate: #b9bbc6;
  --color-cool-stone: #60646c;
  --color-ash-gray: #6f737b;
  --color-silver-pine: #8b8d98;
  --font-inter: 'Inter', system-ui;
  --font-flecha: 'Flecha', serif;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0px;
  --text-body: 14px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.4px;
  --text-heading: 24px;
  --leading-heading: 1.2;
  --tracking-heading: -0.48px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.72px;
  --text-display: 48px;
  --leading-display: 1.2;
  --tracking-display: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-63: 63px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-160: 160px;
  --radius-cards: 12px;
  --radius-input: 0px;
  --radius-buttons: 6px;
  --radius-default: 6px;
  --radius-navitem: 10px;
}
```

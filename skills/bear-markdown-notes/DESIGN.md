---
version: alpha
name: "Bear Markdown Notes"
description: "This system evokes clarity and approachability, like a crisp page from a digital notebook. Its light, airy aesthetic is built on a high-contrast palette of near-achromatic grays and subtle background tints, punctuated by a single vibrant red for brand presence and interactive elements. Soft 8px corner radii on interactive components and a few larger 16px/40px organic shapes add a friendly, understated warmth to the otherwise precise informational layout. The custom sans-serif typography, with a generous body line height, ensures a comfortable reading experience, reinforcing the app's focus on content."
theme: "light"
industry: "productivity"
source_url: "https://bear.app"
refero_style_id: "4afe77ff-e7fa-41d8-96d6-ce8cdc159f97"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926066430-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926066430-thumb.jpg"
extracted_at: "2026-04-11T16:48:11.548Z"
---

# Bear Markdown Notes — Style Reference

> Digital Notebook Page — where every element is legible and inviting.

**Theme:** light

**Industry:** productivity

This system evokes clarity and approachability, like a crisp page from a digital notebook. Its light, airy aesthetic is built on a high-contrast palette of near-achromatic grays and subtle background tints, punctuated by a single vibrant red for brand presence and interactive elements. Soft 8px corner radii on interactive components and a few larger 16px/40px organic shapes add a friendly, understated warmth to the otherwise precise informational layout. The custom sans-serif typography, with a generous body line height, ensures a comfortable reading experience, reinforcing the app's focus on content.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Bear Red | #dd4c4f | `--color-bear-red` | Brand accent, primary call-to-action (CTA), active state indicators, semantic error. This vivid red provides a clear focal point against the neutral background, signaling primary actions and brand identity. |
| Blueprint Blue | #456aa3 | `--color-blueprint-blue` | Decorative accent color for certain headings. |
| Leaf Green | #2b6451 | `--color-leaf-green` | Decorative accent color for certain headings. |
| Orchid Pink | #884aa8 | `--color-orchid-pink` | Decorative accent color for certain headings. |
| Content Teal | #9fd7e4 | `--color-content-teal` | Subtle background for specific content blocks, providing a soft accent. |
| Highlight Yellow | #fcb827 | `--color-highlight-yellow` | Semantic warning/highlight, badge background. |
| Badge Blue | #44a2e5 | `--color-badge-blue` | Semantic information, badge background. |
| Ink Black | #444444 | `--color-ink-black` | Primary text, icon fills, strong borders. This dark, slightly softened black maintains excellent readability. |
| Paper White | #ffffff | `--color-paper-white` | Page backgrounds, card surfaces, input fields. The predominant background color. |
| Ash Gray | #f3f5f7 | `--color-ash-gray` | Secondary section backgrounds, subtle dividers. A very light gray providing visual separation. |
| Divider Gray | #d5d6d9 | `--color-divider-gray` | Input borders, subtle strokes, inactive elements. A light, desaturated gray for UI structure. |
| Subtle Text | #888888 | `--color-subtle-text` | Secondary text, descriptive labels. A mid-gray for softer emphasis. |
| Stroke Silver | #e6e7eb | `--color-stroke-silver` | Fine separators and outlines, very subtle strokes. |

## Tokens — Typography

### bearsansheadline

- **Token:** `--font-bearsansheadline`
- **Substitute:** system-ui
- **Weights:** 400
- **Sizes:** 16px, 30px, 42px, 51px
- **Line heights:** 1.10, 1.70, 1.80
- **Role:** Display and marketing headlines. This custom font, used at moderate weights, provides a distinct editorial feel without being overly bold, allowing the content to retain a friendly tone.

### bearsans

- **Token:** `--font-bearsans`
- **Substitute:** system-ui
- **Weights:** 400, 700
- **Sizes:** 13px, 14px, 16px, 18px, 19px, 20px, 22px, 24px, 29px, 40px
- **Line heights:** 1.13, 1.20, 1.36, 1.40, 1.42, 1.45, 1.60, 1.70, 1.80, 1.89
- **Letter spacing:** 0.031em
- **Role:** Body text, navigation, interactive elements, captions. The primary workhorse font, its consistent letter spacing provides a clean, airy feel that's highly readable across all uses.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 13px | 1.45 | 0.31px | `--text-caption` |
| body | 16px | 1.6 | 0.31px | `--text-body` |
| subheading | 18px | 1.4 | 0.31px | `--text-subheading` |
| heading-sm | 29px | 1.7 | 0.31px | `--text-heading-sm` |
| heading-lg | 42px | 1.1 | — | `--text-heading-lg` |
| display | 51px | 1.1 | — | `--text-display` |

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
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-31 | 31px | `--spacing-31` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-41 | 41px | `--spacing-41` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-73 | 73px | `--spacing-73` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-84 | 84px | `--spacing-84` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-153 | 153px | `--spacing-153` |
| spacing-157 | 157px | `--spacing-157` |
| spacing-160 | 160px | `--spacing-160` |
| spacing-169 | 169px | `--spacing-169` |
| spacing-189 | 189px | `--spacing-189` |
| spacing-201 | 201px | `--spacing-201` |
| spacing-233 | 233px | `--spacing-233` |

### Border Radius

| Element | Value |
| --- | --- |
| badges | 3.84px |
| default | 8px |
| largeItems | 16px |
| organicShapes | 40px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.12) 0px 13px 34px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 960px |
| elementGap | 11px |

## Components

### Pricing Cards — Free vs Bear Pro

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Platform Selector Tabs

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Awards Row

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Link

**Role:** Navigation

Text link using bearsans, weight 400, size 16px, color Ink Black (#444444) on hover, otherwise Subtle Text (#888888). Displays with underline on hover.

### Basic Input Field

**Role:** Form Element

Input field with Paper White (#ffffff) background, Divider Gray (#d5d6d9) border. Text color Ink Black (#444444), uses bearsans 16px, weight 400. Has 8.8px border-radius and 0px vertical, 17.6px horizontal padding.

### PRO Badge (Red)

**Role:** Indicator/Tag

Small rectangular badge with Bear Red (#dd4c4f) background and Paper White (#ffffff) text. Features a 3.84px border-radius and 0px vertical, 3.84px horizontal padding. Text uses bearsans, likely small size.

### Benefit Checkmark

**Role:** Feature List Item

List item with checkmark icon, featuring text in Ink Black (#444444), bearsans, 19px, weight 400. Generous line height for readability, with 13px bottom margin between items.

### Feature Card

**Role:** Content Display

Card with Paper White (#ffffff) background, features a large shadow: rgba(0, 0, 0, 0.12) 0px 13px 34px 0px. Rounded corners at 8px on interactive elements, or 16px for content cards, implying a slight lift from the page. Contains nested elements, often with Padding of 8px vertical and 18px horizontal.

### Promo Badge (Yellow)

**Role:** Indicator/Tag

Small rectangular badge with Highlight Yellow (#fcb827) background and Paper White (#ffffff) text. Features a 4.8px border-radius and 0px vertical, 4.8px horizontal padding. Text uses bearsans, likely small size.

### Install Option Tag

**Role:** Category/Indicator

Small text (e.g., 'Mac', 'iPhone', 'iPad') using bearsans, 16px, weight 400, color Subtle Text (#888888). These are often underlined with the Bear Red (#dd4c4f) to indicate active selection. The letter spacing is distinct, making these tags feel airy.

## Do's and Don'ts

### Do

- Use Bear Red (#dd4c4f) exclusively for primary calls-to-action, active states, and brand highlights.
- Maintain a clear visual hierarchy with Ink Black (#444444) for primary text and Subtle Text (#888888) for secondary information.
- Apply an 8px border-radius to interactive elements like buttons and input fields for a consistent, soft touch.
- Employ bearsans for all body text and UI elements at 400 weight, ensuring the 0.031em letter spacing is consistent for legibility.
- Utilize Paper White (#ffffff) as the primary background and Ash Gray (#f3f5f7) for subtle section differentiation.
- Ensure generous line heights (e.g., 1.45 at 16px) for all body text (`bearsans`) to enhance readability.
- Use a vertical element gap of 11px for most stacked items to maintain 'comfortable' density.

### Don't

- Do not introduce new vibrant colors outside of the defined brand and semantic palette; rely on the neutral scale for structure.
- Avoid box shadows on non-interactive elements, reserving rgba(0, 0, 0, 0.12) 0px 13px 34px 0px for elevated feature cards only.
- Do not use letter spacing on `bearsansheadline` as it is explicitly set to `normal`.
- Avoid using bold or heavy weights for headlines; use bearsansheadline at 400 weight to maintain the light visual tone.
- Do not use dark backgrounds for sections, maintaining the light theme across all content areas.
- Avoid overly tight typography; the standard `letterSpacing: 0.031em` on `bearsans` is critical for its open feel.
- Do not introduce square corners; the soft radii are an important part of the brand's friendly visual language.

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.12) 0px 13px 34px 0px`

## Imagery

The site's imagery strategy focuses on product screenshots and abstract, playful illustrations, with minimal use of photography. Product screenshots are typically high-fidelity, showing the app UI clearly, often positioned within a device mockup (MacBook). These are sometimes slightly elevated with subtle shadows. Illustrations are flat, line-based, and whimsical (e.g., the astronaut in the lower section), using a monochromatic palette or subtle tints of blues and greens, serving a decorative and atmospheric role rather than explanatory. Icons are filled and monochromatic, predominantly Ink Black (#444444) or Subtle Text (#888888), used sparingly to aid navigation and highlight features. The density is moderate; imagery provides visual breaks and enhances key sections without overwhelming the text-dominant layout.

## Layout

The layout is predominantly a max-width centered design, constrained to 960px, providing a focused, article-like reading experience. The hero section features a large, centered headline over a white background, with calls-to-action. Sections below are typically alternating blocks of text-left/image-right compositions or reversed, creating a rhythmic flow down the page. Feature lists often use two-column layouts. Vertical spacing between sections is generous, around 48px to 64px, contributing to an open, uncrowded feel. The navigation is a fixed top bar with branding on the left and primary links on the right, maintaining simplicity.

## Similar Brands

- **Notion** — Similar focus on document content and information density; clean, minimal light-theme UI with structured use of gray scale.
- **Simplenote** — Emphasizes a clean, distraction-free markdown editing experience with a light background and clear typography.
- **Dropbox Paper** — Content-first approach, using ample white space and a limited, high-contrast color palette with a single brand accent color, centered layout.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-bear-red: #dd4c4f;
  --color-blueprint-blue: #456aa3;
  --color-leaf-green: #2b6451;
  --color-orchid-pink: #884aa8;
  --color-content-teal: #9fd7e4;
  --color-highlight-yellow: #fcb827;
  --color-badge-blue: #44a2e5;
  --color-ink-black: #444444;
  --color-paper-white: #ffffff;
  --color-ash-gray: #f3f5f7;
  --color-divider-gray: #d5d6d9;
  --color-subtle-text: #888888;
  --color-stroke-silver: #e6e7eb;
  --font-bearsansheadline: 'bearsansheadline', system-ui;
  --font-bearsans: 'bearsans', system-ui;
  --text-caption: 13px;
  --leading-caption: 1.45;
  --tracking-caption: 0.31px;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: 0.31px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.31px;
  --text-heading-sm: 29px;
  --leading-heading-sm: 1.7;
  --tracking-heading-sm: 0.31px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.1;
  --text-display: 51px;
  --leading-display: 1.1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-42: 42px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-96: 96px;
  --spacing-153: 153px;
  --spacing-157: 157px;
  --spacing-160: 160px;
  --spacing-169: 169px;
  --spacing-189: 189px;
  --spacing-201: 201px;
  --spacing-233: 233px;
  --radius-badges: 3.84px;
  --radius-default: 8px;
  --radius-largeitems: 16px;
  --radius-organicshapes: 40px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 13px 34px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-bear-red: #dd4c4f;
  --color-blueprint-blue: #456aa3;
  --color-leaf-green: #2b6451;
  --color-orchid-pink: #884aa8;
  --color-content-teal: #9fd7e4;
  --color-highlight-yellow: #fcb827;
  --color-badge-blue: #44a2e5;
  --color-ink-black: #444444;
  --color-paper-white: #ffffff;
  --color-ash-gray: #f3f5f7;
  --color-divider-gray: #d5d6d9;
  --color-subtle-text: #888888;
  --color-stroke-silver: #e6e7eb;
  --font-bearsansheadline: 'bearsansheadline', system-ui;
  --font-bearsans: 'bearsans', system-ui;
  --text-caption: 13px;
  --leading-caption: 1.45;
  --tracking-caption: 0.31px;
  --text-body: 16px;
  --leading-body: 1.6;
  --tracking-body: 0.31px;
  --text-subheading: 18px;
  --leading-subheading: 1.4;
  --tracking-subheading: 0.31px;
  --text-heading-sm: 29px;
  --leading-heading-sm: 1.7;
  --tracking-heading-sm: 0.31px;
  --text-heading-lg: 42px;
  --leading-heading-lg: 1.1;
  --text-display: 51px;
  --leading-display: 1.1;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-19: 19px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-31: 31px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-41: 41px;
  --spacing-42: 42px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-73: 73px;
  --spacing-80: 80px;
  --spacing-84: 84px;
  --spacing-96: 96px;
  --spacing-153: 153px;
  --spacing-157: 157px;
  --spacing-160: 160px;
  --spacing-169: 169px;
  --spacing-189: 189px;
  --spacing-201: 201px;
  --spacing-233: 233px;
  --radius-badges: 3.84px;
  --radius-default: 8px;
  --radius-largeitems: 16px;
  --radius-organicshapes: 40px;
  --shadow-xl: rgba(0, 0, 0, 0.12) 0px 13px 34px 0px;
}
```

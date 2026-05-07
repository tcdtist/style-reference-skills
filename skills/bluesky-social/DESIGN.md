---
version: alpha
name: "Bluesky Social"
description: "Bluesky Social presents as a polished, no-nonsense social platform with a quiet confidence. The dominant achromatic palette of crisp whites and deep blacks, accented by a singular, bright blue, conveys focus on content rather than interface flourish. Consistent tight spacing and subtle border treatments maintain a sense of order while allowing user-generated content to take center stage."
theme: "light"
industry: "media"
source_url: "https://bsky.app"
refero_style_id: "aa9234ca-0cc8-470b-bd38-398712de3e95"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926047160-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775926047160-thumb.jpg"
extracted_at: "2026-04-11T16:47:49.332Z"
---

# Bluesky Social — Style Reference

> Crisp white canvas, quiet blue accent. The layout feels like a well-organized corkboard of fleeting thoughts and visual snippets, neatly pinned and easily digestible.

**Theme:** light

**Industry:** media

Bluesky Social presents as a polished, no-nonsense social platform with a quiet confidence. The dominant achromatic palette of crisp whites and deep blacks, accented by a singular, bright blue, conveys focus on content rather than interface flourish. Consistent tight spacing and subtle border treatments maintain a sense of order while allowing user-generated content to take center stage.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, dialogs, primary surfaces |
| Ebony Text | #000000 | `--color-ebony-text` | Body text, primary headings, essential UI elements for maximum legibility |
| Sky Blue | #006aff | `--color-sky-blue` | Interactive elements, primary call-to-action buttons, active states, links — signaling interactive affordances with a burst of color on an otherwise monochrome canvas |
| Horizon Gray | #dce2ea | `--color-horizon-gray` | Subtle borders, dividers, inactive states, subtle backgrounds for content separation without harsh lines |
| Cloud Cover | #f9fafb | `--color-cloud-cover` | Secondary background surfaces, subtle elevation differences, card backgrounds |
| Ghost Button Background | #eff2f6 | `--color-ghost-button-background` | Background for secondary buttons, search bars, and interactive components that require a soft, non-intrusive fill |
| Slate Text | #405168 | `--color-slate-text` | Secondary text, metadata, tooltips — providing hierarchical differentiation from primary text |
| Steel Icon | #667b99 | `--color-steel-icon` | Default iconography, less emphasized UI elements — receding into the background without disappearing |
| Icon Gray | #8798b0 | `--color-icon-gray` | Subtle icons, inactive states on interactive elements |

## Tokens — Typography

### InterVariable

- **Token:** `--font-intervariable`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 11px, 12px, 13px, 15px, 16px, 24px
- **Line heights:** 1.00, 1.13, 1.20, 1.25, 1.30, 1.33
- **Role:** The primary and only typeface, covering all text elements from small captions to large headlines. Its high legibility and variable nature allow for precise visual hierarchy and density control within a minimalist interface.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.25 | — | `--text-caption` |
| body-sm | 12px | 1.25 | — | `--text-body-sm` |
| body | 13px | 1.25 | — | `--text-body` |
| body-lg | 15px | 1.25 | — | `--text-body-lg` |
| heading-sm | 16px | 1.25 | — | `--text-heading-sm` |
| heading | 24px | 1.25 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| inputs | 0px |
| avatars | 999px |
| buttons | 999px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| elementGap | 4px |

## Components

### Post Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Trending Sidebar Card

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Auth Panel with Tab Bar

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary Navigation Button

**Role:** Primary Call to Action

Ghost Button style with `Sky Blue` (#006aff) background on hover/active, `Ebony Text` (#000000) for text. Fully rounded `999px` corners, `8px` vertical and `14px` horizontal padding. Example: 'Create account'.

### Secondary Navigation Button

**Role:** Secondary Action

Ghost Button style, `Ghost Button Background` (#eff2f6) background on hover/active, `Ebony Text` (#000000) for text. Fully rounded `999px` corners, `8px` vertical and `14px` horizontal padding. Example: 'Sign in'.

### Interactive Icon Button

**Role:** Icon-only interaction

Transparent background, `Ebony Text` (#000000) for icon color. Small `4px` padding around the icon. Fully rounded `999px` corners, often used for like/comment actions. Example: numbers next to action icons ('111', '251').

### Reply/Like Count Button

**Role:** Text and Icon interaction

Transparent background, `Ebony Text` (#000000) for text. No border, `0px` radius. No padding, allowing text to be close to the icon. Example: '111'.

### Search Input

**Role:** Site-wide search

Transparent background, `Ebony Text` (#000000) placeholder. No border, `0px` radius. `11px` vertical and `4px` horizontal padding. Unobtrusive design integrates seamlessly into the header.

### Post Card

**Role:** Individual content unit

White background, distinct from `Cloud Cover` secondary backgrounds. Rounded `12px` corners. No explicit border, relies on surrounding negative space. Internal padding varies, often `10px` for left/right content.

### Trending Card

**Role:** Sidebar information display

White background, `12px` rounded corners. No border. Contains lists of items with `Ebony Text` and `Sky Blue` links.

### Avatar Display

**Role:** User identification

Circular `999px` radius, contains user imagery. Often appears with a `1px` margin or tight spacing to surrounding text.

### Hash Tag Link

**Role:** Categorization and navigation

`Sky Blue` (#006aff) text with no underline, appearing as interactive labels. This color highlights its function as a clickable element within body copy, directing users to related content.

## Do's and Don'ts

### Do

- Prioritize `Ebony Text` (#000000) on `Canvas White` (#ffffff) or `Cloud Cover` (#f9fafb) for all primary text content to ensure maximum readability.
- Use `Sky Blue` (#006aff) exclusively for interactive elements like links, buttons, and active states to provide clear affordances and maintain brand identity.
- Apply `999px` border-radius to all primary and secondary buttons, as well as avatar images, to create a consistent soft, approachable aesthetic.
- Maintain a clear visual hierarchy using `Slate Text` (#405168) or `Steel Icon` (#667b99) for secondary information, metadata, and non-actionable icons.
- Utilize `Horizon Gray` (#dce2ea) for subtle dividers and borders to separate content sections without introducing heavy visual elements, supporting the light aesthetic.
- Employ the `InterVariable` typeface consistently across all text elements, leveraging its weights (400, 500, 600, 700) to establish type hierarchy and emphasis.

### Don't

- Do not introduce additional vibrant colors; rely solely on `Sky Blue` (#006aff) as the primary accent color.
- Avoid hard-edged rectangular containers for interactive elements; favour the `999px` pill shape for buttons and avatars.
- Do not use shadows for elevation or depth; rely on background color changes (e.g., `Canvas White` on `Cloud Cover`) and explicit borders (`Horizon Gray`) for differentiation.
- Avoid excessive padding around embedded interactive elements like reply/like counts; use a minimal `4px` element gap for a compact interface.
- Do not use custom fonts other than `InterVariable`; this maintains the consistent, modern typographic voice.
- Never use dark backgrounds for main content areas; maintain the light theme with `Canvas White` (#ffffff) as the dominant background color.

## Imagery

Imagery predominantly consists of user-generated content: photography and digital art, which are displayed as unmasked, raw-edged squares or rectangles within post cards. There's no consistent 'brand' photography or illustration style imposed on user content. Icons are outline-style, `Steel Icon` (#667b99) by default, and `Ebony Text` (#000000) or `Sky Blue` (#006aff) for active states. These icons are functional, minimal, and visually consistent, serving purely interface purposes rather than decorative ones. The overall impression is image-heavy due to user posts, but the platform's own UI is image-minimal.

## Similar Brands

- **X (formerly Twitter)** — Similar white background, tight spacing, and content-first approach with a single accent color for interactive elements.
- **Mastodon** — Decentralized social platform with a similar focus on user-generated posts and a clean, functional UI, albeit often allowing for more color customization.
- **Threads** — Modern social app with a clear, light theme, emphasizing text and image posts in a vertical feed, marked by subtle borders and minimal UI flourishes.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ebony-text: #000000;
  --color-sky-blue: #006aff;
  --color-horizon-gray: #dce2ea;
  --color-cloud-cover: #f9fafb;
  --color-ghost-button-background: #eff2f6;
  --color-slate-text: #405168;
  --color-steel-icon: #667b99;
  --color-icon-gray: #8798b0;
  --font-intervariable: 'InterVariable', Inter;
  --text-caption: 11px;
  --leading-caption: 1.25;
  --text-body-sm: 12px;
  --leading-body-sm: 1.25;
  --text-body: 13px;
  --leading-body: 1.25;
  --text-body-lg: 15px;
  --leading-body-lg: 1.25;
  --text-heading-sm: 16px;
  --leading-heading-sm: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --radius-cards: 12px;
  --radius-inputs: 0px;
  --radius-avatars: 999px;
  --radius-buttons: 999px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ebony-text: #000000;
  --color-sky-blue: #006aff;
  --color-horizon-gray: #dce2ea;
  --color-cloud-cover: #f9fafb;
  --color-ghost-button-background: #eff2f6;
  --color-slate-text: #405168;
  --color-steel-icon: #667b99;
  --color-icon-gray: #8798b0;
  --font-intervariable: 'InterVariable', Inter;
  --text-caption: 11px;
  --leading-caption: 1.25;
  --text-body-sm: 12px;
  --leading-body-sm: 1.25;
  --text-body: 13px;
  --leading-body: 1.25;
  --text-body-lg: 15px;
  --leading-body-lg: 1.25;
  --text-heading-sm: 16px;
  --leading-heading-sm: 1.25;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --radius-cards: 12px;
  --radius-inputs: 0px;
  --radius-avatars: 999px;
  --radius-buttons: 999px;
}
```

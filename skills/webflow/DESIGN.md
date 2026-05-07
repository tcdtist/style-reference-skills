---
version: alpha
name: "Webflow"
description: "Webflow's design system projects confident utility through a sharp, clean interface. A monochromatic foundation of stark blacks and whites is punctuated by a singular, vibrant blue, drawing focus to interactive elements. Typography is the primary conveyor of brand personality, with large, precisely tracked sans-serif headlines creating a modern, impactful presence while subtle shadows add depth to interactive elements without overwhelming the clean aesthetic."
theme: "light"
industry: "devtools"
source_url: "https://webflow.com"
refero_style_id: "31471407-598a-45fd-a505-d921980d8855"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776105387270-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1776105387270-thumb.jpg"
extracted_at: "2026-04-13T18:36:51.498Z"
---

# Webflow — Style Reference

> Precise Blueprint on Stark Canvas — where every element serves a clear function against a bright, expansive backdrop.

**Theme:** light

**Industry:** devtools

Webflow's design system projects confident utility through a sharp, clean interface. A monochromatic foundation of stark blacks and whites is punctuated by a singular, vibrant blue, drawing focus to interactive elements. Typography is the primary conveyor of brand personality, with large, precisely tracked sans-serif headlines creating a modern, impactful presence while subtle shadows add depth to interactive elements without overwhelming the clean aesthetic.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, card backgrounds, primary surface. |
| Ink Black | #080808 | `--color-ink-black` | Primary heading and body text, button text on light surfaces. |
| Slate Gray | #5a5a5a | `--color-slate-gray` | Secondary text, muted icons, subtle borders. |
| Whisper Gray | #f0f0f0 | `--color-whisper-gray` | Subtle section backgrounds, alternative surface color for differentiation. |
| Outline Gray | #d8d8d8 | `--color-outline-gray` | Dividers, input borders, inactive element outlines. |
| Webflow Blue | #146ef5 | `--color-webflow-blue` | Primary calls to action, interactive elements, links, active states — provides a clear visual anchor for user interaction. |
| Sky Blue | #6ca7ff | `--color-sky-blue` | Accent text, secondary interactive elements, lighter shades of brand blue. |
| Emerald Green | #60ed76 | `--color-emerald-green` | Highlighting success messages, occasional textual accents. |
| Amber Glow | #ffa666 | `--color-amber-glow` | Highlighting attention points, warning-like accents. |
| Deep Blue Gradient | #146ef5 | `--color-deep-blue-gradient` | Background for feature sections, adding visual interest and depth to key areas. |

## Tokens — Typography

### WF Visual Sans Variable

- **Token:** `--font-wf-visual-sans-variable`
- **Substitute:** Inter
- **Weights:** 400, 500, 550, 600
- **Sizes:** 10px, 13px, 14px, 16px, 20px, 24px, 32px, 40px, 56px, 80px
- **Line heights:** 1.00, 1.04, 1.20, 1.30, 1.40, 1.50, 1.60
- **Letter spacing:** -0.0100em
- **Role:** Primary typeface for all text content including headings, body text, and UI elements. Its variable nature allows for precise visual hierarchy and strong visual impact at large sizes, while maintaining clarity in smaller text.

### WFVisualSans-Mono

- **Token:** `--font-wfvisualsans-mono`
- **Substitute:** JetBrains Mono
- **Weights:** 400
- **Sizes:** 12px, 16px
- **Line heights:** 1.50, 1.60
- **Letter spacing:** normal
- **OpenType features:** "ss02", "ss10", "zero"
- **Role:** Used for technical content, code snippets, or areas requiring precise, monospaced alignment. Distinctive font features for enhanced readability of numerical and technical data.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.5 | 0.1px | `--text-caption` |
| body | 16px | 1.5 | — | `--text-body` |
| subheading | 20px | 1.4 | — | `--text-subheading` |
| heading-sm | 24px | 1.3 | — | `--text-heading-sm` |
| heading | 40px | 1.2 | — | `--text-heading` |
| heading-lg | 56px | 1.04 | -0.01px | `--text-heading-lg` |
| display | 80px | 1 | -0.01px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-5 | 5px | `--spacing-5` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-19 | 19px | `--spacing-19` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-36 | 36px | `--spacing-36` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-71 | 71px | `--spacing-71` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-110 | 110px | `--spacing-110` |
| spacing-121 | 121px | `--spacing-121` |
| spacing-137 | 137px | `--spacing-137` |
| spacing-304 | 304px | `--spacing-304` |

### Border Radius

| Element | Value |
| --- | --- |
| pill | 1440px |
| cards | 4px |
| image | 8px |
| buttons | 4px |
| default | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1440px |
| sectionGap | 24px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Build Mode Selector Cards

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Feature List with Arrow Links

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Cookie Consent Banner

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Primary CTA Button

**Role:** Call to Action

Filled button with Webflow Blue background and Canvas White text, 4px border radius. Uses 16px horizontal padding.

### Secondary Ghost Button

**Role:** Secondary Action

Transparent background with Ink Black text and 1px Ink Black border, no border radius. Used for less prominent actions.

### Navigation Link Button

**Role:** Navigation/Menu

Transparent background with Ink Black text, no border or radius. Padding of 20px top and 19px bottom for visual separation in navigation.

### Compact Feature Card

**Role:** Informational Display

Card with Canvas White background, 4px border radius, and minimal shadow. Internal padding of 16px.

### Outline Tag Button

**Role:** Filter/Small Action

Transparent background with Ink Black text and 1px Ink Black border, no border radius. Compact padding of 1px vertical and 6px horizontal.

### Cookie Consent Banner

**Role:** Regulatory Notification

Bottom-fixed dark overlay with Canvas White text, featuring two primary interaction buttons: 'Reject all' (transparent with Webflow Blue border) and 'Accept all' (Webflow Blue filled).

## Do's and Don'ts

### Do

- Use WF Visual Sans Variable weight 600 for main headlines to convey importance with a modern, sharp tone.
- Apply Webflow Blue (#146ef5) exclusively to primary calls to action and critical interactive elements.
- Maintain a clear visual hierarchy by utilizing Ink Black (#080808) for primary text and Slate Gray (#5a5a5a) for secondary, descriptive content.
- Employ a 4px border-radius for all interactive buttons and smaller UI elements to establish a consistent subtle softness.
- Use the Ink Black to Canvas White (20:1) contrast for all essential text to ensure AAA legibility.
- Apply subtle, multi-layered shadows (e.g., rgba(0,0,0,0.01) 0px 54px 22px 0px) to interactive or elevated elements for depth, avoiding heavy dropshadows.

### Don't

- Do not introduce additional vibrant colors beyond the established Webflow Blue, Emerald Green, and Amber Glow accents.
- Avoid using flat black (#000000) for text; opt for Ink Black (#080808) for a softer, yet still direct, appearance.
- Do not use overly large line heights for headlines; maintain a tight `1.0` to `1.2` ratio to keep headlines compact and powerful.
- Refrain from varying letter-spacing on body text; apply only to large headlines with the specified negative tracking for impact.
- Do not use sharp 0px corners in functional components, except for subtle decorative elements like specific input borders.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Primary page background, base for all content. |
| 1 | Whisper Gray | #f0f0f0 | Alternate section backgrounds, slight visual separation for content blocks. |

## Elevation

- **Interactive Card:** `rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px`
- **Elevated Image/Icon:** `rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px`
- **Prominent Element (e.g. Hero Card):** `rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px`

## Imagery

The visual language is UI-heavy, with product screenshots of the Webflow interface integrated to explain features rather than purely decorative photography. These product screenshots often feature subtle elevation via shadows. Minimal abstract or illustrative graphics are used sparingly with strong brand blue accents. Icons are monochromatic, contributing to the functional aesthetic. Imagery primarily serves an explanatory role, showcasing the product directly.

## Layout

The site uses a max-width 1440px centered container for most content, creating a focused presentation. The hero section often features large, centered headlines followed by a subheading, establishing a bold and direct introduction. Content sections primarily use a clean, modular layout with both single-column stacks and multi-column grids (like 3-column cards). Vertical rhythm is maintained with consistent section gaps, creating breathing room between content blocks. The navigation is a sticky top bar with clear functional links and a Webflow Blue 'Start for free' CTA.

## Similar Brands

- **Figma** — Shares a clean, UI-focused aesthetic with a prominent brand accent color on a largely neutral palette, emphasizing functionality.
- **Notion** — Employs simple, modern typography and a high-contrast neutral palette to convey clarity and efficiency, with interactive elements highlighted by a single dominant color.
- **Vercel** — Similar approach to typography for headlines and body text, using a versatile sans-serif for both bold statements and readable content within a developer-tool context.
- **Linear** — Features a sharp, highly functional UI with a clear visual hierarchy built on a minimalist color scheme and precise typography, using a primary accent for key interactions.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-ink-black: #080808;
  --color-slate-gray: #5a5a5a;
  --color-whisper-gray: #f0f0f0;
  --color-outline-gray: #d8d8d8;
  --color-webflow-blue: #146ef5;
  --color-sky-blue: #6ca7ff;
  --color-emerald-green: #60ed76;
  --color-amber-glow: #ffa666;
  --color-deep-blue-gradient: #146ef5;
  --font-wf-visual-sans-variable: 'WF Visual Sans Variable', Inter;
  --font-wfvisualsans-mono: 'WFVisualSans-Mono', JetBrains Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.3;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: -0.01px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -0.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-110: 110px;
  --spacing-121: 121px;
  --spacing-137: 137px;
  --spacing-304: 304px;
  --radius-pill: 1440px;
  --radius-cards: 4px;
  --radius-image: 8px;
  --radius-buttons: 4px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px;
  --surface-canvas-white: #ffffff;
  --surface-whisper-gray: #f0f0f0;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-ink-black: #080808;
  --color-slate-gray: #5a5a5a;
  --color-whisper-gray: #f0f0f0;
  --color-outline-gray: #d8d8d8;
  --color-webflow-blue: #146ef5;
  --color-sky-blue: #6ca7ff;
  --color-emerald-green: #60ed76;
  --color-amber-glow: #ffa666;
  --color-deep-blue-gradient: #146ef5;
  --font-wf-visual-sans-variable: 'WF Visual Sans Variable', Inter;
  --font-wfvisualsans-mono: 'WFVisualSans-Mono', JetBrains Mono;
  --text-caption: 10px;
  --leading-caption: 1.5;
  --tracking-caption: 0.1px;
  --text-body: 16px;
  --leading-body: 1.5;
  --text-subheading: 20px;
  --leading-subheading: 1.4;
  --text-heading-sm: 24px;
  --leading-heading-sm: 1.3;
  --text-heading: 40px;
  --leading-heading: 1.2;
  --text-heading-lg: 56px;
  --leading-heading-lg: 1.04;
  --tracking-heading-lg: -0.01px;
  --text-display: 80px;
  --leading-display: 1;
  --tracking-display: -0.01px;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-19: 19px;
  --spacing-21: 21px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-58: 58px;
  --spacing-71: 71px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-110: 110px;
  --spacing-121: 121px;
  --spacing-137: 137px;
  --spacing-304: 304px;
  --radius-pill: 1440px;
  --radius-cards: 4px;
  --radius-image: 8px;
  --radius-buttons: 4px;
  --radius-default: 8px;
  --shadow-xl: rgba(0, 0, 0, 0.01) 0px 54px 22px 0px, rgba(0, 0, 0, 0.04) 0px 30px 18px 0px, rgba(0, 0, 0, 0.08) 0px 13px 13px 0px, rgba(0, 0, 0, 0.09) 0px 3px 7px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.02) 0px 67px 27px 0px, rgba(0, 0, 0, 0.06) 0px 38px 23px 0px, rgba(0, 0, 0, 0.1) 0px 17px 17px 0px, rgba(0, 0, 0, 0.12) 0px 4px 9px 0px;
  --shadow-xl-3: rgba(0, 0, 0, 0.01) 0px 148px 42px 0px, rgba(0, 0, 0, 0.04) 0px 95px 38px 0px, rgba(0, 0, 0, 0.15) 0px 53px 32px 0px, rgba(0, 0, 0, 0.26) 0px 24px 24px 0px, rgba(0, 0, 0, 0.29) 0px 6px 13px 0px;
  --surface-canvas-white: #ffffff;
  --surface-whisper-gray: #f0f0f0;
}
```

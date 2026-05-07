---
version: alpha
name: "International Magic"
description: "International Magic employs a dark, high-contrast aesthetic that feels like a digital portal. Text is predominantly white or light gray against a near-black canvas, with accents of off-white used minimally for interactive elements. Surfaces are stark and planar, relying on large, abstract shadows for subtle depth rather than complex gradients or border treatments. Typography is compact and precise, maintaining a high information density within fixed-width page layouts, while interactive components feature extremely rounded, almost pill-like shapes."
theme: "dark"
industry: "other"
source_url: "https://intmagic.com"
refero_style_id: "c406697b-677f-40c7-a3a2-10ea545278f1"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512275549-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777512275549-thumb.jpg"
extracted_at: "2026-04-30T01:24:53.306Z"
---

# International Magic — Style Reference

> Midnight Terminal, Pixelated Echoes

**Theme:** dark

**Industry:** other

International Magic employs a dark, high-contrast aesthetic that feels like a digital portal. Text is predominantly white or light gray against a near-black canvas, with accents of off-white used minimally for interactive elements. Surfaces are stark and planar, relying on large, abstract shadows for subtle depth rather than complex gradients or border treatments. Typography is compact and precise, maintaining a high information density within fixed-width page layouts, while interactive components feature extremely rounded, almost pill-like shapes.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Ink | #0a0a0a | `--color-midnight-ink` | Page background, primary surface, deep shadow base |
| Ghost White | #f7f7f7 | `--color-ghost-white` | Primary text, element borders, hero section text |
| Ash Gray | #7c7c7c | `--color-ash-gray` | Muted body text, secondary link color, subtle borders |
| Steel Gray | #4d4d4d | `--color-steel-gray` | Secondary text, subheadings, decorative element borders |
| Porcelain | #ebebeb | `--color-porcelain` | Button text (on dark bg), ghost button borders, hover states |
| Muted Slate | #616161 | `--color-muted-slate` | Badge borders |
| Shadowened Clay | #585858 | `--color-shadowened-clay` | Subtle button background |
| Faded Silver | #707070 | `--color-faded-silver` | Badge text |

## Tokens — Typography

### Wand UI Pro

- **Token:** `--font-wand-ui-pro`
- **Substitute:** Inter
- **Weights:** 400, 475, 500, 550, 650
- **Sizes:** 10px, 11px, 15px, 16px, 32px, 96px
- **Line heights:** 1.00, 1.10, 1.20, 1.25, 1.40, 1.60
- **Letter spacing:** -0.017em at 96px, 0.025em at 10px
- **OpenType features:** "ordn", "ss01"
- **Role:** The primary typeface for all content, from badges to display headlines. Its range of weights and precise letter-spacing on larger sizes contributes to the compact yet clear aesthetic, while high feature settings enable specific typographic nuances like ordinal numbers and stylistic alternates.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | 0.25px | `--text-caption` |
| heading | 32px | 1.1 | -0.32px | `--text-heading` |
| display | 96px | 1 | -1.63px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-64 | 64px | `--spacing-64` |

### Border Radius

| Element | Value |
| --- | --- |
| badges | 9999px |
| images | 20px |
| buttons | 9999px |
| default | 24px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.25) 0px 64px 72px 0px | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Ghost Header Button

**Role:** Navigation links and primary actions in headers

Text in Porcelain (#ebebeb) on a transparent background, with a 1px Porcelain (#ebebeb) border, and a 16px radius. Padding is 0px top/bottom, 20px left/right.

### Secondary Filled Button

**Role:** Subtle interactive elements, 'Subscribe' button

Background in Shadowened Clay (#585858), text in Midnight Ink (#0a0a0a), with a 9999px (pill) border-radius. Padding is 0px top/bottom, 24px left/right.

### Badge

**Role:** Categorization and metadata labels

Background is transparent, text in Faded Silver (#707070), with a 1px Muted Slate (#616161) border and a 9999px (pill) border-radius. Padding is 0px top/bottom, 8px left/right.

## Do's and Don'ts

### Do

- Prioritize Midnight Ink (#0a0a0a) for all primary backgrounds and surfaces to maintain the dark theme.
- Use Ghost White (#f7f7f7) for primary text and significant text elements like headings.
- Apply Wand UI Pro for all typography, ensuring font feature settings 'ordn' and 'ss01' are enabled.
- Utilize 9999px radius for all button and badge elements to create a distinctive pill-like shape.
- Maintain a default letter-spacing of -0.017em for large display text (96px) and 0.025em for small caption text (10px).
- Implement the large shadow 'rgba(0, 0, 0, 0.25) 0px 64px 72px 0px' for elevated elements to create depth without overt borders.
- Employ Ash Gray (#7c7c7c) or Steel Gray (#4d4d4d) for secondary information or links, ensuring sufficient contrast against the dark background.

### Don't

- Avoid using bright or overly saturated colors, as the palette is strictly achromatic with very minimal white/gray accents.
- Do not use generic border-radii; adhere strictly to 9999px for buttons/badges and 24px for other interactive elements.
- Do not introduce gradients unless they match the detected shadow style, as the system relies on flat surfaces and minimal elevation.
- Avoid excessive spacing or padding; the design system favors a compact, information-dense layout.
- Do not use box shadows for button states; interaction is indicated primarily by text color changes or subtle background fills.
- Do not center page content on a fixed-width container; the layout is full-bleed with content contained by padding.
- Avoid mixing sans-serif typefaces; Wand UI Pro is the only approved typeface.

## Elevation

- **Card/Container:** `rgba(0, 0, 0, 0.25) 0px 64px 72px 0px`

## Imagery

Imagery consists of product screenshots and abstract graphic elements, often rendered as animated video or glitched visual effects. Photography, when present (e.g., person's face), is styled with muted colors and typically contained within rounded containers. Icons are minimal, featuring outlined styles with a clean stroke weight, and primarily serve a functional purpose in media playback controls or navigation. The overall density of imagery is balanced with text, acting as compelling visual anchors for textual information.

## Layout

The page adopts a full-bleed dark canvas model. The hero section displays large, centered headings, often layered over product imagery or abstract visuals. Content sections appear to flow vertically with consistent, yet comfortable 64px gaps, but without distinct alternating bands or strong visual dividers, contributing to a seamless, continuous digital experience. Navigation is handled by a minimal top bar with ghost-style links. The visual rhythm is direct and linear, guiding the user vertically through content without complex grid systems or asymmetric arrangements, though interactive elements may float over content like a video player.

## Similar Brands

- **A-Cold-Wall*** — Shares a similar dark, achromatic palette with minimal, precise typography and a focus on abstract, almost brutalist visual design.
- **Off-White** — Exhibits a comparable use of bold, condensed typography on dark backgrounds, often with subtle textual accents, and a distinctive 'digital punk' aesthetic.
- **Balenciaga** — Features a similar stark, high-contrast dark mode with clean, impactful typography and an emphasis on minimal, almost utilitarian design elements.
- **Publicis Sapient** — Uses dark themes with strong typographic hierarchy, subtle interactive elements, and a focus on clean, almost architectural digital interfaces.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-ink: #0a0a0a;
  --color-ghost-white: #f7f7f7;
  --color-ash-gray: #7c7c7c;
  --color-steel-gray: #4d4d4d;
  --color-porcelain: #ebebeb;
  --color-muted-slate: #616161;
  --color-shadowened-clay: #585858;
  --color-faded-silver: #707070;
  --font-wand-ui-pro: 'Wand UI Pro', Inter;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.25px;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --tracking-heading: -0.32px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -1.63px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-64: 64px;
  --radius-badges: 9999px;
  --radius-images: 20px;
  --radius-buttons: 9999px;
  --radius-default: 24px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 64px 72px 0px;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-ink: #0a0a0a;
  --color-ghost-white: #f7f7f7;
  --color-ash-gray: #7c7c7c;
  --color-steel-gray: #4d4d4d;
  --color-porcelain: #ebebeb;
  --color-muted-slate: #616161;
  --color-shadowened-clay: #585858;
  --color-faded-silver: #707070;
  --font-wand-ui-pro: 'Wand UI Pro', Inter;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.25px;
  --text-heading: 32px;
  --leading-heading: 1.1;
  --tracking-heading: -0.32px;
  --text-display: 96px;
  --leading-display: 1;
  --tracking-display: -1.63px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-64: 64px;
  --radius-badges: 9999px;
  --radius-images: 20px;
  --radius-buttons: 9999px;
  --radius-default: 24px;
  --shadow-xl: rgba(0, 0, 0, 0.25) 0px 64px 72px 0px;
}
```

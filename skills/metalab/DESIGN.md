---
version: alpha
name: "Metalab"
description: "This design system conjures a mood of restrained sophistication and intellectual calm. Large, dramatic serif typography acts as art against a stark black and white canvas, establishing an immediate sense of gravity and refined taste. The composition prioritizes ample negative space, allowing elements to breathe and create an atmosphere of quiet authority, where every visual decision feels deliberate and impactful."
theme: "light"
industry: "agency"
source_url: "https://metalab.com"
refero_style_id: "da087e69-8832-418a-aa1b-42e1acabb39e"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925151784-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1775925151784-thumb.jpg"
extracted_at: "2026-04-11T16:32:46.694Z"
---

# Metalab — Style Reference

> monochrome canvas, serif headlines as art

**Theme:** light

**Industry:** agency

This design system conjures a mood of restrained sophistication and intellectual calm. Large, dramatic serif typography acts as art against a stark black and white canvas, establishing an immediate sense of gravity and refined taste. The composition prioritizes ample negative space, allowing elements to breathe and create an atmosphere of quiet authority, where every visual decision feels deliberate and impactful.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, prominent text, selected borders. |
| Void Black | #000000 | `--color-void-black` | Primary text, core UI elements, contrasting backgrounds. |
| Ash Surface | #252525 | `--color-ash-surface` | Secondary surface background, providing subtle depth against Void Black. |
| Elevated Grey | #bababa | `--color-elevated-grey` | Button backgrounds for an interactive, muted effect. |

## Tokens — Typography

### PP Eiko

- **Token:** `--font-pp-eiko`
- **Substitute:** Playfair Display
- **Weights:** 240
- **Sizes:** 88px
- **Line heights:** 0.80
- **Letter spacing:** -1.76
- **Role:** Display headings. It defines the brand's unique voice by using an extremely light weight and tight letter spacing at large sizes, creating a delicate yet commanding presence.

### Basis Grotesque Pro

- **Token:** `--font-basis-grotesque-pro`
- **Substitute:** Inter
- **Weights:** 350, 400
- **Sizes:** 12px, 16px
- **Line heights:** 1.00, 1.20, 1.40, 1.76, 2.00
- **Letter spacing:** -0.16
- **Role:** Body text, navigation, and utility elements. Its slight letter-spacing creates a refined, spacious feel even at smaller sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.76 | -0.16px | `--text-caption` |
| body | 16px | 1.2 | -0.16px | `--text-body` |
| display | 88px | 0.8 | -1.76px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-8 | 8px | `--spacing-8` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-24 | 24px | `--spacing-24` |

### Border Radius

| Element | Value |
| --- | --- |
| forms | 50px |
| buttons | 50px |
| general | 50px |

### Layout Tokens

| Name | Value |
| --- | --- |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Ghost Button

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Client Tag Buttons

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Stat / Identity Block

Captured as a source example component. Use the structure and token choices as a reference for implementation.

### Ghost Button

**Role:** Primary Call to Action

Transparent background, white 1px border, white text. No padding, relying on surrounding layout for spacing. Used for prominent actions like 'Get in Touch'.

### Client Tag Button

**Role:** Client Logo/Identifier

Background color rgba(186, 186, 186, 0.2) with white text. Pill-shaped with 50px border-radius. Padding 0px top/bottom, 16px left/right. Used to list client names in a subtle, contained manner.

## Do's and Don'ts

### Do

- Prioritize PP Eiko (240 weight, 88px, -1.76px letter-spacing) for all main headings to maintain dramatic visual impact.
- Use Basis Grotesque Pro (350/400 weight, 12px/16px) for all functional text with -0.16px letter-spacing for consistent readability.
- Apply Canvas White (#ffffff) as the dominant background color for most sections to create a bright, expansive canvas.
- Use Void Black (#000000) for primary text on Canvas White backgrounds, ensuring AAA contrast.
- Employ 50px border-radius for all interactive elements and contained content blocks to maintain a soft yet defined shape.
- Maintain generous padding; apply 0px top/bottom, 16px left/right for client tag buttons and other container specific components.
- Utilize rgba(186, 186, 186, 0.2) background for subtly interactive elements on dark backgrounds, providing visual feedback without strong color.

### Don't

- Avoid using highly saturated or chromatic colors; adhere strictly to the monochrome palette with subtle gray variations.
- Do not deviate from the specified font families; PP Eiko and Basis Grotesque Pro are core to the brand's typographic identity.
- Avoid box shadows or strong elevation effects, as the system relies on color contrast and negative space for hierarchy.
- Do not use letter-spacing values other than -1.76px for display text and -0.16px for body text.
- Avoid tightly packed sections; ensure `sectionGap` of 900px vertical spacing between major content blocks.
- Do not introduce square or sharp-cornered elements; 50px is the minimum radius for rounded forms including buttons.

## Imagery

The site's visual language is dominated by UI-like simulations or abstract dark rectangles that suggest screens or digital interfaces. There are no traditional photographs or illustrations. The treatment is full-bleed, occupying significant visual real estate, with softly rounded corners (implied by the 50px radius). These elements serve a decorative, atmospheric role, enhancing the 'interfaces' theme rather than explaining content or showcasing products directly. The density is medium, with these large visual elements balanced by extensive negative space and purposeful typography.

## Layout

The layout follows a full-bleed model with content centered within implied vertical segments, rather than a fixed maximum width. The hero section features a dramatic, highly asymmetric composition of large serif headings framing a central, dark, rounded rectangle. Sections below adopt a similar asymmetrical arrangement, with large dark blocks often balanced by sparse text or logos. There's a strong visual rhythm established by large, consistent vertical section gaps (900px), creating a spacious, almost architectural feel. Content is arranged in alternating visual weights rather than strict grids. Navigation is minimal, likely restricted to an off-screen menu. The overall density is very spacious, emphasizing individual elements and generous negative space.

## Similar Brands

- **Huge Inc.** — Shares a similar high-end agency aesthetic with a focus on strong typography and ample white space.
- **Anton & Irene** — Employs an editorial-like layout with large text elements and striking, minimal visuals for impact.
- **Basic (Agency)** — Uses large type, dark/light contrast, and a modern, spacious feel to convey premium digital services.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-void-black: #000000;
  --color-ash-surface: #252525;
  --color-elevated-grey: #bababa;
  --font-pp-eiko: 'PP Eiko', Playfair Display;
  --font-basis-grotesque-pro: 'Basis Grotesque Pro', Inter;
  --text-caption: 12px;
  --leading-caption: 1.76;
  --tracking-caption: -0.16px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.16px;
  --text-display: 88px;
  --leading-display: 0.8;
  --tracking-display: -1.76px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --radius-forms: 50px;
  --radius-buttons: 50px;
  --radius-general: 50px;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-void-black: #000000;
  --color-ash-surface: #252525;
  --color-elevated-grey: #bababa;
  --font-pp-eiko: 'PP Eiko', Playfair Display;
  --font-basis-grotesque-pro: 'Basis Grotesque Pro', Inter;
  --text-caption: 12px;
  --leading-caption: 1.76;
  --tracking-caption: -0.16px;
  --text-body: 16px;
  --leading-body: 1.2;
  --tracking-body: -0.16px;
  --text-display: 88px;
  --leading-display: 0.8;
  --tracking-display: -1.76px;
  --spacing-8: 8px;
  --spacing-16: 16px;
  --spacing-24: 24px;
  --radius-forms: 50px;
  --radius-buttons: 50px;
  --radius-general: 50px;
}
```

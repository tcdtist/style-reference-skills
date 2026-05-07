---
version: alpha
name: "Circa"
description: "Circa employs a bold, dark minimalism softened by whimsical 3D illustrations. The interface is primarily achromatic, establishing a stark backdrop for content and interaction. Typography is understated yet precise, relying on subtle weight differences and careful letter-spacing for hierarchy. Components are lightweight, favoring ghost elements and soft, contained surfaces with subtle elevation for critical information."
theme: "dark"
industry: "agency"
source_url: "https://circa.so"
refero_style_id: "3baaccae-2415-46c8-b71f-a45a002944aa"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514903801-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777514903801-thumb.jpg"
extracted_at: "2026-04-30T02:08:44.466Z"
---

# Circa — Style Reference

> Minimal dark canvas, playful 3D forms

**Theme:** dark

**Industry:** agency

Circa employs a bold, dark minimalism softened by whimsical 3D illustrations. The interface is primarily achromatic, establishing a stark backdrop for content and interaction. Typography is understated yet precise, relying on subtle weight differences and careful letter-spacing for hierarchy. Components are lightweight, favoring ghost elements and soft, contained surfaces with subtle elevation for critical information.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Ink Black | #000000 | `--color-ink-black` | Page background (dominant), body text |
| Charcoal | #171717 | `--color-charcoal` | Muted text, ghost button text, icon strokes, active states for ghost buttons |
| Stone Gray | #737373 | `--color-stone-gray` | Muted helper text, secondary icons |
| Frost White | #ffffff | `--color-frost-white` | Primary text, card backgrounds, ghost button backgrounds, active action button background |
| Silver Mist | #e6e6e6 | `--color-silver-mist` | Hairline borders for components and form fields |
| Deep Graphite | #111111 | `--color-deep-graphite` | High-contrast neutral action fill for primary buttons on light surfaces. |
| Laurent Lime | #AFFF2C | `--color-laurent-lime` | Supporting palette color for small decorative accents when the core palette needs contrast. Do not promote it to the primary CTA color |

## Tokens — Typography

### Geist

- **Token:** `--font-geist`
- **Substitute:** Montserrat
- **Weights:** 500
- **Sizes:** 30px
- **Line heights:** 1.15
- **Letter spacing:** -0.6px
- **OpenType features:** "calt", "rlig"
- **Role:** Primary headings — weight 500 emphasizes clarity and modernism over traditional bold shouts, with subtle negative letter-spacing for a sophisticated feel.

### Inter

- **Token:** `--font-inter`
- **Substitute:** System Font
- **Weights:** 400, 500, 600
- **Sizes:** 11px, 13px, 14px, 15px, 16px
- **Line heights:** 1.43, 1.50, 1.63
- **OpenType features:** "calt", "rlig"
- **Role:** Body copy, button text, and most UI elements — functional and legible across all sizes, forming the workhorse text of the system.

### system-ui

- **Token:** `--font-system-ui`
- **Weights:** 500
- **Sizes:** 12px
- **Line heights:** 1.50
- **OpenType features:** "calt", "rlig"
- **Role:** Utility text for small components and system feedback, prioritizing native rendering speed and legibility at minimal sizes.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 11px | 1.5 | — | `--text-caption` |
| body-sm | 13px | 1.5 | — | `--text-body-sm` |
| body | 14px | 1.5 | — | `--text-body` |
| body-lg | 15px | 1.5 | — | `--text-body-lg` |
| heading-sm | 16px | 1.5 | — | `--text-heading-sm` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-40 | 40px | `--spacing-40` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 12px |
| buttons | 4px |
| pillButtons | 9999px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgba(0, 0, 0, 0.1) 0px 1px 4px 0px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.05) 0px 1px 2px 0px | `--shadow-xl-3` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 40px |
| cardPadding | 24px |
| elementGap | 12px |

## Components

### Ghost Button

**Role:** Secondary actions, navigation links

Transparent background with Charcoal (#171717) text, 4px border-radius, no border. Focuses user on primary content while offering navigation.

### Pill Accent Button

**Role:** Small, informational labels or brand identifiers

Deep Graphite (#111111) background, Frost White (#ffffff) text, 9999px (pill) border-radius, 6px vertical padding, 12px horizontal padding. Features a subtle overlay shadow rgba(0, 0, 0, 0.05) 0px 1px 2px 0px.

### Dialog Card

**Role:** Modal dialogs, cookie settings, important notifications

Background Frost White (#ffffff), 12px border-radius, 24px padding on all sides. Elevated with a soft shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px.

### Default Action Button

**Role:** Primary calls to action within a dialog

Frost White (#ffffff) background, Ink Black (#000000) text, 6px border-radius, 20px horizontal padding. Features no explicit borders to blend with background surfaces.

### Muted Action Button

**Role:** Secondary actions within a dialog

Charcoal (#171717) background, Frost White (#ffffff) text, 6px border-radius, 20px horizontal padding. Provides a clear contrast for secondary options in dark contexts.

## Do's and Don'ts

### Do

- Prioritize Ink Black (#000000) as the dominant page background.
- Use Frost White (#ffffff) for primary text and Charcoal (#171717) or Stone Gray (#737373) for muted text and secondary information.
- Apply Geist font with a 500 weight for all hero-level headings, ensuring -0.6px letter-spacing.
- Maintain a 4px border-radius for interactive buttons and 12px for cards.
- Elevate critical UI elements like dialogs with soft shadows and a 12px border-radius.
- Utilize 12px as the standard element gap for arranging content within sections.
- Incorporate the Laurent Lime (#AFFF2C) only as a distinct brand accent for highlighted active states or illustrations.

### Don't

- Avoid using saturated colors for backgrounds or large content blocks; reserve them strictly for accents.
- Do not introduce strong, hard shadows; elevation should be subtle and blended.
- Refrain from heavy borders on components; use hairline #e6e6e6 borders where necessary for separation instead of framing.
- Do not deviate from the specified Inter font for body text or button labels.
- Avoid decorative gradients on UI components — keep surfaces flat and monochromatic.
- Do not use varied letter-spacing on body text; keep it at 'normal' for readability.
- Do not use dark backgrounds for cards or dialogs; these remain Frost White (#ffffff) against the Ink Black (#000000) canvas.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Ink Black Canvas | #000000 | Primary page background, creating a deep, immersive environment |
| 1 | Frost White Card | #ffffff | Elevated surfaces for dialogs and content containers, providing contrast and focus |
| 2 | Muted Button Background | #111111 | Background for minor informational buttons, subtly distinct from the canvas |

## Elevation

- **Pill Accent Button:** `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`
- **Dialog Card:** `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`

## Imagery

Abstract, playful 3D illustrations serve as the primary visual element, depicting whimsical characters and architectural structures. These are full-bleed against the dark background, providing decorative atmosphere and brand personality. Icons are minimal, either outlined or filled, with a consistent stroke weight, often in Charcoal or Frost White to blend with the UI. The density is image-heavy in the hero area, with illustrations acting as the main point of engagement, while other visuals are purely functional icons.

## Layout

The page uses a full-bleed layout with content centered horizontally. The hero section features animated 3D illustrations as its focal point, with centered text overlays. Content is primarily stacked vertically, demonstrating a strong emphasis on comfortable vertical spacing. Navigation is minimal, indicated by a single 'Made with Circa' label at the bottom right. The overall impression is one of spaciousness, letting the central illustration command attention.

## Similar Brands

- **Figma** — Uses a dark canvas, highly sculptural 3D elements, and functional, minimal typography.
- **Linear** — Features a dark UI with crisp, minimalist typography and subtle component styling.
- **Spline** — Characterized by a dark aesthetic, heavy use of 3D illustrations, and clean UI components.
- **Read.cv** — Employs an achromatic palette with careful type hierarchy and sparse, lightweight UI elements.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-ink-black: #000000;
  --color-charcoal: #171717;
  --color-stone-gray: #737373;
  --color-frost-white: #ffffff;
  --color-silver-mist: #e6e6e6;
  --color-deep-graphite: #111111;
  --color-laurent-lime: #AFFF2C;
  --font-geist: 'Geist', Montserrat;
  --font-inter: 'Inter', System Font;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body-sm: 13px;
  --leading-body-sm: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 15px;
  --leading-body-lg: 1.5;
  --text-heading-sm: 16px;
  --leading-heading-sm: 1.5;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --radius-cards: 12px;
  --radius-buttons: 4px;
  --radius-pillbuttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --surface-ink-black-canvas: #000000;
  --surface-frost-white-card: #ffffff;
  --surface-muted-button-background: #111111;
}
```

### Tailwind v4

```css
@theme {
  --color-ink-black: #000000;
  --color-charcoal: #171717;
  --color-stone-gray: #737373;
  --color-frost-white: #ffffff;
  --color-silver-mist: #e6e6e6;
  --color-deep-graphite: #111111;
  --color-laurent-lime: #AFFF2C;
  --font-geist: 'Geist', Montserrat;
  --font-inter: 'Inter', System Font;
  --font-system-ui: 'system-ui', ui-sans-serif, system-ui, sans-serif;
  --text-caption: 11px;
  --leading-caption: 1.5;
  --text-body-sm: 13px;
  --leading-body-sm: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 15px;
  --leading-body-lg: 1.5;
  --text-heading-sm: 16px;
  --leading-heading-sm: 1.5;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-40: 40px;
  --radius-cards: 12px;
  --radius-buttons: 4px;
  --radius-pillbuttons: 9999px;
  --shadow-xl: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  --shadow-xl-2: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px;
  --shadow-xl-3: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  --surface-ink-black-canvas: #000000;
  --surface-frost-white-card: #ffffff;
  --surface-muted-button-background: #111111;
}
```

---
version: alpha
name: "Lyssna"
description: "Lyssna cultivates a calm, focused workspace aesthetic with soft, muted background colors and a distinctive rich teal. Typography is functional and modern, balancing a custom sans-serif for body text with a unique display font for headlines. Components are lightweight with subtle rounding, emphasizing content rather than heavy borders or deep shadows. The overall feel is one of approachable professionalism, with color used sparingly to guide interaction."
theme: "light"
industry: "saas"
source_url: "https://www.lyssna.com"
refero_style_id: "65f775f1-6dcc-4c49-80d2-b5a017b76f59"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510366260-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510366260-thumb.jpg"
extracted_at: "2026-04-30T00:53:29.258Z"
---

# Lyssna — Style Reference

> Serene teal workspace

**Theme:** light

**Industry:** saas

Lyssna cultivates a calm, focused workspace aesthetic with soft, muted background colors and a distinctive rich teal. Typography is functional and modern, balancing a custom sans-serif for body text with a unique display font for headlines. Components are lightweight with subtle rounding, emphasizing content rather than heavy borders or deep shadows. The overall feel is one of approachable professionalism, with color used sparingly to guide interaction.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Midnight Pine | #061d29 | `--color-midnight-pine` | Primary text, heading text, critical UI elements, dark brand accents |
| Arctic Mist | #e5e7eb | `--color-arctic-mist` | Subtle borders, dividers, subtle inactive element states |
| Canvas White | #ffffff | `--color-canvas-white` | Page backgrounds, primary card surfaces, default UI areas |
| Zenith Teal | #006e75 | `--color-zenith-teal` | Primary action buttons, interactive elements, brand highlights |
| Pale Mint | #b9ffe8 | `--color-pale-mint` | Subtle accent backgrounds, secondary brand highlights, active state indicators |
| Pale Amber | #fffded | `--color-pale-amber` | Secondary card backgrounds, subtle alert backgrounds |
| Soft Stone | #425d6d | `--color-soft-stone` | Muted text, secondary borders, less emphasized elements |
| Rose Sunset | #ffb0a4 | `--color-rose-sunset` | Conic gradient start for decorative elements |
| Warm Berry | #4d0037 | `--color-warm-berry` | Accent backgrounds for decorative panels |
| Soft Magenta | #ffc3e6 | `--color-soft-magenta` | Accent backgrounds for decorative panels |
| Ocean Glimmer | #0b978e | `--color-ocean-glimmer` | Interactive link backgrounds, subtle decorative fills |

## Tokens — Typography

### mint

- **Token:** `--font-mint`
- **Substitute:** Inter
- **Weights:** 400, 500
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px, 20px, 22px, 26px
- **Line heights:** 1.22, 1.25, 1.50
- **Letter spacing:** normal
- **Role:** Primary body text, labels, navigation items, and most UI text. The custom font `mint` at weights 400 and 500 maintains a clean, digital aesthetic for readability across various sizes.

### grenette

- **Token:** `--font-grenette`
- **Substitute:** Outfit
- **Weights:** 400
- **Sizes:** 22px, 46px, 60px
- **Line heights:** 1.05, 1.15, 1.20
- **Letter spacing:** normal
- **Role:** Display headlines and subheadings. The unique `grenette` font provides a distinct, modern character for larger text, establishing brand presence without being overly bold.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.5 | — | `--text-caption` |
| body | 14px | 1.5 | — | `--text-body` |
| body-lg | 16px | 1.5 | — | `--text-body-lg` |
| subheading | 18px | 1.25 | — | `--text-subheading` |
| heading-sm | 22px | 1.2 | — | `--text-heading-sm` |
| heading | 26px | 1.22 | — | `--text-heading` |
| heading-lg | 46px | 1.15 | — | `--text-heading-lg` |
| display | 60px | 1.05 | — | `--text-display` |

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
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-44 | 44px | `--spacing-44` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-52 | 52px | `--spacing-52` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-69 | 69px | `--spacing-69` |
| spacing-75 | 75px | `--spacing-75` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-103 | 103px | `--spacing-103` |
| spacing-298 | 298px | `--spacing-298` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| buttons | 8px |
| elements | 12px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 24px |
| cardPadding | 24px |
| elementGap | 8px |

## Components

### Primary Filled Button

**Role:** Call-to-action button for initiating key actions.

Solid 'Zenith Teal' (#006e75) background, 'Midnight Pine' (#061d29) text, 8px border-radius, padding 16px vertical, 24px horizontal. Text is `mint` font, typically weight 500.

### Ghost Outline Button

**Role:** Secondary action button, blends into content.

Transparent background, 'Midnight Pine' (#061d29) text, 'Arctic Mist' (#e5e7eb) border, 8px border-radius, padding 16px vertical, 24px horizontal. Text is `mint` font, typically weight 500.

### Navigation Link Button

**Role:** Navigation items in the header or active states.

Transparent background, 'Midnight Pine' (#061d29) text, 0px border-radius, 0px vertical padding, 12px horizontal padding. On hover, background uses 'Zenith Teal' (#006e75) with 'Pale Mint' (#b9ffe8) text. Text is `mint` font, typically weight 400.

### Default Card

**Role:** Content containers on white backgrounds.

'Canvas White' (#ffffff) background, 24px border-radius, no shadow, 0px padding by default (content drives interior spacing).

### Accent Card - Pale Amber

**Role:** Decorative or highlighted content containers.

'Pale Amber' (#fffded) background, 24px border-radius, no shadow, 0px padding by default.

### Muted Action Link

**Role:** Secondary action or informational links without button styling.

'Midnight Pine' (#061d29) text, transparent background, with 'Artic Mist' (#e5e7eb) border on focus/hover. Uses `mint` font, 8px radius for containers.

## Do's and Don'ts

### Do

- Use 'Midnight Pine' (#061d29) for all primary text and headings.
- Apply 'Zenith Teal' (#006e75) for primary call-to-action buttons, ensuring it's always interactable.
- Maintain a 24px border-radius for all content cards, softening surfaces.
- Employ 'Arctic Mist' (#e5e7eb) for subtle UI dividers, borders, and inactive states.
- Prioritize the `mint` font for all body text, navigation, and functional UI elements.
- Use a base unit of 8px for vertical and horizontal element gaps to maintain comfortable density.
- Structure page sections with a 'Midnight Pine' heading using `grenette` font, followed by `mint` body text.

### Don't

- Avoid using highly saturated colors for large background areas; reserve them for accents or interactive elements.
- Do not introduce heavy shadows or deep elevation; components should feel lightweight and integrated.
- Refrain from using generic system fonts when `mint` or `grenette` are available.
- Do not deviate from the 8px or 24px border-radii for buttons and cards respectively.
- Do not overcrowd sections; maintain the comfortable density with 24px section gaps.
- Never use 'Pale Mint' (#b9ffe8) for text against light backgrounds; its contrast is insufficient.
- Avoid arbitrary gradients; only use the defined conic gradients for decorative elements, not functional UI.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background. |
| 1 | Pale Amber | #fffded | Secondary card surfaces, subtle accent sections. |
| 2 | Pale Mint | #b9ffe8 | Accented card backgrounds, active state indicators. |

## Imagery

The visual language combines abstract, gradient-filled graphics with clear product screenshots and professional, often unposed, photography. Imagery serves both decorative and explanatory roles. Abstract background gradients (like the Rose Sunset conic gradient) provide atmosphere, while tight product screenshots showcase the UI clearly, often with a subtle white border. Photography features diverse individuals in work settings, maintaining a candid, authentic feel rather than highly stylized lifestyle shots. Icons are filled, monocolor, and have a consistent stroke weight, used sparingly for functionality and subtle decoration. Imagery density is moderate, carefully balanced with text to avoid overwhelming the user.

## Layout

The page primarily uses a max-width contained layout, centered on 'Canvas White' background, with full-width sections for brand logos (implicitly max-width due to content). The hero section features a centered headline and subtext, followed by two primary ghost and filled action buttons. Below the fold, sections alternate between centered stacks of content and common text-left/image-right (or vice-versa) arrangements, utilizing a default card grid for features. Vertical rhythm is maintained by consistent 24px section gaps, with content organized for comfortable readability and scannability. The navigation is a fixed top bar with standard links and two distinct button actions.

## Similar Brands

- **Usability Hub** — Similar focus on muted backgrounds with a single strong accent color (green/teal) for CTAs and iconography, conveying clarity in a product UI.
- **Maze** — Shared aesthetic of clean, almost sparse layouts, emphasizing content with soft rounded corners and minimal visual clutter, using type as a primary visual element.
- **Hotjar** — The use of an understated, light theme with contrasting dark text and carefully placed, moderate brand colors for interactive elements, creating a professional and inviting experience.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-midnight-pine: #061d29;
  --color-arctic-mist: #e5e7eb;
  --color-canvas-white: #ffffff;
  --color-zenith-teal: #006e75;
  --color-pale-mint: #b9ffe8;
  --color-pale-amber: #fffded;
  --color-soft-stone: #425d6d;
  --color-rose-sunset: #ffb0a4;
  --color-warm-berry: #4d0037;
  --color-soft-magenta: #ffc3e6;
  --color-ocean-glimmer: #0b978e;
  --font-mint: 'mint', Inter;
  --font-grenette: 'grenette', Outfit;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --text-heading: 26px;
  --leading-heading: 1.22;
  --text-heading-lg: 46px;
  --leading-heading-lg: 1.15;
  --text-display: 60px;
  --leading-display: 1.05;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-69: 69px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-103: 103px;
  --spacing-298: 298px;
  --radius-cards: 24px;
  --radius-buttons: 8px;
  --radius-elements: 12px;
  --surface-canvas-white: #ffffff;
  --surface-pale-amber: #fffded;
  --surface-pale-mint: #b9ffe8;
}
```

### Tailwind v4

```css
@theme {
  --color-midnight-pine: #061d29;
  --color-arctic-mist: #e5e7eb;
  --color-canvas-white: #ffffff;
  --color-zenith-teal: #006e75;
  --color-pale-mint: #b9ffe8;
  --color-pale-amber: #fffded;
  --color-soft-stone: #425d6d;
  --color-rose-sunset: #ffb0a4;
  --color-warm-berry: #4d0037;
  --color-soft-magenta: #ffc3e6;
  --color-ocean-glimmer: #0b978e;
  --font-mint: 'mint', Inter;
  --font-grenette: 'grenette', Outfit;
  --text-caption: 12px;
  --leading-caption: 1.5;
  --text-body: 14px;
  --leading-body: 1.5;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.25;
  --text-heading-sm: 22px;
  --leading-heading-sm: 1.2;
  --text-heading: 26px;
  --leading-heading: 1.22;
  --text-heading-lg: 46px;
  --leading-heading-lg: 1.15;
  --text-display: 60px;
  --leading-display: 1.05;
  --spacing-4: 4px;
  --spacing-5: 5px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-10: 10px;
  --spacing-12: 12px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-44: 44px;
  --spacing-48: 48px;
  --spacing-52: 52px;
  --spacing-56: 56px;
  --spacing-64: 64px;
  --spacing-69: 69px;
  --spacing-75: 75px;
  --spacing-80: 80px;
  --spacing-103: 103px;
  --spacing-298: 298px;
  --radius-cards: 24px;
  --radius-buttons: 8px;
  --radius-elements: 12px;
  --surface-canvas-white: #ffffff;
  --surface-pale-amber: #fffded;
  --surface-pale-mint: #b9ffe8;
}
```

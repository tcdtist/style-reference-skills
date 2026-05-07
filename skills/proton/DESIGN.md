---
version: alpha
name: "Proton"
description: "Proton's design system evokes a digital sanctuary: a crisp, bright base accented by deep, protective purples. The layout emphasizes clear information hierarchy with ample whitespace, using soft gradients for depth without heavy shadows. Typography is precise and confident, balancing a strong sans-serif for UI with a traditional serif for prominent headlines. Interactive elements are clearly defined by vibrant violet cues rather than subtle hover states."
theme: "light"
industry: "saas"
source_url: "https://proton.me"
refero_style_id: "7fa8f4c3-4114-4c46-b1fb-b6cdcaaa2169"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510328686-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510328686-thumb.jpg"
extracted_at: "2026-04-30T00:52:34.987Z"
---

# Proton — Style Reference

> Digital sanctuary on white canvas

**Theme:** light

**Industry:** saas

Proton's design system evokes a digital sanctuary: a crisp, bright base accented by deep, protective purples. The layout emphasizes clear information hierarchy with ample whitespace, using soft gradients for depth without heavy shadows. Typography is precise and confident, balancing a strong sans-serif for UI with a traditional serif for prominent headlines. Interactive elements are clearly defined by vibrant violet cues rather than subtle hover states.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #ffffff | `--color-canvas-white` | Page background, primary elevated surfaces, button text in filled buttons |
| Cloud Gray | #f6f7f9 | `--color-cloud-gray` | Secondary background color, subtly elevated sections, card backgrounds. Forms the lighter part of atmospheric gradients; Atmospheric background wash, used beneath hero sections or to define large contextual areas, transitioning from light gray to lavender |
| Stone Gray | #e5e7eb | `--color-stone-gray` | Hairline borders, dividers, subtle outlines for ghost buttons |
| Iron Gray | #4b5563 | `--color-iron-gray` | Secondary body text, navigation labels, and subdued headings. Do not promote it to the primary CTA color |
| Ash Gray | #9ca3af | `--color-ash-gray` | Muted text, placeholder text, disabled states, ghost button text |
| Privacy Violet | #372580 | `--color-privacy-violet` | Primary heading text, emphasized links, branding elements, navigation text – a deep, authoritative violet |
| Action Violet | #6d4aff | `--color-action-violet` | Primary call-to-action buttons (filled background), active state indicators, highlighted links, interactive icon accents |
| Lavender Glow | #e2dbff | `--color-lavender-glow` | Gray wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Do not promote it to the primary CTA color |
| Twilight Gradient | #c5b7ff | `--color-twilight-gradient` | Atmospheric background wash, used as a counterpoint to Sunset Gradient for visual interest in large areas |

## Tokens — Typography

### ProtonSerif

- **Token:** `--font-protonserif`
- **Substitute:** Georgia
- **Weights:** 400
- **Sizes:** 20px, 30px, 36px, 48px, 60px
- **Line heights:** 1.06, 1.11, 1.13, 1.16, 1.20
- **Letter spacing:** -0.0300em
- **Role:** Headlines and prominent display text, lending a classic, authoritative air to key messaging.

### ProtonSans

- **Token:** `--font-protonsans`
- **Substitute:** Inter
- **Weights:** 400, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 20px
- **Line heights:** 1.00, 1.50, 1.55, 1.57, 1.63
- **Letter spacing:** normal
- **Role:** Body text, navigation, buttons, and most UI elements – a clean, readable sans-serif for functional content.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.55 | 0px | `--text-caption` |
| body-sm | 14px | 1.5 | 0px | `--text-body-sm` |
| body | 16px | 1.5 | 0px | `--text-body` |
| subheading | 18px | 1.63 | 0px | `--text-subheading` |
| heading-sm | 20px | 1.2 | 0px | `--text-heading-sm` |
| heading | 30px | 1.16 | -0.48px | `--text-heading` |
| heading-lg | 36px | 1.13 | -0.6px | `--text-heading-lg` |
| display | 48px | 1.11 | -0.72px | `--text-display` |
| display-lg | 60px | 1.06 | -0.96px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-96 | 96px | `--spacing-96` |
| spacing-137 | 137px | `--spacing-137` |
| spacing-176 | 176px | `--spacing-176` |
| spacing-201 | 201px | `--spacing-201` |
| spacing-265 | 265px | `--spacing-265` |

### Border Radius

| Element | Value |
| --- | --- |
| cards | 24px |
| buttons | 9999px |
| general | 2px |
| navItems | 6px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(109, 74, 255) 0px 0px 0px 2px inset | `--shadow-xl` |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 64px |
| cardPadding | 20px |
| elementGap | 4px |

## Components

### Filled Action Button

**Role:** Primary call-to-action button

Solid 'Action Violet' background, 'Canvas White' text, 9999px (pill) border-radius, with 4px vertical and 12px horizontal padding. On focus, an inset 'Action Violet' shadow appears.

### Ghost Button

**Role:** Secondary call-to-action or navigational button

Transparent background, 'Action Violet' text, 9999px (pill) border-radius, with 4px vertical and 12px horizontal padding. Borders are very subtle 'Stone Gray' initially.

### Navigation Link Button

**Role:** Tertiary action, internal navigation

Transparent background, 'Privacy Violet' text, 0px border-radius, with 0px padding. Used for text-based navigation or inline actions.

### Muted Ghost Button

**Role:** Inactive or low-emphasis secondary button

Subtly tinted 'Ash Gray' background with 'Ash Gray' text, 9999px (pill) border-radius, with 0px padding. Often used for discrete controls like carousels.

### Feature Card

**Role:** Container for product features or illustrative content

'Cloud Gray' background, 24px border-radius, with 0px vertical and 64px horizontal padding. Used for distinct content blocks without heavy shadows.

## Do's and Don'ts

### Do

- Use 'Privacy Violet' (#372580) for all primary headline text, leveraging its authoritative depth.
- Apply a 9999px (pill) border-radius to all buttons for a consistent soft, approachable shape.
- Define interactive elements clearly with 'Action Violet' (#6d4aff) for filled backgrounds or text, and use Stone Gray (#e5e7eb) for subtle ghost button borders.
- Structure large negative spaces with 'Canvas White' (#ffffff) and 'Cloud Gray' (#f6f7f9) to create clear content separation and visual breathing room.
- Employ ProtonSerif for all major headings to establish a distinct, traditional brand voice.
- Implement consistent internal padding of 20px for cards and 64px for section side-padding to maintain visual alignment and density.
- Utilize the Lavender Glow (#e2dbff) and Cloud Gray (#f6f7f9) gradients to provide subtle background depth without resorting to heavy drop shadows.

### Don't

- Avoid using harsh or dark shadows; instead, rely on subtle background gradients and color shifts for layering and depth.
- Do not introduce new saturated hues outside of the defined violet brand colors unless for specific semantic purposes (e.g., success, error).
- Avoid arbitrary border-radius values; adhere strictly to 9999px for buttons, 24px for cards, and 6px for navigation items.
- Do not deviate from the ProtonSerif and ProtonSans font families; maintain the established typographic hierarchy.
- Refrain from tight, compressed layouts; ensure generous 'sectionGap' (64px) and 'elementGap' (4px) values are maintained.
- Do not use generic blue for links; all interactive text links should default to 'Action Violet' (#6d4aff) for consistency.
- Avoid unnecessary decoration or heavy visual elements; the system prioritizes clarity and a lightweight feel.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #ffffff | Base page background and highest contrast surfaces |
| 1 | Cloud Gray | #f6f7f9 | Slightly elevated sections, card backgrounds, and gradient origins |
| 2 | Lavender Glow | #e2dbff | Gradient destination, providing a subtle accent layer |

## Elevation

- **Shadow 1:** `rgb(109, 74, 255) 0px 0px 0px 2px inset`

## Imagery

This system primarily uses product screenshots and abstract graphic elements. Product screenshots are typically tightly cropped within device frames, showcasing clean, focused interface details. Abstract graphics feature soft, organic shapes and translucent overlays in the brand's violet and gray palette, creating a sense of depth and atmosphere. Icons are filled, featuring moderate stroke weights and are either 'Iron Gray' or 'Action Violet'. Imagery functions decoratively to set a secure, professional mood or explain product features, often balancing text-heavy sections. Imagery density is moderate, integrated thoughtfully without dominating the page.

## Layout

The page primarily uses a full-bleed layout, particularly in the hero section where atmospheric gradients extend edge-to-edge. Content within sections adheres to a comfortable max-width, centrally aligned. The hero features a large, centered headline from 'ProtonSerif' over a soft gradient background. Section rhythm is visually distinct but not harsh, often defined by subtle background color shifts between 'Canvas White' and 'Cloud Gray' or atmospheric gradients. Content often alternates between left-aligned text blocks and right-aligned product visuals or vice-versa, with clear vertical spacing provided by the 'sectionGap' of 64px. Minimalistic header navigation remains at the top, consistent across pages.

## Similar Brands

- **DuckDuckGo** — Shares a focus on privacy and security, visually conveyed through a clean, modern aesthetic with controlled color accents against a predominantly neutral palette.
- **Brave Browser** — Features a light, information-dense UI with a strong brand color (purple/blue), using it effectively for primary actions and highlights.
- **Notion** — Utilizes a spacious, white canvas for most content, with a strong emphasis on clear typography and functional, muted UI elements, similar to Proton's 'digital sanctuary' feel.
- **Linear** — Known for a clean, highly functional UI with a deliberate use of whitespace and a limited, yet effective, accent color to guide user interaction.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #f6f7f9;
  --color-stone-gray: #e5e7eb;
  --color-iron-gray: #4b5563;
  --color-ash-gray: #9ca3af;
  --color-privacy-violet: #372580;
  --color-action-violet: #6d4aff;
  --color-lavender-glow: #e2dbff;
  --color-twilight-gradient: #c5b7ff;
  --font-protonserif: 'ProtonSerif', Georgia;
  --font-protonsans: 'ProtonSans', Inter;
  --text-caption: 12px;
  --leading-caption: 1.55;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.63;
  --tracking-subheading: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 30px;
  --leading-heading: 1.16;
  --tracking-heading: -0.48px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.6px;
  --text-display: 48px;
  --leading-display: 1.11;
  --tracking-display: -0.72px;
  --text-display-lg: 60px;
  --leading-display-lg: 1.06;
  --tracking-display-lg: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-137: 137px;
  --spacing-176: 176px;
  --spacing-201: 201px;
  --spacing-265: 265px;
  --radius-cards: 24px;
  --radius-buttons: 9999px;
  --radius-general: 2px;
  --radius-navitems: 6px;
  --shadow-xl: rgb(109, 74, 255) 0px 0px 0px 2px inset;
  --surface-canvas-white: #ffffff;
  --surface-cloud-gray: #f6f7f9;
  --surface-lavender-glow: #e2dbff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #ffffff;
  --color-cloud-gray: #f6f7f9;
  --color-stone-gray: #e5e7eb;
  --color-iron-gray: #4b5563;
  --color-ash-gray: #9ca3af;
  --color-privacy-violet: #372580;
  --color-action-violet: #6d4aff;
  --color-lavender-glow: #e2dbff;
  --color-twilight-gradient: #c5b7ff;
  --font-protonserif: 'ProtonSerif', Georgia;
  --font-protonsans: 'ProtonSans', Inter;
  --text-caption: 12px;
  --leading-caption: 1.55;
  --tracking-caption: 0px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 18px;
  --leading-subheading: 1.63;
  --tracking-subheading: 0px;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: 0px;
  --text-heading: 30px;
  --leading-heading: 1.16;
  --tracking-heading: -0.48px;
  --text-heading-lg: 36px;
  --leading-heading-lg: 1.13;
  --tracking-heading-lg: -0.6px;
  --text-display: 48px;
  --leading-display: 1.11;
  --tracking-display: -0.72px;
  --text-display-lg: 60px;
  --leading-display-lg: 1.06;
  --tracking-display-lg: -0.96px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-96: 96px;
  --spacing-137: 137px;
  --spacing-176: 176px;
  --spacing-201: 201px;
  --spacing-265: 265px;
  --radius-cards: 24px;
  --radius-buttons: 9999px;
  --radius-general: 2px;
  --radius-navitems: 6px;
  --shadow-xl: rgb(109, 74, 255) 0px 0px 0px 2px inset;
  --surface-canvas-white: #ffffff;
  --surface-cloud-gray: #f6f7f9;
  --surface-lavender-glow: #e2dbff;
}
```

---
version: alpha
name: "Firecrawl"
description: "Firecrawl employs a crisp, data-centric interface with a strong emphasis on clean surfaces and a single vibrant accent color. Typography is confident and precise, prioritizing legibility and structure over decorative flair. Components are lightweight and interaction focused, using subtle borders and shadows to define hierarchy rather than heavy fills. The overall impression is one of efficiency and directness, designed for developers engaging with AI tools."
theme: "light"
industry: "ai"
source_url: "https://www.firecrawl.dev"
refero_style_id: "78fec83e-4b27-44ab-9f64-31e9dee53e46"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507924014-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777507924014-thumb.jpg"
extracted_at: "2026-04-30T00:12:29.417Z"
---

# Firecrawl — Style Reference

> Whiteboard blueprints, with a single neon 'active' indicator.

**Theme:** light

**Industry:** ai

Firecrawl employs a crisp, data-centric interface with a strong emphasis on clean surfaces and a single vibrant accent color. Typography is confident and precise, prioritizing legibility and structure over decorative flair. Components are lightweight and interaction focused, using subtle borders and shadows to define hierarchy rather than heavy fills. The overall impression is one of efficiency and directness, designed for developers engaging with AI tools.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Fire Orange | #ff4d00 | `--color-fire-orange` | Orange action color for filled buttons, selected navigation states, and focused conversion moments |
| Code Blue | #006fff | `--color-code-blue` | Code snippet syntax highlighting and informational text, offering a distinct visual cue for technical content |
| Cloud Canvas | #e5e7eb | `--color-cloud-canvas` | Dominant background for the page, setting a light, open tone. Also used for neutral borders, ensuring divisions are subtle |
| Ink Black | #262626 | `--color-ink-black` | Secondary body text, navigation labels, and subdued headings. Do not promote it to the primary CTA color |
| Paper White | #f9f9f9 | `--color-paper-white` | Card surfaces and elevated elements, creating a subtle lift from the main canvas without harsh contrast |
| Slate Gray | #727272 | `--color-slate-gray` | Secondary text, disabled states, and subtle icon detailing, providing a softer visual presence than primary text |
| Stone Gray | #616161 | `--color-stone-gray` | Muted link text and less prominent body copy, contributing to visual hierarchy |
| Silver Mist | #949494 | `--color-silver-mist` | Helper text, placeholders, and subtle strokes in icons, receding into the background for less critical information |
| Frost Gray | #c7c7c7 | `--color-frost-gray` | Decorative lines, very faint borders, and subtle separating elements |
| Pale Sienna | #fcddcc | `--color-pale-sienna` | Gray supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Powder Pink | #febec2 | `--color-powder-pink` | Accent in subtle shadow layers, providing a soft, almost imperceptible warmth |

## Tokens — Typography

### suisse

- **Token:** `--font-suisse`
- **Substitute:** Inter
- **Weights:** 400, 450, 500
- **Sizes:** 10px, 12px, 13px, 14px, 15px, 16px, 20px, 24px, 40px, 52px, 60px
- **Line heights:** 1.00, 1.07, 1.08, 1.10, 1.20, 1.33, 1.40, 1.43, 1.50, 1.54, 1.60, 1.67
- **Letter spacing:** -0.0100em at 60px, -0.0050em at 52px, 0.0100em at 10-15px, 0.0200em at 14px
- **Role:** The primary typeface for all interface text, from headings to body copy, offering a clean and structured appearance. Its range of weights and optical adjustments for larger sizes ensure flexibility and impact.

### GeistMono

- **Token:** `--font-geistmono`
- **Substitute:** SF Mono
- **Weights:** 400, 500
- **Sizes:** 12px, 13px, 14px
- **Line heights:** 1.33, 1.54, 1.57
- **Letter spacing:** normal
- **Role:** Used for code snippets and technical examples, providing a clear, fixed-width presentation that distinguishes it from other interface text.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 10px | 1.4 | 0.1px | `--text-caption` |
| body | 14px | 1.54 | — | `--text-body` |
| body-lg | 16px | 1.6 | — | `--text-body-lg` |
| subheading | 20px | 1.43 | — | `--text-subheading` |
| heading | 24px | 1.33 | — | `--text-heading` |
| heading-lg | 40px | 1.1 | — | `--text-heading-lg` |
| display | 52px | 1.07 | -0.52px | `--text-display` |
| display-lg | 60px | 1 | -0.6px | `--text-display-lg` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-6 | 6px | `--spacing-6` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-9 | 9px | `--spacing-9` |
| spacing-10 | 10px | `--spacing-10` |
| spacing-11 | 11px | `--spacing-11` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-15 | 15px | `--spacing-15` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-18 | 18px | `--spacing-18` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-21 | 21px | `--spacing-21` |
| spacing-22 | 22px | `--spacing-22` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-25 | 25px | `--spacing-25` |
| spacing-28 | 28px | `--spacing-28` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-34 | 34px | `--spacing-34` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-42 | 42px | `--spacing-42` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-64 | 64px | `--spacing-64` |
| spacing-68 | 68px | `--spacing-68` |
| spacing-72 | 72px | `--spacing-72` |
| spacing-76 | 76px | `--spacing-76` |
| spacing-80 | 80px | `--spacing-80` |
| spacing-88 | 88px | `--spacing-88` |
| spacing-92 | 92px | `--spacing-92` |
| spacing-109 | 109px | `--spacing-109` |
| spacing-111 | 111px | `--spacing-111` |
| spacing-119 | 119px | `--spacing-119` |
| spacing-143 | 143px | `--spacing-143` |
| spacing-164 | 164px | `--spacing-164` |
| spacing-165 | 165px | `--spacing-165` |
| spacing-188 | 188px | `--spacing-188` |
| spacing-231 | 231px | `--spacing-231` |
| spacing-248 | 248px | `--spacing-248` |
| spacing-297 | 297px | `--spacing-297` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 999px |
| cards | 16px |
| inputs | 8px |
| buttons | 999px |
| menuItems | 8px |

### Shadows

| Name | Value | Token |
| --- | --- | --- |
| xl | rgb(249, 249, 249) 0px 0px 0px 6px | `--shadow-xl` |
| xl-2 | rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px | `--shadow-xl-2` |
| xl-3 | rgba(0, 0, 0, 0.03) 0px 24px 32px -12px, rgba(0, 0, 0, 0.03) 0px 16px 24px -8px, rgba(0, 0, 0, 0.03) 0px 8px 16px -4px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px | `--shadow-xl-3` |
| xl-4 | color(display-p3 0.984314 0.984314 0.984314) 0px 0px 0px 8px | `--shadow-xl-4` |
| xl-5 | rgb(253, 253, 253) 0px 0px 0px 8px | `--shadow-xl-5` |
| xl-6 | rgba(0, 0, 0, 0.02) 0px 0px 44px 0px, rgba(0, 0, 0, 0.03) 0px 88px 56px -20px, rgba(0, 0, 0, 0.02) 0px 56px 56px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(249, 249, 249) 0px 0px 0px 10px | `--shadow-xl-6` |

### Layout Tokens

| Name | Value |
| --- | --- |
| pageMaxWidth | 1200px |
| sectionGap | 164px |
| cardPadding | 16px |
| elementGap | 12px |

## Components

### Primary Action Button

**Role:** Calls to action, signup, and key interactive elements.

Filled with Fire Orange (#ff4d00), white text, fully rounded (999px radius), with padding varied by context but commonly 12px vertical, 24px horizontal.

### Ghost Button

**Role:** Secondary actions that need less emphasis, often next to a primary button.

Transparent background, Ink Black (#262626) text, 999px radius, 12px vertical, 24px horizontal padding, with a subtle Cloud Canvas (#e5e7eb) border upon interaction or focus.

### Navigation Link Button

**Role:** Navigation items in headers and footers.

Transparent background, Ink Black (#262626) text at rgba(0, 0, 0, 0.56) for inactive, 0px radius, 6px padding.

### Feature Card

**Role:** Showcasing product features or benefits.

Paper White (#f9f9f9) background, 16px border-radius, with a subtle multi-layer shadow effect for elevation: rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px.

### Hero Input Field

**Role:** Main input for search/URL, prominent on hero section.

Transparent background, Ink Black (#262626) text, Cloud Canvas (#e5e7eb) border, no explicit border-radius (default 0px is observed), but contained within a larger card that provides overall curvature.

### Code Block Card

**Role:** Displaying code examples, with syntax highlighting.

Paper White (#f9f9f9) background, 20px border-radius, with a comprehensive multi-layer shadow stack (including a 10px rgb(249, 249, 249) inner shadow) for significant elevation and visual separation.

## Do's and Don'ts

### Do

- Always use Fire Orange (#ff4d00) for primary interactive elements and key brand callouts.
- Maintain a clear visual hierarchy using Ink Black (#262626) for primary text and Slate Gray (#727272) or Stone Gray (#616161) for secondary text.
- Apply Cloud Canvas (#e5e7eb) as the page background and Paper White (#f9f9f9) for elevated card surfaces.
- Use Suisse typeface for all UI text, selecting weights 400 for body, 450 for subheadings, and 500 for main headings.
- Round all buttons and tags with a 999px border-radius for distinct pill-shaped components.
- Utilize a 1px Cloud Canvas (#e5e7eb) border for subtle visual separation of elements and boundaries.
- Implement the multi-layer shadow for Feature Cards to create a feeling of subtle elevation and depth.

### Don't

- Avoid introducing additional saturated colors; maintain the Fire Orange (#ff4d00) as the sole vibrant accent for consistency.
- Do not use heavy, opaque backgrounds for cards or panels; leverage transparency and subtle shadows for layering.
- Never compromise text contrast; ensure all text meets AAA accessibility standards against its background.
- Do not use generic square buttons; all actionable buttons should have a 999px border radius.
- Avoid excessively ornate or pictorial imagery; prefer simple icons, product mockups, or abstract data visualizations.
- Do not use arbitrary spacing; adhere to the 4px base unit and established element, card, and section gaps.
- Avoid bolding or italicizing large blocks of text; rely on font weight and size hierarchy with the Suisse typeface.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas | #e5e7eb | The primary background for the entire page, providing a consistent, light base. |
| 1 | Card Base | #f9f9f9 | Used for standard card backgrounds and slightly elevated sections, creating gentle separation from the canvas. |
| 2 | Elevated Card | #ffffff | Applied to more prominent interactive cards or panels, enhanced with shadows for distinct layering. |

## Elevation

- **Feature Card:** `rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px`
- **Code Block Card:** `rgba(0, 0, 0, 0.02) 0px 0px 44px 0px, rgba(0, 0, 0, 0.03) 0px 88px 56px -20px, rgba(0, 0, 0, 0.02) 0px 56px 56px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(249, 249, 249) 0px 0px 0px 10px`

## Imagery

The visual language focuses on minimalist product-centric graphics. Photography is absent. Illustrations are stylized, flat, and often abstract, emphasizing geometric forms and subtle outlines. Icons are outlined, conveying functionality without visual weight. Product screenshots or code blocks are presented within clean card elements. Imagery serves to explain content or showcase product interfaces rather than for decorative atmosphere. The overall density is text-dominant, with graphics used sparingly and purposefully.

## Layout

The page maintains a centered, max-width layout, approximately 1200px wide, with generous horizontal padding. The hero section features a centered headline and a large input with call-to-action, set against the Cloud Canvas background. Sections are separated by consistent vertical spacing, often 164px, with subtle borders or faint background shifts. Content is arranged in alternating single-column stacks and two-to-three column card grids for features and examples. The navigation is a sticky top bar with clearly defined links and a prominent Fire Orange primary action button.

## Similar Brands

- **Vercel** — Similar focus on developer tools, clean minimalist UI, prominent call-to-action color against a largely achromatic palette, and structured content presentation.
- **Stripe** — Adopts a very light background, crisp typography, and uses a single vibrant accent color to highlight interactions and brand elements.
- **Linear** — Utilizes a highly structured grid, muted surface colors, and a strong emphasis on precise typography for a functional and developer-oriented experience.
- **Supabase** — Offers a clean, technical aesthetic with clear content separation, prominent code examples, and focused use of a single strong accent color.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-fire-orange: #ff4d00;
  --color-code-blue: #006fff;
  --color-cloud-canvas: #e5e7eb;
  --color-ink-black: #262626;
  --color-paper-white: #f9f9f9;
  --color-slate-gray: #727272;
  --color-stone-gray: #616161;
  --color-silver-mist: #949494;
  --color-frost-gray: #c7c7c7;
  --color-pale-sienna: #fcddcc;
  --color-powder-pink: #febec2;
  --font-suisse: 'suisse', Inter;
  --font-geistmono: 'GeistMono', SF Mono;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.1px;
  --text-body: 14px;
  --leading-body: 1.54;
  --text-body-lg: 16px;
  --leading-body-lg: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.43;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --text-display: 52px;
  --leading-display: 1.07;
  --tracking-display: -0.52px;
  --text-display-lg: 60px;
  --leading-display-lg: 1;
  --tracking-display-lg: -0.6px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-72: 72px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-92: 92px;
  --spacing-109: 109px;
  --spacing-111: 111px;
  --spacing-119: 119px;
  --spacing-143: 143px;
  --spacing-164: 164px;
  --spacing-165: 165px;
  --spacing-188: 188px;
  --spacing-231: 231px;
  --spacing-248: 248px;
  --spacing-297: 297px;
  --radius-tags: 999px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 999px;
  --radius-menuitems: 8px;
  --shadow-xl: rgb(249, 249, 249) 0px 0px 0px 6px;
  --shadow-xl-2: rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
  --shadow-xl-3: rgba(0, 0, 0, 0.03) 0px 24px 32px -12px, rgba(0, 0, 0, 0.03) 0px 16px 24px -8px, rgba(0, 0, 0, 0.03) 0px 8px 16px -4px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
  --shadow-xl-4: color(display-p3 0.984314 0.984314 0.984314) 0px 0px 0px 8px;
  --shadow-xl-5: rgb(253, 253, 253) 0px 0px 0px 8px;
  --shadow-xl-6: rgba(0, 0, 0, 0.02) 0px 0px 44px 0px, rgba(0, 0, 0, 0.03) 0px 88px 56px -20px, rgba(0, 0, 0, 0.02) 0px 56px 56px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(249, 249, 249) 0px 0px 0px 10px;
  --surface-canvas: #e5e7eb;
  --surface-card-base: #f9f9f9;
  --surface-elevated-card: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-fire-orange: #ff4d00;
  --color-code-blue: #006fff;
  --color-cloud-canvas: #e5e7eb;
  --color-ink-black: #262626;
  --color-paper-white: #f9f9f9;
  --color-slate-gray: #727272;
  --color-stone-gray: #616161;
  --color-silver-mist: #949494;
  --color-frost-gray: #c7c7c7;
  --color-pale-sienna: #fcddcc;
  --color-powder-pink: #febec2;
  --font-suisse: 'suisse', Inter;
  --font-geistmono: 'GeistMono', SF Mono;
  --text-caption: 10px;
  --leading-caption: 1.4;
  --tracking-caption: 0.1px;
  --text-body: 14px;
  --leading-body: 1.54;
  --text-body-lg: 16px;
  --leading-body-lg: 1.6;
  --text-subheading: 20px;
  --leading-subheading: 1.43;
  --text-heading: 24px;
  --leading-heading: 1.33;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.1;
  --text-display: 52px;
  --leading-display: 1.07;
  --tracking-display: -0.52px;
  --text-display-lg: 60px;
  --leading-display-lg: 1;
  --tracking-display-lg: -0.6px;
  --spacing-4: 4px;
  --spacing-6: 6px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-9: 9px;
  --spacing-10: 10px;
  --spacing-11: 11px;
  --spacing-12: 12px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-15: 15px;
  --spacing-16: 16px;
  --spacing-18: 18px;
  --spacing-20: 20px;
  --spacing-21: 21px;
  --spacing-22: 22px;
  --spacing-24: 24px;
  --spacing-25: 25px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-34: 34px;
  --spacing-40: 40px;
  --spacing-42: 42px;
  --spacing-45: 45px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-72: 72px;
  --spacing-76: 76px;
  --spacing-80: 80px;
  --spacing-88: 88px;
  --spacing-92: 92px;
  --spacing-109: 109px;
  --spacing-111: 111px;
  --spacing-119: 119px;
  --spacing-143: 143px;
  --spacing-164: 164px;
  --spacing-165: 165px;
  --spacing-188: 188px;
  --spacing-231: 231px;
  --spacing-248: 248px;
  --spacing-297: 297px;
  --radius-tags: 999px;
  --radius-cards: 16px;
  --radius-inputs: 8px;
  --radius-buttons: 999px;
  --radius-menuitems: 8px;
  --shadow-xl: rgb(249, 249, 249) 0px 0px 0px 6px;
  --shadow-xl-2: rgba(0, 0, 0, 0.02) 0px 40px 48px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
  --shadow-xl-3: rgba(0, 0, 0, 0.03) 0px 24px 32px -12px, rgba(0, 0, 0, 0.03) 0px 16px 24px -8px, rgba(0, 0, 0, 0.03) 0px 8px 16px -4px, rgba(0, 0, 0, 0.03) 0px 0px 0px 1px;
  --shadow-xl-4: color(display-p3 0.984314 0.984314 0.984314) 0px 0px 0px 8px;
  --shadow-xl-5: rgb(253, 253, 253) 0px 0px 0px 8px;
  --shadow-xl-6: rgba(0, 0, 0, 0.02) 0px 0px 44px 0px, rgba(0, 0, 0, 0.03) 0px 88px 56px -20px, rgba(0, 0, 0, 0.02) 0px 56px 56px -20px, rgba(0, 0, 0, 0.03) 0px 32px 32px -20px, rgba(0, 0, 0, 0.03) 0px 16px 24px -12px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(249, 249, 249) 0px 0px 0px 10px;
  --surface-canvas: #e5e7eb;
  --surface-card-base: #f9f9f9;
  --surface-elevated-card: #ffffff;
}
```

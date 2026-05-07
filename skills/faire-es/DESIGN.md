---
version: alpha
name: "Faire ES"
description: "Faire presents a warm, artisanal marketplace aesthetic, balancing utility with a handcrafted feel. Predominantly light surfaces provide a clean backdrop for product showcases, punctuated by a soft, moderate yellow that adds a unique brand signature. Typography combines a sturdy sans-serif for functional text with a distinct serif for headlines, creating an approachable yet authoritative voice. Component shapes exhibit soft, approachable corners, reinforcing the friendly marketplace identity."
theme: "light"
industry: "ecommerce"
source_url: "https://www.faire.com"
refero_style_id: "6fb648be-cc69-4a84-a798-9f0f006922a0"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510030978-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777510030978-thumb.jpg"
extracted_at: "2026-04-30T00:47:36.282Z"
---

# Faire ES — Style Reference

> Warm artisanal marketplace.

**Theme:** light

**Industry:** ecommerce

Faire presents a warm, artisanal marketplace aesthetic, balancing utility with a handcrafted feel. Predominantly light surfaces provide a clean backdrop for product showcases, punctuated by a soft, moderate yellow that adds a unique brand signature. Typography combines a sturdy sans-serif for functional text with a distinct serif for headlines, creating an approachable yet authoritative voice. Component shapes exhibit soft, approachable corners, reinforcing the friendly marketplace identity.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Canvas White | #fbf8f6 | `--color-canvas-white` | Page background; a slightly off-white serving as the primary content surface |
| Surface White | #ffffff | `--color-surface-white` | Elevated surfaces, card backgrounds, and button fills |
| Ink Black | #000000 | `--color-ink-black` | Primary text, strong borders, and icons |
| Graphite | #333333 | `--color-graphite` | Secondary text, input text, and default button text |
| Fog Gray | #dadada | `--color-fog-gray` | Subtle borders, dividers, and ghost button outlines |
| Storm Gray | #6c6a6a | `--color-storm-gray` | Muted text, helper text, and less prominent borders |
| Market Yellow | #f1f29f | `--color-market-yellow` | Decorative highlights, accent text, and elements requiring a distinct, warm emphasis |
| Toastify Light Text | #757575 | `--color-toastify-light-text` | Text color specifically for light-themed toast notifications |

## Tokens — Typography

### Graphik

- **Token:** `--font-graphik`
- **Substitute:** Inter
- **Weights:** 100, 400
- **Sizes:** 14px, 16px, 18px, 22px, 28px, 30px
- **Line heights:** 1.20, 1.25, 1.27, 1.43, 1.44, 1.45, 1.50
- **Letter spacing:** 0.0050em (at 30px), 0.0080em (at 28px), 0.0090em (at 22px), 0.0110em (at 14px); tracking loosens at smaller sizes.
- **Role:** Primary sans-serif for body text, general UI elements, and subheadings. Weight 400 maintains approachability throughout the interface.

### Graphik_fix

- **Token:** `--font-graphik-fix`
- **Substitute:** Inter
- **Weights:** 400
- **Sizes:** 14px, 16px
- **Line heights:** 1.43, 1.50
- **Letter spacing:** 0.0090em (at 16px), 0.0110em (at 14px); slightly wider tracking for functional elements.
- **Role:** Used for specific functional text, like input fields and small buttons, ensuring readability.

### nantes

- **Token:** `--font-nantes`
- **Substitute:** Merriweather
- **Weights:** 400
- **Sizes:** 22px, 30px, 38px, 52px
- **Line heights:** 1.23, 1.27, 1.32, 1.45
- **Letter spacing:** normal
- **Role:** Distinct serif for prominent headlines, adding character and a hint of classic craftsmanship. Letter spacing is neutral, allowing the serif forms to breathe.

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 14px | 1.43 | — | `--text-caption` |
| body-sm | 16px | 1.43 | — | `--text-body-sm` |
| body | 18px | 1.43 | — | `--text-body` |
| body-lg | 22px | 1.43 | — | `--text-body-lg` |
| heading-sm | 28px | 1.3 | — | `--text-heading-sm` |
| heading | 30px | 1.3 | — | `--text-heading` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-4 | 4px | `--spacing-4` |
| spacing-7 | 7px | `--spacing-7` |
| spacing-8 | 8px | `--spacing-8` |
| spacing-12 | 12px | `--spacing-12` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-23 | 23px | `--spacing-23` |
| spacing-24 | 24px | `--spacing-24` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-48 | 48px | `--spacing-48` |
| spacing-56 | 56px | `--spacing-56` |
| spacing-99 | 99px | `--spacing-99` |

### Border Radius

| Element | Value |
| --- | --- |
| tags | 40px |
| cards | 4px |
| search | 999px |
| buttons | 4px |
| default | 4px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 48px |
| cardPadding | 16px |
| elementGap | 16px |

## Components

### Navigation Link

**Role:** Navigational elements in headers and footers.

Text link, color: Ink Black (#000000), no background, no border, no padding. Hover states subtly change color.

### Text Button

**Role:** Low-prominence actions, often inline or secondary.

backgroundColor=rgba(0, 0, 0, 0), color=Graphite (#333333), borderRadius=0px, no padding. Visually similar to a link but carries button semantics.

### Default Button

**Role:** General purpose buttons.

backgroundColor=Surface White (#ffffff), color=Graphite (#333333), border: 1px solid Graphite (#333333) or Fog Gray (#dadada), borderRadius=4px, horizontal padding=23-24px, no vertical padding. Minimalist, outlined appearance.

### Primary Action Button

**Role:** Prominent calls to action, typically for sign-up or purchase.

backgroundColor=Ink Black (#000000), color=Surface White (#ffffff), borderRadius=4px, horizontal padding=23-24px, no vertical padding. Provides strong contrast for key actions.

### Pill Button

**Role:** Category filters or tags.

backgroundColor=rgba(0, 0, 0, 0), color=Ink Black (#000000), border: 1px solid Ink Black (#000000), borderRadius=999px (fully rounded), no padding. Emphasizes selection or categorization.

### Search Input Field

**Role:** Allows users to search for content.

backgroundColor=rgba(0, 0, 0, 0), color=Graphite (#333333), border: 1px solid Ink Black (#000000), borderRadius=999px, padding-left=48px (for icon). Placeholder text in Storm Gray (#6c6a6a).

### Product Card

**Role:** Displaying product items in grids.

backgroundColor=Surface White (#ffffff), borderRadius=4px, padding=16px. Features a muted border of Fog Gray (#dadada) or no border based on context. Imagery has 4px radius.

### Category Tag

**Role:** Labeling and filtering content categories.

backgroundColor=Surface White (#ffffff), color=Graphite (#333333), border: 1px solid Fog Gray (#dadada), borderRadius=40px, padding: 4px vertical, 7px horizontal. Features a distinct, larger radius than buttons.

## Do's and Don'ts

### Do

- Use Market Yellow (#f1f29f) sparingly for illustrative highlights or soft decorative elements, not for interactive states.
- Apply Graphik weight 400 for all body text and UI labels, ensuring consistent readability across the interface.
- Reserve the nantes typeface exclusively for prominent headlines (22px to 52px), leveraging its distinctive serif character.
- Maintain a default border-radius of 4px for all cards, buttons, and visual containers, providing a subtle softness.
- Utilize Ink Black (#000000) for primary CTAs to create a strong, clear intention, paired with Surface White (#ffffff) text.
- Employ Canvas White (#fbf8f6) as the base page background, providing a subtle, warm off-white canvas.
- Ensure button padding consistently uses horizontal values of 23-24px and no vertical padding, maintaining a compact appearance.

### Don't

- Do not use Market Yellow (#f1f29f) for actionable elements like buttons or links; it is a decorative accent.
- Avoid using multiple font weights within a single text element; stick to the defined weights for Graphik (100, 400) and nantes (400).
- Do not apply sharp 0px corners to interactive elements; maintain a minimum 4px radius for a consistent, approachable feel.
- Never use full-width sections without horizontal padding; ensure a minimum 48px left and right padding on large screens.
- Avoid using a border on product images unless it serves a specific functional purpose; let the image content stand out clearly.
- Do not apply excessive box-shadows or elevation. The system favors subtle borders and flat surfaces for depth.
- Refrain from using saturated colors other than Market Yellow; the palette is predominantly neutral with functional semantic color sparingly applied.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | Canvas White | #fbf8f6 | Primary page background layer. |
| 1 | Surface White | #ffffff | Default background for cards, modals, and elevated UI elements. |

## Imagery

The site heavily relies on high-quality editorial photography, capturing product arrangements or models interacting with products in natural, often studio-like settings. Imagery is contained within cards or banners, rarely full-bleed, and often has a subtle 4px corner radius. The aesthetic is bright and clear, showcasing the product directly or in a relevant lifestyle context without heavy filters or abstract compositions. Icons are simple, outlined, and monochromatic, typically in Ink Black (#000000).

## Layout

The page adheres to a max-width contained layout, with content centered. The hero section often features a split layout with text on the left and a prominent visual on the right, or a centered headline over a background image. Sections are vertically stacked with consistent 48px section gaps. Content is typically arranged in alternating left/right text-image blocks or in multi-column card grids, particularly for product displays, maintaining a clean, breathable information hierarchy. A sticky top header with a prominent search bar ensures constant navigation access.

## Similar Brands

- **Etsy** — Curated marketplace with a similar emphasis on high-quality visuals and a clean, approachable aesthetic, often using subtle accent colors.
- **Shopify** — Platform aimed at sellers, featuring prominent search/navigation and a clean, function-first UI with subtle branding accents.
- **Pinterest** — Visual discovery platform with a focus on image-heavy content grids and a clean, unobtrusive UI for browsing.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-canvas-white: #fbf8f6;
  --color-surface-white: #ffffff;
  --color-ink-black: #000000;
  --color-graphite: #333333;
  --color-fog-gray: #dadada;
  --color-storm-gray: #6c6a6a;
  --color-market-yellow: #f1f29f;
  --color-toastify-light-text: #757575;
  --font-graphik: 'Graphik', Inter;
  --font-graphik-fix: 'Graphik_fix', Inter;
  --font-nantes: 'nantes', Merriweather;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body-sm: 16px;
  --leading-body-sm: 1.43;
  --text-body: 18px;
  --leading-body: 1.43;
  --text-body-lg: 22px;
  --leading-body-lg: 1.43;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.3;
  --text-heading: 30px;
  --leading-heading: 1.3;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-99: 99px;
  --radius-tags: 40px;
  --radius-cards: 4px;
  --radius-search: 999px;
  --radius-buttons: 4px;
  --radius-default: 4px;
  --surface-canvas-white: #fbf8f6;
  --surface-surface-white: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-canvas-white: #fbf8f6;
  --color-surface-white: #ffffff;
  --color-ink-black: #000000;
  --color-graphite: #333333;
  --color-fog-gray: #dadada;
  --color-storm-gray: #6c6a6a;
  --color-market-yellow: #f1f29f;
  --color-toastify-light-text: #757575;
  --font-graphik: 'Graphik', Inter;
  --font-graphik-fix: 'Graphik_fix', Inter;
  --font-nantes: 'nantes', Merriweather;
  --text-caption: 14px;
  --leading-caption: 1.43;
  --text-body-sm: 16px;
  --leading-body-sm: 1.43;
  --text-body: 18px;
  --leading-body: 1.43;
  --text-body-lg: 22px;
  --leading-body-lg: 1.43;
  --text-heading-sm: 28px;
  --leading-heading-sm: 1.3;
  --text-heading: 30px;
  --leading-heading: 1.3;
  --spacing-4: 4px;
  --spacing-7: 7px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-23: 23px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-48: 48px;
  --spacing-56: 56px;
  --spacing-99: 99px;
  --radius-tags: 40px;
  --radius-cards: 4px;
  --radius-search: 999px;
  --radius-buttons: 4px;
  --radius-default: 4px;
  --surface-canvas-white: #fbf8f6;
  --surface-surface-white: #ffffff;
}
```

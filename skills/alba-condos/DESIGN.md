---
version: alpha
name: "Alba Condos"
description: "Alba Condos employs a serene, minimalist aesthetic through a predominantly achromatic palette, emphasizing clean lines and spacious compositions. The design uses very subtle surface distinctions defined by thin borders rather than heavy shadows or color. Typography balances a delicate sans-serif with a more structured, widely tracked serif for an elevated, considered feel. Components are lightweight and ghosted, appearing as outlines that blend seamlessly into the neutral background."
theme: "light"
industry: "other"
source_url: "https://www.albacondos.com"
refero_style_id: "cca15550-7845-46c6-8b12-b69c46e1a2b4"
screenshot_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516165977-screenshot.jpg"
thumbnail_url: "https://ysxnuuuj3kqhdyj2.public.blob.vercel-storage.com/1777516165977-thumb.jpg"
extracted_at: "2026-04-30T02:29:46.706Z"
---

# Alba Condos — Style Reference

> Architectural blueprint on linen

**Theme:** light

**Industry:** other

Alba Condos employs a serene, minimalist aesthetic through a predominantly achromatic palette, emphasizing clean lines and spacious compositions. The design uses very subtle surface distinctions defined by thin borders rather than heavy shadows or color. Typography balances a delicate sans-serif with a more structured, widely tracked serif for an elevated, considered feel. Components are lightweight and ghosted, appearing as outlines that blend seamlessly into the neutral background.

## Tokens — Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| White Linen | #ffffff | `--color-white-linen` | Hairline borders, dividers, input outlines, and card edges on light surfaces. Do not promote it to the primary CTA color |
| Midnight Graphite | #000000 | `--color-midnight-graphite` | Primary text, heading text, ghost button borders, link borders, icon fills |
| Faded Stone | #737373 | `--color-faded-stone` | Muted link borders, secondary text in outline components |

## Tokens — Typography

### ABCWhyte

- **Token:** `--font-abcwhyte`
- **Substitute:** Inter
- **Weights:** 300
- **Sizes:** 12px, 14px, 16px, 24px
- **Line heights:** 1.00, 1.25, 1.29, 1.33, 1.71, 1.75
- **Letter spacing:** normal
- **Role:** Primary body text, link text, navigation items, general UI labels — its lightness maintains an airy feel across most readable content

### Ekstra

- **Token:** `--font-ekstra`
- **Substitute:** Space Grotesk
- **Weights:** 500
- **Sizes:** 13px, 16px, 18px, 24px, 40px
- **Line heights:** 1.20, 1.21, 1.50, 1.85
- **Letter spacing:** 0.021em at 13px, 0.417em at 16px, 0.750em at 24px and 40px
- **Role:** Headings, emphasized navigation, and specific accent text — its wide tracking creates a sense of gravitas and spaciousness, distinguishing it from the body text

### Type Scale

| Role | Size | Line Height | Letter Spacing | Token |
| --- | --- | --- | --- | --- |
| caption | 12px | 1.75 | — | `--text-caption` |
| body | 14px | 1.71 | — | `--text-body` |
| heading | 24px | 1.25 | 0.75px | `--text-heading` |
| display | 40px | 1.2 | 0.75px | `--text-display` |

## Tokens — Spacing & Shapes

### Spacing Scale

| Name | Value | Token |
| --- | --- | --- |
| spacing-13 | 13px | `--spacing-13` |
| spacing-14 | 14px | `--spacing-14` |
| spacing-16 | 16px | `--spacing-16` |
| spacing-20 | 20px | `--spacing-20` |
| spacing-30 | 30px | `--spacing-30` |
| spacing-32 | 32px | `--spacing-32` |
| spacing-40 | 40px | `--spacing-40` |
| spacing-45 | 45px | `--spacing-45` |
| spacing-58 | 58px | `--spacing-58` |
| spacing-60 | 60px | `--spacing-60` |
| spacing-97 | 97px | `--spacing-97` |
| spacing-115 | 115px | `--spacing-115` |
| spacing-155 | 155px | `--spacing-155` |
| spacing-288 | 288px | `--spacing-288` |

### Border Radius

| Element | Value |
| --- | --- |
| links | 22.5px |
| buttons | 22.5px |
| navItems | 22.5px |

### Layout Tokens

| Name | Value |
| --- | --- |
| sectionGap | 60px |
| cardPadding | 14px |
| elementGap | 14px |

## Components

### Ghost Navigation Button

**Role:** Primary navigation interaction and site registration

Text in Midnight Graphite, border in Midnight Graphite at 1px, background transparent White Linen, 22.5px border-radius. Padding 0px vertical, 14px horizontal.

### Ghost Tag Button

**Role:** Secondary navigation and filtering, used for interactive tags like 'Residence' or 'Neighbourhood'

Text in Midnight Graphite, border in Faded Stone at 1px, background transparent White Linen, 22.5px border-radius. Padding 0px vertical, 14px horizontal.

## Do's and Don'ts

### Do

- Use White Linen (#ffffff) for all main background surfaces to maintain a clean, airy canvas.
- Apply Midnight Graphite (#000000) for all primary text, headings, and outlines of ghost components.
- Employ ABCWhyte (300 weight) for readable body text and navigation where a delicate presence is desired.
- Utilize Ekstra (500 weight) with significant letter-spacing for all headings and emphasized branding text to establish visual weight and rhythm.
- Maintain a generous elementGap of 14px between most inline features and a sectionGap of 60px between major content blocks.
- Apply a consistent 22.5px border-radius to all buttons, navigation items, and interactive links to soften interactions.
- Define interactive elements primarily through a 1px border using Midnight Graphite or Faded Stone against a transparent background.

### Don't

- Avoid using solid background colors for interactive elements; prefer ghosted appearances with borders.
- Do not introduce strong accent colors; the palette is strictly achromatic to preserve the serene atmosphere.
- Do not apply drop shadows or heavy elevation to components; surfaces should maintain a flat, architectural feel.
- Refrain from using bold or heavy weights for ABCWhyte; its lightness is crucial to the brand's typographic tone.
- Do not deviate from the specified letter-spacing for Ekstra; the wide tracking is a signature visual characteristic.
- Avoid tight spacing between elements or sections; the design relies on ample whitespace.
- Do not use default browser link styling; all links should conform to the outlined ghost button style.

## Surfaces

| Level | Name | Value | Purpose |
| --- | --- | --- | --- |
| — | White Linen Canvas | #ffffff | Dominant page background, providing an expansive, bright foundation. |

## Imagery

No prominent imagery is detected in the provided context, suggesting a UI-dominant, text-focused approach. Any future imagery should be treated to complement the minimalist, elegant tone, likely as full-bleed, high-quality photography or subtle abstract graphics.

## Layout

The page uses a maximum-width contained model where content is centered, ensuring readability. The hero section features a centered headline and body text, allowing for a strong initial statement without visual clutter. Section rhythm is predominantly consistent vertical spacing, creating an open, unhurried flow. Content arrangements are generally centered stacks of text, with interactive elements like 'Residence' appearing as subtly outlined tags floating within the whitespace. Navigation is minimal, consisting of top-right 'Register' and 'Menu' ghost buttons, and a persistent brand logo on the top-left.

## Similar Brands

- **Fathom Analytics** — Monochromatic, spacious layout with ghost buttons and refined typography.
- **Linear** — Emphasis on subtle borders, minimal color, and deliberate typography for a sophisticated UI.
- **Gather Content** — Uses a very light page background with borders defining interactive elements, minimal use of color for actions.
- **Pleasure Magazine** — High-end editorial feel with ample whitespace, delicate typography, and a subdued color palette.

## Quick Start

### CSS Custom Properties

```css
:root {
  --color-white-linen: #ffffff;
  --color-midnight-graphite: #000000;
  --color-faded-stone: #737373;
  --font-abcwhyte: 'ABCWhyte', Inter;
  --font-ekstra: 'Ekstra', Space Grotesk;
  --text-caption: 12px;
  --leading-caption: 1.75;
  --text-body: 14px;
  --leading-body: 1.71;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: 0.75px;
  --text-display: 40px;
  --leading-display: 1.2;
  --tracking-display: 0.75px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-97: 97px;
  --spacing-115: 115px;
  --spacing-155: 155px;
  --spacing-288: 288px;
  --radius-links: 22.5px;
  --radius-buttons: 22.5px;
  --radius-navitems: 22.5px;
  --surface-white-linen-canvas: #ffffff;
}
```

### Tailwind v4

```css
@theme {
  --color-white-linen: #ffffff;
  --color-midnight-graphite: #000000;
  --color-faded-stone: #737373;
  --font-abcwhyte: 'ABCWhyte', Inter;
  --font-ekstra: 'Ekstra', Space Grotesk;
  --text-caption: 12px;
  --leading-caption: 1.75;
  --text-body: 14px;
  --leading-body: 1.71;
  --text-heading: 24px;
  --leading-heading: 1.25;
  --tracking-heading: 0.75px;
  --text-display: 40px;
  --leading-display: 1.2;
  --tracking-display: 0.75px;
  --spacing-13: 13px;
  --spacing-14: 14px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-30: 30px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-45: 45px;
  --spacing-58: 58px;
  --spacing-60: 60px;
  --spacing-97: 97px;
  --spacing-115: 115px;
  --spacing-155: 155px;
  --spacing-288: 288px;
  --radius-links: 22.5px;
  --radius-buttons: 22.5px;
  --radius-navitems: 22.5px;
  --surface-white-linen-canvas: #ffffff;
}
```
